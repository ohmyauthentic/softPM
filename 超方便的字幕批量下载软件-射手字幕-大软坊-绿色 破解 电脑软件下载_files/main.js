Function.prototype.method = function(name, func) {
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;
}

function t_t(targ) {
	if(typeof targ === "string") {
		var first_letter = targ.substr(0, 1),
			other_letter = targ.substr(1);
		switch (first_letter) {
		case "#":
			return document.getElementById(other_letter);
			break;
		case ".":
			if (document.querySelectorAll) {
				return document.querySelectorAll(targ);
			} else {
				var targArr = [];
				function getNode(elem){
					if(elem.className){
						var classArr = elem.className.split(" ");
						for(var i = 0; i < classArr.length; i++){
							if(classArr[i] == other_letter) {
								targArr.push(elem);
								break;
							}
						}
					}
					if(elem.childNodes[1]){
						for(var i = 0; i < elem.childNodes.length; i++){
							if(elem.childNodes[i].nodeType == 1){
								getNode(elem.childNodes[i]);
							}
						}
					}
				}
				getNode(document.body);
				return targArr;
			}
			break;
		default: 
			return document.getElementsByTagName(targ);
		}
	}
}

t_t.addClass = function(elem, newClass){
	if(!elem) 
		return false;
	else if(!elem.className) {
		elem.className = newClass;
		return false; 
	}
	else {
		var ownClass = elem.className.split(" "), had = false;
		for(var i = 0; i < ownClass.length; i++){
			if(ownClass[i] === newClass){
				had = true;
				break;
			}
		}
		if(!had){
			elem.className += " " + newClass;
		}
		return had;
	}	
};

t_t.removeClass = function(elem, oneClass){
	if(!elem || !elem.className) return false;
	var ownClass = elem.className.split(" "),
		had = false;
	for(var i = 0; i < ownClass.length; i++){
		if(ownClass[i] === oneClass){
			ownClass.splice(i, 1);
			had = true;
			break;
		}
	}
	if(had){
		elem.className = "";
		if(ownClass.length < 1){
			return had;
		}else if(ownClass.length == 1){
			elem.className = ownClass[0];
		}else if(ownClass.length >1){
			for(var i = 0; i < ownClass.length; i++){
				if(i == ownClass.length - 1){
					elem.className += ownClass[i];
				}else{
					elem.className += ownClass[i] + " ";
				}
			}
		}
	}	
	return had;	
};

t_t.addEvent = function(elem, eventName, handler){
	if(elem){
		if(elem.addEventListener){
			return elem.addEventListener(eventName, handler, false);
		}else if(elem.attachEvent){
			return elem.attachEvent("on" + eventName, handler);
		}else {
			elem["on" + eventName] = handler;
		}
	}
};

t_t.removeEvent = function(elem, eventName, handler){
	if(elem){
		if(elem.removeEventListener){
			return elem.removeEventListener(eventName, handler, false);
		}else if(elem.detachEvent){
			return elem.detachEvent("on" + eventName, handler);
		}else {
			elem["on" + eventName] = null;
		}
	}	
};

t_t.getEvent = function(event){
	return event ? event : window.event;
};

t_t.getTarget = function(event){
	return event.target || event.srcElement;
};

t_t.getRelatedTarget = function(event){
	return event.relatedTarget || event.toElement || event.fromElement || null;
};

t_t.contains = function(parent, cur){
	while(cur.parentNode){
		if(cur.parentNode === parent){
			return true;
		}
		cur = cur.parentNode;
	}
	return false;
};

t_t.preventDefault = function(event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
};

t_t.stopPropagation = function(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancleBubble = true;
	}
};

t_t.get_pos = function(elem){
	if(!elem) return false;
	var left = elem.offsetLeft,
		top = elem.offsetTop,
		current = elem.offsetParent;
	while(current !== null){
		left += current.offsetLeft;
		top += current.offsetTop;
		current = current.offsetParent;
	}
	return {"left": left, "top": top};
};

