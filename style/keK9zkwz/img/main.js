/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!
function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = [],
		d = a.document,
		e = c.slice,
		f = c.concat,
		g = c.push,
		h = c.indexOf,
		i = {},
		j = i.toString,
		k = i.hasOwnProperty,
		l = {},
		m = "1.12.4",
		n = function(a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s﻿ ]+|[\s﻿ ]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function(a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function() {
			return e.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
		},
		pushStack: function(a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a) {
			return n.each(this, a)
		},
		map: function(a) {
			return this.pushStack(n.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(e.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: g,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray ||
		function(a) {
			return "array" === n.type(a)
		},
		isWindow: function(a) {
			return null != a && a == a.window
		},
		isNumeric: function(a) {
			var b = a && a.toString();
			return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		isPlainObject: function(a) {
			var b;
			if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
			try {
				if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			if (!l.ownFirst) for (b in a) return k.call(a, b);
			for (b in a);
			return void 0 === b || k.call(a, b)
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
		},
		globalEval: function(b) {
			b && n.trim(b) && (a.execScript ||
			function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b) {
			var c, d = 0;
			if (s(a)) {
				for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break
			} else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (h) return h.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function(a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) a[e++] = b[d++];
			if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, c) {
			var d, e, g = 0,
				h = [];
			if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
			else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
			return f.apply([], h)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, d, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
				return a.apply(b || this, c.concat(e.call(arguments)))
			}, d.guid = a.guid = a.guid || n.guid++, d) : void 0
		},
		now: function() {
			return +new Date
		},
		support: l
	}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
		i["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = !! a && "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
				v = a.document,
				w = 0,
				x = 0,
				y = ga(),
				z = ga(),
				A = ga(),
				B = function(a, b) {
					return a === b && (l = !0), 0
				},
				C = 1 << 31,
				D = {}.hasOwnProperty,
				E = [],
				F = E.pop,
				G = E.push,
				H = E.push,
				I = E.slice,
				J = function(a, b) {
					for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
					return -1
				},
				K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				L = "[\ \\t\\r\\n\\f]",
				M = "(?:\\\\.|[\\w-]|[^\-\ ])+",
				N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
				O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
				P = new RegExp(L + "+", "g"),
				Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
				R = new RegExp("^" + L + "*," + L + "*"),
				S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
				T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
				U = new RegExp(O),
				V = new RegExp("^" + M + "$"),
				W = {
					ID: new RegExp("^#(" + M + ")"),
					CLASS: new RegExp("^\\.(" + M + ")"),
					TAG: new RegExp("^(" + M + "|[*])"),
					ATTR: new RegExp("^" + N),
					PSEUDO: new RegExp("^" + O),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + K + ")$", "i"),
					needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
				},
				X = /^(?:input|select|textarea|button)$/i,
				Y = /^h\d$/i,
				Z = /^[^{]+\{\s*\[native \w/,
				$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				_ = /[+~]/,
				aa = /'|\\/g,
				ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
				ca = function(a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				},
				da = function() {
					m()
				};
			try {
				H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
			} catch (ea) {
				H = {
					apply: E.length ?
					function(a, b) {
						G.apply(a, I.call(b))
					} : function(a, b) {
						var c = a.length,
							d = 0;
						while (a[c++] = b[d++]);
						a.length = c - 1
					}
				}
			}
			function fa(a, b, d, e) {
				var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
					x = b ? b.nodeType : 9;
				if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
				if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
					if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
						if (9 === x) {
							if (!(j = b.getElementById(f))) return d;
							if (j.id === f) return d.push(j), d
						} else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
					} else {
						if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
					}
					if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
						if (1 !== x) w = b, s = a;
						else if ("object" !== b.nodeName.toLowerCase()) {
							(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
							while (h--) r[h] = l + " " + qa(r[h]);
							s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
						}
						if (s) try {
							return H.apply(d, w.querySelectorAll(s)), d
						} catch (y) {} finally {
							k === u && b.removeAttribute("id")
						}
					}
				}
				return i(a.replace(Q, "$1"), b, d, e)
			}
			function ga() {
				var a = [];

				function b(c, e) {
					return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
				}
				return b
			}
			function ha(a) {
				return a[u] = !0, a
			}
			function ia(a) {
				var b = n.createElement("div");
				try {
					return !!a(b)
				} catch (c) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}
			function ja(a, b) {
				var c = a.split("|"),
					e = c.length;
				while (e--) d.attrHandle[c[e]] = b
			}
			function ka(a, b) {
				var c = b && a,
					d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
				if (d) return d;
				if (c) while (c = c.nextSibling) if (c === b) return -1;
				return a ? 1 : -1
			}
			function la(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}
			function ma(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}
			function na(a) {
				return ha(function(b) {
					return b = +b, ha(function(c, d) {
						var e, f = a([], c.length, b),
							g = f.length;
						while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}
			function oa(a) {
				return a && "undefined" != typeof a.getElementsByTagName && a
			}
			c = fa.support = {}, f = fa.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1
			}, m = fa.setDocument = function(a) {
				var b, e, g = a ? a.ownerDocument || a : v;
				return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), c.getElementsByTagName = ia(function(a) {
					return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
				}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
					return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
				}), c.getById ? (d.find.ID = function(a, b) {
					if ("undefined" != typeof b.getElementById && p) {
						var c = b.getElementById(a);
						return c ? [c] : []
					}
				}, d.filter.ID = function(a) {
					var b = a.replace(ba, ca);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (delete d.find.ID, d.filter.ID = function(a) {
					var b = a.replace(ba, ca);
					return function(a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), d.find.TAG = c.getElementsByTagName ?
				function(a, b) {
					return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
				} : function(a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						while (c = f[e++]) 1 === c.nodeType && d.push(c);
						return d
					}
					return f
				}, d.find.CLASS = c.getElementsByClassName &&
				function(a, b) {
					return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
				}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
					o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
				}), ia(function(a) {
					var b = n.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
				})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
					c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
				}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ?
				function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b) while (b = b.parentNode) if (b === a) return !0;
					return !1
				}, B = b ?
				function(a, b) {
					if (a === b) return l = !0, 0;
					var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
				} : function(a, b) {
					if (a === b) return l = !0, 0;
					var c, d = 0,
						e = a.parentNode,
						f = b.parentNode,
						g = [a],
						h = [b];
					if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
					if (e === f) return ka(a, b);
					c = a;
					while (c = c.parentNode) g.unshift(c);
					c = b;
					while (c = c.parentNode) h.unshift(c);
					while (g[d] === h[d]) d++;
					return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
				}, n) : n
			}, fa.matches = function(a, b) {
				return fa(a, null, null, b)
			}, fa.matchesSelector = function(a, b) {
				if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
					var d = s.call(a, b);
					if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
				} catch (e) {}
				return fa(b, n, null, [a]).length > 0
			}, fa.contains = function(a, b) {
				return (a.ownerDocument || a) !== n && m(a), t(a, b)
			}, fa.attr = function(a, b) {
				(a.ownerDocument || a) !== n && m(a);
				var e = d.attrHandle[b.toLowerCase()],
					f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
				return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
			}, fa.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, fa.uniqueSort = function(a) {
				var b, d = [],
					e = 0,
					f = 0;
				if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
					while (b = a[f++]) b === a[f] && (e = d.push(f));
					while (e--) a.splice(d[e], 1)
				}
				return k = null, a
			}, e = fa.getText = function(a) {
				var b, c = "",
					d = 0,
					f = a.nodeType;
				if (f) {
					if (1 === f || 9 === f || 11 === f) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
					} else if (3 === f || 4 === f) return a.nodeValue
				} else while (b = a[d++]) c += e(b);
				return c
			}, d = fa.selectors = {
				cacheLength: 50,
				createPseudo: ha,
				match: W,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c = !a[6] && a[2];
						return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function(a) {
						var b = a.replace(ba, ca).toLowerCase();
						return "*" === a ?
						function() {
							return !0
						} : function(a) {
							return a.nodeName && a.nodeName.toLowerCase() === b
						}
					},
					CLASS: function(a) {
						var b = y[a + " "];
						return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
							return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, b, c) {
						return function(d) {
							var e = fa.attr(d, a);
							return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ?
						function(a) {
							return !!a.parentNode
						} : function(b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h,
								t = !1;
							if (q) {
								if (f) {
									while (p) {
										m = b;
										while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
									while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
								} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
								return t -= e, t === d || t % d === 0 && t / d >= 0
							}
						}
					},
					PSEUDO: function(a, b) {
						var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
						return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
							var d, f = e(a, b),
								g = f.length;
							while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
						}) : function(a) {
							return e(a, 0, c)
						}) : e
					}
				},
				pseudos: {
					not: ha(function(a) {
						var b = [],
							c = [],
							d = h(a.replace(Q, "$1"));
						return d[u] ? ha(function(a, b, c, e) {
							var f, g = d(a, null, e, []),
								h = a.length;
							while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
						}
					}),
					has: ha(function(a) {
						return function(b) {
							return fa(a, b).length > 0
						}
					}),
					contains: ha(function(a) {
						return a = a.replace(ba, ca), function(b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
					}),
					lang: ha(function(a) {
						return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function(b) {
							var c;
							do
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
					}),
					target: function(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function(a) {
						return a === o
					},
					focus: function(a) {
						return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !! a.checked || "option" === b && !! a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
						return !0
					},
					parent: function(a) {
						return !d.pseudos.empty(a)
					},
					header: function(a) {
						return Y.test(a.nodeName)
					},
					input: function(a) {
						return X.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
					},
					first: na(function() {
						return [0]
					}),
					last: na(function(a, b) {
						return [b - 1]
					}),
					eq: na(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: na(function(a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: na(function(a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a
					}),
					lt: na(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: na(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, d.pseudos.nth = d.pseudos.eq;
			for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = la(b);
			for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = ma(b);

			function pa() {}
			pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
				var c, e, f, g, h, i, j, k = z[a + " "];
				if (k) return b ? 0 : k.slice(0);
				h = a, i = [], j = d.preFilter;
				while (h) {
					c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
						value: c,
						type: e[0].replace(Q, " ")
					}), h = h.slice(c.length));
					for (g in d.filter)!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
						value: c,
						type: g,
						matches: e
					}), h = h.slice(c.length));
					if (!c) break
				}
				return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
			};

			function qa(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}
			function ra(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = x++;
				return b.first ?
				function(b, c, f) {
					while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
				} : function(b, c, g) {
					var h, i, j, k = [w, f];
					if (g) {
						while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else while (b = b[d]) if (1 === b.nodeType || e) {
						if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
						if (i[d] = k, k[2] = a(b, c, g)) return !0
					}
				}
			}
			function sa(a) {
				return a.length > 1 ?
				function(b, c, d) {
					var e = a.length;
					while (e--) if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}
			function ta(a, b, c) {
				for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
				return c
			}
			function ua(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
				return g
			}
			function va(a, b, c, d, e, f) {
				return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						p = f || ta(b || "*", h.nodeType ? [h] : h, []),
						q = !a || !f && b ? p : ua(p, m, a, h, i),
						r = c ? e || (f ? a : o || d) ? [] : g : q;
					if (c && c(q, r, h, i), d) {
						j = ua(r, n), d(j, [], h, i), k = j.length;
						while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
					}
					if (f) {
						if (e || a) {
							if (e) {
								j = [], k = r.length;
								while (k--)(l = r[k]) && j.push(q[k] = l);
								e(null, r = [], j, i)
							}
							k = r.length;
							while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
						}
					} else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
				})
			}
			function wa(a) {
				for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
					return a === b
				}, h, !0), l = ra(function(a) {
					return J(b, a) > -1
				}, h, !0), m = [function(a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
						return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
					}
					m.push(c)
				}
				return sa(m)
			}
			function xa(a, b) {
				var c = b.length > 0,
					e = a.length > 0,
					f = function(f, g, h, i, k) {
						var l, o, q, r = 0,
							s = "0",
							t = f && [],
							u = [],
							v = j,
							x = f || e && d.find.TAG("*", k),
							y = w += null == v ? 1 : Math.random() || .1,
							z = x.length;
						for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
							if (e && l) {
								o = 0, g || l.ownerDocument === n || (m(l), h = !p);
								while (q = a[o++]) if (q(l, g || n, h)) {
									i.push(l);
									break
								}
								k && (w = y)
							}
							c && ((l = !q && l) && r--, f && t.push(l))
						}
						if (r += s, c && s !== r) {
							o = 0;
							while (q = b[o++]) q(t, u, g, h);
							if (f) {
								if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
								u = ua(u)
							}
							H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
						}
						return k && (w = y, j = v), t
					};
				return c ? ha(f) : f
			}
			return h = fa.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = A[a + " "];
				if (!f) {
					b || (b = g(a)), c = b.length;
					while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
					f = A(a, xa(e, d)), f.selector = a
				}
				return f
			}, i = fa.select = function(a, b, e, f) {
				var i, j, k, l, m, n = "function" == typeof a && a,
					o = !f && g(a = n.selector || a);
				if (e = e || [], 1 === o.length) {
					if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
						if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
						n && (b = b.parentNode), a = a.slice(j.shift().value.length)
					}
					i = W.needsContext.test(a) ? 0 : j.length;
					while (i--) {
						if (k = j[i], d.relative[l = k.type]) break;
						if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
							if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
							break
						}
					}
				}
				return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
			}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !! l, m(), c.sortDetached = ia(function(a) {
				return 1 & a.compareDocumentPosition(n.createElement("div"))
			}), ia(function(a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || ja("type|href|height|width", function(a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), c.attributes && ia(function(a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || ja("value", function(a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), ia(function(a) {
				return null == a.getAttribute("disabled")
			}) || ja(K, function(a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}), fa
		}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
				if (e && n(a).is(c)) break;
				d.push(a)
			}
			return d
		},
		v = function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		},
		w = n.expr.match.needsContext,
		x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		y = /^.[^:#\[\.,]*$/;

	function z(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (y.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function(a) {
			return n.inArray(a, b) > -1 !== c
		})
	}
	n.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function(a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
				for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) n.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		filter: function(a) {
			return this.pushStack(z(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(z(this, a || [], !0))
		},
		is: function(a) {
			return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
		}
	});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = n.fn.init = function(a, b, c) {
			var e, f;
			if (!a) return this;
			if (c = c || A, "string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
				if (e[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
					return this
				}
				if (f = d.getElementById(e[2]), f && f.parentNode) {
					if (f.id !== e[2]) return A.find(a);
					this.length = 1, this[0] = f
				}
				return this.context = d, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	C.prototype = n.fn, A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/,
		E = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.fn.extend({
		has: function(a) {
			var b, c = n(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function F(a, b) {
		do a = a[b];
		while (a && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return u(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return u(a, "parentNode", c)
		},
		next: function(a) {
			return F(a, "nextSibling")
		},
		prev: function(a) {
			return F(a, "previousSibling")
		},
		nextAll: function(a) {
			return u(a, "nextSibling")
		},
		prevAll: function(a) {
			return u(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return u(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return u(a, "previousSibling", c)
		},
		siblings: function(a) {
			return v((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return v(a.firstChild)
		},
		contents: function(a) {
			return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
		}
	}, function(a, b) {
		n.fn[a] = function(c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var G = /\S+/g;

	function H(a) {
		var b = {};
		return n.each(a.match(G) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function(a) {
		a = "string" == typeof a ? H(a) : n.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function() {
				for (e = a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function() {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						n.each(b, function(b, c) {
							n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function() {
					return n.each(arguments, function(a, b) {
						var c;
						while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
					}), this
				},
				has: function(a) {
					return a ? n.inArray(a, f) > -1 : f.length > 0
				},
				empty: function() {
					return f && (f = []), this
				},
				disable: function() {
					return e = g = [], f = c = "", this
				},
				disabled: function() {
					return !f
				},
				lock: function() {
					return e = !0, c || j.disable(), this
				},
				locked: function() {
					return !!e
				},
				fireWith: function(a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function() {
					return j.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return j
	}, n.extend({
		Deferred: function(a) {
			var b = [
				["resolve", "done", n.Callbacks("once memory"), "resolved"],
				["reject", "fail", n.Callbacks("once memory"), "rejected"],
				["notify", "progress", n.Callbacks("memory")]
			],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return n.Deferred(function(c) {
							n.each(b, function(b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = e.call(arguments),
				d = c.length,
				f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function(a, b, c) {
					return function(d) {
						b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var I;
	n.fn.ready = function(a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
		}
	});

	function J() {
		d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
	}
	function K() {
		(d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
	}
	n.ready.promise = function(b) {
		if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
		else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
		else {
			d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
			var c = !1;
			try {
				c = null == a.frameElement && d.documentElement
			} catch (e) {}
			c && c.doScroll && !
			function f() {
				if (!n.isReady) {
					try {
						c.doScroll("left")
					} catch (b) {
						return a.setTimeout(f, 50)
					}
					J(), n.ready()
				}
			}()
		}
		return I.promise(b)
	}, n.ready.promise();
	var L;
	for (L in n(l)) break;
	l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
		var a, b, c, e;
		c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
	}), function() {
		var a = d.createElement("div");
		l.deleteExpando = !0;
		try {
			delete a.test
		} catch (b) {
			l.deleteExpando = !1
		}
		a = null
	}();
	var M = function(a) {
			var b = n.noData[(a.nodeName + " ").toLowerCase()],
				c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
		},
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(O, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch (e) {}
				n.data(a, b, c)
			} else c = void 0;
		}
		return c
	}
	function Q(a) {
		var b;
		for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}
	function R(a, b, d, e) {
		if (M(a)) {
			var f, g, h = n.expando,
				i = a.nodeType,
				j = i ? n.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
				toJSON: n.noop
			}), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
		}
	}
	function S(a, b, c) {
		if (M(a)) {
			var d, e, f = a.nodeType,
				g = f ? n.cache : a,
				h = f ? a[n.expando] : n.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) delete d[b[e]];
					if (c ? !Q(d) : !n.isEmptyObject(d)) return
				}(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
			}
		}
	}
	n.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(a) {
			return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !! a && !Q(a)
		},
		data: function(a, b, c) {
			return R(a, b, c)
		},
		removeData: function(a, b) {
			return S(a, b)
		},
		_data: function(a, b, c) {
			return R(a, b, c, !0)
		},
		_removeData: function(a, b) {
			return S(a, b, !0)
		}
	}), n.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					n._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				n.data(this, a)
			}) : arguments.length > 1 ? this.each(function() {
				n.data(this, a, b)
			}) : f ? P(f, a, n.data(f, a)) : void 0
		},
		removeData: function(a) {
			return this.each(function() {
				n.removeData(this, a)
			})
		}
	}), n.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function() {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return n._data(a, c) || n._data(a, c, {
				empty: n.Callbacks("once memory").add(function() {
					n._removeData(a, b + "queue"), n._removeData(a, c)
				})
			})
		}
	}), n.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				n.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	}), function() {
		var a;
		l.shrinkWrapBlocks = function() {
			if (null != a) return a;
			a = !1;
			var b, c, e;
			return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
		}
	}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
		V = ["Top", "Right", "Bottom", "Left"],
		W = function(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		};

	function X(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ?
		function() {
			return d.cur()
		} : function() {
			return n.css(a, b, "")
		}, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
		if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do f = f || ".5", k /= f, n.style(a, b, k + j);
			while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}
	var Y = function(a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) Y(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(n(a), c)
			})), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		Z = /^(?:checkbox|radio)$/i,
		$ = /<([\w:-]+)/,
		_ = /^$|\/(?:java|ecma)script/i,
		aa = /^\s+/,
		ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function ca(a) {
		var b = ba.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement) while (b.length) c.createElement(b.pop());
		return c
	}!
	function() {
		var a = d.createElement("div"),
			b = d.createDocumentFragment(),
			c = d.createElement("input");
		a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !! a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !! a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !! a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
	}();
	var da = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

	function ea(a, b) {
		var c, d, e = 0,
			f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
		if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
	}
	function fa(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
	}
	var ga = /<|&#?\w+;/,
		ha = /<tbody/i;

	function ia(a) {
		Z.test(a.type) && (a.defaultChecked = a.checked)
	}
	function ja(a, b, c, d, e) {
		for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
		else if (ga.test(g)) {
			i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
			while (f--) i = i.lastChild;
			if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
				g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
				while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
			}
			n.merge(q, i.childNodes), i.textContent = "";
			while (i.firstChild) i.removeChild(i.firstChild);
			i = p.lastChild
		} else q.push(b.createTextNode(g));
		i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
		while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g);
		else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
			f = 0;
			while (g = i[f++]) _.test(g.type || "") && c.push(g)
		}
		return i = null, p
	}!
	function() {
		var b, c, e = d.createElement("div");
		for (b in {
			submit: !0,
			change: !0,
			focusin: !0
		}) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
		e = null
	}();
	var ka = /^(?:input|select|textarea)$/i,
		la = /^key/,
		ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		na = /^(?:focusinfocus|focusoutblur)$/,
		oa = /^([^.]*)(?:\.(.+)|)/;

	function pa() {
		return !0
	}
	function qa() {
		return !1
	}
	function ra() {
		try {
			return d.activeElement
		} catch (a) {}
	}
	function sa(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (h in b) sa(a, h, c, d, b[h], f);
			return a
		}
		if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
		else if (!e) return a;
		return 1 === f && (g = e, e = function(a) {
			return n().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
			n.event.add(this, b, e, d, c)
		})
	}
	n.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
					return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
				while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(G) || [""], j = b.length;
				while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
					l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
					while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
					i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
				} else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
			}
		},
		trigger: function(b, c, e, f) {
			var g, h, i, j, l, m, o, p = [e || d],
				q = k.call(b, "type") ? b.type : b,
				r = k.call(b, "namespace") ? b.namespace.split(".") : [];
			if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
				if (!f && !l.noBubble && !n.isWindow(e)) {
					for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
					m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
				}
				o = 0;
				while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
				if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
					m = e[h], m && (e[h] = null), n.event.triggered = q;
					try {
						e[q]()
					} catch (s) {}
					n.event.triggered = void 0, m && (e[h] = m)
				}
				return b.result
			}
		},
		dispatch: function(a) {
			a = n.event.fix(a);
			var b, c, d, f, g, h = [],
				i = e.call(arguments),
				j = (n._data(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
				for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
				d.length && g.push({
					elem: i,
					handlers: d
				})
			}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function(a) {
			if (a[n.expando]) return a;
			var b, c, e, f = a.type,
				g = a,
				h = this.fixHooks[f];
			h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
			while (b--) c = e[b], a[c] = g[c];
			return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, h.filter ? h.filter(a, g) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, e, f, g = b.button,
					h = b.fromElement;
				return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== ra() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === ra() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c) {
			var d = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0
			});
			n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = d.removeEventListener ?
	function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	} : function(a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, n.Event = function(a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		constructor: n.Event,
		isDefaultPrevented: qa,
		isPropagationStopped: qa,
		isImmediatePropagationStopped: qa,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), l.submit || (n.event.special.submit = {
		setup: function() {
			return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
				var b = a.target,
					c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
				c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
					a._submitBubble = !0
				}), n._data(c, "submit", !0))
			})
		},
		postDispatch: function(a) {
			a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
		},
		teardown: function() {
			return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
		}
	}), l.change || (n.event.special.change = {
		setup: function() {
			return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
				"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
			}), n.event.add(this, "click._change", function(a) {
				this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
			})), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
					!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
				}), n._data(b, "change", !0))
			})
		},
		handle: function(a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return n.event.remove(this, "._change"), !ka.test(this.nodeName)
		}
	}), l.focusin || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
				n.event.simulate(b, a.target, n.event.fix(a))
			};
		n.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = n._data(d, b);
				e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = n._data(d, b) - 1;
				e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
			}
		}
	}), n.fn.extend({
		on: function(a, b, c, d) {
			return sa(this, a, b, c, d)
		},
		one: function(a, b, c, d) {
			return sa(this, a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var ta = / jQuery\d+="(?:null|\d+)"/g,
		ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
		va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		wa = /<script|<style|<link/i,
		xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ya = /^true\/(.*)/,
		za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Aa = ca(d),
		Ba = Aa.appendChild(d.createElement("div"));

	function Ca(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function Da(a) {
		return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
	}
	function Ea(a) {
		var b = ya.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}
	function Fa(a, b) {
		if (1 === b.nodeType && n.hasData(a)) {
			var c, d, e, f = n._data(a),
				g = n._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
			}
			g.data && (g.data = n.extend({}, g.data))
		}
	}
	function Ga(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
				e = n._data(b);
				for (d in e.events) n.removeEvent(b, d, e.handle);
				b.removeAttribute(n.expando)
			}
			"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
		}
	}
	function Ha(a, b, c, d) {
		b = f.apply([], b);
		var e, g, h, i, j, k, m = 0,
			o = a.length,
			p = o - 1,
			q = b[0],
			r = n.isFunction(q);
		if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
			var f = a.eq(e);
			r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
		});
		if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
			for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
			if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
			k = e = null
		}
		return a
	}
	function Ia(a, b, c) {
		for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
		return a
	}
	n.extend({
		htmlPrefilter: function(a) {
			return a.replace(va, "<$1></$2>")
		},
		clone: function(a, b, c) {
			var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
			if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
			if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
			else Fa(a, f);
			return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
		},
		cleanData: function(a, b) {
			for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
				if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
				j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
			}
		}
	}), n.fn.extend({
		domManip: Ha,
		detach: function(a) {
			return Ia(this, a, !0)
		},
		remove: function(a) {
			return Ia(this, a)
		},
		text: function(a) {
			return Y(this, function(a) {
				return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function() {
			return Ha(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return Ha(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return Ha(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return Ha(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && n.cleanData(ea(a, !1));
				while (a.firstChild) a.removeChild(a.firstChild);
				a.options && n.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return n.clone(this, a, b)
			})
		},
		html: function(a) {
			return Y(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
				if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = n.htmlPrefilter(a);
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = [];
			return Ha(this, arguments, function(b) {
				var c = this.parentNode;
				n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		n.fn[a] = function(a) {
			for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Ja, Ka = {
		HTML: "block",
		BODY: "block"
	};

	function La(a, b) {
		var c = n(b.createElement(a)).appendTo(b.body),
			d = n.css(c[0], "display");
		return c.detach(), d
	}
	function Ma(a) {
		var b = d,
			c = Ka[a];
		return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
	}
	var Na = /^margin/,
		Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
		Pa = function(a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		},
		Qa = d.documentElement;
	!
	function() {
		var b, c, e, f, g, h, i = d.createElement("div"),
			j = d.createElement("div");
		if (j.style) {
			j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !! j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
				reliableHiddenOffsets: function() {
					return null == b && k(), f
				},
				boxSizingReliable: function() {
					return null == b && k(), e
				},
				pixelMarginRight: function() {
					return null == b && k(), c
				},
				pixelPosition: function() {
					return null == b && k(), b
				},
				reliableMarginRight: function() {
					return null == b && k(), g
				},
				reliableMarginLeft: function() {
					return null == b && k(), h
				}
			});

			function k() {
				var k, l, m = d.documentElement;
				m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
					width: "4px"
				}).width, j.style.marginRight = "50%", c = "4px" === (l || {
					marginRight: "4px"
				}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
			}
		}
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function(b) {
		var c = b.ownerDocument.defaultView;
		return c && c.opener || (c = a), c.getComputedStyle(b)
	}, Sa = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
	}) : Qa.currentStyle && (Ra = function(a) {
		return a.currentStyle
	}, Sa = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});

	function Ua(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Va = /alpha\([^)]*\)/i,
		Wa = /opacity\s*=\s*([^)]*)/i,
		Xa = /^(none|table(?!-c[ea]).+)/,
		Ya = new RegExp("^(" + T + ")(.*)$", "i"),
		Za = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		$a = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		_a = ["Webkit", "O", "Moz", "ms"],
		ab = d.createElement("div").style;

	function bb(a) {
		if (a in ab) return a;
		var b = a.charAt(0).toUpperCase() + a.slice(1),
			c = _a.length;
		while (c--) if (a = _a[c] + b, a in ab) return a
	}
	function cb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	function db(a, b, c) {
		var d = Ya.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function eb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
		return g
	}
	function fb(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ra(a),
			g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
			d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = Sa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
					i[b] = c
				} catch (j) {}
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
		}
	}), n.each(["height", "width"], function(a, b) {
		n.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
					return fb(a, b, d)
				}) : fb(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && Ra(a);
				return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), l.opacity || (n.cssHooks.opacity = {
		get: function(a, b) {
			return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
		}
	}), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
		return b ? Pa(a, {
			display: "inline-block"
		}, Sa, [a, "marginRight"]) : void 0
	}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
		return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
			marginLeft: 0
		}, function() {
			return a.getBoundingClientRect().left
		}) : 0)) + "px" : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		n.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Na.test(a) || (n.cssHooks[a + b].set = db)
	}), n.fn.extend({
		css: function(a, b) {
			return Y(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return cb(this, !0)
		},
		hide: function() {
			return cb(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				W(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function gb(a, b, c, d, e) {
		return new gb.prototype.init(a, b, c, d, e)
	}
	n.Tween = gb, gb.prototype = {
		constructor: gb,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = gb.propHooks[this.prop];
			return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = gb.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
		}
	}, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, n.fx = gb.prototype.init, n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/,
		kb = /queueHooks$/;

	function lb() {
		return a.setTimeout(function() {
			hb = void 0
		}), hb = n.now()
	}
	function mb(a, b) {
		var c, d = {
			height: a
		},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}
	function nb(a, b, c) {
		for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
	}
	function ob(a, b, c) {
		var d, e, f, g, h, i, j, k, m = this,
			o = {},
			p = a.style,
			q = a.nodeType && W(a),
			r = n._data(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, m.always(function() {
			m.always(function() {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
			p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
		}));
		for (d in b) if (e = b[d], jb.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
				if ("show" !== e || !r || void 0 === r[d]) continue;
				q = !0
			}
			o[d] = r && r[d] || n.style(a, d)
		} else j = void 0;
		if (n.isEmptyObject(o))"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
		else {
			r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
				n(a).hide()
			}), m.done(function() {
				var b;
				n._removeData(a, "fxshow");
				for (b in o) n.style(a, b, o[b])
			});
			for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}
	function pb(a, b) {
		var c, d, e, f, g;
		for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f) c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}
	function qb(a, b, c) {
		var d, e, f = 0,
			g = qb.prefilters.length,
			h = n.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {},
					easing: n.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: hb || lb(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
		return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(qb, {
		tweeners: {
			"*": [function(a, b) {
				var c = this.createTween(a, b);
				return X(c.elem, a, U.exec(b), c), c
			}]
		},
		tweener: function(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
		},
		prefilters: [ob],
		prefilter: function(a, b) {
			b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
		}
	}), n.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? n.extend({}, a) : {
			complete: c || !c && b || n.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !n.isFunction(b) && b
		};
		return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
		}, d
	}, n.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(W).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = n.isEmptyObject(a),
				f = n.speed(b, c, d),
				g = function() {
					var b = qb(this, n.extend({}, a), f);
					(e || n._data(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, b, c) {
			var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					e = null != a && a + "queueHooks",
					f = n.timers,
					g = n._data(this);
				if (e) g[e] && g[e].stop && d(g[e]);
				else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				!b && c || n.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"), this.each(function() {
				var b, c = n._data(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = n.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), n.each(["toggle", "show", "hide"], function(a, b) {
		var c = n.fn[b];
		n.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
		}
	}), n.each({
		slideDown: mb("show"),
		slideUp: mb("hide"),
		slideToggle: mb("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		n.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), n.timers = [], n.fx.tick = function() {
		var a, b = n.timers,
			c = 0;
		for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || n.fx.stop(), hb = void 0
	}, n.fx.timer = function(a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
	}, n.fx.interval = 13, n.fx.start = function() {
		ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
	}, n.fx.stop = function() {
		a.clearInterval(ib), ib = null
	}, n.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, n.fn.delay = function(b, c) {
		return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
			var e = a.setTimeout(c, b);
			d.stop = function() {
				a.clearTimeout(e)
			}
		})
	}, function() {
		var a, b = d.createElement("input"),
			c = d.createElement("div"),
			e = d.createElement("select"),
			f = e.appendChild(d.createElement("option"));
		c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !! b.value, l.optSelected = f.selected, l.enctype = !! d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
	}();
	var rb = /\r/g,
		sb = /[ \t\r\n\f]+/g;
	n.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
						if (b = n(c).val(), f) return b;
						g.push(b)
					}
					return g
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
						d.selected = c = !0
					} catch (h) {
						d.scrollHeight
					} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
			}
		}, l.checkOn || (n.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var tb, ub, vb = n.expr.attrHandle,
		wb = /^(?:checked|selected)$/i,
		xb = l.getSetAttribute,
		yb = l.input;
	n.fn.extend({
		attr: function(a, b) {
			return Y(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(G);
			if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
		}
	}), ub = {
		set: function(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = vb[b] || n.find.attr;
		yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
			var e, f;
			return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
		} : vb[b] = function(a, b, c) {
			return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), yb && xb || (n.attrHooks.value = {
		set: function(a, b, c) {
			return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
		}
	}), xb || (tb = {
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, vb.id = vb.name = vb.coords = function(a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, n.valHooks.button = {
		get: function(a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: tb.set
	}, n.attrHooks.contenteditable = {
		set: function(a, b, c) {
			tb.set(a, "" === b ? !1 : b, c)
		}
	}, n.each(["width", "height"], function(a, b) {
		n.attrHooks[b] = {
			set: function(a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), l.style || (n.attrHooks.style = {
		get: function(a) {
			return a.style.cssText || void 0
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	});
	var zb = /^(?:input|select|textarea|button|object)$/i,
		Ab = /^(?:a|area)$/i;
	n.fn.extend({
		prop: function(a, b) {
			return Y(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = n.propFix[a] || a, this.each(function() {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), n.extend({
		prop: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = n.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
		n.propHooks[b] = {
			get: function(a) {
				return a.getAttribute(b, 4)
			}
		}
	}), l.optSelected || (n.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		},
		set: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		n.propFix[this.toLowerCase()] = this
	}), l.enctype || (n.propFix.enctype = "encoding");
	var Bb = /[\t\r\n\f]/g;

	function Cb(a) {
		return n.attr(a, "class") || ""
	}
	n.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).addClass(a.call(this, b, Cb(this)))
			});
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
					g = 0;
					while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
					h = n.trim(d), e !== h && n.attr(c, "class", h)
				}
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).removeClass(a.call(this, b, Cb(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
					g = 0;
					while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
					h = n.trim(d), e !== h && n.attr(c, "class", h)
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
				n(this).toggleClass(a.call(this, c, Cb(this), b), b)
			}) : this.each(function() {
				var b, d, e, f;
				if ("string" === c) {
					d = 0, e = n(this), f = a.match(G) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
			})
		},
		hasClass: function(a) {
			var b, c, d = 0;
			b = " " + a + " ";
			while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
			return !1
		}
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		n.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Db = a.location,
		Eb = n.now(),
		Fb = /\?/,
		Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function(b) {
		if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
		var c, d = null,
			e = n.trim(b + "");
		return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
	}, n.parseXML = function(b) {
		var c, d;
		if (!b || "string" != typeof b) return null;
		try {
			a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
	};
	var Hb = /#.*$/,
		Ib = /([?&])_=[^&]*/,
		Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Lb = /^(?:GET|HEAD)$/,
		Mb = /^\/\//,
		Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Ob = {},
		Pb = {},
		Qb = "*/".concat("*"),
		Rb = Db.href,
		Sb = Nb.exec(Rb.toLowerCase()) || [];

	function Tb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(G) || [];
			if (n.isFunction(c)) while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function Ub(a, b, c, d) {
		var e = {},
			f = a === Pb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}
	function Vb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && n.extend(!0, a, c), a
	}
	function Wb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e) for (g in h) if (h[g] && h[g].test(e)) {
			i.unshift(g);
			break
		}
		if (i[0] in c) f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}
	function Xb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
		else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0) if (g && a["throws"]) b = g(b);
			else try {
				b = g(b)
			} catch (l) {
				return {
					state: "parsererror",
					error: g ? l : "No conversion from " + i + " to " + f
				}
			}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Rb,
			type: "GET",
			isLocal: Kb.test(Sb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Qb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
		},
		ajaxPrefilter: Tb(Ob),
		ajaxTransport: Tb(Pb),
		ajax: function(b, c) {
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
				m = l.context || l,
				o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
				p = n.Deferred(),
				q = n.Callbacks("once memory"),
				r = l.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === u) {
							if (!k) {
								k = {};
								while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
							}
							b = k[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === u ? g : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function(a) {
						return u || (l.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
						else w.always(a[w.status]);
						return this
					},
					abort: function(a) {
						var b = a || v;
						return j && j.abort(b), y(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
			i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
			if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
			v = "abort";
			for (e in {
				success: 1,
				error: 1,
				complete: 1
			}) w[e](l[e]);
			if (j = Ub(Pb, l, c, w)) {
				if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
				l.async && l.timeout > 0 && (h = a.setTimeout(function() {
					w.abort("timeout")
				}, l.timeout));
				try {
					u = 1, j.send(s, y)
				} catch (x) {
					if (!(2 > u)) throw x;
					y(-1, x)
				}
			} else y(-1, "No Transport");

			function y(b, c, d, e) {
				var k, s, t, v, x, y = c;
				2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function(a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function(a, b) {
		n[b] = function(a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, n.isPlainObject(a) && a))
		}
	}), n._evalUrl = function(a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function(a) {
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return n.isFunction(a) ? this.each(function(b) {
				n(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = n.isFunction(a);
			return this.each(function(c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	});

	function Yb(a) {
		return a.style && a.style.display || n.css(a, "display")
	}
	function Zb(a) {
		if (!n.contains(a.ownerDocument || d, a)) return !0;
		while (a && 1 === a.nodeType) {
			if ("none" === Yb(a) || "hidden" === a.type) return !0;
			a = a.parentNode
		}
		return !1
	}
	n.expr.filters.hidden = function(a) {
		return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
	}, n.expr.filters.visible = function(a) {
		return !n.expr.filters.hidden(a)
	};
	var $b = /%20/g,
		_b = /\[\]$/,
		ac = /\r?\n/g,
		bc = /^(?:submit|button|image|reset|file)$/i,
		cc = /^(?:input|select|textarea|keygen)/i;

	function dc(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function(b, e) {
			c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else for (e in b) dc(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
			e(this.name, this.value)
		});
		else for (c in a) dc(c, a[c], b, e);
		return d.join("&").replace($b, "+")
	}, n.fn.extend({
		serialize: function() {
			return n.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
			}).map(function(a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(ac, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(ac, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
	function() {
		return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
	} : hc;
	var ec = 0,
		fc = {},
		gc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for (var a in fc) fc[a](void 0, !0)
	}), l.cors = !! gc && "withCredentials" in gc, gc = l.ajax = !! gc, gc && n.ajaxTransport(function(b) {
		if (!b.crossDomain || l.cors) {
			var c;
			return {
				send: function(d, e) {
					var f, g = b.xhr(),
						h = ++ec;
					if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
					b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
					for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
					g.send(b.hasContent && b.data || null), c = function(a, d) {
						var f, i, j;
						if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
						else {
							j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
							try {
								i = g.statusText
							} catch (k) {
								i = ""
							}
							f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
						}
						j && e(f, i, j, g.getAllResponseHeaders())
					}, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
				},
				abort: function() {
					c && c(void 0, !0)
				}
			}
		}
	});

	function hc() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}
	function ic() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), n.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c = d.head || n("head")[0] || d.documentElement;
			return {
				send: function(e, f) {
					b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function() {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var jc = [],
		kc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = jc.pop() || n.expando + "_" + Eb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || d;
		var e = x.exec(a),
			f = !c && [];
		return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
	};
	var lc = n.fn.load;
	n.fn.load = function(a, b, c) {
		if ("string" != typeof a && lc) return lc.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).always(c &&
		function(a, b) {
			g.each(function() {
				c.apply(this, f || [a.responseText, b, a])
			})
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		n.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function(a) {
		return n.grep(n.timers, function(b) {
			return a === b.elem
		}).length
	};

	function mc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	n.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function(b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = {
				top: 0,
				left: 0
			},
				e = this[0],
				f = e && e.ownerDocument;
			if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		},
		position: function() {
			if (this[0]) {
				var a, b, c = {
					top: 0,
					left: 0
				},
					d = this[0];
				return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - n.css(d, "marginTop", !0),
					left: b.left - c.left - n.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Qa
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, b) {
		var c = /Y/.test(b);
		n.fn[a] = function(d) {
			return Y(this, function(a, d, e) {
				var f = mc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), n.each(["top", "left"], function(a, b) {
		n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
			return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			n.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Y(this, function(b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.extend({
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), n.fn.size = function() {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return n
	});
	var nc = a.jQuery,
		oc = a.$;
	return n.noConflict = function(b) {
		return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
	}, b || (a.jQuery = a.$ = n), n
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +
function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b) if (void 0 !== a.style[c]) return {
			end: b[c]
		};
		return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		var e = function() {
				c || a(d).trigger(a.support.transition.end)
			};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(b) {
				if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function(b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a("#" === f ? [] : f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function(b, d) {
			this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
		};
	c.VERSION = "3.3.7", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function(b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
		}, this), 0)
	}, c.prototype.toggle = function() {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target).closest(".btn");
		b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function(b, c) {
			this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
		};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function(a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function(a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function(a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function() {
		if (!this.sliding) return this.slide("next")
	}, c.prototype.prev = function() {
		if (!this.sliding) return this.slide("prev")
	}, c.prototype.slide = function(b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d, this
	};
	var e = function(c) {
			var d, e = a(this),
				f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
			if (f.hasClass("carousel")) {
				var g = a.extend({}, f.data(), e.data()),
					h = e.attr("data-slide-to");
				h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
			}
		};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}
	function c(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function(b, c) {
			this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
		};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function() {
							this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
						};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function() {
						this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function() {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function(a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function() {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
		}))
	}
	function d(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
			}
			return !1
		}
	}, g.prototype.keydown = function(c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +
function(a) {
	"use strict";

	function b(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function(b, c) {
			this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function(a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function(b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			d.$element.one("mouseup.dismiss.bs.modal", function(b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function() {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function() {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function(b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
				return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function() {
					d.removeBackdrop(), b && b()
				};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function() {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function() {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
		};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function(b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
			click: !1,
			hover: !1,
			focus: !1
		}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function() {
		for (var a in this.inState) if (this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function() {
					var a = e.hoverState;
					e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
				};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function(a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function(b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
	}, c.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function() {
		return this.getTitle()
	}, c.prototype.getPosition = function(b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = window.SVGElement && c instanceof window.SVGElement,
			g = d ? {
				top: 0,
				left: 0
			} : f ? null : b.offset(),
			h = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			i = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, h, i, g)
	}, c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function(a) {
		do a += ~~ (1e6 * Math.random());
		while (document.getElementById(a));
		return a
	}, c.prototype.tip = function() {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function() {
		this.enabled = !0
	}, c.prototype.disable = function() {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function(b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function() {
		var a = this;
		clearTimeout(this.timeout), this.hide(function() {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d, this
	}
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
			this.init("popover", a, b)
		};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
		return a.fn.popover = d, this
	}
}(jQuery), +
function(a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}
	function c(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.7", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function() {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b) {
			this.element = a(b)
		};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function(b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !! d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
		return a.fn.tab = d, this
	};
	var e = function(c) {
			c.preventDefault(), b.call(a(this), "show")
		};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
			this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};
	c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function(a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return e < c && "top";
		if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
	}, c.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
		return a.fn.affix = d, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);
/*!
    Lazy Load 1.9.7 -
    MIT license -
    Copyright 2010-2015 Mika Tuupola
*/
!
function(a, b, c, d) {
	var e = a(b);
	a.fn.lazyload = function(f) {
		function g() {
			var b = 0;
			i.each(function() {
				var c = a(this);
				if (!j.skip_invisible || c.is(":visible")) if (a.abovethetop(this, j) || a.leftofbegin(this, j));
				else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
					if (++b > j.failure_limit) return !1
				} else c.trigger("appear"), b = 0
			})
		}
		var h, i = this,
			j = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: b,
				data_attribute: "original",
				skip_invisible: !1,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
			return g()
		}), this.each(function() {
			var b = this,
				c = a(b);
			b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
				if (!this.loaded) {
					if (j.appear) {
						var d = i.length;
						j.appear.call(b, d, j)
					}
					a("<img />").bind("load", function() {
						var d = c.attr("data-" + j.data_attribute);
						c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
						var e = a.grep(i, function(a) {
							return !a.loaded
						});
						if (i = a(e), j.load) {
							var f = i.length;
							j.load.call(b, f, j)
						}
					}).attr("src", c.attr("data-" + j.data_attribute))
				}
			}), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
				b.loaded || c.trigger("appear")
			})
		}), e.bind("resize", function() {
			g()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
			b.originalEvent && b.originalEvent.persisted && i.each(function() {
				a(this).trigger("appear")
			})
		}), a(c).ready(function() {
			g()
		}), this
	}, a.belowthefold = function(c, f) {
		var g;
		return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
	}, a.rightoffold = function(c, f) {
		var g;
		return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
	}, a.abovethetop = function(c, f) {
		var g;
		return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
	}, a.leftofbegin = function(c, f) {
		var g;
		return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
	}, a.inviewport = function(b, c) {
		return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
	}, a.extend(a.expr[":"], {
		"below-the-fold": function(b) {
			return a.belowthefold(b, {
				threshold: 0
			})
		},
		"above-the-top": function(b) {
			return !a.belowthefold(b, {
				threshold: 0
			})
		},
		"right-of-screen": function(b) {
			return a.rightoffold(b, {
				threshold: 0
			})
		},
		"left-of-screen": function(b) {
			return !a.rightoffold(b, {
				threshold: 0
			})
		},
		"in-viewport": function(b) {
			return a.inviewport(b, {
				threshold: 0
			})
		},
		"above-the-fold": function(b) {
			return !a.belowthefold(b, {
				threshold: 0
			})
		},
		"right-of-fold": function(b) {
			return a.rightoffold(b, {
				threshold: 0
			})
		},
		"left-of-fold": function(b) {
			return !a.rightoffold(b, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document);
/*!
 * jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT
 * */
!
function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
	a.extend(a.fn, {
		validate: function(b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
				c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function(b) {
				function d() {
					var d, e;
					return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function() {
			var b, c, d;
			return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
				b = c.element(this) && b, b || (d = d.concat(c.errorList))
			}), c.errorList = d), b
		},
		rules: function(b, c) {
			var d, e, f, g, h, i, j = this[0];
			if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
				if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
				case "add":
					a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
					break;
				case "remove":
					return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
						i[b] = f[b], delete f[b]
					}), i) : (delete e[j.name], f)
				}
				return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
					required: h
				}, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
					remote: h
				})), g
			}
		}
	}), a.extend(a.expr.pseudos || a.expr[":"], {
		blank: function(b) {
			return !a.trim("" + a(b).val())
		},
		filled: function(b) {
			var c = a(b).val();
			return null !== c && !! a.trim("" + c)
		},
		unchecked: function(b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function(b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function(b, c) {
		return 1 === arguments.length ?
		function() {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function(a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function(b, c) {
				var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
			},
			onclick: function(a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function(b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function(b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function(b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}."),
			step: a.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function b(b) {
					!this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
					var c = a.data(this.form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function(b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function(b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function(b) {
				var c, d, e = this.clean(b),
					f = this.validationTargetFor(e),
					g = this,
					h = !0;
				return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
					b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
				}), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
			},
			showErrors: function(b) {
				if (b) {
					var c = this;
					a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
						return {
							message: a,
							element: c.findByName(b)[0]
						}
					}), this.successList = a.grep(this.successList, function(a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(b)
			},
			resetElements: function(a) {
				var b;
				if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
				else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(a) {
				var b, c = 0;
				for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
				return c
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function() {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function(a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function() {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var d = this.name || a(this).attr("name");
					return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
				})
			},
			clean: function(b) {
				return a(b)[0]
			},
			errors: function() {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = a([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function(b) {
				var c, d, e = a(b),
					f = b.type;
				return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function(b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f, g = a(b).rules(),
					h = a.map(g, function(a, b) {
						return b
					}).length,
					i = !1,
					j = this.elementValue(b);
				if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
					if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
					delete g.normalizer
				}
				for (d in g) {
					e = {
						method: d,
						parameters: g[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
							i = !0;
							continue
						}
						if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (k) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
					}
				}
				if (!i) return this.objectLength(g) && this.successList.push(b), !0
			},
			customDataMessage: function(b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function(a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function() {
				for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
			},
			defaultMessage: function(b, c) {
				"string" == typeof c && (c = {
					method: c
				});
				var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
					e = /\$?\{(\d+)\}/g;
				return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
			},
			formatAndAdd: function(a, b) {
				var c = this.defaultMessage(a, b);
				this.errorList.push({
					message: c,
					element: a,
					method: b.method
				}), this.errorMap[a.name] = c, this.submitted[a.name] = c
			},
			addWrapper: function(a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function() {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return a(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(b, c) {
				var d, e, f, g, h = this.errorsFor(b),
					i = this.idOrName(b),
					j = a(b).attr("aria-describedby");
				h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
					c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
				})))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
			},
			errorsFor: function(b) {
				var c = this.escapeCssMeta(this.idOrName(b)),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function(a) {
				return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function(b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function(a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function(b) {
				return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
			},
			getLength: function(b, c) {
				switch (c.nodeName.toLowerCase()) {
				case "select":
					return a("option:selected", c).length;
				case "input":
					if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function(a, b) {
				return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
			},
			dependTypes: {
				"boolean": function(a) {
					return a
				},
				string: function(b, c) {
					return !!a(b, c.form).length
				},
				"function": function(a, b) {
					return a(b)
				}
			},
			optional: function(b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function(b) {
				this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
			},
			stopRequest: function(b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(b, c) {
				return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, {
						method: c
					})
				})
			},
			destroy: function() {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function(b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function() {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function(a, b, c, d) {
			/min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
		},
		attributeRules: function(b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods)"required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !! d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function(b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
			return e
		},
		staticRules: function(b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function(b, c) {
			return a.each(b, function(d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
					case "string":
						f = !! a(e.depends, c.form).length;
						break;
					case "function":
						f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
				}
			}), a.each(b, function(d, e) {
				b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
			}), a.each(["minlength", "maxlength"], function() {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function() {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function(b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function() {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function(b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function(b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
			},
			email: function(a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function(a, b) {
				return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)(?:\.(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)*(?:\.(?:[a-z¡-￿]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
			},
			date: function(a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function(a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function(a, b) {
				return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			minlength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e <= d
			},
			rangelength: function(b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function(a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function(a, b, c) {
				return this.optional(b) || a <= c
			},
			range: function(a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			step: function(b, c, d) {
				var e, f = a(c).attr("type"),
					g = "Step attribute on input type " + f + " is not supported.",
					h = ["text", "number", "range"],
					i = new RegExp("\\b" + f + "\\b"),
					j = f && !i.test(h.join()),
					k = function(a) {
						var b = ("" + a).match(/(?:\.(\d+))?$/);
						return b && b[1] ? b[1].length : 0
					},
					l = function(a) {
						return Math.round(a * Math.pow(10, e))
					},
					m = !0;
				if (j) throw new Error(g);
				return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
			},
			equalTo: function(b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					a(c).valid()
				}), b === e.val()
			},
			remote: function(b, c, d, e) {
				if (this.optional(c)) return "dependency-mismatch";
				e = "string" == typeof e && e || "remote";
				var f, g, h, i = this.previousValue(c, e);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
					url: d
				} || d, h = a.param(a.extend({
					data: b
				}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: g,
					context: f.currentForm,
					success: function(a) {
						var d, g, h, j = a === !0 || "true" === a;
						f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
							method: e,
							parameters: b
						}), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	});
	var b, c = {};
	return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function(d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	}), a
});

/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!
function(t) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var e;
		e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
	}
}(function() {
	var t, e, n;
	return function t(e, n, o) {
		function i(a, c) {
			if (!n[a]) {
				if (!e[a]) {
					var l = "function" == typeof require && require;
					if (!c && l) return l(a, !0);
					if (r) return r(a, !0);
					var s = new Error("Cannot find module '" + a + "'");
					throw s.code = "MODULE_NOT_FOUND", s
				}
				var u = n[a] = {
					exports: {}
				};
				e[a][0].call(u.exports, function(t) {
					var n = e[a][1][t];
					return i(n || t)
				}, u, u.exports, t, e, n, o)
			}
			return n[a].exports
		}
		for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
		return i
	}({
		1: [function(t, e, n) {
			function o(t, e) {
				for (; t && t.nodeType !== i;) {
					if ("function" == typeof t.matches && t.matches(e)) return t;
					t = t.parentNode
				}
			}
			var i = 9;
			if ("undefined" != typeof Element && !Element.prototype.matches) {
				var r = Element.prototype;
				r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
			}
			e.exports = o
		}, {}],
		2: [function(t, e, n) {
			function o(t, e, n, o, r) {
				var a = i.apply(this, arguments);
				return t.addEventListener(n, a, r), {
					destroy: function() {
						t.removeEventListener(n, a, r)
					}
				}
			}
			function i(t, e, n, o) {
				return function(n) {
					n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
				}
			}
			var r = t("./closest");
			e.exports = o
		}, {
			"./closest": 1
		}],
		3: [function(t, e, n) {
			n.node = function(t) {
				return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
			}, n.nodeList = function(t) {
				var e = Object.prototype.toString.call(t);
				return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
			}, n.string = function(t) {
				return "string" == typeof t || t instanceof String
			}, n.fn = function(t) {
				return "[object Function]" === Object.prototype.toString.call(t)
			}
		}, {}],
		4: [function(t, e, n) {
			function o(t, e, n) {
				if (!t && !e && !n) throw new Error("Missing required arguments");
				if (!c.string(e)) throw new TypeError("Second argument must be a String");
				if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
				if (c.node(t)) return i(t, e, n);
				if (c.nodeList(t)) return r(t, e, n);
				if (c.string(t)) return a(t, e, n);
				throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
			}
			function i(t, e, n) {
				return t.addEventListener(e, n), {
					destroy: function() {
						t.removeEventListener(e, n)
					}
				}
			}
			function r(t, e, n) {
				return Array.prototype.forEach.call(t, function(t) {
					t.addEventListener(e, n)
				}), {
					destroy: function() {
						Array.prototype.forEach.call(t, function(t) {
							t.removeEventListener(e, n)
						})
					}
				}
			}
			function a(t, e, n) {
				return l(document.body, t, e, n)
			}
			var c = t("./is"),
				l = t("delegate");
			e.exports = o
		}, {
			"./is": 3,
			delegate: 2
		}],
		5: [function(t, e, n) {
			function o(t) {
				var e;
				if ("SELECT" === t.nodeName) t.focus(), e = t.value;
				else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
					var n = t.hasAttribute("readonly");
					n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
				} else {
					t.hasAttribute("contenteditable") && t.focus();
					var o = window.getSelection(),
						i = document.createRange();
					i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
				}
				return e
			}
			e.exports = o
		}, {}],
		6: [function(t, e, n) {
			function o() {}
			o.prototype = {
				on: function(t, e, n) {
					var o = this.e || (this.e = {});
					return (o[t] || (o[t] = [])).push({
						fn: e,
						ctx: n
					}), this
				},
				once: function(t, e, n) {
					function o() {
						i.off(t, o), e.apply(n, arguments)
					}
					var i = this;
					return o._ = e, this.on(t, o, n)
				},
				emit: function(t) {
					var e = [].slice.call(arguments, 1),
						n = ((this.e || (this.e = {}))[t] || []).slice(),
						o = 0,
						i = n.length;
					for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
					return this
				},
				off: function(t, e) {
					var n = this.e || (this.e = {}),
						o = n[t],
						i = [];
					if (o && e) for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
					return i.length ? n[t] = i : delete n[t], this
				}
			}, e.exports = o
		}, {}],
		7: [function(e, n, o) {
			!
			function(i, r) {
				if ("function" == typeof t && t.amd) t(["module", "select"], r);
				else if (void 0 !== o) r(n, e("select"));
				else {
					var a = {
						exports: {}
					};
					r(a, i.select), i.clipboardAction = a.exports
				}
			}(this, function(t, e) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
					default:
						t
					}
				}
				function o(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				var i = n(e),
					r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, a = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
						}
					}
					return function(e, n, o) {
						return n && t(e.prototype, n), o && t(e, o), e
					}
				}(), c = function() {
					function t(e) {
						o(this, t), this.resolveOptions(e), this.initSelection()
					}
					return a(t, [{
						key: "resolveOptions",
						value: function t() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
						}
					}, {
						key: "initSelection",
						value: function t() {
							this.text ? this.selectFake() : this.target && this.selectTarget()
						}
					}, {
						key: "selectFake",
						value: function t() {
							var e = this,
								n = "rtl" == document.documentElement.getAttribute("dir");
							this.removeFake(), this.fakeHandlerCallback = function() {
								return e.removeFake()
							}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
							var o = window.pageYOffset || document.documentElement.scrollTop;
							this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.
						default)(this.fakeElem), this.copyText()
						}
					}, {
						key: "removeFake",
						value: function t() {
							this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
						}
					}, {
						key: "selectTarget",
						value: function t() {
							this.selectedText = (0, i.
						default)(this.target), this.copyText()
						}
					}, {
						key: "copyText",
						value: function t() {
							var e = void 0;
							try {
								e = document.execCommand(this.action)
							} catch (t) {
								e = !1
							}
							this.handleResult(e)
						}
					}, {
						key: "handleResult",
						value: function t(e) {
							this.emitter.emit(e ? "success" : "error", {
								action: this.action,
								text: this.selectedText,
								trigger: this.trigger,
								clearSelection: this.clearSelection.bind(this)
							})
						}
					}, {
						key: "clearSelection",
						value: function t() {
							this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
						}
					}, {
						key: "destroy",
						value: function t() {
							this.removeFake()
						}
					}, {
						key: "action",
						set: function t() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
							if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
						},
						get: function t() {
							return this._action
						}
					}, {
						key: "target",
						set: function t(e) {
							if (void 0 !== e) {
								if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
								if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
								if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
								this._target = e
							}
						},
						get: function t() {
							return this._target
						}
					}]), t
				}();
				t.exports = c
			})
		}, {
			select: 5
		}],
		8: [function(e, n, o) {
			!
			function(i, r) {
				if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
				else if (void 0 !== o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
				else {
					var a = {
						exports: {}
					};
					r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports
				}
			}(this, function(t, e, n, o) {
				"use strict";

				function i(t) {
					return t && t.__esModule ? t : {
					default:
						t
					}
				}
				function r(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				function a(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}
				function c(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				function l(t, e) {
					var n = "data-clipboard-" + t;
					if (e.hasAttribute(n)) return e.getAttribute(n)
				}
				var s = i(e),
					u = i(n),
					f = i(o),
					d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, h = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
						}
					}
					return function(e, n, o) {
						return n && t(e.prototype, n), o && t(e, o), e
					}
				}(), p = function(t) {
					function e(t, n) {
						r(this, e);
						var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
						return o.resolveOptions(n), o.listenClick(t), o
					}
					return c(e, t), h(e, [{
						key: "resolveOptions",
						value: function t() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
						}
					}, {
						key: "listenClick",
						value: function t(e) {
							var n = this;
							this.listener = (0, f.
						default)(e, "click", function(t) {
								return n.onClick(t)
							})
						}
					}, {
						key: "onClick",
						value: function t(e) {
							var n = e.delegateTarget || e.currentTarget;
							this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.
						default ({
								action: this.action(n),
								target: this.target(n),
								text: this.text(n),
								container: this.container,
								trigger: n,
								emitter: this
							})
						}
					}, {
						key: "defaultAction",
						value: function t(e) {
							return l("action", e)
						}
					}, {
						key: "defaultTarget",
						value: function t(e) {
							var n = l("target", e);
							if (n) return document.querySelector(n)
						}
					}, {
						key: "defaultText",
						value: function t(e) {
							return l("text", e)
						}
					}, {
						key: "destroy",
						value: function t() {
							this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
						}
					}], [{
						key: "isSupported",
						value: function t() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
								n = "string" == typeof e ? [e] : e,
								o = !! document.queryCommandSupported;
							return n.forEach(function(t) {
								o = o && !! document.queryCommandSupported(t)
							}), o
						}
					}]), e
				}(u.
			default);
				t.exports = p
			})
		}, {
			"./clipboard-action": 7,
			"good-listener": 4,
			"tiny-emitter": 6
		}]
	}, {}, [8])(8)
});
/*
 * share js
 *
 */
!
function(r) {
	"use strict";

	function t(t, e, n, o) {
		function i(r, t) {
			return r -= o, t -= o, 0 > r || r >= u || 0 > t || t >= u ? !1 : a.isDark(r, t)
		}
		var a = r(n, e);
		a.addData(t), a.make(), o = o || 0;
		var u = a.getModuleCount(),
			f = a.getModuleCount() + 2 * o,
			c = function(r, t, e, n) {
				var o = this.isDark,
					i = 1 / f;
				this.isDark = function(a, u) {
					var f = u * i,
						c = a * i,
						s = f + i,
						l = c + i;
					return o(a, u) && (r > s || f > e || t > l || c > n)
				}
			};
		this.text = t, this.level = e, this.version = n, this.moduleCount = f, this.isDark = i, this.addBlank = c
	}
	function e(r, e, n, o, i) {
		n = Math.max(1, n || 1), o = Math.min(40, o || 40);
		for (var a = n; o >= a; a += 1) try {
			return new t(r, e, a, i)
		} catch (u) {}
	}
	function n(r, t, e) {
		var n = e.size,
			o = "bold " + e.mSize * n + "px " + e.fontname,
			i = p("<canvas/>")[0].getContext("2d");
		i.font = o;
		var a = i.measureText(e.label).width,
			u = e.mSize,
			f = a / n,
			c = (1 - f) * e.mPosX,
			s = (1 - u) * e.mPosY,
			l = c + f,
			h = s + u,
			d = .01;
		1 === e.mode ? r.addBlank(0, s - d, n, h + d) : r.addBlank(c - d, s - d, l + d, h + d), t.fillStyle = e.fontcolor, t.font = o, t.fillText(e.label, c * n, s * n + .75 * e.mSize * n)
	}
	function o(r, t, e) {
		var n = e.size,
			o = e.image.naturalWidth || 1,
			i = e.image.naturalHeight || 1,
			a = e.mSize,
			u = a * o / i,
			f = (1 - u) * e.mPosX,
			c = (1 - a) * e.mPosY,
			s = f + u,
			l = c + a,
			h = .01;
		3 === e.mode ? r.addBlank(0, c - h, n, l + h) : r.addBlank(f - h, c - h, s + h, l + h), t.drawImage(e.image, f * n, c * n, u * n, a * n)
	}
	function i(r, t, e) {
		p(e.background).is("img") ? t.drawImage(e.background, 0, 0, e.size, e.size) : e.background && (t.fillStyle = e.background, t.fillRect(e.left, e.top, e.size, e.size));
		var i = e.mode;
		1 === i || 2 === i ? n(r, t, e) : (3 === i || 4 === i) && o(r, t, e)
	}
	function a(r, t, e, n, o, i, a, u) {
		r.isDark(a, u) && t.rect(n, o, i, i)
	}
	function u(r, t, e, n, o, i, a, u, f, c) {
		a ? r.moveTo(t + i, e) : r.moveTo(t, e), u ? (r.lineTo(n - i, e), r.arcTo(n, e, n, o, i)) : r.lineTo(n, e), f ? (r.lineTo(n, o - i), r.arcTo(n, o, t, o, i)) : r.lineTo(n, o), c ? (r.lineTo(t + i, o), r.arcTo(t, o, t, e, i)) : r.lineTo(t, o), a ? (r.lineTo(t, e + i), r.arcTo(t, e, n, e, i)) : r.lineTo(t, e)
	}
	function f(r, t, e, n, o, i, a, u, f, c) {
		a && (r.moveTo(t + i, e), r.lineTo(t, e), r.lineTo(t, e + i), r.arcTo(t, e, t + i, e, i)), u && (r.moveTo(n - i, e), r.lineTo(n, e), r.lineTo(n, e + i), r.arcTo(n, e, n - i, e, i)), f && (r.moveTo(n - i, o), r.lineTo(n, o), r.lineTo(n, o - i), r.arcTo(n, o, n - i, o, i)), c && (r.moveTo(t + i, o), r.lineTo(t, o), r.lineTo(t, o - i), r.arcTo(t, o, t + i, o, i))
	}
	function c(r, t, e, n, o, i, a, c) {
		var s = r.isDark,
			l = n + i,
			h = o + i,
			d = e.radius * i,
			g = a - 1,
			v = a + 1,
			p = c - 1,
			w = c + 1,
			m = s(a, c),
			T = s(g, p),
			y = s(g, c),
			E = s(g, w),
			A = s(a, w),
			B = s(v, w),
			k = s(v, c),
			b = s(v, p),
			C = s(a, p);
		m ? u(t, n, o, l, h, d, !y && !C, !y && !A, !k && !A, !k && !C) : f(t, n, o, l, h, d, y && C && T, y && A && E, k && A && B, k && C && b)
	}
	function s(r, t, e) {
		var n, o, i = r.moduleCount,
			u = e.size / i,
			f = a;
		for (m && e.radius > 0 && e.radius <= .5 && (f = c), t.beginPath(), n = 0; i > n; n += 1) for (o = 0; i > o; o += 1) {
			var s = e.left + o * u,
				l = e.top + n * u,
				h = u;
			f(r, t, e, s, l, h, n, o)
		}
		if (p(e.fill).is("img")) {
			t.strokeStyle = "rgba(0,0,0,0.5)", t.lineWidth = 2, t.stroke();
			var d = t.globalCompositeOperation;
			t.globalCompositeOperation = "destination-out", t.fill(), t.globalCompositeOperation = d, t.clip(), t.drawImage(e.fill, 0, 0, e.size, e.size), t.restore()
		} else t.fillStyle = e.fill, t.fill()
	}
	function l(r, t) {
		var n = e(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
		if (!n) return null;
		var o = p(r).data("qrcode", n),
			a = o[0].getContext("2d");
		return i(n, a, t), s(n, a, t), o
	}
	function h(r) {
		var t = p("<canvas/>").attr("width", r.size).attr("height", r.size);
		return l(t, r)
	}
	function d(r) {
		return p("<img/>").attr("src", h(r)[0].toDataURL("image/png"))
	}
	function g(r) {
		var t = e(r.text, r.ecLevel, r.minVersion, r.maxVersion, r.quiet);
		if (!t) return null;
		var n, o, i = r.size,
			a = r.background,
			u = Math.floor,
			f = t.moduleCount,
			c = u(i / f),
			s = u(.5 * (i - c * f)),
			l = {
				position: "relative",
				left: 0,
				top: 0,
				padding: 0,
				margin: 0,
				width: i,
				height: i
			},
			h = {
				position: "absolute",
				padding: 0,
				margin: 0,
				width: c,
				height: c,
				"background-color": r.fill
			},
			d = p("<div/>").data("qrcode", t).css(l);
		for (a && d.css("background-color", a), n = 0; f > n; n += 1) for (o = 0; f > o; o += 1) t.isDark(n, o) && p("<div/>").css(h).css({
			left: s + o * c,
			top: s + n * c
		}).appendTo(d);
		return d
	}
	function v(r) {
		return w && "canvas" === r.render ? h(r) : w && "image" === r.render ? d(r) : g(r)
	}
	var p = jQuery,
		w = function() {
			var r = document.createElement("canvas");
			return Boolean(r.getContext && r.getContext("2d"))
		}(),
		m = "[object Opera]" !== Object.prototype.toString.call(window.opera),
		T = {
			render: "canvas",
			minVersion: 1,
			maxVersion: 40,
			ecLevel: "L",
			left: 0,
			top: 0,
			size: 200,
			fill: "#000",
			background: null,
			text: "no text",
			radius: 0,
			quiet: 0,
			mode: 0,
			mSize: .1,
			mPosX: .5,
			mPosY: .5,
			label: "no label",
			fontname: "sans",
			fontcolor: "#000",
			image: null
		};
	p.fn.qrcode = function(r) {
		var t = p.extend({}, T, r);
		return this.each(function() {
			"canvas" === this.nodeName.toLowerCase() ? l(this, t) : p(this).append(v(t))
		})
	}
}(function() {
	var r = function() {
			function r(t, e) {
				if ("undefined" == typeof t.length) throw new Error(t.length + "/" + e);
				var n = function() {
						for (var r = 0; r < t.length && 0 == t[r];) r += 1;
						for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1) n[o] = t[o + r];
						return n
					}(),
					o = {};
				return o.getAt = function(r) {
					return n[r]
				}, o.getLength = function() {
					return n.length
				}, o.multiply = function(t) {
					for (var e = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1) for (var i = 0; i < t.getLength(); i += 1) e[n + i] ^= a.gexp(a.glog(o.getAt(n)) + a.glog(t.getAt(i)));
					return r(e, 0)
				}, o.mod = function(t) {
					if (o.getLength() - t.getLength() < 0) return o;
					for (var e = a.glog(o.getAt(0)) - a.glog(t.getAt(0)), n = new Array(o.getLength()), i = 0; i < o.getLength(); i += 1) n[i] = o.getAt(i);
					for (var i = 0; i < t.getLength(); i += 1) n[i] ^= a.gexp(a.glog(t.getAt(i)) + e);
					return r(n, 0).mod(t)
				}, o
			}
			var t = function(t, e) {
					var o = 236,
						a = 17,
						s = t,
						l = n[e],
						h = null,
						d = 0,
						v = null,
						p = new Array,
						w = {},
						m = function(r, t) {
							d = 4 * s + 17, h = function(r) {
								for (var t = new Array(r), e = 0; r > e; e += 1) {
									t[e] = new Array(r);
									for (var n = 0; r > n; n += 1) t[e][n] = null
								}
								return t
							}(d), T(0, 0), T(d - 7, 0), T(0, d - 7), A(), E(), k(r, t), s >= 7 && B(r), null == v && (v = M(s, l, p)), b(v, t)
						},
						T = function(r, t) {
							for (var e = -1; 7 >= e; e += 1) if (!(-1 >= r + e || r + e >= d)) for (var n = -1; 7 >= n; n += 1) - 1 >= t + n || t + n >= d || (e >= 0 && 6 >= e && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == e || 6 == e) || e >= 2 && 4 >= e && n >= 2 && 4 >= n ? h[r + e][t + n] = !0 : h[r + e][t + n] = !1)
						},
						y = function() {
							for (var r = 0, t = 0, e = 0; 8 > e; e += 1) {
								m(!0, e);
								var n = i.getLostPoint(w);
								(0 == e || r > n) && (r = n, t = e)
							}
							return t
						},
						E = function() {
							for (var r = 8; d - 8 > r; r += 1) null == h[r][6] && (h[r][6] = r % 2 == 0);
							for (var t = 8; d - 8 > t; t += 1) null == h[6][t] && (h[6][t] = t % 2 == 0)
						},
						A = function() {
							for (var r = i.getPatternPosition(s), t = 0; t < r.length; t += 1) for (var e = 0; e < r.length; e += 1) {
								var n = r[t],
									o = r[e];
								if (null == h[n][o]) for (var a = -2; 2 >= a; a += 1) for (var u = -2; 2 >= u; u += 1) - 2 == a || 2 == a || -2 == u || 2 == u || 0 == a && 0 == u ? h[n + a][o + u] = !0 : h[n + a][o + u] = !1
							}
						},
						B = function(r) {
							for (var t = i.getBCHTypeNumber(s), e = 0; 18 > e; e += 1) {
								var n = !r && 1 == (t >> e & 1);
								h[Math.floor(e / 3)][e % 3 + d - 8 - 3] = n
							}
							for (var e = 0; 18 > e; e += 1) {
								var n = !r && 1 == (t >> e & 1);
								h[e % 3 + d - 8 - 3][Math.floor(e / 3)] = n
							}
						},
						k = function(r, t) {
							for (var e = l << 3 | t, n = i.getBCHTypeInfo(e), o = 0; 15 > o; o += 1) {
								var a = !r && 1 == (n >> o & 1);
								6 > o ? h[o][8] = a : 8 > o ? h[o + 1][8] = a : h[d - 15 + o][8] = a
							}
							for (var o = 0; 15 > o; o += 1) {
								var a = !r && 1 == (n >> o & 1);
								8 > o ? h[8][d - o - 1] = a : 9 > o ? h[8][15 - o - 1 + 1] = a : h[8][15 - o - 1] = a
							}
							h[d - 8][8] = !r
						},
						b = function(r, t) {
							for (var e = -1, n = d - 1, o = 7, a = 0, u = i.getMaskFunction(t), f = d - 1; f > 0; f -= 2) for (6 == f && (f -= 1);;) {
								for (var c = 0; 2 > c; c += 1) if (null == h[n][f - c]) {
									var s = !1;
									a < r.length && (s = 1 == (r[a] >>> o & 1));
									var l = u(n, f - c);
									l && (s = !s), h[n][f - c] = s, o -= 1, -1 == o && (a += 1, o = 7)
								}
								if (n += e, 0 > n || n >= d) {
									n -= e, e = -e;
									break
								}
							}
						},
						C = function(t, e) {
							for (var n = 0, o = 0, a = 0, u = new Array(e.length), f = new Array(e.length), c = 0; c < e.length; c += 1) {
								var s = e[c].dataCount,
									l = e[c].totalCount - s;
								o = Math.max(o, s), a = Math.max(a, l), u[c] = new Array(s);
								for (var h = 0; h < u[c].length; h += 1) u[c][h] = 255 & t.getBuffer()[h + n];
								n += s;
								var d = i.getErrorCorrectPolynomial(l),
									g = r(u[c], d.getLength() - 1),
									v = g.mod(d);
								f[c] = new Array(d.getLength() - 1);
								for (var h = 0; h < f[c].length; h += 1) {
									var p = h + v.getLength() - f[c].length;
									f[c][h] = p >= 0 ? v.getAt(p) : 0
								}
							}
							for (var w = 0, h = 0; h < e.length; h += 1) w += e[h].totalCount;
							for (var m = new Array(w), T = 0, h = 0; o > h; h += 1) for (var c = 0; c < e.length; c += 1) h < u[c].length && (m[T] = u[c][h], T += 1);
							for (var h = 0; a > h; h += 1) for (var c = 0; c < e.length; c += 1) h < f[c].length && (m[T] = f[c][h], T += 1);
							return m
						},
						M = function(r, t, e) {
							for (var n = u.getRSBlocks(r, t), c = f(), s = 0; s < e.length; s += 1) {
								var l = e[s];
								c.put(l.getMode(), 4), c.put(l.getLength(), i.getLengthInBits(l.getMode(), r)), l.write(c)
							}
							for (var h = 0, s = 0; s < n.length; s += 1) h += n[s].dataCount;
							if (c.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * h + ")");
							for (c.getLengthInBits() + 4 <= 8 * h && c.put(0, 4); c.getLengthInBits() % 8 != 0;) c.putBit(!1);
							for (; !(c.getLengthInBits() >= 8 * h) && (c.put(o, 8), !(c.getLengthInBits() >= 8 * h));) c.put(a, 8);
							return C(c, n)
						};
					return w.addData = function(r) {
						var t = c(r);
						p.push(t), v = null
					}, w.isDark = function(r, t) {
						if (0 > r || r >= d || 0 > t || t >= d) throw new Error(r + "," + t);
						return h[r][t]
					}, w.getModuleCount = function() {
						return d
					}, w.make = function() {
						m(!1, y())
					}, w.createTableTag = function(r, t) {
						r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
						var e = "";
						e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + t + "px;", e += '">', e += "<tbody>";
						for (var n = 0; n < w.getModuleCount(); n += 1) {
							e += "<tr>";
							for (var o = 0; o < w.getModuleCount(); o += 1) e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + r + "px;", e += " height: " + r + "px;", e += " background-color: ", e += w.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
							e += "</tr>"
						}
						return e += "</tbody>", e += "</table>"
					}, w.createImgTag = function(r, t) {
						r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
						var e = w.getModuleCount() * r + 2 * t,
							n = t,
							o = e - t;
						return g(e, e, function(t, e) {
							if (t >= n && o > t && e >= n && o > e) {
								var i = Math.floor((t - n) / r),
									a = Math.floor((e - n) / r);
								return w.isDark(a, i) ? 0 : 1
							}
							return 1
						})
					}, w
				};
			t.stringToBytes = function(r) {
				for (var t = new Array, e = 0; e < r.length; e += 1) {
					var n = r.charCodeAt(e);
					t.push(255 & n)
				}
				return t
			}, t.createStringToBytes = function(r, t) {
				var e = function() {
						for (var e = h(r), n = function() {
								var r = e.read();
								if (-1 == r) throw new Error;
								return r
							}, o = 0, i = {};;) {
							var a = e.read();
							if (-1 == a) break;
							var u = n(),
								f = n(),
								c = n(),
								s = String.fromCharCode(a << 8 | u),
								l = f << 8 | c;
							i[s] = l, o += 1
						}
						if (o != t) throw new Error(o + " != " + t);
						return i
					}(),
					n = "?".charCodeAt(0);
				return function(r) {
					for (var t = new Array, o = 0; o < r.length; o += 1) {
						var i = r.charCodeAt(o);
						if (128 > i) t.push(i);
						else {
							var a = e[r.charAt(o)];
							"number" == typeof a ? (255 & a) == a ? t.push(a) : (t.push(a >>> 8), t.push(255 & a)) : t.push(n)
						}
					}
					return t
				}
			};
			var e = {
				MODE_NUMBER: 1,
				MODE_ALPHA_NUM: 2,
				MODE_8BIT_BYTE: 4,
				MODE_KANJI: 8
			},
				n = {
					L: 1,
					M: 0,
					Q: 3,
					H: 2
				},
				o = {
					PATTERN000: 0,
					PATTERN001: 1,
					PATTERN010: 2,
					PATTERN011: 3,
					PATTERN100: 4,
					PATTERN101: 5,
					PATTERN110: 6,
					PATTERN111: 7
				},
				i = function() {
					var t = [
						[],
						[6, 18],
						[6, 22],
						[6, 26],
						[6, 30],
						[6, 34],
						[6, 22, 38],
						[6, 24, 42],
						[6, 26, 46],
						[6, 28, 50],
						[6, 30, 54],
						[6, 32, 58],
						[6, 34, 62],
						[6, 26, 46, 66],
						[6, 26, 48, 70],
						[6, 26, 50, 74],
						[6, 30, 54, 78],
						[6, 30, 56, 82],
						[6, 30, 58, 86],
						[6, 34, 62, 90],
						[6, 28, 50, 72, 94],
						[6, 26, 50, 74, 98],
						[6, 30, 54, 78, 102],
						[6, 28, 54, 80, 106],
						[6, 32, 58, 84, 110],
						[6, 30, 58, 86, 114],
						[6, 34, 62, 90, 118],
						[6, 26, 50, 74, 98, 122],
						[6, 30, 54, 78, 102, 126],
						[6, 26, 52, 78, 104, 130],
						[6, 30, 56, 82, 108, 134],
						[6, 34, 60, 86, 112, 138],
						[6, 30, 58, 86, 114, 142],
						[6, 34, 62, 90, 118, 146],
						[6, 30, 54, 78, 102, 126, 150],
						[6, 24, 50, 76, 102, 128, 154],
						[6, 28, 54, 80, 106, 132, 158],
						[6, 32, 58, 84, 110, 136, 162],
						[6, 26, 54, 82, 110, 138, 166],
						[6, 30, 58, 86, 114, 142, 170]
					],
						n = 1335,
						i = 7973,
						u = 21522,
						f = {},
						c = function(r) {
							for (var t = 0; 0 != r;) t += 1, r >>>= 1;
							return t
						};
					return f.getBCHTypeInfo = function(r) {
						for (var t = r << 10; c(t) - c(n) >= 0;) t ^= n << c(t) - c(n);
						return (r << 10 | t) ^ u
					}, f.getBCHTypeNumber = function(r) {
						for (var t = r << 12; c(t) - c(i) >= 0;) t ^= i << c(t) - c(i);
						return r << 12 | t
					}, f.getPatternPosition = function(r) {
						return t[r - 1]
					}, f.getMaskFunction = function(r) {
						switch (r) {
						case o.PATTERN000:
							return function(r, t) {
								return (r + t) % 2 == 0
							};
						case o.PATTERN001:
							return function(r, t) {
								return r % 2 == 0
							};
						case o.PATTERN010:
							return function(r, t) {
								return t % 3 == 0
							};
						case o.PATTERN011:
							return function(r, t) {
								return (r + t) % 3 == 0
							};
						case o.PATTERN100:
							return function(r, t) {
								return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0
							};
						case o.PATTERN101:
							return function(r, t) {
								return r * t % 2 + r * t % 3 == 0
							};
						case o.PATTERN110:
							return function(r, t) {
								return (r * t % 2 + r * t % 3) % 2 == 0
							};
						case o.PATTERN111:
							return function(r, t) {
								return (r * t % 3 + (r + t) % 2) % 2 == 0
							};
						default:
							throw new Error("bad maskPattern:" + r)
						}
					}, f.getErrorCorrectPolynomial = function(t) {
						for (var e = r([1], 0), n = 0; t > n; n += 1) e = e.multiply(r([1, a.gexp(n)], 0));
						return e
					}, f.getLengthInBits = function(r, t) {
						if (t >= 1 && 10 > t) switch (r) {
						case e.MODE_NUMBER:
							return 10;
						case e.MODE_ALPHA_NUM:
							return 9;
						case e.MODE_8BIT_BYTE:
							return 8;
						case e.MODE_KANJI:
							return 8;
						default:
							throw new Error("mode:" + r)
						} else if (27 > t) switch (r) {
						case e.MODE_NUMBER:
							return 12;
						case e.MODE_ALPHA_NUM:
							return 11;
						case e.MODE_8BIT_BYTE:
							return 16;
						case e.MODE_KANJI:
							return 10;
						default:
							throw new Error("mode:" + r)
						} else {
							if (!(41 > t)) throw new Error("type:" + t);
							switch (r) {
							case e.MODE_NUMBER:
								return 14;
							case e.MODE_ALPHA_NUM:
								return 13;
							case e.MODE_8BIT_BYTE:
								return 16;
							case e.MODE_KANJI:
								return 12;
							default:
								throw new Error("mode:" + r)
							}
						}
					}, f.getLostPoint = function(r) {
						for (var t = r.getModuleCount(), e = 0, n = 0; t > n; n += 1) for (var o = 0; t > o; o += 1) {
							for (var i = 0, a = r.isDark(n, o), u = -1; 1 >= u; u += 1) if (!(0 > n + u || n + u >= t)) for (var f = -1; 1 >= f; f += 1) 0 > o + f || o + f >= t || (0 != u || 0 != f) && a == r.isDark(n + u, o + f) && (i += 1);
							i > 5 && (e += 3 + i - 5)
						}
						for (var n = 0; t - 1 > n; n += 1) for (var o = 0; t - 1 > o; o += 1) {
							var c = 0;
							r.isDark(n, o) && (c += 1), r.isDark(n + 1, o) && (c += 1), r.isDark(n, o + 1) && (c += 1), r.isDark(n + 1, o + 1) && (c += 1), (0 == c || 4 == c) && (e += 3)
						}
						for (var n = 0; t > n; n += 1) for (var o = 0; t - 6 > o; o += 1) r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
						for (var o = 0; t > o; o += 1) for (var n = 0; t - 6 > n; n += 1) r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
						for (var s = 0, o = 0; t > o; o += 1) for (var n = 0; t > n; n += 1) r.isDark(n, o) && (s += 1);
						var l = Math.abs(100 * s / t / t - 50) / 5;
						return e += 10 * l
					}, f
				}(),
				a = function() {
					for (var r = new Array(256), t = new Array(256), e = 0; 8 > e; e += 1) r[e] = 1 << e;
					for (var e = 8; 256 > e; e += 1) r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
					for (var e = 0; 255 > e; e += 1) t[r[e]] = e;
					var n = {};
					return n.glog = function(r) {
						if (1 > r) throw new Error("glog(" + r + ")");
						return t[r]
					}, n.gexp = function(t) {
						for (; 0 > t;) t += 255;
						for (; t >= 256;) t -= 255;
						return r[t]
					}, n
				}(),
				u = function() {
					var r = [
						[1, 26, 19],
						[1, 26, 16],
						[1, 26, 13],
						[1, 26, 9],
						[1, 44, 34],
						[1, 44, 28],
						[1, 44, 22],
						[1, 44, 16],
						[1, 70, 55],
						[1, 70, 44],
						[2, 35, 17],
						[2, 35, 13],
						[1, 100, 80],
						[2, 50, 32],
						[2, 50, 24],
						[4, 25, 9],
						[1, 134, 108],
						[2, 67, 43],
						[2, 33, 15, 2, 34, 16],
						[2, 33, 11, 2, 34, 12],
						[2, 86, 68],
						[4, 43, 27],
						[4, 43, 19],
						[4, 43, 15],
						[2, 98, 78],
						[4, 49, 31],
						[2, 32, 14, 4, 33, 15],
						[4, 39, 13, 1, 40, 14],
						[2, 121, 97],
						[2, 60, 38, 2, 61, 39],
						[4, 40, 18, 2, 41, 19],
						[4, 40, 14, 2, 41, 15],
						[2, 146, 116],
						[3, 58, 36, 2, 59, 37],
						[4, 36, 16, 4, 37, 17],
						[4, 36, 12, 4, 37, 13],
						[2, 86, 68, 2, 87, 69],
						[4, 69, 43, 1, 70, 44],
						[6, 43, 19, 2, 44, 20],
						[6, 43, 15, 2, 44, 16],
						[4, 101, 81],
						[1, 80, 50, 4, 81, 51],
						[4, 50, 22, 4, 51, 23],
						[3, 36, 12, 8, 37, 13],
						[2, 116, 92, 2, 117, 93],
						[6, 58, 36, 2, 59, 37],
						[4, 46, 20, 6, 47, 21],
						[7, 42, 14, 4, 43, 15],
						[4, 133, 107],
						[8, 59, 37, 1, 60, 38],
						[8, 44, 20, 4, 45, 21],
						[12, 33, 11, 4, 34, 12],
						[3, 145, 115, 1, 146, 116],
						[4, 64, 40, 5, 65, 41],
						[11, 36, 16, 5, 37, 17],
						[11, 36, 12, 5, 37, 13],
						[5, 109, 87, 1, 110, 88],
						[5, 65, 41, 5, 66, 42],
						[5, 54, 24, 7, 55, 25],
						[11, 36, 12, 7, 37, 13],
						[5, 122, 98, 1, 123, 99],
						[7, 73, 45, 3, 74, 46],
						[15, 43, 19, 2, 44, 20],
						[3, 45, 15, 13, 46, 16],
						[1, 135, 107, 5, 136, 108],
						[10, 74, 46, 1, 75, 47],
						[1, 50, 22, 15, 51, 23],
						[2, 42, 14, 17, 43, 15],
						[5, 150, 120, 1, 151, 121],
						[9, 69, 43, 4, 70, 44],
						[17, 50, 22, 1, 51, 23],
						[2, 42, 14, 19, 43, 15],
						[3, 141, 113, 4, 142, 114],
						[3, 70, 44, 11, 71, 45],
						[17, 47, 21, 4, 48, 22],
						[9, 39, 13, 16, 40, 14],
						[3, 135, 107, 5, 136, 108],
						[3, 67, 41, 13, 68, 42],
						[15, 54, 24, 5, 55, 25],
						[15, 43, 15, 10, 44, 16],
						[4, 144, 116, 4, 145, 117],
						[17, 68, 42],
						[17, 50, 22, 6, 51, 23],
						[19, 46, 16, 6, 47, 17],
						[2, 139, 111, 7, 140, 112],
						[17, 74, 46],
						[7, 54, 24, 16, 55, 25],
						[34, 37, 13],
						[4, 151, 121, 5, 152, 122],
						[4, 75, 47, 14, 76, 48],
						[11, 54, 24, 14, 55, 25],
						[16, 45, 15, 14, 46, 16],
						[6, 147, 117, 4, 148, 118],
						[6, 73, 45, 14, 74, 46],
						[11, 54, 24, 16, 55, 25],
						[30, 46, 16, 2, 47, 17],
						[8, 132, 106, 4, 133, 107],
						[8, 75, 47, 13, 76, 48],
						[7, 54, 24, 22, 55, 25],
						[22, 45, 15, 13, 46, 16],
						[10, 142, 114, 2, 143, 115],
						[19, 74, 46, 4, 75, 47],
						[28, 50, 22, 6, 51, 23],
						[33, 46, 16, 4, 47, 17],
						[8, 152, 122, 4, 153, 123],
						[22, 73, 45, 3, 74, 46],
						[8, 53, 23, 26, 54, 24],
						[12, 45, 15, 28, 46, 16],
						[3, 147, 117, 10, 148, 118],
						[3, 73, 45, 23, 74, 46],
						[4, 54, 24, 31, 55, 25],
						[11, 45, 15, 31, 46, 16],
						[7, 146, 116, 7, 147, 117],
						[21, 73, 45, 7, 74, 46],
						[1, 53, 23, 37, 54, 24],
						[19, 45, 15, 26, 46, 16],
						[5, 145, 115, 10, 146, 116],
						[19, 75, 47, 10, 76, 48],
						[15, 54, 24, 25, 55, 25],
						[23, 45, 15, 25, 46, 16],
						[13, 145, 115, 3, 146, 116],
						[2, 74, 46, 29, 75, 47],
						[42, 54, 24, 1, 55, 25],
						[23, 45, 15, 28, 46, 16],
						[17, 145, 115],
						[10, 74, 46, 23, 75, 47],
						[10, 54, 24, 35, 55, 25],
						[19, 45, 15, 35, 46, 16],
						[17, 145, 115, 1, 146, 116],
						[14, 74, 46, 21, 75, 47],
						[29, 54, 24, 19, 55, 25],
						[11, 45, 15, 46, 46, 16],
						[13, 145, 115, 6, 146, 116],
						[14, 74, 46, 23, 75, 47],
						[44, 54, 24, 7, 55, 25],
						[59, 46, 16, 1, 47, 17],
						[12, 151, 121, 7, 152, 122],
						[12, 75, 47, 26, 76, 48],
						[39, 54, 24, 14, 55, 25],
						[22, 45, 15, 41, 46, 16],
						[6, 151, 121, 14, 152, 122],
						[6, 75, 47, 34, 76, 48],
						[46, 54, 24, 10, 55, 25],
						[2, 45, 15, 64, 46, 16],
						[17, 152, 122, 4, 153, 123],
						[29, 74, 46, 14, 75, 47],
						[49, 54, 24, 10, 55, 25],
						[24, 45, 15, 46, 46, 16],
						[4, 152, 122, 18, 153, 123],
						[13, 74, 46, 32, 75, 47],
						[48, 54, 24, 14, 55, 25],
						[42, 45, 15, 32, 46, 16],
						[20, 147, 117, 4, 148, 118],
						[40, 75, 47, 7, 76, 48],
						[43, 54, 24, 22, 55, 25],
						[10, 45, 15, 67, 46, 16],
						[19, 148, 118, 6, 149, 119],
						[18, 75, 47, 31, 76, 48],
						[34, 54, 24, 34, 55, 25],
						[20, 45, 15, 61, 46, 16]
					],
						t = function(r, t) {
							var e = {};
							return e.totalCount = r, e.dataCount = t, e
						},
						e = {},
						o = function(t, e) {
							switch (e) {
							case n.L:
								return r[4 * (t - 1) + 0];
							case n.M:
								return r[4 * (t - 1) + 1];
							case n.Q:
								return r[4 * (t - 1) + 2];
							case n.H:
								return r[4 * (t - 1) + 3];
							default:
								return
							}
						};
					return e.getRSBlocks = function(r, e) {
						var n = o(r, e);
						if ("undefined" == typeof n) throw new Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + e);
						for (var i = n.length / 3, a = new Array, u = 0; i > u; u += 1) for (var f = n[3 * u + 0], c = n[3 * u + 1], s = n[3 * u + 2], l = 0; f > l; l += 1) a.push(t(c, s));
						return a
					}, e
				}(),
				f = function() {
					var r = new Array,
						t = 0,
						e = {};
					return e.getBuffer = function() {
						return r
					}, e.getAt = function(t) {
						var e = Math.floor(t / 8);
						return 1 == (r[e] >>> 7 - t % 8 & 1)
					}, e.put = function(r, t) {
						for (var n = 0; t > n; n += 1) e.putBit(1 == (r >>> t - n - 1 & 1))
					}, e.getLengthInBits = function() {
						return t
					}, e.putBit = function(e) {
						var n = Math.floor(t / 8);
						r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1
					}, e
				},
				c = function(r) {
					var n = e.MODE_8BIT_BYTE,
						o = t.stringToBytes(r),
						i = {};
					return i.getMode = function() {
						return n
					}, i.getLength = function(r) {
						return o.length
					}, i.write = function(r) {
						for (var t = 0; t < o.length; t += 1) r.put(o[t], 8)
					}, i
				},
				s = function() {
					var r = new Array,
						t = {};
					return t.writeByte = function(t) {
						r.push(255 & t)
					}, t.writeShort = function(r) {
						t.writeByte(r), t.writeByte(r >>> 8)
					}, t.writeBytes = function(r, e, n) {
						e = e || 0, n = n || r.length;
						for (var o = 0; n > o; o += 1) t.writeByte(r[o + e])
					}, t.writeString = function(r) {
						for (var e = 0; e < r.length; e += 1) t.writeByte(r.charCodeAt(e))
					}, t.toByteArray = function() {
						return r
					}, t.toString = function() {
						var t = "";
						t += "[";
						for (var e = 0; e < r.length; e += 1) e > 0 && (t += ","), t += r[e];
						return t += "]"
					}, t
				},
				l = function() {
					var r = 0,
						t = 0,
						e = 0,
						n = "",
						o = {},
						i = function(r) {
							n += String.fromCharCode(a(63 & r))
						},
						a = function(r) {
							if (0 > r);
							else {
								if (26 > r) return 65 + r;
								if (52 > r) return 97 + (r - 26);
								if (62 > r) return 48 + (r - 52);
								if (62 == r) return 43;
								if (63 == r) return 47
							}
							throw new Error("n:" + r)
						};
					return o.writeByte = function(n) {
						for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;) i(r >>> t - 6), t -= 6
					}, o.flush = function() {
						if (t > 0 && (i(r << 6 - t), r = 0, t = 0), e % 3 != 0) for (var o = 3 - e % 3, a = 0; o > a; a += 1) n += "="
					}, o.toString = function() {
						return n
					}, o
				},
				h = function(r) {
					var t = r,
						e = 0,
						n = 0,
						o = 0,
						i = {};
					i.read = function() {
						for (; 8 > o;) {
							if (e >= t.length) {
								if (0 == o) return -1;
								throw new Error("unexpected end of file./" + o)
							}
							var r = t.charAt(e);
							if (e += 1, "=" == r) return o = 0, -1;
							r.match(/^\s$/) || (n = n << 6 | a(r.charCodeAt(0)), o += 6)
						}
						var i = n >>> o - 8 & 255;
						return o -= 8, i
					};
					var a = function(r) {
							if (r >= 65 && 90 >= r) return r - 65;
							if (r >= 97 && 122 >= r) return r - 97 + 26;
							if (r >= 48 && 57 >= r) return r - 48 + 52;
							if (43 == r) return 62;
							if (47 == r) return 63;
							throw new Error("c:" + r)
						};
					return i
				},
				d = function(r, t) {
					var e = r,
						n = t,
						o = new Array(r * t),
						i = {};
					i.setPixel = function(r, t, n) {
						o[t * e + r] = n
					}, i.write = function(r) {
						r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(e), r.writeShort(n), r.writeByte(0);
						var t = 2,
							o = u(t);
						r.writeByte(t);
						for (var i = 0; o.length - i > 255;) r.writeByte(255), r.writeBytes(o, i, 255), i += 255;
						r.writeByte(o.length - i), r.writeBytes(o, i, o.length - i), r.writeByte(0), r.writeString(";")
					};
					var a = function(r) {
							var t = r,
								e = 0,
								n = 0,
								o = {};
							return o.write = function(r, o) {
								if (r >>> o != 0) throw new Error("length over");
								for (; e + o >= 8;) t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, e = 0;
								n = r << e | n, e += o
							}, o.flush = function() {
								e > 0 && t.writeByte(n)
							}, o
						},
						u = function(r) {
							for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, i = f(), u = 0; t > u; u += 1) i.add(String.fromCharCode(u));
							i.add(String.fromCharCode(t)), i.add(String.fromCharCode(e));
							var c = s(),
								l = a(c);
							l.write(t, n);
							var h = 0,
								d = String.fromCharCode(o[h]);
							for (h += 1; h < o.length;) {
								var g = String.fromCharCode(o[h]);
								h += 1, i.contains(d + g) ? d += g : (l.write(i.indexOf(d), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(d + g)), d = g)
							}
							return l.write(i.indexOf(d), n), l.write(e, n), l.flush(), c.toByteArray()
						},
						f = function() {
							var r = {},
								t = 0,
								e = {};
							return e.add = function(n) {
								if (e.contains(n)) throw new Error("dup key:" + n);
								r[n] = t, t += 1
							}, e.size = function() {
								return t
							}, e.indexOf = function(t) {
								return r[t]
							}, e.contains = function(t) {
								return "undefined" != typeof r[t]
							}, e
						};
					return i
				},
				g = function(r, t, e, n) {
					for (var o = d(r, t), i = 0; t > i; i += 1) for (var a = 0; r > a; a += 1) o.setPixel(a, i, e(a, i));
					var u = s();
					o.write(u);
					for (var f = l(), c = u.toByteArray(), h = 0; h < c.length; h += 1) f.writeByte(c[h]);
					f.flush();
					var g = "";
					return g += "<img", g += ' src="', g += "data:image/gif;base64,", g += f, g += '"', g += ' width="', g += r, g += '"', g += ' height="', g += t, g += '"', n && (g += ' alt="', g += n, g += '"'), g += "/>"
				};
			return t
		}();
	return function(r) {
		"function" == typeof define && define.amd ? define([], r) : "object" == typeof exports && (module.exports = r())
	}(function() {
		return r
	}), !
	function(r) {
		r.stringToBytes = function(r) {
			function t(r) {
				for (var t = [], e = 0; e < r.length; e++) {
					var n = r.charCodeAt(e);
					128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(e)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
				}
				return t
			}
			return t(r)
		}
	}(r), r
}()), function(r) {
	r.fn.share = function(t) {
		function e(t, e) {
			var n = o(e);
			"prepend" == e.mode ? n.reverse() : n, n.length && r.each(n, function(n, o) {
				var a = i(o, e),
					u = e.initialized ? t.find(".icon-" + o) : r('<a class="social-share-icon icon-' + o + '"></a>');
				return u.length ? (u.prop("aria-label", "分享到 " + h[o]), u.prop("href", a), "wechat" === o ? u.prop("tabindex", -1) : u.prop("target", "_blank"), void(e.initialized || ("prepend" == e.mode ? t.prepend(u) : t.append(u)))) : !0
			})
		}
		function n(r, t) {
			var e = r.find("a.icon-wechat");
			e.length && (e.append('<div class="wechat-qrcode"><h4>' + t.wechatQrcodeTitle + '</h4><div class="qrcode"></div><div class="help">' + t.wechatQrcodeHelper + "</div></div>"), e.find(".qrcode").qrcode({
				render: "image",
				size: t.wechatQrcodeSize,
				text: t.url
			}), e.offset().top < 100 && e.find(".wechat-qrcode").addClass("bottom"))
		}
		function o(t) {
			0 === t.mobileSites.length && t.sites.length && (t.mobileSites = t.sites);
			var e = (u() ? t.mobileSites : t.sites.length ? t.sites : []).slice(0),
				n = t.disabled;
			return "string" == typeof e && (e = e.split(/\s*,\s*/)), "string" == typeof n && (n = n.split(/\s*,\s*/)), a() && n.push("wechat"), n.length && r.each(n, function(t, n) {
				var o = r.inArray(n, e); - 1 !== o && e.splice(o, 1)
			}), e
		}
		function i(r, t) {
			var e = l[r];
			t.summary = t.description;
			for (var n in t) if (t.hasOwnProperty(n)) {
				var o = r + n.replace(/^[a-z]/, function(r) {
					return r.toUpperCase()
				}),
					i = encodeURIComponent(void 0 === t[o] ? t[n] : t[o]);
				e = e.replace(new RegExp("{{" + n.toUpperCase() + "}}", "g"), i)
			}
			return e
		}
		function a() {
			return /MicroMessenger/i.test(navigator.userAgent)
		}
		function u() {
			return r(window).width() <= 768
		}
		var f = r(document.head),
			c = {
				url: location.href,
				site_url: location.origin,
				source: f.find("[name=site], [name=Site]").attr("content") || document.title,
				title: f.find("[name=title], [name=Title]").attr("content") || document.title,
				description: f.find("[name=description], [name=Description]").attr("content") || "",
				image: r("img:first").prop("src") || "",
				imageSelector: void 0,
				weiboKey: "",
				wechatQrcodeTitle: "微信扫一扫：分享",
				wechatQrcodeHelper: "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",
				wechatQrcodeSize: 100,
				mobileSites: [],
				sites: ["weibo", "qq", "wechat", "tencent", "douban", "qzone", "linkedin", "diandian", "facebook", "twitter", "google"],
				disabled: [],
				initialized: !1
			},
			s = r.extend({}, c, t),
			l = {
				qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",
				qq: "http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",
				tencent: "http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",
				weibo: "http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",
				wechat: "javascript:;",
				douban: "http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",
				diandian: "http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",
				linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",
				facebook: "https://www.facebook.com/sharer/sharer.php?u={{URL}}",
				twitter: "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{SITE_URL}}",
				google: "https://plus.google.com/share?url={{URL}}"
			},
			h = {
				qzone: "QQ空间",
				qq: "QQ",
				tencent: "腾讯微博",
				weibo: "微博",
				wechat: "微信",
				douban: "豆瓣",
				diandian: "点点",
				linkedin: "LinkedIn",
				facebook: "Facebook",
				twitter: "Twitter",
				google: "Google"
			};
		this.each(function() {
			if (r(this).data("initialized")) return !0;
			var t = r.extend({}, s, r(this).data());
			t.imageSelector && (t.image = r(t.imageSelector).map(function() {
				return r(this).prop("src")
			}).get().join("||"));
			var o = r(this).addClass("share-component social-share");
			e(o, t), n(o, t), r(this).data("initialized", !0)
		})
	}, r(function() {
		r(".share-component,.social-share").share()
	})
}(jQuery);
/*
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function() {
	function t(e, t) {
		return [].slice.call((t || document).querySelectorAll(e))
	}
	if (!window.addEventListener) return;
	var e = window.StyleFix = {
		link: function(t) {
			try {
				if (t.rel !== "stylesheet" || t.hasAttribute("data-noprefix")) return
			} catch (n) {
				return
			}
			var r = t.href || t.getAttribute("data-href"),
				i = r.replace(/[^\/]+$/, ""),
				s = t.parentNode,
				o = new XMLHttpRequest,
				u;
			o.onreadystatechange = function() {
				o.readyState === 4 && u()
			};
			u = function() {
				var n = o.responseText;
				if (n && t.parentNode && (!o.status || o.status < 400 || o.status > 600)) {
					n = e.fix(n, !0, t);
					if (i) {
						n = n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function(e, t, n) {
							return /^([a-z]{3,10}:|\/|#)/i.test(n) ? e : 'url("' + i + n + '")'
						});
						var r = i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
						n = n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + r, "gi"), "$1")
					}
					var u = document.createElement("style");
					u.textContent = n;
					u.media = t.media;
					u.disabled = t.disabled;
					u.setAttribute("data-href", t.getAttribute("href"));
					s.insertBefore(u, t);
					s.removeChild(t);
					u.media = t.media
				}
			};
			try {
				o.open("GET", r);
				o.send(null)
			} catch (n) {
				if (typeof XDomainRequest != "undefined") {
					o = new XDomainRequest;
					o.onerror = o.onprogress = function() {};
					o.onload = u;
					o.open("GET", r);
					o.send(null)
				}
			}
			t.setAttribute("data-inprogress", "")
		},
		styleElement: function(t) {
			if (t.hasAttribute("data-noprefix")) return;
			var n = t.disabled;
			t.textContent = e.fix(t.textContent, !0, t);
			t.disabled = n
		},
		styleAttribute: function(t) {
			var n = t.getAttribute("style");
			n = e.fix(n, !1, t);
			t.setAttribute("style", n)
		},
		process: function() {
			t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);
			t("style").forEach(StyleFix.styleElement);
			t("[style]").forEach(StyleFix.styleAttribute)
		},
		register: function(t, n) {
			(e.fixers = e.fixers || []).splice(n === undefined ? e.fixers.length : n, 0, t)
		},
		fix: function(t, n, r) {
			for (var i = 0; i < e.fixers.length; i++) t = e.fixers[i](t, n, r) || t;
			return t
		},
		camelCase: function(e) {
			return e.replace(/-([a-z])/g, function(e, t) {
				return t.toUpperCase()
			}).replace("-", "")
		},
		deCamelCase: function(e) {
			return e.replace(/[A-Z]/g, function(e) {
				return "-" + e.toLowerCase()
			})
		}
	};
	(function() {
		setTimeout(function() {
			t('link[rel="stylesheet"]').forEach(StyleFix.link)
		}, 10);
		document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
	})()
})();
(function(e) {
	function t(e, t, r, i, s) {
		e = n[e];
		if (e.length) {
			var o = RegExp(t + "(" + e.join("|") + ")" + r, "gi");
			s = s.replace(o, i)
		}
		return s
	}
	if (!window.StyleFix || !window.getComputedStyle) return;
	var n = window.PrefixFree = {
		prefixCSS: function(e, r, i) {
			var s = n.prefix;
			n.functions.indexOf("linear-gradient") > -1 && (e = e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function(e, t, n, r) {
				return t + (n || "") + "linear-gradient(" + (90 - r) + "deg"
			}));
			e = t("functions", "(\\s|:|,)", "\\s*\\(", "$1" + s + "$2(", e);
			e = t("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + s + "$2$3", e);
			e = t("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + s + "$2:", e);
			if (n.properties.length) {
				var o = RegExp("\\b(" + n.properties.join("|") + ")(?!:)", "gi");
				e = t("valueProperties", "\\b", ":(.+?);", function(e) {
					return e.replace(o, s + "$1")
				}, e)
			}
			if (r) {
				e = t("selectors", "", "\\b", n.prefixSelector, e);
				e = t("atrules", "@", "\\b", "@" + s + "$1", e)
			}
			e = e.replace(RegExp("-" + s, "g"), "-");
			e = e.replace(/-\*-(?=[a-z]+)/gi, n.prefix);
			return e
		},
		property: function(e) {
			return (n.properties.indexOf(e) ? n.prefix : "") + e
		},
		value: function(e, r) {
			e = t("functions", "(^|\\s|,)", "\\s*\\(", "$1" + n.prefix + "$2(", e);
			e = t("keywords", "(^|\\s)", "(\\s|$)", "$1" + n.prefix + "$2$3", e);
			return e
		},
		prefixSelector: function(e) {
			return e.replace(/^:{1,2}/, function(e) {
				return e + n.prefix
			})
		},
		prefixProperty: function(e, t) {
			var r = n.prefix + e;
			return t ? StyleFix.camelCase(r) : r
		}
	};
	(function() {
		var e = {},
			t = [],
			r = {},
			i = getComputedStyle(document.documentElement, null),
			s = document.createElement("div").style,
			o = function(n) {
				if (n.charAt(0) === "-") {
					t.push(n);
					var r = n.split("-"),
						i = r[1];
					e[i] = ++e[i] || 1;
					while (r.length > 3) {
						r.pop();
						var s = r.join("-");
						u(s) && t.indexOf(s) === -1 && t.push(s)
					}
				}
			},
			u = function(e) {
				return StyleFix.camelCase(e) in s
			};
		if (i.length > 0) for (var a = 0; a < i.length; a++) o(i[a]);
		else for (var f in i) o(StyleFix.deCamelCase(f));
		var l = {
			uses: 0
		};
		for (var c in e) {
			var h = e[c];
			l.uses < h && (l = {
				prefix: c,
				uses: h
			})
		}
		n.prefix = "-" + l.prefix + "-";
		n.Prefix = StyleFix.camelCase(n.prefix);
		n.properties = [];
		for (var a = 0; a < t.length; a++) {
			var f = t[a];
			if (f.indexOf(n.prefix) === 0) {
				var p = f.slice(n.prefix.length);
				u(p) || n.properties.push(p)
			}
		}
		n.Prefix == "Ms" && !("transform" in s) && !("MsTransform" in s) && "msTransform" in s && n.properties.push("transform", "transform-origin");
		n.properties.sort()
	})();
	(function() {
		function i(e, t) {
			r[t] = "";
			r[t] = e;
			return !!r[t]
		}
		var e = {
			"linear-gradient": {
				property: "backgroundImage",
				params: "red, teal"
			},
			calc: {
				property: "width",
				params: "1px + 5%"
			},
			element: {
				property: "backgroundImage",
				params: "#foo"
			},
			"cross-fade": {
				property: "backgroundImage",
				params: "url(a.png), url(b.png), 50%"
			}
		};
		e["repeating-linear-gradient"] = e["repeating-radial-gradient"] = e["radial-gradient"] = e["linear-gradient"];
		var t = {
			initial: "color",
			"zoom-in": "cursor",
			"zoom-out": "cursor",
			box: "display",
			flexbox: "display",
			"inline-flexbox": "display",
			flex: "display",
			"inline-flex": "display"
		};
		n.functions = [];
		n.keywords = [];
		var r = document.createElement("div").style;
		for (var s in e) {
			var o = e[s],
				u = o.property,
				a = s + "(" + o.params + ")";
			!i(a, u) && i(n.prefix + a, u) && n.functions.push(s)
		}
		for (var f in t) {
			var u = t[f];
			!i(f, u) && i(n.prefix + f, u) && n.keywords.push(f)
		}
	})();
	(function() {
		function s(e) {
			i.textContent = e + "{}";
			return !!i.sheet.cssRules.length
		}
		var t = {
			":read-only": null,
			":read-write": null,
			":any-link": null,
			"::selection": null
		},
			r = {
				keyframes: "name",
				viewport: null,
				document: 'regexp(".")'
			};
		n.selectors = [];
		n.atrules = [];
		var i = e.appendChild(document.createElement("style"));
		for (var o in t) {
			var u = o + (t[o] ? "(" + t[o] + ")" : "");
			!s(u) && s(n.prefixSelector(u)) && n.selectors.push(o)
		}
		for (var a in r) {
			var u = a + " " + (r[a] || "");
			!s("@" + u) && s("@" + n.prefix + u) && n.atrules.push(a)
		}
		e.removeChild(i)
	})();
	n.valueProperties = ["transition", "transition-property"];
	e.className += " " + n.prefix;
	StyleFix.register(n.prefixCSS)
})(document.documentElement);
/*
    jquery pin
 */
(function(e) {
	"use strict";
	e.fn.pin = function(t) {
		var n = 0,
			r = [],
			i = !1;
		t = t || {};
		var s = function() {
				for (var n = 0, s = r.length; n < s; n++) {
					var o = r[n];
					if (t.minWidth && e(window).width() <= t.minWidth) {
						o.parent().is(".pin-wrapper") && o.unwrap(), o.css({
							width: "",
							left: "",
							top: "",
							position: ""
						}), i = !0;
						continue
					}
					i = !1;
					var u = t.containerSelector ? o.closest(t.containerSelector) : e(document.body),
						a = o.offset(),
						f = u.offset(),
						l = o.offsetParent().offset();
					o.parent().is(".pin-wrapper") || o.wrap("<div class='pin-wrapper'>"), o.data("pin", {
						from: t.containerSelector ? f.top : a.top,
						to: f.top + u.height() - o.outerHeight(),
						end: f.top + u.height(),
						parentTop: l.top
					}), o.css({
						width: o.outerWidth()
					}), o.parent().css("height", o.outerHeight())
				}
			},
			o = function() {
				if (i) return;
				n = window.scrollY;
				for (var t = 0, s = r.length; t < s; t++) {
					var o = e(r[t]),
						u = o.data("pin"),
						a = u.from,
						f = u.to;
					if (a + o.outerHeight() > u.end) {
						o.css("position", "");
						continue
					}
					a < n && f > n ? o.css("position") != "fixed" && o.css({
						left: o.offset().left,
						top: 0
					}).css("position", "fixed") : n >= f ? o.css({
						left: "auto",
						top: f - u.parentTop
					}).css("position", "absolute") : o.css({
						position: "",
						top: "",
						left: ""
					})
				}
			},
			u = function() {
				s(), o()
			};
		return this.each(function() {
			var t = e(this),
				n = e(this).data("pin") || {};
			if (n && n.update) return;
			r.push(t), e("img", this).one("load", s), n.update = u, e(this).data("pin", n)
		}), e(window).scroll(o), e(window).resize(function() {
			s()
		}), s(), e(window).load(u), this
	}
})(jQuery);