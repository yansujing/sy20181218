<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
    // 清除session['mishopadmin']
    $_SESSION['mishopadmin']=0;

    // 销毁session
    // session_destroy();

    echo '已退出系统,2s后跳转到登录页面';

    jumpurl('login.html',2000);

?>