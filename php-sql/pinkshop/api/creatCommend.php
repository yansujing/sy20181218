<?php 

    require_once('../include/common.inc.php');

    $pid=intval($pid);
    $mcid=intval($mcid);
    $stars=intval($stars);

    // 获取用户名
    $sql="SELECT user_name FROM {$pre}user WHERE openid='$openid' LIMIT 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    $name=$res['user_name'];


    $dt=time();

    $sql="INSERT INTO {$pre}commend (mcid,pid,openid,commend_who,commend_stars,commend_content,commend_date) VALUES ($mcid,$pid,'$openid','$name',$stars,'$commend',$dt)";

    $msql->execute($sql);

    $as=$msql->affectedRows();

    if($as>0){
        echo 'ok';
    }else{
        echo 'fail';
    }

?>