<?php

    require_once('include/common.inc.php');

    // 获取数据
    $user=$_POST['user'];
    $pwd=$_POST['pwd'];

    // echo $user.$pwd;

    // 处理密码
    $pwd=substr(sha1($pwd),5,15);

    // 插入数据库
    $sql="INSERT INTO mi_admin (user,pwd) VALUES ('$user','$pwd')";
    $msql->execute($sql);
    
    $res=$msql->affectedRows();
    // echo $res;
    // echo $res;

    if($res>0){
        echo 'ok';
    }else{
        echo '添加失败';
    }

    $msql->error();

?>