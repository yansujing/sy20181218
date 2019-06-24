
<?php

     // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    $id=intval($_GET['id']);

    $tag=$_GET['tag'];
    
    if($tag==1){

        $sql="DELETE FROM {$pre}catagoty_main WHERE id=$id";

        $msql->execute($sql);

        $as=$msql->affectedRows();
        
        if($as >0){
            echo '删除成功';
            jumpurl('main.php?go=class_list_main',2000);
        }else{
            echo '删除失败';
        }

    }else if($tag==2){

        $sql="DELETE FROM {$pre}catagory_sub WHERE id=$id";

        $msql->execute($sql);

        $as=$msql->affectedRows();
        
        if($as >0){
            echo '删除成功';
            jumpurl('main.php?go=class_list_sun',2000);
        }else{
            echo '删除失败';
        }

    }else{

    }


  

?>