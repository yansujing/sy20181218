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

    // 接收id
    $id=intval($_GET['id']);

    // 查询数据
    $sql="SELECT cid,c.title as ctitle,p.title as ptitle,price,cover,recommend,desct,dt FROM mi_product as p LEFT JOIN mi_class as c ON c.id=p.cid WHERE p.id=$id LIMIT 1";

    $msql->execute($sql);

    $rej=$msql->fetchquery();

    // 是否推荐
    $isR=$rej['recommend']?checked:'';

    // print_r($rej);

    $msql->error();


?>

<div class="add-box">
    <h2>产品修改</h2>

    <form class="layui-form" action="main.php?go=product_update_do" method='post' enctype="multipart/form-data">

    <!-- id的隐藏域 -->
    <input type="hidden" name='id' value="<?php echo $id;?>">

    
        <div class="layui-form-item" style='width:300px;'>
            <label class="layui-form-label">选择分类</label>
            <div class="layui-input-block" >
                <select name="catagory">
                    <option value=""><?php echo $rej['ctitle'];?></option>

                    <?php echo $option; ?>

                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">产品名称</label>
                <div class="layui-input-block">
                    <input type="text" name="title" placeholder="请输入标题" autocomplete="off" class="layui-input" value="<?php echo $rej['ptitle'];?>">
                </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">产品价格</label>
            <div class="layui-input-block">
                <input type="text" name="price" placeholder="请输入标题" autocomplete="off" class="layui-input"  style='width:300px;' value="<?php echo $rej['price'];?>">
            </div>
        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">产品封面</label>
            <div class="layui-input-block">

                <button type="button" class="layui-btn" id="uploadimg">
                    <i class="layui-icon">&#xe67c;</i>上传图片
                </button>

                <input type="file" name="photo" placeholder="请输入标题" autocomplete="off" class="layui-input" style='display:none;' id='upload'><span><?php echo $rej['cover'];?></span>
            </div>
        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">上架日期</label>
            <div class="layui-inline"> <!-- 注意：这一层元素并不是必须的 -->
                <input type="text" class="layui-input" id="update" style='width:272px;' name='update' value="<?php echo date('Y-m-d',$rej['dt']);?>">
            </div>
        </div>



        <div class="layui-form-item">
            <label class="layui-form-label">是否推荐</label>
            <div class="layui-input-block" id="checkbox" style="width:45px;">
                <input type="checkbox" name="switch" lay-skin="switch" <?php echo $isR;?> value="<?php echo $rej['recommend'];?>">
            </div>
        </div>

        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label">产品描述</label>
            <div class="layui-input-block">
                 <div id="editor"><?php echo $rej['desct'];?></div>
                <textarea name="desc" id="text1" style='display:none;'></textarea>

                <!-- <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea> -->
            </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo">立即修改</button>
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

    $('#checkbox').click(function(){

        // console.log(33);

        if($(this).find('input').attr('value')==='0'){
            $(this).find('input').attr('value',1);
        }else{
            $(this).find('input').attr('value',0);
        }
        
        // console.log(typeof $(this).find('input').attr('value'));
       

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

