"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
* @license PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2013 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = createjs.PreloadJS = createjs.PreloadJS || {};a.version = "0.4.1", a.buildDate = "Thu, 12 Dec 2013 23:33:38 GMT";
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = function a(_a, b, c) {
    this.initialize(_a, b, c);
  },
      b = a.prototype;b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function (a, b, c) {
    this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = new Date().getTime();
  }, b.preventDefault = function () {
    this.defaultPrevented = !0;
  }, b.stopPropagation = function () {
    this.propagationStopped = !0;
  }, b.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, b.remove = function () {
    this.removed = !0;
  }, b.clone = function () {
    return new a(this.type, this.bubbles, this.cancelable);
  }, b.toString = function () {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = a;
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = function a() {},
      b = a.prototype;a.initialize = function (a) {
    a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger;
  }, b._listeners = null, b._captureListeners = null, b.initialize = function () {}, b.addEventListener = function (a, b, c) {
    var d;d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};var e = d[a];return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, b.on = function (a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, b.removeEventListener = function (a, b, c) {
    var d = c ? this._captureListeners : this._listeners;if (d) {
      var e = d[a];if (e) for (var f = 0, g = e.length; g > f; f++) {
        if (e[f] == b) {
          1 == g ? delete d[a] : e.splice(f, 1);break;
        }
      }
    }
  }, b.off = b.removeEventListener, b.removeAllEventListeners = function (a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, b.dispatchEvent = function (a, b) {
    if ("string" == typeof a) {
      var c = this._listeners;if (!c || !c[a]) return !1;a = new createjs.Event(a);
    }if (a.target = b || this, a.bubbles && this.parent) {
      for (var d = this, e = [d]; d.parent;) {
        e.push(d = d.parent);
      }var f,
          g = e.length;for (f = g - 1; f >= 0 && !a.propagationStopped; f--) {
        e[f]._dispatchEvent(a, 1 + (0 == f));
      }for (f = 1; g > f && !a.propagationStopped; f++) {
        e[f]._dispatchEvent(a, 3);
      }
    } else this._dispatchEvent(a, 2);return a.defaultPrevented;
  }, b.hasEventListener = function (a) {
    var b = this._listeners,
        c = this._captureListeners;return !!(b && b[a] || c && c[a]);
  }, b.willTrigger = function (a) {
    for (var b = this; b;) {
      if (b.hasEventListener(a)) return !0;b = b.parent;
    }return !1;
  }, b.toString = function () {
    return "[EventDispatcher]";
  }, b._dispatchEvent = function (a, b) {
    var c,
        d = 1 == b ? this._captureListeners : this._listeners;if (a && d) {
      var e = d[a.type];if (!e || !(c = e.length)) return;a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
        var g = e[f];g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1);
      }
    }
  }, createjs.EventDispatcher = a;
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  createjs.indexOf = function (a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      if (b === a[c]) return c;
    }return -1;
  };
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  createjs.proxy = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 2);return function () {
      return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
    };
  };
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = function a() {
    this.init();
  };a.prototype = new createjs.EventDispatcher();var b = a.prototype,
      c = a;c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/, b.loaded = !1, b.canceled = !1, b.progress = 0, b._item = null, b.getItem = function () {
    return this._item;
  }, b.init = function () {}, b.load = function () {}, b.close = function () {}, b._sendLoadStart = function () {
    this._isCanceled() || this.dispatchEvent("loadstart");
  }, b._sendProgress = function (a) {
    if (!this._isCanceled()) {
      var b = null;"number" == typeof a ? (this.progress = a, b = new createjs.Event("progress"), b.loaded = this.progress, b.total = 1) : (b = a, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), b.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(b);
    }
  }, b._sendComplete = function () {
    this._isCanceled() || this.dispatchEvent("complete");
  }, b._sendError = function (a) {
    !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.Event("error")), this.dispatchEvent(a));
  }, b._isCanceled = function () {
    return null == window.createjs || this.canceled ? !0 : !1;
  }, b._parseURI = function (a) {
    return a ? a.match(c.FILE_PATTERN) : null;
  }, b._parsePath = function (a) {
    return a ? a.match(c.PATH_PATTERN) : null;
  }, b._formatQueryString = function (a, b) {
    if (null == a) throw new Error("You must specify data.");var c = [];for (var d in a) {
      c.push(d + "=" + escape(a[d]));
    }return b && (c = c.concat(b)), c.join("&");
  }, b.buildPath = function (a, b) {
    if (null == b) return a;var c = [],
        d = a.indexOf("?");if (-1 != d) {
      var e = a.slice(d + 1);c = c.concat(e.split("&"));
    }return -1 != d ? a.slice(0, d) + "?" + this._formatQueryString(b, c) : a + "?" + this._formatQueryString(b, c);
  }, b._isCrossDomain = function (a) {
    var b = document.createElement("a");b.href = a.src;var c = document.createElement("a");c.href = location.href;var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);return d;
  }, b._isLocal = function (a) {
    var b = document.createElement("a");return b.href = a.src, "" == b.hostname && "file:" == b.protocol;
  }, b.toString = function () {
    return "[PreloadJS AbstractLoader]";
  }, createjs.AbstractLoader = a;
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = function a(_a2, b, c) {
    this.init(_a2, b, c);
  },
      b = a.prototype = new createjs.AbstractLoader(),
      c = a;c.loadTimeout = 8e3, c.LOAD_TIMEOUT = 0, c.BINARY = "binary", c.CSS = "css", c.IMAGE = "image", c.JAVASCRIPT = "javascript", c.JSON = "json", c.JSONP = "jsonp", c.MANIFEST = "manifest", c.SOUND = "sound", c.SVG = "svg", c.TEXT = "text", c.XML = "xml", c.POST = "POST", c.GET = "GET", b._basePath = null, b._crossOrigin = "", b.useXHR = !0, b.stopOnError = !1, b.maintainScriptOrder = !0, b.next = null, b._typeCallbacks = null, b._extensionCallbacks = null, b._loadStartWasDispatched = !1, b._maxConnections = 1, b._currentlyLoadingScript = null, b._currentLoads = null, b._loadQueue = null, b._loadQueueBackup = null, b._loadItemsById = null, b._loadItemsBySrc = null, b._loadedResults = null, b._loadedRawResults = null, b._numItems = 0, b._numItemsLoaded = 0, b._scriptOrder = null, b._loadedScripts = null, b.init = function (a, b, c) {
    this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = b, this.setUseXHR(a), this._crossOrigin = c === !0 ? "Anonymous" : c === !1 || null == c ? "" : c;
  }, b.setUseXHR = function (a) {
    return this.useXHR = 0 != a && null != window.XMLHttpRequest, this.useXHR;
  }, b.removeAll = function () {
    this.remove();
  }, b.remove = function (a) {
    var b = null;if (!a || a instanceof Array) {
      if (a) b = a;else if (arguments.length > 0) return;
    } else b = [a];var c = !1;if (b) {
      for (; b.length;) {
        var d = b.pop(),
            e = this.getResult(d);for (f = this._loadQueue.length - 1; f >= 0; f--) {
          if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
            this._loadQueue.splice(f, 1)[0].cancel();break;
          }
        }for (f = this._loadQueueBackup.length - 1; f >= 0; f--) {
          if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
            this._loadQueueBackup.splice(f, 1)[0].cancel();break;
          }
        }if (e) delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src], this._disposeItem(e);else for (var f = this._currentLoads.length - 1; f >= 0; f--) {
          var g = this._currentLoads[f].getItem();if (g.id == d || g.src == d) {
            this._currentLoads.splice(f, 1)[0].cancel(), c = !0;break;
          }
        }
      }c && this._loadNext();
    } else {
      this.close();for (var h in this._loadItemsById) {
        this._disposeItem(this._loadItemsById[h]);
      }this.init(this.useXHR);
    }
  }, b.reset = function () {
    this.close();for (var a in this._loadItemsById) {
      this._disposeItem(this._loadItemsById[a]);
    }for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) {
      b.push(this._loadQueueBackup[c].getItem());
    }this.loadManifest(b, !1);
  }, c.isBinary = function (a) {
    switch (a) {case createjs.LoadQueue.IMAGE:case createjs.LoadQueue.BINARY:
        return !0;default:
        return !1;}
  }, c.isText = function (a) {
    switch (a) {case createjs.LoadQueue.TEXT:case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:case createjs.LoadQueue.XML:case createjs.LoadQueue.HTML:case createjs.LoadQueue.CSS:case createjs.LoadQueue.SVG:case createjs.LoadQueue.JAVASCRIPT:
        return !0;default:
        return !1;}
  }, b.installPlugin = function (a) {
    if (null != a && null != a.getPreloadHandlers) {
      var b = a.getPreloadHandlers();if (b.scope = a, null != b.types) for (var c = 0, d = b.types.length; d > c; c++) {
        this._typeCallbacks[b.types[c]] = b;
      }if (null != b.extensions) for (c = 0, d = b.extensions.length; d > c; c++) {
        this._extensionCallbacks[b.extensions[c]] = b;
      }
    }
  }, b.setMaxConnections = function (a) {
    this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext();
  }, b.loadFile = function (a, b, c) {
    if (null == a) {
      var d = new createjs.Event("error");return d.text = "PRELOAD_NO_FILE", this._sendError(d), void 0;
    }this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0);
  }, b.loadManifest = function (a, b, d) {
    var e = null,
        f = null;if (a instanceof Array) {
      if (0 == a.length) {
        var g = new createjs.Event("error");return g.text = "PRELOAD_MANIFEST_EMPTY", this._sendError(g), void 0;
      }e = a;
    } else if ("string" == typeof a) e = [{ src: a, type: c.MANIFEST }];else {
      if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        var g = new createjs.Event("error");return g.text = "PRELOAD_MANIFEST_NULL", this._sendError(g), void 0;
      }if (void 0 !== a.src) {
        if (null == a.type) a.type = c.MANIFEST;else if (a.type != c.MANIFEST) {
          var g = new createjs.Event("error");g.text = "PRELOAD_MANIFEST_ERROR", this._sendError(g);
        }e = [a];
      } else void 0 !== a.manifest && (e = a.manifest, f = a.path);
    }for (var h = 0, i = e.length; i > h; h++) {
      this._addItem(e[h], f, d);
    }b !== !1 ? this.setPaused(!1) : this.setPaused(!0);
  }, b.load = function () {
    this.setPaused(!1);
  }, b.getItem = function (a) {
    return this._loadItemsById[a] || this._loadItemsBySrc[a];
  }, b.getResult = function (a, b) {
    var c = this._loadItemsById[a] || this._loadItemsBySrc[a];if (null == c) return null;var d = c.id;return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d];
  }, b.setPaused = function (a) {
    this._paused = a, this._paused || this._loadNext();
  }, b.close = function () {
    for (; this._currentLoads.length;) {
      this._currentLoads.pop().cancel();
    }this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1;
  }, b._addItem = function (a, b, c) {
    var d = this._createLoadItem(a, b, c);if (null != d) {
      var e = this._createLoader(d);null != e && (this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT && e instanceof createjs.XHRLoader && (this._scriptOrder.push(d), this._loadedScripts.push(null)));
    }
  }, b._createLoadItem = function (a, b, c) {
    var d = null;switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
        d = { src: a };break;case "object":
        d = window.HTMLAudioElement && a instanceof window.HTMLAudioElement ? { tag: a, src: d.tag.src, type: createjs.LoadQueue.SOUND } : a;break;default:
        return null;}var e = this._parseURI(d.src);null != e && (d.ext = e[6]), null == d.type && (d.type = this._getTypeByExtension(d.ext));var f = "",
        g = c || this._basePath,
        h = d.src;if (e && null == e[1] && null == e[3]) if (b) {
      f = b;var i = this._parsePath(b);h = b + h, null != g && i && null == i[1] && null == i[2] && (f = g + f);
    } else null != g && (f = g);if (d.src = f + d.src, d.path = f, (d.type == createjs.LoadQueue.JSON || d.type == createjs.LoadQueue.MANIFEST) && (d._loadAsJSONP = null != d.callback), d.type == createjs.LoadQueue.JSONP && null == d.callback) throw new Error("callback is required for loading JSONP requests.");(void 0 === d.tag || null === d.tag) && (d.tag = this._createTag(d)), (void 0 === d.id || null === d.id || "" === d.id) && (d.id = h);var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];if (j) {
      var k = j.callback.call(j.scope, d.src, d.type, d.id, d.data, f, this);if (k === !1) return null;k === !0 || (null != k.src && (d.src = k.src), null != k.id && (d.id = k.id), null != k.tag && (d.tag = k.tag), null != k.completeHandler && (d.completeHandler = k.completeHandler), k.type && (d.type = k.type), e = this._parseURI(d.src), null != e && null != e[6] && (d.ext = e[6].toLowerCase()));
    }return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, d;
  }, b._createLoader = function (a) {
    var b = this.useXHR;switch (a.type) {case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:
        b = !a._loadAsJSONP;break;case createjs.LoadQueue.XML:case createjs.LoadQueue.TEXT:
        b = !0;break;case createjs.LoadQueue.SOUND:case createjs.LoadQueue.JSONP:
        b = !1;break;case null:
        return null;}return b ? new createjs.XHRLoader(a, this._crossOrigin) : new createjs.TagLoader(a);
  }, b._loadNext = function () {
    if (!this._paused) {
      this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
        var b = this._loadQueue[a];if (this.maintainScriptOrder && b instanceof createjs.TagLoader && b.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
          if (this._currentlyLoadingScript) continue;this._currentlyLoadingScript = !0;
        }this._loadQueue.splice(a, 1), a--, this._loadItem(b);
      }
    }
  }, b._loadItem = function (a) {
    a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load();
  }, b._handleFileError = function (a) {
    var b = a.target;this._numItemsLoaded++, this._updateProgress();var c = new createjs.Event("error");c.text = "FILE_LOAD_ERROR", c.item = b.getItem(), this._sendError(c), this.stopOnError || (this._removeLoadItem(b), this._loadNext());
  }, b._handleFileComplete = function (a) {
    var b = a.target,
        c = b.getItem();if (this._loadedResults[c.id] = b.getResult(), b instanceof createjs.XHRLoader && (this._loadedRawResults[c.id] = b.getResult(!0)), this._removeLoadItem(b), this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT) {
      if (!(b instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, c)] = c, this._checkScriptLoadOrder(b), void 0;this._currentlyLoadingScript = !1;
    }if (delete c._loadAsJSONP, c.type == createjs.LoadQueue.MANIFEST) {
      var d = b.getResult();null != d && void 0 !== d.manifest && this.loadManifest(d, !0);
    }this._processFinishedLoad(c, b);
  }, b._processFinishedLoad = function (a, b) {
    this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(a, b), this._loadNext();
  }, b._checkScriptLoadOrder = function () {
    for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
      var c = this._loadedScripts[b];if (null === c) break;if (c !== !0) {
        var d = this._loadedResults[c.id];(document.body || document.getElementsByTagName("body")[0]).appendChild(d), this._processFinishedLoad(c), this._loadedScripts[b] = !0;
      }
    }
  }, b._removeLoadItem = function (a) {
    for (var b = this._currentLoads.length, c = 0; b > c; c++) {
      if (this._currentLoads[c] == a) {
        this._currentLoads.splice(c, 1);break;
      }
    }
  }, b._handleProgress = function (a) {
    var b = a.target;this._sendFileProgress(b.getItem(), b.progress), this._updateProgress();
  }, b._updateProgress = function () {
    var a = this._numItemsLoaded / this._numItems,
        b = this._numItems - this._numItemsLoaded;if (b > 0) {
      for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) {
        c += this._currentLoads[d].progress;
      }a += c / b * (b / this._numItems);
    }this._sendProgress(a);
  }, b._disposeItem = function (a) {
    delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src];
  }, b._createTag = function (a) {
    var b = null;switch (a.type) {case createjs.LoadQueue.IMAGE:
        return b = document.createElement("img"), "" == this._crossOrigin || this._isLocal(a) || (b.crossOrigin = this._crossOrigin), b;case createjs.LoadQueue.SOUND:
        return b = document.createElement("audio"), b.autoplay = !1, b;case createjs.LoadQueue.JSON:case createjs.LoadQueue.JSONP:case createjs.LoadQueue.JAVASCRIPT:case createjs.LoadQueue.MANIFEST:
        return b = document.createElement("script"), b.type = "text/javascript", b;case createjs.LoadQueue.CSS:
        return b = this.useXHR ? document.createElement("style") : document.createElement("link"), b.rel = "stylesheet", b.type = "text/css", b;case createjs.LoadQueue.SVG:
        return this.useXHR ? b = document.createElement("svg") : (b = document.createElement("object"), b.type = "image/svg+xml"), b;}return null;
  }, b._getTypeByExtension = function (a) {
    if (null == a) return createjs.LoadQueue.TEXT;switch (a.toLowerCase()) {case "jpeg":case "jpg":case "gif":case "png":case "webp":case "bmp":
        return createjs.LoadQueue.IMAGE;case "ogg":case "mp3":case "wav":
        return createjs.LoadQueue.SOUND;case "json":
        return createjs.LoadQueue.JSON;case "xml":
        return createjs.LoadQueue.XML;case "css":
        return createjs.LoadQueue.CSS;case "js":
        return createjs.LoadQueue.JAVASCRIPT;case "svg":
        return createjs.LoadQueue.SVG;default:
        return createjs.LoadQueue.TEXT;}
  }, b._sendFileProgress = function (a, b) {
    if (this._isCanceled()) return this._cleanUp(), void 0;if (this.hasEventListener("fileprogress")) {
      var c = new createjs.Event("fileprogress");c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c);
    }
  }, b._sendFileComplete = function (a, b) {
    if (!this._isCanceled()) {
      var c = new createjs.Event("fileload");c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c);
    }
  }, b._sendFileStart = function (a) {
    var b = new createjs.Event("filestart");b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b);
  }, b.toString = function () {
    return "[PreloadJS LoadQueue]";
  }, createjs.LoadQueue = a;var d = function d() {};d.init = function () {
    var a = navigator.userAgent;d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1;
  }, d.init(), createjs.LoadQueue.BrowserDetect = d;
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = function a(_a3) {
    this.init(_a3);
  },
      b = a.prototype = new createjs.AbstractLoader();b._loadTimeout = null, b._tagCompleteProxy = null, b._isAudio = !1, b._tag = null, b._jsonResult = null, b.init = function (a) {
    this._item = a, this._tag = a.tag, this._isAudio = window.HTMLAudioElement && a.tag instanceof window.HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this);
  }, b.getResult = function () {
    return this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST ? this._jsonResult : this._tag;
  }, b.cancel = function () {
    this.canceled = !0, this._clean();
  }, b.load = function () {
    var a = this._item,
        b = this._tag;clearTimeout(this._loadTimeout);var c = createjs.LoadQueue.LOAD_TIMEOUT;0 == c && (c = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), c), this._isAudio && (b.src = null, b.preload = "auto"), b.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (b.onstalled = createjs.proxy(this._handleStalled, this), b.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (b.onload = createjs.proxy(this._handleLoad, this), b.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));var d = this.buildPath(a.src, a.values);switch (a.type) {case createjs.LoadQueue.CSS:
        b.href = d;break;case createjs.LoadQueue.SVG:
        b.data = d;break;default:
        b.src = d;}if (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST) {
      if (null == a.callback) throw new Error("callback is required for loading JSONP requests.");if (null != window[a.callback]) throw new Error('JSONP callback "' + a.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');window[a.callback] = createjs.proxy(this._handleJSONPLoad, this);
    }(a.type == createjs.LoadQueue.SVG || a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST || a.type == createjs.LoadQueue.JAVASCRIPT || a.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = b.style.visibility, b.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(b)), null != b.load && b.load();
  }, b._handleJSONPLoad = function (a) {
    this._jsonResult = a;
  }, b._handleTimeout = function () {
    this._clean();var a = new createjs.Event("error");a.text = "PRELOAD_TIMEOUT", this._sendError(a);
  }, b._handleStalled = function () {}, b._handleError = function () {
    this._clean();var a = new createjs.Event("error");this._sendError(a);
  }, b._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);var a = this.getItem().tag;("loaded" == a.readyState || "complete" == a.readyState) && this._handleLoad();
  }, b._handleLoad = function () {
    if (!this._isCanceled()) {
      var a = this.getItem(),
          b = a.tag;if (!(this.loaded || this._isAudio && 4 !== b.readyState)) {
        switch (this.loaded = !0, a.type) {case createjs.LoadQueue.SVG:case createjs.LoadQueue.JSON:case createjs.LoadQueue.JSONP:case createjs.LoadQueue.MANIFEST:case createjs.LoadQueue.CSS:
            b.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(b);}this._clean(), this._sendComplete();
      }
    }
  }, b._clean = function () {
    clearTimeout(this._loadTimeout);var a = this.getItem(),
        b = a.tag;null != b && (b.onload = null, b.removeEventListener && b.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), b.onstalled = null, b.onprogress = null, b.onerror = null, null != b.parentNode && a.type == createjs.LoadQueue.SVG && a.type == createjs.LoadQueue.JSON && a.type == createjs.LoadQueue.MANIFEST && a.type == createjs.LoadQueue.CSS && a.type == createjs.LoadQueue.JSONP && b.parentNode.removeChild(b));var a = this.getItem();(a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.MANIFEST) && (window[a.callback] = null);
  }, b.toString = function () {
    return "[PreloadJS TagLoader]";
  }, createjs.TagLoader = a;
}(), undefined.createjs = undefined.createjs || {}, function () {
  "use strict";
  var a = function a(_a4, b) {
    this.init(_a4, b);
  },
      b = a.prototype = new createjs.AbstractLoader();b._request = null, b._loadTimeout = null, b._xhrLevel = 1, b._response = null, b._rawResponse = null, b._crossOrigin = "", b.init = function (a, b) {
    this._item = a, this._crossOrigin = b, !this._createXHR(a);
  }, b.getResult = function (a) {
    return a && this._rawResponse ? this._rawResponse : this._response;
  }, b.cancel = function () {
    this.canceled = !0, this._clean(), this._request.abort();
  }, b.load = function () {
    if (null == this._request) return this._handleError(), void 0;if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel) {
      var a = createjs.LoadQueue.LOAD_TIMEOUT;if (0 == a) a = createjs.LoadQueue.loadTimeout;else try {
        console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout");
      } catch (b) {}this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), a);
    }this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);try {
      this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send();
    } catch (c) {
      var d = new createjs.Event("error");d.error = c, this._sendError(d);
    }
  }, b.getAllResponseHeaders = function () {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  }, b.getResponseHeader = function (a) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
  }, b._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.Event("progress");b.loaded = a.loaded, b.total = a.total, this._sendProgress(b);
    }
  }, b._handleLoadStart = function () {
    clearTimeout(this._loadTimeout), this._sendLoadStart();
  }, b._handleAbort = function () {
    this._clean();var a = new createjs.Event("error");a.text = "XHR_ABORTED", this._sendError(a);
  }, b._handleError = function () {
    this._clean();var a = new createjs.Event("error");this._sendError(a);
  }, b._handleReadyStateChange = function () {
    4 == this._request.readyState && this._handleLoad();
  }, b._handleLoad = function () {
    if (!this.loaded) {
      if (this.loaded = !0, !this._checkError()) return this._handleError(), void 0;this._response = this._getResponse(), this._clean();var a = this._generateTag();a && this._sendComplete();
    }
  }, b._handleTimeout = function (a) {
    this._clean();var b = new createjs.Event("error");b.text = "PRELOAD_TIMEOUT", this._sendError(a);
  }, b._checkError = function () {
    var a = parseInt(this._request.status);switch (a) {case 404:case 0:
        return !1;}return !0;
  }, b._getResponse = function () {
    if (null != this._response) return this._response;if (null != this._request.response) return this._request.response;try {
      if (null != this._request.responseText) return this._request.responseText;
    } catch (a) {}try {
      if (null != this._request.responseXML) return this._request.responseXML;
    } catch (a) {}return null;
  }, b._createXHR = function (a) {
    var b = this._isCrossDomain(a),
        c = null;if (b && window.XDomainRequest) c = new XDomainRequest();else if (window.XMLHttpRequest) c = new XMLHttpRequest();else try {
      c = new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (d) {
      try {
        c = new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (d) {
        try {
          c = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (d) {
          return !1;
        }
      }
    }createjs.LoadQueue.isText(a.type) && c.overrideMimeType && c.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof c.responseType ? 2 : 1;var e = null;return e = a.method == createjs.LoadQueue.GET ? this.buildPath(a.src, a.values) : a.src, c.open(a.method || createjs.LoadQueue.GET, e, !0), b && c instanceof XMLHttpRequest && 1 == this._xhrLevel && c.setRequestHeader("Origin", location.origin), a.values && a.method == createjs.LoadQueue.POST && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(a.type) && (c.responseType = "arraybuffer"), this._request = c, !0;
  }, b._clean = function () {
    clearTimeout(this._loadTimeout);var a = this._request;a.onloadstart = null, a.onprogress = null, a.onabort = null, a.onerror = null, a.onload = null, a.ontimeout = null, a.onloadend = null, a.onreadystatechange = null;
  }, b._generateTag = function () {
    var a = this._item.type,
        b = this._item.tag;switch (a) {case createjs.LoadQueue.IMAGE:
        return b.onload = createjs.proxy(this._handleTagReady, this), "" != this._crossOrigin && (b.crossOrigin = "Anonymous"), b.src = this.buildPath(this._item.src, this._item.values), this._rawResponse = this._response, this._response = b, !1;case createjs.LoadQueue.JAVASCRIPT:
        return b = document.createElement("script"), b.text = this._response, this._rawResponse = this._response, this._response = b, !0;case createjs.LoadQueue.CSS:
        var c = document.getElementsByTagName("head")[0];if (c.appendChild(b), b.styleSheet) b.styleSheet.cssText = this._response;else {
          var d = document.createTextNode(this._response);b.appendChild(d);
        }return this._rawResponse = this._response, this._response = b, !0;case createjs.LoadQueue.XML:
        var e = this._parseXML(this._response, "text/xml");return this._rawResponse = this._response, this._response = e, !0;case createjs.LoadQueue.SVG:
        var e = this._parseXML(this._response, "image/svg+xml");return this._rawResponse = this._response, null != e.documentElement ? (b.appendChild(e.documentElement), this._response = b) : this._response = e, !0;case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:
        var f = {};try {
          f = JSON.parse(this._response);
        } catch (g) {
          f = g;
        }return this._rawResponse = this._response, this._response = f, !0;}return !0;
  }, b._parseXML = function (a, b) {
    var c = null;try {
      if (window.DOMParser) {
        var d = new DOMParser();c = d.parseFromString(a, b);
      } else c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a);
    } catch (e) {}return c;
  }, b._handleTagReady = function () {
    this._sendComplete();
  }, b.toString = function () {
    return "[PreloadJS XHRLoader]";
  }, createjs.XHRLoader = a;
}(), "object" != (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
  "use strict";
  function f(a) {
    return 10 > a ? "0" + a : a;
  }function quote(a) {
    return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
      var b = meta[a];return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }function str(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = gap,
        i = b[a];switch (i && "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i === "undefined" ? "undefined" : _typeof(i)) {case "string":
        return quote(i);case "number":
        return isFinite(i) ? String(i) : "null";case "boolean":case "null":
        return String(i);case "object":
        if (!i) return "null";if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
          for (f = i.length, c = 0; f > c; c += 1) {
            g[c] = str(c, i) || "null";
          }return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e;
        }if (rep && "object" == (typeof rep === "undefined" ? "undefined" : _typeof(rep))) for (f = rep.length, c = 0; f > c; c += 1) {
          "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
        } else for (d in i) {
          Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
        }return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e;}
  }"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf();
  });var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
      rep;"function" != typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
    var d;if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) {
      indent += " ";
    } else "string" == typeof c && (indent = c);if (rep = b, b && "function" != typeof b && ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || "number" != typeof b.length)) throw new Error("JSON.stringify");return str("", { "": a });
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk(a, b) {
      var c,
          d,
          e = a[b];if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (c in e) {
        Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
      }return reviver.call(a, b, e);
    }var j;if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;throw new SyntaxError("JSON.parse");
  });
}();
var ANIMATION_END_NAME,
    ANIMATION_END_NAMES,
    BindShare,
    LoadFinished,
    TRANSITION_END_NAME,
    TRANSITION_END_NAMES,
    VENDORS,
    _Progress,
    _finishedlist,
    _wechat,
    _wechat_bool,
    _wechat_f,
    app,
    beginload,
    beijing,
    cdn,
    css3Prefix,
    debug,
    defaultShare,
    fShare,
    handleFileLoad,
    hosts,
    i,
    j,
    len,
    loadList,
    mTestElement,
    my,
    pages,
    preload,
    reloadWechat,
    shareFriend,
    shareTimeline,
    shenyang,
    indexOf = [].indexOf;

