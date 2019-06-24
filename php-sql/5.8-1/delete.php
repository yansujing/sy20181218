<?php

    header('Content-type:text/html;charset=utf8');

    require_once('../include/common.php');

    $sql="DELETE FROM user WHERE username='严素静'";
    $res=mysqli_query($conn,$sql);

    // 查看执行结果
    $affectedRows=mysqli_affected_rows($conn);

    echo mysqli_error($conn);
?>