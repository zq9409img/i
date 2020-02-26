$(function(){
$("img.lazy").lazyload();
$(".jsfrom li:first").addClass("on");
$(".jsplist:first").addClass("flod");
$(".sytab").click(function(){
  $(this).parent().next().toggle();
  $(this).children().children().toggleClass("v");
});
$(".playul li").hover(function(){
  $(this).addClass("v");
  $(this).siblings().removeClass("v");
});
$(".search .im").hover(function(){
  $(this).children().toggleClass("v");
});
$(".nav .jqnav").click(function(){
  $(this).parent().parent().next().next().toggleClass("mv");
  $(this).parent().parent().next().next().next().removeClass("mv");
});
$(".nav .jqms").click(function(){
  $(this).parent().parent().next().next().next().toggleClass("mv");
  $(this).parent().parent().next().next().removeClass("mv");
});
$(".searchgb").click(function(){
  $(this).parent().removeClass("mv");
});



	$(".link").hover(function() {
		$(this).find(".textdown").fadeToggle(400);
		$(this).find(".bgbtn").fadeToggle(400)
	});
	$('.link').hover(function() {
		$(this).find(".bgb").stop().animate({
			bottom: '0px',
			left: '0px'
		}, {
			queue: false,
			duration: 400
		})
	}, function() {
		$(this).find(".bgb").stop().animate({
			bottom: '-51px',
			left: '0px'
		}, {
			queue: false,
			duration: 400
		})
	});	
	
	
	
	
$(".tt-tab .ml10").click(function() {
		$(this).parent().parent().parent().next().toggleClass("ycsxl");
		$(this).toggleClass("zk");
		if ($(this).is(".zk")) {
			$(this).html("展开筛选")
		} else {
			$(this).html("收起筛选")
		}
});
$(".tt-tab .ml19").click(function() {
		$(this).parent().parent().parent().next().toggleClass("xssxl");
		$(this).toggleClass("zk");
		if ($(this).is(".zk")) {
			$(this).html("收起筛选")
		} else {
			$(this).html("展开筛选")
		}
})

});

function setTab(name,name2,cursel,n){  
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById(name2+i);
  menu.className=i==cursel?"on":"";
  con.style.display=i==cursel?"block":"none";
 }
};



