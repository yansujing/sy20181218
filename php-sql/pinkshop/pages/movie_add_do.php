<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收数据
    // 一级分类
    $catagory_main=$_POST['catagory_main'];

    // 国家
    $country=$_POST['country'];

    // 电影类型 print_r
    $like=$_POST['like'];

    // 电影名称
    $title=$_POST['title'];

    // 导演
    $dirctor=$_POST['dirctor'];

    // 主演
    $roles=$_POST['roles'];

    // 价格
    $price=$_POST['price'];

    // 封面 print_r
    $photo1=$_FILES['photo1'];

    // 上架日期
    $update=$_POST['update'];

    // 影片地址
    $uri=$_POST['uri'];

    // 电影介绍
    $desc=$_POST['desc'];

    // print_r($like);

    // echo '<br />';

    // print_r($photo1);

    // echo '<br />';

    // echo $catagory_main.'<br/>'.$country.'<br/>'.$title.'<br/>'.$dirctor.'<br/>'.$roles.'<br/>'.$price.'<br/>'.$update.'<br/>'.$uri.'<br/>'.$desc.'<br/>';

    // echo '<br />';


    // addslashes把单双引号转义
    $desc=addslashes($_POST['desc']);

    // 数据处理
    $dt=$update?strtotime($update):time();

    // 上传头像
    $allowed=array('image/jpg','image/jpeg','image/png','image/gif');

    // 创建一个用来存放所有上传文件的服务器的路径
    $dstArr=array();

    if($photo1['name']){
        $dest=upload($photo1,$allowed,1024);
        $dstArr[]=$dest;
    }

    // 处理主演的，转换成英文状态
    $roles=str_replace('，',',',$roles);

    $scids=implode(',',$like);

    // echo $roles;


    // print_r($dstArr);
    // echo $desc;

    // 数据入库
    $sql="INSERT INTO {$pre}movie (mcid,scids,movie_name,movie_dirctor,movie_roles,movie_country,movie_long,movie_price,movie_url,movie_descipt,movie_dt) VALUES ($catagory_main,'$scids','$title','$dirctor','$roles','$country','$long',$price,'$uri','$desc',$dt)";

    $msql->execute($sql);

    $as=$msql->affectedRows();
    
    if($as>0){
        echo '新增图书成功';
        echo '<p><a href="main.php?go=movie_list">返回电影列表</a> <a href="main.php?go=movie_add">继续新增电影</a></p>';

        // 获取刚刚创建的记录的ID
        $pid=$msql->insertId();

        // 所有的url
        $url="";

        // 封面入库
        if(count($dstArr)>0){

            foreach($dstArr as $item){

                $url.="($pid,$catagory_main,'$scids','$item'),";

            }

            $url=substr($url,0,-1);

            $sql="INSERT INTO {$pre}poster (pid,mcid,scid,url) VALUES $url";

            $msql->execute($sql);

            $ass=$msql->affectedRows();

            if($ass>0){
                echo '封面入库成功';
            }else{
                echo '封面入库失败';
            }

        }

    }else{
        echo '新增失败';
    }

    $msql->error();


?>