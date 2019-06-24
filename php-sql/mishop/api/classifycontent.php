<?php



    // 允许来自localhost:8080跨域请求
    header("Access-Control-Allow-Origin:*");

    header("Access-Control-Allow-Headers:Token");
    header("Content-type:text/html;charset=utf8");

    include_once('../include/common.inc.php');

    // 语句
    // $sql="SELECT p.id=pid,cid,c.title as ctitle,p.title as ptitle,cover FROM mi_product as p inner join mi_class as c ON c.id=p.cid";

    // 分类信息
    $sql="SELECT id,title as name FROM mi_class";

    $msql->execute($sql);

    while($res=$msql->fetchquery()){
        $res['titleImg']="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e98be403a5f4277adba84acaecb9c76.jpg?bg=6D96C7";

        $tempArrP=array();

        $cid=$res['id'];

        // 根据分类的id,查找该分类下的所有产品
        $query="SELECT id,title as name,cover as img FROM mi_product WHERE cid=$cid";
        $msql->execute($query,'j');

        while($rex=$msql->fetchquery('j')){

            // 处理图片路径
            $rex['img']='http://localhost/web0505/mishop/'.$rex['img'];

            // 处理产品名称
            $rex['name']=mb_substr($rex['name'],0,12,'utf8');
            $tempArrP[]=$rex;

        }

        $res['list']=$tempArrP;

        $tempArr1[]=$res;
    }

    $tempArr2['list']=$tempArr1;

    // print_r($tempArr2);
    echo json_encode($tempArr2);
?>