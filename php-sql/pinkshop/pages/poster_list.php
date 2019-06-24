
<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>

<style>
.zoom{
    width:220px;
}

</style>

<div class='list-body'>

    <h2>封面页面</h2>


    <!-- <p class='addnew'><a href='main.php?go=class_add'>新增项目</a></p> -->
    

    <div class='item-list'>

        <table class="layui-table">
            <colgroup>
                <col width="50">
                <col width="300">
                <col width="200">
                <col width="100">
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>产品名称</th>
                    <th>分类名称</th>
                    <th>缩略图</th>
                    <th>操作</th>
                </tr>
            </thead>
             <tbody>

                <?php

                    // 创建分页,
                    
                    // 每页显示的记录数
                    $pageRecords=6;

                    $sql="SELECT count(*) as total FROM {$pre}poster";

                    $url=$host.'/pinkshop/main.php?go=poster_list';

                    $page=$page?$page:1;
                    // 获取页码
                    $pagination=$msql->pagination($pageRecords,$sql,$url,$page);

                    // 开始读取的数据
                    $start=$pageRecords*($page-1);

                    // 读取封面数据
                    $sql="SELECT p.id,cm_name,pid,mcid,scid,url FROM {$pre}poster as p LEFT JOIN {$pre}catagoty_main as m ON p.mcid=m.id ORDER BY p.id LIMIT $start,$pageRecords";

                    $msql->execute($sql);

                    while($res=$msql->fetchquery()){

                        // 读取产品名称
                        // 1.一级分类ID
                        $mcid=$res['mcid'];
                        $pid=$res['pid'];

                        
                        switch ($mcid) {
                            case 20:
                                
                                $sql="SELECT book_name as pname FROM {$pre}book WHERE $pid=id ORDER BY id LIMIT 1";
                                
                                break;
                            case 3:
                                
                                $sql="SELECT movie_name as pname FROM {$pre}movie WHERE $pid=id ORDER BY id LIMIT 1";
                                
                                break;
                            case 2:
                                
                                $sql="SELECT music_title as pname FROM {$pre}music WHERE $pid=id ORDER BY id LIMIT 1";
                                
                                break;

                            default:
                                # code...
                                break;
                        }

                        $msql->execute($sql,'sub');


                        $rex=$msql->fetchquery('sub');

                        $pname=$rex['pname'];

                        //分类名称
                        $scids=$res['scid'];

                        $sql="SELECT cs_name FROM {$pre}catagory_sub WHERE id IN ($scids)";

                        $msql->execute($sql,'yy');

                        $tempStr='';

                        while($rej=$msql->fetchquery('yy')){

                            $tempStr.=$rej['cs_name'].',';

                        }

                        $catagory_sub_value=substr($tempStr,0,-1);

                        echo '<tr><td>'.$res['id'].'</td><td>'.$pname.'</td><td>'.$res['cm_name'].'>'.$catagory_sub_value.'</td><td><img class="zoom" src="'.$res['url'].'"/></td><td><a href="main.php?go=class_update&id='.$res['id'].'">修改</a> | <a href="javascript:void(0)" class="delete" name="'.$res['id'].'">删除</a></td></tr>';

                        $msql->error();

                    }

                ?>
                <tr><td colspan="5"><?php echo $pagination;?></td></tr>
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

                        window.location.href='main.php?go=class_delete&id='+id;
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

