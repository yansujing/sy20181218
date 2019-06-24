<?php



    // 允许来自localhost:8080跨域请求
    header("Access-Control-Allow-Origin:*");

    header("Access-Control-Allow-Headers:Token");
    header("Content-type:text/html;charset=utf8");

    include_once('../include/common.inc.php');

    $sql="SELECT id,title as name FROM mi_class";

    $msql->execute($sql);

    while($res=$msql->fetchquery()){
        // echo $res['id'].$res['title'];

        $tempArr[]=$res;
        // print_r($res);
        // echo '<br />';
    }

    $tempArr2['list']=$tempArr;

    echo json_encode($tempArr2);


    



?>