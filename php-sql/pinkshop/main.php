<?php

    //////////////////////// 后台管理系统入口文件

    // 引入公用配置文件
    require_once('./include/common.inc.php');

    // 登录验证
    if(!$_SESSION['myStoreAdmin']){

        // 跳转到登录页面
        jumpurl('login.html',0);
        // 阻止下面代码的执行
        die();
    }

    // 定义一个常量
    define('ROOT','www');

    $show='background:#ccc;';

    // 定义主机名
    $host='https://www.fuhushi.com/web1012/yansujing';
    // $host='http://localhost/web0505';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>mystore后台管理系统</title>
    <!-- 引入ui -->
    <link rel="stylesheet" href="layui/layui/css/layui.css" />
    <script src="./layui/layui/layui.js"></script>
    <script src="./js/wangEditor.min.js"></script>

    <!-- 引入jQuery库 -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <style>
    *{
        margin:0;
        padding:0;
    }
    #container{
        width:1200px;
        height:100%;
        margin:0 auto;
    }
    .nav,.show{
        float:left;
    }

    .header{
        background-color:#ccc;
        height:60px;
        line-height:60px;
    }

    .nav{
        width:200px;
        min-height:560px;
        margin-right:20px;
        background-color:#666;
        text-align:center;
    }

    .nav a{
        display:block;
        text-decoration:none;
        height:60px;
        line-height:60px;
        border-bottom:1px solid #ccc;
        color:#000;
    }
    .nav a:hover{
        color:red;
    }
    .show{
        width:980px;
    }

    .addnew{
        width:100%;
        display:block;
        height:60px;
        line-height:60px;
        text-align:right;
        padding-right:10px;
        border-bottom:1px solid #ccc;
        
    }
    .addnew a{
        background-color:#009688;
        padding:10px;
        border-radius:5px;
        text-decoration:none;
        color:white;
    }

    .add-box,.list-box{
        padding-top:20px;
    }

    h2{
        color:red;
        padding:0px 0px 20px 50px;
    }

    .active{
        background:#ccc;
    }

    </style>
</head>
<body>
    
    <div id='container'>

        <div class='header'>头部</div>
        <div class='main'>

            <div class='nav'>
                <a href="main.php?go=class_list_main">一级分类管理</a>   
                <a href="main.php?go=class_list_sun">二级分类管理</a>                
                <a href="main.php?go=book_list">图书管理</a>
                <a href="main.php?go=movie_list">电影管理</a>
                <a href="main.php?go=music_list">音乐管理</a>
                <a href="main.php?go=user_list">会员管理</a>
                <a href="main.php?go=comment_list">评论管理</a>
                <a href="main.php?go=order_list">订单管理</a>
                <a href="main.php?go=collect_list">收藏管理</a>
                <a href="main.php?go=news_list">资讯管理</a>
                <a href="main.php?go=poster_list">封面管理</a>
                <a href="main.php?go=admin_list">管理员管理</a>

                <a href="main.php?go=exit">退出系统</a>

            </div>
            <div class='show'>

                <?php

                    // 接收参数go,加载不同页面的内容
                    $go=$_REQUEST['go']?$_REQUEST['go']:'welcome';

                    // 加载该页面
                    include 'pages/'.$go.'.php';
                
                    
                ?>

            </div>

        </div>

    </div>

</body>

</html>