VENDORS = ["Moz", 'webkit', 'ms', 'O'];

TRANSITION_END_NAMES = {
  "Moz": "transitionend",
  "webkit": "webkitTransitionEnd",
  "ms": "MSTransitionEnd",
  "O": "oTransitionEnd"
};

ANIMATION_END_NAMES = {
  "Moz": "animationend",
  "webkit": "webkitAnimationEnd",
  "ms": "MSAnimationEnd",
  "O": "oAnimationEnd"
};

mTestElement = document.createElement("div");

for (j = 0, len = VENDORS.length; j < len; j++) {
  i = VENDORS[j];
  css3Prefix = i;
  if (css3Prefix + "Transition" in mTestElement.style) {
    break;
  }
  css3Prefix = false;
}

if (css3Prefix) {
  TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
  ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

(function () {
  var lastTime, vendors, x;
  lastTime = 0;
  vendors = ["webkit", "moz"];
  x = 0;
  while (x > vendors.length && !window.requestAnimationFrame) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    // Webkit中此取消方法的名字变了
    window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    ++x;
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime, id, timeToCall;
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

my = {};

my.getid = function (id) {
  return document.getElementById(id);
};

my.getclass = function (cls) {
  return document.getElementsByClassName(cls);
};

my.getbyname = function (name) {
  return document.getElementsByName(name);
};

my.createObjectURL = function (file) {
  if (window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) {
    return window.webkitURL.createObjectURL(file);
  } else {
    return window.URL.createObjectURL(file);
  }
};

_wechat_f = {
  "appid": "",
  "img_url": "",
  "img_width": 200,
  "img_height": 200,
  "link": "",
  "desc": "",
  "title": ""
};

_wechat = {
  "appid": "",
  "img_url": "",
  "img_width": 200,
  "img_height": 200,
  "link": "",
  "desc": "",
  "title": ""
};

_wechat_bool = false;

reloadWechat = function reloadWechat() {
  shareFriend();
  return shareTimeline();
};

shareFriend = function shareFriend() {
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('sendAppMessage', _wechat_f);
  }
  return document.title = _wechat_f.title;
};

shareTimeline = function shareTimeline() {
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('shareTimeline', _wechat);
  }
  return document.title = _wechat.title;
};

document.addEventListener('WeixinJSBridgeReady', function () {
  _wechat_bool = true;
  WeixinJSBridge.on('menu:share:appmessage', function (argv) {
    return shareFriend();
  });
  return WeixinJSBridge.on('menu:share:timeline', function (argv) {
    return shareTimeline();
  });
});

// nav = navigator.userAgent.toLowerCase()
BindShare = function BindShare(content) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var pic = arguments[2];

  var list;
  list = {
    "qweibo": "http://v.t.qq.com/share/share.php?title={title}&url={url}&pic={pic}",
    "renren": "http://share.renren.com/share/buttonshare.do?title={title}&link={url}&pic={pic}",
    "weibo": "http://v.t.sina.com.cn/share/share.php?title={title}&url={url}&pic={pic}",
    "qzone": "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pic={pic}",
    "facebook": "http://www.facebook.com/sharer/sharer.php?s=100&p[url]={url}}&p[title]={title}&p[summary]={title}&pic={pic}",
    "twitter": "https://twitter.com/intent/tweet?text={title}&pic={pic}",
    "kaixin": "http://www.kaixin001.com/rest/records.php?content={title}&url={url}&pic={pic}",
    "douban": "http://www.douban.com/share/service?bm=&image={pic}&href={url}&updated=&name={title}"
  };
  return $("a[data-share]").each(function (e) {
    return $(this).attr("href", fShare(list[$(this).data('share')], content, url, pic));
  });
};

