<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收id
    $id=intval($_GET['id']);

    $sql="SELECT c.title as ctitle,p.title as ptitle,price,cover,recommend,desct,dt FROM mi_product as p LEFT JOIN mi_class as c ON p.cid=c.id WHERE p.id=$id limit 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    // print_r($res);

?>

<div>
    <h2>图书浏览</h2>

    <p>分类名称：<?php echo $res['ctitle'];?></p>

    <p>图书名称：<?php echo $res['ptitle'];?></p>

    <p>图书价格：<?php echo $res['price'];?></p>

    <p>图书封面：<img src="<?php echo $res['cover'];?>"/></p>

    <p>是否推荐：<?php echo $res['recommend']?'推荐':'不推荐';?></p>

    <p>产品描述：<?php echo $res['desct'];?></p>

    <p>上架时间：<?php echo date('Y-m-d',$res['dt']);?></p>

</div>