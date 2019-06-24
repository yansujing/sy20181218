<?php

    // 引入公用的配置文件
    require_once('../include/common.inc.php');


        $page=$page?$page:1;

        // 每次加载的记录数
        $pageRecords=4;

        $start=($page-1)*$pageRecords;

        if($cid==99){ //99包邮

            $sql="SELECT id,mcid,scid,book_name,book_autor,book_public,book_dt,book_price FROM {$pre}book WHERE book_99=1 LIMIT $start,$pageRecords";

        }else{

            if($sv&&$sb){

                if($sb==='publicer'){
                    $sql="SELECT id,mcid,scid,book_name,book_autor,book_public,book_dt,book_price FROM {$pre}book WHERE book_public='$sv' LIMIT $start,$pageRecords";
                }else if($sb==='author'){
                    $sql="SELECT id,mcid,scid,book_name,book_autor,book_public,book_dt,book_price FROM {$pre}book WHERE book_autor='$sv' LIMIT $start,$pageRecords";
                }else{

                }

            }else{

                $sql="SELECT id,mcid,scid,book_name,book_autor,book_public,book_dt,book_price FROM {$pre}book WHERE scid=$cid LIMIT $start,$pageRecords";
                
            }
           

           
        }
        

        $msql->execute($sql);

        while($res=$msql->fetchquery()){

            $pid=$res['id'];

            $mcid=$res['mcid'];

            $scid=$res['scid'];

            // 读取封面处理
            $sql="SELECT url FROM {$pre}poster WHERE pid=$pid AND mcid=$mcid AND scid=$scid ORDER BY id LIMIT 1";

            $msql->execute($sql,'poster');

            $res_poster=$msql->fetchquery('poster');

            // $msql->error();

            $res['poster']=$res_poster['url'];


            // 处理日期
            $res['book_dt']=date('Y-m-d',$res['book_dt']);

            // 处理价格
            $price=explode('.',$res['book_price']);
            $price_int=$price[0];
            $price_dec=$price[1];
            $res['price_int']=$price_int;
            $res['price_dec']=$price_dec;

            // 处理描述
            $res['descript']='点击进入详情页面》';

            // 获取星星数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE  pid=$pid AND mcid=$mcid AND scid=$scid";

            $msql->execute($sql,'commend');

            $res_remmend=$msql->fetchquery('commend');

            $res['stars']=$res_remmend['stars']?$res_remmend['stars']:5;
            
            // 评论条数
            $res['remmendNums']=$res_remmend['total']?$res_remmend['total']:0;

            $tempArr[]=$res;

        }

    echo json_encode($tempArr);

?>