<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    $sql="SELECT id,cm_name FROM {$pre}catagoty_main";

    $msql->execute($sql);

    $tempOptions='';

    while($res=$msql->fetchquery()){
        $tempOptions.='<option value="'.$res['id'].'">'.$res['cm_name'].'</option>';
    }
    
?>
<style>
    .layui-input{
        width:46%;
    }
    .layui-form-select{
        /* width:46%; */
    }
    .layui-form-select .layui-edge {
        right:440px !important;
    }
    .layui-form-select dl {
        min-width:53%;
    }
</style>

<div class='add-box'>
    <h2 style="color:red;">新增二级分类</h2>

    <form class="layui-form" action="main.php" method='post'>

        <!-- go -->
        <input type="hidden" name='go' value='class_add_do_sun'>

        <div class="layui-form-item">
            <label class="layui-form-label" style='width:120px;'>选择一级分类</label>
            <div class="layui-input-block">
            <select name="main_catatory" lay-verify="required">
                <option value=""></option>
                <?php echo $tempOptions;?>
            </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label" style='width:120px;'>输入分类名称</label>
            <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" style='width:400px;'>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label" style='width:120px;'>输入图标文件名称</label>
            <div class="layui-input-block">
                <input type="text" name="icoName" placeholder="请输入图标文件名称" autocomplete="off" class="layui-input" style='width:400px;'>
            </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-input-block" style='margin-left: 150px;'>
                <button class="layui-btn" lay-submit lay-filter="formDemo">立即新增</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>

    </form>

</div>

<script>
//Demo
    layui.use('form', function(){
        var form = layui.form;
  
  //监听提交
//   form.on('submit(formDemo)', function(data){
//     layer.msg(JSON.stringify(data.field));
//     return false;
//   });
    });
</script>