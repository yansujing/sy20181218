<?php 

    require_once('../include/common.inc.php');

    // 接收openid
    $openid=trim($openid);

    $tempArr=array();

    $sql="SELECT id,pid,mcid,commend_content FROM {$pre}commend WHERE openid='$openid'";

    $msql->execute($sql);

    while($res=$msql->fetchquery()){
        

        // 产品ID
        $pid=$res['pid'];

        // 分类ID
        $mcid=$res['mcid'];

        // 评论内容
        $content=$res['commend_content'];


        $pname='';
        // 产品名称
        if($mcid==20){
            $sql="SELECT book_name FROM {$pre}book WHERE id=$pid LIMIT 1";

            $msql->execute($sql,'x');
            $rex=$msql->fetchquery('x');
            $pname=$rex['book_name'];

            // 星星数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=20";

            $msql->execute($sql,'commend');

            $rex=$msql->fetchquery('commend');

            $stars=ceil($rex['stars']);
        }
        if($mcid==2){
            $sql="SELECT music_title FROM {$pre}music WHERE id=$pid LIMIT 1";

            $msql->execute($sql,'x');
            $rex=$msql->fetchquery('x');
            $pname=$rex['music_title'];

            // 星星数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=2";

            $msql->execute($sql,'commend');

            $rex=$msql->fetchquery('commend');

            $stars=ceil($rex['stars']);
        }
        if($mcid==3){
            $sql="SELECT movie_name FROM {$pre}movie WHERE id=$pid LIMIT 1";

            $msql->execute($sql,'x');
            $rex=$msql->fetchquery('x');
            $pname=$rex['movie_name'];

            // 星星数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=3";

            $msql->execute($sql,'commend');

            $rex=$msql->fetchquery('commend');

            $stars=ceil($rex['stars']);
        }

        $res['pname']=$pname;

        $res['stars']=$stars;

        $tempArr[]=$res;
    }

    echo json_encode($tempArr);

?>