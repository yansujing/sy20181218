<?php

  // //////////////////////////////////////
  // 限制报错
  error_reporting(0);

  // //////////////////////////数据库链接
  // 连接数据库
    $dbhost='localhost';
    $dbuser='root';
    $dbpwd='root';
    $dbname='member';
    $conn=mysqli_connect($dbhost,$dbuser,$dbpwd,$dbname);

    // 设置数据库链接编码（让数据库的内容不乱码）
    mysqli_query($conn,"set NAMES utf8");

    
?>