<?php 

    require_once('../include/common.inc.php');

    // openID
    $openid=trim($openid);


    if($openid){

        $sql="SELECT pid,mcid,scid,buy_count,order_date FROM {$pre}order WHERE openid='$openid'";
        $msql->execute($sql);
        $tampArr=array();
        while($res=$msql->fetchquery()){
// echo $res;
            // 产品id
            $pid=intval($res['pid']);

            // 产品一级分类
            $mcid=intval($res['mcid']);

            $res['order_date']=date('Y-m-d',$res['order_date']);

            switch($mcid){

                case 20:
                    $sql="SELECT book_name as pname,book_price as price FROM {$pre}book WHERE mcid=$mcid AND id=$pid LIMIT 1";
                break;
                case 2:
                    $sql="SELECT music_title as pname,music_price as price FROM {$pre}music WHERE mcid=$mcid AND id=$pid LIMIT 1";
                break;
                case 3:
                    $sql="SELECT movie_name as pname,movie_price as price FROM {$pre}movie WHERE mcid=$mcid AND id=$pid LIMIT 1";
                break;
            }

            $msql->execute($sql,'bmm');

            $rex=$msql->fetchquery('bmm');

            $msql->error();

            // 产品的名称
            $res['pname']=$rex['pname'];

            // 产品价格
            $res['price']=$rex['price'];

            // 根据mcid和scid查找封面
            $sql="SELECT url FROM {$pre}poster WHERE mcid=$mcid AND pid=$pid ORDER BY id LIMIT 1";
            $msql->execute($sql,'poster');

            $rej=$msql->fetchquery('poster');
            
            $res['poster']=$rej['url'];

            $sql="SELECT avg(commend_stars) as stars,commend_content,count(*) as counts FROM {$pre}commend WHERE mcid=$mcid AND pid=$pid order by id DESC";

            $msql->execute($sql,'stars');

            $rem=$msql->fetchquery('stars');

            $res['stars']=ceil($rem['stars']);

            $res['counts']=$rem['counts'];

            $res['commend']=$rem['commend_content'];


            $tampArr[]=$res;

        }

        $msql->error();

        echo json_encode($tampArr);
    }

?>