t_t.get_dir = function(elem, mouse_pos){
	if(!elem) return false;
	var pos = t_t.get_pos(elem),
		size = {"width": elem.offsetWidth, "height": elem.offsetHeight},
		dx = mouse_pos.x - pos.left - size.width/2,
		dy = (mouse_pos.y - pos.top - size.height/2)*-1,
		eve_tan = dy/dx,
		tan = size.height/size.width;
	if(dx != 0){
		if(eve_tan > tan*-1 && eve_tan < tan && dx < 0){
			return "left";
		}else if(eve_tan > tan*-1 && eve_tan < tan && dx > 0){
			return "right";
		}else if((eve_tan > tan || eve_tan < tan*-1) && dy > 0){
			return "top";
		}else if((eve_tan > tan || eve_tan < tan*-1) && dy <= 0){
			return "bottom";
		}
	}else if(dy > 0){
		return "top";
	}else {
		return "bottom";
	}
};

function params(o){ //将要传给后台的参数转化为字符串，以加入到url中
	var arr = [];
	for(var i in o){
		arr.push(i + "=" + encodeURIComponent(o[i]));
	}
	return arr.join("&");
}

t_t.ajaxp = function(args){ //创建script节点，向后台请求js，src节点携带我的参数信息
	var script = document.createElement("script");
	script.type="text/javascript";
	script.src = args.url + "?" + params(args.params);
	document.body.appendChild(script);
	var time = setTimeout(args.params.callback + "()", 6000); //设置超时时间，觉得不妥可以更改
	script.onload = function(){
		clearTimeout(time);
	};
};

t_t.show_tips = function(words, timeout) {
	var tips = t_t('.tips')[0] || (function() {
		var tips = document.createElement('div');
		tips.className = 'tips animated';
		return document.body.insertBefore(tips, document.body.firstChild);
	})();
	tips.innerHTML = words;
	t_t.removeClass(tips, 'hide');
	t_t.addClass(tips, 'show');
	setTimeout(t_t.hide_tips, timeout + 1000);
};

t_t.hide_tips = function() {
	var tips = t_t('.tips')[0];
	t_t.removeClass(tips, 'show');
	t_t.addClass(tips, 'hide');
	setTimeout('t_t.removeClass(t_t(".tips")[0], "hide")', 1000);
};

var pop = {
	mask: null,
	fdbc: {
		wrapper: t_t("#feedback-wrapper"),
		toggle_on: t_t("#anchor-feedback"), 
		toggle_off: t_t("#cancle-fdbc"),
		form: t_t("#form-feedback"),
		email: t_t("#ipt-fdbc-mail"),
		content: t_t("#ipt-fdbc-content"),
		submit_btn: t_t("#submit-fdbc")
	},
	ancmt: {
		wrapper: t_t("#ancmt-wrapper"),
		toggle_on: t_t("#anchor-ancmt"), 
		toggle_off: t_t("#close-ancmt")
	},
	popup: function(wrapper){
		if(!t_t('.mask')[0]){
			var mask = document.createElement("div");
			mask.className = "mask show";
			document.body.appendChild(mask);
			pop.mask = t_t(".mask")[0];
		}
		t_t.addClass(pop.mask, "animated");
		t_t.addClass(wrapper, "animated");
		t_t.addClass(wrapper, "show");
		t_t.removeClass(pop.mask, "fadeOut");
		t_t.addClass(pop.mask, "fadeIn");
		t_t.removeClass(wrapper, "flipOutX");
		t_t.addClass(wrapper, "flipInX");
	},
	popdown: function(wrapper){
		t_t.removeClass(wrapper, "show");
		t_t.removeClass(wrapper, "flipInX");
		t_t.addClass(wrapper, "flipOutX");
		t_t.removeClass(pop.mask, "fadeIn");
		t_t.addClass(pop.mask, "fadeOut");
	},
	bindEvent: function(){
		t_t.addEvent(pop.fdbc.toggle_on, "click", function(event){
			pop.popup(pop.fdbc.wrapper);
		});
		t_t.addEvent(pop.fdbc.toggle_off, "click", function(event){
			pop.popdown(pop.fdbc.wrapper);
		});
		t_t.addEvent(pop.fdbc.form, "submit", function(event){
			event = t_t.getEvent(event);
			t_t.preventDefault(event);
			pop.submit();
		});

		t_t.addEvent(pop.ancmt.toggle_on, "click", function(event){
			pop.popup(pop.ancmt.wrapper);
		});
		t_t.addEvent(pop.ancmt.toggle_off, "click", function(event){
			pop.popdown(pop.ancmt.wrapper);
		});
	},
	check: function(){
		if(pop.fdbc.email.value.length < 1){
			//console.log("不能不填邮箱，我们会及时回馈你的！");
			t_t.show_tips("不能不填邮箱，我们会及时回馈你的！", 2000);
			return false;
		}else if(pop.fdbc.content.value < 1){
			t_t.show_tips("不填反馈意见就不能提交哦！", 2000);
			return false;
		}else{
			return true;
		}
	},
	submit: function(){
		if(pop.check()){
			pop.fdbc.submit_btn.disabled = true;
			t_t.ajaxp({
				"url": "http://app.hustonline.net/feedback/index",
				"params": {
					"email": pop.fdbc.email.value,
					"content": pop.fdbc.content.value,
					"callback": "handle_pop"
				}
			});
		}
	},
	init: function(){
		pop.bindEvent();
	}
};


