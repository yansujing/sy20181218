<?php
    header('Content-type:text/html;charset=utf8');

    // 引入公用的函数文件
    include('../include/fn.php');

    /******************** ************** 接收数据**************/
    $username=trim($_POST['username']);
    $pwd=trim($_POST['pwd']);
    $mobile=trim($_POST['mobile']);
    $sex=$_POST['sex'];
    $hobby=$_POST['hobby'];
    $photo=$_FILES['photo'];
    $desc=$_POST['desc'];

    $dt=time();

    echo $username.$pwd.$mobile.$sex.$desc;
    print_r($hobby);
    print_r($photo);

    /********************************  在入库之前对数据进行处理  **********************/
    // 1.验证数据的合法性
    if(!preg_match('/^[a-z1-9]{6,12}$/',$username)){
        die('用户名填写有误');
    }

    // 2.验证头像的合法性
    if(!$photo['name']){
        die('请上传头像');
    }
    
    // 处理密码
    $pwd=substr(sha1($pwd),11,15);

    // 定义允许的文件类型
    $allowed=array('image/png','image/gif','image/jpg','image/jpeg');

    echo '<hr />';
    // 上传文件
    $res=upload($photo,$allowed,1024);
    if(!$res){
        echo '文件上传失败';
    }else{
        echo '上传成功';
    }
    echo '<hr />';

    //////////////////////////////////////////////数据入库

    // 连接数据库
    // 语法：mysqli_connect(主机名,数据用户名,数据库登录密码,要操作的数据库名称);
    $dbhost='localhost';
    $dbuser='root';
    $dbpwd='root';
    $dbname='member';
    $conn=mysqli_connect($dbhost,$dbuser,$dbpwd,$dbname);
    // if(!$conn){
    //     echo '数据库链接失败';
    // }else{
    //     echo '数据库链接成功';
    // }

    // 设置数据库链接编码（让数据库的内容不乱码）
    mysqli_query($conn,"set NAMES utf8");


    // 新增数据

    // sql语句
    $query="INSERT INTO user (username,pwd,mobile,sex,myheader,mydesc,regdate) VALUES ('$username','$pwd','$mobile','$sex','$res','$desc',$dt)";
    // $query="INSERT INTO user set username='$username';
    echo $query;

    // 执行sql语句
    mysqli_query($conn,$query);

    // 获取刚刚插入的记录ID
    $uid=mysqli_insert_id($conn);

    //////////////////////////////////// 插入兴趣爱好
    // 初始化
    $values='';

    foreach($hobby as $item){

        $values.="($uid,'$item'),";
      
    }
    // 把后面的逗号去掉
    $values=substr($values,0,-1);

      // sql语句，一次性插入多条数据
        $query="INSERT INTO hobby (uid,title) VALUES $values";

        // 执行语句
        mysqli_query($conn,$query);
    



    // 返回最近一次数据库执行错误信息
    echo mysqli_error($conn);
?>