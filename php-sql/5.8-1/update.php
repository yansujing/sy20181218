<?php

    header('Content-type:text/html;charset=utf8');

    require_once('../include/common.php');

    $id=18;
    $sql="SELECT count(*) as count FROM user WHERE id=$id";
    $res=mysqli_query($conn,$sql);
    $result=mysqli_fetch_array($res);
    // print_r($result);
    if(!$result['count']){
        die('无数据');
    }

    $sql="UPDATE user SET username='颜颜' WHERE id=18";

    $res=mysqli_query($conn,$sql);

    // 这边的res一直都是等于1；
    // echo $res;

    // 改过是1，没改过，包过不找到符合的还返回0
    // $affectedRows=mysqli_affected_rows($conn);
    // echo $affectedRows;
    echo '<script>';
    echo 'setTimeout(function(){ location.href="https://www.baidu.com" },2000)';
    echo '</script>';
    

    echo mysqli_error($conn);
?>