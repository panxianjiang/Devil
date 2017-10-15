

$(function(){
  
   var $ul=$('#btn-ch');
   var $li=$('#btn-ch>li');
    $li.eq(0).css('backgroundColor','blue').siblings().css('backgroundColor','skyblue')
// 背景图切换；
   var Array=['images/bg1.jpg','images/bg2.png','images/bg3.png','images/bg4.png','images/bg5.png',];   
   
   $li.bind('click',function() {
   	console.log('dd')

    var index=$(this).index();

   $(this).css('backgroundColor','blue').siblings().css('backgroundColor','skyblue')

   clearInterval(progressTimer);
			// progressTimer = null;
   $('#main').css('backgroundImage',"url("+Array[index]+")");
   progressTimer = initTimer();
  
   $("#wrap>div").eq(index).show().siblings().hide(); 

   });

// 自动切换

	var progressTimer = null;
		progressTimer = initTimer();
	var  cange=0;
  function initTimer(){
  return setInterval(function(){
   	cange++;
   	if (cange>4) {
      cange=0;
   	}
   	$li.eq(cange).css('backgroundColor','blue').siblings().css('backgroundColor','skyblue')

   	$('#main').css('backgroundImage',"url("+Array[cange]+")");

   	$("#wrap>div").eq(cange).show().siblings().hide(); 

   },2000);
}

 $('#wrap').mouseover(function(){
   	clearInterval(progressTimer);
   	progressTimer=null;
   })

$('#wrap').mouseout(function(){
  progressTimer = initTimer();
   })

// 点击箭头切换
   
   $('.move>span').eq(0).click(function(){
   	 clearInterval(progressTimer);
   	 console.log("s");
     cange--;
     if (cange<0) {
     	cange=4;
     }
    $li.eq(cange).css('backgroundColor','blue').siblings().css('backgroundColor','skyblue')
    $('#main').css('backgroundImage',"url("+Array[cange]+")");

    $("#wrap>div").eq(cange).show().siblings().hide(); 

    progressTimer = initTimer();
   })

   $('.move>span').eq(1).click(function(){
   	 clearInterval(progressTimer);
     cange++;
     if (cange>4) {
     	cange=0;
     }
     $li.eq(cange).css('backgroundColor','blue').siblings().css('backgroundColor','skyblue')

     $('#main').css('backgroundImage',"url("+Array[cange]+")");

     $("#wrap>div").eq(cange).show().siblings().hide(); 

    progressTimer = initTimer();
   })
   
 // 动态点击 预约
  $('.show').mouseover(function(e){
  
     e.preventDefault;
     $(this).css('backgroundImage','url(images/images/btn2.png)')
  })  
     $('.show').mouseout(function(){
      $(this).css('backgroundImage','url(images/images/btn1_03.png)')
 })  


// 网页失去焦点
$(window).blur(function(){
 	clearInterval(progressTimer);
 	progressTimer=null;
 })

// 第二页面

$('.btn-2-2').click(function(){
  $(this).css("backgroundImage",'url(images/images/row2_06.png)')
	// $('.text').css("backgroundImage",'url(images/images/tile4_03.png)').css('backgroundSize',"200px 60px")
})

$('.btn-2-2').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/row_06.png)')

})

$('.btn-2-3').click(function(){
  $(this).css("backgroundImage",'url(images/images/row2_03.png)')
	// $('.text').css("backgroundImage",'url(images/images/tilte2-1_07.png)')
})

$('.btn-2-3').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/row_03.png)')
})

$('.btn-2-1').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/btn3-1_03.png)')
})

$('.btn-2-1').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/btn3_03.png)')
})

$('.btn-ch-2').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/btn2.png)')
})

$('.btn-ch-2').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/btn1_03.png)')
})

// 第三页
 $('.btn-3').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/flv3_03.png)')
})

$('.btn-3').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/show3_07.png)')
})

 $('.btn-ch-3').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/btn2.png)')
})

$('.btn-ch-3').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/btn1_03.png)')
})
// 第四页

$('.btn-4-1').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/flv3_03.png)')
})

$('.btn-4-1').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/show3_07.png)')
})


$('.skill-1').mouseover(function(){
     $('#skill-1').fadeToggle();
})
$('#skill-1').mouseout(function(){
  $(this).fadeToggle();
})

$('.skill-2').mouseover(function(){
     $('#skill-2').fadeToggle();
})
$('#skill-2').mouseout(function(){
  $(this).fadeToggle();
})

$('.skill-3').mouseover(function(){
     $('#skill-3').fadeToggle();
})
 $('#skill-3').mouseout(function(){
  $(this).fadeToggle();
})

