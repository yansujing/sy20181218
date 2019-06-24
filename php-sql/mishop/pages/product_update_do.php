<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收数据
    $id=$_POST['id'];

    $catagory=$_POST['catagory'];
    $title=$_POST['title'];
    $price=$_POST['price'];

    $photo=$_FILES['photo'];

    $update=$_POST['update'];
    $switch=$_POST['switch'];

    $desc=addslashes($_POST['desc']);

    // echo $switch;
    // 数据处理
    if(!$catagory){

        $sql="SELECT cid FROM mi_product WHERE id=$id";
        $msql->execute($sql);
        $res=$msql->fetchquery();
        
        $catagory=$res['cid'];

    }

    $switch=$switch?$switch:0;
    $dt=$update?strtotime($update):time();
    // echo $switch;

    // 判断是否重新选择了头像
    if($photo['name']){
        // echo 11;
        // echo '<br />';
        // echo $catagory.$title.$price.$switch.$dest.$dt;
        // print_r($photo);
        // echo '<br />';


        // 执行文件上传
        // 上传头像
        $allowed=array('image/jpg','image/jpeg','image/png','image/gif');
        $dest=upload($photo,$allowed,1024);

        // 修改语句
        $sql="UPDATE mi_product SET cid=$catagory,title='$title',price=$price,cover='$dest',recommend=$switch,desct='$desc',dt=$dt WHERE id=$id";

    }else{
        // echo 22;
        // echo '<br />';
        // echo $catagory.$title.$price.$switch.$dest.$dt;
        // echo '<br />';

        // 修改语句
        $sql="UPDATE mi_product SET cid=$catagory,title='$title',price=$price,recommend=$switch,desct='$desc',dt=$dt WHERE id=$id";
    }
    
    $msql->execute($sql);

    $as=$msql->affectedRows();

    if($as>=0){
        echo '修改成功<br />';
        echo '<a href="main.php?go=product_list">产品列表</a>';
    }else{
        echo '修改失败';
    }
    $msql->error();
?>