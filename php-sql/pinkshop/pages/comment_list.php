<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>



<div class='list-body'>
    <h2>评论管理</h2>
    <!-- <p class='addnew'><a href='main.php?go=book_add'>新书上架</a></p> -->
    

    <div class='item-list'>

        <table class="layui-table">
            <colgroup>
                <col width="100">
                <col width='100'>
                <col width="150">
                <col width="150">
                <col width='350'>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>OPENID</th>
                    <th>会员姓名</th>
                    <th>产品名称</th>
                    <th>评星</th>
                    <th>发表日期</th>
                    <th>操作</th>
                </tr>
            </thead>
             <tbody>

                <?php
                    
                    // 读取分类信息
                    $sql="SELECT id,openid,pid,commend_who,commend_stars,commend_date FROM {$pre}commend ORDER BY id";

                    $msql->execute($sql);

                    while($res=$msql->fetchquery()){

                        $res['dt']=date('Y-m-d',$res['commend_date']);

                        echo '
                         <tr>
                            <th>'.$res['openid'].'</th>
                            <th>'.$res['commend_who'].'</th>
                            <th>'.$res['pid'].'</th>
                            <th>'.$res['commend_stars'].'</th>
                            <th>'.$res['dt'].'</th>
                            <th><a href="main.php?go=book_view&id='.$res['pid'].'">浏览</a> | <a href="main.php?go=product_update&id='.$res['pid'].'">修改</a> | <a href="javascript:void(0)" class="del" name="'.$res['pid'].'" data-mcid="'.$res['mcid'].'" data-scid="'.$res['scid'].'">删除</a></th>
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

