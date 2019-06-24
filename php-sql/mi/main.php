<?php

    // 入口文件
    include_once('./include/common.inc.php');

    if(!$_SESSION['user']){

        jumpurl('login.html',0);

        die();
        
    }

?>