fShare = function fShare(url, content, sendUrl) {
  var pic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  var backUrl, shareContent;
  // 分享内容
  content = content;
  shareContent = encodeURIComponent(content);
  pic = encodeURIComponent(pic);
  url = url.replace("{title}", shareContent);
  url = url.replace("{pic}", pic);
  // 分享地址
  backUrl = encodeURIComponent(sendUrl);
  url = url.replace("{url}", backUrl);
  // console.log url
  // window.location.href url
  return url;
};

preload = null;

// 必要加载的图片
loadList = [{
  id: "logo",
  src: "../libs/img/loading.png"
}];

beginload = function beginload($scope, callback) {
  var handleComplete;
  if (preload != null) {
    return "";
  }
  handleComplete = function handleComplete() {
    return LoadFinished("img", $scope, callback);
  };
  preload = new createjs.LoadQueue();
  preload.on('fileload', handleFileLoad, this);
  preload.on('complete', handleComplete, this);
  return preload.loadManifest(loadList);
};

_Progress = 0;

handleFileLoad = function handleFileLoad() {
  var Percentage;
  _Progress++;
  Percentage = Math.ceil(_Progress / loadList.length * 100);
  return console.log("Load:", Percentage);
};

_finishedlist = [{
  name: "img",
  load: false
}, {
  name: "angular",
  load: false
}];

