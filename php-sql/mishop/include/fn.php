<?php

    //文件上传
    function upload($farr,$ftype,$fsize,$dirname='upload'){
        // 判断是否是数组
        if(!is_array($farr)){
            return false;
        }else{
            // 判断数组里面有没有name和tmp_name的值
            if(!$farr['name']||!$farr['tmp_name']){
                return false;
            }else{

                // 获取文件的类型
                $fileType=$farr['type'];
                // 获取文件大小
                $fileSize=$farr['size'];

                // 判断并限制文件类型
                if(is_array($ftype)){

                    if(!in_array($fileType,$ftype)){
                        return false;
                    }else{

                        // 判断并限制文件大小
                        if($fileSize>$fsize*1024){
                            return false;
                        }else{
                            
                            // 创建文件的目录
                            if(!is_dir($dirname)){
                                @mkdir($dirname);
                            }

                            //创建新的文件名
                            $newFileName=time().rand(1,10);

                            // 获取上传文件的扩展名
                            $pinfo=pathinfo($farr['name']);
                            $extension=$pinfo['extension'];

                            // 远程完整的文件名
                            $dest=$dirname.'/'.$newFileName.'.'.$extension;

                            // 上传文件
                            $res=move_uploaded_file($farr['tmp_name'],$dest);

                            // 判断执行结果
                            if($res){
                                return $dest;
                            }else{
                                return false;
                            }
                        }

                    }

                }

            }
        }
    } 

    // //////////////////////////////////页面跳转
    function jumpurl($url,$time){
        echo '<script>';

        echo 'setTimeout(function(){location.href="'.$url.'"},'.$time.')';

        echo '</script>';

    }

?>