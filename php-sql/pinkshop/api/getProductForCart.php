<?php 

    require_once('../include/common.inc.php');

    $pid=intval($pid);
    
    if($bmm=='movie'){
        $sql="SELECT mcid,scids as scid,movie_name as pname,movie_price as price from {$pre}movie WHERE id=$pid LIMIT 1";
    }
    
    if($bmm=='book'){
        $sql="SELECT mcid,scid,book_name as pname,book_price as price from {$pre}book WHERE id=$pid LIMIT 1";
    }
    if($bmm=='music'){
        $sql="SELECT mcid,scid,music_title as pname,music_price as price from {$pre}music WHERE id=$pid LIMIT 1";
    }
    $msql->execute($sql);

    $res=$msql->fetchquery();

    $mcid=$res['mcid'];

    $sql="SELECT url FROM {$pre}poster WHERE pid=$pid AND mcid=$mcid order by id LIMIT 1";

    $msql->execute($sql);

    $rex=$msql->fetchquery();

    $res['poster']=$rex['url'];

    echo json_encode($res);

?>