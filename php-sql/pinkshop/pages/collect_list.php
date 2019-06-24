<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>



<div class='list-body'>
    <h2>收藏管理</h2>
    <!-- <p class='addnew'><a href='main.php?go=book_add'>新书上架</a></p> -->
    

    <div class='item-list'>

        <table class="layui-table">
            <colgroup>
                <col width="80">
                <col width='150'>
                <col width="200">
                <col width='100'>
                <col width='200'>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>OPENID</th>
                    <th>分类名称</th>
                    <th>产品名称</th>
                    <th>谁</th>
                    <th>收藏日期</th>
                    <th>操作</th>
                </tr>
            </thead>
             <tbody>

                <?php
                    
                    // 读取分类信息
                    $sql="SELECT b.id,b.mcid,b.scid,b.pid,openid,uid,collect_date,cs_name,cm_name FROM {$pre}collect as b LEFT JOIN {$pre}catagory_sub as s ON (b.scid=s.id) LEFT JOIN {$pre}catagoty_main as m ON (b.mcid=m.id) ORDER BY b.id DESC";

                    $msql->execute($sql);

                    while($res=$msql->fetchquery()){

                        $res['dt']=date('Y-m-d',$res['collect_date']);

                        echo '
                         <tr>
                            <th>'.$res['openid'].'</th>
                            <th>'.$res['cm_name'].'>'.$res['cs_name'].'</th>
                            <th>'.$res['pid'].'</th>
                            <th>'.$res['uid'].'</th>
                            <th>'.$res['dt'].'</th>
                            <th><a href="main.php?go=book_view&id='.$res['pid'].'">浏览</a> | <a href="main.php?go=product_update&id='.$res['pid'].'">修改</a> | <a href="javascript:void(0)" class="del" name="'.$res['pid'].'" data-mcid="'.$res['mcid'].'" data-scid="'.$res['scid'].'">删除</a></th>
                        </tr>';
                    }

                    $msql->error();

                ?>

             </tbody>
        </table>

    </div>

</div>

<script>

    $(function(){

        // $(".delete").click(function(){

        //     var that_=$(this);

        //     layui.use('layer', function(){
        //         var layer = layui.layer;
  
        //         layer.confirm('您确定要删除吗？', 
        //             {
        //                 btn: ['确定','取消'] //按钮
        //             }, 
        //             function(){
        //                 var id=that_.attr('name');
        //                 // console.log(id);

        //                 window.location.href='main.php?go=class_delete&id='+id;
        //             }, 
        //             function(){
                       
        //             }
        //         );
        //     });   
            
        // })

        // 删除
        $(".del").click(function(){
                        var that_=$(this);

            layui.use('layer', function(){
                var layer = layui.layer;
  
                layer.confirm('您确定要删除吗？', 
                    {
                        btn: ['确定','取消'] //按钮
                    }, 
                    function(){
                        var id=that_.attr('name');
                        // console.log(id);
                        var mcid=that_.attr('data-mcid');
                        var scid=that_.attr('data-scid');
                        console.log(mcid,scid);

                        window.location.href='main.php?go=book_delete&id='+id+'&mcid='+mcid+'&scid='+scid;
                    }, 
                    function(){
                       
                    }
                );
            });   
        })

    })

</script>

