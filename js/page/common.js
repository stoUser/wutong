/*	项目名称：梧桐
 *	文件名称：梧桐系统框架内框架输入框架擦除Js文件
 *	开发时间：2017/04/28
 * 	开发人员：344822559@qq.com
 * */

$(function(){
	$('.layui-form > .layui-form-item > .layui-input-block,.layui-inline > .layui-input-inline').find('i.icon_ca_layui').on('click',function(){
		$(this).siblings('input').val('');
	});	
})
