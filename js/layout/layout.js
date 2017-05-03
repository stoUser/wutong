
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
	$('body').on('click','#header_zm .tab_box_zm ul li',function(event){
		$(this).addClass('active').siblings().removeClass('active');
		var tag=$(this).attr('tag');
		$('.main_zm').eq($(this).index()).addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
		if(tag=='home'){
			$('.main_zm').eq($(this).index()).find('iframe').attr('src','welcome.html');
		}
		event.stopPropagation(); 
	})

	/*关闭顶部tab标签*/
	$('body').on('click','#header_zm .tab_box_zm ul li i',function(event){
		/*
		 * 其实只需要判断当前点击的这个tab的li标签是否有active 就可以知道外面是否还有active标签
		 * 如果hasActive是true 那说明剩余就没有active的li标签了
		 * */
		var hasActive=$(this).parent('li').hasClass('active');
		var Tabli=$(this).parent('li').index();
		$('.main_zm').eq(Tabli).remove();
		$(this).parent('li').remove();
		
		if(hasActive){
			$('#header_zm .tab_box_zm ul li:last').addClass('active').find('i').addClass('active');
			$('.main_zm:last').addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
		}else{
			$('.main_zm').siblings().removeClass('main_zm_block');
			var divTag=$('#header_zm .tab_box_zm ul li[class="active"]').attr('tag');
			$(".main_zm[tag='"+divTag+"']").addClass('main_zm_block');
		}
		event.stopPropagation(); 
	})
	
	/*会员名点击下拉*/
	$('.guild_zm .memberName_zm').on('click',function(event){
		$('.guild_zm').find('.member_down').toggle();
		event.stopPropagation(); 
	})
	
	$(document).on('click',function(event){
		$('.guild_zm').find('.member_down').hide();
		event.stopPropagation(); 
	})
	
	$(document).on('click',function(event){
		$('.guild_zm').find('.member_down').hide();
		event.stopPropagation(); 
	})
	
	$('.guild_zm .member_down').on('click',function(event){
		event.stopPropagation();
	});
	
});


function openUrlInBrowser(url)
{
	if (typeof (dotNetBaseInstance) !== 'undefined' && dotNetBaseInstance != undefined && dotNetBaseInstance != null)
	{
		dotNetBaseInstance.openUrlInBrowser(url);
		//dotNetBaseInstance.openUrlInForm(url, '下载中心', false);
	} else
	{
		window.open(url);
	}
}

function closeParentForm() {
	if (typeof (dotNetBaseInstance) !== 'undefined' && dotNetBaseInstance != undefined && dotNetBaseInstance != null) {
		dotNetBaseInstance.closeParentForm();
		//dotNetBaseInstance.openUrlInForm(url, '下载中心', false);
	} else {
		window.close();
	}
}

function minimizedParentForm() {
	if (typeof (dotNetBaseInstance) !== 'undefined' && dotNetBaseInstance != undefined && dotNetBaseInstance != null) {
		dotNetBaseInstance.minimizedParentForm();
		//dotNetBaseInstance.openUrlInForm(url, '下载中心', false);
	}
}

function maximizedParentForm() {
	if (typeof (dotNetBaseInstance) !== 'undefined' && dotNetBaseInstance != undefined && dotNetBaseInstance != null) {
		dotNetBaseInstance.maximizedParentForm();
		//dotNetBaseInstance.openUrlInForm(url, '下载中心', false);
	}
}

function copyData(copyText) {
	hostLogon.setClipboardData(copyText);
}