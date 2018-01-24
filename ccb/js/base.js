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
var ANIMATION_END_NAME, ANIMATION_END_NAMES, BindShare, LoadFinished, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _Progress, _finishedlist, _tempH, _wechat, _wechat_bool, _wechat_f, app, beginload, cdn, css3Prefix, debug, fShare, finishedRiver, handleFileLoad, hosts, i, j, len, loadList, mTestElement, my, preload, refreshShare, reloadWechat, shareFriend, shareTimeline;

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

// @codekit-prepend "../../libs/js/min/preloadjs-0.4.1.min.js"
// @codekit-prepend "../../libs/coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "coffee/global"
// @codekit-prepend "../../libs/coffee/share"
// @codekit-prepend "../../libs/coffee/load"

// load list
debug = false;

cdn = "/";

if (!debug) {
  cdn = "http://disk.giccoo.com/projects/";
}

// cdn = "http://disk.giccoo.com/projects/"
loadList = [{
  id: "logo",
  src: cdn + "libs/img/loading.png"
}, {
  id: "bg",
  src: cdn + "ccb/img/bg.jpg"
}, {
  id: "river1",
  src: cdn + "ccb/img/river1.png"
}, {
  id: "river2",
  src: cdn + "ccb/img/river2.png"
}, {
  id: "btn-pass",
  src: cdn + "ccb/img/btn-pass.png"
}, {
  id: "icon-sound",
  src: cdn + "ccb/img/icon-sound.png"
}, {
  id: "y1",
  src: cdn + "ccb/img/y1.png"
}, {
  id: "y2",
  src: cdn + "ccb/img/y2.png"
}];

_wechat_f = {
  "appid": "",
  "img_url": "http://m.giccoo.com/ccb/img/share.jpg",
  "img_width": 300,
  "img_height": 300,
  "link": "http://m.giccoo.com/ccb",
  "desc": "建设银行抓羊年大钱.",
  "title": "建设银行抓羊年大钱"
};

_wechat = {
  "appid": "",
  "img_url": "http://m.giccoo.com/ccb/img/share.jpg",
  "img_width": 300,
  "img_height": 300,
  "link": "http://m.giccoo.com/ccb",
  "desc": "建设银行抓羊年大钱.",
  "title": "建设银行抓羊年大钱"
};

hosts = "http://g.giccoo.com";

refreshShare = function refreshShare(title, desc) {
  _wechat.title = title;
  _wechat_f.title = title;
  return reloadWechat();
};

app = angular.module('kelvin', ["ngRoute", "ngTouch", "ngAnimate"]).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "home.html",
    controller: "MainController",
    controllerAs: "main"
  });
  $routeProvider.when('/game', {
    templateUrl: "game.html"
  });
  $routeProvider.when('/share', {
    templateUrl: "share.html"
  });
  // 	controller: "ShareController"
  // 	controllerAs: "share"
  return $routeProvider.when('/:rd', {
    templateUrl: "home.html",
    controller: "MainController",
    controllerAs: "main"
  });
}]);

_tempH = 0;

// finishedRiver = ->
finishedRiver = function finishedRiver() {
  console.log("load river", $(".bgimg").height());
  return setTimeout(function () {
    if (_tempH <= $(".bgimg").height()) {
      _tempH = $(".bgimg").height();
    }
    return $(".mubus").css({
      "height": _tempH + "px"
    });
  }, 10);
};

// 主要加载
app.controller('MainController', function ($rootScope, $scope, $location, $timeout) {
  var audiobg;
  $scope.shakeYYY = "";
  $scope.src = "yyy";
  $scope.soundoff = "off";
  if ($("body").height() <= 440) {
    $("body").addClass("iphone4");
  }
  beginload($scope, function () {
    var a, k, len1, results;
    results = [];
    for (k = 0, len1 = loadList.length; k < len1; k++) {
      a = loadList[k];
      results.push($("img[data-lz=" + a.id + "]").attr("src", a.src));
    }
    return results;
  });
  $rootScope.$on("$routeChangeSuccess", function () {
    return LoadFinished("angular", $scope);
  });
  $scope.$watch("loaded", function () {
    if ($scope.loaded) {
      // console.log preload.getResult("bg").height
      $scope.starPage = false;
      $(".loaded").removeClass("loaded");
      // finishedRiver()
      $timeout(function () {
        $scope.hideweiban();
        return console.log("time up");
      }, 5000);
      if ($(".move").length > 0) {
        return $(".move")[0].addEventListener(ANIMATION_END_NAME, function (e) {
          if ($(e.target).is(".river1") || $(e.target).is(".river2")) {
            return false;
          }
          return $scope.$apply(function () {
            $scope.shakeYYY = "shakeAll";
            $timeout(function () {
              return $scope.src = "yy";
            }, 20);
            $timeout(function () {
              return $scope.src = "y";
            }, 100);
            return $timeout(function () {
              if (!debug) {
                return $scope.pass();
              }
            }, 2500);
          });
        });
      }
    }
  });
  // $scope.
  $scope.closeSound = function () {
    if ($scope.soundoff === "on") {
      return document.getElementById("audiobg").pause();
    } else {
      // $scope.soundoff = "off"
      return document.getElementById("audiobg").play();
    }
  };
  // $scope.soundoff = "on"
  if ($(".river").length > 0) {
    $scope.river = "";
    $scope.runRiver = function () {
      return $timeout(function () {
        $scope.river = $scope.river === "" ? "on" : "";
        return $scope.runRiver();
      }, 300);
    };
    $scope.runRiver();
  }
  // refreshShare()
  if ($("#audiobg").length > 0) {
    audiobg = document.getElementById("audiobg");
    audiobg.addEventListener("pause", function () {
      // alert "已经暂停"
      return $scope.$apply(function () {
        return $scope.soundoff = "off";
      });
    });
    audiobg.addEventListener("play", function () {
      // alert "开始播放"
      return $scope.$apply(function () {
        return $scope.soundoff = "on";
      });
    });
  }
  $scope.weiban = true;
  $scope.hideweiban = function () {
    $scope.starPage = true;
    $scope.weiban = false;
    return finishedRiver();
  };
  return $scope.pass = function () {
    if (!debug) {
      return $location.path("/game");
    }
  };
});

