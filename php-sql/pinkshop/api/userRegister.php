<?php 

    require_once('../include/common.inc.php');

    $name=trim($name);
    $tel=trim($tel);
    $address=trim($address);
    $post=trim($poster);
    $isReg=intval($isReg);
    
// echo $isReg;
    $file=$_FILES['file'];

    $openid=trim($openid);

    if(!$name){
        echo 'error521';
    }else{
        if($file['name']){

            // 上传头像
            // 允许上传类型
            $typeArr=array('image/jpg','image/jpeg','image/png','image/gif');

            $size=2*1024;

            $dstPath=upload($file,$typeArr,$size,'../upload');

        }else{
            $dstPath='';
        }
      
        if($dstPath){
            $dstPath=substr($dstPath,3);
        }

        $dt=time();

        if($isReg){
            
            // 入库  ---登录
            $sql="INSERT INTO {$pre}user (openid,user_name,user_moblie,user_address,user_post,user_header,user_date) VALUES ('$openid','$name','$tel','$address','$post','$dstPath',$dt)";
        }else{

            if($dstPath){ //重新上传了图片
                // 修改
                $sql="UPDATE {$pre}user SET user_name='$name',user_moblie='$tel',user_address='$address',user_post='$post',user_header='$dstPath' WHERE openid='$openid' LIMIT 1";
            }else{ //没有修改图片

                    // 修改
                $sql="UPDATE {$pre}user SET user_name='$name',user_moblie='$tel',user_address='$address',user_post='$post' WHERE openid='$openid' LIMIT 1";

            }


        }


        $msql->execute($sql);


        $as=$msql->affectedRows();

        if($as>0){
            echo 'ok';
        }else{
            echo 'fail';
        }
        // $msql->error();

    }
?>