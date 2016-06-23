webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _QbLogin = __webpack_require__(306);

	var _QbLogin2 = _interopRequireDefault(_QbLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_QbLogin2.default, null), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "qb_login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267);

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(268);
	var utils = __webpack_require__(269);
	var dispatchRequest = __webpack_require__(271);
	var InterceptorManager = __webpack_require__(281);
	var isAbsoluteURL = __webpack_require__(282);
	var combineURLs = __webpack_require__(283);
	var bind = __webpack_require__(284);
	var transformData = __webpack_require__(276);

	function Axios(defaultConfig) {
	  this.defaults = utils.merge({}, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Don't allow overriding defaults.withCredentials
	  config.withCredentials = config.withCredentials || this.defaults.withCredentials;

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	var defaultInstance = new Axios(defaults);
	var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
	axios.request = bind(Axios.prototype.request, defaultInstance);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Expose properties from defaultInstance
	axios.defaults = defaultInstance.defaults;
	axios.interceptors = defaultInstance.interceptors;

	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return new Axios(defaultConfig);
	};

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(285);

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);
	var normalizeHeaderName = __webpack_require__(270);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	module.exports = {
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};


/***/ },

/***/ 269:
/***/ function(module, exports) {

	'use strict';

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  trim: trim
	};


/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  return new Promise(function executor(resolve, reject) {
	    try {
	      var adapter;

	      if (typeof config.adapter === 'function') {
	        // For custom adapter support
	        adapter = config.adapter;
	      } else if (typeof XMLHttpRequest !== 'undefined') {
	        // For browsers use XHR adapter
	        adapter = __webpack_require__(273);
	      } else if (typeof process !== 'undefined') {
	        // For node use HTTP adapter
	        adapter = __webpack_require__(273);
	      }

	      if (typeof adapter === 'function') {
	        adapter(resolve, reject, config);
	      }
	    } catch (e) {
	      reject(e);
	    }
	  });
	};


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(272)))

/***/ },

/***/ 272:
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);
	var buildURL = __webpack_require__(274);
	var parseHeaders = __webpack_require__(275);
	var transformData = __webpack_require__(276);
	var isURLSameOrigin = __webpack_require__(277);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(278);
	var settle = __webpack_require__(279);

	module.exports = function xhrAdapter(resolve, reject, config) {
	  var requestData = config.data;
	  var requestHeaders = config.headers;

	  if (utils.isFormData(requestData)) {
	    delete requestHeaders['Content-Type']; // Let the browser set it
	  }

	  var request = new XMLHttpRequest();
	  var loadEvent = 'onreadystatechange';
	  var xDomain = false;

	  // For IE 8/9 CORS support
	  // Only supports POST and GET calls and doesn't returns the response headers.
	  // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	  if (("development") !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	    request = new window.XDomainRequest();
	    loadEvent = 'onload';
	    xDomain = true;
	    request.onprogress = function handleProgress() {};
	    request.ontimeout = function handleTimeout() {};
	  }

	  // HTTP basic authentication
	  if (config.auth) {
	    var username = config.auth.username || '';
	    var password = config.auth.password || '';
	    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	  }

	  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	  // Set the request timeout in MS
	  request.timeout = config.timeout;

	  // Listen for ready state
	  request[loadEvent] = function handleLoad() {
	    if (!request || (request.readyState !== 4 && !xDomain)) {
	      return;
	    }

	    // The request errored out and we didn't get a response, this will be
	    // handled by onerror instead
	    if (request.status === 0) {
	      return;
	    }

	    // Prepare the response
	    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	    var response = {
	      data: transformData(
	        responseData,
	        responseHeaders,
	        config.transformResponse
	      ),
	      // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	      status: request.status === 1223 ? 204 : request.status,
	      statusText: request.status === 1223 ? 'No Content' : request.statusText,
	      headers: responseHeaders,
	      config: config,
	      request: request
	    };

	    settle(resolve, reject, response);

	    // Clean up request
	    request = null;
	  };

	  // Handle low level network errors
	  request.onerror = function handleError() {
	    // Real errors are hidden from us by the browser
	    // onerror should only fire if it's a network error
	    reject(new Error('Network Error'));

	    // Clean up request
	    request = null;
	  };

	  // Handle timeout
	  request.ontimeout = function handleTimeout() {
	    var err = new Error('timeout of ' + config.timeout + 'ms exceeded');
	    err.timeout = config.timeout;
	    err.code = 'ECONNABORTED';
	    reject(err);

	    // Clean up request
	    request = null;
	  };

	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.
	  if (utils.isStandardBrowserEnv()) {
	    var cookies = __webpack_require__(280);

	    // Add xsrf header
	    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;

	    if (xsrfValue) {
	      requestHeaders[config.xsrfHeaderName] = xsrfValue;
	    }
	  }

	  // Add headers to the request
	  if ('setRequestHeader' in request) {
	    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	        // Remove Content-Type if data is undefined
	        delete requestHeaders[key];
	      } else {
	        // Otherwise add header to the request
	        request.setRequestHeader(key, val);
	      }
	    });
	  }

	  // Add withCredentials to request if needed
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }

	  // Add responseType to request if needed
	  if (config.responseType) {
	    try {
	      request.responseType = config.responseType;
	    } catch (e) {
	      if (request.responseType !== 'json') {
	        throw e;
	      }
	    }
	  }

	  // Handle progress if needed
	  if (config.progress) {
	    if (config.method === 'post' || config.method === 'put') {
	      request.upload.addEventListener('progress', config.progress);
	    } else if (config.method === 'get') {
	      request.addEventListener('progress', config.progress);
	    }
	  }

	  if (requestData === undefined) {
	    requestData = null;
	  }

	  // Send the request
	  request.send(requestData);
	};


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },

