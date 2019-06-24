<?php
    // 使此php用utf8解析
    header('Content-type:text/html;charset=utf8');

    // 创建类
    class handle{

        // 类属性
        public $dbhost;
        public $dbuser;
        public $dbpwd;
        public $dbname;
        public $conn;

        // 构造函数
        function __construct($dbhost,$dbuser,$dbpwd,$dbname){

            $this->dbhost=$dbhost;
            $this->dbuser=$dbuser;
            $this->dbpwd=$dbpwd;
            $this->dbname=$dbname;

            // 连接数据库
            if(!$this->conn){
                $this->init();
            }
            
        }

        function init(){
            // 连接
            $this->conn=mysqli_connect($this->dbhost,$this->dbuser,$this->dbpwd,$this->dbname);

            // 让数据库用utf8解析
            mysqli_query($this->conn,'set NAMES utf8');

        }

        // 执行sql语句
        function execute($sql,$tag='i'){

            $this->result[$tag]=mysqli_query($this->conn,$sql);

        }

        // 抓取查询数据
        function fetchquery($tag='i'){
            return mysqli_fetch_array($this->result[$tag],MYSQL_ASSOC);
        }

        // 获取刚插进去的id
        function insertId(){
            return mysqli_insert_id($this->conn);
        }

        // 影响的行数
        function affectedRows(){
            return mysqli_affected_rows($this->conn);
        }

        // 获取错误信息
        function error(){
            echo mysqli_error($this->conn);
        }

        // 分页
        function pagination($pageRecords,$sql,$url,$page){

            //计算总共数据
            $this->execute($sql);
            $res=$this->fetchquery();

            $total=$res['total'];

            // 总页码
            $total=ceil($total/$pageRecords);

            $pagination='';
            for($i=1;$i<=$total;$i++){
                $pagination.='<a href="'.$url.'?page='.$i.'">'.$i.'</a>';
            }

            // 创建下一页
            $nextPageValue=$page+1;
            if($nextPageValue>$total){
                $nextPageValue=$total;
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
    $dbhost='localhost';
    $dbuser='root';
    $dbpwd='root';
    $dbname='member';

    $msql=new handle($dbhost,$dbuser,$dbpwd,$dbname);

    $page=$_GET['page']?$_GET['page']:1;

    echo $msql->pagination(3,"SELECT COUNT(*) as total FROM user",'win.php',$page);

?>