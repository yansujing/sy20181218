<?php

    require_once('include/common.inc.php');

    // 获取数据
    $user=$_POST['user'];
    $pwd=$_POST['pwd'];

    // echo $user.$pwd;

    // 处理密码
    $pwd=substr(sha1($pwd),5,15);

    $sql="SELECT count(*) as total FROM mi_admin WHERE user='$user' AND pwd='$pwd'";
    $msql->execute($sql);
    $res=$msql->fetchquery();
    // echo $res['total'];
    if($res['total']>0){
        echo 'ok';
    }else{
        echo '无此数据';
    }



?>