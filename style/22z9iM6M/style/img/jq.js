$(function(){
	$("img.lazy").lazyload();
  var menuwidth  = 240;
  var menuspeed  = 400;
  
  var $bdy       = $('body');
  var $container = $('#pgcontainer');
  var $burger    = $('#menu_right');
  var negwidth   = "-"+menuwidth+"px";
  var poswidth   = menuwidth+"px";
  
  $('.menubtn').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    } else {
      jsAnimateMenu('open');
    }
    $(this).children().toggleClass('closebtn_bg');
  });
  
  $('.overlay').on('click', function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    }
    $('.menubtn_bg').removeClass('closebtn_bg');    
  });
  function jsAnimateMenu(tog) {
    if(tog == 'open') {
      $bdy.addClass('openmenu');
      
      $container.animate({marginLeft: negwidth, marginRight: poswidth}, menuspeed);
      $burger.animate({width: poswidth}, menuspeed);
      $('.overlay').animate({right: poswidth}, menuspeed);
    }
    
    if(tog == 'close') {
      $bdy.removeClass('openmenu');
      
      $container.animate({marginLeft: "0", marginRight: "0"}, menuspeed);
      $burger.animate({width: "0"}, menuspeed);
      $('.overlay').animate({right: "0"}, menuspeed);
    }
  }
});

$(document).ready(function(){

    $("div.aa .bb").hover(function(){
        $(this).addClass("hover").find("div.cc").show();
    },function(){
        $(this).removeClass("hover").find("div.cc").hide();
    });

});



function setTab(name,cursel,nlength){
	cursel_0=cursel;
	for(var i=1; i<=nlength; i++){
		var menu = document.getElementById(name+i);
		var menudiv = document.getElementById("con_"+name+"_"+i);
		if(i==cursel){
			menu.className="curr";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}


$(function() {
		$(".tt-tab .ml19").click(function() {
		$(this).parent().parent().next().next().toggleClass("xssxl");
		$(this).toggleClass("zk");
		if ($(this).is(".zk")) {
			$(this).html("收起筛选<i class=sjbgx></i>")
		} else {
			$(this).html("展开筛选<i class=sjbgs></i>")
		}
	});
		$(".tt-tab .ml10").click(function() {
		$(this).parent().parent().next().next().toggleClass("xssxs");
		$(this).toggleClass("zk");
		if ($(this).is(".zk")) {
			$(this).html("展开筛选<i class=sjbgs></i>")
		} else {
			$(this).html("收起筛选<i class=sjbgx></i>")
		}
	});


});

$(function() {
	$("#nav-caidan").click(function(){
	  $(this).toggleClass("jqnavbr");
	  $(this).parent().next().next().toggleClass("mv");
	  $(this).parent().next().next().next().removeClass("mv");
	});
	$("#nav-search").click(function(){
	  $(this).toggleClass("jqnavbrs");	
	  $(this).parent().next().toggleClass("mv");
	});	
	
	
});