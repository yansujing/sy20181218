<?php


    header('Content-type:text/html;charset=utf8');

    error_reporting(E_ALL || ~E_NOTICE);
    // $string='We all need love';
    // $res=strpos($string,'need');
    // if($res===0||$res!==false){
    //     echo 'yes';
    // }else{
    //     die('no');
    // }

    // $str=substr($string,$res,4);

    // echo $str;
    // $arrTemp = array('name'=>'小张','age'=>21,'hobby'=>'reading');
    // $i=’’;
    // foreach($arrTemp as $value){
    //     $i= '我的名字叫'.$arrTemp['name'].',年龄'.$arrTemp['age'].'爱好'.$arrTemp['hobby'];
    // }
    // // echo $i;
    // echo json_encode($i);

    // $arrLikes = array('apple','pear','orange','bananaer');
    // foreach($arrLikes as $key=> $value){
    //     if($value==='orange'){
    //         $arrLikes[$key]='grape';
    //     }
    // }
    // print_r($arrLikes);
    // $arr=array('jack',20,array('write','swimming'));
    // $newarr=array();

    // function newArr($arr){
    //     global  $newarr;
    //     if(is_array($arr)){

    //         foreach($arr as $value){
    //             if(is_array($value)){
    //                 newArr($value);
    //             }else{
    //                 $newarr[]=$value;
    //             }
    //         }

    //     }else{
    //         die('不是数组');
    //     }

    // }
    // newArr($arr);
    
    // print_r($newarr);
    // class Fruit {
    //     Public $name;
    //     Protected $color = 'red';
    //     Private $price;

    //     Function __contruct ($name,$price){
    //         $this -> name = $name;
    //         $this -> sale($price);
    //     }

    //     Protected function sale($p){
    //         $this -> price = $p;
    //     }

    //     Private function descript(){
    //         return '水果：'.$this->name;
    //     }
    // }

    // class Apple extends Fruit{

    //     Private function applePrice($price=78){
    //         return $this -> price;
    //     }

    // }

    // $myApple = new Apple('红富士',25);
    // $result = $myApple -> applePrice();
    // echo $result;
    // 设置user  cookie
    // setcookie('user','ysj',time()+3600);

    // 读取cookie
    // echo $_COOKIE['user'];

    // 删除cookie
    // setcookie('user','',time()-3600);

    // 开启session
    session_start();

    // 设置session
    // $_SESSION['user']='ysj111';

    // // 读取session
    // echo $_SESSION['user'];

    // // 删除session
    // unset($_SESSION['user']);
    
    // echo $_SESSION['user'];

//    echo date('Y-m-d H-i-s',time());

    // $arrTemp = array('apple',25,array('reading','sports'));

    // if(file_exists('about.txt')){
    //     die('已有此文本');
    // }else{

    //     $f=fopen('about.txt','w+');

    //     function newArr($arr){
    //         global $f;
    //         if(is_array($arr)){

    //             foreach($arr as $value){
    //                 if(is_array($value)){
    //                     newArr($value);
    //                 }else{
    //                     fwrite($f,$value."\r\n");
    //                 }
    //             }

    //         }else{
    //             die('不是数组');
    //         }

    //     }
    //     newArr($arrTemp);
    // }

    // $f=fopen('about.txt','r');
   
    // while(!feof($f)){
    //     $arr[]=fgets($f);
    // }

    // print_r($arr);

    // $conn=mysqli_connect('localhost','root','root','test1');
    // mysqli_query($conn,'set NAMES utf8');
    // $sql="INSERT INTO user (username,truename,age) VALUES ('sunning927','张学友',28)";
    // mysqli_query($conn,$sql);


    $conn=mysqli_connect('localhost','root','root','test1');
    mysqli_query($conn,'set NAMES utf8');
    // $sql="SELECT u.id as id,u.age as age,u.truename as truename,o.productname as pname,o.price as price as id FROM user as u INNER JOIN order as o ON u.id=o.uid WHERE (u.age>20 AND u.age<30) AND o.price>10";
    // $res=mysqli_query($conn,$sql);
    // while($result=mysqli_fetch_array($res)){
    //     echo $result['id'].$result['age'].$result['truename'].$result['pname'].$result['price'].'<br/>';
    // }

    // $sql="UPDATE user set age=18 WHERE username LIKE '%g%'";
    // mysqli_query($conn,$sql);

    $sql="DELETE FROM user WHERE age>20";
    mysqli_query($conn,$sql);

    echo mysqli_error($conn);
?>