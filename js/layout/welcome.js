/*	项目名称：梧桐
 *	文件名称：梧桐系统框架默认欢迎页Js文件
 *	开发时间：2017/04/20
 * 	开发人员：344822559@qq.com
 * */


/*点击默认页系统板块给框架页面添加tab标签*/
function addTopTab(url,title,tag){
	
	/*添加之前去除兄弟模块的选中状态*/
	$("#header_zm .tab_box_zm ul li.active", parent.document).removeClass('active');

	/*根据tag标签判断这个标签是否存在，如果存在就设置成选中状态*/
	var isTag=$("#header_zm .tab_box_zm ul li[tag='"+tag+"']", parent.document).length;
	
	if(!isTag){
		
		var Wh=$(window).height();
		
		/*给父级添加tab标签*/
		var strTab="<li data-src='"+url+"' class='active' tag='"+tag+"'><span>"+title+"</span><i></i></li>";
		$("#header_zm .tab_box_zm ul", parent.document).append(strTab);
		
		/*给父级框架注入iframe*/
		var iframeDiv="<div class='main_zm main_zm_block' tag='"+tag+"' style='height:"+Wh+"px'><iframe scrolling='yes' frameborder='0' src='"+url+"'></iframe></div>";
		$('.main_zm', parent.document).removeClass('main_zm_block');
		$('.main_zm:last', parent.document).after(iframeDiv);
		
	}else{
		$("#header_zm .tab_box_zm ul li[tag!='"+tag+"']", parent.document).find('i').removeClass('active');
		$("#header_zm .tab_box_zm ul li[tag='"+tag+"']", parent.document).addClass('active').siblings('li').removeClass('active');
		;
		$('.main_zm', parent.document).eq($("#header_zm .tab_box_zm ul li[tag='"+tag+"']", parent.document).index()).addClass('main_zm_block').siblings().removeClass('main_zm_block');
		
	}

}



function b(){
	t = parseInt(x.css('top'));
	y.css('top','40px');
	x.animate({top: t - 40 + 'px'},'slow');	//40为每行的高度
	if(Math.abs(t) == h-40){ //40为每行的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,4000);//滚动间隔时间 现在是6秒
}
$(document).ready(function(){
	$('.news_swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.news_swap');
	h = Math.ceil($('.news_li a').length/3) * 40; //40为每行的高度
	setTimeout(b,4000);//滚动间隔时间 现在是6秒
})
