<?php

    // 引入公用配置文件
    require_once('./include/common.inc.php');

    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
  
    
    // 加密
    $pwd=substr(sha1($pwd),3,32);
    // echo $uname.$pwd;
    // 比对数据库
    $sql="SELECT id FROM {$pre}admin WHERE admin_username='$uname' AND admin_pwd='$pwd' LIMIT 1";

    $msql->execute($sql,'j');
    $res=$msql->fetchquery('j');

    if(!$res['id']){
        echo 'error13';
    }else{

        // 创建session
        $_SESSION['myStoreAdmin']=$uname;

        echo 'ok';
    }


?>