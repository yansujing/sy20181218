<?php 

    require_once('../include/common.inc.php');
    $openid=$openid;

    // 接收购物车的数据
    $datas=$datas;

    // 去除转义
    $str = stripcslashes($datas);

    $res=json_decode($str,true);

    // print_r($res);
    $values="";

    //从数组中提取数据 
    foreach($res as $key=>$item){

        foreach($item as $key1=>$item1){

            // 产品ID
            $pid=$item1['id'];

            // 购买的数量
            $counts=$item1['count'];

            // 一级分类ID
            $mcid=$item1['mcid'];

            // 二级分类
            $scid=$item1['scid'];

            $dt=time();

            // 字段值
            $values.="($mcid,'$scid',$pid,'$openid',$counts,$dt)".',';

            // echo $item1['id'].'*'.$item1['count'].'*';

        }

    }

    // 去掉末尾逗号
    $values=substr($values,0,-1);

    $sql="INSERT INTO {$pre}order (mcid,scid,pid,openid,buy_count,order_date) VALUES $values";

    $msql->execute($sql);

    $as=$msql->affectedRows();

    if($as>0){
        echo 'ok';
    }else{
        echo 'fail';
    }
?>