
/*	项目名称：梧桐
 *	文件名称：梧桐系统框架页面Js文件
 *	开发时间：2017/04/19
 * 	开发人员：344822559@qq.com
 * */


$(function(){
	
	/*窗口内容高度自适应*/
	$('.main_zm').height($(window).height()-60+'px');
	$(window).resize(function(){
		$('.main_zm').height($(window).height()-60+'px');
	})

	/*顶部tab标签切换*/
	$('body').on('click','#header_zm .tab_box_zm ul li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var tag=$(this).attr('tag');
		$('.main_zm').eq($(this).index()).addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');	
	})

	/*关闭顶部tab标签*/
	$('body').on('click','#header_zm .tab_box_zm ul li i',function(){
		
		var Tabli=$(this).parent('li').index();
		$('.main_zm').eq(Tabli).remove();
		$(this).parent('li').remove();
	
		/*判断删除当前标签之后是否有选中的tab标签，如果没有就选择最后一个标签设置选中状态*/
		var TabActive=$('#header_zm .tab_box_zm ul li.active').length;
		if(TabActive==0){
			$('#header_zm .tab_box_zm ul li:last').addClass('active').find('i').addClass('active');
			$('.main_zm:last').addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
		}else{
			$('.main_zm').eq($('#header_zm .tab_box_zm ul li.active').index()).addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
		}

	})
	
})