var _href = location.href;

if ( /\/\/live.chaoaicai.com/.test(_href) ) {

    var remoteurl = 'https://www.chaoaicai.com',
        activityRemoteurl = "https://activity.chaoaicai.com",
        cgurl = 'https://www.chaoaicai.com',
        cgRemoteurl = 'https://www.chaoaicai.com';

} else if ( /\/\/prelive.chaoaicai.com/.test(_href) ) {

    var remoteurl = 'https://pre.chaoaicai.com',
        activityRemoteurl = "https://preactivity.chaoaicai.com",
        cgurl = 'https://pre.chaoaicai.com',
        cgRemoteurl = 'https://pre.chaoaicai.com';

} else if ( /\/\/test2-live.chaoaicai.com/.test(_href) ){

    var remoteurl = 'https://test2-pc.chaoaicai.com',
        activityRemoteurl = "http://172.16.21.241:7070",
        cgurl = 'http://172.16.21.226:9060',
        cgRemoteurl = 'http://172.16.21.226:9060';

} else {

    var remoteurl = 'https://test1-pc.chaoaicai.com',
        activityRemoteurl = "http://172.16.21.241:7070",
        cgurl = 'http://localhost:9060',
        cgRemoteurl = 'http://localhost:9060';

}

function getElementsByClassName(searchClass,node,tag) {
    if(document.getElementsByClassName){
        return  document.getElementsByClassName(searchClass)
    }else{
        node = node || document;
        tag = tag || '*';
        var returnElements = []
        var els =  (tag === "*" && node.all)? node.all : node.getElementsByTagName(tag);
        var i = els.length;
        searchClass = searchClass.replace(/\-/g, "\\-");
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        while(--i >= 0){
            if (pattern.test(els[i].className) ) {
                returnElements.push(els[i]);
            }
        }
        return returnElements;
    }
}


var header = document.createElement('div'),
    footer = document.createElement('div'),
    olbody = getElementsByClassName('ol-body')[0],
    safeInsurance = getElementsByClassName('safeInsurance')[0],
    headerCont1 = '<div class="ol-head"> <div class="through-train headerTop"> <ul class="through-train-in context"> <li>欢迎致电：400-882-3988</li> <li> </li> </ul> </div> <div class="nav-main-box context"> <a href="'+cgurl+'/index.htm"> <div class="logo-box"></div> </a> <ul class="nav-in fl"> <div><a id="index" href="'+cgurl+'/index.htm" class="active">首页</a></div> <div class="listBox"> <a id="loan" href="javascript:void(0)" class="position hoverShow">我要投资<i></i></a> <div class="listIn"> <a href="'+cgurl+'/invest/showInvestList.htm">爱财专区</a> <a href="'+cgurl+'/debtProduct/debtList.htm">转让专区</a> </div> </div> <div><a id="security" href="../infoPublish/aboutUs13.htm">信息披露</a></div> <div><a id="about" href="../aboutUs/aboutUs.htm">关于我们</a></div> </ul><a href="'+cgurl+'/account/myAccount.htm" class="fr" style="margin-top: 40px;" id="myAccount"></a> </div> <div class="serviceSideBar"> <ul> <li class="weChat"> <a href="http://weibo.com/chaoaicai" target="_blank"> <div class="icon"></div> <div class="txt"><span class="content">官方</br>微信</span></div> <div class="weChatCodeList icon"> <div class="weChatCodeTxt">超爱财订阅号</div> <div class="weChatCodeTxt weChatCodeTxt2">超爱财服务号</div> </div> </a> </li> <li class="microBlog"><div class="microBlogCode icon"><div class="microBlogTxt">超爱财口袋APP</div></div><div class="icon"></div><div class="txt"><span class="content">APP</br>下载</span></div></li> <li class="qq"><a href="javascript:void(0);" class="sobot_chat"><div class="icon"></div><div class="txt"><span class="content">在线</br>客服</span></div></a></li> <li class="goTotop"><div class="icon"></div><div class="txt"><span class="content">返回</br>顶部</span></div></li> </ul> </div> </div>',
    headerCont2 = '<div class="headerTop darkBg"> <div class="ol-container"> <div class="pull-left"> <span class="homeIcons tel"></span> <span class="welcome">欢迎致电：400-882-3988</span> <span class="homeIcons wechat-qr"></span> <a rel="nofollow" href="http://weibo.com/chaoaicai" target="_blank"><span class="homeIcons weibo"></span></a> </div> </div> <img id="activity_over_img" class="over_img" style="display: none;" alt="活动结束" src="../image/invest_over_grey_2016_5_9.png"> </div> <div class="header_nav "> <div class="ol-container"> <a href="'+cgurl+'" target="_blank"> <span class="logo_new"></span> </a> <span class="logo_text"> </span> <a class="btn mfzc ml0" href="#">免费注册</a> <a class="btn ksdl ml0" target="_blank" href="'+cgurl+'/user/signIn.htm">快速登录</a> </div> </div> <div id="wechat-qr" class="popover"> <div class="arrow"></div> <div class="popover-content"> <p>扫码关注超爱财微信</p> <img alt="超爱财微信二维码" src="../image/qr.jpg"> </div> </div>';

    footerCont = '<div class="ol-footer "> <div class="ol-container"> <div class="topInfo clearfix"> <div class="relatedLink "> <ul> <li class="relatedLinkTitle">关于我们</li> <li><a href="../aboutUs/aboutUs.htm">公司简介</a></li> <li><a href="../infoPublish/aboutUs3.htm">资质荣誉</a></li> <li><a href="../aboutUs/aboutUs8.htm">联系我们</a></li> </ul> <ul> <li class="relatedLinkTitle">帮助中心</li> <li><a href="../helpCenter/FAQ.html">修改密码</a></li> <li><a href="../helpCenter/topUp.html">账户充值</a></li> <li><a href="../helpCenter/withdrawDeposit.html">账户提现</a></li> </ul> <ul> <li class="relatedLinkTitle">安全保障</li> <li><a href="../activity/safeAssurance.htm#top1" target="_self">银行资金存管</a></li> <li><a href="../activity/safeAssurance.htm#top2" target="_self">账户安全无忧</a></li> <li><a href="../activity/safeAssurance.htm#top4" target="_self">完善风控体系</a></li> </ul> </div> <div class="qrCode-images clearfix"> <div class="app"> <img src="../image/footer_app_qr_20161216.png" alt="app_qr" width="90px" height="90px" /> <div>超爱财口袋APP</div> </div> <div class="weixin"> <img src="../image/footer_weixin_qr.png" alt="weixin_qr" /> <div>微信订阅号</div> </div> </div> <div class="call-contact"> <div>服务热线</div> <div class="telephone">400-882-3988</div> <div class="time">工作日： 9:00-12:00    13:00-18:00</div> </div> </div> </div> <div class="trust-icons"> <div class="ol-container clearfix"> <div class="pull-left"> <img src="../image/footer_logo.png" alt="footer_logo" /> <div>账户资金安全由太平洋财产保险提供保障<span class="risk_hint_text">投资有风险&nbsp;入市需谨慎</span></div> <div class="copyRight">Copyright © 2014 上海超爱才金融信息服务有限公司版权所有 沪ICP备15026144号</div> </div> <div class="icons clearfix"> <a key ="568f70eaefbfb00c17b626b2"  logo_size="124x47"  logo_type="business" href="http://www.anquan.org/authenticate/cert/?site=www.chaoaicai.com&at=business" target="_blank"> <div class="anquan"> <span></span>安全联盟 </div> </a> <a rel="nofollow" href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1067189020" target="_blank"> <div class="itrust"> <span></span>网信认证 </div> </a> <a rel="nofollow" href="http://sh.gsxt.gov.cn/notice/notice/view?uuid=9DfasM8QpxnFkD4Ww36mYjvO0TTc.Hrl&tabPanel=01" target="_blank"> <div class="sgs"> <span></span>企业公示 </div> </a> <a rel="nofollow" href="http://si.trustutn.org/info?sn=469161228000557716447&certType=4" target="_blank"> <div class="asso"> <span class="trustutn-icon"></span> </div> </a> </div> </div> </div>';

