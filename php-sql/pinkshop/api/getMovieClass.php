<?php

    //引入公用配置文件
    include '../include/common.inc.php';

    //接收参数
    $tag = $tag;
    $cid = intval($cid);
    // echo $tag.$cid;

    //判断并读取数据
    if ($tag == 'type' || $tag == 'country'){

        //语句
        if ($tag == 'type'){

            $pid = 3; //父类ID
            // echo 11;

        } else {

            $pid = 21; //父类ID
        }
    
        $sql = "SELECT id,cs_name FROM {$pre}catagory_sub WHERE pid=$pid";

        $msql -> execute($sql);

        while($res = $msql->fetchquery()){

            //根据CID处理样式
            if ($res['id'] == $cid){
                $res['active'] = 'active';
            } else {
                $res['active'] = '';
            }

            $tempArr[] = $res;

        }

        //输出json
        echo json_encode($tempArr);


    }

?>