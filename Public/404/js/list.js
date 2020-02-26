/**
* 列表页交叉筛选滚动
*/
define(function(require, exports, module) {
	var scrollObj = new Array();
	var scrollTags = {
		opt:{
			hScroll: true, //水平滚动
			vScroll: false, //垂直滚动
			bounce : true,
			momentum: true
		},
		init:function(_id){
			
			if(!$('#'+_id)[0]){
				return;
			}
			if($('.selectList').css('display') != 'none'){
				// 设置宽度
				var width = $('#'+_id+' p').width()+0;
				$('#'+_id+' .con').css({'width':width});
			}
			scrollObj[_id] = this.makeScroll(_id, this.opt);
			$(window).on('resize',function(){
				if($('.selectList').css('display') != 'none'){
					$('#'+_id+' .con').css({'width':$('#'+_id+' p').width()+0});
				}
				scrollObj[_id].refresh();
				resizeImg();
			});

			$('.selectList a.cur').each(function(k, e){
				if(!$('#'+_id+' a.cur')[0]){
					return;
				}

				var screenWidth = $('.header').width();
				var aLeft = $('#'+_id+' a.cur').offset().left;
				var aWidth = $('#'+_id+' a.cur').width();
				var scrollLeft = parseInt(screenWidth - aLeft);
				if(scrollLeft < 30){
					scrollObj[_id].scrollTo(-aLeft + aWidth);
				}
			});
			return scrollObj[_id];
		},
		makeScroll:function(_id, _opt){
			return new iScroll(_id, _opt);
		}
	};
	scrollTags.init('first_list');
	scrollTags.init('second_list');
	scrollTags.init('third_list');
	// 如下三行李总添加
	scrollTags.init('four_list');
	scrollTags.init('five_list');
	scrollTags.init('six_list');
	
		$('.selectBtn').click(function(){
		if($(this).hasClass('cur') && !$(this).parent().hasClass('fixed')){
			$('.selectBtn').removeClass('cur');
			$('.selectList').hide();
		}else{
			$('.selectList').show();
			$('.selectBtn').addClass('cur');
			$('.selectList p').each(function(k, e){
				$(this).parent().css({'width':$(this).width()});
			});
			!scrollObj['first_list'] && scrollTags.init('first_list');
			!scrollObj['second_list'] && scrollTags.init('second_list');
			!scrollObj['third_list'] && scrollTags.init('third_list');
			// 如下三行李总添加
			!scrollObj['third_list'] && scrollTags.init('four_list');
			!scrollObj['third_list'] && scrollTags.init('five_list');
			!scrollObj['third_list'] && scrollTags.init('six_list');
			
			for(var i in scrollObj){
				scrollObj[i].refresh();
			}
		}

		if($(this).parent().hasClass('fixed')){
			scroll(0,0);
		}
	});

	$('.selectList a,.pList a').click(function(){
		if($(this).parent().hasClass('pList')){
			scroll(0,0);
		}else{
			$('#actors').attr({'data-param':''});
		}
		if($(this).attr('data-clear')){
			var clear = $(this).attr('data-clear');
			if(clear == 'all'){
				$('.selectList a').removeClass('cur');
				$('#first_list a').first().addClass('cur');
				$('#second_list a').first().addClass('cur');
			}
			if(clear != 'all'){
				$('#'+clear+' a').removeClass('cur');
				$('#'+clear+' a').first().addClass('cur');
			} 
		}
		$($(this).parent()).children().removeClass('cur');

		$(this).addClass('cur');
		if($(this).parent().hasClass('pList')){
			var indexOf = $(this).index();
			$('.pList a').removeClass('cur');
			$($('.pList a')[indexOf]).addClass('cur');
			$($('.pList a')[indexOf+3]).addClass('cur');
		}

		$('#page_more').parent().hide();
		$('#data_list').hide();
		$('#noneData').hide();
		$('#listLoading').show();
		$('#list-page-ad')[0] && $('#list-page-ad').hide();
	});
});