function showPlay(){
document.getElementById("movie_list").style.display="block";
}
function hidePlay(){
document.getElementById("movie_list").style.display="none";
}
function PlayHistoryClass(){
	var cookieStr,nameArray,urlArray,allVideoArray;
	this.getPlayArray=function (){
		cookieStr = document.cookie;
		var start = cookieStr.indexOf("qike123=") + "qike123=".length,end = cookieStr.indexOf("_$_|",start),allCookieStr= unescape(cookieStr.substring(start,end))
		if(end==-1){allCookieStr="";return;}
		allVideoArray = allCookieStr.split("_$_");
		nameArray = new Array(),urlArray = new Array();
		for(var i = 0; i < allVideoArray.length; i++){
			var singleVideoArray = allVideoArray[i].split("^");
			nameArray[i] = singleVideoArray[0];urlArray[i] = singleVideoArray[1];
		}
	}
	this.viewPlayHistory=function (div){
		var tag = document.getElementById(div),n = 12
		if(navigator.cookieEnabled){
			var innerStr = "";
			for(var i =nameArray.length - 1; i >= 0; i--){
				var textCount = nameArray[i].replace(/[^\x00-\xff]/g,"cc").length;
				if(textCount <= n*2){
					texts = nameArray[i];
				}else{
						texts = nameArray[i].substr(0,n)+"...";
				}
				innerStr += "<li><a target=_blank class=name href=\"" + urlArray[i] + "\"" + " title=\"" + nameArray[i] + "\">" + texts + "</a></li>"
			}
			if (innerStr.length>0){tag.innerHTML= innerStr}
		}else{
			 set(tag,"��������ر���cookie���ܣ�����Ϊ���Զ�����������������ҳ��")
		}
	}
	this.addPlayHistory=function (name,url){
		var count = 10; //������ʷ�б��������
		var code_name = escape(name) + "^",code_url = escape(url) + "_$_",expireTime = new Date(new Date().setDate(new Date().getDate() + 30)),timeAndPathStr = "|; expires=" + expireTime.toGMTString() + "; path=/";
		if(cookieStr.indexOf("qike123=") != -1 || cookieStr.indexOf("_$_|") != -1){
			var newCookieStr = "";
			if(allVideoArray.length < count){
				for(i in allVideoArray){
					if(nameArray[i] == name) continue;
					newCookieStr += escape(nameArray[i]) + "^" + escape(urlArray[i]) + "_$_" ;
				}
			}else{
				for(var i = 1; i < count; i++){
					if(nameArray[i] == name) continue;
					newCookieStr += escape(nameArray[i]) + "^" + escape(urlArray[i]) + "_$_" ;
				}
			}
			document.cookie = "qike123=" + newCookieStr + code_name + code_url + timeAndPathStr;
		}else{
			document.cookie = "qike123="+ code_name + code_url + timeAndPathStr;
		}
	}
}
//var cookiedomain="1.22";
function _GC(){
document.getElementById('playhistory').innerHTML="<center>���޲�����ʷ�б�...</center>";
 var expdate=new Date(1970, 1, 1);
 document.cookie = "qike123=";
}
var PlayHistoryObj=new PlayHistoryClass()
PlayHistoryObj.getPlayArray()
function killErrors() {
    return true;
}
window.onerror = killErrors;

var topShow=false;
	function showTop(n)
	{
		if(topShow==true)
		{
			switchTab('top',n,2,"history");
		}
		else{
			//alert("s");
			document.getElementById("Tab_top_"+n).className="history";
			//document.getElementById("List_top_"+n).className="dropbox_tigger dropbox_tigger_on";
			document.getElementById("List_top_"+n).style.display="";
			topShow=false;
		}
	}
	function hideTop()
	{
		for(i=0;i<2;i++) {
			var CurTabObj = document.getElementById("Tab_top_"+i) ;
			var CurListObj = document.getElementById("List_top_"+i) ;
			CurTabObj.className="history" ;
			CurListObj.style.display="none";
		}
	}

