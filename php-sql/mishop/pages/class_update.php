<?php
    
    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 接收id
    $id=$_GET['id'];

    // 根据id查找数据
    $sql="SELECT title FROM mi_class WHERE id=$id limit 1";
    $msql->execute($sql);
    $res=$msql->fetchquery();

?>



<div class='add-box'>
    <h2>修改分类</h2>
    <form class="layui-form" action="main.php" method='post'>

        <!-- go -->
        <input type="hidden" name='go' value='class_update_do'>

        <!-- id -->
        <input type="hidden" name='id' value='<?php echo $id; ?>'>

        <div class="layui-form-item">
            <label class="layui-form-label" style='width:120px;'>输入分类名称</label>
            <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" style='width:400px;' value='<?php echo $res['title']; ?>'>
            </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-input-block" style='    margin-left: 150px;'>
                <button class="layui-btn" lay-submit lay-filter="formDemo">立即修改</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
</form>

</div>