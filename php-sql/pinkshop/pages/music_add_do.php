<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 单独接收文件域
    $photo1=$_FILES['photo1'];

    // print_r($photo1);

    // echo '<br />';

    // echo $catagory_main.'<br/>'.$catagory_sub.'<br/>'.$title.'<br/>'.$singer.'<br/>'.$compose.'<br/>'.$writer.'<br/>'.$price.'<br/>'.$update.'<br/>'.$uri.'<br/>'.$desc.'<br/>';


    // addslashes把单双引号转义
    $desc=addslashes($_POST['desc']);

    // 数据处理
    $dt=$update?strtotime($update):time();

    // 上传头像
    $allowed=array('image/jpg','image/jpeg','image/png','image/gif');

    // 创建一个用来存放所有上传文件的服务器的路径
    $dstArr=array();
    if($photo1['name']){
        $dest=upload($photo1,$allowed,1024);
        $dstArr[]=$dest;
    }

    // print_r($dstArr);
    // echo $desc;

    // 数据入库
    $sql="INSERT INTO {$pre}music (mcid,scid,music_singer,music_title,music_compose,music_writer,music_lyric,music_price,music_url,music_dt) VALUES ($catagory_main,$catagory_sub,'$singer','$title','$compose','$writer','$desc',$price,'$uri',$dt)";

    $msql->execute($sql);

    $as=$msql->affectedRows();
    
    if($as>0){
        echo '新增音乐成功';
        echo '<p><a href="main.php?go=music_list">返回音乐列表</a> <a href="main.php?go=music_add">继续新增音乐</a></p>';

        // 获取刚刚创建的记录的ID
        $pid=$msql->insertId();

        // 所有的url
        $url="";

        // 封面入库
        if(count($dstArr)>0){

            foreach($dstArr as $item){

                $url.="($pid,$catagory_main,'$catagory_sub','$item'),";

            }

            $url=substr($url,0,-1);

            $sql="INSERT INTO {$pre}poster (pid,mcid,scid,url) VALUES $url";

            $msql->execute($sql);

            $ass=$msql->affectedRows();

            if($ass>0){
                echo '封面入库成功';
            }else{
                echo '封面入库失败';
            }

        }

    }else{
        echo '新增失败';
    }

    $msql->error();


?>