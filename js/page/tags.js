
	var time1;
	$(".Hui-tags-lable").show();
	$(".Hui-tags-input").val("");
	$(document).on("blur",".Hui-tags-input",function(){
		time1 = setTimeout(function(){
			$(this).parents(".Hui-tags").find(".Hui-tags-list").slideUp();
		}, 400);
	});
	$(document).on("focus",".Hui-tags-input",function(){
		clearTimeout(time1);
	});
	$(document).on("click",".Hui-tags-input",function(){
		$(this).find(".Hui-tags-input").focus();
		$(this).find(".Hui-tags-list").slideDown();
	});
	function gettagval(obj){
		var str ="";
		var token =$(obj).parents(".Hui-tags").find(".Hui-tags-token");
		//alert(token.length)
		if(token.length<1){
			$(obj).parents(".Hui-tags").find(".Hui-tags-val").val("");
			return false;
		}
		for(var i = 0;i< token.length;i++){
			str += token.eq(i).text() + ",";
			$(obj).parents(".Hui-tags").find(".Hui-tags-val").val(str);
		}
	}
	$(document).on("keydown",".Hui-tags-input",function(event){
		$(this).next().hide();
		var v = $(this).val().replace(/\s+/g, "");
		var reg=/^,|,$/gi;
		v=v.replace(reg,"");
		v=$.trim(v);
		var token =$(this).parents(".Hui-tags").find(".Hui-tags-token");
		if(v!=''){
			if(event.keyCode==13||event.keyCode==108||event.keyCode==32){
				$('<span class="Hui-tags-token">'+v+'</span>').insertBefore($(this).parents(".Hui-tags").find(".Hui-tags-iptwrap"));
				$(this).val("");
				gettagval(this);
			}
		}else{
			if(event.keyCode==8){
				if(token.length>=1){
					$(this).parents(".Hui-tags").find(".Hui-tags-token:last").remove();
					gettagval(this);
				}
				else{
					$(this).parents(".Hui-tags").find(".Hui-tags-lable").show();
					return false;
				}
				
			}
		}	
	});
	
	$(document).on("click",".Hui-tags-has span",function(){
		var taghasV = $(this).text();
		taghasV=taghasV.replace(/(^\s*)|(\s*$)/g,"");
		$('<span class="Hui-tags-token">'+taghasV+'</span>').insertBefore($(this).parents(".Hui-tags").find(".Hui-tags-iptwrap"));
		gettagval(this);
		$(this).parents(".Hui-tags").find(".Hui-tags-input").focus();
	});
	$(document).on("click",".Hui-tags-token",function(){
		var token =$(this).parents(".Hui-tags").find(".Hui-tags-token");
		var it = $(this).parents(".Hui-tags");
		$(this).remove();
		switch(token.length){
			case 1 : it.find(".Hui-tags-lable").show();
			break;
		}
		var str ="";
		var token =it.find(".Hui-tags-token");
		//alert(token.length)
		if(token.length<1){
			it.find(".Hui-tags-val").val("");
			return false;
		}
		for(var i = 0;i< token.length;i++){
			str += token.eq(i).text() + ",";
			it.find(".Hui-tags-val").val(str);
		}		
	});