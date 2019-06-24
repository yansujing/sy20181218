<?php

     //引入公用配置文件
     include '../include/common.inc.php';

    //接收二级分类ID
    $cid = intval($cid);

     //读取数据
     if (!$cid){
        $sql = "SELECT id, mcid, scid, music_title,music_singer, music_compose, music_writer, music_price FROM {$pre}music ORDER BY id DESC";
     } else {

        if($cid===888){ //首页top6（下单最多的）

            $allPid='';

            $sql="SELECT pid,sum(buy_count) as counts FROM {$pre}order WHERE mcid=2 GROUP BY pid ORDER BY counts DESC LIMIT 6";

            $msql -> execute($sql);
            
            while($res = $msql -> fetchquery()){

               $allPid.=$res['pid'].',';

            }

            $allPid=substr($allPid,0,-1);

            $sql = "SELECT id, mcid, scid, music_title,music_singer, music_compose, music_writer, music_price FROM {$pre}music WHERE id IN ($allPid) ORDER BY FIELD (id,$allPid)";

         }else{
            $sql = "SELECT id, mcid, scid, music_title,music_singer, music_compose, music_writer, music_price FROM {$pre}music WHERE scid=$cid ORDER BY id DESC";
        }

     }
   //  echo $sql;

    $msql -> execute($sql);
    while($res = $msql -> fetchquery()){

        //产品id
        $pid = $res['id'];

        //一级分类ID
        $mcid = $res['mcid'];

        //二级分类ID
        $scid = $res['scid'];



        //读取封面
        // $sql = "SELECT url FROM {$pre}poster WHERE pid=".$res['id']." AND mcid=".$res['mcid']." AND scid=".$res['scid'];
        $sql = "SELECT url FROM {$pre}poster WHERE pid=$pid AND mcid=$mcid AND scid=$scid LIMIT 1";
        $msql -> execute($sql,'poster');
        $rex = $msql -> fetchquery('poster');

        $res['poster'] = $rex['url'];

        //处理价格
        $price = dealPrice($res['music_price']);
        $res['price_int'] = $price[0];
        $res['price_dec'] = $price[1];
        
        //星星+评论
        $sql = "SELECT avg(commend_stars) as stars, count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=$mcid";

         // echo '<hr />';
         // echo $sql;

        $msql -> execute($sql,'commend');
        $rej = $msql -> fetchquery('commend');

        $res['stars'] = $rej['stars'] ? $rej['stars'] : 5;
        $res['total'] = $rej['total'] ? $rej['total'] : 0;

        $tempArr[] = $res;

    }

    $msql->error();

    //输出json
    echo json_encode($tempArr);

?>