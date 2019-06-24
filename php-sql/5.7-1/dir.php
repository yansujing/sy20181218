<?php
    header('Content-type:text/html;charset=utf8');
    // 创建文件夹
    $fileDir='test';
    // if(!is_dir($fileDir)){
    //     @mkdir($fileDir);
    // }
    // //创建一个web0505下的空目录
    // $fileDir2='../test';
    // if(!is_dir($fileDir2)){
    //     @mkdir($fileDir2);
    // } 

    // // 打开文件夹
    // $handle=@opendir($fileDir);

    // //在test里面在创建文件夹
    // $fileDir1='test/test1';
    // if(!is_dir($fileDir1)){
    //    @mkdir($fileDir1);
    // }
    // //在test下创建文件
    //  $file1='test/2.html';
    //  if(file_exists($file1)){
    //     //  echo $file1.'已创建';
    //  }else{
    //      fopen($file1,'w+');
    //  }
    
    // // 在test1下创建文件
    // $file2='test/test1/test1.html';
    // if(!file_exists($file2)){
    //     fopen($file2,'w+');
    // }
    
    // // 把内容写到文件中
    // $file3='test/test1/1.txt';
    // //打开文件
    // $handle1=fopen($file3,'a+');
    // // 写内容
    // fwrite($handle1,"你好，世界！！\r\n");
    // // 关闭文件
    // fclose($handle1);

    // 1.读文件内容(也可以写绝对路径，某网址的内容)
    // $content1=file_get_contents($file3);
    // echo $content1;

    // 2.fgets()
    // $handle2=fopen($file3,'a+');
    // while(!feof($handle2)){
        // echo fgets($handle2).'<br />';
    // }

    // 阅读文件
    // $readFile=@readdir($handle);
    // echo $readFile;
    // while($readFile=@readdir($handle)){
    //     // echo $readFile.'<br />';
    // }

    // 删除空目录
    // @rmdir($fileDir2);

    // 删除有内容的目录
    function delDir($dir){
        if(is_dir($dir)){
            $handle3=@opendir($dir);
            while($read=@readdir($handle3)){
                
                if($read!=='.'&& $read!=='..'){
                     echo $read.'<br />';
                    $fileAdd=$dir.'/'.$read;
                    if(is_dir($fileAdd)){
                        delDir($fileAdd);
                    }else{
                       
                        unlink($fileAdd);
                    }
                }
            }
            rmdir($dir);
        }else{
            return false;
        }
    }
    delDir($fileDir);
?>