/***/ 278:
/***/ function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ },

/***/ 279:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(response);
	  }
	};


/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(269);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ },

/***/ 282:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },

/***/ 283:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },

/***/ 284:
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },

/***/ 285:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Logo = undefined;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _logoWithText = __webpack_require__(292);

	var _logoWithText2 = _interopRequireDefault(_logoWithText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logo = exports.Logo = function Logo() {
	  return _react2.default.createElement('img', { src: _logoWithText2.default });
	};

	exports.default = Logo;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 292:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAAxCAYAAABqO23/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQwODRDQjQwMEE0MTFFNjk1MTRGQ0U1MDBCQ0I0NEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQwODRDQjMwMEE0MTFFNjk1MTRGQ0U1MDBCQ0I0NEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmRpZDpEQjM5ODI3QjkwMDBFNjExQjA2Rjg4M0REMTNBRjhDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQjM5ODI3QjkwMDBFNjExQjA2Rjg4M0REMTNBRjhDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlU1PZUAAA8hSURBVHja7F0LcFTV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"

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.QbLogin = undefined;

	var _getPrototypeOf = __webpack_require__(172);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(198);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(199);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(203);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(250);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _axios = __webpack_require__(266);

	var _axios2 = _interopRequireDefault(_axios);

	var _styles = __webpack_require__(307);

	var _styles2 = _interopRequireDefault(_styles);

	var _Logo = __webpack_require__(291);

	var _Logo2 = _interopRequireDefault(_Logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QbLogin = exports.QbLogin = function (_Component) {
	  (0, _inherits3.default)(QbLogin, _Component);

	  function QbLogin(props) {
	    (0, _classCallCheck3.default)(this, QbLogin);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(QbLogin).call(this, props));

	    _this.state = { userName: '', actiTimeUrl: '' };
	    return _this;
	  }

	  (0, _createClass3.default)(QbLogin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      _axios2.default.get('/api/v1/info/current-user').then(function (response) {
	        var userName = response.data.firstName + ' ' + response.data.lastName;
	        _this2.setState({ userName: userName });
	      }).catch(function (response) {
	        console.error(response);
	      });

	      _axios2.default.get('/api/v1/info/at-url').then(function (response) {
	        _this2.setState({ actiTimeUrl: response.data.atUrl });
	      }).catch(function (response) {
	        console.error(response);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var userName = _state.userName;
	      var actiTimeUrl = _state.actiTimeUrl;


	      return _react2.default.createElement(
	        'div',
	        { className: _styles2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _styles2.default.leftPane },
	          _react2.default.createElement(
	            'div',
	            { className: _styles2.default.logo },
	            _react2.default.createElement(_Logo2.default, null)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _styles2.default.userMenu },
	            _react2.default.createElement(
	              'span',
	              null,
	              userName + ' ' + actiTimeUrl
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _styles2.default.rightPane },
	          _react2.default.createElement(
	            'div',
	            { className: _styles2.default.qbContainer },
	            _react2.default.createElement(
	              'h1',
	              { className: _styles2.default.userWelcome },
	              'Welcome ',
	              userName
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: _styles2.default.connectionStatus },
	              'Connection with actiTIME established'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: _styles2.default.selectorLabel },
	              'Now please specify your version of QuickBooks'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _styles2.default.versionSelector },
	              _react2.default.createElement(
	                'div',
	                { className: _styles2.default.selectionItem },
	                _react2.default.createElement(
	                  'h1',
	                  { className: _styles2.default.qboHeading },
	                  'I\'m using QuickBooks Online Plus'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { className: _styles2.default.connectButton, href: '/auth/qbo' },
	                  ' '
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _styles2.default.selectionItem },
	                _react2.default.createElement(
	                  'h1',
	                  { className: _styles2.default.qbdHeading },
	                  'I\'m using QuickBooks Desktop'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { className: _styles2.default.installConnector, href: 'javascript:void(0)' },
	                  'Install actiTIME Connector'
	                ),
	                _react2.default.createElement(
	                  'span',
	                  { className: _styles2.default.connectorDescription },
	                  'actiTIME Connector is an MS Windows application that allows actiTIME QB Integrator to load actiTIME data to your QuickBooks'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _styles2.default.gettingStarted },
	              'Short getting started info'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return QbLogin;
	}(_react.Component);

	exports.default = QbLogin;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(308);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1!./../../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".container__containers-QbLogin-styles__1l2sj {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.leftPane__containers-QbLogin-styles__3v3vI {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  width: 284px;\r\n  background-color: #f8f8f8;\r\n  background-color: #f8f8f8;\r\n}\r\n.logo__containers-QbLogin-styles__35YrS {\r\n  padding: 40px;\r\n}\r\n.userMenu__containers-QbLogin-styles__24LXN {\r\n  margin-top: auto;\r\n  margin-bottom: 65px;\r\n  padding-left: 85px;\r\n}\r\n.rightPane__containers-QbLogin-styles__Qadtu {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  background-color: white;\r\n  background-color: white;\r\n}\r\n.qbContainer__containers-QbLogin-styles__1lUqi {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  width: 832px;\r\n}\r\n.userWelcome__containers-QbLogin-styles__3jyM6 {\r\n  margin-top: 50px;\r\n\r\n  margin-bottom: 20px;\r\n  font-weight: normal;\r\n  font-size: 2em;\r\n}\r\n.connectionStatus__containers-QbLogin-styles__3V8CS {\r\n  margin-bottom: 60px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: #00b050;\r\n  color: #00b050;\r\n}\r\n.selectorLabel__containers-QbLogin-styles__3PSQQ {\r\n  margin-bottom: 36px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n.versionSelector__containers-QbLogin-styles__d5yol {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: row;\r\n      flex-direction: row;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  margin-bottom: 55px;\r\n}\r\n.selectionItem__containers-QbLogin-styles__3rNF3 {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  padding-top: 40px;\r\n  width: 400px;\r\n  height: 240px;\r\n  border: 2px solid #dfdfdf;\r\n  border-radius: 5px;\r\n}\r\n.itemHeading__containers-QbLogin-styles__367_k {\r\n  margin-top: 0;\r\n  font-weight: bold;\r\n  font-size: 0.9em;\r\n}\r\n.qboHeading__containers-QbLogin-styles__16clc {\r\n  margin-bottom: 50px;\r\n}\r\n.qbdHeading__containers-QbLogin-styles__3C1uy {\r\n  margin-bottom: 30px;\r\n}\r\n.connectButton__containers-QbLogin-styles__FMabi {\r\n  width: 270px;\r\n  height: 47px;\r\n  background-image: url(" + __webpack_require__(309) + ");\r\n  background-size: cover\r\n}\r\n.connectButton__containers-QbLogin-styles__FMabi:hover, .connectButton__containers-QbLogin-styles__FMabi:focus {\r\n  background-image: url(" + __webpack_require__(310) + ");\r\n}\r\n.installConnector__containers-QbLogin-styles__1L-e- {\r\n  margin-bottom: 26px;\r\n  color: #067afb;\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  font-size: 1.2em\r\n}\r\n.installConnector__containers-QbLogin-styles__1L-e-:hover, .installConnector__containers-QbLogin-styles__1L-e-:focus {\r\n  color: #3a96fc;\r\n}\r\n.connectorDescription__containers-QbLogin-styles__LvQWM {\r\n  width: 300px;\r\n  text-align: center;\r\n  font-size: 0.8em;\r\n}\r\n.gettingStarted__containers-QbLogin-styles__3kCfV {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  height: 335px;\r\n  color: #bfbfc9;\r\n  font-size: 18px;\r\n  background-color: #f8f8f8;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"container": "container__containers-QbLogin-styles__1l2sj",
		"leftPane": "leftPane__containers-QbLogin-styles__3v3vI",
		"logo": "logo__containers-QbLogin-styles__35YrS",
		"userMenu": "userMenu__containers-QbLogin-styles__24LXN",
		"rightPane": "rightPane__containers-QbLogin-styles__Qadtu",
		"qbContainer": "qbContainer__containers-QbLogin-styles__1lUqi",
		"userWelcome": "userWelcome__containers-QbLogin-styles__3jyM6",
		"connectionStatus": "connectionStatus__containers-QbLogin-styles__3V8CS",
		"selectorLabel": "selectorLabel__containers-QbLogin-styles__3PSQQ",
		"versionSelector": "versionSelector__containers-QbLogin-styles__d5yol",
		"selectionItem": "selectionItem__containers-QbLogin-styles__3rNF3",
		"itemHeading": "itemHeading__containers-QbLogin-styles__367_k",
		"qboHeading": "qboHeading__containers-QbLogin-styles__16clc itemHeading__containers-QbLogin-styles__367_k",
		"qbdHeading": "qbdHeading__containers-QbLogin-styles__3C1uy itemHeading__containers-QbLogin-styles__367_k",
		"connectButton": "connectButton__containers-QbLogin-styles__FMabi",
		"installConnector": "installConnector__containers-QbLogin-styles__1L-e-",
		"connectorDescription": "connectorDescription__containers-QbLogin-styles__LvQWM",
		"gettingStarted": "gettingStarted__containers-QbLogin-styles__3kCfV"
	};

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/qbo-default.png";

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/qbo-hover.png";

/***/ }

});