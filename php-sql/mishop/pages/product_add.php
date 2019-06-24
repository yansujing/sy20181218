<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    // 从数据库中读取数据库
    $sql="SELECT id,title FROM mi_class";

    $msql->execute($sql);

    $option='';
    while($res=$msql->fetchquery()){
        
        $option .='<option value="'.$res['id'].'">'.$res['title'].'</option>';

    }

?>

<div class="add-box">
    <h2>新增产品</h2>
    <form class="layui-form" action="main.php?go=product_add_do" method='post' enctype="multipart/form-data">
        <div class="layui-form-item" style='width:300px;'>
            <label class="layui-form-label">选择分类</label>
            <div class="layui-input-block" >
                <select name="catagory" lay-verify="required">
                    <option value=""></option>

                    <?php echo $option; ?>

                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">产品名称</label>
                <div class="layui-input-block">
                    <input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
                </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">产品价格</label>
            <div class="layui-input-block">
                <input type="text" name="price" required lay-verify="required" placeholder="请输入价格" autocomplete="off" class="layui-input"  style='width:300px;'>
            </div>
        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">产品封面</label>
            <div class="layui-input-block">

                <button type="button" class="layui-btn" id="uploadimg">
                    <i class="layui-icon">&#xe67c;</i>上传图片
                </button>

                <input type="file" name="photo" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" style='display:none;' id='upload'><span></span>
            </div>
        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">上架日期</label>
            <div class="layui-inline"> <!-- 注意：这一层元素并不是必须的 -->
                <input type="text" class="layui-input" id="update" style='width:272px;' name='update'>
            </div>
        </div>



        <div class="layui-form-item">
            <label class="layui-form-label">是否推荐</label>
            <div class="layui-input-block">
                <input type="checkbox" name="switch" lay-skin="switch" value='1'>
            </div>
        </div>

        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label">文本介绍</label>
             <div class="layui-input-block">
                
                <div id="editor"></div>
                <textarea name="desc" id="text1" style='display:none;'></textarea>
            </div>

        </div>

        <div class="layui-form-item">
            <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </form>
</div>

<script>
    //Demo
    layui.use('form', function(){
        var form = layui.form;
        //监听提交
        form.on('submit(formDemo)', function(data){
            // layer.msg(JSON.stringify(data.field));
            // return false;
        });
    });

    layui.use('laydate', function(){
        var laydate = layui.laydate;
        //执行一个laydate实例
        laydate.render({
            elem: '#update' //指定元素
        });
    });



    // jquery
    $('#uploadimg').click(function(){

        $('#upload').click();

    })

    $('#upload').change(function(){
        // console.log($(this).val());
        $(this).next().html('1个文件');


    })

    var E = window.wangEditor;
    var editor = new E('#editor');
    var $text1 = $('#text1');


    editor.customConfig.onchange = function (html) {
        // 监控变化，同步更新到 textarea
        $text1.val(html);
    }

    editor.create();

    $text1.val(editor.txt.html());

</script>

