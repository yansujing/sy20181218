<?php 

    require_once('../include/common.inc.php');

    $mcid=intval($mcid);

    $pid=intval($pid);

    $tempArr=array();

    $sql="SELECT commend_who,commend_stars,commend_content,user_header FROM {$pre}commend as c INNER JOIN {$pre}user AS u ON c.openid=u.openid WHERE c.mcid=$mcid AND c.pid=$pid";

    $msql->execute($sql);

    while($res=$msql->fetchquery()){
        $tempArr[]=$res;
    }
// echo $sql;
    echo json_encode($tempArr);

?>