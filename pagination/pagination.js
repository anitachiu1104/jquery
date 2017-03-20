
//分页
var pagination = function() {
	pagination.prototype ={
			initPage: function(obj){
				 var addPageTarget= obj.addPageTarget?obj.addPageTarget:document.body,
					 pageDisplayNum = (obj.pageDisplayNum && obj.pageDisplayNum > 0)?obj.pageDisplayNum:this.pageDisplayNum,
					 correntPage = Math.ceil(this.getUrlStr("page")),
					 addPageNode;

				     this.isPagination = (obj.isPagination != undefined)?obj.isPagination:this.isPagination;
				     this.recordEachPage = (obj.recordEachPage && obj.recordEachPage > 0)?obj.recordEachPage:this.recordEachPage;

				 var div = document.getElementsByTagName("*"), repeat, matchAttr, regExp =/([\w\-]*)\s*in\s*([\w\-]*)/;
				 for(var i = 0; i < div.length; i++){
					 if(repeat = div[i].getAttribute("repeat")){
						 matchAttr = repeat.match(regExp);
						 this.repeat = repeat;
						 this.item = matchAttr[1];
						 this.dataList = obj[matchAttr[2]];
						 this.totalRecord = this.dataList.length;
						 this.repeatNode = div[i];
					 }
					 if((_class = div[i].getAttribute("class")) && _class.indexOf(addPageTarget) >= 0 ){
						 addPageNode = div[i];
					 }
				 }

			     this.addHtmlTarget = obj.addHtmlTarget;

			     var totalPage = Math.ceil(this.totalRecord/this.recordEachPage);

				 if(!this.totalRecord || this.isPagination && isNaN(correntPage)){
					 this.repeatNode.parentNode.removeChild(this.repeatNode)
					 return;
				 }

				 this.correntPage =  (correntPage && correntPage >0)?correntPage:1;

				 var insertDiv= this.createNode("div"), ret=[];
				 insertDiv.innerHTML = this.htmlCreate();
				 elem = insertDiv.childNodes;

				 var i = ret.length,j = 0;
				 for ( var l = elem.length; j < l; j++ ) {
					ret[ i++ ] = elem[ j ];
			     }
				 var  fragment = document.createDocumentFragment(),script;
				 for ( var i = 0; ret[i]; i++ ) {
					script = ret[i];
					fragment.appendChild(script);
				 }

				 this.repeatNode.parentNode.insertBefore(fragment,this.repeatNode.nextSibling);
				 this.repeatNode.parentNode.removeChild(this.repeatNode);

				 if(this.isPagination == false) return;
			     var _pageUrl = this.getUrl();

			     var ul = this.createNode("ul");
			     ul.setAttribute("class","pagination");
			     var firstPage = this.createNode("li"),
			         prePage = this.createNode("li"),
			         nextPage = this.createNode("li"),
			         lastPage = this.createNode("li");
			     firstPage.innerHTML = "<a href="+_pageUrl+(this.isParam?"&":"?")+"page=1><span>&lt;&lt;</span></a>";
			     ul.appendChild(firstPage);

			     prePage.innerHTML = (this.correntPage && this.correntPage-1 >0)?
			                   "<a href="+_pageUrl+(this.isParam?"&":"?")+"page="+(this.correntPage-1)+"><span>&lt;</span></a>":"<span>&lt;</span>";
			     ul.appendChild(prePage);

			     var centerDiv = this.createNode("div");
			    	 centerDiv.setAttribute("style","text-align: center;");
			     centerDiv.appendChild(ul);
			     addPageNode.appendChild(centerDiv);
			     var startNo,endNo;
			     if(this.correntPage + pageDisplayNum - 1 <= totalPage) {
			    	 startNo = this.correntPage;
			    	 endNo = this.correntPage + pageDisplayNum;
			     }else{
			    	 startNo = totalPage - (pageDisplayNum -1);
		    		 if(startNo <= 0) {
		    			 startNo = 1;
		    			 endNo = totalPage+1;
		    		 }else {
		    			 endNo = startNo + pageDisplayNum;;
		    		 }
			     }
			     for(var i = startNo; i < endNo; i++){
			        var  _li = this.createNode("li");
			        if(i == this.correntPage) _li.setAttribute("class","active");
			        _li.innerHTML = "<a href="+_pageUrl+"?page="+i+"><span>"+i+"</span></a>";
			        ul.appendChild(_li);
			     }
			     nextPage.innerHTML = (this.correntPage && this.correntPage+1 <= totalPage)?
			                   "<a href="+_pageUrl+(this.isParam?"&":"?")+"page="+(this.correntPage+1)+"><span>&gt;</span></a>":"<span>&gt;</span>";
			     ul.appendChild(nextPage);
			     lastPage.innerHTML = "<a href="+_pageUrl+(this.isParam?"&":"?")+"page="+totalPage+"><span>&gt;&gt;</span></a>";
			     ul.appendChild(lastPage);
			},
			getUrl: function(){
				 var url = document.location.toString();
			　　　　var arrUrl = url.split("//");
			　　　　var relUrl = arrUrl[1].substring(arrUrl[1].indexOf("/"));
			     var urlAttr= relUrl.split("?");

			     if(urlAttr[1]){
			    	 var urlAttrArray = urlAttr[1].split("&");
				     var theRequest = [];
				     for(var i = 0; i < urlAttrArray.length; i ++) {
				    	 if(urlAttrArray[i].split("=")[0]!="page"){
				    		 theRequest.push(urlAttrArray[i].split("=")[0]+"="+unescape(urlAttrArray[i].split("=")[1]));
				    	 }
				     }
				     var param = theRequest.join("&");
				     if(param){
				    	 this.isParam = true;
				    	 return urlAttr[0]+"?"+param
				     }
			     }
				return urlAttr[0];
			},
			createNode: function(){
				return document.createElement(arguments[0]);
			},
			getUrlStr: function getUrlStr(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]); return null;
			},
			htmlCreate : function htmlCreate(){
				var insertHTML = "",
				    startRecord,
				    endRecord,
				    regExp =/[^"]*\$index.[^\s\>^"]*/g;
				    repeatTarget = this.repeatNode.outerHTML.replace(/data-src/,'src');

				if(this.isPagination == true) {
					startRecord = (this.correntPage-1) * this.recordEachPage,
				    endRecord = ((endRecord= this.correntPage * this.recordEachPage) <= this.totalRecord)?endRecord:this.totalRecord;
				}else {
					startRecord = 0,
					endRecord = this.totalRecord;
				}

				var keyName = this.item;

				for(var j=startRecord; j<endRecord;j++){
					var repeatHtml = repeatTarget;
					for(var key in this.dataList[j]){
						var keyReg = new RegExp("{{"+keyName+"\."+key+"}}","g");
						if(!this.dataList[j][key]){
					        repeatHtml = repeatHtml.replace(keyReg,j);
					    }else if(typeof(this.dataList[j][key]) === 'string'){
					        repeatHtml = repeatHtml.replace(keyReg,this.dataList[j][key]);
					    }
					}

					if(repeatHtml.match(regExp)){
						repeatHtml = repeatHtml.replace(regExp,function($0){
							return eval($0.replace(/\$index/,j))
						});
					}

					insertHTML +=repeatHtml;
				}
				return insertHTML;

			},
			recordEachPage: 1,
			pageDisplayNum: 4,
			isPagination: true
	}

	return pagination.prototype.initPage(arguments[0]);

};





