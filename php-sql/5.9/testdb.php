<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>测试数据库的操作类</title>
</head>
<body>
    
    <table border='1' cellspacing=0>
        <tr><td>id</td><td>用户名</td></tr>

        <?php

            // 引入公用的配置文件
            require_once('../include/common.inc.php');

            // 分页
            $page=$_GET['page']?$_GET['page']:1;
            $pageRecords=3;
            $start=($page-1)*$pageRecords;

            // 页码
            // 总页码数
            $sql="SELECT COUNT(*) as total FROM user";
            
            $pagination=$msql->pagination($pageRecords,$sql,'testdb.php',$page);

            // 语句
            $sql="SELECT id,username FROM user ORDER BY id LIMIT $start,$pageRecords";

            $msql->execute($sql);

            while($res=$msql->fetchquery()){
                echo '<tr><td>'.$res['id'].'</td><td>'.$res['username'].'</td></tr>';
            }

            $msql->error();

        ?>

        <tr>
            <td colspan='3'>
                <?php
                    echo $pagination;
                ?>
            </td>
        </tr>

    </table>

</body>
</html>