LoadFinished = function LoadFinished(name, $scope, callback) {
  var a, gotoNext, k, l, len1, len2;
  for (k = 0, len1 = _finishedlist.length; k < len1; k++) {
    a = _finishedlist[k];
    if (a.name === name) {
      a.load = true;
    }
  }
  gotoNext = true;
  for (l = 0, len2 = _finishedlist.length; l < len2; l++) {
    a = _finishedlist[l];
    if (a.load === false) {
      gotoNext = false;
      break;
    }
  }
  if (gotoNext) {
    $scope.loaded = true;
    if (name !== "angular") {
      return $scope.$apply(function () {
        if (typeof callback === "function") {
          return callback.call();
        }
      });
    }
  }
};

beijing = [{
  "name": "朝阳区",
  "value": 0,
  "list": [["P11527", "滔搏投资北京市顺南大街利莹百货新世界四期Originals店", "朝阳区顺南大街16号新世纪利莹百货4楼"], ["P15239", "北京宝盛道吉北京市建国路新世界彩旋百货Originals店", "朝阳区建国路93号新世界彩旋百货6楼"], ["P17672", "北京宝盛道吉北京市常通路长楹龙湖购物中心Originals店", "朝阳区常通路2号龙湖1楼"], ["P05777", "北京宝盛道吉北京新世界商场3期店", "朝阳区建国路11号万达广场6楼"], ["P13216", "北京新奥天虹阿迪店店", "朝阳区湖景东路9号新奥天虹商场-2楼"], ["P12505", "北京宝盛道吉亚运村北辰店", "朝阳区慧忠路4号安慧里1楼"], ["P03465", "上海锐力健身装备北京蓝岛大厦店", "朝阳区朝阳门外大街8号蓝岛大厦4楼"], ["P05702", "上海锐力健身装备北京蓝岛金隅百货店", "安宁庄东路1号蓝岛金隅百货1楼"], ["P08071", "北京宝盛道吉新世界四期百货店", "望京新世界B1区1-3地顺南大街16号新世纪利莹百货5楼"], ["P06973", "北京宝盛道吉北京久隆百货店", "朝阳区酒仙桥南路39京客隆3楼"], ["P08332", "北京宝盛道吉北京机场国泰店", "朝阳区南平街1号国阳百货2楼"], ["P08601", "北京宝盛道吉北京双桥国泰店", "朝阳区双桥路2号国泰百货4楼"], ["P09890", "北京法雅北京十里堡西单商场阿迪达斯店", "朝阳区朝阳路3甲号西单商场5楼"], ["P13863", "北京宝盛道吉北京颐堤港AD店", "酒仙桥路18号颐堤港1楼"], ["P00893", "北京法雅亚运村华堂商场店", "北京市朝阳区北四环东路108号华堂商场4楼"], ["P00943", "北京法雅北京法雅北辰店", "朝阳区安立路8号北辰购物中心5楼"], ["P00892", "北京法雅北京十里堡华堂商场Adidas店", "朝阳区朝阳路2乙号华堂商场4楼"], ["P10257", "百丽鞋业-华北分公司北京太阳宫百盛购物中心店", "朝阳区七圣中街12号百盛5楼"], ["P04401", "滔搏投资北京望京华联店", "北京市朝阳区广顺北大街33号凯德Mall3楼"], ["P07986", "滔搏投资北京双井富丽城店", "朝阳区东三环中路65号富力广场购物中心3楼"], ["P13889", "北京法雅双桥东星时尚广场阿迪店", "北京市朝阳区双桥路2号东星时尚广场1楼"], ["P00895", "北京法雅北京安贞华联商厦店", "北京市朝阳区安贞路5号华联商厦4楼"]]
}, {
  "name": "西城区",
  "list": [["P12380", "滔搏投资北京市阜成门华联商厦 Originals店", "西城区阜成门外大街1号华联商厦3楼"], ["P13068", "北京宝盛道吉北京市复兴路凯德晶品购物中心Originals店", "西城区复兴路51号凯德晶品购物中心2 楼"], ["P15934", "北京宝盛道吉北京市西单君太百货Originals店", "西城区西单北大街133号君太百货7楼"], ["P16964", "北京宝盛道吉北京市北大街新华百货Originals店", "西城区北大街1号新华百货4楼"], ["P00317", "迈盛悦合北京长安店", "西城区复兴门外大街15号长安商场4楼"], ["P01813", "百丽鞋业-华北分公司北京复兴门百盛店", "北京西城区复兴门内大街101号百盛5楼"], ["P02652", "北京法雅华堂商场西直门店", "西城区西直门外大街112号华堂商场4楼"], ["P01369", "北京法雅北京西单太运广场店", "西城区西单北大街133号君太百货7楼"], ["P00894", "北京法雅阜成门华联店", "西城区阜成门外大街1号华联商厦4楼"], ["P03573", "滔搏投资北京西单文化广场店", "西城区西单北大街180号西单文化广场1楼"], ["P12760", "北京法雅北京马连道万家上品阿迪达斯店", "西城区马连道路甲10号万家上品折扣3楼"], ["P07272", "百丽鞋业-华北分公司北京中粮西单大悦城店", "北京市西城区西单北大街131号西单北大街131号西单大悦城5楼"], ["P02537", "北京宝盛道吉北京中友百货店", "西城西单北大街176号汉光百货-1楼"]]
}, {
  "name": "海淀区",
  "list": [["P14861", "北京宝盛道吉北京市远大路金源新燕莎Originals店", "海淀远大路1号世纪金源购物中心2楼"], ["P15241", "北京法雅北京市公主坟翠微百货 Originals店", "北京市海淀区复兴路33号翠微百货3楼"], ["P15532", "北京法雅北京市北三环西路双安商场Originals店", "海淀区北三环西路38号双安商场3楼"], ["P02559", "迈盛悦合城乡贸易中心店", "海淀区复兴路23甲号城乡华懋商厦3楼"], ["P00315", "迈盛悦合城乡华懋店", "海淀复兴路23号城乡华懋商厦5楼"], ["P01324", "迈盛悦合双安店", "海淀区三环西路38号双安商场5楼"], ["P00742", "百丽鞋业-华北分公司北京甘家口店", "北京市海淀区三里河路17号甘家口商场4楼"], ["P03498", "百丽鞋业-华北分公司北京华宇时尚购物中心店", "海淀区中关村南大街2号华宇时尚购物中心-1楼"], ["P02536", "北京宝盛道吉北京世纪金源店", "海淀区远大路1号金源新燕莎3楼"], ["P02539", "北京宝盛道吉公主坟翠微AD店", "海淀区复兴路33号翠微百货3楼"], ["P02542", "北京宝盛道吉北京翠微牡丹园店", "海淀区花园路2号翠微百货 3楼"], ["P06988", "北京法雅北京海淀枫蓝国际店", "海淀区西直门北大街32号枫蓝国际中心3楼"], ["P06998", "北京法雅北京五道口华联店", "海淀区成府路28号华联商厦4楼"], ["P13923", "百丽鞋业-华北分公司北京卓展adidas店", "北京市海淀区复兴路69号卓展购物中心1楼"], ["P13607", "宝盛道吉双安街铺AD店", "北京市海淀区北三环西路38号双安商场1楼"], ["P12765", "北京宝盛道吉大成翠微AD店", "海淀区大成路1甲号翠微百货3楼"], ["P09647", "北京法雅北京清河翠微阿迪达斯店", "海淀区清河嘉园1号翠微百货5楼"], ["P11533", "北京宝盛道吉北京华润五彩城AD店", "海淀区清河中街68号华润五彩城1楼"], ["P02540", "北京宝盛道吉北京中关村当代商城店", "海淀区中关村大街40号当代商城5楼"]]
}, {
  "name": "东城区",
  "list": [["P15238", "北京宝盛道吉北京市崇文门新世界百货Originals店", "北京市东城区崇文门外大街3号新世界百货4楼"], ["P16482", "北京法雅北京市王府井大街新燕莎金街购物广场Originals店", "东城区王府井大街301号新燕莎金街购物广场4楼"], ["P00312", "迈盛悦合百货大楼店", "东城区王府井大街255号北京百货5楼"], ["P05378", "北京宝盛道吉北京新街口新华百货店", "东城区新街口北大街1号新华百货5楼"], ["P09852", "北京宝盛道吉北京百荣世贸Adidas店", "东城区永定门外大街101号百荣世贸商城6楼"], ["P00194", "北京法雅北京利生店", "东城区王府井大街201号利生体育商厦1楼"], ["P02295", "北京法雅新世界(二期)店", "东城区崇文门外大街3号新世界百货-1楼"], ["P00322", "北京宝盛道吉新世界商场一期店", "东城区崇文门外大街3号新世界百货 4楼"]]
}, {
  "name": "丰台区",
  "list": [["P10293", "北京宝盛道吉北京丰台首地大峡谷AD店", "丰台区南三环西路16号大峡谷购物中心3楼"], ["P10775", "北京法雅北京城乡商厦阿迪达斯店", "丰台区小屯路149号城乡超市2楼"], ["P12108", "北京恒源商厦店", "丰台区福宫路3号恒源商厦4楼"], ["P13506", "宝盛道吉新华青塔AD店", "北京市丰台区西四环中路五棵松桥南郑常庄新华百货B1"], ["P14533", "滔搏投资百丽鞋业-华北分公司北京华冠天地公益桥店", "北京市丰台区角门路18号华冠天地1楼"], ["P01881", "北京法雅丰台北路华堂商场店", "丰台区丰台北路79号华堂商场3楼"], ["P11412", "北京法雅北京方仕国际运动城店", "丰台区南苑路1号方仕国际商贸城4楼"], ["P12135", "北京宝盛道吉分钟寺兴业阳光AD店", "丰台区南三环东路2号阳光生活购物广场1楼"], ["P08005", "北京法雅北京资和信百货阿迪达斯店", "丰台区西四环南路1号资和信百货6楼"]]
}, {
  "name": "顺义区",
  "list": [["P15097", "北京宝盛道吉北京市新顺南大街新世界百货Originals店", "北京市顺义区新顺南大街18号新世界百货2楼"], ["P06068", "百丽鞋业-华北分公司北京顺义西单大卖场店", "北京市顺义区石园西区大街3号鑫海韵通百货1楼"]]
}, {
  "name": "大兴区",
  "list": [["P16483", "滔搏投资北京市东大街大兴王府井百货Originals店", "大兴区东大街1号王府井百货3楼"]]
}, {
  "name": "通州区",
  "list": [["P17229", "滔搏投资北京市云景东路贵友大厦Originals店", "通州区景东路1号贵友大厦2楼"], ["P06210", "北京宝盛道吉北京通州华联店", "通州区新华大街甲92甲号华联商厦2楼"], ["P11059", "北京宝盛道吉通州蓝岛AD店", "通州区云景东路347号蓝岛大厦4楼"]]
}, {
  "name": "昌平区",
  "list": [["P17230", "滔搏投资北京市府学路国泰百货Originals店", "昌平府学路24号国泰百货 4楼"], ["P08444", "北京宝盛道吉北京永旺百货店", "昌平区北清路1号永旺国际5楼"]]
}, {
  "name": "宣武区",
  "list": [["P02541", "北京宝盛道吉北京SOGO店", "宣武宣武门外大街8号庄胜广场5楼"], ["P10867", "迈盛悦合广安门天虹店", "宣武区广安门外大街168号天虹商场3楼"]]
}, {
  "name": "房山区",
  "list": [["P17233", "滔搏投资北京市关西路华冠购物中心Originals店", "房山区关西路14号华冠购物中心2楼"], ["P14380", "百丽鞋业-华北分公司北京华冠天地长阳店Adidas店", "北京市房山区长阳镇太平庄东里20号华冠购物中心1楼"]]
}, {
  "name": "石景山区",
  "list": [["P04142", "北京法雅北京星座商城店", "北京市石景山区石景山路45号星座商厦4楼"]]
}];

