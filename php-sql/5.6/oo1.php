<?php

    header('Content-type:text/html;charset=utf8');
    //创建类
    class Person{
        public $name;
        // public:公开
        // protected 保护 被标注为protected的属性或者方法，不可以在实例化对象中执行，可以在标注为public的方法中执行,会继承给子类
        protected $age=21;
        // private 私有的 被标注为privated的属性或者方法，不可以在实例化对象中执行，可以在父类中标注为public的方法中执行，但是在子类中则不能继承private类型的方法或属性   不会继承给子类
        private $sex='男';
        function __construct(){
            // $this->name=$name;
            // $this->age=$age;
            echo '构造函数'.'<br />';
        }
        function init($sex){
            $this->sex=$sex;
            // echo $sex;
           return $this->myFn('苏州大学');
        }
        function myFn($school){
            return $this->school=$school.'!!';
        }
        public function getValue(){
            return $this->age;
        }
     }
    //实例化对象
    $p1=new Person('张三','33');
    $p2=new Person('李四',25);
    echo $p1->age;
    echo $p1->getValue();

//     // 读取对象的属性
//     echo '<hr />';
//     $p1_name=$p1->name;
//     $p1_age=$p1->age;
//     echo $p1_name.$p1_age;

// /////////////////////////////////////
//     echo '<br />';
//     // 设置对象中属性的值
//     // 1.直接给属性赋值
//     $p1->name='王二';
//     echo $p1->name;
    
//     // 2.通过构造函数改对象的属性值

//     // 3.通过执行对象的方法，传参数，改变对象的属性值
//     echo '<br />';
//     $p1->init('女');
//     echo $p1->sex;
//     echo '<br />';
//     $p1->init('nide');


//     echo '<hr />';
//     // 在函数内执行另一个函数
//     echo $p1->init('女');
//     echo $p1->school;
?>