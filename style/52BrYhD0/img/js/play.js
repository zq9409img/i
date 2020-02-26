var playerw='100%';//电脑端播放器宽度
var playerh='540';//电脑端播放器高度
var mplayerw='100%';//手机端播放器宽度
var mplayerh='100%';//手机端播放器高度
var adsPage="/z/load/la.html";//视频播放前广告页路径
var adsTime=5;//视频播放前广告时间，单位秒
var jxAname="①号线";
var jxBname="②号线";
var jxCname="③号线";
var jxDname="④号线";
var jxEname="";
var jxAapi="https://jx.dy-jx.com/?url=";
var jxBapi="https://aoye8.com/vip/vip.php?url=";
var jxCapi="https://jx.iyinghua.cn/yh/?url=";
var jxDapi="https://jx.618g.com/?url=";
var jxEapi="";
var forcejx="yes";
var unforcejx="ckplayer#xigua#ffhd#jjvod#swf#xfplay#jsyun#m3u8#kuyun#ckm3u8#kkyun#kkm3u8#yzm#33uu#33uuck#27pan#135m3u8#135zy#zuidam3u8#zuidall#yunpan#dp#ck";
var unforcejxARR = unforcejx.split('#');


function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
 
var flag = IsPC(); //true为PC端，false为手机端
if(flag==false)
{
	playerw=mplayerw;
	playerh=mplayerh;
}