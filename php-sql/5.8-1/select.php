<?php

    header('Content-type:text/html;charset=utf8');

    // 链接数据库
    require_once('../include/common.php');

    // 查找表内所有数据
    $sql="SELECT username,id FROM user";

    // 执行语句，获取结果记录集
    $res=mysqli_query($conn,$sql);
    // print_r($res);
    
    // 从结果记录集中以数组抓取一条数据
    // $result=mysqli_fetch_array($res,MYSQL_ASSOC);
    // print_r($result);

    // 抓取所有数据
    while($result=mysqli_fetch_array($res,MYSQL_ASSOC)){
        // echo 'id:'.$result['id'].'用户名：'.$result['username'];
        // echo '<br />';
    }

    // 条件判断筛选
    $sql="SELECT username,id FROM user WHERE id>25";
    $res=mysqli_query($conn,$sql);

    while($result=mysqli_fetch_array($res)){
        // echo 'id:'.$result['id'].'用户名：'.$result['username'].'<br />';
    }

    // 条件筛选（或的关系）
    $sql="SELECT username,id FROM user WHERE id>25 OR id>24";
    $res=mysqli_query($conn,$sql);

    while($result=mysqli_fetch_array($res)){
        // echo 'id:'.$result['id'].'用户名：'.$result['username'].'<br />';
    }

    // 条件筛选（且的关系）
    $sql="SELECT username,id FROM user WHERE id>5 AND id<10";
    $res=mysqli_query($conn,$sql);

    while($result=mysqli_fetch_array($res)){
        // echo 'id:'.$result['id'].'用户名：'.$result['username'].'<br />';
    }

    // like 查找数据库相似的数据
    $sql="SELECT username,pwd FROM user WHERE username LIKE '%78%' OR pwd LIKE '%57%'";
    $res=mysqli_query($conn,$sql);

    while($result=mysqli_fetch_array($res)){
        // echo '密码:'.$result['pwd'].'用户名：'.$result['username'].'<br />';
    }


    // 排序 order by 以key进行排序 desc (正序)      order by 以key进行排序 ESC (正序)
    $sql="SELECT username,pwd FROM user WHERE username LIKE '%78%' OR pwd LIKE '%57%' ORDER BY username";
    $res=mysqli_query($conn,$sql);

    while($result=mysqli_fetch_array($res)){
        // echo '密码:'.$result['pwd'].'用户名：'.$result['username'].'<br />';
    }

    // 总和 count(*)
    $sql="SELECT count(*) AS total FROM user WHERE id>10";
    $res=mysqli_query($conn,$sql);
    while($result=mysqli_fetch_array($res)){
        // echo $result['total'].'<hr />';
    }

    // 内关联
    // inner into
    $sql="SELECT username,title,user.id FROM user INNER JOIN hobby on user.id=hobby.uid";
    $res=mysqli_query($conn,$sql);
    while($result=mysqli_fetch_array($res,MYSQL_ASSOC)){
        // echo 'id:'.$result['id'].'爱好：'.$result['title'].'用户名：'.$result['username'].'<br />';
        // print_r($result);
    }

    // 分组group by key; limit 显示几条数据  limit 从第几个显示，显示几个；
    $sql="SELECT avg(pay) AS total,uname FROM test GROUP BY uname LIMIT 2,2";
    $res=mysqli_query($conn,$sql);
    while($result=mysqli_fetch_array($res,MYSQL_ASSOC)){
        echo '用户名：'.$result['uname'].'总金额：'.$result['total'].'<br />';

    }

    
    echo mysqli_error($conn);
?>