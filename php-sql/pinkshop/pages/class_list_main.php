
<?php

    // 阻止单独访问。只能在入口文件main.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>

<div class='list-body'>

    <h2>一级分类页面</h2>


    <p class='addnew'><a href='main.php?go=class_add_main'>新增项目</a></p>
    

    <div class='item-list'>

        <table class="layui-table">
            <colgroup>
                <col width="150">
                <col width="200">
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>分类名称</th>
                    <th>操作</th>
                </tr>
            </thead>
             <tbody>

                <?php

                    // 读取分类信息
                    $sql="SELECT id,cm_name FROM {$pre}catagoty_main ORDER BY id";
                    $msql->execute($sql);
                    while($res=$msql->fetchquery()){
                        echo '<tr><td>'.$res['id'].'</td><td>'.$res['cm_name'].'</td><td><a href="main.php?go=class_update&id='.$res['id'].'">修改</a> | <a href="javascript:void(0)" class="delete" name="'.$res['id'].'">删除</a></td></tr>';
                    }

                ?>

             </tbody>
        </table>

    </div>

</div>

<script>

    $(function(){

        $(".delete").click(function(){

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

                        window.location.href='main.php?go=class_delete&id='+id+'&tag=1';
                    }, 
                    function(){
                       
                    }
                );
            });   

            // 获取id
            // var id=$(this).attr('name');
            // console.log(id);
            
            // 页面加载
            // window.location.href='main.php?go=class_delete&id='+id;
            
        })

    })

</script>

