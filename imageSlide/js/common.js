// var _href = location.href;

// if ( /\/\/live.chaoaicai.com/.test(_href) ) {

// 	var remoteurl = 'https://www.chaoaicai.com',
// 		activityRemoteurl = "https://activity.chaoaicai.com";

// } else if ( /\/\/prelive.chaoaicai.com/.test(_href) ) {

// 	var remoteurl = 'https://pre.chaoaicai.com',
// 		activityRemoteurl = "https://preactivity.chaoaicai.com";

// } else if ( /\/\/test2-live.chaoaicai.com/.test(_href) ){

// 	var remoteurl = 'https://test2-pc.chaoaicai.com',
// 		activityRemoteurl = "http://172.16.21.241:7070";

// } else {

// 	var remoteurl = 'https://test1-pc.chaoaicai.com',
// 	 	activityRemoteurl = "http://172.16.21.241:7070";

// }



// Global Variables

//判断是否登录
if(location.href.indexOf('register') == -1 && location.href.indexOf('inviteQrCode') == -1){
	$.ajax({
	    url: cgRemoteurl+"/account/countMessage.htm?callBackFunc=loginin",
	    type: "get",
	    jsonpCallback:"loginin",
	    dataType: "jsonp",
	    success: function(data) {
	    	if(data.successFlag && data.successFlag=='Y'){
	    		window.userId = data.userId;	
	    		$('#myAccount').html('<div class="account-info" style="position:relative"> <img alt="account" class="fl" src="../image/header_account_image.png"> <span class="text my-account-box fl" style="display: block;">我的账户</span> <span class="phone fl" style="display: none;">'+data.loginName+'</span> <img src="../image/round2.png" width="8px" height="8px" style="position:absolute;top:18px;right:-1px"> </div>');
	    		$('.through-train-in').append('<li><a href="'+cgurl+'/user/logout.htm">退出</a><a href="'+cgurl+'/account/message.htm">消息<i>'+(data.messageTip != 0?"("+data.messageTip+")":"")+'</i></a><a href="/cgPc/cgGuide/cgGuideIntro.htm">存管指引</a></li>');

	    	}else{
	    		$('.through-train-in').append('<li><a href="/cgPc/cgGuide/cgGuideIntro.htm">存管指引</a></li>');
	    		$('.nav-main-box').append('<div class="login-box "><a href="'+cgurl+'/user/signIn.htm">登录</a><a href="'+cgurl+'/user/signUp.htm" class="register">注册</a></div>');
	    	}
	    },
	    error: function(){
	    }
	});
}




var interval,
	isIE6,
	$window = $(window),
	$document = $(document),
	$body = $('body');

