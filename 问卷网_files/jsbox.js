$(window).resize(jsbox_csh);
function jsbox_csh(){
	   var zw = document.documentElement.clientWidth || document.body.clientWidth;
       var zh = document.documentElement.clientHeight || document.body.clientHeight;
//	   var html_h = $("body").height();
//	   alert(html_h);
//	   $('#lightBox').height(html_h);
}
//$(window).ready(jsbox);


var jsbox = function(_options){
  
  var options_ =$.extend({
		 onlyid:"",//弹出层ID
		 content:false,//内容	
		 url:"",//数据地址
		 url_css:false,//样式表地址
		 iframe:false,//使用iframe
		 ajax:false,//使用ajax
		 loads:false,//使用load
		 title:false,//标题
		 footer:false,//底部
	     drag:false,//拖动
	     slide:false,//弹出向下滚动
		 conw:200,//宽度
		 //conh:400,//高度
		 FixedTop:false,//弹出层出现位置
		 FixedLeft:false,//弹出层出现位置
		 Opacity:.4,//透明度
		 mack:false,//遮罩
		 range:false,//移动范围
		 Save_button:false,//保存按钮
		 Ok_button:false,//确定按钮
		 sd:"slow",//弹出速度
		 Close:true,
		 buttonCon:false,
		 functions:false,//返回函数
		 loadIcon:'cj/jsbox/images_jsbox/loading.gif',//加载提示图片路径
		 error:'<h3>Error 404</h3>'//ajax报错信息
  }, _options || {});
  
  var zw = document.documentElement.clientWidth || document.body.clientWidth;
  var zh = document.documentElement.clientHeight || document.body.clientHeight;
  var optionsID = new Date().getTime();
  //var options = ".jsbox";
  var options = ".jsbox"+optionsID;
  this.show = function(){
          $("#"+options_.onlyid).remove();
		  
		  var wc="";
		  (options_.FixedLeft!=false)?wc = options_.FixedLeft:wc = zw/2- options_.conw/2;
		   
		  var hc="";	 
		  (options_.FixedTop!=false)? hc = options_.FixedTop:hc = zh/2- 150;
		  
		  (options_.buttonCon!=false)? options_.buttonCon = options_.buttonCon:options_.buttonCon = "确定";
		
		  var $show = $(options);
		  var $tdcon = $('.centerCenter');
		  var jsboxContent = $('.jsboxContent');
		  var loading = $('<div class="loading"></div>');
		  //var urlcss = $('<link rel="stylesheet" type="text/css" href="../../../../js/plug-in/jsbox/'+options_.url_css+'.css" />');
		  var save_button = $("<label class='jsboxAn_save'><input type='button' onClick='"+options_.Save_button+"' value='"+options_.buttonCon+"'></label>");
		  var ok_button = $("<label class='jsboxAn_ok'><input type='button' onClick='"+options_.Ok_button+"' value='"+options_.buttonCon+"'></label>");
		  if(options_.Close == true){
		       var Close = '<a href="javascript:void(0)" title="关闭" class="jsbox_close">';
		  }else{
			   var Close = '<a style="display:none;" href="javascript:void(0)" title="关闭" class="jsbox_close">';
			  }
		  var boxtitle = $('<h2 class="jsboxTitle">'+options_.title+'</h2>'+Close+'</a>');
		  var boxfooter = $("<div class='jsboxFooter'><label class='jsboxAn_Cancel'><input class='Cancel' type='button' value='取消'></label></div>");
		  var zon = "<div class=\"popupComponent "+options_.onlyid+"_lightBox\" id=\"lightBox\"><div class=\"popupCover\"></div></div>";
		  var con = "<div id='"+options_.onlyid+"' class='jsbox jsbox"+optionsID+"'>"+
					"<div class='jsboxContent' style='width:"+options_.conw+"px;height:"+options_.conh+"px;'></div>"+
					"</div>";
					
		  if(options_.mack != false){
			  $("body").append(zon).fadeTo("500", 1);
			  var html_h = $("body").height();
			  var wid_h = $(window).height();
			  var mack_h = '';
			  if(html_h>wid_h){mack_h=html_h}else{mack_h=wid_h};
			  $('.'+options_.onlyid+'_lightBox').show().height(mack_h);
		  }
		  
		    var Tollp = $("html").scrollTop() || document.body.scrollTop | document.documentElement.scrollTop;
		  $("body").append(con);
		  $(options).css({top:hc+Tollp-50,left:wc-10});	//修改左定位：left:wc
		  $(".topLeft,.topCenter,.topRight,.centerLeft,.centerRight,.bottomLeft,.bottomCenter,.bottomRight").fadeTo(20, options_.Opacity);
		  
		  
		  var iframeh;
		  if(options_.title != false && options_.footer != false){
			  $('.jsboxContent',options).append(boxtitle);
			  $('.jsboxContent',options).append(boxfooter);
			  if(options_.Save_button != false){$(".jsboxFooter",options).prepend(save_button);}
			  if(options_.Ok_button != false){$(".jsboxFooter",options).prepend(ok_button);}
			  iframeh = options_.conh - 69;
		  }else if(options_.title != false){
			  $('.jsboxContent',options).append(boxtitle);
			  iframeh = options_.conh - 30;
		  }else if(options_.footer != false){
			  $('.jsboxContent',options).append(boxfooter);
			  iframeh = options_.conh - 40;
			  if(options_.Save_button != false){$(".jsboxFooter",options).prepend(save_button);}
			  if(options_.Ok_button != false){$(".jsboxFooter",options).prepend(ok_button);}
		  }else{iframeh = options_.conh}
		  


		  var iframe = $('<iframe name="jsboxFrame" class="iframebox" style="width:100%; height:'+iframeh+'px;" frameborder="no" border="0"></iframe>');
		  var ajaxcon = $('<div class="jtycom" style="width:100%; height:'+iframeh+'px;"></div>');
		  var loaddiv = $('<div class="loaddiv" style="display:block; height:'+iframeh+'px;"></div>');
		  var content = $('<div class="loaddiv" style="display:block; height:'+iframeh+'px;">'+options_.content+'</div>');
		  
		  if(options_.url != false && options_.iframe != false){
				$('.jsboxContent',options).append(loading);

				if(options_.footer != false){
				    $(".jsboxFooter",options).before(iframe);
				}else{
				    $('.jsboxContent',options).append(iframe);
				}
				
				$('.iframebox',options).hide().attr("src",options_.url);
				$('.iframebox',options).load(function(){
				    $(this).show();
					$(".jsboxFooter",options).show();
					loading.fadeTo(500,0).hide();
				}); 
		  }else if(options_.url != false && options_.ajax != false){
				$('.jsboxContent',options).append(loading);
				
				$.ajax({
					   url:options_.url,
					   type:'GET',
					   dataType:'json',
					   error:function(){
						 $('.jsboxContent',options).html(options_.error);
					   },
					   success:function(date){
						   
						   if(options_.url_css != false){
							   //加载样式表
							   if ($("link[href$='"+options_.url_css+".css']").length == 0){
								 var css_href = options_.url_css+'.css';
								 var styleTag = document.createElement("link");
								 styleTag.setAttribute('type', 'text/css');
								 styleTag.setAttribute('rel', 'stylesheet');
								 styleTag.setAttribute('href', css_href);
								 $("head")[0].appendChild(styleTag);
								}
						   }
						   
						   $('.jsboxContent',options).append(ajaxcon); 
						   loading.fadeTo(500,0).hide();
						   if(options_.footer != false){
							    $(".jsboxFooter",options).show();
								$('.jsboxContent',options).append(boxfooter);
						   }else{
								$('.jsboxContent',options).append(ajaxcon);
						   }
						   if(options_.content!=false){options_.content(date)};
						}
			    });
			  
		  }else if(options_.url != false && options_.loads != false){
			    //if(options_.url_css!=false){$('head').append(urlcss)}
				$('.jsboxContent',options).append(loading);
				if(options_.url_css != false){
					//加载样式表
					if ($("link[href$='"+options_.url_css+".css']").length == 0){
					 var css_href = options_.url_css+'.css';
					 var styleTag = document.createElement("link");
					 styleTag.setAttribute('type', 'text/css');
					 styleTag.setAttribute('rel', 'stylesheet');
					 styleTag.setAttribute('href', css_href);
					 $("head")[0].appendChild(styleTag);
					}
				}
				
				
				
				if(options_.footer != false){
				    $(".jsboxFooter",options).before(loaddiv);
				}else{
				    $('.jsboxContent',options).append(loaddiv);
				}
				
				//$('.jsboxContent',options).append(loading);
				$('.loaddiv',options).load(options_.url,function(){
					   loading.hide();											 
					   $(".jsboxFooter",options).show();
					   if(options_.functions != false){
						    loadfun();
							$('.loaddiv').css({"background":"none"});
					   }
					   											   
				});
		  }else{
			   
			   if(options_.footer != false){
				    $(".jsboxFooter",options).before(content);
				}else{
				    $('.jsboxContent',options).append(content);
				}
			    $(".jsboxFooter",options).show();		
		  }
		  
		   
		   //if(!$show.is(":animated") ){ 
			 if(options_.drag != false){jsbox_yd()}else{jsbox_hd(options_.sd)}
			 if(options_.slide != false){jsbox_hdx()}else{jsbox_hd()}	 
		   //}
		   
		   $(".jsboxAn_Cancel",options).live('click',function(){
				$(this).parents(options).remove();
				$('.'+options_.onlyid+'_lightBox').remove();
		   });
		   $(".jsbox_close",options).live('click',function(){
				$(this).parents(options).remove();
				$('.'+options_.onlyid+'_lightBox').remove();
		   });
	  
   }


//移动
var jsbox_yd = function(){
	var _move=false;//移动标记
	var _x,_y;//鼠标离控件左上角的相对位置
	
	$(".jsboxTitle",options).mousedown(function(e){
		_move=true;
		_x=e.pageX-parseInt($(options).css("left"));
		_y=e.pageY-parseInt($(options).css("top"));
		
		//z-index
		if($(".index_z").length == 0){
		   $("body").append('<input class="index_z"type="hidden" value="1300"/>');
		}
		var zzs = $(".index_z").val()*1+1;
		var zjleng = $(".index_z").val(zzs);
		$(options).css({"z-index":zzs});
        
		
		$('.ud').text(_y);  
		
	});
	
	
		
//	$(".jsboxTitle",options).mouseup(function(e){
//		$('.ud').text('放开');  
//	    _move=false;
//	   	
//    });
	
	
	var zsw = $(options).width();
	var zsh = $(options).height();
    
	
	var zws = document.documentElement.clientWidth || document.body.clientWidth;
	var zhs = document.documentElement.clientHeight || document.body.clientHeight;
	var obje = $(options);
	$(document).mousemove(function(e){		
		if(_move){
			
			var ws = zws-zsw;
			var hs = zhs-zsh;
			var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
			var y=e.pageY-_y;
			if(options_.range!=false){
				if(x <= 0){x = 0}
				if(x >= ws){x = ws}
				if(y <= 0){y = 0}
				if(y >= hs){y = hs}
			}
			obje.css({top:y,left:x});//控件新位置
		}
	}).mouseup(function(){
	   _move=false;
	   return false;
	});	
}
	
function jsbox_hd(sd){
	$(options).fadeIn(sd);
}
function jsbox_hdx(){
	$(options).fadeIn('slow').animate({opacity:'100',top:"+=50"},'slow');					
}

}