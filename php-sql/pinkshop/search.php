<?php

    //引入公用配置文件
    include '../include/common.inc.php';

    //接收参数
    $value = trim($value);
    $source = trim($source);

    //结果集
    $result = array();

    //函数

    //查询图书
    function getBook($value){

        global $msql,$pre;

        $sql = "SELECT b.id, b.mcid, book_price, book_name as pname,book_author,book_public,url FROM {$pre}book as b LEFT JOIN {$pre}poster as p ON (b.id=p.pid) WHERE p.mcid=2 AND book_name LIKE '%".$value."%' GROUP BY b.id";

        $msql -> execute($sql);

        while($res = $msql -> fetchquery()){

            //ID
            $pid = $res['id'];

            //价格
            $price = dealPrice($res['book_price']);
            $res['price_int'] = $price[0];
            $res['price_dec'] = $price[1];

            //描述
            $res['descript'] = '作者：'.$res['book_author'].' 出版社：'.$res['book_public'];

            //星星+评论数
            $sql = "SELECT avg(commend_stars) as stars, count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=2";
            $msql -> execute($sql,'commend');
            $rex = $msql -> fetchquery('commend');
            
            $res['stars'] = $rex['stars'] ? ceil($rex['stars']) : 5;
            $res['total'] = $rex['total'];

            //存入数组
            $result[] = $res;

        }

        return $result;

    }

    //查询音乐
    function getMusic($value){

        global $msql,$pre;

        $sql = "SELECT m.id, m.mcid, music_price, music_title as pname,music_singer,music_compose,music_writer,url FROM {$pre}music as m LEFT JOIN {$pre}poster as p ON (m.id=p.pid) WHERE p.mcid=3 AND music_title LIKE '%".$value."%'  GROUP BY m.id";

        $msql -> execute($sql);

        while($res = $msql -> fetchquery()){

             //id
             $pid = $res['id'];

            //价格
            $price = dealPrice($res['music_price']);
            $res['price_int'] = $price[0];
            $res['price_dec'] = $price[1];

            //描述
            $res['descript'] = '歌手：'.$res['music_singer'].' 作曲：'.$res['music_compose'].' 作词：'.$res['music_writer'];

            //星星+评论数
            $sql = "SELECT avg(commend_stars) as stars, count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=3";
            $msql -> execute($sql,'commend');
            $rex = $msql -> fetchquery('commend');
            
            $res['stars'] = $rex['stars'] ? ceil($rex['stars']) : 5;
            $res['total'] = $rex['total'];

            //存入数组
            $result[] = $res;

        }

        return $result;

    }

    //查询电影
    function getMovie($value){

        global $msql,$pre;

        $sql = "SELECT m.id, m.mcid, movie_price, movie_name as pname,movie_dirctor,movie_roles,url FROM {$pre}movie as m LEFT JOIN {$pre}poster as p ON (m.id=p.pid) WHERE p.mcid=4 AND movie_name LIKE '%".$value."%'  GROUP BY m.id";

        $msql -> execute($sql);

        while($res = $msql -> fetchquery()){

            //id
            $pid = $res['id'];

             //价格
             $price = dealPrice($res['movie_price']);
             $res['price_int'] = $price[0];
             $res['price_dec'] = $price[1];
 
             //描述
            $res['descript'] = '导演'.$res['movie_director'].' 主演：'.$res['movie_roles'];

            //星星+评论数
            $sql = "SELECT avg(commend_stars) as stars, count(*) as total FROM {$pre}commend WHERE pid=$pid AND mcid=4";
            $msql -> execute($sql,'commend');
            $rex = $msql -> fetchquery('commend');
            
            $res['stars'] = $rex['stars'] ? ceil($rex['stars']) : 5;
            $res['total'] = $rex['total'];

            //存入数组
            $result[] = $res;

        }

        return $result;

    }


    if ($value){

        //从图书表查询
        if ($source == 'book'){

           $result_book = getBook($value);
        
        //从音乐表查询
        } else if ($source == 'music'){

           $result_music = getMusic($value);
        
        //从电影表查询
        } else if ($source == 'movie'){

           $result_movie = getMovie($value);
        
        //从3个表中查询
        } else {

            $book = getBook($value);
            $music = getMusic($value);
            $movie = getMovie($value);

            $book = $book ? $book : array();
            $music = $music ? $music : array();
            $movie = $movie ? $movie : array();

            //合并数组
            $result = array_merge($book,$music,$movie);

        }

        //如果来自图书查询，查询无果的情况下，从音乐表和电影表中再查找
        if ($source == 'book'){

            if (! $result_book){

                $music = getMusic($value);
                $movie = getMovie($value);

                $music = $music ? $music : array();
                $movie = $movie ? $movie : array();

                $result = array_merge($music,$movie);

            } else {

                $result = $result_book;
            }

        }

        if ($source == 'music'){

            if (!$result_music){

                $book = getBook($value);
                $movie = getMovie($value);

                $book = $book ? $book : array();
                $movie = $movie ? $movie : array();

                //合并数组
                $result = array_merge($book,$movie);

            } else {
                $result = $result_music;
            }

        }

        if ($source == 'movie'){

            if (!$result_movie){

                $book = getBook($value);
                $music = getMusic($value);
    
                $book = $book ? $book : array();
                $music = $music ? $music : array();
    
                //合并数组
                $result = array_merge($book,$music);
    

            } else {

                $result = $result_movie;

            }

        }


        //结果
        echo json_encode($result);


    } else {
        die('参数无效！');
    }


?>