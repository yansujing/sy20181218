<?php


    // 获取小程序登录的
    $code=$_GET['code'];


    // 通过https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code   换取openid等信息
    $res=file_get_contents("https://api.weixin.qq.com/sns/jscode2session?appid=wx3a2f0e98330e2f32&secret=3987ed0abb51051075b4a5397b8d8d17&js_code=".$code."&grant_type=authorization_code");

    echo $res;
?>