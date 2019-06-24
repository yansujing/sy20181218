<?php

    // 引入公用的配置文件
    require_once('../include/common.inc.php');

    $id=intval($id);

    $sql="SELECT id,mcid,scids,movie_name,movie_dirctor,movie_roles,movie_country,movie_long,movie_price,movie_url,movie_descipt FROM {$pre}movie WHERE id=$id LIMIT 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    $countryId=$res['movie_country'];

    $scids=$res['scids'];

    // 处理分类
    $sql="SELECT cs_name FROM {$pre}catagory_sub WHERE id IN ($scids)";

    $msql->execute($sql);

    $cs_name='';

    while($rex=$msql->fetchquery()){
        $cs_name.=$rex['cs_name'].',';
    } 


    $cs_name=substr($cs_name,0,-1);


    $res['cs_names']=$cs_name;


    // 处理国家
    $sql="SELECT cs_name FROM {$pre}catagory_sub WHERE id=$countryId";

    $msql->execute($sql);

    $rej=$msql->fetchquery();

    $res['country']=$rej['cs_name'];

    echo json_encode($res);

?>