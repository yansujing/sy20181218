<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收表单值
    $id=$_POST['id'];

    $title=$_POST['title'];

    // 修改语句
    $sql="UPDATE mi_class SET title='$title'  WHERE id=$id";

    $msql->execute($sql);

    $as=$msql->affectedRows();

    if($as>=0){
        echo '修改成功';
        jumpurl('main.php?go=class_list',2000);
    }else{
        echo '修改失败';
    }


?>