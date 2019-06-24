<?php

    require_once('./include/common.inc.php');
    

    // 接收表单数据
    $userName=trim($_POST['uname']);
    $pwd=trim($_POST['pwd']);
    // echo $userName.$pwd;

    if(!$userName||!$pwd){
        die('error001');
    }

    // 处理数据,处理密码
    $pwd=substr(sha1($pwd),3,32);

    // 检查该用户名是否已经注册
    $sql="SELECT id FROM {$pre}admin WHERE admin_username='$userName'";
    $msql->execute($sql);
    $res=$msql->fetchquery();

    if(!$res['id']){

        // 入库
        $sql="INSERT INTO {$pre}admin (admin_username,admin_pwd) VALUES ('$userName','$pwd')";
        $msql->execute($sql);
        
        $as=$msql->affectedRows();

        if($as){
            echo 'OK';
        }else{
            die('error094');
        }

    }else{
        die('error007');
    }

    $msql->error();

?>