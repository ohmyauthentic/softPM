//IE木有indexOf函数..
if(!Array.indexOf) {
    Array.prototype.indexOf = function(obj) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] == obj) {
                return i;
            }
        }
        return -1;
    }
}

//IE也没有trim
String.prototype.trim= function(){  
    // 用正则表达式将前后空格  
    // 用空字符串替代。  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}

//Array的shuffle函数
Array.prototype.shuffle = function() {
    for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};

//strip函数
String.prototype.strip = function() {
    return this.replace(/^\s*(.*?)\s*$/, "$1");
};

//模仿python的使用习惯, 0|[]|{}|""这些都返回false


function isNotEmpty(obj) {
    if(typeof(obj) == "undefined" || null == obj) {
        return false;
    }
    if(typeof(obj) == "function") {
        return true;
    }
    if(obj.constructor == Number) {
        if(obj) {
            return true;
        } else {
            return false;
        }
    }else if (typeof(obj) == "string"){
        if (obj != ""){
            return true;
        }else{
            return false;
        }
    }else {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                return true;
            }
        }
        return false;
    }
};

//重载String.format方法,使格式化字符串更方便
//调用方法
//"{0},{1},hehe".format(["hello","world"]); //hello,world,hehe
//"数学={数学},语文={语文},hou".format({"数学":100,"语文":95});//数学=100,语文=95,hou
Overload = function(fn_objs) {
    var is_match = function(x, y) {
            if(x == y) return true;
            if(x.indexOf("*") == -1) return false;

            var x_arr = x.split(","),
                y_arr = y.split(",");
            if(x_arr.length != y_arr.length) return false;

            while(x_arr.length) {
                var x_first = x_arr.shift(),
                    y_first = y_arr.shift();
                if(x_first != "*" && x_first != y_first) return false;
            }
            return true;
        };
    var ret = function() {
            var args = arguments,
                args_len = args.length,
                args_types = [],
                args_type, fn_objs = args.callee._fn_objs,
                match_fn = function() {};

            for(var i = 0; i < args_len; i++) {
                var type = typeof args[i];
                type == "object" && (args[i].length > -1) && (type = "array");
                args_types.push(type);
            }
            args_type = args_types.join(",");
            for(var k in fn_objs) {
                if(is_match(k, args_type)) {
                    match_fn = fn_objs[k];
                    break;
                }
            }
            return match_fn.apply(this, args);
        };
    ret._fn_objs = fn_objs;
    return ret;
};

String.prototype.format = Overload({
    "array": function(params) {
        var reg = /{(\d+)}/gm;
        return this.replace(reg, function(match, name) {
            return params[~~name];
        });
    },
    "object": function(param) {
        var reg = /{([^{}]+)}/gm;
        return this.replace(reg, function(match, name) {
            return param[name];
        });
    }
});


function load_path(path) {
    if(!path || path.length === 0) {
        throw new Error('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    head.appendChild(script);
}

//简单实现in的判断


function check_in(obj, seq) {
    return $.inArray(obj, seq) != -1;
}

function is_equal(obj1, obj2) {
    if(obj1.constructor !== obj2.constructor) return false;
    var aMemberCount = 0;
    for(var a in obj1) {
        if(!obj1.hasOwnProperty(a)) continue;
        if(typeof obj1[a] === 'object' && typeof obj2[a] === 'object' ? !obj1[a].equals(obj2[a]) : obj1[a] !== obj2[a]) return false;
        ++aMemberCount;
    }
    for(var a in obj2)
    if(obj2.hasOwnProperty(a))--aMemberCount;
    return aMemberCount ? false : true;
}

//复制对象


function copy_obj(obj) {
    if(obj.constructor == Array) {
        var new_obj_list = [];
        for(var i = 0; i < obj.length; i++) {
            var item = obj[i];
            new_obj_list.push(copy_obj(item));
        }
        return new_obj_list;
    } else if(obj.constructor == Number || obj.constructor == String) {
        var num = obj;
        return num;
    } else {
        return $.extend(true, {}, obj);
    }
};

//给定一个dom元素，得到与它最近的指定类型的parent元素(jquery类型)


function get_parent(obj, parent_type) {
    var $parent = $(obj).parent();
    while($parent.length > 0 && $parent[0].nodeName != parent_type.toUpperCase()) {
        $parent = $parent.parent();
    }
    return $parent;
}

function ajaxGet(obj) {
    var url = $(obj).attr("href");
    var target = $(obj).attr("rel");
    $.ajax({
        url: url,
        type: "GET",
        success: function(html_code) {
            $("#" + target).html(html_code);
        }
    });
}

function ajaxPost(url, data, callback) {
    var secure_key = $.cookie("_xsrf") || "";
    if(isNotEmpty(secure_key)){
        data["_xsrf"] = secure_key; 
    }
    $.ajax({
        url: url,
        data: data,
        dataType: "JSON",
        type: "POST",
        success: function(ret) {
            if(ret.status == "200") {
                if(isNotEmpty(callback)) {
                    callback(ret);
                }
            }
        }
    });
}

function syncPost(url, data, callback) {
    var secure_key = $.cookie("_xsrf");
    if(isNotEmpty(secure_key)){
        data["_xsrf"] = secure_key; 
    }
    $.ajax({
        url: url,
        data: data,
        dataType: "JSON",
        type: "POST",
        async: false,
        success: function(ret) {
            if(ret.status == "200") {
                if(isNotEmpty(callback)) {
                    callback(ret);
                }
            }
        }
    });
}

function ajaxSubmit(obj) {
    var url = $(obj).attr("action") || window.location.href;
    var callback_name = $(obj).attr("callback");
    var callback = null;
    eval("callback = " + callback_name + "");
    var data = {};
    $.map($(obj).serializeArray(), function(item) {
        data[item.name] = item.value;
    });
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        dataType: "JSON",
        success: function(ret) {
            if(ret.status == "200") {
                if(isNotEmpty(callback)) {
                    callback(ret);
                }
            } else if(ret.status == null) {
                alert("status is not defined in server response!");
            }

        }
    });
}

