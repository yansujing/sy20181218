<?php

    // 开启session(注意：无论是创建、读取还是销毁session,前提是必须先开启session)
    session_start();

    // 创建一个session
    $_SESSION['uname']='jack';

?>