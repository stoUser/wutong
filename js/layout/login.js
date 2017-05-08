
$(function(){
	$('body').on('click','.login_tips .login_tips_btn', function(e){
		$('.tips_down').toggleClass('show');
	});

	layui.use(['form', 'layedit', 'laydate'], function(e){
		var form = layui.form(e),
			layer = layui.layer;

		//自定义验证规则
		form.verify({
			username: function(value,e){
				if(value.length < 5){
					errInputBg(e);
					return '必须为5位';
				}
			},
			pass: [/(.+){6,12}$/, '密码必须6到12位']
		});

		//监听提交
		form.on('submit(demo)', function(data){
			var e = data.elem;
			errAlert(e, '用户名错误！');
			layer.alert(JSON.stringify(data.field), {
				title: '最终的提交信息'
			});
			return false;
		});
	});
});



function errInputBg(e){
	$(e).addClass("form_danger");
	$(e).blur(function(){
		$(this).removeClass("form_danger")
	});
}

function errAlert(e,errText){
	$(e).parents('form').find('.Huialert').text(errText).addClass('show');
}

function closeParentForm() {
	if (typeof (dotNetBaseInstance) !== 'undefined' && dotNetBaseInstance != undefined && dotNetBaseInstance != null) {
		dotNetBaseInstance.closeParentForm();
	} else {
		window.close();
	}
}