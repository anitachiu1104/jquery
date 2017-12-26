?$(function(){
	//²úÆ·banner»¬¶¯
	var bannerSlide ={
			setting: {
				currentIndex: 0,
				animateSpeed: 300,
				intervalSpeed: 500
			},
			slide: function(paraList){
				var _this = this;
				$.extend(_this.setting, paraList,{bannerSize: $(paraList.target).length}); 
				if(_this.setting.bannerSize == 1){
					$(this.setting.target).css({"display":"block","opacity":1});
					return;
				}
                this.createDot();
                _this.slideAction.call(_this);
				this.int = self.setInterval(function(){_this.slideAction.call(_this)},this.setting.intervalSpeed);
              
				$(this.setting.target+","+this.setting.dotClass).mouseenter(function(){
					_this.stopSlide();
				});

				$(this.setting.target+","+this.setting.dotClass).mouseleave(function(){
					_this.stopSlide();
					_this.int = self.setInterval(function(){_this.slideAction.call(_this)},_this.setting.intervalSpeed);
				});
			},
			slideAction: function(){
				if(this.setting.currentIndex > this.setting.bannerSize-1) this.setting.currentIndex = 0;	
				$(this.setting.target).eq(this.setting.currentIndex).css("display","block")
				               .animate({opacity:1},this.setting.animateSpeed)
				               .siblings().animate({opacity:0},this.setting.animateSpeed,function(){
				            	   $(this).css("display","none");
				               });
				$(this.setting.dotClass).find("li").eq(this.setting.currentIndex).addClass("active").siblings().removeClass("active");
				this.setting.currentIndex++;
			},
			createDot: function(){
				var _this = this,
				    dotCount = this.setting.bannerSize,
				    dotDiv = document.createElement("ul"); 
				dotDiv.className = this.setting.dotClass.replace("\.","");
		
				while(dotCount > 0){
					var _li = document.createElement("li");
					dotDiv.appendChild(_li);
					dotCount--;
				}	
				
				$(this.setting.target).parent().parent()[0].appendChild(dotDiv);
				$(this.setting.dotClass).find("li").on("click",function(){
					_this.stopSlide();
					_this.setting.currentIndex = $(this).index();
					console.log(_this.setting.currentIndex)
					$(this).addClass("active").siblings().removeClass("active");
					_this.showtarget();
				})
				
			},
			showtarget: function(){
				$(this.setting.target).eq(this.setting.currentIndex).css("display","block")
	               .animate({opacity:1},this.setting.animateSpeed)
	               .siblings().animate({opacity:0},this.setting.animateSpeed,function(){
	            	   $(this).css("display","none");
	               });
				
			},
			stopSlide: function(){
				clearInterval(this.int);	
			}
	};
	
	    bannerSlide.slide({target: ".bannerList li",
	    	               currentIndex: 0,
	    	               animateSpeed: 300,
	    	               intervalSpeed: 4000,
	    	               dotClass: ".dot"})
	
})

	  