shenyang = [{
  name: "沈河区",
  list: [["P10071", "西安宝秦沈阳分公司沈阳市中街路恒隆广场Originals店", "沈河区中街路128号恒隆广场1楼"], ["P13826", "西安宝秦沈阳分公司沈阳市中街路0101流行馆Originals店", "沈阳市沈河区中街路中街路205号0101流行馆1楼"], ["P15720", "滔搏投资沈阳市中街路兴隆大家庭商场Originals店", "沈河区中街路115号兴隆大家庭商场1楼"], ["P16044", "西安宝秦沈阳分公司沈阳市中街路运动汇Originals店", "沈河区中街路190号运动汇1楼"], ["P02258", "百丽鞋业-东北分公司沈阳兴隆大家庭店", "沈河区中街路115号兴隆大家庭商场1楼"], ["P13448", "百丽鞋业-东北分公司沈阳铁西茂业百货adidas店", "沈辽东路79号茂业百货5楼"], ["P06937", "上海鹏达沈阳都会名城店", "沈河区中街路235号1楼"], ["P02946", "上海鹏达沈阳商业城店", "沈河区中街路212号商业城5楼"], ["P03685", "滔搏投资沈阳流行馆AD店", "沈河区中街路205号0101流行馆5楼"], ["P04355", "西安宝秦贸易沈阳分公司沈阳运动源店", "沈河区中街路211号运动源商场3楼"], ["P04187", "百丽鞋业-东北分公司朗沈阳卓展店", "沈阳市沈河区北京街7-1号卓展购物中心5楼"], ["P02926", "上海鹏达沈阳运动汇店", "沈阳市沈河区中街路190号运动汇3楼"]]
}, {
  name: "和平区",
  list: [["P14345", "西安宝秦沈阳分公司沈阳市太原北街中兴大厦Originals店", "沈阳市和平区太原北街太原北街86号中兴大厦5楼"], ["P05278", "百丽鞋业-东北分公司沈阳中华路联营百货店", "和平区中华路63号欧亚商贸5楼"], ["P03038", "百丽鞋业-东北分公司沈阳五环运动商城店", "和平区民主路126号五环运动商城1楼"], ["P02942", "上海鹏达沈阳中兴店", "和平区太原北街86号中兴大厦5楼"], ["P03417", "上海鹏达沈阳市中华路街面店", "辽宁省沈阳市和平区中华路53号"], ["P02928", "上海鹏达沈阳太原街百盛店", "和平区太原南街21号百盛6楼"], ["P10657", "上海鹏达沈阳茂业店", "和平区青年大街185号茂业百货5楼"], ["P11446", "上海鹏达沈阳青年大街万象城店", "和平区青年大街288号万象城5楼"], ["P03928", "滔搏投资沈阳华联商厦店", "辽宁省沈阳市和平区太原路北街57号华联商厦5楼"], ["P03757", "上海鹏达沈阳新世界III店", "辽宁省沈阳市和平区中华路中华路88号新世界百货5楼"], ["P02943", "上海鹏达沈阳运动元素店", "和平区中华路45号鹏达运动城3楼"]]
}, {
  name: "皇姑区",
  list: [["P15699", "西安宝秦沈阳分公司沈阳市长江街鹏达运动城Originals店", "皇姑区长江街68号鹏达运动城1楼"], ["P08078", "上海鹏达佳合商场店", "皇姑区长江街68号鹏达运动城3楼"], ["P02921", "上海鹏达沈阳千盛店", "皇姑区长江街99号千盛百货3楼"], ["P05740", "上海鹏达沈阳北行专卖店", "沈阳市皇姑区长江街68号鹏达运动城1楼"]]
}, {
  name: "大东区",
  list: [["P17315", "西安宝秦沈阳分公司沈阳市小东路新玛特Originals店", "大东区小东路1号新玛特1楼"], ["P02948", "上海鹏达沈阳新玛特店", "大东区小东路1号新玛特6楼"], ["P07250", "百丽鞋业-东北分公司沈阳兴隆新光AD店", "大东区新东一街15号兴隆百货1楼"]]
}, {
  name: "铁西区",
  list: [["P06804", "百丽鞋业-东北分公司沈阳铁西新玛特店", "沈阳市铁西区兴华街37号新玛特5楼"], ["P05037", "百丽鞋业-东北分公司沈阳中兴运动城店", "铁西区兴华南街2号滔博运动城2楼"], ["P09529", "百丽鞋业-东北分公司沈阳铁西兴隆大天地AD店", "铁西区沈辽路100号兴隆大天地商场1楼"], ["P13748", "百丽鞋业-东北分公司沈阳北一路万千百货adidas店", "铁西区北一路58号万达百货3楼"], ["P10922", "滔搏投资沈阳万达百货AD店", "兴华街1号万达百货-1楼"], ["P14971", "滔搏投资百丽鞋业-东北分公司沈阳兴隆大都汇阿迪达斯店", "辽宁省沈阳市铁西区建设西路2号兴隆大都汇商场4楼"]]
}, {
  name: "苏家屯区",
  list: [["P03930", "百丽鞋业-东北分公司沈阳市苏家屯区海棠街店", "苏家屯区海棠街39号1楼"]]
}, {
  name: "沈北新区",
  list: [["P11433", "滔搏投资沈阳积家滔搏运动城店", "沈北新区南大街33号积家百货4楼"]]
}];

