<?php

    header('Content-type:text/html;charset=utf8');

    // $conn=mysqli_connect('localhost','root','root','member');
    // if($conn){
    //     echo '链接成功';
    // }else{
    //     echo '链接失败';
    // }

    // mysqli_query($conn,"set NAMES utf8");

    // 连接数据库
    require_once('../include/common.php');

    // 新增数据
    // 三种方式
    // $data="INSERT INTO user (username) VALUES ('严素静')";
    // $data="INSERT INTO user (username,mobile) VALUES ('哈哈','123'),('呼呼','456')"; 
    $data="INSERT INTO user SET username='花花',mobile='789'";

    // 数据上传
    $res=mysqli_query($conn,$data);
    if($res){
        echo '上传成功';
    }else{
        echo '上传失败';
    }

    // 数据上传的id
    $id=mysqli_insert_id($conn);
    echo $id;

    // 变动的行数
    $rows=mysqli_affected_rows($conn);
    echo $rows;

    // 报最近的一次错误
    echo mysqli_error($conn);

?>