jQuery(function($) {

	//EXTEND
	init_extend();

	//alert
	override_alert();

	//初始设置图片验证码
	$('#capImg').attr('src',remoteurl+'/common/getValidatorImg.htm');

	// 跳转首页
	$('.investBtn').on('click',function(){ location.href = remoteurl });

	// 跳转登录
	$('.loginCommonBtn').on('click',function(){ location.href = remoteurl + "/caclogin/signIn.htm" });

	// 日期控件国际化
	if($.datepicker)
	$.datepicker.setDefaults({
		closeText: '关闭',
		prevText: '<上月',
		nextText: '下月>',
		currentText: '今天',
		monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
		'七月', '八月', '九月', '十月', '十一月', '十二月'],
		monthNamesShort: ['一', '二', '三', '四', '五', '六',
		'七', '八', '九', '十', '十一', '十二'],
		dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
		weekHeader: '周',
		dateFormat: 'yy/mm/dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年',
		monthSuffix: '月'
	});

	// 微信浮动层
	$('.wechat-qr').on('mouseenter', function() {
		// 初始化
		var _this = $(this),
			_offset = _this.offset(),
			_height = _this.height(),
			_width = _this.width(),
			_trigger = $('#wechat-qr');

		// 定义浮动层位置
		if(_this.hasClass('wechat-bottom')) {
			_trigger.removeClass('popover').addClass('popoverBottom').css({
				top: _offset.top - _height - 152,
				left: _offset.left + (_width / 2) - (_trigger.outerWidth() / 2)
			}).fadeIn('fast');
		} else {
			_trigger.removeClass('popoverBottom').addClass('popover').css({
				top: _offset.top + _height + 5,
				left: _offset.left + (_width / 2) - (_trigger.outerWidth() / 2)
			}).fadeIn('fast');
		}

	}).on('mouseleave', function() {
		$('#wechat-qr').fadeOut('fast');
	});

	// 判断浏览器是否是IE6
	var userAgent = navigator.userAgent;
	isIE6 = /msie 6/i.test(userAgent);

	// 回到顶部操作
	//adjustHeaderNav();
	//$window.on('resize', adjustHeaderNav);
	adjustScrollBar();
	$window.on('scroll', adjustScrollBar);
	$('.go_top,.goTotop').on('click', function() {
		$('body, html').animate({
	        scrollTop:'0px'
	    }, 300);
	}).on('mouseover mouseout', function() {
		$('.go_top_icon', $(this)).toggleClass('go_top_icon_white');
	});

	//邮箱是否认证检查
	var emailTip = $('#emailTip');
	if($('#emailCheck').length > 0 && $('#emailCheck').text() == '0' && ($.cookie('emailCheck') == 'null' || $.cookie('emailCheck') == undefined)) {
		emailTip.removeClass('hide');
	}
	$('#emailTip img').on('click', function() {
		$.cookie('emailCheck', '1', { path: '/' });
		emailTip.addClass('hide');
	});

	// 登出
	$('#logout').on('click', function() {
		$.cookie('emailCheck', 'null', { path: '/' });
	});

	// 表单清除系统错误
	$('form input').on('input propertychange', function() {
		$(this).closest('form').find('span.error-message-span').remove();
	});

	// ajax统一错误处理
	$.ajaxSetup({
		error: function (xhr, status, e) {
			if(e != "abort")
				alert('网络连接超时!');
//			location.href = ctx + '/caclogin/signIn.htm';
//		},
//		beforeSend: function(e, xhr, o) {
//			var a=1;
		}
	});

	// validate methods
	// 手机号验证
	$.validator.addMethod(
		'cellphone',function(value,element){
			  var length = value.length;
				  var phone =  /^((1)+\d{10})$/;
				  return this.optional(element) || (length == 11 && phone.test(value));
		},'手机号不正确'
	);

	// 手机号或邮箱验证
	$.validator.addMethod(
		'cellphoneAndEmail',function(value,element){
			var length = value.length;
			var phone = /^((1)+\d{10})$/;
			var email = /\w@\w*\.\w/;
			return this.optional(element) || (length == 11 && phone.test(value)) || email.test(value);
		},'手机号或邮箱错误'
	);

	// 中文验证
	$.validator.addMethod(
		'chinese',function(value,element){
			 var chinese = /^[\u4e00-\u9fa5·\.a-zA-Z]+$/;
				 return this.optional(element) || (chinese.test(value));
		},'只能输入中文'
	);

	// 身份证号码验证
	$.validator.addMethod("idCardValidate", function(value, element) {
			return this.optional(element) || idCardValidate(value);
	}, "请正确输入您的身份证号码");

	// 检查密码
	$.validator.addMethod("pwdCombination", function(value, element) {
			return this.optional(element) ||
					(!/^[0-9]{6,16}$/.test(value) && !/^[a-zA-Z]{6,16}$/.test(value) && !/^[^a-zA-Z0-9]{6,16}$/.test(value) && value.length < 17 && value.length > 5);
	}, "请正确输入您的身份证号码");

	// 提现金额大于2
	$.validator.addMethod("withdrawAmount", function(value, element) {
			return this.optional(element) ||
					(value > 2);
	}, "提现金额必须大于2元");

	// 充值金额必须大于1
	$.validator.addMethod("moreThanOne", function(value, element) {
			return this.optional(element) ||
					(value >= 1);
	}, "充值金额必须大于1元");

	// 充值金额格式不正确
	$.validator.addMethod("decimalLimit", function(value, element) {
		if (value.indexOf('.') == -1){
			value += ".";
		};
		var dectext = value.substring(value.indexOf('.')+1, value.length);
			return this.optional(element) ||
					(dectext.length <= 2);
	}, "充值金额格式不正确");

	// 活动结束
	if($('#activity_year_month').length == 1) {
		var yearMonth = $('#activity_year_month').text(),
			year = yearMonth.substring(0, 4),
			month = yearMonth.substring(6, 8) == '' ? yearMonth.substring(4, 6) : Number(yearMonth.substring(4, 6)) - 1,
			day = yearMonth.substring(6, 8) == '' ? '1' : Number(yearMonth.substring(6, 8)) + 1;
		if(new Date() - new Date(year, month, day, 0, 0, 0) > 0) {
			var headerHeight=$(document).height()-$(".ol-header").height()-$(".ol-footer").height();
			$('#activity_over_shade').height(headerHeight).show();
			$('#activity_over_img').show();
		}
	}

	//账户侧导航
	 $(".checkout_counter").on('click', function(){
		if($(this).siblings('.checkstand_box').is(':hidden')) {

			   if($('.left_in_top').find('.checkstand_box').not(':hidden').length > 0) {
				   var target = $(".checkout_counter").not($(this));
				   target.siblings('.checkstand_box').stop().slideUp();
			   }

	     	   $(this).siblings('.checkstand_box').stop().slideDown();
		  } else {
			   $(this).siblings('.checkstand_box').stop().slideUp();

		  }
     });

	 //关于我们导航
//	 var aboutUsAcc = $('#aboutUs_accordion'),
//	 	 aboutUsShade = $('#aboutUs_nav_shade');
//	 $('#aboutUs_accordion li:not(.hasMenu), #aboutUs_accordion .menu').hover(function(e) {
//		 aboutUsShade.stop().animate({
//			 top: 98 + 60 * aboutUsAcc.find('li:not(:hidden):not(.hasMenu), .menu').index($(this)) + 'px'
//		 }, 200);
//		 e.stopPropagation();
//	 });

	 //帐户头部收缩
//	 var accountBasicInfo = $('.accountBasicInfo'),
//		 boxes = accountBasicInfo.find('.centerBox, .rightBox'),
//		 userCon = $('.ol-body > .ol-container > .user-con, .ol-body > .ol-container > .main_in_box_right'),
//		 accTrigger = false;
//	 $('.accountArrow').on('click', function() {
//		 if(accTrigger) return;
//		 accTrigger = true;
//		 var _this = $(this);
//		 if(_this.hasClass('accountArrowOpen')) {
//			 _this.removeClass('accountArrowOpen');
//			 boxes.addClass('hide');
//			 accountBasicInfo.animate({
//				 width: '239px'
//			 }, 300);
//			 userCon.animate({
//				 top: '-213px'
//			 }, 300);
//		 } else {
//			 _this.addClass('accountArrowOpen');
//			 accountBasicInfo.animate({
//				 width: '1170px'
//			 }, 300);
//			 boxes.removeClass('hide');
//			 userCon.animate({
//				 top: '0px'
//			 }, 300);
//		 }
//		 setTimeout(function() {
//			 accTrigger = false;
//		 }, 300);
//	 });

	 //header固定
	 var headerNav = $('.ol-header .header_nav'),
	 	 slideFlag = false;
 		 headerClone = headerNav.clone().insertAfter(headerNav).addClass('header-pin');
	 $window.scroll(function() {
		 if($window.scrollTop() > 200) {
			 if(slideFlag) return;
			 headerClone.animate({
	           top: '0'
	         }, 500,function(){
	        	 slideFlag = true;
	         });
		 } else {
			 headerClone.css('top', '-66px');
			 slideFlag = false;
			 headerClone.stop(true);
		 }
	 });

	// 导航折叠
	var header_loan = $('.header_loan');
	if(header_loan.length > 0) {
		header_loan.hover(function(){
			$(this).addClass('header_loan_open').find('.submenu-div').stop().fadeIn(150);
		},function(){
			$(this).removeClass('header_loan_open').find('.submenu-div').stop().fadeOut(150);
		});
	}

	 //banner处理
	 $.extend({
		carousel: function(elem) {
			// 初始化
			var _win_width = $(window).width();
			var _items = elem.find('.item');
			var _size = _items.size();
			var _dots = $('<ul />').addClass('dots clearfix').appendTo(elem);
			var _interval = null;

			// 处理图片
			_items.css('background-image', function() {
				return ['url(', $(this).data().bg, ')'].join('');
			}).show().hide();


			for (var _idx = 0; _idx < _size; _idx++) {
				_dots.append($('<li />').attr('data-toggle', _idx).on('click', function() {
					var _this = $(this);
					if (!_this.hasClass('active')) {
						clearTimeout(_interval);

						_items.filter('.active').fadeOut('slow');
						$(_items.get(_this.data().toggle)).addClass('active').fadeIn('slow');
						_this.parent().find('.active').removeClass('active');
						_this.addClass('active');

						_interval = setInterval(function() {
							var _next = _dots.find('.active').next();
							_next = (_next.size() === 0) ? _dots.find('li:first') : _next;
							_next.trigger('click');
						}, 5000);
					}
				}));
			}
			_dots.find('li:first').trigger('click');
			if(_size == 1) {
				_dots.addClass('hide');
			}

			_dots.css({
				left: '50%',
				marginLeft: - _dots.width() / 2 + 'px'
			});
		}
	});

	// 处理大幅背景
	var banner = $('#banner');
	if(banner.length > 0) $.carousel(banner);

	if(location.href.indexOf('assetList') > 0 || location.href.indexOf('newAssetList') > 0 || location.href.indexOf('loanList') > 0){
        $('.pagination a').each(function(){
            this.href=this.href+'#anchor-area';
           });
        if(location.href.indexOf('anchor-area') > 0 && (!!window.ActiveXObject || "ActiveXObject" in window)){
        	$(window).scrollTop($(window).scrollTop()-1);
        }
	}

	//帐户高度处理
	var main_in_box_left = $('.main_in_box_left');
	if(main_in_box_left.length > 0) {
		var leftHeight = main_in_box_left.height();
		if($('.myCoin').length > 0 && $('.myCoin').hasClass('ol-container')) {
			var rightCoin1 = $('.user-con').eq(0);
			var rightCoin2 = $('.user-con').eq(1);
			if(leftHeight > (rightCoin1.height() + rightCoin2.height() + 20))
				rightCoin2.css('min-height', leftHeight - rightCoin1.height() - 20);
		} else {
			var rightCon = $('.main_in_box_right, .user-con').not(':hidden');
			if(leftHeight > rightCon.height())
				rightCon.css('min-height', leftHeight);
		}
	}

	//天标新增倒计时
	count_down();
});

