<?php

    // 引入公用的配置文件
    require_once('../include/common.inc.php');

    // 查询语句
    $sql="SELECT id,cs_name,ico_name FROM {$pre}catagory_sub WHERE pid=20 ORDER BY id";

    $msql->execute($sql);

    while($res=$msql->fetchquery()){
        $tempArr[]=$res;
    }

    echo json_encode($tempArr);

?>