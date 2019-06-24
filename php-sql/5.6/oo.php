<?php

    //限制报错
    // error_reporting(0);

    //设置头部,charset=utf8防止中文乱码
    header("Content-type:text/html;charset=utf-8");

    //创建类
    class Person {

        //成员属性
        public $name;
        protected $age = 21;
        public $school = '苏州大学';
        private $sex = '男';

        //成员方法

        //成员方法-构造函数(实例化时被自动执行,也就是new的时候被执行)
        function __construct($name,$age=24){
            
            $this ->name = $name;
            $this ->age = $age;

        }

        //成员方法-自定义方法
        protected function init($school){

            $this ->school = $school;
            
            //执行另一个函数
           return $this ->myFn($school);

        }

        //成员方法-自定义方法
        private function myFn($str=''){

            return $str.'!!';

        }

        public function getValue(){
            
            echo $this ->age;

            echo $this ->sex;
        }

    }

    //实例化对象
    $p1 = new Person('张三',34);
    $p2 = new Person('李四',15);

    //更多对象...

    //////////////////////////////////////////////////////////////////////////////////

    //读取对象的属性
    $p1_name = $p1 -> name;
    $p2_name = $p2 -> name;
    // $p2_age = $p2 -> age;

    //设置对象的属性值
    //方式一：直接给属性赋值
    $p1 -> name = '小海';
    $p2 -> name = '小花花';
    // $p2 -> age = 18;

    //方式二：通过函数（一般是构造函数）传参方式
    

    //执行成员方法
    // $p1 ->init('南京大学');
    
    $p1 ->getValue();

    //////////////////////////////////////////////////////////////////////////////////

    //在一个函数中执行另外一个函数
//    $res = $p1 -> init('北京大学');


    //////////////////////////////////////////////////////////////////////////////////

    //子类
    class SuperMen extends Person {

        //子类的属性
        var $name = '超人';


        //子类的构造函数
        function __construct($name){
            $this -> name = $name;
            $this ->ChildFn();
            // echo '111';
        }


        //子类的自定义函数
        function ChildFn(){
           echo $this ->sex;
           $this -> myFn();
        }

        //方法重载,(参数与父类一致)
        function myFn22222($str2=''){
            echo '重载！';
        }

    }

    //实例化一个子类对象
    $S1 = new SuperMen('小超人');
    echo $S1->name;
    $S1 ->myFn();

    $S1 -> ChildFn();

//////////////////////////////////////////////////////////////////////////////////
//权限
//public：公开
//protected: 被标注为protected的属性或者方法，不可以在实例化对象中执行！！！！！，可以在标注为public的方法中执行。
//private: 被标注为private的属性或者方法，不可以在实例化对象中执行！！！！！，在父类中可以在标注为public的方法中执行，但是在子类中则不能继承private类型的方法或属性(不能执行)。

?>