Array.prototype.in_array = function(e){ 
    for(i=0;i<this.length;i++){
        if(this[i] == e)
			return true;
    }
    return false;
}

function getCookie(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
}

function SetWinHeight(obj, height, objid){
	 var win=obj;
	 
	 if(typeof(objid) != 'undefined'){
		win = document.getElementById(objid);
	 }

	 if(typeof(height) != 'undefined'){
		win.height = height;
		return true;
	 }

	 if (document.getElementById){
		  if (win && !window.opera){
			   if (win.contentDocument && win.contentDocument.body.offsetHeight) 
					win.height = win.contentDocument.body.offsetHeight; 
			   else if(win.Document && win.Document.body.scrollHeight)
					win.height = win.Document.body.scrollHeight;
			}
	 }
	 return true;
}

function goto_furl(url, furl){
	target = '';
	location_href = location.href;
	location_href = url_add_random(location_href);
	join_pre_str = url.indexOf('?')>0?'&':'?';
	if(target == ''){
		if (url == '/login/')
		{
			show_loginwin();
		}
		else
		{
			location.href = url + join_pre_str + 'furl=' + encodeURIComponent(location_href);
		}
	}
	else{
		alert(target);
	}
	return false;
}

function show_loginwin(){
	$("#LoginWinModal").modal();
}

function check_loginwin(vcode){
	user = $('#loginwin_emailorusername').val();
	
	if(user.length < 1){
		return false;
	}
	password = $('#loginwin_password').val();
	if(password.length < 1){
		return false;
	}

	saveme = '1';
	login_sessionid(user, password, vcode, saveme, errorback);
}

function errorback(error, msg, emailorusername){
	if (error > 10)
	{
		
		location.href = "/login/?emailorusername="+ emailorusername +"&msg=" + msg + "&time=" + Math.random();

	}
	else{
	}
	
	return;
}

function auto_show_hide(objid, showtime){
	$('#'+ objid).show();
	window.setTimeout("auto_hide('" + objid + "')", showtime);
}

function auto_hide(objid){
	$('#' + objid).hide();
}

