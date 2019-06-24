<?php 

    require_once('../include/common.inc.php');

    $bmm=trim($bmm);

    $allow=array('book','music','movie');

    if(!in_array($bmm,$allow)){
        die('NOT ALLOWED！');
    }

    // 初始化变量
    $pid=$total='';

    // 根据BMM不同，查询语句不同
    switch($bmm){
        case 'book':
        // $sql="SELECT book_name,book_price,avg(commend_stars) as stars FROM {$pre}commend as c LEFT JOIN {$pre}book as b ON c.pid=b.id WHERE c.mcid=20 GROUP BY c.pid HAVING BY stars=5 LIMIT 5";
        $num=20;

        break;
        case 'music':

        $num=2;

        break;
        case 'movie':

        $num=3;

        break;
    }

    // 过去评论数和产品id
    $sql="SELECT pid,avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE mcid=$num GROUP BY pid HAVING stars=5";

    $msql->execute($sql);
    $res=$msql->fetchquery();
    $msql->error();
    // 产品ID
    $pid=$res['pid'];

    // 评论数
    $total=$res['total'];

    switch($bmm){
        case 'book':
        $sql="SELECT book_name as pname,book_price as price,url FROM {$pre}book as b LEFT JOIN {$pre}poster as p ON b.id=p.pid WHERE b.id=$pid AND p.mcid=20 ORDER BY p.id LIMIT 1";
        break;
        case 'music':
        $sql="SELECT music_title as pname,music_price as price,url FROM {$pre}music as m LEFT JOIN {$pre}poster as p ON m.id=p.pid WHERE m.id=$pid AND p.mcid=2 ORDER BY p.id LIMIT 1";
        break;
        case 'movie':
        $sql="SELECT movie_name as pname,movie_price as price,url FROM {$pre}movie as m LEFT JOIN {$pre}poster as p ON m.id=p.pid WHERE m.id=$pid AND p.mcid=3 ORDER BY p.id LIMIT 1";
        break;
    }

    $msql->execute($sql);
    $res=$msql->fetchquery();
    $res['total']=$total;

    $price=dealPrice($res['price']);
    $res['price_int']=$price[0];
    $res['price_dec']=$price[1];
    
    echo json_encode($res);
?>