<?php

    header('Content-type:text/html;charset=utf8');

    require_once('../include/common.php');

    $sql="SELECT uname from test WHERE pay>20 AND pay<100";
    $res=mysqli_query($conn,$sql);
    while($result=mysqli_fetch_array($res)){
        echo $result['uname'];
    }

?>