<?php 
    // 引入公用配置文件
    require_once('../include/common.inc.php');

    // 接收参数
    $value=trim($value);
    $source=trim($source);

    $result=array();

    // 函数

    // 查看图书
    function getBook($value){

        global $msql,$pre;

        $sql="SELECT b.id as id,b.mcid,book_name as pname,book_autor,book_public,url,book_price as price FROM {$pre}book as b LEFT JOIN {$pre}poster as p ON b.id=p.pid WHERE p.mcid=20 AND book_name LIKE '%".$value."%' GROUP BY b.id";

        $msql->execute($sql);

        while($res=$msql->fetchquery()){

            // ID
            $pid=$res['id'];

            // 价格
            $price=dealPrice($res['price']);

            $res['price_int']=$price[0];

            $res['price_dec']=$price[1];

            $res['descript']='作者：'.$res['book_autor'].'出版社：'.$res['book_public'];

            // 星星+评论数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=20";

            $msql->execute($sql,'commend');

            $rex=$msql->fetchquery('commend');

            $res['stars']=$rex['stars']?ceil($rex['stars']):5;
            $res['total']=$rex['total'];

            $result[]=$res;

        }

        $msql->error();

        return $result;

    }

    // 查看音乐
    function getMusic($value){

        global $msql,$pre;

        $sql="SELECT m.id as id,m.mcid,music_title as pname,music_singer,music_compose,music_writer,url,music_price as price FROM {$pre}music as m LEFT JOIN {$pre}poster as p ON (m.id=p.pid) WHERE p.mcid=2 AND music_title LIKE '%".$value."%' GROUP BY m.id";

        $msql->execute($sql);

        while($res=$msql->fetchquery()){

            // ID
            $pid=$res['id'];

            // 价格
            $price=dealPrice($res['price']);

            $res['price_int']=$price[0];

            $res['price_dec']=$price[1];

            $res['descript']='歌手：'.$res['music_singer'].'作曲：'.$res['music_compose'].'作词：'.$res['music_writer'];

            // 星星+评论数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=2";

            $msql->execute($sql,'commend');

            $rex=$msql->fetchquery('commend');

            $res['stars']=$rex['stars']?ceil($rex['stars']):5;
            $res['total']=$rex['total'];

            $result[]=$res;

        }

        $msql->error();
        return $result;

    }

    // 查看电影
    function getMovie($value){

        global $msql,$pre;

        $sql="SELECT b.id as id,b.mcid,movie_name as pname,movie_dirctor,movie_roles,url,movie_price as price FROM {$pre}movie as b LEFT JOIN {$pre}poster as p ON b.id=p.pid WHERE p.mcid=3 AND movie_name LIKE '%".$value."%' GROUP BY b.id";

        $msql->execute($sql);

        while($res=$msql->fetchquery()){

            // ID
            $pid=$res['id'];

            // 价格
            $price=dealPrice($res['price']);

            $res['price_int']=$price[0];

            $res['price_dec']=$price[1];

            $res['descript']='导演：'.$res['movie_dirctor'].'主演：'.$res['movie_roles'];

            // 星星+评论数
            $sql="SELECT avg(commend_stars) as stars,count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=3";

            $msql->execute($sql,'commend');

            $rex=$msql->fetchquery('commend');

            $res['stars']=$rex['stars']?ceil($rex['stars']):5;
            $res['total']=$rex['total'];

            $result[]=$res;

        }

        $msql->error();
        return $result;

    }

    // 结果集
    if($value){

        if($source=='book'){  //图书表查询

            $result_book=getBook($value);
            $result=$result_book;

        }else if($source=='music'){  //音乐表查询

           $result_music=getMusic($value);

            $result=$result_music;

        }else if($source=='movie'){  //  电影表查询

           $result_movie=getMovie($value);

           $result=$result_movie;

        }else{  //  三表查询

            $book=getBook($value);
            $music=getMusic($value);
            $movie=getMovie($value);

            $book=$book?$book:array();
            $music=$music?$music:array();
            $movie=$movie?$movie:array();

            // 合并数组
            $result=array_merge($book,$music,$movie);
        }

        // 如果来自图书的查询，查询无果的情况下，从音乐表和电影表在查找
        if($source=='book'){

            if(!$result_book){

                $music=getMusic($value);
                $movie=getMovie($value);  

                $music=$music?$music:array();
                $movie=$movie?$movie:array();       

                // 合并数组
                $result=array_merge($music,$movie);     

            }else{
                $result=$result_book;
            }

        }

        if($source=='music'){

            if(!$result_music){

                $book=getBook($value);
                $movie=getMovie($value);  

                $book=$book?$book:array();
                $movie=$movie?$movie:array();       

                // 合并数组
                $result=array_merge($book,$movie);     

            }else{
                $result=$result_music;
            }

        }

        if($source=='movie'){

            if(!$result_movie){

                $book=getBook($value);
                $music=getMusic($value);  

                $book=$book?$book:array();
                $music=$music?$music:array();       

                // 合并数组
                $result=array_merge($book,$music);     

            }else{
                $result=$result_movie;
            }

        }

        echo json_encode($result);

    }else{
        die('参数无效');
    }
    

?>