// @codekit-prepend "../../libs/js/min/preloadjs-0.4.1.min.js"
// @codekit-prepend "../../libs/coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "coffee/global"
// @codekit-prepend "../../libs/coffee/share"
// @codekit-prepend "../../libs/coffee/load"

// @codekit-prepend "city"
debug = false;

// cdn = "http://disk.giccoo.com/projects/"
cdn = "/";

// load list
loadList = [{
  // {id: "logo", src: "#{cdn}libs/img/loading.png"}
  id: "logo",
  src: cdn + "adidas/img/logo.png"
}, {
  id: "m-1",
  src: cdn + "adidas/img/m-1.jpg"
}, {
  id: "w-1",
  src: cdn + "adidas/img/w-1.jpg"
}];

// console.log loadList
// {id: "crown-logo", src: "#{cdn}crown/img/crown-logo.png"}
// {id: "crown-logo2", src: "#{cdn}crown/img/crown-logo.jpg"}
// {id: "page-home-subtitle", src: "#{cdn}crown/img/page-home-subtitle.jpg"}
// {id: "page-home-engine", src: "#{cdn}crown/img/page-home-engine.jpg"}
_wechat_f = {
  "appid": "",
  "img_url": "http://disk.giccoo.com/projects/adidas/img/share.jpg",
  "img_width": 300,
  "img_height": 300,
  "link": "http://m.giccoo.com/adidas",
  "desc": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款",
  "title": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
};

