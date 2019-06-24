<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>分页</title>
</head>
<body>
    
    <table border='1' cellspacing=0>
        <tr>
            <td>ID</td>
            <td>姓名</td>
            <td>注册日期</td>
            <td>手机号</td>
            <td>操作</td>
        </tr>

        <?php
            // 限制报错（通知警告不要报错）
            error_reporting(0);

            // 链接数据库
            require_once('../include/common.php');

            //////////////////////////////////////////// 分页

            // 接收页码
            $page=$_GET['page']?$_GET['page']:1;
            
            // 每页显示3条
            $pageRecords=3;

            // 开始读取的位置
            $start=($page-1)*$pageRecords;

            // 查询语句
            $sql="SELECT COUNT(*) as total FROM user";
            $result=mysqli_query($conn,$sql);
            // 抓取数据
            $res=mysqli_fetch_array($result,MYSQL_ASSOC);

            $total=$res['total'];

            // 总共几页
            $totalPages=ceil($total/$pageRecords);

            // 创建页码
            $pagination='';
            for($i=1;$i<=$totalPages;$i++){
                $pagination.='<a href="page.php?page='.$i.'">'.$i.'</a>';
            }

            // 创建下一页
            $nextPageValue=$page+1;
            if($nextPageValue>$totalPages){
                $nextPageValue=$totalPages;
            }
            $nextPage='<a href="page.php?page='.$nextPageValue.'">'.'下一页'.'</a>';

            // 创建上一页
            $prePageValue=$page-1;
            if($prePageValue==0){
                $prePageValue='1';
            }
            $prePage='<a href="page.php?page='.$prePageValue.'">'.'上一页'.'</a>';
            
            /////////////////////////////////////////// 获取数据
            $sql="SELECT id,username,regdate,mobile FROM user ORDER BY id desc LIMIT $start,$pageRecords";

            // 执行语句
            $result=mysqli_query($conn,$sql);

            // 抓取数据
            while($res=mysqli_fetch_array($result,MYSQL_ASSOC)){
                // echo $res['id'].$res['username'].$res['regdate'].$res['mobile'].'<br />';

                // 处理日期，时间戳变年月日
                $date=date('Y-m-d',$res['regdate']);

                // 处理手机号
                if(!$res['mobile']){
                    $res['mobile']='未填写手机号';
                }

                echo '<tr><td>'.$res['id'].'</td><td>'.$res['username'].'</td><td>'.$date.'</td><td>'.$res['mobile'].'</td><td></td></tr>';
            }

            echo mysqli_error($conn);

        ?>
       <tr><td colspan='5'><?php echo $prePage.$pagination.$nextPage; ?></td></tr>

    </table>

</body>
</html>