<?php
    // echo 'hello';
    // 接收通过ajax提交的数据
    $uname=$_POST['username'];
    $pwd=$_POST['pwd'];

    $photo=$_FILES['photo'];
    //  传给ajax的函数的data数据中
    echo $uname.$pwd;
    print_r($photo);
?>