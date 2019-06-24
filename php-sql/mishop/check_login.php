<?php

    // 引入公用配置文件
    require_once('./include/common.inc.php');

    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
    // echo $uname.$pwd;
    
    // 加密
    $pwd=substr(sha1($pwd),3,32);

    // 比对数据库
    $sql="SELECT user FROM mi_admin WHERE user='$uname' AND pwd='$pwd' LIMIT 1";

    $msql->execute($sql,'j');
    $res=$msql->fetchquery('j');

    if(!$res['user']){
        echo 'error13';
    }else{

        // 创建session
        $_SESSION['mishopadmin']=$uname;

        echo 'ok';
    }


?>