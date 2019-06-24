<?php
    // echo 'hello';
    header('Content-type:text/html;charset=utf8');

    

    // 接收ajax数据
    $userName=$_POST['uname'];
    // $userName=$_GET['u'];
    // echo $userName;

    // 1.链接数据库
    include('../include/common.php');

    // 2.查询语句
    $query="SELECT id,mobile FROM user WHERE username='$userName'";

    // 执行语句
    $result=mysqli_query($conn,$query);


    // 4.使用 mysqli_fetch_array() 函数 从结果记录集中获取数组
    // mysqli_fetch_object() 函数 从结果记录集中获取对象
    // MYSQL_ASSOC 加上只读取关联数组
    // MYSQL_NUM 只读取数字数组
    // 默认 全部多有

    // 只读取符合条件的第一条数据
    $res=mysqli_fetch_array($result,MYSQL_ASSOC);

    // 读取符合条件的所有记录，请使用while循环
    // while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
    //     print_r($res);
    // }

    // 返回json的数据
    echo json_encode($res);

?>