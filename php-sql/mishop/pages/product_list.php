<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>



<div class='list-body'>
    <h2>产品管理</h2>
    <p class='addnew'><a href='main.php?go=product_add'>新增项目</a></p>
    

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
                    <th>ID</th>
                    <th>分类名称</th>
                    <th>产品名称</th>
                    <th>价格</th>
                    <th>上架日期</th>
                    <th>操作</th>
                </tr>
            </thead>
             <tbody>

                <?php
                    
                    // 读取分类信息
                    $sql="SELECT p.id as pid,p.title as ptitle,c.title as ctitle,price,dt FROM mi_class as c INNER JOIN mi_product as p ON p.cid=c.id ORDER BY p.id";
                    $msql->execute($sql);
                    while($res=$msql->fetchquery()){

                        $res['dt']=date('Y-m-d',$res['dt']);

                        echo '
                         <tr>
                            <th>'.$res['pid'].'</th>
                            <th>'.$res['ctitle'].'</th>
                            <th>'.$res['ptitle'].'</th>
                            <th>'.$res['price'].'</th>
                            <th>'.$res['dt'].'</th>
                            <th><a href="main.php?go=product_view&id='.$res['pid'].'">浏览</a> | <a href="main.php?go=product_update&id='.$res['pid'].'">修改</a> | <a href="javascript:void(0)" class="del" name="'.$res['pid'].'">删除</a></th>
                        </tr>';
                    }

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

                        window.location.href='main.php?go=product_delete&id='+id;
                    }, 
                    function(){
                       
                    }
                );
            });   
        })

    })

</script>

