
<?php

    // 阻止单独访问。只能在入口文件main.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>

<div class='list-body'>

    <h2>二级分类页面</h2>


    <p class='addnew'><a href='main.php?go=class_add_sun'>新增二级分类项目</a></p>
    

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
                    <th>一级分类名称</th>
                    <th>二级分类名称</th>
                    <th>操作</th>
                </tr>
            </thead>
             <tbody>

                <?php


                    // 创建分页,
                    
                    // 每页显示的记录数
                    $pageRecords=15;

                    $sql="SELECT count(*) as total FROM {$pre}catagory_sub";

                    $url=$host.'/pinkshop/main.php?go=class_list_sun';

                    $page=$page?$page:1;
                    // 获取页码
                    $pagination=$msql->pagination($pageRecords,$sql,$url,$page);

                    // 开始读取的数据
                    $start=$pageRecords*($page-1);

                    // 读取分类信息
                    $sql="SELECT s.id as sid,cs_name,cm_name FROM {$pre}catagory_sub as s INNER JOIN {$pre}catagoty_main as m ON m.id=s.pid ORDER BY s.id LIMIT $start,$pageRecords";

                    $msql->execute($sql);

                    while($res=$msql->fetchquery()){

                        echo '<tr><td>'.$res['sid'].'</td><td>'.$res['cm_name'].'</td><td>'.$res['cs_name'].'</td><td><a href="main.php?go=class_update&id='.$res['id'].'">修改</a> | <a href="javascript:void(0)" class="delete" name="'.$res['sid'].'">删除</a></td></tr>';

                    }

                ?>
                    <tr><td colspan="4"><?php echo $pagination;?></td></tr>
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

                        window.location.href='main.php?go=class_delete&id='+id+'&tag=2';
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

