<?php
    header('Content-type:text/html;charset=utf8');
    // 链接数据库
     require_once('../include/common.php');

    // 查询是否有该id
    $sql="SELECT count(*) AS total FROM test WHERE id=2";
    $result=mysqli_query($conn,$sql);
    $res=mysqli_fetch_array($result,MYSQL_ASSOC);
    echo $res['total'].'<br />';
    if(!$res['total']){
        die('no datas!!!');
    }

    // 更新语句
    $sql="UPDATE test SET uname='大哈哈哈' where id=2";

    // 执行语句
    $res=mysqli_query($conn,$sql);
    // echo $res;
    echo '<hr>';


    // 影响结果
    $affectedRows=mysqli_affected_rows($conn);
    echo $affectedRows;  

    if($affectedRows>=0){
        echo 'success';

        echo '<script>';
        echo 'setTimeout(function(){ location.href="https://www.baidu.com" },2000)';
        echo '</script>';


    }else{
        echo 'fail';
    }
?>