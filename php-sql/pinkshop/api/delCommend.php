<?php 

    require_once('../include/common.inc.php');


    $id=intval($id);
    if($id){
        $sql="DELETE FROM {$pre}commend WHERE id=$id";
        $msql->execute($sql);
        $res=$msql->fetchquery();
        
        $as=$msql->affectedRows();
        
        if($as>0){
            echo 'ok';
        }else{
            echo 'fail';
        }
    }


?>