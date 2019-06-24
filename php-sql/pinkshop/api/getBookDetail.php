<?php

    // 引入公用的配置文件
    require_once('../include/common.inc.php');

    $id=intval($id);
    // 查询语句
    $sql="SELECT id,mcid,scid,book_name,book_autor,book_public,book_dt,book_price,book_descript FROM {$pre}book WHERE id=$id LIMIT 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    // 产品id
    $pid=$res['id'];
    $mcid=$res['mcid'];
    $scid=$res['scid'];

    // 处理价格
    $price=dealPrice($res['book_price']);
    $res['price_int']=$price[0];
    $res['price_dec']=$price[1];

    $res['descript']=str_replace('<img','<img class="rich-image"',$res['book_descript']);

    $msql->error();

    $sql="SELECT cm_name,cs_name FROM {$pre}catagory_sub as s INNER JOIN {$pre}catagoty_main as m ON (s.pid=m.id) WHERE s.id=".$res['scid']." AND s.pid=".$res['mcid']."";

    $msql->execute($sql);

    $res_sub=$msql->fetchquery();

    $res['cm_name']=$res_sub['cm_name'];
    $res['cs_name']=$res_sub['cs_name'];

    // 处理封面
    $sql="SELECT url FROM {$pre}poster WHERE pid=$pid AND mcid=$mcid AND scid=$scid ORDER BY id";

    $msql->execute($sql);

    while($rex=$msql->fetchquery()){

        $tempArr[]=$rex;

    }

    $res['poster']=$tempArr;

    echo json_encode($res);

?>