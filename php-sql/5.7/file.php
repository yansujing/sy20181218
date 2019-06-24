<?php
    header('Content-type:text/html;charset=utf8');

    // 创建文件
    $fileName='test.html';

    // 判断文件是否存在
    if(!file_exists($fileName)){

        // 不存在创建mode为'w+'
        fopen($fileName,'w+');

    }
    
    // 把内容写入到文件中
    // 1.先打开文件
    $fs=fopen('test2.txt','a');
    // 2.写入内容
    //   记事本的换行(\r回车，\n另起一行)
    fwrite($fs,"hello1 \r\n");
    // 3.关闭资源
    fclose($fs);

    // 从文件中读取内容(可读取网站中的内容)  用于后台读后台
    // 方式1  file_get_contents()
    $content=file_get_contents('http://news.ts.cn/system/2019/05/06/035679628.shtml');

    // 方式 2  fgets()
    // 2.1 打开文件
    $handle=fopen('test2.txt','r');

    // 2.2 每次读取一行，直到读取完毕
    while(!feof($handle)){ //直到指针指向最后一行才结束
        
        echo fgets($handle).'<br />';
    }
    // 2.3 关闭资源
    fclose($handle);

    // 删除文件
    if(file_exists('test.txt')){
        @unlink('test.txt');
    }
?>