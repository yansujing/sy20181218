<?php
    header('Content-type:text/html;charset=UTF-8');
    // array创建数组
    // 空数组
    $testArr1=array();

    // 初始化数组
    $testArr1=array('a','b','c');
    print_r($testArr1);

    // 自变量数组
    $testArr2[]='name';
    $testArr2[]='ysj';

    print_r($testArr2);

    // 关联数组
    $testArr3=array('name'=>'ysj','age'=>26);
    print_r($testArr3);
    $testArr4['name']='yintao';
    $testArr4['age']=29;
    print_r($testArr4);

    // 数组的长度
    echo count($testArr4);

    echo '<hr />';
    // 遍历数组
    foreach($testArr1 as $value){
        echo $value.'<br />';
    }
    
    // 判断是否是字符串
    // is_string(变量);
    // is_array(数组);
    // is_numeric(数字变量);
    // is_bool(布尔值);
    // is_object()
    echo is_string('sss');
    echo '<hr />';
    echo is_numeric(11);
    echo '<br />';
    $testArr5=array(44,55,66,75,1);
    asort($testArr5);
    print_r($testArr5);
    echo '<hr />';
    arsort($testArr5);
    print_r($testArr5);

    echo '<hr />';
    shuffle($testArr5);
    print_r($testArr5);

    echo '<br />';
    $testArr6=array('d','b','e','name'=>'a');
    $testArr6=array_reverse($testArr6);
    print_r($testArr6);

    // 是否在数组中
    if(in_array('c',$testArr6)){
        echo '在';
    }else{
        echo '不在';
    }
    //////////////////////////////////
    echo '<hr />';
    
    // 使用list() 把数组的元素，赋值给响应的变量
    $testArr7=array('0'=>'上',1=>'严',2=>'素',3=>'静');
    print_r($testArr7);
    list($v1,$v2,$v3)=$testArr7;
    echo $v1.$v3;
    echo count($testArr7);
    //////////////////////////////////
    // 用array_merge()合并数组
    echo '<br />';
    print_r(array_merge($testArr7,$testArr6));
    //////////////////////////////////    
    echo '<br />';
    // 使用array_unshift,在数组的第一行新增元素
    $testArr9=array('a','b');
    array_unshift($testArr9,'2');
    print_r($testArr9);
    

    /////////////////////////////////
    // 使用递归方式，处理多维数组
    echo '<hr />';

    $testArr8=array('apple',array('orange','pear',array('pink','red')),'banana');
    $result='';
    function foreachArr($arr){
        global $result;
        if(is_array($arr)){
           foreach($arr as $key => $value) {
               if(is_array($value)){
                   foreachArr($value);
               }else{
                   $result.=$key.'=>'.$value.'<br />';
               }
           }

        }else{
            echo '请传入数组';
        }
    }
    foreachArr($testArr8);
    echo $result;
?>