function get_oid(obj) {
    if(obj.hasOwnProperty("_id")) {
        return obj._id["$oid"];
    }
    return "";
}

function set_active_head1(head_name) {
    //首页，我的问卷，问卷库等几个tab的切换
    $('.main-nav li:contains("' + head_name + '")').addClass('active');
}

function scroll_to(obj) {
    //滚动滚动条至对象所在的位置
    var top = $(obj).offset().top;
    $('body, html').animate({
        scrollTop: top
    }, 'fast');
}

//删除数组中某位置的元素
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

//确认框


function jsConfirm(Obj) {
    Tinfo = {
        title: Obj.title || "提示",
        content: Obj.content || "确定要删除吗！",
        //提示内容
        conw: Obj.conw || 300,
        //宽度
        obj: Obj.obj || false,
        //执行方法
        Param: Obj.Param || '',
        //执行方法参数
		obj_text: Obj.obj_text || '确定',
        //执行方法按钮内容
        close_obj: Obj.close_obj || false,
        //取消方法
        close_Param: Obj.close_Param || '',
		//取消方法参数
		close_text: Obj.close_text || '取消'
        //取消方法按钮内容
    };
    var qr = '<div class="WJButton wj_blue tcQz">'+ Tinfo.obj_text +'</div>';
    var qx = '<div class="WJButton wj_blue uniteC">'+ Tinfo.close_text +'</div>';
    var con = '<div class="tccCon">' + '<div class="tccCon_t">'+ Tinfo.content +'</div><div class="tccCon_a">' + qr + qx + '</div></div>';

    //创建弹出层         
    var wb = new jsbox({
        onlyid: "maptss",
        title: Tinfo.title,
        conw: Tinfo.conw,
        //FixedTop:170,
        content: con,
        range: true,
        mack: true
    }).show();

    //确定事件
    $('.tcQz').die().live('click', function() {
        var isReturn = Tinfo.obj(Tinfo.Param);
		if(isReturn==undefined || isReturn==null){
          $('.jsbox_close').click();
		}
    });
    //取消事件
    $('.uniteC').one('click', function() {
        if(Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
    });
	//关闭按钮取消事件
    $('.jsbox_close').one('mousedown', function() {
        if(Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
		return false;
    });

}


function sleep(delay) {
    var start = new Date().getTime();
    while(new Date().getTime() < start + delay);
}

if(!Array.prototype.filter) {
    Array.prototype.filter = function(fun /*, thisp*/ ) {
        "use strict";

        if(this == null) throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if(typeof fun != "function") throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for(var i = 0; i < len; i++) {
            if(i in t) {
                var val = t[i]; // in case fun mutates this
                if(fun.call(thisp, val, i, t)) res.push(val);
            }
        }

        return res;
    };
}

//数组去重
Array.prototype.unique = function () {
    var n = []; //一个新的临时数组
    for (var i = 0; i < this.length; i++) //遍历当前数组
    {
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
    }
    return n;
}  

//确认框
function jsAlert(Obj) {
    Tinfo = {
        title: Obj.title || "提示",
        content: Obj.content || "确定要删除吗！",
        //提示内容
        conw: Obj.conw || 300,
        //宽度
        obj: Obj.obj || false,
        //执行方法
        Param: Obj.Param || '',
        //执行方法参数
        obj_text: Obj.obj_text || '确定'
        //执行方法按钮内容
    };
    var qr = '<div class="WJButton wj_blue tcQz">'+ Tinfo.obj_text +'</div>';
    var con = '<div class="tccCon">' + '<div class="tccCon_t">'+ Tinfo.content +'</div><div class="tccCon_a">' + qr+ '</div></div>';

    //创建弹出层         
    var wb = new jsbox({
        onlyid: "maptss",
        title: Tinfo.title,
        conw: Tinfo.conw,
        //FixedTop:170,
        content: con,
        Close:false,
        range: true,
        mack: true
    }).show();

    //确定事件
    $('.tcQz').die().live('click', function() {
        if(Tinfo.obj){
            var isReturn = Tinfo.obj(Tinfo.Param);
            if(isReturn==undefined || isReturn==null){
              $('.jsbox_close').click();
            }
        }else{
          $('.jsbox_close').click();
        }
    });
}
