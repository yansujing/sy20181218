<?php

    // 阻止单独访问。只能在入口文件mian.php中加载
    if(!defined('ROOT')){
        die('BAD Request');
    }

    $option_main='';
    $option_sub='';


    // 从数据库中读取数据库-----读取一级分类
    $sql="SELECT id,cm_name FROM {$pre}catagoty_main WHERE id=2";

    $msql->execute($sql);

    $res=$msql->fetchquery();
    // while($res=$msql->fetchquery()){
        
        $option_main ='<option value="'.$res['id'].'">'.$res['cm_name'].'</option>';

    // }

    // 图书分类的ID
    $cid=$res['id'];

    // 从数据库中读取数据库-----读取二级分类
    $sql="SELECT id,cs_name FROM {$pre}catagory_sub WHERE pid=$cid";

    $msql->execute($sql);
    
    while($res=$msql->fetchquery()){
        
        $option_sub .='<option value="'.$res['id'].'">'.$res['cs_name'].'</option>';

    }
?>

<style>

.layui-select-title{
    width:200px;
    margin-right:6px;
}

.layui-btn{
    margin-right:20px;
}

</style>

<div class="add-box">
    <h2>新增音乐</h2>
    <form class="layui-form" action="main.php?go=music_add_do" method='post' enctype="multipart/form-data">
        <div class="layui-form-item" style='width:300px;'>
            <label class="layui-form-label">选择分类</label>
            <div class="layui-input-block"  style='display:flex'>
                <select name="catagory_main" id='catagory_main' lay-verify="required">

                    <?php echo $option_main; ?>

                </select>
                <select name="catagory_sub" id='catagory_sub' lay-verify="required">
                    <option value="">--- 请选择二级分类 ---</option>

                    <?php echo $option_sub; ?>

                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">音乐名称</label>
                <div class="layui-input-block">
                    <input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
                </div>
        </div>

         <div class="layui-form-item" style="display:flex;">

            <div>
                <label class="layui-form-label">歌手</label>
                <div class="layui-input-block">
                    <input type="text" name="singer" required lay-verify="required" placeholder="请输入歌手" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div>
                <label class="layui-form-label">作曲</label>
                <div class="layui-input-block">
                    <input type="text" name="compose" required lay-verify="required" placeholder="请输入作曲" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div>
                <label class="layui-form-label">作词</label>
                <div class="layui-input-block">
                    <input type="text" name="writer" required lay-verify="required" placeholder="请输入作词" autocomplete="off" class="layui-input">
                </div>
            </div>

        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">价格</label>
            <div class="layui-input-block">
                <input type="text" name="price" required lay-verify="required" placeholder="请输入价格" autocomplete="off" class="layui-input"  style='width:300px;'>
            </div>
        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">音乐封面</label>
            <div class="layui-input-block" style='display:flex;'>
                <div>
                    <button type="button" class="layui-btn" name='uploadPoster' id="uploadimg">
                        <i class="layui-icon">&#xe67c;</i>封面1
                    </button>

                    <input type="file" name="photo1" placeholder="请输入标题" autocomplete="off" class="layui-input" style='display:none;' id='upload1' accept="*/image"><span></span>
                </div>                   

            </div>
        </div>


        <div class="layui-form-item">
            <label class="layui-form-label">上架日期</label>
            <div class="layui-inline"> <!-- 注意：这一层元素并不是必须的 -->
                <input type="text" class="layui-input" id="update" style='width:272px;' name='update'>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">音乐地址</label>
                <div class="layui-input-block">
                    <input type="text" name="uri" required lay-verify="required" placeholder="请输入音乐地址" autocomplete="off" class="layui-input">
                </div>
        </div>

        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label">歌词</label>
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
    $("button[name='uploadPoster']").click(function(){

        // $('#upload').click();
        $(this).next().click();

    })

    $("input[type='file']").change(function(){
        console.log($(this).val());

        // 选择文件的数量
        const fp = $(this);
        console.log(fp[0].files);
        const length = fp[0].files.length; 

        if (length>1) {
            const text=length+'个文件';

            $(this).next().html(text);
        }else{
            $(this).next().html('1个文件');
        }

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

