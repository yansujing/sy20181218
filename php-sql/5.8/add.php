<?php
    header('Content-type:text/html;charset=utf8');

    //1.链接数据库
    require_once('../include/common.php');

    // 2.新增语句
    $sql="INSERT INTO user (username,pwd) VALUES ('小白','123456')"; 
    $sql="INSERT INTO user set username='小白',pwd='123456'";
    $sql="INSERT INTO user (username,pwd) VALUES ('小白','123456'),('小黑','654321')";

    // 3.执行语句
    mysqli_query($conn,$sql);

    // 补充1：获取刚刚插入记录ID
    $id=mysqli_insert_id($conn);

    // 补充2：影响的行数 （一般根据此判断是否执行成功）
    // mysqli_affected_rows():返回插入的行数
    $affectedRows=mysqli_affected_rows($conn);

    // 补充3：返回最近一次执行的错误
    $err=mysqli_error($conn);

    echo $id.'<br />';
    echo $affectedRows.'<br />';


?>