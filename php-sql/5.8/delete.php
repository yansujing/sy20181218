<?php
    header('Content-type:text/html;charset=utf8');
    // 链接数据库
     require_once('../include/common.php');

    // 删除语句
    $sql="DELETE FROM user WHERE id=2";

    //  执行语句
    $result=mysqli_query($conn,$sql);

    // 查看执行结果
    $affectedRows=mysqli_affected_rows($conn);

    if($affectedRows){
        echo '删除成功';
    }else{
        echo '删除失败';
    }
?>