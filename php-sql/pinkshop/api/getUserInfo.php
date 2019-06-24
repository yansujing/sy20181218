<?php 

    require_once('../include/common.inc.php');

    $openid=trim($openid);

    if($openid){
        $sql="SELECT id,user_name,user_moblie,user_address,user_post,user_header FROM {$pre}user WHERE openid='$openid' LIMIT 1";

        $msql->execute($sql);

        $res=$msql->fetchquery();

        if(!$res['id']){
            echo 'no';
        }else{
            if($tag){
                echo json_encode($res);
            }else{
                echo 'yes';
            }

        }

    }

?>