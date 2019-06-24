<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收分类表单数据
    $title=$_POST['title'];

    // 入库
    $sql="INSERT INTO mi_class (title) VALUES ('$title')";

    $msql->execute($sql);

    $as=$msql->affectedRows();

    if($as>0){

        echo '<p>新增成功</p>';
        echo '<p><a href="main.php?go=class_list">返回列表</a> <a href="main.php?go=class_add">继续新增</a></p>';

    }else{
        echo '新增失败';
    }

    $msql->error();
?>