<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    $id=intval($_GET['id']);
    $mcid=intval($_GET['mcid']);
    $scid=$_GET['scid'];
    // echo $id.$mcid.$scid;
    // 删除book记录

    $sql="DELETE FROM {$pre}movie WHERE id=$id";

    $msql->execute($sql);

    $as=$msql->affectedRows();

    if($as>0){
        echo '电影记录删除成功'.'<br />';
    }else{
        echo '电影记录删除失败'.'<br />';
    }

    // 删除封面文件（upload内容）
    $sql="SELECT url FROM {$pre}poster WHERE pid=$id AND mcid=$mcid AND scid='$scid'";

    $msql->execute($sql);

    while( $res =$msql -> fetchquery()){

        // 封面地址
        $url=$res['url'];

        if(file_exists($url)){
            @unlink($url);
        }

    }

    // if(!$res['url']){
    //     die('没有此封面');
    // }

    //删除封面 
    $sql="DELETE FROM {$pre}poster WHERE pid=$id AND mcid=$mcid AND scid='$scid'";

    $msql->execute($sql);

    $as=$msql->affectedRows();

    // echo $as;

    if($as>0){
        echo '封面删除成功'.'<br />';
    }else{
        echo '封面删除失败 或者 封面不存在'.'<br />';
    }
?>