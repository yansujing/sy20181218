
<?php

     // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    $id=intval($_GET['id']);

    // 语句
    $sql="DELETE FROM mi_class WHERE id=$id";

    $msql->execute($sql);

    $as=$msql->affectedRows();
    
    if($as >0){
        echo '删除成功';
        jumpurl('main.php?go=class_list',2000);
    }else{
        echo '删除失败';
    }

?>