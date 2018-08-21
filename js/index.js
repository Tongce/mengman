$(function(){
	var flip_timer;//P2页面点击卡牌，过渡跳转到P3页面
	var mathRandom_timer;//P2页面随机显示爱心
	var flag=1;//P2只能点击一个选项卡牌
	// 首页P1点击，跳转P2页面
	$(".dp-ib-wrap .girlType").on("click",function(){
		$(".p1").hide();
		$(".p2").fadeIn(300);
		var dataGroupNum=parseInt($(this).attr('data-group'));
		for(var i=1;i<8;i++){
			$('[data-man-index='+i+']').find(".card-back img").attr("src",'img/'+dataGroupNum+i+'.jpg');
		}
		// mathRandom_timer=setInterval(mathRandom,1000);
	});
	// p2页面点击，跳转到p3页面
	$(".mancard").on("click",function(){
		if(flag==0){
			return false;
		}
		$(this).addClass("flip");
		flip_timer=setTimeout(removeFlip,800);
		flag=0;
		var cardBackSrc=$(this).find(".card-back img").attr("src");
		$(".p3 .man-img").attr("src",cardBackSrc);
		clearInterval(mathRandom_timer);
	});
	function removeFlip(){
		$(".p2").fadeOut(500,function(){
			$(".p3").fadeIn(500,function(){
				$('.mancard').removeClass('flip');
			});
		});
	};
	// 	p2爱心随机显示
	function mathRandom(){
		var num=parseInt(Math.random()*7,10)+1;
		var imgAppend=$('<img src="img/p2_heart.png" alt="" class="card-heart dp-n">');
		$("[data-man-index="+num+"]").append(imgAppend);
		imgAppend.fadeIn(500,function(){
			imgAppend.fadeOut(500,function(){
				imgAppend.remove();
			})
		})
	};
	// p3页面点击返回，返回到p2页面
	$(".retry").on("click",function(){
		flag=1;
		$(".p3").hide();
		$(".p2").fadeIn(300);
		mathRandom_timer=setInterval(mathRandom,1000);
	});
	// 遮盖层分享
	$(".p3-btn-share").on("click",function(){
		$(".popup-share").show();
	});
	$(".popup-share").on("click",function(){
		$(".popup-share").hide();
	})	
})

