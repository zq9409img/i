﻿//重写了common.js里的同名函数
function RevertComment(i){$("#inpRevID").val(i);var frm=$('#comment'),cancel=$("#cancel-reply"),temp=$('#temp-frm');var div=document.createElement('div');div.id='temp-frm';div.style.display='none';frm.before(div);$('#AjaxComment'+i).before(frm);frm.addClass("");cancel.show();cancel.click(function(){$("#inpRevID").val(0);var temp=$('#temp-frm'),frm=$('#comment');if(!temp.length||!frm.length)return;temp.before(frm);temp.remove();$(this).hide();frm.removeClass("");return false});try{$('#txaArticle').focus()}catch(e){}return false}
//重写GetComments，防止评论框消失
function GetComments(logid,page){$('span.commentspage').html("Waiting...");$.get(bloghost+"zb_system/cmd.php?act=getcmt&postid="+logid+"&page="+page,function(data){$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();$('#AjaxCommentEnd').before(data);$("#cancel-reply").click()})}
function CommentComplete(){$("#cancel-reply").click()}