function humaneDate(t, e) {
    function i(t, e) {
        var i = .1;
        return t >= e && e * (1 + i) >= t ? e : t
    }
    if (t) {
        var n, r = {
                ago: "Ago",
                from: "",
                now: "Just Now",
                minute: "Minute",
                minutes: "Minutes",
                hour: "Hour",
                hours: "Hours",
                day: "Day",
                days: "Days",
                week: "Week",
                weeks: "Weeks",
                month: "Month",
                months: "Months",
                year: "Year",
                years: "Years"
            },
            s = [
                [60, r.now],
                [3600, r.minute, r.minutes, 60],
                [86400, r.hour, r.hours, 3600],
                [604800, r.day, r.days, 86400],
                [2628e3, r.week, r.weeks, 604800],
                [31536e3, r.month, r.months, 2628e3],
                [1 / 0, r.year, r.years, 31536e3]
            ],
            a = "string" == typeof t,
            t = a ? new Date(("" + t).replace(/-/g, "/").replace(/[TZ]/g, " ")) : t,
            e = e || new Date,
            o = (e - t + 6e4 * (e.getTimezoneOffset() - (a ? 0 : t.getTimezoneOffset()))) / 1e3;
        0 > o ? (o = Math.abs(o), n = r.from ? " " + r.from : "") : n = r.ago ? " " + r.ago : "";
        for (var l = 0, u = s[0]; s[l]; u = s[++l])
            if (o < u[0]) {
                if (0 === l) return u[1];
                var c = Math.ceil(i(o, u[3]) / u[3]);
                return c + " " + (1 != c ? u[2] : u[1]) + (l > 0 ? n : "")
            }
    }
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = Z.type(t);
        return "function" === i || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return Z.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (ot.test(e)) return Z.filter(e, t, i);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) {
            return Q.call(e, t) >= 0 !== i
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = ft[t] = {};
        return Z.each(t.match(pt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function a() {
        X.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), Z.ready()
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + o.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(_t, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : bt.test(i) ? Z.parseJSON(i) : i
                } catch (r) {}
                yt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function d() {
        try {
            return X.activeElement
        } catch (t) {}
    }

    function h(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = Mt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
    }

    function g(t, e) {
        var i, n, r, s, a, o, l, u;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (s = vt.access(t), a = vt.set(e, s), u = s.events)) {
                delete a.handle, a.events = {};
                for (r in u)
                    for (i = 0, n = u[r].length; n > i; i++) Z.event.add(e, r, u[r][i])
            }
            yt.hasData(t) && (o = yt.access(t), l = Z.extend({}, o), yt.set(e, l))
        }
    }

    function v(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], i) : i
    }

    function y(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Ct.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function b(e, i) {
        var n, r = Z(i.createElement(e)).appendTo(i.body),
            s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : Z.css(r[0], "display");
        return r.detach(), s
    }

    function _(t) {
        var e = X,
            i = Ft[t];
        return i || (i = b(t, e), "none" !== i && i || (qt = (qt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qt[0].contentDocument, e.write(), e.close(), i = b(t, e), qt.detach()), Ft[t] = i), i
    }

    function w(t, e, i) {
        var n, r, s, a, o = t.style;
        return i = i || Bt(t), i && (a = i.getPropertyValue(e) || i[e]), i && ("" !== a || Z.contains(t.ownerDocument, t) || (a = Z.style(t, e)), Vt.test(a) && Ht.test(e) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
    }

    function k(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function x(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Jt.length; r--;)
            if (e = Jt[r] + i, e in t) return e;
        return n
    }

    function C(t, e, i) {
        var n = zt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function S(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === i && (a += Z.css(t, i + kt[s], !0, r)), n ? ("content" === i && (a -= Z.css(t, "padding" + kt[s], !0, r)), "margin" !== i && (a -= Z.css(t, "border" + kt[s] + "Width", !0, r))) : (a += Z.css(t, "padding" + kt[s], !0, r), "padding" !== i && (a += Z.css(t, "border" + kt[s] + "Width", !0, r)));
        return a
    }

    function T(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = Bt(t),
            a = "border-box" === Z.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = w(t, e, s), (0 > r || null == r) && (r = t.style[e]), Vt.test(r)) return r;
            n = a && (Y.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + S(t, e, i || (a ? "border" : "content"), n, s) + "px"
    }

    function j(t, e) {
        for (var i, n, r, s = [], a = 0, o = t.length; o > a; a++) n = t[a], n.style && (s[a] = vt.get(n, "olddisplay"), i = n.style.display, e ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && xt(n) && (s[a] = vt.access(n, "olddisplay", _(n.nodeName)))) : (r = xt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : Z.css(n, "display"))));
        for (a = 0; o > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[a] || "" : "none"));
        return t
    }

    function E(t, e, i, n, r) {
        return new E.prototype.init(t, e, i, n, r)
    }

    function I() {
        return setTimeout(function() {
            Yt = void 0
        }), Yt = Z.now()
    }

    function $(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = kt[n], r["margin" + i] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function P(t, e, i) {
        for (var n, r = (ie[e] || []).concat(ie["*"]), s = 0, a = r.length; a > s; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, r, s, a, o, l, u, c, d = this,
            h = {},
            p = t.style,
            f = t.nodeType && xt(t),
            m = vt.get(t, "fxshow");
        i.queue || (o = Z._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
            o.unqueued || l()
        }), o.unqueued++, d.always(function() {
            d.always(function() {
                o.unqueued--, Z.queue(t, "fx").length || o.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = Z.css(t, "display"), c = "none" === u ? vt.get(t, "olddisplay") || _(t.nodeName) : u, "inline" === c && "none" === Z.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], Kt.exec(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    f = !0
                }
                h[n] = m && m[n] || Z.style(t, n)
            } else u = void 0;
        if (Z.isEmptyObject(h)) "inline" === ("none" === u ? _(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = vt.access(t, "fxshow", {}), s && (m.hidden = !f), f ? Z(t).show() : d.done(function() {
                Z(t).hide()
            }), d.done(function() {
                var e;
                vt.remove(t, "fxshow");
                for (e in h) Z.style(t, e, h[e])
            });
            for (n in h) a = P(f ? m[n] : 0, n, d), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function A(t, e) {
        var i, n, r, s, a;
        for (i in t)
            if (n = Z.camelCase(i), r = e[n], s = t[i], Z.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), a = Z.cssHooks[n], a && "expand" in a) {
                s = a.expand(s), delete t[n];
                for (i in s) i in t || (t[i] = s[i], e[i] = r)
            } else e[n] = r
    }

    function D(t, e, i) {
        var n, r, s = 0,
            a = ee.length,
            o = Z.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Yt || I(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(s);
                return o.notifyWith(t, [u, s, i]), 1 > s && l ? i : (o.resolveWith(t, [u]), !1)
            },
            u = o.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Yt || I(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = Z.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? o.resolveWith(t, [u, e]) : o.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (A(c, u.opts.specialEasing); a > s; s++)
            if (n = ee[s].call(u, t, c, u.opts)) return n;
        return Z.map(c, P, u), Z.isFunction(u.opts.start) && u.opts.start.call(t, u), Z.fx.timer(Z.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                s = e.toLowerCase().match(pt) || [];
            if (Z.isFunction(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function M(t, e, i, n) {
        function r(o) {
            var l;
            return s[o] = !0, Z.each(t[o] || [], function(t, o) {
                var u = o(e, i, n);
                return "string" != typeof u || a || s[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            a = t === be;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function N(t, e) {
        var i, n, r = Z.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && Z.extend(!0, t, n), t
    }

    function R(t, e, i) {
        for (var n, r, s, a, o = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (r in o)
                if (o[r] && o[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                a || (a = r)
            }
            s = s || a
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function q(t, e, i, n) {
        var r, s, a, o, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (a = u[l + " " + s] || u["* " + s], !a)
                for (r in u)
                    if (o = r.split(" "), o[1] === s && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (s = o[0], c.unshift(o[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function F(t, e, i, n) {
        var r;
        if (Z.isArray(e)) Z.each(e, function(e, r) {
            i || Ce.test(t) ? n(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== Z.type(e)) n(t, e);
        else
            for (r in e) F(t + "[" + r + "]", e[r], i, n)
    }

    function H(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var V = [],
        B = V.slice,
        U = V.concat,
        z = V.push,
        Q = V.indexOf,
        W = {},
        G = W.toString,
        J = W.hasOwnProperty,
        Y = {},
        X = t.document,
        K = "2.1.3",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(Z.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: z,
        sort: V.sort,
        splice: V.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, i, n, r, s, a = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || Z.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
            if (null != (t = arguments[o]))
                for (e in t) i = a[e], n = t[e], a !== n && (u && n && (Z.isPlainObject(n) || (r = Z.isArray(n))) ? (r ? (r = !1, s = i && Z.isArray(i) ? i : []) : s = i && Z.isPlainObject(i) ? i : {}, a[e] = Z.extend(u, s, n)) : void 0 !== n && (a[e] = n));
        return a
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !J.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? W[G.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = X.createElement("script"), e.text = t, X.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var r, s = 0,
                a = t.length,
                o = i(t);
            if (n) {
                if (o)
                    for (; a > s && (r = e.apply(t[s], n), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.apply(t[s], n), r === !1) break
            } else if (o)
                for (; a > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
            else
                for (s in t)
                    if (r = e.call(t[s], s, t[s]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? Z.merge(n, "string" == typeof t ? [t] : t) : z.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : Q.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n, r = [], s = 0, a = t.length, o = !i; a > s; s++) n = !e(t[s], s), n !== o && r.push(t[s]);
            return r
        },
        map: function(t, e, n) {
            var r, s = 0,
                a = t.length,
                o = i(t),
                l = [];
            if (o)
                for (; a > s; s++) r = e(t[s], s, n), null != r && l.push(r);
            else
                for (s in t) r = e(t[s], s, n), null != r && l.push(r);
            return U.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (i = t[e], e = t, t = i), Z.isFunction(t) ? (n = B.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(B.call(arguments)))
            }, r.guid = t.guid = t.guid || Z.guid++, r) : void 0
        },
        now: Date.now,
        support: Y
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        W["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = function(t) {
        function e(t, e, i, n) {
            var r, s, a, o, l, u, d, p, f, m;
            if ((e ? e.ownerDocument || e : F) !== O && P(e), e = e || O, i = i || [], o = e.nodeType, "string" != typeof t || !t || 1 !== o && 9 !== o && 11 !== o) return i;
            if (!n && D) {
                if (11 !== o && (r = yt.exec(t)))
                    if (a = r[1]) {
                        if (9 === o) {
                            if (s = e.getElementById(a), !s || !s.parentNode) return i;
                            if (s.id === a) return i.push(s), i
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(a)) && R(e, s) && s.id === a) return i.push(s), i
                    } else {
                        if (r[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((a = r[3]) && w.getElementsByClassName) return K.apply(i, e.getElementsByClassName(a)), i
                    }
                if (w.qsa && (!L || !L.test(t))) {
                    if (p = d = q, f = e, m = 1 !== o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                        for (u = S(t), (d = e.getAttribute("id")) ? p = d.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                        f = bt.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return j(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > k.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[q] = !0, t
        }

        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e
        }

        function a(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || W) - (~t.sourceIndex || W);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function o(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, s = t([], i.length, e), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function h(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                r = i && "parentNode" === n,
                s = V++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, s)
            } : function(e, i, a) {
                var o, l, u = [H, s];
                if (a) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, a)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) {
                            if (l = e[q] || (e[q] = {}), (o = l[n]) && o[0] === H && o[1] === s) return u[2] = o[2];
                            if (l[n] = u, u[2] = t(e, i, a)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
            return n
        }

        function g(t, e, i, n, r) {
            for (var s, a = [], o = 0, l = t.length, u = null != e; l > o; o++)(s = t[o]) && (!i || i(s, n, r)) && (a.push(s), u && e.push(o));
            return a
        }

        function v(t, e, i, r, s, a) {
            return r && !r[q] && (r = v(r)), s && !s[q] && (s = v(s, a)), n(function(n, a, o, l) {
                var u, c, d, h = [],
                    p = [],
                    f = a.length,
                    v = n || m(e || "*", o.nodeType ? [o] : o, []),
                    y = !t || !n && e ? v : g(v, h, t, o, l),
                    b = i ? s || (n ? t : f || r) ? [] : a : y;
                if (i && i(y, b, o, l), r)
                    for (u = g(b, p), r(u, [], o, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            s(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = s ? tt(n, d) : h[c]) > -1 && (n[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(f, b.length) : b), s ? s(null, a, b, l) : K.apply(a, b)
            })
        }

        function y(t) {
            for (var e, i, n, r = t.length, s = k.relative[t[0].type], a = s || k.relative[" "], o = s ? 1 : 0, l = p(function(t) {
                    return t === e
                }, a, !0), u = p(function(t) {
                    return tt(e, t) > -1
                }, a, !0), c = [function(t, i, n) {
                    var r = !s && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, r
                }]; r > o; o++)
                if (i = k.relative[t[o].type]) c = [p(f(c), i)];
                else {
                    if (i = k.filter[t[o].type].apply(null, t[o].matches), i[q]) {
                        for (n = ++o; r > n && !k.relative[t[n].type]; n++);
                        return v(o > 1 && f(c), o > 1 && h(t.slice(0, o - 1).concat({
                            value: " " === t[o - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, n > o && y(t.slice(o, n)), r > n && y(t = t.slice(n)), r > n && h(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function b(t, i) {
            var r = i.length > 0,
                s = t.length > 0,
                a = function(n, a, o, l, u) {
                    var c, d, h, p = 0,
                        f = "0",
                        m = n && [],
                        v = [],
                        y = E,
                        b = n || s && k.find.TAG("*", u),
                        _ = H += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (E = a !== O && a); f !== w && null != (c = b[f]); f++) {
                        if (s && c) {
                            for (d = 0; h = t[d++];)
                                if (h(c, a, o)) {
                                    l.push(c);
                                    break
                                }
                            u && (H = _)
                        }
                        r && ((c = !h && c) && p--, n && m.push(c))
                    }
                    if (p += f, r && f !== p) {
                        for (d = 0; h = i[d++];) h(m, v, a, o);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = Y.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (H = _, E = y), m
                };
            return r ? n(a) : a
        }
        var _, w, k, x, C, S, T, j, E, I, $, P, O, A, D, L, M, N, R, q = "sizzle" + 1 * new Date,
            F = t.document,
            H = 0,
            V = 0,
            B = i(),
            U = i(),
            z = i(),
            Q = function(t, e) {
                return t === e && ($ = !0), 0
            },
            W = 1 << 31,
            G = {}.hasOwnProperty,
            J = [],
            Y = J.pop,
            X = J.push,
            K = J.push,
            Z = J.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = nt.replace("w", "w#"),
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
            at = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            ot = new RegExp(it + "+", "g"),
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ut = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ht = new RegExp(at),
            pt = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            _t = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            kt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            xt = function() {
                P()
            };
        try {
            K.apply(J = Z.call(F.childNodes), F.childNodes), J[F.childNodes.length].nodeType
        } catch (Ct) {
            K = {
                apply: J.length ? function(t, e) {
                    X.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, P = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : F;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, A = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), D = !C(n), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = r(function(t) {
                return A.appendChild(t).id = q, !n.getElementsByName || !n.getElementsByName(q).length
            }), w.getById ? (k.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && D) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, k.filter.ID = function(t) {
                var e = t.replace(wt, kt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function(t) {
                var e = t.replace(wt, kt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), k.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, k.find.CLASS = w.getElementsByClassName && function(t, e) {
                return D ? e.getElementsByClassName(t) : void 0
            }, M = [], L = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                A.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || L.push(".#.+[+~]")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (w.matchesSelector = vt.test(N = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), M.push("!=", at)
            }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), e = vt.test(A.compareDocumentPosition), R = e || vt.test(A.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Q = e ? function(t, e) {
                if (t === e) return $ = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && R(F, t) ? -1 : e === n || e.ownerDocument === F && R(F, e) ? 1 : I ? tt(I, t) - tt(I, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return $ = !0, 0;
                var i, r = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    l = [t],
                    u = [e];
                if (!s || !o) return t === n ? -1 : e === n ? 1 : s ? -1 : o ? 1 : I ? tt(I, t) - tt(I, e) : 0;
                if (s === o) return a(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === F ? -1 : u[r] === F ? 1 : 0
            }, n) : O
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== O && P(t), i = i.replace(dt, "='$1']"), !(!w.matchesSelector || !D || M && M.test(i) || L && L.test(i))) try {
                var n = N.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (r) {}
            return e(i, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && P(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && P(t);
            var i = k.attrHandle[e.toLowerCase()],
                n = i && G.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
            return void 0 !== n ? n : w.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                r = 0;
            if ($ = !w.detectDuplicates, I = !w.sortStable && t.slice(0), t.sort(Q), $) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return I = null, t
        }, x = e.getText = function(t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[n++];) i += x(e);
            return i
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, kt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, kt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, kt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        o = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var u, c, d, h, p, f, m = s !== a ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = o && e.nodeName.toLowerCase(),
                            y = !l && !o;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (d = e; d = d[m];)
                                        if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[q] || (g[q] = {}), u = c[t] || [], p = u[0] === H && u[1], h = u[0] === H && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                    if (1 === d.nodeType && ++h && d === e) {
                                        c[t] = [H, p, h];
                                        break
                                    }
                            } else if (y && (u = (e[q] || (e[q] = {}))[t]) && u[0] === H) h = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[q] || (d[q] = {}))[t] = [H, h]), d !== e)););
                            return h -= r, h === n || h % n === 0 && h / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[q] ? s(i) : s.length > 1 ? (r = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = s(t, i), a = r.length; a--;) n = tt(t, r[a]), t[n] = !(e[n] = r[a])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        r = T(t.replace(lt, "$1"));
                    return r[q] ? n(function(t, e, i, n) {
                        for (var s, a = r(t, null, n, []), o = t.length; o--;)(s = a[o]) && (t[o] = !(e[o] = s))
                    }) : function(t, n, s) {
                        return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, kt),
                        function(e) {
                            return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, kt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === A
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !k.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[_] = o(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) k.pseudos[_] = l(_);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, S = e.tokenize = function(t, i) {
            var n, r, s, a, o, l, u, c = U[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (o = t, l = [], u = k.preFilter; o;) {
                (!n || (r = ut.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = ct.exec(o)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(lt, " ")
                }), o = o.slice(n.length));
                for (a in k.filter) !(r = ft[a].exec(o)) || u[a] && !(r = u[a](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: a,
                    matches: r
                }), o = o.slice(n.length));
                if (!n) break
            }
            return i ? o.length : o ? e.error(t) : U(t, l).slice(0)
        }, T = e.compile = function(t, e) {
            var i, n = [],
                r = [],
                s = z[t + " "];
            if (!s) {
                for (e || (e = S(t)), i = e.length; i--;) s = y(e[i]), s[q] ? n.push(s) : r.push(s);
                s = z(t, b(r, n)), s.selector = t
            }
            return s
        }, j = e.select = function(t, e, i, n) {
            var r, s, a, o, l, u = "function" == typeof t && t,
                d = !n && S(t = u.selector || t);
            if (i = i || [], 1 === d.length) {
                if (s = d[0] = d[0].slice(0), s.length > 2 && "ID" === (a = s[0]).type && w.getById && 9 === e.nodeType && D && k.relative[s[1].type]) {
                    if (e = (k.find.ID(a.matches[0].replace(wt, kt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (a = s[r], !k.relative[o = a.type]);)
                    if ((l = k.find[o]) && (n = l(a.matches[0].replace(wt, kt), bt.test(s[0].type) && c(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && h(s), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (u || T(t, d))(n, e, !D, i, bt.test(t) && c(e.parentNode) || e), i
        }, w.sortStable = q.split("").sort(Q).join("") === q, w.detectDuplicates = !!$, P(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    Z.find = rt, Z.expr = rt.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = rt.uniqueSort, Z.text = rt.getText, Z.isXMLDoc = rt.isXML, Z.contains = rt.contains;
    var st = Z.expr.match.needsContext,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? Z.find.matchesSelector(n, t) ? [n] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (Z.contains(r[e], this)) return !0
            }));
            for (e = 0; i > e; e++) Z.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? Z.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && st.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : X, !0)), at.test(i[1]) && Z.isPlainObject(e))
                        for (i in e) Z.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = X.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = X, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        };
    ct.prototype = Z.fn, lt = Z(X);
    var dt = /^(?:parents|prev(?:Until|All))/,
        ht = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && Z(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], a = st.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && Z.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? Z.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Q.call(Z(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return Z.dir(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return Z.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return Z.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(t, e) {
        Z.fn[t] = function(i, n) {
            var r = Z.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = Z.filter(n, r)), this.length > 1 && (ht[t] || Z.unique(r), dt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var pt = /\S+/g,
        ft = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || s(t) : Z.extend({}, t);
        var e, i, n, r, a, o, l = [],
            u = !t.once && [],
            c = function(s) {
                for (e = t.memory && s, i = !0, o = r || 0, r = 0, a = l.length, n = !0; l && a > o; o++)
                    if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function s(e) {
                            Z.each(e, function(e, i) {
                                var n = Z.type(i);
                                "function" === n ? t.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        }(arguments), n ? a = l.length : e && (r = i, c(e))
                    }
                    return this
                },
                remove: function() {
                    return l && Z.each(arguments, function(t, e) {
                        for (var i;
                            (i = Z.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, o >= i && o--)
                    }), this
                },
                has: function(t) {
                    return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = u = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, e || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, e) {
                    return !l || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : c(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(i) {
                            Z.each(e, function(e, s) {
                                var a = Z.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, Z.each(e, function(t, s) {
                var a = s[2],
                    o = s[3];
                n[s[1]] = a.add, o && a.add(function() {
                    i = o
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = a.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, i, n, r = 0,
                s = B.call(arguments),
                a = s.length,
                o = 1 !== a || t && Z.isFunction(t.promise) ? a : 0,
                l = 1 === o ? t : Z.Deferred(),
                u = function(t, i, n) {
                    return function(r) {
                        i[t] = this, n[t] = arguments.length > 1 ? B.call(arguments) : r, n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (e = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) s[r] && Z.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --o;
            return o || l.resolveWith(n, s), l.promise()
        }
    });
    var mt;
    Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (mt.resolveWith(X, [Z]), Z.fn.triggerHandler && (Z(X).triggerHandler("ready"), Z(X).off("ready"))))
        }
    }), Z.ready.promise = function(e) {
        return mt || (mt = Z.Deferred(), "complete" === X.readyState ? setTimeout(Z.ready) : (X.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), mt.promise(e)
    }, Z.ready.promise();
    var gt = Z.access = function(t, e, i, n, r, s, a) {
        var o = 0,
            l = t.length,
            u = null == i;
        if ("object" === Z.type(i)) {
            r = !0;
            for (o in i) Z.access(t, e, o, i[o], !0, s, a)
        } else if (void 0 !== n && (r = !0, Z.isFunction(n) || (a = !0), u && (a ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                return u.call(Z(t), i)
            })), e))
            for (; l > o; o++) e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
    };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, o.uid = 1, o.accepts = Z.acceptData, o.prototype = {
        key: function(t) {
            if (!o.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = o.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, Z.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, r = this.key(t),
                s = this.cache[r];
            if ("string" == typeof e) s[e] = i;
            else if (Z.isEmptyObject(s)) Z.extend(this.cache[r], e);
            else
                for (n in e) s[n] = e[n];
            return s
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, Z.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, r, s = this.key(t),
                a = this.cache[s];
            if (void 0 === e) this.cache[s] = {};
            else {
                Z.isArray(e) ? n = e.concat(e.map(Z.camelCase)) : (r = Z.camelCase(e), e in a ? n = [e, r] : (n = r, n = n in a ? [n] : n.match(pt) || [])), i = n.length;
                for (; i--;) delete a[n[i]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new o,
        yt = new o,
        bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _t = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return yt.hasData(t) || vt.hasData(t)
        },
        data: function(t, e, i) {
            return yt.access(t, e, i)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        _removeData: function(t, e) {
            vt.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(t, e) {
            var i, n, r, s = this[0],
                a = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(s), 1 === s.nodeType && !vt.get(s, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = Z.camelCase(n.slice(5)), l(s, n, r[n])));
                    vt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : gt(this, function(e) {
                var i, n = Z.camelCase(t);
                if (s && void 0 === e) {
                    if (i = yt.get(s, t), void 0 !== i) return i;
                    if (i = yt.get(s, n), void 0 !== i) return i;
                    if (i = l(s, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = yt.get(this, n);
                    yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || Z.isArray(i) ? n = vt.access(t, e, Z.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = Z.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = Z._queueHooks(t, e),
                a = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, a, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return vt.get(t, i) || vt.access(t, i, {
                empty: Z.Callbacks("once memory").add(function() {
                    vt.remove(t, [e + "queue", i])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = Z.Deferred(),
                s = this,
                a = this.length,
                o = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = vt.get(s[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(e)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = ["Top", "Right", "Bottom", "Left"],
        xt = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        Ct = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = X.createDocumentFragment(),
            e = t.appendChild(X.createElement("div")),
            i = X.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var St = "undefined";
    Y.focusinBubbles = "onfocusin" in t;
    var Tt = /^key/,
        jt = /^(?:mouse|pointer|contextmenu)|click/,
        Et = /^(?:focusinfocus|focusoutblur)$/,
        It = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var s, a, o, l, u, c, d, h, p, f, m, g = vt.get(t);
            if (g)
                for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                        return typeof Z !== St && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(pt) || [""], u = e.length; u--;) o = It.exec(e[u]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (d = Z.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = Z.event.special[p] || {}, c = Z.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && Z.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, d.setup && d.setup.call(t, n, f, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), Z.event.global[p] = !0)
        },
        remove: function(t, e, i, n, r) {
            var s, a, o, l, u, c, d, h, p, f, m, g = vt.hasData(t) && vt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(pt) || [""], u = e.length; u--;)
                    if (o = It.exec(e[u]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = Z.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, h = l[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) c = h[s], !r && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
                        a && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || Z.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) Z.event.remove(t, p + e[u], i, n, !0);
                Z.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, r) {
            var s, a, o, l, u, c, d, h = [n || X],
                p = J.call(e, "type") ? e.type : e,
                f = J.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = o = n = n || X, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : Z.makeArray(i, [e]), d = Z.event.special[p] || {}, r || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!r && !d.noBubble && !Z.isWindow(n)) {
                    for (l = d.delegateType || p, Et.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), o = a;
                    o === (n.ownerDocument || X) && h.push(o.defaultView || o.parentWindow || t)
                }
                for (s = 0;
                    (a = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : d.bindType || p, c = (vt.get(a, "events") || {})[e.type] && vt.get(a, "handle"), c && c.apply(a, i), c = u && a[u], c && c.apply && Z.acceptData(a) && (e.result = c.apply(a, i), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || d._default && d._default.apply(h.pop(), i) !== !1 || !Z.acceptData(n) || u && Z.isFunction(n[p]) && !Z.isWindow(n) && (o = n[u], o && (n[u] = null), Z.event.triggered = p, n[p](), Z.event.triggered = void 0, o && (n[u] = o)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, i, n, r, s, a = [],
                o = B.call(arguments),
                l = (vt.get(this, "events") || {})[t.type] || [],
                u = Z.event.special[t.type] || {};
            if (o[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = Z.event.handlers.call(this, t, l), e = 0;
                    (r = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((Z.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, a = [],
                o = e.delegateCount,
                l = t.target;
            if (o && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; o > i; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? Z(r, this).index(l) >= 0 : Z.find(r, this, null, [l]).length), n[r] && n.push(s);
                        n.length && a.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return o < e.length && a.push({
                elem: this,
                handlers: e.slice(o)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, s = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || X, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, i, n, r = t.type,
                s = t,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = jt.test(r) ? this.mouseHooks : Tt.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new Z.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = X), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var r = Z.extend(new Z.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? Z.event.trigger(r, null, e) : Z.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, Z.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return (!r || r !== n && !Z.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), Y.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            Z.event.simulate(e, t.target, Z.event.fix(t), !0)
        };
        Z.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e);
                r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e) - 1;
                r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, i, n, r) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (a in t) this.on(a, e, i, t[a], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
            else if (!n) return this;
            return 1 === r && (s = n, n = function(t) {
                return Z().off(t), s.apply(this, arguments)
            }, n.guid = s.guid || (s.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Z(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = c), this.each(function() {
                Z.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? Z.event.trigger(t, e, i, !0) : void 0
        }
    });
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        Ot = /<|&#?\w+;/,
        At = /<(?:script|style|link)/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^$|\/(?:java|ecma)script/i,
        Mt = /^true\/(.*)/,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Rt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td, Z.extend({
        clone: function(t, e, i) {
            var n, r, s, a, o = t.cloneNode(!0),
                l = Z.contains(t.ownerDocument, t);
            if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (a = v(o), s = v(t), n = 0, r = s.length; r > n; n++) y(s[n], a[n]);
            if (e)
                if (i)
                    for (s = s || v(t), a = a || v(o), n = 0, r = s.length; r > n; n++) g(s[n], a[n]);
                else g(t, o);
            return a = v(o, "script"), a.length > 0 && m(a, !l && v(t, "script")), o
        },
        buildFragment: function(t, e, i, n) {
            for (var r, s, a, o, l, u, c = e.createDocumentFragment(), d = [], h = 0, p = t.length; p > h; h++)
                if (r = t[h], r || 0 === r)
                    if ("object" === Z.type(r)) Z.merge(d, r.nodeType ? [r] : r);
                    else if (Ot.test(r)) {
                for (s = s || c.appendChild(e.createElement("div")), a = (Pt.exec(r) || ["", ""])[1].toLowerCase(), o = Rt[a] || Rt._default, s.innerHTML = o[1] + r.replace($t, "<$1></$2>") + o[2], u = o[0]; u--;) s = s.lastChild;
                Z.merge(d, s.childNodes), s = c.firstChild, s.textContent = ""
            } else d.push(e.createTextNode(r));
            for (c.textContent = "", h = 0; r = d[h++];)
                if ((!n || -1 === Z.inArray(r, n)) && (l = Z.contains(r.ownerDocument, r), s = v(c.appendChild(r), "script"), l && m(s), i))
                    for (u = 0; r = s[u++];) Lt.test(r.type || "") && i.push(r);
            return c
        },
        cleanData: function(t) {
            for (var e, i, n, r, s = Z.event.special, a = 0; void 0 !== (i = t[a]); a++) {
                if (Z.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events)
                        for (n in e.events) s[n] ? Z.event.remove(i, n) : Z.removeEvent(i, n, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[i[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return gt(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? Z.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || Z.cleanData(v(i)), i.parentNode && (e && Z.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return gt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !Rt[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace($t, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = U.apply([], t);
            var i, n, r, s, a, o, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                h = t[0],
                m = Z.isFunction(h);
            if (m || u > 1 && "string" == typeof h && !Y.checkClone && Dt.test(h)) return this.each(function(i) {
                var n = c.eq(i);
                m && (t[0] = h.call(this, i, n.html())), n.domManip(t, e)
            });
            if (u && (i = Z.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = Z.map(v(i, "script"), p), s = r.length; u > l; l++) a = i, l !== d && (a = Z.clone(a, !0, !0), s && Z.merge(r, v(a, "script"))), e.call(this[l], a, l);
                if (s)
                    for (o = r[r.length - 1].ownerDocument, Z.map(r, f), l = 0; s > l; l++) a = r[l], Lt.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(o, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Nt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Z.fn[t] = function(t) {
            for (var i, n = [], r = Z(t), s = r.length - 1, a = 0; s >= a; a++) i = a === s ? this : this.clone(!0), Z(r[a])[e](i), z.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var qt, Ft = {},
        Ht = /^margin/,
        Vt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
        Bt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(s);
            var e = t.getComputedStyle(a, null);
            i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(s)
        }
        var i, n, r = X.documentElement,
            s = X.createElement("div"),
            a = X.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(a), t.getComputedStyle && Z.extend(Y, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = a.appendChild(X.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", r.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(s), a.removeChild(i), e
            }
        }))
    }(), Z.swap = function(t, e, i, n) {
        var r, s, a = {};
        for (s in e) a[s] = t.style[s], t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e) t.style[s] = a[s];
        return r
    };
    var Ut = /^(none|table(?!-c[ea]).+)/,
        zt = new RegExp("^(" + wt + ")(.*)$", "i"),
        Qt = new RegExp("^([+-])=(" + wt + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Jt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = w(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
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
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, o = Z.camelCase(e),
                    l = t.style;
                return e = Z.cssProps[o] || (Z.cssProps[o] = x(l, o)), a = Z.cssHooks[e] || Z.cssHooks[o], void 0 === i ? a && "get" in a && void 0 !== (r = a.get(t, !1, n)) ? r : l[e] : (s = typeof i, "string" === s && (r = Qt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(Z.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || Z.cssNumber[o] || (i += "px"), Y.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function(t, e, i, n) {
            var r, s, a, o = Z.camelCase(e);
            return e = Z.cssProps[o] || (Z.cssProps[o] = x(t.style, o)), a = Z.cssHooks[e] || Z.cssHooks[o], a && "get" in a && (r = a.get(t, !0, i)), void 0 === r && (r = w(t, e, n)), "normal" === r && e in Gt && (r = Gt[e]), "" === i || i ? (s = parseFloat(r), i === !0 || Z.isNumeric(s) ? s || 0 : r) : r
        }
    }), Z.each(["height", "width"], function(t, e) {
        Z.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Ut.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Wt, function() {
                    return T(t, e, n)
                }) : T(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r = n && Bt(t);
                return C(t, i, n ? S(t, e, n, "border-box" === Z.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = k(Y.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Z.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + kt[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, Ht.test(t) || (Z.cssHooks[t + e].set = C)
    }), Z.fn.extend({
        css: function(t, e) {
            return gt(this, function(t, e, i) {
                var n, r, s = {},
                    a = 0;
                if (Z.isArray(e)) {
                    for (n = Bt(t), r = e.length; r > a; a++) s[e[a]] = Z.css(t, e[a], !1, n);
                    return s
                }
                return void 0 !== i ? Z.style(t, e, i) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                xt(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = E, E.prototype = {
        constructor: E,
        init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (Z.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = E.propHooks[this.prop];
            return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = E.prototype.init, Z.fx.step = {};
    var Yt, Xt, Kt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [O],
        ie = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    r = Zt.exec(e),
                    s = r && r[3] || (Z.cssNumber[t] ? "" : "px"),
                    a = (Z.cssNumber[t] || "px" !== s && +n) && Zt.exec(Z.css(i.elem, t)),
                    o = 1,
                    l = 20;
                if (a && a[3] !== s) {
                    s = s || a[3], r = r || [], a = +n || 1;
                    do o = o || ".5", a /= o, Z.style(i.elem, t, a + s); while (o !== (o = i.cur() / n) && 1 !== o && --l)
                }
                return r && (a = i.start = +a || +n || 0, i.unit = s, i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    Z.Animation = Z.extend(D, {
            tweener: function(t, e) {
                Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), Z.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? Z.extend({}, t) : {
                complete: i || !i && e || Z.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !Z.isFunction(e) && e
            };
            return n.duration = Z.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Z.fx.speeds ? Z.fx.speeds[n.duration] : Z.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                Z.isFunction(n.old) && n.old.call(this), n.queue && Z.dequeue(this, n.queue)
            }, n
        }, Z.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(xt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = Z.isEmptyObject(t),
                    s = Z.speed(e, i, n),
                    a = function() {
                        var e = D(this, Z.extend({}, t), s);
                        (r || vt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = Z.timers,
                        a = vt.get(this);
                    if (r) a[r] && a[r].stop && n(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && te.test(r) && n(a[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                    (e || !i) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = vt.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        s = Z.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, Z.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(t, e) {
            var i = Z.fn[e];
            Z.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, r)
            }
        }), Z.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Z.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var t, e = 0,
                i = Z.timers;
            for (Yt = Z.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || Z.fx.stop(), Yt = void 0
        }, Z.fx.timer = function(t) {
            Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Xt || (Xt = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Xt), Xt = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(t, e) {
            return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = X.createElement("input"),
                e = X.createElement("select"),
                i = e.appendChild(X.createElement("option"));
            t.type = "checkbox", Y.checkOn = "" !== t.value, Y.optSelected = i.selected, e.disabled = !0, Y.optDisabled = !i.disabled, t = X.createElement("input"), t.value = "t", t.type = "radio", Y.radioValue = "t" === t.value
        }();
    var ne, re, se = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return gt(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === St ? Z.prop(t, e, i) : (1 === s && Z.isXMLDoc(t) || (e = e.toLowerCase(), n = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = Z.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void Z.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                s = e && e.match(pt);
            if (s && 1 === t.nodeType)
                for (; i = s[r++];) n = Z.propFix[i] || i, Z.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Y.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), re = {
        set: function(t, e, i) {
            return e === !1 ? Z.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = se[e] || Z.find.attr;
        se[e] = function(t, e, n) {
            var r, s;
            return n || (s = se[e], se[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, se[e] = s), r
        }
    });
    var ae = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return gt(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, r, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !Z.isXMLDoc(t), s && (e = Z.propFix[e] || e, r = Z.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var oe = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, i, n, r, s, a, o = "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).addClass(t.call(this, e, this.className))
            });
            if (o)
                for (e = (t || "").match(pt) || []; u > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : " ")) {
                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = Z.trim(n), i.className !== a && (i.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, a, o = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).removeClass(t.call(this, e, this.className))
            });
            if (o)
                for (e = (t || "").match(pt) || []; u > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : "")) {
                        for (s = 0; r = e[s++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        a = t ? Z.trim(n) : "", i.className !== a && (i.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(i) {
                Z(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, r = Z(this), s = t.match(pt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === St || "boolean" === i) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(oe, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0]; {
                if (arguments.length) return n = Z.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, Z(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, a = s ? null : [], o = s ? r + 1 : n.length, l = 0 > r ? o : s ? r : 0; o > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (Y.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Z.nodeName(i.parentNode, "optgroup"))) {
                            if (e = Z(i).val(), s) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = Z.makeArray(e), a = r.length; a--;) n = r[a], (n.selected = Z.inArray(n.value, s) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
            }
        }, Y.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Z.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ue = Z.now(),
        ce = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var de = /#.*$/,
        he = /([?&])_=[^&]*/,
        pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        me = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ye = {},
        be = {},
        _e = "*/".concat("*"),
        we = t.location.href,
        ke = ve.exec(we.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we,
            type: "GET",
            isLocal: fe.test(ke[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? N(N(t, Z.ajaxSettings), e) : N(Z.ajaxSettings, t)
        },
        ajaxPrefilter: L(ye),
        ajaxTransport: L(be),
        ajax: function(t, e) {
            function i(t, e, i, a) {
                var l, c, v, y, _, k = e;
                2 !== b && (b = 2, o && clearTimeout(o), n = void 0, s = a || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = R(d, w, i)), y = q(d, y, w, l), l ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (Z.lastModified[r] = _), _ = w.getResponseHeader("etag"), _ && (Z.etag[r] = _)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, l = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", l ? f.resolveWith(h, [c, k, w]) : f.rejectWith(h, [w, k, v]), w.statusCode(g), g = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? c : v]), m.fireWith(h, [w, k]), u && (p.trigger("ajaxComplete", [w, d]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, s, a, o, l, u, c, d = Z.ajaxSetup({}, e),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
                f = Z.Deferred(),
                m = Z.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; e = pe.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || we) + "").replace(de, "").replace(ge, ke[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(pt) || [""], null == d.crossDomain && (l = ve.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === ke[1] && l[2] === ke[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ke[3] || ("http:" === ke[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), M(ye, d, e, w), 2 === b) return w;
            u = Z.event && d.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !me.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ce.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = he.test(r) ? r.replace(he, "$1_=" + ue++) : r + (ce.test(r) ? "&" : "?") + "_=" + ue++)), d.ifModified && (Z.lastModified[r] && w.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && w.setRequestHeader("If-None-Match", Z.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : d.accepts["*"]);
            for (c in d.headers) w.setRequestHeader(c, d.headers[c]);
            if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === b)) return w.abort();
            _ = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](d[c]);
            if (n = M(be, d, e, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (o = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, n.send(v, i)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return Z.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, e) {
        Z[e] = function(t, i, n, r) {
            return Z.isFunction(i) && (r = r || n, n = i, i = void 0), Z.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(t) {
            var e;
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(Z.isFunction(t) ? function(e) {
                Z(this).wrapInner(t.call(this, e))
            } : function() {
                var e = Z(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Z.isFunction(t);
            return this.each(function(i) {
                Z(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var xe = /%20/g,
        Ce = /\[\]$/,
        Se = /\r?\n/g,
        Te = /^(?:submit|button|image|reset|file)$/i,
        je = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) F(i, t[i], e, r);
        return n.join("&").replace(xe, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && je.test(this.nodeName) && !Te.test(t) && (this.checked || !Ct.test(t))
            }).map(function(t, e) {
                var i = Z(this).val();
                return null == i ? null : Z.isArray(i) ? Z.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Se, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Se, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Ee = 0,
        Ie = {},
        $e = {
            0: 200,
            1223: 204
        },
        Pe = Z.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ie) Ie[t]()
    }), Y.cors = !!Pe && "withCredentials" in Pe, Y.ajax = Pe = !!Pe, Z.ajaxTransport(function(t) {
        var e;
        return Y.cors || Pe && !t.crossDomain ? {
            send: function(i, n) {
                var r, s = t.xhr(),
                    a = ++Ee;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    //for (r in t.xhrFields) s[r] = t.xhrFields[r];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) s.setRequestHeader(r, i[r]);
                e = function(t) {
                    return function() {
                        e && (delete Ie[a], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n($e[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = e(), s.onerror = e("error"), e = Ie[a] = e("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (e) throw o
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, r) {
                    e = Z("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), X.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Oe = [],
        Ae = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Oe.pop() || Z.expando + "_" + ue++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, a, o = e.jsonp !== !1 && (Ae.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ae, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || Z.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            a = arguments
        }, n.always(function() {
            t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Oe.push(r)), a && Z.isFunction(s) && s(a[0]), a = s = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || X;
        var n = at.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = Z.buildFragment([t], e, r), r && r.length && Z(r).remove(), Z.merge([], n.childNodes))
    };
    var De = Z.fn.load;
    Z.fn.load = function(t, e, i) {
        if ("string" != typeof t && De) return De.apply(this, arguments);
        var n, r, s, a = this,
            o = t.indexOf(" ");
        return o >= 0 && (n = Z.trim(t.slice(o)), t = t.slice(0, o)), Z.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && Z.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, a.html(n ? Z("<div>").append(Z.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            a.each(i, s || [t.responseText, e, t])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z.expr.filters.animated = function(t) {
        return Z.grep(Z.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Le = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, a, o, l, u, c = Z.css(t, "position"),
                d = Z(t),
                h = {};
            "static" === c && (t.style.position = "relative"), o = d.offset(), s = Z.css(t, "top"), l = Z.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (n = d.position(), a = n.top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, i, o)), null != e.top && (h.top = e.top - o.top + a), null != e.left && (h.left = e.left - o.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            if (s) return e = s.documentElement, Z.contains(e, n) ? (typeof n.getBoundingClientRect !== St && (r = n.getBoundingClientRect()), i = H(s), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (n = t.offset()), n.top += Z.css(t[0], "borderTopWidth", !0), n.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - Z.css(i, "marginTop", !0),
                    left: e.left - n.left - Z.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Le; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || Le
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        Z.fn[e] = function(r) {
            return gt(this, function(e, r, s) {
                var a = H(e);
                return void 0 === s ? a ? a[i] : e[r] : void(a ? a.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[r] = s)
            }, e, r, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, e) {
        Z.cssHooks[e] = k(Y.pixelPosition, function(t, i) {
            return i ? (i = w(t, e), Vt.test(i) ? Z(t).position()[e] + "px" : i) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        Z.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            Z.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || r === !0 ? "margin" : "border");
                return gt(this, function(e, i, n) {
                    var r;
                    return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? Z.css(e, i, a) : Z.style(e, i, n, a)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Me = t.jQuery,
        Ne = t.$;
    return Z.noConflict = function(e) {
        return t.$ === Z && (t.$ = Ne), e && t.jQuery === Z && (t.jQuery = Me), Z
    }, typeof e === St && (t.jQuery = t.$ = Z), Z
}),
function() {
    var t = this,
        e = t._,
        i = Array.prototype,
        n = Object.prototype,
        r = Function.prototype,
        s = i.push,
        a = i.slice,
        o = i.concat,
        l = n.toString,
        u = n.hasOwnProperty,
        c = Array.isArray,
        d = Object.keys,
        h = r.bind,
        p = function(t) {
            return t instanceof p ? t : this instanceof p ? void(this._wrapped = t) : new p(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : t._ = p, p.VERSION = "1.7.0";
    var f = function(t, e, i) {
        if (void 0 === e) return t;
        switch (null == i ? 3 : i) {
            case 1:
                return function(i) {
                    return t.call(e, i)
                };
            case 2:
                return function(i, n) {
                    return t.call(e, i, n)
                };
            case 3:
                return function(i, n, r) {
                    return t.call(e, i, n, r)
                };
            case 4:
                return function(i, n, r, s) {
                    return t.call(e, i, n, r, s)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    };
    p.iteratee = function(t, e, i) {
        return null == t ? p.identity : p.isFunction(t) ? f(t, e, i) : p.isObject(t) ? p.matches(t) : p.property(t)
    }, p.each = p.forEach = function(t, e, i) {
        if (null == t) return t;
        e = f(e, i);
        var n, r = t.length;
        if (r === +r)
            for (n = 0; r > n; n++) e(t[n], n, t);
        else {
            var s = p.keys(t);
            for (n = 0, r = s.length; r > n; n++) e(t[s[n]], s[n], t)
        }
        return t
    }, p.map = p.collect = function(t, e, i) {
        if (null == t) return [];
        e = p.iteratee(e, i);
        for (var n, r = t.length !== +t.length && p.keys(t), s = (r || t).length, a = Array(s), o = 0; s > o; o++) n = r ? r[o] : o, a[o] = e(t[n], n, t);
        return a
    };
    var m = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function(t, e, i, n) {
        null == t && (t = []), e = f(e, n, 4);
        var r, s = t.length !== +t.length && p.keys(t),
            a = (s || t).length,
            o = 0;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(m);
            i = t[s ? s[o++] : o++]
        }
        for (; a > o; o++) r = s ? s[o] : o, i = e(i, t[r], r, t);
        return i
    }, p.reduceRight = p.foldr = function(t, e, i, n) {
        null == t && (t = []), e = f(e, n, 4);
        var r, s = t.length !== +t.length && p.keys(t),
            a = (s || t).length;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(m);
            i = t[s ? s[--a] : --a]
        }
        for (; a--;) r = s ? s[a] : a, i = e(i, t[r], r, t);
        return i
    }, p.find = p.detect = function(t, e, i) {
        var n;
        return e = p.iteratee(e, i), p.some(t, function(t, i, r) {
            return e(t, i, r) ? (n = t, !0) : void 0
        }), n
    }, p.filter = p.select = function(t, e, i) {
        var n = [];
        return null == t ? n : (e = p.iteratee(e, i), p.each(t, function(t, i, r) {
            e(t, i, r) && n.push(t)
        }), n)
    }, p.reject = function(t, e, i) {
        return p.filter(t, p.negate(p.iteratee(e)), i)
    }, p.every = p.all = function(t, e, i) {
        if (null == t) return !0;
        e = p.iteratee(e, i);
        var n, r, s = t.length !== +t.length && p.keys(t),
            a = (s || t).length;
        for (n = 0; a > n; n++)
            if (r = s ? s[n] : n, !e(t[r], r, t)) return !1;
        return !0
    }, p.some = p.any = function(t, e, i) {
        if (null == t) return !1;
        e = p.iteratee(e, i);
        var n, r, s = t.length !== +t.length && p.keys(t),
            a = (s || t).length;
        for (n = 0; a > n; n++)
            if (r = s ? s[n] : n, e(t[r], r, t)) return !0;
        return !1
    }, p.contains = p.include = function(t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = p.values(t)), p.indexOf(t, e) >= 0)
    }, p.invoke = function(t, e) {
        var i = a.call(arguments, 2),
            n = p.isFunction(e);
        return p.map(t, function(t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, p.pluck = function(t, e) {
        return p.map(t, p.property(e))
    }, p.where = function(t, e) {
        return p.filter(t, p.matches(e))
    }, p.findWhere = function(t, e) {
        return p.find(t, p.matches(e))
    }, p.max = function(t, e, i) {
        var n, r, s = -(1 / 0),
            a = -(1 / 0);
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var o = 0, l = t.length; l > o; o++) n = t[o], n > s && (s = n)
        } else e = p.iteratee(e, i), p.each(t, function(t, i, n) {
            r = e(t, i, n), (r > a || r === -(1 / 0) && s === -(1 / 0)) && (s = t, a = r)
        });
        return s
    }, p.min = function(t, e, i) {
        var n, r, s = 1 / 0,
            a = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var o = 0, l = t.length; l > o; o++) n = t[o], s > n && (s = n)
        } else e = p.iteratee(e, i), p.each(t, function(t, i, n) {
            r = e(t, i, n), (a > r || r === 1 / 0 && s === 1 / 0) && (s = t, a = r)
        });
        return s
    }, p.shuffle = function(t) {
        for (var e, i = t && t.length === +t.length ? t : p.values(t), n = i.length, r = Array(n), s = 0; n > s; s++) e = p.random(0, s), e !== s && (r[s] = r[e]), r[e] = i[s];
        return r
    }, p.sample = function(t, e, i) {
        return null == e || i ? (t.length !== +t.length && (t = p.values(t)), t[p.random(t.length - 1)]) : p.shuffle(t).slice(0, Math.max(0, e))
    }, p.sortBy = function(t, e, i) {
        return e = p.iteratee(e, i), p.pluck(p.map(t, function(t, i, n) {
            return {
                value: t,
                index: i,
                criteria: e(t, i, n)
            }
        }).sort(function(t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var g = function(t) {
        return function(e, i, n) {
            var r = {};
            return i = p.iteratee(i, n), p.each(e, function(n, s) {
                var a = i(n, s, e);
                t(r, n, a)
            }), r
        }
    };
    p.groupBy = g(function(t, e, i) {
        p.has(t, i) ? t[i].push(e) : t[i] = [e]
    }), p.indexBy = g(function(t, e, i) {
        t[i] = e
    }), p.countBy = g(function(t, e, i) {
        p.has(t, i) ? t[i]++ : t[i] = 1
    }), p.sortedIndex = function(t, e, i, n) {
        i = p.iteratee(i, n, 1);
        for (var r = i(e), s = 0, a = t.length; a > s;) {
            var o = s + a >>> 1;
            i(t[o]) < r ? s = o + 1 : a = o
        }
        return s
    }, p.toArray = function(t) {
        return t ? p.isArray(t) ? a.call(t) : t.length === +t.length ? p.map(t, p.identity) : p.values(t) : []
    }, p.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : p.keys(t).length
    }, p.partition = function(t, e, i) {
        e = p.iteratee(e, i);
        var n = [],
            r = [];
        return p.each(t, function(t, i, s) {
            (e(t, i, s) ? n : r).push(t)
        }), [n, r]
    }, p.first = p.head = p.take = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : 0 > e ? [] : a.call(t, 0, e)
    }, p.initial = function(t, e, i) {
        return a.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
    }, p.last = function(t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, p.rest = p.tail = p.drop = function(t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, p.compact = function(t) {
        return p.filter(t, p.identity)
    };
    var v = function(t, e, i, n) {
        if (e && p.every(t, p.isArray)) return o.apply(n, t);
        for (var r = 0, a = t.length; a > r; r++) {
            var l = t[r];
            p.isArray(l) || p.isArguments(l) ? e ? s.apply(n, l) : v(l, e, i, n) : i || n.push(l)
        }
        return n
    };
    p.flatten = function(t, e) {
        return v(t, e, !1, [])
    }, p.without = function(t) {
        return p.difference(t, a.call(arguments, 1))
    }, p.uniq = p.unique = function(t, e, i, n) {
        if (null == t) return [];
        p.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = p.iteratee(i, n));
        for (var r = [], s = [], a = 0, o = t.length; o > a; a++) {
            var l = t[a];
            if (e) a && s === l || r.push(l), s = l;
            else if (i) {
                var u = i(l, a, t);
                p.indexOf(s, u) < 0 && (s.push(u), r.push(l))
            } else p.indexOf(r, l) < 0 && r.push(l)
        }
        return r
    }, p.union = function() {
        return p.uniq(v(arguments, !0, !0, []))
    }, p.intersection = function(t) {
        if (null == t) return [];
        for (var e = [], i = arguments.length, n = 0, r = t.length; r > n; n++) {
            var s = t[n];
            if (!p.contains(e, s)) {
                for (var a = 1; i > a && p.contains(arguments[a], s); a++);
                a === i && e.push(s)
            }
        }
        return e
    }, p.difference = function(t) {
        var e = v(a.call(arguments, 1), !0, !0, []);
        return p.filter(t, function(t) {
            return !p.contains(e, t)
        })
    }, p.zip = function(t) {
        if (null == t) return [];
        for (var e = p.max(arguments, "length").length, i = Array(e), n = 0; e > n; n++) i[n] = p.pluck(arguments, n);
        return i
    }, p.object = function(t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, r = t.length; r > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, p.indexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = 0,
            r = t.length;
        if (i) {
            if ("number" != typeof i) return n = p.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, r + i) : i
        }
        for (; r > n; n++)
            if (t[n] === e) return n;
        return -1
    }, p.lastIndexOf = function(t, e, i) {
        if (null == t) return -1;
        var n = t.length;
        for ("number" == typeof i && (n = 0 > i ? n + i + 1 : Math.min(n, i + 1)); --n >= 0;)
            if (t[n] === e) return n;
        return -1
    }, p.range = function(t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), r = Array(n), s = 0; n > s; s++, t += i) r[s] = t;
        return r
    };
    var y = function() {};
    p.bind = function(t, e) {
        var i, n;
        if (h && t.bind === h) return h.apply(t, a.call(arguments, 1));
        if (!p.isFunction(t)) throw new TypeError("Bind must be called on a function");
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            y.prototype = t.prototype;
            var r = new y;
            y.prototype = null;
            var s = t.apply(r, i.concat(a.call(arguments)));
            return p.isObject(s) ? s : r
        }
    }, p.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            for (var i = 0, n = e.slice(), r = 0, s = n.length; s > r; r++) n[r] === p && (n[r] = arguments[i++]);
            for (; i < arguments.length;) n.push(arguments[i++]);
            return t.apply(this, n)
        }
    }, p.bindAll = function(t) {
        var e, i, n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (e = 1; n > e; e++) i = arguments[e], t[i] = p.bind(t[i], t);
        return t
    }, p.memoize = function(t, e) {
        var i = function(n) {
            var r = i.cache,
                s = e ? e.apply(this, arguments) : n;
            return p.has(r, s) || (r[s] = t.apply(this, arguments)), r[s]
        };
        return i.cache = {}, i
    }, p.delay = function(t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, i)
        }, e)
    }, p.defer = function(t) {
        return p.delay.apply(p, [t, 1].concat(a.call(arguments, 1)))
    }, p.throttle = function(t, e, i) {
        var n, r, s, a = null,
            o = 0;
        i || (i = {});
        var l = function() {
            o = i.leading === !1 ? 0 : p.now(), a = null, s = t.apply(n, r), a || (n = r = null)
        };
        return function() {
            var u = p.now();
            o || i.leading !== !1 || (o = u);
            var c = e - (u - o);
            return n = this, r = arguments, 0 >= c || c > e ? (clearTimeout(a), a = null, o = u, s = t.apply(n, r), a || (n = r = null)) : a || i.trailing === !1 || (a = setTimeout(l, c)), s
        }
    }, p.debounce = function(t, e, i) {
        var n, r, s, a, o, l = function() {
            var u = p.now() - a;
            e > u && u > 0 ? n = setTimeout(l, e - u) : (n = null, i || (o = t.apply(s, r), n || (s = r = null)))
        };
        return function() {
            s = this, r = arguments, a = p.now();
            var u = i && !n;
            return n || (n = setTimeout(l, e)), u && (o = t.apply(s, r), s = r = null), o
        }
    }, p.wrap = function(t, e) {
        return p.partial(e, t)
    }, p.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }, p.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
            return n
        }
    }, p.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, p.before = function(t, e) {
        var i;
        return function() {
            return --t > 0 ? i = e.apply(this, arguments) : e = null, i
        }
    }, p.once = p.partial(p.before, 2), p.keys = function(t) {
        if (!p.isObject(t)) return [];
        if (d) return d(t);
        var e = [];
        for (var i in t) p.has(t, i) && e.push(i);
        return e
    }, p.values = function(t) {
        for (var e = p.keys(t), i = e.length, n = Array(i), r = 0; i > r; r++) n[r] = t[e[r]];
        return n
    }, p.pairs = function(t) {
        for (var e = p.keys(t), i = e.length, n = Array(i), r = 0; i > r; r++) n[r] = [e[r], t[e[r]]];
        return n
    }, p.invert = function(t) {
        for (var e = {}, i = p.keys(t), n = 0, r = i.length; r > n; n++) e[t[i[n]]] = i[n];
        return e
    }, p.functions = p.methods = function(t) {
        var e = [];
        for (var i in t) p.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, p.extend = function(t) {
        if (!p.isObject(t)) return t;
        for (var e, i, n = 1, r = arguments.length; r > n; n++) {
            e = arguments[n];
            for (i in e) u.call(e, i) && (t[i] = e[i])
        }
        return t
    }, p.pick = function(t, e, i) {
        var n, r = {};
        if (null == t) return r;
        if (p.isFunction(e)) {
            e = f(e, i);
            for (n in t) {
                var s = t[n];
                e(s, n, t) && (r[n] = s)
            }
        } else {
            var l = o.apply([], a.call(arguments, 1));
            t = new Object(t);
            for (var u = 0, c = l.length; c > u; u++) n = l[u], n in t && (r[n] = t[n])
        }
        return r
    }, p.omit = function(t, e, i) {
        if (p.isFunction(e)) e = p.negate(e);
        else {
            var n = p.map(o.apply([], a.call(arguments, 1)), String);
            e = function(t, e) {
                return !p.contains(n, e)
            }
        }
        return p.pick(t, e, i)
    }, p.defaults = function(t) {
        if (!p.isObject(t)) return t;
        for (var e = 1, i = arguments.length; i > e; e++) {
            var n = arguments[e];
            for (var r in n) void 0 === t[r] && (t[r] = n[r])
        }
        return t
    }, p.clone = function(t) {
        return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t
    }, p.tap = function(t, e) {
        return e(t), t
    };
    var b = function(t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof p && (t = t._wrapped), e instanceof p && (e = e._wrapped);
        var r = l.call(t);
        if (r !== l.call(e)) return !1;
        switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var s = i.length; s--;)
            if (i[s] === t) return n[s] === e;

        var a = t.constructor,
            o = e.constructor;
        if (a !== o && "constructor" in t && "constructor" in e && !(p.isFunction(a) && a instanceof a && p.isFunction(o) && o instanceof o)) return !1;
        i.push(t), n.push(e);
        var u, c;
        if ("[object Array]" === r) {
            if (u = t.length, c = u === e.length)
                for (; u-- && (c = b(t[u], e[u], i, n)););
        } else {
            var d, h = p.keys(t);
            if (u = h.length, c = p.keys(e).length === u)
                for (; u-- && (d = h[u], c = p.has(e, d) && b(t[d], e[d], i, n)););
        }
        return i.pop(), n.pop(), c
    };
    p.isEqual = function(t, e) {
        return b(t, e, [], [])
    }, p.isEmpty = function(t) {
        if (null == t) return !0;
        if (p.isArray(t) || p.isString(t) || p.isArguments(t)) return 0 === t.length;
        for (var e in t)
            if (p.has(t, e)) return !1;
        return !0
    }, p.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, p.isArray = c || function(t) {
        return "[object Array]" === l.call(t)
    }, p.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        p["is" + t] = function(e) {
            return l.call(e) === "[object " + t + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function(t) {
        return p.has(t, "callee")
    }), "function" != typeof /./ && (p.isFunction = function(t) {
        return "function" == typeof t || !1
    }), p.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, p.isNaN = function(t) {
        return p.isNumber(t) && t !== +t
    }, p.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
    }, p.isNull = function(t) {
        return null === t
    }, p.isUndefined = function(t) {
        return void 0 === t
    }, p.has = function(t, e) {
        return null != t && u.call(t, e)
    }, p.noConflict = function() {
        return t._ = e, this
    }, p.identity = function(t) {
        return t
    }, p.constant = function(t) {
        return function() {
            return t
        }
    }, p.noop = function() {}, p.property = function(t) {
        return function(e) {
            return e[t]
        }
    }, p.matches = function(t) {
        var e = p.pairs(t),
            i = e.length;
        return function(t) {
            if (null == t) return !i;
            t = new Object(t);
            for (var n = 0; i > n; n++) {
                var r = e[n],
                    s = r[0];
                if (r[1] !== t[s] || !(s in t)) return !1
            }
            return !0
        }
    }, p.times = function(t, e, i) {
        var n = Array(Math.max(0, t));
        e = f(e, i, 1);
        for (var r = 0; t > r; r++) n[r] = e(r);
        return n
    }, p.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, p.now = Date.now || function() {
        return (new Date).getTime()
    };
    var _ = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        w = p.invert(_),
        k = function(t) {
            var e = function(e) {
                    return t[e]
                },
                i = "(?:" + p.keys(t).join("|") + ")",
                n = RegExp(i),
                r = RegExp(i, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, n.test(t) ? t.replace(r, e) : t
            }
        };
    p.escape = k(_), p.unescape = k(w), p.result = function(t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return p.isFunction(i) ? t[e]() : i
    };
    var x = 0;
    p.uniqueId = function(t) {
        var e = ++x + "";
        return t ? t + e : e
    }, p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var C = /(.)^/,
        S = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        T = /\\|'|\r|\n|\u2028|\u2029/g,
        j = function(t) {
            return "\\" + S[t]
        };
    p.template = function(t, e, i) {
        !e && i && (e = i), e = p.defaults({}, e, p.templateSettings);
        var n = RegExp([(e.escape || C).source, (e.interpolate || C).source, (e.evaluate || C).source].join("|") + "|$", "g"),
            r = 0,
            s = "__p+='";
        t.replace(n, function(e, i, n, a, o) {
            return s += t.slice(r, o).replace(T, j), r = o + e.length, i ? s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : a && (s += "';\n" + a + "\n__p+='"), e
        }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var a = new Function(e.variable || "obj", "_", s)
        } catch (o) {
            throw o.source = s, o
        }
        var l = function(t) {
                return a.call(this, t, p)
            },
            u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + s + "}", l
    }, p.chain = function(t) {
        var e = p(t);
        return e._chain = !0, e
    };
    var E = function(t) {
        return this._chain ? p(t).chain() : t
    };
    p.mixin = function(t) {
        p.each(p.functions(t), function(e) {
            var i = p[e] = t[e];
            p.prototype[e] = function() {
                var t = [this._wrapped];
                return s.apply(t, arguments), E.call(this, i.apply(p, t))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = i[t];
        p.prototype[t] = function() {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], E.call(this, i)
        }
    }), p.each(["concat", "join", "slice"], function(t) {
        var e = i[t];
        p.prototype[t] = function() {
            return E.call(this, e.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return p
    })
}.call(this),
    function() {
        var t, e = this,
            i = e.Backbone,
            n = Array.prototype.slice,
            r = Array.prototype.splice;
        t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "0.9.2";
        var s = e._;
        s || "undefined" == typeof require || (s = require("underscore"));
        var a = e.jQuery || e.Zepto || e.ender;
        t.setDomLibrary = function(t) {
            a = t
        }, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var o = /\s+/,
            l = t.Events = {
                on: function(t, e, i) {
                    var n, r, s, a, l;
                    if (!e) return this;
                    for (t = t.split(o), n = this._callbacks || (this._callbacks = {}); r = t.shift();) l = n[r], s = l ? l.tail : {}, s.next = a = {}, s.context = i, s.callback = e, n[r] = {
                        tail: a,
                        next: l ? l.next : s
                    };
                    return this
                },
                off: function(t, e, i) {
                    var n, r, a, l, u, c;
                    if (r = this._callbacks) {
                        if (!(t || e || i)) return delete this._callbacks, this;
                        for (t = t ? t.split(o) : s.keys(r); n = t.shift();)
                            if (a = r[n], delete r[n], a && (e || i))
                                for (l = a.tail;
                                    (a = a.next) !== l;) u = a.callback, c = a.context, (e && u !== e || i && c !== i) && this.on(n, u, c);
                        return this
                    }
                },
                trigger: function(t) {
                    var e, i, r, s, a, l, u;
                    if (!(r = this._callbacks)) return this;
                    for (l = r.all, t = t.split(o), u = n.call(arguments, 1); e = t.shift();) {
                        if (i = r[e])
                            for (s = i.tail;
                                (i = i.next) !== s;) i.callback.apply(i.context || this, u);
                        if (i = l)
                            for (s = i.tail, a = [e].concat(u);
                                (i = i.next) !== s;) i.callback.apply(i.context || this, a)
                    }
                    return this
                }
            };
        l.bind = l.on, l.unbind = l.off;
        var u = t.Model = function(t, e) {
            var i;
            t || (t = {}), e && e.parse && (t = this.parse(t)), (i = T(this, "defaults")) && (t = s.extend({}, i, t)), e && e.collection && (this.collection = e.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
                silent: !0
            }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments)
        };
        s.extend(u.prototype, l, {
            changed: null,
            _silent: null,
            _pending: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(t) {
                return s.clone(this.attributes)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                var e;
                if (e = this._escapedAttributes[t]) return e;
                var i = this.get(t);
                return this._escapedAttributes[t] = s.escape(null == i ? "" : "" + i)
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, i) {
                var n, r, a;
                if (s.isObject(t) || null == t ? (n = t, i = e) : (n = {}, n[t] = e), i || (i = {}), !n) return this;
                if (n instanceof u && (n = n.attributes), i.unset)
                    for (r in n) n[r] = void 0;
                if (!this._validate(n, i)) return !1;
                this.idAttribute in n && (this.id = n[this.idAttribute]);
                var o = i.changes = {},
                    l = this.attributes,
                    c = this._escapedAttributes,
                    d = this._previousAttributes || {};
                for (r in n) a = n[r], (!s.isEqual(l[r], a) || i.unset && s.has(l, r)) && (delete c[r], (i.silent ? this._silent : o)[r] = !0), i.unset ? delete l[r] : l[r] = a, s.isEqual(d[r], a) && s.has(l, r) == s.has(d, r) ? (delete this.changed[r], delete this._pending[r]) : (this.changed[r] = a, i.silent || (this._pending[r] = !0));
                return i.silent || this.change(i), this
            },
            unset: function(t, e) {
                return (e || (e = {})).unset = !0, this.set(t, null, e)
            },
            clear: function(t) {
                return (t || (t = {})).unset = !0, this.set(s.clone(this.attributes), t)
            },
            fetch: function(e) {
                e = e ? s.clone(e) : {};
                var i = this,
                    n = e.success;
                return e.success = function(t, r, s) {
                    return i.set(i.parse(t, s), e) ? void(n && n(i, t)) : !1
                }, e.error = t.wrapError(e.error, i, e), (this.sync || t.sync).call(this, "read", this, e)
            },
            save: function(e, i, n) {
                var r, a;
                if (s.isObject(e) || null == e ? (r = e, n = i) : (r = {}, r[e] = i), n = n ? s.clone(n) : {}, n.wait) {
                    if (!this._validate(r, n)) return !1;
                    a = s.clone(this.attributes)
                }
                var o = s.extend({}, n, {
                    silent: !0
                });
                if (r && !this.set(r, n.wait ? o : n)) return !1;
                var l = this,
                    u = n.success;
                n.success = function(t, e, i) {
                    var a = l.parse(t, i);
                    return n.wait && (delete n.wait, a = s.extend(r || {}, a)), l.set(a, n) ? void(u ? u(l, t) : l.trigger("sync", l, t, n)) : !1
                }, n.error = t.wrapError(n.error, l, n);
                var c = this.isNew() ? "create" : "update",
                    d = (this.sync || t.sync).call(this, c, this, n);
                return n.wait && this.set(a, o), d
            },
            destroy: function(e) {
                e = e ? s.clone(e) : {};
                var i = this,
                    n = e.success,
                    r = function() {
                        i.trigger("destroy", i, i.collection, e)
                    };
                if (this.isNew()) return r(), !1;
                e.success = function(t) {
                    e.wait && r(), n ? n(i, t) : i.trigger("sync", i, t, e)
                }, e.error = t.wrapError(e.error, i, e);
                var a = (this.sync || t.sync).call(this, "delete", this, e);
                return e.wait || r(), a
            },
            url: function() {
                var t = T(this, "urlRoot") || T(this.collection, "url") || j();
                return this.isNew() ? t : t + ("/" == t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            change: function(t) {
                t || (t = {});
                var e = this._changing;
                this._changing = !0;
                for (var i in this._silent) this._pending[i] = !0;
                var n = s.extend({}, t.changes, this._silent);
                this._silent = {};
                for (var i in n) this.trigger("change:" + i, this, this.get(i), t);
                if (e) return this;
                for (; !s.isEmpty(this._pending);) {
                    this._pending = {}, this.trigger("change", this, t);
                    for (var i in this.changed) this._pending[i] || this._silent[i] || delete this.changed[i];
                    this._previousAttributes = s.clone(this.attributes)
                }
                return this._changing = !1, this
            },
            hasChanged: function(t) {
                return arguments.length ? s.has(this.changed, t) : !s.isEmpty(this.changed)
            },
            changedAttributes: function(t) {
                if (!t) return this.hasChanged() ? s.clone(this.changed) : !1;
                var e, i = !1,
                    n = this._previousAttributes;
                for (var r in t) s.isEqual(n[r], e = t[r]) || ((i || (i = {}))[r] = e);
                return i
            },
            previous: function(t) {
                return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return s.clone(this._previousAttributes)
            },
            isValid: function() {
                return !this.validate(this.attributes)
            },
            _validate: function(t, e) {
                if (e.silent || !this.validate) return !0;
                t = s.extend({}, this.attributes, t);
                var i = this.validate(t, e);
                return i ? (e && e.error ? e.error(this, i, e) : this.trigger("error", this, i, e), !1) : !0
            }
        });
        var c = t.Collection = function(t, e) {
            e || (e = {}), e.model && (this.model = e.model), e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, {
                silent: !0,
                parse: e.parse
            })
        };
        s.extend(c.prototype, l, {
            model: u,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            add: function(t, e) {
                var i, n, a, o, l, u, c = {},
                    d = {},
                    h = [];
                for (e || (e = {}), t = s.isArray(t) ? t.slice() : [t], i = 0, a = t.length; a > i; i++) {
                    if (!(o = t[i] = this._prepareModel(t[i], e))) throw new Error("Can't add an invalid model to a collection");
                    l = o.cid, u = o.id, c[l] || this._byCid[l] || null != u && (d[u] || this._byId[u]) ? h.push(i) : c[l] = d[u] = o
                }
                for (i = h.length; i--;) t.splice(h[i], 1);
                for (i = 0, a = t.length; a > i; i++)(o = t[i]).on("all", this._onModelEvent, this), this._byCid[o.cid] = o, null != o.id && (this._byId[o.id] = o);
                if (this.length += a, n = null != e.at ? e.at : this.models.length, r.apply(this.models, [n, 0].concat(t)), this.comparator && this.sort({
                        silent: !0
                    }), e.silent) return this;
                for (i = 0, a = this.models.length; a > i; i++) c[(o = this.models[i]).cid] && (e.index = i, o.trigger("add", o, this, e));
                return this
            },
            remove: function(t, e) {
                var i, n, r, a;
                for (e || (e = {}), t = s.isArray(t) ? t.slice() : [t], i = 0, n = t.length; n > i; i++) a = this.getByCid(t[i]) || this.get(t[i]), a && (delete this._byId[a.id], delete this._byCid[a.cid], r = this.indexOf(a), this.models.splice(r, 1), this.length--, e.silent || (e.index = r, a.trigger("remove", a, this, e)), this._removeReference(a));
                return this
            },
            push: function(t, e) {
                return t = this._prepareModel(t, e), this.add(t, e), t
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return t = this._prepareModel(t, e), this.add(t, s.extend({
                    at: 0
                }, e)), t
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            get: function(t) {
                return null == t ? void 0 : this._byId[null != t.id ? t.id : t]
            },
            getByCid: function(t) {
                return t && this._byCid[t.cid || t]
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t) {
                return s.isEmpty(t) ? [] : this.filter(function(e) {
                    for (var i in t)
                        if (t[i] !== e.get(i)) return !1;
                    return !0
                })
            },
            sort: function(t) {
                if (t || (t = {}), !this.comparator) throw new Error("Cannot sort a set without a comparator");
                var e = s.bind(this.comparator, this);
                return 1 == this.comparator.length ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("reset", this, t), this
            },
            pluck: function(t) {
                return s.map(this.models, function(e) {
                    return e.get(t)
                })
            },
            reset: function(t, e) {
                t || (t = []), e || (e = {});
                for (var i = 0, n = this.models.length; n > i; i++) this._removeReference(this.models[i]);
                return this._reset(), this.add(t, s.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), this
            },
            fetch: function(e) {
                e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var i = this,
                    n = e.success;
                return e.success = function(t, r, s) {
                    i[e.add ? "add" : "reset"](i.parse(t, s), e), n && n(i, t)
                }, e.error = t.wrapError(e.error, i, e), (this.sync || t.sync).call(this, "read", this, e)
            },
            create: function(t, e) {
                var i = this;
                if (e = e ? s.clone(e) : {}, t = this._prepareModel(t, e), !t) return !1;
                e.wait || i.add(t, e);
                var n = e.success;
                return e.success = function(r, s, a) {
                    e.wait && i.add(r, e), n ? n(r, s) : r.trigger("sync", t, s, e)
                }, t.save(null, e), t
            },
            parse: function(t, e) {
                return t
            },
            chain: function() {
                return s(this.models).chain()
            },
            _reset: function(t) {
                this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
            },
            _prepareModel: function(t, e) {
                if (e || (e = {}), t instanceof u) t.collection || (t.collection = this);
                else {
                    var i = t;
                    e.collection = this, t = new this.model(i, e), t._validate(t.attributes, e) || (t = !1)
                }
                return t
            },
            _removeReference: function(t) {
                this == t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, i, n) {
                ("add" != t && "remove" != t || i == this) && ("destroy" == t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], this._byId[e.id] = e), this.trigger.apply(this, arguments))
            }
        });
        var d = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
        s.each(d, function(t) {
            c.prototype[t] = function() {
                return s[t].apply(s, [this.models].concat(s.toArray(arguments)))
            }
        });
        var h = t.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            p = /:\w+/g,
            f = /\*\w+/g,
            m = /[-[\]{}()+?.,\\^$|#\s]/g;
        s.extend(h.prototype, l, {
            initialize: function() {},
            route: function(e, i, n) {
                return t.history || (t.history = new g), s.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[i]), t.history.route(e, s.bind(function(r) {
                    var s = this._extractParameters(e, r);
                    n && n.apply(this, s), this.trigger.apply(this, ["route:" + i].concat(s)), t.history.trigger("route", this, i, s)
                }, this)), this
            },
            navigate: function(e, i) {
                t.history.navigate(e, i)
            },
            _bindRoutes: function() {
                if (this.routes) {
                    var t = [];
                    for (var e in this.routes) t.unshift([e, this.routes[e]]);
                    for (var i = 0, n = t.length; n > i; i++) this.route(t[i][0], t[i][1], this[t[i][1]])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(m, "\\$&").replace(p, "([^/]+)").replace(f, "(.*?)"), new RegExp("^" + t + "$")
            },
            _extractParameters: function(t, e) {
                return t.exec(e).slice(1)
            }
        });
        var g = t.History = function() {
                this.handlers = [], s.bindAll(this, "checkUrl")
            },
            v = /^[#\/]/,
            y = /msie [\w.]+/;
        g.started = !1, s.extend(g.prototype, l, {
            interval: 50,
            getHash: function(t) {
                var e = t ? t.location : window.location,
                    i = e.href.match(/#(.*)$/);
                return i ? i[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || e) {
                        t = window.location.pathname;
                        var i = window.location.search;
                        i && (t += i)
                    } else t = this.getHash();
                return t.indexOf(this.options.root) || (t = t.substr(this.options.root.length)), t.replace(v, "")
            },
            start: function(t) {
                if (g.started) throw new Error("Backbone.history has already been started");
                g.started = !0, this.options = s.extend({}, {
                    root: "/"
                }, this.options, t), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
                var e = this.getFragment(),
                    i = document.documentMode,
                    n = y.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                n && (this.iframe = a('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e)), this._hasPushState ? a(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !n ? a(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e;
                var r = window.location,
                    o = r.pathname == this.options.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !o ? (this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && o && r.hash && (this.fragment = this.getHash().replace(v, ""), window.history.replaceState({}, document.title, r.protocol + "//" + r.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl())
            },
            stop: function() {
                a(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), g.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function(t) {
                var e = this.getFragment();
                return e == this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e == this.fragment ? !1 : (this.iframe && this.navigate(e), void(this.loadUrl() || this.loadUrl(this.getHash())))
            },
            loadUrl: function(t) {
                var e = this.fragment = this.getFragment(t),
                    i = s.any(this.handlers, function(t) {
                        return t.route.test(e) ? (t.callback(e), !0) : void 0
                    });
                return i
            },
            navigate: function(t, e) {
                if (!g.started) return !1;
                e && e !== !0 || (e = {
                    trigger: e
                });
                var i = (t || "").replace(v, "");
                this.fragment != i && (this._hasPushState ? (0 != i.indexOf(this.options.root) && (i = this.options.root + i), this.fragment = i, window.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i)) : this._wantsHashChange ? (this.fragment = i, this._updateHash(window.location, i, e.replace), this.iframe && i != this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, i, e.replace))) : window.location.assign(this.options.root + t), e.trigger && this.loadUrl(t))
            },
            _updateHash: function(t, e, i) {
                i ? t.replace(t.toString().replace(/(javascript:|#).*$/, "") + "#" + e) : t.hash = e
            }
        });
        var b = t.View = function(t) {
                this.cid = s.uniqueId("view"), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            _ = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
        s.extend(b.prototype, l, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this
            },
            make: function(t, e, i) {
                var n = document.createElement(t);
                return e && a(n).attr(e), i && a(n).html(i), n
            },
            setElement: function(t, e) {
                return this.$el && this.undelegateEvents(), this.$el = t instanceof a ? t : a(t), this.el = this.$el[0], e !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (t || (t = T(this, "events"))) {
                    this.undelegateEvents();
                    for (var e in t) {
                        var i = t[e];
                        if (s.isFunction(i) || (i = this[t[e]]), !i) throw new Error('Method "' + t[e] + '" does not exist');
                        var n = e.match(_),
                            r = n[1],
                            a = n[2];
                        i = s.bind(i, this), r += ".delegateEvents" + this.cid, "" === a ? this.$el.bind(r, i) : this.$el.delegate(a, r, i)
                    }
                }
            },
            undelegateEvents: function() {
                this.$el.unbind(".delegateEvents" + this.cid)
            },
            _configure: function(t) {
                this.options && (t = s.extend({}, this.options, t));
                for (var e = 0, i = w.length; i > e; e++) {
                    var n = w[e];
                    t[n] && (this[n] = t[n])
                }
                this.options = t
            },
            _ensureElement: function() {
                if (this.el) this.setElement(this.el, !1);
                else {
                    var t = T(this, "attributes") || {};
                    this.id && (t.id = this.id), this.className && (t["class"] = this.className), this.setElement(this.make(this.tagName, t), !1)
                }
            }
        });
        var k = function(t, e) {
            var i = S(this, t, e);
            return i.extend = this.extend, i
        };
        u.extend = c.extend = h.extend = b.extend = k;
        var x = {
            create: "POST",
            update: "PUT",
            "delete": "DELETE",
            read: "GET"
        };
        t.sync = function(e, i, n) {
            var r = x[e];
            n || (n = {});
            var o = {
                type: r,
                dataType: "json"
            };
            return n.url || (o.url = T(i, "url") || j()), n.data || !i || "create" != e && "update" != e || (o.contentType = "application/json", o.data = JSON.stringify(i.toJSON())), t.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {}), t.emulateHTTP && ("PUT" === r || "DELETE" === r) && (t.emulateJSON && (o.data._method = r), o.type = "POST", o.beforeSend = function(t) {
                t.setRequestHeader("X-HTTP-Method-Override", r)
            }), "GET" === o.type || t.emulateJSON || (o.processData = !1), a.ajax(s.extend(o, n))
        }, t.wrapError = function(t, e, i) {
            return function(n, r) {
                r = n === e ? r : n, t ? t(e, r, i) : e.trigger("error", e, r, i)
            }
        };
        var C = function() {},
            S = function(t, e, i) {
                var n;
                return n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                    t.apply(this, arguments)
                }, s.extend(n, t), C.prototype = t.prototype, n.prototype = new C, e && s.extend(n.prototype, e), i && s.extend(n, i), n.prototype.constructor = n, n.__super__ = t.prototype, n
            },
            T = function(t, e) {
                return t && t[e] ? s.isFunction(t[e]) ? t[e]() : t[e] : null
            },
            j = function() {
                throw new Error('A "url" property or function must be specified')
            }
    }.call(this),
    function() {
        "use strict";

        function t(t, e) {
            if (!t) throw e
        }

        function e(e) {
            t(_.isString(e), "initial_selector takes a single argument");
            var i = e.split(o);
            t(_.isArray(i));
            var n = _.first(i);
            return t(_.isString(n), "initial_selector should return a string"), n
        }

        function i(e) {
            t(_.isString(e));
            var i, n;
            return i = e.split(o), t(_.isArray(i)), n = null, i.length > 1 && (n = _.chain(i).rest().reduce(function(t, e) {
                return t ? t + o + e : e
            }).value(), t(_.isString(n))), n
        }

        function n(e, i) {
            t(_.toString(i));
            var n = _.clone(e || []);
            return n.unshift(i), n
        }

        function r(t, e) {
            var i, n, r;
            if (i = t || [], n = e || [], i.length !== n.length) return !1;
            for (r = 0; r < i.length && r < n.length; r++)
                if (i[r] !== n[r]) return !1;
            return !0
        }

        function s(e, i, r, s, a) {
            t(_.isNull(e) || _.isString(e)), t(_.isFunction(i)), e && a && !_.isUndefined(a.live) ? a.live(e, i, r, n(s, a)) : e || i.apply(r, n(s, a))
        }

        function a(e, s, a, o, l, c, d) {
            var h, p;
            t(_.isFunction(e)), t(_.isString(s)), t(_.isFunction(a)), t(_.isString(o)), t(_.isFunction(l)), h = this, p = function(t, f, m, g) {
                var v;
                t === o && f === l && m === c && r(g, d) && (v = i(o), v && e(function(t) {
                    _.isFunction(t.die) && t.die(v, f, m, n(g, t))
                }), h.off(s, a, h), u--, h.off("backbrace:die:" + o, p, h), u--)
            }, h.on("backbrace:die:" + o, p, h), u++
        }
        var o = " ",
            l = "*",
            u = 0,
            c = 0;
        this.Backbrace = {
            setDelimiter: function(e) {
                t("," !== e, "cannot use , as a delimiter as it will prevent event callbacks from being set properly"), t(this.isClean(), "setting the delimiter after calling live can cause unexpected behavior"), t(e !== l, "setting the delimiter to the same value as the wildcard can cause unexpected behavior"), o = e
            },
            setWildcard: function(e) {
                t("," !== e, "cannot use , as a wildcard as it will prevent event callbacks from being set properly"), t(this.isClean(), "setting the wildcard after calling live can cause unexpected behavior"), t(e !== o, "setting the wildcard to the same value as the delimiter can cause unexpected behavior"), l = e
            },
            isClean: function() {
                return 0 === u && 0 === c
            }
        };
        var d = function(e, i, n, r) {
            return t(_.isString(e)), t(_.isFunction(i)), this.trigger("backbrace:die:" + e, e, i, n, r), c--, this
        };
        _.extend(Backbone.Collection.prototype, {
            die: d
        }), _.extend(Backbone.Model.prototype, {
            die: d
        }), _.extend(Backbone.Collection.prototype, {
            live: function(n, r, o, d) {
                t(_.isString(n)), t(_.isFunction(r));
                var h, p, f, m, g, v, y;
                return c++, h = this, p = e(n), f = i(n), t(_.isString(p)), t(_.isNull(f) || _.isString(f)), m = _.bind(s, this, f, r, o, d), g = function(t) {
                    p === l ? h.each(t) : h.get(p) && t(h.get(p))
                }, g(m), v = "add", y = p === l ? m : function(t) {
                    t.id === p && m(t)
                }, h.on(v, y, h), u++, a.call(h, g, v, y, n, r, o, d), h
            }
        }), _.extend(Backbone.Model.prototype, {
            live: function(t, n, r, o) {
                var d, h, p, f, m, g, v;
                return c++, d = this, h = e(t), p = i(t), f = _.bind(s, this, p, n, r, o), m = function(t) {
                    h === l ? _.each(d.toJSON(), t) : d.has(h) && t(d.get(h), h)
                }, m(f), h === l ? (g = "change", v = function() {
                    _.each(d.changedAttributes(), function(t, e) {
                        _.isUndefined(d.previous(e)) && f(t)
                    })
                }) : (g = "change:" + h, v = function() {
                    var t;
                    _.isUndefined(d.previous(h)) && (t = d.get(h), f(t))
                }), d.on(g, v, d), u++, a.call(d, m, g, v, t, n, r, o), d
            }
        })
    }.call(this),
    function() {
        function t() {
            var t = !1;
            if ("localStorage" in window) try {
                window.localStorage.setItem("_tmptest", "tmpval"), t = !0, window.localStorage.removeItem("_tmptest")
            } catch (e) {}
            if (t) try {
                    window.localStorage && (w = window.localStorage, C = "localStorage", j = w.jStorage_update)
                } catch (r) {} else if ("globalStorage" in window) try {
                    window.globalStorage && (w = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], C = "globalStorage", j = w.jStorage_update)
                } catch (s) {} else {
                    if (k = document.createElement("link"), !k.addBehavior) return void(k = null);
                    k.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(k);
                    try {
                        k.load("jStorage")
                    } catch (a) {
                        k.setAttribute("jStorage", "{}"), k.save("jStorage"), k.load("jStorage")
                    }
                    var l = "{}";
                    try {
                        l = k.getAttribute("jStorage")
                    } catch (u) {}
                    try {
                        j = k.getAttribute("jStorage_update")
                    } catch (h) {}
                    w.jStorage = l, C = "userDataBehavior"
                }
                o(), c(), i(), d(), "addEventListener" in window && window.addEventListener("pageshow", function(t) {
                t.persisted && n()
            }, !1)
        }

        function e() {
            var t = "{}";
            if ("userDataBehavior" == C) {
                k.load("jStorage");
                try {
                    t = k.getAttribute("jStorage")
                } catch (e) {}
                try {
                    j = k.getAttribute("jStorage_update")
                } catch (i) {}
                w.jStorage = t
            }
            o(), c(), d()
        }

        function i() {
            "localStorage" == C || "globalStorage" == C ? "addEventListener" in window ? window.addEventListener("storage", n, !1) : document.attachEvent("onstorage", n) : "userDataBehavior" == C && setInterval(n, 1e3)
        }

        function n() {
            var t;
            clearTimeout(T), T = setTimeout(function() {
                if ("localStorage" == C || "globalStorage" == C) t = w.jStorage_update;
                else if ("userDataBehavior" == C) {
                    k.load("jStorage");
                    try {
                        t = k.getAttribute("jStorage_update")
                    } catch (e) {}
                }
                t && t != j && (j = t, r())
            }, 25)
        }

        function r() {
            var t, i = y.parse(y.stringify(_.__jstorage_meta.CRC32));
            e(), t = y.parse(y.stringify(_.__jstorage_meta.CRC32));
            var n, r = [],
                a = [];
            for (n in i)
                if (i.hasOwnProperty(n)) {
                    if (!t[n]) {
                        a.push(n);
                        continue
                    }
                    i[n] != t[n] && "2." == String(i[n]).substr(0, 2) && r.push(n)
                }
            for (n in t) t.hasOwnProperty(n) && (i[n] || r.push(n));
            s(r, "updated"), s(a, "deleted")
        }

        function s(t, e) {
            if (t = [].concat(t || []), "flushed" == e) {
                t = [];
                for (var i in S) S.hasOwnProperty(i) && t.push(i);
                e = "deleted"
            }
            for (var n = 0, r = t.length; r > n; n++) {
                if (S[t[n]])
                    for (var s = 0, a = S[t[n]].length; a > s; s++) S[t[n]][s](t[n], e);
                if (S["*"])
                    for (var s = 0, a = S["*"].length; a > s; s++) S["*"][s](t[n], e)
            }
        }

        function a() {
            var t = (+new Date).toString();
            if ("localStorage" == C || "globalStorage" == C) try {
                w.jStorage_update = t
            } catch (e) {
                C = !1
            } else "userDataBehavior" == C && (k.setAttribute("jStorage_update", t), k.save("jStorage"));
            n()
        }

        function o() {
            if (w.jStorage) try {
                _ = y.parse(String(w.jStorage))
            } catch (t) {
                w.jStorage = "{}"
            } else w.jStorage = "{}";
            x = w.jStorage ? String(w.jStorage).length : 0, _.__jstorage_meta || (_.__jstorage_meta = {}), _.__jstorage_meta.CRC32 || (_.__jstorage_meta.CRC32 = {})
        }

        function l() {
            p();
            try {
                w.jStorage = y.stringify(_), k && (k.setAttribute("jStorage", w.jStorage), k.save("jStorage")), x = w.jStorage ? String(w.jStorage).length : 0
            } catch (t) {}
        }

        function u(t) {
            if ("string" != typeof t && "number" != typeof t) throw new TypeError("Key name must be string or numeric");
            if ("__jstorage_meta" == t) throw new TypeError("Reserved key name");
            return !0
        }

        function c() {
            var t, e, i, n, r = 1 / 0,
                o = !1,
                u = [];
            if (clearTimeout(b), _.__jstorage_meta && "object" == typeof _.__jstorage_meta.TTL) {
                t = +new Date, i = _.__jstorage_meta.TTL, n = _.__jstorage_meta.CRC32;
                for (e in i) i.hasOwnProperty(e) && (i[e] <= t ? (delete i[e], delete n[e], delete _[e], o = !0, u.push(e)) : i[e] < r && (r = i[e]));
                r != 1 / 0 && (b = setTimeout(Math.min(c, r - t, 2147483647))), o && (l(), a(), s(u, "deleted"))
            }
        }

        function d() {
            var t, e;
            if (_.__jstorage_meta.PubSub) {
                var i, n = I;
                for (t = e = _.__jstorage_meta.PubSub.length - 1; t >= 0; t--) i = _.__jstorage_meta.PubSub[t], i[0] > I && (n = i[0], h(i[1], i[2]));
                I = n
            }
        }

        function h(t, e) {
            if (E[t])
                for (var i = 0, n = E[t].length; n > i; i++) try {
                    E[t][i](t, y.parse(y.stringify(e)))
                } catch (r) {}
        }

        function p() {
            if (_.__jstorage_meta.PubSub) {
                for (var t = +new Date - 2e3, e = 0, i = _.__jstorage_meta.PubSub.length; i > e; e++)
                    if (_.__jstorage_meta.PubSub[e][0] <= t) {
                        _.__jstorage_meta.PubSub.splice(e, _.__jstorage_meta.PubSub.length - e);
                        break
                    }
                _.__jstorage_meta.PubSub.length || delete _.__jstorage_meta.PubSub
            }
        }

        function f(t, e) {
            _.__jstorage_meta || (_.__jstorage_meta = {}), _.__jstorage_meta.PubSub || (_.__jstorage_meta.PubSub = []), _.__jstorage_meta.PubSub.unshift([+new Date, t, e]), l(), a()
        }

        function m(t, e) {
            for (var i, n = t.length, r = e ^ n, s = 0; n >= 4;) i = 255 & t.charCodeAt(s) | (255 & t.charCodeAt(++s)) << 8 | (255 & t.charCodeAt(++s)) << 16 | (255 & t.charCodeAt(++s)) << 24, i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16), i ^= i >>> 24, i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ i, n -= 4, ++s;
            switch (n) {
                case 3:
                    r ^= (255 & t.charCodeAt(s + 2)) << 16;
                case 2:
                    r ^= (255 & t.charCodeAt(s + 1)) << 8;
                case 1:
                    r ^= 255 & t.charCodeAt(s), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16)
            }
            return r ^= r >>> 13, r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16), r ^= r >>> 15, r >>> 0
        }
        var g = "0.4.8",
            v = window.jQuery || window.$ || (window.$ = {}),
            y = {
                parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(t) {
                    return String(t).evalJSON()
                } || v.parseJSON || v.evalJSON,
                stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || v.toJSON
            };
        if (!("parse" in y && "stringify" in y)) throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
        var b, _ = {
                __jstorage_meta: {
                    CRC32: {}
                }
            },
            w = {
                jStorage: "{}"
            },
            k = null,
            x = 0,
            C = !1,
            S = {},
            T = !1,
            j = 0,
            E = {},
            I = +new Date,
            $ = {
                isXML: function(t) {
                    var e = (t ? t.ownerDocument || t : 0).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                },
                encode: function(t) {
                    if (!this.isXML(t)) return !1;
                    try {
                        return (new XMLSerializer).serializeToString(t)
                    } catch (e) {
                        try {
                            return t.xml
                        } catch (i) {}
                    }
                    return !1
                },
                decode: function(t) {
                    var e, i = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(t) {
                        var e = new ActiveXObject("Microsoft.XMLDOM");
                        return e.async = "false", e.loadXML(t), e
                    };
                    return i ? (e = i.call("DOMParser" in window && new DOMParser || window, t, "text/xml"), this.isXML(e) ? e : !1) : !1
                }
            };
        v.jStorage = {
            version: g,
            set: function(t, e, i) {
                if (u(t), i = i || {}, "undefined" == typeof e) return this.deleteKey(t), e;
                if ($.isXML(e)) e = {
                    _is_xml: !0,
                    xml: $.encode(e)
                };
                else {
                    if ("function" == typeof e) return void 0;
                    e && "object" == typeof e && (e = y.parse(y.stringify(e)))
                }
                return _[t] = e, _.__jstorage_meta.CRC32[t] = "2." + m(y.stringify(e), 2538058380), this.setTTL(t, i.TTL || 0), s(t, "updated"), e
            },
            get: function(t, e) {
                return u(t), t in _ ? _[t] && "object" == typeof _[t] && _[t]._is_xml ? $.decode(_[t].xml) : _[t] : "undefined" == typeof e ? null : e
            },
            deleteKey: function(t) {
                return u(t), t in _ ? (delete _[t], "object" == typeof _.__jstorage_meta.TTL && t in _.__jstorage_meta.TTL && delete _.__jstorage_meta.TTL[t], delete _.__jstorage_meta.CRC32[t], l(), a(), s(t, "deleted"), !0) : !1
            },
            setTTL: function(t, e) {
                var i = +new Date;
                return u(t), e = Number(e) || 0, t in _ ? (_.__jstorage_meta.TTL || (_.__jstorage_meta.TTL = {}), e > 0 ? _.__jstorage_meta.TTL[t] = i + e : delete _.__jstorage_meta.TTL[t], l(), c(), a(), !0) : !1
            },
            getTTL: function(t) {
                var e, i = +new Date;
                return u(t), t in _ && _.__jstorage_meta.TTL && _.__jstorage_meta.TTL[t] ? (e = _.__jstorage_meta.TTL[t] - i, e || 0) : 0
            },
            flush: function() {
                return _ = {
                    __jstorage_meta: {
                        CRC32: {}
                    }
                }, l(), a(), s(null, "flushed"), !0
            },
            storageObj: function() {
                function t() {}
                return t.prototype = _, new t
            },
            index: function() {
                var t, e = [];
                for (t in _) _.hasOwnProperty(t) && "__jstorage_meta" != t && e.push(t);
                return e
            },
            storageSize: function() {
                return x
            },
            currentBackend: function() {
                return C
            },
            storageAvailable: function() {
                return !!C
            },
            listenKeyChange: function(t, e) {
                u(t), S[t] || (S[t] = []), S[t].push(e)
            },
            stopListening: function(t, e) {
                if (u(t), S[t]) {
                    if (!e) return void delete S[t];
                    for (var i = S[t].length - 1; i >= 0; i--) S[t][i] == e && S[t].splice(i, 1)
                }
            },
            subscribe: function(t, e) {
                if (t = (t || "").toString(), !t) throw new TypeError("Channel not defined");
                E[t] || (E[t] = []), E[t].push(e)
            },
            publish: function(t, e) {
                if (t = (t || "").toString(), !t) throw new TypeError("Channel not defined");
                f(t, e)
            },
            reInit: function() {
                e()
            },
            noConflict: function(t) {
                return delete window.$.jStorage, t && (window.jStorage = this), this
            }
        }, t()
    }(), "undefined" != typeof jQuery && (jQuery.fn.humaneDates = function(t) {
        var e = jQuery.extend({
            lowercase: !1
        }, t);
        return this.each(function() {
            var t = jQuery(this),
                i = t.attr("datetime") || t.attr("title");
            i = humaneDate(i), i && e.lowercase && (i = i.toLowerCase()), i && t.html() != i && t.html(i)
        })
    }),
    function() {
        "use strict";

        function t(t, e) {
            if (!t) throw e
        }

        function e(t) {
            jQuery(document.createElement("link")).attr({
                href: t,
                type: "text/css",
                rel: "stylesheet"
            }).appendTo("head")
        }

        function i() {
            //jQuery.facebox.settings.overlay = !0,
           //     jQuery.facebox.settings.closeImage = "http://torque.bittorrent.com/facebox/src/closelabel.png", jQuery.facebox.settings.loadingImage = "http://torque.bittorrent.com/facebox/src/loading.gif", //jQuery.facebox.settings.opacity = .6
        }

        function n() {
            var t = navigator.userAgent.match(/Macintosh/);
            return void 0 !== t && null !== t
        }

        function r(t) {
            //return "http://127.0.0.1:" + t
        }

        function s(t) {
            return r(t) + "/gui/pair?name=" + encodeURIComponent(window.location.host)
        }

        function a(t) {
            return r(t) + "/version/"
        }

        function o(t) {
            return 7 * Math.pow(t, 3) + 3 * Math.pow(t, 2) + 5 * t + 1e4
        }
        var l = 5,
            u = 3e3;
        t("undefined" != typeof JSON, "JSON is a hard dependency"), t("undefined" != typeof _, "underscore/lodash is a hard dependency"), t("undefined" != typeof jQuery, "jQuery is a hard dependency"), this.PairingView = Backbone.View.extend({
            initialize: function() {
                t("native" !== this.model.get("pairing_type")), this.model.on("pairing:authorize", this.authorize_iframe, this)
            },
            authorize_iframe: function(n) {
                if ("undefined" == typeof jQuery.facebox) return e("http://torque.bittorrent.com/facebox/src/facebox.css"), void jQuery.getScript("http://torque.bittorrent.com/facebox/src/facebox.js", _.bind(this.authorize_iframe, this, n));
                i();
                var r = jQuery("<div></div>");
                r.attr("id", "pairing"), r.css("position", "absolute"), r.css("height", "200px"), r.css("width", "400px"), r.css("left", "%50"), r.css("margin-left", "-200px");
                var s = jQuery("<iframe></iframe>"),
                    a = "http://torque.bittorrent.com",
                    o = a + "/pairing/index.html?product=" + this.model.get("product") + "&mime=" + this.model.get("plugin_manager").get("mime_type") + "&name=" + encodeURIComponent(document.title) + "&permissions=download,create,remote";
                s.attr("src", o), s.css("padding", "0px"), s.css("margin", "0px"), r.append(s), jQuery(window).on("message", function(e) {
                    if (e.originalEvent.origin === a) {
                        if (t(e && e.originalEvent && e.originalEvent.data, "no data was passed in the message from the iframe"), 40 === e.originalEvent.data.length) n.deferred.resolve(e.originalEvent.data);
                        else {
                            if ("denied" !== e.originalEvent.data) throw "the message data from the iframe was neither a pairing key, nor a denied message";
                            n.deferred.reject()
                        }
                        jQuery(document).trigger("close.facebox"), jQuery("#pairing").remove()
                    }
                }), r.hide(), jQuery("body").append(r), jQuery.facebox({
                    div: "#pairing"
                })
            }
        });
        var c = {};
        this.PluginPairing = {
            check_version: function(t) {
                var e = new jQuery.Deferred;
                return this.trigger("pairing:check_version", {
                    port: t
                }), this.get("plugin_manager").get_plugin().ajax(a(t), _.bind(function(t) {
                    if (t.allowed && t.success) {
                        try {
                            e.resolve(JSON.parse(t.data))
                        } catch (i) {
                            return void e.reject()
                        }
                    } else e.reject()
                }, this)), e
            },
            authorize_basic: function(t) {
                var e;
                t in c ? e = c[t] : (e = new jQuery.Deferred, c[t] = e, e.done(function() {
                    delete c[t]
                }), this.get("plugin_manager").get_plugin().ajax(s(t), _.bind(function(t) {
                    t.allowed && t.success ? e.resolve(t.data) : e.reject()
                }, this))), e.then(_.bind(this.authorize_port_success, this, t)), e.fail(_.bind(this.authorize_port_error, this, t))
            }
        };
        var d = {};
        this.JQueryPairing = {
            check_version: function(t) {
                return this.trigger("pairing:check_version", {
                    port: t
                }), jQuery.ajax({
                    url: a(t),
                    dataType: "jsonp",
                    timeout: u
                })
            },
            authorize_basic: function(t) {
                var e, i = _.bind(this.authorize_port_success, this, t),
                    n = _.bind(this.authorize_port_error, this, t);
                t in d ? e = d[t] : (e = jQuery.ajax({
                    url: s(t),
                    dataType: "jsonp",
                    timeout: u
                }), d[t] = e, e.done(function() {
                    delete d[t]
                })), e.then(i), e.fail(n)
            }
        };
        var h = {};
        this.Pairing = Backbone.Model.extend({
            defaults: {
                pairing_type: "iframe"
            },
            initialize: function() {
                _.bindAll(this, "on_check_version_success"), t(this.get("plugin") === !1 || this.get("plugin_manager"), "pairing is not intentionally avoiding the plugin, nor is it providing a plugin manager"), this.get("plugin_manager") ? _.extend(this, PluginPairing) : _.extend(this, JQueryPairing)
            },
            connect: function() {
                t(!this.session, "trying to port scan while one is already in progress");
                var e = {
                        abort: !1
                    },
                    i = [],
                    n = _.after(l, _.bind(function() {
                        if (e.abort !== !0) {
                            this.disconnect();
                            var n = _.reduce(i, function(e, i) {
                                t("pending" !== i.state(), "executing pairing complete functionality while some queries are in flight");
                                var n = "resolved" === i.state();
                                return e + (n ? 1 : 0)
                            }, 0);
                            0 === n && this.trigger("pairing:stop")
                        }
                    }, this));
                _.times(l, function(t) {
                    var r = o(t),
                        s = this.check_version(r);
                    s.done(_.bind(function() {
                        e.abort || this.on_check_version_success.apply(this, arguments)
                    }, this, r)), i.push(s), s.always(n)
                }, this), this.session = e
            },
            disconnect: function() {
                this.session && (this.session.abort = !0, this.session = null)
            },
            on_check_version_success: function(t, e) {
                var i = {
                    version: "object" == typeof e ? e.version : "unknown",
                    name: "object" == typeof e ? e.name : "unknown",
                    port: t,
                    authorize: !0
                };
                ("invalid request" === e || e && e.version) && (this.trigger("pairing:found", i), i.authorize && this.authorize(t))
            },
            authorize: function(t) {
                if ("native" === this.get("pairing_type") || n()) this.authorize_basic(t);
                else {
                    var e = this.get("plugin_manager").get_plugin().pair(this.get("product"));
                    if (40 === e.length) this.authorize_port_success(t, e);
                    else {
                        var i;
                        t in h ? i = h[t] : (i = new jQuery.Deferred, h[t] = i, i.done(function() {
                            delete h[t]
                        }), this.trigger("pairing:authorize", {
                            port: t,
                            deferred: i
                        })), i.then(_.bind(this.authorize_port_success, this, t)), i.fail(_.bind(this.authorize_port_error, this, t))
                    }
                }
            },
            authorize_port_success: function(t, e) {
                this.trigger("pairing:authorized", {
                    port: t,
                    key: e
                })
            },
            authorize_port_error: function(t) {
                this.trigger("pairing:denied", t)
            }
        })
    }.call(this),
    function() {
        "use strict";

        function t(t, e) {
            if (!t) throw e
        }

        function e() {
            var t = navigator.userAgent.match(/Macintosh/);
            return void 0 !== t && null !== t
        }

        function i(t, e, i) {
            var n = function() {
                t.call() ? e.call() : setTimeout(n, i || 500)
            };
            _.defer(n)
        }

        function n(t) {
            jQuery(document.createElement("link")).attr({
                href: t,
                type: "text/css",
                rel: "stylesheet"
            }).appendTo("head")
        }

        function r() {
            jQuery.facebox.settings.overlay = !0, jQuery.facebox.settings.closeImage = "http://torque.bittorrent.com/facebox/src/closelabel.png", jQuery.facebox.settings.loadingImage = "http://torque.bittorrent.com/facebox/src/loading.gif", jQuery.facebox.settings.opacity = .6
        }
        t("undefined" != typeof JSON, "JSON is a hard dependency"), t("undefined" != typeof _, "underscore/lodash is a hard dependency"), t("undefined" != typeof jQuery, "jQuery is a hard dependency");
        var s = _.memoize(function(t) {
            var e = new jQuery.Deferred,
                i = (document.createElement("object"), t + "_onload");
            window[i] = function() {
                e.resolve()
            };
            var n = document.createElement("div");
            return jQuery(n).css({
                position: "absolute",
                left: "-999em",
                "z-index": -1
            }), n.innerHTML = '<object type="' + t + '" width="0" height="0"><param name="onload" value="' + i + '" /></object>', document.body.appendChild(n), e
        });
        this.PluginManagerView = Backbone.View.extend({
            initialize: function(t) {
                this.model.on("plugin:install_plugin", this.download, this), this.model.on("plugin:plugin_updated", this.restart, this)
            },
            setup: function(t, e) {
                return "undefined" == typeof jQuery.facebox ? (n("http://torque.bittorrent.com/facebox/src/facebox.css"), void jQuery.getScript("http://torque.bittorrent.com/facebox/src/facebox.js", _.bind(this.setup, this, t, e))) : (r(), void t.call(e))
            },
            restart: function(t) {
                t.abort = !0, this.setup(function() {
                    var t = jQuery("<div></div>");
                    t.attr("id", "plugin_download"), t.css("position", "absolute"), t.css("height", "200px"), t.css("width", "400px"), t.css("left", "%50"), t.css("margin-left", "-200px");
                    var e = jQuery("<p></p>");
                    e.text("The " + this.model.get("product") + " plugin needs to complete an update. Please restart your browser."), t.append(e), t.hide(), jQuery("body").append(t), jQuery.facebox({
                        div: "#plugin_download"
                    })
                }, this)
            },
            download: function(t) {
                t.install = !0, this.setup(function() {
                    fn.openModal("#setup-modal");
                    var t = this;
                    $("#setup-torque").unbind("click").on("click", function() {
                        var e = jQuery("<div></div>");
                        e.attr("id", "plugin_download"), e.css("position", "absolute"), e.css("height", "200px"), e.css("width", "400px"), e.css("left", "%50"), e.css("margin-left", "-200px");
                        var i = t.model.get("download_url"),
                            n = '<p style="text-align:center;">This site requires the ' + t.model.get("product") + ' plugin.<br><span style="font-size:8pt;">By installing this software, you<br>are agreeing to the <a href="http://www.bittorrent.com/legal/eula">EULA</a></span><br><br><a class="btn" id="download" href="' + i + '">Download</a></p>';
                        e.append(n), t.model.on("plugin:plugin_installed", function() {
                            jQuery(document).trigger("close.facebox"), jQuery("#plugin_download").remove()
                        }), e.hide(), jQuery("body").append(e), jQuery.facebox({
                            div: "#plugin_download"
                        })
                    })
                }, this)
            }
        }), this.PluginManager = Backbone.Model.extend({
            soshare_props: {
                latest_version: "4.4.1",
                mime_type: "application/x-gyre-soshare",
                activex_progid: "gyre.soshare",
                windows_download_url: "http://torque.bittorrent.com/SoShare.msi",
                osx_download_url: "http://torque.bittorrent.com/SoShare.pkg"
            },
            torque_props: {
                latest_version: "4.3.8",
                mime_type: "application/x-bittorrent-torque",
                activex_progid: "bittorrent.torque",
                windows_download_url: "./torque/win/Torque.exe",
                osx_download_url: "./torque/mac/Torque.pkg"
            },
            defaults: {
                pid: "btapp_plugin_WARNING_HAVE_NOT_INITIALIZED",
                window_hash: "4823",
                product: "Torque"
            },
            initialize: function() {
                var t = _.functions(this);
                t.unshift(this), _.bindAll.apply(_, t), this.set("pid", "btapp_plugin_" + Math.floor(1024 * Math.random())), "SoShare" === this.get("product") ? _.each(this.soshare_props, function(t, e) {
                    this.has(e) || this.set(e, t)
                }, this) : ("Torque" === this.get("product") || "uTorrent" === this.get("product") || "BitTorrent" === this.get("product")) && _.each(this.torque_props, function(t, e) {
                    this.has(e) || this.set(e, t)
                }, this);
                var i = this.get(e() ? "osx_download_url" : "windows_download_url");
                this.set("download_url", i), jQuery(_.bind(_.defer, this, this.mime_type_check))
            },
            disconnect: function() {},
            mime_type_check: function() {
                this.supports_mime_type() ? this.mime_type_check_yes() : this.mime_type_check_no()
            },
            mime_type_check_no: function() {
                var t = {
                    install: !1
                };
                this.trigger("plugin:install_plugin", t), i(this.supports_mime_type, this.mime_type_check_yes)
            },
            mime_type_check_yes: function() {
                this.trigger("plugin:plugin_installed");
                var t = s(this.get("mime_type"));
                t.then(_.bind(function() {
                    this.trigger("plugin:plugin_running"), this.plugin_up_to_date_check()
                }, this))
            },
            plugin_up_to_date_check: function() {
                this.plugin_up_to_date() ? this.plugin_up_to_date_yes() : this.plugin_up_to_date_no()
            },
            plugin_up_to_date_yes: function() {
                this.client_installed_check()
            },
            plugin_up_to_date_no: function() {
                var t = {
                    update: !0
                };
                this.trigger("plugin:update_plugin", t), t.update ? this.get_plugin().checkForUpdate(_.bind(this.plugin_up_to_date_yes, this)) : this.plugin_up_to_date_yes()
            },
            client_installed_check: function() {
                this.client_installed() ? this.client_installed_check_yes() : this.client_installed_check_no()
            },
            client_installed_check_no: function() {
                var t = {
                    install: !0
                };
                if (this.trigger("plugin:install_client", t), t.install) this.get_plugin().downloadProgram(this.get("product"), _.bind(function(t, e, i, n, r) {
                    jQuery.jStorage.set("pairing_key", r), this.trigger("plugin:downloaded_client")
                }, this)), i(this.client_installed, this.client_running_check_yes);
                else {
                    var e = {
                        check: !1
                    };
                    this.trigger("plugin:check_for_running_client", e), e.check && this.client_running_check()
                }
            },
            client_installed_check_yes: function() {
                this.trigger("plugin:client_installed"), this.client_running_check()
            },
            client_running_check: function() {
                this.client_running() ? this.client_running_check_yes() : this.client_running_check_no()
            },
            client_running_check_no: function() {
                var t = {
                    run: !0
                };
                this.trigger("plugin:run_client", t), t.run && this.get_plugin().runProgram(this.get("product"), function() {}), i(this.client_running, this.client_running_check_yes)
            },
            client_running_check_yes: function() {
                this.trigger("plugin:client_running")
            },
            supports_mime_type: function() {
                if ("chrome-extension:" === window.location.protocol) return !0;
                var t = -1 !== navigator.appVersion.indexOf("MSIE") ? !0 : !1;
                if (!t) {
                    navigator.plugins.refresh();
                    for (var e = 0; e < navigator.plugins.length; e++) {
                        var i = navigator.plugins[e][0];
                        if (i.type === this.get("mime_type")) return !0
                    }
                    return !1
                }
                try {
                    var n = new ActiveXObject(this.get("activex_progid"));
                    return void 0 !== n
                } catch (r) {
                    return !1
                }
            },
            plugin_up_to_date: function() {
                if ("chrome-extension:" === window.location.protocol) return !0;
                for (var t = this.get_plugin().version, e = _.map(t.split("."), function(t) {
                        return parseInt(t, 10)
                    }), i = _.map(this.get("latest_version").split("."), function(t) {
                        return parseInt(t, 10)
                    }), n = 0; n < e.length; n++) {
                    if (e[n] < i[n]) return !1;
                    if (e[n] > i[n]) return !0
                }
                return !0
            },
            get_plugin: function() {
                var e = jQuery('[type="' + this.get("mime_type") + '"]');
                return t(1 === e.length, "cannot call get_plugin before adding the plugin"), e[0]
            },
            plugin_loaded: function() {
                return t(this.supports_mime_type(), "you have not installed the plugin yet"), t(0 !== jQuery("#" + this.get("pid")).length, "you have not yet added the plugin"), this.get_plugin().version
            },
            get_window_name: function(t) {
                return "uTorrent" === t ? "Torrent4823" : t
            },
            client_running: function() {
                var t = this.get_plugin().isRunning(this.get_window_name(this.get("product")));
                return "object" == typeof t ? t && t.length > 0 : t
            },
            client_installed: function() {
                var e = this.get_plugin().getInstallVersion(this.get("product")),
                    i = "This application is not supported.";
                return t(e !== i, i), e
            }
        })
    }.call(this),
    function() {
        "use strict";

        function t(t, e) {
            if (!t) throw e
        }
        t("undefined" != typeof JSON, "JSON is a hard dependency"), t("undefined" != typeof _, "underscore/lodash is a hard dependency"), t("undefined" != typeof PluginManager, "plugin.btapp.js is a hard dependency"), t("undefined" != typeof Pairing, "pairing.btapp.js is a hard dependency"), t("undefined" != typeof jQuery, "jQuery is a hard dependency"), t("undefined" != typeof jQuery.jStorage, "jQuery.jStorage is a hard dependency");
        var e = this;
        this.TorrentClient = Backbone.Model.extend({
            initialize: function(t) {
                this.btappCallbacks = {}
            },
            storeCallbackFunction: function(t) {
                t = t || function() {};
                for (var e = "bt_", i = 0; 20 > i || e in this.btappCallbacks; i++) e += Math.floor(10 * Math.random());
                return this.btappCallbacks[e] = t, e
            },
            isRPCFunctionSignature: function(e) {
                return t("string" == typeof e, "do not check function signature of non-strings"), e.match(/\[native function\](\([^\)]*\))+/) || e.match(/\[nf\](\([^\)]*\))+/)
            },
            isJSFunctionSignature: function(e) {
                return t("string" == typeof e, "do not check function signature of non-strings"), e.match(/\[nf\]bt_/)
            },
            getStoredFunction: function(e) {
                t(TorrentClient.prototype.isJSFunctionSignature(e), 'only store functions that match the pattern "[nf]bt_*"');
                var i = e.substring(4);
                return t(i in this.btappCallbacks, "trying to get a function with a key that is not recognized"), this.btappCallbacks[i]
            },
            validateArguments: function(e, i) {
                t("string" == typeof e, "expected functionValue to be a string"), t("object" == typeof i, "expected variables to be an object");
                var n = e.match(/\(.*?\)/g);
                return _.any(n, function(t) {
                    return t = t.match(/\w+/g) || [], t.length === i.length && _.all(t, function(t, e) {
                        if ("undefined" == typeof i[e]) throw "client functions do not support undefined arguments";
                        if ("null" == typeof i[e]) return !0;
                        switch (t) {
                            case "number":
                            case "string":
                            case "boolean":
                                return typeof i[e] === t;
                            case "unknown":
                                return !0;
                            case "array":
                                return "object" == typeof i[e];
                            case "dispatch":
                                return "object" == typeof i[e] || "function" == typeof i[e];
                            default:
                                throw "there is an invalid type in the function signature exposed by the client"
                        }
                    })
                })
            },
            convertCallbackFunctionArgs: function(t) {
                _.each(t, function(e, i) {
                    "function" == typeof e ? t[i] = this.storeCallbackFunction(e) : "object" == typeof e && e && this.convertCallbackFunctionArgs(e)
                }, this)
            },
            createFunction: function(e, i, n) {
                t(e, "cannot create a function without a session id");
                var r = _.bind(function() {
                    var r, s = [];
                    for (r = 0; r < arguments.length; r++) s.push(arguments[r]);
                    if (!TorrentClient.prototype.validateArguments.call(this, n, s)) throw "arguments do not match any of the function signatures exposed by the client";
                    this.convertCallbackFunctionArgs(s);
                    var a = new jQuery.Deferred,
                        o = _.bind(function(e) {
                            if (_.each(i, function(t) {
                                    var i = decodeURIComponent(t);
                                    "undefined" != typeof e && (e = e[i])
                                }), "undefined" == typeof e) a.reject("return value parsing error " + JSON.stringify(e));
                            else if ("string" == typeof e && this.isJSFunctionSignature(e)) {
                                var n = this.getStoredFunction(e);
                                t(n, "the client is returning a function name that does not exist"), a.resolve(n)
                            } else a.resolve(e)
                        }, this),
                        l = function(t) {
                            a.reject(t)
                        };
                    return this.query({
                        type: "function",
                        path: JSON.stringify(i),
                        args: JSON.stringify(s),
                        session: e
                    }).done(o).fail(l), this.trigger("queries", i), a
                }, this);
                return r.valueOf = function() {
                    return n
                }, r
            },
            query: function(e) {
                var i = !1,
                    n = new jQuery.Deferred;
                t("update" === e.type || "state" === e.type || "function" === e.type || "disconnect" === e.type, 'the query type must be either "update", "state", or "function"'), e.hostname = window.location.hostname || window.location.pathname;
                var r = _.bind(function(t) {
                    if ("invalid request" === t) throw setTimeout(_.bind(this.reset, this), 1e3), "pairing occured with a torrent client that does not support the btapp api";
                    "object" != typeof t || "error" in t ? (n.reject(), this.trigger("client:error", t)) : n.resolve(t)
                }, this);
                return this.send_query(e).done(function() {
                    i || r.apply(this, arguments)
                }).fail(function() {
                    i || n.reject.apply(this, arguments)
                }), n.abort = function() {
                    i = !0
                }, n
            }
        }), this.FalconTorrentClient = TorrentClient.extend({
            initialize: function(i) {
                if (TorrentClient.prototype.initialize.call(this, i), t("username" in i && "password" in i || "remote_data" in i, "attempting to connect to client through falcon without providing the necessary credentials"), this.username = i.username, this.password = i.password, "remote_data" in i && (this.remote_data = i.remote_data), "login_success" in i && (this.login_success = i.login_success), "login_error" in i && (this.login_error = i.login_error), "login_progress" in i && (this.login_progress = i.login_progress), "undefined" != typeof falcon) return void _.defer(_.bind(this.reset, this));
                e.config = {
                    srp_root: "https://remote.utorrent.com"
                };
                var n = "https://remote.utorrent.com/static/js/jsloadv2.js?v=0.57";
                jQuery.getScript(n, _.bind(function(t, e) {
                    function i(t) {
                        for (var e = [], i = [], n = 0; n < t.length - 1; n++) {
                            var r = t[n];
                            e.push({
                                name: r
                            }), i.push(r)
                        }
                        return e.push({
                            name: t[t.length - 1],
                            requires: i
                        }), e
                    }
                    var n = ["falcon/deps/SHA-1.js", "falcon/deps/jsbn.js", "falcon/deps/jsbn2.js", "falcon/deps/sjcl.js", "falcon/falcon.js", "falcon/falcon.encryption.js", "falcon/falcon.api.js", "falcon/falcon.session.js"],
                        r = i(n);
                    new JSLoad(r, "https://remote.utorrent.com/static/js/").load(["falcon/falcon.session.js"], _.bind(function() {
                        this.remote_data ? (this.session = new falcon.session({
                            client_data: this.remote_data
                        }), this.falcon = this.session.api, this.trigger("client:connected")) : this.delayed_reset()
                    }, this))
                }, this))
            },
            connect: function() {
                t(!this.falcon, "trying to connect with falcon already set");
                var e = {
                    success: _.bind(function(t) {
                        this.login_success && this.login_success(t), this.falcon = this.session, this.trigger("client:connected", t)
                    }, this),
                    error: _.bind(function(t, e, i) {
                        this.login_error && this.login_error(t, e, i), this.trigger("client:error_connecting", i), this.trigger("client:error", i)
                    }, this)
                };
                this.session = new falcon.session, this.session.negotiate(this.username, this.password, {
                    success: e.success,
                    error: e.error,
                    progress: this.login_progress
                })
            },
            disconnect: function() {},
            send_query: function(e) {
                var i = new jQuery.Deferred;
                return t(this.falcon, "cannot send a query to the client without falcon properly connected"), this.falcon.request("/gui/", {
                    btapp: "backbone.btapp.js"
                }, e, function(e) {
                    t("build" in e, "expected build information in the falcon response"), t("result" in e, "expected result information in the falcon response"), i.resolve(e.result)
                }, _.bind(function() {
                    i.reject(), this.delayed_reset()
                }, this), {}), i
            },
            delayed_reset: function() {
                this.reset_timeout = setTimeout(_.bind(function() {
                    this.reset(), this.reset_timeout = null
                }, this), 1e3)
            },
            reset: function() {
                this.falcon = null, this.connect()
            }
        }), this.LocalTorrentClient = TorrentClient.extend({
            defaults: {
                product: "Torque"
            },
            initialize: function(t) {
                TorrentClient.prototype.initialize.call(this, t), this.btapp = t.btapp, this.initialize_objects(t), this.reset_timeout = null
            },
            disconnect: function() {
                this.pairing && this.pairing.disconnect(), this.plugin_manager && this.plugin_manager.disconnect(), this.reset_timeout && clearTimeout(this.reset_timeout)
            },
            initialize_objects: function(t) {
                this.initialize_plugin(t), this.initialize_pairing(t)
            },
            initialize_plugin: function(t) {
                this.get("plugin") !== !1 && (this.plugin_manager = new PluginManager(t), new PluginManagerView({
                    model: this.plugin_manager
                }), this.plugin_manager.on("all", this.trigger, this))
            },
            initialize_pairing: function(e) {
                t(this.get("plugin") === !1 || "undefined" != typeof this.plugin_manager, "you must initialize the plugin manager before the pairing object"), this.pairing = new Pairing(_.extend(e, {
                    plugin_manager: this.plugin_manager
                })), "native" !== this.pairing.get("pairing_type") && new PairingView({
                    model: this.pairing
                }), this.pairing.on("all", this.trigger, this), t(this.has("product"), "client does not know what product to connect to");
                var i = this.get("product");
                this.pairing.on("pairing:found", function(t) {
                    if (t && t.name.toLowerCase() === i.toLowerCase()) {
                        var e = jQuery.jStorage.get(i + "_pairing_key");
                        e ? (t.abort = !0, t.authorize = !1, this.connect_to_authenticated_port(t.port, e)) : (t.abort = !0, t.authorize = !0)
                    } else t.abort = !1, t.authorize = !1
                }, this), this.pairing.on("pairing:authorized", _.bind(function(t) {
                    jQuery.jStorage.set(i + "_pairing_key", t.key), this.connect_to_authenticated_port(t.port, t.key)
                }, this)), this.pairing.on("pairing:stop", this.delayed_reset, this), this.get("plugin") === !1 ? this.delayed_reset() : this.plugin_manager.on("plugin:client_running", this.reset, this)
            },
            ajax: function(t, e, i) {
                this.get("plugin") === !1 ? jQuery.ajax({
                    url: t,
                    success: e,
                    error: i,
                    dataType: "jsonp"
                }) : this.plugin_manager.get_plugin().ajax(t, _.bind(function(t) {
                    var n;
                    if (t.allowed && t.success && "invalid request" !== t.data) {
                        try {
                            n = JSON.parse(t.data)
                        } catch (r) {
                            var s = "parsererror";
                            return i(s), void this.trigger("client:error", s)
                        }
                        e(n)
                    } else this.trigger("client:error", t), i(t)
                }, this))
            },
            connect_to_authenticated_port: function(t, e) {
                var i = _.bind(function() {
                        this.url = ""//"http://127.0.0.1:" + t + "/btapp/?pairing=" + e, this.trigger("client:connected")
                    }, this),
                    n = _.bind(function() {
                        jQuery.jStorage.deleteKey(this.get("product") + "_pairing_key"), this.delayed_reset()
                    }, this),
                    r = "";//"http://127.0.0.1:" + t + "/btapp/?pairing=" + e;
                this.ajax(r, i, n)
            },
            delayed_reset: function() {
                this.reset_timeout = setTimeout(_.bind(function() {
                    this.reset(), this.reset_timeout = null
                }, this), 1e3)
            },
            reset: function() {
                this.pairing.connect()
            },
            send_query: function(t) {
                var e = new jQuery.Deferred;
                this.trigger("client:query", this.url, t);
                var i = this.url;
                return _.each(t, function(t, e) {
                    i += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(t)
                }), this.ajax(i, function(t) {
                    e.resolve(t)
                }, function() {
                    e.reject()
                }), e
            }
        })
    }.call(this),
    function() {
        "use strict";

        function t(t, e) {
            if (!t) throw e
        }
        t("undefined" != typeof JSON, "JSON is a hard dependency"), t("undefined" != typeof _, "underscore/lodash is a hard dependency"), t("undefined" != typeof TorrentClient, "client.btapp.js is a hard dependency"), t("undefined" != typeof jQuery, "jQuery is a hard dependency"), t("undefined" != typeof jQuery.jStorage, "jQuery.jStorage is a hard dependency");
        var e = 3e3,
            i = 500,
            n = 100,
            r = function(t) {
                return _.isObject(t) && !_.isArray(t) && jQuery.isEmptyObject(t)
            },
            s = {
                initialize: function() {
                    _.bindAll(this, "initializeValues", "updateState", "clearState", "isEmpty", "destructor"), this.initializeValues()
                },
                clearRemoteProcedureCalls: function() {
                    for (var t = _.keys(this.bt || {}), e = 0; e < t.length; e++) {
                        var i = t[e];
                        delete this.bt[i], delete this[i]
                    }
                    this.bt = {}
                },
                initializeValues: function() {
                    this.path = null, this.session = null, this.clearRemoteProcedureCalls()
                },
                updateRemoveFunctionState: function(e) {
                    return t(e in this.bt, "trying to remove a function that does not exist"), this.trigger("remove:bt:" + e), this.trigger("remove:bt", this.bt[e], e), delete this.bt[e], "get" !== e && "set" !== e && "unset" !== e && "length" !== e ? (t(e in this, 'trying to remove the function "' + e + '", which does not exist in the prototype of this object'), this.trigger("remove:" + e), delete this[e], {}) : void 0
                },
                updateRemoveObjectState: function(e, i, n, r, s) {
                    var a = {},
                        o = this.get(s);
                    return t(o, "trying to remove a model that does not exist"), t("updateState" in o, "trying to remove an object that does not extend BtappBase"), o.updateState(e, i, n, r), o.isEmpty() && (a[s] = o, o.trigger("destroy")), a
                },
                updateRemoveElementState: function(t, e, i, n, r) {
                    var s = _.clone(r || []);
                    return s.push(n), "all" === n ? this.updateState(this.session, e, i, s) : _.isNull(i) ? this.updateRemoveAttributeState(n, i) : _.isObject(i) && !_.isArray(i) ? this.updateRemoveObjectState(t, e, i, s, n) : _.isString(i) && TorrentClient.prototype.isRPCFunctionSignature(i) ? this.updateRemoveFunctionState(n) : _.isString(i) && TorrentClient.prototype.isJSFunctionSignature(i) ? this.updateRemoveAttributeState(n, this.client.getStoredFunction(i)) : "id" !== n ? this.updateRemoveAttributeState(n, i) : void 0
                },
                updateRemoveState: function(t, e, i, n) {
                    var r = {};
                    for (var s in i) void 0 === e[s] && _.extend(r, this.updateRemoveElementState(t, e[s], i[s], s, n));
                    return r
                },
                updateAddFunctionState: function(e, i, n, r) {
                    var s = _.clone(n || []);
                    s.push(r);
                    var a = this.client.createFunction(e, s, i);
                    return t(!(r in this.bt), "trying to add a function that already exists"), this.bt[r] = a, "get" !== r && "set" !== r && "unset" !== r && "length" !== r && (t(!(r in this), 'trying to add the function "' + r + '", which already exists in the prototype of this object'), this[r] = a, this.trigger("add:" + r)), this.trigger("add:bt:" + r), this.trigger("add:bt", this.bt[r], r), {}
                },
                updateAddObjectState: function(t, e, i, n, r) {
                    var s = {},
                        a = this.get(r);
                    return void 0 === a && (a = BtappCollection.prototype.verifyPath(n) ? new BtappCollection : new BtappModel({
                        id: r
                    }), a.path = n, a.client = this.client, s[r] = a), a.updateState(this.session, e, i, n), s
                },
                updateAddElementState: function(t, e, i, n, r) {
                    var s = _.clone(r || []);
                    return s.push(n), _.isString(i) && TorrentClient.prototype.isJSFunctionSignature(i) && (i = this.client.getStoredFunction(i)), "all" === n ? this.updateState(this.session, e, i, s) : _.isNull(e) ? this.updateAddAttributeState(t, e, i, s, n) : _.isObject(e) && !_.isArray(e) ? this.updateAddObjectState(t, e, i, s, n) : _.isString(e) && TorrentClient.prototype.isRPCFunctionSignature(e) ? this.updateAddFunctionState(t, e, r, n) : _.isString(e) && TorrentClient.prototype.isJSFunctionSignature(e) ? this.updateAddAttributeState(t, this.client.getStoredFunction(e), i, r, n) : this.updateAddAttributeState(t, e, i, s, n)
                },
                updateAddState: function(t, e, i, n) {
                    var r = {};
                    for (var s in e) _.extend(r, this.updateAddElementState(t, e[s], i[s], s, n));
                    return r
                },
                updateState: function(e, i, n, s) {
                    t(!r(i) || !r(n), 'the client is outputing empty objects("' + s + '")...these should have been trimmed off'), this.session = e, this.path || (this.path = s, t(this.verifyPath(this.path), "cannot updateState with an invalid collection path")), i = i || {}, n = n || {}, this.applyStateChanges(this.updateAddState(e, i, n, s), this.updateRemoveState(e, i, n, s))
                },
                sync: function() {}
            };
        this.BtappCollection = Backbone.Collection.extend(s).extend({
            initialize: function(t, e) {
                Backbone.Collection.prototype.initialize.apply(this, arguments), s.initialize.apply(this, arguments), this.on("add", this.customAddEvent, this), this.on("remove", this.customRemoveEvent, this), this.on("change", this.customChangeEvent, this)
            },
            customEvent: function(e, i) {
                _.isFunction(i) || (t(i && i.id, "called a custom " + e + " event without a valid attribute"), this.trigger(e + ":" + i.id, i))
            },
            customAddEvent: function(t) {
                this.customEvent("add", t)
            },
            customRemoveEvent: function(t) {
                this.customEvent("remove", t)
            },
            customChangeEvent: function(t) {
                this.customEvent("change", t)
            },
            destructor: function() {
                this.off("add", this.customAddEvent, this), this.off("remove", this.customRemoveEvent, this), this.off("change", this.customChangeEvent, this), this.trigger("destroy")
            },
            clearState: function() {
                this.each(function(t) {
                    t.clearState()
                }), this.initializeValues(), this.reset(), this.destructor()
            },
            verifyPath: function(t) {
                var e = [
                    ["btapp", "torrent"],
                    ["btapp", "torrent", "all", "*", "file"],
                    ["btapp", "torrent", "all", "*", "peer"],
                    ["btapp", "label"],
                    ["btapp", "label", "all", "*", "torrent"],
                    ["btapp", "label", "all", "*", "torrent", "all", "*", "file"],
                    ["btapp", "label", "all", "*", "torrent", "all", "*", "peer"],
                    ["btapp", "rss"],
                    ["btapp", "rss", "all", "*", "item"],
                    ["btapp", "stream"],
                    ["btapp", "stream", "all", "*", "diskio"]
                ];
                return _.any(e, function(e) {
                    if (e.length !== t.length) return !1;
                    for (var i = 0; i < e.length; i++)
                        if ("*" !== e[i] && e[i] !== t[i]) return !1;
                    return !0
                })
            },
            updateRemoveAttributeState: function(t, e) {
                throw "trying to remove an invalid type from a BtappCollection"
            },
            updateAddAttributeState: function(t, e, i, n, r) {
                throw "trying to add an invalid type to a BtappCollection"
            },
            isEmpty: function() {
                return r(this.bt) && 0 === this.length
            },
            applyStateChanges: function(t, e) {
                this.add(_.values(t)), this.remove(_.values(e))
            }
        }), this.BtappModel = Backbone.Model.extend(s).extend({
            initialize: function(t) {
                Backbone.Model.prototype.initialize.apply(this, arguments), s.initialize.apply(this, arguments), this.on("change", this.customEvents, this)
            },
            destructor: function() {
                this.off("change", this.customEvents, this), this.trigger("destroy")
            },
            clearState: function() {
                this.initializeValues();
                var t = _.clone(this.attributes);
                delete t.id, _.each(t, function(t) {
                    t && _.isObject(t) && t.hasOwnProperty("clearState") && t.clearState()
                }), Backbone.Model.prototype.set.call(this, t, {
                    internal: !0,
                    unset: !0
                }), this.destructor()
            },
            customEvents: function() {
                var t = this.changedAttributes();
                _.each(t, _.bind(function(t, e) {
                    if (void 0 === t) {
                        var i = this.previous(e);
                        this.trigger("remove", i, e), this.trigger("remove:" + e, i)
                    } else void 0 === this.previous(e) && (this.trigger("add", t, e), this.trigger("add:" + e, t))
                }, this))
            },
            verifyPath: function(t) {
                return !0
            },
            updateRemoveAttributeState: function(e, i) {
                var n = {};
                return t(this.get(e) === i, "trying to remove an attribute, but did not provide the correct previous value"), n[e] = this.get(e), n
            },
            updateAddAttributeState: function(e, i, n, r, s) {
                var a = {};
                return t(this.get(s) !== i, "trying to set a variable to the existing value [" + r + " -> " + JSON.stringify(i) + "]"), void 0 !== n && t(this.get(s) === n, "trying to update an attribute, but did not provide the correct previous value"), a[s] = i, a
            },
            isEmpty: function() {
                var t = _.keys(this.toJSON());
                return r(this.bt) && (0 === t.length || 1 === t.length && "id" === t[0])
            },
            applyStateChanges: function(t, e) {
                Backbone.Model.prototype.set.call(this, t, {
                    internal: !0
                }), Backbone.Model.prototype.set.call(this, e, {
                    internal: !0,
                    unset: !0
                })
            },
            set: function(t, e, i) {
                var n = function(t, e) {
                    if (!(i && "internal" in i || _.isUndefined(this.get(e)))) throw "please use save to set attributes directly to the client"
                };
                return _.isObject(t) || null === t ? _(t).each(n, this) : n.call(this, e, t), Backbone.Model.prototype.set.apply(this, arguments)
            },
            save: function(t, e) {
                var i = [];
                return _(t).each(function(t, e) {
                    i.push(this.bt.set(e, t))
                }, this), jQuery.when.apply(jQuery, i)
            }
        }), this.Btapp = BtappModel.extend({
            initialize: function() {
                BtappModel.prototype.initialize.apply(this, arguments), this.path = ["btapp"], this.connected_state = !1, this.client = null, this.queries = null, this.session = null, this.last_query = null, _.bindAll(this, "connect", "disconnect", "connected", "fetch", "onEvents", "onFetch", "onConnectionError"), this.on("add:events", this.setEvents, this)
            },
            destructor: function() {},
            connect: function(e) {
                t(!this.client, "trying to connect to an undefined client"), t(!this.connected_state, "trying to connect when already connected"), this.connected_state = !0, t(!this.session, "trying to create another session while one is active"), e = e || {}, this.poll_frequency = i, this.queries = e.queries || Btapp.QUERIES.ALL;
                var n = "the queries attribute must be an array of arrays of strings";
                t(_.isArray(this.queries), n), t(_.all(this.queries, function(t) {
                    return _.isArray(t) && _.all(t, function(t) {
                        return _.isString(t)
                    })
                }), n), e.btapp = this, t(!_.isUndefined(TorrentClient), "client.btapp.js is a hard dependency"), this.setClient(e);
                var r = new jQuery.Deferred,
                    s = function() {
                        this.off("client:connected", s, this), r.resolve()
                    };
                return this.on("client:connected", s, this), r
            },
            setClient: function(t) {
                "username" in t && "password" in t || "remote_data" in t ? (this.client = new FalconTorrentClient(t), this.client.bind("client:error_connecting", this.disconnect, this)) : this.client = new LocalTorrentClient(t), this.client.bind("all", this.trigger, this), this.client.bind("client:connected", this.fetch)
            },
            setEvents: function(t) {
                _.each(t.toJSON(), function(e, i) {
                    if ("id" !== i) {
                        var n = {};
                        n[i] = _.bind(this.trigger, this, i), t.save(n)
                    }
                }, this)
            },
            disconnect: function() {
                this.trigger("disconnect", "manual"), t(this.client, "trying to disconnect from an undefined client"), t(this.connected_state, "trying to disconnect when not connected"), this.session && this.client.query({
                    type: "disconnect",
                    session: this.session
                }), this.connected_state = !1, this.last_query && (this.last_query.abort(), this.last_query = null), this.session = null, this.next_timeout && clearTimeout(this.next_timeout), this.client.disconnect(), this.client.btapp = null, this.client = null, this.queries = null, this.clearState()
            },
            connected: function() {
                return this.connected_state;

            },
            onConnectionError: function() {
                this.trigger("disconnect", "error"), this.poll_frequency = e, this.clearState(), this.session = null, this.last_query && (this.last_query.abort(), this.last_query = null), this.client && _.delay(_.bind(this.client.reset, this.client), 500)
            },
            onFetch: function(e) {
                t("session" in e, "did not recieve a session id from the client"), this.session = e.session, this.waitForEvents(e.session)
            },
            fetch: function() {
                this.client && (this.last_query = this.client.query({
                    type: "state",
                    queries: JSON.stringify(this.queries)
                }).done(this.onFetch).fail(this.onConnectionError))
            },
            onEvent: function(t, e) {
                if ("add" in e || "remove" in e) e.add = e.add || {}, e.remove = e.remove || {}, this.updateState(t, e.add.btapp, e.remove.btapp, ["btapp"]);
                else {
                    if (!("callback" in e)) throw "received invalid data from the client";
                    this.client.btappCallbacks[e.callback](e.arguments)
                }
            },
            onEvents: function(r, s) {
                if (t(this.session === r, "should not receive data for a different session after creating a new one. do not forget to abort the last call of your old session."), this.connected_state) {
                    this.trigger("sync", s), 0 === s.length ? this.poll_frequency = Math.min(e, this.poll_frequency + n) : this.poll_frequency = i;
                    for (var a = 0; a < s.length; a++) this.onEvent(r, s[a]);
                    clearTimeout(this.next_timeout), this.next_timeout = setTimeout(_.bind(this.waitForEvents, this, r), this.poll_frequency)
                }
            },
            waitForEvents: function(t) {
                this.client && (this.last_query = this.client.query({
                    type: "update",
                    session: t
                }).done(_.bind(this.onEvents, this, t)).fail(this.onConnectionError))
            }
        }), Btapp.VERSION = "0.2.0", Btapp.QUERIES = {
            ALL: [
                ["btapp"]
            ],
            DHT: [
                ["btapp", "dht"]
            ],
            TORRENTS_BASIC: [
                ["btapp", "create"],
                ["btapp", "add", "torrent"],
                ["btapp", "torrent", "all", "*", "file", "all", "*"],
                ["btapp", "torrent", "all", "*", "properties", "all", "*"]
            ],
            EVENTS: [
                ["btapp", "events"]
            ],
            SETTINGS: [
                ["btapp", "settings"]
            ],
            REMOTE: [
                ["btapp", "connect_remote"],
                ["btapp", "settings", "all", "webui.uconnect_enable"]
            ]
        }, Btapp.STATUS = {
            TORRENT: {
                DELETED: -1,
                DOWNLOAD_FAILED: 0,
                ADDED: 1,
                COMPLETE: 2,
                METADATA_COMPLETE: 3
            },
            RSS_FEED: {
                DELETED: -1,
                ADDED: 1
            }
        }, Btapp.REMOVE = {
            NO_DELETE: 0,
            DELETE_TORRENT: 1,
            DELETE_DATA: 2,
            DELETE_BOTH: 3,
            DELETE_TO_TRASH: 4,
            DELETE_CONVERTED_FILES: 5
        }, Btapp.TORRENT = {
            PRIORITY: {
                LOW: 0,
                MEDIUM: 1,
                HIGH: 2,
                METADATA_ONLY: 3
            },
            FILE: {
                PRIORITY: {
                    NO_DOWNLOAD: 0,
                    LOW: 5,
                    MEDIUM: 10,
                    HIGH: 15
                }
            },
            REMOVE: {
                NO_DELETE: 0,
                DELETE_TORRENT: 1,
                DELETE_DATA: 2,
                DELETE_TORRENT_AND_DATA: 3
            }
        }
    }.call(this),
    function(t) {
        function e(t, e, i, n, r) {
            this._listener = e, this._isOnce = i, this.context = n, this._signal = t, this._priority = r || 0
        }

        function i(t, e) {
            if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
        }

        function n() {
            this._bindings = [], this._prevParams = null;
            var t = this;
            this.dispatch = function() {
                n.prototype.dispatch.apply(t, arguments)
            }
        }
        e.prototype = {
            active: !0,
            params: null,
            execute: function(t) {
                var e, i;
                return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
            },
            detach: function() {
                return this.isBound() ? this._signal.remove(this._listener, this.context) : null
            },
            isBound: function() {
                return !!this._signal && !!this._listener
            },
            isOnce: function() {
                return this._isOnce
            },
            getListener: function() {
                return this._listener
            },
            getSignal: function() {
                return this._signal
            },
            _destroy: function() {
                delete this._signal, delete this._listener, delete this.context
            },
            toString: function() {
                return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
            }
        }, n.prototype = {
            VERSION: "1.0.0",
            memorize: !1,
            _shouldPropagate: !0,
            active: !0,
            _registerListener: function(t, i, n, r) {
                var s, a = this._indexOfListener(t, n);
                if (-1 !== a) {
                    if (s = this._bindings[a], s.isOnce() !== i) throw new Error("You cannot add" + (i ? "" : "Once") + "() then add" + (i ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else s = new e(this, t, i, n, r), this._addBinding(s);
                return this.memorize && this._prevParams && s.execute(this._prevParams), s
            },
            _addBinding: function(t) {
                var e = this._bindings.length;
                do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
                this._bindings.splice(e + 1, 0, t)
            },
            _indexOfListener: function(t, e) {
                for (var i, n = this._bindings.length; n--;)
                    if (i = this._bindings[n], i._listener === t && i.context === e) return n;
                return -1
            },
            has: function(t, e) {
                return -1 !== this._indexOfListener(t, e)
            },
            add: function(t, e, n) {
                return i(t, "add"), this._registerListener(t, !1, e, n)
            },
            addOnce: function(t, e, n) {
                return i(t, "addOnce"), this._registerListener(t, !0, e, n)
            },
            remove: function(t, e) {
                i(t, "remove");
                var n = this._indexOfListener(t, e);
                return -1 !== n && (this._bindings[n]._destroy(), this._bindings.splice(n, 1)), t
            },
            removeAll: function() {
                for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
                this._bindings.length = 0
            },
            getNumListeners: function() {
                return this._bindings.length
            },
            halt: function() {
                this._shouldPropagate = !1
            },
            dispatch: function(t) {
                if (this.active) {
                    var e, i = Array.prototype.slice.call(arguments),
                        n = this._bindings.length;
                    if (this.memorize && (this._prevParams = i), n) {
                        e = this._bindings.slice(), this._shouldPropagate = !0;
                        do n--; while (e[n] && this._shouldPropagate && e[n].execute(i) !== !1)
                    }
                }
            },
            forget: function() {
                this._prevParams = null
            },
            dispose: function() {
                this.removeAll(), delete this._bindings, delete this._prevParams
            },
            toString: function() {
                return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
            }
        };
        var r = n;
        r.Signal = n, "function" == typeof define && define.amd ? define(function() {
            return r
        }) : "undefined" != typeof module && module.exports ? module.exports = r : t.signals = r
    }(this),
    function() {
        var t = function(t) {
            var e = function(e) {
                function i(t) {
                    return String(t || "").replace(/\W/g, "\\$&")
                }

                function n(t) {
                    if (!t) return "";
                    var e = new RegExp("^" + i(p.prependHash) + "|" + i(p.appendHash) + "$", "g");
                    return t.replace(e, "")
                }

                function r() {
                    var t = k.exec(p.getURL()),
                        e = t && t[1] || "";
                    try {
                        return p.raw ? e : decodeURIComponent(e)
                    } catch (i) {
                        return e
                    }
                }

                function s() {
                    return v ? v.contentWindow.frameHash : null
                }

                function a() {
                    v = _.createElement("iframe"), v.src = "about:blank", v.style.display = "none", _.body.appendChild(v)
                }

                function o() {
                    if (v && f !== s()) {
                        var t = v.contentWindow.document;
                        t.open(), t.write("<html><head><title>" + _.title + '</title><script type="text/javascript">var frameHash="' + f + '";</script></head><body>&nbsp;</body></html>'), t.close()
                    }
                }

                function l(t, e) {
                    if (f !== t) {
                        var i = f;
                        f = t, j && (e ? v.contentWindow.frameHash = t : o()), p.changed.dispatch(n(t), n(i))
                    }
                }

                function u(t, e, i) {
                    t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
                }

                function c(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)
                }

                function d(t) {
                    t = Array.prototype.slice.call(arguments);
                    var e = t.join(p.separator);
                    return e = e ? p.prependHash + e.replace(C, "") + p.appendHash : e
                }

                function h(t) {
                    return t = encodeURI(t), S && E && (t = t.replace(/\?/, "%3F")), t
                }
                var p, f, m, g, v, y, b = 25,
                    _ = e.document,
                    w = (e.history, t.Signal),
                    k = /#(.*)$/,
                    x = /(\?.*)|(\#.*)/,
                    C = /^\#/,
                    S = !1,
                    T = "onhashchange" in e && 7 !== _.documentMode,
                    j = S && !T,
                    E = "file:" === location.protocol;
                return y = j ? function() {
                    var t = r(),
                        e = s();
                    e !== f && e !== t ? p.setHash(n(e)) : t !== f && l(t)
                } : function() {
                    var t = r();
                    t !== f && l(t)
                }, p = {
                    VERSION: "1.2.0",
                    raw: !1,
                    appendHash: "",
                    prependHash: "/",
                    separator: "/",
                    changed: new w,
                    stopped: new w,
                    initialized: new w,
                    init: function() {
                        g || (f = r(), T ? u(e, "hashchange", y) : (j && (v || a(), o()), m = setInterval(y, b)), g = !0, p.initialized.dispatch(n(f)))
                    },
                    stop: function() {
                        g && (T ? c(e, "hashchange", y) : (clearInterval(m), m = null), g = !1, p.stopped.dispatch(n(f)))
                    },
                    isActive: function() {
                        return g
                    },
                    getURL: function() {
                        return e.location.href
                    },
                    getBaseURL: function() {
                        return p.getURL().replace(x, "")
                    },
                    setHash: function(t) {
                        t = d.apply(null, arguments), t !== f && (l(t), t === f && (p.raw || (t = h(t)), e.location.hash = "#" + t))
                    },
                    replaceHash: function(t) {
                        t = d.apply(null, arguments), t !== f && (l(t, !0), t === f && (p.raw || (t = h(t)), e.location.replace("#" + t)))
                    },
                    getHash: function() {
                        return n(f)
                    },
                    getHashAsArray: function() {
                        return p.getHash().split(p.separator)
                    },
                    dispose: function() {
                        p.stop(), p.initialized.dispose(), p.stopped.dispose(), p.changed.dispose(), v = p = e.hasher = null
                    },
                    toString: function() {
                        return '[hasher version="' + p.VERSION + '" hash="' + p.getHash() + '"]'
                    }
                }, p.initialized.memorize = !0, p
            }(window);
            return e
        };
        "function" == typeof define && define.amd ? define(["signals"], t) : "object" == typeof exports ? module.exports = t(require("signals")) : window.hasher = t(window.signals)
    }(),
    function() {
        var t = function(t) {
            function e(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var i = t.length; i--;)
                    if (t[i] === e) return i;
                return -1
            }

            function i(t, i) {
                var n = e(t, i); - 1 !== n && t.splice(n, 1)
            }

            function n(t, e) {
                return "[object " + e + "]" === Object.prototype.toString.call(t)
            }

            function r(t) {
                return n(t, "RegExp")
            }

            function s(t) {
                return n(t, "Array")
            }

            function a(t) {
                return "function" == typeof t
            }

            function o(t) {
                var e;
                return e = null === t || "null" === t ? null : "true" === t ? !0 : "false" === t ? !1 : t === f || "undefined" === t ? f : "" === t || isNaN(t) ? t : parseFloat(t)
            }

            function l(t) {
                for (var e = t.length, i = []; e--;) i[e] = o(t[e]);
                return i
            }

            function u(t, e) {
                for (var i, n, r = (t || "").replace("?", "").split("&"), s = r.length, a = {}; s--;) i = r[s].split("="), n = e ? o(i[1]) : i[1], a[i[0]] = "string" == typeof n ? decodeURIComponent(n) : n;
                return a
            }

            function c() {
                this.bypassed = new t.Signal, this.routed = new t.Signal, this._routes = [], this._prevRoutes = [], this._piped = [], this.resetState()
            }

            function d(e, i, n, s) {
                var a = r(e),
                    o = s.patternLexer;
                this._router = s, this._pattern = e, this._paramsIds = a ? null : o.getParamIds(e), this._optionalParamsIds = a ? null : o.getOptionalParamsIds(e), this._matchRegexp = a ? e : o.compilePattern(e, s.ignoreCase), this.matched = new t.Signal, this.switched = new t.Signal, i && this.matched.add(i), this._priority = n || 0
            }
            var h, p, f;
            return p = "" === /t(.+)?/.exec("t")[1], c.prototype = {
                greedy: !1,
                greedyEnabled: !0,
                ignoreCase: !0,
                ignoreState: !1,
                shouldTypecast: !1,
                normalizeFn: null,
                resetState: function() {
                    this._prevRoutes.length = 0, this._prevMatchedRequest = null, this._prevBypassedRequest = null
                },
                create: function() {
                    return new c
                },
                addRoute: function(t, e, i) {
                    var n = new d(t, e, i, this);
                    return this._sortedInsert(n), n
                },
                removeRoute: function(t) {
                    i(this._routes, t), t._destroy()
                },
                removeAllRoutes: function() {
                    for (var t = this.getNumRoutes(); t--;) this._routes[t]._destroy();
                    this._routes.length = 0
                },
                parse: function(t, e) {
                    if (t = t || "", e = e || [], this.ignoreState || t !== this._prevMatchedRequest && t !== this._prevBypassedRequest) {
                        var i, n = this._getMatchedRoutes(t),
                            r = 0,
                            s = n.length;
                        if (s)
                            for (this._prevMatchedRequest = t, this._notifyPrevRoutes(n, t), this._prevRoutes = n; s > r;) i = n[r], i.route.matched.dispatch.apply(i.route.matched, e.concat(i.params)), i.isFirst = !r, this.routed.dispatch.apply(this.routed, e.concat([t, i])), r += 1;
                        else this._prevBypassedRequest = t, this.bypassed.dispatch.apply(this.bypassed, e.concat([t]));
                        this._pipeParse(t, e)
                    }
                },
                _notifyPrevRoutes: function(t, e) {
                    for (var i, n = 0; i = this._prevRoutes[n++];) i.route.switched && this._didSwitch(i.route, t) && i.route.switched.dispatch(e)
                },
                _didSwitch: function(t, e) {
                    for (var i, n = 0; i = e[n++];)
                        if (i.route === t) return !1;
                    return !0
                },
                _pipeParse: function(t, e) {
                    for (var i, n = 0; i = this._piped[n++];) i.parse(t, e)
                },
                getNumRoutes: function() {
                    return this._routes.length
                },
                _sortedInsert: function(t) {
                    var e = this._routes,
                        i = e.length;
                    do --i; while (e[i] && t._priority <= e[i]._priority);
                    e.splice(i + 1, 0, t)
                },
                _getMatchedRoutes: function(t) {
                    for (var e, i = [], n = this._routes, r = n.length;
                        (e = n[--r]) && ((!i.length || this.greedy || e.greedy) && e.match(t) && i.push({
                            route: e,
                            params: e._getParamsArray(t)
                        }), this.greedyEnabled || !i.length););
                    return i
                },
                pipe: function(t) {
                    this._piped.push(t)
                },
                unpipe: function(t) {
                    i(this._piped, t)
                },
                toString: function() {
                    return "[crossroads numRoutes:" + this.getNumRoutes() + "]"
                }
            }, h = new c, h.VERSION = "0.12.0", h.NORM_AS_ARRAY = function(t, e) {
                return [e.vals_]
            }, h.NORM_AS_OBJECT = function(t, e) {
                return [e]
            }, d.prototype = {
                greedy: !1,
                rules: void 0,
                match: function(t) {
                    return t = t || "", this._matchRegexp.test(t) && this._validateParams(t)
                },
                _validateParams: function(t) {
                    var e, i = this.rules,
                        n = this._getParamsObject(t);
                    for (e in i)
                        if ("normalize_" !== e && i.hasOwnProperty(e) && !this._isValidParam(t, e, n)) return !1;
                    return !0
                },
                _isValidParam: function(t, i, n) {
                    var o = this.rules[i],
                        l = n[i],
                        u = !1,
                        c = 0 === i.indexOf("?");
                    return null == l && this._optionalParamsIds && -1 !== e(this._optionalParamsIds, i) ? u = !0 : r(o) ? (c && (l = n[i + "_"]), u = o.test(l)) : s(o) ? (c && (l = n[i + "_"]), u = this._isValidArrayRule(o, l)) : a(o) && (u = o(l, t, n)), u
                },
                _isValidArrayRule: function(t, i) {
                    if (!this._router.ignoreCase) return -1 !== e(t, i);
                    "string" == typeof i && (i = i.toLowerCase());
                    for (var n, r, s = t.length; s--;)
                        if (n = t[s], r = "string" == typeof n ? n.toLowerCase() : n, r === i) return !0;
                    return !1
                },
                _getParamsObject: function(t) {
                    for (var i, n, r = this._router.shouldTypecast, s = this._router.patternLexer.getParamValues(t, this._matchRegexp, r), a = {}, l = s.length; l--;) n = s[l], this._paramsIds && (i = this._paramsIds[l], 0 === i.indexOf("?") && n && (a[i + "_"] = n, n = u(n, r), s[l] = n), p && "" === n && -1 !== e(this._optionalParamsIds, i) && (n = void 0, s[l] = n), a[i] = n), a[l] = n;
                    return a.request_ = r ? o(t) : t, a.vals_ = s, a
                },
                _getParamsArray: function(t) {
                    var e, i = this.rules ? this.rules.normalize_ : null;
                    return i = i || this._router.normalizeFn, e = i && a(i) ? i(t, this._getParamsObject(t)) : this._getParamsObject(t).vals_
                },
                interpolate: function(t) {
                    var e = this._router.patternLexer.interpolate(this._pattern, t);
                    if (!this._validateParams(e)) throw new Error("Generated string doesn't validate against `Route.rules`.");
                    return e
                },
                dispose: function() {
                    this._router.removeRoute(this)
                },
                _destroy: function() {
                    this.matched.dispose(), this.switched.dispose(), this.matched = this.switched = this._pattern = this._matchRegexp = null
                },
                toString: function() {
                    return '[Route pattern:"' + this._pattern + '", numListeners:' + this.matched.getNumListeners() + "]"
                }
            }, c.prototype.patternLexer = function() {
                function t() {
                    var t, e;
                    for (t in p) p.hasOwnProperty(t) && (e = p[t], e.id = "__CR_" + t + "__", e.save = "save" in e ? e.save.replace("{{id}}", e.id) : e.id, e.rRestore = new RegExp(e.id, "g"))
                }

                function e(t, e) {
                    var i, n = [];
                    for (t.lastIndex = 0; i = t.exec(e);) n.push(i[1]);
                    return n
                }

                function i(t) {
                    return e(h, t)
                }

                function n(t) {
                    return e(p.OP.rgx, t)
                }

                function r(t, e) {
                    return t = t || "", t && (v === f ? t = t.replace(c, "") : v === g && (t = t.replace(d, "")), t = s(t, "rgx", "save"), t = t.replace(u, "\\$&"), t = s(t, "rRestore", "res"), v === f && (t = "\\/?" + t)), v !== m && (t += "\\/?"), new RegExp("^" + t + "$", e ? "i" : "")
                }

                function s(t, e, i) {
                    var n, r;
                    for (r in p) p.hasOwnProperty(r) && (n = p[r], t = t.replace(n[e], n[i]));
                    return t
                }

                function a(t, e, i) {
                    var n = e.exec(t);
                    return n && (n.shift(), i && (n = l(n))), n
                }

                function o(t, e) {
                    if ("string" != typeof t) throw new Error("Route pattern should be a string.");
                    var i = function(t, i) {
                        var n;
                        if (i = "?" === i.substr(0, 1) ? i.substr(1) : i, null != e[i]) {
                            if ("object" == typeof e[i]) {
                                var r = [];
                                for (var s in e[i]) r.push(encodeURI(s + "=" + e[i][s]));
                                n = "?" + r.join("&")
                            } else n = String(e[i]);
                            if (-1 === t.indexOf("*") && -1 !== n.indexOf("/")) throw new Error('Invalid value "' + n + '" for segment "' + t + '".')
                        } else {
                            if (-1 !== t.indexOf("{")) throw new Error("The segment " + t + " is required.");
                            n = ""
                        }
                        return n
                    };
                    return p.OS.trail || (p.OS.trail = new RegExp("(?:" + p.OS.id + ")+$")), t.replace(p.OS.rgx, p.OS.save).replace(h, i).replace(p.OS.trail, "").replace(p.OS.rRestore, "/")
                }
                var u = /[\\.+*?\^$\[\](){}\/'#]/g,
                    c = /^\/|\/$/g,
                    d = /\/$/g,
                    h = /(?:\{|:)([^}:]+)(?:\}|:)/g,
                    p = {
                        OS: {
                            rgx: /([:}]|\w(?=\/))\/?(:|(?:\{\?))/g,
                            save: "$1{{id}}$2",
                            res: "\\/?"
                        },
                        RS: {
                            rgx: /([:}])\/?(\{)/g,
                            save: "$1{{id}}$2",
                            res: "\\/"
                        },
                        RQ: {
                            rgx: /\{\?([^}]+)\}/g,
                            res: "\\?([^#]+)"
                        },
                        OQ: {
                            rgx: /:\?([^:]+):/g,
                            res: "(?:\\?([^#]*))?"
                        },
                        OR: {
                            rgx: /:([^:]+)\*:/g,
                            res: "(.*)?"
                        },
                        RR: {
                            rgx: /\{([^}]+)\*\}/g,
                            res: "(.+)"
                        },
                        RP: {
                            rgx: /\{([^}]+)\}/g,
                            res: "([^\\/?]+)"
                        },
                        OP: {
                            rgx: /:([^:]+):/g,
                            res: "([^\\/?]+)?/?"
                        }
                    },
                    f = 1,
                    m = 2,
                    g = 3,
                    v = f;
                return t(), {
                    strict: function() {
                        v = m
                    },
                    loose: function() {
                        v = f
                    },
                    legacy: function() {
                        v = g
                    },
                    getParamIds: i,
                    getOptionalParamsIds: n,
                    getParamValues: a,
                    compilePattern: r,
                    interpolate: o
                }
            }(), h
        };
        "function" == typeof define && define.amd ? define(["../js-signals/signals"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("signals")) : window.crossroads = t(window.signals)
    }(),
    function() {
        function m() {
            return function() {}
        }

        function n(t) {
            return function() {
                return this[t]
            }
        }

        function r(t) {
            return function() {
                return t
            }
        }

        function t(e, i, n) {
            if ("string" == typeof e) {
                if (0 === e.indexOf("#") && (e = e.slice(1)), t.Fa[e]) return t.Fa[e];
                e = t.w(e)
            }
            if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
            return e.player || new t.Player(e, i, n)
        }

        function u(e, i, n, r) {
            t.mc.forEach(n, function(t) {
                e(i, t, r)
            })
        }

        function D(e, i) {
            var n, r;
            n = Array.prototype.slice.call(i), r = m(), r = window.console || {
                log: r,
                warn: r,
                error: r
            }, e ? n.unshift(e.toUpperCase() + ":") : e = "log", t.log.history.push(n), n.unshift("VIDEOJS:"), r[e].apply ? r[e].apply(r, n) : r[e](n.join(" "))
        }

        function E(t) {
            t.r("vjs-lock-showing")
        }

        function F(e, i, n, r) {
            return n !== b ? ((n === k || t.Pd(n)) && (n = 0), e.b.style[i] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n : "auto" === n ? "" : n + "px", r || e.l("resize"), e) : e.b ? (n = e.b.style[i], r = n.indexOf("px"), -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(e.b["offset" + t.ba(i)], 10)) : 0
        }

        function G(t) {
            var e, i, n, r, s, a, o, u;
            e = 0, i = k, t.c("touchstart", function(t) {
                1 === t.touches.length && (i = t.touches[0], e = (new Date).getTime(), r = f)
            }), t.c("touchmove", function(t) {
                1 < t.touches.length ? r = l : i && (a = t.touches[0].pageX - i.pageX, o = t.touches[0].pageY - i.pageY, u = Math.sqrt(a * a + o * o), u > 22 && (r = l))
            }), s = function() {
                r = l
            }, t.c("touchleave", s), t.c("touchcancel", s), t.c("touchend", function(t) {
                i = k, r === f && (n = (new Date).getTime() - e, 250 > n && (t.preventDefault(), this.l("tap")))
            })
        }

        function H(e, i) {
            var n, r, s, a;
            return n = e.b, r = t.Hd(n), a = s = n.offsetWidth, n = e.handle, e.options().vertical ? (a = r.top, r = i.changedTouches ? i.changedTouches[0].pageY : i.pageY, n && (n = n.w().offsetHeight, a += n / 2, s -= n), Math.max(0, Math.min(1, (a - r + s) / s))) : (s = r.left, r = i.changedTouches ? i.changedTouches[0].pageX : i.pageX, n && (n = n.w().offsetWidth, s += n / 2, a -= n), Math.max(0, Math.min(1, (r - s) / a)))
        }

        function ca(e, i) {
            e.U(i), i.c("click", t.bind(e, function() {
                E(this)
            }))
        }

        function J(t) {
            t.va = f, t.Da.n("vjs-lock-showing"), t.b.setAttribute("aria-pressed", f), t.P && 0 < t.P.length && t.P[0].w().focus()
        }

        function I(t) {
            t.va = l, E(t.Da), t.b.setAttribute("aria-pressed", l)
        }

        function da(e) {
            var i, n, r = {
                sources: [],
                tracks: []
            };
            if (i = t.Ca(e), n = i["data-setup"], n !== k && t.h.z(i, t.JSON.parse(n || "{}")), t.h.z(r, i), e.hasChildNodes()) {
                var s, a;
                for (e = e.childNodes, s = 0, a = e.length; a > s; s++) i = e[s], n = i.nodeName.toLowerCase(), "source" === n ? r.sources.push(t.Ca(i)) : "track" === n && r.tracks.push(t.Ca(i))
            }
            return r
        }

        function Q(e, i, n) {
            e.o && (e.na = l, e.o.dispose(), e.o = l), "Html5" !== i && e.I && (t.g.Bb(e.I), e.I = k), e.gb = i, e.na = l;
            var r = t.h.z({
                source: n,
                parentEl: e.b
            }, e.m[i.toLowerCase()]);
            n && (e.uc = n.type, n.src == e.F.src && 0 < e.F.currentTime && (r.startTime = e.F.currentTime), e.F.src = n.src), e.o = new window.videojs[i](e, r), e.o.H(function() {
                this.d.Ja()
            })
        }

        function R(t, e) {
            e !== b && t.Cc !== e && ((t.Cc = e) ? (t.n("vjs-has-started"), t.l("firstplay")) : t.r("vjs-has-started"))
        }

        function T(e, i, n) {
            if (e.o && !e.o.na) e.o.H(function() {
                this[i](n)
            });
            else try {
                e.o[i](n)
            } catch (r) {
                throw t.log(r), r
            }
        }

        function S(e, i) {
            if (e.o && e.o.na) try {
                return e.o[i]()
            } catch (n) {
                throw e.o[i] === b ? t.log("Video.js: " + i + " method not defined for " + e.gb + " playback technology.", n) : "TypeError" == n.name ? (t.log("Video.js: " + i + " unavailable on " + e.gb + " playback technology element.", n), e.o.na = l) : t.log(n), n
            }
        }

        function U(t, e) {
            var i = t.selectSource(e);
            i ? i.o === t.gb ? t.src(i.source) : Q(t, i.o, i.source) : (t.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.t(this.options().notSupportedMessage)
                })
            }, 0), t.Ja())
        }

        function P(t, e) {
            return e !== b ? (t.Ec = !!e, t) : t.Ec
        }

        function ea(t) {
            return t.j().o && t.j().o.featuresPlaybackRate && t.j().options().playbackRates && 0 < t.j().options().playbackRates.length
        }

        function fa(t) {
            t.Nb = l, t.fb(), t.k("play", t.$c), t.k("pause", t.fb)
        }

        function ia() {
            var t = W[X],
                e = t.charAt(0).toUpperCase() + t.slice(1);
            ka["set" + e] = function(e) {
                return this.b.vjs_setProperty(t, e)
            }
        }

        function la(t) {
            ka[t] = function() {
                return this.b.vjs_getProperty(t)
            }
        }

        function na(e, i, n, r, s) {
            var a = e.Ia = e.Ia || [];
            s = s || {}, s.kind = i, s.label = n, s.language = r, i = t.ba(i || "subtitles");
            var o = new window.videojs[i + "Track"](e, s);
            a.push(o), o.Ab() && e.H(function() {
                this.setTimeout(function() {
                    Y(o.j(), o.id())
                }, 0)
            })
        }

        function Y(t, e, i) {
            for (var n, r, s = t.Ia, a = 0, o = s.length; o > a; a++) n = s[a], n.id() === e ? (n.show(), r = n) : i && n.L() == i && 0 < n.mode() && n.disable();
            (e = r ? r.L() : i ? i : l) && t.l(e + "trackchange")
        }

        function oa(e) {
            0 === e.qa && e.load(), 0 === e.oa && (e.d.c("timeupdate", t.bind(e, e.update, e.K)), e.d.c("ended", t.bind(e, e.reset, e.K)), ("captions" === e.G || "subtitles" === e.G) && e.d.ma("textTrackDisplay").U(e))
        }

        function pa(t) {
            var e = t.split(":");
            t = 0;
            var i, n, r;
            return 3 == e.length ? (i = e[0], n = e[1], e = e[2]) : (i = 0, n = e[0], e = e[1]), e = e.split(/\s+/), e = e.splice(0, 1)[0], e = e.split(/\.|,/), r = parseFloat(e[1]), e = e[0], t += 3600 * parseFloat(i), t += 60 * parseFloat(n), t += parseFloat(e), r && (t += r / 1e3), t
        }

        function $(t, e) {
            var i = t.split("."),
                n = qa;
            !(i[0] in n) && n.execScript && n.execScript("var " + i[0]);
            for (var r; i.length && (r = i.shift());) i.length || e === b ? n = n[r] ? n[r] : n[r] = {} : n[r] = e
        }
        var b = void 0,
            f = !0,
            k = null,
            l = !1,
            s;
        document.createElement("video"), document.createElement("audio"), document.createElement("track");
        var videojs = window.videojs = t;
        t.Yb = "4.11", t.ed = "https:" == document.location.protocol ? "https://" : "http://", t.options = {
            techOrder: ["html5", "flash"],
            html5: {},
            flash: {},
            width: 300,
            height: 150,
            defaultVolume: 0,
            playbackRates: [],
            inactivityTimeout: 2e3,
            children: {
                mediaLoader: {},
                posterImage: {},
                textTrackDisplay: {},
                loadingSpinner: {},
                bigPlayButton: {},
                controlBar: {},
                errorDisplay: {}
            },
            language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Me || navigator.language || "en",
            languages: {},
            notSupportedMessage: "No compatible source was found for this video."
        }, "GENERATED_CDN_VSN" !== t.Yb && (videojs.options.flash.swf = t.ed + "vjs.zencdn.net/" + t.Yb + "/video-js.swf"), t.sd = function(e, i) {
            return t.options.languages[e] = t.options.languages[e] !== b ? t.Z.Ea(t.options.languages[e], i) : i, t.options.languages
        }, t.Fa = {}, "function" == typeof define && define.amd ? define([], function() {
            return videojs
        }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), t.ta = t.CoreObject = m(), t.ta.extend = function(e) {
            var i, n;
            e = e || {}, i = e.init || e.i || this.prototype.init || this.prototype.i || m(), n = function() {
                i.apply(this, arguments)
            }, n.prototype = t.h.create(this.prototype), n.prototype.constructor = n, n.extend = t.ta.extend, n.create = t.ta.create;
            for (var r in e) e.hasOwnProperty(r) && (n.prototype[r] = e[r]);
            return n
        }, t.ta.create = function() {
            var e = t.h.create(this.prototype);
            return this.apply(e, arguments), e
        }, t.c = function(e, i, n) {
            if (t.h.isArray(i)) return u(t.c, e, i, n);
            var r = t.getData(e);
            r.C || (r.C = {}), r.C[i] || (r.C[i] = []), n.p || (n.p = t.p++), r.C[i].push(n), r.W || (r.disabled = l, r.W = function(i) {
                if (!r.disabled) {
                    i = t.zc(i);
                    var n = r.C[i.type];
                    if (n)
                        for (var n = n.slice(0), s = 0, a = n.length; a > s && !i.Gc(); s++) n[s].call(e, i)
                }
            }), 1 == r.C[i].length && (e.addEventListener ? e.addEventListener(i, r.W, l) : e.attachEvent && e.attachEvent("on" + i, r.W))
        }, t.k = function(e, i, n) {
            if (t.Bc(e)) {
                var r = t.getData(e);
                if (r.C) {
                    if (t.h.isArray(i)) return u(t.k, e, i, n);
                    if (i) {
                        var s = r.C[i];
                        if (s) {
                            if (n) {
                                if (n.p)
                                    for (r = 0; r < s.length; r++) s[r].p === n.p && s.splice(r--, 1)
                            } else r.C[i] = [];
                            t.pc(e, i)
                        }
                    } else
                        for (s in r.C) i = s, r.C[i] = [], t.pc(e, i)
                }
            }
        }, t.pc = function(e, i) {
            var n = t.getData(e);
            0 === n.C[i].length && (delete n.C[i], e.removeEventListener ? e.removeEventListener(i, n.W, l) : e.detachEvent && e.detachEvent("on" + i, n.W)), t.Kb(n.C) && (delete n.C, delete n.W, delete n.disabled), t.Kb(n) && t.Pc(e)
        }, t.zc = function(t) {
            function e() {
                return f
            }

            function i() {
                return l
            }
            if (!t || !t.Lb) {
                var n = t || window.event;
                t = {};
                for (var r in n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && ("returnValue" == r && n.preventDefault || (t[r] = n[r]));
                if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
                        n.preventDefault && n.preventDefault(), t.returnValue = l, t.Nd = e, t.defaultPrevented = f
                    }, t.Nd = i, t.defaultPrevented = l, t.stopPropagation = function() {
                        n.stopPropagation && n.stopPropagation(), t.cancelBubble = f, t.Lb = e
                    }, t.Lb = i, t.stopImmediatePropagation = function() {
                        n.stopImmediatePropagation && n.stopImmediatePropagation(), t.Gc = e, t.stopPropagation()
                    }, t.Gc = i, t.clientX != k) {
                    r = document.documentElement;
                    var s = document.body;
                    t.pageX = t.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)
                }
                t.which = t.charCode || t.keyCode, t.button != k && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
            }
            return t
        }, t.l = function(e, i) {
            var n = t.Bc(e) ? t.getData(e) : {},
                r = e.parentNode || e.ownerDocument;
            return "string" == typeof i && (i = {
                type: i,
                target: e
            }), i = t.zc(i), n.W && n.W.call(e, i), r && !i.Lb() && i.bubbles !== l ? t.l(r, i) : r || i.defaultPrevented || (n = t.getData(i.target), !i.target[i.type]) || (n.disabled = f, "function" == typeof i.target[i.type] && i.target[i.type](), n.disabled = l), !i.defaultPrevented
        }, t.Q = function(e, i, n) {
            function r() {
                t.k(e, i, r), n.apply(this, arguments)
            }
            return t.h.isArray(i) ? u(t.Q, e, i, n) : (r.p = n.p = n.p || t.p++, void t.c(e, i, r))
        };
        var v = Object.prototype.hasOwnProperty;
        t.e = function(e, i) {
            var n;
            return i = i || {}, n = document.createElement(e || "div"), t.h.X(i, function(t, e) {
                -1 !== t.indexOf("aria-") || "role" == t ? n.setAttribute(t, e) : n[t] = e
            }), n
        }, t.ba = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, t.h = {}, t.h.create = Object.create || function(t) {
            function e() {}
            return e.prototype = t, new e
        }, t.h.X = function(t, e, i) {
            for (var n in t) v.call(t, n) && e.call(i || this, n, t[n])
        }, t.h.z = function(t, e) {
            if (!e) return t;
            for (var i in e) v.call(e, i) && (t[i] = e[i]);
            return t
        }, t.h.Ad = function(e, i) {
            var n, r, s;
            e = t.h.copy(e);
            for (n in i) v.call(i, n) && (r = e[n], s = i[n], e[n] = t.h.Xa(r) && t.h.Xa(s) ? t.h.Ad(r, s) : i[n]);
            return e
        }, t.h.copy = function(e) {
            return t.h.z({}, e)
        }, t.h.Xa = function(t) {
            return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
        }, t.h.isArray = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, t.Pd = function(t) {
            return t !== t
        }, t.bind = function(e, i, n) {
            function r() {
                return i.apply(e, arguments)
            }
            return i.p || (i.p = t.p++), r.p = n ? n + "_" + i.p : i.p, r
        }, t.xa = {}, t.p = 1, t.expando = "vdata" + (new Date).getTime(), t.getData = function(e) {
            var i = e[t.expando];
            return i || (i = e[t.expando] = t.p++, t.xa[i] = {}), t.xa[i]
        }, t.Bc = function(e) {
            return e = e[t.expando], !(!e || t.Kb(t.xa[e]))
        }, t.Pc = function(e) {
            var i = e[t.expando];
            if (i) {
                delete t.xa[i];
                try {
                    delete e[t.expando]
                } catch (n) {
                    e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = k
                }
            }
        }, t.Kb = function(t) {
            for (var e in t)
                if (t[e] !== k) return l;
            return f
        }, t.Wa = function(t, e) {
            return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
        }, t.n = function(e, i) {
            t.Wa(e, i) || (e.className = "" === e.className ? i : e.className + " " + i)
        }, t.r = function(e, i) {
            var n, r;
            if (t.Wa(e, i)) {
                for (n = e.className.split(" "), r = n.length - 1; r >= 0; r--) n[r] === i && n.splice(r, 1);
                e.className = n.join(" ")
            }
        }, t.A = t.e("video"), t.N = navigator.userAgent, t.md = /iPhone/i.test(t.N), t.ld = /iPad/i.test(t.N), t.nd = /iPod/i.test(t.N), t.kd = t.md || t.ld || t.nd;
        var aa = t,
            x, y = t.N.match(/OS (\d+)_/i);
        x = y && y[1] ? y[1] : b, aa.Ae = x, t.hd = /Android/i.test(t.N);
        var ba = t,
            z, A = t.N.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
            B, C;
        A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : k) : z = k, ba.Xb = z, t.od = t.hd && /webkit/i.test(t.N) && 2.3 > t.Xb, t.jd = /Firefox/i.test(t.N), t.Be = /Chrome/i.test(t.N), t.ic = !!("ontouchstart" in window || window.gd && document instanceof window.gd), t.fd = "backgroundSize" in t.A.style, t.Sc = function(e, i) {
                t.h.X(i, function(t, i) {
                    i === k || "undefined" == typeof i || i === l ? e.removeAttribute(t) : e.setAttribute(t, i === f ? "" : i)
                })
            }, t.Ca = function(t) {
                var e, i, n, r;
                if (e = {}, t && t.attributes && 0 < t.attributes.length) {
                    i = t.attributes;
                    for (var s = i.length - 1; s >= 0; s--) n = i[s].name, r = i[s].value, ("boolean" == typeof t[n] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + n + ",")) && (r = r !== k ? f : l), e[n] = r
                }
                return e
            }, t.He = function(t, e) {
                var i = "";
                return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (i = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), i
            }, t.Jb = function(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }, t.Ra = {}, t.w = function(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
            }, t.Ba = function(t, e) {
                e = e || t;
                var i = Math.floor(t % 60),
                    n = Math.floor(t / 60 % 60),
                    r = Math.floor(t / 3600),
                    s = Math.floor(e / 60 % 60),
                    a = Math.floor(e / 3600);
                return (isNaN(t) || 1 / 0 === t) && (r = n = i = "-"), r = r > 0 || a > 0 ? r + ":" : "", r + (((r || s >= 10) && 10 > n ? "0" + n : n) + ":") + (10 > i ? "0" + i : i)
            }, t.ud = function() {
                document.body.focus(), document.onselectstart = r(l)
            }, t.ve = function() {
                document.onselectstart = r(f)
            }, t.trim = function(t) {
                return (t + "").replace(/^\s+|\s+$/g, "")
            }, t.round = function(t, e) {
                return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
            }, t.zb = function(t, e) {
                return {
                    length: 1,
                    start: function() {
                        return t
                    },
                    end: function() {
                        return e
                    }
                }
            }, t.je = function(e) {
                try {
                    var i = window.localStorage || l;
                    i && (i.volume = e)
                } catch (n) {
                    22 == n.code || 1014 == n.code ? t.log("LocalStorage Full (VideoJS)", n) : 18 == n.code ? t.log("LocalStorage not allowed (VideoJS)", n) : t.log("LocalStorage Error (VideoJS)", n)
                }
            }, t.Jd = function(e) {
                return e.match(/^https?:\/\//) || (e = t.e("div", {
                    innerHTML: '<a href="' + e + '">x</a>'
                }).firstChild.href), e
            }, t.fe = function(e) {
                var i, n, r, s;
                s = "protocol hostname port pathname search hash host".split(" "), n = t.e("a", {
                    href: e
                }), (r = "" === n.host && "file:" !== n.protocol) && (i = t.e("div"), i.innerHTML = '<a href="' + e + '"></a>', n = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(i)), e = {};
                for (var a = 0; a < s.length; a++) e[s[a]] = n[s[a]];
                return r && document.body.removeChild(i), e
            }, t.log = function() {
                D(k, arguments)
            }, t.log.history = [], t.log.error = function() {
                D("error", arguments)
            }, t.log.warn = function() {
                D("warn", arguments)
            }, t.Hd = function(e) {
                var i, n;
                return e.getBoundingClientRect && e.parentNode && (i = e.getBoundingClientRect()), i ? (e = document.documentElement, n = document.body, {
                    left: t.round(i.left + (window.pageXOffset || n.scrollLeft) - (e.clientLeft || n.clientLeft || 0)),
                    top: t.round(i.top + (window.pageYOffset || n.scrollTop) - (e.clientTop || n.clientTop || 0))
                }) : {
                    left: 0,
                    top: 0
                }
            }, t.mc = {}, t.mc.forEach = function(e, i, n) {
                if (t.h.isArray(e) && i instanceof Function)
                    for (var r = 0, s = e.length; s > r; ++r) i.call(n || t, e[r], r, e);
                return e
            }, t.ye = function(e, i) {
                var n, r, s, a, o, l, u;
                "string" == typeof e && (e = {
                    uri: e
                }), videojs.Z.Ea({
                    method: "GET",
                    timeout: 45e3
                }, e), i = i || m(), l = function() {
                    window.clearTimeout(o), i(k, r, r.response || r.responseText)
                }, u = function(t) {
                    window.clearTimeout(o), t && "string" != typeof t || (t = Error(t)), i(t, r)
                }, n = window.XMLHttpRequest, "undefined" == typeof n && (n = function() {
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (t) {}
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (e) {}
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP")
                    } catch (i) {}
                    throw Error("This browser does not support XMLHttpRequest.")
                }), r = new n, r.uri = e.uri, n = t.fe(e.uri), s = window.location, n.protocol + n.host === s.protocol + s.host || !window.XDomainRequest || "withCredentials" in r ? (a = "file:" == n.protocol || "file:" == s.protocol, r.onreadystatechange = function() {
                    if (4 === r.readyState) {
                        if (r.te) return u("timeout");
                        200 === r.status || a && 0 === r.status ? l() : u()
                    }
                }, e.timeout && (o = window.setTimeout(function() {
                    4 !== r.readyState && (r.te = f, r.abort())
                }, e.timeout))) : (r = new window.XDomainRequest, r.onload = l, r.onerror = u, r.onprogress = m(), r.ontimeout = m());
                try {
                    r.open(e.method || "GET", e.uri, f)
                } catch (c) {
                    return void u(c)
                }
                e.withCredentials && (r.withCredentials = f), e.responseType && (r.responseType = e.responseType);
                try {
                    r.send()
                } catch (d) {
                    u(d)
                }
            }, t.Z = {}, t.Z.Ea = function(e, i) {
                var n, r, s;
                e = t.h.copy(e);
                for (n in i) i.hasOwnProperty(n) && (r = e[n], s = i[n], e[n] = t.h.Xa(r) && t.h.Xa(s) ? t.Z.Ea(r, s) : i[n]);
                return e
            }, t.a = t.ta.extend({
                i: function(e, i, n) {
                    if (this.d = e, this.m = t.h.copy(this.m), i = this.options(i), this.K = i.id || i.el && i.el.id, this.K || (this.K = (e.id && e.id() || "no_player") + "_component_" + t.p++), this.Vd = i.name || k, this.b = i.el || this.e(), this.O = [], this.Ta = {}, this.Ua = {}, this.Dc(), this.H(n), i.Qc !== l) {
                        var r, s;
                        this.j().reportUserActivity && (r = t.bind(this.j(), this.j().reportUserActivity), this.c("touchstart", function() {
                            r(), this.clearInterval(s), s = this.setInterval(r, 250)
                        }), e = function() {
                            r(), this.clearInterval(s)
                        }, this.c("touchmove", r), this.c("touchend", e), this.c("touchcancel", e))
                    }
                }
            }), s = t.a.prototype, s.dispose = function() {
                if (this.l({
                        type: "dispose",
                        bubbles: l
                    }), this.O)
                    for (var e = this.O.length - 1; e >= 0; e--) this.O[e].dispose && this.O[e].dispose();
                this.Ua = this.Ta = this.O = k, this.k(), this.b.parentNode && this.b.parentNode.removeChild(this.b), t.Pc(this.b), this.b = k
            }, s.d = f, s.j = n("d"), s.options = function(e) {
                return e === b ? this.m : this.m = t.Z.Ea(this.m, e)
            }, s.e = function(e, i) {
                return t.e(e, i)
            }, s.t = function(t) {
                var e = this.d.language(),
                    i = this.d.languages();
                return i && i[e] && i[e][t] ? i[e][t] : t
            }, s.w = n("b"), s.la = function() {
                return this.v || this.b
            }, s.id = n("K"), s.name = n("Vd"), s.children = n("O"), s.Kd = function(t) {
                return this.Ta[t]
            }, s.ma = function(t) {
                return this.Ua[t]
            },
            s.U = function(e, i) {
                var n, r;
                return "string" == typeof e ? (r = e, i = i || {}, n = i.componentClass || t.ba(r), i.name = r, n = new window.videojs[n](this.d || this, i)) : n = e, this.O.push(n), "function" == typeof n.id && (this.Ta[n.id()] = n), (r = r || n.name && n.name()) && (this.Ua[r] = n), "function" == typeof n.el && n.el() && this.la().appendChild(n.el()), n
            }, s.removeChild = function(t) {
                if ("string" == typeof t && (t = this.ma(t)), t && this.O) {
                    for (var e = l, i = this.O.length - 1; i >= 0; i--)
                        if (this.O[i] === t) {
                            e = f, this.O.splice(i, 1);
                            break
                        }
                    e && (this.Ta[t.id] = k, this.Ua[t.name] = k, (e = t.w()) && e.parentNode === this.la() && this.la().removeChild(t.w()))
                }
            }, s.Dc = function() {
                var e, i, n, r, s, a;
                if (e = this, i = e.options(), n = i.children)
                    if (a = function(t, n) {
                            i[t] !== b && (n = i[t]), n !== l && (e[t] = e.U(t, n))
                        }, t.h.isArray(n))
                        for (var o = 0; o < n.length; o++) r = n[o], "string" == typeof r ? (s = r, r = {}) : s = r.name, a(s, r);
                    else t.h.X(n, a)
            }, s.S = r(""), s.c = function(e, i, n) {
                var r, s, a;
                return "string" == typeof e || t.h.isArray(e) ? t.c(this.b, e, t.bind(this, i)) : (r = t.bind(this, n), a = this, s = function() {
                    a.k(e, i, r)
                }, s.p = r.p, this.c("dispose", s), n = function() {
                    a.k("dispose", s)
                }, n.p = r.p, e.nodeName ? (t.c(e, i, r), t.c(e, "dispose", n)) : "function" == typeof e.c && (e.c(i, r), e.c("dispose", n))), this
            }, s.k = function(e, i, n) {
                return !e || "string" == typeof e || t.h.isArray(e) ? t.k(this.b, e, i) : (n = t.bind(this, n), this.k("dispose", n), e.nodeName ? (t.k(e, i, n), t.k(e, "dispose", n)) : (e.k(i, n), e.k("dispose", n))), this
            }, s.Q = function(e, i, n) {
                var r, s, a;
                return "string" == typeof e || t.h.isArray(e) ? t.Q(this.b, e, t.bind(this, i)) : (r = t.bind(this, n), s = this, a = function() {
                    s.k(e, i, a), r.apply(this, arguments)
                }, a.p = r.p, this.c(e, i, a)), this
            }, s.l = function(e) {
                return t.l(this.b, e), this
            }, s.H = function(t) {
                return t && (this.na ? t.call(this) : (this.cb === b && (this.cb = []), this.cb.push(t))), this
            }, s.Ja = function() {
                this.na = f;
                var t = this.cb;
                if (t && 0 < t.length) {
                    for (var e = 0, i = t.length; i > e; e++) t[e].call(this);
                    this.cb = [], this.l("ready")
                }
            }, s.Wa = function(e) {
                return t.Wa(this.b, e)
            }, s.n = function(e) {
                return t.n(this.b, e), this
            }, s.r = function(e) {
                return t.r(this.b, e), this
            }, s.show = function() {
                return this.b.style.display = "block", this
            }, s.Y = function() {
                return this.b.style.display = "none", this
            }, s.disable = function() {
                this.Y(), this.show = m()
            }, s.width = function(t, e) {
                return F(this, "width", t, e)
            }, s.height = function(t, e) {
                return F(this, "height", t, e)
            }, s.Dd = function(t, e) {
                return this.width(t, f).height(e)
            }, s.setTimeout = function(e, i) {
                function n() {
                    this.clearTimeout(r)
                }
                e = t.bind(this, e);
                var r = setTimeout(e, i);
                return n.p = "vjs-timeout-" + r, this.c("dispose", n), r
            }, s.clearTimeout = function(t) {
                function e() {}
                return clearTimeout(t), e.p = "vjs-timeout-" + t, this.k("dispose", e), t
            }, s.setInterval = function(e, i) {
                function n() {
                    this.clearInterval(r)
                }
                e = t.bind(this, e);
                var r = setInterval(e, i);
                return n.p = "vjs-interval-" + r, this.c("dispose", n), r
            }, s.clearInterval = function(t) {
                function e() {}
                return clearInterval(t), e.p = "vjs-interval-" + t, this.k("dispose", e), t
            }, t.u = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), G(this), this.c("tap", this.s), this.c("click", this.s), this.c("focus", this.ab), this.c("blur", this.$a)
                }
            }), s = t.u.prototype, s.e = function(e, i) {
                var n;
                return i = t.h.z({
                    className: this.S(),
                    role: "button",
                    "aria-live": "polite",
                    tabIndex: 0
                }, i), n = t.a.prototype.e.call(this, e, i), i.innerHTML || (this.v = t.e("div", {
                    className: "vjs-control-content"
                }), this.xb = t.e("span", {
                    className: "vjs-control-text",
                    innerHTML: this.t(this.wa) || "Need Text"
                }), this.v.appendChild(this.xb), n.appendChild(this.v)), n
            }, s.S = function() {
                return "vjs-control " + t.a.prototype.S.call(this)
            }, s.s = m(), s.ab = function() {
                t.c(document, "keydown", t.bind(this, this.ea))
            }, s.ea = function(t) {
                (32 == t.which || 13 == t.which) && (t.preventDefault(), this.s())
            }, s.$a = function() {
                t.k(document, "keydown", t.bind(this, this.ea))
            }, t.R = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), this.td = this.ma(this.m.barName), this.handle = this.ma(this.m.handleName), this.c("mousedown", this.bb), this.c("touchstart", this.bb), this.c("focus", this.ab), this.c("blur", this.$a), this.c("click", this.s), this.c(e, "controlsvisible", this.update), this.c(e, this.Lc, this.update)
                }
            }), s = t.R.prototype, s.e = function(e, i) {
                return i = i || {}, i.className += " vjs-slider", i = t.h.z({
                    role: "slider",
                    "aria-valuenow": 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    tabIndex: 0
                }, i), t.a.prototype.e.call(this, e, i)
            }, s.bb = function(e) {
                e.preventDefault(), t.ud(), this.n("vjs-sliding"), this.c(document, "mousemove", this.fa), this.c(document, "mouseup", this.pa), this.c(document, "touchmove", this.fa), this.c(document, "touchend", this.pa), this.fa(e)
            }, s.fa = m(), s.pa = function() {
                t.ve(), this.r("vjs-sliding"), this.k(document, "mousemove", this.fa), this.k(document, "mouseup", this.pa), this.k(document, "touchmove", this.fa), this.k(document, "touchend", this.pa), this.update()
            }, s.update = function() {
                if (this.b) {
                    var e, i = this.Hb(),
                        n = this.handle,
                        r = this.td;
                    if (isNaN(i) && (i = 0), e = i, n) {
                        e = this.b.offsetWidth;
                        var s = n.w().offsetWidth;
                        e = s ? s / e : 0, i *= 1 - e, e = i + e / 2, n.w().style.left = t.round(100 * i, 2) + "%"
                    }
                    r && (r.w().style.width = t.round(100 * e, 2) + "%")
                }
            }, s.ab = function() {
                this.c(document, "keydown", this.ea)
            }, s.ea = function(t) {
                37 == t.which || 40 == t.which ? (t.preventDefault(), this.Xc()) : (38 == t.which || 39 == t.which) && (t.preventDefault(), this.Yc())
            }, s.$a = function() {
                this.k(document, "keydown", this.ea)
            }, s.s = function(t) {
                t.stopImmediatePropagation(), t.preventDefault()
            }, t.$ = t.a.extend(), t.$.prototype.defaultValue = 0, t.$.prototype.e = function(e, i) {
                return i = i || {}, i.className += " vjs-slider-handle", i = t.h.z({
                    innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
                }, i), t.a.prototype.e.call(this, "div", i)
            }, t.ja = t.a.extend(), t.ja.prototype.e = function() {
                var e = this.options().rc || "ul";
                return this.v = t.e(e, {
                    className: "vjs-menu-content"
                }), e = t.a.prototype.e.call(this, "div", {
                    append: this.v,
                    className: "vjs-menu"
                }), e.appendChild(this.v), t.c(e, "click", function(t) {
                    t.preventDefault(), t.stopImmediatePropagation()
                }), e
            }, t.J = t.u.extend({
                i: function(e, i) {
                    t.u.call(this, e, i), this.selected(i.selected)
                }
            }), t.J.prototype.e = function(e, i) {
                return t.u.prototype.e.call(this, "li", t.h.z({
                    className: "vjs-menu-item",
                    innerHTML: this.t(this.m.label)
                }, i))
            }, t.J.prototype.s = function() {
                this.selected(f)
            }, t.J.prototype.selected = function(t) {
                t ? (this.n("vjs-selected"), this.b.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.b.setAttribute("aria-selected", l))
            }, t.M = t.u.extend({
                i: function(e, i) {
                    t.u.call(this, e, i), this.Da = this.za(), this.U(this.Da), this.P && 0 === this.P.length && this.Y(), this.c("keydown", this.ea), this.b.setAttribute("aria-haspopup", f), this.b.setAttribute("role", "button")
                }
            }), s = t.M.prototype, s.va = l, s.za = function() {
                var e = new t.ja(this.d);
                if (this.options().title && e.la().appendChild(t.e("li", {
                        className: "vjs-menu-title",
                        innerHTML: t.ba(this.options().title),
                        re: -1
                    })), this.P = this.createItems())
                    for (var i = 0; i < this.P.length; i++) ca(e, this.P[i]);
                return e
            }, s.ya = m(), s.S = function() {
                return this.className + " vjs-menu-button " + t.u.prototype.S.call(this)
            }, s.ab = m(), s.$a = m(), s.s = function() {
                this.Q("mouseout", t.bind(this, function() {
                    E(this.Da), this.b.blur()
                })), this.va ? I(this) : J(this)
            }, s.ea = function(t) {
                t.preventDefault(), 32 == t.which || 13 == t.which ? this.va ? I(this) : J(this) : 27 == t.which && this.va && I(this)
            }, t.D = function(e) {
                "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.h.z(this, e), this.message || (this.message = t.D.Bd[this.code] || "")
            }, t.D.prototype.code = 0, t.D.prototype.message = "", t.D.prototype.status = k, t.D.Va = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "), t.D.Bd = {
                1: "You aborted the video playback",
                2: "A network error caused the video download to fail part-way.",
                3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
                4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The video is encrypted and we do not have the keys to decrypt it."
            };
        for (var K = 0; K < t.D.Va.length; K++) t.D[t.D.Va[K]] = K, t.D.prototype[t.D.Va[K]] = K;
        var L, M, N, O;
        for (L = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], M = L[0], O = 0; O < L.length; O++)
            if (L[O][1] in document) {
                N = L[O];
                break
            }
        if (N)
            for (t.Ra.Gb = {}, O = 0; O < N.length; O++) t.Ra.Gb[M[O]] = N[O];
        t.Player = t.a.extend({
            i: function(e, i, n) {
                this.I = e, e.id = e.id || "vjs_video_" + t.p++, this.se = e && t.Ca(e), i = t.h.z(da(e), i), this.Ya = i.language || t.options.language, this.Td = i.languages || t.options.languages, this.F = {}, this.Mc = i.poster || "", this.yb = !!i.controls, e.controls = l, i.Qc = l, P(this, "audio" === this.I.nodeName.toLowerCase()), t.a.call(this, this, i, n), this.n(this.controls() ? "vjs-controls-enabled" : "vjs-controls-disabled"), P(this) && this.n("vjs-audio"), t.Fa[this.K] = this, i.plugins && t.h.X(i.plugins, function(t, e) {
                    this[t](e)
                }, this);
                var r, s, a, o, u;
                r = t.bind(this, this.reportUserActivity), this.c("mousedown", function() {
                    r(), this.clearInterval(s), s = this.setInterval(r, 250)
                }), this.c("mousemove", function(t) {
                    (t.screenX != o || t.screenY != u) && (o = t.screenX, u = t.screenY, r())
                }), this.c("mouseup", function() {
                    r(), this.clearInterval(s)
                }), this.c("keydown", r), this.c("keyup", r), this.setInterval(function() {
                    if (this.sa) {
                        this.sa = l, this.userActive(f), this.clearTimeout(a);
                        var t = this.options().inactivityTimeout;
                        t > 0 && (a = this.setTimeout(function() {
                            this.sa || this.userActive(l)
                        }, t))
                    }
                }, 250)
            }
        }), s = t.Player.prototype, s.language = function(t) {
            return t === b ? this.Ya : (this.Ya = t, this)
        }, s.languages = n("Td"), s.m = t.options, s.dispose = function() {
            this.l("dispose"), this.k("dispose"), t.Fa[this.K] = k, this.I && this.I.player && (this.I.player = k), this.b && this.b.player && (this.b.player = k), this.o && this.o.dispose(), t.a.prototype.dispose.call(this)
        }, s.e = function() {
            var e, i = this.b = t.a.prototype.e.call(this, "div"),
                n = this.I;
            if (n.removeAttribute("width"), n.removeAttribute("height"), n.hasChildNodes()) {
                var r, s, a, o, l;
                for (r = n.childNodes, s = r.length, l = []; s--;) a = r[s], o = a.nodeName.toLowerCase(), "track" === o && l.push(a);
                for (r = 0; r < l.length; r++) n.removeChild(l[r])
            }
            return e = t.Ca(n), t.h.X(e, function(t) {
                "class" == t ? i.className = e[t] : i.setAttribute(t, e[t])
            }), n.id += "_html5_api", n.className = "vjs-tech", n.player = i.player = this, this.n("vjs-paused"), this.width(this.m.width, f), this.height(this.m.height, f), n.Md = n.networkState, n.parentNode && n.parentNode.insertBefore(i, n), t.Jb(n, i), this.b = i, this.c("loadstart", this.Zd), this.c("waiting", this.ee), this.c(["canplay", "canplaythrough", "playing", "ended"], this.de), this.c("seeking", this.be), this.c("seeked", this.ae), this.c("ended", this.Wd), this.c("play", this.Pb), this.c("firstplay", this.Xd), this.c("pause", this.Ob), this.c("progress", this.$d), this.c("durationchange", this.Jc), this.c("fullscreenchange", this.Yd), i
        }, s.Zd = function() {
            this.error(k), this.paused() ? (R(this, l), this.Q("play", function() {
                R(this, f)
            })) : this.l("firstplay")
        }, s.Cc = l, s.Pb = function() {
            this.r("vjs-paused"), this.n("vjs-playing")
        }, s.ee = function() {
            this.n("vjs-waiting")
        }, s.de = function() {
            this.r("vjs-waiting")
        }, s.be = function() {
            this.n("vjs-seeking")
        }, s.ae = function() {
            this.r("vjs-seeking")
        }, s.Xd = function() {
            this.m.starttime && this.currentTime(this.m.starttime), this.n("vjs-has-started")
        }, s.Ob = function() {
            this.r("vjs-playing"), this.n("vjs-paused")
        }, s.$d = function() {
            1 == this.bufferedPercent() && this.l("loadedalldata")
        }, s.Wd = function() {
            this.m.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
        }, s.Jc = function() {
            var t = S(this, "duration");
            t && (0 > t && (t = 1 / 0), this.duration(t), 1 / 0 === t ? this.n("vjs-live") : this.r("vjs-live"))
        }, s.Yd = function() {
            this.isFullscreen() ? this.n("vjs-fullscreen") : this.r("vjs-fullscreen")
        }, s.play = function() {
            return T(this, "play"), this
        }, s.pause = function() {
            return T(this, "pause"), this
        }, s.paused = function() {
            return S(this, "paused") === l ? l : f
        }, s.currentTime = function(t) {
            return t !== b ? (T(this, "setCurrentTime", t), this) : this.F.currentTime = S(this, "currentTime") || 0
        }, s.duration = function(t) {
            return t !== b ? (this.F.duration = parseFloat(t), this) : (this.F.duration === b && this.Jc(), this.F.duration || 0)
        }, s.remainingTime = function() {
            return this.duration() - this.currentTime()
        }, s.buffered = function() {
            var e = S(this, "buffered");
            return e && e.length || (e = t.zb(0, 0)), e
        }, s.bufferedPercent = function() {
            var t, e, i = this.duration(),
                n = this.buffered(),
                r = 0;
            if (!i) return 0;
            for (var s = 0; s < n.length; s++) t = n.start(s), e = n.end(s), e > i && (e = i), r += e - t;
            return r / i
        }, s.volume = function(e) {
            return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.F.volume = e, T(this, "setVolume", e), t.je(e), this) : (e = parseFloat(S(this, "volume")), isNaN(e) ? 1 : e)
        }, s.muted = function(t) {
            return t !== b ? (T(this, "setMuted", t), this) : S(this, "muted") || l
        }, s.Ha = function() {
            return S(this, "supportsFullScreen") || l
        }, s.Fc = l, s.isFullscreen = function(t) {
            return t !== b ? (this.Fc = !!t, this) : this.Fc
        }, s.isFullScreen = function(e) {
            return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
        }, s.requestFullscreen = function() {
            var e = t.Ra.Gb;
            return this.isFullscreen(f), e ? (t.c(document, e.fullscreenchange, t.bind(this, function(i) {
                this.isFullscreen(document[e.fullscreenElement]), this.isFullscreen() === l && t.k(document, e.fullscreenchange, arguments.callee), this.l("fullscreenchange")
            })), this.b[e.requestFullscreen]()) : this.o.Ha() ? T(this, "enterFullScreen") : (this.yc(), this.l("fullscreenchange")), this
        }, s.requestFullScreen = function() {
            return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
        }, s.exitFullscreen = function() {
            var e = t.Ra.Gb;
            return this.isFullscreen(l), e ? document[e.exitFullscreen]() : this.o.Ha() ? T(this, "exitFullScreen") : (this.Db(), this.l("fullscreenchange")), this
        }, s.cancelFullScreen = function() {
            return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
        }, s.yc = function() {
            this.Od = f, this.Ed = document.documentElement.style.overflow, t.c(document, "keydown", t.bind(this, this.Ac)), document.documentElement.style.overflow = "hidden", t.n(document.body, "vjs-full-window"), this.l("enterFullWindow")
        }, s.Ac = function(t) {
            27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Db())
        }, s.Db = function() {
            this.Od = l, t.k(document, "keydown", this.Ac), document.documentElement.style.overflow = this.Ed, t.r(document.body, "vjs-full-window"), this.l("exitFullWindow")
        }, s.selectSource = function(e) {
            for (var i = 0, n = this.m.techOrder; i < n.length; i++) {
                var r = t.ba(n[i]),
                    s = window.videojs[r];
                if (s) {
                    if (s.isSupported())
                        for (var a = 0, o = e; a < o.length; a++) {
                            var u = o[a];
                            if (s.canPlaySource(u)) return {
                                source: u,
                                o: r
                            }
                        }
                } else t.log.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return l
        }, s.src = function(e) {
            return e === b ? S(this, "src") : (t.h.isArray(e) ? U(this, e) : "string" == typeof e ? this.src({
                src: e
            }) : e instanceof Object && (e.type && !window.videojs[this.gb].canPlaySource(e) ? U(this, [e]) : (this.F.src = e.src, this.uc = e.type || "", this.H(function() {
                this.o.setSource ? T(this, "setSource", e) : T(this, "src", e.src), "auto" == this.m.preload && this.load(), this.m.autoplay && this.play()
            }))), this)
        }, s.load = function() {
            return T(this, "load"), this
        }, s.currentSrc = function() {
            return S(this, "currentSrc") || this.F.src || ""
        }, s.zd = function() {
            return this.uc || ""
        }, s.Ga = function(t) {
            return t !== b ? (T(this, "setPreload", t), this.m.preload = t, this) : S(this, "preload")
        }, s.autoplay = function(t) {
            return t !== b ? (T(this, "setAutoplay", t), this.m.autoplay = t, this) : S(this, "autoplay")
        }, s.loop = function(t) {
            return t !== b ? (T(this, "setLoop", t), this.m.loop = t, this) : S(this, "loop")
        }, s.poster = function(t) {
            return t === b ? this.Mc : (t || (t = ""), this.Mc = t, T(this, "setPoster", t), this.l("posterchange"), this)
        }, s.controls = function(t) {
            return t !== b ? (t = !!t, this.yb !== t && ((this.yb = t) ? (this.r("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.l("controlsenabled")) : (this.r("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.l("controlsdisabled"))), this) : this.yb
        }, t.Player.prototype.Wb, s = t.Player.prototype, s.usingNativeControls = function(t) {
            return t !== b ? (t = !!t, this.Wb !== t && ((this.Wb = t) ? (this.n("vjs-using-native-controls"), this.l("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.l("usingcustomcontrols"))), this) : this.Wb
        }, s.da = k, s.error = function(e) {
            return e === b ? this.da : e === k ? (this.da = e, this.r("vjs-error"), this) : (this.da = e instanceof t.D ? e : new t.D(e), this.l("error"), this.n("vjs-error"), t.log.error("(CODE:" + this.da.code + " " + t.D.Va[this.da.code] + ")", this.da.message, this.da), this)
        }, s.ended = function() {
            return S(this, "ended")
        }, s.seeking = function() {
            return S(this, "seeking")
        }, s.sa = f, s.reportUserActivity = function() {
            this.sa = f
        }, s.Vb = f, s.userActive = function(t) {
            return t !== b ? (t = !!t, t !== this.Vb && ((this.Vb = t) ? (this.sa = f, this.r("vjs-user-inactive"), this.n("vjs-user-active"), this.l("useractive")) : (this.sa = l, this.o && this.o.Q("mousemove", function(t) {
                t.stopPropagation(), t.preventDefault()
            }), this.r("vjs-user-active"), this.n("vjs-user-inactive"), this.l("userinactive"))), this) : this.Vb
        }, s.playbackRate = function(t) {
            return t !== b ? (T(this, "setPlaybackRate", t), this) : this.o && this.o.featuresPlaybackRate ? S(this, "playbackRate") : 1
        }, s.Ec = l, t.Ma = t.a.extend(), t.Ma.prototype.m = {
            Ie: "play",
            children: {
                playToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                liveDisplay: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeControl: {},
                muteToggle: {},
                playbackRateMenuButton: {}
            }
        }, t.Ma.prototype.e = function() {
            return t.e("div", {
                className: "vjs-control-bar"
            })
        }, t.ac = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i)
            }
        }), t.ac.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-live-controls vjs-control"
            });
            return this.v = t.e("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.t("Stream Type") + "</span>" + this.t("LIVE"),
                "aria-live": "off"
            }), e.appendChild(this.v), e
        }, t.dc = t.u.extend({
            i: function(e, i) {
                t.u.call(this, e, i), this.c(e, "play", this.Pb), this.c(e, "pause", this.Ob)
            }
        }), s = t.dc.prototype, s.wa = "Play", s.S = function() {
            return "vjs-play-control " + t.u.prototype.S.call(this)
        }, s.s = function() {
            this.d.paused() ? this.d.play() : this.d.pause()
        }, s.Pb = function() {
            this.r("vjs-paused"), this.n("vjs-playing"), this.b.children[0].children[0].innerHTML = this.t("Pause")
        }, s.Ob = function() {
            this.r("vjs-playing"), this.n("vjs-paused"), this.b.children[0].children[0].innerHTML = this.t("Play")
        }, t.jb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i), this.c(e, "timeupdate", this.ia)
            }
        }), t.jb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });
            return this.v = t.e("div", {
                className: "vjs-current-time-display",
                innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                "aria-live": "off"
            }), e.appendChild(this.v), e
        }, t.jb.prototype.ia = function() {
            var e = this.d.eb ? this.d.F.currentTime : this.d.currentTime();
            this.v.innerHTML = '<span class="vjs-control-text">' + this.t("Current Time") + "</span> " + t.Ba(e, this.d.duration())
        }, t.kb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i), this.c(e, "timeupdate", this.ia)
            }
        }), t.kb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });
            return this.v = t.e("div", {
                className: "vjs-duration-display",
                innerHTML: '<span class="vjs-control-text">' + this.t("Duration Time") + "</span> 0:00",
                "aria-live": "off"
            }), e.appendChild(this.v), e
        }, t.kb.prototype.ia = function() {
            var e = this.d.duration();
            e && (this.v.innerHTML = '<span class="vjs-control-text">' + this.t("Duration Time") + "</span> " + t.Ba(e))
        }, t.kc = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i)
            }
        }), t.kc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, t.rb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i), this.c(e, "timeupdate", this.ia)
            }
        }), t.rb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });
            return this.v = t.e("div", {
                className: "vjs-remaining-time-display",
                innerHTML: '<span class="vjs-control-text">' + this.t("Remaining Time") + "</span> -0:00",
                "aria-live": "off"
            }), e.appendChild(this.v), e
        }, t.rb.prototype.ia = function() {
            this.d.duration() && (this.v.innerHTML = '<span class="vjs-control-text">' + this.t("Remaining Time") + "</span> -" + t.Ba(this.d.remainingTime()))
        }, t.Na = t.u.extend({
            i: function(e, i) {
                t.u.call(this, e, i)
            }
        }), t.Na.prototype.wa = "Fullscreen", t.Na.prototype.S = function() {
            return "vjs-fullscreen-control " + t.u.prototype.S.call(this)
        }, t.Na.prototype.s = function() {
            this.d.isFullscreen() ? (this.d.exitFullscreen(), this.xb.innerHTML = this.t("Fullscreen")) : (this.d.requestFullscreen(), this.xb.innerHTML = this.t("Non-Fullscreen"))
        }, t.qb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i)
            }
        }), t.qb.prototype.m = {
            children: {
                seekBar: {}
            }
        }, t.qb.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, t.gc = t.R.extend({
            i: function(e, i) {
                t.R.call(this, e, i), this.c(e, "timeupdate", this.ra), e.H(t.bind(this, this.ra))
            }
        }), s = t.gc.prototype, s.m = {
            children: {
                loadProgressBar: {},
                playProgressBar: {},
                seekHandle: {}
            },
            barName: "playProgressBar",
            handleName: "seekHandle"
        }, s.Lc = "timeupdate", s.e = function() {
            return t.R.prototype.e.call(this, "div", {
                className: "vjs-progress-holder",
                "aria-label": "video progress bar"
            })
        }, s.ra = function() {
            var e = this.d.eb ? this.d.F.currentTime : this.d.currentTime();
            this.b.setAttribute("aria-valuenow", t.round(100 * this.Hb(), 2)), this.b.setAttribute("aria-valuetext", t.Ba(e, this.d.duration()))
        }, s.Hb = function() {
            return this.d.currentTime() / this.d.duration()
        }, s.bb = function(e) {
            t.R.prototype.bb.call(this, e), this.d.eb = f, this.xe = !this.d.paused(), this.d.pause()
        }, s.fa = function(t) {
            t = H(this, t) * this.d.duration(), t == this.d.duration() && (t -= .1), this.d.currentTime(t)
        }, s.pa = function(e) {
            t.R.prototype.pa.call(this, e), this.d.eb = l, this.xe && this.d.play()
        }, s.Yc = function() {
            this.d.currentTime(this.d.currentTime() + 5)
        }, s.Xc = function() {
            this.d.currentTime(this.d.currentTime() - 5)
        }, t.nb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i), this.c(e, "progress", this.update)
            }
        }), t.nb.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.t("Loaded") + "</span>: 0%</span>"
            })
        }, t.nb.prototype.update = function() {
            var e, i, n, r, s = this.d.buffered();
            e = this.d.duration();
            var a, o = this.d;
            for (a = o.buffered(), o = o.duration(), a = a.end(a.length - 1), a > o && (a = o), o = this.b.children, this.b.style.width = 100 * (a / e || 0) + "%", e = 0; e < s.length; e++) i = s.start(e), n = s.end(e), (r = o[e]) || (r = this.b.appendChild(t.e())), r.style.left = 100 * (i / a || 0) + "%", r.style.width = 100 * ((n - i) / a || 0) + "%";
            for (e = o.length; e > s.length; e--) this.b.removeChild(o[e - 1])
        }, t.cc = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i)
            }
        }), t.cc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.t("Progress") + "</span>: 0%</span>"
            })
        }, t.Oa = t.$.extend({
            i: function(e, i) {
                t.$.call(this, e, i), this.c(e, "timeupdate", this.ia)
            }
        }), t.Oa.prototype.defaultValue = "00:00", t.Oa.prototype.e = function() {
            return t.$.prototype.e.call(this, "div", {
                className: "vjs-seek-handle",
                "aria-live": "off"
            })
        }, t.Oa.prototype.ia = function() {
            var e = this.d.eb ? this.d.F.currentTime : this.d.currentTime();
            this.b.innerHTML = '<span class="vjs-control-text">' + t.Ba(e, this.d.duration()) + "</span>"
        }, t.tb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i), e.o && e.o.featuresVolumeControl === l && this.n("vjs-hidden"), this.c(e, "loadstart", function() {
                    e.o.featuresVolumeControl === l ? this.n("vjs-hidden") : this.r("vjs-hidden")
                })
            }
        }), t.tb.prototype.m = {
            children: {
                volumeBar: {}
            }
        }, t.tb.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-volume-control vjs-control"
            })
        }, t.sb = t.R.extend({
            i: function(e, i) {
                t.R.call(this, e, i), this.c(e, "volumechange", this.ra), e.H(t.bind(this, this.ra))
            }
        }), s = t.sb.prototype, s.ra = function() {
            this.b.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2)), this.b.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
        }, s.m = {
            children: {
                volumeLevel: {},
                volumeHandle: {}
            },
            barName: "volumeLevel",
            handleName: "volumeHandle"
        }, s.Lc = "volumechange", s.e = function() {
            return t.R.prototype.e.call(this, "div", {
                className: "vjs-volume-bar",
                "aria-label": "volume level"
            })
        }, s.fa = function(t) {
            this.d.muted() && this.d.muted(l), this.d.volume(H(this, t))
        }, s.Hb = function() {
            return this.d.muted() ? 0 : this.d.volume()
        }, s.Yc = function() {
            this.d.volume(this.d.volume() + .1)
        }, s.Xc = function() {
            this.d.volume(this.d.volume() - .1)
        }, t.lc = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i)
            }
        }), t.lc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, t.ub = t.$.extend(), t.ub.prototype.defaultValue = "00:00", t.ub.prototype.e = function() {
            return t.$.prototype.e.call(this, "div", {
                className: "vjs-volume-handle"
            })
        }, t.ka = t.u.extend({
            i: function(e, i) {
                t.u.call(this, e, i), this.c(e, "volumechange", this.update), e.o && e.o.featuresVolumeControl === l && this.n("vjs-hidden"), this.c(e, "loadstart", function() {
                    e.o.featuresVolumeControl === l ? this.n("vjs-hidden") : this.r("vjs-hidden")
                })
            }
        }), t.ka.prototype.e = function() {
            return t.u.prototype.e.call(this, "div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.t("Mute") + "</span></div>"
            })
        }, t.ka.prototype.s = function() {
            this.d.muted(this.d.muted() ? l : f)
        }, t.ka.prototype.update = function() {
            var e = this.d.volume(),
                i = 3;
            for (0 === e || this.d.muted() ? i = 0 : .33 > e ? i = 1 : .67 > e && (i = 2), this.d.muted() ? this.b.children[0].children[0].innerHTML != this.t("Unmute") && (this.b.children[0].children[0].innerHTML = this.t("Unmute")) : this.b.children[0].children[0].innerHTML != this.t("Mute") && (this.b.children[0].children[0].innerHTML = this.t("Mute")), e = 0; 4 > e; e++) t.r(this.b, "vjs-vol-" + e);
            t.n(this.b, "vjs-vol-" + i)
        }, t.ua = t.M.extend({
            i: function(e, i) {
                t.M.call(this, e, i), this.c(e, "volumechange", this.update), e.o && e.o.featuresVolumeControl === l && this.n("vjs-hidden"), this.c(e, "loadstart", function() {
                    e.o.featuresVolumeControl === l ? this.n("vjs-hidden") : this.r("vjs-hidden")
                }), this.n("vjs-menu-button")
            }
        }), t.ua.prototype.za = function() {
            var e = new t.ja(this.d, {
                    rc: "div"
                }),
                i = new t.sb(this.d, this.m.volumeBar);
            return i.c("focus", function() {
                e.n("vjs-lock-showing")
            }), i.c("blur", function() {
                E(e)
            }), e.U(i), e
        }, t.ua.prototype.s = function() {
            t.ka.prototype.s.call(this), t.M.prototype.s.call(this)
        }, t.ua.prototype.e = function() {
            return t.u.prototype.e.call(this, "div", {
                className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.t("Mute") + "</span></div>"
            })
        }, t.ua.prototype.update = t.ka.prototype.update, t.ec = t.M.extend({
            i: function(e, i) {
                t.M.call(this, e, i), this.bd(), this.ad(), this.c(e, "loadstart", this.bd), this.c(e, "ratechange", this.ad)
            }
        }), s = t.ec.prototype, s.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-playback-rate vjs-menu-button vjs-control",
                innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + this.t("Playback Rate") + "</span></div>"
            });
            return this.Hc = t.e("div", {
                className: "vjs-playback-rate-value",
                innerHTML: 1
            }), e.appendChild(this.Hc), e
        }, s.za = function() {
            var e = new t.ja(this.j()),
                i = this.j().options().playbackRates;
            if (i)
                for (var n = i.length - 1; n >= 0; n--) e.U(new t.pb(this.j(), {
                    rate: i[n] + "x"
                }));
            return e
        }, s.ra = function() {
            this.w().setAttribute("aria-valuenow", this.j().playbackRate())
        }, s.s = function() {
            for (var t = this.j().playbackRate(), e = this.j().options().playbackRates, i = e[0], n = 0; n < e.length; n++)
                if (e[n] > t) {
                    i = e[n];
                    break
                }
            this.j().playbackRate(i)
        }, s.bd = function() {
            ea(this) ? this.r("vjs-hidden") : this.n("vjs-hidden")
        }, s.ad = function() {
            ea(this) && (this.Hc.innerHTML = this.j().playbackRate() + "x")
        }, t.pb = t.J.extend({
            rc: "button",
            i: function(e, i) {
                var n = this.label = i.rate,
                    r = this.Oc = parseFloat(n, 10);
                i.label = n, i.selected = 1 === r, t.J.call(this, e, i), this.c(e, "ratechange", this.update)
            }
        }), t.pb.prototype.s = function() {
            t.J.prototype.s.call(this), this.j().playbackRate(this.Oc)
        }, t.pb.prototype.update = function() {
            this.selected(this.j().playbackRate() == this.Oc)
        }, t.fc = t.u.extend({
            i: function(e, i) {
                t.u.call(this, e, i), this.update(), e.c("posterchange", t.bind(this, this.update))
            }
        }), s = t.fc.prototype, s.dispose = function() {
            this.j().k("posterchange", this.update), t.u.prototype.dispose.call(this)
        }, s.e = function() {
            var e = t.e("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            return t.fd || (this.Eb = t.e("img"), e.appendChild(this.Eb)), e
        }, s.update = function() {
            var t = this.j().poster();
            this.ga(t), t ? this.b.style.display = "" : this.Y()
        }, s.ga = function(t) {
            var e;
            this.Eb ? this.Eb.src = t : (e = "", t && (e = 'url("' + t + '")'), this.b.style.backgroundImage = e)
        }, s.s = function() {
            this.d.play()
        }, t.bc = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i)
            }
        }), t.bc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-loading-spinner"
            })
        }, t.hb = t.u.extend(), t.hb.prototype.e = function() {
            return t.u.prototype.e.call(this, "div", {
                className: "vjs-big-play-button",
                innerHTML: '<span aria-hidden="true"></span>',
                "aria-label": "play video"
            })
        }, t.hb.prototype.s = function() {
            this.d.play()
        }, t.lb = t.a.extend({
            i: function(e, i) {
                t.a.call(this, e, i), this.update(), this.c(e, "error", this.update)
            }
        }), t.lb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-error-display"
            });
            return this.v = t.e("div"), e.appendChild(this.v), e
        }, t.lb.prototype.update = function() {
            this.j().error() && (this.v.innerHTML = this.t(this.j().error().message))
        }, t.q = t.a.extend({
            i: function(e, i, n) {
                i = i || {}, i.Qc = l, t.a.call(this, e, i, n), this.featuresProgressEvents || (this.Ic = f, this.Nc = this.setInterval(function() {
                    var t = this.j().bufferedPercent();
                    this.vd != t && this.j().l("progress"), this.vd = t, 1 === t && this.clearInterval(this.Nc)
                }, 500)), this.featuresTimeupdateEvents || (e = this.d, this.Nb = f, this.c(e, "play", this.$c), this.c(e, "pause", this.fb), this.Q("timeupdate", function() {
                    this.featuresTimeupdateEvents = f, fa(this)
                }));
                var r;
                r = this.j(), e = function() {
                    if (r.controls() && !r.usingNativeControls()) {
                        var t;
                        this.c("mousedown", this.s), this.c("touchstart", function() {
                            t = this.d.userActive()
                        }), this.c("touchmove", function() {
                            t && this.j().reportUserActivity()
                        }), this.c("touchend", function(t) {
                            t.preventDefault()
                        }), G(this), this.c("tap", this.ce)
                    }
                }, this.H(e), this.c(r, "controlsenabled", e), this.c(r, "controlsdisabled", this.he), this.H(function() {
                    this.networkState && 0 < this.networkState() && this.j().l("loadstart")
                })
            }
        }), s = t.q.prototype, s.he = function() {
            this.k("tap"), this.k("touchstart"), this.k("touchmove"), this.k("touchleave"), this.k("touchcancel"), this.k("touchend"), this.k("click"), this.k("mousedown")
        }, s.s = function(t) {
            0 === t.button && this.j().controls() && (this.j().paused() ? this.j().play() : this.j().pause())
        }, s.ce = function() {
            this.j().userActive(!this.j().userActive())
        }, s.$c = function() {
            this.tc && this.fb(), this.tc = this.setInterval(function() {
                this.j().l("timeupdate")
            }, 250)
        }, s.fb = function() {
            this.clearInterval(this.tc), this.j().l("timeupdate")
        }, s.dispose = function() {
            this.Ic && (this.Ic = l, this.clearInterval(this.Nc)), this.Nb && fa(this), t.a.prototype.dispose.call(this)
        }, s.Tb = function() {
            this.Nb && this.j().l("timeupdate")
        }, s.Tc = m(), t.q.prototype.featuresVolumeControl = f, t.q.prototype.featuresFullscreenResize = l, t.q.prototype.featuresPlaybackRate = l, t.q.prototype.featuresProgressEvents = l, t.q.prototype.featuresTimeupdateEvents = l, t.q.dd = function(t) {
            t.Rb = function(e) {
                var i, n = t.Vc;
                n || (n = t.Vc = []), i === b && (i = n.length), n.splice(i, 0, e)
            }, t.Rc = function(e) {
                for (var i, n = t.Vc || [], r = 0; r < n.length; r++)
                    if (i = n[r].Sa(e)) return n[r];
                return k
            }, t.oc = function(e) {
                var i = t.Rc(e);
                return i ? i.Sa(e) : ""
            }, t.prototype.Uc = function(e) {
                var i = t.Rc(e);
                this.Cb(), this.k("dispose", this.Cb), this.sc = e, this.Ub = i.Ib(e, this), this.c("dispose", this.Cb)
            }, t.prototype.Cb = function() {
                this.Ub && this.Ub.dispose && this.Ub.dispose()
            }
        }, t.g = t.q.extend({
            i: function(e, i, n) {
                for (t.q.call(this, e, i, n), n = t.g.mb.length - 1; n >= 0; n--) this.c(t.g.mb[n], this.Fd);
                if ((i = i.source) && (this.b.currentSrc !== i.src || e.I && 3 === e.I.Md) && this.Uc(i), t.ic && e.options().nativeControlsForTouch === f) {
                    var r, s, a, o;
                    r = this, s = this.j(), i = s.controls(), r.b.controls = !!i, a = function() {
                            r.b.controls = f
                        }, o = function() {
                            r.b.controls = l
                        }, s.c("controlsenabled", a), s.c("controlsdisabled", o), i = function() {
                            s.k("controlsenabled", a), s.k("controlsdisabled", o)
                        }, r.c("dispose", i),
                        s.c("usingcustomcontrols", i), s.usingNativeControls(f)
                }
                e.H(function() {
                    this.I && this.m.autoplay && this.paused() && (delete this.I.poster, this.play())
                }), this.Ja()
            }
        }), s = t.g.prototype, s.dispose = function() {
            t.g.Bb(this.b), t.q.prototype.dispose.call(this)
        }, s.e = function() {
            var e, i = this.d,
                n = i.I;
            n && this.movingMediaElementInDOM !== l || (n ? (e = n.cloneNode(l), t.g.Bb(n), n = e, i.I = k) : (n = t.e("video"), t.Sc(n, t.h.z(i.se || {}, {
                id: i.id() + "_html5_api",
                "class": "vjs-tech"
            }))), n.player = i, t.Jb(n, i.w())), e = ["autoplay", "preload", "loop", "muted"];
            for (var r = e.length - 1; r >= 0; r--) {
                var s = e[r],
                    a = {};
                "undefined" != typeof i.m[s] && (a[s] = i.m[s]), t.Sc(n, a)
            }
            return n
        }, s.Fd = function(t) {
            "error" == t.type && this.error() ? this.j().error(this.error().code) : (t.bubbles = l, this.j().l(t))
        }, s.play = function() {
            this.b.play()
        }, s.pause = function() {
            this.b.pause()
        }, s.paused = function() {
            return this.b.paused
        }, s.currentTime = function() {
            return this.b.currentTime
        }, s.Tb = function(e) {
            try {
                this.b.currentTime = e
            } catch (i) {
                t.log(i, "Video is not ready. (Video.js)")
            }
        }, s.duration = function() {
            return this.b.duration || 0
        }, s.buffered = function() {
            return this.b.buffered
        }, s.volume = function() {
            return this.b.volume
        }, s.oe = function(t) {
            this.b.volume = t
        }, s.muted = function() {
            return this.b.muted
        }, s.le = function(t) {
            this.b.muted = t
        }, s.width = function() {
            return this.b.offsetWidth
        }, s.height = function() {
            return this.b.offsetHeight
        }, s.Ha = function() {
            return "function" != typeof this.b.webkitEnterFullScreen || !/Android/.test(t.N) && /Chrome|Mac OS X 10.5/.test(t.N) ? l : f
        }, s.xc = function() {
            var t = this.b;
            "webkitDisplayingFullscreen" in t && this.Q("webkitbeginfullscreen", function() {
                this.d.isFullscreen(f), this.Q("webkitendfullscreen", function() {
                    this.d.isFullscreen(l), this.d.l("fullscreenchange")
                }), this.d.l("fullscreenchange")
            }), t.paused && t.networkState <= t.ze ? (this.b.play(), this.setTimeout(function() {
                t.pause(), t.webkitEnterFullScreen()
            }, 0)) : t.webkitEnterFullScreen()
        }, s.Gd = function() {
            this.b.webkitExitFullScreen()
        }, s.src = function(t) {
            return t === b ? this.b.src : void this.ga(t)
        }, s.ga = function(t) {
            this.b.src = t
        }, s.load = function() {
            this.b.load()
        }, s.currentSrc = function() {
            return this.b.currentSrc
        }, s.poster = function() {
            return this.b.poster
        }, s.Tc = function(t) {
            this.b.poster = t
        }, s.Ga = function() {
            return this.b.Ga
        }, s.ne = function(t) {
            this.b.Ga = t
        }, s.autoplay = function() {
            return this.b.autoplay
        }, s.ie = function(t) {
            this.b.autoplay = t
        }, s.controls = function() {
            return this.b.controls
        }, s.loop = function() {
            return this.b.loop
        }, s.ke = function(t) {
            this.b.loop = t
        }, s.error = function() {
            return this.b.error
        }, s.seeking = function() {
            return this.b.seeking
        }, s.ended = function() {
            return this.b.ended
        }, s.playbackRate = function() {
            return this.b.playbackRate
        }, s.me = function(t) {
            this.b.playbackRate = t
        }, s.networkState = function() {
            return this.b.networkState
        }, t.g.isSupported = function() {
            try {
                t.A.volume = .5
            } catch (e) {
                return l
            }
            return !!t.A.canPlayType
        }, t.q.dd(t.g), t.g.V = {}, t.g.V.Sa = function(e) {
            function i(e) {
                try {
                    return !!t.A.canPlayType(e)
                } catch (i) {
                    return ""
                }
            }
            return e.type ? i(e.type) : (e = e.src.match(/\.([^\/\?]+)(\?[^\/]+)?$/i)[1], i("video/" + e))
        }, t.g.V.Ib = function(t, e) {
            e.ga(t.src)
        }, t.g.V.dispose = m(), t.g.Rb(t.g.V), t.g.xd = function() {
            var e = t.A.volume;
            return t.A.volume = e / 2 + .1, e !== t.A.volume
        }, t.g.wd = function() {
            var e = t.A.playbackRate;
            return t.A.playbackRate = e / 2 + .1, e !== t.A.playbackRate
        }, t.g.prototype.featuresVolumeControl = t.g.xd(), t.g.prototype.featuresPlaybackRate = t.g.wd(), t.g.prototype.movingMediaElementInDOM = !t.kd, t.g.prototype.featuresFullscreenResize = f, t.g.prototype.featuresProgressEvents = f;
        var V, ga = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
            ha = /^video\/mp4/i;
        t.g.Kc = function() {
            4 <= t.Xb && (V || (V = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
                return t && ga.test(t) ? "maybe" : V.call(this, t)
            }), t.od && (V || (V = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
                return t && ha.test(t) ? "maybe" : V.call(this, t)
            })
        }, t.g.we = function() {
            var e = t.A.constructor.prototype.canPlayType;
            return t.A.constructor.prototype.canPlayType = V, V = k, e
        }, t.g.Kc(), t.g.mb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), t.g.Bb = function(t) {
            if (t) {
                for (t.player = k, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                if (t.removeAttribute("src"), "function" == typeof t.load) try {
                    t.load()
                } catch (e) {}
            }
        }, t.f = t.q.extend({
            i: function(e, i, n) {
                t.q.call(this, e, i, n);
                var r = i.source;
                n = i.parentEl;
                var s = this.b = t.e("div", {
                        id: e.id() + "_temp_flash"
                    }),
                    a = e.id() + "_flash_api",
                    o = e.m,
                    o = t.h.z({
                        readyFunction: "videojs.Flash.onReady",
                        eventProxyFunction: "videojs.Flash.onEvent",
                        errorEventProxyFunction: "videojs.Flash.onError",
                        autoplay: o.autoplay,
                        preload: o.Ga,
                        loop: o.loop,
                        muted: o.muted
                    }, i.flashVars),
                    u = t.h.z({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    }, i.params),
                    a = t.h.z({
                        id: a,
                        name: a,
                        "class": "vjs-tech"
                    }, i.attributes);
                r && this.H(function() {
                    this.Uc(r)
                }), t.Jb(s, n), i.startTime && this.H(function() {
                    this.load(), this.play(), this.currentTime(i.startTime)
                }), t.jd && this.H(function() {
                    this.c("mousemove", function() {
                        this.j().l({
                            type: "mousemove",
                            bubbles: l
                        })
                    })
                }), e.c("stageclick", e.reportUserActivity), this.b = t.f.wc(i.swf, s, o, u, a)
            }
        }), s = t.f.prototype, s.dispose = function() {
            t.q.prototype.dispose.call(this)
        }, s.play = function() {
            this.b.vjs_play()
        }, s.pause = function() {
            this.b.vjs_pause()
        }, s.src = function(t) {
            return t === b ? this.currentSrc() : this.ga(t)
        }, s.ga = function(e) {
            if (e = t.Jd(e), this.b.vjs_src(e), this.d.autoplay()) {
                var i = this;
                this.setTimeout(function() {
                    i.play()
                }, 0)
            }
        }, t.f.prototype.setCurrentTime = function(e) {
            this.Ud = e, this.b.vjs_setProperty("currentTime", e), t.q.prototype.Tb.call(this)
        }, t.f.prototype.currentTime = function() {
            return this.seeking() ? this.Ud || 0 : this.b.vjs_getProperty("currentTime")
        }, t.f.prototype.currentSrc = function() {
            return this.sc ? this.sc.src : this.b.vjs_getProperty("currentSrc")
        }, t.f.prototype.load = function() {
            this.b.vjs_load()
        }, t.f.prototype.poster = function() {
            this.b.vjs_getProperty("poster")
        }, t.f.prototype.setPoster = m(), t.f.prototype.buffered = function() {
            return t.zb(0, this.b.vjs_getProperty("buffered"))
        }, t.f.prototype.Ha = r(l), t.f.prototype.xc = r(l);
        var ka = t.f.prototype,
            W = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
            ma = "error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),
            X;
        for (X = 0; X < W.length; X++) la(W[X]), ia();
        for (X = 0; X < ma.length; X++) la(ma[X]);
        if (t.f.isSupported = function() {
                return 10 <= t.f.version()[0]
            }, t.q.dd(t.f), t.f.V = {}, t.f.V.Sa = function(e) {
                return e.type && e.type.replace(/;.*/, "").toLowerCase() in t.f.Id ? "maybe" : ""
            }, t.f.V.Ib = function(t, e) {
                e.ga(t.src)
            }, t.f.V.dispose = m(), t.f.Rb(t.f.V), t.f.Id = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, t.f.onReady = function(e) {
                var i;
                (i = (e = t.w(e)) && e.parentNode && e.parentNode.player) && (e.player = i, t.f.checkReady(i.o))
            }, t.f.checkReady = function(e) {
                e.w() && (e.w().vjs_getProperty ? e.Ja() : this.setTimeout(function() {
                    t.f.checkReady(e)
                }, 50))
            }, t.f.onEvent = function(e, i) {
                t.w(e).player.l(i)
            }, t.f.onError = function(e, i) {
                var n = t.w(e).player,
                    r = "FLASH: " + i;
                n.error("srcnotfound" == i ? {
                    code: 4,
                    message: r
                } : r)
            }, t.f.version = function() {
                var t = "0,0,0";
                try {
                    t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (e) {
                    try {
                        navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (i) {}
                }
                return t.split(",")
            }, t.f.wc = function(e, i, n, r, s) {
                e = t.f.Ld(e, n, r, s), e = t.e("div", {
                    innerHTML: e
                }).childNodes[0], n = i.parentNode, i.parentNode.replaceChild(e, i);
                var a = n.childNodes[0];
                return setTimeout(function() {
                    a.style.display = "block"
                }, 1e3), e
            }, t.f.Ld = function(e, i, n, r) {
                var s = "",
                    a = "",
                    o = "";
                return i && t.h.X(i, function(t, e) {
                    s += t + "=" + e + "&amp;"
                }), n = t.h.z({
                    movie: e,
                    flashvars: s,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, n), t.h.X(n, function(t, e) {
                    a += '<param name="' + t + '" value="' + e + '" />'
                }), r = t.h.z({
                    data: e,
                    width: "100%",
                    height: "100%"
                }, r), t.h.X(r, function(t, e) {
                    o += t + '="' + e + '" '
                }), '<object type="application/x-shockwave-flash" ' + o + ">" + a + "</object>"
            }, t.f.qe = {
                "rtmp/mp4": "MP4",
                "rtmp/flv": "FLV"
            }, t.f.Le = function(t, e) {
                return t + "&" + e
            }, t.f.pe = function(t) {
                var e = {
                    qc: "",
                    Zc: ""
                };
                if (!t) return e;
                var i, n = t.indexOf("&");
                return -1 !== n ? i = n + 1 : (n = i = t.lastIndexOf("/") + 1, 0 === n && (n = i = t.length)), e.qc = t.substring(0, n), e.Zc = t.substring(i, t.length), e
            }, t.f.Rd = function(e) {
                return e in t.f.qe
            }, t.f.qd = /^rtmp[set]?:\/\//i, t.f.Qd = function(e) {
                return t.f.qd.test(e)
            }, t.f.Sb = {}, t.f.Sb.Sa = function(e) {
                return t.f.Rd(e.type) || t.f.Qd(e.src) ? "maybe" : ""
            }, t.f.Sb.Ib = function(e, i) {
                var n = t.f.pe(e.src);
                i.Je(n.qc), i.Ke(n.Zc)
            }, t.f.Rb(t.f.Sb), t.pd = t.a.extend({
                i: function(e, i, n) {
                    if (t.a.call(this, e, i, n), e.m.sources && 0 !== e.m.sources.length) e.src(e.m.sources);
                    else
                        for (i = 0, n = e.m.techOrder; i < n.length; i++) {
                            var r = t.ba(n[i]),
                                s = window.videojs[r];
                            if (s && s.isSupported()) {
                                Q(e, r);
                                break
                            }
                        }
                }
            }), t.Player.prototype.textTracks = function() {
                return this.Ia = this.Ia || []
            }, t.B = t.a.extend({
                i: function(e, i) {
                    t.a.call(this, e, i), this.K = i.id || "vjs_" + i.kind + "_" + i.language + "_" + t.p++, this.Wc = i.src, this.Cd = i["default"] || i.dflt, this.ue = i.title, this.Ya = i.srclang, this.Sd = i.label, this.ca = [], this.vb = [], this.oa = this.qa = 0, e.c("dispose", t.bind(this, this.vc, this.K))
                }
            }), s = t.B.prototype, s.L = n("G"), s.src = n("Wc"), s.Ab = n("Cd"), s.title = n("ue"), s.language = n("Ya"), s.label = n("Sd"), s.yd = n("ca"), s.rd = n("vb"), s.readyState = n("qa"), s.mode = n("oa"), s.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-" + this.G + " vjs-text-track"
                })
            }, s.show = function() {
                oa(this), this.oa = 2, t.a.prototype.show.call(this)
            }, s.Y = function() {
                oa(this), this.oa = 1, t.a.prototype.Y.call(this)
            }, s.disable = function() {
                2 == this.oa && this.Y(), this.vc(), this.oa = 0
            }, s.vc = function() {
                this.d.k("timeupdate", t.bind(this, this.update, this.K)), this.d.k("ended", t.bind(this, this.reset, this.K)), this.reset(), this.d.ma("textTrackDisplay").removeChild(this)
            }, s.load = function() {
                0 === this.qa && (this.qa = 1, t.ye(this.Wc, t.bind(this, function(e, i, n) {
                    if (e) this.error = e, this.qa = 3, this.l("error");
                    else {
                        var r, s;
                        e = n.split("\n"), i = "", n = 1;
                        for (var a = e.length; a > n; n++)
                            if (i = t.trim(e[n])) {
                                for (-1 == i.indexOf("-->") ? (r = i, i = t.trim(e[++n])) : r = this.ca.length, r = {
                                        id: r,
                                        index: this.ca.length
                                    }, s = i.split(/[\t ]+/), r.startTime = pa(s[0]), r.Aa = pa(s[2]), s = []; e[++n] && (i = t.trim(e[n]));) s.push(i);
                                r.text = s.join("<br/>"), this.ca.push(r)
                            }
                        this.qa = 2, this.l("loaded")
                    }
                })))
            }, s.update = function() {
                if (0 < this.ca.length) {
                    var t = this.d.options().trackTimeOffset || 0,
                        t = this.d.currentTime() + t;
                    if (this.Qb === b || t < this.Qb || this.Za <= t) {
                        var e, i, n, r, s = this.ca,
                            a = this.d.duration(),
                            o = 0,
                            u = l,
                            c = [];
                        for (t >= this.Za || this.Za === b ? r = this.Fb !== b ? this.Fb : 0 : (u = f, r = this.Mb !== b ? this.Mb : s.length - 1);;) {
                            if (n = s[r], n.Aa <= t) o = Math.max(o, n.Aa), n.Qa && (n.Qa = l);
                            else if (t < n.startTime) {
                                if (a = Math.min(a, n.startTime), n.Qa && (n.Qa = l), !u) break
                            } else u ? (c.splice(0, 0, n), i === b && (i = r), e = r) : (c.push(n), e === b && (e = r), i = r), a = Math.min(a, n.Aa), o = Math.max(o, n.startTime), n.Qa = f;
                            if (u) {
                                if (0 === r) break;
                                r--
                            } else {
                                if (r === s.length - 1) break;
                                r++
                            }
                        }
                        for (this.vb = c, this.Za = a, this.Qb = o, this.Fb = e, this.Mb = i, e = this.vb, i = "", t = 0, s = e.length; s > t; t++) i += '<span class="vjs-tt-cue">' + e[t].text + "</span>";
                        this.b.innerHTML = i, this.l("cuechange")
                    }
                }
            }, s.reset = function() {
                this.Za = 0, this.Qb = this.d.duration(), this.Mb = this.Fb = 0
            }, t.Zb = t.B.extend(), t.Zb.prototype.G = "captions", t.hc = t.B.extend(), t.hc.prototype.G = "subtitles", t.$b = t.B.extend(), t.$b.prototype.G = "chapters", t.jc = t.a.extend({
                i: function(e, i, n) {
                    if (t.a.call(this, e, i, n), e.m.tracks && 0 < e.m.tracks.length) {
                        i = this.d, e = e.m.tracks;
                        for (var r = 0; r < e.length; r++) n = e[r], na(i, n.kind, n.label, n.language, n)
                    }
                }
            }), t.jc.prototype.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-text-track-display"
                })
            }, t.aa = t.J.extend({
                i: function(e, i) {
                    var n = this.ha = i.track;
                    i.label = n.label(), i.selected = n.Ab(), t.J.call(this, e, i), this.c(e, n.L() + "trackchange", this.update)
                }
            }), t.aa.prototype.s = function() {
                t.J.prototype.s.call(this), Y(this.d, this.ha.K, this.ha.L())
            }, t.aa.prototype.update = function() {
                this.selected(2 == this.ha.mode())
            }, t.ob = t.aa.extend({
                i: function(e, i) {
                    i.track = {
                        L: function() {
                            return i.kind
                        },
                        j: e,
                        label: function() {
                            return i.kind + " off"
                        },
                        Ab: r(l),
                        mode: r(l)
                    }, t.aa.call(this, e, i), this.selected(f)
                }
            }), t.ob.prototype.s = function() {
                t.aa.prototype.s.call(this), Y(this.d, this.ha.K, this.ha.L())
            }, t.ob.prototype.update = function() {
                for (var t, e = this.d.textTracks(), i = 0, n = e.length, r = f; n > i; i++) t = e[i], t.L() == this.ha.L() && 2 == t.mode() && (r = l);
                this.selected(r)
            }, t.T = t.M.extend({
                i: function(e, i) {
                    t.M.call(this, e, i), 1 >= this.P.length && this.Y()
                }
            }), t.T.prototype.ya = function() {
                var e, i = [];
                i.push(new t.ob(this.d, {
                    kind: this.G
                }));
                for (var n = 0; n < this.d.textTracks().length; n++) e = this.d.textTracks()[n], e.L() === this.G && i.push(new t.aa(this.d, {
                    track: e
                }));
                return i
            }, t.Ka = t.T.extend({
                i: function(e, i, n) {
                    t.T.call(this, e, i, n), this.b.setAttribute("aria-label", "Captions Menu")
                }
            }), t.Ka.prototype.G = "captions", t.Ka.prototype.wa = "Captions", t.Ka.prototype.className = "vjs-captions-button", t.Pa = t.T.extend({
                i: function(e, i, n) {
                    t.T.call(this, e, i, n), this.b.setAttribute("aria-label", "Subtitles Menu")
                }
            }), t.Pa.prototype.G = "subtitles", t.Pa.prototype.wa = "Subtitles", t.Pa.prototype.className = "vjs-subtitles-button", t.La = t.T.extend({
                i: function(e, i, n) {
                    t.T.call(this, e, i, n), this.b.setAttribute("aria-label", "Chapters Menu")
                }
            }), s = t.La.prototype, s.G = "chapters", s.wa = "Chapters", s.className = "vjs-chapters-button", s.ya = function() {
                for (var e, i = [], n = 0; n < this.d.textTracks().length; n++) e = this.d.textTracks()[n], e.L() === this.G && i.push(new t.aa(this.d, {
                    track: e
                }));
                return i
            }, s.za = function() {
                for (var e, i, n = this.d.textTracks(), r = 0, s = n.length, a = this.P = []; s > r; r++)
                    if (e = n[r], e.L() == this.G) {
                        if (0 !== e.readyState()) {
                            i = e;
                            break
                        }
                        e.load(), e.c("loaded", t.bind(this, this.za))
                    }
                if (n = this.Da, n === b && (n = new t.ja(this.d), n.la().appendChild(t.e("li", {
                        className: "vjs-menu-title",
                        innerHTML: t.ba(this.G),
                        re: -1
                    }))), i) {
                    e = i.ca;
                    for (var o, r = 0, s = e.length; s > r; r++) o = e[r], o = new t.ib(this.d, {
                        track: i,
                        cue: o
                    }), a.push(o), n.U(o);
                    this.U(n)
                }
                return 0 < this.P.length && this.show(), n
            }, t.ib = t.J.extend({
                i: function(e, i) {
                    var n = this.ha = i.track,
                        r = this.cue = i.cue,
                        s = e.currentTime();
                    i.label = r.text, i.selected = r.startTime <= s && s < r.Aa, t.J.call(this, e, i), n.c("cuechange", t.bind(this, this.update))
                }
            }), t.ib.prototype.s = function() {
                t.J.prototype.s.call(this), this.d.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, t.ib.prototype.update = function() {
                var t = this.cue,
                    e = this.d.currentTime();
                this.selected(t.startTime <= e && e < t.Aa)
            }, t.h.z(t.Ma.prototype.m.children, {
                subtitlesButton: {},
                captionsButton: {},
                chaptersButton: {}
            }), "undefined" != typeof window.JSON && "function" == typeof window.JSON.parse) t.JSON = window.JSON;
        else {
            t.JSON = {};
            var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            t.JSON.parse = function(a, c) {
                function d(t, e) {
                    var i, n, r = t[e];
                    if (r && "object" == typeof r)
                        for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = d(r, i), n !== b ? r[i] = n : delete r[i]);
                    return c.call(t, e, r)
                }
                var e;
                if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
                    "": e
                }, "") : e;
                throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
            }
        }
        t.nc = function() {
            var e, i, n, r;
            e = document.getElementsByTagName("video"), i = document.getElementsByTagName("audio");
            var s = [];
            if (e && 0 < e.length)
                for (n = 0, r = e.length; r > n; n++) s.push(e[n]);
            if (i && 0 < i.length)
                for (n = 0, r = i.length; r > n; n++) s.push(i[n]);
            if (s && 0 < s.length)
                for (n = 0, r = s.length; r > n; n++) {
                    if (!(i = s[n]) || !i.getAttribute) {
                        t.wb();
                        break
                    }
                    i.player === b && (e = i.getAttribute("data-setup"), e !== k && videojs(i))
                } else t.cd || t.wb()
        }, t.wb = function() {
            setTimeout(t.nc, 1)
        }, "complete" === document.readyState ? t.cd = f : t.Q(window, "load", function() {
            t.cd = f
        }), t.wb(), t.ge = function(e, i) {
            t.Player.prototype[e] = i
        };
        var qa = this;
        $("videojs", t), $("_V_", t), $("videojs.options", t.options), $("videojs.players", t.Fa), $("videojs.TOUCH_ENABLED", t.ic), $("videojs.cache", t.xa), $("videojs.Component", t.a), t.a.prototype.player = t.a.prototype.j, t.a.prototype.options = t.a.prototype.options, t.a.prototype.init = t.a.prototype.i, t.a.prototype.dispose = t.a.prototype.dispose, t.a.prototype.createEl = t.a.prototype.e, t.a.prototype.contentEl = t.a.prototype.la, t.a.prototype.el = t.a.prototype.w, t.a.prototype.addChild = t.a.prototype.U, t.a.prototype.getChild = t.a.prototype.ma, t.a.prototype.getChildById = t.a.prototype.Kd, t.a.prototype.children = t.a.prototype.children, t.a.prototype.initChildren = t.a.prototype.Dc, t.a.prototype.removeChild = t.a.prototype.removeChild, t.a.prototype.on = t.a.prototype.c, t.a.prototype.off = t.a.prototype.k, t.a.prototype.one = t.a.prototype.Q, t.a.prototype.trigger = t.a.prototype.l, t.a.prototype.triggerReady = t.a.prototype.Ja, t.a.prototype.show = t.a.prototype.show, t.a.prototype.hide = t.a.prototype.Y, t.a.prototype.width = t.a.prototype.width, t.a.prototype.height = t.a.prototype.height, t.a.prototype.dimensions = t.a.prototype.Dd, t.a.prototype.ready = t.a.prototype.H, t.a.prototype.addClass = t.a.prototype.n, t.a.prototype.removeClass = t.a.prototype.r, t.a.prototype.buildCSSClass = t.a.prototype.S, t.a.prototype.localize = t.a.prototype.t, t.a.prototype.setInterval = t.a.prototype.setInterval, t.a.prototype.setTimeout = t.a.prototype.setTimeout, t.Player.prototype.ended = t.Player.prototype.ended, t.Player.prototype.enterFullWindow = t.Player.prototype.yc, t.Player.prototype.exitFullWindow = t.Player.prototype.Db, t.Player.prototype.preload = t.Player.prototype.Ga, t.Player.prototype.remainingTime = t.Player.prototype.remainingTime, t.Player.prototype.supportsFullScreen = t.Player.prototype.Ha, t.Player.prototype.currentType = t.Player.prototype.zd, t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen, t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen, t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen, t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen, t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen, t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen, $("videojs.MediaLoader", t.pd), $("videojs.TextTrackDisplay", t.jc), $("videojs.ControlBar", t.Ma), $("videojs.Button", t.u), $("videojs.PlayToggle", t.dc), $("videojs.FullscreenToggle", t.Na), $("videojs.BigPlayButton", t.hb), $("videojs.LoadingSpinner", t.bc), $("videojs.CurrentTimeDisplay", t.jb), $("videojs.DurationDisplay", t.kb), $("videojs.TimeDivider", t.kc), $("videojs.RemainingTimeDisplay", t.rb), $("videojs.LiveDisplay", t.ac), $("videojs.ErrorDisplay", t.lb), $("videojs.Slider", t.R), $("videojs.ProgressControl", t.qb), $("videojs.SeekBar", t.gc), $("videojs.LoadProgressBar", t.nb), $("videojs.PlayProgressBar", t.cc), $("videojs.SeekHandle", t.Oa), $("videojs.VolumeControl", t.tb), $("videojs.VolumeBar", t.sb), $("videojs.VolumeLevel", t.lc), $("videojs.VolumeMenuButton", t.ua), $("videojs.VolumeHandle", t.ub), $("videojs.MuteToggle", t.ka), $("videojs.PosterImage", t.fc), $("videojs.Menu", t.ja), $("videojs.MenuItem", t.J), $("videojs.MenuButton", t.M), $("videojs.PlaybackRateMenuButton", t.ec), t.M.prototype.createItems = t.M.prototype.ya, t.T.prototype.createItems = t.T.prototype.ya, t.La.prototype.createItems = t.La.prototype.ya, $("videojs.SubtitlesButton", t.Pa), $("videojs.CaptionsButton", t.Ka), $("videojs.ChaptersButton", t.La), $("videojs.MediaTechController", t.q), t.q.prototype.featuresVolumeControl = t.q.prototype.Ge, t.q.prototype.featuresFullscreenResize = t.q.prototype.Ce, t.q.prototype.featuresPlaybackRate = t.q.prototype.De, t.q.prototype.featuresProgressEvents = t.q.prototype.Ee, t.q.prototype.featuresTimeupdateEvents = t.q.prototype.Fe, t.q.prototype.setPoster = t.q.prototype.Tc, $("videojs.Html5", t.g), t.g.Events = t.g.mb, t.g.isSupported = t.g.isSupported, t.g.canPlaySource = t.g.oc, t.g.patchCanPlayType = t.g.Kc, t.g.unpatchCanPlayType = t.g.we, t.g.prototype.setCurrentTime = t.g.prototype.Tb, t.g.prototype.setVolume = t.g.prototype.oe, t.g.prototype.setMuted = t.g.prototype.le, t.g.prototype.setPreload = t.g.prototype.ne, t.g.prototype.setAutoplay = t.g.prototype.ie, t.g.prototype.setLoop = t.g.prototype.ke, t.g.prototype.enterFullScreen = t.g.prototype.xc, t.g.prototype.exitFullScreen = t.g.prototype.Gd, t.g.prototype.playbackRate = t.g.prototype.playbackRate, t.g.prototype.setPlaybackRate = t.g.prototype.me, $("videojs.Flash", t.f), t.f.isSupported = t.f.isSupported, t.f.canPlaySource = t.f.oc, t.f.onReady = t.f.onReady, t.f.embed = t.f.wc, t.f.version = t.f.version, $("videojs.TextTrack", t.B), t.B.prototype.label = t.B.prototype.label, t.B.prototype.kind = t.B.prototype.L, t.B.prototype.mode = t.B.prototype.mode, t.B.prototype.cues = t.B.prototype.yd, t.B.prototype.activeCues = t.B.prototype.rd, $("videojs.CaptionsTrack", t.Zb), $("videojs.SubtitlesTrack", t.hc), $("videojs.ChaptersTrack", t.$b), $("videojs.autoSetup", t.nc), $("videojs.plugin", t.ge), $("videojs.createTimeRange", t.zb), $("videojs.util", t.Z), t.Z.mergeOptions = t.Z.Ea, t.addLanguage = t.sd
    }(),
    function(t) {
        var e = {
                content: $("<p class='overlay-content'>Sample overlay content</p>")
            },
            i = function(t) {
                var i = videojs.util.mergeOptions(e, t),
                    n = this,
                    r = $(n.el());
                r.find("#vjs-overlay").remove();
                var s = $("<div></div>");
                return s.attr("id", "vjs-overlay"), s.html(i.content), s.hide(), r.append(s.fadeIn()), this
            };
        t.plugin("overlay", i)
    }(window.videojs),
    function(t) {
        var e = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            },
            i = "none";
        t.plugin("setDefaultSubLanguage", function(t) {
            i = t
        }), t.plugin("clearTextTracks", function() {
            for (var t = this.textTracks_ = this.textTracks_ || [], e = 0; e != t.length; ++e) $(t[e].el()).remove();
            t.splice(0, t.length), r(this, t)
        }), t.plugin("addTextTrack", function(t, i, n, s) {
            var a = this.textTracks_ = this.textTracks_ || [];
            s = s || {}, s.kind = t, s.label = i, s.language = s.srclang = n;
            var o = e(t || "subtitles"),
                l = new window.videojs[o + "Track"](this, s);
            return a.push(l), r(this, a), l
        });
        var n = function(t, e, i) {
                for (var n, r, s = 0, a = t.length; a > s; s++) n = t[s], n.id() === e ? (n.show(), r = n) : i && n.kind() == i && n.mode() > 0 ? n.disable() : "*" === i && n.disable()
            },
            r = function(t, e) {
                var r = $("#" + t.id()).find(".vjs-subtitles-button"),
                    s = r.find(".vjs-menu").empty();
                if (0 === e.length) return void r.hide();
                r.show();
                var a = $("<ul class='vjs-menu-content'>"),
                    o = $("<li class='vjs-menu-item' role='button' aria-live='polite' tabindex='0' aria-selected='false'></li>"),
                    l = o.clone().html("No subtitles");
                l.on("click", function() {
                    n(e, -1, "*"), a.find("li").removeClass("vjs-selected"), $(this).addClass("vjs-selected")
                }), a.append(l);
                var u;
                _.each(e, function(t) {
                    u = o.clone().html(t.label()), u.on("click", function() {
                        n(e, t.id(), t.kind()), a.find("li").removeClass("vjs-selected"), $(this).addClass("vjs-selected")
                    }), t.language() === i && u.click(), a.append(u)
                }), 0 === a.find("li.vjs-selected").length && l.addClass("vjs-selected"), s.append(a)
            }
    }(window.videojs),
    function(t) {
        "use strict";
        t(["jquery"], function(t) {
            function e(e) {
                return t.isFunction(e) || "object" == typeof e ? e : {
                    top: e,
                    left: e
                }
            }
            var i = t.scrollTo = function(e, i, n) {
                return t(window).scrollTo(e, i, n)
            };
            return i.defaults = {
                axis: "xy",
                duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1,
                limit: !0
            }, i.window = function(e) {
                return t(window)._scrollable()
            }, t.fn._scrollable = function() {
                return this.map(function() {
                    var e = this,
                        i = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                    if (!i) return e;
                    var n = (e.contentWindow || e).document || e.ownerDocument || e;
                    return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
                })
            }, t.fn.scrollTo = function(n, r, s) {
                return "object" == typeof r && (s = r, r = 0), "function" == typeof s && (s = {
                    onAfter: s
                }), "max" == n && (n = 9e9), s = t.extend({}, i.defaults, s), r = r || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (r /= 2), s.offset = e(s.offset), s.over = e(s.over), this._scrollable().each(function() {
                    function a(t) {
                        u.animate(d, r, s.easing, t && function() {
                            t.call(this, c, s)
                        })
                    }
                    if (null != n) {
                        var o, l = this,
                            u = t(l),
                            c = n,
                            d = {},
                            h = u.is("html,body");
                        switch (typeof c) {
                            case "number":
                            case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
                                    c = e(c);
                                    break
                                }
                                if (c = h ? t(c) : t(c, this), !c.length) return;
                            case "object":
                                (c.is || c.style) && (o = (c = t(c)).offset())
                        }
                        var p = t.isFunction(s.offset) && s.offset(l, c) || s.offset;
                        t.each(s.axis.split(""), function(t, e) {
                            var n = "x" == e ? "Left" : "Top",
                                r = n.toLowerCase(),
                                f = "scroll" + n,
                                m = l[f],
                                g = i.max(l, e);
                            if (o) d[f] = o[r] + (h ? 0 : m - u.offset()[r]), s.margin && (d[f] -= parseInt(c.css("margin" + n)) || 0, d[f] -= parseInt(c.css("border" + n + "Width")) || 0), d[f] += p[r] || 0, s.over[r] && (d[f] += c["x" == e ? "width" : "height"]() * s.over[r]);
                            else {
                                var v = c[r];
                                d[f] = v.slice && "%" == v.slice(-1) ? parseFloat(v) / 100 * g : v
                            }
                            s.limit && /^\d+$/.test(d[f]) && (d[f] = d[f] <= 0 ? 0 : Math.min(d[f], g)), !t && s.queue && (m != d[f] && a(s.onAfterFirst), delete d[f])
                        }), a(s.onAfter)
                    }
                }).end()
            }, i.max = function(e, i) {
                var n = "x" == i ? "Width" : "Height",
                    r = "scroll" + n;
                if (!t(e).is("html,body")) return e[r] - t(e)[n.toLowerCase()]();
                var s = "client" + n,
                    a = e.ownerDocument.documentElement,
                    o = e.ownerDocument.body;
                return Math.max(a[r], o[r]) - Math.min(a[s], o[s])
            }, i
        })
    }("function" == typeof define && define.amd ? define : function(t, e) {
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    });
var JSON;
JSON || (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var i, n, r, s, a, o = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (s = l.length, i = 0; s > i; i += 1) a[i] = str(i, l) || "null";
                        return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + o + "]" : "[" + a.join(",") + "]", gap = o, r
                    }
                    if (rep && "object" == typeof rep)
                        for (s = rep.length, i = 0; s > i; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, l), r && a.push(quote(n) + (gap ? ": " : ":") + r));
                    else
                        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (r = str(n, l), r && a.push(quote(n) + (gap ? ": " : ":") + r));
                    return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + o + "}" : "{" + a.join(",") + "}", gap = o, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
            var n;
            if (gap = "", indent = "", "number" == typeof i)
                for (n = 0; i > n; n += 1) indent += " ";
            else "string" == typeof i && (indent = i);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var i, n, r = t[e];
                if (r && "object" == typeof r)
                    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n : delete r[i]);
                return reviver.call(t, e, r)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(t, e, i) {
        function n(t, e, i) {
            return t.addEventListener ? void t.addEventListener(e, i, !1) : void t.attachEvent("on" + e, i)
        }

        function r(t) {
            if ("keypress" == t.type) {
                var e = String.fromCharCode(t.which);
                return t.shiftKey || (e = e.toLowerCase()), e
            }
            return S[t.which] ? S[t.which] : T[t.which] ? T[t.which] : String.fromCharCode(t.which).toLowerCase()
        }

        function s(t, e) {
            return t.sort().join(",") === e.sort().join(",")
        }

        function a(t) {
            t = t || {};
            var e, i = !1;
            for (e in P) t[e] ? i = !0 : P[e] = 0;
            i || (D = !1)
        }

        function o(t, e, i, n, r, a) {
            var o, l, u = [],
                c = i.type;
            if (!I[t]) return [];
            for ("keyup" == c && f(t) && (e = [t]), o = 0; o < I[t].length; ++o)
                if (l = I[t][o], (n || !l.seq || P[l.seq] == l.level) && c == l.action && ("keypress" == c && !i.metaKey && !i.ctrlKey || s(e, l.modifiers))) {
                    var d = !n && l.combo == r,
                        h = n && l.seq == n && l.level == a;
                    (d || h) && I[t].splice(o, 1), u.push(l)
                }
            return u
        }

        function l(t) {
            var e = [];
            return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e
        }

        function u(t) {
            return t.preventDefault ? void t.preventDefault() : void(t.returnValue = !1)
        }

        function c(t) {
            return t.stopPropagation ? void t.stopPropagation() : void(t.cancelBubble = !0)
        }

        function d(t, e, i, n) {
            M.stopCallback(e, e.target || e.srcElement, i, n) || t(e, i) === !1 && (u(e), c(e))
        }

        function h(t, e, i) {
            var n, r = o(t, e, i),
                s = {},
                l = 0,
                u = !1;
            for (n = 0; n < r.length; ++n) r[n].seq && (l = Math.max(l, r[n].level));
            for (n = 0; n < r.length; ++n)
                if (r[n].seq) {
                    if (r[n].level != l) continue;
                    u = !0, s[r[n].seq] = 1, d(r[n].callback, i, r[n].combo, r[n].seq)
                } else u || d(r[n].callback, i, r[n].combo);
            var c = "keypress" == i.type && A;
            i.type != D || f(t) || c || a(s), A = u && "keydown" == i.type
        }

        function p(t) {
            "number" != typeof t.which && (t.which = t.keyCode);
            var e = r(t);
            if (e) return "keyup" == t.type && O === e ? void(O = !1) : void M.handleKey(e, l(t), t)
        }

        function f(t) {
            return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
        }

        function m() {
            clearTimeout(C), C = setTimeout(a, 1e3)
        }

        function g() {
            if (!x) {
                x = {};
                for (var t in S) t > 95 && 112 > t || S.hasOwnProperty(t) && (x[S[t]] = t)
            }
            return x
        }

        function v(t, e, i) {
            return i || (i = g()[t] ? "keydown" : "keypress"), "keypress" == i && e.length && (i = "keydown"), i
        }

        function y(t, e, i, n) {
            function s(e) {
                return function() {
                    D = e, ++P[t], m()
                }
            }

            function o(e) {
                d(i, e, t), "keyup" !== n && (O = r(e)), setTimeout(a, 10)
            }
            P[t] = 0;
            for (var l = 0; l < e.length; ++l) {
                var u = l + 1 === e.length,
                    c = u ? o : s(n || _(e[l + 1]).action);
                w(e[l], c, n, t, l)
            }
        }

        function b(t) {
            return "+" === t ? ["+"] : t.split("+")
        }

        function _(t, e) {
            var i, n, r, s = [];
            for (i = b(t), r = 0; r < i.length; ++r) n = i[r], E[n] && (n = E[n]), e && "keypress" != e && j[n] && (n = j[n], s.push("shift")), f(n) && s.push(n);
            return e = v(n, s, e), {
                key: n,
                modifiers: s,
                action: e
            }
        }

        function w(t, e, i, n, r) {
            $[t + ":" + i] = e, t = t.replace(/\s+/g, " ");
            var s, a = t.split(" ");
            return a.length > 1 ? void y(t, a, e, i) : (s = _(t, i), I[s.key] = I[s.key] || [], o(s.key, s.modifiers, {
                type: s.action
            }, n, t, r), void I[s.key][n ? "unshift" : "push"]({
                callback: e,
                modifiers: s.modifiers,
                action: s.action,
                seq: n,
                level: r,
                combo: t
            }))
        }

        function k(t, e, i) {
            for (var n = 0; n < t.length; ++n) w(t[n], e, i)
        }
        for (var x, C, S = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            }, T = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, j = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            }, E = {
                option: "alt",
                command: "meta",
                "return": "enter",
                escape: "esc",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            }, I = {}, $ = {}, P = {}, O = !1, A = !1, D = !1, L = 1; 20 > L; ++L) S[111 + L] = "f" + L;
        for (L = 0; 9 >= L; ++L) S[L + 96] = L;
        n(e, "keypress", p), n(e, "keydown", p), n(e, "keyup", p);
        var M = {
            bind: function(t, e, i) {
                return t = t instanceof Array ? t : [t], k(t, e, i), this
            },
            unbind: function(t, e) {
                return M.bind(t, function() {}, e)
            },
            trigger: function(t, e) {
                return $[t + ":" + e] && $[t + ":" + e]({}, t), this
            },
            reset: function() {
                return I = {}, $ = {}, this
            },
            stopCallback: function(t, e) {
                return (" " + e.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable
            },
            handleKey: h
        };
        t.Mousetrap = M, "function" == typeof define && define.amd && define(M);

    }(window, document), jQuery(function($) {
        function Iterator(t) {
            this.length = t.length, this.each = function(e) {
                $.each(t, e)
            }, this.size = function() {
                return t.length
            }
        }
        var projekktors = [];
        $.fn.prop || ($.fn.prop = function(t, e) {
            return $(this).attr(t, e)
        }), projekktor = $p = function() {
            function PPlayer(srcNode, cfg, onReady) {
                return this.config = new projekktorConfig("1.3.09"), this.env = {
                    muted: !1,
                    playerDom: null,
                    mediaContainer: null,
                    agent: "standard",
                    mouseIsOver: !1,
                    loading: !1,
                    className: "",
                    onReady: onReady
                }, this.media = [], this._plugins = [], this._pluginCache = {}, this._queue = [], this._cuePoints = {}, this.listeners = [], this.playerModel = {}, this._isReady = !1, this._maxElapsed = 0, this._currentItem = null, this._playlistServer = "", this._id = "", this._reelUpdate = function(obj) {
                    var ref = this,
                        itemIdx = null,
                        data = obj || [{}],
                        files = data.playlist || data;
                    this.env.loading = !0, this.media = [];
                    try {
                        for (var props in data.config)
                            if (data.config.hasOwnProperty(props)) {
                                if (typeof data.config[props].indexOf("objectfunction") > -1) continue;
                                this.config[props] = eval(data.config[props])
                            }
                        null != data.config && ($p.utils.log("Updated config var: " + props + " to " + this.config[props]), this._promote("configModified"), delete data.config)
                    } catch (e) {}
                    $.each(files, function() {
                        itemIdx = ref._addItem(ref._prepareMedia({
                            file: this,
                            config: this.config || {},
                            errorCode: this.errorCode || 0
                        })), $.each(this.cuepoints || [], function() {
                            this.item = itemIdx, ref.setCuePoint(this)
                        })
                    }), null === itemIdx && this._addItem(this._prepareMedia({
                        file: "",
                        config: {},
                        errorCode: 97
                    })), this.env.loading = !1, this._promote("scheduled", this.getItemCount()), this._syncPlugins(function() {
                        ref.setActiveItem(0)
                    })
                }, this._addItem = function(t, e, i) {
                    var n = 0;
                    return 1 === this.media.length && "NA" == this.media[0].mediaModel && (this._detachplayerModel(), this.media = []), void 0 === e || 0 > e || e > this.media.length - 1 ? (this.media.push(t), n = this.media.length - 1) : (this.media.splice(e, i === !0 ? 1 : 0, t), n = e), this.env.loading === !1 && this._promote("scheduleModified", this.getItemCount()), n
                }, this._removeItem = function(t) {
                    var e = 0;
                    return 1 === this.media.length ? "NA" == this.media[0].mediaModel ? 0 : (this.media[0] = this._prepareMedia({
                        file: ""
                    }), 0) : (void 0 === t || 0 > t || t > this.media.length - 1 ? (this.media.pop(), e = this.media.length) : (this.media.splice(t, 1), e = t), this.env.loading === !1 && this._promote("scheduleModified", this.getItemCount()), e)
                }, this._canPlay = function(t, e, i) {
                    var n = this,
                        r = [],
                        s = [],
                        a = i || "http",
                        o = "object" == typeof e ? e : [e],
                        l = t ? t.replace(/x-/, "") : void 0,
                        u = n._testMediaSupport();
                    if ($.each(o, function(t, e) {
                            $.each($.extend(u[a], u["*"] || []) || [], function(t, i) {
                                return null != e && t != e ? !0 : (r = $.merge(r, this), !0)
                            })
                        }), 0 === r.length) return !1;
                    switch (typeof l) {
                        case "undefined":
                            return r.length > 0;
                        case "string":
                            if ("*" == l) return r;
                            s.push(l);
                            break;
                        case "array":
                            s = l
                    }
                    for (var c in s)
                        if ($p.mmap.hasOwnProperty(c)) {
                            if ("string" != typeof s[c]) break;
                            if ($.inArray(s[c], r) > -1) return !0
                        }
                    return !1
                }, this._prepareMedia = function(t) {
                    var e = this,
                        i = [],
                        n = [],
                        r = [],
                        s = {},
                        a = {},
                        o = [],
                        l = {},
                        u = [],
                        c = 0;
                    for (var d in $p.mmap) $p.mmap.hasOwnProperty(d) && (platforms = "object" == typeof $p.mmap[d].platform ? $p.mmap[d].platform : [$p.mmap[d].platform], $.each(platforms, function(i, n) {
                        var r = 0,
                            o = "http";
                        for (var l in t.file)
                            if (t.file.hasOwnProperty(l)) {
                                if ("config" === l) continue;
                                if (o = t.file[l].streamType || e.getConfig("streamType") || "http", e._canPlay($p.mmap[d].type, n, o) && r++, 0 === r) continue;
                                if ($p.mmap[d].level = $.inArray(n, e.config._platforms), $p.mmap[d].level = $p.mmap[d].level < 0 ? 100 : $p.mmap[d].level, u.push("." + $p.mmap[d].ext), s[$p.mmap[d].ext] || (s[$p.mmap[d].ext] = []), s[$p.mmap[d].ext].push($p.mmap[d]), null === $p.mmap[d].streamType || "*" == $p.mmap[d].streamType || $.inArray(o || [], $p.mmap[d].streamType || "") > -1) {
                                    a[$p.mmap[d].type] || (a[$p.mmap[d].type] = []), r = -1;
                                    for (var c = 0, h = a[$p.mmap[d].type].length; h > c; c++)
                                        if (a[$p.mmap[d].type][c].model == $p.mmap[d].model) {
                                            r = c;
                                            break
                                        } - 1 === r && a[$p.mmap[d].type].push($p.mmap[d])
                                }
                            } else;
                        return !0
                    }));
                    u = "^.*.(" + u.join("|") + ")$", "string" == typeof t.file && (t.file = [{
                        src: t.file
                    }], "string" == typeof t.type && (t.file = [{
                        src: t.file,
                        type: t.type
                    }])), ($.isEmptyObject(t) || t.file === !1 || null === t.file) && (t.file = [{
                        src: null
                    }]);
                    for (var h in t.file)
                        if (t.file.hasOwnProperty(h)) {
                            if ("config" == h) continue;
                            if ("string" == typeof t.file[h] && (t.file[h] = {
                                    src: t.file[h]
                                }), null == t.file[h].src) continue;
                            if (null != t.file[h].type && "" !== t.file[h].type) try {
                                var p = t.file[h].type.split(" ").join("").split(/[\;]codecs=.([a-zA-Z0-9\,]*)[\'|\"]/i);
                                null != p[1] && (t.file[h].codec = p[1]), t.file[h].type = p[0].replace(/x-/, ""), t.file[h].originalType = p[0]
                            } catch (f) {} else t.file[h].type = this._getTypeFromFileExtension(t.file[h].src);
                            a[t.file[h].type] && a[t.file[h].type].length > 0 && (a[t.file[h].type].sort(function(t, e) {
                                return t.level - e.level
                            }), o.push(a[t.file[h].type][0]))
                        }
                    0 === o.length ? o = a["none/none"] : (o.sort(function(t, e) {
                        return t.level - e.level
                    }), c = o[0].level, o = $.grep(o, function(t) {
                        return t.level == c
                    })), i = [], $.each(o || [], function() {
                        i.push(this.type)
                    });
                    var m = o && o.length > 0 ? o[0] : {
                        type: "none/none",
                        model: "NA",
                        errorCode: 11
                    };
                    i = $p.utils.unique(i);
                    for (h in t.file)
                        if (t.file.hasOwnProperty(h)) {
                            if (null == t.file[h].type) continue;
                            if ($.inArray(t.file[h].type.replace(/x-/, ""), i) < 0 && "none/none" != m.type) continue;
                            ($.isEmptyObject(t.config) || null == t.config.streamType || -1 == t.config.streamType.indexOf("rtmp")) && (t.file[h].src = $p.utils.toAbsoluteURL(t.file[h].src)), null == t.file[h].quality && (t.file[h].quality = "default"), r.push(t.file[h].quality), n.push(t.file[h])
                        }
                    0 === n.length && n.push({
                        src: null,
                        quality: "default"
                    });
                    var g = [];
                    return $.each(this.getConfig("playbackQualities"), function() {
                        g.push(this.key || "default")
                    }), l = {
                        ID: t.config.id || $p.utils.randomId(8),
                        cat: t.config.cat || "clip",
                        file: n,
                        platform: m.platform,
                        platforms: platforms,
                        qualities: $p.utils.intersect($p.utils.unique(g), $p.utils.unique(r)),
                        mediaModel: m.model || "NA",
                        errorCode: m.errorCode || t.errorCode || 7,
                        config: t.config || {}
                    }
                }, this._modelUpdateListener = function(t, e) {
                    var i = this,
                        n = this.playerModel;
                    if (this.playerModel.init) switch ("time" != t && "progress" != t && $p.utils.log("Update: '" + t, this.playerModel.getSrc(), this.playerModel.getModelName(), e), t) {
                        case "state":
                            this._promote("state", e);
                            var r = $.map(this.getDC().attr("class").split(" "), function(t) {
                                return -1 === t.indexOf(i.getConfig("ns") + "state") ? t : ""
                            });
                            switch (r.push(this.getConfig("ns") + "state" + e.toLowerCase()), this.getDC().attr("class", r.join(" ")), e) {
                                case "AWAKENING":
                                    this._syncPlugins(function() {
                                        n.getState("AWAKENING") && n.displayItem(!0)
                                    });
                                    break;
                                case "ERROR":
                                    this._addGUIListeners();
                                    break;
                                case "PAUSED":
                                    this.getConfig("disablePause") === !0 && this.playerModel.applyCommand("play", 0);
                                    break;
                                case "COMPLETED":
                                    if (this._currentItem + 1 >= this.media.length && !this.getConfig("loop") && (this._promote("done", {}), this.getConfig("leaveFullscreen"))) return void this.reset();
                                    this.setActiveItem("next")
                            }
                            break;
                        case "modelReady":
                            this._maxElapsed = 0, this._promote("item", i._currentItem);
                            break;
                        case "displayReady":
                            this._promote("displayReady", !0), this._syncPlugins(function() {
                                i._promote("ready"), i._addGUIListeners(), n.getState("IDLE") || n.start()
                            });
                            break;
                        case "availableQualitiesChange":
                            this.media[this._currentItem].qualities = e, this._promote("availableQualitiesChange", e);
                            break;
                        case "qualityChange":
                            this.setConfig({
                                playbackQuality: e
                            }), this._promote("qualityChange", e);
                            break;
                        case "volume":
                            this.setConfig({
                                volume: e
                            }), this._promote("volume", e), 0 >= e ? (this.env.muted = !0, this._promote("mute", e)) : this.env.muted === !0 && (this.env.muted = !1, this._promote("unmute", e));
                            break;
                        case "playlist":
                            this.setFile(e.file, e.type);
                            break;
                        case "config":
                            this.setConfig(e);
                            break;
                        case "time":
                            if (this._maxElapsed < e) {
                                var s = Math.round(100 * e / this.getDuration()),
                                    a = !1;
                                25 > s && (s = 25), s > 25 && 50 > s && (a = "firstquartile", s = 50), s > 50 && 75 > s && (a = "midpoint", s = 75), s > 75 && 100 > s && (a = "thirdquartile", s = 100), a !== !1 && this._promote(a, e), this._maxElapsed = this.getDuration() * s / 100
                            }
                            this._promote(t, e);
                            break;
                        case "fullscreen":
                            e === !0 ? (this.getDC().addClass("fullscreen"), this._enterFullViewport()) : (this.getDC().removeClass("fullscreen"), this._exitFullViewport()), this._promote(t, e);
                            break;
                        case "error":
                            this._promote(t, e), this.getConfig("skipTestcard") && this.getItemCount() > 1 ? this.setActiveItem("next") : (this.playerModel.applyCommand("error", e), this._addGUIListeners());
                            break;
                        case "streamTypeChange":
                            "dvr" == e && this.getDC().addClass(this.getNS() + "dvr"), this._promote(t, e);
                            break;
                        default:
                            this._promote(t, e)
                    }
                }, this._syncPlugins = function(t) {
                    var e = this;
                    this.env.loading = !0,
                        function() {
                            try {
                                if (e._plugins.length > 0)
                                    for (var i = 0; i < e._plugins.length; i++)
                                        if (!e._plugins[i].isReady()) return void setTimeout(arguments.callee, 50);
                                e.env.loading = !1, e._promote("pluginsReady", {});
                                try {
                                    t()
                                } catch (n) {}
                            } catch (n) {}
                        }()
                }, this._MD = function(t) {
                    projekktor("#" + t.currentTarget.id.replace(/_media$/, ""))._playerFocusListener(t)
                }, this._addGUIListeners = function() {
                    var t = this;
                    this._removeGUIListeners(), this.getDC().get(0).addEventListener ? this.getDC().get(0).addEventListener("mousedown", this._MD, !0) : this.getDC().mousedown(function(e) {
                        t._playerFocusListener(e)
                    }), this.getDC().mousemove(function(e) {
                        t._playerFocusListener(e)
                    }).mouseenter(function(e) {
                        t._playerFocusListener(e)
                    }).mouseleave(function(e) {
                        t._playerFocusListener(e)
                    }).focus(function(e) {
                        t._playerFocusListener(e)
                    }).blur(function(e) {
                        t._playerFocusListener(e)
                    }), $(window).bind("resize.projekktor" + this.getId(), function() {
                        t.setSize()
                    }).bind("touchstart", function() {
                        t._windowTouchListener(event)
                    }), this.config.enableKeyboard === !0 && ($(document).unbind("keydown.pp" + this._id), $(document).bind("keydown.pp" + this._id, function(e) {
                        t._keyListener(e)
                    }))
                }, this._removeGUIListeners = function() {
                    $("#" + this.getId()).unbind(), this.getDC().unbind(), this.getDC().get(0).removeEventListener ? this.getDC().get(0).removeEventListener("mousedown", this._MD, !0) : this.getDC().get(0).detachEvent("onmousedown", this._MD), $(window).unbind("resize.projekktor" + this.getId())
                }, this._registerPlugins = function() {
                    var plugins = $.merge($.merge([], this.config._plugins), this.config._addplugins),
                        pluginName = "",
                        pluginObj = null;
                    if (!(this._plugins.length > 0 || 0 === plugins.length))
                        for (var i = 0; i < plugins.length; i++) {
                            pluginName = "projekktor" + plugins[i].charAt(0).toUpperCase() + plugins[i].slice(1), pluginObj = $.extend(!0, {}, new projekktorPluginInterface, eval(pluginName).prototype), pluginObj.name = plugins[i].toLowerCase(), pluginObj.pp = this, pluginObj.playerDom = this.env.playerDom, pluginObj._init(this.config["plugin_" + plugins[i].toLowerCase()] || {}), null == this.config["plugin_" + pluginObj.name] && (this.config["plugin_" + pluginObj.name] = {}), this.config["plugin_" + pluginObj.name] = $.extend(!0, {}, pluginObj.config || {});
                            for (var propName in pluginObj) propName.indexOf("Handler") > 1 && (null == this._pluginCache[propName] && (this._pluginCache[propName] = []), this._pluginCache[propName].push(pluginObj));
                            this._plugins.push(pluginObj)
                        }
                }, this.removePlugins = function(t) {
                    if (0 != this._plugins.length)
                        for (var e = t || $.merge($.merge([], this.config._plugins), this.config._addplugins), i = this._plugins.length, n = 0; n < e.length; n++)
                            for (var r = 0; i > r; r++)
                                if (void 0 != this._plugins[r] && this._plugins[r].name == e[n].toLowerCase()) {
                                    this._plugins[r].deconstruct(), this._plugins.splice(r, 1);
                                    for (var s in this._pluginCache)
                                        for (var a = 0; a < this._pluginCache[s].length; a++) this._pluginCache[s][a].name == e[n].toLowerCase() && this._pluginCache[s].splice(a, 1)
                                }
                }, this.getPlugins = function() {
                    var t = [];
                    return $.each(this._plugins, function() {
                        t.push({
                            name: this.name,
                            ver: this.version || "unknown"
                        })
                    }), t
                }, this._promote = function(t, e) {
                    var i = this;
                    this._enqueue(function() {
                        try {
                            i.__promote(t, e)
                        } catch (n) {}
                    })
                }, this.__promote = function(t, e) {
                    var i = t;
                    if ("object" == typeof i) {
                        if (!i._plugin) return;
                        i = "plugin_" + i._plugin + $p.utils.capitalise(i._event.toUpperCase())
                    }
                    if ("time" != i && "progress" != i && "mousemove" != i && $p.utils.log("Event: [" + i + "]", e, this.listeners), this._pluginCache[i + "Handler"] && this._pluginCache[i + "Handler"].length > 0)
                        for (var n = 0; n < this._pluginCache[i + "Handler"].length; n++)
                            if (this.getConfig("debug")) try {
                                this._pluginCache[i + "Handler"][n][i + "Handler"](e, this)
                            } catch (r) {
                                $p.utils.log(r)
                            } else this._pluginCache[i + "Handler"][n][i + "Handler"](e, this);
                    if (this._pluginCache.eventHandler && this._pluginCache.eventHandler.length > 0)
                        for (var n = 0; n < this._pluginCache.eventHandler.length; n++)
                            if (this.getConfig("debug")) try {
                                this._pluginCache.eventHandler[n].eventHandler(i, e, this)
                            } catch (r) {
                                $p.utils.log(r)
                            } else this._pluginCache.eventHandler[n].eventHandler(i, e, this);
                    if (this.listeners.length > 0)
                        for (var n = 0; n < this.listeners.length; n++)
                            if (this.listeners[n].event == i || "*" == this.listeners[n].event)
                                if (this.getConfig("debug")) try {
                                    this.listeners[n].callback(e, this)
                                } catch (r) {
                                    $p.utils.log(r)
                                } else this.listeners[n].callback(e, this)
                }, this._detachplayerModel = function() {
                    this._removeGUIListeners();
                    try {
                        this.playerModel.destroy(), this._promote("detach", {})
                    } catch (t) {}
                }, this._windowTouchListener = function(t) {
                    t.touches && t.touches.length > 0 && (($(document.elementFromPoint(t.touches[0].clientX, t.touches[0].clientY)).attr("id") || "").indexOf(this.getDC().attr("id")) > -1 ? (0 == this.env.mouseIsOver && this._promote("mouseenter", {}), this.env.mouseIsOver = !0, this._promote("mousemove", {}), t.stopPropagation()) : this.env.mouseIsOver && (this._promote("mouseleave", {}), this.env.mouseIsOver = !1))
                }, this._playerFocusListener = function(t) {
                    var e = t.type.toLowerCase();
                    switch (e) {
                        case "mousedown":
                            if (0 == this.env.mouseIsOver) break;
                            if ("|TEXTAREA|INPUT".indexOf("|" + t.target.tagName.toUpperCase()) > -1) return;
                            break;
                        case "mousemove":
                            if (this.env.mouseX != t.clientX && this.env.mouseY != t.clientY && (this.env.mouseIsOver = !0), this.env.clientX == t.clientX && this.env.clientY == t.clientY) return;
                            this.env.clientX = t.clientX, this.env.clientY = t.clientY;
                            break;
                        case "focus":
                        case "mouseenter":
                            this.env.mouseIsOver = !0;
                            break;
                        case "blur":
                        case "mouseleave":
                            this.env.mouseIsOver = !1
                    }
                    this._promote(e, t)
                }, this._keyListener = function(t) {
                    if (this.env.mouseIsOver && !("|TEXTAREA|INPUT".indexOf("|" + t.target.tagName.toUpperCase()) > -1)) {
                        var e = this,
                            i = this.getConfig("keys").length > 0 ? this.getConfig("keys") : [{
                                27: function(t) {
                                    t.getInFullscreen() ? t.setFullscreen(!1) : t.setStop()
                                },
                                32: function(t, e) {
                                    t.setPlayPause(), e.preventDefault()
                                },
                                70: function(t) {
                                    t.setFullscreen()
                                },
                                39: function(t, e) {
                                    t.setPlayhead("+5"), e.preventDefault()
                                },
                                37: function(t, e) {
                                    t.setPlayhead("-5"), e.preventDefault()
                                },
                                38: function(t, e) {
                                    t.setVolume("+0.05"), e.preventDefault()
                                },
                                40: function(t, e) {
                                    t.setVolume("-0.05"), e.preventDefault()
                                },
                                68: function(t) {
                                    t.setDebug()
                                },
                                67: function(t) {
                                    $p.utils.log("Config Dump", t.config)
                                },
                                80: function(t) {
                                    $p.utils.log("Schedule Dump", t.media)
                                },
                                84: function(t) {
                                    $p.utils.log("Cuepoints Dump", t.getCuePoints())
                                }
                            }];
                        this._promote("key", t), $.each(i || [], function() {
                            try {
                                this[t.keyCode](e, t)
                            } catch (i) {}
                            try {
                                this["*"](e)
                            } catch (i) {}
                        })
                    }
                }, this._enterFullViewport = function(t) {
                    var e = this.getIframeParent() || $(window),
                        i = this.getIframe() || this.getDC(),
                        n = $(e[0].document.body).css("overflow");
                    t && (e = $(window), i = this.getDC()), i.data("fsdata", {
                        scrollTop: e.scrollTop() || 0,
                        scrollLeft: e.scrollLeft() || 0,
                        targetStyle: i.attr("style") || "",
                        targetWidth: i.width(),
                        targetHeight: i.height(),
                        bodyOverflow: "visible" == n ? "auto" : n,
                        bodyOverflowX: $(e[0].document.body).css("overflow-x"),
                        bodyOverflowY: $(e[0].document.body).css("overflow-y"),
                        iframeWidth: i.attr("width") || 0,
                        iframeHeight: i.attr("height") || 0
                    }).css({
                        position: "absolute",
                        display: "block",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 99999,
                        margin: 0,
                        padding: 0
                    }), e.scrollTop(0).scrollLeft(0), $(e[0].document.body).css({
                        overflow: "hidden",
                        overflowX: "hidden",
                        overflowY: "hidden"
                    })
                }, this._exitFullViewport = function(t) {
                    var e = this.getIframeParent() || $(window),
                        i = this.getIframe() || this.getDC(),
                        n = i.data("fsdata") || null;
                    t && (e = $(window), i = this.getDC()), null != n && (e.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), $(e[0].document.body).css("overflow", n.bodyOverflow), $(e[0].document.body).css("overflow-x", n.bodyOverflowX), $(e[0].document.body).css("overflow-y", n.bodyOverflowY), n.iframeWidth > 0 && !t ? i.attr("width", n.iframeWidth + "px").attr("height", n.iframeHeight + "px") : i.width(n.targetWidth).height(n.targetHeight), i.attr("style", null == n.targetStyle ? "" : n.targetStyle).data("fsdata", null))
                }, this.pluginAPI = function() {
                    var t = Array.prototype.slice.call(arguments) || null,
                        e = t.shift(),
                        i = t.shift();
                    if (null != e && null != i)
                        for (var n = 0; n < this._plugins.length; n++)
                            if (this._plugins[n].name == e) return void this._plugins[n][i](t[0])
                }, this.getPlayerVer = function() {
                    return this.config._version
                }, this.getIsLastItem = function() {
                    return this._currentItem == this.media.length - 1 && this.config._loop !== !0
                }, this.getIsFirstItem = function() {
                    return 0 == this._currentItem && this.config._loop !== !0
                }, this.getItemConfig = function(t, e) {
                    return this.getConfig(t, e)
                }, this.getConfig = function(t, e) {
                    var i = e || this._currentItem,
                        n = null != this.config["_" + t] ? this.config["_" + t] : this.config[t];
                    if (null == t) return this.media[i].config;
                    if (null == this.config["_" + t]) try {
                        void 0 !== this.media[i].config[t] && (n = this.media[i].config[t])
                    } catch (r) {}
                    if (t.indexOf("plugin_") > -1) try {
                        this.media[i].config[t] && (n = $.extend(!0, {}, this.config[t], this.media[i].config[t]))
                    } catch (r) {}
                    if (null == n) return null;
                    if ("object" == typeof n && null === n.length ? n = $.extend(!0, {}, n || {}) : "object" == typeof n && (n = $.extend(!0, [], n || [])), "string" == typeof n) switch (n) {
                        case "true":
                            n = !0;
                            break;
                        case "false":
                            n = !1;
                            break;
                        case "NaN":
                        case "undefined":
                        case "null":
                            n = null
                    }
                    return n
                }, this.getDC = function() {
                    return this.env.playerDom
                }, this.getState = function(t) {
                    var e = "IDLE";
                    try {
                        e = this.playerModel.getState()
                    } catch (i) {}
                    return null != t ? e == t.toUpperCase() : e
                }, this.getLoadProgress = function() {
                    try {
                        return this.playerModel.getLoadProgress()
                    } catch (t) {
                        return 0
                    }
                }, this.getKbPerSec = function() {
                    try {
                        return this.playerModel.getKbPerSec()
                    } catch (t) {
                        return 0
                    }
                }, this.getItemCount = function() {
                    return 1 == this.media.length && "na" == this.media[0].mediaModel ? 0 : this.media.length
                }, this.getItemId = function(t) {
                    return this.media[t || this._currentItem].ID || null
                }, this.getItemIdx = function() {
                    return this._currentItem
                }, this.getPlaylist = function() {
                    return this.getItem("*")
                }, this.getItem = function() {
                    if (1 == this.media.length && "na" == this.media[0].mediaModel) return null;
                    switch (arguments[0] || "current") {
                        case "next":
                            return $.extend(!0, {}, this.media[this._currentItem + 1] || {});
                        case "prev":
                            return $.extend(!0, {}, this.media[this._currentItem - 1] || {});
                        case "current":
                            return $.extend(!0, {}, this.media[this._currentItem] || {});
                        case "*":
                            return $.extend(!0, [], this.media || []);
                        default:
                            return $.extend(!0, {}, this.media[arguments[0] || this._currentItem] || {})
                    }
                }, this.getVolume = function() {
                    return this.getConfig("fixedVolume") === !0 ? this.config.volume : this.getConfig("volume")
                }, this.getTrackId = function() {
                    return this.getConfig("trackId") ? this.config.trackId : null != this._playlistServer ? "pl" + this._currentItem : null
                }, this.getLoadPlaybackProgress = function() {
                    try {
                        return this.playerModel.getLoadPlaybackProgress()
                    } catch (t) {
                        return 0
                    }
                }, this.getSource = function() {
                    try {
                        return this.playerModel.getSource()[0].src
                    } catch (t) {
                        return !1
                    }
                }, this.getDuration = function() {
                    try {
                        return this.playerModel.getDuration()
                    } catch (t) {
                        return 0
                    }
                }, this.getPosition = function() {
                    try {
                        return this.playerModel.getPosition() || 0
                    } catch (t) {
                        return 0
                    }
                }, this.getMaxPosition = function() {
                    try {
                        return this.playerModel.getMaxPosition() || 0
                    } catch (t) {
                        return 0
                    }
                }, this.getFrame = function() {
                    try {
                        return this.playerModel.getFrame()
                    } catch (t) {
                        return 0
                    }
                }, this.getTimeLeft = function() {
                    try {
                        return this.playerModel.getDuration() - this.playerModel.getPosition()
                    } catch (t) {
                        return this.media[this._currentItem].duration
                    }
                }, this.getInFullscreen = function() {
                    return this.getNativeFullscreenSupport().isFullScreen()
                }, this.getMediaContainer = function() {
                    return null == this.env.mediaContainer && (this.env.mediaContainer = $("#" + this.getMediaId())), 0 == this.env.mediaContainer.length && (this.env.playerDom.find("." + this.getNS() + "display").length > 0 ? this.env.mediaContainer = $(document.createElement("div")).attr({
                        id: this.getId() + "_media"
                    }).css({
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        padding: 0,
                        margin: 0,
                        display: "block"
                    }).appendTo(this.env.playerDom.find("." + this.getNS() + "display")) : this.env.mediaContainer = $(document.createElement("div")).attr({
                        id: this.getMediaId()
                    }).css({
                        width: "1px",
                        height: "1px"
                    }).appendTo($(document.body))), this.env.mediaContainer
                }, this.getMediaId = function() {
                    return this.getId() + "_media"
                }, this.getMediaType = function() {
                    try {
                        return this._getTypeFromFileExtension(this.playerModel.getSrc()) || "na/na"
                    } catch (t) {
                        return "na/na"
                    }
                }, this.getUsesFlash = function() {
                    return this.playerModel.modelId.indexOf("FLASH") > -1
                }, this.getModel = function() {
                    try {
                        return this.media[this._currentItem].mediaModel.toUpperCase()
                    } catch (t) {
                        return "NA"
                    }
                }, this.getIframeParent = this.getIframeWindow = function() {
                    try {
                        var t = !1;
                        return this.config._iframe && (t = parent.location.host || !1), t === !1 ? !1 : $(parent.window)
                    } catch (e) {
                        return !1
                    }
                }, this.getIframe = function() {
                    try {
                        var t = [];
                        return this.config._iframe && (t = window.$(frameElement) || []), 0 == t.length ? !1 : t
                    } catch (e) {
                        return !1
                    }
                }, this.getIframeAllowFullscreen = function() {
                    var t = null;
                    try {
                        t = window.frameElement.attributes.allowFullscreen || window.frameElement.attributes.mozallowFullscreen || window.frameElement.attributes.webkitallowFullscreen || null
                    } catch (e) {
                        t = !0
                    }
                    return null != t ? !0 : !1
                }, this.getPlaybackQuality = function() {
                    var t = "default";
                    try {
                        t = this.playerModel.getPlaybackQuality()
                    } catch (e) {}
                    return "default" == t && (t = this.getConfig("playbackQuality")), ("default" == t || -1 == $.inArray(t, this.getPlaybackQualities())) && (t = this.getAppropriateQuality()), -1 == $.inArray(t, this.getPlaybackQualities()) && (t = "default"), t
                }, this.getPlaybackQualities = function() {
                    try {
                        return $.extend(!0, [], this.media[this._currentItem].qualities || [])
                    } catch (t) {}
                    return []
                }, this.getIsMobileClient = function(t) {
                    for (var e = navigator.userAgent.toLowerCase(), i = ["android", "windows ce", "blackberry", "palm", "mobile"], n = 0; n < i.length; n++)
                        if (e.indexOf(i[n]) > -1) return t ? i[n].toUpperCase() == t.toUpperCase() : !0;
                    return !1
                }, this.getCanPlay = function(t, e, i) {
                    return this._canPlay(t, e, i)
                }, this.getCanPlayNatively = function(t) {
                    return this._canPlay(t, "native")
                }, this.getPlatform = function() {
                    return this.media[this._currentItem].platform || "error"
                }, this.getPlatforms = function() {
                    var t = this._testMediaSupport(!0),
                        e = this.getConfig("platforms"),
                        i = [];
                    try {
                        for (var n in this.media[this._currentItem].file)
                            if (this.media[this._currentItem].file.hasOwnProperty(n))
                                for (var r in t) this._canPlay(this.media[this._currentItem].file[n].type.replace(/x-/, ""), t[r].toLowerCase(), this.getConfig("streamType")) && -1 == $.inArray(t[r].toLowerCase(), i) && i.push(t[r].toLowerCase())
                    } catch (s) {}
                    return i.sort(function(t, i) {
                        return $.inArray(t, e) - $.inArray(i, e)
                    }), i
                }, this.getNativeFullscreenSupport = function() {
                    var t = this,
                        e = {
                            supportsFullScreen: "viewport",
                            isFullScreen: function() {
                                try {
                                    return t.getDC().hasClass("fullscreen")
                                } catch (e) {
                                    return !1
                                }
                            },
                            requestFullScreen: function() {
                                t.playerModel.applyCommand("fullscreen", !0)
                            },
                            cancelFullScreen: function() {
                                t.playerModel.applyCommand("fullscreen", !1)
                            },
                            prefix: "",
                            ref: this
                        },
                        i = "webkit moz o ms khtml".split(" ");
                    if ("undefined" != typeof document.cancelFullScreen) e.supportsFullScreen = !0;
                    else
                        for (var n = 0, r = i.length; r > n && (e.prefix = i[n], "undefined" != typeof document.createElement("video")[e.prefix + "EnterFullscreen"] && (e.supportsFullScreen = "mediaonly"), "undefined" != typeof document[e.prefix + "CancelFullScreen"] && (e.supportsFullScreen = "dom", "moz" == e.prefix && "undefined" == typeof document[e.prefix + "FullScreenEnabled"] && (e.supportsFullScreen = "viewport")), e.supportsFullScreen === !1 || "viewport" === e.supportsFullScreen); n++);
                    return "viewport" == e.supportsFullScreen || "dom" == e.supportsFullScreen && this.getConfig("forceFullViewport") ? e : "mediaonly" == e.supportsFullScreen ? (e.requestFullScreen = function(e) {
                        t.playerModel.getMediaElement().get(0)[this.prefix + "EnterFullscreen"]()
                    }, e.dest = {}, e.cancelFullScreen = function() {}, e) : (e.isFullScreen = function(e) {
                        var i = t.getIframe() ? parent.window.document : document;
                        switch (this.prefix) {
                            case "":
                                return i.fullScreen;
                            case "webkit":
                                return i.webkitIsFullScreen;
                            case "moz":
                                return i[this.prefix + "FullScreen"] || t.getDC().hasClass("fullscreen") && e !== !0;
                            default:
                                return i[this.prefix + "FullScreen"]
                        }
                    }, e.requestFullScreen = function() {
                        if (!this.isFullScreen()) {
                            var e = t.getIframeParent() || $(window),
                                i = t.getIframe() ? t.getIframe().get(0) : null || t.getDC().get(0),
                                n = this,
                                r = t.getIframe() ? parent.window.document : document,
                                e = t.getIframeParent() || $(window);
                            e.data("fsdata", {
                                scrollTop: e.scrollTop(),
                                scrollLeft: e.scrollLeft()
                            }), $(r).unbind(this.prefix + "fullscreenchange.projekktor"), "" === this.prefix ? i.requestFullScreen() : i[this.prefix + "RequestFullScreen"](), n.ref.playerModel.applyCommand("fullscreen", !0), $(r).bind(this.prefix + "fullscreenchange.projekktor", function(t) {
                                if (n.isFullScreen(!0)) n.ref.playerModel.applyCommand("fullscreen", !0);
                                else {
                                    n.ref.playerModel.applyCommand("fullscreen", !1);
                                    var e = n.ref.getIframeParent() || $(window),
                                        i = e.data("fsdata");
                                    null != i && (e.scrollTop(i.scrollTop), e.scrollLeft(i.scrollLeft))
                                }
                            })
                        }
                    }, e.cancelFullScreen = function() {
                        var e = t.getIframe() ? parent.window.document : document,
                            i = t.getIframeParent() || $(window),
                            n = i.data("fsdata");
                        $(t.getIframe() ? parent.window.document : document).unbind(this.prefix + "fullscreenchange.projekktor"), e.exitFullScreen ? e.exitFullScreen() : "" == this.prefix ? e.cancelFullScreen() : e[this.prefix + "CancelFullScreen"](), null != n && (i.scrollTop(n.scrollTop), i.scrollLeft(n.scrollLeft)), t.playerModel.applyCommand("fullscreen", !1)
                    }, e)
                }, this.getId = function() {
                    return this._id
                }, this.getHasGUI = function() {
                    try {
                        return this.playerModel.getHasGUI()
                    } catch (t) {
                        return !1
                    }
                }, this.getCssPrefix = this.getNS = function() {
                    return this.config._cssClassPrefix || this.config._ns || "pp"
                }, this.getPlayerDimensions = function() {
                    return {
                        width: this.getDC().width(),
                        height: this.getDC().height()
                    }
                }, this.getMediaDimensions = function() {
                    return this.playerModel.getMediaDimensions() || {
                        width: 0,
                        height: 0
                    }
                }, this.getAppropriateQuality = function(t) {
                    var e = t || this.getPlaybackQualities() || [];
                    if (0 == e.length) return [];
                    var i = this.env.playerDom.width(),
                        n = this.env.playerDom.height(),
                        r = $p.utils.roundNumber(i / n, 2),
                        s = {};
                    return $.each(this.getConfig("playbackQualities") || [], function() {
                        if ($.inArray(this.key, e) < 0) return !0;
                        if ((this.minHeight || 0) > n && s.minHeight <= n) return !0;
                        if ((s.minHeight || 0) > this.minHeight) return !0;
                        if ("number" == typeof this.minWidth) {
                            if (0 === this.minWidth && this.minHeight > n) return !0;
                            if (this.minWidth > i) return !0;
                            s = this
                        } else if ("object" == typeof this.minWidth) {
                            var t = this;
                            $.each(this.minWidth, function() {
                                return (this.ratio || 100) > r ? !0 : this.minWidth > i ? !0 : (s = t, !0)
                            })
                        }
                        return !0
                    }), $.inArray("auto", this.getPlaybackQualities()) > -1 ? "auto" : s.key || "default"
                }, this.getFromUrl = function(t, e, i, n, r) {
                    var s = null,
                        a = this,
                        o = !this.getIsMobileClient();
                    if (e == a && "_reelUpdate" == i && this._promote("scheduleLoading", 1 + this.getItemCount()), "_" != i.substr(0, 1) ? window[i] = function(t) {
                            try {
                                delete window[i]
                            } catch (n) {}
                            e[i](t)
                        } : r.indexOf("jsonp") > -1 && (this["_jsonp" + i] = function(t) {
                            e[i](t)
                        }), r) {
                        if (void 0 == $.parseJSON && r.indexOf("json") > -1) return this._raiseError("Projekktor requires at least jQuery 1.4.2 in order to handle JSON playlists."), this;
                        r = r.indexOf("/") > -1 ? r.split("/")[1] : r
                    }
                    var l = {
                        url: t,
                        complete: function(t, a) {
                            if (void 0 == r) try {
                                t.getResponseHeader("Content-Type").indexOf("xml") > -1 && (r = "xml"), t.getResponseHeader("Content-Type").indexOf("json") > -1 && (r = "json"), t.getResponseHeader("Content-Type").indexOf("html") > -1 && (r = "html")
                            } catch (o) {}
                            s = $p.utils.cleanResponse(t.responseText, r);
                            try {
                                s = n(s, t.responseText, e)
                            } catch (o) {}
                            if ("error" != a && "jsonp" != r) try {
                                e[i](s)
                            } catch (o) {}
                        },
                        error: function(t) {
                            e[i] && "jsonp" != r && e[i](!1)
                        },
                        cache: !0,
                        async: o,
                        dataType: r,
                        jsonpCallback: "_" != i.substr(0, 1) ? !1 : "projekktor('" + this.getId() + "')._jsonp" + i,
                        jsonp: "_" != i.substr(0, 1) ? !1 : "callback"
                    };
                    return l.xhrFields = {
                        withCredentials: !0
                    }, l.beforeSend = function(t) {
                        t.withCredentials = !0
                    }, $.support.cors = !0, $.ajax(l), this
                }, this.setActiveItem = function(t) {
                    var e = 0,
                        i = this._currentItem,
                        n = this,
                        r = !1;
                    if ("string" == typeof t) switch (t) {
                        case "same":
                            e = this._currentItem;
                            break;
                        case "previous":
                            e = this._currentItem - 1;
                            break;
                        case "next":
                            e = this._currentItem + 1
                    } else e = "number" == typeof t ? parseInt(t) : 0;
                    if (e != this._currentItem && 1 == this.getConfig("disallowSkip") && !this.getState("COMPLETED") && !this.getState("IDLE")) return this;
                    this._detachplayerModel(), this.env.loading = !1, 0 !== e || null != i && i != e || !(this.config._autoplay === !0 || "DESTROYING|AWAKENING".indexOf(this.getState()) > -1) ? this.getItemCount() > 1 && e != i && null != i && this.config._continuous === !0 && e < this.getItemCount() && (r = !0) : r = !0, (e >= this.getItemCount() || 0 > e) && (r = this.config._loop, e = 0), this._currentItem = e;
                    var s = this.getDC().hasClass("fullscreen");
                    this.getDC().attr("class", this.env.className), s && this.getDC().addClass("fullscreen");
                    var a = this.media[this._currentItem].mediaModel.toUpperCase();
                    return $p.models[a] ? (null != this.getConfig("className", null) && this.getDC().addClass(this.getNS() + this.getConfig("className")), this.getDC().addClass(this.getNS() + (this.getConfig("streamType") || "http")), $p.utils.cssTransitions() || this.getDC().addClass("notransitions"), this.getIsMobileClient() && this.getDC().addClass("mobile")) : (a = "NA", this.media[this._currentItem].mediaModel = a, this.media[this._currentItem].errorCode = 8), this.playerModel = new playerModel, $.extend(this.playerModel, $p.models[a].prototype), this._promote("syncing", "display"), this._enqueue(function() {
                        try {
                            n._applyCuePoints()
                        } catch (t) {}
                    }), this.playerModel._init({
                        media: $.extend(!0, {}, this.media[this._currentItem]),
                        model: a,
                        pp: this,
                        environment: $.extend(!0, {}, this.env),
                        autoplay: r,
                        quality: this.getPlaybackQuality(),
                        fullscreen: this.getInFullscreen()
                    }), this
                }, this.setPlay = function() {
                    var t = this;
                    return this.getConfig("thereCanBeOnlyOne") && projekktor("*").each(function() {
                        this.getId() !== t.getId() && this.setStop()
                    }), this._enqueue("play", !1), this
                }, this.setPause = function() {
                    return this._enqueue("pause", !1), this
                }, this.setStop = function(t) {
                    var e = this;
                    return this.getState("IDLE") ? this : (t ? this._enqueue(function() {
                        e._currentItem = 0, e.setActiveItem(0)
                    }) : this._enqueue("stop", !1), this)
                }, this.setPlayPause = function() {
                    return this.getState("PLAYING") ? this.setPause() : this.setPlay(), this
                }, this.setVolume = function(t, e) {
                    var i = this.getVolume();
                    if (1 == this.getConfig("fixedVolume")) return this;
                    switch (typeof t) {
                        case "string":
                            var n = t.substr(0, 1);
                            switch (t = parseFloat(t.substr(1)), n) {
                                case "+":
                                    t = this.getVolume() + t;
                                    break;
                                case "-":
                                    t = this.getVolume() - t;
                                    break;
                                default:
                                    t = this.getVolume()
                            }
                        case "number":
                            t = parseFloat(t), t = t > 1 ? 1 : t, t = 0 > t ? 0 : t;
                            break;
                        default:
                            return this
                    }
                    if (t > i && e) {
                        if (t - i > .03) {
                            for (var r = i; t >= r; r += .03) this._enqueue("volume", r, e);
                            return this._enqueue("volume", t, e), this
                        }
                    } else if (i > t && e && i - t > .03) {
                        for (var r = i; r >= t; r -= .03) this._enqueue("volume", r, e);
                        return this._enqueue("volume", t, e), this
                    }
                    return this._enqueue("volume", t), this
                }, this.setPlayhead = this.setSeek = function(t) {
                    if (1 == this.getConfig("disallowSkip")) return this;
                    if ("string" == typeof t) {
                        var e = t.substr(0, 1);
                        t = parseFloat(t.substr(1)), t = "+" == e ? this.getPosition() + t : "-" == e ? this.getPosition() - t : this.getPosition()
                    }
                    return "number" == typeof t && this._enqueue("seek", Math.round(100 * t) / 100), this
                }, this.setFrame = function(t) {
                    if (null == this.getConfig("fps")) return this;
                    if (1 == this.getConfig("disallowSkip")) return this;
                    if ("string" == typeof t) {
                        var e = t.substr(0, 1);
                        t = parseFloat(t.substr(1)), t = "+" == e ? this.getFrame() + t : "-" == e ? this.getFrame() - t : this.getFrame()
                    }
                    return "number" == typeof t && this._enqueue("frame", t), this
                }, this.setPlayerPoster = function(t) {
                    var e = this;
                    return this._enqueue(function() {
                        e.setConfig({
                            poster: t
                        }, 0)
                    }), this._enqueue(function() {
                        e.playerModel.setPosterLive()
                    }), this
                }, this.setConfig = function() {
                    var t = this,
                        e = arguments;
                    return this._enqueue(function() {
                        t._setConfig(e[0] || null, e[1] || null)
                    }), this
                }, this._setConfig = function() {
                    if (!arguments.length) return result;
                    var confObj = arguments[0],
                        dest = "*",
                        value = !1;
                    if ("object" != typeof confObj) return this;
                    dest = "string" == arguments[1] || "number" == arguments[1] ? arguments[1] : this._currentItem;
                    for (var i in confObj)
                        if (null == this.config["_" + i]) {
                            try {
                                value = eval(confObj[i])
                            } catch (e) {
                                value = confObj[i]
                            }
                            if ("*" != dest) {
                                if (void 0 == this.media[dest]) return this;
                                null == this.media[dest].config && (this.media[dest].config = {}), this.media[dest].config[i] = value
                            } else $.each(this.media, function() {
                                null == this.config && (this.config = {}), this.config[i] = value
                            })
                        }
                    return this
                }, this.setFullscreen = function(t) {
                    var e = this.getNativeFullscreenSupport();
                    return t = null == t ? !e.isFullScreen() : t, t === !0 ? e.requestFullScreen() : e.cancelFullScreen(), this
                }, this.setSize = function(t) {
                    var e = this.getIframe() || this.getDC(),
                        i = e.data("fsdata") || null,
                        n = t && null != t.width ? t.width : null != this.getConfig("width") ? this.getConfig("width") : !1,
                        r = t && null != t.height ? t.height : null == this.getConfig("height") && this.getConfig("ratio") ? Math.round((n || this.getDC().width()) / this.getConfig("ratio")) : null != this.getConfig("height") ? this.getConfig("height") : !1;

                    this.getInFullscreen() && null != i ? (i.targetWidth = n, i.targetHeight = r, e.data("fsdata", i)) : (n && e.css({
                        width: n + "px"
                    }), r && e.css({
                        height: r + "px"
                    }));
                    try {
                        this.playerModel.applyCommand("resize")
                    } catch (s) {}
                }, this.setLoop = function(t) {
                    this.config._loop = t || !this.config._loop
                }, this.setDebug = function(t) {
                    $p.utils.logging = t || !$p.utils.logging, $p.utils.logging && $p.utils.log("DEBUG MODE for player #" + this.getId())
                }, this.addListener = function(t, e) {
                    var i = this;
                    return this._enqueue(function() {
                        i._addListener(t, e)
                    }), this
                }, this._addListener = function(t, e) {
                    var i = t.indexOf(".") > -1 ? t.split(".") : [t, "default"];
                    return this.listeners.push({
                        event: i[0],
                        ns: i[1],
                        callback: e
                    }), this
                }, this.removeListener = function(t, e) {
                    for (var i = this.listeners.length, n = t.indexOf(".") > -1 ? t.split(".") : [t, "*"], r = 0; i > r; r++) void 0 != this.listeners[r] && (this.listeners[r].event == n[0] || "*" === n[0]) && (this.listeners[r].ns != n[1] && "*" !== n[1] || this.listeners[r].callback != e && null != e || this.listeners.splice(r, 1));
                    return this
                }, this.setItem = function() {
                    var t = arguments[0],
                        e = 0;
                    return this._clearqueue(), null == t ? (e = this._removeItem(arguments[1]), e === this._currentItem && this.setActiveItem("previous")) : (e = this._addItem(this._prepareMedia({
                        file: t,
                        config: t.config || {}
                    }), arguments[1], arguments[2]), e === this._currentItem && this.setActiveItem(this._currentItem)), this
                }, this.setFile = function() {
                    var t = arguments[0] || "",
                        e = arguments[1] || this._getTypeFromFileExtension(t),
                        i = [];
                    return this.env.loading === !0 ? this : (this._clearqueue(), this.env.loading = !0, this._detachplayerModel(), "object" == typeof t ? ($p.utils.log("Applying incoming JS Object", t), this._reelUpdate(t), this) : (i[0] = {}, i[0].file = {}, i[0].file.src = t || "", i[0].file.type = e || this._getTypeFromFileExtension(splt[0]), i[0].file.type.indexOf("/xml") > -1 || i[0].file.type.indexOf("/json") > -1 ? ($p.utils.log("Loading external data from " + i[0].file.src + " supposed to be " + i[0].file.type), this._playlistServer = i[0].file.src, this.getFromUrl(i[0].file.src, this, "_reelUpdate", this.getConfig("reelParser"), i[0].file.type), this) : ($p.utils.log("Applying incoming single file:" + i[0].file.src, i), this._reelUpdate(i), this)))
                }, this.setPlaybackQuality = function(t) {
                    var e = t || this.getAppropriateQuality();
                    return $.inArray(e, this.media[this._currentItem].qualities || []) > -1 && (this.playerModel.applyCommand("quality", e), this.setConfig({
                        playbackQuality: e
                    })), this
                }, this.openUrl = function(t) {
                    return t = t || {
                        url: "",
                        target: "",
                        pause: !1
                    }, "" == t.url ? this : (t.pause === !0 && this.setPause(), window.open(t.url, t.target).focus(), this)
                }, this.selfDestruct = this.destroy = function() {
                    var t = this;
                    return this._enqueue(function() {
                        t._destroy()
                    }), this
                }, this._destroy = function() {
                    var t = this;
                    return $(this).unbind(), this.removePlugins(), this.playerModel.destroy(), this._removeGUIListeners(), $.each(projekktors, function(e) {
                        try {
                            if (this.getId() == t.getId() || this.getId() == t.getId() || this.getParent() == t.getId()) return void projekktors.splice(e, 1)
                        } catch (i) {}
                    }), this.env.playerDom.replaceWith(this.env.srcNode), this._promote("destroyed"), this.removeListener("*"), this
                }, this.reset = function() {
                    var t = this;
                    return this._clearqueue(), this._enqueue(function() {
                        t._reset()
                    }), this
                }, this._reset = function() {
                    var t = {},
                        e = this;
                    this.setFullscreen(!1), $(this).unbind(), $(this.getIframe() ? parent.window.document : document).unbind(".projekktor"), $(window).unbind(".projekktor" + this.getId()), this.playerModel.destroy(), this.playerModel = {}, this.removePlugins(), this._removeGUIListeners(), this.env.mediaContainer = null, this._currentItem = null;
                    for (var i in this.config) t["_" == i.substr(0, 1) ? i.substr(1) : i] = this.config[i];
                    return t.autoplay = !1, "function" == typeof this.env.onReady && this._enqueue(e.env.onReady(e)), this._init(this.env.playerDom, t), this
                }, this.setCuePoint = function(t, e) {
                    var i = void 0 !== t.item ? t.item : this.getItemIdx(),
                        n = $.extend(!0, {
                            offset: 0
                        }, e),
                        r = {
                            id: t.id || $p.utils.randomId(8),
                            group: t.group || $p.utils.randomId(8),
                            item: i,
                            on: ($p.utils.toSeconds(t.on) || 0) + n.offset,
                            off: ($p.utils.toSeconds(t.off) || $p.utils.toSeconds(t.on) || 0) + n.offset,
                            value: t.value || null,
                            callback: t.callback || function() {},
                            precision: null == t.precision ? 1 : t.precision,
                            title: null == t.title ? "" : t.title,
                            _listeners: [],
                            _unlocked: !1,
                            _active: !1,
                            _lastTime: 0,
                            isAvailable: function() {
                                return this._unlocked
                            },
                            _stateListener: function(t, e) {
                                if ("STOPPED|COMPLETED|DESTROYING".indexOf(t) > -1) {
                                    if (this._active) try {
                                        this.callback(!1, this, e)
                                    } catch (i) {}
                                    this._active = !1, this._lastTime = -1
                                }
                            },
                            _timeListener: function(t, e) {
                                if (e.getItemIdx() === this.item || "*" == this.item) {
                                    var i = 0 == this.precision ? Math.round(t) : $p.utils.roundNumber(t, this.precision),
                                        n = this;
                                    if (this._unlocked === !1) {
                                        var r = e.getDuration() * e.getLoadProgress() / 100;
                                        if (!(this.on <= r || this.on <= i)) return;
                                        $.each(this._listeners.unlock || [], function() {
                                            this(n, e)
                                        }), this._unlocked = !0
                                    }
                                    if (this._lastTime != i) {
                                        var s = i - this._lastTime <= 1 && i - this._lastTime > 0;
                                        if ((i >= this.on && i <= this.off || i >= this.on && this.on == this.off && i <= this.on + 1) && this._active !== !0) {
                                            this._active = !0, $p.utils.log("Cue Point: [ON " + this.on + "] at " + i, this);
                                            try {
                                                this.callback({
                                                    id: this.id,
                                                    enabled: !0,
                                                    value: this.value,
                                                    seeked: !s,
                                                    player: e
                                                })
                                            } catch (a) {}
                                        } else if ((i < this.on || i > this.off) && this.off != this.on && 1 == this._active) {
                                            this._active = !1, $p.utils.log("Cue Point: [OFF] at " + this.off, this);
                                            try {
                                                this.callback({
                                                    id: this.id,
                                                    enabled: !1,
                                                    value: this.value,
                                                    seeked: !s,
                                                    player: e
                                                })
                                            } catch (a) {}
                                        }
                                        this.off == this.on && this._active && new Number(i - this.on).toPrecision(this.precision) >= 1 && (this._active = !1), this._lastTime = i
                                    }
                                }
                            },
                            addListener: function(t, e) {
                                null == this._listeners[t] && (this._listeners[t] = []), this._listeners[t].push(e || function() {})
                            }
                        };
                    return null != t.unlockCallback && r.addListener("unlock", t.unlockCallback), null == this._cuePoints[i] && (this._cuePoints[i] = []), this._cuePoints[i].push(r), this.getState("IDLE") || this._promote("cuepointAdded"), this
                }, this.setGotoCuePoint = function(t, e) {
                    var i = this.getCuePoints(e);
                    return this.setPlayhead(i[t].on), this
                }, this.getCuePoints = function(t) {
                    return this._cuePoints[t || this.getItemIdx()] || this._cuePoints || {}
                }, this.getCuePointById = function(t, e) {
                    for (var i = !1, n = this.getCuePoints(e), r = 0; r < n.length; r++)
                        if (n.id == t) {
                            i = this;
                            break
                        }
                    return i
                }, this.removeCuePoints = function(t, e) {
                    for (var i = this.getCuePoints(t || 0) || {}, n = [], r = 0; r < i.length; r++) i[r].group == e && (this.removeListener("time", i[r].timeEventHandler), this.removeListener("state", i[r].stateEventHandler), n.push(r));
                    for (var s = 0; s < n.length; s++) i.splice(n[s] - s, 1);
                    return this
                }, this.syncCuePoints = function() {
                    var t = this;
                    return this._enqueue(function() {
                        try {
                            t._applyCuePoints()
                        } catch (e) {}
                    }), this
                }, this._applyCuePoints = function(t) {
                    var e = this;
                    (null != this._cuePoints[this._currentItem] || null != this._cuePoints["*"]) && $.each($.merge(this._cuePoints[this._currentItem] || [], this._cuePoints["*"] || []), function(t, i) {
                        try {
                            e.removeListener("time", i.timeEventHandler), e.removeListener("state", i.stateEventHandler)
                        } catch (n) {}
                        i.timeEventHandler = function(t, e) {
                            try {
                                i._timeListener(t, e)
                            } catch (n) {}
                        }, i.stateEventHandler = function(t, e) {
                            try {
                                i._stateListener(t, e)
                            } catch (n) {}
                        }, e.addListener("time", i.timeEventHandler), e.addListener("state", i.stateEventHandler), e.addListener("item", function() {
                            e.removeListener("time", i.timeEventHandler), e.removeListener("state", i.stateEventHandler)
                        })
                    })
                }, this._enqueue = function(t, e, i) {
                    null != t && (this._queue.push({
                        command: t,
                        params: e,
                        delay: i
                    }), this._processQueue())
                }, this._clearqueue = function(t, e) {
                    this._isReady === !0 && (this._queue = [])
                }, this._processQueue = function() {
                    var t = this,
                        e = !1;
                    this._processing !== !0 && this.env.loading !== !0 && (this._processing = !0, function() {
                        try {
                            e = t.playerModel.getIsReady()
                        } catch (i) {}
                        if (t.env.loading !== !0 && e) {
                            try {
                                var n = t._queue.shift();
                                null != n && ("string" == typeof n.command ? n.delay > 0 ? setTimeout(function() {
                                    t.playerModel.applyCommand(n.command, n.params)
                                }, n.delay) : t.playerModel.applyCommand(n.command, n.params) : n.command(t))
                            } catch (i) {
                                $p.utils.log("ERROR:", i)
                            }
                            return 0 == t._queue.length ? (t._isReady === !1 && (t._isReady = !0), void(t._processing = !1)) : void arguments.callee()
                        }
                        setTimeout(arguments.callee, 100)
                    }())
                }, this._getTypeFromFileExtension = function(t) {
                    var e = "",
                        i = [],
                        n = {},
                        i = [],
                        r = null,
                        s = !0;
                    for (var a in $p.mmap)
                        if ($p.mmap.hasOwnProperty(a)) {
                            r = $p.mmap[a].platform, "object" != typeof r && (r = [r]), s = !0;
                            for (var o = 0; o < r.length; o++) null != r[o] && (this.getConfig("enable" + r[o].toUpperCase() + "Platform") === !1 || -1 === $.inArray(r[o], this.getConfig("platforms"))) && (s = !1);
                            if (s === !1) continue;
                            i.push("\\." + $p.mmap[a].ext), n[$p.mmap[a].ext] = $p.mmap[a]
                        }
                    i = "^.*.(" + i.join("|") + ")";
                    try {
                        e = t.match(new RegExp(i))[1], e = e ? e.replace(".", "") : "NaN"
                    } catch (l) {
                        e = "NaN"
                    }
                    return n[e].type
                }, this._testMediaSupport = function(t) {
                    var e = {},
                        i = [],
                        n = "",
                        r = this;
                    if (t) {
                        if (null != $p._platformTableCache) return $p._platformTableCache
                    } else if (null != $p._compTableCache) return $p._compTableCache;
                    for (var s = 0; s < $p.mmap.length; s++) $p.mmap.hasOwnProperty(s) && (platforms = "object" == typeof $p.mmap[s].platform ? $p.mmap[s].platform : [$p.mmap[s].platform], $.each(platforms, function(t, a) {
                        return null == a ? !0 : (n = $p.mmap[s].streamType || ["http"], $.each(n, function(t, n) {
                            if (null == e[n] && (e[n] = {}), null == e[n][a] && (e[n][a] = []), $.inArray($p.mmap[s].type, e[n][a]) > -1) return !0;
                            var o = ($p.models[$p.mmap[s].model.toUpperCase()].prototype[a.toLowerCase() + "Version"] || "1").toString();
                            try {
                                if ($p.utils.versionCompare($p.platforms[a.toUpperCase()]($p.mmap[s].type), o)) return 0 != r.getConfig("enable" + a.toUpperCase() + "Platform") && $.inArray(a.toLowerCase(), r.getConfig("platforms")) > -1 && (e[n][a].push($p.mmap[s].type), -1 == $.inArray(a.toUpperCase(), i) && i.push(a.toUpperCase())), !0
                            } catch (l) {
                                $p.utils.log("ERROR", "platform " + a + " not defined")
                            }
                            return !0
                        }), !0)
                    }));
                    return $p._compTableCache = e, $p._platformTableCache = i, t ? $p._platformTableCache : $p._compTableCache
                }, this._readMediaTag = function(t) {
                    var e = {},
                        i = "",
                        n = [],
                        r = this;
                    if (-1 == "VIDEOAUDIO".indexOf(t[0].tagName.toUpperCase())) return !1;
                    this.getConfig("ignoreAttributes") || (e = {
                        autoplay: void 0 === t.attr("autoplay") && void 0 === t.prop("autoplay") || t.prop("autoplay") === !1 ? !1 : !0,
                        controls: void 0 === t.attr("controls") && void 0 === t.prop("controls") || t.prop("controls") === !1 ? !1 : !0,
                        loop: void 0 === t.attr("autoplay") && void 0 === t.prop("loop") || t.prop("loop") === !1 ? !1 : !0,
                        title: void 0 !== t.attr("title") && t.attr("title") !== !1 ? t.attr("title") : "",
                        poster: void 0 !== t.attr("poster") && t.attr("poster") !== !1 ? t.attr("poster") : "",
                        width: void 0 !== t.attr("width") && t.attr("width") !== !1 ? t.attr("width") : null,
                        height: void 0 !== t.attr("height") && t.attr("height") !== !1 ? t.attr("height") : null
                    }), i = $($("<div></div>").html($(t).clone())).html(), n = ["autoplay", "controls", "loop"];
                    for (var s = 0; s < n.length; s++) - 1 != i.indexOf(n[s]) && (e[n[s]] = !0);
                    if (e.playlist = [], e.playlist[0] = [], e.playlist[0].config = {
                            tracks: []
                        }, t.attr("src") && e.playlist[0].push({
                            src: t.attr("src"),
                            type: t.attr("type") || this._getTypeFromFileExtension(t.attr("src"))
                        }), !$("<video/>").get(0).canPlayType) {
                        var a = t;
                        do
                            if (a = a.next("source,track"), a.attr("src")) switch (a.get(0).tagName.toUpperCase()) {
                                case "SOURCE":
                                    e.playlist[0].push({
                                        src: a.attr("src"),
                                        type: a.attr("type") || this._getTypeFromFileExtension(a.attr("src")),
                                        quality: a.attr("data-quality") || ""
                                    });
                                    break;
                                case "TRACK":
                                    $(this).attr("src") && e.playlist[0].config.tracks.push({
                                        src: a.attr("src"),
                                        kind: a.attr("kind") || "subtitle",
                                        lang: a.attr("srclang") || null,
                                        label: a.attr("label") || null
                                    })
                            }
                            while (a.attr("src"))
                    }
                    return 0 == e.playlist[0].length && t.children("source,track").each(function() {
                        if ($(this).attr("src")) switch ($(this).get(0).tagName.toUpperCase()) {
                            case "SOURCE":
                                e.playlist[0].push({
                                    src: $(this).attr("src"),
                                    type: $(this).attr("type") || r._getTypeFromFileExtension($(this).attr("src")),
                                    quality: $(this).attr("data-quality") || ""
                                });
                                break;
                            case "TRACK":
                                e.playlist[0].config.tracks.push({
                                    src: $(this).attr("src"),
                                    kind: $(this).attr("kind") || "subtitle",
                                    lang: $(this).attr("srclang") || null,
                                    label: $(this).attr("label") || null
                                })
                        }
                    }), e
                }, this._raiseError = function(t) {
                    this.env.playerDom.html(t).css({
                        color: "#fdfdfd",
                        backgroundColor: "#333",
                        lineHeight: this.config.height + "px",
                        textAlign: "center",
                        display: "block"
                    }), this._promote("error")
                }, this._init = function(t, e) {
                    var i = t || srcNode,
                        n = e || cfg,
                        r = this._readMediaTag(i);
                    if (this.env.srcNode = i.wrap("<div></div>").parent().html(), i.unwrap(), this.env.className = i.attr("class") || "", this._id = i[0].id || $p.utils.randomId(8), r !== !1) {
                        this.env.playerDom = $("<div/>").attr({
                            "class": i[0].className,
                            style: i.attr("style")
                        }), i.replaceWith(this.env.playerDom), i.empty().removeAttr("type").removeAttr("src");
                        try {
                            i.get(0).pause(), i.get(0).load()
                        } catch (s) {}
                        $("<div/>").append(i).get(0).innerHTML = "", i = null
                    } else this.env.playerDom = i;
                    n = $.extend(!0, {}, r, n);
                    for (var a in n) null != this.config["_" + a] ? this.config["_" + a] = n[a] : a.indexOf("plugin_") > -1 ? this.config[a] = $.extend(this.config[a], n[a]) : this.config[a] = n[a];
                    if ($p.utils.logging = this.config._debug, this.setSize(), this.getIsMobileClient() && (this.config._autoplay = !1, this.config.fixedVolume = !0), this.env.playerDom.attr("id", this._id), this.config._theme) switch (typeof this.config._theme) {
                        case "string":
                            break;
                        case "object":
                            this._applyTheme(this.config._theme)
                    } else this._start(!1);
                    return this
                }, this._start = function(t) {
                    var e = this,
                        i = this.getIframeParent();
                    this._registerPlugins(), this.config._iframe === !0 && (i ? i.ready(function() {
                        e._enterFullViewport(!0)
                    }) : e._enterFullViewport(!0)), i === !1 && (this.config._isCrossDomain = !0), this.getIframeAllowFullscreen() || (this.config.enableFullscreen = !1), "function" == typeof onReady && this._enqueue(function() {
                        onReady(e)
                    });
                    for (var n in this.config._playlist[0])
                        if (this.config._playlist[0][n].type && (this.config._playlist[0][n].type.indexOf("/json") > -1 || this.config._playlist[0][n].type.indexOf("/xml") > -1)) return this.setFile(this.config._playlist[0][n].src, this.config._playlist[0][n].type), this;
                    return this.setFile(this.config._playlist), this
                }, this._applyTheme = function(data) {
                    var ref = this;
                    if (data === !1) return this._raiseError("The Projekktor theme-set specified could not be loaded."), !1;
                    if ("string" == typeof data.css && $("head").append('<style type="text/css">' + $p.utils.parseTemplate(data.css, {
                            rp: data.baseURL
                        }) + "</style>"), "string" == typeof data.html && this.env.playerDom.html($p.utils.parseTemplate(data.html, {
                            p: this.getNS()
                        })), this.env.playerDom.addClass(data.id).addClass(data.variation), this.env.className = this.env.className && 0 !== this.env.className.length ? this.env.className + " " + data.id : data.id, data.variation && 0 !== data.variation.length && (this.env.className += " " + data.variation), "object" == typeof data.config)
                        for (var i in data.config) null != this.config["_" + i] ? this.config["_" + i] = data.config[i] : i.indexOf("plugin_") > -1 ? this.config[i] = $.extend(!0, {}, this.config[i], data.config[i]) : this.config[i] = data.config[i];
                    return data.onReady && this._enqueue(function(player) {
                        eval(data.onReady)
                    }), this._start()
                }, this._init()
            }
            var arg = arguments[0],
                instances = [],
                plugins = [];
            if (!arguments.length) return projekktors[0] || null;
            if ("number" == typeof arg) return projekktors[arg];
            if ("string" == typeof arg) {
                if ("*" == arg) return new Iterator(projekktors);
                for (var i = 0; i < projekktors.length; i++) {
                    try {
                        if (projekktors[i].getId() == arg.id) {
                            instances.push(projekktors[i]);
                            continue
                        }
                    } catch (e) {}
                    try {
                        for (var j = 0; j < $(arg).length; j++) projekktors[i].env.playerDom.get(0) != $(arg).get(j) || instances.push(projekktors[i])
                    } catch (e) {}
                    try {
                        if (projekktors[i].getParent() == arg) {
                            instances.push(projekktors[i]);
                            continue
                        }
                    } catch (e) {}
                    try {
                        if (projekktors[i].getId() == arg) {
                            instances.push(projekktors[i]);
                            continue
                        }
                    } catch (e) {}
                }
                if (instances.length > 0) return 1 == instances.length ? instances[0] : new Iterator(instances)
            }
            if (0 === instances.length) {
                var cfg = arguments[1] || {},
                    callback = arguments[2] || {},
                    count = 0,
                    playerA;
                if ("string" == typeof arg) return $.each($(arg), function() {
                    playerA = new PPlayer($(this), cfg, callback), projekktors.push(playerA), count++
                }), count > 1 ? new Iterator(projekktors) : playerA;
                if (arg) return projekktors.push(new PPlayer(arg, cfg, callback)), new Iterator(projekktors)
            }
            return null
        }, $p.mmap = [], $p.models = {}, $p.newModel = function(t, e) {
            if ("object" != typeof t) return i;
            if (!t.modelId) return i;
            var i = !1,
                n = $p.models[e] && void 0 != e ? $p.models[e].prototype : {};
            if ($p.models[t.modelId]) return i;
            $p.models[t.modelId] = function() {}, $p.models[t.modelId].prototype = $.extend({}, n, t), t.setiLove && t.setiLove(), $p.mmap = $.grep($p.mmap, function(e) {
                var i = e.model != (t.replace ? t.replace.toLowerCase() : ""),
                    n = e.replaces != t.modelId;
                return i && n
            });
            for (var r = 0; r < t.iLove.length; r++) t.iLove[r].model = t.modelId.toLowerCase(), t.iLove[r].replaces = t.replace ? t.replace.toLowerCase() : "", $p.mmap.push(t.iLove[r]);
            return !0
        }
    });
var projekktorConfig = function(t) {
    this._version = t
};
projekktorConfig.prototype = {
    _playerName: "Projekktor",
    _playerHome: "http://www.projekktor.com?via=context",
    _cookieName: "projekktor",
    _cookieExpiry: 356,
    _plugins: ["display", "controlbar"],
    _addplugins: [],
    _reelParser: null,
    _ns: "pp",
    _platforms: ["browser", "android", "ios", "native", "flash", "vlc"],
    _iframe: !1,
    _ignoreAttributes: !1,
    _loop: !1,
    _autoplay: !1,
    _continuous: !0,
    _thereCanBeOnlyOne: !0,
    _leaveFullscreen: !0,
    _playlist: [],
    _theme: !1,
    _themeRepo: !1,
    _messages: {
        0: "#0 An (unknown) error occurred.",
        1: "#1 You aborted the media playback. ",
        2: "#2 A network error caused the media download to fail part-way. ",
        3: "#3 The media playback was aborted due to a corruption problem. ",
        4: "#4 The media (%{title}) could not be loaded because the server or network failed.",
        5: "#5 Sorry, your browser does not support the media format of the requested file.",
        6: "#6 Your client is in lack of the Flash Plugin V%{flashver} or higher.",
        7: "#7 No media scheduled.",
        8: "#8 ! Invalid media model configured !",
        9: "#9 File (%{file}) not found.",
        10: "#10 Invalid or missing quality settings for %{title}.",
        11: "#11 Invalid streamType and/or streamServer settings for %{title}.",
        12: "#12 Invalid or inconsistent quality setup for %{title}.",
        80: "#80 The requested file does not exist or is delivered with an invalid content-type.",
        97: "No media scheduled.",
        98: "Invalid or malformed playlist data!",
        99: "Click display to proceed. ",
        100: "Keyboard Shortcuts",
        500: "This Youtube video has been removed or set to private",
        501: "The Youtube user owning this video disabled embedding.",
        502: "Invalid Youtube Video-Id specified."
    },
    _debug: !1,
    _width: null,
    _height: null,
    _ratio: !1,
    _keys: [],
    _isCrossDomain: !1,
    _forceFullViewport: !1,
    id: 0,
    title: null,
    cat: "clip",
    poster: null,
    controls: !0,
    start: !1,
    stop: !1,
    volume: .5,
    cover: "",
    disablePause: !1,
    disallowSkip: !1,
    fixedVolume: !1,
    imageScaling: "aspectratio",
    videoScaling: "aspectratio",
    playerFlashMP4: "",
    playerFlashMP3: "",
    streamType: "http",
    streamServer: "",
    startParameter: "start",
    useYTIframeAPI: !0,
    enableKeyboard: !0,
    enableFullscreen: !0,
    playbackQuality: "default",
    _playbackQualities: [{
        key: "small",
        minHeight: 240,
        minWidth: 240
    }, {
        key: "medium",
        minHeight: 360,
        minWidth: [{
            ratio: 1.77,
            minWidth: 640
        }, {
            ratio: 1.33,
            minWidth: 480
        }]
    }, {
        key: "large",
        minHeight: 480,
        minWidth: [{
            ratio: 1.77,
            minWidth: 853
        }, {
            ratio: 1.33,
            minWidth: 640
        }]
    }, {
        key: "hd1080",
        minHeight: 1080,
        minWidth: [{
            ratio: 1.77,
            minWidth: 1920
        }, {
            ratio: 1.33,
            minWidth: 1440
        }]
    }, {
        key: "hd720",
        minHeight: 720,
        minWidth: [{
            ratio: 1.77,
            minWidth: 1280
        }, {
            ratio: 1.33,
            minWidth: 960
        }]
    }, {
        key: "highres",
        minHeight: 1081,
        minWidth: 0
    }],
    enableTestcard: !0,
    skipTestcard: !1,
    duration: 0,
    className: ""
}, jQuery(function(t) {
    $p.utils = {
        imageDummy: function() {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi/v//PwNAgAEACQsDAUdpTjcAAAAASUVORK5CYII="
        },
        capitalise: function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
        },
        blockSelection: function(t) {
            return t && t.css({
                "-khtml-user-select": "none",
                "-webkit-user-select": "none",
                MozUserSelect: "none",
                "user-select": "none"
            }).attr("unselectable", "on").bind("selectstart", function() {
                return !1
            }), t
        },
        unique: function(e) {
            for (var i = [], n = e.length; n--;) {
                var r = e[n]; - 1 === t.inArray(r, i) && i.unshift(r)
            }
            return i
        },
        intersect: function(e, i) {
            var n = [];
            return t.each(e, function(r) {
                try {
                    t.inArray(i, e[r]) > -1 && n.push(e[r])
                } catch (s) {}
                try {
                    t.inArray(e[r], i) > -1 && n.push(e[r])
                } catch (s) {}
            }), n
        },
        roundNumber: function(t, e) {
            return 0 >= t || isNaN(t) ? 0 : Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
        },
        randomId: function(t) {
            for (var e = "abcdefghiklmnopqrstuvwxyz", i = "", n = 0; t > n; n++) {
                var r = Math.floor(Math.random() * e.length);
                i += e.substring(r, r + 1)
            }
            return i
        },
        toAbsoluteURL: function(t) {
            var e, i, n, r, s = location;
            if (null == t || "" == t) return "";
            if (/^\w+:/.test(t)) return t;
            if (e = s.protocol + "//" + s.host, 0 === t.indexOf("/")) return e + t;
            if (i = s.pathname.replace(/\/[^\/]*$/, ""), n = t.match(/\.\.\//g))
                for (t = t.substring(3 * n.length), r = n.length; r--;) i = i.substring(0, i.lastIndexOf("/"));
            return e + i + "/" + t
        },
        strip: function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        toSeconds: function(t) {
            var e = 0;
            if ("string" != typeof t) return t;
            if (t) {
                var n = t.split(":");
                for (n.length > 3 && (n = n.slice(0, 3)), i = 0; i < n.length; i++) e = 60 * e + parseFloat(n[i].replace(",", "."))
            }
            return parseFloat(e)
        },
        toTimeString: function(t, e) {
            var i = Math.floor(t / 3600),
                n = t % 3600,
                r = Math.floor(n / 60),
                s = n % 60,
                a = Math.floor(s);
            return 10 > i && (i = "0" + i), 10 > r && (r = "0" + r), 10 > a && (a = "0" + a), e === !0 ? i + ":" + r : i + ":" + r + ":" + a
        },
        embeddFlash: function(e, i, n, r) {
            var s = i.FlashVars || {},
                a = "",
                o = "",
                l = "",
                u = "",
                c = e; - 1 == i.src.indexOf("?") ? i.src += "?" : i.src += "&";
            for (var d in s) "function" != typeof s[d] && (u = s[d], i.src += d + "=" + encodeURIComponent(u) + "&");
            i.src.replace(/&$/, ""), o = '<object id="' + i.id + '" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"  name="' + i.name + '" width="' + i.width + '" height="' + i.height + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + i.src + '"></param><param name="allowScriptAccess" value="' + i.allowScriptAccess + '"></param><param name="allowFullScreen" value="' + i.allowFullScreen + '"></param><param name="wmode" value="' + i.wmode + '"></param>', l = "<embed ";
            for (var d in i) "FLASHVARS" !== d.toUpperCase() && "function" != typeof i[d] && (l += d + '="' + i[d] + '" ');
            return l += ' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>', a = o + l, a += "</object>", (!document.all || window.opera) && (a = l), null === c ? a : (c.get(0).innerHTML = a, n !== !1 && c.append(t("<div/>").attr("id", i.id + "_cc").css({
                width: r ? "1px" : "100%",
                height: r ? "1px" : "100%",
                backgroundColor: $p.utils.ieVersion() < 9 ? "#000" : "transparent",
                filter: "alpha(opacity = 0.1)",
                position: "absolute",
                top: 0,
                left: 0
            })), t("#" + i.id))
        },
        ieVersion: function() {
            for (var t = 3, e = document.createElement("div"), i = e.getElementsByTagName("i"); e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0];);
            return t > 4 ? t : void 0
        },
        parseTemplate: function(t, e, i) {
            if (void 0 === e || 0 == e.length || "object" != typeof e) return t;
            for (var n in e) t = t.replace(new RegExp("%{" + n + "}", "gi"), i === !0 ? window.encodeURIComponent(e[n]) : e[n]);
            return t = t.replace(/%{(.*?)}/gi, "")
        },
        stretch: function(e, i, n, r, s, a) {
            if (null == i) return !1;
            i instanceof t == !1 && (i = t(i)), i.data("od") || i.data("od", {
                width: i.width(),
                height: i.height()
            });
            var o = void 0 !== s ? s : i.data("od").width,
                l = void 0 !== a ? a : i.data("od").height,
                u = n / o,
                c = r / l,
                d = n,
                h = r;
            switch (e) {
                case "none":
                    d = o, h = l;
                    break;
                case "fill":
                    u > c ? (d = o * u, h = l * u) : c > u && (d = o * c, h = l * c);
                    break;
                case "aspectratio":
                default:
                    u > c ? (d = o * c, h = l * c) : c > u && (d = o * u, h = l * u)
            }
            return n = $p.utils.roundNumber(d / n * 100, 0), r = $p.utils.roundNumber(h / r * 100, 0), 0 === n || 0 === r ? !1 : (i.css({
                margin: 0,
                padding: 0,
                width: n + "%",
                height: r + "%",
                left: (100 - n) / 2 + "%",
                top: (100 - r) / 2 + "%"
            }), i.data("od").width != i.width() || i.data("od").height != i.height() ? !0 : !1)
        },
        parseUri: function(t) {
            for (var e = {
                    strictMode: !1,
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, i = e.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, r = 14; r--;) n[e.key[r]] = i[r] || "";
            return n[e.q.name] = {}, n[e.key[12]].replace(e.q.parser, function(t, i, r) {
                i && (n[e.q.name][i] = r)
            }), n
        },
        log: function() {
            this.logging !== !1 && (this.history = this.history || [], this.history.push(arguments), window.console && console.log(Array.prototype.slice.call(arguments)))
        },
        cleanResponse: function(e, i) {
            var n = !1;
            switch (i) {
                case "html":
                case "xml":
                    window.DOMParser ? (n = new DOMParser, n = n.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e));
                    break;
                case "json":
                    n = e, "string" == typeof n && (n = t.parseJSON(n));
                    break;
                case "jsonp":
                    break;
                default:
                    n = e
            }
            return n
        },
        cssTransitions: function() {
            function t(t) {
                for (var e in t)
                    if (null != n[t[e]]) return !0;
                return !1
            }

            function e(e) {
                var i = "Webkit Moz O ms Khtml".split(" "),
                    n = e.charAt(0).toUpperCase() + e.substr(1),
                    r = (e + " " + i.join(n + " ") + n).split(" ");
                return t(r)
            }
            var i = document.createElement("z"),
                n = i.style;
            return e("animationName")
        },
        versionCompare: function(t, e) {
            var i = t.split("."),
                n = e.split("."),
                r = 0;
            for (r = 0; r < i.length; ++r) i[r] = Number(i[r]);
            for (r = 0; r < n.length; ++r) n[r] = Number(n[r]);
            return 2 == i.length && (i[2] = 0), i[0] > n[0] ? !0 : i[0] < n[0] ? !1 : i[1] > n[1] ? !0 : i[1] < n[1] ? !1 : i[2] > n[2] ? !0 : i[2] < n[2] ? !1 : !0
        },
        stringify: function(t) {
            if ("JSON" in window) return JSON.stringify(t);
            var e = typeof t;
            if ("object" != e || null === t) return "string" == e && (t = '"' + t + '"'), String(t);
            var i, n, r = [],
                s = t && t.constructor == Array;
            for (i in t) t.hasOwnProperty(i) && (n = t[i], e = typeof n, t.hasOwnProperty(i) && ("string" == e ? n = '"' + n + '"' : "object" == e && null !== n && (n = $p.utils.stringify(n)), r.push((s ? "" : '"' + i + '":') + String(n))));
            return (s ? "[" : "{") + String(r) + (s ? "]" : "}")
        },
        logging: !1
    }
}), jQuery(function(t) {
    $p.platforms = {
        VLC: function() {
            if (navigator.plugins && navigator.plugins.length > 0) {
                for (var t = 0; t < navigator.plugins.length; ++t)
                    if (-1 != navigator.plugins[t].name.indexOf("VLC")) {
                        if (null != navigator.plugins[t].version) return navigator.plugins[t].version || "0";
                        if (null != navigator.plugins[t].description && navigator.plugins[t].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0]) return navigator.plugins[t].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0]
                    }
            } else try {
                return new ActiveXObject("VideoLAN.VLCPlugin.2"), "0"
            } catch (e) {}
            return "0"
        },
        FLASH: function(t) {
            try {
                try {
                    var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        e.AllowScriptAccess = "always"
                    } catch (i) {
                        return "6.0.0"
                    }
                } catch (i) {}
                return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0].toString()
            } catch (i) {
                try {
                    if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0].toString()
                } catch (i) {}
            }
            return "0"
        },
        FLASHNA: function(t) {
            try {
                try {
                    var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        e.AllowScriptAccess = "always"
                    } catch (i) {
                        return "6.0.0"
                    }
                } catch (i) {}
                return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0].toString()
            } catch (i) {
                try {
                    if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0].toString()
                } catch (i) {}
            }
            return "0"
        },
        ANDROID: function(t) {
            try {
                return navigator.userAgent.toLowerCase().match(/android\s+(([\d\.]+))?/)[1].toString()
            } catch (e) {}
            return "0"
        },
        IOS: function(t) {
            var e = navigator.userAgent.toLowerCase(),
                i = e.indexOf("os ");
            return (e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1) && i > -1 ? e.substr(i + 3, 3).replace("_", ".").toString() : "0"
        },
        NATIVE: function(e) {
            try {
                var i = t(e.indexOf("video") > -1 ? "<video/>" : "<audio/>").get(0);
                if (null != i.canPlayType) {
                    if ("*" === e) return "1";
                    switch (i.canPlayType(e)) {
                        case "no":
                        case "":
                            return "0";
                        default:
                            return "1"
                    }
                }
            } catch (n) {}
            return "0"
        },
        BROWSER: function(t) {
            return "1"
        }
    }
});
var projekktorPluginInterface = function() {};
jQuery(function($) {
    projekktorPluginInterface.prototype = {
        pluginReady: !1,
        reqVer: null,
        name: "",
        pp: {},
        config: {},
        playerDom: null,
        _appliedDOMObj: [],
        _pageDOMContainer: {},
        _childDOMContainer: {},
        _init: function(t) {
            return this.config = $.extend(!0, this.config, t), null == this.reqVer || $p.utils.versionCompare(this.pp.getPlayerVer(), this.reqVer) ? void this.initialize() : (alert("Plugin '" + this.name + "' requires Projekktor v" + this.reqVer + " or later! Please visit http://www.projekktor.com and get the most recent version."), void(this.pluginReady = !0))
        },
        getConfig: function(t, e) {
            var i = null,
                n = e || null;
            return null != this.pp.getConfig("plugin_" + this.name) && (i = this.pp.getConfig("plugin_" + this.name)[t]), null == i && (i = this.pp.getConfig(t)), null == i && (i = this.config[t]), "object" == typeof i && null === i.length ? i = $.extend(!0, {}, i, this.config[t]) : "object" == typeof i && (i = $.extend(!0, [], this.config[t] || [], i || [])), null == i ? n : i
        },
        getDA: function(t) {
            return "data-" + this.pp.getNS() + "-" + this.name + "-" + t
        },
        getCN: function(t) {
            return this.pp.getNS() + t
        },
        sendEvent: function(t, e) {
            this.pp._promote({
                _plugin: this.name,
                _event: t
            }, e)
        },
        deconstruct: function() {
            this.pluginReady = !1, $.each(this._appliedDOMObj, function() {
                $(this).unbind()
            })
        },
        applyToPlayer: function(t, e, i) {
            if (!t) return null;
            var n = e || "container",
                r = "",
                s = this;
            try {
                r = t.attr("class") || this.name
            } catch (a) {
                r = this.name
            }
            return this._pageDOMContainer[n] = $("[" + this.getDA("host") + "='" + this.pp.getId() + "'][" + this.getDA("func") + "='" + n + "']"), this._childDOMContainer[n] = this.playerDom.find("[" + this.getDA("func") + "='" + n + "'],." + this.getCN(r) + ":not([" + this.getDA("func") + "=''])"), this._pageDOMContainer[n].length > 0 ? (this._pageDOMContainer[n].removeClass("active").addClass("inactive"), $.each(this._pageDOMContainer[n], function() {
                s._appliedDOMObj.push($(this))
            }), this._pageDOMContainer[n]) : 0 == this._childDOMContainer[n].length ? (t.removeClass(r).addClass(this.pp.getNS() + r).removeClass("active").addClass("inactive").attr(this.getDA("func"), n).appendTo(this.playerDom), this._childDOMContainer[n] = t, this._appliedDOMObj.push(t), i === !0 && t.addClass("active").removeClass("inactive"), t) : ($.each(this._childDOMContainer[n], function() {
                $(this).attr(s.getDA("func"), n), s._appliedDOMObj.push($(this))
            }), i === !0 && this._childDOMContainer[n].addClass("active").removeClass("inactive"), $(this._childDOMContainer[n][0]))
        },
        getElement: function(t) {
            return this.pp.env.playerDom.find("." + this.pp.getNS() + t)
        },
        setInactive: function() {
            $(this._pageDOMContainer.container).removeClass("active").addClass("inactive"), $(this._childDOMContainer.container).removeClass("active").addClass("inactive"), this.sendEvent("inactive", $.extend(!0, {}, this._pageDOMContainer.container, this._childDOMContainer.container))
        },
        setActive: function(t, e) {
            var i = "object" == typeof t ? t : this.getElement(t);
            return null == t ? (this._pageDOMContainer.container.removeClass("inactive").addClass("active"), this._childDOMContainer.container.removeClass("inactive").addClass("active"), this.sendEvent("active", $.extend(!0, {}, this._pageDOMContainer.container, this._childDOMContainer.container)), i) : (0 != e ? i.addClass("active").removeClass("inactive") : i.addClass("inactive").removeClass("active"), i.css("display", ""), i)
        },
        getActive: function(t) {
            return $(t).hasClass("active")
        },
        initialize: function() {},
        isReady: function() {
            return this.pluginReady
        },
        clickHandler: function(t) {
            try {
                this.pp[this.getConfig(t + "Click").callback](this.getConfig(t + "Click").value)
            } catch (e) {
                try {
                    this.getConfig(t + "Click")(this.getConfig(t + "Click").value)
                } catch (e) {}
            }
            return !1
        },
        cookie: function(key, value, ttl) {
            if (void 0 === document.cookie || document.cookie === !1) return null;
            if (null == key && null != value) return null;
            if (0 == this.pp.getConfig("cookieExpiry")) return null;
            var t = new Date,
                result = null,
                cookieString = "",
                tmp = storedData = jQuery.parseJSON(eval(result = new RegExp("(?:^|; )" + encodeURIComponent(this.getConfig("cookieName") + "_" + this.name) + "=([^;]*)").exec(document.cookie)) ? decodeURIComponent(result[1]) : null);
            return ("object" != typeof storedData || null == storedData) && (storedData = {}, null != key && (storedData[key] = tmp)), null == key ? storedData : 1 == arguments.length ? storedData[key] : (null != value ? storedData[key] = value : delete storedData[key], $.isEmptyObject(storedData) ? (ttl = 0, storedData = "") : storedData = $p.utils.stringify(storedData), t.setDate(t.getDate() + (ttl || this.getConfig("cookieExpiry", 0))), cookieString = encodeURIComponent(this.getConfig("cookieName", "projekktor") + "_" + this.name) + "=" + encodeURIComponent(storedData) + "; expires=" + (0 == ttl ? "Thu, 01 Jan 1970 00:00:01 GMT" : t.toUTCString()), this.getConfig("cookieDomain", !1) && (cookieString += "; domain=" + options.domain), document.cookie = cookieString, value)
        },
        eventHandler: function() {}
    }
});
var playerModel = function() {};
jQuery(function(t) {
    playerModel.prototype = {
        modelId: "player",
        iLove: [],
        _currentState: null,
        _currentBufferState: null,
        _currentSeekState: null,
        _ap: !1,
        _volume: 0,
        _quality: "default",
        _displayReady: !1,
        _isPlaying: !1,
        _id: null,
        _KbPerSec: 0,
        _bandWidthTimer: null,
        _isPoster: !1,
        _isFullscreen: !1,
        hasGUI: !1,
        allowRandomSeek: !1,
        flashVerifyMethod: "api_get",
        mediaElement: null,
        pp: {},
        media: {
            duration: 0,
            position: 0,
            maxpos: 0,
            offset: 0,
            file: !1,
            poster: "",
            ended: !1,
            loadProgress: 0,
            errorCode: 0
        },
        _init: function(e) {
            this.pp = e.pp || null, this.media = t.extend(!0, {}, this.media, e.media), this._ap = e.autoplay, this._isFullscreen = e.fullscreen, this._id = $p.utils.randomId(8), this._quality = e.quality || this._quality, this._volume = this.pp.getVolume(), this._playbackQuality = this.pp.getPlaybackQuality(), this.init()
        },
        init: function(t) {
            this.ready()
        },
        ready: function() {
            this.sendUpdate("modelReady"), this._ap ? (this.sendUpdate("autostart", !0), this._setState("awakening")) : this.displayItem(!1)
        },
        displayItem: function(e) {
            return this._displayReady = !1, this._isPoster = !1, this.pp.removeListener("fullscreen.poster"), this.pp.removeListener("resize.poster"), e !== !0 || this.getState("STOPPED") ? (this._setState("idle"), this.applyImage(this.getPoster(), this.pp.getMediaContainer().html("")), this._isPoster = !0, void this.displayReady()) : (t("#" + this.pp.getMediaId() + "_image").remove(), t("#" + this.pp.getId() + "_testcard_media").remove(), void this.applyMedia(this.pp.getMediaContainer()))
        },
        applyMedia: function() {},
        sendUpdate: function(t, e) {
            "ERROR" != this._currentState && ("error" == t && this._setState("error"), this.pp._modelUpdateListener(t, e))
        },
        displayReady: function() {
            this._displayReady = !0, this.pp._modelUpdateListener("displayReady")
        },
        start: function() {
            var t = this;
            (null != this.mediaElement || "PLAYLIST" == this.modelId) && (this.getState("STARTING") || (this._setState("STARTING"), this.getState("STOPPED") || this.addListeners(), this.pp.getIsMobileClient("ANDROID") && !this.getState("PLAYING") && setTimeout(function() {
                t.setPlay()
            }, 500), this.setPlay()))
        },
        addListeners: function() {},
        removeListeners: function() {
            try {
                this.mediaElement.unbind(".projekktor" + this.pp.getId())
            } catch (t) {}
        },
        detachMedia: function() {},
        destroy: function(e) {
            this.removeListeners(), this.getState("IDLE") || this._setState("destroying"), this.detachMedia();
            try {
                t("#" + this.mediaElement.id).empty()
            } catch (i) {}
            if (!this.pp.getIsMobileClient()) {
                try {
                    t("#" + this.mediaElement.id).remove()
                } catch (i) {}
                try {
                    this.mediaElement.remove()
                } catch (i) {}
                this.pp.getMediaContainer().html("")
            }
            this.mediaElement = null, this.media.loadProgress = 0, this.media.playProgress = 0, this.media.frame = 0, this.media.position = 0, this.media.duration = 0
        },
        reInit: function() {
            this.flashVersion === !1 && this._isFF() && !this.getState("ERROR") && this.pp.getConfig("bypassFlashFFFix") !== !0 && (this.sendUpdate("FFreinit"), this.removeListeners(), this.displayItem(!this.getState("IDLE")))
        },
        applyCommand: function(t, e) {
            switch (t) {
                case "quality":
                    this.setQuality(e);
                    break;
                case "error":
                    this._setState("error"), this.setTestcard(e);
                    break;
                case "play":
                    if (this.getState("ERROR")) break;
                    if (this.getState("IDLE")) {
                        this._setState("awakening");
                        break
                    }
                    this.setPlay();
                    break;
                case "pause":
                    if (this.getState("ERROR")) break;
                    this.setPause();
                    break;
                case "volume":
                    if (this.getState("ERROR")) break;
                    this.setVolume(e) || (this._volume = e, this.sendUpdate("volume", e));
                    break;
                case "stop":
                    this.setStop();
                    break;
                case "frame":
                    this.setFrame(e);
                    break;
                case "seek":
                    if (this.getState("ERROR")) break;
                    if (this.getSeekState("SEEKING")) break;
                    if (this.getState("IDLE")) break;
                    if (-1 == this.media.loadProgress) break;
                    this._setSeekState("seeking", e), this.setSeek(e);
                    break;
                case "fullscreen":
                    if (e == this._isFullscreen) break;
                    this._isFullscreen = e, this.sendUpdate("fullscreen", this._isFullscreen), this.reInit(), this.setFullscreen();
                    break;
                case "resize":
                    this.setResize(), this.sendUpdate("resize", e)
            }
        },
        setFrame: function(t) {
            var e = t / this.pp.getConfig("fps") + 1e-5;
            this.setSeek(e)
        },
        setSeek: function(t) {},
        setPlay: function() {},
        setPause: function() {},
        setStop: function() {
            this.detachMedia(), this._setState("stopped"), this.displayItem(!1)
        },
        setVolume: function(t) {},
        setFullscreen: function(t) {
            this.setResize()
        },
        setResize: function() {
            var t = this.pp.getMediaContainer();
            this.sendUpdate("scaled", {
                realWidth: this.media.videoWidth || null,
                realHeight: this.media.videoHeight || null,
                displayWidth: t.width(),
                displayHeight: t.height()
            })
        },
        setPosterLive: function() {},
        setQuality: function(t) {
            if (this._quality != t) {
                this._quality = t;
                try {
                    this.applySrc()
                } catch (e) {}
                this.qualityChangeListener()
            }
        },
        getQuality: function() {
            return this._quality
        },
        getVolume: function() {
            return null == this.mediaElement ? this._volume : this.mediaElement.prop("muted") === !0 ? 0 : this.mediaElement.prop("volume")
        },
        getLoadProgress: function() {
            return this.media.loadProgress || 0
        },
        getLoadPlaybackProgress: function() {
            return this.media.playProgress || 0
        },
        getPosition: function() {
            return this.media.position || 0
        },
        getFrame: function() {
            return this.media.frame || 0
        },
        getDuration: function() {
            return this.media.duration || 0
        },
        getMaxPosition: function() {
            return this.media.maxpos || 0
        },
        getPlaybackQuality: function() {
            return t.inArray(this._quality, this.media.qualities) > -1 ? this._quality : "default"
        },
        getInFullscreen: function() {
            return this.pp.getInFullscreen()
        },
        getKbPerSec: function() {
            return this._KbPerSec
        },
        getState: function(t) {
            var e = null == this._currentState ? "IDLE" : this._currentState;
            return null != t ? e == t.toUpperCase() : e
        },
        getBufferState: function(t) {
            var e = null == this._currentBufferState ? "NONE" : this._currentBufferState;
            return null != t ? e == t.toUpperCase() : e
        },
        getSeekState: function(t) {
            var e = null == this._currentSeekState ? "NONE" : this._currentSeekState;
            return null != t ? e == t.toUpperCase() : e
        },
        getSrc: function() {
            try {
                return this.mediaElement.get(0).currentSrc
            } catch (t) {}
            try {
                return this.media.file[0].src
            } catch (t) {}
            try {
                return this.getPoster()
            } catch (t) {}
            return null
        },
        getModelName: function() {
            return this.modelId || null
        },
        getHasGUI: function() {
            return this.hasGUI && !this._isPoster
        },
        getIsReady: function() {
            return this._displayReady
        },
        getPoster: function() {
            var t = "poster",
                e = null,
                i = this.pp.getConfig(t),
                n = "default",
                r = [];
            if ("object" != typeof i) return i;
            for (var s in i) i[s].quality && r.push(i[s].quality);
            n = this.pp.getAppropriateQuality(r);
            for (var a in i)(i[a].quality == n || "" == e || "default" == n) && (e = i[a].src);
            return e
        },
        getMediaElement: function() {
            return this.mediaElement || t("<video/>")
        },
        getMediaDimensions: function() {
            return {
                width: this.media.videoWidth || 0,
                height: this.media.videoHeight || 0
            }
        },
        getSource: function() {
            var e = [],
                i = this.media.offset || this.media.position || !1,
                n = this,
                r = "pseudo" == this.pp.getConfig("streamType") ? this.pp.getConfig("startParameter") : !1;
            return t.each(this.media.file || [], function() {
                if (n._quality != this.quality && null !== n._quality) return !0;
                if (!r || !i) return e.push(this), !0;
                var s = $p.utils.parseUri(this.src),
                    a = s.protocol + "://" + s.host + s.path,
                    o = [];
                return t.each(s.queryKey, function(t, e) {
                    t != r && o.push(t + "=" + e)
                }), a += o.length > 0 ? "?" + o.join("&") + "&" + r + "=" + i : "?" + r + "=" + i, this.src = a, e.push(this), !0
            }), 0 === e.length ? this.media.file : e
        },
        timeListener: function(t) {
            if (null != t) {
                var e = parseFloat((t.position || t.currentTime || this.media.position || 0).toFixed(2)),
                    i = parseFloat((t.duration || 0).toFixed(2));
                isNaN(i + e) || ((0 != i && i != this.media.duration && !this.isPseudoStream || this.isPseudoStream && 0 == this.media.duration) && (this.media.duration = i, this.sendUpdate("durationChange", i)), e != this.media.position && (this.isPseudoStream && Math.round(100 * e) / 100 == Math.round(100 * this.media.offset) / 100 ? this.media.position = this.media.offset : this.media.position = this.media.offset + e, this.media.maxpos = Math.max(this.media.maxpos || 0, this.media.position || 0), this.media.playProgress = parseFloat(this.media.position > 0 && this.media.duration > 0 ? 100 * this.media.position / this.media.duration : 0), this.media.frame = this.media.position * this.pp.getConfig("fps"), this.sendUpdate("time", this.media.position), this.loadProgressUpdate()))
            }
        },
        loadProgressUpdate: function() {
            var t = this.mediaElement.get(0),
                e = 0;
            0 !== this.media.duration && "object" == typeof t.buffered && (0 !== t.buffered.length || 0 !== t.seekable.length) && 100 != this.media.loadProgress && (e = t.seekable && t.seekable.length > 0 ? Math.round(100 * t.seekable.end(0) / this.media.duration) : Math.round(100 * t.buffered.end(t.buffered.length - 1)) / this.media.duration, this.media.loadProgress > e || (this.media.loadProgress = this.allowRandomSeek === !0 ? 100 : -1, this.media.loadProgress = this.media.loadProgress < 100 || void 0 === this.media.loadProgress ? e : 100, this.sendUpdate("progress", this.media.loadProgress)))
        },
        progressListener: function(t, e) {
            if (this.mediaElement instanceof jQuery && "object" == typeof this.mediaElement.get(0).buffered && this.mediaElement.get(0).buffered.length > 0) return void this.mediaElement.unbind("progress");
            null == this._bandWidthTimer && (this._bandWidthTimer = (new Date).getTime());
            var i = 0,
                n = 0;
            try {
                isNaN(e.loaded / e.total) ? e.originalEvent && !isNaN(e.originalEvent.loaded / e.originalEvent.total) && (i = e.originalEvent.loaded, n = e.originalEvent.total) : (i = e.loaded, n = e.total)
            } catch (r) {
                t && !isNaN(t.loaded / t.total) && (i = t.loaded, n = t.total)
            }
            var s = i > 0 && n > 0 ? 100 * i / n : 0;
            Math.round(s) > Math.round(this.media.loadProgress) && (this._KbPerSec = i / 1024 / (((new Date).getTime() - this._bandWidthTimer) / 1e3)), s = 100 !== this.media.loadProgress ? s : 100, s = this.allowRandomSeek === !0 ? 100 : 5 * Math.round(s / 5), this.media.loadProgress != s && (this.media.loadProgress = s, this.sendUpdate("progress", s)), this.media.loadProgress >= 100 && this.allowRandomSeek === !1 && this._setBufferState("full")
        },
        qualityChangeListener: function() {
            this.sendUpdate("qualityChange", this._quality)
        },
        endedListener: function(t) {
            null !== this.mediaElement && (this.media.maxpos <= 0 || "STARTING" != this.getState() && this._setState("completed"))
        },
        waitingListener: function(t) {
            this._setBufferState("empty")
        },
        canplayListener: function(t) {
            this._setBufferState("full")
        },
        canplaythroughListener: function(t) {
            this._setBufferState("full")
        },
        suspendListener: function(t) {
            this._setBufferState("full")
        },
        playingListener: function(t) {
            this._setState("playing")
        },
        startListener: function(t) {
            this.applyCommand("volume", this.pp.getConfig("volume")), this.isPseudoStream || this.setSeek(this.media.position || 0), this._setState("playing")
        },
        pauseListener: function(t) {
            this._setState("paused")
        },
        seekedListener: function(t) {
            this._setSeekState("SEEKED", this.media.position)
        },
        volumeListener: function(t) {
            this.sendUpdate("volume", this.getVolume())
        },
        flashReadyListener: function() {
            this._displayReady = !0
        },
        errorListener: function(t, e) {},
        metaDataListener: function(t) {
            try {
                this.media.videoWidth = t.videoWidth, this.media.videoHeight = t.videoHeight
            } catch (e) {}
            this._scaleVideo()
        },
        setTestcard: function(e, i) {
            var n = this.pp.getMediaContainer().html("").css({
                    width: "100%",
                    height: "100%"
                }),
                r = t.extend(this.pp.getConfig("messages"), this.pp.getConfig("msg")),
                s = null == r[e] ? 0 : e,
                a = void 0 !== i && "" !== i ? i : r[s];
            this.removeListeners(), this.detachMedia(), this.pp.getItemCount() > 1 && (a += " " + r[99]), a.length < 3 && (a = "ERROR"), 100 == s && (a = i), a = $p.utils.parseTemplate(a, t.extend({}, this.media, {
                title: this.pp.getConfig("title")
            })), this.mediaElement = t("<div/>").addClass(this.pp.getNS() + "testcard").attr("id", this.pp.getId() + "_testcard_media").html("<p>" + a + "</p>").appendTo(n), null != this.pp.getConfig("msg")[s] && this.mediaElement.addClass(this.pp.getNS() + "customtestcard")
        },
        applySrc: function() {},
        applyImage: function(e, i) {
            var n = t("<img/>").hide(),
                r = this;
            if ($p.utils.blockSelection(n), null == e || e === !1) return t("<span/>").attr({
                id: this.pp.getMediaId() + "_image"
            }).appendTo(i);
            n.html("").appendTo(i).attr({
                id: this.pp.getMediaId() + "_image",
                alt: this.pp.getConfig("title") || ""
            }).css({
                position: "absolute"
            }), n.error(function(e) {
                t(this).remove()
            }), n.load(function(t) {
                var e = t.currentTarget;
                n.data("od") || n.data("od", {
                    width: e.naturalWidth,
                    height: e.naturalHeight
                }), n.show(), $p.utils.stretch(r.pp.getConfig("imageScaling"), n, i.width(), i.height())
            }), n.attr("src", e);
            var s = function(t, e) {
                e.is(":visible") === !1 && r.pp.removeListener("fullscreen", arguments.callee);
                e.width(), e.height(), t.width(), t.height();
                if ($p.utils.stretch(r.pp.getConfig("imageScaling"), t, e.width(), e.height())) try {
                    r.sendUpdate("scaled", {
                        realWidth: t._originalDimensions.width,
                        realHeight: t._originalDimensions.height,
                        displayWidth: r.mediaElement.width(),
                        displayHeight: r.mediaElement.height()
                    })
                } catch (i) {}
                t.attr("src") != r.getPoster() && t.attr("src", r.getPoster())
            };
            return this.pp.addListener("fullscreen.poster", function() {
                s(n, i)
            }), this.pp.addListener("resize.poster", function() {
                s(n, i)
            }), n
        },
        createFlash: function(t, e, i) {
            this.mediaElement = $p.utils.embeddFlash(e.html(""), t, i, !0), this._waitforPlayer()
        },
        _waitforPlayer: function() {
            var e = this,
                i = 0;
            this._displayReady !== !0 && (this._setBufferState("empty"), function() {
                if (i > 6 && e._isFF()) {
                    i = 0;
                    var n = t(e.mediaElement).parent(),
                        r = t(e.mediaElement).clone();
                    n.html("").append(r), e.mediaElement = r
                }
                n = e.mediaElement;
                try {
                    if (t(n).attr("id").indexOf("testcard") > -1) return
                } catch (s) {
                    console.log(s)
                }
                i++;
                try {
                    void 0 === n ? setTimeout(arguments.callee, 200) : void 0 === n.get(0)[e.flashVerifyMethod] ? setTimeout(arguments.callee, 200) : (e._setBufferState("full"), e.flashReadyListener(), t("#" + t(e.mediaElement).attr("id") + "_cc").css({
                        width: "100%",
                        height: "100%"
                    }))
                } catch (s) {
                    setTimeout(arguments.callee, 200)
                }
            }())
        },
        _setState: function(t) {
            var e = this;
            t = t.toUpperCase(), this._currentState != t && "ERROR" != this._currentState && ("PAUSED" == this._currentState && "PLAYING" == t && (this.sendUpdate("resume", this.media), this._isPlaying = !0), "IDLE" != this._currentState && "STARTING" != this._currentState || "PLAYING" != t || (this.sendUpdate("start", this.media), this._isPlaying = !0), "PAUSED" == t && (this._isPlaying = !1), "ERROR" == t && (this.setPlay = this.setPause = function() {
                e.sendUpdate("start")
            }), this._currentState = t.toUpperCase(), this.sendUpdate("state", this._currentState))
        },
        _setBufferState: function(t) {
            this._currentBufferState != t.toUpperCase() && (this._currentBufferState = t.toUpperCase(), this.sendUpdate("buffer", this._currentBufferState))
        },
        _setSeekState: function(t, e) {
            this._currentSeekState != t.toUpperCase() && (this._currentSeekState = t.toUpperCase(), this.sendUpdate("seek", this._currentSeekState))
        },
        _scaleVideo: function(t) {
            var e = this.pp.getMediaContainer();
            if (!this.pp.getIsMobileClient()) try {
                var i = e.width(),
                    n = e.height(),
                    r = this.media.videoWidth,
                    s = this.media.videoHeight;
                $p.utils.stretch(this.pp.getConfig("videoScaling"), this.mediaElement, i, n, r, s) && this.sendUpdate("scaled", {
                    realWidth: r,
                    realHeight: s,
                    displayWidth: i,
                    displayHeight: n
                })
            } catch (a) {}
        },
        _isFF: function() {
            return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
        }
    }
}), jQuery(function(t) {
    $p.newModel({
        modelId: "NA",
        iLove: [{
            ext: "NaN",
            type: "none/none",
            platform: "browser"
        }],
        hasGUI: !0,
        applyMedia: function(t) {
            var e = this;
            t.html("");
            var i = function(t, i) {
                i.getState("AWAKENING") || (e.pp.removeListener("mousedown", arguments.callee), e._setState("completed"))
            };
            this.displayReady(), this.pp.getConfig("enableTestcard") && !this.pp.getIsMobileClient() ? (this.pp.addListener("mousedown", i), this._setState("error"), this.setTestcard(null != this.media.file[0].src && 7 === this.media.errorCode ? 5 : this.media.errorCode)) : (this.applyCommand("stop"), window.location.href = this.media.file[0].src)
        },
        detachMedia: function() {
            this.pp.removeListener("leftclick", this.mouseClick)
        }
    })
}), jQuery(function(t) {
    $p.newModel({
        modelId: "VIDEO",
        androidVersion: "2",
        iosVersion: "3",
        nativeVersion: "1",
        iLove: [{
            ext: "mp4",
            type: "video/mp4",
            platform: ["ios", "android", "native"],
            streamType: ["http", "pseudo", "httpVideo"],
            fixed: "maybe"
        }, {
            ext: "m4v",
            type: "video/mp4",
            platform: ["ios", "android", "native"],
            streamType: ["http", "pseudo", "httpVideo"],
            fixed: "maybe"
        }, {
            ext: "ogv",
            type: "video/ogg",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }, {
            ext: "webm",
            type: "video/webm",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }, {
            ext: "ogg",
            type: "video/ogg",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }, {
            ext: "anx",
            type: "video/ogg",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }],
        _eventMap: {
            pause: "pauseListener",
            play: "playingListener",
            volumechange: "volumeListener",
            progress: "progressListener",
            timeupdate: "timeListener",
            ended: "_ended",
            waiting: "waitingListener",
            canplaythrough: "canplayListener",
            canplay: "canplayListener",
            error: "errorListener",
            suspend: "suspendListener",
            seeked: "seekedListener",
            loadedmetadata: "metaDataListener",
            loadstart: null
        },
        isGingerbread: !1,
        isAndroid: !1,
        allowRandomSeek: !1,
        videoWidth: 0,
        videoHeight: 0,
        wasPersistent: !0,
        isPseudoStream: !1,
        init: function() {
            var t = navigator.userAgent;
            t.indexOf("Android") >= 0 && (this.isAndroid = !0, parseFloat(t.slice(t.indexOf("Android") + 8)) < 3 && (this.isGingerbread = !0)), this.ready()
        },
        applyMedia: function(e) {
            0 === t("#" + this.pp.getMediaId() + "_html").length && (this.wasPersistent = !1, e.html("").append(t("<video/>").attr({
                id: this.pp.getMediaId() + "_html",
                poster: $p.utils.imageDummy(),
                loop: !1,
                autoplay: !1,
                preload: "none",
                "x-webkit-airplay": "allow"
            }).prop({
                controls: !1,
                volume: this.getVolume()
            }).css({
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0
            }))), this.mediaElement = t("#" + this.pp.getMediaId() + "_html"), this.applySrc()
        },
        applySrc: function() {
            var e = this,
                i = this.getSource(),
                n = e.getState("AWAKENING");
            this.mediaElement.attr("src", i[0].src), this.isGingerbread || this.mediaElement.attr("type", i[0].originalType), this.mediaElement.bind("mousedown.projekktorqs" + this.pp.getId(), this.disableDefaultVideoElementActions), this.mediaElement.bind("click.projekktorqs" + this.pp.getId(), this.disableDefaultVideoElementActions);
            var r = function() {
                return e.mediaElement.unbind("loadstart.projekktorqs" + e.pp.getId()), e.mediaElement.unbind("loadeddata.projekktorqs" + e.pp.getId()), e.mediaElement.unbind("canplay.projekktorqs" + e.pp.getId()), e.addListeners("error"), e.addListeners("play"), e.addListeners("canplay"), e.mediaElement = t("#" + e.pp.getMediaId() + "_html"), n ? void e.displayReady() : e.getSeekState("SEEKING") ? (e._isPlaying && e.setPlay(), void e.seekedListener()) : (e.isPseudoStream || e.setSeek(e.media.position || 0), void(e._isPlaying && e.setPlay()))
            };
            this.mediaElement.bind("loadstart.projekktorqs" + this.pp.getId(), r), this.mediaElement.bind("loadeddata.projekktorqs" + this.pp.getId(), r), this.mediaElement.bind("canplay.projekktorqs" + this.pp.getId(), r), this.mediaElement[0].load(), this.isGingerbread && r()
        },
        detachMedia: function() {
            try {
                this.removeListener("error"), this.removeListener("play"), this.removeListener("canplay"), this.mediaElement.unbind("mousedown.projekktorqs" + this.pp.getId()), this.mediaElement.unbind("click.projekktorqs" + this.pp.getId()), this.mediaElement[0].pause(), this.mediaElement.attr("src", ""), this.mediaElement[0].load()
            } catch (t) {}
        },
        addListeners: function(e, i) {
            if (null != this.mediaElement) {
                var n = null != i ? ".projekktor" + i + this.pp.getId() : ".projekktor" + this.pp.getId(),
                    r = this,
                    s = null == e ? "*" : e;
                t.each(this._eventMap, function(t, e) {
                    t != s && "*" != s || null == e || r.mediaElement.bind(t + n, function(t) {
                        r[e](this, t)
                    })
                })
            }
        },
        removeListener: function(e, i) {
            if (null != this.mediaElement) {
                var n = null != i ? ".projekktor" + i + this.pp.getId() : ".projekktor" + this.pp.getId(),
                    r = this;
                t.each(this._eventMap, function(t, i) {
                    t == e && r.mediaElement.unbind(t + n)
                })
            }
        },
        _ended: function() {
            var t = this.mediaElement[0].duration,
                e = Math.round(this.media.position) === Math.round(t),
                i = t - this.media.maxpos < 2 && 0 === this.media.position || !1;
            e || i || this.isPseudoStream ? this.endedListener(this) : this.pauseListener(this)
        },
        playingListener: function(t) {
            var e = this;
            this.isGingerbread || ! function() {
                try {
                    if (0 === e.getDuration()) return "" !== e.mediaElement.get(0).currentSrc && e.mediaElement.get(0).networkState == e.mediaElement.get(0).NETWORK_NO_SOURCE ? void e.sendUpdate("error", 80) : void setTimeout(arguments.callee, 500)
                } catch (t) {}
            }(), this._setState("playing")
        },
        errorListener: function(t, e) {
            try {
                switch (e.target.error.code) {
                    case e.target.error.MEDIA_ERR_ABORTED:
                        this.sendUpdate("error", 1);
                        break;
                    case e.target.error.MEDIA_ERR_NETWORK:
                        this.sendUpdate("error", 2);
                        break;
                    case e.target.error.MEDIA_ERR_DECODE:
                        this.sendUpdate("error", 3);
                        break;
                    case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        this.sendUpdate("error", 4);
                        break;
                    default:
                        this.sendUpdate("error", 5)
                }
            } catch (i) {}
        },
        canplayListener: function(e) {
            var i = this;
            "pseudo" == this.pp.getConfig("streamType") && t.each(this.media.file, function() {
                return this.src.indexOf(i.mediaElement[0].currentSrc) > -1 && "video/mp4" == this.type ? (i.isPseudoStream = !0, i.allowRandomSeek = !0, i.media.loadProgress = 100, !1) : !0
            }), this._setBufferState("full")
        },
        disableDefaultVideoElementActions: function(t) {
            t.preventDefault(), t.stopPropagation()
        },
        setPlay: function() {
            try {
                this.mediaElement[0].play()
            } catch (t) {}
        },
        setPause: function() {
            try {
                this.mediaElement[0].pause()
            } catch (t) {}
        },
        setVolume: function(t) {
            this._volume = t;
            try {
                this.mediaElement.prop("volume", t)
            } catch (e) {
                return !1
            }
            return t
        },
        setSeek: function(t) {
            var e = this;
            return this.isPseudoStream ? (this.media.position = 0, this.media.offset = t, void this.applySrc()) : void
            function() {
                try {
                    e.mediaElement[0].currentTime = t, e.timeListener({
                        position: t
                    })
                } catch (i) {
                    null != e.mediaElement && setTimeout(arguments.callee, 100)
                }
            }()
        },
        setFullscreen: function(t) {
            "audio" != this.element && this._scaleVideo()
        },
        setResize: function() {
            "audio" != this.element && this._scaleVideo(!1)
        }
    }), $p.newModel({
        modelId: "AUDIO",
        iLove: [{
            ext: "ogg",
            type: "audio/ogg",
            platform: "native",
            streamType: ["http", "httpAudio"]
        }, {
            ext: "oga",
            type: "audio/ogg",
            platform: "native",
            streamType: ["http", "httpAudio"]
        }, {
            ext: "mp3",
            type: "audio/mp3",
            platform: ["ios", "android", "native"],
            streamType: ["http", "httpAudio"]
        }, {
            ext: "mp3",
            type: "audio/mpeg",
            platform: ["ios", "android", "native"],
            streamType: ["http", "httpAudio"]
        }],
        imageElement: {},
        applyMedia: function(e) {
            $p.utils.blockSelection(e), this.imageElement = this.applyImage(this.getPoster("cover") || this.getPoster("poster"), e), this.imageElement.css({
                border: "0px"
            }), 0 === t("#" + this.pp.getMediaId() + "_html").length && (this.wasPersistent = !1, e.html("").append(t(this.isGingerbread ? "<video/>" : "<audio/>").attr({
                id: this.pp.getMediaId() + "_html",
                poster: $p.utils.imageDummy(),
                loop: !1,
                autoplay: !1,
                preload: "none",
                "x-webkit-airplay": "allow"
            }).prop({
                controls: !1,
                volume: this.getVolume()
            }).css({
                width: "1px",
                height: "1px",
                position: "absolute",
                top: 0,
                left: 0
            }))), this.mediaElement = t("#" + this.pp.getMediaId() + "_html"), this.applySrc()
        },
        setPosterLive: function() {
            if (this.imageElement.parent) {
                var e = this.imageElement.parent(),
                    i = this;
                if (this.imageElement.attr("src") == this.getPoster("cover") || this.getPoster("poster")) return;
                this.imageElement.fadeOut("fast", function() {
                    t(this).remove(), i.imageElement = i.applyImage(i.getPoster("cover") || i.getPoster("poster"), e)
                })
            }
        }
    }, "VIDEO")
}), jQuery(function(t) {
    $p.newModel({
        modelId: "VIDEOHLS",
        androidVersion: 4,
        iosVersion: 3,
        iLove: [{
            ext: "m3u8",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u8",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u8",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }]
    }, "VIDEO"), $p.newModel({
        modelId: "AUDIOHLS",
        androidVersion: 4,
        iosVersion: 3,
        iLove: [{
            ext: "m3u8",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u8",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u8",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u8",
            type: "audio/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "audio/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }]
    }, "AUDIO")
}), jQuery(function(t) {
    $p.newModel({
        modelId: "VIDEOVLC",
        vlcVersion: "2.0.6.0",
        iLove: [],
        _eventMap: {
            MediaPlayerPaused: "pauseListener",
            MediaPlayerPlaying: "playingListener",
            MediaPlayerTimeChanged: "_timeListener",
            MediaPlayerEndReached: "endedListener",
            MediaPlayerBuffering: "waitingListener",
            MediaPlayerEncounteredError: "errorListener",
            MediaPlayerSeekableChanged: "seekableListener"
        },
        allowRandomSeek: !1,
        videoWidth: 0,
        videoHeight: 0,
        isPseudoStream: !1,
        setiLove: function() {
            var e = this;
            if (navigator.plugins && navigator.plugins.length > 0)
                for (var i = 0; i < navigator.plugins.length; ++i)
                    if (navigator.plugins[i].name.indexOf("VLC") > -1) {
                        for (var n = 0; n < navigator.plugins[i].length; n++) {
                            var r = navigator.plugins[i][n];
                            null != r.suffixes && null != r.type && t.each(r.suffixes.split(","), function(t, i) {
                                e.iLove.push({
                                    ext: i,
                                    type: r.type.replace(/x-/, ""),
                                    platform: ["vlc"],
                                    streamType: ["rtsp", "http", "pseudo", "httpVideo", "multipart"]
                                })
                            })
                        }
                        break
                    }
        },
        applyMedia: function(e) {
            e.html("").append(t("<embed/>").attr({
                id: this.pp.getMediaId() + "_vlc",
                type: "application/x-vlc-plugin",
                pluginspage: "http://www.videolan.org",
                width: "100%",
                height: "100%",
                events: !0,
                controls: !1,
                toolbar: !1,
                windowless: !0,
                allowfullscreen: !0,
                autoplay: !1
            }).css({
                position: "absolute",
                top: 0,
                left: 0
            })), this.mediaElement = t("#" + this.pp.getMediaId() + "_vlc"), this.applySrc()
        },
        applySrc: function() {
            var t = this,
                e = this.getSource();
            this.mediaElement.get(0).playlist.add(e[0].src, "item 1"), this.getState("PLAYING") ? (this.setPlay(), t.isPseudoStream !== !0 && this.setSeek(this.media.position || 0)) : this.displayReady()
        },
        detachMedia: function() {
            try {
                this.mediaElement.get(0).playlist.stop(), this.mediaElement.html("")
            } catch (t) {}
        },
        addListeners: function() {
            var e = this;
            t.each(this._eventMap, function(t, i) {
                try {
                    e.mediaElement.get(0).attachEvent ? e.mediaElement.get(0).attachEvent(t, function(t) {
                        e[i](this, t)
                    }) : e.mediaElement.get(0).addEventListener ? e.mediaElement.get(0).addEventListener(t, function(t) {
                        e[i](this, t)
                    }, !1) : e.mediaElement.get(0)["on" + t] = function(t) {
                        e[i](this, t)
                    }
                } catch (n) {}
            })
        },
        removeListener: function(e, i) {
            if (null != this.mediaElement) {
                var n = null != i ? ".projekktor" + i + this.pp.getId() : ".projekktor" + this.pp.getId(),
                    r = this;
                t.each(this._eventMap, function(t, i) {
                    t == e && r.mediaElement.unbind(t + n)
                })
            }
        },
        _timeListener: function(t) {
            this.timeListener({
                position: this.mediaElement.get(0).input.time / 1e3,
                duration: this.mediaElement.get(0).input.length / 1e3
            })
        },
        seekableListener: function() {
            this.allowRandomSeek = !0, this.media.loadProgress = 100
        },
        errorListener: function(t, e) {
            try {
                switch (event.target.error.code) {
                    case event.target.error.MEDIA_ERR_ABORTED:
                        this.sendUpdate("error", 1);
                        break;
                    case event.target.error.MEDIA_ERR_NETWORK:
                        this.sendUpdate("error", 2);
                        break;
                    case event.target.error.MEDIA_ERR_DECODE:
                        this.sendUpdate("error", 3);
                        break;
                    case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        this.sendUpdate("error", 4);
                        break;
                    default:
                        this.sendUpdate("error", 5)
                }
            } catch (i) {}
        },
        setPlay: function() {
            this.mediaElement.get(0).playlist.play()
        },
        setPause: function() {
            this.mediaElement.get(0).playlist.pause()
        },
        setVolume: function(t) {
            this._volume = t, this.mediaElement.get(0).audio.volume = 100 * t, this.volumeListener(t)
        },
        setSeek: function(t) {
            this.mediaElement.get(0).input.position = t / this.media.duration, this._setSeekState("seeked", t)
        },
        setFullscreen: function() {
            pos = this.mediaElement.get(0).input.position, this.mediaElement.get(0).playlist.stop(), this.setPlay(), this.mediaElement.get(0).input.position = pos, this.getState("PAUSED") && this.setPause()
        },
        setResize: function() {
            this._scaleVideo(!1)
        }
    })
}), jQuery(function(t) {
    $p.newModel({
        modelId: "PLAYLIST",
        iLove: [{
            ext: "json",
            type: "text/json",
            platform: "browser"
        }, {
            ext: "jsonp",
            type: "text/jsonp",
            platform: "browser"
        }, {
            ext: "xml",
            type: "text/xml",
            platform: "browser"
        }, {
            ext: "json",
            type: "application/json",
            platform: "browser"
        }, {
            ext: "jsonp",
            type: "application/jsonp",
            platform: "browser"
        }, {
            ext: "xml",
            type: "application/xml",
            platform: "browser"
        }],
        applyMedia: function(t) {
            this.displayReady()
        },
        setPlay: function() {
            this.sendUpdate("playlist", this.media)
        }
    })
}), jQuery(function(t) {
    $p.newModel({
        browserVersion: "1",
        modelId: "IMAGE",
        iLove: [{
            ext: "jpg",
            type: "image/jpeg",
            platform: "browser",
            streamType: ["http"]
        }, {
            ext: "gif",
            type: "image/gif",
            platform: "browser",
            streamType: ["http"]
        }, {
            ext: "png",
            type: "image/png",
            platform: "browser",
            streamType: ["http"]
        }],
        allowRandomSeek: !0,
        _position: 0,
        _duration: 0,
        applyMedia: function(t) {
            this.mediaElement = this.applyImage(this.media.file[0].src, t.html("")), this._duration = this.pp.getConfig("duration") || 1, this._position = -1, this.displayReady(), this._position = -.5
        },
        setPlay: function() {
            var t = this;
            return this._setBufferState("full"), this.progressListener(100), this.playingListener(), 0 == this._duration ? void t._setState("completed") : void
            function() {
                return t._position >= t._duration ? void t._setState("completed") : void(t.getState("PLAYING") && (t.timeListener({
                    duration: t._duration,
                    position: t._position
                }), setTimeout(arguments.callee, 200), t._position += .2))
            }()
        },
        detachMedia: function() {
            this.mediaElement.remove()
        },
        setPause: function() {
            this.pauseListener()
        },
        setSeek: function(t) {
            t < this._duration && (this._position = t, this.seekedListener())
        }
    }), $p.newModel({
        modelId: "HTML",
        iLove: [{
            ext: "html",
            type: "text/html",
            platform: "browser",
            streamType: ["http"]
        }],
        applyMedia: function(e) {
            var i = this;
            this.mediaElement = t(document.createElement("iframe")).attr({
                id: this.pp.getMediaId() + "_iframe",
                name: this.pp.getMediaId() + "_iframe",
                src: this.media.file[0].src,
                scrolling: "no",
                frameborder: "0",
                width: "100%",
                height: "100%"
            }).css({
                overflow: "hidden",
                border: "0px",
                width: "100%",
                height: "100%"
            }).appendTo(e.html("")), this.mediaElement.load(function(t) {
                i.success()
            }), this.mediaElement.error(function(t) {
                i.remove()
            }), this._duration = this.pp.getConfig("duration")
        },
        success: function() {
            this.displayReady()
        },
        remove: function() {
            this.mediaElement.remove()
        }
    }, "IMAGE")
}), jQuery(function(t) {
    $p.newModel({
        modelId: "OSMFVIDEO",
        replace: "VIDEOFLASH",
        flashVersion: "10.2",
        flashVerifyMethod: "addEventListener",
        iLove: [{
            ext: "flv",
            type: "video/flv",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "mp4",
            type: "video/mp4",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "f4v",
            type: "video/mp4",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "mov",
            type: "video/quicktime",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "m4v",
            type: "video/mp4",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "f4m",
            type: "application/f4m+xml",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "m3u8",
            type: "application/mpegURL",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "m3u8",
            type: "application/x-mpegURL",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "m3u8",
            type: "application/vnd.apple.mpegurl",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "manifest",
            type: "application/vnd.ms-ss",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }],
        hasGUI: !1,
        allowRandomSeek: !1,
        isPseudoStream: !1,
        streamType: "http",
        availableQualities: {},
        _hardwareAcceleration: !0,
        _isStream: !1,
        _isDVR: !1,
        _isMuted: !1,
        _isStarted: !1,
        _qualitySwitching: !1,
        _isDynamicStream: !1,
        _volume: 0,
        _eventMap: {
            mediaPlayerCapabilityChange: "OSMF_PlayerCapabilityChange",
            durationChange: "OSMF_durationChange",
            currentTimeChange: "OSMF_currentTimeChange",
            loadStateChange: "OSMF_loadStateChange",
            bufferingChange: "OSMF_bufferingChange",
            bytesLoadedChange: "OSMF_bytesLoadedChange",
            playStateChange: "OSMF_playerStateChange",
            seekingChange: "OSMF_seekingChange",
            canPlayChange: "OSMF_seekingChange",
            isRecordingChange: "OSMF_isRecordingChange",
            complete: "endedListener",
            volumeChange: "volumeListener",
            mediaError: "errorListener",
            MBRItemChange: "OSMF_universal",
            isDynamicStreamChange: "OSMF_updateDynamicStream",
            autoSwitchChange: "OSMF_updateDynamicStream",
            switchingChange: "OSMF_updateDynamicStream"
        },
        applyMedia: function(e) {
            var i = this;
            window["projekktorOSMFReady" + this.pp.getId()] = function() {
                projekktor(i.pp.getId()).playerModel._OSMFListener(arguments)
            };
            var n = {
                id: this.pp.getMediaId() + "_flash",
                name: this.pp.getMediaId() + "_flash",
                src: this.pp.getConfig("playerFlashMP4"),
                width: "100%",
                height: "100%",
                allowScriptAccess: "always",
                quality: "high",
                menu: !1,
                allowFullScreen: "true",
                wmode: $p.utils.ieVersion() ? "transparent" : "opaque",
                SeamlessTabbing: "false",
                bgcolor: "#000000",
                FlashVars: t.extend({
                    enableStageVideo: this._hardwareAcceleration,
                    disableHardwareAcceleration: !this._hardwareAcceleration,
                    javascriptCallbackFunction: "window.projekktorOSMFReady" + this.pp.getId()
                }, this.pp.getConfig("OSMFVars"))
            };
            this.createFlash(n, e)
        },
        flashReadyListener: function() {
            this.applySrc(), this.displayReady()
        },
        removeListeners: function() {},
        loadProgressUpdate: function() {},
        addListeners: function() {},
        applySrc: function() {
            var t = this,
                e = this.getSource();
            this.mediaElement.get(0).setMediaResourceURL(e[0].src), this.streamType = e[0].streamType || this.pp.getConfig("streamType") || "http", this.getState("PLAYING") && (this.setPlay(), t.isPseudoStream !== !0 && this.media.position > 0 && this.setSeek(this.media.position)), "pseudo" == this.streamType && (this.isPseudoStream = !0, this.allowRandomSeek = !0, this.media.loadProgress = 100), this.streamType.indexOf("live") > -1 && (this.allowRandomSeek = !0, this.media.loadProgress = 100)
        },
        _OSMFListener: function() {
            var e = arguments[0][1],
                i = arguments[0][2],
                n = this;
            switch (this.mediaElement = t("#" + this.pp.getMediaId() + "_flash"), e) {
                case "onJavaScriptBridgeCreated":
                    null !== this.mediaElement && this.getState("AWAKENING") && (t.each(this._eventMap, function(t, e) {
                        n.mediaElement.get(0).addEventListener(t, "projekktor('" + n.pp.getId() + "').playerModel." + e)
                    }), this.flashReadyListener());
                    break;
                case "loadedmetadata":
                    this.metaDataListener(i);
                    break;
                case "progress":
            }
        },
        OSMF_universal: function() {},
        OSMF_isRecordingChange: function() {},
        OSMF_PlayerCapabilityChange: function(t) {},
        OSMF_bytesLoadedChange: function() {
            var t = this.mediaElement.get(0),
                e = 0;
            e = 100 * t.getBytesLoaded() / t.getBytesTotal(), this.media.loadProgress > e || (this.media.loadProgress = this.allowRandomSeek === !0 ? 100 : -1, this.media.loadProgress = this.media.loadProgress < 100 || void 0 === this.media.loadProgress ? e : 100, this.sendUpdate("progress", this.media.loadProgress))
        },
        OSMF_durationChange: function(t) {
            isNaN(t) || (this.timeListener({
                position: this.media.position,
                duration: t || 0
            }), this.seekedListener())
        },
        OSMF_currentTimeChange: function(t) {
            this._isDVR && this.sendUpdate("isLive", t + 20 >= this.media.duration), this.timeListener({
                position: t,
                duration: this.media.duration || 0
            })
        },
        OSMF_seekingChange: function(t) {
            this.seekedListener()
        },
        OSMF_bufferingChange: function(t) {
            t === !0 ? this.waitingListener() : this.canplayListener()
        },
        OSMF_loadStateChange: function(t) {
            switch (t) {
                case "loading":
                    this.waitListener();
                    break;
                case "ready":
                    this.getState("awakening") && this.displayReady(), this.getState("starting") && this.setPlay(), this.mediaElement.get(0).getStreamType().indexOf("dvr") > -1 && (this.allowRandomSeek = !0, this.media.loadProgress = 100);
                    break;
                case "loadError":
            }
        },
        OSMF_playerStateChange: function(t) {
            var e = this;
            switch (this._isDVR || "dvr" != this.mediaElement.get(0).getStreamType() || (this._isDVR = !0, this.sendUpdate("streamTypeChange", "dvr")), t) {
                case "playing":
                    this.playingListener();
                    break;
                case "paused":
                    this.pauseListener(), this._isDVR && ! function() {
                        e.getState("PAUSED") && e.media.position >= .5 && (e.timeListener({
                            position: e.media.position - .5,
                            duration: e.media.duration || 0
                        }), setTimeout(arguments.callee, 500))
                    }();
                    break;
                case "stopped":
                    this.getSeekState("SEEKING") || this.endedListener()
            }
        },
        OSMF_updateDynamicStream: function() {
            var e = this.mediaElement.get(0).getStreamItems(),
                i = "",
                n = [];
            for (var r in e) e.hasOwnProperty(r) && void 0 !== e[r].bitrate && (i = e[r].width + "x" + e[r].height, this.pp.getConfig("OSMFQualityMap") && this.pp.getConfig("OSMFQualityMap")[i] && (this.availableQualities[this.pp.getConfig("OSMFQualityMap")[i]] = r));
            $p.utils.log(e), t.each(this.availableQualities, function(t, e) {
                n.push(t)
            }), n.push("auto"), this._isDynamicStream = !0, this.sendUpdate("availableQualitiesChange", n)
        },
        switchDynamicStreamIndex: function(t) {
            -1 == t ? this.mediaElement.get(0).setAutoDynamicStreamSwitch(!0) : (this.mediaElement.get(0).getAutoDynamicStreamSwitch() && this.mediaElement.get(0).setAutoDynamicStreamSwitch(!1), this.mediaElement.get(0).switchDynamicStreamIndex(t))
        },
        errorListener: function() {
            switch (arguments[0]) {
                case 15:
                    this.sendUpdate("error", 5);
                    break;
                case 80:
                    this.sendUpdate("error", 80)
            }
        },
        detachMedia: function() {
            try {
                this.mediaElement.get(0).remove()
            } catch (t) {}
        },
        volumeListener: function(t) {
            this._volume = t
        },
        endedListener: function(t) {
            null !== this.mediaElement && (this.media.maxpos <= 0 || "STARTING" != this.getState() && this._qualitySwitching !== !0 && this._setState("completed"))
        },
        setSeek: function(t) {
            return this.isPseudoStream ? (this._setSeekState("seeking"), this.media.offset = t, void this.applySrc()) : (-1 == t && (t = this.getDuration()), void this.mediaElement.get(0).seek(t))
        },
        setVolume: function(t) {
            null === this.mediaElement ? this.volumeListener(t) : this.mediaElement.get(0).setVolume(t)
        },
        setPause: function(t) {
            this.mediaElement.get(0).pause()
        },
        setPlay: function(t) {
            this.mediaElement.get(0).play2()
        },
        setQuality: function(t) {
            if (this._quality != t) {
                if (this._quality = t, this._isDynamicStream === !0) return void this.switchDynamicStreamIndex("auto" == t ? -1 : this.availableQualities[t]);
                this._qualitySwitching = !0, this.applySrc(), this._qualitySwitching = !1, this.qualityChangeListener()
            }
        },
        getVolume: function() {
            return this._isMuted === !0 ? 0 : null === this.mediaElement ? this.media.volume : this._volume
        },
        getSrc: function() {
            try {
                return this.mediaElement.get(0).getCurrentSrc()
            } catch (t) {
                return null
            }
        },
        getQuality: function() {
            return this._quality
        },
        _scaleVideo: function() {}
    }), $p.newModel({
        modelId: "OSMFVIDEONA",
        iLove: [{
            ext: "flv",
            type: "video/flv",
            platform: "flashna",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "mp4",
            type: "video/mp4",
            platform: "flashna",
            streamType: ["*"]
        }, {
            ext: "f4v",
            type: "video/mp4",
            platform: "flashna",
            streamType: ["*"]
        }, {
            ext: "mov",
            type: "video/quicktime",
            platform: "flashna",
            streamType: ["*"]
        }, {
            ext: "m4v",
            type: "video/mp4",
            platform: "flashna",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "f4m",
            type: "application/f4m+xml",
            platform: "flashna",
            fixed: !0,
            streamType: ["*"]
        }],
        _hardwareAcceleration: !1
    }, "OSMFVIDEO"), $p.newModel({
        modelId: "OSMFAUDIO",
        replace: "AUDIOFLASH",
        hasGUI: !1,
        iLove: [{
            ext: "mp3",
            type: "audio/mp3",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "m4a",
            type: "audio/mp4",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "m4a",
            type: "audio/mpeg",
            platform: "flash",
            streamType: ["*"]
        }],
        applyMedia: function(e) {
            var i = this;
            $p.utils.blockSelection(e), this.imageElement = this.applyImage(this.getPoster("cover") || this.getPoster("poster"), e);
            var n = t("#" + this.pp.getMediaId() + "_flash_container");
            0 === n.length && (n = t(document.createElement("div")).css({
                width: "1px",
                height: "1px"
            }).attr("id", this.pp.getMediaId() + "_flash_container").prependTo(this.pp.getDC())), window["projekktorOSMFReady" + this.pp.getId()] = function() {
                projekktor(i.pp.getId()).playerModel._OSMFListener(arguments)
            };
            var r = {
                id: this.pp.getMediaId() + "_flash",
                name: this.pp.getMediaId() + "_flash",
                src: this.pp.getConfig("playerFlashMP4"),
                width: "100%",
                height: "100%",
                allowScriptAccess: "always",
                quality: "height",
                menu: !1,
                allowFullScreen: "true",
                wmode: "opaque",
                seamlesstabbing: "false",
                bgcolor: "#ccc",
                FlashVars: t.extend({
                    javascriptCallbackFunction: "window.projekktorOSMFReady" + this.pp.getId()
                }, this.pp.getConfig("OSMFVars"))
            };
            this.createFlash(r, n, !1)
        }
    }, "OSMFVIDEO")
}), jQuery(function(t) {
    $p.newModel({
        modelId: "YTVIDEO",
        iLove: [{
            ext: "youtube.com",
            type: "video/youtube",
            platform: "flash",
            fixed: "maybe"
        }],
        allowRandomSeek: !0,
        useIframeAPI: !0,
        flashVerifyMethod: "cueVideoById",
        _ffFix: !1,
        _updateTimer: null,
        init: function(e) {
            var i = this;
            if (this.useIframeAPI = this.pp.getConfig("useYTIframeAPI") || this.pp.getIsMobileClient(), this.hasGUI = this.pp.getIsMobileClient(), !this.useIframeAPI) return this.requiresFlash = 8, void this.ready();
            this.pp.getId();
            window.ProjekktorYoutubePlayerAPIReady !== !0 ? (t.getScript("http://www.youtube.com/player_api"), function() {
                try {
                    if (1 == window.ProjekktorYoutubePlayerAPIReady) return void i.ready();
                    setTimeout(arguments.callee, 50)
                } catch (t) {
                    setTimeout(arguments.callee, 50)
                }
            }()) : this.ready(), window.onYouTubePlayerAPIReady = function() {
                window.ProjekktorYoutubePlayerAPIReady = !0
            }
        },
        applyMedia: function(e) {
            this._setBufferState("empty");
            var i = this,
                n = "YTAUDIO" == this.modelId ? 1 : "100%",
                r = "YTAUDIO" == this.modelId ? 1 : "100%";
            if ("YTAUDIO" == this.modelId && (this.imageElement = this.applyImage(this.pp.getPoster(), e)), this.useIframeAPI) {
                e.html("").append(t("<div/>").attr("id", this.pp.getId() + "_media_youtube").css({
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0
                }));
                var s = t("<div/>").attr("id", this.pp.getId() + "_media_youtube_cc").css({
                    width: "100%",
                    height: "100%",
                    backgroundColor: $p.utils.ieVersion() ? "#000" : "transparent",
                    filter: "alpha(opacity = 0.1)",
                    position: "absolute",
                    top: 0,
                    left: 0
                });
                e.append(s), this.mediaElement = new YT.Player(this.pp.getId() + "_media_youtube", {
                    width: this.pp.getIsMobileClient() ? this.pp.config._width : n,
                    height: this.pp.getIsMobileClient() ? this.pp.config._height : r,
                    playerVars: {
                        autoplay: 0,
                        disablekb: 0,
                        version: 3,
                        start: 0,
                        controls: this.pp.getIsMobileClient() ? 1 : 0,
                        showinfo: 0,
                        enablejsapi: 1,
                        start: this.media.position || 0,
                        origin: window.location.href,
                        wmode: "transparent",
                        modestbranding: 1
                    },
                    videoId: this.youtubeGetId(),
                    events: {
                        onReady: function(t) {
                            i.onReady(t)
                        },
                        onStateChange: function(t) {
                            i.stateChange(t)
                        },
                        onError: function(t) {
                            i.errorListener(t)
                        }
                    }
                })
            } else {
                var a = {
                    id: this.pp.getId() + "_media_youtube",
                    name: this.pp.getId() + "_media_youtube",
                    src: "http://www.youtube.com/apiplayer",
                    width: this.pp.getIsMobileClient() ? this.pp.config._width : n,
                    height: this.pp.getIsMobileClient() ? this.pp.config._height : r,
                    bgcolor: "#000000",
                    allowScriptAccess: "always",
                    wmode: "transparent",
                    FlashVars: {
                        enablejsapi: 1,
                        autoplay: 0,
                        version: 3,
                        modestbranding: 1,
                        showinfo: 0
                    }
                };
                this.createFlash(a, e)
            }
        },
        flashReadyListener: function() {
            this._youtubeResizeFix(), this.addListeners(), this.mediaElement.cueVideoById(this.youtubeGetId(), this.media.position || 0, this._playbackQuality)
        },
        _youtubeResizeFix: function() {
            this.applyCommand("volume", this.pp.getConfig("volume"))
        },
        addListeners: function() {
            this.mediaElement.addEventListener("onStateChange", "projekktor('" + this.pp.getId() + "').playerModel.stateChange"), this.mediaElement.addEventListener("onError", "projekktor('" + this.pp.getId() + "').playerModel.errorListener"), this.mediaElement.addEventListener("onPlaybackQualityChange", "projekktor('" + this.pp.getId() + "').playerModel.qualityChangeListener")
        },
        setSeek: function(t) {
            try {
                this.mediaElement.seekTo(t, !0), this.getState("PLAYING") || this.timeListener({
                    position: this.mediaElement.getCurrentTime(),
                    duration: this.mediaElement.getDuration()
                })
            } catch (e) {}
        },
        setVolume: function(t) {
            try {
                this.mediaElement.setVolume(100 * t)
            } catch (e) {}
        },
        setPause: function(t) {
            try {
                this.mediaElement.pauseVideo()
            } catch (e) {}
        },
        setPlay: function(t) {
            try {
                this.mediaElement.playVideo()
            } catch (e) {}
        },
        setQuality: function(t) {
            try {
                this.mediaElement.setPlaybackQuality(t)
            } catch (e) {}
        },
        getVolume: function() {
            try {
                return this.mediaElement.getVolume()
            } catch (t) {}
            return 0
        },
        getPoster: function() {
            return this.media.config.poster || this.pp.config.poster || "http://img.youtube.com/vi/" + this.youtubeGetId() + "/0.jpg"
        },
        getPlaybackQuality: function() {
            try {
                return this.mediaElement.getPlaybackQuality()
            } catch (t) {
                return !1
            }
        },
        getSrc: function() {
            return this.youtubeGetId() || null
        },
        errorListener: function(t) {
            switch (void 0 == t.data ? t : t.data) {
                case 100:
                    this.setTestcard(500);
                    break;
                case 101:
                case 150:
                    this.setTestcard(501);
                    break;
                case 2:
                    this.setTestcard(502)
            }
        },
        stateChange: function(t) {
            if (clearTimeout(this._updateTimer), null !== this.mediaElement && !this.getState("COMPLETED")) switch (void 0 == t.data ? t : t.data) {
                case -1:
                    this.setPlay(), this.ffFix = !0;
                    break;
                case 0:
                    if (this.getState("AWAKENING")) break;
                    this._setBufferState("full"), this.endedListener({});
                    break;
                case 1:
                    this._setBufferState("full"), (this.media.position || 0) > 0 && this._isFF() && this.ffFix && (this.ffFix = !1, this.setSeek(this.media.position)), this.playingListener({}), this.canplayListener({}), this.updateInfo();
                    break;
                case 2:
                    this.pauseListener({});
                    break;
                case 3:
                    this.waitingListener({});
                    break;
                case 5:
                    this.useIframeAPI !== !0 && this.onReady()
            }
        },
        onReady: function() {
            if (this.setVolume(this.pp.getVolume()), t("#" + this.pp.getId() + "_media").attr("ALLOWTRANSPARENCY", !0).attr({
                    scrolling: "no",
                    frameborder: 0
                }).css({
                    overflow: "hidden",
                    display: "block",
                    border: "0"
                }), this.media.title || this.pp.config.title || this.pp.getIsMobileClient()) return void this.displayReady();
            var e = this;
            t.ajax({
                url: "http://gdata.youtube.com/feeds/api/videos/" + this.youtubeGetId() + "?v=2&alt=jsonc",
                async: !1,
                complete: function(i, n) {
                    try {
                        data = i.responseText, "string" == typeof data && (data = t.parseJSON(data)), data.data.title && e.sendUpdate("config", {
                            title: data.data.title + " (" + data.data.uploader + ")"
                        })
                    } catch (r) {}
                    e.displayReady()
                }
            })
        },
        youtubeGetId: function() {
            return encodeURIComponent(this.media.file[0].src.replace(/^[^v]+v.(.{11}).*/, "$1"))
        },
        updateInfo: function() {
            var t = this;
            clearTimeout(this._updateTimer),
                function() {
                    if (null == t.mediaElement) return void clearTimeout(t._updateTimer);
                    try {
                        t.getState("PLAYING") && (t.timeListener({
                            position: t.mediaElement.getCurrentTime(),
                            duration: t.mediaElement.getDuration()
                        }), t.progressListener({
                            loaded: t.mediaElement.getVideoBytesLoaded(),
                            total: t.mediaElement.getVideoBytesTotal()
                        }), t._updateTimer = setTimeout(arguments.callee, 500))
                    } catch (e) {}
                }()
        }
    }), $p.newModel({
        modelId: "YTAUDIO",
        iLove: [{
            ext: "youtube.com",
            type: "audio/youtube",
            platform: "flash",
            fixed: "maybe"
        }]
    }, "YTVIDEO")
});
var projekktorDisplay = function() {};
jQuery(function(t) {
    projekktorDisplay.prototype = {
        version: "1.1.00",
        logo: null,
        logoIsFading: !1,
        display: null,
        displayClicks: 0,
        buffIcn: null,
        buffIcnSprite: null,
        bufferDelayTimer: null,
        _controlsDims: null,
        config: {
            displayClick: {
                callback: "setPlayPause",
                value: null
            },
            displayPlayingClick: {
                callback: "setPlayPause",
                value: null
            },
            displayDblClick: {
                callback: null,
                value: null
            },
            staticControls: !1,
            bufferIconDelay: 1e3,
            spriteUrl: "",
            spriteWidth: 50,
            spriteHeight: 50,
            spriteTiles: 25,
            spriteOffset: 1,
            spriteCountUp: !1
        },
        initialize: function() {
            this.display = this.applyToPlayer(t("<div/>")), this.startButton = this.applyToPlayer(t("<div/>").addClass("start"), "startbtn"), this.buffIcn = this.applyToPlayer(t("<div/>").addClass("buffering"), "buffericn"), this.imaContainer = this.applyToPlayer(t("<div/>").addClass("ima"), "ima"), this.setActive(), "" !== this.config.spriteUrl && (this.buffIcnSprite = t("<div/>").appendTo(this.buffIcn).css({
                width: this.config.spriteWidth,
                height: this.config.spriteHeight,
                marginLeft: (this.buffIcn.width() - this.config.spriteWidth) / 2 + "px",
                marginTop: (this.buffIcn.height() - this.config.spriteHeight) / 2 + "px",
                backgroundColor: "transparent",
                backgroundImage: "url(" + this.config.spriteUrl + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 0"
            }).addClass("inactive")), this.pp.getMediaContainer(), this.pluginReady = !0
        },
        displayReadyHandler: function() {
            var t = this;
            this.hideStartButton(), this.startButton.unbind().click(function() {
                t.pp.setPlay()
            })
        },
        syncingHandler: function() {
            this.showBufferIcon(), this.pp.getState("IDLE") && this.hideStartButton()
        },
        readyHandler: function() {
            this.hideBufferIcon(), this.pp.getState("IDLE") && this.showStartButton()
        },
        bufferHandler: function(t) {
            (this.pp.getState("PLAYING") || this.pp.getState("AWAKENING")) && ("EMPTY" == t ? this.showBufferIcon() : this.hideBufferIcon())
        },
        stateHandler: function(t) {
            switch (t) {
                case "IDLE":
                    clearTimeout(this._cursorTimer), this.display.css("cursor", "pointer");
                    break;
                case "PLAYING":
                    this.hideBufferIcon(), this.hideStartButton();
                    break;
                case "IDLE":
                    this.showStartButton();
                    break;
                case "STARTING":
                case "AWAKENING":
                    this.showBufferIcon(), this.hideStartButton();
                    break;
                case "COMPLETED":
                case "STOPPED":
                    this.hideBufferIcon();
                    break;
                default:
                    this.hideStartButton()
            }
        },
        errorHandler: function() {
            this.hideBufferIcon(), this.hideStartButton()
        },
        startHandler: function() {
            this.mousemoveHandler()
        },
        scheduleLoadingHandler: function() {
            this.hideStartButton(), this.showBufferIcon()
        },
        scheduledHandler: function() {
            this.getConfig("autoplay") || this.showStartButton(), this.hideBufferIcon()
        },
        plugineventHandler: function(t) {
            if ("controlbar" == t.PLUGIN && "show" == t.EVENT && this.getConfig("staticControls")) {
                var e = 100 * t.height / this.pp.getDC().height();
                this.display.height(100 - e + "%").data("sc", !0)
            }
        },
        qualityChangeHandler: function() {
            this.hideBufferIcon()
        },
        mousemoveHandler: function(t) {
            var e = this.display;
            return this.pp.getState("IDLE") ? void e.css("cursor", "pointer") : (e.css("cursor", "auto"), clearTimeout(this._cursorTimer), void(-1 == "AWAKENING|ERROR|PAUSED".indexOf(this.pp.getState()) && (this._cursorTimer = setTimeout(function() {
                e.css("cursor", "none")
            }, 3e3))))
        },
        mousedownHandler: function(e) {
            var i = this;
            if (-1 != (t(e.target).attr("id") || "").indexOf("_media") && (clearTimeout(this._cursorTimer), this.display.css("cursor", "auto"), 1 == e.which)) {
                switch (this.pp.getState()) {
                    case "ERROR":
                        return this.pp.setConfig({
                            disallowSkip: !1
                        }), void this.pp.setActiveItem("next");
                    case "IDLE":
                        return void this.pp.setPlay()
                }
                this.pp.getHasGUI() !== !0 && (this.displayClicks++, this.pp._promote("displayClick"), this.displayClicks > 0 && setTimeout(function() {
                    1 == i.displayClicks ? i.clickHandler("PLAYING" == i.pp.getState() ? "displayPlaying" : "display") : 2 == i.displayClicks && i.clickHandler("displayDbl"), i.displayClicks = 0
                }, 250))
            }
        },
        showStartButton: function() {
            this.startButton.addClass("active").removeClass("inactive")
        },
        hideStartButton: function() {
            this.startButton.addClass("inactive").removeClass("active")
        },
        hideBufferIcon: function() {
            clearTimeout(this.bufferDelayTimer), this.buffIcn.addClass("inactive").removeClass("active")
        },
        showBufferIcon: function(t) {
            var e = this;
            if (clearTimeout(this.bufferDelayTimer), !this.pp.getHasGUI()) {
                if ("YTAUDIO" !== this.pp.getModel() && "YTVIDEO" !== this.pp.getModel() || this.pp.getState("IDLE") || (t = !0), t !== !0 && this.getConfig("bufferIconDelay") > 0) return void(this.bufferDelayTimer = setTimeout(function() {
                    e.showBufferIcon(!0)
                }, this.getConfig("bufferIconDelay")));
                if (!this.buffIcn.hasClass("active") && (this.buffIcn.addClass("active").removeClass("inactive"), null !== e.buffIcnSprite)) {
                    var i = e.config.spriteCountUp === !0 ? 0 : (e.config.spriteHeight + e.config.spriteOffset) * (e.config.spriteTiles - 1),
                        n = i;
                    e.buffIcnSprite.addClass("active").removeClass("inactive"),
                        function() {
                            e.buffIcn.is(":visible") && (e.buffIcnSprite.css("backgroundPosition", "0px -" + n + "px"), e.config.spriteCountUp === !0 ? n += e.config.spriteHeight + e.config.spriteOffset : n -= e.config.spriteHeight + e.config.spriteOffset, (n > (i + e.config.spriteHeight) * e.config.spriteTiles || n < e.config.spriteOffset) && (n = i), setTimeout(arguments.callee, 60))
                        }()
                }
            }
        }
    }
});
var projekktorControlbar = function() {};
jQuery(function(t) {
    projekktorControlbar.prototype = {
        version: "1.1.01",
        _cTimer: null,
        _isDVR: !1,
        _noHide: !1,
        _vSliderAct: !1,
        cb: null,
        controlElements: {},
        controlElementsConfig: {
            sec_dur: null,
            min_dur: null,
            sec_abs_dur: null,
            min_abs_dur: null,
            hr_dur: null,
            sec_elp: null,
            min_elp: null,
            sec_abs_elp: null,
            min_abs_elp: null,
            hr_elp: null,
            sec_rem: null,
            min_rem: null,
            sec_abs_rem: null,
            min_abs_rem: null,
            hr_rem: null,
            sec_tip: null,
            min_tip: null,
            sec_abs_tip: null,
            min_abs_tip: null,
            hr_tip: null,
            cb: null,
            playhead: {
                on: null,
                call: null
            },
            loaded: null,
            golive: [{
                on: ["touchstart", "click"],
                call: "goliveClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            scrubber: null,
            scrubbertip: null,
            scrubberknob: null,
            scrubberdrag: [{
                on: ["mouseenter"],
                call: "scrubberShowTooltip"
            }, {
                on: ["mouseout"],
                call: "scrubberHideTooltip"
            }, {
                on: ["mousemove"],
                call: "scrubberdragTooltip"
            }, {
                on: ["mousedown"],
                call: "scrubberdragStartDragListener"
            }],
            play: [{
                on: ["touchstart", "click"],
                call: "playClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            pause: [{
                on: ["touchstart", "click"],
                call: "pauseClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            stop: [{
                on: ["touchstart", "click"],
                call: "stopClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            prev: [{
                on: ["touchstart", "click"],
                call: "prevClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            next: [{
                on: ["touchstart", "click"],
                call: "nextClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            rewind: [{
                on: ["touchstart", "click"],
                call: "rewindClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            forward: [{
                on: ["touchstart", "click"],
                call: "forwardClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            fsexit: [{
                on: ["touchstart", "click"],
                call: "exitFullscreenClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            fsenter: [{
                on: ["touchstart", "click"],
                call: "enterFullscreenClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            loquality: [{
                on: ["touchstart", "click"],
                call: "setQualityClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            hiquality: [{
                on: ["touchstart", "click"],
                call: "setQualityClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            vslider: [{
                on: ["touchstart", "click"],
                call: "vsliderClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            vmarker: [{
                on: ["touchstart", "click"],
                call: "vsliderClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            vknob: {
                on: ["mousedown"],
                call: "vknobStartDragListener"
            },
            volumePanel: [{
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }],
            volume: null,
            mute: [{
                on: ["touchstart", "click"],
                call: "muteClk"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }, {
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            unmute: [{
                on: ["touchstart", "click"],
                call: "unmuteClk"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }, {
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            vmax: [{
                on: ["touchstart", "click"],
                call: "vmaxClk"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }, {
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            open: [{
                on: ["touchstart", "click"],
                call: "openCloseClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            close: [{
                on: ["touchstart", "click"],
                call: "openCloseClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            loop: [{
                on: ["touchstart", "click"],
                call: "loopClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }],
            draghandle: {
                on: ["mousedown"],
                call: "handleStartDragListener"
            },
            controls: null,
            title: null
        },
        config: {
            toggleMute: !1,
            showCuePoints: !1,
            fadeDelay: 2500,
            showOnStart: !1,
            showOnIdle: !1,
            controlsTemplate: '<ul class="left"><li><div %{play}></div><div %{pause}></div></li></ul><ul class="right"><li><div %{fsexit}></div><div %{fsenter}></div></li><li><div %{loquality}></div><div %{hiquality}></div></li><li><div %{tracksbtn}></div></li><li><div %{vmax}></div></li><li><div %{vslider}><div %{vmarker}></div><div %{vknob}></div></div></li><li><div %{mute}></div></li><li><div %{timeleft}>%{hr_elp}:%{min_elp}:%{sec_elp} | %{hr_dur}:%{min_dur}:%{sec_dur}</div></li><li><div %{next}></div></li><li><div %{prev}></div></li></ul><ul class="bottom"><li><div %{scrubber}><div %{loaded}></div><div %{playhead}></div><div %{scrubberknob}></div><div %{scrubberdrag}></div></div></li></ul><div %{scrubbertip}>%{hr_tip}:%{min_tip}:%{sec_tip}</div>'
        },
        initialize: function() {
            var e = this.playerDom.html(),
                i = !0,
                n = this.pp.getNS();
            for (var r in this.controlElementsConfig)
                if (e.match(new RegExp(n + r, "gi"))) {
                    i = !1;
                    break
                }
            i ? (this.cb = this.applyToPlayer(t("<div/>").addClass("controls")), this.applyTemplate(this.cb, this.getConfig("controlsTemplate"))) : this.cb = this.playerDom.find("." + n + "controls");
            for (var r in this.controlElementsConfig) this.controlElements[r] = t(this.playerDom).find("." + n + r), $p.utils.blockSelection(t(this.controlElements[r]));
            this.addGuiListeners(), this.hidecb(!0), this.pluginReady = !0
        },
        applyTemplate: function(e, i) {
            var n = this.pp.getNS();
            if (i) {
                var r = i.match(/\%{[a-zA-Z_]*\}/gi);
                null != r && t.each(r, function(t, e) {
                    var r = e.replace(/\%{|}/gi, "");
                    i = e.match(/\_/gi) ? i.replace(e, '<span class="' + n + r + '"></span>') : i.replace(e, 'class="' + n + r + '"')
                }), e.html(i)
            }
        },
        updateDisplay: function() {
            var t = this.pp.getState();
            if (!this.pp.getHasGUI()) {
                if (0 == this.getConfig("controls")) return void this.hidecb(!0);
                this.pp.getItemCount() < 2 || this.getConfig("disallowSkip") ? (this._active("prev", !1), this._active("next", !1)) : (this._active("prev", !0), this._active("next", !0)), this.pp.getItemIdx() < 1 && this._active("prev", !1), this.pp.getItemIdx() >= this.pp.getItemCount() - 1 && this._active("next", !1), this.getConfig("disablePause") ? (this._active("play", !1), this._active("pause", !1)) : ("PLAYING" === t && this.drawPauseButton(), "PAUSED" === t && this.drawPlayButton(), "IDLE" === t && this.drawPlayButton()), this._active("stop", "IDLE" !== t), this._active("forward", "IDLE" !== t), this._active("rewind", "IDLE" !== t), this.pp.getInFullscreen() === !0 ? this.drawExitFullscreenButton() : this.drawEnterFullscreenButton(), this.getConfig("enableFullscreen") || (this._active("fsexit", !1), this._active("fsenter", !1)), this._active("loop", !0), this.controlElements.loop.addClass(this.pp.getConfig("loop") ? "on" : "off").removeClass(this.pp.getConfig("loop") ? "off" : "on"), this.displayQualityToggle(), this.displayTime(), this.displayVolume(this._getVolume())
            }
        },
        addGuiListeners: function() {
            var e = this;
            t.each(this.controlElementsConfig, function(i, n) {
                if (null == n) return !0;
                n instanceof Array || (n = [n]);
                for (var r = 0; r < n.length; r++) null != n[r].on && t.each(n[r].on, function(t, s) {
                    var a = "on" + s in window.document,
                        o = n[r].call;
                    if (!a) {
                        var l = document.createElement("div");
                        l.setAttribute("on" + s, "return;"), a = "function" == typeof l["on" + s]
                    }
                    a && e.controlElements[i].bind(s, function(t) {
                        e.clickCatcher(t, o, e.controlElements[i])
                    })
                });
                return !0
            }), this.cb.mousemove(function(t) {
                e.controlsFocus(t)
            }), this.cb.mouseout(function(t) {
                e.controlsBlur(t)
            })
        },
        clickCatcher: function(t, e, i) {
            return t.stopPropagation(), t.preventDefault(), this[e](t, i), !1
        },
        touchEnd: function() {
            var t = this;
            this._cTimer = setTimeout(function() {
                t.hidecb()
            }, this.getConfig("fadeDelay")), this._noHide = !1
        },
        drawTitle: function() {
            this.controlElements.title.html(this.getConfig("title", ""))
        },
        hidecb: function(t) {
            return clearTimeout(this._cTimer), null != this.cb ? 0 == this.getConfig("controls") ? void this.cb.removeClass("active").addClass("inactive") : void(this.getConfig("showOnIdle") && this.pp.getState("IDLE") || (t && (this._noHide = !1), this._noHide || this.cb.hasClass("inactive") || (this.cb.removeClass("active").addClass("inactive"), this.sendEvent("hide", this.cb)))) : void 0
        },
        showcb: function(t) {
            var e = this;
            if (clearTimeout(this._cTimer), this.pp.getHasGUI() || 0 == this.getConfig("controls")) return void this.cb.removeClass("active").addClass("inactive");
            if (null != this.cb && !("IDLE|AWAKENING|ERROR".indexOf(this.pp.getState()) > -1 && 1 != t)) {
                if (this.cb.hasClass("active") && t !== !1) return void(this._cTimer = setTimeout(function() {
                    e.hidecb()
                }, this.getConfig("fadeDelay")));
                this.cb.removeClass("inactive").addClass("active"), this.sendEvent("show", this.cb), this._cTimer = setTimeout(function() {
                    e.hidecb()
                }, this.getConfig("fadeDelay"))
            }
        },
        displayTime: function(e, i, n) {
            if (!this.pp.getHasGUI()) {
                var r = Math.round(10 * (e || this.pp.getLoadPlaybackProgress() || 0)) / 10,
                    s = i || this.pp.getDuration() || 0,
                    a = n || this.pp.getPosition() || 0,
                    o = t.extend({}, this._clockDigits(s, "dur"), this._clockDigits(a, "elp"), this._clockDigits(s - a, "rem"));
                if (this.controlElements.playhead.data("pct") != r) {
                    this.controlElements.playhead.data("pct", r).css({
                        width: r + "%"
                    }), this.controlElements.scrubberknob.css({
                        left: r + "%"
                    });
                    for (var l in this.controlElements) {
                        if ("cb" == l) break;
                        o[l] && t.each(this.controlElements[l], function() {
                            t(this).html(o[l])
                        })
                    }
                }
            }
        },
        displayProgress: function() {
            var t = Math.round(10 * this.pp.getLoadProgress()) / 10;
            this.controlElements.loaded.data("pct") != t && this.controlElements.loaded.data("pct", t).css("width", t + "%")
        },
        displayVolume: function(e) {
            var i = this;
            if (1 != this._vSliderAct && null != e) {
                var n = this.cb.hasClass("active"),
                    i = this,
                    r = this.getConfig("fixedVolume"),
                    s = this.controlElements.mute.hasClass("toggle") || this.controlElements.unmute.hasClass("toggle") || this.getConfig("toggleMute");
                if (this._active("mute", !r), this._active("unmute", !r), this._active("vmax", !r), this._active("vknob", !r), this._active("vmarker", !r), this._active("vslider", !r), !r) {
                    this.controlElements.vslider.width() > this.controlElements.vslider.height() ? (this.controlElements.vmarker.css("width", 100 * e + "%"), this.controlElements.vknob.css("left", 100 * e + "%")) : (this.controlElements.vmarker.css("height", 100 * e + "%"), this.controlElements.vknob.css("top", 100 - 100 * e + "%"));
                    for (var a = this.controlElements.volume.find("li"), o = a.length - Math.ceil(100 * e / a.length), l = 0; l <= a.length; l++) l >= o ? t(a[l]).addClass("active") : t(a[l]).removeClass("active");
                    if (s) switch (parseFloat(e)) {
                        case 0:
                            this._active("mute", !1), this._active("unmute", !0), this._active("vmax", !0);
                            break;
                        default:
                            this._active("mute", !0), this._active("unmute", !1), this._active("vmax", !1)
                    }
                    n && this.cb.fadeTo(1, .99).fadeTo(1, 1, function() {
                        i.cb.removeAttr("style")
                    })
                }
            }
        },
        displayCuePoints: function(e) {
            var i = this,
                n = this.pp.getNS();
            this.getConfig("showCuePoints") && (i.controlElements.scrubber.remove("." + n + "cuepoint"), t.each(this.pp.getCuePoints() || [], function() {
                var r = Math.max(100 / e, Math.round(e / 100), 1),
                    s = 100 * this.on / e - r / 2 * 100 / e,
                    a = (i.pp, t(document.createElement("div")).addClass(n + "cuepoint").addClass("inactive").css("left", s + "%").css("width", r + "%").data("on", this.on));
                "" != this.title && a.attr("title", this.title), this.addListener("unlock", function() {
                    t(a).removeClass("inactive").addClass("active"), a.click(function() {
                        i.pp.setPlayhead(a.data("on"))
                    })
                }), i.controlElements.scrubber.append(a)
            }))
        },
        drawPauseButton: function(t) {
            this._active("pause", !0), this._active("play", !1)
        },
        drawPlayButton: function(t) {
            this._active("pause", !1), this._active("play", !0)
        },
        drawEnterFullscreenButton: function(t) {
            this._active("fsexit", !1), this._active("fsenter", !0)
        },
        drawExitFullscreenButton: function(t) {
            this._active("fsexit", !0), this._active("fsenter", !1)
        },
        displayQualityToggle: function(t) {
            var e = this.getConfig("playbackQualities"),
                i = this.pp.getPlaybackQualities(),
                n = this.pp.getNS();
            return best = [], i.length < 2 || e.length < 2 ? (this.controlElements.loquality.removeClass().addClass("inactive").addClass(n + "loquality").data("qual", ""), void this.controlElements.hiquality.removeClass().addClass("inactive").addClass(n + "hiquality").data("qual", "")) : (e.sort(function(t, e) {
                return t.minHeight - e.minHeight
            }), this.cb.addClass("qualities"), void(best[0] == this.pp.getPlaybackQuality() ? (this._active("loquality", !0).addClass("qual" + best[1]).data("qual", best[1]), this._active("hiquality", !1).addClass("qual" + best[0]).data("qual", best[0])) : (this._active("loquality", !1).addClass("qual" + best[1]).data("qual", best[1]), this._active("hiquality", !0).addClass("qual" + best[0]).data("qual", best[0]))))
        },
        itemHandler: function(e) {
            t(this.cb).find("." + this.pp.getNS() + "cuepoint").remove(), this.pp.setVolume(this._getVolume()), this.updateDisplay(), this.hidecb(!0), this.drawTitle(), this.displayQualityToggle(), this.pluginReady = !0
        },
        startHandler: function() {
            this.pp.setVolume(this._getVolume()), 1 == this.getConfig("showOnStart") ? this.showcb(!0) : this.hidecb(!0)
        },
        readyHandler: function(t) {
            clearTimeout(this._cTimer), this.getConfig("showOnIdle") && (this.showcb(!0), this.cb.removeClass("inactive").addClass("active").show()), this.pluginReady = !0
        },
        stateHandler: function(t) {
            return this.updateDisplay(), "STOPPED|AWAKENING|IDLE|DONE".indexOf(t) > -1 && (this.displayTime(0, 0, 0), this.displayProgress(0), this.pp.getIsMobileClient() && this.hidecb(!0)), "STOPPED|DONE|IDLE".indexOf(t) > -1 ? void this.hidecb(!0) : ("ERROR".indexOf(t) > -1 && (this._noHide = !1, this.hidecb(!0)), void this.displayProgress())
        },
        scheduleModifiedHandler: function() {
            "IDLE" !== this.pp.getState() && (this.updateDisplay(), this.displayTime(), this.displayProgress())
        },
        volumeHandler: function(t) {
            try {
                t > 0 && this.cookie("muted", !1), this.cookie("muted") || this.cookie("volume", t)
            } catch (e) {
                console.log(e)
            }
            this.displayVolume(this._getVolume())
        },
        progressHandler: function(t) {
            this.displayProgress()
        },
        timeHandler: function(t) {
            this.displayTime(), this.displayProgress()
        },
        qualityChangeHandler: function(t) {
            this.displayQualityToggle(t)
        },
        streamTypeChangeHandler: function(t) {
            "dvr" == t && (this._isDVR = !0, this.setActive(this.controlElements.golive, !0))
        },
        isLiveHandler: function(t) {
            t ? this.controlElements.golive.addClass("on").removeClass("off") : this.controlElements.golive.addClass("off").removeClass("on")
        },
        fullscreenHandler: function(t) {
            this.pp.getNS();
            clearTimeout(this._cTimer), this._noHide = !1, this._vSliderAct = !1, this.getConfig("controls") && this.getConfig("enableFullscreen") && (t ? (this.cb.addClass("fullscreen"), this.drawExitFullscreenButton()) : (this.cb.removeClass("fullscreen"), this.drawEnterFullscreenButton()), "IDLE" != this.pp.getState() || this.getConfig("showOnIdle") || this.hidecb(!0))
        },
        durationChangeHandler: function(t) {
            this.displayCuePoints(t)
        },
        errorHandler: function(t) {
            this.hidecb(!0)
        },
        leftclickHandler: function() {
            this.mouseleaveHandler()
        },
        focusHandler: function(t) {
            this.showcb()
        },
        mouseenterHandler: function(t) {
            this.showcb()
        },
        mousemoveHandler: function(t) {
            this.pp.getState("STARTING") || this.showcb()
        },
        mouseleaveHandler: function() {},
        mousedownHandler: function(t) {
            this.showcb()
        },
        controlsFocus: function(t) {
            this._noHide = !0
        },
        controlsBlur: function(t) {
            this._noHide = !1
        },
        setQualityClk: function(e) {
            this.pp.setPlaybackQuality(t(e.currentTarget).data("qual"))
        },
        goliveClk: function(t) {
            this.pp.setSeek(-1)
        },
        playClk: function(t) {
            this.pp.setPlay()
        },
        pauseClk: function(t) {
            this.pp.setPause()
        },
        stopClk: function(t) {
            this.pp.setStop()
        },
        startClk: function(t) {
            this.pp.setPlay()
        },
        controlsClk: function(t) {},
        prevClk: function(t) {
            this.pp.setActiveItem("previous")
        },
        nextClk: function(t) {
            this.pp.setActiveItem("next")
        },
        forwardClk: function(t) {
            this.pp.setPlayhead("+10")
        },
        rewindClk: function(t) {
            this.pp.setPlayhead("-10")
        },
        muteClk: function(t) {
            this.cookie("muted", !0), this.pp.setVolume(0)
        },
        unmuteClk: function(t) {
            this.cookie("muted", !1), this.pp.setVolume(this._getVolume())
        },
        vmaxClk: function(t) {
            this.cookie("muted", !1), this.pp.setVolume(1)
        },
        enterFullscreenClk: function(t) {
            this.pp.setFullscreen(!0)
        },
        exitFullscreenClk: function(t) {
            this.pp.setFullscreen(!1)
        },
        loopClk: function(e) {
            this.pp.setLoop(t(e.currentTarget).hasClass("inactive") || !1), this.updateDisplay()
        },
        vmarkerClk: function(t) {
            vsliderClk(t)
        },
        openCloseClk: function(e) {
            var i = this;
            t(t(e.currentTarget).attr("class").split(/\s+/)).each(function(t, e) {
                -1 != e.indexOf("toggle") && (i.playerDom.find("." + e.substring(6)).slideToggle("slow", function() {
                    i.pp.setSize()
                }), i.controlElements.open.toggle(), i.controlElements.close.toggle())
            })
        },
        volumeBtnHover: function(t) {
            clearTimeout(this._outDelay), this.setActive(this.controlElements.volumePanel, !0)
        },
        volumeBtnOut: function(t, e) {
            var i = this;
            t.currentTarget == e.get(0) && t.relatedTarget != e.get(0) && (this._outDelay = setTimeout(function() {
                i.setActive(i.controlElements.volumePanel, !1)
            }, 100))
        },
        vsliderClk: function(e) {
            if (1 != this._vSliderAct) {
                var i = t(this.controlElements.vslider),
                    n = i.width() > i.height() ? "hor" : "vert",
                    r = "hor" == n ? i.width() : i.height(),
                    s = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
                    a = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY,
                    o = "hor" == n ? s - i.offset().left : a - i.offset().top,
                    l = 0;
                l = 0 > o || isNaN(o) || void 0 == o ? 0 : "hor" == n ? o / r : 1 - o / r, this.pp.setVolume(l)
            }
        },
        scrubberShowTooltip: function(t) {
            0 != this.pp.getDuration() && (clearTimeout(this._cTimer), this.setActive(this.controlElements.scrubbertip, !0))
        },
        scrubberHideTooltip: function(t) {
            this.setActive(this.controlElements.scrubbertip, !1)
        },
        scrubberdragTooltip: function(e) {
            if (0 != this.pp.getDuration()) {
                this.setActive(this.controlElements.scrubbertip, !0);
                var i = t(this.controlElements.scrubberdrag[0]),
                    n = (t(this.controlElements.loaded[0]), t(this.controlElements.scrubbertip)),
                    r = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
                    s = (e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY, r - i.offset().left - n.outerWidth() / 2),
                    a = this.pp.getDuration() / 100 * (100 * (r - i.offset().left) / i.width()),
                    o = this._clockDigits(a, "tip");
                if (this._isDVR) {
                    a = this.pp.getDuration() - a;
                    var l = new Date(1e3 * ((new Date).getTime() / 1e3 - a)),
                        l = l.getSeconds() + 60 * l.getMinutes() + 3600 * l.getHours();
                    o = this._clockDigits(l, "tip")
                }
                for (var u in this.controlElements) {
                    if ("cb" == u) break;
                    o[u] && t.each(this.controlElements[u], function() {
                        t(this).html(o[u])
                    })
                }
                s = 0 > s ? 0 : s, s = s > i.width() - n.outerWidth() ? i.width() - n.outerWidth() : s, n.css({
                    left: s + "px"
                })
            }
        },
        scrubberdragStartDragListener: function(e) {
            if (1 != this.getConfig("disallowSkip")) {
                this._sSliderAct = !0;
                var i = this,
                    n = t(this.controlElements.scrubberdrag[0]),
                    r = t(this.controlElements.loaded[0]),
                    s = 0,
                    a = (Math.abs(parseInt(n.offset().left) - e.clientX), function(t) {
                        var e = Math.abs(n.offset().left - t.clientX);
                        e = e > n.width() ? n.width() : e, e = e > r.width() ? r.width() : e, e = 0 > e ? 0 : e, e = Math.abs(e / n.width()) * i.pp.getDuration(), e > 0 && e != s && (s = e, i.pp.setPlayhead(s))
                    }),
                    o = function(t) {
                        return t.stopPropagation(), t.preventDefault(), i.playerDom.unbind("mouseup.slider"), n.unbind("mousemove", l), n.unbind("mouseup", o), i._sSliderAct = !1, !1
                    },
                    l = function(t) {
                        return clearTimeout(i._cTimer), t.stopPropagation(), t.preventDefault(), a(t), !1
                    };
                this.playerDom.bind("mouseup.slider", o), n.mouseup(o), n.mousemove(l), a(e)
            }
        },
        vknobStartDragListener: function(e, i) {
            this._vSliderAct = !0;
            var n = this,
                r = this.pp.getInFullscreen() === !0 && this.controlElements.vslider.length > 1 ? 1 : 0,
                s = t(i[r]),
                a = t(this.controlElements.vslider[r]),
                o = Math.abs(parseFloat(s.position().left) - e.clientX),
                l = Math.abs(parseFloat(s.position().top) - e.clientY),
                u = 0,
                c = function(t) {
                    return n.playerDom.unbind("mouseup", c), a.unbind("mousemove", d), a.unbind("mouseup", c), s.unbind("mousemove", d), s.unbind("mouseup", c), n._vSliderAct = !1, !1
                },
                d = function(e) {
                    clearTimeout(n._cTimer);
                    var i = e.clientX - o,
                        i = i > a.width() - s.width() / 2 ? a.width() - s.width() / 2 : i,
                        i = 0 > i ? 0 : i,
                        c = e.clientY - l,
                        c = c > a.height() - s.height() / 2 ? a.height() - s.height() / 2 : c,
                        c = 0 > c ? 0 : c;
                    n.controlElements.vslider.width() > n.controlElements.vslider.height() ? (s.css("left", i + "px"), u = Math.abs(i / (a.width() - s.width() / 2)), t(n.controlElements.vmarker[r]).css("width", 100 * u + "%")) : (s.css("top", c + "px"), u = 1 - Math.abs(c / (a.height() - s.height() / 2)), t(n.controlElements.vmarker[r]).css("height", 100 * u + "%"))
                };
            this.playerDom.mouseup(c), a.mousemove(d), a.mouseup(c), s.mousemove(d), s.mouseup(c)
        },
        handleStartDragListener: function(t, e) {
            var i = this,
                n = Math.abs(parseInt(this.cb.position().left) - t.clientX),
                r = Math.abs(parseInt(this.cb.position().top) - t.clientY),
                s = function(t) {
                    return t.stopPropagation(), t.preventDefault(), i.playerDom.unbind("mouseup", s), i.playerDom.unbind("mouseout", s), i.playerDom.unbind("mousemove", a), !1
                },
                a = function(t) {
                    t.stopPropagation(), t.preventDefault(), clearTimeout(i._cTimer);
                    var e = t.clientX - n;
                    e = e > i.playerDom.width() - i.cb.width() ? i.playerDom.width() - i.cb.width() : e, e = 0 > e ? 0 : e, i.cb.css("left", e + "px");
                    var s = t.clientY - r;
                    return s = s > i.playerDom.height() - i.cb.height() ? i.playerDom.height() - i.cb.height() : s, s = 0 > s ? 0 : s, i.cb.css("top", s + "px"), !1
                };
            this.playerDom.mousemove(a), this.playerDom.mouseup(s)
        },
        _getVolume: function() {
            var t = parseFloat(this.cookie("volume") || this.getConfig("volume") || .5),
                e = this.cookie("muted") || !1;
            return this.getConfig("fixedVolume") || null == t ? this.getConfig("volume") : e ? 0 : t
        },
        _active: function(t, e) {
            var i = this.controlElements[t];
            return 1 == e ? i.addClass("active").removeClass("inactive") : i.addClass("inactive").removeClass("active"), i
        },
        _clockDigits: function(t, e) {
            (0 > t || isNaN(t) || void 0 == t) && (t = 0);
            var i = Math.floor(t / 3600),
                n = t % 3600,
                r = Math.floor(n / 60),
                s = 60 * i + r,
                a = n % 60,
                o = Math.floor(a),
                l = t,
                u = {};
            return u["min_" + e] = 10 > r ? "0" + r : r, u["min_abs_" + e] = 10 > s ? "0" + s : s, u["sec_" + e] = 10 > o ? "0" + o : o, u["sec_abs_" + e] = 10 > l ? "0" + l : l, u["hr_" + e] = 10 > i ? "0" + i : i, u
        }
    }
});