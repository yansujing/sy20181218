<?php
    // 页面编码
    header('Content-type:text/html;charset=utf8');

    //限制报错
    // error_reporting(0); 


    // ///////////////////////////////////////////////////
    //接收前端表单数据
    // post 超级全局数组变量
    // 用户名
    $username=trim($_POST['username']);

    // 密码
    $password=$_POST['pwd'];

    // 爱好
    $hobby=$_POST['hobby'];

    // 性别
    $sex=$_POST['sex'];

    // 籍贯
    $province=$_POST['province'];

    // 手机号
    $mobile=$_POST['mobile'];

    // 头像
    // file文件域返回值是数组
    $header=$_FILES['photo'];

    echo $username.$password.$sex.$province.$mobile;
    print_r($hobby);
    print_r($header);
    /////////////////////////////////////////
    // 数据处理（验证、上传、加密）
    // 1.验证用户名
    // echo '<p style="color:red;">'.preg_match('/^[A-z0-9]{6,12}$/',$username).'</p>';
    if(!preg_match('/^[A-z0-9]{6,12}$/',$username)){

        die('请填写用户名'); //die之后的所有代码不执行！
    }
    // 2.密码hash加密
    $newPwd=substr(sha1($password),5,15);
    
    // 3.上传头像

    //限制上传文件的类型
    $allowed=array('image/png','image/jpg','image/jpeg','image/gif');
    if(!in_array($header['type'],$allowed)) {
        die('请上传jpg.gif或者png格式的文件');
    }

    // 3.1本地临时文件名
    $fname=$header['tmp_name'];

    // 3.1远程服务上的文件完整地址(路径不传，就是在根目录上)

    // 新命名
    // time()从公元1970年1月1日至今的毫米数
    $newFileName=time();

    // 扩展名
    $pathInfo=pathinfo($header['name']);
    $extension=$pathInfo['extension'];
    print_r($pathInfo);
    // 新的文件名
    $dest = 'upload/'.$newFileName.'.'.$extension; 
    $res=move_uploaded_file($fname,$dest);//move_uploaded_file(本地临时文件，远程服务上的文件完整地址《路径+文件名+扩展名》)

    if($res){
        echo '上传成功';
    }else{
        echo '上传失败';
    }
?>