_wechat = {
  "appid": "",
  "img_url": "http://disk.giccoo.com/projects/adidas/img/share.jpg",
  "img_width": 300,
  "img_height": 300,
  "link": "http://m.giccoo.com/adidas",
  "desc": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款",
  "title": "陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款"
};

hosts = "http://g.giccoo.com";

defaultShare = function defaultShare(title) {
  _wechat.title = title;
  _wechat_f.title = title;
  return reloadWechat();
};

pages = ['men2', 'men3', 'men4', 'men5', 'men6', 'women2', 'women3', 'store'];

app = angular.module('kelvin', ["ngRoute", "ngTouch", "ngAnimate"]).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  var k, len1, page;
  $routeProvider.when('/', {
    templateUrl: "home.html",
    controller: "HomeController"
  });
  $routeProvider.when('/rd', {
    templateUrl: "home.html",
    controller: "HomeController"
  });
  for (k = 0, len1 = pages.length; k < len1; k++) {
    page = pages[k];
    $routeProvider.when('/' + page, {
      templateUrl: page + ".html"
    });
  }
  return $routeProvider.when('/:rd', {
    templateUrl: "home.html",
    controller: "HomeController"
  });
}]);

app.run(function ($rootScope, $location) {
  var history;
  history = [];
  // console.log "history",history
  return $rootScope.$on('$routeChangeSuccess', function () {
    var newPage, oldPage;
    newPage = $location.$$path.replace('/', '');
    oldPage = history[history.length - 1] != null ? history[history.length - 1].replace('/', '') : "-1";
    history.push($location.$$path);
    if (oldPage === "-1") {
      return $rootScope.from = "up";
    }
    if (newPage === oldPage) {
      return $rootScope.from = "up";
    }
    if (pages.indexOf(newPage) > pages.indexOf(oldPage)) {
      return $rootScope.from = "up";
    } else {
      return $rootScope.from = "down";
    }
  });
});

// alert "success: "+$rootScope.from
// 主要加载
app.controller('MainController', function ($rootScope, $scope, $location, $http) {
  var orientationChange;
  // console.log "aa"
  $rootScope.hideSubLogo = true;
  $rootScope.CanRun = true;
  if ($("body").height() <= 440) {
    $("body").addClass("iphone4");
  }
  beginload($scope);
  $rootScope.$on("$routeChangeSuccess", function () {
    return LoadFinished("angular", $scope);
  });
  $scope.$watch("loaded", function () {
    if ($scope.loaded) {
      return $(".loaded").removeClass("loaded");
    }
  });
  defaultShare("陈冠希、蔡依林引领街头潮流，演绎经典zx family鞋款");
  orientationChange = function orientationChange() {
    switch (window.orientation) {
      case 0:
        return $scope.$apply(function () {
          return $rootScope.ori = false;
        });
      case 90:
        return $scope.$apply(function () {
          return $rootScope.ori = true;
        });
      case -90:
        return $scope.$apply(function () {
          return $rootScope.ori = true;
        });
      default:
        return $scope.$apply(function () {
          return $rootScope.ori = false;
        });
    }
  };
  window.addEventListener(indexOf.call(window, "onorientationchange") >= 0 ? "orientationchange" : "resize", orientationChange, false);
  // $scope.path = $location.path()	
  return $scope.$on('$locationChangeStart', function (evt, absNewUrl, absOldUrl) {
    var newPage, oldPage;
    // console.log('start', absNewUrl.split("#")[1], absOldUrl.split("#")[1])
    newPage = absNewUrl.split("#")[1];
    oldPage = absOldUrl.split("#")[1];
    $scope.path = newPage === "/" ? "home" : newPage.replace("/", "");
    if (newPage === oldPage) {
      return $rootScope.from = "same";
    }
  });
});

// console.log newPage,oldPage,pages.indexOf(newPage),pages.indexOf(oldPage)
// if pages.indexOf(newPage) > pages.indexOf(oldPage)
// 	$rootScope.from = "down"
// else
// 	$rootScope.from = "up"
// alert "start: "+$rootScope.from
app.controller('HomeController', function ($rootScope, $scope, $location) {
  return $rootScope.home = "home";
});

// $scope.pagename = "home"
app.controller('storeController', function ($rootScope, $scope, $location, $timeout) {
  var tis;
  $scope.city = "beijing";
  // $scope.area = "0"
  tis = this;
  this.changeCity = function () {
    // console.log $scope.city
    tis.area = eval($scope.city);
    $scope.area = tis.area[0];
    return tis.shoplist = tis.area[0].list;
  };

  // console.log tis.area
  this.changed = function () {
    // console.log $scope.area
    tis.shoplist = $scope.area.list;
    return true;
  };
  this.changeCity();
  if ($rootScope.home !== "home") {
    if (!debug) {
      return $location.path("/");
    }
  }
});

app.controller('swipeController', function ($rootScope, $scope, $location, $timeout) {
  // stop()
  $scope.runPageX = function (bool) {
    // console.log "x",bool
    if ($rootScope.swipeleft || $rootScope.swiperight) {
      return false;
    }
    $scope.$apply(function () {
      if (bool) {
        $rootScope.swipeleft = "left";
      } else {
        $rootScope.swiperight = "right";
      }
      return $rootScope.hideSubLogo = false;
    });
    return false;
  };
  $scope.runPage = function (bool, nextPage) {
    // console.log bool,nextPage
    return $scope.$apply(function () {
      // if bool
      // 	$rootScope.from = "down"
      // else
      // 	$rootScope.from = "up"
      // $timeout ->
      return $location.path('/' + nextPage);
    });
  };
  // ,5
  if ($rootScope.home !== "home") {
    if (!debug) {
      return $location.path("/");
    }
  }
});