var reportData = [{reportPic:"../image/ab13/ab13_report201702.jpg",reportLink:"../monthlyReport/monthlyReport.htm?issue=201702",reportTitle:"2017年02月运营报告"},
	           {reportPic:"../image/ab13/ab13_report201701.jpg",reportLink:"../monthlyReport/monthlyReport.htm?issue=201701",reportTitle:"2017年01月运营报告"},
               {reportPic:"../image/ab13/b13_report201613.png",reportLink:"../monthlyReport/yearlyReport201612.htm",reportTitle:"2016年度运营报告"},
               {reportPic:"../image/ab13/ab13_report201612.jpg",reportLink:"../monthlyReport/monthlyReport201612.htm",reportTitle:"2016年12月运营报告"},
               {reportPic:"../image/ab13/ab13_report201611.jpg",reportLink:"../monthlyReport/monthlyReport201611.htm",reportTitle:"2016年11月运营报告"},
               {reportPic:"../image/ab13/ab13_report201610.jpg",reportLink:"../monthlyReport/monthlyReport201610.htm",reportTitle:"2016年10月运营报告"},
               {reportPic:"../image/ab13/ab13_report201609.jpg",reportLink:"../monthlyReport/monthlyReport201609.htm",reportTitle:"2016年09月运营报告"},
               {reportPic:"../image/ab13/ab13_report201608.jpg",reportLink:"../monthlyReport/monthlyReport201608.htm",reportTitle:"2016年08月运营报告"},
               {reportPic:"../image/ab13/ab13_report201607.jpg",reportLink:"../monthlyReport/monthlyReport201607.htm",reportTitle:"2016年07月运营报告"},
               {reportPic:"../image/ab13/b13_report201606.jpg",reportLink:"../monthlyReport/yearlyReport201606.htm",reportTitle:"2016半年度运营报告"},
               {reportPic:"../image/ab13/ab13_report201606.png",reportLink:"../monthlyReport/monthlyReport201606.htm",reportTitle:"2016年06月运营报告"},
               {reportPic:"../image/ab13/ab13_report201605.jpg",reportLink:"../monthlyReport/monthlyReport201605.htm",reportTitle:"2016年05月运营报告"},
               {reportPic:"../image/ab13/ab13_report201604.png",reportLink:"../monthlyReport/monthlyReport201604.htm",reportTitle:"2016年04月运营报告"},
               {reportPic:"../image/ab13/ab13_report201603.jpg",reportLink:"../monthlyReport/monthlyReport201603.htm",reportTitle:"2016年03月运营报告"},
               {reportPic:"../image/ab13/ab13_report201602.png",reportLink:"../monthlyReport/monthlyReport201602.htm",reportTitle:"2016年02月运营报告"},
               {reportPic:"../image/ab13/ab13_report201601.png",reportLink:"../monthlyReport/monthlyReport201601.htm",reportTitle:"2016年01月运营报告"},
               {reportPic:"../image/ab13/b13_report201513.png",reportLink:"../monthlyReport/yearlyReport201512.htm",reportTitle:"2015年度运营报告"},
               {reportPic:"../image/ab13/ab13_report201512.jpg",reportLink:"../monthlyReport/monthlyReport201512.htm",reportTitle:"2015年12月运营报告"}
              ];


var locationHref = location.href,
	pageName = locationHref.substring(locationHref.lastIndexOf('/')+1,locationHref.lastIndexOf('.')),
	pageNeedTarget = [{addPageTarget:"aboutUs13",reportList:reportData, recordEachPage: 10}];

function paginationCreate(){
 for( var i in pageNeedTarget){
		if(pageName == pageNeedTarget[i].addPageTarget && $("."+pageNeedTarget[i].addPageTarget)[0]){
		    pagination(pageNeedTarget[i])
		    break;
		}
	}
}

paginationCreate();