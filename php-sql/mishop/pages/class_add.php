<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }
    
?>


<div class='add-box'>
    <h2 style="color:red;">新增分类</h2>

    <form class="layui-form" action="main.php" method='post'>

        <!-- go -->
        <input type="hidden" name='go' value='class_add_do'>

        <div class="layui-form-item">
            <label class="layui-form-label" style='width:120px;'>输入分类名称</label>
            <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" style='width:400px;'>
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