app.controller('menController', function ($rootScope, $scope, $location, $timeout) {
  var tis;
  this.note = true;
  tis = this;
  this.popshow = false;
  this.canclick = true;
  this.noctrl = "all";
  this.open = "slideToLeft delay-15 duration-5";
  this.Pop = function (show) {
    if (!tis.canclick) {
      // console.log show
      return false;
    }
    tis.canclick = false;
    if (!tis.note) {
      tis.popshow = show;
      return $timeout(function () {
        return tis.canclick = true;
      }, 200);
    }
  };
  return $rootScope.$watch("swipeleft", function (n) {
    // console.log "left now"
    if ($rootScope.swipeleft === "left") {
      tis.note = false;
      tis.open = "open";
      tis.noctrl = "up";
      return $(".men.mark-img").addClass("open");
    }
  });
});

app.controller('women2Controller', function ($rootScope, $scope, $location, $timeout) {
  // alert "women2-controller"
  return setTimeout(function () {
    return $("[ng-view]").each(function () {});
    // alert $(this).attr("class")
  }, 10);
});

app.controller('womenController', function ($rootScope, $scope, $location, $timeout) {
  var tis;
  this.note = true;
  tis = this;
  this.popshow = false;
  this.canclick = true;
  this.noctrl = "all";
  this.open = "slideToRight delay-15 duration-5";
  this.Pop = function (show) {
    if (!tis.canclick) {
      // console.log show
      return false;
    }
    tis.canclick = false;
    if (!tis.note) {
      tis.popshow = show;
      return setTimeout(function () {
        return tis.canclick = true;
      }, 200);
    }
  };
  return $rootScope.$watch("swiperight", function (n) {
    // console.log "right now"
    if ($rootScope.swiperight === "right") {
      tis.note = false;
      tis.open = "open";
      tis.noctrl = "up";
      return $(".women.mark-img").addClass("open");
    }
  });
});

app.controller('touchidController', function ($rootScope, $scope, $location, $timeout) {
  var timeout, tis;
  this.light = "none";
  this.sex = "male";
  this.birthday = 0;
  timeout = {};
  tis = this;
  $rootScope.sex = this.sex;
  this.select = function () {
    if (tis.sex === "male") {
      tis.sex = "female";
    } else {
      tis.sex = "male";
    }
    return $rootScope.sex = tis.sex;
  };
  $(".touch-id").on('touchstart', function (evt) {
    evt.preventDefault();
    return $scope.$apply(function () {
      timeout = $timeout(function () {
        return $location.path('/share');
      }, 2000);
      return tis.light = "block";
    });
  });
  return $(".touch-id").on('touchend', function (evt) {
    evt.preventDefault();
    // console.log "touched end"
    return $scope.$apply(function () {
      tis.light = "none";
      return $timeout.cancel(timeout);
    });
  });
});

app.controller('shareController', function ($rootScope, $scope, $location) {
  var female, male;
  female = ["熟女范儿", "汉子范儿", "文艺范儿", "高冷范儿", "卖萌范儿", "纠结范儿"];
  male = ["型男范儿", "闷骚范儿", "暖男范儿", "土豪范儿", "清新范儿", "逆袭范儿"];
  this.text = "";
  this.wechat = false;
  if ($rootScope.sex == null) {
    if (!debug) {
      return $location.path("/");
    }
  }
  if ($rootScope.sex === "female") {
    this.text = female[Math.floor(Math.random() * female.length)];
  } else {
    this.text = male[Math.floor(Math.random() * male.length)];
  }
  this.text = this.text.replace("范儿", "");
  defaultShare("\u3010\u6211\u662F" + this.text + "\u8303\u513F\uFF01\u3011\u6765\u6D4B\u4F60\u7684\u8303\u513F\uFF01");
  BindShare("\u3010\u6211\u662F" + this.text + "\u8303\u513F\uFF01\u3011\u6765\u6D4B\u4F60\u7684\u8303\u513F\uFF01", "http://m.giccoo.com/crown/", "http://m.giccoo.com/crown/img/share.jpg");
  this.pop = function (text, o) {
    if (text === "wechat") {
      return this.wechat = true;
    }
    return window.location.href = $(o).attr("href");
  };
  return this.close = function () {
    return this.wechat = false;
  };
});

app.directive("parallax", function ($location) {
  return {
    restrict: 'EA',
    link: function link(scope, elem, attrs) {
      var _d;
      // console.log attrs["ctrlleft"]
      // console.log attrs["nextPage"]
      _d = {
        x: 0,
        y: 0,
        birthday: 0,
        run: false
      };
      elem.on("touchstart", function (evt) {
        var touch;
        touch = evt.touches[0];
        _d.x = touch.pageX;
        _d.y = touch.pageY;
        return _d.birthday = new Date().getTime();
      });
      elem.on("touchmove", function (evt) {
        var gone, goneX, touch;
        touch = evt.touches[0];
        gone = _d.y - touch.pageY;
        goneX = _d.x - touch.pageX;
        // console.log "move",gone,goneX
        if (goneX < -20 && !_d.run && attrs["ctrlleft"] === "left") {
          scope.runPageX(true);
        }
        if (goneX > 20 && !_d.run && attrs["ctrlright"] === "right") {
          scope.runPageX(false);
        }
        if (attrs["noctrl"] !== "all") {
          if (gone < -50 && !_d.run && attrs["noctrl"] !== "up") {
            scope.runPage(true, attrs["prepage"]);
          }
          if (gone > 50 && !_d.run && attrs["noctrl"] !== "down") {
            scope.runPage(false, attrs["nextpage"]);
          }
        }
        return evt.preventDefault();
      });
      return elem.on("touchend", function (evt) {
        // scope.runPage true
        return _d.run = false;
      });
    }
  };
});

app.directive('scrollBox', function () {
  return {
    restrict: 'EA',
    link: function link(scope, elem, attrs) {
      var _d, getScroll;
      // console.log elem,$(elem[0]).offset()
      _d = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        starY: 0,
        maxH: 0,
        birthday: 0,
        run: false,
        direction: null
      };
      getScroll = function getScroll() {
        var ret, translate3d;
        if ('webkitTransform' in elem[0].style) {
          translate3d = elem[0].style.webkitTransform.match(/translate3d\(([^)]+)\)/);
          ret = translate3d != null ? translate3d[1].split(",") : [0, 0, 0];
          return parseInt(ret[1], 10);
        }
      };
      // console.log TRANSITION_END_NAMES
      elem.on("touchstart", function (evt) {
        var touch;
        touch = evt.touches[0];
        _d.x = touch.pageX;
        _d.y = touch.pageY - getScroll();
        _d.starY = getScroll();
        _d.maxH = $(elem[0]).offset().height;
        _d.birthday = new Date().getTime();
        _d.direction = null;
        return elem[0].style['-webkit-transition-duration'] = 0;
      });
      elem.on("touchmove", function (evt) {
        var moveY, touch;
        evt.preventDefault();
        touch = evt.touches[0];
        moveY = touch.pageY - _d.y;
        // console.log _d.starY,moveY
        if (_d.starY > moveY) {
          _d.direction = true;
        } else {
          _d.direction = false;
        }
        // 计算阻力
        return elem[0].style.webkitTransform = 'translate3d(0,' + moveY + 'px,0)';
      });
      elem.on("touchend", function (evt) {
        var goon, life, offsetX;
        life = new Date().getTime() - _d.birthday;
        goon = life - 300;
        // console.log goon,_d.direction
        if (goon < 0) {
          offsetX = getScroll() + (_d.direction ? goon : -goon);
        } else {
          offsetX = getScroll() + (_d.direction ? -1 : 1);
        }
        _d.run = true;
        if (_d.direction == null) {
          offsetX = getScroll();
        }
        elem[0].style['-webkit-transition-duration'] = '.2s';
        return elem[0].style.webkitTransform = 'translate3d(0,' + offsetX + 'px,0)';
      });
      return elem[0].addEventListener(TRANSITION_END_NAME, function (e) {
        var maxH;
        if (_d.run) {
          _d.run = false;
          maxH = -_d.maxH + $(elem[0]).parent().height();
          if (getScroll() < maxH) {
            elem[0].style.webkitTransform = 'translate3d(0,' + maxH + 'px,0)';
          }
          if (getScroll() > 0) {
            return elem[0].style.webkitTransform = 'translate3d(0,0,0)';
          }
        }
      });
    }
  };
});
