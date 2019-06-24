<?php

header('Content-type:text/html;charset=utf8');

class fn{

    public $name='ysj';
    public $age=26;
    function __construct(){

        $this->name='哈哈';

        echo "<br />";

        $this->myfn(2);
    }
    function myfn($a){

        echo $a+=3;

    }

}

$people1=new fn();

echo($people1->name);

<select name="" id="">

    <option value=""></option>

</select>


?>