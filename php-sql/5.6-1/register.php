<?php

    header('Content-type:text/html;charset=utf8');

   $username=$_POST['username'];
   $pwd=$_POST['pwd'];

   $hobbys=$_POST['hobby'];
   $sex=$_POST['sex'];
   $phone=$_POST['phone'];

   $files=$_FILES['file'];
    echo $username.$pwd.$sex.$phone;
    print_r($hobbys);
    print_r($files);
    
    // 判断用户名是否符合
    if(!preg_match('/^[A-z0-9]{6,12}$/',$username)){
        echo '<br />';
        die('用户名不符合！！');
    }
    echo '<br />';
    // 加密
    // echo substr(sha1($pwd),6,10);
    echo '<br />';
    
    // 上传头像
    // 本地临时文件
    $fname=$files['tmp_name'];
    // 文件名
    $newName=time();
    // echo $newName;
    // 文件的扩展名
    $pathInfo=pathinfo($files['name']);
    print_r($pathInfo);
    $extension=$pathInfo['extension'];

    // 新的文件名
    $dest='uploaded/'.$newName.'.'.$extension;
    echo $dest;
    $res=move_uploaded_file($fname,$dest);
    echo $res;
    if($res){
        echo '上传成功';
    }else{
        echo '上传失败';
    }
?>