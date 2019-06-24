<?php

    // 头部编码
    header("Content-type:text/html;charset=UTF-8");

    //变量
    $name ='jack';
    $Name='jack'; 
    $myName='jack';
    $my_name='jack';
    $_name='jack';
    $age=8;

    // 输出字符串
    echo $age;

    echo '<br />';

    // 数组
    $hobby[0]='sporting';
    $hobby[1]='reading';

    // 关联数组
    $hobby['name']='sporting';

    // 输出数组
    print_r($hobby);

    // 输出类型和值
    var_dump($hobby);
////////////////////////////////////////////////
    echo '<br />';
    $str='   slsdjfls kjlja sssjjkl 你是   ';

    // 长度
    echo strlen($str);

    echo '<br />';

    // 字符串截取
    echo substr($str,12,10);

    // 截取中文
    // mb_substr(对象,'割的下标','割的长度');

    echo '<br />';

    // 字符串查找
    echo strpos($str,'s');
    
    echo '<hr />';
    $res=strpos($str,'s');
    // 如果没有查找到就不会有$res,查找到才会出来下标
    echo $res;
    echo '<br />';
    var_dump($res===false);
    echo '<br />';

    if($res===false){
        echo '不包含';
    }else{
        echo '包含';
    }

    echo '<br />';

    // 替换
    // str_replace('77','88',变量);
    echo str_replace('你','ysj',$str);

    echo '<br />';

    // 分割
    // 分割成一个数组
    // explode('已什么来割',割的对象);
    print_r(explode(' ',$str));
    echo '<br />';
    echo '<hr />';

    // 去掉两端空格
    $_str='    nidhi    ';
    echo strlen($_str);
    echo '<br />';
    // trim(对象);
    $res=ltrim($_str);
    echo strlen($res);
    echo '<hr />';
    
    // echo rtrim($str);
    echo $_str;

    // 去掉左边空格
    // ltrim(对象);

    echo '<br />';
    // 转换大小写
    // strtoupper();
    echo strtoupper($_str);

    echo '<br />';

    // 加密
    // md5(对象);
    // md5(md5(对象));
    echo md5(md5(md5($str)));
    echo '<br />';

    echo md5(' ');
    echo '<br />';
    echo md5(md5(md5(' ')));
    echo '<br />';

    // hash加密
    // sha1(对象);
    echo sha1($str);

?>