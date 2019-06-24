<?php

    // 开启session
    session_start();

    $sessionValue=$_SESSION['uname'];

    echo $sessionValue;

?>