header.className = 'ol-header simple clearfix';
footer.className = 'ol-footer';


if(location.href.indexOf('register') > -1 || location.href.indexOf('inviteQrCode') > -1){
    header.innerHTML = headerCont2;
}else{
    header.innerHTML = headerCont1;
}





if(!olbody){
    olbody = safeInsurance;
}
document.body.insertBefore(header,olbody);
var aboutUs = document.getElementById('about'),security = document.getElementById('security');
if(location.href.indexOf('aboutUs') > -1 && location.href.indexOf('infoPublish') == -1){
    aboutUs.className = 'active';
}
if(location.href.indexOf('infoPublish') > -1){
    security.className = 'active';
}


footer.innerHTML = footerCont;
var timer = setInterval(function(){
    if(getElementsByClassName('ol-body')[0] || getElementsByClassName('safeInsurance')[0]){
        document.body.appendChild(footer);
        clearInterval(timer);
    }
},1000);

var customService = document.createElement("script");
customService.type = "text/javascript";
customService.src = 'https://www.sobot.com/chat/pc/pc.min.js?sysNum=48bd6201e3b8485b9ffde77e0207daa8';
customService.id = 'zhichiload';
customService.className = 'sobot_chat';
document.body.appendChild(customService);

//存管帮助中心侧导航
if(location.href.indexOf('helpCenter') > -1){
    var context = document.getElementById('nav-centers');
    context.innerHTML=("<div class='title-bg'></div><div class='faq-box'><h3>常见问题<i></i><span></span></h3><ul class='faq_problem'><li class='one'><a href='FAQ.html'>常见问题</a></li><li class='two'><a href='expenseExplain.html'>资费说明</a></li></ul></div><div class='fund-box'><h3>资金问题<i></i><span></span></h3><ul class='fund_problem'><li class='three'><a href='opendAccount.html'>开通E帐号</a></li><li class='four'><a href='tieCard.html'>绑卡</a></li><li class='five'><a href='topUp.html'>充值</a></li><li class='six'><a href='withdrawDeposit.html'>提现</a></li></ul></div><div class='invest-box'><h3>投资问题<i></i><span></span></h3><ul class='invest_problem'> <li class='seven'><a href='invest.html'>投标</a></li><li class='eight'><a href='assignment.html'>债权转让</a></li></ul></div>")
}

