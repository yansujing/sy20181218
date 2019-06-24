<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收数据

    $title=$_POST['title'];

    // 接收一级分类ID
    $main_catatory=intval($_POST['main_catatory']);

    //重复性检查 
    $sql="SELECT id FROM {$pre}cataGory_sub WHERE pid=$main_catatory AND cs_name='". $title."' LIMIT 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    if(!$res['id']){
        // 数据入库
        $sql="INSERT INTO {$pre}catagory_sub (pid,cs_name,ico_name) VALUES ($main_catatory,'$title','$icoName')";
        $msql->execute($sql);

        $as=$msql->affectedRows();
        
        if($as>0){
            echo '新增成功';
            echo '<p><a href="main.php?go=class_list_sun">返回列表</a> <a href="main.php?go=class_add_sun">继续新增</a></p>';
        }else{
            echo '新增失败';
        }

    }else{
        die('请不要重复添加！');
    }





    $msql->error();


?>