// 扩展JQuery方法（弹框，百分比画图）
function init_extend() {
	$.extend({
		toMaxWidth: function(elems) {
			var max = 0;
			$.each(elems, function(i, e) {
				if ($(e).width() > max) max = $(e).width();
			});
			elems.width(max);
		}, dialog: {
			defaults: {
				modal: false
			}, init: function(elem, opts) {
				$.extend(this.defaults, opts);
				elem.css('position', 'fixed').hide();
			}, open: function(elem, opts) {
				// 初始化
				var _sets = $.extend({}, this.defaults, opts),
					_wins = $(window),
					_body = $('body');

				// 判断是否为模态
				// 若为模态则进行处理
				if (_sets.modal && $('.modal').size() <= 0) {
					$('<div />').addClass('modal')
						.width(Math.max(_wins.width(), _body.width()))
						.height(Math.max(_wins.height(), _body.height()))
						.appendTo(_body);
					if(_sets.zIndex) $('.modal').css('z-index', _sets.zIndex);
				}

				// 设置弹窗位置
				elem.css('top', function() {
					return (_wins.height() - elem.outerHeight()) / 2;
				}).css('left', function() {
					return (_wins.width() - elem.outerWidth()) / 2;
				}).css('z-index', 2099).fadeIn('fast');
			}, close: function(elem, opts) {
				$('.modal').remove();
				elem.fadeOut('fast');
			}
		}, percent: {
			defaults: {
				width: 30,
				height: 30,
				strokeWidth: 4,
				fontSize: '12px',
				textColor: '#fca319',
				css: {

				},
				color: {
					fgColor: '#fca319',
					bgColor: '#dbe1e4'
				}
			}, init: function(ele, opts) {
				if (!Raphael) return;

				var status = ele.data('status'),
					kind = ele.data('kind'),
					spec = ele.data('spec'),
					inProgress,
					stroke;

				if(status == '1')	inProgress = true;

				var _sets = $.extend({}, this.defaults, opts),
					width = inProgress ? 42 : _sets.width,
					height = inProgress ? 42 : _sets.height,
					strokeWidth = _sets.strokeWidth,
					x = width / 2,
					y = height / 2,
					color = _sets.color,
					textColor = _sets.textColor,
					textAttr = {'fill': textColor, 'font-size': _sets.fontSize},
					percent = parseFloat(opts.percent),
					raphael = Raphael(ele.get(0), width, height),
					drawPercent = percent >= 1 ? 0.9999 : percent,
					PI = Math.PI,
					homepageCirle = _sets.homepageCirle,
					isIE8 = /msie 8/i.test(navigator.userAgent),
					diff = isIE8 ? 2 : 0,
					r1 = x - strokeWidth,
					r2 = x;

				$(raphael.canvas).css({
					left: ele.outerWidth() / 2 - (spec ? -2 : (isIE8 ? strokeWidth : strokeWidth / 2)) - x,
					top: ele.outerHeight() / 2 - (isIE8 && homepageCirle ? strokeWidth * 2 : (spec ? -8 : (homepageCirle ? strokeWidth * 3 / 4 : (inProgress ? strokeWidth : strokeWidth * 2)))) - y,
					width: width + diff,
					height: height + diff
				});

				if(!homepageCirle) {
					//满标
					if(status == '2' || kind == '2')
						stroke = '#4c90f7';
					//还款中
					else if(status == '4' || status == '6' || status == '7' || kind == '4' )
						stroke = '#e60012';
					//流标
					else if(status == '3' || kind == '3')
						stroke = '#c4c4c4';
					//已完成
					else if(status == '5' || kind == '5')
						stroke = '#10cef0';

					if(inProgress)
						stroke = color.bgColor;

					raphael.circle(x, y, x - (isIE8 && !inProgress ? strokeWidth : strokeWidth / 2)).attr({'stroke-width': strokeWidth, 'stroke': stroke || '#fca319'});
				}

				if(inProgress || homepageCirle) {

					if(percent == 0) {
						raphael.text(x, y, '0').attr(textAttr);
						return $(raphael.canvas);
					} else if(percent == 1) {
						raphael.text(x, y, '100%').attr(textAttr);
						raphael.circle(x, y, x - (isIE8 && !homepageCirle && !inProgress ? strokeWidth * 3 / 4 : strokeWidth / 2)).attr({'stroke-width': strokeWidth, 'stroke': color.fgColor});
						return $(raphael.canvas);
					} else {
						raphael.text(x, y, (percent * 100).toFixed(1) + '%').attr(textAttr);
					}

					p1 = {
						x: x,
						y: 0
					},
					p4 = {
						x: p1.x,
						y: strokeWidth
					},
					p2 = {
						x: p1.x + r2 * Math.sin(2 * PI * drawPercent),
						y: p1.y + r2 - r2 * Math.cos(2 * PI * drawPercent)
					},
					p3 = {
						x: p4.x + r1 * Math.sin(2 * PI * drawPercent),
						y: p4.y + r1 - r1 * Math.cos(2 * PI * drawPercent)
					},
					path = [
						'M', p1.x, ' ', p1.y,
						'A', r2, ' ', r2, ' 0 ', percent > 0.5 ? 1 : 0, ' 1 ', p2.x, ' ', p2.y,
						'L', p3.x, ' ', p3.y,
						'A', r1, ' ', r1, ' 0 ', percent > 0.5 ? 1 : 0, ' 0 ', p4.x, ' ', p4.y,
						'Z'
					].join('');

					raphael.path(path).attr({"stroke-width": 0, "stroke": color.fgColor, 'fill': color.fgColor});
				}

				return $(raphael.canvas);
			}
		}
	});

	/**
	 *
	 */
	$.fn.extend({
		singleClass: function(active, remove, container) {
			// 初始化
			var _elem = $(this),
				_active = active || 'active',
				_remove = remove || '',
				_container = container || _elem.parent();

			// 处理样式
			_container.find(['.', _active].join('')).removeClass(_active).addClass(_remove);
			_elem.removeClass(_remove).addClass(_active);
		}, toMaxWidth: function(opts) {
			$.toMaxWidth(this);
			return this;
		}, dialog: function(op, opts) {
			// 初始化
			var _op = ($.type(op) === 'string') ? op : 'init',
				_opts = ($.type(opts) === 'undefined') ? (($.type(op) === 'object') ? op : {}) : opts;

			// 逐个处理并返回
			return this.each(function() {
				if (_op === 'init') {
					$.dialog.init($(this), _opts);
				} else if (_op === 'open') {
					$.dialog.open($(this), _opts);
				} else if (_op === 'close') {
					$.dialog.close($(this), _opts);
				}
			});
		}, percent: function(opts) {
			var svgs = [];
			this.each(function() {
				svgs.push($.percent.init($(this), $.extend({}, opts, $(this).data())));;
			});
			return svgs;
		}
	});
}

