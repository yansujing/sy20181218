<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

// 接收数据
    $catagory=$_POST['catagory'];
    $title=$_POST['title'];
    $price=$_POST['price'];

    $photo=$_FILES['photo'];

    $update=$_POST['update'];
    $switch=$_POST['switch'];


    // addslashes把单双引号转义
    $desc=addslashes($_POST['desc']);

    // 数据处理
    $switch=$switch?$switch:0;
    $dt=$update?strtotime($update):time();

    // 上传头像
    $allowed=array('image/jpg','image/jpeg','image/png','image/gif');
    $dest=upload($photo,$allowed,1024);
    // echo $desc;
    // 数据入库
    $sql="INSERT INTO {$pre}catagoty_main (cm_name) VALUES ('$title')";
    $msql->execute($sql);

    $as=$msql->affectedRows();
    
    if($as>0){
        echo '新增成功';
        echo '<p><a href="main.php?go=class_list_main">返回列表</a> <a href="main.php?go=class_add_main">继续新增</a></p>';
    }else{
        echo '新增失败';
    }

    $msql->error();


?>