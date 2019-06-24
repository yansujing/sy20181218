<?php

    // header('Content-type:text/html;charset=utf8');

    // 限制报错(~E_NOTICE加上这个除警告的不报，其他的还是报错)
    error_reporting(E_ALL || ~E_NOTICE);

    // 开始session
    session_start();

    // 数组库的配置参数
    $dbhost = 'localhost';
    $dbuser='root';
    $dbpwd='root';
    $dbname='mishop';

    // 引入数据库操作类
    require_once('db.class.php');

    // 引入公共函数
    require_once('fn.php');

?>