// 格式化扩大一万倍的金额（缩小一万倍，默认两位小数）
// amount：金额
// n：小数位
// m：是否以万为单位的数字
function formatAmount(amount, n, m) {
	var s = parseInt(amount) / 10000;
	if(m) s /= 10000;
	n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
    t = "";
    for(i = 0; i < l.length; i++) {
    	t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}

//格式化正常金额
function formatCurrency(amount, n) {
	var s = parseFloat(amount);
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(),
	r = s.split(".")[1];
	t = "";
	for(i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return t.split("").reverse().join("") + "." + r;
}

// 格式化日期
// date：日期
// fmt：日期格式
// addMonth：传入日期+月数
// addDay：传入日期+天数
function formatDate(date, fmt, addMonth, addDay) {
	if(!date) return '';
	date = new Date(typeof(date) == 'number' ? date : date.toString());
	if(date == 'Invalid Date') return date;
	else {
		if(!fmt) fmt = 'yyyy-MM-dd hh:mm:ss';
		addMonth = parseInt(addMonth);
		if(isNaN(addMonth)) addMonth = 0;
		addDay = parseInt(addDay);
		if(isNaN(addDay)) addDay = 0;
		date.setMonth(date.getMonth() + addMonth);
		date.setDate(date.getDate() + addDay);
		var o = {
	        "M+": date.getMonth() + 1, //月份
	        "d+": date.getDate(), //日
	        "h+": date.getHours(), //小时
	        "m+": date.getMinutes(), //分
	        "s+": date.getSeconds(), //秒
	        "S": date.getMilliseconds() //毫秒
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
}

// 重写window alert方法
// message：弹框文字
// extra：特殊按钮
// closeFunc：按钮关闭回调
function override_alert() {
	/*
	 * override window.alert
	 */
	if(!/msie 6/i.test(navigator.userAgent))
	window.alert = function(message, callback, extra, closeFunc) {
		// 初始化
		var _call = callback || function() {},
			_pop = $('<div />').addClass('popWin').appendTo($('body')).dialog({dialogClass: 'alertDialog'}),
			header = $('.ol-header .header_nav'),
			_close_func = closeFunc || function() {
				_pop.dialog('close');
				_pop.remove();
				header.css('z-index', 666);
			},
			_submit_func = function() {
				_pop.dialog('close');
				_pop.remove();
				_call();
				header.css('z-index', 666);
			},
			btn_texts = {
				'myAccount' : '继续抢投',
				'inviteMsg' : '发送短信'
			},
			mobile = /^((1)+\d{10})$/,
			_btn_confirm = $('<button class="userbtn btn_red" />').text(extra ? btn_texts[extra] : '确定').on('click', extra != 'inviteMsg' ? _submit_func : function() {
				var phone = $('#fellow_phone').val(),
					code = $('#code').text(),
					error = $('#alertError');
				if(phone.length!=11||!mobile.test(phone)){
					error.text('请正确填写您的手机号').removeClass('hide');
				} else {
					error.removeClass('hide');
					_close_func();
					$.ajax({
						url: ctx + '/myAccount/myAccount/sendInviteNote.htm?phoneNumber=' + phone,
						type: "POST",
						dataType: 'json',
					    error: function(data){
							alert("载入数据出错！");
						},
						success: function(data){
							if(data.result == 'ok')
								alert('短信发送成功！');
							else if (data.result == 'formatError')
								alert('请填写正确的手机号！');
							else if (data.result == 'fail')
								alert('短信发送失败！');
						}
					});
				}
			}),
			funcs = {
				'myAccount' : function() { location.href = ctx + '/myAccount/myAccount/accountControl.htm'; },
				'inviteMsg' : _close_func,
				'' : _close_func
			},
			extra_btn = $('<button class="userbtn btn_red" />').text(extra == 'myAccount' ? '我的账户' : '取消').on('click', funcs[extra]);

		header.css('z-index', 0);

		// 设置弹窗内容并弹窗table_caption_style
		_pop.html('<div class="table_caption"><div class="table_caption_in">提示'+
				'<span id="alertError" class="error hide" style="width: 200px"></span><span class="icon closeIcon fr"></span></span></div>')
			.append($('<p />').addClass(extra == 'inviteMsg' ? 'text-left' : '').html(extra == 'inviteMsg' ? $('<input />').attr({ id: 'fellow_phone', placeholder: '请输入好友的手机号', type: 'text'}).addClass('input fellow_phone') : '')
					.prepend(message).append(extra == 'inviteMsg' ? '<br/>短信内容：您的好友（<span class="color-red">' + $('#realName').text() + '</span>）邀您一起来赚钱，14%预期年化收益，</br>更有红包礼品拿不停~邀请码【' + $('#code').text() + '】 chaoaicai.com 【超爱财】' : ''))
			.append($('<div />').addClass('btn-group').html(_btn_confirm))
			.dialog('open', { modal: true });

		$('.popWin .table_caption .closeIcon').on('click', _close_func);
	}
}

// 根据滚动条高度显示或隐藏回到顶部按钮
function adjustScrollBar() {
	var scrollTop = $document.scrollTop();
	if(scrollTop >= 300)
		$('.go_top').show();
	else
		$('.go_top').hide();
}

//计算密码强度得分
function calPwdStrength() {
	var value = $(this).val(),
		len = value.length,
		lcArr = value.match(/[a-z]/g)|| [],
		ucArr = value.match(/[A-Z]/g) || [],
		nArr = value.match(/\d/g) || [],
		oArr = value.match(/[^0-9a-zA-Z]/g) || [],
		weak = $('.pwdStr .weak'),
		middle = $('.pwdStr .middle'),
		strong = $('.pwdStr .strong'),
		score = 0;

	// 密码长度
	if (len > 5 && len < 8)
		score += 10;
	else if (len >= 8)
		score += 25;

	// 字母
	if (lcArr.length + ucArr.length >= 4)
		score += 10;
	else if (lcArr.length + ucArr.length >= 6)
		score += 20;
	if (lcArr.length > 0 && ucArr.length > 0)
		score += 20;

	// 数字
	if (nArr.length == 1 || nArr.length == 2)
		score += 10;
	else if (nArr.length > 2)
		score += 20;

	// 字符
	if (oArr.length == 1)
		score += 10;
	else if (oArr.length > 1)
		score += 20;

	if (score >= 30) {
		weak.addClass('weakActive');
		if (score >= 40) {
			middle.addClass('middleActive');
			if (score >= 85)
				strong.addClass('strongActive');
			else
				strong.removeClass('strongActive');
		} else {
			middle.removeClass('middleActive');
		}
	} else {
		weak.removeClass('weakActive');
		middle.removeClass('middleActive');
		strong.removeClass('strongActive');
	}
}

//改变图片验证码
function changeImg(){
	//获取当前的时间作为参数，无具体意义
	var timenow = new Date().getTime();
	//每次请求需要一个不同的参数，否则可能会返回同样的验证码
	//这和浏览器的缓存机制有关系，也可以把页面设置为不缓存，这样就不用这个参数了。
	$('#capImg').get(0).src = remoteurl + '/common/getValidatorImg.htm?id=' + timenow;
}

function idCardValidate(idCard) {
    idCard = $.trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 得到身份证数组
        if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){   //进行18位身份证的基本验证和第18位的验证
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
	var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];    // 加权因子
	var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];            // 身份证验证位值.10代表X
    var sum = 0;                             // 声明加权求和变量
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作
    }
    for ( var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和
    }
    valCodePosition = sum % 11;                // 得到验证码所位置
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}

/**
  * 验证18位数身份证号码中的生日是否是有效生日
  * @param idCard 18位书身份证字符串
  * @return
  */
function isValidityBrithBy18IdCard(idCard18){
    var year =  idCard18.substring(6,10);
    var month = idCard18.substring(10,12);
    var day = idCard18.substring(12,14);
    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if(temp_date.getFullYear()!=parseFloat(year)
          ||temp_date.getMonth()!=parseFloat(month)-1
          ||temp_date.getDate()!=parseFloat(day)){
            return false;
    }else{
        return true;
    }
}

/**
  * 验证15位数身份证号码中的生日是否是有效生日
  * @param idCard15 15位书身份证字符串
  * @return
*/
function isValidityBrithBy15IdCard(idCard15){
	var year =  idCard15.substring(6,8);
	var month = idCard15.substring(8,10);
	var day = idCard15.substring(10,12);
	var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
	// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
	if(temp_date.getYear()!=parseFloat(year)
    	||temp_date.getMonth()!=parseFloat(month)-1
    	||temp_date.getDate()!=parseFloat(day)){
    		return false;
    }else{
        return true;
    }
}

//按钮倒计时
function countdown(buttonId) {
	var wait = 60; // 设置秒数(单位秒)
	var secs = 0;
	for (var i = 1; i <= wait; i++) {
		window.setTimeout('sTimer(' + i + ',' + wait + ',' + secs + ',"' + buttonId + '")',i * 1000);
	}
}

//设置倒计时timer
function sTimer(num, wait, secs, buttonId) {
	if (num == wait) {
		$('#' + buttonId).html('获取验证码');
		disableButton(false, buttonId);
	} else {
		secs = wait - num;
		$('#' + buttonId).html('已发送' + secs);
	}
}

//按钮置灰禁用或相反操作
function disableButton(disableFlag, buttonId) {
	if (disableFlag)
		$('#' + buttonId).removeClass('btn_red').addClass('btn_grey').attr('disabled', true);
	else
		$('#' + buttonId).removeClass('btn_grey').addClass('btn_red').removeAttr('disabled');
}

//定义倒计时函数
function count_down() {
	var cur = $("#currDate").data("currdate");
	if (typeof cur == 'string')
		cur = ('' + cur).replace(/-/g, '/');
	var time_now = new Date(cur).getTime(); // 获取服务器时间

	$.each($('.countdown'), function(i, e) {
		var ele = $(e),
			status = ele.data("status"),
			eleId = ele.data('id');

		var time_end = new Date(ele.data("time").replace(/-/g, '/')); // 设定结束时间
			time_end = time_end.getTime(),
			eleBtn = $('#' + eleId);
		if (status == 0) {

			var time_distance = time_end - time_now; // 时间差：活动结束时间减去当前时间

			var int_day, int_hour, int_minute, int_second;
			if (time_distance >= 0) {

				// 相减的差数换算成天数
				int_day = Math.floor(time_distance / 86400000);
				time_distance -= int_day * 86400000;

				// 相减的差数换算成小时
				int_hour = Math.floor(time_distance / 3600000);
				time_distance -= int_hour * 3600000;

				// 相减的差数换算成分钟
				int_minute = Math.floor(time_distance / 60000);
				time_distance -= int_minute * 60000;

				// 相减的差数换算成秒数
				int_second = Math.floor(time_distance / 1000);

				// 判断小时小于10时，前面加0进行占位
				if (int_hour < 10)
					int_hour = "0" + int_hour;

				// 判断分钟小于10时，前面加0进行占位
				if (int_minute < 10)
					int_minute = "0" + int_minute;

				// 判断秒数小于10时，前面加0进行占位
				if (int_second < 10)
					int_second = "0" + int_second;

				// 显示倒计时效果
				ele.find(".hour_show").text(int_hour);
				ele.find(".minute_show").text(int_minute);
				ele.find(".second_show").text(int_second);
			} else {
				if(eleBtn.length>0 && /button/i.test(eleBtn[0].tagName)) eleBtn.attr("disabled", "disabled");
				eleBtn.text("已结束").addClass('fullBidBtn');
			}
		} else {
			if(eleBtn.length>0 && /button/i.test(eleBtn[0].tagName)) eleBtn.attr("disabled", "disabled");

			if (status == '1' || status == '2') {
				eleBtn.text("已满标").addClass('fullBidBtn');
		    } else if (status == '3') {
				eleBtn.text("还款中").addClass('fullBidBtn');
			} else if (status == '4') {
				eleBtn.text("已完成").addClass('fullBidBtn');
			} else if (status == '7') {
				eleBtn.text("已结束").addClass('fullBidBtn');
			}


		}
	});

   setTimeout("count_down()",1000);
   $("#currDate").data("currdate", time_now + 1000);
}



//方式一：
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = remoteurl+"/grow/growParam.htm?callBackFunc=tongji";
// document.getElementsByTagName('head')[0].appendChild(script);
// function tongji(data){
//       var _vds = _vds || [];
//       window._vds = _vds;
//       (function(){
//         _vds.push(['setAccountId', 'b93dab62d0b5618b']);

//         if(data){
// 		    _vds.push(['setCS1', 'name', data.name]);
// 	        _vds.push(['setCS2', 'age', data.age]);
// 	        _vds.push(['setCS3', 'userId', data.userId]);
// 	        _vds.push(['setCS4', 'gender', data.gender]);
// 	        _vds.push(['setCS5', 'level', data.level]);
// 	        _vds.push(['setCS2', 'registerResource', data.registerResource]);
// 	        _vds.push(['setCS3', 'resourceKey', data.resourceKey]);
// 	        _vds.push(['setCS4', 'registerTime', data.registerTime]);
// 	        _vds.push(['setCS5', 'growthNum', data.growthNum]);
//         }


//         (function() {
//           var vds = document.createElement('script');
//           vds.type='text/javascript';
//           vds.async = true;
//           vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
//           var s = document.getElementsByTagName('script')[0];
//           s.parentNode.insertBefore(vds, s);
//         })();
//       })(data);

// }


//方式二：
var script = document.createElement("script");
script.type = "text/javascript";
script.src = remoteurl+"/grow/growParam.htm?callBackFunc=tongji";
document.getElementsByTagName('head')[0].appendChild(script);
function tongji(data){
	var script = document.createElement("script");
	var str = "var _vds = _vds || [];window._vds = _vds;";
	script.type = "text/javascript";
	if(data){
		str += "_vds.push(['setAccountId', '"+data.accountId+"']);_vds.push(['setCS1', 'userId', '"+data.userId+"']); _vds.push(['setCS2', 'age', "+data.age+"]); _vds.push(['setCS3', 'name', '"+data.name+"']);_vds.push(['setCS4', 'gender', '"+data.gender+"']); _vds.push(['setCS5', 'level', '"+data.level+"']); _vds.push(['setCS2', 'registerResource', '"+data.registerResource+"']); _vds.push(['setCS3', 'resourceKey', '"+data.resourceKey+"']);_vds.push(['setCS4', 'registerTime', "+data.registerTime+"]); _vds.push(['setCS5', 'growthNum', "+data.growthNum+"]);";
	}
	str += "(function() {var vds = document.createElement('script'); vds.type='text/javascript'; vds.async = true; vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vds, s); })(); ";
	script.innerHTML = str;
	document.getElementsByTagName('head')[0].appendChild(script);
}


//请求地址参数
function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

$(document).ready(function(){
	//导航我要投资
	$(".listBox").hover(function(){
	    $('.listBox').toggleClass('ComboBox');
	})

	//我的账户显示隐藏
	$("#myAccount").hover(function () {
	    $(".my-account-box").hide();
	    $(".phone").show();
	}, function () {
	    $(".my-account-box").show();
	    $(".phone").hide();
	})
});

