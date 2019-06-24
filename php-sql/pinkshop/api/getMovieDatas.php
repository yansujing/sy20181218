<?php

    //引入公用配置文件
    include '../include/common.inc.php';

    //接收参数
    $typeId = intval($type);

    $countryId = intval($country);

    //初始化
    $where = "";

    //读取数据

    //情况1：全部类型+全部地区
    if ($typeId ==999 && $countryId==888){
        $where = "";
    }

    //情况2：非全部类型+全部地区
    if ($typeId != 999 && $countryId==888){
        $where = " AND scids LIKE '%".$typeId."%' ";
    }

    //情况3：全部类型+非全部地区
    if ($typeId == 999 && $countryId != 888){
        $where = " AND movie_country=$countryId";
    }

    //情况4:非全部类型+非全部地区
    if ($typeId != 999 && $countryId != 888){
        $where = " AND movie_country=$countryId AND scids LIKE '%".$typeId."%' ";
    }

    $sql = "SELECT id, mcid, scids, movie_name, movie_dirctor, movie_roles, movie_country, movie_price FROM {$pre}movie WHERE 1 $where ";

    $msql -> execute($sql);


    while($res = $msql -> fetchquery()){

        //产品ID
        $pid = $res['id'];

        //一级分类ID
        $mcid = $res['mcid'];

        //二级分类ID
        $scids = $res['scids'];

        //国家ID
        $countryId = $res['movie_country'];



        //处理封面
        $sql = "SELECT url FROM {$pre}poster WHERE pid=$pid AND scid='$scids' AND mcid=$mcid LIMIT 1";
        $msql -> execute($sql,'poster');
        $rex = $msql -> fetchquery('poster');
        $res['poster'] = $rex['url'];

        //处理国家
        $sql = "SELECT cs_name FROM {$pre}catagoty_sub WHERE id=$countryId LIMIT 1";
        $msql -> execute($sql,'sub');
        $rej = $msql -> fetchquery('sub');
        $res['country'] = $rej['cs_name'];

        //处理类型
        $sql = "SELECT cs_name FROM {$pre}catagoty_sub WHERE id IN ($scids)";
        $msql -> execute($sql,'style');
        $tempStr = '';
        while($rem = $msql-> fetchquery('style')){

            $tempStr .= $rem['cs_name'].' / ';

        }

        $tempStr = substr($tempStr,0,-3);
        $res['types'] = $tempStr;

        //处理价格
        $price = dealPrice($res['movie_price']);
        $res['price_int'] = $price[0];
        $res['price_dec'] = $price[1];


        //处理星星+评论
        $sql = "SELECT AVG(commend_stars)as stars, count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=$mcid";
        $msql -> execute($sql,'commend');
        $reb = $msql -> fetchquery('commend');
        $res['stars'] = $reb['stars'] ? $reb['stars'] : 5;
        $res['commends'] = $reb['total'] ? $reb['total'] : 0;

        $tempArr[] = $res;
    }

    $msql->error();

    //输出json
    echo json_encode($tempArr);

?>