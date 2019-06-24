<?php

    // header('Content-type:text/html;charset=utf8');

    // 限制报错(~E_NOTICE加上这个除警告的不报，其他的还是报错)
    error_reporting(E_ALL || ~E_NOTICE);

    // 开始session
    session_start();

    
    //优化数据接收方式

    function _RunMagicQuotes(&$svar)
    {
        if(!get_magic_quotes_gpc())
        {
            if( is_array($svar) )
            {
                foreach($svar as $_k => $_v) $svar[$_k] = _RunMagicQuotes($_v);
            }
            else
            {
                if( strlen($svar)>0 && preg_match('#^(cfg_|GLOBALS|_GET|_POST|_COOKIE)#',$svar) )
                {
                exit('Request var not allow!');
                }
                $svar = addslashes($svar); // \<script\>\</script\>
            }
        }
        return $svar;
    }

    //检查和注册外部提交的变量
    function CheckRequest(&$val) {

        if (is_array($val)) {

            foreach ($val as $_k=>$_v) {
                if($_k == 'nvarname') continue;
                CheckRequest($_k); 
                CheckRequest($val[$_k]);
            }
        } else
        {
            if( strlen($val)>0 && preg_match('#^(cfg_|GLOBALS|_GET|_POST|_COOKIE)#',$val)  )
            {
                exit('Request var not allow!');
            }
        }
    }

    //var_dump($_REQUEST);exit;
    CheckRequest($_REQUEST);  //$_POST,$_GET,$_REQUEST  // ['username','cfg_name']
    CheckRequest($_COOKIE);


    foreach(Array('_GET','_POST','_COOKIE') as $_request)
    {
        foreach($$_request as $_k => $_v) 
        {
            if($_k == 'nvarname') ${$_k} = $_v;
            else ${$_k} = _RunMagicQuotes($_v);   //$username = _R
        }
    }

    // 数组库的配置参数(服务器)
    $dbhost = 'localhost';
    $dbuser='nanxi1111';
    $dbpwd='syedu20190610';
    $dbname='nanxi1111';
    $pre='yansujing_';


    // $dbhost = 'localhost';
    // $dbuser='root';
    // $dbpwd='root';
    // $dbname='mystore';
    // $pre='yansujing_';
    // 引入数据库操作类
    require_once('db.class.php');

    // 引入公共函数
    require_once('fn.php');

?>