pop.init();

function handle_pop(response){
	pop.fdbc.submit_btn.disabled = false;
	switch(response){
		case "success": 
			t_t.show_tips("提交成功啦！", 1000);
			setTimeout(pop.popdown(pop.fdbc.wrapper), 2000);
			break;
		case "erro":
			t_t.show_tips("不好意思，提交失败了，请重试下", 1500);
			break;
		default: 
			t_t.show_tips("网络有问题，提交超时了！", 1500);
			break;
	}
}

var hover_dir = {
	wrapper: t_t(".major-list")[0],
	box: t_t(".major-item"),
	target: t_t(".back-face"),
	bindEvent: function(){
		var mouse_pos, x, y, stop_bubble;
		for(var i = 0; i < hover_dir.box.length; i++){
			(function(n){
				t_t.addEvent(hover_dir.box[n], "mouseover", function(event){
					event = t_t.getEvent(event);
					var relatedT = t_t.getRelatedTarget(event);
					if(!t_t.contains(hover_dir.box[n], relatedT)){
						var child = hover_dir.box[n].childNodes[0];
						t_t.stopPropagation(event);
						t_t.removeClass(hover_dir.target[n], "to-left") ||
						t_t.removeClass(hover_dir.target[n], "to-right") ||
						t_t.removeClass(hover_dir.target[n], "to-top") ||
						t_t.removeClass(hover_dir.target[n], "to-bottom");
						x = event.pageX;
						y = event.pageY;
						mouse_pos = {"x": x, "y": y};
						var dir = t_t.get_dir(hover_dir.box[n], mouse_pos);
						switch(dir){
							case "left": 
								t_t.addClass(hover_dir.target[n], "from-left");
								break;
							case "right": 
								t_t.addClass(hover_dir.target[n], "from-right");
								break;
							case "top": 
								t_t.addClass(hover_dir.target[n], "from-top");
								break;
							case "bottom":
								t_t.addClass(hover_dir.target[n], "from-bottom");
								break;
							default: break;
						}
					}
				});
				t_t.addEvent(hover_dir.box[n], "mouseout", function(event){
					event = t_t.getEvent(event);
					var relatedT = t_t.getRelatedTarget(event);
					if(!t_t.contains(hover_dir.box[n], relatedT)){
						t_t.removeClass(hover_dir.target[n], "from-left") ||
						t_t.removeClass(hover_dir.target[n], "from-right") ||
						t_t.removeClass(hover_dir.target[n], "from-top") ||
						t_t.removeClass(hover_dir.target[n], "from-bottom");
						x = event.pageX;
						y = event.pageY;
						mouse_pos = {"x": x, "y": y};
						var dir = t_t.get_dir(hover_dir.box[n], mouse_pos);
						switch(dir){
							case "left": 
								t_t.addClass(hover_dir.target[n], "to-left");
								break;
							case "right": 
								t_t.addClass(hover_dir.target[n], "to-right");
								break;
							case "top": 
								t_t.addClass(hover_dir.target[n], "to-top");
								break;
							case "bottom":
								t_t.addClass(hover_dir.target[n], "to-bottom");
								break;
							default: break;
						}
					}	
				});
			})(i);
		}
		// t_t.addEvent(hover_dir.wrapper, "mouseover", function(event){
		// 	event = t_t.getEvent(event);
		// 	var box = t_t.getTarget(event).nextSibling;
		// 	if(t_t.getTarget(event).className == "txt-hide front-face" && box && box.nodeType == 1){
		// 		var wrapper = box.parentNode.parentNode;
		// 		t_t.addEvent(wrapper, "mouseover", stop_bubble = function(){
		// 			//event = t_t.getEvent(event);
		// 			console.log(t_t.getTarget(event));
		// 			if(wrapper === t_t.getTarget(event)){
		// 				console.log("yeah");
		// 				t_t.removeEvent(wrapper, "mouseout", stop_bubble);
		// 			}else{
		// 				t_t.stopPropagation(event);
		// 			}
		// 		});
		// 		t_t.removeClass(box, "to-left") || 
		// 		t_t.removeClass(box, "to-right") || 
		// 		t_t.removeClass(box, "to-top") || 
		// 		t_t.removeClass(box, "to-bottom");
		// 		x = event.pageX;
		// 		y = event.pageY;
		// 		mouse_pos = {"x": x, "y": y};
		// 		var dir = t_t.get_dir(wrapper, mouse_pos);
		// 		switch(dir){
		// 			case "left": 
		// 				t_t.addClass(box, "from-left");
		// 				break;
		// 			case "right": 
		// 				t_t.addClass(box, "from-right");
		// 				break;
		// 			case "top": 
		// 				t_t.addClass(box, "from-top");
		// 				break;
		// 			case "bottom":
		// 				t_t.addClass(box, "from-bottom");
		// 				break;
		// 			default: break;
		// 		}
		// 	}	
		// });
		// t_t.addEvent(hover_dir.wrapper, "mouseout", function(event){
		// 	event = t_t.getEvent(event);
		// 	var box = t_t.getTarget(event).nextSibling;
		// 	if(t_t.getTarget(event).className == "txt-hide front-face" && box && box.nodeType == 1){
		// 		var wrapper = box.parentNode;
		// 		t_t.removeClass(box, "from-left") || 
		// 		t_t.removeClass(box, "from-right") || 
		// 		t_t.removeClass(box, "from-top") || 
		// 		t_t.removeClass(box, "from-bottom");
		// 		x = event.pageX;
		// 		y = event.pageY;
		// 		mouse_pos = {"x": x, "y": y};
		// 		var dir = t_t.get_dir(wrapper, mouse_pos);
		// 		switch(dir){
		// 			case "left": 
		// 				t_t.addClass(box, "to-left");
		// 				break;
		// 			case "right": 
		// 				t_t.addClass(box, "to-right");
		// 				break;
		// 			case "top": 
		// 				t_t.addClass(box, "to-top");
		// 				break;
		// 			case "bottom":
		// 				t_t.addClass(box, "to-bottom");
		// 				break;
		// 			default: break;
		// 		}
		// 	}	
		// });
	},
	init: function(){
		hover_dir.bindEvent();
	}
};

