<?php
    header('Content-type:text/html;charset=utf8');
    // 当前时间戳，返回公元1970年1月1日0时0分0秒到当前的秒
    $timeStamp=time();

    // 把时间戳抓换成日期
    $data = date('Y年m-d H:i:s',$timeStamp);

    // echo $data;

    // 计算
    $sixyear=$timeStamp-6*365*24*60*60;
    
    // 把日期转换成时间戳
    // echo strtotime('2019-05-06');

    // 星期
    $week=date('w',$timeStamp);
    echo $week;

    // echo '<br />';

    // echo date('Y-m-d',$sixyear);
?>