// 第五页
 $('.btn-ch-5').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/btn2.png)')
})

$('.btn-ch-5').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/btn1_03.png)')
})


$('.btn-5').mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/btn5-2_03.png)')
})
$('.btn-5').mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/btn3-1_03.png)')
})
// 视频
  
  $('.flv').mouseover(function(){
    $(this).css("backgroundImage",'url(images/images/flv2_06.png)')
  })

  $('.flv').mouseout(function(){
    $(this).css("backgroundImage",'url(images/images/flv_03.png)')
  })
  
  $('.flv').click(function(){
  	$('#em').css('display','block');
  	$('.plus').css('display','block');
  })
   
  $('.plus').click(function(){
  	$('#em').css('display','none');
  	$('.plus').css('display','none');
  }) 
// 视频2

 $('.btn-2-1').click(function(event) {
 	 $('#em').css('display','block');
  	$('.plus').css('display','block');
 });
// 视频3
$('.btn-3').click(function(event) {
 	 $('#em').css('display','block');
  	$('.plus').css('display','block');
 });
// 视频4
$('.btn-4-1').click(function(event) {
 	 $('#em').css('display','block');
  	$('.plus').css('display','block');
 });
//  视频5
$('.btn-5').click(function(event) {
  $('#em').css('display','block');
  $('.plus').css('display','block');
});
// 新闻：
   $('.newlook').click(function(event) { 
      // $('.newlook').css('backgroundImage',"url('images/images/newlook_03.png')").animate({
      // 	width: 320, 
      // 	height: 245,
      // }, 'slow');
      $('.show-l').fadeToggle('slow');
   })
   $('.show-l').mouseleave(function(){

     // $('.newlook').animate({width: 65, height: 40},).css({
     // 	backgroundImage:"url('images/images/newlookbtn_03.png')",

     //          });  

        $('.show-l').fadeToggle('slow');
   })
 
// 官媒：
   $('.newmei').click(function(event) {
   		$('.show-t').animate({width: 415}, '300')
   		// $('.show-t').slideToggle("slow")
   		$('.show-t>li').eq(0).animate({width: 84}, '300')
   		$('.show-t>li').eq(1).animate({width: 49}, '300')
   		$('.show-t>li').eq(2).animate({width: 58}, '300')
   		$('.show-t>li').eq(3).animate({width: 83}, '300')
   		$('.show-t>li').eq(4).animate({width: 85}, '300')
   		$('.show-t>li').eq(5).animate({width: 50}, '300')

  })
   $('.show-t').mouseleave(function(){
   		$('.show-t').animate({width: 0}, '200')
   		$('.show-t>li').eq().animate({width: 0}, '300')
   			// $('.show-t').slideToggle("slow")

   })
 

 // 易信二维码
 $('.show-t>li').eq(1).mouseover(function(event) {
 	$(".code2").fadeToggle('300');
 });
  $('.show-t>li').eq(1).mouseout(function(event) {
 	$(".code2").fadeToggle('300');
 });

//  最底层的IM通信
$('.im>li').eq(0).mouseover(function(){
  $(this).css('backgroundImage','url(images/images/bottom2_03.png)')
})
$('.im>li').eq(0).mouseout(function(){
  $(this).css('backgroundImage','url(images/images/bottom_03.png)')
})
$('.im>li').eq(1).mouseover(function(){
  $(this).css('backgroundImage','url(images/images/bottom2_05.png)')
})
$('.im>li').eq(1).mouseout(function(){
  $(this).css('backgroundImage','url(images/images/bottom_05.png)')
})
$('.im>li').eq(2).mouseover(function(){
  $(this).css('backgroundImage','url(images/images/bottom2_08.png)')
})
$('.im>li').eq(2).mouseout(function(){
  $(this).css('backgroundImage','url(images/images/bottom_08.png)')
})
$('.im>li').eq(3).mouseover(function(){
  $(this).css('backgroundImage','url(images/images/bottom2_11.png)')
})
$('.im>li').eq(3).mouseout(function(){
  $(this).css('backgroundImage','url(images/images/bottom_11.png)')
})

// 左侧二维码
$('#coded>span').eq(0).mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/codehe_06.png)')
})
$('#coded>span').eq(0).mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/codehe_01_03.png)')
})
$('#coded>span').eq(1).mouseover(function(){
  $(this).css("backgroundImage",'url(images/images/codehe_01_05.png)')
})
$('#coded>span').eq(1).mouseout(function(){
  $(this).css("backgroundImage",'url(images/images/codehe_03.png)')
})
})
 