hover_dir.init();

var like = {
	like_or_not: t_t(".like-or-not")[0],
	zan: t_t(".zan")[0],
	cai: t_t(".cai")[0],
	zan_count: t_t(".zan-count")[0],
	cai_count: t_t(".cai-count")[0],
	warning: t_t(".warning")[0],
	bindEvent: function(){
		//绑定两个按钮，当点击的时候调用ajaxp函数，并且传入参数，url需要你来修改
		t_t.addEvent(like.zan, "click", function(event){
			t_t.ajaxp({
				"url": "http://app.hustonline.net/software/is_like",
				"params": {
					"action": "zan",
					"callback": "handle_like",
					"sid": like.like_or_not.id.substr(1)
				}
			});
		});
		t_t.addEvent(like.cai, "click", function(event){
			t_t.ajaxp({
				"url": "http://app.hustonline.net/software/is_like",
				"params": {
					"action": "cai",
					"callback": "handle_like",
					"sid": like.like_or_not.id.substr(1)
				}
			});
		});
	},
	init: function(){
		like.bindEvent();
	}
};

like.init();

//赞或踩 返回值处理函数
function handle_like(response) {
	switch(response){
		case "zan_success": //赞数据已经录入
			like.zan_count.innerHTML = + parseInt(like.zan_count.innerHTML) + 1;
			t_t.show_tips('点赞成功！', 1000);
			break;
		case "cai_success": //踩数据已经录入
			like.cai_count.innerHTML = + parseInt(like.cai_count.innerHTML) + 1;
			t_t.show_tips('点踩成功！', 1000);
			break;
		case "had": //已经赞过或者踩过了
			t_t.show_tips('评价过了哦！！', 2100);
			break;
		case "error": //数据库写入错误啥的
			t_t.show_tips('出错啦！', 2100);
			break;
		default: //默认网络连接出错
			t_t.show_tips('网络出故障了，请检查你的网络哦！', 2100);
			break;
	}
};

