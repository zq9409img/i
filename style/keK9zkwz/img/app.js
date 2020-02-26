!
function(e) {
	function t(o) {
		if (n[o]) return n[o].exports;
		var s = n[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(s.exports, s, s.exports, t), s.l = !0, s.exports
	}
	var n = {};
	t.m = e, t.c = n, t.d = function(e, n, o) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: o
		})
	}, t.n = function(e) {
		var n = e && e.__esModule ?
		function() {
			return e.
		default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 0)
}({
	0: function(e, t, n) {
		n("sV/x"), e.exports = n("1CH1")
	},
	"1CH1": function(e, t) {},
	"3Hlo": function(e, t) {
		!
		function() {
			function e() {
				var e = $("#mainbody").width(),
					t = $(".p1"),
					n = $(".p2"),
					o = $(".p3"),
					s = $(".p10"),
					i = $(".p11"),
					a = $(".p12"),
					r = $("#pagination-home"),
					c = $("#pagination-end");
				t.show(), n.show(), o.show(), s.show(), i.show(), a.show(), r.hide(), c.hide(), e >= 720 && e < 799 && (o.size() && !a.size() && o.eq(0).hide(), o.size() && a.size() && (o.eq(0).hide(), s.eq(s.size() - 1).hide())), 617 <= e && e < 720 && (t.size() && !o.size() && (s.hide(), s.eq(0).show(), a.hide(), a.eq(a.size() - 1).show()), o.size() && !a.size() && s.size() && (t.hide(), t.eq(0).show(), o.hide(), o.eq(o.size() - 1).show()), o.size() && a.size() && (t.hide(), t.eq(0).show(), o.hide(), o.eq(o.size() - 1).show(), o.eq(o.size() - 2).show(), s.hide(), s.eq(0).show(), s.eq(1).show(), a.hide(), a.eq(a.size() - 1).show()), s.size() || (o.eq(0).hide(), o.eq(1).hide())), e < 617 && ($(".p1, .p2, .p3, .p10, .p11, .p12").hide(), r.show(), c.show())
			}
			$(window).resize(function() {
				e()
			}), $(document).ready(function() {
				e()
			})
		}()
	},
	"9TV/": function(e, t) {
		G.getRandom = function(e) {
			return Math.floor(Math.random() * e + 1)
		}, G.setCookie = function(e, t, n) {
			var o = new Date;
			o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
			var s = "expires=" + o.toUTCString();
			document.cookie = e + "=" + t + ";" + s + ";path=/"
		}, G.getCookie = function(e) {
			for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
				for (var s = n[o];
				" " == s.charAt(0);) s = s.substring(1);
				if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
			}
			return ""
		}, G.setNavBackground = function() {
			var e = $(".lazy").eq(0).data("original");
			if ((void 0 !== e || void 0 !== (e = $(".img-responsive").eq(0).data("smposter"))) && e.length > 0) {
				var t = $(window).width();
				t = 6e3, $("#nav").css({
					"background-image": "linear-gradient(to bottom, rgba(55, 55, 55, 0.65), rgba(55, 55, 55, 0.4)),url(" + e + ")",
					"background-size": t + "px auto, " + t + "px auto",
					"background-repeat": "no-repeat, no-repeat",
					"background-position": "top, center",
					"background-color": "rgba(0,0,0,0.3)"
				})
			}
		}, G.setNavBackground(), G.homeSwitcherListContentReOrganize = function() {
			var e = $(document).width() + 15 >= 992 && $(document).width() + 15 < 1200;
			$(".hots").each(function(t, n) {
				$(n).children("div").children("div").each(function(t, n) {
					t > 5 && t < 8 && (!0 === e ? ($(n).removeClass("list_mov").removeClass("list_mov_home"), $(n).addClass("hot_name"), $(n).children(".list_mov_poster").hide()) : ($(n).removeClass("hot_name"), $(n).addClass("list_mov").addClass("list_mov_home"), $(n).children(".list_mov_poster").show())), t > 10 && t < 15 && (!0 === e ? $(n).hide() : ($(n).show(), $(n).attr("style", null)))
				})
			})
		}, G.homeSwitcherListContentReOrganize(), G.showMessage = function(e, t, n) {
			var o = $("body");
			void 0 === n && (n = 2e3);
			var s = '<div class="alert alert-' + e + '" id="g-msg-el" role="alert" style="text-align: center; position: fixed; top: 100px; z-index: 99999; width: 100%; font-size: 22px; font-weight: 500;">' + t + "</div>";
			o.append(s), setTimeout(function() {
				$("#g-msg-el").fadeOut(2e3, function() {
					$(this).remove()
				})
			}, n)
		}, G.showModalMessage = function() {
			this.el = $("#message-modal"), this.titleEl = this.el.find(".message-modal-title"), this.messageEl = this.el.find(".message-modal-message"), this.title = "", this.message = ""
		}, G.showModalMessage.prototype = {
			show: function() {
				this.titleEl.html(this.title), this.messageEl.html(this.message), this.el.modal("show")
			}
		}, G.loginShowInfo = function(e) {
			var t = $("#loginModal");
			t.find("#loginInfo").show().html(e), t.find("#registerModal").hide()
		}, G.loginModalLoad = function() {
			var e = $("#loginModal");
			e.find("#needLogin").hide(), e.find("#loginInfo").hide(), e.find("#registerModal").show()
		}, G.loginSuccess = function() {
			G.loginShowInfo('<span class="glyphicon glyphicon-ok icon success-icon"></span> <br><span class="success-info">登录成功</span> <br> <br>'), setTimeout(function() {
				$("#loginModal").modal("hide")
			}, 1e3)
		}, G.loginFail = function(e) {
			G.loginShowInfo('<span class="glyphicon glyphicon-remove icon fail-icon"></span> <br><span class="success-info">' + e + '</span> <br><br> <button type="button" class="btn btn-info" onclick="G.loginModalLoad()">返回</button> <br><br>')
		}, G.getCaptcha = function() {
			$.ajax({
				url: "/user/captcha",
				method: "post",
				success: function(e) {
					$("#captcha-image").attr("src", e)
				}
			})
		}, G.shareCopy = function() {
			var e = new Clipboard(".clip");
			e.on("success", function(e) {
				alert("网址复制成功！"), e.clearSelection()
			}), e.on("error", function(e) {
				alert("网址复制失败！")
			})
		}, G.countSearchItemsByCategory = function() {
			var e = [];
			$(".list-group-item").each(function() {
				e[$(this).data("cid")] = e[$(this).data("cid")] || 0, e[$(this).data("cid")] += 1
			}), e.forEach(function(e, t) {
				$("#cid" + t).parent().append("(" + e + ") &nbsp;")
			})
		}, G.clipBoradCopyOriginalURLInit = function() {
			function e(e) {
				setTimeout(function() {
					$(e.trigger).attr("class", "btn btn-sm btn-info copy-original-url-button").html('<span class="glyphicon glyphicon-duplicate"></span> 复制原地址')
				}, 2500)
			}
			var t = new Clipboard(".copy-original-url-button");
			t.on("success", function(t) {
				$(t.trigger).removeClass("btn-info").addClass("btn-success").html('<span class="glyphicon glyphicon-ok"></span> 复制成功'), t.clearSelection(), e(t)
			}), t.on("error", function(t) {
				$(t.trigger).removeClass("btn-info").addClass("btn-danger").html('<span class="glyphicon glyphicon-remove"></span> 复制失败,请手动复制'), e(t)
			})
		}, G.flash = function(e, t, n, o) {
			for (var s = $(e), i = s.offset() - s.width(), a = i.left, r = i.top, c = 1; c <= t; c++) c % 2 == 0 ? s.animate({
				top: "+" + n + "px"
			}, o) : s.animate({
				top: "-" + n + "px"
			}, o);
			s.animate({
				left: 0
			}, o), s.offset({
				top: r,
				left: a
			})
		}
	},
	AD9d: function(e, t) {
		!
		function() {
			function e() {
				var e = 0,
					t = $(".ca-button"),
					n = $(".co-button");
				t.attr("class", "btn btn-sm btn-default btn-primary ca-button").html('<span class="glyphicon glyphicon-copy"></span> 复制选中迅雷链接 (<span class="dl_count">0</span>)'), n.attr("class", "btn btn-sm btn-default btn-info co-button").html('<span class="glyphicon glyphicon-copy"></span> 复制选中原地址 (<span class="dl_count">0</span>)'), $(".dl").each(function() {
					1 == $(this).prop("checked") && e++
				}), $(".dl_count").html(e), 0 === e ? (t.prop("disabled", !0), n.prop("disabled", !0)) : (t.prop("disabled", !1), n.prop("disabled", !1))
			}
			function t() {
				window.G.dls = "", window.G.dlsOriginalUrl = "", $(".dl").each(function() {
					!0 === $(this).prop("checked") && (window.G.dls += $(this).parent().parent().find("a").attr("href").replace(/[\r\n]/g, "") + "\n", window.G.dlsOriginalUrl += $(this).parent().parent().find("a").attr("href_original").replace(/[\r\n]/g, "") + "\n")
				}), window.G.dls = window.G.dls.substring(0, window.G.dls.length - 1), window.G.dlsOriginalUrl = window.G.dlsOriginalUrl.substring(0, window.G.dlsOriginalUrl.length - 1)
			}!0 !== window.G.mobile && $("#files .panel").each(function(e, t) {
				$(t).find("tr").size() > 3 && ($(t).find(".dl-cp").show(), $(t).find(".dl-checkbox-label").show())
			});
			var n = $("body");
			window.G.copyDone = function() {
				$(".ca-button").removeClass("btn-primary").addClass("btn-success").html('<span class="glyphicon glyphicon-ok"></span> 复制成功'), setTimeout(function() {
					$(".dl").prop("checked", !1), $(".check-all").prop("checked", !1), e()
				}, 2500)
			}, window.G.copyDoneOriginal = function() {
				$(".co-button").removeClass("btn-info").addClass("btn-success").html('<span class="glyphicon glyphicon-ok"></span> 复制成功'), setTimeout(function() {
					$(".dl").prop("checked", !1), $(".check-all").prop("checked", !1), e()
				}, 2500)
			}, n.on("click", ".dl", function() {
				var n = function(e) {
						return window.G.vcheck1 = void 0, e.closest(".panel").find(".dl").each(function() {
							!1 === $(this).prop("checked") && (window.G.vcheck1 = !1)
						}), window.G.vcheck1 = void 0 === window.G.vcheck1 || window.G.vcheck1, window.G.vcheck1
					}($(this));
				$(this).closest(".panel").find(".check-all").prop("checked", n), e(), t()
			}), n.on("click", ".check-all", function() {
				$(this).closest(".panel").find(".dl").prop("checked", $(this).prop("checked")), e(), t()
			})
		}()
	},
	"BA+4": function(e, t) {
		!
		function() {
			var e = window.location.host,
				t = /180s\.ai/i;
			t.test(e), window.G.wechat ? t.test(e) && $.ajax({
				method: "post",
				url: "/domains/pick-one",
				success: function(e) {
					var t = function(e, t) {
							var n = t - e + 1;
							return Math.floor(Math.random() * n + e)
						}(0, (e.length > 0 ? e.length : 1) - 1);
					e[t].length > 8 && (location.href = e[t] + window.location.pathname)
				}
			}) : t.test(e)
		}()
	},
	HTRE: function(e, t) {
		$(".readmore").each(function(e, t) {
			var n = $(this).data("readmore-height"),
				o = '<div class="readmore-btn" style="text-align: center; \n                        background: #f2f2f2; top: ' + (n - 30 + ($(this).parent().outerWidth(!0) - $(this).parent().outerWidth())) + "px; height: 30px; \n                        line-height: 30px; position: absolute; width: " + $(this).innerWidth() + 'px; \n                        border-radius: 5px; cursor: pointer;">展开 \n                        <span class="glyphicon glyphicon-chevron-down"></span> \n                        </div>';
			$(this);
			$(this).height() > n && ($(this).height(n), $(this).append(o), $(this).css("overflow", "hidden"))
		}), $(document).on("click", ".readmore-btn", function() {
			$(this).parent().css("height", "auto"), $(this).hide()
		})
	},
	JLO4: function(e, t) {
		String.prototype.repeat || (String.prototype.repeat = function(e) {
			"use strict";
			if (null == this) throw new TypeError("can't convert " + this + " to object");
			var t = "" + this;
			if ((e = +e) != e && (e = 0), e < 0) throw new RangeError("repeat count must be non-negative");
			if (e == 1 / 0) throw new RangeError("repeat count must be less than infinity");
			if (e = Math.floor(e), 0 == t.length || 0 == e) return "";
			if (t.length * e >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
			for (var n = ""; 1 == (1 & e) && (n += t), 0 != (e >>>= 1);) t += t;
			return n
		})
	},
	UGwS: function(e, t) {
		G.validation = function() {
			$("#registerModal").validate({
				errorPlacement: function(e, t) {
					$(t).closest(".form-group").find(".error").append(e)
				},
				rules: {
					email: {
						required: !0,
						email: !0
					},
					password: {
						required: !0,
						minlength: 6
					}
				},
				messages: {
					email: {
						required: "请输入邮箱！",
						email: "请输入一个正确的邮箱！"
					},
					password: {
						required: "请输入密码！",
						minlength: "密码长度不能小于6个字符！"
					}
				},
				submitHandler: function() {
					var e = $("#registerModal"),
						t = $(".error"),
						n = e.find("#email"),
						o = e.find("#password");
					$.post("/user/login", {
						email: n.val(),
						password: o.val()
					}).done(function(e) {
						if ("failed" === e.status) return G.loginFail(e.info.message), !1;
						"success" === e.status && (store.set("user", e.info.data), G.loginSuccess(), user = new G.User(store.get("user")), user.init(), vUser instanceof Vue && (vUser.u = user))
					}).fail(function(e) {
						return 429 === e.status ? (G.loginFail("尝试登陆次数过多，请稍后再试。"), !1) : 500 === e.status ? (G.loginFail("系统出错！"), !1) : (void 0 !== e.responseJSON.email && t.eq(0).html(e.responseJSON.email), void(void 0 !== e.responseJSON.password && t.eq(1).html(e.responseJSON.password)))
					})
				}
			}), $("#register-form").validate({
				rules: {
					email: {
						required: !0,
						email: !0,
						remote: {
							url: "/user/exist",
							type: "post",
							dataType: "json",
							data: {
								email: function() {
									return $("#email").val()
								}
							}
						}
					},
					password: {
						required: !0,
						minlength: 6
					},
					password_confirm: {
						required: !0,
						minlength: 6,
						equalTo: "#password"
					},
					captcha: {
						required: !0,
						rangelength: [4, 4],
						remote: {
							url: "/user/captcha_check",
							type: "post",
							dataType: "json",
							data: {
								captcha: function() {
									return $("#captcha").val()
								}
							}
						}
					}
				},
				messages: {
					email: {
						require: "请输入一个正确的邮箱！",
						email: "请输入一个正确的邮箱！",
						remote: jQuery.validator.format("{0} 已经注册过了！")
					},
					password: {
						required: "请输入密码！",
						minlength: "密码长度不能小于6个字符！"
					},
					password_confirm: {
						required: "请输入密码！",
						minlength: "密码长度不能小于6个字符！",
						equalTo: "两次输入的密码不一致！"
					},
					captcha: {
						required: "请输入验证码！",
						rangelength: "验证码长度不正确！",
						remote: "验证码不正确！"
					}
				},
				submitHandler: function() {
					$.ajax({
						url: "/user/register",
						method: "post",
						data: {
							email: $("#email").val(),
							password: $("#password").val(),
							password_confirm: $("#password_confirm").val(),
							captcha: $("#captcha").val()
						},
						success: function(e) {
							"failed" === e.status ? G.showMessage("warning", e.info.message) : "success" === e.status && (G.showMessage("success", e.info.message), user.update(e.info.data), user.collectMovie(store.get("collectedMovieId"), function() {
								location.href = "/home#/"
							}))
						},
						error: function(e) {
							429 !== e.status ? G.showMessage("danger", "系统错误！请稍后再试。") : G.showMessage("danger", "注册请求次数过多！请稍后再试。")
						}
					})
				}
			}), $("#password-get-back-form").validate({
				rules: {
					email: {
						required: !0,
						email: !0
					}
				},
				messages: {
					email: "请输入一个正确的邮箱！"
				},
				submitHandler: function() {
					$.ajax({
						url: "/user/password_get_back",
						method: "post",
						data: {
							email: $("#email").val()
						},
						success: function(e) {
							"failed" === e.status ? G.showMessage("warning", e.info.message, 3e3) : "success" === e.status && (G.showMessage("success", e.info.message, 3e3), $("#password-get-back-form-area").hide(), $("#password-get-back-success-area").show())
						},
						error: function(e) {
							429 === e.status ? G.showMessage("danger", "尝试测试过多，请稍后再试！", 3e3) : G.showMessage("danger", "系统错误！请稍后再试。", 3e3)
						}
					})
				}
			}), $("#password-reset-form").validate({
				rules: {
					password: {
						required: !0,
						minlength: 6
					},
					password_confirm: {
						required: !0,
						minlength: 6,
						equalTo: "#password"
					}
				},
				messages: {
					password: {
						required: "请输入密码！",
						minlength: "密码长度不能小于6个字符！"
					},
					password_confirm: {
						required: "请输入密码！",
						minlength: "密码长度不能小于6个字符！",
						equalTo: "两次输入的密码不一致！"
					}
				},
				submitHandler: function() {
					$.ajax({
						url: "/user/password_reset",
						method: "post",
						data: {
							password: $("#password").val(),
							password_confirm: $("#password_confirm").val(),
							token: $("#token").val()
						},
						success: function(e) {
							"failed" === e.status ? G.showMessage("warning", e.info.message, 3e3) : "success" === e.status && (G.showMessage("success", e.info.message, 3e3), setTimeout(function() {
								window.location.href = "/home#/"
							}, 1e3))
						},
						error: function(e) {
							429 === e.status ? G.showMessage("danger", "尝试测试过多，请稍后再试！", 3e3) : G.showMessage("danger", "系统错误！请稍后再试。", 3e3)
						}
					})
				}
			}), $("#contact-us-form").validate({
				rules: {
					message: {
						required: !0
					},
					captcha: {
						required: !0,
						rangelength: [4, 4],
						remote: {
							url: "/user/captcha_check/?" + G.getRandom(),
							type: "post",
							dataType: "json",
							data: {
								captcha: function() {
									return $("#captcha").val()
								}
							}
						}
					}
				},
				messages: {
					message: {
						required: "请填写留言！"
					},
					captcha: {
						required: "请输入验证码！",
						rangelength: "验证码长度不正确！",
						remote: "验证码不正确！"
					}
				},
				submitHandler: function() {
					$.ajax({
						url: "/contact-us/?" + G.getRandom(),
						method: "post",
						data: {
							contact_by: $("#contact_by").val(),
							contact_information: $("#contact_information").val(),
							message: $("#message").val(),
							captcha: $("#captcha").val()
						},
						success: function(e) {
							"failed" === e.status ? G.showMessage("warning", e.info.message) : "success" === e.status && (G.showMessage("success", e.info.message), document.getElementById("contact-us-form").reset())
						},
						error: function(e) {
							429 !== e.status ? G.showMessage("danger", "系统错误！请稍后再试。") : G.showMessage("danger", "请求次数过多！请稍后再试。")
						}
					})
				}
			})
		}, G.validation()
	},
	rGS8: function(e, t) {
		G.isUCBrowser = navigator.userAgent.indexOf("UCBrowser") > -1, G.hasADPlugin = !1;
		var n = document.createElement("div");
		n.innerHTML = "&nbsp;", n.className = "adsbox", document.body.appendChild(n), $(document).ready(function() {
			0 === n.offsetHeight ? window.G.hasADPlugin = !0 : $(".adsbox").remove()
		}), G.browserTestNotice = function() {
			var e = "";
			G.hasADPlugin && (e = '<p style="text-align: center;">\n            <span class="glyphicon glyphicon-heart" style="font-size: 50px; color: #F54344"></span>\n        </p>\n        <p>检测到您使用了屏蔽广告功能。请关闭屏蔽广告功能后，再次访问本站资源。小站全靠这点广告为生，请阁下高抬贵手，谢谢支持。</p>\n        <p style="text-align: center;">\n            <button type="button" class="btn btn-success" data-dismiss="modal">关闭</button>\n        </p>'), G.isUCBrowser && (e = '<p style="text-align: center;">\n            <span class="glyphicon glyphicon-heart" style="font-size: 50px; color: #F54344"></span></p>\n        <p>提示：本站不支持UC浏览器，请换其它浏览器访问本站。</p>\n        <p>(下面是当前页面的地址，复制它，粘贴到其他浏览器来打开。)</p>\n        <div style="width: 100%; border-radius: 5px; background: #eee; padding: 3px 5px;" >' + window.location.href + '</div>\n        <br>\n        <p style="text-align: center;">\n           <button type="button" class="btn btn-success" data-dismiss="modal">关闭</button>\n        </p>'), $("#browser_test_notice").find(".modal-body").html(e), $("#browser_test_notice").modal("toggle")
		}, G.disableMovieResourceDlFunctioning = function() {
			var e = "window.G.browserTestNotice()";
			$("#files").find(".dl-res").attr({
				href: "javascript: " + e,
				href_original: "javascript: " + e
			}), $("#files").find(".ca-button, .co-button").attr("onclick", "javascript: " + e), $("#files").find(".copy-original-url-button").attr("onclick", "javascript: " + e).removeAttr("data-clipboard-text")
		}, G.browserTest = function() {
			if (G.isUCBrowser || G.hasADPlugin) return $("body").append('<div class="modal fade" id="browser_test_notice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header" style="border: 0;">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h3 class="modal-title" id="myModalLabel">下载限制提示！</h3>\n      </div>\n      <div class="modal-body" style="text-align: left; font-size: 16px; padding: 20px 30px;">\n        ...\n      </div>\n    </div>\n  </div>\n</div>'), void G.disableMovieResourceDlFunctioning()
		}
	},
	"sV/x": function(e, t, n) {
		window.G = {
			mobile: /(Android|iPhone|iPad|iPod|webOS|iOS)/.test(navigator.userAgent),
			ios: /(iPhone|iPad|iPod|iOS)/.test(navigator.userAgent),
			android: /(Android|Adr)/.test(navigator.userAgent),
			mac: /(Mac OS)/.test(navigator.userAgent),
			pc: /(Window)/.test(navigator.userAgent),
			wechat: /micromessenger/i.test(navigator.userAgent)
		}, n("BA+4"), n("9TV/"), n("zB4G"), n("UGwS"), n("AD9d"), n("3Hlo"), n("rGS8"), n("v6XU"), n("JLO4"), n("HTRE"), function() {
			var e = document.createElement("script"),
				t = window.location.protocol.split(":")[0];
			e.src = "https" === t ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js";
			var n = document.getElementsByTagName("script")[0];
			n.parentNode.insertBefore(e, n)
		}(), function() {
			function e(e) {
				t == e && ($(".switcher .s").removeClass("selected"), $(".hots").hide(), $('.switcher .s[data-category="' + e + '"]').addClass("selected"), $("#hot_" + e).show(), $("img.lazyhot" + e).show().lazyload())
			}
			var t = null;
			if ($(document).on("mouseout", ".switcher .s", function() {
				t = null
			}), $(document).on("mouseover", ".switcher .s", function() {
				t = $(this).data("category"), setTimeout(e, 700, $(this).data("category"))
			}), $(document).on("click", ".switcher .s", function() {
				e($(this).data("category"))
			}), 1 == window.G.wechat) {
				var n = window.G.ios ? "ios" : "android";
				h = '\n            <div style="background: #000;background:rgba(0, 0, 0, 0.84) none repeat scroll 0 0 !important;\n            position: fixed;left: 0;top: 0;width: 100%;height: 100%;padding: 0 50px;box-sizing: border-box;z-index: 10019;">\n                <img src="' + window._staticDomain + "static/" + n + '-wechat-o.png" style="position: absolute; right:20px; width:23%; top: 0px; z-index: 10020;" alt="">\n            </div>\n        ', $("body").append(h), $("#wechat-notice").modal("toggle")
			}
		}(), $('<div class="alert alert-warning alert-dismissible" role="alert" style="margin-bottom: 0; text-align: center; padding: 5px;">\n请牢记88影视最新网址：<strong>www.4xx55.com</strong> &nbsp;&nbsp;&nbsp;&nbsp;\n</div>').insertBefore("#nav")
	},
	v6XU: function(e, t) {
		window.G.movieCommentsRendered = !1, window.G.showMovieCommentsArea = function() {
			$("#comments").append('\n    <h3>人气短评</h3>\n    <ul class="comments">\n      <div class="pswp__preloader__icn">\n        <div class="pswp__preloader__cut">\n          <div class="pswp__preloader__donut">\n          </div>\n        </div>\n      </div>\n    </ul>\n    ')
		}, window.G.renderMovieComments = function(e) {
			var t = $("#comments .comments"),
				n = "",
				o = "";
			$.each(e, function(e, t) {
				o = function(e) {
					return '<span class="glyphicon glyphicon-star score"></span>'.repeat(e) + '<span class="glyphicon glyphicon-star-empty score"></span>'.repeat(5 - e)
				}(t.score), n += e > 4 ? '\n                <li class="comment-hide">\n                    <p>\n                        <span class="user-name">' + t.user_name + "</span> \n                        " + o + "\n                        <br>\n                        " + t.content + "\n                    </p>\n                </li>\n            " : '\n                <li>\n                    <p>\n                        <span class="user-name">' + t.user_name + "</span> \n                        " + o + "\n                        <br>\n                        " + t.content + "\n                    </p>\n                </li>\n            ", 4 == e && (n += '\n            <li class="show-more" id="more-comments">\n                加载更多\n            </li>\n            ')
			}), t.html(n)
		}, window.G.loadMovieComments = function(e) {
			window.G.showMovieCommentsArea(), $.ajax({
				method: "get",
				url: "/movie/" + e + "/comments",
				success: function(e) {
					window.G.renderMovieComments(e)
				},
				error: function() {
					console.log("影片短评请求失败。")
				}
			})
		}
	},
	zB4G: function(e, t) {
		!
		function() {
			var e = $("body");
			$(window).resize(function() {
				G.setNavBackground(), G.homeSwitcherListContentReOrganize()
			}), e.on("click", ".nav-search-button", function() {
				G.ios && e.scrollTop("#nav"), $(".navbar-toggle").trigger("click"), $("#search_input").focus()
			}), e.on("click", ".report-button", function(e) {
				var t = $(".report");
				t.data("movie-id", $(this).data("movie-id")), t.data("item-id", $(this).data("item-id"))
			}), e.on("click", ".report", function() {
				var e = $(this).data("movie-id") + "." + $(this).data("item-id") + "." + $(this).data("pro"),
					t = G.getCookie("reported");
				if ("" !== t) {
					if (-1 !== t.indexOf(e)) return $(".report-message").html("已经提交过了，谢谢。"), void setTimeout(function() {
						$('.btn[data-dismiss="modal"]').trigger("click"), $(".report-message").html("")
					}, 1500)
				}
				$.ajax({
					url: "/report/" + G.getRandom(99999999),
					data: {
						movieId: $(this).data("movie-id"),
						itemId: $(this).data("item-id"),
						pro: $(this).data("pro"),
						token: reportToken
					},
					method: "get",
					statusCode: {
						400: function() {
							alert("错误请求。")
						},
						200: function(n) {
							1 === n.code ? ($(".report-message").html("提交成功，谢谢反馈。"), G.setCookie("reported", t + "|" + e, 60)) : 2 === n.code && $(".report-message").html("已经提交过了，谢谢。")
						},
						500: function() {
							alert("请求失败。")
						}
					}
				}).done(function() {
					setTimeout(function() {
						$('.btn[data-dismiss="modal"]').trigger("click"), $(".report-message").html("")
					}, 1500)
				})
			}), e.on("click", ".to-quality", function() {
				$("html,body").animate({
					scrollTop: $(".panel-quality-" + $(this).data("quality")).offset().top - 100
				}, 500), window.G.flash($(".panel-quality-" + $(this).data("quality")), 4, 2, 50)
			}), e.on("click", ".more-res", function() {
				$(this).parent().parent().parent().children("tr").removeClass("res-hide"), $(this).parent().hide()
			}), e.on("click", ".collect-button", function() {
				var e = $("h1").eq(0).data("movie-id");
				store.set("collectedMovieId", e), user.collectMovie(e)
			}), e.on("click", ".mcid", function() {
				var e = $(this).val();
				0 == e ? $(".list-group-item").show() : $(".list-group-item").each(function(t) {
					$(this).data("cid") == e ? $(this).show() : $(this).hide()
				})
			}), !0 === G.mobile ? (e.on("click", "#wechat-icon", function() {
				e.append('<div id="wechat-share-cover"><h3>请使用浏览器的<br>分享功能分享到微信</h3><div class="img"><img src="' + window._staticDomain + 'static/wechat-share.jpg" width="100%" alt=""></div><span class="got-it">知道了</span></div>')
			}), e.on("touchend", "#wechat-share-cover", function(e) {
				return $("#wechat-share-cover").remove(), !1
			})) : ($("#wechat-icon").hide(), $("#copy-icon").hide()), e.on("click", ".get-xunlei", function() {
				var e = "";
				1 == window.G.ios ? e = "http://ithunder-ota.a.88cdn.com/download-guide/index.html" : 1 == window.G.android ? e = "https://mobile.xunlei.com/" : 1 == window.G.pc ? e = "http://xl9.xunlei.com/" : 1 == window.G.mac && (e = "http://mac.xunlei.com/"), "" == e ? alert("没有找到对应当前设备的迅雷软件。") : window.open(e)
			})
		}()
	}
});