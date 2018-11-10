(function(){
    var _ntes_nacc;
    var _ntes_nvid = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var _ntes_nvtm = 0;
    var _ntes_nvfi = 0;
    var _ntes_nvsf = 1;
    var _ntes_nstm = 0;
    var _ntes_nurl = "";
    var _ntes_ntit = "";
    var _ntes_nref = "";
    var _ntes_nres = "";
    var _ntes_nlag = "";
    var _ntes_nscd = "";
    var _ntes_nlmf = 0;
    var _ntes_flsh = "";
    var _ntes_nssn = "";
    var _ntes_surv = 0;
    var _ntes_cdmn = ntes_get_domain();
    var _ntes_cookie_enabled = null;
    var _ntes_src_addr = "//analytics.163.com";
    var _ntes_void = function(){};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date();
        b.setTime(b.getTime() + 1000 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + _ntes_cdmn
    }
    function ntes_set_cookie(a, c) {
        var b = new Date();
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + _ntes_cdmn
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1000 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date();
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + _ntes_cdmn
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
          , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var _ntes_hexcase = 0;
    var _ntes_chrsz = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * _ntes_chrsz))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << ((k) % 32);
        p[(((k + 64) >>> 9) << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return (b << 16) | (c & 65535)
    }
    function bit_rol(a, b) {
        return (a << b) | (a >>> (32 - b))
    }
    function str2binl(d) {
        var c = new Array();
        var a = (1 << _ntes_chrsz) - 1;
        for (var b = 0; b < d.length * _ntes_chrsz; b += _ntes_chrsz) {
            c[b >> 5] |= (d.charCodeAt(b / _ntes_chrsz) & a) << (b % 32)
        }
        return c
    }
    function binl2hex(c) {
        var b = _ntes_hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        _ntes_nres = "-";
        _ntes_nscd = "-";
        _ntes_nlag = "-";
        var c = window.self
          , b = window.screen
          , a = window.navigator;
        if (c.screen) {
            _ntes_nres = b.width + "x" + b.height;
            _ntes_nscd = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                _ntes_nres = f.width + "x" + f.height
            }
        }
        if (a.language) {
            _ntes_nlag = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                _ntes_nlag = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        _ntes_nlmf = g.getTime() / 1000
    }
    function fetch_visitor_hash() {
        var c = new Date();
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function _ntes_sendInfo(c, b, f) {
        var e = c + "_" + (+new Date()) + parseInt(Math.random() * 100), a, d = f || _ntes_void;
        a = window[e] = new Image();
        a.onload = function() {
            window[e] = null ;
            d()
        }
        ;
        a.onerror = function() {
            window[e] = null ;
            d()
        }
        ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || _ntes_nacc;
        _ntes_nurl = escape(a || document.location);
        _ntes_ntit = escape(m || document.title);
        _ntes_nref = l === true ? "" : escape(l || document.referrer);
        _ntes_flsh = ntes_get_flashver();
        var b = (new Date()).getTime();
        if (_ntes_cookie_enabled == null ) {
            document.cookie = "__ntes__test__cookies=" + b;
            _ntes_cookie_enabled = (ntes_get_cookie("__ntes__test__cookies") == b) ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (_ntes_nurl.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (_ntes_cookie_enabled) {
                _ntes_nvid = fetch_visitor_hash();
                _ntes_nvfi = 1;
                ntes_set_cookie_long("_ntes_nnid", _ntes_nvid + "," + (new Date).getTime())
                ntes_set_cookie_long("_ntes_nuid", _ntes_nvid)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            _ntes_nvid = h.substr(0, o);
            _ntes_surv = h.substr(o + 1, p - o - 1);
            if (_ntes_surv == 0) {
                _ntes_surv = (new Date).getTime();
                f = true
            }
            if (!_ntes_nvid) {
                _ntes_nvid = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", _ntes_nvid + "," + _ntes_surv)
                ntes_set_cookie_long("_ntes_nuid", _ntes_nvid)
            }
            if (_ntes_surv != 0 && (b - _ntes_surv) > 365 * 86400 * 1000) {
                _ntes_surv = 0;
                ntes_set_cookie_long("_ntes_nnid", _ntes_nvid + "," + (new Date).getTime())
                ntes_set_cookie_long("_ntes_nuid", _ntes_nvid)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
              , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        _ntes_nssn = c("P_INFO", "P_OINFO");
        _ntes_nssn = _ntes_nssn ? _ntes_nssn.substr(0, _ntes_nssn.indexOf("|")) : "";
        _ntes_nstm = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", _ntes_nvid, "&_nvtm=", _ntes_nvtm, "&_nvsf=", _ntes_nvsf, "&_nvfi=", _ntes_nvfi, "&_nlag=", _ntes_nlag, "&_nlmf=", _ntes_nlmf, "&_nres=", _ntes_nres, "&_nscd=", _ntes_nscd, "&_nstm=", _ntes_nstm, "&_nurl=", _ntes_nurl, "&_ntit=", _ntes_ntit, "&_nref=", _ntes_nref, "&_nfla=", _ntes_flsh, "&_nssn=", _ntes_nssn, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        _ntes_nvsf = 0;
        // _ntes_sendInfo("base", _ntes_src_addr + "/ntes?" + n, neteaseTracker.callback);
        neteaseTracker.callback = null ;
    }
    _ntes_nacc = 'iad';
    neteaseTracker();
})();