//评论表单验证
if(t_t("#form-launch-cmt")){
	var form = {
		form: t_t("#form-launch-cmt"),
		cmt: t_t("#form-launch-cmt").elements["ipt-cmt"],
		u_name:t_t("#form-launch-cmt").elements["ipt-usr-name"],
		btn: t_t("#form-launch-cmt").elements["submit-cmt"],
		disable: function(){
			form.btn.disabled = true;
			t_t.addClass(form.btn, "disabled");
		},
		enable: function(){
			form.btn.disabled = false;
			t_t.removeClass(form.btn, "disabled");
		},
		check: function(){
			var cmt = form.cmt,
				u_name = form.u_name;
			if(cmt.value.length > 1 && cmt.value.length <= 140 && u_name.value.length > 0 && u_name.value.length <= 12){
				form.enable();
			}else{
				form.disable();
			}	
		},
		bindEvent: function(){
			t_t.addEvent(form.cmt, "keyup", form.check);
			t_t.addEvent(form.u_name, "keyup", form.check);
			t_t.addEvent(form.form, "submit", form.disable);
		},
		init: function(){
			form.disable();
			form.bindEvent();
		}
	};

	form.init();
}

//下载
if(t_t(".dl-btn")[0]) {  //URL还是要你来填
	var dl = {
		btn: t_t('.dl-btn')[0],
		launch_dl: function() {
			//下载的时候返回给的函数参数要是json格式的, 如: {"str": "suc", "link": "app.hustonline.net"}
			t_t.ajaxp({
				"url": "http://app.hustonline.net/software/download",
				"params": {
					"action": "dl",
					"callback": "handle_dl",
					"sid": like.like_or_not.id.substr(1)
				}
			});
		},
		bindEvent: function() {
			t_t.addEvent(dl.btn, 'click', dl.launch_dl);
		},
		init: function() {
			dl.bindEvent();
		}
	};

	dl.init();
}

function handle_dl(response){
	if(response) {
		switch(response.str){ //response.str还是返回状态字符串
			case 'suc':  //允许下载，并且检测确定生成的链接可用，你就把你生成的下载链接带到参数里面
				window.location.href = response.link;
				break;
			case 'dul':  //下载次数太频繁，那么下载链接参数就空着
				t_t.show_tips("不好意思，您下载的太频繁了,请等待30s", 1500);
				break;
			case 'error':  //后台检测一下你的下载链接是否可用，如果不可用，那么返回error
				t_t.show_tips("不好意思，下载人数过多！喝杯咖啡吧，一会就好！", 1500);
				break;
			default:
				break;
		}
	} else {  //网络错误，没有返回值。
		t_t.show_tips("不好意思，网络出错了！请检查网络连接是否正常！", 1500);
	}
}
	
