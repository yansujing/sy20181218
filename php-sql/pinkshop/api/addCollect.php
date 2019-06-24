<?php 

    require_once('../include/common.inc.php');

    $pid=intval($pid);

    $mcid=intval($mcid);

    $scid=intval($scid);

    if(!$pid||!$mcid||!$scid||!preg_match('/^[A-z0-9_-]{28}$/',$openid)){

        echo 'error';

    }else{

        $time=time();

        // 是否已经收藏
        $sql="SELECT id FROM {$pre}collect WHERE mcid=$mcid AND scid=$scid AND openid='$openid' AND pid=$pid LIMIT 1";

        $msql->execute($sql);

        $rex=$msql->fetchquery();

        if($rex['id']){
            echo 'exist';
        }else{

            $sql="INSERT INTO {$pre}collect (mcid,scid,pid,openid,collect_date) VALUES ($mcid,$scid,$pid,'$openid',$time)";

            $msql->execute($sql);

            $res=$msql->affectedRows();

            if($res>0){
                echo 'success';
            }else{
                echo 'error';
            }

        }
        


    }

    
    
?>