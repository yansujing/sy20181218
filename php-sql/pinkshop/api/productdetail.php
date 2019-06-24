<?php

    // 允许来自localhost:8080跨域请求
    header("Access-Control-Allow-Origin:*");

    header("Access-Control-Allow-Headers:Token");
    header("Content-type:text/html;charset=utf8");

    $id=$_GET['id'];

    // echo $id;

    require_once('../include/common.inc.php');

    $sql="SELECT c.title as ctitle,p.title as ptitle,price,cover,desct FROM mi_product as p LEFT JOIN mi_class AS c ON c.id=p.cid WHERE p.id=$id LIMIT 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    $res['imgList']='http://localhost/web0505/mishop/'.$res['cover'];

    $msql->error();

    // echo $res;

   

    echo json_encode($res);


?>