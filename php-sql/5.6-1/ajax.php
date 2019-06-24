<?php
    // echo 'hello';
    header('Content-type:text/html;charset=utf8');
    
    $name=$_POST['username'];
    $word=$_POST['pwd'];
    $photo=$_FILES['photo'];
    echo $name.$word.$photo;
    print_r($photo);
?>