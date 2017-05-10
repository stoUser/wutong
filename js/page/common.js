/*	项目名称：梧桐
 *	文件名称：梧桐系统框架内框架输入框架擦除Js文件
 *	开发时间：2017/04/28
 * 	开发人员：344822559@qq.com
 * */

$(function(){
	$('.layui-form > .layui-form-item > .layui-input-block,.layui-inline > .layui-input-inline').find('i.icon_ca_layui').on('click',function(){
		$(this).siblings('input').val('');
	});
	// Collapse ibox function
	$('.collapse-link').click( function() {
		var ibox = $(this).closest('div.main_b');
		var button = $(this).find('i');
		var content = ibox.find('div.ibox_tab_content');
		content.slideToggle(200);
		button.toggleClass('icon-sanjiao').toggleClass('icon-tripple-up');
/*		ibox.toggleClass('').toggleClass('border-bottom');*/
/*		setTimeout(function () {
			ibox.resize();
			ibox.find('[id^=map-]').resize();
		}, 50);*/
	});
})
