(function($){
	$.fn.handybuttons = function(options){
		var settings = $.extend({
			align: "#mainContent",
			up : true,
			video : false,
			video_wrapper: "#video_wrapper",
			comment: false,
			comment_wrapper: ".torrent_comment_form"
		}, options);

		return this.eq(0).each(function(){
			$(this).append('<div class="handy_buttons_wrapper"></div>');
			var $wrapper = $(".handy_buttons_wrapper");
			if(settings.up){
				$wrapper.append('<div class="item up">回顶部</div>');
			}
			if(settings.video){
				$wrapper.append('<div class="item video">预告片</div>');
			}
			if(settings.comment){
				$wrapper.append('<div class="item comment">评论区</div>');
			}

			$wrapper.css({
				'left': $(settings.align).offset().left + $(settings.align).outerWidth()
			});
			$(window).resize(function(){
				$wrapper.css({
					'left': $(settings.align).offset().left + $(settings.align).outerWidth()
				});
			});

			var is_visible = false;
			$(window).scroll(function(){
				var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if((docScrollTop>250) && (is_visible==false)){
					$wrapper.fadeIn(500);
					is_visible = true;
				}
				if((docScrollTop<=250) && (is_visible==true)){
					$wrapper.fadeOut(200);
					is_visible = false;
				}
			});

			// scroll to top
			$wrapper.find(".up").click(function(){
				$("html, body").animate({
					scrollTop: 0
				}, 200);
			});
			// play video
			$wrapper.find(".video").click(function(){
				try{
					$(settings.video_wrapper).show();
				} catch(e){
				}
			});
			// scroll to comment
			$wrapper.find(".comment").click(function(){
				try{
					$("html, body").animate({
						scrollTop: $(settings.comment_wrapper).offset().top
					}, 200);
				} catch(e){
				}
			});
		});
	}
}(jQuery));