var sessionid = '';
var nickname = '';
function get_sessionid(){
		$.ajax({url:"/jslogin/",async:false,data:{}, success:function(data){

			var obj = eval( "(" + data + ")" );		
			sessionid = obj.sessionid;
			nickname = obj.nickname;

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function send_sessionid(sessionid, nickname){
		//发送给服务器端、或保存在客户端， nickname可以用来判断登陆状态（空：未登陆， 其他：已登陆）
		return true;
}

function checkandloginshow(){
	$.ajax({url:"/jslogin/",async:true,data:{}, success:function(data){

			var obj = eval( "(" + data + ")" );		
			if(obj.nickname == '')
				show_loginwin();

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function checkloginstatus(callback){
	$.ajax({url:"/jslogin/",async:true,data:{}, success:function(data){
			var obj = eval( "(" + data + ")" );		
			if(obj.nickname == '')
				callback('nologin');
			else
				callback('login');

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function login_sessionid(emailorusername, password, vcode, saveme, callback){
		$.ajax({url:"/jslogin/",async:false,data:{emailorusername:emailorusername, password:password, vcode:vcode, saveme:saveme},dataType:'json', type:'post', success:function(data){
			  var obj = data;
			  if(obj.error == 0){
				//login success
				old_href = location.href;
				old_href_arr = old_href.split('#');
				prefix = (old_href_arr[0].indexOf("?") > 0)?'&':'?';
				new_href = old_href_arr[0] + prefix + Math.random();
				if (old_href_arr.length > 1)
					new_href += "#" + old_href_arr[1];
				location.href = "/mysurvey/"; //new_href;
			  }
			  else{
				  if (obj.error > 10)
				  {
					  callback(obj.error, obj.err_msg_urlencode, obj.emailorusername_urlencode);
				  }
				  else{
					  callback(obj.error, obj.err_msg, emailorusername);
				  }
			  }

		},error:function(xhr){
			alert(xhr.responseText)
		}});
}

function mod_password(oldpassword, newpassword, callback){
	$.ajax({url:"/member/data/pwd/",async:true,data:{oldpassword:oldpassword, password:newpassword, _xsrf:getCookie('_xsrf')}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						callback(data.result);
					}
					else{
						location.href="/";
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

function mod_username(username, callback){
	$.ajax({url:"/member/data/username/",async:true,data:{username:username, _xsrf:getCookie('_xsrf')}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						callback(data.result);
					}
					else{
						location.href="/";
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

var global_error = 0;
function check_register(field, value, operate, callback){
	$.ajax({url:"/checkmember/",async:true,data:{field:field, value:value, operate:operate}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						if (operate == 'sendmail' && data.result == 0 && field=='email')
						{
							location.href = '/register/?rtype=send&email=' + data.email + '&time=' + Math.random();
							return;
						}
						else if (operate == 'sendmail' && data.result == 1)
						{
							data.result = "该Email已经被占用。";
						}
						else if (data.result == 2)
						{
							data.result = "未登陆。";
						}
						
						if(field=='bindemail')
							callback(data.result, data);
						else
							callback(data.result);
					}
					else{
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

function check_forgotpwd(vcode, value, vvcode, operate, callback){
	$.ajax({url:"/forgotpwd/email/",async:true,data:{vcode:vcode, email:value, vvcode:vvcode, operate:operate, _xsrf:getCookie('_xsrf')}, dataType:'json', type:'post', success:function(data){
					
					if (data.error == 0)
					{
						if (operate == 'sendmail')
						{
							location.href = '/forgotpwd/send/?email=' + data.email + '&email_head=' + data.email_head + '&server_url=' + data.server_url + '&vvcode=' + data.vvcode + '&time=' + Math.random();
							return;
						}
						if (operate == 'sendmail_again')
						{
							callback('0');
							return;
						}
						
					}
					else if(data.error == 1)
					{
						if (operate == 'sendmail')
						{
							callback(data.msg);
						}
						if (operate == 'sendmail_again')
						{
							callback(data.msg);
						}
					}

					else{
						alert(data.error);
					}
		},error:function(xhr){
			alert(xhr.responseText);
		}});
}

function url_add_random(turl){
	old_href_arr = turl.split('#');
	prefix = (old_href_arr[0].indexOf("?") > 0)?'&':'?';
	new_href = old_href_arr[0] + prefix + Math.random();
	for(i=1; i< old_href_arr.length; i++)
		new_href += "#" + old_href_arr[i];
	//alert(new_href);
	return new_href;
}

/*
login_sessionid('stars.ji@xapp8.com', '123456', '', '1', callbackf);

function callbackf(msg){
	alert(msg);
}
*/


/* 
* 用来遍历指定对象所有的属性名称和值 
* obj 需要遍历的对象 
* author: Jet Mah 
*/ 
function ShowObjProperty( obj ) { 
	// 用来保存所有的属性名称和值 
	var props = "" ; 
	// 开始遍历 
	for ( var p in obj ){ 
		// 方法 
		if ( typeof ( obj [ p ]) == " function " ){ 
			obj [ p ]() ; 
		} else { 
			// p 为属性名称，obj[p]为对应属性的值 
			props += p + " = " + obj [ p ] + " \t\n " ; 
		} 
	} 
	// 最后显示所有的属性 
	alert ( props ) ; 
} 


function clear_red_input(){
		var length = $('.input-nothing').length;
		for(var i=0; i < length; i++){
			$('.input-nothing').eq(i).removeClass('input-nothing');
		}
}

function DataLength(fData)
{
	var intLength = 0;
	for (var i=0;i<fData.length;i++)
	{
		if ((fData.charCodeAt(i) < 0) || (fData.charCodeAt(i) > 255))
			intLength=intLength+2;
		else
			intLength=intLength+1;
	}
	return intLength;
}

var _gaq = _gaq || [];
var _hmt = _hmt || [];

function login_form_openapi(api){
	
	if (api == 'qq')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'QQLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/qqlogin']);

		_hmt.push(['_trackPageview', '/register/qqlogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'QQLogin']);
	}
	else if (api == 'sina')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'WeiboLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/weibologin']);

		_hmt.push(['_trackPageview', '/register/weibologin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'WeiboLogin']);

	}
	else if (api == 'taobao')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'TBLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/tblogin']);

		_hmt.push(['_trackPageview', '/register/tblogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'TBLogin']);
	}
	else if (api == 'renren')
	{
		_gaq.push(['_trackEvent', 'Register', 'Login', 'RenrenLogin']);
		_gaq.push(['_setAccount', 'UA-9592313-3']);
		_gaq.push(['_trackPageview', '/register/renrenLogin']);

		_hmt.push(['_trackPageview', '/register/renrenlogin']);
		_hmt.push(['_trackEvent', 'Register', 'Login', 'RenrenLogin']);
	}
	window.setTimeout("location.href = '/openapi/" + api + "/'", 500);

}

$(function(){
	$('#loginwin_password').keyup(function(event){
		if (event.keyCode == 13) {  
           check_loginwin('header');
           return false ;  
       }  
	});
})