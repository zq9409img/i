/*ͷ������*/
jQuery(document).ready( function(){
//ͷ����������¼�
jQuery("#ldgsearch").click(function(){
var keyword=jQuery("#keyword").val();
if(keyword!=""){	jQuery("#searchForm").submit();}
else{alert("������ؼ��ʺ���������~");}

	})
//�˵���ť�¼�
jQuery("#openGuide").click(function() {
	var trigger=jQuery(this);
	var title = trigger.attr("title");
	var txtKey = "����";
	var elHeader = trigger.parents("header");
	if (/����/.test(title)) {
		trigger.attr("title", title.replace(txtKey, ""));
		elHeader.removeAttr("open");
	} else {
		elHeader.attr("open", "");
		trigger.attr("title", txtKey + title);
		if (self.elBacktop) {
			self.elBacktop.trigger("click");
		}
	}
	var ACTIVE="active";
	target = jQuery("#" + trigger.attr("data-rel"));
	var isActive = trigger.hasClass(ACTIVE);
	if (isActive) {
		trigger.removeClass(ACTIVE);
		target.removeClass(ACTIVE);
	} else {
		trigger.addClass(ACTIVE);
		target.addClass(ACTIVE);
	}
});

//�����Ӱ
jQuery("#guideOverlay").on("click", function() {
jQuery("#openGuide").trigger("click");
});

	
//����չ��
jQuery("#openSearchPopup").on("click", function() {
		var keyword = jQuery(this).data("keyword") || "";
		jQuery("#searchPopup").removeAttr("hidden");
		jQuery("#keyword").attr("placeholder", keyword).focus();
		return false;
});
jQuery("#searchFormIndex").on("click", function() {
		var keyword = jQuery(this).data("keyword") || "";
		jQuery("#searchPopup").removeAttr("hidden");
		jQuery("#keyword").attr("placeholder", keyword).focus();
		return false;
});


//�����ر�
jQuery("#closeSearchPopup").on("click", function() {
	jQuery("#searchPopup").attr("hidden", "");
	jQuery("body").removeClass("open");
});
});



/*��ҳTab�л�*/
jQuery(document).ready( function(){
var ldgtabs=jQuery(".ldgtab li");
if(ldgtabs.length>0)
{
	$(ldgtabs).each(function(){
		jQuery(this).click(function(){
			jQuery(this).addClass("on_zzjs").siblings().removeClass("on_zzjs");
			var tabindex=jQuery(this).index();
			jQuery(".tab_box div").eq(tabindex).show().siblings().hide();
			})
	});
}
});


/*�������л�*/
jQuery(document).ready( function(){
jQuery('.arconix-toggle-content').each( function() {
	if( jQuery(this).hasClass('toggle-closed')) {
		jQuery(this).hide();
	}
});
jQuery('.arconix-toggle-title').each( function() {
	jQuery(this).click(function() {
		var toggleContent = jQuery(this).next('.arconix-toggle-content');

		jQuery(this).toggleClass('toggle-open').toggleClass('toggle-closed');            
		toggleContent.toggleClass('toggle-open').toggleClass('toggle-closed');
		toggleContent.slideToggle();
	});
});
});


/*�������*/
jQuery(document).ready( function(){
var slideHeight = 60;
var defHeight = jQuery('#wrap').height();
if(defHeight >= slideHeight){
	jQuery('#wrap').css('height' , slideHeight + 'px');
	jQuery('#read-more').append('<a href="#"><i class="icon iconfont icon-jiantou-copy"></i></a>');
	jQuery('#read-more a').click(function(){
		var curHeight = jQuery('#wrap').height();
		if(curHeight == slideHeight){
			jQuery('#wrap').animate({
			  height: defHeight
			}, "normal");
			jQuery('#read-more a').html('<i class="icon iconfont icon-shangjiantou"></i>');
			jQuery('#gradient').fadeOut();
		}else{
			jQuery('#wrap').animate({
			 height: slideHeight
			}, "normal");
			jQuery('#read-more a').html('<i class="icon iconfont icon-jiantou-copy"></i>');
			jQuery('#gradient').fadeIn();
		}
		return false;
	});		
}
});


/*����Tab�л�*/
jQuery(document).ready( function(){

var ldgtabs=jQuery(".ldgtabhot a");
if(ldgtabs.length>0)
{
	$(ldgtabs).each(function(){
		jQuery(this).click(function(){
			jQuery(this).addClass("current").siblings().removeClass("current");
			var tabindex=jQuery(this).index();
			jQuery(".tab_box ul").eq(tabindex).show().siblings().hide();
			})
	});
}
});

