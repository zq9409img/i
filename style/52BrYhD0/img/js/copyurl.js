		'copylink': function(){
			if(copyshort==1){
				if($(".copylink").length){
					$.ajax({ 
						type : 'GET',  
				        url : 'https://api.weibo.com/2/short_url/shorten.json?source=2849184197&url_long='+encodeURIComponent(stui.browser.url),
				        dataType : 'JSONP',   
				        success : function(r) {
				        	url_short = r.data.urls[0].url_short;	
				        	var clipboard = new Clipboard('.copylink', {
								text: function() {									
									return url_short;
								}
							});
							clipboard.on('success', function(e) {
								alert("地址复制成功，赶快分享给小伙伴吧！");
							});
			        	} 		        	
				    });
				}
			} else {
				if($(".copylink").length){
					var url_short = stui.browser.url;	
					var clipboard = new Clipboard('.copylink', {
						text: function() {									
							return url_short;
						}
					});
					clipboard.on('success', function(e) {
						alert("地址复制成功，赶快分享给小伙伴吧！");
					});
				}
			}
		}
		