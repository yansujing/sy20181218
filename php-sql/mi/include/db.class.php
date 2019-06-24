<?php
    header('Content-type:text/html;charset=utf8');

class Mysql_{

    var $dbhost;
    var $dbuser;
    var $dbpwd;
    var $dbname;
    var $conn='';

    function __construct($dbhost,$dbuser,$dbpwd,$dbname){
        $this -> dbhost=$dbhost;
        $this -> dbuser=$dbuser;
        $this -> dbpwd=$dbpwd;
        $this -> dbname=$dbname;

        
        if(!$this -> conn){
            // 链接数据库
            $this -> init();
        }
        
    }
    // 初始化
    function init(){
        // 链接数据库
        $this -> conn=mysqli_connect($this -> dbhost,$this -> dbuser,$this -> dbpwd,$this -> dbname);
        // 设置编码
        mysqli_query($this -> conn,"set NAMES utf8");

    }

    // 执行语句
    function execute($sql,$tag='i'){

        $this -> result[$tag]= mysqli_query($this -> conn,$sql);

    }

    // 抓取查询数据
    function fetchquery($tag='i'){
        return mysqli_fetch_array($this -> result[$tag],MYSQL_ASSOC);
    }

    // 获取刚刚插入的ID
    function insertId(){
        return mysqli_insert_id($this->conn);
    }

    // 获取影响的行数
    function affectedRows(){
        return mysqli_affected_rows($this->conn);
    }

    // 获取最近一次数据库执行的错误信息
    function error(){
        echo mysqli_error($this->conn);
    }

    // 分页($pageRecords:一页展示几条数据)
    function pagination($pageRecords,$sql,$url,$page){

        // 计算总记录数
        $this->execute($sql);
        $res=$this->fetchquery();
        $totalRecords=$res['total'];
        
        // 总页码数
        $totalPages=ceil($totalRecords/$pageRecords);

        // 创建页码
        $pagination='';
        for($i=1;$i<=$totalPages;$i++){
            $pagination.='<a href="'.$url.'?page='.$i.'">'.$i.'</a>';
        }

        // 创建下一页
        $nextPageValue=$page+1;
        if($nextPageValue>$totalPages){
            $nextPageValue=$totalPages;
            }
        $nextPage='<a href="'.$url.'?page='.$nextPageValue.'">'.'下一页'.'</a>';

        // 创建上一页
        $prePageValue=$page-1;
        if($prePageValue==0){
            $prePageValue='1';
        }
        $prePage='<a href="'.$url.'?page='.$prePageValue.'">'.'上一页'.'</a>';

        // 返回完整的页码  上一页+数组页码+下一页
        return $prePage.$pagination.$nextPage;
    }
}

    // 实例化对象
    $msql=new mysql_($dbhost,$dbuser,$dbpwd,$dbname);

?>