<?php
    header('Content-type:text/html;charset=utf8');

    // 链接数据库
     require_once('../include/common.php');

    //  1.查询特定字段的所有记录
    $sql="SELECT username,mobile,regdate FROM user";

    // 1.1 获取结果记录集
    $result=mysqli_query($conn,$sql);

    // 1.2从结果记录集中已数组形式抓取所有记录（只抓取关联数组）
    $res=mysqli_fetch_array($result,MYSQL_ASSOC);
    // echo '<hr />';
    // print_r($res);
    // echo $res['username'];
    // echo '<hr />';

    while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo '用户名：'.$res['username'].'手机号：'.$res['mobile'].'注册时间'.date('Y-m-d H:i:s',$res['regdate']).'<br />';
    }

    // 2.查询所有字段的所有记录，使用*号代替（不推荐）,推荐的做法是吧所有的字段都列上
    $sql="SELECT * FROM user";

    // 3.查询特定条件的记录

    // 例子1
    $sql="SELECT id,username FROM user WHERE id>=2 AND id<=5";
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo 'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    // 例子2
    $tmp=strtotime('2019-05-08');
    // echo $tmp;
    $sql="SELECT id,username FROM user WHERE $tmp<=regdate";
     $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo 'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    // 例子3 ：搜索
    $sql="SELECT id,username FROM user WHERE (username LIKE '%78%' OR pwd LIKE '%7%') AND id>10";
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo 'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    // 4.排序 ,顺序 ：where => order by key名 desc（倒序排序）      where => order by key名 esc（正序排序）
    $sql ="SELECT id,username FROM user WHERE id>2 AND ID<10 ORDER BY username DESC";
    $sql ="SELECT id,username FROM user WHERE id>1 ORDER BY id DESC";

    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo 'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }
    echo '<hr />';

    // 5.限制返回的记录数(LIMIT 要写在最后)
    // 5.1 返回符合条件最近的两条
    $sql="SELECT id,username FROM user WHERE id>1 ORDER BY id DESC LIMIT 2";
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo 'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    // 5.2 返回指定位置和条数的记录(主要做分页)
    $page=$_GET['page'] ?$_GET['page'] : 1;
    $start=($page-1)*2;
     echo '<hr />';
    // echo $start;
    $sql="SELECT id,username FROM user WHERE id>1 ORDER BY id DESC LIMIT $start,2";
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo 'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    // 6.表关联

    // 6.1 内关联 inner join on
    $sql = "SELECT user.id,username,title FROM user INNER JOIN hobby ON user.id=hobby.uid" ;
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo '爱好:'.$res['title'].'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    echo mysqli_error($conn);
    // 6.2 左关联 left join (左边表为主表,主表的所有数据都会拿出来)
    $sql = "SELECT user.id,username,title FROM user left JOIN hobby ON user.id=hobby.uid WHERE user.id>3" ;
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo '爱好:'.$res['title'].'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }
    // 6.3 有关联 right join (右边表为主表,主表的所有数据都会拿出来)
    $sql = "SELECT u.id,username,title FROM user AS u right JOIN hobby ON u.id=hobby.uid WHERE u.id>3" ;
    $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo '爱好:'.$res['title'].'id:'.$res['id'].'用户名：'.$res['username'].'<br />';
    }

    // 7聚合函数 sum()求和  avg()平均和group by 同写
    $sql="SELECT sum(pay) as total,uname from test GROUP BY uname";
     $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo '名字：'.$res['uname'].'消费总计：'.$res['total'].'<br />';
    }
     $sql="SELECT avg(pay) as total,uname from test GROUP BY uname";
     $result=mysqli_query($conn,$sql);
     while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        // echo '名字：'.$res['uname'].'消费总计：'.$res['total'].'<br />';
    }

    // 7.1 count()函数 统计次数
    $sql="SELECT count(*) as total,uname from test";
    $result=mysqli_query($conn,$sql);
    while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
        echo '下单次数：'.$res['total'].'<br />';
    }
?>