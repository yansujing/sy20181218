<?php

    $code=$_GET['code'];

    // echo $code;

    // 根据code获取openid

    $res=file_get_contents('https://api.weixin.qq.com/sns/jscode2session?appid=wx3a2f0e98330e2f32&secret=200e452efc4f2f47026413b847e28dea&js_code='.$code.'&grant_type=authorization_code');

    echo $res;
?>