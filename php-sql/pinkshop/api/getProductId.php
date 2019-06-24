<?php 

    require_once('../include/common.inc.php');

    // 接收code参数
    $code=trim($code);

    // 查表
    $sql="SELECT id FROM {$pre}book WHERE code='$code' LIMIT 1";

    $msql->execute($sql);

    $res=$msql->fetchquery();

    if($res['id']){
        $result['id']=$res['id'];

        $result['go']='book';
    }else{
        $sql="SELECT id FROM {$pre}music WHERE code='$code' LIMIT 1";

        $msql->execute($sql);

        $res=$msql->fetchquery();

        if($res['id']){
            $result['id']=$res['id'];

            $result['go']='music';
        }else{
            $sql="SELECT id FROM {$pre}movie WHERE code='$code' LIMIT 1";

            $msql->execute($sql);

            $res=$msql->fetchquery();

            if($res['id']){//在movie中找到了
                $result['id']=$res['id'];

                $result['go']='movie';
            }else{
                


            }
        }


    }

    echo json_encode($result);

?>