// $scope.weiban = true
// $scope.starPage = false
//  unless debug

// $scope.$watch "weiban",->
// 	if $scope.weiban
// 		$timeout ->
// 			audiobg.pause()
// 			$location.path "/game" unless debug
// 		,5000
app.controller('homeController', function ($rootScope) {
  return $rootScope.home = true;
});

app.controller('GameController', function ($rootScope, $scope, $location, $timeout, $route) {
  var mubu, tis;
  if (!$rootScope.home) {
    return $location.path('/');
  }
  this.wechat = false;
  this.weiban = true;
  this.gameBegin = false;
  $scope.gameOver = false;
  this.score = 0;
  this.timer = 20;
  this.Transcend = 1;
  tis = this;
  $timeout(function () {
    return tis.weiban = false;
  }, 5000);
  mubu = {
    width: $("body").width(),
    height: $("body").height()
  };
  this.items = {};
  $(document).on("touchstart", ".item", function (evt) {
    var lifeName;
    evt.preventDefault();
    lifeName = $(this).data("key");
    return $scope.$apply(function () {
      return delete tis.hitYYY(lifeName);
    });
  });
  this.hideweiban = function () {
    return this.weiban = false;
  };
  this.gameStar = function () {
    this.gameBegin = true;
    // this.gameOver = true
    this.putYYY();
    this.starTime = new Date().getTime();
    return this.checkTime();
  };
  this.checkTime = function () {
    var n, timeLife;
    timeLife = 60 * 3;
    n = (new Date().getTime() - this.starTime) / 1000;
    this.timer = timeLife - parseInt(n);
    if (n >= timeLife) {
      $scope.gameOver = true;
      return "over";
    }
    return $timeout(function () {
      return tis.checkTime();
    }, 200);
  };
  this.putYYY = function () {
    var data, life, max, min, totleLife;
    totleLife = 4000;
    life = new Date().getTime() - this.starTime;
    if (life <= 45000 || isNaN(life)) {
      life = 0;
    } else {
      life = life - 45000;
    }
    life = life / 10;
    if (life > 10000) {
      life = 10000;
    }
    if (life <= 0 || isNaN(life)) {
      life = 0;
    }
    // console.log parseInt life
    data = {
      name: "y",
      class: "y",
      style: {
        "transition-duration": totleLife - life + "ms",
        top: "100px",
        left: "100px"
      }
    };
    if (parseInt(Math.random() * 2) === 0) {
      data.name = "yyy";
      data.class = "yyy";
    }
    data.style.top = "-80px";
    data.style.left = parseInt(Math.random() * mubu.width * 0.8) + "px";
    console.log(life / 10);
    max = 450;
    // max = 600 - (life/10)
    min = 440;
    return $timeout(function () {
      var lifeName;
      if ($scope.gameOver) {
        return false;
      }
      lifeName = 10 + (new Date().getTime() - tis.starTime);
      tis.items[lifeName] = data;
      tis.putYYY();
      return $timeout(function () {
        delete tis.items[lifeName];
        return setTimeout(function () {
          if ($(".item-" + lifeName + ".y").length > 0) {
            $scope.$apply(function () {
              return $scope.gameOver = true;
            });
          }
          return $(".item-" + lifeName).remove();
        }, 10);
      }, totleLife - life - 20);
    }, parseInt(Math.random() * (max - min) + min));
  };
  this.hitYYY = function (e) {
    var audio, dom;
    // console.log e,tis.items[e]
    dom = tis.items[e];
    if (dom.name === "y") {
      delete tis.items[e];
      setTimeout(function () {
        return $(".item-" + e).remove();
      });
      tis.score += 100;
      audio = document.getElementById("audiocoin");
      audio.currentTime = 0;
      return audio.play();
    } else {
      $scope.gameOver = true;
      audio = document.getElementById("audioyyy");
      audio.currentTime = 0;
      return audio.play();
    }
  };
  this.regame = function () {
    // $location.path "/game"
    // tis.gameBegin = false
    // $scope.gameOver = false
    return $route.reload();
  };
  this.showShare = function () {
    if (this.wechat) {
      return this.wechat = false;
    } else {
      return this.wechat = true;
    }
  };
  return $scope.$watch("gameOver", function () {
    tis.Transcend = parseInt(tis.score / 40);
    if (tis.Transcend >= 100) {
      tis.Transcend = 99;
    } else if (tis.Transcend <= 0) {
      tis.Transcend = 1;
    }
    if ($scope.gameOver) {
      return refreshShare("\u6211\u6293\u5230" + tis.score / 100 + "\u53EA\uFFE5\u8D22\uFF01\u4F60\u4E5F\u6765\u8BD5\u8BD5\u624B\u6C14\u5427\uFF01");
    }
  });
});

// app.controller 'ShareController', ($rootScope, $scope, $location)->