// if(location.href.indexOf('infoPublish') > -1){
//     var div = document.getElementById('aboutUs_accordion'),
//         filename = window.parent.location.href.replace(/(.*\/)*([^.]+).*/ig,"$2");
//     div.innerHTML = '<img src="../image/infoPublish_nav_pic.jpg"> <ul> <li id="cacaboutUs13"> <a href="aboutUs13.htm">运营报告</a> </li> <li> <a href="../safeInsurance/safeInsurance.htm?pageNo=0">安全保障</a> </li> <li style="display:none;"> <a href="#">平台数据</a> </li> <li id="cacreport"> <a href="report.htm">媒体报道</a> </li> <li class="hasMenu"> <div class="menu">大事记<span class="caret"></span></div> <ul class="submenu"> <li id="cacaboutUs3"><a href="aboutUs3.htm">资质证书</a></li> <li id="cacaboutUs4"><a href="aboutUs4.htm">荣誉榜</a></li> <li id="cacaboutUs2"><a href="aboutUs2.htm">发展历史</a></li> </ul> </li> <li id="cacaboutUs5"> <a href="aboutUs5.htm">合作机构</a> </li> </ul>';

//     var basicDiv = document.getElementById(('cac'+filename)),
//     parentDiv = basicDiv.parentNode;
//     basicDiv.className += 'active';
//     if(parentDiv.className.indexOf('submenu') > -1){
//       parentDiv.style.display = 'block';
//       parentDiv.parentNode.className += 'open active';
//     }
// }



var div = document.getElementById('aboutUs_accordion'),
    filename = window.parent.location.pathname.replace(/(.*\/)*([^.]+).htm/ig,"$2");
if(location.href.indexOf('aboutUs') > -1 && location.href.indexOf('infoPublish') == -1){
    div.innerHTML = '<img src="../image/aboutUs_nav_pic.jpg"> <ul> <li id="cacaboutUs"> <a href="aboutUs.htm">公司简介</a> </li> <li id="cacaboutUs1"> <a href="aboutUs1.htm">团队简介</a> </li> <li class="hide"> <a href="aboutUs2.htm">发展历史</a> </li> <li class="hasMenu hide"> <div class="menu">资质荣誉<span class="caret"></span></div> <ul class="submenu"> <li><a href="aboutUs3.htm">资质证书</a></li> <li><a href="aboutUs4.htm">荣誉榜</a></li> </ul> </li> <li class="hide"> <a href="aboutUs13.htm">业绩报告</a> </li> <li class="hide"> <a href="aboutUs5.htm">合作机构</a> </li> <li id="cacaboutUs7"> <a href="aboutUs7.htm"><div class="menu">营业网点</div></a> </li> <li id="cacaboutUs8"> <a href="aboutUs8.htm">联系我们</a> </li> <li class="hasMenu "> <div class="menu">企业风采<span class="caret"></span></div> <ul class="submenu"> <li id="cacaboutUs9"><a href="aboutUs9.htm">超爱财</a></li> <li id="cacaboutUs10"><a href="aboutUs10.htm">海钜信达</a></li> </ul> </li> <li id="cacaboutUs11"> <a href="aboutUs11.htm"><div class="menu">财迷活动</div></a> </li> </ul>';
}else if(location.href.indexOf('infoPublish') > -1){
    div.innerHTML = '<img src="../image/infoPublish_nav_pic.jpg"> <ul> <li id="cacaboutUs13"> <a href="aboutUs13.htm">运营报告</a> </li> <li> <a href="../activity/safeAssurance.htm" target="_blank">安全保障</a> </li> <li style="display:none;"> <a href="#">平台数据</a> </li> <!--<li id="cacreport"> <a href="report.htm">媒体报道</a> </li> --><li class="hasMenu"> <div class="menu">大事记<span class="caret"></span></div> <ul class="submenu"> <li id="cacaboutUs3"><a href="aboutUs3.htm">资质证书</a></li> <li id="cacaboutUs4"><a href="aboutUs4.htm">荣誉榜</a></li> <li id="cacaboutUs2"><a href="aboutUs2.htm">发展历史</a></li> </ul> </li> <li id="cacaboutUs5"> <a href="aboutUs5.htm">合作机构</a> </li> </ul>';
}

var basicDiv = document.getElementById(('cac'+filename));
if(basicDiv){
	var parentDiv = basicDiv.parentNode;
	basicDiv.className += 'active';
	if(parentDiv.className.indexOf('submenu') > -1){
	  parentDiv.style.display = 'block';
	  parentDiv.parentNode.className += 'open active';
	}
}



