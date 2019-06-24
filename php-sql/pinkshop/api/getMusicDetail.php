<?php

    //引入公用配置文件
    include '../include/common.inc.php';

    //接收产品ID
    $pid = intval($pid);

    if ($pid){

        $sql = "SELECT id,mcid,scid,music_singer,music_title,music_compose,music_writer,music_lyric,music_price,music_url,music_dt FROM {$pre}music WHERE id=$pid LIMIT 1";

        $msql -> execute($sql);
        
        $res = $msql->fetchquery();

        //一级分类ID
        $mcid = $res['mcid'];

        //二级分类ID
        $scid = $res['scid'];
        
        //处理封面
        $sql = "SELECT url FROM {$pre}poster WHERE pid=$pid AND mcid=$mcid AND scid=$scid LIMIT 1";
        $msql -> execute($sql);
        $rex = $msql -> fetchquery();

        $res['poster'] = $rex['url'];

        //处理分类名称
        $sql = "SELECT cs_name FROM {$pre}catagory_sub WHERE id=$scid";
        $msql -> execute($sql);
        $rej = $msql -> fetchquery();
        $res['cs_name'] = $rej['cs_name'];

        //处理价格
        $price = dealPrice($res['music_price']);
        $res['price_int'] = $price[0];
        $res['price_dec'] = $price[1];


        

    }



    //输出json
    echo json_encode($res);

?>