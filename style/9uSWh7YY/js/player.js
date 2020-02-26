$(document).ready(function(){
 var playnav=document.getElementById('playnav');
 var oNav=playnav.getElementsByTagName('li');

 var playcontainer=document.getElementById('playcontainer');
 var oDiv=playcontainer.getElementsByClassName('tab');
 for(var i=0;i<oNav.length;i++){
  oNav[i].index=i;
  oNav[i].onclick=function () {
  for(var i=0;i<oNav.length;i++){
   oNav[i].className='';
   oDiv[i].style.display="none";
  }
  this.className='act';
  oDiv[this.index].style.display="block"
  }
  for(var m=1;m<oNav.length;m++){
   oNav[m].className='';
   oDiv[m].style.display="none";
  }
 }
});
$(document).ready(function(){
	$("#Fs").click(function(){
		$("#Fs").hide();
		$("#Efs").show();
		$("#playerbox").css({
			"position":"fixed",
			"top":"0",
			"left":"0",
			"z-index":"1000",
			"width":"100%",
			"height":"100%",
		});
	});
	$("#Efs").click(function(){
		$("#Efs").hide();
		$("#Fs").show();
		$("#playerbox").removeAttr("style");
	});
});
$(document).keyup(function(event){
	switch(event.keyCode) {
	case 27:
		$("#Efs").hide();
		$("#Fs").show();
		$("#playerbox").removeAttr("style");
	case 96:
		$("#Efs").hide();
		$("#Fs").show();
		$("#playerbox").removeAttr("style");
	}
});