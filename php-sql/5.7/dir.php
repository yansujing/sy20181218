<?php
    header('Content-type:text/html;charset=utf8');

    // 创建文件夹
    $dirName='../upload';
    // id_dir 有这个目录返回true,没有就返回false
    if(!is_dir($dirName)){
        // 加@就是不要暴露路径错误
        @mkdir($dirName);
    }

    // 打开文件夹
    $handle=@opendir($dirName);

    // 读取文件(读取到上级文件路径。本身路径。下级路径)
    // $file=@readdir($handle);
    // echo $file;

    while($file=@readdir($handle)){
        // echo $file.'<br />';
    }

    //删除文件夹(文件夹里无内容，才能删除成功)
     $res=@rmdir('upload');
     if($res){
        //  echo '删除成功';
     }else{
        //  echo '删除失败';
     }

    // 删除非空的目录(递归函数)
    function deleteDir($dir){

        // 判断是否为目录（文件夹）
        if(is_dir($dir)){

            // 打开目录
            if(!$handle=@opendir($dir)){
                return false;
            }
            // 遍历目录
            while(($file=@readdir($handle))!==false){

                echo $file.'<br />';

                // 判断不是根目录，或者上级目录
                if($file!=='.'&&$file!=='..'){
                    // 拼接完整路径
                    $files=$dir.'/'.$file;
                    // 判断遍历的每一项是否是目录
                    if(is_dir($files)){
                        // 是就直接递归
                        deleteDir($files);
                    }else{
                        // 删除文件
                        @unlink($files);
                    }
                }

            }
            // 遍历之后，都会执行删除目录
            @rmdir($dir);

        }else{

            echo '目录不存在';

        }
    }
    // 执行函数
    deleteDir($dirName);
?>