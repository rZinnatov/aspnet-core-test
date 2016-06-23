webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _AtLogin = __webpack_require__(260);

	var _AtLogin2 = _interopRequireDefault(_AtLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_AtLogin2.default, null), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "at_login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AtLogin = undefined;

	var _extends2 = __webpack_require__(261);

	var _extends3 = _interopRequireDefault(_extends2);

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

	var _utils = __webpack_require__(286);

	var _styles = __webpack_require__(288);

	var _styles2 = _interopRequireDefault(_styles);

	var _Logo = __webpack_require__(291);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _ModalTooltip = __webpack_require__(293);

	var _ModalTooltip2 = _interopRequireDefault(_ModalTooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AtLogin = exports.AtLogin = function (_Component) {
	  (0, _inherits3.default)(AtLogin, _Component);

	  function AtLogin(props) {
	    (0, _classCallCheck3.default)(this, AtLogin);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AtLogin).call(this, props));

	    _this.state = {
	      isLoginInProgress: false,
	      validationErrors: {}
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(AtLogin, [{
	    key: 'handleLogin',
	    value: function handleLogin(e) {
	      var _this2 = this;

	      e.preventDefault();

	      var data = {
	        'userName': this.refs.userName.value,
	        'password': this.refs.password.value,
	        'actiTimeUrl': this.refs.actiTimeUrl.value
	      };

	      this.setState({ isLoginInProgress: true });

	      _axios2.default.post('/api/v1/auth/at', data).then(function (response) {
	        if (response.data.success) {
	          document.location.reload(true);
	        }
	      }).catch(function (response) {
	        _this2.setState({ validationErrors: response.data, isLoginInProgress: false });
	      });
	    }
	  }, {
	    key: 'handleUrlChange',
	    value: function handleUrlChange(e) {
	      var newErrors = (0, _utils.removeErrorFor)('actiTimeUrl', this.state.validationErrors);
	      if (!newErrors) {
	        return false;
	      }

	      this.setState({ validationErrors: newErrors });
	    }
	  }, {
	    key: 'handleUserChange',
	    value: function handleUserChange(e) {
	      var newErrors = (0, _utils.removeErrorFor)('userName', this.state.validationErrors);
	      if (!newErrors) {
	        return false;
	      }

	      this.setState({ validationErrors: newErrors });
	    }
	  }, {
	    key: 'handlePasswordChange',
	    value: function handlePasswordChange(e) {
	      var newErrors = (0, _utils.removeErrorFor)('password', this.state.validationErrors);
	      if (!newErrors) {
	        return false;
	      }

	      this.setState({ validationErrors: newErrors });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var options = {};
	      options.disabled = this.state.isLoginInProgress ? 'disabled' : '';

	      var validationErrors = this.state.validationErrors;


	      return _react2.default.createElement(
	        'div',
	        { className: _styles2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _styles2.default.logo },
	          _react2.default.createElement(_Logo2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _styles2.default.loginFormContainer },
	          _react2.default.createElement(
	            'h1',
	            { className: _styles2.default.heading },
	            'Welcome to actiTIME QuickBooks Integrator'
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: _styles2.default.subHeading },
	            'Please log in to your actiTIME'
	          ),
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.handleLogin.bind(this) },
	            _react2.default.createElement(
	              'label',
	              { className: _styles2.default.urlLabel },
	              'URL of your actiTIME Server  ',
	              _react2.default.createElement(
	                'span',
	                { className: 'muted-text' },
	                '(you can copy it from the browser address string)'
	              ),
	              _react2.default.createElement(
	                _ModalTooltip2.default,
	                null,
	                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	              )
	            ),
	            _react2.default.createElement('input', (0, _extends3.default)({ className: _styles2.default.urlInput,
	              ref: 'actiTimeUrl',
	              onChange: this.handleUrlChange.bind(this),
	              type: 'text',
	              placeholder: 'enter your actiTIME Server URL',
	              autoComplete: 'on'
	            }, options)),
	            _react2.default.createElement(
	              'div',
	              { className: _styles2.default.urlError },
	              (0, _utils.renderErrorFor)('actiTimeUrl', validationErrors)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _styles2.default.credentials },
	              _react2.default.createElement(
	                'div',
	                { className: _styles2.default.credentialsRow },
	                _react2.default.createElement(
	                  'label',
	                  { className: _styles2.default.credentialsLabel },
	                  'Username'
	                ),
	                _react2.default.createElement('input', (0, _extends3.default)({ className: _styles2.default.credentialsInput,
	                  ref: 'userName',
	                  onChange: this.handleUserChange.bind(this),
	                  type: 'text',
	                  placeholder: 'enter your actiTIME username'
	                }, options))
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _styles2.default.credentialsErrorRow },
	                (0, _utils.renderErrorFor)('userName', validationErrors)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _styles2.default.credentialsRow },
	                _react2.default.createElement(
	                  'label',
	                  { className: _styles2.default.credentialsLabel },
	                  'Password'
	                ),
	                _react2.default.createElement('input', (0, _extends3.default)({ className: _styles2.default.credentialsInput,
	                  ref: 'password',
	                  onChange: this.handlePasswordChange.bind(this),
	                  type: 'password',
	                  placeholder: 'enter your actiTIME password'
	                }, options)),
	                _react2.default.createElement(
	                  'button',
	                  (0, _extends3.default)({ className: _styles2.default.loginButton }, options),
	                  'Login'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _styles2.default.credentialsErrorRow },
	                (0, _utils.renderErrorFor)('password', validationErrors)
	              )
	            ),
	            _react2.default.createElement('hr', { className: _styles2.default.dashedLine }),
	            _react2.default.createElement(
	              'span',
	              { className: _styles2.default.forgotPassword },
	              'Forgot your password? Use password recovery function of your actiTIME'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return AtLogin;
	}(_react.Component);

	exports.default = AtLogin;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(262);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(263), __esModule: true };

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(264);
	module.exports = __webpack_require__(185).Object.assign;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(184);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(265)});

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(217)
	  , gOPS     = __webpack_require__(241)
	  , pIE      = __webpack_require__(242)
	  , toObject = __webpack_require__(175)
	  , IObject  = __webpack_require__(220)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(194)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

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

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.renderErrorFor = renderErrorFor;
	exports.removeErrorFor = removeErrorFor;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _ramda = __webpack_require__(287);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function renderErrorFor(ref, errors) {
	  if (!errors) {
	    return false;
	  }

	  if (!errors[ref]) {
	    return false;
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: 'error' },
	    errors[ref].errors[0].errorMessage
	  );
	}

	function removeErrorFor(ref, errors) {
	  if (!errors) {
	    return false;
	  }

	  if (!errors[ref]) {
	    return false;
	  }

	  return _ramda2.default.omit([ref], errors);
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	//  Ramda v0.21.0
	//  https://github.com/ramda/ramda
	//  (c) 2013-2016 Scott Sauyet, Michael Hurley, and David Chambers
	//  Ramda may be freely distributed under the MIT license.

	;(function() {

	  'use strict';

	  /**
	     * A special placeholder value used to specify "gaps" within curried functions,
	     * allowing partial application of any combination of arguments, regardless of
	     * their positions.
	     *
	     * If `g` is a curried ternary function and `_` is `R.__`, the following are
	     * equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2, _)(1, 3)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @constant
	     * @memberOf R
	     * @since v0.6.0
	     * @category Function
	     * @example
	     *
	     *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	     *      greet('Alice'); //=> 'Hello, Alice!'
	     */
	    var __ = { '@@functional/placeholder': true };

	    /* eslint-disable no-unused-vars */
	    var _arity = function _arity(n, fn) {
	        /* eslint-disable no-unused-vars */
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.apply(this, arguments);
	            };
	        case 1:
	            return function (a0) {
	                return fn.apply(this, arguments);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.apply(this, arguments);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.apply(this, arguments);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.apply(this, arguments);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.apply(this, arguments);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.apply(this, arguments);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.apply(this, arguments);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.apply(this, arguments);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.apply(this, arguments);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.apply(this, arguments);
	            };
	        default:
	            throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	        }
	    };

	    var _arrayFromIterator = function _arrayFromIterator(iter) {
	        var list = [];
	        var next;
	        while (!(next = iter.next()).done) {
	            list.push(next.value);
	        }
	        return list;
	    };

	    var _arrayOf = function _arrayOf() {
	        return Array.prototype.slice.call(arguments);
	    };

	    var _cloneRegExp = function _cloneRegExp(pattern) {
	        return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
	    };

	    var _complement = function _complement(f) {
	        return function () {
	            return !f.apply(this, arguments);
	        };
	    };

	    /**
	     * Private `concat` function to merge two array-like objects.
	     *
	     * @private
	     * @param {Array|Arguments} [set1=[]] An array-like object.
	     * @param {Array|Arguments} [set2=[]] An array-like object.
	     * @return {Array} A new, merged array.
	     * @example
	     *
	     *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     */
	    var _concat = function _concat(set1, set2) {
	        set1 = set1 || [];
	        set2 = set2 || [];
	        var idx;
	        var len1 = set1.length;
	        var len2 = set2.length;
	        var result = [];
	        idx = 0;
	        while (idx < len1) {
	            result[result.length] = set1[idx];
	            idx += 1;
	        }
	        idx = 0;
	        while (idx < len2) {
	            result[result.length] = set2[idx];
	            idx += 1;
	        }
	        return result;
	    };

	    var _containsWith = function _containsWith(pred, x, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (pred(x, list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    };

	    var _filter = function _filter(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        while (idx < len) {
	            if (fn(list[idx])) {
	                result[result.length] = list[idx];
	            }
	            idx += 1;
	        }
	        return result;
	    };

	    var _forceReduced = function _forceReduced(x) {
	        return {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    // String(x => x) evaluates to "x => x", so the pattern may not match.
	    var _functionName = function _functionName(f) {
	        // String(x => x) evaluates to "x => x", so the pattern may not match.
	        var match = String(f).match(/^function (\w*)/);
	        return match == null ? '' : match[1];
	    };

	    var _has = function _has(prop, obj) {
	        return Object.prototype.hasOwnProperty.call(obj, prop);
	    };

	    var _identity = function _identity(x) {
	        return x;
	    };

	    var _isArguments = function () {
	        var toString = Object.prototype.toString;
	        return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
	            return toString.call(x) === '[object Arguments]';
	        } : function _isArguments(x) {
	            return _has('callee', x);
	        };
	    }();

	    /**
	     * Tests whether or not an object is an array.
	     *
	     * @private
	     * @param {*} val The object to test.
	     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	     * @example
	     *
	     *      _isArray([]); //=> true
	     *      _isArray(null); //=> false
	     *      _isArray({}); //=> false
	     */
	    var _isArray = Array.isArray || function _isArray(val) {
	        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	    };

	    var _isFunction = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Function]';
	    };

	    /**
	     * Determine if the passed argument is an integer.
	     *
	     * @private
	     * @param {*} n
	     * @category Type
	     * @return {Boolean}
	     */
	    var _isInteger = Number.isInteger || function _isInteger(n) {
	        return n << 0 === n;
	    };

	    var _isNumber = function _isNumber(x) {
	        return Object.prototype.toString.call(x) === '[object Number]';
	    };

	    var _isObject = function _isObject(x) {
	        return Object.prototype.toString.call(x) === '[object Object]';
	    };

	    var _isPlaceholder = function _isPlaceholder(a) {
	        return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
	    };

	    var _isRegExp = function _isRegExp(x) {
	        return Object.prototype.toString.call(x) === '[object RegExp]';
	    };

	    var _isString = function _isString(x) {
	        return Object.prototype.toString.call(x) === '[object String]';
	    };

	    var _isTransformer = function _isTransformer(obj) {
	        return typeof obj['@@transducer/step'] === 'function';
	    };

	    var _map = function _map(fn, functor) {
	        var idx = 0;
	        var len = functor.length;
	        var result = Array(len);
	        while (idx < len) {
	            result[idx] = fn(functor[idx]);
	            idx += 1;
	        }
	        return result;
	    };

	    // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	    var _objectAssign = function _objectAssign(target) {
	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	        var output = Object(target);
	        var idx = 1;
	        var length = arguments.length;
	        while (idx < length) {
	            var source = arguments[idx];
	            if (source != null) {
	                for (var nextKey in source) {
	                    if (_has(nextKey, source)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	            idx += 1;
	        }
	        return output;
	    };

	    var _of = function _of(x) {
	        return [x];
	    };

	    var _pipe = function _pipe(f, g) {
	        return function () {
	            return g.call(this, f.apply(this, arguments));
	        };
	    };

	    var _pipeP = function _pipeP(f, g) {
	        return function () {
	            var ctx = this;
	            return f.apply(ctx, arguments).then(function (x) {
	                return g.call(ctx, x);
	            });
	        };
	    };

	    // \b matches word boundary; [\b] matches backspace
	    var _quote = function _quote(s) {
	        var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b')    // \b matches word boundary; [\b] matches backspace
	    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
	        return '"' + escaped.replace(/"/g, '\\"') + '"';
	    };

	    var _reduced = function _reduced(x) {
	        return x && x['@@transducer/reduced'] ? x : {
	            '@@transducer/value': x,
	            '@@transducer/reduced': true
	        };
	    };

	    /**
	     * An optimized, private array `slice` implementation.
	     *
	     * @private
	     * @param {Arguments|Array} args The array or arguments object to consider.
	     * @param {Number} [from=0] The array index to slice from, inclusive.
	     * @param {Number} [to=args.length] The array index to slice to, exclusive.
	     * @return {Array} A new, sliced array.
	     * @example
	     *
	     *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	     *
	     *      var firstThreeArgs = function(a, b, c, d) {
	     *        return _slice(arguments, 0, 3);
	     *      };
	     *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	     */
	    var _slice = function _slice(args, from, to) {
	        switch (arguments.length) {
	        case 1:
	            return _slice(args, 0, args.length);
	        case 2:
	            return _slice(args, from, args.length);
	        default:
	            var list = [];
	            var idx = 0;
	            var len = Math.max(0, Math.min(args.length, to) - from);
	            while (idx < len) {
	                list[idx] = args[from + idx];
	                idx += 1;
	            }
	            return list;
	        }
	    };

	    /**
	     * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	     */
	    var _toISOString = function () {
	        var pad = function pad(n) {
	            return (n < 10 ? '0' : '') + n;
	        };
	        return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
	            return d.toISOString();
	        } : function _toISOString(d) {
	            return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
	        };
	    }();

	    var _xfBase = {
	        init: function () {
	            return this.xf['@@transducer/init']();
	        },
	        result: function (result) {
	            return this.xf['@@transducer/result'](result);
	        }
	    };

	    var _xwrap = function () {
	        function XWrap(fn) {
	            this.f = fn;
	        }
	        XWrap.prototype['@@transducer/init'] = function () {
	            throw new Error('init not implemented on XWrap');
	        };
	        XWrap.prototype['@@transducer/result'] = function (acc) {
	            return acc;
	        };
	        XWrap.prototype['@@transducer/step'] = function (acc, x) {
	            return this.f(acc, x);
	        };
	        return function _xwrap(fn) {
	            return new XWrap(fn);
	        };
	    }();

	    var _aperture = function _aperture(n, list) {
	        var idx = 0;
	        var limit = list.length - (n - 1);
	        var acc = new Array(limit >= 0 ? limit : 0);
	        while (idx < limit) {
	            acc[idx] = _slice(list, idx, idx + n);
	            idx += 1;
	        }
	        return acc;
	    };

	    var _assign = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

	    /**
	     * Similar to hasMethod, this checks whether a function has a [methodname]
	     * function. If it isn't an array it will execute that function otherwise it
	     * will default to the ramda implementation.
	     *
	     * @private
	     * @param {Function} fn ramda implemtation
	     * @param {String} methodname property to check for a custom implementation
	     * @return {Object} Whatever the return value of the method is.
	     */
	    var _checkForMethod = function _checkForMethod(methodname, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
	        };
	    };

	    /**
	     * Optimized internal one-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry1 = function _curry1(fn) {
	        return function f1(a) {
	            if (arguments.length === 0 || _isPlaceholder(a)) {
	                return f1;
	            } else {
	                return fn.apply(this, arguments);
	            }
	        };
	    };

	    /**
	     * Optimized internal two-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry2 = function _curry2(fn) {
	        return function f2(a, b) {
	            switch (arguments.length) {
	            case 0:
	                return f2;
	            case 1:
	                return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
	                    return fn(a, _b);
	                });
	            default:
	                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
	                    return fn(_a, b);
	                }) : _isPlaceholder(b) ? _curry1(function (_b) {
	                    return fn(a, _b);
	                }) : fn(a, b);
	            }
	        };
	    };

	    /**
	     * Optimized internal three-arity curry function.
	     *
	     * @private
	     * @category Function
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curry3 = function _curry3(fn) {
	        return function f3(a, b, c) {
	            switch (arguments.length) {
	            case 0:
	                return f3;
	            case 1:
	                return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                });
	            case 2:
	                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
	                    return fn(_a, b, _c);
	                }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                }) : _curry1(function (_c) {
	                    return fn(a, b, _c);
	                });
	            default:
	                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
	                    return fn(_a, _b, c);
	                }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
	                    return fn(_a, b, _c);
	                }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
	                    return fn(a, _b, _c);
	                }) : _isPlaceholder(a) ? _curry1(function (_a) {
	                    return fn(_a, b, c);
	                }) : _isPlaceholder(b) ? _curry1(function (_b) {
	                    return fn(a, _b, c);
	                }) : _isPlaceholder(c) ? _curry1(function (_c) {
	                    return fn(a, b, _c);
	                }) : fn(a, b, c);
	            }
	        };
	    };

	    /**
	     * Internal curryN function.
	     *
	     * @private
	     * @category Function
	     * @param {Number} length The arity of the curried function.
	     * @param {Array} received An array of arguments received thus far.
	     * @param {Function} fn The function to curry.
	     * @return {Function} The curried function.
	     */
	    var _curryN = function _curryN(length, received, fn) {
	        return function () {
	            var combined = [];
	            var argsIdx = 0;
	            var left = length;
	            var combinedIdx = 0;
	            while (combinedIdx < received.length || argsIdx < arguments.length) {
	                var result;
	                if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
	                    result = received[combinedIdx];
	                } else {
	                    result = arguments[argsIdx];
	                    argsIdx += 1;
	                }
	                combined[combinedIdx] = result;
	                if (!_isPlaceholder(result)) {
	                    left -= 1;
	                }
	                combinedIdx += 1;
	            }
	            return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	        };
	    };

	    /**
	     * Returns a function that dispatches with different strategies based on the
	     * object in list position (last argument). If it is an array, executes [fn].
	     * Otherwise, if it has a function with [methodname], it will execute that
	     * function (functor case). Otherwise, if it is a transformer, uses transducer
	     * [xf] to return a new transformer (transducer case). Otherwise, it will
	     * default to executing [fn].
	     *
	     * @private
	     * @param {String} methodname property to check for a custom implementation
	     * @param {Function} xf transducer to initialize if object is transformer
	     * @param {Function} fn default ramda implementation
	     * @return {Function} A function that dispatches on object in list position
	     */
	    var _dispatchable = function _dispatchable(methodname, xf, fn) {
	        return function () {
	            var length = arguments.length;
	            if (length === 0) {
	                return fn();
	            }
	            var obj = arguments[length - 1];
	            if (!_isArray(obj)) {
	                var args = _slice(arguments, 0, length - 1);
	                if (typeof obj[methodname] === 'function') {
	                    return obj[methodname].apply(obj, args);
	                }
	                if (_isTransformer(obj)) {
	                    var transducer = xf.apply(null, args);
	                    return transducer(obj);
	                }
	            }
	            return fn.apply(this, arguments);
	        };
	    };

	    var _dropLastWhile = function dropLastWhile(pred, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && pred(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, 0, idx + 1);
	    };

	    var _xall = function () {
	        function XAll(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.all = true;
	        }
	        XAll.prototype['@@transducer/init'] = _xfBase.init;
	        XAll.prototype['@@transducer/result'] = function (result) {
	            if (this.all) {
	                result = this.xf['@@transducer/step'](result, true);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAll.prototype['@@transducer/step'] = function (result, input) {
	            if (!this.f(input)) {
	                this.all = false;
	                result = _reduced(this.xf['@@transducer/step'](result, false));
	            }
	            return result;
	        };
	        return _curry2(function _xall(f, xf) {
	            return new XAll(f, xf);
	        });
	    }();

	    var _xany = function () {
	        function XAny(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.any = false;
	        }
	        XAny.prototype['@@transducer/init'] = _xfBase.init;
	        XAny.prototype['@@transducer/result'] = function (result) {
	            if (!this.any) {
	                result = this.xf['@@transducer/step'](result, false);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XAny.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.any = true;
	                result = _reduced(this.xf['@@transducer/step'](result, true));
	            }
	            return result;
	        };
	        return _curry2(function _xany(f, xf) {
	            return new XAny(f, xf);
	        });
	    }();

	    var _xaperture = function () {
	        function XAperture(n, xf) {
	            this.xf = xf;
	            this.pos = 0;
	            this.full = false;
	            this.acc = new Array(n);
	        }
	        XAperture.prototype['@@transducer/init'] = _xfBase.init;
	        XAperture.prototype['@@transducer/result'] = function (result) {
	            this.acc = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XAperture.prototype['@@transducer/step'] = function (result, input) {
	            this.store(input);
	            return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
	        };
	        XAperture.prototype.store = function (input) {
	            this.acc[this.pos] = input;
	            this.pos += 1;
	            if (this.pos === this.acc.length) {
	                this.pos = 0;
	                this.full = true;
	            }
	        };
	        XAperture.prototype.getCopy = function () {
	            return _concat(_slice(this.acc, this.pos), _slice(this.acc, 0, this.pos));
	        };
	        return _curry2(function _xaperture(n, xf) {
	            return new XAperture(n, xf);
	        });
	    }();

	    var _xdrop = function () {
	        function XDrop(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XDrop.prototype['@@transducer/init'] = _xfBase.init;
	        XDrop.prototype['@@transducer/result'] = _xfBase.result;
	        XDrop.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n > 0) {
	                this.n -= 1;
	                return result;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdrop(n, xf) {
	            return new XDrop(n, xf);
	        });
	    }();

	    var _xdropLast = function () {
	        function XDropLast(n, xf) {
	            this.xf = xf;
	            this.pos = 0;
	            this.full = false;
	            this.acc = new Array(n);
	        }
	        XDropLast.prototype['@@transducer/init'] = _xfBase.init;
	        XDropLast.prototype['@@transducer/result'] = function (result) {
	            this.acc = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.full) {
	                result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
	            }
	            this.store(input);
	            return result;
	        };
	        XDropLast.prototype.store = function (input) {
	            this.acc[this.pos] = input;
	            this.pos += 1;
	            if (this.pos === this.acc.length) {
	                this.pos = 0;
	                this.full = true;
	            }
	        };
	        return _curry2(function _xdropLast(n, xf) {
	            return new XDropLast(n, xf);
	        });
	    }();

	    var _xdropRepeatsWith = function () {
	        function XDropRepeatsWith(pred, xf) {
	            this.xf = xf;
	            this.pred = pred;
	            this.lastValue = undefined;
	            this.seenFirstValue = false;
	        }
	        XDropRepeatsWith.prototype['@@transducer/init'] = function () {
	            return this.xf['@@transducer/init']();
	        };
	        XDropRepeatsWith.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
	            var sameAsLast = false;
	            if (!this.seenFirstValue) {
	                this.seenFirstValue = true;
	            } else if (this.pred(this.lastValue, input)) {
	                sameAsLast = true;
	            }
	            this.lastValue = input;
	            return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropRepeatsWith(pred, xf) {
	            return new XDropRepeatsWith(pred, xf);
	        });
	    }();

	    var _xdropWhile = function () {
	        function XDropWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XDropWhile.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f) {
	                if (this.f(input)) {
	                    return result;
	                }
	                this.f = null;
	            }
	            return this.xf['@@transducer/step'](result, input);
	        };
	        return _curry2(function _xdropWhile(f, xf) {
	            return new XDropWhile(f, xf);
	        });
	    }();

	    var _xfilter = function () {
	        function XFilter(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFilter.prototype['@@transducer/init'] = _xfBase.init;
	        XFilter.prototype['@@transducer/result'] = _xfBase.result;
	        XFilter.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	        };
	        return _curry2(function _xfilter(f, xf) {
	            return new XFilter(f, xf);
	        });
	    }();

	    var _xfind = function () {
	        function XFind(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.found = false;
	        }
	        XFind.prototype['@@transducer/init'] = _xfBase.init;
	        XFind.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, void 0);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFind.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, input));
	            }
	            return result;
	        };
	        return _curry2(function _xfind(f, xf) {
	            return new XFind(f, xf);
	        });
	    }();

	    var _xfindIndex = function () {
	        function XFindIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.found = false;
	        }
	        XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindIndex.prototype['@@transducer/result'] = function (result) {
	            if (!this.found) {
	                result = this.xf['@@transducer/step'](result, -1);
	            }
	            return this.xf['@@transducer/result'](result);
	        };
	        XFindIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.found = true;
	                result = _reduced(this.xf['@@transducer/step'](result, this.idx));
	            }
	            return result;
	        };
	        return _curry2(function _xfindIndex(f, xf) {
	            return new XFindIndex(f, xf);
	        });
	    }();

	    var _xfindLast = function () {
	        function XFindLast(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XFindLast.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLast.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
	        };
	        XFindLast.prototype['@@transducer/step'] = function (result, input) {
	            if (this.f(input)) {
	                this.last = input;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLast(f, xf) {
	            return new XFindLast(f, xf);
	        });
	    }();

	    var _xfindLastIndex = function () {
	        function XFindLastIndex(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.idx = -1;
	            this.lastIdx = -1;
	        }
	        XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
	        XFindLastIndex.prototype['@@transducer/result'] = function (result) {
	            return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
	        };
	        XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
	            this.idx += 1;
	            if (this.f(input)) {
	                this.lastIdx = this.idx;
	            }
	            return result;
	        };
	        return _curry2(function _xfindLastIndex(f, xf) {
	            return new XFindLastIndex(f, xf);
	        });
	    }();

	    var _xmap = function () {
	        function XMap(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XMap.prototype['@@transducer/init'] = _xfBase.init;
	        XMap.prototype['@@transducer/result'] = _xfBase.result;
	        XMap.prototype['@@transducer/step'] = function (result, input) {
	            return this.xf['@@transducer/step'](result, this.f(input));
	        };
	        return _curry2(function _xmap(f, xf) {
	            return new XMap(f, xf);
	        });
	    }();

	    var _xtake = function () {
	        function XTake(n, xf) {
	            this.xf = xf;
	            this.n = n;
	        }
	        XTake.prototype['@@transducer/init'] = _xfBase.init;
	        XTake.prototype['@@transducer/result'] = _xfBase.result;
	        XTake.prototype['@@transducer/step'] = function (result, input) {
	            if (this.n === 0) {
	                return _reduced(result);
	            } else {
	                this.n -= 1;
	                return this.xf['@@transducer/step'](result, input);
	            }
	        };
	        return _curry2(function _xtake(n, xf) {
	            return new XTake(n, xf);
	        });
	    }();

	    var _xtakeWhile = function () {
	        function XTakeWhile(f, xf) {
	            this.xf = xf;
	            this.f = f;
	        }
	        XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
	        XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
	        };
	        return _curry2(function _xtakeWhile(f, xf) {
	            return new XTakeWhile(f, xf);
	        });
	    }();

	    /**
	     * Adds two values.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Number}
	     * @see R.subtract
	     * @example
	     *
	     *      R.add(2, 3);       //=>  5
	     *      R.add(7)(10);      //=> 17
	     */
	    var add = _curry2(function add(a, b) {
	        return Number(a) + Number(b);
	    });

	    /**
	     * Applies a function to the value at the given index of an array, returning a
	     * new copy of the array with the element at the given index replaced with the
	     * result of the function application.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig (a -> a) -> Number -> [a] -> [a]
	     * @param {Function} fn The function to apply.
	     * @param {Number} idx The index.
	     * @param {Array|Arguments} list An array-like object whose value
	     *        at the supplied index will be replaced.
	     * @return {Array} A copy of the supplied array-like object with
	     *         the element at index `idx` replaced with the value
	     *         returned by applying `fn` to the existing element.
	     * @see R.update
	     * @example
	     *
	     *      R.adjust(R.add(10), 1, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.adjust(R.add(10))(1)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var adjust = _curry3(function adjust(fn, idx, list) {
	        if (idx >= list.length || idx < -list.length) {
	            return list;
	        }
	        var start = idx < 0 ? list.length : 0;
	        var _idx = start + idx;
	        var _list = _concat(list);
	        _list[_idx] = fn(list[_idx]);
	        return _list;
	    });

	    /**
	     * Returns `true` if all elements of the list match the predicate, `false` if
	     * there are any that don't.
	     *
	     * Dispatches to the `all` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	     *         otherwise.
	     * @see R.any, R.none, R.transduce
	     * @example
	     *
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      var lessThan3 = R.flip(R.lt)(3);
	     *      R.all(lessThan2)([1, 2]); //=> false
	     *      R.all(lessThan3)([1, 2]); //=> true
	     */
	    var all = _curry2(_dispatchable('all', _xall, function all(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (!fn(list[idx])) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    }));

	    /**
	     * Returns a function that always returns the given value. Note that for
	     * non-primitives the value returned is a reference to the original value.
	     *
	     * This function is known as `const`, `constant`, or `K` (for K combinator) in
	     * other languages and libraries.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig a -> (* -> a)
	     * @param {*} val The value to wrap in a function
	     * @return {Function} A Function :: * -> val.
	     * @example
	     *
	     *      var t = R.always('Tee');
	     *      t(); //=> 'Tee'
	     */
	    var always = _curry1(function always(val) {
	        return function () {
	            return val;
	        };
	    });

	    /**
	     * Returns `true` if both arguments are `true`; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {Boolean} a A boolean value
	     * @param {Boolean} b A boolean value
	     * @return {Boolean} `true` if both arguments are `true`, `false` otherwise
	     * @see R.both
	     * @example
	     *
	     *      R.and(true, true); //=> true
	     *      R.and(true, false); //=> false
	     *      R.and(false, true); //=> false
	     *      R.and(false, false); //=> false
	     */
	    var and = _curry2(function and(a, b) {
	        return a && b;
	    });

	    /**
	     * Returns `true` if at least one of elements of the list match the predicate,
	     * `false` otherwise.
	     *
	     * Dispatches to the `any` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	     *         otherwise.
	     * @see R.all, R.none, R.transduce
	     * @example
	     *
	     *      var lessThan0 = R.flip(R.lt)(0);
	     *      var lessThan2 = R.flip(R.lt)(2);
	     *      R.any(lessThan0)([1, 2]); //=> false
	     *      R.any(lessThan2)([1, 2]); //=> true
	     */
	    var any = _curry2(_dispatchable('any', _xany, function any(fn, list) {
	        var idx = 0;
	        while (idx < list.length) {
	            if (fn(list[idx])) {
	                return true;
	            }
	            idx += 1;
	        }
	        return false;
	    }));

	    /**
	     * Returns a new list, composed of n-tuples of consecutive elements If `n` is
	     * greater than the length of the list, an empty list is returned.
	     *
	     * Dispatches to the `aperture` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @param {Number} n The size of the tuples to create
	     * @param {Array} list The list to split into `n`-tuples
	     * @return {Array} The new list.
	     * @see R.transduce
	     * @example
	     *
	     *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
	     *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
	     *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
	     */
	    var aperture = _curry2(_dispatchable('aperture', _xaperture, _aperture));

	    /**
	     * Returns a new list containing the contents of the given list, followed by
	     * the given element.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The element to add to the end of the new list.
	     * @param {Array} list The list whose contents will be added to the beginning of the output
	     *        list.
	     * @return {Array} A new list containing the contents of the old list followed by `el`.
	     * @see R.prepend
	     * @example
	     *
	     *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
	     *      R.append('tests', []); //=> ['tests']
	     *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
	     */
	    var append = _curry2(function append(el, list) {
	        return _concat(list, [el]);
	    });

	    /**
	     * Applies function `fn` to the argument list `args`. This is useful for
	     * creating a fixed-arity function from a variadic function. `fn` should be a
	     * bound function if context is significant.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig (*... -> a) -> [*] -> a
	     * @param {Function} fn
	     * @param {Array} args
	     * @return {*}
	     * @see R.call, R.unapply
	     * @example
	     *
	     *      var nums = [1, 2, 3, -99, 42, 6, 7];
	     *      R.apply(Math.max, nums); //=> 42
	     */
	    var apply = _curry2(function apply(fn, args) {
	        return fn.apply(this, args);
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the specified
	     * property with the given value. Note that this copies and flattens prototype
	     * properties onto the new object as well. All non-primitive properties are
	     * copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig String -> a -> {k: v} -> {k: v}
	     * @param {String} prop the property name to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except for the specified property.
	     * @see R.dissoc
	     * @example
	     *
	     *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	     */
	    var assoc = _curry3(function assoc(prop, val, obj) {
	        var result = {};
	        for (var p in obj) {
	            result[p] = obj[p];
	        }
	        result[prop] = val;
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, setting or overriding the nodes required
	     * to create the given path, and placing the specific value at the tail end of
	     * that path. Note that this copies and flattens prototype properties onto the
	     * new object as well. All non-primitive properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig [String] -> a -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {*} val the new value
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original except along the specified path.
	     * @see R.dissocPath
	     * @example
	     *
	     *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	     */
	    var assocPath = _curry3(function assocPath(path, val, obj) {
	        switch (path.length) {
	        case 0:
	            return val;
	        case 1:
	            return assoc(path[0], val, obj);
	        default:
	            return assoc(path[0], assocPath(_slice(path, 1), val, Object(obj[path[0]])), obj);
	        }
	    });

	    /**
	     * Creates a function that is bound to a context.
	     * Note: `R.bind` does not provide the additional argument-binding capabilities of
	     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Function
	     * @category Object
	     * @sig (* -> *) -> {*} -> (* -> *)
	     * @param {Function} fn The function to bind to context
	     * @param {Object} thisObj The context to bind `fn` to
	     * @return {Function} A function that will execute in the context of `thisObj`.
	     * @see R.partial
	     */
	    var bind = _curry2(function bind(fn, thisObj) {
	        return _arity(fn.length, function () {
	            return fn.apply(thisObj, arguments);
	        });
	    });

	    /**
	     * Restricts a number to be within a range.
	     *
	     * Also works for other ordered types such as Strings and Dates.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a -> a
	     * @param {Number} minimum number
	     * @param {Number} maximum number
	     * @param {Number} value to be clamped
	     * @return {Number} Returns the clamped value
	     * @example
	     *
	     *      R.clamp(1, 10, -1) // => 1
	     *      R.clamp(1, 10, 11) // => 10
	     *      R.clamp(1, 10, 4)  // => 4
	     */
	    var clamp = _curry3(function clamp(min, max, value) {
	        if (min > max) {
	            throw new Error('min must not be greater than max in clamp(min, max, value)');
	        }
	        return value < min ? min : value > max ? max : value;
	    });

	    /**
	     * Makes a comparator function out of a function that reports whether the first
	     * element is less than the second.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a, b -> Boolean) -> (a, b -> Number)
	     * @param {Function} pred A predicate function of arity two.
	     * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`.
	     * @example
	     *
	     *      var cmp = R.comparator((a, b) => a.age < b.age);
	     *      var people = [
	     *        // ...
	     *      ];
	     *      R.sort(cmp, people);
	     */
	    var comparator = _curry1(function comparator(pred) {
	        return function (a, b) {
	            return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
	        };
	    });

	    /**
	     * Returns a curried equivalent of the provided function, with the specified
	     * arity. The curried function has two unusual capabilities. First, its
	     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	     * following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	     * following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @since v0.5.0
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curry
	     * @example
	     *
	     *      var sumArgs = (...args) => R.sum(args);
	     *
	     *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curryN = _curry2(function curryN(length, fn) {
	        if (length === 1) {
	            return _curry1(fn);
	        }
	        return _arity(length, _curryN(length, [], fn));
	    });

	    /**
	     * Decrements its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.inc
	     * @example
	     *
	     *      R.dec(42); //=> 41
	     */
	    var dec = add(-1);

	    /**
	     * Returns the second argument if it is not `null`, `undefined` or `NaN`
	     * otherwise the first argument is returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Logic
	     * @sig a -> b -> a | b
	     * @param {a} val The default value.
	     * @param {b} val The value to return if it is not null or undefined
	     * @return {*} The the second value or the default value
	     * @example
	     *
	     *      var defaultTo42 = R.defaultTo(42);
	     *
	     *      defaultTo42(null);  //=> 42
	     *      defaultTo42(undefined);  //=> 42
	     *      defaultTo42('Ramda');  //=> 'Ramda'
	     *      defaultTo42(parseInt('string')); //=> 42
	     */
	    var defaultTo = _curry2(function defaultTo(d, v) {
	        return v == null || v !== v ? d : v;
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not
	     * contained in the second list. Duplication is determined according to the
	     * value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.difference
	     * @example
	     *
	     *      var cmp = (x, y) => x.a === y.a;
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
	     *      var l2 = [{a: 3}, {a: 4}];
	     *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
	     */
	    var differenceWith = _curry3(function differenceWith(pred, first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
	                out.push(first[idx]);
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object that does not contain a `prop` property.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Object
	     * @sig String -> {k: v} -> {k: v}
	     * @param {String} prop the name of the property to dissociate
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object similar to the original but without the specified property
	     * @see R.assoc
	     * @example
	     *
	     *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	     */
	    var dissoc = _curry2(function dissoc(prop, obj) {
	        var result = {};
	        for (var p in obj) {
	            if (p !== prop) {
	                result[p] = obj[p];
	            }
	        }
	        return result;
	    });

	    /**
	     * Makes a shallow clone of an object, omitting the property at the given path.
	     * Note that this copies and flattens prototype properties onto the new object
	     * as well. All non-primitive properties are copied by reference.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.11.0
	     * @category Object
	     * @sig [String] -> {k: v} -> {k: v}
	     * @param {Array} path the path to set
	     * @param {Object} obj the object to clone
	     * @return {Object} a new object without the property at path
	     * @see R.assocPath
	     * @example
	     *
	     *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	     */
	    var dissocPath = _curry2(function dissocPath(path, obj) {
	        switch (path.length) {
	        case 0:
	            return obj;
	        case 1:
	            return dissoc(path[0], obj);
	        default:
	            var head = path[0];
	            var tail = _slice(path, 1);
	            return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
	        }
	    });

	    /**
	     * Divides two numbers. Equivalent to `a / b`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a / b`.
	     * @see R.multiply
	     * @example
	     *
	     *      R.divide(71, 100); //=> 0.71
	     *
	     *      var half = R.divide(R.__, 2);
	     *      half(42); //=> 21
	     *
	     *      var reciprocal = R.divide(1);
	     *      reciprocal(4);   //=> 0.25
	     */
	    var divide = _curry2(function divide(a, b) {
	        return a / b;
	    });

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing
	     * each value to the supplied predicate function, skipping elements while the
	     * predicate function returns `true`. The predicate function is passed one
	     * argument: *(value)*.
	     *
	     * Dispatches to the `dropWhile` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeWhile, R.transduce, R.addIndex
	     * @example
	     *
	     *      var lteTwo = x => x <= 2;
	     *
	     *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
	     */
	    var dropWhile = _curry2(_dispatchable('dropWhile', _xdropWhile, function dropWhile(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len && pred(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, idx);
	    }));

	    /**
	     * Returns the empty value of its argument's type. Ramda defines the empty
	     * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
	     * types are supported if they define `<Type>.empty` and/or
	     * `<Type>.prototype.empty`.
	     *
	     * Dispatches to the `empty` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig a -> a
	     * @param {*} x
	     * @return {*}
	     * @example
	     *
	     *      R.empty(Just(42));      //=> Nothing()
	     *      R.empty([1, 2, 3]);     //=> []
	     *      R.empty('unicorns');    //=> ''
	     *      R.empty({x: 1, y: 2});  //=> {}
	     */
	    // else
	    var empty = _curry1(function empty(x) {
	        return x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
	            return arguments;
	        }() : // else
	        void 0;
	    });

	    /**
	     * Creates a new object by recursively evolving a shallow copy of `object`,
	     * according to the `transformation` functions. All non-primitive properties
	     * are copied by reference.
	     *
	     * A `transformation` function will not be invoked if its corresponding key
	     * does not exist in the evolved object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {k: (v -> v)} -> {k: v} -> {k: v}
	     * @param {Object} transformations The object specifying transformation functions to apply
	     *        to the object.
	     * @param {Object} object The object to be transformed.
	     * @return {Object} The transformed object.
	     * @example
	     *
	     *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
	     *      var transformations = {
	     *        firstName: R.trim,
	     *        lastName: R.trim, // Will not get invoked.
	     *        data: {elapsed: R.add(1), remaining: R.add(-1)}
	     *      };
	     *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
	     */
	    var evolve = _curry2(function evolve(transformations, object) {
	        var result = {};
	        var transformation, key, type;
	        for (key in object) {
	            transformation = transformations[key];
	            type = typeof transformation;
	            result[key] = type === 'function' ? transformation(object[key]) : type === 'object' ? evolve(transformations[key], object[key]) : object[key];
	        }
	        return result;
	    });

	    /**
	     * Returns the first element of the list which matches the predicate, or
	     * `undefined` if no element matches.
	     *
	     * Dispatches to the `find` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     *        desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	     *      R.find(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var find = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx += 1;
	        }
	    }));

	    /**
	     * Returns the index of the first element of the list which matches the
	     * predicate, or `-1` if no element matches.
	     *
	     * Dispatches to the `findIndex` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	     *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
	     *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findIndex = _curry2(_dispatchable('findIndex', _xfindIndex, function findIndex(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    }));

	    /**
	     * Returns the last element of the list which matches the predicate, or
	     * `undefined` if no element matches.
	     *
	     * Dispatches to the `findLast` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> a | undefined
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Object} The element found, or `undefined`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
	     *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
	     */
	    var findLast = _curry2(_dispatchable('findLast', _xfindLast, function findLast(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return list[idx];
	            }
	            idx -= 1;
	        }
	    }));

	    /**
	     * Returns the index of the last element of the list which matches the
	     * predicate, or `-1` if no element matches.
	     *
	     * Dispatches to the `findLastIndex` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Number
	     * @param {Function} fn The predicate function used to determine if the element is the
	     * desired one.
	     * @param {Array} list The array to consider.
	     * @return {Number} The index of the element found, or `-1`.
	     * @see R.transduce
	     * @example
	     *
	     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	     *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
	     *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
	     */
	    var findLastIndex = _curry2(_dispatchable('findLastIndex', _xfindLastIndex, function findLastIndex(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            if (fn(list[idx])) {
	                return idx;
	            }
	            idx -= 1;
	        }
	        return -1;
	    }));

	    /**
	     * Iterate over an input `list`, calling a provided function `fn` for each
	     * element in the list.
	     *
	     * `fn` receives one argument: *(value)*.
	     *
	     * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.forEach` method. For more
	     * details on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	     *
	     * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
	     * the original array. In some libraries this function is named `each`.
	     *
	     * Dispatches to the `forEach` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig (a -> *) -> [a] -> [a]
	     * @param {Function} fn The function to invoke. Receives one argument, `value`.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} The original list.
	     * @see R.addIndex
	     * @example
	     *
	     *      var printXPlusFive = x => console.log(x + 5);
	     *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	     *      //-> 6
	     *      //-> 7
	     *      //-> 8
	     */
	    var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            fn(list[idx]);
	            idx += 1;
	        }
	        return list;
	    }));

	    /**
	     * Creates a new object out of a list key-value pairs.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [[k,v]] -> {k: v}
	     * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	     * @return {Object} The object made by pairing up `keys` and `values`.
	     * @see R.toPairs, R.pair
	     * @example
	     *
	     *      R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	     */
	    var fromPairs = _curry1(function fromPairs(pairs) {
	        var idx = 0;
	        var len = pairs.length;
	        var out = {};
	        while (idx < len) {
	            if (_isArray(pairs[idx]) && pairs[idx].length) {
	                out[pairs[idx][0]] = pairs[idx][1];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Takes a list and returns a list of lists where each sublist's elements are
	     * all "equal" according to the provided equality function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.21.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [[a]]
	     * @param {Function} fn Function for determining whether two given (adjacent)
	     *        elements should be in the same group
	     * @param {Array} list The array to group. Also accepts a string, which will be
	     *        treated as a list of characters.
	     * @return {List} A list that contains sublists of equal elements,
	     *         whose concatenations is equal to the original list.
	     * @example
	     *
	     *    groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	     *    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]
	     *
	     *    groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	     *    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
	     *
	     *    R.groupWith(R.eqBy(isVowel), 'aestiou')
	     *    // ['ae', 'st', 'iou']
	     */
	    var groupWith = _curry2(function (fn, list) {
	        var res = [];
	        var idx = 0;
	        var len = list.length;
	        while (idx < len) {
	            var nextidx = idx + 1;
	            while (nextidx < len && fn(list[idx], list[nextidx])) {
	                nextidx += 1;
	            }
	            res.push(list.slice(idx, nextidx));
	            idx = nextidx;
	        }
	        return res;
	    });

	    /**
	     * Returns `true` if the first argument is greater than the second; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.lt
	     * @example
	     *
	     *      R.gt(2, 1); //=> true
	     *      R.gt(2, 2); //=> false
	     *      R.gt(2, 3); //=> false
	     *      R.gt('a', 'z'); //=> false
	     *      R.gt('z', 'a'); //=> true
	     */
	    var gt = _curry2(function gt(a, b) {
	        return a > b;
	    });

	    /**
	     * Returns `true` if the first argument is greater than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.lte
	     * @example
	     *
	     *      R.gte(2, 1); //=> true
	     *      R.gte(2, 2); //=> true
	     *      R.gte(2, 3); //=> false
	     *      R.gte('a', 'z'); //=> false
	     *      R.gte('z', 'a'); //=> true
	     */
	    var gte = _curry2(function gte(a, b) {
	        return a >= b;
	    });

	    /**
	     * Returns whether or not an object has an own property with the specified name
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      var hasName = R.has('name');
	     *      hasName({name: 'alice'});   //=> true
	     *      hasName({name: 'bob'});     //=> true
	     *      hasName({});                //=> false
	     *
	     *      var point = {x: 0, y: 0};
	     *      var pointHas = R.has(R.__, point);
	     *      pointHas('x');  //=> true
	     *      pointHas('y');  //=> true
	     *      pointHas('z');  //=> false
	     */
	    var has = _curry2(_has);

	    /**
	     * Returns whether or not an object or its prototype chain has a property with
	     * the specified name
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Object
	     * @sig s -> {s: x} -> Boolean
	     * @param {String} prop The name of the property to check for.
	     * @param {Object} obj The object to query.
	     * @return {Boolean} Whether the property exists.
	     * @example
	     *
	     *      function Rectangle(width, height) {
	     *        this.width = width;
	     *        this.height = height;
	     *      }
	     *      Rectangle.prototype.area = function() {
	     *        return this.width * this.height;
	     *      };
	     *
	     *      var square = new Rectangle(2, 2);
	     *      R.hasIn('width', square);  //=> true
	     *      R.hasIn('area', square);  //=> true
	     */
	    var hasIn = _curry2(function hasIn(prop, obj) {
	        return prop in obj;
	    });

	    /**
	     * Returns true if its arguments are identical, false otherwise. Values are
	     * identical if they reference the same memory. `NaN` is identical to `NaN`;
	     * `0` and `-0` are not identical.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Relation
	     * @sig a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      var o = {};
	     *      R.identical(o, o); //=> true
	     *      R.identical(1, 1); //=> true
	     *      R.identical(1, '1'); //=> false
	     *      R.identical([], []); //=> false
	     *      R.identical(0, -0); //=> false
	     *      R.identical(NaN, NaN); //=> true
	     */
	    // SameValue algorithm
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Step 6.a: NaN == NaN
	    var identical = _curry2(function identical(a, b) {
	        // SameValue algorithm
	        if (a === b) {
	            // Steps 1-5, 7-10
	            // Steps 6.b-6.e: +0 != -0
	            return a !== 0 || 1 / a === 1 / b;
	        } else {
	            // Step 6.a: NaN == NaN
	            return a !== a && b !== b;
	        }
	    });

	    /**
	     * A function that does nothing but return the parameter supplied to it. Good
	     * as a default or placeholder function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig a -> a
	     * @param {*} x The value to return.
	     * @return {*} The input value, `x`.
	     * @example
	     *
	     *      R.identity(1); //=> 1
	     *
	     *      var obj = {};
	     *      R.identity(obj) === obj; //=> true
	     */
	    var identity = _curry1(_identity);

	    /**
	     * Creates a function that will process either the `onTrue` or the `onFalse`
	     * function depending upon the result of the `condition` predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	     * @param {Function} condition A predicate function
	     * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	     * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	     * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	     *                    function depending upon the result of the `condition` predicate.
	     * @see R.unless, R.when
	     * @example
	     *
	     *      var incCount = R.ifElse(
	     *        R.has('count'),
	     *        R.over(R.lensProp('count'), R.inc),
	     *        R.assoc('count', 1)
	     *      );
	     *      incCount({});           //=> { count: 1 }
	     *      incCount({ count: 1 }); //=> { count: 2 }
	     */
	    var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
	        return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
	            return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	        });
	    });

	    /**
	     * Increments its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @see R.dec
	     * @example
	     *
	     *      R.inc(42); //=> 43
	     */
	    var inc = add(1);

	    /**
	     * Inserts the supplied element into the list, at index `index`. _Note that
	     * this is not destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.2
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} index The position to insert the element
	     * @param {*} elt The element to insert into the Array
	     * @param {Array} list The list to insert into
	     * @return {Array} A new Array with `elt` inserted at `index`.
	     * @example
	     *
	     *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
	     */
	    var insert = _curry3(function insert(idx, elt, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        var result = _slice(list);
	        result.splice(idx, 0, elt);
	        return result;
	    });

	    /**
	     * Inserts the sub-list into the list, at index `index`. _Note that this is not
	     * destructive_: it returns a copy of the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig Number -> [a] -> [a] -> [a]
	     * @param {Number} index The position to insert the sub-list
	     * @param {Array} elts The sub-list to insert into the Array
	     * @param {Array} list The list to insert the sub-list into
	     * @return {Array} A new Array with `elts` inserted starting at `index`.
	     * @example
	     *
	     *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
	     */
	    var insertAll = _curry3(function insertAll(idx, elts, list) {
	        idx = idx < list.length && idx >= 0 ? idx : list.length;
	        return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
	    });

	    /**
	     * Creates a new list with the separator interposed between elements.
	     *
	     * Dispatches to the `intersperse` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} separator The element to add to the list.
	     * @param {Array} list The list to be interposed.
	     * @return {Array} The new list.
	     * @example
	     *
	     *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
	     */
	    var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
	        var out = [];
	        var idx = 0;
	        var length = list.length;
	        while (idx < length) {
	            if (idx === length - 1) {
	                out.push(list[idx]);
	            } else {
	                out.push(list[idx], separator);
	            }
	            idx += 1;
	        }
	        return out;
	    }));

	    /**
	     * See if an object (`val`) is an instance of the supplied constructor. This
	     * function will check up the inheritance chain, if any.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Type
	     * @sig (* -> {*}) -> a -> Boolean
	     * @param {Object} ctor A constructor
	     * @param {*} val The value to test
	     * @return {Boolean}
	     * @example
	     *
	     *      R.is(Object, {}); //=> true
	     *      R.is(Number, 1); //=> true
	     *      R.is(Object, 1); //=> false
	     *      R.is(String, 's'); //=> true
	     *      R.is(String, new String('')); //=> true
	     *      R.is(Object, new String('')); //=> true
	     *      R.is(Object, 's'); //=> false
	     *      R.is(Number, {}); //=> false
	     */
	    var is = _curry2(function is(Ctor, val) {
	        return val != null && val.constructor === Ctor || val instanceof Ctor;
	    });

	    /**
	     * Tests whether or not an object is similar to an array.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.5.0
	     * @category Type
	     * @category List
	     * @sig * -> Boolean
	     * @param {*} x The object to test.
	     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	     * @example
	     *
	     *      R.isArrayLike([]); //=> true
	     *      R.isArrayLike(true); //=> false
	     *      R.isArrayLike({}); //=> false
	     *      R.isArrayLike({length: 10}); //=> false
	     *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	     */
	    var isArrayLike = _curry1(function isArrayLike(x) {
	        if (_isArray(x)) {
	            return true;
	        }
	        if (!x) {
	            return false;
	        }
	        if (typeof x !== 'object') {
	            return false;
	        }
	        if (x instanceof String) {
	            return false;
	        }
	        if (x.nodeType === 1) {
	            return !!x.length;
	        }
	        if (x.length === 0) {
	            return true;
	        }
	        if (x.length > 0) {
	            return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	        }
	        return false;
	    });

	    /**
	     * Checks if the input value is `null` or `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Type
	     * @sig * -> Boolean
	     * @param {*} x The value to test.
	     * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	     * @example
	     *
	     *      R.isNil(null); //=> true
	     *      R.isNil(undefined); //=> true
	     *      R.isNil(0); //=> false
	     *      R.isNil([]); //=> false
	     */
	    var isNil = _curry1(function isNil(x) {
	        return x == null;
	    });

	    /**
	     * Returns a list containing the names of all the enumerable own properties of
	     * the supplied object.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own properties.
	     * @example
	     *
	     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	     */
	    // cover IE < 9 keys issues
	    // Safari bug
	    var keys = function () {
	        // cover IE < 9 keys issues
	        var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	        var nonEnumerableProps = [
	            'constructor',
	            'valueOf',
	            'isPrototypeOf',
	            'toString',
	            'propertyIsEnumerable',
	            'hasOwnProperty',
	            'toLocaleString'
	        ];
	        // Safari bug
	        var hasArgsEnumBug = function () {
	            'use strict';
	            return arguments.propertyIsEnumerable('length');
	        }();
	        var contains = function contains(list, item) {
	            var idx = 0;
	            while (idx < list.length) {
	                if (list[idx] === item) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        };
	        return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
	            return Object(obj) !== obj ? [] : Object.keys(obj);
	        }) : _curry1(function keys(obj) {
	            if (Object(obj) !== obj) {
	                return [];
	            }
	            var prop, nIdx;
	            var ks = [];
	            var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	            for (prop in obj) {
	                if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	                    ks[ks.length] = prop;
	                }
	            }
	            if (hasEnumBug) {
	                nIdx = nonEnumerableProps.length - 1;
	                while (nIdx >= 0) {
	                    prop = nonEnumerableProps[nIdx];
	                    if (_has(prop, obj) && !contains(ks, prop)) {
	                        ks[ks.length] = prop;
	                    }
	                    nIdx -= 1;
	                }
	            }
	            return ks;
	        });
	    }();

	    /**
	     * Returns a list containing the names of all the properties of the supplied
	     * object, including prototype properties.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig {k: v} -> [k]
	     * @param {Object} obj The object to extract properties from
	     * @return {Array} An array of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.keysIn(f); //=> ['x', 'y']
	     */
	    var keysIn = _curry1(function keysIn(obj) {
	        var prop;
	        var ks = [];
	        for (prop in obj) {
	            ks[ks.length] = prop;
	        }
	        return ks;
	    });

	    /**
	     * Returns the number of elements in the array by returning `list.length`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [a] -> Number
	     * @param {Array} list The array to inspect.
	     * @return {Number} The length of the array.
	     * @example
	     *
	     *      R.length([]); //=> 0
	     *      R.length([1, 2, 3]); //=> 3
	     */
	    var length = _curry1(function length(list) {
	        return list != null && is(Number, list.length) ? list.length : NaN;
	    });

	    /**
	     * Returns `true` if the first argument is less than the second; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @see R.gt
	     * @example
	     *
	     *      R.lt(2, 1); //=> false
	     *      R.lt(2, 2); //=> false
	     *      R.lt(2, 3); //=> true
	     *      R.lt('a', 'z'); //=> true
	     *      R.lt('z', 'a'); //=> false
	     */
	    var lt = _curry2(function lt(a, b) {
	        return a < b;
	    });

	    /**
	     * Returns `true` if the first argument is less than or equal to the second;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> Boolean
	     * @param {Number} a
	     * @param {Number} b
	     * @return {Boolean}
	     * @see R.gte
	     * @example
	     *
	     *      R.lte(2, 1); //=> false
	     *      R.lte(2, 2); //=> true
	     *      R.lte(2, 3); //=> true
	     *      R.lte('a', 'z'); //=> true
	     *      R.lte('z', 'a'); //=> false
	     */
	    var lte = _curry2(function lte(a, b) {
	        return a <= b;
	    });

	    /**
	     * The mapAccum function behaves like a combination of map and reduce; it
	     * applies a function to each element of a list, passing an accumulating
	     * parameter from left to right, and returning a final value of this
	     * accumulator together with the new list.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should
	     * return a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var appender = (a, b) => [a + b, a + b];
	     *
	     *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
	     */
	    var mapAccum = _curry3(function mapAccum(fn, acc, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        var tuple = [acc];
	        while (idx < len) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx += 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * The mapAccumRight function behaves like a combination of map and reduce; it
	     * applies a function to each element of a list, passing an accumulating
	     * parameter from right to left, and returning a final value of this
	     * accumulator together with the new list.
	     *
	     * Similar to `mapAccum`, except moves through the input list from the right to
	     * the left.
	     *
	     * The iterator function receives two arguments, *acc* and *value*, and should
	     * return a tuple *[acc, value]*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var digits = ['1', '2', '3', '4'];
	     *      var append = (a, b) => [a + b, a + b];
	     *
	     *      R.mapAccumRight(append, 0, digits); //=> ['04321', ['04321', '0432', '043', '04']]
	     */
	    var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
	        var idx = list.length - 1;
	        var result = [];
	        var tuple = [acc];
	        while (idx >= 0) {
	            tuple = fn(tuple[0], list[idx]);
	            result[idx] = tuple[1];
	            idx -= 1;
	        }
	        return [
	            tuple[0],
	            result
	        ];
	    });

	    /**
	     * Tests a regular expression against a String. Note that this function will
	     * return an empty array when there are no matches. This differs from
	     * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
	     * which returns `null` when there are no matches.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category String
	     * @sig RegExp -> String -> [String | Undefined]
	     * @param {RegExp} rx A regular expression.
	     * @param {String} str The string to match against
	     * @return {Array} The list of matches or empty array.
	     * @see R.test
	     * @example
	     *
	     *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
	     *      R.match(/a/, 'b'); //=> []
	     *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
	     */
	    var match = _curry2(function match(rx, str) {
	        return str.match(rx) || [];
	    });

	    /**
	     * mathMod behaves like the modulo operator should mathematically, unlike the
	     * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
	     * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
	     * when the modulus is zero or negative.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} m The dividend.
	     * @param {Number} p the modulus.
	     * @return {Number} The result of `b mod a`.
	     * @example
	     *
	     *      R.mathMod(-17, 5);  //=> 3
	     *      R.mathMod(17, 5);   //=> 2
	     *      R.mathMod(17, -5);  //=> NaN
	     *      R.mathMod(17, 0);   //=> NaN
	     *      R.mathMod(17.2, 5); //=> NaN
	     *      R.mathMod(17, 5.3); //=> NaN
	     *
	     *      var clock = R.mathMod(R.__, 12);
	     *      clock(15); //=> 3
	     *      clock(24); //=> 0
	     *
	     *      var seventeenMod = R.mathMod(17);
	     *      seventeenMod(3);  //=> 2
	     *      seventeenMod(4);  //=> 1
	     *      seventeenMod(10); //=> 7
	     */
	    var mathMod = _curry2(function mathMod(m, p) {
	        if (!_isInteger(m)) {
	            return NaN;
	        }
	        if (!_isInteger(p) || p < 1) {
	            return NaN;
	        }
	        return (m % p + p) % p;
	    });

	    /**
	     * Returns the larger of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.maxBy, R.min
	     * @example
	     *
	     *      R.max(789, 123); //=> 789
	     *      R.max('a', 'b'); //=> 'b'
	     */
	    var max = _curry2(function max(a, b) {
	        return b > a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces the
	     * larger result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.max, R.minBy
	     * @example
	     *
	     *      //  square :: Number -> Number
	     *      var square = n => n * n;
	     *
	     *      R.maxBy(square, -3, 2); //=> -3
	     *
	     *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
	     *      R.reduce(R.maxBy(square), 0, []); //=> 0
	     */
	    var maxBy = _curry3(function maxBy(f, a, b) {
	        return f(b) > f(a) ? b : a;
	    });

	    /**
	     * Create a new object with the own properties of the first object merged with
	     * the own properties of the second object. If a key exists in both objects,
	     * the value from the second object will be used.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> {k: v} -> {k: v}
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.mergeWith, R.mergeWithKey
	     * @example
	     *
	     *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	     *      //=> { 'name': 'fred', 'age': 40 }
	     *
	     *      var resetToDefault = R.merge(R.__, {x: 0});
	     *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	     */
	    var merge = _curry2(function merge(l, r) {
	        return _assign({}, l, r);
	    });

	    /**
	     * Merges a list of objects together into one object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig [{k: v}] -> {k: v}
	     * @param {Array} list An array of objects
	     * @return {Object} A merged object.
	     * @see R.reduce
	     * @example
	     *
	     *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	     *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	     */
	    var mergeAll = _curry1(function mergeAll(list) {
	        return _assign.apply(null, [{}].concat(list));
	    });

	    /**
	     * Creates a new object with the own properties of the two provided objects. If
	     * a key exists in both objects, the provided function is applied to the key
	     * and the values associated with the key in each object, with the result being
	     * used as the value associated with the key in the returned object. The key
	     * will be excluded from the returned object if the resulting value is
	     * `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
	     * @param {Function} fn
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.merge, R.mergeWith
	     * @example
	     *
	     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
	     *      R.mergeWithKey(concatValues,
	     *                     { a: true, thing: 'foo', values: [10, 20] },
	     *                     { b: true, thing: 'bar', values: [15, 35] });
	     *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
	     */
	    var mergeWithKey = _curry3(function mergeWithKey(fn, l, r) {
	        var result = {};
	        var k;
	        for (k in l) {
	            if (_has(k, l)) {
	                result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
	            }
	        }
	        for (k in r) {
	            if (_has(k, r) && !_has(k, result)) {
	                result[k] = r[k];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the smaller of its two arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord a => a -> a -> a
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.minBy, R.max
	     * @example
	     *
	     *      R.min(789, 123); //=> 123
	     *      R.min('a', 'b'); //=> 'a'
	     */
	    var min = _curry2(function min(a, b) {
	        return b < a ? b : a;
	    });

	    /**
	     * Takes a function and two values, and returns whichever value produces the
	     * smaller result when passed to the provided function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> a -> a -> a
	     * @param {Function} f
	     * @param {*} a
	     * @param {*} b
	     * @return {*}
	     * @see R.min, R.maxBy
	     * @example
	     *
	     *      //  square :: Number -> Number
	     *      var square = n => n * n;
	     *
	     *      R.minBy(square, -3, 2); //=> 2
	     *
	     *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
	     *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
	     */
	    var minBy = _curry3(function minBy(f, a, b) {
	        return f(b) < f(a) ? b : a;
	    });

	    /**
	     * Divides the second parameter by the first and returns the remainder. Note
	     * that this function preserves the JavaScript-style behavior for modulo. For
	     * mathematical modulo see `mathMod`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The value to the divide.
	     * @param {Number} b The pseudo-modulus
	     * @return {Number} The result of `b % a`.
	     * @see R.mathMod
	     * @example
	     *
	     *      R.modulo(17, 3); //=> 2
	     *      // JS behavior:
	     *      R.modulo(-17, 3); //=> -2
	     *      R.modulo(17, -3); //=> 2
	     *
	     *      var isOdd = R.modulo(R.__, 2);
	     *      isOdd(42); //=> 0
	     *      isOdd(21); //=> 1
	     */
	    var modulo = _curry2(function modulo(a, b) {
	        return a % b;
	    });

	    /**
	     * Multiplies two numbers. Equivalent to `a * b` but curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a * b`.
	     * @see R.divide
	     * @example
	     *
	     *      var double = R.multiply(2);
	     *      var triple = R.multiply(3);
	     *      double(3);       //=>  6
	     *      triple(4);       //=> 12
	     *      R.multiply(2, 5);  //=> 10
	     */
	    var multiply = _curry2(function multiply(a, b) {
	        return a * b;
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly `n` parameters. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig Number -> (* -> a) -> (* -> a)
	     * @param {Number} n The desired arity of the new function.
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity `n`.
	     * @example
	     *
	     *      var takesTwoArgs = (a, b) => [a, b];
	     *
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.nAry(1, takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only `n` arguments are passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var nAry = _curry2(function nAry(n, fn) {
	        switch (n) {
	        case 0:
	            return function () {
	                return fn.call(this);
	            };
	        case 1:
	            return function (a0) {
	                return fn.call(this, a0);
	            };
	        case 2:
	            return function (a0, a1) {
	                return fn.call(this, a0, a1);
	            };
	        case 3:
	            return function (a0, a1, a2) {
	                return fn.call(this, a0, a1, a2);
	            };
	        case 4:
	            return function (a0, a1, a2, a3) {
	                return fn.call(this, a0, a1, a2, a3);
	            };
	        case 5:
	            return function (a0, a1, a2, a3, a4) {
	                return fn.call(this, a0, a1, a2, a3, a4);
	            };
	        case 6:
	            return function (a0, a1, a2, a3, a4, a5) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5);
	            };
	        case 7:
	            return function (a0, a1, a2, a3, a4, a5, a6) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
	            };
	        case 8:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
	            };
	        case 9:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
	            };
	        case 10:
	            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
	            };
	        default:
	            throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
	        }
	    });

	    /**
	     * Negates its argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Math
	     * @sig Number -> Number
	     * @param {Number} n
	     * @return {Number}
	     * @example
	     *
	     *      R.negate(42); //=> -42
	     */
	    var negate = _curry1(function negate(n) {
	        return -n;
	    });

	    /**
	     * Returns `true` if no elements of the list match the predicate, `false`
	     * otherwise.
	     *
	     * Dispatches to the `any` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> Boolean
	     * @param {Function} fn The predicate function.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
	     * @see R.all, R.any
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *
	     *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
	     *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
	     */
	    var none = _curry2(_complement(_dispatchable('any', _xany, any)));

	    /**
	     * A function that returns the `!` of its argument. It will return `true` when
	     * passed false-y value, and `false` when passed a truth-y one.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> Boolean
	     * @param {*} a any value
	     * @return {Boolean} the logical inverse of passed argument.
	     * @see R.complement
	     * @example
	     *
	     *      R.not(true); //=> false
	     *      R.not(false); //=> true
	     *      R.not(0); => true
	     *      R.not(1); => false
	     */
	    var not = _curry1(function not(a) {
	        return !a;
	    });

	    /**
	     * Returns the nth element of the given list or string. If n is negative the
	     * element at index length + n is returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> a | Undefined
	     * @sig Number -> String -> String
	     * @param {Number} offset
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      var list = ['foo', 'bar', 'baz', 'quux'];
	     *      R.nth(1, list); //=> 'bar'
	     *      R.nth(-1, list); //=> 'quux'
	     *      R.nth(-99, list); //=> undefined
	     *
	     *      R.nth(2, 'abc'); //=> 'c'
	     *      R.nth(3, 'abc'); //=> ''
	     */
	    var nth = _curry2(function nth(offset, list) {
	        var idx = offset < 0 ? list.length + offset : offset;
	        return _isString(list) ? list.charAt(idx) : list[idx];
	    });

	    /**
	     * Returns a function which returns its nth argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig Number -> *... -> *
	     * @param {Number} n
	     * @return {Function}
	     * @example
	     *
	     *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
	     *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
	     */
	    var nthArg = _curry1(function nthArg(n) {
	        return function () {
	            return nth(n, arguments);
	        };
	    });

	    /**
	     * Creates an object containing a single key:value pair.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Object
	     * @sig String -> a -> {String:a}
	     * @param {String} key
	     * @param {*} val
	     * @return {Object}
	     * @see R.pair
	     * @example
	     *
	     *      var matchPhrases = R.compose(
	     *        R.objOf('must'),
	     *        R.map(R.objOf('match_phrase'))
	     *      );
	     *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
	     */
	    var objOf = _curry2(function objOf(key, val) {
	        var obj = {};
	        obj[key] = val;
	        return obj;
	    });

	    /**
	     * Returns a singleton array containing the value provided.
	     *
	     * Note this `of` is different from the ES6 `of`; See
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig a -> [a]
	     * @param {*} x any value
	     * @return {Array} An array wrapping `x`.
	     * @example
	     *
	     *      R.of(null); //=> [null]
	     *      R.of([42]); //=> [[42]]
	     */
	    var of = _curry1(_of);

	    /**
	     * Accepts a function `fn` and returns a function that guards invocation of
	     * `fn` such that `fn` can only ever be called once, no matter how many times
	     * the returned function is invoked. The first value calculated is returned in
	     * subsequent invocations.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a... -> b) -> (a... -> b)
	     * @param {Function} fn The function to wrap in a call-only-once wrapper.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var addOneOnce = R.once(x => x + 1);
	     *      addOneOnce(10); //=> 11
	     *      addOneOnce(addOneOnce(50)); //=> 11
	     */
	    var once = _curry1(function once(fn) {
	        var called = false;
	        var result;
	        return _arity(fn.length, function () {
	            if (called) {
	                return result;
	            }
	            called = true;
	            result = fn.apply(this, arguments);
	            return result;
	        });
	    });

	    /**
	     * Returns `true` if one or both of its arguments are `true`. Returns `false`
	     * if both arguments are `false`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig * -> * -> *
	     * @param {Boolean} a A boolean value
	     * @param {Boolean} b A boolean value
	     * @return {Boolean} `true` if one or both arguments are `true`, `false` otherwise
	     * @see R.either
	     * @example
	     *
	     *      R.or(true, true); //=> true
	     *      R.or(true, false); //=> true
	     *      R.or(false, true); //=> true
	     *      R.or(false, false); //=> false
	     */
	    var or = _curry2(function or(a, b) {
	        return a || b;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the result of applying the given function to
	     * the focused value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> (a -> a) -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	     */
	    // `Identity` is a functor that holds a single value, where `map` simply
	    // transforms the held value with the provided function.
	    // The value returned by the getter function is first transformed with `f`,
	    // then set as the value of an `Identity`. This is then mapped over with the
	    // setter function of the lens.
	    var over = function () {
	        // `Identity` is a functor that holds a single value, where `map` simply
	        // transforms the held value with the provided function.
	        var Identity = function (x) {
	            return {
	                value: x,
	                map: function (f) {
	                    return Identity(f(x));
	                }
	            };
	        };
	        return _curry3(function over(lens, f, x) {
	            // The value returned by the getter function is first transformed with `f`,
	            // then set as the value of an `Identity`. This is then mapped over with the
	            // setter function of the lens.
	            return lens(function (y) {
	                return Identity(f(y));
	            })(x).value;
	        });
	    }();

	    /**
	     * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category List
	     * @sig a -> b -> (a,b)
	     * @param {*} fst
	     * @param {*} snd
	     * @return {Array}
	     * @see R.objOf, R.of
	     * @example
	     *
	     *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
	     */
	    var pair = _curry2(function pair(fst, snd) {
	        return [
	            fst,
	            snd
	        ];
	    });

	    /**
	     * Retrieve the value at a given path.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig [String] -> {k: v} -> v | Undefined
	     * @param {Array} path The path to use.
	     * @param {Object} obj The object to retrieve the nested property from.
	     * @return {*} The data at `path`.
	     * @example
	     *
	     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
	     */
	    var path = _curry2(function path(paths, obj) {
	        var val = obj;
	        var idx = 0;
	        while (idx < paths.length) {
	            if (val == null) {
	                return;
	            }
	            val = val[paths[idx]];
	            idx += 1;
	        }
	        return val;
	    });

	    /**
	     * If the given, non-null object has a value at the given path, returns the
	     * value at that path. Otherwise returns the provided default value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Object
	     * @sig a -> [String] -> Object -> a
	     * @param {*} d The default value.
	     * @param {Array} p The path to use.
	     * @param {Object} obj The object to retrieve the nested property from.
	     * @return {*} The data at `path` of the supplied object or the default value.
	     * @example
	     *
	     *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
	     *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
	     */
	    var pathOr = _curry3(function pathOr(d, p, obj) {
	        return defaultTo(d, path(p, obj));
	    });

	    /**
	     * Returns `true` if the specified object property at given path satisfies the
	     * given predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Logic
	     * @sig (a -> Boolean) -> [String] -> Object -> Boolean
	     * @param {Function} pred
	     * @param {Array} propPath
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propSatisfies, R.path
	     * @example
	     *
	     *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
	     */
	    var pathSatisfies = _curry3(function pathSatisfies(pred, propPath, obj) {
	        return propPath.length > 0 && pred(path(propPath, obj));
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys specified. If
	     * the key does not exist, the property is ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.omit, R.props
	     * @example
	     *
	     *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	     */
	    var pick = _curry2(function pick(names, obj) {
	        var result = {};
	        var idx = 0;
	        while (idx < names.length) {
	            if (names[idx] in obj) {
	                result[names[idx]] = obj[names[idx]];
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Similar to `pick` except that this one includes a `key: undefined` pair for
	     * properties that don't exist.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> {k: v}
	     * @param {Array} names an array of String property names to copy onto a new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties from `names` on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	     *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
	     */
	    var pickAll = _curry2(function pickAll(names, obj) {
	        var result = {};
	        var idx = 0;
	        var len = names.length;
	        while (idx < len) {
	            var name = names[idx];
	            result[name] = obj[name];
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a partial copy of an object containing only the keys that satisfy
	     * the supplied predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
	     * @param {Function} pred A predicate to determine whether or not a key
	     *        should be included on the output object.
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with only properties that satisfy `pred`
	     *         on it.
	     * @see R.pick, R.filter
	     * @example
	     *
	     *      var isUpperCase = (val, key) => key.toUpperCase() === key;
	     *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
	     */
	    var pickBy = _curry2(function pickBy(test, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (test(obj[prop], prop, obj)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns a new list with the given element at the front, followed by the
	     * contents of the list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> [a]
	     * @param {*} el The item to add to the head of the output list.
	     * @param {Array} list The array to add to the tail of the output list.
	     * @return {Array} A new array.
	     * @see R.append
	     * @example
	     *
	     *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
	     */
	    var prepend = _curry2(function prepend(el, list) {
	        return _concat([el], list);
	    });

	    /**
	     * Returns a function that when supplied an object returns the indicated
	     * property of that object, if it exists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig s -> {s: a} -> a | Undefined
	     * @param {String} p The property name
	     * @param {Object} obj The object to query
	     * @return {*} The value at `obj.p`.
	     * @example
	     *
	     *      R.prop('x', {x: 100}); //=> 100
	     *      R.prop('x', {}); //=> undefined
	     */
	    var prop = _curry2(function prop(p, obj) {
	        return obj[p];
	    });

	    /**
	     * If the given, non-null object has an own property with the specified name,
	     * returns the value of that property. Otherwise returns the provided default
	     * value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Object
	     * @sig a -> String -> Object -> a
	     * @param {*} val The default value.
	     * @param {String} p The name of the property to return.
	     * @param {Object} obj The object to query.
	     * @return {*} The value of given property of the supplied object or the default value.
	     * @example
	     *
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var favorite = R.prop('favoriteLibrary');
	     *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
	     *
	     *      favorite(alice);  //=> undefined
	     *      favoriteWithDefault(alice);  //=> 'Ramda'
	     */
	    var propOr = _curry3(function propOr(val, p, obj) {
	        return obj != null && _has(p, obj) ? obj[p] : val;
	    });

	    /**
	     * Returns `true` if the specified object property satisfies the given
	     * predicate; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Logic
	     * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	     * @param {Function} pred
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.propEq, R.propIs
	     * @example
	     *
	     *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	     */
	    var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
	        return pred(obj[name]);
	    });

	    /**
	     * Acts as multiple `prop`: array of keys in, array of values out. Preserves
	     * order.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [k] -> {k: v} -> [v]
	     * @param {Array} ps The property names to fetch
	     * @param {Object} obj The object to query
	     * @return {Array} The corresponding values or partially applied function.
	     * @example
	     *
	     *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	     *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	     *
	     *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	     *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	     */
	    var props = _curry2(function props(ps, obj) {
	        var len = ps.length;
	        var out = [];
	        var idx = 0;
	        while (idx < len) {
	            out[idx] = obj[ps[idx]];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> Number -> [Number]
	     * @param {Number} from The first number in the list.
	     * @param {Number} to One more than the last number in the list.
	     * @return {Array} The list of numbers in tthe set `[a, b)`.
	     * @example
	     *
	     *      R.range(1, 5);    //=> [1, 2, 3, 4]
	     *      R.range(50, 53);  //=> [50, 51, 52]
	     */
	    var range = _curry2(function range(from, to) {
	        if (!(_isNumber(from) && _isNumber(to))) {
	            throw new TypeError('Both arguments to range must be numbers');
	        }
	        var result = [];
	        var n = from;
	        while (n < to) {
	            result.push(n);
	            n += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling
	     * the iterator function and passing it an accumulator value and the current
	     * value from the array, and then passing the result to the next call.
	     *
	     * Similar to `reduce`, except moves through the input list from the right to
	     * the left.
	     *
	     * The iterator function receives two values: *(acc, value)*
	     *
	     * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.reduce` method. For more details
	     * on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.addIndex
	     * @example
	     *
	     *      var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
	     *      var flattenPairs = (acc, pair) => acc.concat(pair);
	     *
	     *      R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]
	     */
	    var reduceRight = _curry3(function reduceRight(fn, acc, list) {
	        var idx = list.length - 1;
	        while (idx >= 0) {
	            acc = fn(acc, list[idx]);
	            idx -= 1;
	        }
	        return acc;
	    });

	    /**
	     * Returns a value wrapped to indicate that it is the final value of the reduce
	     * and transduce functions. The returned value should be considered a black
	     * box: the internal structure is not guaranteed to be stable.
	     *
	     * Note: this optimization is unavailable to functions not explicitly listed
	     * above. For instance, it is not currently supported by reduceRight.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category List
	     * @sig a -> *
	     * @param {*} x The final value of the reduce.
	     * @return {*} The wrapped value.
	     * @see R.reduce, R.transduce
	     * @example
	     *
	     *      R.reduce(
	     *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
	     *        0,
	     *        [1, 2, 3, 4, 5]) // 10
	     */
	    var reduced = _curry1(_reduced);

	    /**
	     * Removes the sub-list of `list` starting at index `start` and containing
	     * `count` elements. _Note that this is not destructive_: it returns a copy of
	     * the list with the changes.
	     * <small>No lists have been harmed in the application of this function.</small>
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.2
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @param {Number} start The position to start removing elements
	     * @param {Number} count The number of elements to remove
	     * @param {Array} list The list to remove from
	     * @return {Array} A new Array with `count` elements from `start` removed.
	     * @example
	     *
	     *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
	     */
	    var remove = _curry3(function remove(start, count, list) {
	        return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
	    });

	    /**
	     * Replace a substring or regex match in a string with a replacement.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category String
	     * @sig RegExp|String -> String -> String -> String
	     * @param {RegExp|String} pattern A regular expression or a substring to match.
	     * @param {String} replacement The string to replace the matches with.
	     * @param {String} str The String to do the search and replacement in.
	     * @return {String} The result.
	     * @example
	     *
	     *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	     *
	     *      // Use the "g" (global) flag to replace all occurrences:
	     *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	     */
	    var replace = _curry3(function replace(regex, replacement, str) {
	        return str.replace(regex, replacement);
	    });

	    /**
	     * Returns a new list or string with the elements or characters in reverse
	     * order.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {Array|String} list
	     * @return {Array|String}
	     * @example
	     *
	     *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	     *      R.reverse([1, 2]);     //=> [2, 1]
	     *      R.reverse([1]);        //=> [1]
	     *      R.reverse([]);         //=> []
	     *
	     *      R.reverse('abc');      //=> 'cba'
	     *      R.reverse('ab');       //=> 'ba'
	     *      R.reverse('a');        //=> 'a'
	     *      R.reverse('');         //=> ''
	     */
	    var reverse = _curry1(function reverse(list) {
	        return _isString(list) ? list.split('').reverse().join('') : _slice(list).reverse();
	    });

	    /**
	     * Scan is similar to reduce, but returns a list of successively reduced values
	     * from the left
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (a,b -> a) -> a -> [b] -> [a]
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {Array} A list of all intermediately reduced values.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
	     */
	    var scan = _curry3(function scan(fn, acc, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [acc];
	        while (idx < len) {
	            acc = fn(acc, list[idx]);
	            result[idx + 1] = acc;
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of "setting" the portion of the given data structure
	     * focused by the given lens to the given value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> a -> s -> s
	     * @param {Lens} lens
	     * @param {*} v
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	     *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	     */
	    var set = _curry3(function set(lens, v, x) {
	        return over(lens, always(v), x);
	    });

	    /**
	     * Returns the elements of the given list or string (or object with a `slice`
	     * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	     *
	     * Dispatches to the `slice` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig Number -> Number -> [a] -> [a]
	     * @sig Number -> Number -> String -> String
	     * @param {Number} fromIndex The start index (inclusive).
	     * @param {Number} toIndex The end index (exclusive).
	     * @param {*} list
	     * @return {*}
	     * @example
	     *
	     *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	     *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	     *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	     *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	     *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	     */
	    var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	        return Array.prototype.slice.call(list, fromIndex, toIndex);
	    }));

	    /**
	     * Returns a copy of the list, sorted according to the comparator function,
	     * which should accept two values at a time and return a negative number if the
	     * first value is smaller, a positive number if it's larger, and zero if they
	     * are equal. Please note that this is a **copy** of the list. It does not
	     * modify the original.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,a -> Number) -> [a] -> [a]
	     * @param {Function} comparator A sorting function :: a -> b -> Int
	     * @param {Array} list The list to sort
	     * @return {Array} a new array with its elements sorted by the comparator function.
	     * @example
	     *
	     *      var diff = function(a, b) { return a - b; };
	     *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
	     */
	    var sort = _curry2(function sort(comparator, list) {
	        return _slice(list).sort(comparator);
	    });

	    /**
	     * Sorts the list according to the supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig Ord b => (a -> b) -> [a] -> [a]
	     * @param {Function} fn
	     * @param {Array} list The list to sort.
	     * @return {Array} A new list sorted by the keys generated by `fn`.
	     * @example
	     *
	     *      var sortByFirstItem = R.sortBy(R.prop(0));
	     *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
	     *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
	     *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
	     *      var alice = {
	     *        name: 'ALICE',
	     *        age: 101
	     *      };
	     *      var bob = {
	     *        name: 'Bob',
	     *        age: -10
	     *      };
	     *      var clara = {
	     *        name: 'clara',
	     *        age: 314.159
	     *      };
	     *      var people = [clara, bob, alice];
	     *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
	     */
	    var sortBy = _curry2(function sortBy(fn, list) {
	        return _slice(list).sort(function (a, b) {
	            var aa = fn(a);
	            var bb = fn(b);
	            return aa < bb ? -1 : aa > bb ? 1 : 0;
	        });
	    });

	    /**
	     * Splits a given list or string at a given index.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig Number -> [a] -> [[a], [a]]
	     * @sig Number -> String -> [String, String]
	     * @param {Number} index The index where the array/string is split.
	     * @param {Array|String} array The array/string to be split.
	     * @return {Array}
	     * @example
	     *
	     *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
	     *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
	     *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
	     */
	    var splitAt = _curry2(function splitAt(index, array) {
	        return [
	            slice(0, index, array),
	            slice(index, length(array), array)
	        ];
	    });

	    /**
	     * Splits a collection into slices of the specified length.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [[a]]
	     * @sig Number -> String -> [String]
	     * @param {Number} n
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	     *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	     */
	    var splitEvery = _curry2(function splitEvery(n, list) {
	        if (n <= 0) {
	            throw new Error('First argument to splitEvery must be a positive integer');
	        }
	        var result = [];
	        var idx = 0;
	        while (idx < list.length) {
	            result.push(slice(idx, idx += n, list));
	        }
	        return result;
	    });

	    /**
	     * Takes a list and a predicate and returns a pair of lists with the following properties:
	     *
	     *  - the result of concatenating the two output lists is equivalent to the input list;
	     *  - none of the elements of the first output list satisfies the predicate; and
	     *  - if the second output list is non-empty, its first element satisfies the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [[a], [a]]
	     * @param {Function} pred The predicate that determines where the array is split.
	     * @param {Array} list The array to be split.
	     * @return {Array}
	     * @example
	     *
	     *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
	     */
	    var splitWhen = _curry2(function splitWhen(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        var prefix = [];
	        while (idx < len && !pred(list[idx])) {
	            prefix.push(list[idx]);
	            idx += 1;
	        }
	        return [
	            prefix,
	            _slice(list, idx)
	        ];
	    });

	    /**
	     * Subtracts its second argument from its first argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig Number -> Number -> Number
	     * @param {Number} a The first value.
	     * @param {Number} b The second value.
	     * @return {Number} The result of `a - b`.
	     * @see R.add
	     * @example
	     *
	     *      R.subtract(10, 8); //=> 2
	     *
	     *      var minus5 = R.subtract(R.__, 5);
	     *      minus5(17); //=> 12
	     *
	     *      var complementaryAngle = R.subtract(90);
	     *      complementaryAngle(30); //=> 60
	     *      complementaryAngle(72); //=> 18
	     */
	    var subtract = _curry2(function subtract(a, b) {
	        return Number(a) - Number(b);
	    });

	    /**
	     * Returns all but the first element of the given list or string (or object
	     * with a `tail` method).
	     *
	     * Dispatches to the `slice` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.head, R.init, R.last
	     * @example
	     *
	     *      R.tail([1, 2, 3]);  //=> [2, 3]
	     *      R.tail([1, 2]);     //=> [2]
	     *      R.tail([1]);        //=> []
	     *      R.tail([]);         //=> []
	     *
	     *      R.tail('abc');  //=> 'bc'
	     *      R.tail('ab');   //=> 'b'
	     *      R.tail('a');    //=> ''
	     *      R.tail('');     //=> ''
	     */
	    var tail = _checkForMethod('tail', slice(1, Infinity));

	    /**
	     * Returns the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `take` method).
	     *
	     * Dispatches to the `take` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.drop
	     * @example
	     *
	     *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.take(3, 'ramda');               //=> 'ram'
	     *
	     *      var personnel = [
	     *        'Dave Brubeck',
	     *        'Paul Desmond',
	     *        'Eugene Wright',
	     *        'Joe Morello',
	     *        'Gerry Mulligan',
	     *        'Bob Bates',
	     *        'Joe Dodge',
	     *        'Ron Crotty'
	     *      ];
	     *
	     *      var takeFive = R.take(5);
	     *      takeFive(personnel);
	     *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	     */
	    var take = _curry2(_dispatchable('take', _xtake, function take(n, xs) {
	        return slice(0, n < 0 ? Infinity : n, xs);
	    }));

	    /**
	     * Returns a new list containing the last `n` elements of a given list, passing
	     * each value to the supplied predicate function, and terminating when the
	     * predicate function returns `false`. Excludes the element that caused the
	     * predicate function to fail. The predicate function is passed one argument:
	     * *(value)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropLastWhile, R.addIndex
	     * @example
	     *
	     *      var isNotOne = x => x !== 1;
	     *
	     *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	     */
	    var takeLastWhile = _curry2(function takeLastWhile(fn, list) {
	        var idx = list.length - 1;
	        while (idx >= 0 && fn(list[idx])) {
	            idx -= 1;
	        }
	        return _slice(list, idx + 1, Infinity);
	    });

	    /**
	     * Returns a new list containing the first `n` elements of a given list,
	     * passing each value to the supplied predicate function, and terminating when
	     * the predicate function returns `false`. Excludes the element that caused the
	     * predicate function to fail. The predicate function is passed one argument:
	     * *(value)*.
	     *
	     * Dispatches to the `takeWhile` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.dropWhile, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isNotFour = x => x !== 4;
	     *
	     *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
	     */
	    var takeWhile = _curry2(_dispatchable('takeWhile', _xtakeWhile, function takeWhile(fn, list) {
	        var idx = 0;
	        var len = list.length;
	        while (idx < len && fn(list[idx])) {
	            idx += 1;
	        }
	        return _slice(list, 0, idx);
	    }));

	    /**
	     * Runs the given function with the supplied object, then returns the object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a -> *) -> a -> a
	     * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
	     * @param {*} x
	     * @return {*} `x`.
	     * @example
	     *
	     *      var sayX = x => console.log('x is ' + x);
	     *      R.tap(sayX, 100); //=> 100
	     *      //-> 'x is 100'
	     */
	    var tap = _curry2(function tap(fn, x) {
	        fn(x);
	        return x;
	    });

	    /**
	     * Calls an input function `n` times, returning an array containing the results
	     * of those function calls.
	     *
	     * `fn` is passed one argument: The current value of `n`, which begins at `0`
	     * and is gradually incremented to `n - 1`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.3
	     * @category List
	     * @sig (Number -> a) -> Number -> [a]
	     * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
	     * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
	     * @return {Array} An array containing the return values of all calls to `fn`.
	     * @example
	     *
	     *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
	     */
	    var times = _curry2(function times(fn, n) {
	        var len = Number(n);
	        var idx = 0;
	        var list;
	        if (len < 0 || isNaN(len)) {
	            throw new RangeError('n must be a non-negative number');
	        }
	        list = new Array(len);
	        while (idx < len) {
	            list[idx] = fn(idx);
	            idx += 1;
	        }
	        return list;
	    });

	    /**
	     * Converts an object into an array of key, value arrays. Only the object's
	     * own properties are used.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own properties.
	     * @see R.fromPairs
	     * @example
	     *
	     *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	     */
	    var toPairs = _curry1(function toPairs(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            if (_has(prop, obj)) {
	                pairs[pairs.length] = [
	                    prop,
	                    obj[prop]
	                ];
	            }
	        }
	        return pairs;
	    });

	    /**
	     * Converts an object into an array of key, value arrays. The object's own
	     * properties and prototype properties are used. Note that the order of the
	     * output array is not guaranteed to be consistent across different JS
	     * platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Object
	     * @sig {String: *} -> [[String,*]]
	     * @param {Object} obj The object to extract from
	     * @return {Array} An array of key, value arrays from the object's own
	     *         and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
	     */
	    var toPairsIn = _curry1(function toPairsIn(obj) {
	        var pairs = [];
	        for (var prop in obj) {
	            pairs[pairs.length] = [
	                prop,
	                obj[prop]
	            ];
	        }
	        return pairs;
	    });

	    /**
	     * Transposes the rows and columns of a 2D list.
	     * When passed a list of `n` lists of length `x`,
	     * returns a list of `x` lists of length `n`.
	     *
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig [[a]] -> [[a]]
	     * @param {Array} list A 2D list
	     * @return {Array} A 2D list
	     * @example
	     *
	     *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
	     *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     *
	     * If some of the rows are shorter than the following rows, their elements are skipped:
	     *
	     *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
	     */
	    var transpose = _curry1(function transpose(outerlist) {
	        var i = 0;
	        var result = [];
	        while (i < outerlist.length) {
	            var innerlist = outerlist[i];
	            var j = 0;
	            while (j < innerlist.length) {
	                if (typeof result[j] === 'undefined') {
	                    result[j] = [];
	                }
	                result[j].push(innerlist[j]);
	                j += 1;
	            }
	            i += 1;
	        }
	        return result;
	    });

	    /**
	     * Removes (strips) whitespace from both ends of the string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to trim.
	     * @return {String} Trimmed version of `str`.
	     * @example
	     *
	     *      R.trim('   xyz  '); //=> 'xyz'
	     *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
	     */
	    var trim = function () {
	        var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	        var zeroWidth = '\u200B';
	        var hasProtoTrim = typeof String.prototype.trim === 'function';
	        if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
	            return _curry1(function trim(str) {
	                var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
	                var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
	                return str.replace(beginRx, '').replace(endRx, '');
	            });
	        } else {
	            return _curry1(function trim(str) {
	                return str.trim();
	            });
	        }
	    }();

	    /**
	     * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
	     * function evaluates the `tryer`; if it does not throw, it simply returns the
	     * result. If the `tryer` *does* throw, the returned function evaluates the
	     * `catcher` function and returns its result. Note that for effective
	     * composition with this function, both the `tryer` and `catcher` functions
	     * must return the same type of results.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Function
	     * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
	     * @param {Function} tryer The function that may throw.
	     * @param {Function} catcher The function that will be evaluated if `tryer` throws.
	     * @return {Function} A new function that will catch exceptions and send then to the catcher.
	     * @example
	     *
	     *      R.tryCatch(R.prop('x'), R.F, {x: true}); //=> true
	     *      R.tryCatch(R.prop('x'), R.F, null);      //=> false
	     */
	    var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
	        return _arity(tryer.length, function () {
	            try {
	                return tryer.apply(this, arguments);
	            } catch (e) {
	                return catcher.apply(this, _concat([e], arguments));
	            }
	        });
	    });

	    /**
	     * Gives a single-word string description of the (native) type of a value,
	     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	     * attempt to distinguish user Object types any further, reporting them all as
	     * 'Object'.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Type
	     * @sig (* -> {*}) -> String
	     * @param {*} val The value to test
	     * @return {String}
	     * @example
	     *
	     *      R.type({}); //=> "Object"
	     *      R.type(1); //=> "Number"
	     *      R.type(false); //=> "Boolean"
	     *      R.type('s'); //=> "String"
	     *      R.type(null); //=> "Null"
	     *      R.type([]); //=> "Array"
	     *      R.type(/[A-z]/); //=> "RegExp"
	     */
	    var type = _curry1(function type(val) {
	        return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	    });

	    /**
	     * Takes a function `fn`, which takes a single array argument, and returns a
	     * function which:
	     *
	     *   - takes any number of positional arguments;
	     *   - passes these arguments to `fn` as an array; and
	     *   - returns the result.
	     *
	     * In other words, R.unapply derives a variadic function from a function which
	     * takes an array. R.unapply is the inverse of R.apply.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Function
	     * @sig ([*...] -> a) -> (*... -> a)
	     * @param {Function} fn
	     * @return {Function}
	     * @see R.apply
	     * @example
	     *
	     *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
	     */
	    var unapply = _curry1(function unapply(fn) {
	        return function () {
	            return fn(_slice(arguments));
	        };
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly 1 parameter. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Function
	     * @sig (* -> b) -> (a -> b)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 1.
	     * @example
	     *
	     *      var takesTwoArgs = function(a, b) {
	     *        return [a, b];
	     *      };
	     *      takesTwoArgs.length; //=> 2
	     *      takesTwoArgs(1, 2); //=> [1, 2]
	     *
	     *      var takesOneArg = R.unary(takesTwoArgs);
	     *      takesOneArg.length; //=> 1
	     *      // Only 1 argument is passed to the wrapped function
	     *      takesOneArg(1, 2); //=> [1, undefined]
	     */
	    var unary = _curry1(function unary(fn) {
	        return nAry(1, fn);
	    });

	    /**
	     * Returns a function of arity `n` from a (manually) curried function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Function
	     * @sig Number -> (a -> b) -> (a -> c)
	     * @param {Number} length The arity for the returned function.
	     * @param {Function} fn The function to uncurry.
	     * @return {Function} A new function.
	     * @see R.curry
	     * @example
	     *
	     *      var addFour = a => b => c => d => a + b + c + d;
	     *
	     *      var uncurriedAddFour = R.uncurryN(4, addFour);
	     *      uncurriedAddFour(1, 2, 3, 4); //=> 10
	     */
	    var uncurryN = _curry2(function uncurryN(depth, fn) {
	        return curryN(depth, function () {
	            var currentDepth = 1;
	            var value = fn;
	            var idx = 0;
	            var endIdx;
	            while (currentDepth <= depth && typeof value === 'function') {
	                endIdx = currentDepth === depth ? arguments.length : idx + value.length;
	                value = value.apply(this, _slice(arguments, idx, endIdx));
	                currentDepth += 1;
	                idx = endIdx;
	            }
	            return value;
	        });
	    });

	    /**
	     * Builds a list from a seed value. Accepts an iterator function, which returns
	     * either false to stop iteration or an array of length 2 containing the value
	     * to add to the resulting list and the seed to be used in the next call to the
	     * iterator function.
	     *
	     * The iterator function receives one argument: *(seed)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category List
	     * @sig (a -> [b]) -> * -> [b]
	     * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
	     *        either false to quit iteration or an array of length two to proceed. The element
	     *        at index 0 of this array will be added to the resulting array, and the element
	     *        at index 1 will be passed to the next call to `fn`.
	     * @param {*} seed The seed value.
	     * @return {Array} The final list.
	     * @example
	     *
	     *      var f = n => n > 50 ? false : [-n, n + 10];
	     *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
	     */
	    var unfold = _curry2(function unfold(fn, seed) {
	        var pair = fn(seed);
	        var result = [];
	        while (pair && pair.length) {
	            result[result.length] = pair[0];
	            pair = fn(pair[1]);
	        }
	        return result;
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list, based upon the value returned by applying the supplied predicate to
	     * two list elements. Prefers the first item if two items compare equal based
	     * on the predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      var strEq = R.eqBy(String);
	     *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
	     *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
	     *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
	     *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
	     */
	    var uniqWith = _curry2(function uniqWith(pred, list) {
	        var idx = 0;
	        var len = list.length;
	        var result = [];
	        var item;
	        while (idx < len) {
	            item = list[idx];
	            if (!_containsWith(pred, item, result)) {
	                result[result.length] = item;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Tests the final argument by passing it to the given predicate function. If
	     * the predicate is not satisfied, the function will return the result of
	     * calling the `whenFalseFn` function with the same argument. If the predicate
	     * is satisfied, the argument is returned as is.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred        A predicate function
	     * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
	     *                               to a falsy value.
	     * @param {*}        x           An object to test with the `pred` function and
	     *                               pass to `whenFalseFn` if necessary.
	     * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
	     * @see R.ifElse, R.when
	     * @example
	     *
	     *      // coerceArray :: (a|[a]) -> [a]
	     *      var coerceArray = R.unless(R.isArrayLike, R.of);
	     *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
	     *      coerceArray(1);         //=> [1]
	     */
	    var unless = _curry3(function unless(pred, whenFalseFn, x) {
	        return pred(x) ? x : whenFalseFn(x);
	    });

	    /**
	     * Takes a predicate, a transformation function, and an initial value,
	     * and returns a value of the same type as the initial value.
	     * It does so by applying the transformation until the predicate is satisfied,
	     * at which point it returns the satisfactory value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred A predicate function
	     * @param {Function} fn The iterator function
	     * @param {*} init Initial value
	     * @return {*} Final value that satisfies predicate
	     * @example
	     *
	     *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
	     */
	    var until = _curry3(function until(pred, fn, init) {
	        var val = init;
	        while (!pred(val)) {
	            val = fn(val);
	        }
	        return val;
	    });

	    /**
	     * Returns a new copy of the array with the element at the provided index
	     * replaced with the given value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig Number -> a -> [a] -> [a]
	     * @param {Number} idx The index to update.
	     * @param {*} x The value to exist at the given index of the returned array.
	     * @param {Array|Arguments} list The source array-like object to be updated.
	     * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
	     * @see R.adjust
	     * @example
	     *
	     *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
	     *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
	     */
	    var update = _curry3(function update(idx, x, list) {
	        return adjust(always(x), idx, list);
	    });

	    /**
	     * Accepts a function `fn` and a list of transformer functions and returns a
	     * new curried function. When the new function is invoked, it calls the
	     * function `fn` with parameters consisting of the result of calling each
	     * supplied handler on successive arguments to the new function.
	     *
	     * If more arguments are passed to the returned function than transformer
	     * functions, those arguments are passed directly to `fn` as additional
	     * parameters. If you expect additional arguments that don't need to be
	     * transformed, although you can ignore them, it's best to pass an identity
	     * function so that the new function reports the correct arity.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
	     * @param {Function} fn The function to wrap.
	     * @param {Array} transformers A list of transformer functions
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
	     *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
	     *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
	     *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
	     */
	    var useWith = _curry2(function useWith(fn, transformers) {
	        return curryN(transformers.length, function () {
	            var args = [];
	            var idx = 0;
	            while (idx < transformers.length) {
	                args.push(transformers[idx].call(this, arguments[idx]));
	                idx += 1;
	            }
	            return fn.apply(this, args.concat(_slice(arguments, transformers.length)));
	        });
	    });

	    /**
	     * Returns a list of all the enumerable own properties of the supplied object.
	     * Note that the order of the output array is not guaranteed across different
	     * JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own properties.
	     * @example
	     *
	     *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	     */
	    var values = _curry1(function values(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var vals = [];
	        var idx = 0;
	        while (idx < len) {
	            vals[idx] = obj[props[idx]];
	            idx += 1;
	        }
	        return vals;
	    });

	    /**
	     * Returns a list of all the properties, including prototype properties, of the
	     * supplied object.
	     * Note that the order of the output array is not guaranteed to be consistent
	     * across different JS platforms.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Object
	     * @sig {k: v} -> [v]
	     * @param {Object} obj The object to extract values from
	     * @return {Array} An array of the values of the object's own and prototype properties.
	     * @example
	     *
	     *      var F = function() { this.x = 'X'; };
	     *      F.prototype.y = 'Y';
	     *      var f = new F();
	     *      R.valuesIn(f); //=> ['X', 'Y']
	     */
	    var valuesIn = _curry1(function valuesIn(obj) {
	        var prop;
	        var vs = [];
	        for (prop in obj) {
	            vs[vs.length] = obj[prop];
	        }
	        return vs;
	    });

	    /**
	     * Returns a "view" of the given data structure, determined by the given lens.
	     * The lens's focus determines which portion of the data structure is visible.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Lens s a -> s -> a
	     * @param {Lens} lens
	     * @param {*} x
	     * @return {*}
	     * @see R.prop, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});  //=> 1
	     *      R.view(xLens, {x: 4, y: 2});  //=> 4
	     */
	    // `Const` is a functor that effectively ignores the function given to `map`.
	    // Using `Const` effectively ignores the setter function of the `lens`,
	    // leaving the value returned by the getter function unmodified.
	    var view = function () {
	        // `Const` is a functor that effectively ignores the function given to `map`.
	        var Const = function (x) {
	            return {
	                value: x,
	                map: function () {
	                    return this;
	                }
	            };
	        };
	        return _curry2(function view(lens, x) {
	            // Using `Const` effectively ignores the setter function of the `lens`,
	            // leaving the value returned by the getter function unmodified.
	            return lens(Const)(x).value;
	        });
	    }();

	    /**
	     * Tests the final argument by passing it to the given predicate function. If
	     * the predicate is satisfied, the function will return the result of calling
	     * the `whenTrueFn` function with the same argument. If the predicate is not
	     * satisfied, the argument is returned as is.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Logic
	     * @sig (a -> Boolean) -> (a -> a) -> a -> a
	     * @param {Function} pred       A predicate function
	     * @param {Function} whenTrueFn A function to invoke when the `condition`
	     *                              evaluates to a truthy value.
	     * @param {*}        x          An object to test with the `pred` function and
	     *                              pass to `whenTrueFn` if necessary.
	     * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	     * @see R.ifElse, R.unless
	     * @example
	     *
	     *      // truncate :: String -> String
	     *      var truncate = R.when(
	     *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	     *        R.pipe(R.take(10), R.append('…'), R.join(''))
	     *      );
	     *      truncate('12345');         //=> '12345'
	     *      truncate('0123456789ABC'); //=> '0123456789…'
	     */
	    var when = _curry3(function when(pred, whenTrueFn, x) {
	        return pred(x) ? whenTrueFn(x) : x;
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec. Each of the spec's own properties must be a predicate function.
	     * Each predicate is applied to the value of the corresponding property of the
	     * test object. `where` returns true if all the predicates return true, false
	     * otherwise.
	     *
	     * `where` is well suited to declaratively expressing constraints for other
	     * functions such as `filter` and `find`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category Object
	     * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.where({
	     *        a: R.equals('foo'),
	     *        b: R.complement(R.equals('bar')),
	     *        x: R.gt(_, 10),
	     *        y: R.lt(_, 20)
	     *      });
	     *
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
	     *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
	     *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
	     */
	    var where = _curry2(function where(spec, testObj) {
	        for (var prop in spec) {
	            if (_has(prop, spec) && !spec[prop](testObj[prop])) {
	                return false;
	            }
	        }
	        return true;
	    });

	    /**
	     * Wrap a function inside another to allow you to make adjustments to the
	     * parameters, or do other processing either before the internal function is
	     * called or with its results.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a... -> b) -> ((a... -> b) -> a... -> c) -> (a... -> c)
	     * @param {Function} fn The function to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @return {Function} The wrapped function.
	     * @example
	     *
	     *      var greet = name => 'Hello ' + name;
	     *
	     *      var shoutedGreet = R.wrap(greet, (gr, name) => gr(name).toUpperCase());
	     *
	     *      shoutedGreet("Kathy"); //=> "HELLO KATHY"
	     *
	     *      var shortenedGreet = R.wrap(greet, function(gr, name) {
	     *        return gr(name.substring(0, 3));
	     *      });
	     *      shortenedGreet("Robert"); //=> "Hello Rob"
	     */
	    var wrap = _curry2(function wrap(fn, wrapper) {
	        return curryN(fn.length, function () {
	            return wrapper.apply(this, _concat([fn], arguments));
	        });
	    });

	    /**
	     * Creates a new list out of the two supplied by creating each possible pair
	     * from the lists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The list made by combining each possible pair from
	     *         `as` and `bs` into pairs (`[a, b]`).
	     * @example
	     *
	     *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	     */
	    // = xprodWith(prepend); (takes about 3 times as long...)
	    var xprod = _curry2(function xprod(a, b) {
	        // = xprodWith(prepend); (takes about 3 times as long...)
	        var idx = 0;
	        var ilen = a.length;
	        var j;
	        var jlen = b.length;
	        var result = [];
	        while (idx < ilen) {
	            j = 0;
	            while (j < jlen) {
	                result[result.length] = [
	                    a[idx],
	                    b[j]
	                ];
	                j += 1;
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Creates a new list out of the two supplied by pairing up equally-positioned
	     * items from both lists. The returned list is truncated to the length of the
	     * shorter of the two input lists.
	     * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b] -> [[a,b]]
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
	     * @example
	     *
	     *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	     */
	    var zip = _curry2(function zip(a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = [
	                a[idx],
	                b[idx]
	            ];
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * Creates a new object out of a list of keys and a list of values.
	     * Key/value pairing is truncated to the length of the shorter of the two lists.
	     * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig [String] -> [*] -> {String: *}
	     * @param {Array} keys The array that will be properties on the output object.
	     * @param {Array} values The list of values on the output object.
	     * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	     * @example
	     *
	     *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	     */
	    var zipObj = _curry2(function zipObj(keys, values) {
	        var idx = 0;
	        var len = Math.min(keys.length, values.length);
	        var out = {};
	        while (idx < len) {
	            out[keys[idx]] = values[idx];
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Creates a new list out of the two supplied by applying the function to each
	     * equally-positioned pair in the lists. The returned list is truncated to the
	     * length of the shorter of the two input lists.
	     *
	     * @function
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a,b -> c) -> [a] -> [b] -> [c]
	     * @param {Function} fn The function used to combine the two elements into one value.
	     * @param {Array} list1 The first array to consider.
	     * @param {Array} list2 The second array to consider.
	     * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
	     *         using `fn`.
	     * @example
	     *
	     *      var f = (x, y) => {
	     *        // ...
	     *      };
	     *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
	     *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
	     */
	    var zipWith = _curry3(function zipWith(fn, a, b) {
	        var rv = [];
	        var idx = 0;
	        var len = Math.min(a.length, b.length);
	        while (idx < len) {
	            rv[idx] = fn(a[idx], b[idx]);
	            idx += 1;
	        }
	        return rv;
	    });

	    /**
	     * A function that always returns `false`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig * -> Boolean
	     * @param {*}
	     * @return {Boolean}
	     * @see R.always, R.T
	     * @example
	     *
	     *      R.F(); //=> false
	     */
	    var F = always(false);

	    /**
	     * A function that always returns `true`. Any passed in parameters are ignored.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig * -> Boolean
	     * @param {*}
	     * @return {Boolean}
	     * @see R.always, R.F
	     * @example
	     *
	     *      R.T(); //=> true
	     */
	    var T = always(true);

	    /**
	     * Copies an object.
	     *
	     * @private
	     * @param {*} value The value to be copied
	     * @param {Array} refFrom Array containing the source references
	     * @param {Array} refTo Array containing the copied source references
	     * @param {Boolean} deep Whether or not to perform deep cloning.
	     * @return {*} The copied value.
	     */
	    var _clone = function _clone(value, refFrom, refTo, deep) {
	        var copy = function copy(copiedValue) {
	            var len = refFrom.length;
	            var idx = 0;
	            while (idx < len) {
	                if (value === refFrom[idx]) {
	                    return refTo[idx];
	                }
	                idx += 1;
	            }
	            refFrom[idx + 1] = value;
	            refTo[idx + 1] = copiedValue;
	            for (var key in value) {
	                copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
	            }
	            return copiedValue;
	        };
	        switch (type(value)) {
	        case 'Object':
	            return copy({});
	        case 'Array':
	            return copy([]);
	        case 'Date':
	            return new Date(value.valueOf());
	        case 'RegExp':
	            return _cloneRegExp(value);
	        default:
	            return value;
	        }
	    };

	    var _createPartialApplicator = function _createPartialApplicator(concat) {
	        return _curry2(function (fn, args) {
	            return _arity(Math.max(0, fn.length - args.length), function () {
	                return fn.apply(this, concat(args, arguments));
	            });
	        });
	    };

	    var _dropLast = function dropLast(n, xs) {
	        return take(n < xs.length ? xs.length - n : 0, xs);
	    };

	    // Values of other types are only equal if identical.
	    var _equals = function _equals(a, b, stackA, stackB) {
	        if (identical(a, b)) {
	            return true;
	        }
	        if (type(a) !== type(b)) {
	            return false;
	        }
	        if (a == null || b == null) {
	            return false;
	        }
	        if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	            return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
	        }
	        switch (type(a)) {
	        case 'Arguments':
	        case 'Array':
	        case 'Object':
	            if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
	                return a === b;
	            }
	            break;
	        case 'Boolean':
	        case 'Number':
	        case 'String':
	            if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
	                return false;
	            }
	            break;
	        case 'Date':
	            if (!identical(a.valueOf(), b.valueOf())) {
	                return false;
	            }
	            break;
	        case 'Error':
	            return a.name === b.name && a.message === b.message;
	        case 'RegExp':
	            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
	                return false;
	            }
	            break;
	        case 'Map':
	        case 'Set':
	            if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
	                return false;
	            }
	            break;
	        case 'Int8Array':
	        case 'Uint8Array':
	        case 'Uint8ClampedArray':
	        case 'Int16Array':
	        case 'Uint16Array':
	        case 'Int32Array':
	        case 'Uint32Array':
	        case 'Float32Array':
	        case 'Float64Array':
	            break;
	        case 'ArrayBuffer':
	            break;
	        default:
	            // Values of other types are only equal if identical.
	            return false;
	        }
	        var keysA = keys(a);
	        if (keysA.length !== keys(b).length) {
	            return false;
	        }
	        var idx = stackA.length - 1;
	        while (idx >= 0) {
	            if (stackA[idx] === a) {
	                return stackB[idx] === b;
	            }
	            idx -= 1;
	        }
	        stackA.push(a);
	        stackB.push(b);
	        idx = keysA.length - 1;
	        while (idx >= 0) {
	            var key = keysA[idx];
	            if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
	                return false;
	            }
	            idx -= 1;
	        }
	        stackA.pop();
	        stackB.pop();
	        return true;
	    };

	    /**
	     * `_makeFlat` is a helper function that returns a one-level or fully recursive
	     * function based on the flag passed in.
	     *
	     * @private
	     */
	    var _makeFlat = function _makeFlat(recursive) {
	        return function flatt(list) {
	            var value, jlen, j;
	            var result = [];
	            var idx = 0;
	            var ilen = list.length;
	            while (idx < ilen) {
	                if (isArrayLike(list[idx])) {
	                    value = recursive ? flatt(list[idx]) : list[idx];
	                    j = 0;
	                    jlen = value.length;
	                    while (j < jlen) {
	                        result[result.length] = value[j];
	                        j += 1;
	                    }
	                } else {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	            return result;
	        };
	    };

	    var _reduce = function () {
	        function _arrayReduce(xf, acc, list) {
	            var idx = 0;
	            var len = list.length;
	            while (idx < len) {
	                acc = xf['@@transducer/step'](acc, list[idx]);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                idx += 1;
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _iterableReduce(xf, acc, iter) {
	            var step = iter.next();
	            while (!step.done) {
	                acc = xf['@@transducer/step'](acc, step.value);
	                if (acc && acc['@@transducer/reduced']) {
	                    acc = acc['@@transducer/value'];
	                    break;
	                }
	                step = iter.next();
	            }
	            return xf['@@transducer/result'](acc);
	        }
	        function _methodReduce(xf, acc, obj) {
	            return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	        }
	        var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	        return function _reduce(fn, acc, list) {
	            if (typeof fn === 'function') {
	                fn = _xwrap(fn);
	            }
	            if (isArrayLike(list)) {
	                return _arrayReduce(fn, acc, list);
	            }
	            if (typeof list.reduce === 'function') {
	                return _methodReduce(fn, acc, list);
	            }
	            if (list[symIterator] != null) {
	                return _iterableReduce(fn, acc, list[symIterator]());
	            }
	            if (typeof list.next === 'function') {
	                return _iterableReduce(fn, acc, list);
	            }
	            throw new TypeError('reduce: list must be array or iterable');
	        };
	    }();

	    var _stepCat = function () {
	        var _stepCatArray = {
	            '@@transducer/init': Array,
	            '@@transducer/step': function (xs, x) {
	                xs.push(x);
	                return xs;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatString = {
	            '@@transducer/init': String,
	            '@@transducer/step': function (a, b) {
	                return a + b;
	            },
	            '@@transducer/result': _identity
	        };
	        var _stepCatObject = {
	            '@@transducer/init': Object,
	            '@@transducer/step': function (result, input) {
	                return _assign(result, isArrayLike(input) ? objOf(input[0], input[1]) : input);
	            },
	            '@@transducer/result': _identity
	        };
	        return function _stepCat(obj) {
	            if (_isTransformer(obj)) {
	                return obj;
	            }
	            if (isArrayLike(obj)) {
	                return _stepCatArray;
	            }
	            if (typeof obj === 'string') {
	                return _stepCatString;
	            }
	            if (typeof obj === 'object') {
	                return _stepCatObject;
	            }
	            throw new Error('Cannot create transformer for ' + obj);
	        };
	    }();

	    var _xdropLastWhile = function () {
	        function XDropLastWhile(fn, xf) {
	            this.f = fn;
	            this.retained = [];
	            this.xf = xf;
	        }
	        XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
	        XDropLastWhile.prototype['@@transducer/result'] = function (result) {
	            this.retained = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
	            return this.f(input) ? this.retain(result, input) : this.flush(result, input);
	        };
	        XDropLastWhile.prototype.flush = function (result, input) {
	            result = _reduce(this.xf['@@transducer/step'], result, this.retained);
	            this.retained = [];
	            return this.xf['@@transducer/step'](result, input);
	        };
	        XDropLastWhile.prototype.retain = function (result, input) {
	            this.retained.push(input);
	            return result;
	        };
	        return _curry2(function _xdropLastWhile(fn, xf) {
	            return new XDropLastWhile(fn, xf);
	        });
	    }();

	    var _xgroupBy = function () {
	        function XGroupBy(f, xf) {
	            this.xf = xf;
	            this.f = f;
	            this.inputs = {};
	        }
	        XGroupBy.prototype['@@transducer/init'] = _xfBase.init;
	        XGroupBy.prototype['@@transducer/result'] = function (result) {
	            var key;
	            for (key in this.inputs) {
	                if (_has(key, this.inputs)) {
	                    result = this.xf['@@transducer/step'](result, this.inputs[key]);
	                    if (result['@@transducer/reduced']) {
	                        result = result['@@transducer/value'];
	                        break;
	                    }
	                }
	            }
	            this.inputs = null;
	            return this.xf['@@transducer/result'](result);
	        };
	        XGroupBy.prototype['@@transducer/step'] = function (result, input) {
	            var key = this.f(input);
	            this.inputs[key] = this.inputs[key] || [
	                key,
	                []
	            ];
	            this.inputs[key][1] = append(input, this.inputs[key][1]);
	            return result;
	        };
	        return _curry2(function _xgroupBy(f, xf) {
	            return new XGroupBy(f, xf);
	        });
	    }();

	    /**
	     * Creates a new list iteration function from an existing one by adding two new
	     * parameters to its callback function: the current index, and the entire list.
	     *
	     * This would turn, for instance, Ramda's simple `map` function into one that
	     * more closely resembles `Array.prototype.map`. Note that this will only work
	     * for functions in which the iteration callback function is the first
	     * parameter, and where the list is the last parameter. (This latter might be
	     * unimportant if the list parameter is not used.)
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Function
	     * @category List
	     * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	     * @param {Function} fn A list iteration function that does not pass index or list to its callback
	     * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	     * @example
	     *
	     *      var mapIndexed = R.addIndex(R.map);
	     *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
	     *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	     */
	    var addIndex = _curry1(function addIndex(fn) {
	        return curryN(fn.length, function () {
	            var idx = 0;
	            var origFn = arguments[0];
	            var list = arguments[arguments.length - 1];
	            var args = _slice(arguments);
	            args[0] = function () {
	                var result = origFn.apply(this, _concat(arguments, [
	                    idx,
	                    list
	                ]));
	                idx += 1;
	                return result;
	            };
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Wraps a function of any arity (including nullary) in a function that accepts
	     * exactly 2 parameters. Any extraneous parameters will not be passed to the
	     * supplied function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.2.0
	     * @category Function
	     * @sig (* -> c) -> (a, b -> c)
	     * @param {Function} fn The function to wrap.
	     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	     *         arity 2.
	     * @example
	     *
	     *      var takesThreeArgs = function(a, b, c) {
	     *        return [a, b, c];
	     *      };
	     *      takesThreeArgs.length; //=> 3
	     *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      var takesTwoArgs = R.binary(takesThreeArgs);
	     *      takesTwoArgs.length; //=> 2
	     *      // Only 2 arguments are passed to the wrapped function
	     *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
	     */
	    var binary = _curry1(function binary(fn) {
	        return nAry(2, fn);
	    });

	    /**
	     * Creates a deep copy of the value which may contain (nested) `Array`s and
	     * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are not
	     * copied, but assigned by their reference.
	     *
	     * Dispatches to a `clone` method if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig {*} -> {*}
	     * @param {*} value The object or array to clone
	     * @return {*} A new object or array.
	     * @example
	     *
	     *      var objects = [{}, {}, {}];
	     *      var objectsClone = R.clone(objects);
	     *      objects[0] === objectsClone[0]; //=> false
	     */
	    var clone = _curry1(function clone(value) {
	        return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
	    });

	    /**
	     * Returns a curried equivalent of the provided function. The curried function
	     * has two unusual capabilities. First, its arguments needn't be provided one
	     * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	     * following are equivalent:
	     *
	     *   - `g(1)(2)(3)`
	     *   - `g(1)(2, 3)`
	     *   - `g(1, 2)(3)`
	     *   - `g(1, 2, 3)`
	     *
	     * Secondly, the special placeholder value `R.__` may be used to specify
	     * "gaps", allowing partial application of any combination of arguments,
	     * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	     * following are equivalent:
	     *
	     *   - `g(1, 2, 3)`
	     *   - `g(_, 2, 3)(1)`
	     *   - `g(_, _, 3)(1)(2)`
	     *   - `g(_, _, 3)(1, 2)`
	     *   - `g(_, 2)(1)(3)`
	     *   - `g(_, 2)(1, 3)`
	     *   - `g(_, 2)(_, 3)(1)`
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (* -> a) -> (* -> a)
	     * @param {Function} fn The function to curry.
	     * @return {Function} A new, curried function.
	     * @see R.curryN
	     * @example
	     *
	     *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	     *
	     *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	     *      var f = curriedAddFourNumbers(1, 2);
	     *      var g = f(3);
	     *      g(4); //=> 10
	     */
	    var curry = _curry1(function curry(fn) {
	        return curryN(fn.length, fn);
	    });

	    /**
	     * Returns all but the first `n` elements of the given list, string, or
	     * transducer/transformer (or object with a `drop` method).
	     *
	     * Dispatches to the `drop` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n
	     * @param {*} list
	     * @return {*}
	     * @see R.take, R.transduce
	     * @example
	     *
	     *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.drop(3, 'ramda');               //=> 'da'
	     */
	    var drop = _curry2(_dispatchable('drop', _xdrop, function drop(n, xs) {
	        return slice(Math.max(0, n), Infinity, xs);
	    }));

	    /**
	     * Returns a list containing all but the last `n` elements of the given `list`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements of `xs` to skip.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.takeLast
	     * @example
	     *
	     *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	     *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
	     *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
	     *      R.dropLast(3, 'ramda');               //=> 'ra'
	     */
	    var dropLast = _curry2(_dispatchable('dropLast', _xdropLast, _dropLast));

	    /**
	     * Returns a new list containing all but last the`n` elements of a given list,
	     * passing each value from the right to the supplied predicate function,
	     * skipping elements while the predicate function returns `true`. The predicate
	     * function is passed one argument: (value)*.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> Boolean) -> [a] -> [a]
	     * @param {Function} fn The function called per iteration.
	     * @param {Array} list The collection to iterate over.
	     * @return {Array} A new array.
	     * @see R.takeLastWhile, R.addIndex
	     * @example
	     *
	     *      var lteThree = x => x <= 3;
	     *
	     *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
	     */
	    var dropLastWhile = _curry2(_dispatchable('dropLastWhile', _xdropLastWhile, _dropLastWhile));

	    /**
	     * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	     * cyclical data structures.
	     *
	     * Dispatches symmetrically to the `equals` methods of both arguments, if
	     * present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.15.0
	     * @category Relation
	     * @sig a -> b -> Boolean
	     * @param {*} a
	     * @param {*} b
	     * @return {Boolean}
	     * @example
	     *
	     *      R.equals(1, 1); //=> true
	     *      R.equals(1, '1'); //=> false
	     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	     *
	     *      var a = {}; a.v = a;
	     *      var b = {}; b.v = b;
	     *      R.equals(a, b); //=> true
	     */
	    var equals = _curry2(function equals(a, b) {
	        return _equals(a, b, [], []);
	    });

	    /**
	     * Takes a predicate and a "filterable", and returns a new filterable of the
	     * same type containing the members of the given filterable which satisfy the
	     * given predicate.
	     *
	     * Dispatches to the `filter` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> f a
	     * @param {Function} pred
	     * @param {Array} filterable
	     * @return {Array}
	     * @see R.reject, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *
	     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	     *
	     *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	     */
	    // else
	    var filter = _curry2(_dispatchable('filter', _xfilter, function (pred, filterable) {
	        return _isObject(filterable) ? _reduce(function (acc, key) {
	            if (pred(filterable[key])) {
	                acc[key] = filterable[key];
	            }
	            return acc;
	        }, {}, keys(filterable)) : // else
	        _filter(pred, filterable);
	    }));

	    /**
	     * Returns a new list by pulling every item out of it (and all its sub-arrays)
	     * and putting them in a new array, depth-first.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [b]
	     * @param {Array} list The array to consider.
	     * @return {Array} The flattened list.
	     * @see R.unnest
	     * @example
	     *
	     *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
	     *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	     */
	    var flatten = _curry1(_makeFlat(true));

	    /**
	     * Returns a new function much like the supplied one, except that the first two
	     * arguments' order is reversed.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
	     * @param {Function} fn The function to invoke with its first two parameters reversed.
	     * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	     * @example
	     *
	     *      var mergeThree = (a, b, c) => [].concat(a, b, c);
	     *
	     *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	     *
	     *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	     */
	    var flip = _curry1(function flip(fn) {
	        return curry(function (a, b) {
	            var args = _slice(arguments);
	            args[0] = b;
	            args[1] = a;
	            return fn.apply(this, args);
	        });
	    });

	    /**
	     * Returns the first element of the given list or string. In some libraries
	     * this function is named `first`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {Array|String} list
	     * @return {*}
	     * @see R.tail, R.init, R.last
	     * @example
	     *
	     *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	     *      R.head([]); //=> undefined
	     *
	     *      R.head('abc'); //=> 'a'
	     *      R.head(''); //=> ''
	     */
	    var head = nth(0);

	    /**
	     * Returns all but the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category List
	     * @sig [a] -> [a]
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.last, R.head, R.tail
	     * @example
	     *
	     *      R.init([1, 2, 3]);  //=> [1, 2]
	     *      R.init([1, 2]);     //=> [1]
	     *      R.init([1]);        //=> []
	     *      R.init([]);         //=> []
	     *
	     *      R.init('abc');  //=> 'ab'
	     *      R.init('ab');   //=> 'a'
	     *      R.init('a');    //=> ''
	     *      R.init('');     //=> ''
	     */
	    var init = slice(0, -1);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists. Duplication is determined according to the
	     * value returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate function that determines whether
	     *        the two supplied elements are equal.
	     * @param {Array} list1 One list of items to compare
	     * @param {Array} list2 A second list of items to compare
	     * @return {Array} A new list containing those elements common to both lists.
	     * @see R.intersection
	     * @example
	     *
	     *      var buffaloSpringfield = [
	     *        {id: 824, name: 'Richie Furay'},
	     *        {id: 956, name: 'Dewey Martin'},
	     *        {id: 313, name: 'Bruce Palmer'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *      var csny = [
	     *        {id: 204, name: 'David Crosby'},
	     *        {id: 456, name: 'Stephen Stills'},
	     *        {id: 539, name: 'Graham Nash'},
	     *        {id: 177, name: 'Neil Young'}
	     *      ];
	     *
	     *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
	     *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
	     */
	    var intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
	        var lookupList, filteredList;
	        if (list1.length > list2.length) {
	            lookupList = list1;
	            filteredList = list2;
	        } else {
	            lookupList = list2;
	            filteredList = list1;
	        }
	        var results = [];
	        var idx = 0;
	        while (idx < filteredList.length) {
	            if (_containsWith(pred, filteredList[idx], lookupList)) {
	                results[results.length] = filteredList[idx];
	            }
	            idx += 1;
	        }
	        return uniqWith(pred, results);
	    });

	    /**
	     * Transforms the items of the list with the transducer and appends the
	     * transformed items to the accumulator using an appropriate iterator function
	     * based on the accumulator type.
	     *
	     * The accumulator can be an array, string, object or a transformer. Iterated
	     * items will be appended to arrays and concatenated to strings. Objects will
	     * be merged directly or 2-item arrays will be merged as key, value pairs.
	     *
	     * The accumulator can also be a transformer object that provides a 2-arity
	     * reducing iterator function, step, 0-arity initial value function, init, and
	     * 1-arity result extraction function result. The step function is used as the
	     * iterator function in reduce. The result function is used to convert the
	     * final accumulator into the return type and in most cases is R.identity. The
	     * init function is used to provide the initial accumulator.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig a -> (b -> b) -> [c] -> a
	     * @param {*} acc The initial accumulator value.
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.into([], transducer, numbers); //=> [2, 3]
	     *
	     *      var intoArray = R.into([]);
	     *      intoArray(transducer, numbers); //=> [2, 3]
	     */
	    var into = _curry3(function into(acc, xf, list) {
	        return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
	    });

	    /**
	     * Same as R.invertObj, however this accounts for objects with duplicate values
	     * by putting the values into an array.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {s: x} -> {x: [ s, ... ]}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object with keys
	     * in an array.
	     * @example
	     *
	     *      var raceResultsByFirstName = {
	     *        first: 'alice',
	     *        second: 'jake',
	     *        third: 'alice',
	     *      };
	     *      R.invert(raceResultsByFirstName);
	     *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
	     */
	    var invert = _curry1(function invert(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            var val = obj[key];
	            var list = _has(val, out) ? out[val] : out[val] = [];
	            list[list.length] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new object with the keys of the given object as values, and the
	     * values of the given object, which are coerced to strings, as keys. Note
	     * that the last key found is preferred when handling the same value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig {s: x} -> {x: s}
	     * @param {Object} obj The object or array to invert
	     * @return {Object} out A new object
	     * @example
	     *
	     *      var raceResults = {
	     *        first: 'alice',
	     *        second: 'jake'
	     *      };
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': 'first', 'jake':'second' }
	     *
	     *      // Alternatively:
	     *      var raceResults = ['alice', 'jake'];
	     *      R.invertObj(raceResults);
	     *      //=> { 'alice': '0', 'jake':'1' }
	     */
	    var invertObj = _curry1(function invertObj(obj) {
	        var props = keys(obj);
	        var len = props.length;
	        var idx = 0;
	        var out = {};
	        while (idx < len) {
	            var key = props[idx];
	            out[obj[key]] = key;
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns `true` if the given value is its type's empty value; `false`
	     * otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Logic
	     * @sig a -> Boolean
	     * @param {*} x
	     * @return {Boolean}
	     * @see R.empty
	     * @example
	     *
	     *      R.isEmpty([1, 2, 3]);   //=> false
	     *      R.isEmpty([]);          //=> true
	     *      R.isEmpty('');          //=> true
	     *      R.isEmpty(null);        //=> false
	     *      R.isEmpty({});          //=> true
	     *      R.isEmpty({length: 0}); //=> false
	     */
	    var isEmpty = _curry1(function isEmpty(x) {
	        return x != null && equals(x, empty(x));
	    });

	    /**
	     * Returns the last element of the given list or string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig [a] -> a | Undefined
	     * @sig String -> String
	     * @param {*} list
	     * @return {*}
	     * @see R.init, R.head, R.tail
	     * @example
	     *
	     *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	     *      R.last([]); //=> undefined
	     *
	     *      R.last('abc'); //=> 'c'
	     *      R.last(''); //=> ''
	     */
	    var last = nth(-1);

	    /**
	     * Returns the position of the last occurrence of an item in an array, or -1 if
	     * the item is not included in the array. `R.equals` is used to determine
	     * equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.indexOf
	     * @example
	     *
	     *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
	     *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
	     */
	    var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
	        if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
	            return xs.lastIndexOf(target);
	        } else {
	            var idx = xs.length - 1;
	            while (idx >= 0) {
	                if (equals(xs[idx], target)) {
	                    return idx;
	                }
	                idx -= 1;
	            }
	            return -1;
	        }
	    });

	    /**
	     * Takes a function and
	     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	     * applies the function to each of the functor's values, and returns
	     * a functor of the same shape.
	     *
	     * Ramda provides suitable `map` implementations for `Array` and `Object`,
	     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	     *
	     * Dispatches to the `map` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * Also treats functions as functors and will compose them together.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Functor f => (a -> b) -> f a -> f b
	     * @param {Function} fn The function to be called on every element of the input `list`.
	     * @param {Array} list The list to be iterated over.
	     * @return {Array} The new list.
	     * @see R.transduce, R.addIndex
	     * @example
	     *
	     *      var double = x => x * 2;
	     *
	     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	     *
	     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	     */
	    var map = _curry2(_dispatchable('map', _xmap, function map(fn, functor) {
	        switch (Object.prototype.toString.call(functor)) {
	        case '[object Function]':
	            return curryN(functor.length, function () {
	                return fn.call(this, functor.apply(this, arguments));
	            });
	        case '[object Object]':
	            return _reduce(function (acc, key) {
	                acc[key] = fn(functor[key]);
	                return acc;
	            }, {}, keys(functor));
	        default:
	            return _map(fn, functor);
	        }
	    }));

	    /**
	     * An Object-specific version of `map`. The function is applied to three
	     * arguments: *(value, key, obj)*. If only the value is significant, use
	     * `map` instead.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Object
	     * @sig ((*, String, Object) -> *) -> Object -> Object
	     * @param {Function} fn
	     * @param {Object} obj
	     * @return {Object}
	     * @see R.map
	     * @example
	     *
	     *      var values = { x: 1, y: 2, z: 3 };
	     *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
	     *
	     *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	     */
	    var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
	        return _reduce(function (acc, key) {
	            acc[key] = fn(obj[key], key, obj);
	            return acc;
	        }, {}, keys(obj));
	    });

	    /**
	     * Creates a new object with the own properties of the two provided objects. If
	     * a key exists in both objects, the provided function is applied to the values
	     * associated with the key in each object, with the result being used as the
	     * value associated with the key in the returned object. The key will be
	     * excluded from the returned object if the resulting value is `undefined`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @sig (a -> a -> a) -> {a} -> {a} -> {a}
	     * @param {Function} fn
	     * @param {Object} l
	     * @param {Object} r
	     * @return {Object}
	     * @see R.merge, R.mergeWithKey
	     * @example
	     *
	     *      R.mergeWith(R.concat,
	     *                  { a: true, values: [10, 20] },
	     *                  { b: true, values: [15, 35] });
	     *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
	     */
	    var mergeWith = _curry3(function mergeWith(fn, l, r) {
	        return mergeWithKey(function (_, _l, _r) {
	            return fn(_l, _r);
	        }, l, r);
	    });

	    /**
	     * Takes a function `f` and a list of arguments, and returns a function `g`.
	     * When applied, `g` returns the result of applying `f` to the arguments
	     * provided initially followed by the arguments provided to `g`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
	     * @param {Function} f
	     * @param {Array} args
	     * @return {Function}
	     * @see R.partialRight
	     * @example
	     *
	     *      var multiply = (a, b) => a * b;
	     *      var double = R.partial(multiply, [2]);
	     *      double(2); //=> 4
	     *
	     *      var greet = (salutation, title, firstName, lastName) =>
	     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *
	     *      var sayHello = R.partial(greet, ['Hello']);
	     *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
	     *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partial = _createPartialApplicator(_concat);

	    /**
	     * Takes a function `f` and a list of arguments, and returns a function `g`.
	     * When applied, `g` returns the result of applying `f` to the arguments
	     * provided to `g` followed by the arguments provided initially.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
	     * @param {Function} f
	     * @param {Array} args
	     * @return {Function}
	     * @see R.partial
	     * @example
	     *
	     *      var greet = (salutation, title, firstName, lastName) =>
	     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	     *
	     *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
	     *
	     *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
	     */
	    var partialRight = _createPartialApplicator(flip(_concat));

	    /**
	     * Determines whether a nested path on an object has a specific value, in
	     * `R.equals` terms. Most likely used to filter a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Relation
	     * @sig [String] -> * -> {String: *} -> Boolean
	     * @param {Array} path The path of the nested property to use
	     * @param {*} val The value to compare the nested property with
	     * @param {Object} obj The object to check the nested property in
	     * @return {Boolean} `true` if the value equals the nested object property,
	     *         `false` otherwise.
	     * @example
	     *
	     *      var user1 = { address: { zipCode: 90210 } };
	     *      var user2 = { address: { zipCode: 55555 } };
	     *      var user3 = { name: 'Bob' };
	     *      var users = [ user1, user2, user3 ];
	     *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
	     *      R.filter(isFamous, users); //=> [ user1 ]
	     */
	    var pathEq = _curry3(function pathEq(_path, val, obj) {
	        return equals(path(_path, obj), val);
	    });

	    /**
	     * Returns a new list by plucking the same named property off all objects in
	     * the list supplied.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig k -> [{k: v}] -> [v]
	     * @param {Number|String} key The key name to pluck off of each object.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of values for the given key.
	     * @see R.props
	     * @example
	     *
	     *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	     *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	     */
	    var pluck = _curry2(function pluck(p, list) {
	        return map(prop(p), list);
	    });

	    /**
	     * Reasonable analog to SQL `select` statement.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @category Relation
	     * @sig [k] -> [{k: v}] -> [{k: v}]
	     * @param {Array} props The property names to project
	     * @param {Array} objs The objects to query
	     * @return {Array} An array of objects with just the `props` properties.
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
	     *      var kids = [abby, fred];
	     *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
	     */
	    // passing `identity` gives correct arity
	    var project = useWith(_map, [
	        pickAll,
	        identity
	    ]);

	    /**
	     * Returns `true` if the specified object property is equal, in `R.equals`
	     * terms, to the given value; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig String -> a -> Object -> Boolean
	     * @param {String} name
	     * @param {*} val
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.equals, R.propSatisfies
	     * @example
	     *
	     *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	     *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	     *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	     *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	     *      var kids = [abby, fred, rusty, alois];
	     *      var hasBrownHair = R.propEq('hair', 'brown');
	     *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	     */
	    var propEq = _curry3(function propEq(name, val, obj) {
	        return propSatisfies(equals(val), name, obj);
	    });

	    /**
	     * Returns `true` if the specified object property is of the given type;
	     * `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Type
	     * @sig Type -> String -> Object -> Boolean
	     * @param {Function} type
	     * @param {String} name
	     * @param {*} obj
	     * @return {Boolean}
	     * @see R.is, R.propSatisfies
	     * @example
	     *
	     *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
	     *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
	     *      R.propIs(Number, 'x', {});            //=> false
	     */
	    var propIs = _curry3(function propIs(type, name, obj) {
	        return propSatisfies(is(type), name, obj);
	    });

	    /**
	     * Returns a single item by iterating through the list, successively calling
	     * the iterator function and passing it an accumulator value and the current
	     * value from the array, and then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It may use
	     * `R.reduced` to shortcut the iteration.
	     *
	     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	     * arrays), unlike the native `Array.prototype.reduce` method. For more details
	     * on this behavior, see:
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	     *
	     * Dispatches to the `reduce` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig ((a, b) -> a) -> a -> [b] -> a
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array.
	     * @param {*} acc The accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.reduced, R.addIndex
	     * @example
	     *
	     *      var numbers = [1, 2, 3];
	     *      var add = (a, b) => a + b;
	     *
	     *      R.reduce(add, 10, numbers); //=> 16
	     */
	    var reduce = _curry3(_reduce);

	    /**
	     * Groups the elements of the list according to the result of calling
	     * the String-returning function `keyFn` on each element and reduces the elements
	     * of each group to a single value via the reducer function `valueFn`.
	     *
	     * This function is basically a more general `groupBy` function.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category List
	     * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
	     * @param {Function} valueFn The function that reduces the elements of each group to a single
	     *        value. Receives two values, accumulator for a particular group and the current element.
	     * @param {*} acc The (initial) accumulator value for each group.
	     * @param {Function} keyFn The function that maps the list's element into a key.
	     * @param {Array} list The array to group.
	     * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
	     *         `valueFn` for elements which produced that key when passed to `keyFn`.
	     * @see R.groupBy, R.reduce
	     * @example
	     *
	     *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
	     *      var namesByGrade = reduceToNamesBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Lucy', score: 92},
	     *                      {name: 'Drew', score: 85},
	     *                      // ...
	     *                      {name: 'Bart', score: 62}];
	     *      namesByGrade(students);
	     *      // {
	     *      //   'A': ['Lucy'],
	     *      //   'B': ['Drew']
	     *      //   // ...,
	     *      //   'F': ['Bart']
	     *      // }
	     */
	    var reduceBy = _curryN(4, [], function reduceBy(valueFn, valueAcc, keyFn, list) {
	        return _reduce(function (acc, elt) {
	            var key = keyFn(elt);
	            acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
	            return acc;
	        }, {}, list);
	    });

	    /**
	     * The complement of `filter`.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> f a
	     * @param {Function} pred
	     * @param {Array} filterable
	     * @return {Array}
	     * @see R.filter, R.transduce, R.addIndex
	     * @example
	     *
	     *      var isOdd = (n) => n % 2 === 1;
	     *
	     *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	     *
	     *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	     */
	    var reject = _curry2(function reject(pred, filterable) {
	        return filter(_complement(pred), filterable);
	    });

	    /**
	     * Returns a fixed list of size `n` containing a specified identical value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.1
	     * @category List
	     * @sig a -> n -> [a]
	     * @param {*} value The value to repeat.
	     * @param {Number} n The desired size of the output list.
	     * @return {Array} A new array containing `n` `value`s.
	     * @example
	     *
	     *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
	     *
	     *      var obj = {};
	     *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
	     *      repeatedObjs[0] === repeatedObjs[1]; //=> true
	     */
	    var repeat = _curry2(function repeat(value, n) {
	        return times(always(value), n);
	    });

	    /**
	     * Adds together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The sum of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.sum([2,4,6,8,100,1]); //=> 121
	     */
	    var sum = reduce(add, 0);

	    /**
	     * Returns a new list containing the last `n` elements of the given list.
	     * If `n > list.length`, returns a list of `list.length` elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig Number -> [a] -> [a]
	     * @sig Number -> String -> String
	     * @param {Number} n The number of elements to return.
	     * @param {Array} xs The collection to consider.
	     * @return {Array}
	     * @see R.dropLast
	     * @example
	     *
	     *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
	     *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	     *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	     *      R.takeLast(3, 'ramda');               //=> 'mda'
	     */
	    var takeLast = _curry2(function takeLast(n, xs) {
	        return drop(n >= 0 ? xs.length - n : 0, xs);
	    });

	    /**
	     * Initializes a transducer using supplied iterator function. Returns a single
	     * item by iterating through the list, successively calling the transformed
	     * iterator function and passing it an accumulator value and the current value
	     * from the array, and then passing the result to the next call.
	     *
	     * The iterator function receives two values: *(acc, value)*. It will be
	     * wrapped as a transformer to initialize the transducer. A transformer can be
	     * passed directly in place of an iterator function. In both cases, iteration
	     * may be stopped early with the `R.reduced` function.
	     *
	     * A transducer is a function that accepts a transformer and returns a
	     * transformer and can be composed directly.
	     *
	     * A transformer is an an object that provides a 2-arity reducing iterator
	     * function, step, 0-arity initial value function, init, and 1-arity result
	     * extraction function, result. The step function is used as the iterator
	     * function in reduce. The result function is used to convert the final
	     * accumulator into the return type and in most cases is R.identity. The init
	     * function can be used to provide an initial accumulator, but is ignored by
	     * transduce.
	     *
	     * The iteration is performed with R.reduce after initializing the transducer.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category List
	     * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
	     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	     *        current element from the array. Wrapped as transformer, if necessary, and used to
	     *        initialize the transducer
	     * @param {*} acc The initial accumulator value.
	     * @param {Array} list The list to iterate over.
	     * @return {*} The final, accumulated value.
	     * @see R.reduce, R.reduced, R.into
	     * @example
	     *
	     *      var numbers = [1, 2, 3, 4];
	     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	     *
	     *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
	     */
	    var transduce = curryN(4, function transduce(xf, fn, acc, list) {
	        return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements
	     * of each list. Duplication is determined according to the value returned by
	     * applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @see R.union
	     * @example
	     *
	     *      var l1 = [{a: 1}, {a: 2}];
	     *      var l2 = [{a: 1}, {a: 4}];
	     *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
	     */
	    var unionWith = _curry3(function unionWith(pred, list1, list2) {
	        return uniqWith(pred, _concat(list1, list2));
	    });

	    /**
	     * Takes a spec object and a test object; returns true if the test satisfies
	     * the spec, false otherwise. An object satisfies the spec if, for each of the
	     * spec's own properties, accessing that property of the object gives the same
	     * value (in `R.equals` terms) as accessing that property of the spec.
	     *
	     * `whereEq` is a specialization of [`where`](#where).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @sig {String: *} -> {String: *} -> Boolean
	     * @param {Object} spec
	     * @param {Object} testObj
	     * @return {Boolean}
	     * @see R.where
	     * @example
	     *
	     *      // pred :: Object -> Boolean
	     *      var pred = R.whereEq({a: 1, b: 2});
	     *
	     *      pred({a: 1});              //=> false
	     *      pred({a: 1, b: 2});        //=> true
	     *      pred({a: 1, b: 2, c: 3});  //=> true
	     *      pred({a: 1, b: 1});        //=> false
	     */
	    var whereEq = _curry2(function whereEq(spec, testObj) {
	        return where(map(equals, spec), testObj);
	    });

	    var _flatCat = function () {
	        var preservingReduced = function (xf) {
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return xf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    var ret = xf['@@transducer/step'](result, input);
	                    return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
	                }
	            };
	        };
	        return function _xcat(xf) {
	            var rxf = preservingReduced(xf);
	            return {
	                '@@transducer/init': _xfBase.init,
	                '@@transducer/result': function (result) {
	                    return rxf['@@transducer/result'](result);
	                },
	                '@@transducer/step': function (result, input) {
	                    return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
	                }
	            };
	        };
	    }();

	    // Array.prototype.indexOf doesn't exist below IE9
	    // manually crawl the list to distinguish between +0 and -0
	    // NaN
	    // non-zero numbers can utilise Set
	    // all these types can utilise Set
	    // null can utilise Set
	    // anything else not covered above, defer to R.equals
	    var _indexOf = function _indexOf(list, a, idx) {
	        var inf, item;
	        // Array.prototype.indexOf doesn't exist below IE9
	        if (typeof list.indexOf === 'function') {
	            switch (typeof a) {
	            case 'number':
	                if (a === 0) {
	                    // manually crawl the list to distinguish between +0 and -0
	                    inf = 1 / a;
	                    while (idx < list.length) {
	                        item = list[idx];
	                        if (item === 0 && 1 / item === inf) {
	                            return idx;
	                        }
	                        idx += 1;
	                    }
	                    return -1;
	                } else if (a !== a) {
	                    // NaN
	                    while (idx < list.length) {
	                        item = list[idx];
	                        if (typeof item === 'number' && item !== item) {
	                            return idx;
	                        }
	                        idx += 1;
	                    }
	                    return -1;
	                }
	                // non-zero numbers can utilise Set
	                return list.indexOf(a, idx);
	            // all these types can utilise Set
	            case 'string':
	            case 'boolean':
	            case 'function':
	            case 'undefined':
	                return list.indexOf(a, idx);
	            case 'object':
	                if (a === null) {
	                    // null can utilise Set
	                    return list.indexOf(a, idx);
	                }
	            }
	        }
	        // anything else not covered above, defer to R.equals
	        while (idx < list.length) {
	            if (equals(list[idx], a)) {
	                return idx;
	            }
	            idx += 1;
	        }
	        return -1;
	    };

	    var _xchain = _curry2(function _xchain(f, xf) {
	        return map(f, _flatCat(xf));
	    });

	    /**
	     * Takes a list of predicates and returns a predicate that returns true for a
	     * given list of arguments if every one of the provided predicates is satisfied
	     * by those arguments.
	     *
	     * The function returned is a curried function whose arity matches that of the
	     * highest-arity predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} preds
	     * @return {Function}
	     * @see R.anyPass
	     * @example
	     *
	     *      var isQueen = R.propEq('rank', 'Q');
	     *      var isSpade = R.propEq('suit', '♠︎');
	     *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
	     *
	     *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
	     *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
	     */
	    var allPass = _curry1(function allPass(preds) {
	        return curryN(reduce(max, 0, pluck('length', preds)), function () {
	            var idx = 0;
	            var len = preds.length;
	            while (idx < len) {
	                if (!preds[idx].apply(this, arguments)) {
	                    return false;
	                }
	                idx += 1;
	            }
	            return true;
	        });
	    });

	    /**
	     * Returns `true` if all elements are unique, in `R.equals` terms, otherwise
	     * `false`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category List
	     * @sig [a] -> Boolean
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if all elements are unique, else `false`.
	     * @deprecated since v0.20.0
	     * @example
	     *
	     *      R.allUniq(['1', 1]); //=> true
	     *      R.allUniq([1, 1]);   //=> false
	     *      R.allUniq([[42], [42]]); //=> false
	     */
	    var allUniq = _curry1(function allUniq(list) {
	        var len = list.length;
	        var idx = 0;
	        while (idx < len) {
	            if (_indexOf(list, list[idx], idx + 1) >= 0) {
	                return false;
	            }
	            idx += 1;
	        }
	        return true;
	    });

	    /**
	     * Takes a list of predicates and returns a predicate that returns true for a
	     * given list of arguments if at least one of the provided predicates is
	     * satisfied by those arguments.
	     *
	     * The function returned is a curried function whose arity matches that of the
	     * highest-arity predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Logic
	     * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	     * @param {Array} preds
	     * @return {Function}
	     * @see R.allPass
	     * @example
	     *
	     *      var gte = R.anyPass([R.gt, R.equals]);
	     *
	     *      gte(3, 2); //=> true
	     *      gte(2, 2); //=> true
	     *      gte(2, 3); //=> false
	     */
	    var anyPass = _curry1(function anyPass(preds) {
	        return curryN(reduce(max, 0, pluck('length', preds)), function () {
	            var idx = 0;
	            var len = preds.length;
	            while (idx < len) {
	                if (preds[idx].apply(this, arguments)) {
	                    return true;
	                }
	                idx += 1;
	            }
	            return false;
	        });
	    });

	    /**
	     * ap applies a list of functions to a list of values.
	     *
	     * Dispatches to the `ap` method of the second argument, if present. Also
	     * treats functions as applicatives.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category Function
	     * @sig [f] -> [a] -> [f a]
	     * @param {Array} fns An array of functions
	     * @param {Array} vs An array of values
	     * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
	     * @example
	     *
	     *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	     */
	    // else
	    var ap = _curry2(function ap(applicative, fn) {
	        return typeof applicative.ap === 'function' ? applicative.ap(fn) : typeof applicative === 'function' ? curryN(Math.max(applicative.length, fn.length), function () {
	            return applicative.apply(this, arguments)(fn.apply(this, arguments));
	        }) : // else
	        _reduce(function (acc, f) {
	            return _concat(acc, map(f, fn));
	        }, [], applicative);
	    });

	    /**
	     * Given a spec object recursively mapping properties to functions, creates a
	     * function producing an object of the same structure, by mapping each property
	     * to the result of calling its associated function with the supplied arguments.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.20.0
	     * @category Function
	     * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
	     * @param {Object} spec an object recursively mapping properties to functions for
	     *        producing the values for these properties.
	     * @return {Function} A function that returns an object of the same structure
	     * as `spec', with each property set to the value returned by calling its
	     * associated function with the supplied arguments.
	     * @see R.juxt
	     * @example
	     *
	     *      var getMetrics = R.applySpec({
	     *                                      sum: R.add,
	     *                                      nested: { mul: R.multiply }
	     *                                   });
	     *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
	     */
	    var applySpec = _curry1(function applySpec(spec) {
	        spec = map(function (v) {
	            return typeof v == 'function' ? v : applySpec(v);
	        }, spec);
	        return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
	            var args = arguments;
	            return map(function (f) {
	                return apply(f, args);
	            }, spec);
	        });
	    });

	    /**
	     * Returns the result of calling its first argument with the remaining
	     * arguments. This is occasionally useful as a converging function for
	     * `R.converge`: the left branch can produce a function while the right branch
	     * produces a value to be passed to that function as an argument.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category Function
	     * @sig (*... -> a),*... -> a
	     * @param {Function} fn The function to apply to the remaining arguments.
	     * @param {...*} args Any number of positional arguments.
	     * @return {*}
	     * @see R.apply
	     * @example
	     *
	     *      var indentN = R.pipe(R.times(R.always(' ')),
	     *                           R.join(''),
	     *                           R.replace(/^(?!$)/gm));
	     *
	     *      var format = R.converge(R.call, [
	     *                                  R.pipe(R.prop('indent'), indentN),
	     *                                  R.prop('value')
	     *                              ]);
	     *
	     *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	     */
	    var call = curry(function call(fn) {
	        return fn.apply(this, _slice(arguments, 1));
	    });

	    /**
	     * `chain` maps a function over a list and concatenates the results. `chain`
	     * is also known as `flatMap` in some libraries
	     *
	     * Dispatches to the `chain` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig (a -> [b]) -> [a] -> [b]
	     * @param {Function} fn
	     * @param {Array} list
	     * @return {Array}
	     * @example
	     *
	     *      var duplicate = n => [n, n];
	     *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
	     */
	    var chain = _curry2(_dispatchable('chain', _xchain, function chain(fn, monad) {
	        if (typeof monad === 'function') {
	            return function () {
	                return monad.call(this, fn.apply(this, arguments)).apply(this, arguments);
	            };
	        }
	        return _makeFlat(false)(map(fn, monad));
	    }));

	    /**
	     * Returns a function, `fn`, which encapsulates if/else-if/else logic.
	     * `R.cond` takes a list of [predicate, transform] pairs. All of the arguments
	     * to `fn` are applied to each of the predicates in turn until one returns a
	     * "truthy" value, at which point `fn` returns the result of applying its
	     * arguments to the corresponding transformer. If none of the predicates
	     * matches, `fn` returns undefined.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.6.0
	     * @category Logic
	     * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	     * @param {Array} pairs
	     * @return {Function}
	     * @example
	     *
	     *      var fn = R.cond([
	     *        [R.equals(0),   R.always('water freezes at 0°C')],
	     *        [R.equals(100), R.always('water boils at 100°C')],
	     *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	     *      ]);
	     *      fn(0); //=> 'water freezes at 0°C'
	     *      fn(50); //=> 'nothing special happens at 50°C'
	     *      fn(100); //=> 'water boils at 100°C'
	     */
	    var cond = _curry1(function cond(pairs) {
	        var arity = reduce(max, 0, map(function (pair) {
	            return pair[0].length;
	        }, pairs));
	        return _arity(arity, function () {
	            var idx = 0;
	            while (idx < pairs.length) {
	                if (pairs[idx][0].apply(this, arguments)) {
	                    return pairs[idx][1].apply(this, arguments);
	                }
	                idx += 1;
	            }
	        });
	    });

	    /**
	     * Wraps a constructor function inside a curried function that can be called
	     * with the same arguments and returns the same type. The arity of the function
	     * returned is specified to allow using variadic constructor functions.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.0
	     * @category Function
	     * @sig Number -> (* -> {*}) -> (* -> {*})
	     * @param {Number} n The arity of the constructor function.
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Variadic constructor function
	     *      var Widget = () => {
	     *        this.children = Array.prototype.slice.call(arguments);
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.constructN(1, Widget), allConfigs); // a list of Widgets
	     */
	    var constructN = _curry2(function constructN(n, Fn) {
	        if (n > 10) {
	            throw new Error('Constructor with greater than ten arguments');
	        }
	        if (n === 0) {
	            return function () {
	                return new Fn();
	            };
	        }
	        return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
	            switch (arguments.length) {
	            case 1:
	                return new Fn($0);
	            case 2:
	                return new Fn($0, $1);
	            case 3:
	                return new Fn($0, $1, $2);
	            case 4:
	                return new Fn($0, $1, $2, $3);
	            case 5:
	                return new Fn($0, $1, $2, $3, $4);
	            case 6:
	                return new Fn($0, $1, $2, $3, $4, $5);
	            case 7:
	                return new Fn($0, $1, $2, $3, $4, $5, $6);
	            case 8:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
	            case 9:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
	            case 10:
	                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
	            }
	        }));
	    });

	    /**
	     * Accepts a converging function and a list of branching functions and returns
	     * a new function. When invoked, this new function is applied to some
	     * arguments, each branching function is applied to those same arguments. The
	     * results of each branching function are passed as arguments to the converging
	     * function to produce the return value.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.4.2
	     * @category Function
	     * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
	     * @param {Function} after A function. `after` will be invoked with the return values of
	     *        `fn1` and `fn2` as its arguments.
	     * @param {Array} functions A list of functions.
	     * @return {Function} A new function.
	     * @example
	     *
	     *      var add = (a, b) => a + b;
	     *      var multiply = (a, b) => a * b;
	     *      var subtract = (a, b) => a - b;
	     *
	     *      //≅ multiply( add(1, 2), subtract(1, 2) );
	     *      R.converge(multiply, [add, subtract])(1, 2); //=> -3
	     *
	     *      var add3 = (a, b, c) => a + b + c;
	     *      R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4
	     */
	    var converge = _curry2(function converge(after, fns) {
	        return curryN(reduce(max, 0, pluck('length', fns)), function () {
	            var args = arguments;
	            var context = this;
	            return after.apply(context, _map(function (fn) {
	                return fn.apply(context, args);
	            }, fns));
	        });
	    });

	    /**
	     * Counts the elements of a list according to how many match each value of a
	     * key generated by the supplied function. Returns an object mapping the keys
	     * produced by `fn` to the number of occurrences in the list. Note that all
	     * keys are coerced to strings because of how JavaScript objects work.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig (a -> String) -> [a] -> {*}
	     * @param {Function} fn The function used to map values to keys.
	     * @param {Array} list The list to count elements from.
	     * @return {Object} An object mapping keys to number of occurrences in the list.
	     * @example
	     *
	     *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
	     *      var letters = R.split('', 'abcABCaaaBBc');
	     *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
	     *      R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
	     */
	    var countBy = reduceBy(function (acc, elem) {
	        return acc + 1;
	    }, 0);

	    /**
	     * Returns a new list without any consecutively repeating elements. Equality is
	     * determined by applying the supplied predicate two consecutive elements. The
	     * first element in a series of equal element is the one being preserved.
	     *
	     * Dispatches to the `dropRepeatsWith` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig (a, a -> Boolean) -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @see R.transduce
	     * @example
	     *
	     *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
	     *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
	     */
	    var dropRepeatsWith = _curry2(_dispatchable('dropRepeatsWith', _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
	        var result = [];
	        var idx = 1;
	        var len = list.length;
	        if (len !== 0) {
	            result[0] = list[0];
	            while (idx < len) {
	                if (!pred(last(result), list[idx])) {
	                    result[result.length] = list[idx];
	                }
	                idx += 1;
	            }
	        }
	        return result;
	    }));

	    /**
	     * Takes a function and two values in its domain and returns `true` if the
	     * values map to the same value in the codomain; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.18.0
	     * @category Relation
	     * @sig (a -> b) -> a -> a -> Boolean
	     * @param {Function} f
	     * @param {*} x
	     * @param {*} y
	     * @return {Boolean}
	     * @example
	     *
	     *      R.eqBy(Math.abs, 5, -5); //=> true
	     */
	    var eqBy = _curry3(function eqBy(f, x, y) {
	        return equals(f(x), f(y));
	    });

	    /**
	     * Reports whether two objects have the same value, in `R.equals` terms, for
	     * the specified property. Useful as a curried predicate.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig k -> {k: v} -> {k: v} -> Boolean
	     * @param {String} prop The name of the property to compare
	     * @param {Object} obj1
	     * @param {Object} obj2
	     * @return {Boolean}
	     *
	     * @example
	     *
	     *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
	     *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
	     *      R.eqProps('a', o1, o2); //=> false
	     *      R.eqProps('c', o1, o2); //=> true
	     */
	    var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
	        return equals(obj1[prop], obj2[prop]);
	    });

	    /**
	     * Splits a list into sub-lists stored in an object, based on the result of
	     * calling a String-returning function on each element, and grouping the
	     * results according to values returned.
	     *
	     * Dispatches to the `groupBy` method of the second argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig (a -> String) -> [a] -> {String: [a]}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} list The array to group
	     * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
	     *         that produced that key when passed to `fn`.
	     * @see R.transduce
	     * @example
	     *
	     *      var byGrade = R.groupBy(function(student) {
	     *        var score = student.score;
	     *        return score < 65 ? 'F' :
	     *               score < 70 ? 'D' :
	     *               score < 80 ? 'C' :
	     *               score < 90 ? 'B' : 'A';
	     *      });
	     *      var students = [{name: 'Abby', score: 84},
	     *                      {name: 'Eddy', score: 58},
	     *                      // ...
	     *                      {name: 'Jack', score: 69}];
	     *      byGrade(students);
	     *      // {
	     *      //   'A': [{name: 'Dianne', score: 99}],
	     *      //   'B': [{name: 'Abby', score: 84}]
	     *      //   // ...,
	     *      //   'F': [{name: 'Eddy', score: 58}]
	     *      // }
	     */
	    var groupBy = _curry2(_dispatchable('groupBy', _xgroupBy, reduceBy(function (acc, item) {
	        if (acc == null) {
	            acc = [];
	        }
	        acc.push(item);
	        return acc;
	    }, null)));

	    /**
	     * Given a function that generates a key, turns a list of objects into an
	     * object indexing the objects by the given key. Note that if multiple
	     * objects generate the same value for the indexing key only the last value
	     * will be included in the generated object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
	     * @param {Function} fn Function :: a -> String
	     * @param {Array} array The array of objects to index
	     * @return {Object} An object indexing each array element by the given property.
	     * @example
	     *
	     *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
	     *      R.indexBy(R.prop('id'), list);
	     *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
	     */
	    var indexBy = reduceBy(function (acc, elem) {
	        return elem;
	    }, null);

	    /**
	     * Returns the position of the first occurrence of an item in an array, or -1
	     * if the item is not included in the array. `R.equals` is used to determine
	     * equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Number
	     * @param {*} target The item to find.
	     * @param {Array} xs The array to search in.
	     * @return {Number} the index of the target, or -1 if the target is not found.
	     * @see R.lastIndexOf
	     * @example
	     *
	     *      R.indexOf(3, [1,2,3,4]); //=> 2
	     *      R.indexOf(10, [1,2,3,4]); //=> -1
	     */
	    var indexOf = _curry2(function indexOf(target, xs) {
	        return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
	    });

	    /**
	     * juxt applies a list of functions to a list of values.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Function
	     * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
	     * @param {Array} fns An array of functions
	     * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
	     * @see R.applySpec
	     * @example
	     *
	     *      var range = R.juxt([Math.min, Math.max]);
	     *      range(3, 4, 9, -3); //=> [-3, 9]
	     */
	    var juxt = _curry1(function juxt(fns) {
	        return converge(_arrayOf, fns);
	    });

	    /**
	     * Returns a lens for the given getter and setter functions. The getter "gets"
	     * the value of the focus; the setter "sets" the value of the focus. The setter
	     * should not mutate the data structure.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.8.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	     * @param {Function} getter
	     * @param {Function} setter
	     * @return {Lens}
	     * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	     * @example
	     *
	     *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lens = _curry2(function lens(getter, setter) {
	        return function (toFunctorFn) {
	            return function (target) {
	                return map(function (focus) {
	                    return setter(focus, target);
	                }, toFunctorFn(getter(target)));
	            };
	        };
	    });

	    /**
	     * Returns a lens whose focus is the specified index.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig Number -> Lens s a
	     * @param {Number} n
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var headLens = R.lensIndex(0);
	     *
	     *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
	     *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
	     *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
	     */
	    var lensIndex = _curry1(function lensIndex(n) {
	        return lens(nth(n), update(n));
	    });

	    /**
	     * Returns a lens whose focus is the specified path.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig [String] -> Lens s a
	     * @param {Array} path The path to use.
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xyLens = R.lensPath(['x', 'y']);
	     *
	     *      R.view(xyLens, {x: {y: 2, z: 3}});            //=> 2
	     *      R.set(xyLens, 4, {x: {y: 2, z: 3}});          //=> {x: {y: 4, z: 3}}
	     *      R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  //=> {x: {y: -2, z: 3}}
	     */
	    var lensPath = _curry1(function lensPath(p) {
	        return lens(path(p), assocPath(p));
	    });

	    /**
	     * Returns a lens whose focus is the specified property.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Object
	     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	     * @sig String -> Lens s a
	     * @param {String} k
	     * @return {Lens}
	     * @see R.view, R.set, R.over
	     * @example
	     *
	     *      var xLens = R.lensProp('x');
	     *
	     *      R.view(xLens, {x: 1, y: 2});            //=> 1
	     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	     */
	    var lensProp = _curry1(function lensProp(k) {
	        return lens(prop(k), assoc(k));
	    });

	    /**
	     * "lifts" a function to be the specified arity, so that it may "map over" that
	     * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig Number -> (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The lifted function.
	     * @see R.lift, R.ap
	     * @example
	     *
	     *      var madd3 = R.liftN(3, R.curryN(3, (...args) => R.sum(args)));
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     */
	    var liftN = _curry2(function liftN(arity, fn) {
	        var lifted = curryN(arity, fn);
	        return curryN(arity, function () {
	            return _reduce(ap, map(lifted, arguments[0]), _slice(arguments, 1));
	        });
	    });

	    /**
	     * Returns the mean of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.mean([2, 7, 9]); //=> 6
	     *      R.mean([]); //=> NaN
	     */
	    var mean = _curry1(function mean(list) {
	        return sum(list) / list.length;
	    });

	    /**
	     * Returns the median of the given list of numbers.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list
	     * @return {Number}
	     * @example
	     *
	     *      R.median([2, 9, 7]); //=> 7
	     *      R.median([7, 2, 10, 9]); //=> 8
	     *      R.median([]); //=> NaN
	     */
	    var median = _curry1(function median(list) {
	        var len = list.length;
	        if (len === 0) {
	            return NaN;
	        }
	        var width = 2 - len % 2;
	        var idx = (len - width) / 2;
	        return mean(_slice(list).sort(function (a, b) {
	            return a < b ? -1 : a > b ? 1 : 0;
	        }).slice(idx, idx + width));
	    });

	    /**
	     * Takes a predicate and a list or other "filterable" object and returns the
	     * pair of filterable objects of the same type of elements which do and do not
	     * satisfy, the predicate, respectively.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.4
	     * @category List
	     * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
	     * @param {Function} pred A predicate to determine which side the element belongs to.
	     * @param {Array} filterable the list (or other filterable) to partition.
	     * @return {Array} An array, containing first the subset of elements that satisfy the
	     *         predicate, and second the subset of elements that do not satisfy.
	     * @see R.filter, R.reject
	     * @example
	     *
	     *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
	     *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
	     *
	     *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
	     *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
	     */
	    var partition = juxt([
	        filter,
	        reject
	    ]);

	    /**
	     * Performs left-to-right function composition. The leftmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * In some libraries this function is named `sequence`.
	     *
	     * **Note:** The result of pipe is not automatically curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.compose
	     * @example
	     *
	     *      var f = R.pipe(Math.pow, R.negate, R.inc);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var pipe = function pipe() {
	        if (arguments.length === 0) {
	            throw new Error('pipe requires at least one argument');
	        }
	        return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	    };

	    /**
	     * Performs left-to-right composition of one or more Promise-returning
	     * functions. The leftmost function may have any arity; the remaining functions
	     * must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.composeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
	     */
	    var pipeP = function pipeP() {
	        if (arguments.length === 0) {
	            throw new Error('pipeP requires at least one argument');
	        }
	        return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
	    };

	    /**
	     * Multiplies together all the elements of a list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Math
	     * @sig [Number] -> Number
	     * @param {Array} list An array of numbers
	     * @return {Number} The product of all the numbers in the list.
	     * @see R.reduce
	     * @example
	     *
	     *      R.product([2,4,6,8,100,1]); //=> 38400
	     */
	    var product = reduce(multiply, 1);

	    /**
	     * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
	     * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
	     * Applicative of Traversable.
	     *
	     * Dispatches to the `sequence` method of the second argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
	     * @param {Function} of
	     * @param {*} traversable
	     * @return {*}
	     * @see R.traverse
	     * @example
	     *
	     *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
	     *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	     *
	     *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
	     *      R.sequence(R.of, Nothing());       //=> [Nothing()]
	     */
	    var sequence = _curry2(function sequence(of, traversable) {
	        return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (acc, x) {
	            return ap(map(prepend, x), acc);
	        }, of([]), traversable);
	    });

	    /**
	     * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
	     * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
	     * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
	     * into an Applicative of Traversable.
	     *
	     * Dispatches to the `sequence` method of the third argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
	     * @param {Function} of
	     * @param {Function} f
	     * @param {*} traversable
	     * @return {*}
	     * @see R.sequence
	     * @example
	     *
	     *      // Returns `Nothing` if the given divisor is `0`
	     *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
	     *
	     *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
	     *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
	     */
	    var traverse = _curry3(function traverse(of, f, traversable) {
	        return sequence(of, map(f, traversable));
	    });

	    /**
	     * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
	     * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.3.0
	     * @category List
	     * @sig Chain c => c (c a) -> c a
	     * @param {*} list
	     * @return {*}
	     * @see R.flatten, R.chain
	     * @example
	     *
	     *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
	     *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
	     */
	    var unnest = chain(_identity);

	    var _contains = function _contains(a, list) {
	        return _indexOf(list, a, 0) >= 0;
	    };

	    //  mapPairs :: (Object, [String]) -> [String]
	    var _toString = function _toString(x, seen) {
	        var recur = function recur(y) {
	            var xs = seen.concat([x]);
	            return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	        };
	        //  mapPairs :: (Object, [String]) -> [String]
	        var mapPairs = function (obj, keys) {
	            return _map(function (k) {
	                return _quote(k) + ': ' + recur(obj[k]);
	            }, keys.slice().sort());
	        };
	        switch (Object.prototype.toString.call(x)) {
	        case '[object Arguments]':
	            return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	        case '[object Array]':
	            return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
	                return /^\d+$/.test(k);
	            }, keys(x)))).join(', ') + ']';
	        case '[object Boolean]':
	            return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	        case '[object Date]':
	            return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
	        case '[object Null]':
	            return 'null';
	        case '[object Number]':
	            return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	        case '[object String]':
	            return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	        case '[object Undefined]':
	            return 'undefined';
	        default:
	            if (typeof x.toString === 'function') {
	                var repr = x.toString();
	                if (repr !== '[object Object]') {
	                    return repr;
	                }
	            }
	            return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	        }
	    };

	    /**
	     * Performs right-to-left function composition. The rightmost function may have
	     * any arity; the remaining functions must be unary.
	     *
	     * **Note:** The result of compose is not automatically curried.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipe
	     * @example
	     *
	     *      var f = R.compose(R.inc, R.negate, Math.pow);
	     *
	     *      f(3, 4); // -(3^4) + 1
	     */
	    var compose = function compose() {
	        if (arguments.length === 0) {
	            throw new Error('compose requires at least one argument');
	        }
	        return pipe.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the right-to-left Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Function
	     * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @see R.pipeK
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.composeK(
	     *        R.compose(Maybe.of, R.toUpper),
	     *        get('state'),
	     *        get('address'),
	     *        get('user'),
	     *        parseJson
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var composeK = function composeK() {
	        return compose.apply(this, prepend(identity, map(chain, arguments)));
	    };

	    /**
	     * Performs right-to-left composition of one or more Promise-returning
	     * functions. The rightmost function may have any arity; the remaining
	     * functions must be unary.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.10.0
	     * @category Function
	     * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
	     * @param {...Function} functions
	     * @return {Function}
	     * @see R.pipeP
	     * @example
	     *
	     *      //  followersForUser :: String -> Promise [User]
	     *      var followersForUser = R.composeP(db.getFollowers, db.getUserById);
	     */
	    var composeP = function composeP() {
	        if (arguments.length === 0) {
	            throw new Error('composeP requires at least one argument');
	        }
	        return pipeP.apply(this, reverse(arguments));
	    };

	    /**
	     * Wraps a constructor function inside a curried function that can be called
	     * with the same arguments and returns the same type.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (* -> {*}) -> (* -> {*})
	     * @param {Function} Fn The constructor function to wrap.
	     * @return {Function} A wrapped, curried constructor function.
	     * @example
	     *
	     *      // Constructor function
	     *      var Widget = config => {
	     *        // ...
	     *      };
	     *      Widget.prototype = {
	     *        // ...
	     *      };
	     *      var allConfigs = [
	     *        // ...
	     *      ];
	     *      R.map(R.construct(Widget), allConfigs); // a list of Widgets
	     */
	    var construct = _curry1(function construct(Fn) {
	        return constructN(Fn.length, Fn);
	    });

	    /**
	     * Returns `true` if the specified value is equal, in `R.equals` terms, to at
	     * least one element of the given list; `false` otherwise.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig a -> [a] -> Boolean
	     * @param {Object} a The item to compare against.
	     * @param {Array} list The array to consider.
	     * @return {Boolean} `true` if the item is in the list, `false` otherwise.
	     * @see R.any
	     * @example
	     *
	     *      R.contains(3, [1, 2, 3]); //=> true
	     *      R.contains(4, [1, 2, 3]); //=> false
	     *      R.contains([42], [[42]]); //=> true
	     */
	    var contains = _curry2(_contains);

	    /**
	     * Finds the set (i.e. no duplicates) of all elements in the first list not
	     * contained in the second list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` that are not in `list2`.
	     * @see R.differenceWith
	     * @example
	     *
	     *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
	     *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
	     */
	    var difference = _curry2(function difference(first, second) {
	        var out = [];
	        var idx = 0;
	        var firstLen = first.length;
	        while (idx < firstLen) {
	            if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
	                out[out.length] = first[idx];
	            }
	            idx += 1;
	        }
	        return out;
	    });

	    /**
	     * Returns a new list without any consecutively repeating elements. `R.equals`
	     * is used to determine equality.
	     *
	     * Dispatches to the `dropRepeats` method of the first argument, if present.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} `list` without repeating elements.
	     * @see R.transduce
	     * @example
	     *
	     *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
	     */
	    var dropRepeats = _curry1(_dispatchable('dropRepeats', _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

	    /**
	     * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	     * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	     *
	     * @func
	     * @memberOf R
	     * @since v0.7.0
	     * @category Function
	     * @sig (*... -> *) -> ([*]... -> [*])
	     * @param {Function} fn The function to lift into higher context
	     * @return {Function} The lifted function.
	     * @see R.liftN
	     * @example
	     *
	     *      var madd3 = R.lift(R.curry((a, b, c) => a + b + c));
	     *
	     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	     *
	     *      var madd5 = R.lift(R.curry((a, b, c, d, e) => a + b + c + d + e));
	     *
	     *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	     */
	    var lift = _curry1(function lift(fn) {
	        return liftN(fn.length, fn);
	    });

	    /**
	     * Returns a partial copy of an object omitting the keys specified.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Object
	     * @sig [String] -> {String: *} -> {String: *}
	     * @param {Array} names an array of String property names to omit from the new object
	     * @param {Object} obj The object to copy from
	     * @return {Object} A new object with properties from `names` not on it.
	     * @see R.pick
	     * @example
	     *
	     *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	     */
	    var omit = _curry2(function omit(names, obj) {
	        var result = {};
	        for (var prop in obj) {
	            if (!_contains(prop, names)) {
	                result[prop] = obj[prop];
	            }
	        }
	        return result;
	    });

	    /**
	     * Returns the left-to-right Kleisli composition of the provided functions,
	     * each of which must return a value of a type supported by [`chain`](#chain).
	     *
	     * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category Function
	     * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (m a -> m z)
	     * @param {...Function}
	     * @return {Function}
	     * @see R.composeK
	     * @example
	     *
	     *      //  parseJson :: String -> Maybe *
	     *      //  get :: String -> Object -> Maybe *
	     *
	     *      //  getStateCode :: Maybe String -> Maybe String
	     *      var getStateCode = R.pipeK(
	     *        parseJson,
	     *        get('user'),
	     *        get('address'),
	     *        get('state'),
	     *        R.compose(Maybe.of, R.toUpper)
	     *      );
	     *
	     *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
	     *      //=> Just('NY')
	     *      getStateCode(Maybe.of('[Invalid JSON]'));
	     *      //=> Nothing()
	     */
	    var pipeK = function pipeK() {
	        return composeK.apply(this, reverse(arguments));
	    };

	    /**
	     * Returns the string representation of the given value. `eval`'ing the output
	     * should result in a value equivalent to the input value. Many of the built-in
	     * `toString` methods do not satisfy this requirement.
	     *
	     * If the given value is an `[object Object]` with a `toString` method other
	     * than `Object.prototype.toString`, this method is invoked with no arguments
	     * to produce the return value. This means user-defined constructor functions
	     * can provide a suitable `toString` method. For example:
	     *
	     *     function Point(x, y) {
	     *       this.x = x;
	     *       this.y = y;
	     *     }
	     *
	     *     Point.prototype.toString = function() {
	     *       return 'new Point(' + this.x + ', ' + this.y + ')';
	     *     };
	     *
	     *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	     *
	     * @func
	     * @memberOf R
	     * @since v0.14.0
	     * @category String
	     * @sig * -> String
	     * @param {*} val
	     * @return {String}
	     * @example
	     *
	     *      R.toString(42); //=> '42'
	     *      R.toString('abc'); //=> '"abc"'
	     *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	     *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	     *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	     */
	    var toString = _curry1(function toString(val) {
	        return _toString(val, []);
	    });

	    /**
	     * Returns a new list without values in the first argument.
	     * `R.equals` is used to determine equality.
	     *
	     * Acts as a transducer if a transformer is given in list position.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @param {Array} list1 The values to be removed from `list2`.
	     * @param {Array} list2 The array to remove values from.
	     * @return {Array} The new array without values in `list1`.
	     * @see R.transduce
	     * @example
	     *
	     *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
	     */
	    var without = _curry2(function (xs, list) {
	        return reject(flip(_contains)(xs), list);
	    });

	    // A simple Set type that honours R.equals semantics
	    /* globals Set */
	    /**
	       * Combines the logic for checking whether an item is a member of the set and
	       * for adding a new item to the set.
	       *
	       * @param item       The item to check or add to the Set instance.
	       * @param shouldAdd  If true, the item will be added to the set if it doesn't
	       *                   already exist.
	       * @param set        The set instance to check or add to.
	       * @return {boolean} When shouldAdd is true, this will return true when a new
	       *                   item was added otherwise false. When shouldAdd is false,
	       *                   this will return true if the item already exists, otherwise
	       *                   false.
	       */
	    // distinguish between +0 and -0
	    // these types can all utilise Set
	    // set._items['boolean'] holds a two element array
	    // representing [ falseExists, trueExists ]
	    // compare functions for reference equality
	    /* falls through */
	    // reduce the search size of heterogeneous sets by creating buckets
	    // for each type.
	    // scan through all previously applied items
	    var _Set = function () {
	        function _Set() {
	            /* globals Set */
	            this._nativeSet = typeof Set === 'function' ? new Set() : null;
	            this._items = {};
	        }
	        _Set.prototype.add = function (item) {
	            return hasOrAdd(item, true, this);
	        };
	        _Set.prototype.has = function (item) {
	            return hasOrAdd(item, false, this);
	        };
	        /**
	       * Combines the logic for checking whether an item is a member of the set and
	       * for adding a new item to the set.
	       *
	       * @param item       The item to check or add to the Set instance.
	       * @param shouldAdd  If true, the item will be added to the set if it doesn't
	       *                   already exist.
	       * @param set        The set instance to check or add to.
	       * @return {boolean} When shouldAdd is true, this will return true when a new
	       *                   item was added otherwise false. When shouldAdd is false,
	       *                   this will return true if the item already exists, otherwise
	       *                   false.
	       */
	        function hasOrAdd(item, shouldAdd, set) {
	            var type = typeof item;
	            var prevSize, newSize;
	            switch (type) {
	            case 'string':
	            case 'number':
	                // distinguish between +0 and -0
	                if (item === 0 && !set._items['-0'] && 1 / item === -Infinity) {
	                    if (shouldAdd) {
	                        set._items['-0'] = true;
	                    }
	                    return shouldAdd;
	                }
	                // these types can all utilise Set
	                if (set._nativeSet !== null) {
	                    if (shouldAdd) {
	                        prevSize = set._nativeSet.size;
	                        set._nativeSet.add(item);
	                        newSize = set._nativeSet.size;
	                        return newSize > prevSize;
	                    } else {
	                        return set._nativeSet.has(item);
	                    }
	                } else {
	                    if (!(type in set._items)) {
	                        if (shouldAdd) {
	                            set._items[type] = {};
	                            set._items[type][item] = true;
	                        }
	                        return shouldAdd;
	                    } else if (item in set._items[type]) {
	                        return !shouldAdd;
	                    } else {
	                        if (shouldAdd) {
	                            set._items[type][item] = true;
	                        }
	                        return shouldAdd;
	                    }
	                }
	            case 'boolean':
	                // set._items['boolean'] holds a two element array
	                // representing [ falseExists, trueExists ]
	                if (type in set._items) {
	                    var bIdx = item ? 1 : 0;
	                    if (set._items[type][bIdx]) {
	                        return !shouldAdd;
	                    } else {
	                        if (shouldAdd) {
	                            set._items[type][bIdx] = true;
	                        }
	                        return shouldAdd;
	                    }
	                } else {
	                    if (shouldAdd) {
	                        set._items[type] = item ? [
	                            false,
	                            true
	                        ] : [
	                            true,
	                            false
	                        ];
	                    }
	                    return shouldAdd;
	                }
	            case 'function':
	                // compare functions for reference equality
	                if (set._nativeSet !== null) {
	                    if (shouldAdd) {
	                        prevSize = set._nativeSet.size;
	                        set._nativeSet.add(item);
	                        newSize = set._nativeSet.size;
	                        return newSize > prevSize;
	                    } else {
	                        return set._nativeSet.has(item);
	                    }
	                } else {
	                    if (!(type in set._items)) {
	                        if (shouldAdd) {
	                            set._items[type] = [item];
	                        }
	                        return shouldAdd;
	                    }
	                    if (!_contains(item, set._items[type])) {
	                        if (shouldAdd) {
	                            set._items[type].push(item);
	                        }
	                        return shouldAdd;
	                    }
	                }
	                return !shouldAdd;
	            case 'undefined':
	                if (set._items[type]) {
	                    return !shouldAdd;
	                } else {
	                    if (shouldAdd) {
	                        set._items[type] = true;
	                    }
	                    return shouldAdd;
	                }
	            case 'object':
	                if (item === null) {
	                    if (!set._items['null']) {
	                        if (shouldAdd) {
	                            set._items['null'] = true;
	                        }
	                        return shouldAdd;
	                    }
	                    return !shouldAdd;
	                }
	            /* falls through */
	            default:
	                // reduce the search size of heterogeneous sets by creating buckets
	                // for each type.
	                type = Object.prototype.toString.call(item);
	                if (!(type in set._items)) {
	                    if (shouldAdd) {
	                        set._items[type] = [item];
	                    }
	                    return shouldAdd;
	                }
	                // scan through all previously applied items
	                if (!_contains(item, set._items[type])) {
	                    if (shouldAdd) {
	                        set._items[type].push(item);
	                    }
	                    return shouldAdd;
	                }
	                return !shouldAdd;
	            }
	        }
	        return _Set;
	    }();

	    /**
	     * A function wrapping calls to the two functions in an `&&` operation,
	     * returning the result of the first function if it is false-y and the result
	     * of the second function otherwise. Note that this is short-circuited,
	     * meaning that the second function will not be invoked if the first returns a
	     * false-y value.
	     *
	     * In addition to functions, `R.both` also accepts any fantasy-land compatible
	     * applicative functor.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	     * @see R.and
	     * @example
	     *
	     *      var gt10 = x => x > 10;
	     *      var even = x => x % 2 === 0;
	     *      var f = R.both(gt10, even);
	     *      f(100); //=> true
	     *      f(101); //=> false
	     */
	    var both = _curry2(function both(f, g) {
	        return _isFunction(f) ? function _both() {
	            return f.apply(this, arguments) && g.apply(this, arguments);
	        } : lift(and)(f, g);
	    });

	    /**
	     * Takes a function `f` and returns a function `g` such that:
	     *
	     *   - applying `g` to zero or more arguments will give __true__ if applying
	     *     the same arguments to `f` gives a logical __false__ value; and
	     *
	     *   - applying `g` to zero or more arguments will give __false__ if applying
	     *     the same arguments to `f` gives a logical __true__ value.
	     *
	     * `R.complement` will work on all other functors as well.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> *) -> (*... -> Boolean)
	     * @param {Function} f
	     * @return {Function}
	     * @see R.not
	     * @example
	     *
	     *      var isEven = n => n % 2 === 0;
	     *      var isOdd = R.complement(isEven);
	     *      isOdd(21); //=> true
	     *      isOdd(42); //=> false
	     */
	    var complement = lift(not);

	    /**
	     * A function wrapping calls to the two functions in an `||` operation,
	     * returning the result of the first function if it is truth-y and the result
	     * of the second function otherwise. Note that this is short-circuited,
	     * meaning that the second function will not be invoked if the first returns a
	     * truth-y value.
	     *
	     * In addition to functions, `R.either` also accepts any fantasy-land compatible
	     * applicative functor.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category Logic
	     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	     * @param {Function} f a predicate
	     * @param {Function} g another predicate
	     * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	     * @see R.or
	     * @example
	     *
	     *      var gt10 = x => x > 10;
	     *      var even = x => x % 2 === 0;
	     *      var f = R.either(gt10, even);
	     *      f(101); //=> true
	     *      f(8); //=> true
	     */
	    var either = _curry2(function either(f, g) {
	        return _isFunction(f) ? function _either() {
	            return f.apply(this, arguments) || g.apply(this, arguments);
	        } : lift(or)(f, g);
	    });

	    /**
	     * Turns a named method with a specified arity into a function that can be
	     * called directly supplied with arguments and a target object.
	     *
	     * The returned function is curried and accepts `arity + 1` parameters where
	     * the final parameter is the target object.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	     * @param {Number} arity Number of arguments the returned function should take
	     *        before the target object.
	     * @param {String} method Name of the method to call.
	     * @return {Function} A new curried function.
	     * @example
	     *
	     *      var sliceFrom = R.invoker(1, 'slice');
	     *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	     *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	     *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	     */
	    var invoker = _curry2(function invoker(arity, method) {
	        return curryN(arity + 1, function () {
	            var target = arguments[arity];
	            if (target != null && is(Function, target[method])) {
	                return target[method].apply(target, _slice(arguments, 0, arity));
	            }
	            throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	        });
	    });

	    /**
	     * Returns a string made by inserting the `separator` between each element and
	     * concatenating all the elements into a single string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig String -> [a] -> String
	     * @param {Number|String} separator The string used to separate the elements.
	     * @param {Array} xs The elements to join into a string.
	     * @return {String} str The string made by concatenating `xs` with `separator`.
	     * @see R.split
	     * @example
	     *
	     *      var spacer = R.join(' ');
	     *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
	     *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
	     */
	    var join = invoker(1, 'join');

	    /**
	     * Creates a new function that, when invoked, caches the result of calling `fn`
	     * for a given argument set and returns the result. Subsequent calls to the
	     * memoized `fn` with the same argument set will not result in an additional
	     * call to `fn`; instead, the cached result for that set of arguments will be
	     * returned.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Function
	     * @sig (*... -> a) -> (*... -> a)
	     * @param {Function} fn The function to memoize.
	     * @return {Function} Memoized version of `fn`.
	     * @example
	     *
	     *      var count = 0;
	     *      var factorial = R.memoize(n => {
	     *        count += 1;
	     *        return R.product(R.range(1, n + 1));
	     *      });
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      factorial(5); //=> 120
	     *      count; //=> 1
	     */
	    var memoize = _curry1(function memoize(fn) {
	        var cache = {};
	        return _arity(fn.length, function () {
	            var key = toString(arguments);
	            if (!_has(key, cache)) {
	                cache[key] = fn.apply(this, arguments);
	            }
	            return cache[key];
	        });
	    });

	    /**
	     * Splits a string into an array of strings based on the given
	     * separator.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category String
	     * @sig (String | RegExp) -> String -> [String]
	     * @param {String|RegExp} sep The pattern.
	     * @param {String} str The string to separate into an array.
	     * @return {Array} The array of strings from `str` separated by `str`.
	     * @see R.join
	     * @example
	     *
	     *      var pathComponents = R.split('/');
	     *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	     *
	     *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	     */
	    var split = invoker(1, 'split');

	    /**
	     * Determines whether a given string matches a given regular expression.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.12.0
	     * @category String
	     * @sig RegExp -> String -> Boolean
	     * @param {RegExp} pattern
	     * @param {String} str
	     * @return {Boolean}
	     * @see R.match
	     * @example
	     *
	     *      R.test(/^x/, 'xyz'); //=> true
	     *      R.test(/^y/, 'xyz'); //=> false
	     */
	    var test = _curry2(function test(pattern, str) {
	        if (!_isRegExp(pattern)) {
	            throw new TypeError('\u2018test\u2019 requires a value of type RegExp as its first argument; received ' + toString(pattern));
	        }
	        return _cloneRegExp(pattern).test(str);
	    });

	    /**
	     * The lower case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to lower case.
	     * @return {String} The lower case version of `str`.
	     * @see R.toUpper
	     * @example
	     *
	     *      R.toLower('XYZ'); //=> 'xyz'
	     */
	    var toLower = invoker(0, 'toLowerCase');

	    /**
	     * The upper case version of a string.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.9.0
	     * @category String
	     * @sig String -> String
	     * @param {String} str The string to upper case.
	     * @return {String} The upper case version of `str`.
	     * @see R.toLower
	     * @example
	     *
	     *      R.toUpper('abc'); //=> 'ABC'
	     */
	    var toUpper = invoker(0, 'toUpperCase');

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list, based upon the value returned by applying the supplied function to
	     * each list element. Prefers the first item if the supplied function produces
	     * the same value on two items. `R.equals` is used for comparison.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.16.0
	     * @category List
	     * @sig (a -> b) -> [a] -> [a]
	     * @param {Function} fn A function used to produce a value to use during comparisons.
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	     */
	    var uniqBy = _curry2(function uniqBy(fn, list) {
	        var set = new _Set();
	        var result = [];
	        var idx = 0;
	        var appliedItem, item;
	        while (idx < list.length) {
	            item = list[idx];
	            appliedItem = fn(item);
	            if (set.add(appliedItem)) {
	                result.push(item);
	            }
	            idx += 1;
	        }
	        return result;
	    });

	    /**
	     * Returns the result of concatenating the given lists or strings.
	     *
	     * Dispatches to the `concat` method of the first argument, if present.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a] -> [a]
	     * @sig String -> String -> String
	     * @param {Array|String} a
	     * @param {Array|String} b
	     * @return {Array|String}
	     *
	     * @example
	     *
	     *      R.concat([], []); //=> []
	     *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	     *      R.concat('ABC', 'DEF'); // 'ABCDEF'
	     */
	    var concat = flip(invoker(1, 'concat'));

	    /**
	     * Finds the set (i.e. no duplicates) of all elements contained in the first or
	     * second list, but not both.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` or `list2`, but not both.
	     * @see R.symmetricDifferenceWith
	     * @example
	     *
	     *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
	     *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
	     */
	    var symmetricDifference = _curry2(function symmetricDifference(list1, list2) {
	        return concat(difference(list1, list2), difference(list2, list1));
	    });

	    /**
	     * Finds the set (i.e. no duplicates) of all elements contained in the first or
	     * second list, but not both. Duplication is determined according to the value
	     * returned by applying the supplied predicate to two list elements.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.19.0
	     * @category Relation
	     * @sig (a -> a -> Boolean) -> [a] -> [a] -> [a]
	     * @param {Function} pred A predicate used to test whether two items are equal.
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The elements in `list1` or `list2`, but not both.
	     * @see R.symmetricDifference
	     * @example
	     *
	     *      var eqA = R.eqBy(R.prop('a'));
	     *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
	     *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
	     *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	     */
	    var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
	        return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
	    });

	    /**
	     * Returns a new list containing only one copy of each element in the original
	     * list. `R.equals` is used to determine equality.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category List
	     * @sig [a] -> [a]
	     * @param {Array} list The array to consider.
	     * @return {Array} The list of unique items.
	     * @example
	     *
	     *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	     *      R.uniq([1, '1']);     //=> [1, '1']
	     *      R.uniq([[42], [42]]); //=> [[42]]
	     */
	    var uniq = uniqBy(identity);

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of those
	     * elements common to both lists.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} list1 The first list.
	     * @param {Array} list2 The second list.
	     * @return {Array} The list of elements found in both `list1` and `list2`.
	     * @see R.intersectionWith
	     * @example
	     *
	     *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	     */
	    var intersection = _curry2(function intersection(list1, list2) {
	        var lookupList, filteredList;
	        if (list1.length > list2.length) {
	            lookupList = list1;
	            filteredList = list2;
	        } else {
	            lookupList = list2;
	            filteredList = list1;
	        }
	        return uniq(_filter(flip(_contains)(lookupList), filteredList));
	    });

	    /**
	     * Combines two lists into a set (i.e. no duplicates) composed of the elements
	     * of each list.
	     *
	     * @func
	     * @memberOf R
	     * @since v0.1.0
	     * @category Relation
	     * @sig [*] -> [*] -> [*]
	     * @param {Array} as The first list.
	     * @param {Array} bs The second list.
	     * @return {Array} The first and second lists concatenated, with
	     *         duplicates removed.
	     * @example
	     *
	     *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
	     */
	    var union = _curry2(compose(uniq, _concat));

	    var R = {
	        F: F,
	        T: T,
	        __: __,
	        add: add,
	        addIndex: addIndex,
	        adjust: adjust,
	        all: all,
	        allPass: allPass,
	        allUniq: allUniq,
	        always: always,
	        and: and,
	        any: any,
	        anyPass: anyPass,
	        ap: ap,
	        aperture: aperture,
	        append: append,
	        apply: apply,
	        applySpec: applySpec,
	        assoc: assoc,
	        assocPath: assocPath,
	        binary: binary,
	        bind: bind,
	        both: both,
	        call: call,
	        chain: chain,
	        clamp: clamp,
	        clone: clone,
	        comparator: comparator,
	        complement: complement,
	        compose: compose,
	        composeK: composeK,
	        composeP: composeP,
	        concat: concat,
	        cond: cond,
	        construct: construct,
	        constructN: constructN,
	        contains: contains,
	        converge: converge,
	        countBy: countBy,
	        curry: curry,
	        curryN: curryN,
	        dec: dec,
	        defaultTo: defaultTo,
	        difference: difference,
	        differenceWith: differenceWith,
	        dissoc: dissoc,
	        dissocPath: dissocPath,
	        divide: divide,
	        drop: drop,
	        dropLast: dropLast,
	        dropLastWhile: dropLastWhile,
	        dropRepeats: dropRepeats,
	        dropRepeatsWith: dropRepeatsWith,
	        dropWhile: dropWhile,
	        either: either,
	        empty: empty,
	        eqBy: eqBy,
	        eqProps: eqProps,
	        equals: equals,
	        evolve: evolve,
	        filter: filter,
	        find: find,
	        findIndex: findIndex,
	        findLast: findLast,
	        findLastIndex: findLastIndex,
	        flatten: flatten,
	        flip: flip,
	        forEach: forEach,
	        fromPairs: fromPairs,
	        groupBy: groupBy,
	        groupWith: groupWith,
	        gt: gt,
	        gte: gte,
	        has: has,
	        hasIn: hasIn,
	        head: head,
	        identical: identical,
	        identity: identity,
	        ifElse: ifElse,
	        inc: inc,
	        indexBy: indexBy,
	        indexOf: indexOf,
	        init: init,
	        insert: insert,
	        insertAll: insertAll,
	        intersection: intersection,
	        intersectionWith: intersectionWith,
	        intersperse: intersperse,
	        into: into,
	        invert: invert,
	        invertObj: invertObj,
	        invoker: invoker,
	        is: is,
	        isArrayLike: isArrayLike,
	        isEmpty: isEmpty,
	        isNil: isNil,
	        join: join,
	        juxt: juxt,
	        keys: keys,
	        keysIn: keysIn,
	        last: last,
	        lastIndexOf: lastIndexOf,
	        length: length,
	        lens: lens,
	        lensIndex: lensIndex,
	        lensPath: lensPath,
	        lensProp: lensProp,
	        lift: lift,
	        liftN: liftN,
	        lt: lt,
	        lte: lte,
	        map: map,
	        mapAccum: mapAccum,
	        mapAccumRight: mapAccumRight,
	        mapObjIndexed: mapObjIndexed,
	        match: match,
	        mathMod: mathMod,
	        max: max,
	        maxBy: maxBy,
	        mean: mean,
	        median: median,
	        memoize: memoize,
	        merge: merge,
	        mergeAll: mergeAll,
	        mergeWith: mergeWith,
	        mergeWithKey: mergeWithKey,
	        min: min,
	        minBy: minBy,
	        modulo: modulo,
	        multiply: multiply,
	        nAry: nAry,
	        negate: negate,
	        none: none,
	        not: not,
	        nth: nth,
	        nthArg: nthArg,
	        objOf: objOf,
	        of: of,
	        omit: omit,
	        once: once,
	        or: or,
	        over: over,
	        pair: pair,
	        partial: partial,
	        partialRight: partialRight,
	        partition: partition,
	        path: path,
	        pathEq: pathEq,
	        pathOr: pathOr,
	        pathSatisfies: pathSatisfies,
	        pick: pick,
	        pickAll: pickAll,
	        pickBy: pickBy,
	        pipe: pipe,
	        pipeK: pipeK,
	        pipeP: pipeP,
	        pluck: pluck,
	        prepend: prepend,
	        product: product,
	        project: project,
	        prop: prop,
	        propEq: propEq,
	        propIs: propIs,
	        propOr: propOr,
	        propSatisfies: propSatisfies,
	        props: props,
	        range: range,
	        reduce: reduce,
	        reduceBy: reduceBy,
	        reduceRight: reduceRight,
	        reduced: reduced,
	        reject: reject,
	        remove: remove,
	        repeat: repeat,
	        replace: replace,
	        reverse: reverse,
	        scan: scan,
	        sequence: sequence,
	        set: set,
	        slice: slice,
	        sort: sort,
	        sortBy: sortBy,
	        split: split,
	        splitAt: splitAt,
	        splitEvery: splitEvery,
	        splitWhen: splitWhen,
	        subtract: subtract,
	        sum: sum,
	        symmetricDifference: symmetricDifference,
	        symmetricDifferenceWith: symmetricDifferenceWith,
	        tail: tail,
	        take: take,
	        takeLast: takeLast,
	        takeLastWhile: takeLastWhile,
	        takeWhile: takeWhile,
	        tap: tap,
	        test: test,
	        times: times,
	        toLower: toLower,
	        toPairs: toPairs,
	        toPairsIn: toPairsIn,
	        toString: toString,
	        toUpper: toUpper,
	        transduce: transduce,
	        transpose: transpose,
	        traverse: traverse,
	        trim: trim,
	        tryCatch: tryCatch,
	        type: type,
	        unapply: unapply,
	        unary: unary,
	        uncurryN: uncurryN,
	        unfold: unfold,
	        union: union,
	        unionWith: unionWith,
	        uniq: uniq,
	        uniqBy: uniqBy,
	        uniqWith: uniqWith,
	        unless: unless,
	        unnest: unnest,
	        until: until,
	        update: update,
	        useWith: useWith,
	        values: values,
	        valuesIn: valuesIn,
	        view: view,
	        when: when,
	        where: where,
	        whereEq: whereEq,
	        without: without,
	        wrap: wrap,
	        xprod: xprod,
	        zip: zip,
	        zipObj: zipObj,
	        zipWith: zipWith
	    };
	  /* eslint-env amd */

	  /* TEST_ENTRY_POINT */

	  if (true) {
	    module.exports = R;
	  } else if (typeof define === 'function' && define.amd) {
	    define(function() { return R; });
	  } else {
	    this.R = R;
	  }

	}.call(this));


/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(289);
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

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.i(__webpack_require__(290), undefined);

	// module
	exports.push([module.id, ".container__containers-AtLogin-styles__3Nqgv {\r\n  position: relative;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex: 1;\r\n      flex: 1;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n.logo__containers-AtLogin-styles__2gjx2 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 40px;\r\n}\r\n.loginFormContainer__containers-AtLogin-styles__3kjqO {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  margin-bottom: 130px;\r\n  width: 666px;\r\n}\r\n.heading__containers-AtLogin-styles__2v-5U {\r\n  margin-bottom: 20px;\r\n  font-weight: normal;\r\n  font-size: 32px;\r\n  font-size: 2rem;\r\n}\r\n.subHeading__containers-AtLogin-styles__10nJy {\r\n  margin-bottom: 55px;\r\n  font-size: 24px;\r\n  font-size: 1.5rem;\r\n}\r\n.loginForm__containers-AtLogin-styles__31E3y {\r\n  width: 585px;\r\n}\r\n.urlLabel__containers-AtLogin-styles__3Aveb {\r\n  display: block;\r\n  margin-bottom: 12px;\r\n  font-size: 16px;\r\n  font-size: 1rem;\r\n}\r\n.urlInput__containers-AtLogin-styles__3LFyW {\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n  height: 48px;\r\n  outline: 0;\r\n  border: 1px solid #bfbfbf;\r\n  border-radius: 5px;\r\n  font-size: 19.2px;\r\n  font-size: 1.2rem;\r\n  background-color: white;\r\n}\r\n.urlInput__containers-AtLogin-styles__3LFyW:disabled {\r\n  background-color: rgb(230, 230, 230);\r\n  color: #5c5c5c;\r\n}\r\n.urlError__containers-AtLogin-styles__1mq1F {\r\n  min-height: 36px;\r\n}\r\n.credentials__containers-AtLogin-styles__ambnJ {\r\n  margin-bottom: 50px;\r\n}\r\n.credentialsRow__containers-AtLogin-styles__3gA4z {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.credentialsErrorRow__containers-AtLogin-styles__3r3bg {\r\n  padding-left: 86px;\r\n  min-height: 22px;\r\n}\r\n.credentialsLabel__containers-AtLogin-styles__9pNmC {\r\n  display: block;\r\n  width: 86px;\r\n}\r\n.credentialsInput__containers-AtLogin-styles__1klyV {\r\n  margin-bottom: 0;\r\n  width: 265px;\r\n  font-size: 16px;\r\n  font-size: 1rem;\r\n}\r\n.loginButton__containers-AtLogin-styles__3wWuY {\r\n  margin-left: auto;\r\n  width: 170px;\r\n  height: 48px;\r\n}\r\n.dashedLine__containers-AtLogin-styles__3cqj4 {\r\n  margin: 0;\r\n  margin-bottom: 24px;\r\n  border: 0;\r\n  border-bottom: 2px dashed #bfbfbf;\r\n}\r\n.forgotPassword__containers-AtLogin-styles__2Qlfd {\r\n  font-size: 14px;\r\n  color: #7d7d7d;\r\n}\r\n#root {\r\n  background-color: #f8f8f8;\r\n  background-color: #f8f8f8;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"container": "container__containers-AtLogin-styles__3Nqgv",
		"logo": "logo__containers-AtLogin-styles__2gjx2",
		"loginFormContainer": "loginFormContainer__containers-AtLogin-styles__3kjqO",
		"heading": "heading__containers-AtLogin-styles__2v-5U",
		"subHeading": "subHeading__containers-AtLogin-styles__10nJy",
		"loginForm": "loginForm__containers-AtLogin-styles__31E3y",
		"urlLabel": "urlLabel__containers-AtLogin-styles__3Aveb",
		"urlInput": "urlInput__containers-AtLogin-styles__3LFyW",
		"urlError": "urlError__containers-AtLogin-styles__1mq1F",
		"credentials": "credentials__containers-AtLogin-styles__ambnJ",
		"credentialsRow": "credentialsRow__containers-AtLogin-styles__3gA4z",
		"credentialsErrorRow": "credentialsErrorRow__containers-AtLogin-styles__3r3bg credentialsRow__containers-AtLogin-styles__3gA4z",
		"credentialsLabel": "credentialsLabel__containers-AtLogin-styles__9pNmC",
		"credentialsInput": "credentialsInput__containers-AtLogin-styles__1klyV urlInput__containers-AtLogin-styles__3LFyW",
		"loginButton": "loginButton__containers-AtLogin-styles__3wWuY " + __webpack_require__(290).locals["primaryButton"] + "",
		"dashedLine": "dashedLine__containers-AtLogin-styles__3cqj4",
		"forgotPassword": "forgotPassword__containers-AtLogin-styles__2Qlfd"
	};

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".primaryButton__styles-buttons__2vOIF {\r\n  border: 1px solid #bfbfbf;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  box-shadow: 0 3px 0 0 #e6e6e6;\r\n  color: #067afb;\r\n  font-size: 19.2px;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n.primaryButton__styles-buttons__2vOIF:hover, .primaryButton__styles-buttons__2vOIF:focus {\r\n  border: 1px solid #067afb;\r\n  background-color: #067afb;\r\n  color: white;\r\n}\r\n.primaryButton__styles-buttons__2vOIF:active {\r\n  box-shadow: none;\r\n  transform: translateY(3px);\r\n}\r\n.primaryButton__styles-buttons__2vOIF:focus {\r\n  outline: 0;\r\n}\r\n.primaryButton__styles-buttons__2vOIF:disabled {\r\n  background-color: #bfbfbf;\r\n  color: #5c5c5c;\r\n  transform: translateY(3px);\r\n  box-shadow: none;\r\n  border-color: #bfbfbf;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"primaryButton": "primaryButton__styles-buttons__2vOIF"
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

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAAxCAYAAABqO23/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQwODRDQjQwMEE0MTFFNjk1MTRGQ0U1MDBCQ0I0NEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQwODRDQjMwMEE0MTFFNjk1MTRGQ0U1MDBCQ0I0NEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmRpZDpEQjM5ODI3QjkwMDBFNjExQjA2Rjg4M0REMTNBRjhDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQjM5ODI3QjkwMDBFNjExQjA2Rjg4M0REMTNBRjhDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlU1PZUAAA8hSURBVHja7F0LcFTVGf7zJoKRTUV5GJEFlZGxY7sgWtP6Ch0cHRnFhIyOVm1nMyCtM1LYMPXBo4yJVsbX1CZDq2MHRrM4FhR1zIJQWx80q1ArWoFFpWBQJguRENiQpP+/+5/sycm5d+9u9kE295/55+7ee+7Zc8/9v/M/zjn/5oS2XwdDnQpmbAabbEoW5dpdYJNN/Sk/SfWMQb6a+VLkKchLkNfRxV99+tyNeGhA3oO8A3kb8Zpp89vsV2BTNoEiD3ke8p3Isy2Un8BMwLmfwbKJgIPgWJfpjnC5XJn42RZkB/J05KAtjpkhv9+fFPOJRv5/I6+1CAizetYiOD5lbTKciVDZa5F1ZZukuto058yoUqnbaps8tk8RMY22Ir+OfEkS20F1vY7A2Ip8WZb1sRO52UCASENMZi1Bw1WOwkFm9bwo65XqqTIQdpdFUJiRV9MG4vrhDorbkD9k88eMvkbeyP6DfI5MpE9i3Et1v4fAuD3LNEBFBn43YFHgXVzGNt/iBMXDPFoUG1wn5/kR5B8iT0Seg7xdXESf4RPkO5Dp+jjkGuRNBnUVs0n1qP16Bm8uI7stagm/3V3WHO089hvmGVzfhbyUNQNc+9CFZ+PhJr5WgNw18PPq7e+s3N2IHxpR8Mkce8zAL6nF6xfTS0MwdaexT+p4ZJfNjkYGso48GjOlhoWsRam3TjJ3/Gz7E5Wm4Dkc3O46bmO9QRk3D3iBDGm0IQeKZwwA0Ym8iDodgUAO1/X8YluRN6PQd+oqw7JFJDx4JDPpKAJkC5a9AYWfvr+IfL5yyy3IpDGWpKk/HCzcjcxiJG3ia6rd3syCVMuCDixkTr4/R7q/NgM2eD23x23w225+Lq9F32PYg4I6bL7mfKswj1C4r8BjGQMh5pwDljlJPgMD5EwSejy2vrNy/jYExkx+OeXKbYvxGplff01Df5BdPUvjZPpYuJ2SrS40So0EIFA+nw7klbSZV/OO/TYorPkUFA16UnOeHOXpKMgtyDSKf4uC7rUCCA1Avqd78eOXWNfcvS+tPswa52VN8TUIjEy+NL8USZIFKnAagkCnLYIa30JoNK/F6JQuJOsYTqBo0DjV35GGQAE+gse5yG+gUAcG2wCsYz8eNpDWQGCcgce7kP+hFCtkYOSlqV88rAmaoH88XghBBX/2DYF3HOR2qn6SALUVk84oJBscLqCYpzFhQjRaICC+Yjv/VTaFkkJY1yk8vEJOOgKjB4+3QiSMKxPNX9yf4v5wsfMrQBAAfTzeIQncUKB6CQggAcQLNlkCxe8051ZAZL0SAeJ1FuKkEtZJYHiVnFn0H0gr3aEpRv5FcQr7o4kFfTI7xrVZ8p79zJVSxCkIWTr5lmxQUGj0UuXcAeSnUEtQdOVjFN4jqWoM1t1B4MPf+gkCg0yojUqRscipmthzMvs1GsBh4GMMJee0np9DON0+sCfsLEWffqkpswqF9DgeS1Fo++LueC5VwDiAdU9Dzp9cHZ4DoTVReUob/5zCPnFovquzwgE2PSrZFPHFsOnhNHBKxVyEWzGpbDLRFMUsgDK1cnTlWpBmqFNAND9xufT9XRI21Ba72KSS6Uo0oc5PQRsCkkPqlrSH0aI6MUHXpER23BCdpANpRD4dJsYaGZx+sGewLYHiShgYcaL1SjSbPNrAbCoE46UfVog0wGIGQbGkLWjyrwi1BbVPNz+RqhW1VTyiUvSNok4tLNSNBhpgOl8T5XulqI4KIAfoV6Imqs16JQ3WAtZWxDYm6EsYhWRbst180i30a0bBpNHyC4P71/B9SxlA8VA5CxMRzU/sUa7TnMg0iMwadysmFAH4uRT0RxD0q03BxOm24pB7DSI9sZZ3lJq0MyfB+0rjeA5/jN/Jek1xsXKtmyNOU01A8SDyMYisj6LR3sqyb3opz3N5CrvO1AACeA5kCppQnRpVf6mt5G3KBChIYEkgC0zmJKjMTxk8NPJ/DJH1UqMMyt+NvJuPqyGyePCYSft6+Phf5fwU+9XZlA7z6XFFmFst1kGTXT9nU4iEfSFE5jMWQDSkeglfL+fyc2BguFVHYnXss6DMctPsdppXz9o0DEExmH3SNON9D0T2VdBScNqLTUs31rM2WchO+fvI1TBwttrMEaf9GBT52m6/LpvSDYpk0FMsvF4Gxm2KJnqQAWSTTcMGFMDagEKVtER8Ep+rZK0xgIpufK3f99kfyN8u7J79weemP/bWFVPtt2hTakCx4tt2ys4hR3UOPHxOyXkJ1kv+SA3X950KiEm/2DGKHfsxAGViIu4syYGmOYtLeqr/Mzq3qGwlRKJaIgr13MHD+9fZr86mdGiKXQooJiBQwjFtmkTjBXvxUDOzDIZJ7HDPslJBblG/dYfF7KiXjz+7rByBscB+fTalFhS9A8KeRDQxtxMik2j9MnEgSOL6oXv3dJBm+JA1wmBpPgJjIwLjrRT2jchyoaamEVtVdcskxD4MlcSseKyl2jRTrW7YonuqbFFNH8nzFFs012/mSbSLkvBbvzcCRHf3Keg82QEnQp3Q02M5ynpbCvuFBLuFgUH+kdhUQ5+dfM0sEVitdI+YQVbXSOlIzFTHyudklaiNe4ewfJrlzEoLKLaz3d5P8FYcaif7v5P3VA+GtJkECQSdJzvhN+WPwt3Tl0Ao1AWhLkv7l8amqE88EM1+MUvRCH4+Vw/RLBlgQdCr+JjujHpi/8RQpYzkzOoDxcPnlnTCwAgRAeIB5LcH0zg0nUaBwSx36FQI7p1ZC1dNugFmT62Gx29ugh8Ujw1rjQy9hDoW/toYmsDPQu6wCAwx8mXlvuZsNZ+gtxdeQAaFF19zn5/yObWhtihL8HcM91YX5hfC+p0NsPNgOMkHlI2eDE/MWQ/lF9wQNqnItEojxbPXwAvRXWxWKQiJb+wRK2ObWAM0Q3S1ajP0X3kr9pa7oP/q3CaNJpHraTF5HjdfV8u2aPygNulcs/LbTh542qS62hQt6lLuqQPjFcbCRDSqSy4n9ttXSr/vMgXFI2NLyK/YptEWy9G3oPNXITBGJhWVuXkQ6u2EVb75sO6jp6GntxsK80bAwvJVYZOqu7vHqjmVDKpgobWyd9kn3WPVjElG5g+hzWoVP6dZ0kJVEM05K+eirVKERAidnKO2QQMMD58PSGVFojVnDN+sQtN+B5uhal0eyUyV21urtFFQi2TqyvltPaBEPhVqMNPYuj3ai3SjxPLW9jvZvLqF9zkkRORDkGn0/fGjcKyzPfw5NycXiotGwsZdL8BDb94Nhzu+CZclk+qJm1+BCWc62ZzqTSUgHPyCrY7kAWnkiwWIOgZRMna7OVlY/JIA1ceptZwsOMJHElTDz1WnAaFPAZXImuiI8ezTFQH3QnSDlmyOBuPUug3ctiplsKnn+ioMIoEiI6IOZHpQoLagQtrcS2hG/RgiGcfvQWAktLmIfIi7XL+F56v/Dk/f8lr4M53LycmBEYXFEAjuggc2zIV/ff1OuPy4kvPh0ZvWwuyLqhEYJ9KhLYIJgEk3QqomS7L2ROt2zfkkAbZqJhppLmEWViiasN6gbMCkX4xC10aDTDz+lthnrtsKLDZTGSWXrrHsU0hEm4aOquY/AQKBQeHZl5BvR2CMi/eNnjrVBa7zfgYlI0phfMkF4c90TlBRwQjo6jkJDe+vhLbjh8Ln8nMLoPpHC2Hi6IuguyflC2PjdYQDBo54jsY8aEmCox1IApBdCph0dbkUUPgTGEQaTfpY5NZtVvwfK/0j8m75YwweusBGTNNYCwrUFvuwmTWaDYhjkLdes8B/K/oYlDxgKmUKjMfPKCwogk2frYW9hz+FHQf+Gf5M58KAQaf6+IkOuLzsetQiG6D0jHPD5/cf2QuLX6uCr458AXm5KcuHJpxgq0LrNBFSlYRKd8Hp8Ucn4hn3wsAtpnWDHCRiBRU87ORWSMDMgfj2jMcT8Yt7ADFcEPjIuJKXl3/TfpkmNElm04t4rRzBsXTrH12UluZ6Tp68X874YQQK324vvIlgIJMpP68gfO5k1wnIgwJYdPUfYObEqG+2ZfffoBG1Rm5exLxKMXnZtKi0MKLEGkEH45ini0ohvWlunJJ/MmuQA1iyNX5sUDAwlqLwU/RpoYFdOg+BQUvCV2NZmuArQ6YNRP1snMLRJ0ZOmPN5P2AI7SAc72nnzID7ylf0aYdQ94kwGN7d9wYUFhalUkOo6t4tOWOxbNpEcsmeDrmW/Ky1XBA79Wesss44frfCxGyLR4gDFnwoF5cLJhUUDIxfL/umndZFUcJlVTJp2QYt33gAy6y/eoGfdtNtXjaupN8W03v3dJxl5njTTDZN3Ak6cHQfPLblfjjU8T8oLjoj3cIigOExiRaJyEdNHJ1uJhCpNAmFnR5UtJYAf6z2+CTt6dOYQo4kAL3SAFxGObNi5d0SgYSEon2WQqso5LQd9CaN8y2rYTdHpr5HgOxeFtEwfbJvVDdpgM8OfRSenyB6/8u3w/7Dd8cPpsNcMopMCMe4SXlZYrLLDQNT8JuRB5IblrVKPqndqpnYCNH/ztC1VS4rgFGnlPNY9KnUaJVbGuVFyDpo0H6jnFkirKvOq4j2e1MKCgbGW+iGTUfeZOH/O6cg92mVv0wZSZMM+3T1FuQXwof7ffCn95bDmg9WwZPvLkH/IbfPvDKhUIqBIf7Gd6/ihPp5EDADRJ3SI272zWLZ0YnmczJz8OU8Vk3KMwrnX/3nVVXQZ3FZj1Iu3r86FuvAAhCdHfdw3QGTd6HLmSXybnmV/q7k5054IWVOaPt1cd+07GA7LSmnvdiXmxQrWja+JCSZUMsh8t95WupCM6q3t9cKGPoE7+Dh/Utp513BjM2DRoGF/9EWq2arwM7WLZNYhTt5qD5AUv5HG4V9G/JMNqnWwcC1LyADgmkVmGTwII0RByBI8zyb5r4TI1yspQ3DiYS/4sumhxrUHm0UfPqH002sPWaxmqV0NgOWdaMJRSCZgxqDlovQMvKLudyEOH82nKYftcSBNPdVgJ9P7CislTSGM07bOlvIbYPCHCADtp/qCMFBuWH78sOKxATjzy6TATJBAhbt4R4jRYfWIyDaMtRfATYT6hT7vCqLQeHgZ1WDBMLBrc82czI/0w1AMIiPrRBNwOa3eE+mKJv+0MWKc+zXRKV8EF8EbshQDjm3NtlkU5T+L8AANCERzwF3LrAAAAAASUVORK5CYII="

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalTooltip = undefined;

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

	var _styles = __webpack_require__(294);

	var _styles2 = _interopRequireDefault(_styles);

	var _Icon = __webpack_require__(296);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ModalTooltip = exports.ModalTooltip = function (_Component) {
	  (0, _inherits3.default)(ModalTooltip, _Component);

	  function ModalTooltip() {
	    (0, _classCallCheck3.default)(this, ModalTooltip);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalTooltip).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ModalTooltip, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        { className: _styles2.default.tooltipTrigger },
	        _react2.default.createElement(_Icon2.default, { type: 'question' })
	      );
	    }
	  }]);
	  return ModalTooltip;
	}(_react.Component);

	exports.default = ModalTooltip;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(295);
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

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".tooltipTrigger__components-ModalTooltip-styles__2tEAK {\r\n  color: #067afb;\r\n  color: #067afb;\r\n  cursor: pointer;\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"tooltipTrigger": "tooltipTrigger__components-ModalTooltip-styles__2tEAK"
	};

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Icon = undefined;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(297);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Icon = exports.Icon = function Icon(props) {
	  return _react2.default.createElement('i', { className: _styles2.default[props.type] });
	};

	Icon.propTypes = {
	  type: _react.PropTypes.string
	};

	exports.default = Icon;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\Programming\\Work\\actiTIME\\QbIntegrator-NewEra\\src\\actitime_qb\\src\\ATQB.WebApp\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(298);
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

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.i(__webpack_require__(299), undefined);

	// module
	exports.push([module.id, ".common__components-Icon-styles__1A8tD {\r\n  display: inline-block;\r\n}\r\n\r\n.clock__components-Icon-styles__nbm4M {\r\n}\r\n\r\n.question__components-Icon-styles__2mwg3 {\r\n}\r\n", ""]);

	// exports
	exports.locals = {
		"common": "common__components-Icon-styles__1A8tD",
		"clock": "clock__components-Icon-styles__nbm4M common__components-Icon-styles__1A8tD " + __webpack_require__(299).locals["fa"] + " " + __webpack_require__(299).locals["fa-clock-o"] + "",
		"question": "question__components-Icon-styles__2mwg3 common__components-Icon-styles__1A8tD " + __webpack_require__(299).locals["fa"] + " " + __webpack_require__(299).locals["fa-question-circle"] + ""
	};

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(300) + ");\n  src: url(" + __webpack_require__(301) + "?#iefix&v=4.6.3) format('embedded-opentype'), url(" + __webpack_require__(302) + ") format('woff2'), url(" + __webpack_require__(303) + ") format('woff'), url(" + __webpack_require__(304) + ") format('truetype'), url(" + __webpack_require__(305) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa___-node_modules-font-awesome-css-font-awesome__3u8n_ {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg___-node_modules-font-awesome-css-font-awesome__11RRx {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x___-node_modules-font-awesome-css-font-awesome__1hrD5 {\n  font-size: 2em;\n}\n.fa-3x___-node_modules-font-awesome-css-font-awesome__2OKJ0 {\n  font-size: 3em;\n}\n.fa-4x___-node_modules-font-awesome-css-font-awesome__aigiu {\n  font-size: 4em;\n}\n.fa-5x___-node_modules-font-awesome-css-font-awesome__1IXB- {\n  font-size: 5em;\n}\n.fa-fw___-node_modules-font-awesome-css-font-awesome__1uVEy {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul___-node_modules-font-awesome-css-font-awesome__2V1V0 {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul___-node_modules-font-awesome-css-font-awesome__2V1V0 > li {\n  position: relative;\n}\n.fa-li___-node_modules-font-awesome-css-font-awesome__1Mfos {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li___-node_modules-font-awesome-css-font-awesome__1Mfos.fa-lg___-node_modules-font-awesome-css-font-awesome__11RRx {\n  left: -1.85714286em;\n}\n.fa-border___-node_modules-font-awesome-css-font-awesome__1Mk3g {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left___-node_modules-font-awesome-css-font-awesome__2lpmn {\n  float: left;\n}\n.fa-pull-right___-node_modules-font-awesome-css-font-awesome__3RqVX {\n  float: right;\n}\n.fa___-node_modules-font-awesome-css-font-awesome__3u8n_.fa-pull-left___-node_modules-font-awesome-css-font-awesome__2lpmn {\n  margin-right: .3em;\n}\n.fa___-node_modules-font-awesome-css-font-awesome__3u8n_.fa-pull-right___-node_modules-font-awesome-css-font-awesome__3RqVX {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right___-node_modules-font-awesome-css-font-awesome__1Iw7t {\n  float: right;\n}\n.pull-left___-node_modules-font-awesome-css-font-awesome__1z29B {\n  float: left;\n}\n.fa___-node_modules-font-awesome-css-font-awesome__3u8n_.pull-left___-node_modules-font-awesome-css-font-awesome__1z29B {\n  margin-right: .3em;\n}\n.fa___-node_modules-font-awesome-css-font-awesome__3u8n_.pull-right___-node_modules-font-awesome-css-font-awesome__1Iw7t {\n  margin-left: .3em;\n}\n.fa-spin___-node_modules-font-awesome-css-font-awesome__1JyiK {\n  animation: fa-spin___-node_modules-font-awesome-css-font-awesome__1JyiK 2s infinite linear;\n}\n.fa-pulse___-node_modules-font-awesome-css-font-awesome__11S0- {\n  animation: fa-spin___-node_modules-font-awesome-css-font-awesome__1JyiK 1s infinite steps(8);\n}\n@keyframes fa-spin___-node_modules-font-awesome-css-font-awesome__1JyiK {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90___-node_modules-font-awesome-css-font-awesome__3WSlk {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg);\n}\n.fa-rotate-180___-node_modules-font-awesome-css-font-awesome__2JFoA {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg);\n}\n.fa-rotate-270___-node_modules-font-awesome-css-font-awesome__OV5QL {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal___-node_modules-font-awesome-css-font-awesome__2JxPH {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical___-node_modules-font-awesome-css-font-awesome__18fZQ {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90___-node_modules-font-awesome-css-font-awesome__3WSlk,\n:root .fa-rotate-180___-node_modules-font-awesome-css-font-awesome__2JFoA,\n:root .fa-rotate-270___-node_modules-font-awesome-css-font-awesome__OV5QL,\n:root .fa-flip-horizontal___-node_modules-font-awesome-css-font-awesome__2JxPH,\n:root .fa-flip-vertical___-node_modules-font-awesome-css-font-awesome__18fZQ {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack___-node_modules-font-awesome-css-font-awesome__2DfI1 {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x___-node_modules-font-awesome-css-font-awesome__TLjzC,\n.fa-stack-2x___-node_modules-font-awesome-css-font-awesome__aygg6 {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x___-node_modules-font-awesome-css-font-awesome__TLjzC {\n  line-height: inherit;\n}\n.fa-stack-2x___-node_modules-font-awesome-css-font-awesome__aygg6 {\n  font-size: 2em;\n}\n.fa-inverse___-node_modules-font-awesome-css-font-awesome__3_cNy {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass___-node_modules-font-awesome-css-font-awesome__3XHqM:before {\n  content: \"\\F000\";\n}\n.fa-music___-node_modules-font-awesome-css-font-awesome__1UKwb:before {\n  content: \"\\F001\";\n}\n.fa-search___-node_modules-font-awesome-css-font-awesome__1-k1v:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o___-node_modules-font-awesome-css-font-awesome__2WraD:before {\n  content: \"\\F003\";\n}\n.fa-heart___-node_modules-font-awesome-css-font-awesome__3X2zt:before {\n  content: \"\\F004\";\n}\n.fa-star___-node_modules-font-awesome-css-font-awesome__EQLL1:before {\n  content: \"\\F005\";\n}\n.fa-star-o___-node_modules-font-awesome-css-font-awesome__2-1gQ:before {\n  content: \"\\F006\";\n}\n.fa-user___-node_modules-font-awesome-css-font-awesome__1mgL3:before {\n  content: \"\\F007\";\n}\n.fa-film___-node_modules-font-awesome-css-font-awesome__2MkXe:before {\n  content: \"\\F008\";\n}\n.fa-th-large___-node_modules-font-awesome-css-font-awesome__cnPHE:before {\n  content: \"\\F009\";\n}\n.fa-th___-node_modules-font-awesome-css-font-awesome__1S3Oy:before {\n  content: \"\\F00A\";\n}\n.fa-th-list___-node_modules-font-awesome-css-font-awesome__14Xfy:before {\n  content: \"\\F00B\";\n}\n.fa-check___-node_modules-font-awesome-css-font-awesome__p_qCp:before {\n  content: \"\\F00C\";\n}\n.fa-remove___-node_modules-font-awesome-css-font-awesome__37-Sq:before,\n.fa-close___-node_modules-font-awesome-css-font-awesome__2e2Fg:before,\n.fa-times___-node_modules-font-awesome-css-font-awesome__3muvp:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus___-node_modules-font-awesome-css-font-awesome__3uLe6:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus___-node_modules-font-awesome-css-font-awesome__3dtNP:before {\n  content: \"\\F010\";\n}\n.fa-power-off___-node_modules-font-awesome-css-font-awesome__Jx_AW:before {\n  content: \"\\F011\";\n}\n.fa-signal___-node_modules-font-awesome-css-font-awesome__2Esgq:before {\n  content: \"\\F012\";\n}\n.fa-gear___-node_modules-font-awesome-css-font-awesome__3HjIm:before,\n.fa-cog___-node_modules-font-awesome-css-font-awesome__DnzAR:before {\n  content: \"\\F013\";\n}\n.fa-trash-o___-node_modules-font-awesome-css-font-awesome__2EkWM:before {\n  content: \"\\F014\";\n}\n.fa-home___-node_modules-font-awesome-css-font-awesome__1xcss:before {\n  content: \"\\F015\";\n}\n.fa-file-o___-node_modules-font-awesome-css-font-awesome__43lmV:before {\n  content: \"\\F016\";\n}\n.fa-clock-o___-node_modules-font-awesome-css-font-awesome__34dUR:before {\n  content: \"\\F017\";\n}\n.fa-road___-node_modules-font-awesome-css-font-awesome__2tKN6:before {\n  content: \"\\F018\";\n}\n.fa-download___-node_modules-font-awesome-css-font-awesome__3jVK_:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down___-node_modules-font-awesome-css-font-awesome__3zRXZ:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up___-node_modules-font-awesome-css-font-awesome__2cmuw:before {\n  content: \"\\F01B\";\n}\n.fa-inbox___-node_modules-font-awesome-css-font-awesome__1KIcv:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o___-node_modules-font-awesome-css-font-awesome__1N2YM:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right___-node_modules-font-awesome-css-font-awesome__2Ee-z:before,\n.fa-repeat___-node_modules-font-awesome-css-font-awesome__1DCpu:before {\n  content: \"\\F01E\";\n}\n.fa-refresh___-node_modules-font-awesome-css-font-awesome__1XQ90:before {\n  content: \"\\F021\";\n}\n.fa-list-alt___-node_modules-font-awesome-css-font-awesome__90jkA:before {\n  content: \"\\F022\";\n}\n.fa-lock___-node_modules-font-awesome-css-font-awesome__2aD-e:before {\n  content: \"\\F023\";\n}\n.fa-flag___-node_modules-font-awesome-css-font-awesome__3lSrk:before {\n  content: \"\\F024\";\n}\n.fa-headphones___-node_modules-font-awesome-css-font-awesome__205cL:before {\n  content: \"\\F025\";\n}\n.fa-volume-off___-node_modules-font-awesome-css-font-awesome__eQlMc:before {\n  content: \"\\F026\";\n}\n.fa-volume-down___-node_modules-font-awesome-css-font-awesome__2GJeI:before {\n  content: \"\\F027\";\n}\n.fa-volume-up___-node_modules-font-awesome-css-font-awesome__3Z_I0:before {\n  content: \"\\F028\";\n}\n.fa-qrcode___-node_modules-font-awesome-css-font-awesome__2kjAj:before {\n  content: \"\\F029\";\n}\n.fa-barcode___-node_modules-font-awesome-css-font-awesome__e9aMe:before {\n  content: \"\\F02A\";\n}\n.fa-tag___-node_modules-font-awesome-css-font-awesome__19gLs:before {\n  content: \"\\F02B\";\n}\n.fa-tags___-node_modules-font-awesome-css-font-awesome__2MPPR:before {\n  content: \"\\F02C\";\n}\n.fa-book___-node_modules-font-awesome-css-font-awesome__1U1TO:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark___-node_modules-font-awesome-css-font-awesome__1_a0N:before {\n  content: \"\\F02E\";\n}\n.fa-print___-node_modules-font-awesome-css-font-awesome__16gPR:before {\n  content: \"\\F02F\";\n}\n.fa-camera___-node_modules-font-awesome-css-font-awesome__g6YVj:before {\n  content: \"\\F030\";\n}\n.fa-font___-node_modules-font-awesome-css-font-awesome__2ggUl:before {\n  content: \"\\F031\";\n}\n.fa-bold___-node_modules-font-awesome-css-font-awesome__RbuLB:before {\n  content: \"\\F032\";\n}\n.fa-italic___-node_modules-font-awesome-css-font-awesome__2UFcL:before {\n  content: \"\\F033\";\n}\n.fa-text-height___-node_modules-font-awesome-css-font-awesome__2CMkM:before {\n  content: \"\\F034\";\n}\n.fa-text-width___-node_modules-font-awesome-css-font-awesome__ry56R:before {\n  content: \"\\F035\";\n}\n.fa-align-left___-node_modules-font-awesome-css-font-awesome__3xrKt:before {\n  content: \"\\F036\";\n}\n.fa-align-center___-node_modules-font-awesome-css-font-awesome__3rUC_:before {\n  content: \"\\F037\";\n}\n.fa-align-right___-node_modules-font-awesome-css-font-awesome__3vbdk:before {\n  content: \"\\F038\";\n}\n.fa-align-justify___-node_modules-font-awesome-css-font-awesome__mkmOk:before {\n  content: \"\\F039\";\n}\n.fa-list___-node_modules-font-awesome-css-font-awesome__1KRby:before {\n  content: \"\\F03A\";\n}\n.fa-dedent___-node_modules-font-awesome-css-font-awesome__GI3th:before,\n.fa-outdent___-node_modules-font-awesome-css-font-awesome__1m6-B:before {\n  content: \"\\F03B\";\n}\n.fa-indent___-node_modules-font-awesome-css-font-awesome__f1kQi:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera___-node_modules-font-awesome-css-font-awesome__22IMa:before {\n  content: \"\\F03D\";\n}\n.fa-photo___-node_modules-font-awesome-css-font-awesome__2-F-o:before,\n.fa-image___-node_modules-font-awesome-css-font-awesome__3jcqT:before,\n.fa-picture-o___-node_modules-font-awesome-css-font-awesome__3KXow:before {\n  content: \"\\F03E\";\n}\n.fa-pencil___-node_modules-font-awesome-css-font-awesome__1POPa:before {\n  content: \"\\F040\";\n}\n.fa-map-marker___-node_modules-font-awesome-css-font-awesome__2GfdR:before {\n  content: \"\\F041\";\n}\n.fa-adjust___-node_modules-font-awesome-css-font-awesome__Rkvuf:before {\n  content: \"\\F042\";\n}\n.fa-tint___-node_modules-font-awesome-css-font-awesome__1Cv39:before {\n  content: \"\\F043\";\n}\n.fa-edit___-node_modules-font-awesome-css-font-awesome__1Og2o:before,\n.fa-pencil-square-o___-node_modules-font-awesome-css-font-awesome__1ueGZ:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o___-node_modules-font-awesome-css-font-awesome__2iYcu:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o___-node_modules-font-awesome-css-font-awesome__1jlVw:before {\n  content: \"\\F046\";\n}\n.fa-arrows___-node_modules-font-awesome-css-font-awesome__2oAlH:before {\n  content: \"\\F047\";\n}\n.fa-step-backward___-node_modules-font-awesome-css-font-awesome__29frd:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward___-node_modules-font-awesome-css-font-awesome__2w09x:before {\n  content: \"\\F049\";\n}\n.fa-backward___-node_modules-font-awesome-css-font-awesome__3kqtA:before {\n  content: \"\\F04A\";\n}\n.fa-play___-node_modules-font-awesome-css-font-awesome__2G5eE:before {\n  content: \"\\F04B\";\n}\n.fa-pause___-node_modules-font-awesome-css-font-awesome__1t0be:before {\n  content: \"\\F04C\";\n}\n.fa-stop___-node_modules-font-awesome-css-font-awesome__33gIQ:before {\n  content: \"\\F04D\";\n}\n.fa-forward___-node_modules-font-awesome-css-font-awesome__1bvwf:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward___-node_modules-font-awesome-css-font-awesome__29QV-:before {\n  content: \"\\F050\";\n}\n.fa-step-forward___-node_modules-font-awesome-css-font-awesome__2ui4q:before {\n  content: \"\\F051\";\n}\n.fa-eject___-node_modules-font-awesome-css-font-awesome__16jGf:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left___-node_modules-font-awesome-css-font-awesome__3Z8K0:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right___-node_modules-font-awesome-css-font-awesome__1cVmN:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle___-node_modules-font-awesome-css-font-awesome__2x-X6:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle___-node_modules-font-awesome-css-font-awesome__1jOI2:before {\n  content: \"\\F056\";\n}\n.fa-times-circle___-node_modules-font-awesome-css-font-awesome__3Zc31:before {\n  content: \"\\F057\";\n}\n.fa-check-circle___-node_modules-font-awesome-css-font-awesome__v6klV:before {\n  content: \"\\F058\";\n}\n.fa-question-circle___-node_modules-font-awesome-css-font-awesome__ZuTXl:before {\n  content: \"\\F059\";\n}\n.fa-info-circle___-node_modules-font-awesome-css-font-awesome__HNCX9:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs___-node_modules-font-awesome-css-font-awesome__3Beaf:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o___-node_modules-font-awesome-css-font-awesome__3CZGp:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o___-node_modules-font-awesome-css-font-awesome__2Ejw9:before {\n  content: \"\\F05D\";\n}\n.fa-ban___-node_modules-font-awesome-css-font-awesome__2lvUE:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left___-node_modules-font-awesome-css-font-awesome__2z58d:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right___-node_modules-font-awesome-css-font-awesome__2u7qy:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up___-node_modules-font-awesome-css-font-awesome__JIESj:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down___-node_modules-font-awesome-css-font-awesome__3drEG:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward___-node_modules-font-awesome-css-font-awesome__3dDsK:before,\n.fa-share___-node_modules-font-awesome-css-font-awesome__3Gtfw:before {\n  content: \"\\F064\";\n}\n.fa-expand___-node_modules-font-awesome-css-font-awesome__3Xdi3:before {\n  content: \"\\F065\";\n}\n.fa-compress___-node_modules-font-awesome-css-font-awesome__1FK81:before {\n  content: \"\\F066\";\n}\n.fa-plus___-node_modules-font-awesome-css-font-awesome__16mrx:before {\n  content: \"\\F067\";\n}\n.fa-minus___-node_modules-font-awesome-css-font-awesome__32Q2d:before {\n  content: \"\\F068\";\n}\n.fa-asterisk___-node_modules-font-awesome-css-font-awesome__1MWOU:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle___-node_modules-font-awesome-css-font-awesome__1Nndf:before {\n  content: \"\\F06A\";\n}\n.fa-gift___-node_modules-font-awesome-css-font-awesome__3MOy7:before {\n  content: \"\\F06B\";\n}\n.fa-leaf___-node_modules-font-awesome-css-font-awesome__1JIvZ:before {\n  content: \"\\F06C\";\n}\n.fa-fire___-node_modules-font-awesome-css-font-awesome__3YK_9:before {\n  content: \"\\F06D\";\n}\n.fa-eye___-node_modules-font-awesome-css-font-awesome__11mmK:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash___-node_modules-font-awesome-css-font-awesome__2KqTT:before {\n  content: \"\\F070\";\n}\n.fa-warning___-node_modules-font-awesome-css-font-awesome__20WQ-:before,\n.fa-exclamation-triangle___-node_modules-font-awesome-css-font-awesome__1XmwE:before {\n  content: \"\\F071\";\n}\n.fa-plane___-node_modules-font-awesome-css-font-awesome__264OL:before {\n  content: \"\\F072\";\n}\n.fa-calendar___-node_modules-font-awesome-css-font-awesome__1WkLJ:before {\n  content: \"\\F073\";\n}\n.fa-random___-node_modules-font-awesome-css-font-awesome__yvBJp:before {\n  content: \"\\F074\";\n}\n.fa-comment___-node_modules-font-awesome-css-font-awesome__3KwzR:before {\n  content: \"\\F075\";\n}\n.fa-magnet___-node_modules-font-awesome-css-font-awesome__2c0dE:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up___-node_modules-font-awesome-css-font-awesome__2I940:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down___-node_modules-font-awesome-css-font-awesome__1yETd:before {\n  content: \"\\F078\";\n}\n.fa-retweet___-node_modules-font-awesome-css-font-awesome__6mbFt:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart___-node_modules-font-awesome-css-font-awesome__SWhJu:before {\n  content: \"\\F07A\";\n}\n.fa-folder___-node_modules-font-awesome-css-font-awesome__3iVkK:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open___-node_modules-font-awesome-css-font-awesome__3gZWA:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v___-node_modules-font-awesome-css-font-awesome__3EVsA:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h___-node_modules-font-awesome-css-font-awesome__2Xqih:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o___-node_modules-font-awesome-css-font-awesome__1eTxl:before,\n.fa-bar-chart___-node_modules-font-awesome-css-font-awesome__E-l2R:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square___-node_modules-font-awesome-css-font-awesome__rGxRJ:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square___-node_modules-font-awesome-css-font-awesome__3ox-L:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro___-node_modules-font-awesome-css-font-awesome__3zDCe:before {\n  content: \"\\F083\";\n}\n.fa-key___-node_modules-font-awesome-css-font-awesome__2HpwV:before {\n  content: \"\\F084\";\n}\n.fa-gears___-node_modules-font-awesome-css-font-awesome__8pc44:before,\n.fa-cogs___-node_modules-font-awesome-css-font-awesome__C8Ndn:before {\n  content: \"\\F085\";\n}\n.fa-comments___-node_modules-font-awesome-css-font-awesome__20zq3:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up___-node_modules-font-awesome-css-font-awesome__3lYf6:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down___-node_modules-font-awesome-css-font-awesome__33yk9:before {\n  content: \"\\F088\";\n}\n.fa-star-half___-node_modules-font-awesome-css-font-awesome__1kbbN:before {\n  content: \"\\F089\";\n}\n.fa-heart-o___-node_modules-font-awesome-css-font-awesome__CPg-1:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out___-node_modules-font-awesome-css-font-awesome__3JytW:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square___-node_modules-font-awesome-css-font-awesome__1Ykeg:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack___-node_modules-font-awesome-css-font-awesome__1pz3Z:before {\n  content: \"\\F08D\";\n}\n.fa-external-link___-node_modules-font-awesome-css-font-awesome__LSdw8:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in___-node_modules-font-awesome-css-font-awesome__35tjE:before {\n  content: \"\\F090\";\n}\n.fa-trophy___-node_modules-font-awesome-css-font-awesome__w0UIF:before {\n  content: \"\\F091\";\n}\n.fa-github-square___-node_modules-font-awesome-css-font-awesome__3NU_d:before {\n  content: \"\\F092\";\n}\n.fa-upload___-node_modules-font-awesome-css-font-awesome__JXScT:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o___-node_modules-font-awesome-css-font-awesome__3Lbz6:before {\n  content: \"\\F094\";\n}\n.fa-phone___-node_modules-font-awesome-css-font-awesome__2rv2c:before {\n  content: \"\\F095\";\n}\n.fa-square-o___-node_modules-font-awesome-css-font-awesome__1d9ye:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o___-node_modules-font-awesome-css-font-awesome__2FP55:before {\n  content: \"\\F097\";\n}\n.fa-phone-square___-node_modules-font-awesome-css-font-awesome__5kBRC:before {\n  content: \"\\F098\";\n}\n.fa-twitter___-node_modules-font-awesome-css-font-awesome__38AzR:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f___-node_modules-font-awesome-css-font-awesome___Q6qZ:before,\n.fa-facebook___-node_modules-font-awesome-css-font-awesome__2OvBg:before {\n  content: \"\\F09A\";\n}\n.fa-github___-node_modules-font-awesome-css-font-awesome__2jO4n:before {\n  content: \"\\F09B\";\n}\n.fa-unlock___-node_modules-font-awesome-css-font-awesome__xuzOd:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card___-node_modules-font-awesome-css-font-awesome__14hZq:before {\n  content: \"\\F09D\";\n}\n.fa-feed___-node_modules-font-awesome-css-font-awesome__1PRZ3:before,\n.fa-rss___-node_modules-font-awesome-css-font-awesome__3NFY9:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o___-node_modules-font-awesome-css-font-awesome__1jWnq:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn___-node_modules-font-awesome-css-font-awesome__1pJrH:before {\n  content: \"\\F0A1\";\n}\n.fa-bell___-node_modules-font-awesome-css-font-awesome__34vFt:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate___-node_modules-font-awesome-css-font-awesome__1cfCb:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right___-node_modules-font-awesome-css-font-awesome__3GBtv:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left___-node_modules-font-awesome-css-font-awesome__2lAoW:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up___-node_modules-font-awesome-css-font-awesome__1PNRS:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down___-node_modules-font-awesome-css-font-awesome__1bpFs:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left___-node_modules-font-awesome-css-font-awesome__2VTuz:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right___-node_modules-font-awesome-css-font-awesome__2iziH:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up___-node_modules-font-awesome-css-font-awesome__2MjtI:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down___-node_modules-font-awesome-css-font-awesome__1l3-M:before {\n  content: \"\\F0AB\";\n}\n.fa-globe___-node_modules-font-awesome-css-font-awesome__1uWLG:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench___-node_modules-font-awesome-css-font-awesome__Pg2lw:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks___-node_modules-font-awesome-css-font-awesome__1iFuF:before {\n  content: \"\\F0AE\";\n}\n.fa-filter___-node_modules-font-awesome-css-font-awesome__3mKU6:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase___-node_modules-font-awesome-css-font-awesome__eic8M:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt___-node_modules-font-awesome-css-font-awesome__1l0Fo:before {\n  content: \"\\F0B2\";\n}\n.fa-group___-node_modules-font-awesome-css-font-awesome__2Wggf:before,\n.fa-users___-node_modules-font-awesome-css-font-awesome__3qKuf:before {\n  content: \"\\F0C0\";\n}\n.fa-chain___-node_modules-font-awesome-css-font-awesome__GhFLl:before,\n.fa-link___-node_modules-font-awesome-css-font-awesome__1KGTj:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud___-node_modules-font-awesome-css-font-awesome__2qfAS:before {\n  content: \"\\F0C2\";\n}\n.fa-flask___-node_modules-font-awesome-css-font-awesome__B2pW8:before {\n  content: \"\\F0C3\";\n}\n.fa-cut___-node_modules-font-awesome-css-font-awesome__9pim7:before,\n.fa-scissors___-node_modules-font-awesome-css-font-awesome__3VSQp:before {\n  content: \"\\F0C4\";\n}\n.fa-copy___-node_modules-font-awesome-css-font-awesome__lUboT:before,\n.fa-files-o___-node_modules-font-awesome-css-font-awesome__HZoUd:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip___-node_modules-font-awesome-css-font-awesome__3evRa:before {\n  content: \"\\F0C6\";\n}\n.fa-save___-node_modules-font-awesome-css-font-awesome__3kIBF:before,\n.fa-floppy-o___-node_modules-font-awesome-css-font-awesome__UJKhF:before {\n  content: \"\\F0C7\";\n}\n.fa-square___-node_modules-font-awesome-css-font-awesome__2MoHW:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon___-node_modules-font-awesome-css-font-awesome__1-Wbx:before,\n.fa-reorder___-node_modules-font-awesome-css-font-awesome__2gdhE:before,\n.fa-bars___-node_modules-font-awesome-css-font-awesome__1TxYb:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul___-node_modules-font-awesome-css-font-awesome__2v7W3:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol___-node_modules-font-awesome-css-font-awesome__2u37F:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough___-node_modules-font-awesome-css-font-awesome__2xHlZ:before {\n  content: \"\\F0CC\";\n}\n.fa-underline___-node_modules-font-awesome-css-font-awesome__e2-Yh:before {\n  content: \"\\F0CD\";\n}\n.fa-table___-node_modules-font-awesome-css-font-awesome__37RYA:before {\n  content: \"\\F0CE\";\n}\n.fa-magic___-node_modules-font-awesome-css-font-awesome__1f4cy:before {\n  content: \"\\F0D0\";\n}\n.fa-truck___-node_modules-font-awesome-css-font-awesome__1UpV7:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest___-node_modules-font-awesome-css-font-awesome__1dnkz:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square___-node_modules-font-awesome-css-font-awesome__1G7wP:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square___-node_modules-font-awesome-css-font-awesome__1sk1e:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus___-node_modules-font-awesome-css-font-awesome__1fTmg:before {\n  content: \"\\F0D5\";\n}\n.fa-money___-node_modules-font-awesome-css-font-awesome__32D6s:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down___-node_modules-font-awesome-css-font-awesome__1xFx3:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up___-node_modules-font-awesome-css-font-awesome__1wHVX:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left___-node_modules-font-awesome-css-font-awesome__3WTG1:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right___-node_modules-font-awesome-css-font-awesome__9Obow:before {\n  content: \"\\F0DA\";\n}\n.fa-columns___-node_modules-font-awesome-css-font-awesome__16Ubp:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted___-node_modules-font-awesome-css-font-awesome__3la6L:before,\n.fa-sort___-node_modules-font-awesome-css-font-awesome__36Bt4:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down___-node_modules-font-awesome-css-font-awesome__sIQWu:before,\n.fa-sort-desc___-node_modules-font-awesome-css-font-awesome__3v0Cm:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up___-node_modules-font-awesome-css-font-awesome__6Dt6R:before,\n.fa-sort-asc___-node_modules-font-awesome-css-font-awesome__1oBSn:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope___-node_modules-font-awesome-css-font-awesome__6VFHt:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin___-node_modules-font-awesome-css-font-awesome__3ybZr:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left___-node_modules-font-awesome-css-font-awesome__37r-m:before,\n.fa-undo___-node_modules-font-awesome-css-font-awesome__1dzfz:before {\n  content: \"\\F0E2\";\n}\n.fa-legal___-node_modules-font-awesome-css-font-awesome__1wCJp:before,\n.fa-gavel___-node_modules-font-awesome-css-font-awesome__22SQa:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard___-node_modules-font-awesome-css-font-awesome__3aV8M:before,\n.fa-tachometer___-node_modules-font-awesome-css-font-awesome__1DZib:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o___-node_modules-font-awesome-css-font-awesome__1sdPE:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o___-node_modules-font-awesome-css-font-awesome__RTrMT:before {\n  content: \"\\F0E6\";\n}\n.fa-flash___-node_modules-font-awesome-css-font-awesome__3T0YK:before,\n.fa-bolt___-node_modules-font-awesome-css-font-awesome__16Idg:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap___-node_modules-font-awesome-css-font-awesome__2khgt:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella___-node_modules-font-awesome-css-font-awesome__2cw7l:before {\n  content: \"\\F0E9\";\n}\n.fa-paste___-node_modules-font-awesome-css-font-awesome__2VwNO:before,\n.fa-clipboard___-node_modules-font-awesome-css-font-awesome__6sKNR:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o___-node_modules-font-awesome-css-font-awesome__AO-xC:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange___-node_modules-font-awesome-css-font-awesome__3EA03:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download___-node_modules-font-awesome-css-font-awesome__2DcCA:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload___-node_modules-font-awesome-css-font-awesome__DdlTU:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md___-node_modules-font-awesome-css-font-awesome__3pnzT:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope___-node_modules-font-awesome-css-font-awesome__30AWa:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase___-node_modules-font-awesome-css-font-awesome__3tH0i:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o___-node_modules-font-awesome-css-font-awesome__2I_Uo:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee___-node_modules-font-awesome-css-font-awesome__Zxwks:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery___-node_modules-font-awesome-css-font-awesome__DHaS4:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o___-node_modules-font-awesome-css-font-awesome__2uxvu:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o___-node_modules-font-awesome-css-font-awesome__2Eb-W:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o___-node_modules-font-awesome-css-font-awesome__1nKEO:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance___-node_modules-font-awesome-css-font-awesome__3TO8o:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit___-node_modules-font-awesome-css-font-awesome__2CsMD:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet___-node_modules-font-awesome-css-font-awesome__6VyXM:before {\n  content: \"\\F0FB\";\n}\n.fa-beer___-node_modules-font-awesome-css-font-awesome__1SFzY:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square___-node_modules-font-awesome-css-font-awesome__2qFtS:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square___-node_modules-font-awesome-css-font-awesome__M4nU7:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left___-node_modules-font-awesome-css-font-awesome__w_RC6:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right___-node_modules-font-awesome-css-font-awesome__314eH:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up___-node_modules-font-awesome-css-font-awesome__36lLF:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down___-node_modules-font-awesome-css-font-awesome__2_CFg:before {\n  content: \"\\F103\";\n}\n.fa-angle-left___-node_modules-font-awesome-css-font-awesome__1iqvB:before {\n  content: \"\\F104\";\n}\n.fa-angle-right___-node_modules-font-awesome-css-font-awesome__1zMu4:before {\n  content: \"\\F105\";\n}\n.fa-angle-up___-node_modules-font-awesome-css-font-awesome__2EUzr:before {\n  content: \"\\F106\";\n}\n.fa-angle-down___-node_modules-font-awesome-css-font-awesome__2wvs5:before {\n  content: \"\\F107\";\n}\n.fa-desktop___-node_modules-font-awesome-css-font-awesome__2rAlY:before {\n  content: \"\\F108\";\n}\n.fa-laptop___-node_modules-font-awesome-css-font-awesome__2c6_7:before {\n  content: \"\\F109\";\n}\n.fa-tablet___-node_modules-font-awesome-css-font-awesome__18V4R:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone___-node_modules-font-awesome-css-font-awesome__PXofs:before,\n.fa-mobile___-node_modules-font-awesome-css-font-awesome__2jvE_:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o___-node_modules-font-awesome-css-font-awesome__2rqIm:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left___-node_modules-font-awesome-css-font-awesome__21m0M:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right___-node_modules-font-awesome-css-font-awesome__2BfO8:before {\n  content: \"\\F10E\";\n}\n.fa-spinner___-node_modules-font-awesome-css-font-awesome__PAbeZ:before {\n  content: \"\\F110\";\n}\n.fa-circle___-node_modules-font-awesome-css-font-awesome__3-Suz:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply___-node_modules-font-awesome-css-font-awesome__2uETc:before,\n.fa-reply___-node_modules-font-awesome-css-font-awesome__pDNgt:before {\n  content: \"\\F112\";\n}\n.fa-github-alt___-node_modules-font-awesome-css-font-awesome__DvP0H:before {\n  content: \"\\F113\";\n}\n.fa-folder-o___-node_modules-font-awesome-css-font-awesome__x6i42:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o___-node_modules-font-awesome-css-font-awesome__3lsvI:before {\n  content: \"\\F115\";\n}\n.fa-smile-o___-node_modules-font-awesome-css-font-awesome__2vunv:before {\n  content: \"\\F118\";\n}\n.fa-frown-o___-node_modules-font-awesome-css-font-awesome__2Kqzm:before {\n  content: \"\\F119\";\n}\n.fa-meh-o___-node_modules-font-awesome-css-font-awesome__pMeL6:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad___-node_modules-font-awesome-css-font-awesome__1h1u3:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o___-node_modules-font-awesome-css-font-awesome__1NXjB:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o___-node_modules-font-awesome-css-font-awesome__3uej_:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered___-node_modules-font-awesome-css-font-awesome__2qcdW:before {\n  content: \"\\F11E\";\n}\n.fa-terminal___-node_modules-font-awesome-css-font-awesome__1j8m2:before {\n  content: \"\\F120\";\n}\n.fa-code___-node_modules-font-awesome-css-font-awesome__2B1Qp:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all___-node_modules-font-awesome-css-font-awesome__3s06O:before,\n.fa-reply-all___-node_modules-font-awesome-css-font-awesome__43Rl6:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty___-node_modules-font-awesome-css-font-awesome__uGXvV:before,\n.fa-star-half-full___-node_modules-font-awesome-css-font-awesome__t0tCJ:before,\n.fa-star-half-o___-node_modules-font-awesome-css-font-awesome__2L2BC:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow___-node_modules-font-awesome-css-font-awesome__110u1:before {\n  content: \"\\F124\";\n}\n.fa-crop___-node_modules-font-awesome-css-font-awesome__2jRia:before {\n  content: \"\\F125\";\n}\n.fa-code-fork___-node_modules-font-awesome-css-font-awesome__1FoUh:before {\n  content: \"\\F126\";\n}\n.fa-unlink___-node_modules-font-awesome-css-font-awesome__30d3K:before,\n.fa-chain-broken___-node_modules-font-awesome-css-font-awesome__1F3P8:before {\n  content: \"\\F127\";\n}\n.fa-question___-node_modules-font-awesome-css-font-awesome__10j91:before {\n  content: \"\\F128\";\n}\n.fa-info___-node_modules-font-awesome-css-font-awesome__2nZV5:before {\n  content: \"\\F129\";\n}\n.fa-exclamation___-node_modules-font-awesome-css-font-awesome__iWEVL:before {\n  content: \"\\F12A\";\n}\n.fa-superscript___-node_modules-font-awesome-css-font-awesome__1hNZp:before {\n  content: \"\\F12B\";\n}\n.fa-subscript___-node_modules-font-awesome-css-font-awesome__3Q_xk:before {\n  content: \"\\F12C\";\n}\n.fa-eraser___-node_modules-font-awesome-css-font-awesome__2nrUM:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece___-node_modules-font-awesome-css-font-awesome__1bQFF:before {\n  content: \"\\F12E\";\n}\n.fa-microphone___-node_modules-font-awesome-css-font-awesome__2rX5o:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash___-node_modules-font-awesome-css-font-awesome__2TZw5:before {\n  content: \"\\F131\";\n}\n.fa-shield___-node_modules-font-awesome-css-font-awesome__2WyME:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o___-node_modules-font-awesome-css-font-awesome__qx1k1:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher___-node_modules-font-awesome-css-font-awesome__g0m1S:before {\n  content: \"\\F134\";\n}\n.fa-rocket___-node_modules-font-awesome-css-font-awesome__1gyAd:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn___-node_modules-font-awesome-css-font-awesome__2mr1O:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left___-node_modules-font-awesome-css-font-awesome__32cwX:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right___-node_modules-font-awesome-css-font-awesome__3Q6Z0:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up___-node_modules-font-awesome-css-font-awesome__bPO91:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down___-node_modules-font-awesome-css-font-awesome__3oILa:before {\n  content: \"\\F13A\";\n}\n.fa-html5___-node_modules-font-awesome-css-font-awesome__2Xmit:before {\n  content: \"\\F13B\";\n}\n.fa-css3___-node_modules-font-awesome-css-font-awesome__1M0FD:before {\n  content: \"\\F13C\";\n}\n.fa-anchor___-node_modules-font-awesome-css-font-awesome__2HcK1:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt___-node_modules-font-awesome-css-font-awesome__6llv-:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye___-node_modules-font-awesome-css-font-awesome__1A8pA:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h___-node_modules-font-awesome-css-font-awesome__PZSjG:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v___-node_modules-font-awesome-css-font-awesome__xcbDW:before {\n  content: \"\\F142\";\n}\n.fa-rss-square___-node_modules-font-awesome-css-font-awesome__VkAtR:before {\n  content: \"\\F143\";\n}\n.fa-play-circle___-node_modules-font-awesome-css-font-awesome__3wYnh:before {\n  content: \"\\F144\";\n}\n.fa-ticket___-node_modules-font-awesome-css-font-awesome__3bjjH:before {\n  content: \"\\F145\";\n}\n.fa-minus-square___-node_modules-font-awesome-css-font-awesome__2G74N:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o___-node_modules-font-awesome-css-font-awesome__3P3yn:before {\n  content: \"\\F147\";\n}\n.fa-level-up___-node_modules-font-awesome-css-font-awesome__1ATlV:before {\n  content: \"\\F148\";\n}\n.fa-level-down___-node_modules-font-awesome-css-font-awesome__2dvB7:before {\n  content: \"\\F149\";\n}\n.fa-check-square___-node_modules-font-awesome-css-font-awesome__1a-ld:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square___-node_modules-font-awesome-css-font-awesome__3jJAF:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square___-node_modules-font-awesome-css-font-awesome__LP_C8:before {\n  content: \"\\F14C\";\n}\n.fa-share-square___-node_modules-font-awesome-css-font-awesome__1MSH3:before {\n  content: \"\\F14D\";\n}\n.fa-compass___-node_modules-font-awesome-css-font-awesome__36CGx:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down___-node_modules-font-awesome-css-font-awesome__3p-SH:before,\n.fa-caret-square-o-down___-node_modules-font-awesome-css-font-awesome__2Ay4t:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up___-node_modules-font-awesome-css-font-awesome__2PJKt:before,\n.fa-caret-square-o-up___-node_modules-font-awesome-css-font-awesome__1TeLa:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right___-node_modules-font-awesome-css-font-awesome__1_GJo:before,\n.fa-caret-square-o-right___-node_modules-font-awesome-css-font-awesome__1kbGB:before {\n  content: \"\\F152\";\n}\n.fa-euro___-node_modules-font-awesome-css-font-awesome__3aFgn:before,\n.fa-eur___-node_modules-font-awesome-css-font-awesome__2TrmX:before {\n  content: \"\\F153\";\n}\n.fa-gbp___-node_modules-font-awesome-css-font-awesome__2xTh9:before {\n  content: \"\\F154\";\n}\n.fa-dollar___-node_modules-font-awesome-css-font-awesome__IjxzU:before,\n.fa-usd___-node_modules-font-awesome-css-font-awesome__a7kp9:before {\n  content: \"\\F155\";\n}\n.fa-rupee___-node_modules-font-awesome-css-font-awesome__cvtaI:before,\n.fa-inr___-node_modules-font-awesome-css-font-awesome__3x3Bh:before {\n  content: \"\\F156\";\n}\n.fa-cny___-node_modules-font-awesome-css-font-awesome__1VtCW:before,\n.fa-rmb___-node_modules-font-awesome-css-font-awesome__2IyFU:before,\n.fa-yen___-node_modules-font-awesome-css-font-awesome__3EYZF:before,\n.fa-jpy___-node_modules-font-awesome-css-font-awesome__3RfMC:before {\n  content: \"\\F157\";\n}\n.fa-ruble___-node_modules-font-awesome-css-font-awesome__3okEL:before,\n.fa-rouble___-node_modules-font-awesome-css-font-awesome__QzDU0:before,\n.fa-rub___-node_modules-font-awesome-css-font-awesome__2O-gS:before {\n  content: \"\\F158\";\n}\n.fa-won___-node_modules-font-awesome-css-font-awesome__tjD4q:before,\n.fa-krw___-node_modules-font-awesome-css-font-awesome__1-ZTG:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin___-node_modules-font-awesome-css-font-awesome__2a-SV:before,\n.fa-btc___-node_modules-font-awesome-css-font-awesome__3CCjZ:before {\n  content: \"\\F15A\";\n}\n.fa-file___-node_modules-font-awesome-css-font-awesome__3futs:before {\n  content: \"\\F15B\";\n}\n.fa-file-text___-node_modules-font-awesome-css-font-awesome__3fvF0:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc___-node_modules-font-awesome-css-font-awesome__3QPlF:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc___-node_modules-font-awesome-css-font-awesome__2mOuY:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc___-node_modules-font-awesome-css-font-awesome__1Osrd:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc___-node_modules-font-awesome-css-font-awesome__M-Iut:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc___-node_modules-font-awesome-css-font-awesome__3k6ET:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc___-node_modules-font-awesome-css-font-awesome__1Sq_s:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up___-node_modules-font-awesome-css-font-awesome__1_1e0:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down___-node_modules-font-awesome-css-font-awesome__2P7BY:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square___-node_modules-font-awesome-css-font-awesome__1Dv21:before {\n  content: \"\\F166\";\n}\n.fa-youtube___-node_modules-font-awesome-css-font-awesome__5HPTf:before {\n  content: \"\\F167\";\n}\n.fa-xing___-node_modules-font-awesome-css-font-awesome__3XURP:before {\n  content: \"\\F168\";\n}\n.fa-xing-square___-node_modules-font-awesome-css-font-awesome__2TYXO:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play___-node_modules-font-awesome-css-font-awesome__3Udmk:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox___-node_modules-font-awesome-css-font-awesome__3bXeC:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow___-node_modules-font-awesome-css-font-awesome__3go0V:before {\n  content: \"\\F16C\";\n}\n.fa-instagram___-node_modules-font-awesome-css-font-awesome__Cioe_:before {\n  content: \"\\F16D\";\n}\n.fa-flickr___-node_modules-font-awesome-css-font-awesome__1fv4h:before {\n  content: \"\\F16E\";\n}\n.fa-adn___-node_modules-font-awesome-css-font-awesome__t2Mzz:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket___-node_modules-font-awesome-css-font-awesome__PaSGz:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square___-node_modules-font-awesome-css-font-awesome__1hz1v:before {\n  content: \"\\F172\";\n}\n.fa-tumblr___-node_modules-font-awesome-css-font-awesome__1pYEZ:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square___-node_modules-font-awesome-css-font-awesome__1dAe4:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down___-node_modules-font-awesome-css-font-awesome__1aeop:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up___-node_modules-font-awesome-css-font-awesome__2o6oy:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left___-node_modules-font-awesome-css-font-awesome__AR1re:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right___-node_modules-font-awesome-css-font-awesome__24c4V:before {\n  content: \"\\F178\";\n}\n.fa-apple___-node_modules-font-awesome-css-font-awesome__3cYNE:before {\n  content: \"\\F179\";\n}\n.fa-windows___-node_modules-font-awesome-css-font-awesome__3JNDc:before {\n  content: \"\\F17A\";\n}\n.fa-android___-node_modules-font-awesome-css-font-awesome__1IPbQ:before {\n  content: \"\\F17B\";\n}\n.fa-linux___-node_modules-font-awesome-css-font-awesome__2eml2:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble___-node_modules-font-awesome-css-font-awesome__2ir5K:before {\n  content: \"\\F17D\";\n}\n.fa-skype___-node_modules-font-awesome-css-font-awesome__2tim9:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare___-node_modules-font-awesome-css-font-awesome__17wq0:before {\n  content: \"\\F180\";\n}\n.fa-trello___-node_modules-font-awesome-css-font-awesome__2ZDt7:before {\n  content: \"\\F181\";\n}\n.fa-female___-node_modules-font-awesome-css-font-awesome__2RrS4:before {\n  content: \"\\F182\";\n}\n.fa-male___-node_modules-font-awesome-css-font-awesome__3Nfmf:before {\n  content: \"\\F183\";\n}\n.fa-gittip___-node_modules-font-awesome-css-font-awesome__26vDr:before,\n.fa-gratipay___-node_modules-font-awesome-css-font-awesome__3apRM:before {\n  content: \"\\F184\";\n}\n.fa-sun-o___-node_modules-font-awesome-css-font-awesome___M0By:before {\n  content: \"\\F185\";\n}\n.fa-moon-o___-node_modules-font-awesome-css-font-awesome__2cQKr:before {\n  content: \"\\F186\";\n}\n.fa-archive___-node_modules-font-awesome-css-font-awesome__3o9qD:before {\n  content: \"\\F187\";\n}\n.fa-bug___-node_modules-font-awesome-css-font-awesome__35InZ:before {\n  content: \"\\F188\";\n}\n.fa-vk___-node_modules-font-awesome-css-font-awesome__1h-M1:before {\n  content: \"\\F189\";\n}\n.fa-weibo___-node_modules-font-awesome-css-font-awesome__glxy9:before {\n  content: \"\\F18A\";\n}\n.fa-renren___-node_modules-font-awesome-css-font-awesome__32LKB:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines___-node_modules-font-awesome-css-font-awesome__1rLY9:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange___-node_modules-font-awesome-css-font-awesome__3xeZF:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right___-node_modules-font-awesome-css-font-awesome__1d6xb:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left___-node_modules-font-awesome-css-font-awesome__2AQAT:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left___-node_modules-font-awesome-css-font-awesome__2kqXp:before,\n.fa-caret-square-o-left___-node_modules-font-awesome-css-font-awesome__1O1hR:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o___-node_modules-font-awesome-css-font-awesome__3pD_N:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair___-node_modules-font-awesome-css-font-awesome__29hMe:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square___-node_modules-font-awesome-css-font-awesome__1EDdL:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira___-node_modules-font-awesome-css-font-awesome__6vBlx:before,\n.fa-try___-node_modules-font-awesome-css-font-awesome__o-hk9:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o___-node_modules-font-awesome-css-font-awesome__2kbev:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle___-node_modules-font-awesome-css-font-awesome__W-mVD:before {\n  content: \"\\F197\";\n}\n.fa-slack___-node_modules-font-awesome-css-font-awesome__3W8S5:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square___-node_modules-font-awesome-css-font-awesome__3s5hq:before {\n  content: \"\\F199\";\n}\n.fa-wordpress___-node_modules-font-awesome-css-font-awesome__2fl3A:before {\n  content: \"\\F19A\";\n}\n.fa-openid___-node_modules-font-awesome-css-font-awesome__3KixY:before {\n  content: \"\\F19B\";\n}\n.fa-institution___-node_modules-font-awesome-css-font-awesome__1nzYs:before,\n.fa-bank___-node_modules-font-awesome-css-font-awesome__nioHN:before,\n.fa-university___-node_modules-font-awesome-css-font-awesome__1HMzw:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board___-node_modules-font-awesome-css-font-awesome__G0F5u:before,\n.fa-graduation-cap___-node_modules-font-awesome-css-font-awesome__IsxXB:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo___-node_modules-font-awesome-css-font-awesome__2zRkQ:before {\n  content: \"\\F19E\";\n}\n.fa-google___-node_modules-font-awesome-css-font-awesome__2gDvp:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit___-node_modules-font-awesome-css-font-awesome__3HLpq:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square___-node_modules-font-awesome-css-font-awesome__2miLp:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle___-node_modules-font-awesome-css-font-awesome__3M4is:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon___-node_modules-font-awesome-css-font-awesome__1pDVw:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious___-node_modules-font-awesome-css-font-awesome__2Te_Z:before {\n  content: \"\\F1A5\";\n}\n.fa-digg___-node_modules-font-awesome-css-font-awesome__1xCvr:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp___-node_modules-font-awesome-css-font-awesome__2zkQu:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt___-node_modules-font-awesome-css-font-awesome__1dw4L:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal___-node_modules-font-awesome-css-font-awesome__PYiSj:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla___-node_modules-font-awesome-css-font-awesome__2JfJt:before {\n  content: \"\\F1AA\";\n}\n.fa-language___-node_modules-font-awesome-css-font-awesome__1hHFK:before {\n  content: \"\\F1AB\";\n}\n.fa-fax___-node_modules-font-awesome-css-font-awesome__2kUQY:before {\n  content: \"\\F1AC\";\n}\n.fa-building___-node_modules-font-awesome-css-font-awesome__3_tHo:before {\n  content: \"\\F1AD\";\n}\n.fa-child___-node_modules-font-awesome-css-font-awesome__1v2td:before {\n  content: \"\\F1AE\";\n}\n.fa-paw___-node_modules-font-awesome-css-font-awesome__1gUsP:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon___-node_modules-font-awesome-css-font-awesome__3oEK3:before {\n  content: \"\\F1B1\";\n}\n.fa-cube___-node_modules-font-awesome-css-font-awesome__32Xd3:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes___-node_modules-font-awesome-css-font-awesome__2eShW:before {\n  content: \"\\F1B3\";\n}\n.fa-behance___-node_modules-font-awesome-css-font-awesome__1KaV3:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square___-node_modules-font-awesome-css-font-awesome__2yc0_:before {\n  content: \"\\F1B5\";\n}\n.fa-steam___-node_modules-font-awesome-css-font-awesome__n2y4r:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square___-node_modules-font-awesome-css-font-awesome__3aOjv:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle___-node_modules-font-awesome-css-font-awesome__3Uqpd:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile___-node_modules-font-awesome-css-font-awesome__1vlyj:before,\n.fa-car___-node_modules-font-awesome-css-font-awesome__Il1XY:before {\n  content: \"\\F1B9\";\n}\n.fa-cab___-node_modules-font-awesome-css-font-awesome__29bvG:before,\n.fa-taxi___-node_modules-font-awesome-css-font-awesome__3f3BZ:before {\n  content: \"\\F1BA\";\n}\n.fa-tree___-node_modules-font-awesome-css-font-awesome__3vjk1:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify___-node_modules-font-awesome-css-font-awesome__1Rnfi:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart___-node_modules-font-awesome-css-font-awesome__6k4Ae:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud___-node_modules-font-awesome-css-font-awesome__3IbcT:before {\n  content: \"\\F1BE\";\n}\n.fa-database___-node_modules-font-awesome-css-font-awesome__2Z4hP:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o___-node_modules-font-awesome-css-font-awesome__MZMgW:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o___-node_modules-font-awesome-css-font-awesome__24bqs:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o___-node_modules-font-awesome-css-font-awesome__jGTSI:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o___-node_modules-font-awesome-css-font-awesome__2l8Yb:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o___-node_modules-font-awesome-css-font-awesome__1I2pu:before,\n.fa-file-picture-o___-node_modules-font-awesome-css-font-awesome__AF8Nc:before,\n.fa-file-image-o___-node_modules-font-awesome-css-font-awesome__29ExI:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o___-node_modules-font-awesome-css-font-awesome__aKpCY:before,\n.fa-file-archive-o___-node_modules-font-awesome-css-font-awesome__2JtR6:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o___-node_modules-font-awesome-css-font-awesome__1sPJ5:before,\n.fa-file-audio-o___-node_modules-font-awesome-css-font-awesome__2LwZ-:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o___-node_modules-font-awesome-css-font-awesome__15-Tf:before,\n.fa-file-video-o___-node_modules-font-awesome-css-font-awesome__2qXxF:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o___-node_modules-font-awesome-css-font-awesome__2Dvtw:before {\n  content: \"\\F1C9\";\n}\n.fa-vine___-node_modules-font-awesome-css-font-awesome__2s6nX:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen___-node_modules-font-awesome-css-font-awesome__12ema:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle___-node_modules-font-awesome-css-font-awesome__L8yD3:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy___-node_modules-font-awesome-css-font-awesome__2rvQP:before,\n.fa-life-buoy___-node_modules-font-awesome-css-font-awesome__3zwXq:before,\n.fa-life-saver___-node_modules-font-awesome-css-font-awesome__2BLo-:before,\n.fa-support___-node_modules-font-awesome-css-font-awesome__LJPeW:before,\n.fa-life-ring___-node_modules-font-awesome-css-font-awesome__1McS6:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch___-node_modules-font-awesome-css-font-awesome__1X_p6:before {\n  content: \"\\F1CE\";\n}\n.fa-ra___-node_modules-font-awesome-css-font-awesome__2qWx0:before,\n.fa-resistance___-node_modules-font-awesome-css-font-awesome__8IiPf:before,\n.fa-rebel___-node_modules-font-awesome-css-font-awesome__2BeAH:before {\n  content: \"\\F1D0\";\n}\n.fa-ge___-node_modules-font-awesome-css-font-awesome__125oQ:before,\n.fa-empire___-node_modules-font-awesome-css-font-awesome__3aWdY:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square___-node_modules-font-awesome-css-font-awesome__LxFgr:before {\n  content: \"\\F1D2\";\n}\n.fa-git___-node_modules-font-awesome-css-font-awesome__3dcrw:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square___-node_modules-font-awesome-css-font-awesome__UBOzw:before,\n.fa-yc-square___-node_modules-font-awesome-css-font-awesome__2dzYe:before,\n.fa-hacker-news___-node_modules-font-awesome-css-font-awesome__2NgMk:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo___-node_modules-font-awesome-css-font-awesome__1n6io:before {\n  content: \"\\F1D5\";\n}\n.fa-qq___-node_modules-font-awesome-css-font-awesome__3nU72:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat___-node_modules-font-awesome-css-font-awesome__3eB73:before,\n.fa-weixin___-node_modules-font-awesome-css-font-awesome__2CCYy:before {\n  content: \"\\F1D7\";\n}\n.fa-send___-node_modules-font-awesome-css-font-awesome__1PdKc:before,\n.fa-paper-plane___-node_modules-font-awesome-css-font-awesome__2__IE:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o___-node_modules-font-awesome-css-font-awesome__YLC2Y:before,\n.fa-paper-plane-o___-node_modules-font-awesome-css-font-awesome__3kMXj:before {\n  content: \"\\F1D9\";\n}\n.fa-history___-node_modules-font-awesome-css-font-awesome__2GsY6:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin___-node_modules-font-awesome-css-font-awesome__1qmHm:before {\n  content: \"\\F1DB\";\n}\n.fa-header___-node_modules-font-awesome-css-font-awesome__1utko:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph___-node_modules-font-awesome-css-font-awesome__17RrN:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders___-node_modules-font-awesome-css-font-awesome__3-FXz:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt___-node_modules-font-awesome-css-font-awesome__1wOIn:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square___-node_modules-font-awesome-css-font-awesome__3g2tI:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb___-node_modules-font-awesome-css-font-awesome__26Lk9:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o___-node_modules-font-awesome-css-font-awesome__UnqXg:before,\n.fa-futbol-o___-node_modules-font-awesome-css-font-awesome__1tIMP:before {\n  content: \"\\F1E3\";\n}\n.fa-tty___-node_modules-font-awesome-css-font-awesome__2moeD:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars___-node_modules-font-awesome-css-font-awesome__EUCJo:before {\n  content: \"\\F1E5\";\n}\n.fa-plug___-node_modules-font-awesome-css-font-awesome__33NjH:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare___-node_modules-font-awesome-css-font-awesome__sazIo:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch___-node_modules-font-awesome-css-font-awesome__28svQ:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp___-node_modules-font-awesome-css-font-awesome__35jF9:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o___-node_modules-font-awesome-css-font-awesome__jFTgr:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi___-node_modules-font-awesome-css-font-awesome__2I3Hr:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator___-node_modules-font-awesome-css-font-awesome__VAj6b:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal___-node_modules-font-awesome-css-font-awesome__3Yh6o:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet___-node_modules-font-awesome-css-font-awesome__1XMo3:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa___-node_modules-font-awesome-css-font-awesome__1ImhH:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard___-node_modules-font-awesome-css-font-awesome__3f5EZ:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover___-node_modules-font-awesome-css-font-awesome__31Que:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex___-node_modules-font-awesome-css-font-awesome__f7DOI:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal___-node_modules-font-awesome-css-font-awesome__2Zrxy:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe___-node_modules-font-awesome-css-font-awesome__jFflQ:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash___-node_modules-font-awesome-css-font-awesome__2RgMw:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o___-node_modules-font-awesome-css-font-awesome__2cXjG:before {\n  content: \"\\F1F7\";\n}\n.fa-trash___-node_modules-font-awesome-css-font-awesome__2toiW:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright___-node_modules-font-awesome-css-font-awesome__2YIDa:before {\n  content: \"\\F1F9\";\n}\n.fa-at___-node_modules-font-awesome-css-font-awesome__3BdKC:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper___-node_modules-font-awesome-css-font-awesome__1Qbaj:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush___-node_modules-font-awesome-css-font-awesome__1iSoz:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake___-node_modules-font-awesome-css-font-awesome__mxVhF:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart___-node_modules-font-awesome-css-font-awesome__1iaTO:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart___-node_modules-font-awesome-css-font-awesome__2_Yg9:before {\n  content: \"\\F200\";\n}\n.fa-line-chart___-node_modules-font-awesome-css-font-awesome__2Y1Fa:before {\n  content: \"\\F201\";\n}\n.fa-lastfm___-node_modules-font-awesome-css-font-awesome__pk3zp:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square___-node_modules-font-awesome-css-font-awesome__2c0x-:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off___-node_modules-font-awesome-css-font-awesome__3lBqq:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on___-node_modules-font-awesome-css-font-awesome__3xkWg:before {\n  content: \"\\F205\";\n}\n.fa-bicycle___-node_modules-font-awesome-css-font-awesome__Cjd3i:before {\n  content: \"\\F206\";\n}\n.fa-bus___-node_modules-font-awesome-css-font-awesome__1e1M4:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost___-node_modules-font-awesome-css-font-awesome__2NKau:before {\n  content: \"\\F208\";\n}\n.fa-angellist___-node_modules-font-awesome-css-font-awesome__2-VDb:before {\n  content: \"\\F209\";\n}\n.fa-cc___-node_modules-font-awesome-css-font-awesome__1eE9l:before {\n  content: \"\\F20A\";\n}\n.fa-shekel___-node_modules-font-awesome-css-font-awesome__3Hb3E:before,\n.fa-sheqel___-node_modules-font-awesome-css-font-awesome__386d2:before,\n.fa-ils___-node_modules-font-awesome-css-font-awesome__1Xkeh:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath___-node_modules-font-awesome-css-font-awesome__BdPkN:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads___-node_modules-font-awesome-css-font-awesome__Rp_Dl:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop___-node_modules-font-awesome-css-font-awesome__JoONS:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube___-node_modules-font-awesome-css-font-awesome__2PLNs:before {\n  content: \"\\F210\";\n}\n.fa-forumbee___-node_modules-font-awesome-css-font-awesome__1h8nG:before {\n  content: \"\\F211\";\n}\n.fa-leanpub___-node_modules-font-awesome-css-font-awesome__d_Qcs:before {\n  content: \"\\F212\";\n}\n.fa-sellsy___-node_modules-font-awesome-css-font-awesome__2PL5F:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk___-node_modules-font-awesome-css-font-awesome__1cYu7:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt___-node_modules-font-awesome-css-font-awesome__2R1Yg:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas___-node_modules-font-awesome-css-font-awesome__1PDCj:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus___-node_modules-font-awesome-css-font-awesome__3tq1k:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down___-node_modules-font-awesome-css-font-awesome__1Wm_Y:before {\n  content: \"\\F218\";\n}\n.fa-diamond___-node_modules-font-awesome-css-font-awesome__1lad0:before {\n  content: \"\\F219\";\n}\n.fa-ship___-node_modules-font-awesome-css-font-awesome__Q0cci:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret___-node_modules-font-awesome-css-font-awesome__3Pxnj:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle___-node_modules-font-awesome-css-font-awesome__3UM3j:before {\n  content: \"\\F21C\";\n}\n.fa-street-view___-node_modules-font-awesome-css-font-awesome__1a4IT:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat___-node_modules-font-awesome-css-font-awesome__34tXU:before {\n  content: \"\\F21E\";\n}\n.fa-venus___-node_modules-font-awesome-css-font-awesome__xPD8e:before {\n  content: \"\\F221\";\n}\n.fa-mars___-node_modules-font-awesome-css-font-awesome__1qc3t:before {\n  content: \"\\F222\";\n}\n.fa-mercury___-node_modules-font-awesome-css-font-awesome__2i4u6:before {\n  content: \"\\F223\";\n}\n.fa-intersex___-node_modules-font-awesome-css-font-awesome__2lQVE:before,\n.fa-transgender___-node_modules-font-awesome-css-font-awesome__3mfDl:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt___-node_modules-font-awesome-css-font-awesome__16s-X:before {\n  content: \"\\F225\";\n}\n.fa-venus-double___-node_modules-font-awesome-css-font-awesome__3nRuF:before {\n  content: \"\\F226\";\n}\n.fa-mars-double___-node_modules-font-awesome-css-font-awesome__2UaIs:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars___-node_modules-font-awesome-css-font-awesome__2Hxhm:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke___-node_modules-font-awesome-css-font-awesome__1NeCe:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v___-node_modules-font-awesome-css-font-awesome__35Z3s:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h___-node_modules-font-awesome-css-font-awesome__cGn59:before {\n  content: \"\\F22B\";\n}\n.fa-neuter___-node_modules-font-awesome-css-font-awesome__roY7_:before {\n  content: \"\\F22C\";\n}\n.fa-genderless___-node_modules-font-awesome-css-font-awesome__2b-ti:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official___-node_modules-font-awesome-css-font-awesome__1GR4w:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p___-node_modules-font-awesome-css-font-awesome__cLZ0j:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp___-node_modules-font-awesome-css-font-awesome__1hJa0:before {\n  content: \"\\F232\";\n}\n.fa-server___-node_modules-font-awesome-css-font-awesome__3erh3:before {\n  content: \"\\F233\";\n}\n.fa-user-plus___-node_modules-font-awesome-css-font-awesome__O0KWP:before {\n  content: \"\\F234\";\n}\n.fa-user-times___-node_modules-font-awesome-css-font-awesome__19nAC:before {\n  content: \"\\F235\";\n}\n.fa-hotel___-node_modules-font-awesome-css-font-awesome__1YpRt:before,\n.fa-bed___-node_modules-font-awesome-css-font-awesome__3f5XT:before {\n  content: \"\\F236\";\n}\n.fa-viacoin___-node_modules-font-awesome-css-font-awesome__2dIwL:before {\n  content: \"\\F237\";\n}\n.fa-train___-node_modules-font-awesome-css-font-awesome__1R8UV:before {\n  content: \"\\F238\";\n}\n.fa-subway___-node_modules-font-awesome-css-font-awesome__1KUzf:before {\n  content: \"\\F239\";\n}\n.fa-medium___-node_modules-font-awesome-css-font-awesome__2-v_Y:before {\n  content: \"\\F23A\";\n}\n.fa-yc___-node_modules-font-awesome-css-font-awesome__1YHoN:before,\n.fa-y-combinator___-node_modules-font-awesome-css-font-awesome__3oanU:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster___-node_modules-font-awesome-css-font-awesome__2Jys3:before {\n  content: \"\\F23C\";\n}\n.fa-opencart___-node_modules-font-awesome-css-font-awesome__15P7m:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl___-node_modules-font-awesome-css-font-awesome__1evys:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4___-node_modules-font-awesome-css-font-awesome__3z9oN:before,\n.fa-battery-full___-node_modules-font-awesome-css-font-awesome__3a47c:before {\n  content: \"\\F240\";\n}\n.fa-battery-3___-node_modules-font-awesome-css-font-awesome__15v1s:before,\n.fa-battery-three-quarters___-node_modules-font-awesome-css-font-awesome__2MqQW:before {\n  content: \"\\F241\";\n}\n.fa-battery-2___-node_modules-font-awesome-css-font-awesome__1xukC:before,\n.fa-battery-half___-node_modules-font-awesome-css-font-awesome__2-NP9:before {\n  content: \"\\F242\";\n}\n.fa-battery-1___-node_modules-font-awesome-css-font-awesome__2V2eh:before,\n.fa-battery-quarter___-node_modules-font-awesome-css-font-awesome__27GbZ:before {\n  content: \"\\F243\";\n}\n.fa-battery-0___-node_modules-font-awesome-css-font-awesome__213yF:before,\n.fa-battery-empty___-node_modules-font-awesome-css-font-awesome__1akwP:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer___-node_modules-font-awesome-css-font-awesome__1Ieqi:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor___-node_modules-font-awesome-css-font-awesome__2SLsi:before {\n  content: \"\\F246\";\n}\n.fa-object-group___-node_modules-font-awesome-css-font-awesome__1n3vN:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup___-node_modules-font-awesome-css-font-awesome__WB2zq:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note___-node_modules-font-awesome-css-font-awesome__3EEF4:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o___-node_modules-font-awesome-css-font-awesome__1ucKD:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb___-node_modules-font-awesome-css-font-awesome__zuWzt:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club___-node_modules-font-awesome-css-font-awesome__1Kg4f:before {\n  content: \"\\F24C\";\n}\n.fa-clone___-node_modules-font-awesome-css-font-awesome__1pfmu:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale___-node_modules-font-awesome-css-font-awesome__2BSSz:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o___-node_modules-font-awesome-css-font-awesome__3ltOE:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1___-node_modules-font-awesome-css-font-awesome__3bsUH:before,\n.fa-hourglass-start___-node_modules-font-awesome-css-font-awesome__2JrWp:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2___-node_modules-font-awesome-css-font-awesome__242Ey:before,\n.fa-hourglass-half___-node_modules-font-awesome-css-font-awesome__158gQ:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3___-node_modules-font-awesome-css-font-awesome__1R-J6:before,\n.fa-hourglass-end___-node_modules-font-awesome-css-font-awesome__2PQ7m:before {\n  content: \"\\F253\";\n}\n.fa-hourglass___-node_modules-font-awesome-css-font-awesome__NvxY6:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o___-node_modules-font-awesome-css-font-awesome__3WvO1:before,\n.fa-hand-rock-o___-node_modules-font-awesome-css-font-awesome__cz-93:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o___-node_modules-font-awesome-css-font-awesome__1XeKZ:before,\n.fa-hand-paper-o___-node_modules-font-awesome-css-font-awesome__3IQOX:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o___-node_modules-font-awesome-css-font-awesome__Q7ybq:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o___-node_modules-font-awesome-css-font-awesome__2HgCh:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o___-node_modules-font-awesome-css-font-awesome__c1Dyl:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o___-node_modules-font-awesome-css-font-awesome__eYo5N:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o___-node_modules-font-awesome-css-font-awesome__1fcVC:before {\n  content: \"\\F25B\";\n}\n.fa-trademark___-node_modules-font-awesome-css-font-awesome__18jCV:before {\n  content: \"\\F25C\";\n}\n.fa-registered___-node_modules-font-awesome-css-font-awesome__1Pzq_:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons___-node_modules-font-awesome-css-font-awesome__aIL7V:before {\n  content: \"\\F25E\";\n}\n.fa-gg___-node_modules-font-awesome-css-font-awesome__2QSMK:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle___-node_modules-font-awesome-css-font-awesome__19csF:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor___-node_modules-font-awesome-css-font-awesome__1if_T:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki___-node_modules-font-awesome-css-font-awesome__9Kh0w:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square___-node_modules-font-awesome-css-font-awesome__3vr8s:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket___-node_modules-font-awesome-css-font-awesome__21O9m:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w___-node_modules-font-awesome-css-font-awesome__vr1_A:before {\n  content: \"\\F266\";\n}\n.fa-safari___-node_modules-font-awesome-css-font-awesome__3IuZA:before {\n  content: \"\\F267\";\n}\n.fa-chrome___-node_modules-font-awesome-css-font-awesome__11ltu:before {\n  content: \"\\F268\";\n}\n.fa-firefox___-node_modules-font-awesome-css-font-awesome__I7Tjr:before {\n  content: \"\\F269\";\n}\n.fa-opera___-node_modules-font-awesome-css-font-awesome__1F8rr:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer___-node_modules-font-awesome-css-font-awesome__2mlE0:before {\n  content: \"\\F26B\";\n}\n.fa-tv___-node_modules-font-awesome-css-font-awesome__2n_rQ:before,\n.fa-television___-node_modules-font-awesome-css-font-awesome__23usS:before {\n  content: \"\\F26C\";\n}\n.fa-contao___-node_modules-font-awesome-css-font-awesome__2iqBs:before {\n  content: \"\\F26D\";\n}\n.fa-500px___-node_modules-font-awesome-css-font-awesome__1tTnQ:before {\n  content: \"\\F26E\";\n}\n.fa-amazon___-node_modules-font-awesome-css-font-awesome__3q99L:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o___-node_modules-font-awesome-css-font-awesome__1tPhl:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o___-node_modules-font-awesome-css-font-awesome__1xNeq:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o___-node_modules-font-awesome-css-font-awesome__3FaIK:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o___-node_modules-font-awesome-css-font-awesome__1cA-9:before {\n  content: \"\\F274\";\n}\n.fa-industry___-node_modules-font-awesome-css-font-awesome__3jHV-:before {\n  content: \"\\F275\";\n}\n.fa-map-pin___-node_modules-font-awesome-css-font-awesome__yb50i:before {\n  content: \"\\F276\";\n}\n.fa-map-signs___-node_modules-font-awesome-css-font-awesome__3AEKb:before {\n  content: \"\\F277\";\n}\n.fa-map-o___-node_modules-font-awesome-css-font-awesome__CiZyM:before {\n  content: \"\\F278\";\n}\n.fa-map___-node_modules-font-awesome-css-font-awesome__1If_y:before {\n  content: \"\\F279\";\n}\n.fa-commenting___-node_modules-font-awesome-css-font-awesome__1z4Gp:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o___-node_modules-font-awesome-css-font-awesome__3Weu-:before {\n  content: \"\\F27B\";\n}\n.fa-houzz___-node_modules-font-awesome-css-font-awesome__Lbnf-:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo___-node_modules-font-awesome-css-font-awesome__2zN39:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie___-node_modules-font-awesome-css-font-awesome__17fH-:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons___-node_modules-font-awesome-css-font-awesome__3vqoR:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien___-node_modules-font-awesome-css-font-awesome__S4UyZ:before {\n  content: \"\\F281\";\n}\n.fa-edge___-node_modules-font-awesome-css-font-awesome__GIdjQ:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt___-node_modules-font-awesome-css-font-awesome__19lTT:before {\n  content: \"\\F283\";\n}\n.fa-codiepie___-node_modules-font-awesome-css-font-awesome__10IUW:before {\n  content: \"\\F284\";\n}\n.fa-modx___-node_modules-font-awesome-css-font-awesome__1iogA:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome___-node_modules-font-awesome-css-font-awesome__p-FEc:before {\n  content: \"\\F286\";\n}\n.fa-usb___-node_modules-font-awesome-css-font-awesome__2UQMd:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt___-node_modules-font-awesome-css-font-awesome__1E0fE:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud___-node_modules-font-awesome-css-font-awesome__1eWwn:before {\n  content: \"\\F289\";\n}\n.fa-scribd___-node_modules-font-awesome-css-font-awesome___KdP5:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle___-node_modules-font-awesome-css-font-awesome__1BmN-:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o___-node_modules-font-awesome-css-font-awesome__CzXwx:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle___-node_modules-font-awesome-css-font-awesome__3xSXU:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o___-node_modules-font-awesome-css-font-awesome__y6CsB:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag___-node_modules-font-awesome-css-font-awesome__1rLRk:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket___-node_modules-font-awesome-css-font-awesome__2H4sn:before {\n  content: \"\\F291\";\n}\n.fa-hashtag___-node_modules-font-awesome-css-font-awesome__3Jfkg:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth___-node_modules-font-awesome-css-font-awesome__ugSoi:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b___-node_modules-font-awesome-css-font-awesome__2XFEA:before {\n  content: \"\\F294\";\n}\n.fa-percent___-node_modules-font-awesome-css-font-awesome__3Q9bo:before {\n  content: \"\\F295\";\n}\n.fa-gitlab___-node_modules-font-awesome-css-font-awesome__3_bCy:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner___-node_modules-font-awesome-css-font-awesome__FTnvj:before {\n  content: \"\\F297\";\n}\n.fa-wpforms___-node_modules-font-awesome-css-font-awesome__3uHke:before {\n  content: \"\\F298\";\n}\n.fa-envira___-node_modules-font-awesome-css-font-awesome__34QIp:before {\n  content: \"\\F299\";\n}\n.fa-universal-access___-node_modules-font-awesome-css-font-awesome__MI2sC:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt___-node_modules-font-awesome-css-font-awesome__O6lS5:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o___-node_modules-font-awesome-css-font-awesome__mHtBv:before {\n  content: \"\\F29C\";\n}\n.fa-blind___-node_modules-font-awesome-css-font-awesome__1Ff35:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description___-node_modules-font-awesome-css-font-awesome__7ufQ0:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone___-node_modules-font-awesome-css-font-awesome__ojvEK:before {\n  content: \"\\F2A0\";\n}\n.fa-braille___-node_modules-font-awesome-css-font-awesome__31as8:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems___-node_modules-font-awesome-css-font-awesome__3e9lJ:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting___-node_modules-font-awesome-css-font-awesome__10s8s:before,\n.fa-american-sign-language-interpreting___-node_modules-font-awesome-css-font-awesome__iJBKA:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness___-node_modules-font-awesome-css-font-awesome__1gz6V:before,\n.fa-hard-of-hearing___-node_modules-font-awesome-css-font-awesome__3tl6c:before,\n.fa-deaf___-node_modules-font-awesome-css-font-awesome__T1jno:before {\n  content: \"\\F2A4\";\n}\n.fa-glide___-node_modules-font-awesome-css-font-awesome__FOg6l:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g___-node_modules-font-awesome-css-font-awesome__3NP_O:before {\n  content: \"\\F2A6\";\n}\n.fa-signing___-node_modules-font-awesome-css-font-awesome__1dNqK:before,\n.fa-sign-language___-node_modules-font-awesome-css-font-awesome__196FK:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision___-node_modules-font-awesome-css-font-awesome__1EYST:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo___-node_modules-font-awesome-css-font-awesome__3r1NW:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square___-node_modules-font-awesome-css-font-awesome__wG1GT:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat___-node_modules-font-awesome-css-font-awesome__3rUOM:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost___-node_modules-font-awesome-css-font-awesome__1H5pY:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square___-node_modules-font-awesome-css-font-awesome__nsCRj:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper___-node_modules-font-awesome-css-font-awesome__2-v0o:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order___-node_modules-font-awesome-css-font-awesome__3GUUW:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast___-node_modules-font-awesome-css-font-awesome__1EoEX:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle___-node_modules-font-awesome-css-font-awesome__5bh2V:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle___-node_modules-font-awesome-css-font-awesome__3q80t:before,\n.fa-google-plus-official___-node_modules-font-awesome-css-font-awesome__1XL2d:before {\n  content: \"\\F2B3\";\n}\n.fa-fa___-node_modules-font-awesome-css-font-awesome__1bw7W:before,\n.fa-font-awesome___-node_modules-font-awesome-css-font-awesome__1A60b:before {\n  content: \"\\F2B4\";\n}\n.sr-only___-node_modules-font-awesome-css-font-awesome__9uHFW {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable___-node_modules-font-awesome-css-font-awesome__2F-Hl:active,\n.sr-only-focusable___-node_modules-font-awesome-css-font-awesome__2F-Hl:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);

	// exports
	exports.locals = {
		"fa": "fa___-node_modules-font-awesome-css-font-awesome__3u8n_",
		"fa-lg": "fa-lg___-node_modules-font-awesome-css-font-awesome__11RRx",
		"fa-2x": "fa-2x___-node_modules-font-awesome-css-font-awesome__1hrD5",
		"fa-3x": "fa-3x___-node_modules-font-awesome-css-font-awesome__2OKJ0",
		"fa-4x": "fa-4x___-node_modules-font-awesome-css-font-awesome__aigiu",
		"fa-5x": "fa-5x___-node_modules-font-awesome-css-font-awesome__1IXB-",
		"fa-fw": "fa-fw___-node_modules-font-awesome-css-font-awesome__1uVEy",
		"fa-ul": "fa-ul___-node_modules-font-awesome-css-font-awesome__2V1V0",
		"fa-li": "fa-li___-node_modules-font-awesome-css-font-awesome__1Mfos",
		"fa-border": "fa-border___-node_modules-font-awesome-css-font-awesome__1Mk3g",
		"fa-pull-left": "fa-pull-left___-node_modules-font-awesome-css-font-awesome__2lpmn",
		"fa-pull-right": "fa-pull-right___-node_modules-font-awesome-css-font-awesome__3RqVX",
		"pull-right": "pull-right___-node_modules-font-awesome-css-font-awesome__1Iw7t",
		"pull-left": "pull-left___-node_modules-font-awesome-css-font-awesome__1z29B",
		"fa-spin": "fa-spin___-node_modules-font-awesome-css-font-awesome__1JyiK",
		"fa-pulse": "fa-pulse___-node_modules-font-awesome-css-font-awesome__11S0-",
		"fa-rotate-90": "fa-rotate-90___-node_modules-font-awesome-css-font-awesome__3WSlk",
		"fa-rotate-180": "fa-rotate-180___-node_modules-font-awesome-css-font-awesome__2JFoA",
		"fa-rotate-270": "fa-rotate-270___-node_modules-font-awesome-css-font-awesome__OV5QL",
		"fa-flip-horizontal": "fa-flip-horizontal___-node_modules-font-awesome-css-font-awesome__2JxPH",
		"fa-flip-vertical": "fa-flip-vertical___-node_modules-font-awesome-css-font-awesome__18fZQ",
		"fa-stack": "fa-stack___-node_modules-font-awesome-css-font-awesome__2DfI1",
		"fa-stack-1x": "fa-stack-1x___-node_modules-font-awesome-css-font-awesome__TLjzC",
		"fa-stack-2x": "fa-stack-2x___-node_modules-font-awesome-css-font-awesome__aygg6",
		"fa-inverse": "fa-inverse___-node_modules-font-awesome-css-font-awesome__3_cNy",
		"fa-glass": "fa-glass___-node_modules-font-awesome-css-font-awesome__3XHqM",
		"fa-music": "fa-music___-node_modules-font-awesome-css-font-awesome__1UKwb",
		"fa-search": "fa-search___-node_modules-font-awesome-css-font-awesome__1-k1v",
		"fa-envelope-o": "fa-envelope-o___-node_modules-font-awesome-css-font-awesome__2WraD",
		"fa-heart": "fa-heart___-node_modules-font-awesome-css-font-awesome__3X2zt",
		"fa-star": "fa-star___-node_modules-font-awesome-css-font-awesome__EQLL1",
		"fa-star-o": "fa-star-o___-node_modules-font-awesome-css-font-awesome__2-1gQ",
		"fa-user": "fa-user___-node_modules-font-awesome-css-font-awesome__1mgL3",
		"fa-film": "fa-film___-node_modules-font-awesome-css-font-awesome__2MkXe",
		"fa-th-large": "fa-th-large___-node_modules-font-awesome-css-font-awesome__cnPHE",
		"fa-th": "fa-th___-node_modules-font-awesome-css-font-awesome__1S3Oy",
		"fa-th-list": "fa-th-list___-node_modules-font-awesome-css-font-awesome__14Xfy",
		"fa-check": "fa-check___-node_modules-font-awesome-css-font-awesome__p_qCp",
		"fa-remove": "fa-remove___-node_modules-font-awesome-css-font-awesome__37-Sq",
		"fa-close": "fa-close___-node_modules-font-awesome-css-font-awesome__2e2Fg",
		"fa-times": "fa-times___-node_modules-font-awesome-css-font-awesome__3muvp",
		"fa-search-plus": "fa-search-plus___-node_modules-font-awesome-css-font-awesome__3uLe6",
		"fa-search-minus": "fa-search-minus___-node_modules-font-awesome-css-font-awesome__3dtNP",
		"fa-power-off": "fa-power-off___-node_modules-font-awesome-css-font-awesome__Jx_AW",
		"fa-signal": "fa-signal___-node_modules-font-awesome-css-font-awesome__2Esgq",
		"fa-gear": "fa-gear___-node_modules-font-awesome-css-font-awesome__3HjIm",
		"fa-cog": "fa-cog___-node_modules-font-awesome-css-font-awesome__DnzAR",
		"fa-trash-o": "fa-trash-o___-node_modules-font-awesome-css-font-awesome__2EkWM",
		"fa-home": "fa-home___-node_modules-font-awesome-css-font-awesome__1xcss",
		"fa-file-o": "fa-file-o___-node_modules-font-awesome-css-font-awesome__43lmV",
		"fa-clock-o": "fa-clock-o___-node_modules-font-awesome-css-font-awesome__34dUR",
		"fa-road": "fa-road___-node_modules-font-awesome-css-font-awesome__2tKN6",
		"fa-download": "fa-download___-node_modules-font-awesome-css-font-awesome__3jVK_",
		"fa-arrow-circle-o-down": "fa-arrow-circle-o-down___-node_modules-font-awesome-css-font-awesome__3zRXZ",
		"fa-arrow-circle-o-up": "fa-arrow-circle-o-up___-node_modules-font-awesome-css-font-awesome__2cmuw",
		"fa-inbox": "fa-inbox___-node_modules-font-awesome-css-font-awesome__1KIcv",
		"fa-play-circle-o": "fa-play-circle-o___-node_modules-font-awesome-css-font-awesome__1N2YM",
		"fa-rotate-right": "fa-rotate-right___-node_modules-font-awesome-css-font-awesome__2Ee-z",
		"fa-repeat": "fa-repeat___-node_modules-font-awesome-css-font-awesome__1DCpu",
		"fa-refresh": "fa-refresh___-node_modules-font-awesome-css-font-awesome__1XQ90",
		"fa-list-alt": "fa-list-alt___-node_modules-font-awesome-css-font-awesome__90jkA",
		"fa-lock": "fa-lock___-node_modules-font-awesome-css-font-awesome__2aD-e",
		"fa-flag": "fa-flag___-node_modules-font-awesome-css-font-awesome__3lSrk",
		"fa-headphones": "fa-headphones___-node_modules-font-awesome-css-font-awesome__205cL",
		"fa-volume-off": "fa-volume-off___-node_modules-font-awesome-css-font-awesome__eQlMc",
		"fa-volume-down": "fa-volume-down___-node_modules-font-awesome-css-font-awesome__2GJeI",
		"fa-volume-up": "fa-volume-up___-node_modules-font-awesome-css-font-awesome__3Z_I0",
		"fa-qrcode": "fa-qrcode___-node_modules-font-awesome-css-font-awesome__2kjAj",
		"fa-barcode": "fa-barcode___-node_modules-font-awesome-css-font-awesome__e9aMe",
		"fa-tag": "fa-tag___-node_modules-font-awesome-css-font-awesome__19gLs",
		"fa-tags": "fa-tags___-node_modules-font-awesome-css-font-awesome__2MPPR",
		"fa-book": "fa-book___-node_modules-font-awesome-css-font-awesome__1U1TO",
		"fa-bookmark": "fa-bookmark___-node_modules-font-awesome-css-font-awesome__1_a0N",
		"fa-print": "fa-print___-node_modules-font-awesome-css-font-awesome__16gPR",
		"fa-camera": "fa-camera___-node_modules-font-awesome-css-font-awesome__g6YVj",
		"fa-font": "fa-font___-node_modules-font-awesome-css-font-awesome__2ggUl",
		"fa-bold": "fa-bold___-node_modules-font-awesome-css-font-awesome__RbuLB",
		"fa-italic": "fa-italic___-node_modules-font-awesome-css-font-awesome__2UFcL",
		"fa-text-height": "fa-text-height___-node_modules-font-awesome-css-font-awesome__2CMkM",
		"fa-text-width": "fa-text-width___-node_modules-font-awesome-css-font-awesome__ry56R",
		"fa-align-left": "fa-align-left___-node_modules-font-awesome-css-font-awesome__3xrKt",
		"fa-align-center": "fa-align-center___-node_modules-font-awesome-css-font-awesome__3rUC_",
		"fa-align-right": "fa-align-right___-node_modules-font-awesome-css-font-awesome__3vbdk",
		"fa-align-justify": "fa-align-justify___-node_modules-font-awesome-css-font-awesome__mkmOk",
		"fa-list": "fa-list___-node_modules-font-awesome-css-font-awesome__1KRby",
		"fa-dedent": "fa-dedent___-node_modules-font-awesome-css-font-awesome__GI3th",
		"fa-outdent": "fa-outdent___-node_modules-font-awesome-css-font-awesome__1m6-B",
		"fa-indent": "fa-indent___-node_modules-font-awesome-css-font-awesome__f1kQi",
		"fa-video-camera": "fa-video-camera___-node_modules-font-awesome-css-font-awesome__22IMa",
		"fa-photo": "fa-photo___-node_modules-font-awesome-css-font-awesome__2-F-o",
		"fa-image": "fa-image___-node_modules-font-awesome-css-font-awesome__3jcqT",
		"fa-picture-o": "fa-picture-o___-node_modules-font-awesome-css-font-awesome__3KXow",
		"fa-pencil": "fa-pencil___-node_modules-font-awesome-css-font-awesome__1POPa",
		"fa-map-marker": "fa-map-marker___-node_modules-font-awesome-css-font-awesome__2GfdR",
		"fa-adjust": "fa-adjust___-node_modules-font-awesome-css-font-awesome__Rkvuf",
		"fa-tint": "fa-tint___-node_modules-font-awesome-css-font-awesome__1Cv39",
		"fa-edit": "fa-edit___-node_modules-font-awesome-css-font-awesome__1Og2o",
		"fa-pencil-square-o": "fa-pencil-square-o___-node_modules-font-awesome-css-font-awesome__1ueGZ",
		"fa-share-square-o": "fa-share-square-o___-node_modules-font-awesome-css-font-awesome__2iYcu",
		"fa-check-square-o": "fa-check-square-o___-node_modules-font-awesome-css-font-awesome__1jlVw",
		"fa-arrows": "fa-arrows___-node_modules-font-awesome-css-font-awesome__2oAlH",
		"fa-step-backward": "fa-step-backward___-node_modules-font-awesome-css-font-awesome__29frd",
		"fa-fast-backward": "fa-fast-backward___-node_modules-font-awesome-css-font-awesome__2w09x",
		"fa-backward": "fa-backward___-node_modules-font-awesome-css-font-awesome__3kqtA",
		"fa-play": "fa-play___-node_modules-font-awesome-css-font-awesome__2G5eE",
		"fa-pause": "fa-pause___-node_modules-font-awesome-css-font-awesome__1t0be",
		"fa-stop": "fa-stop___-node_modules-font-awesome-css-font-awesome__33gIQ",
		"fa-forward": "fa-forward___-node_modules-font-awesome-css-font-awesome__1bvwf",
		"fa-fast-forward": "fa-fast-forward___-node_modules-font-awesome-css-font-awesome__29QV-",
		"fa-step-forward": "fa-step-forward___-node_modules-font-awesome-css-font-awesome__2ui4q",
		"fa-eject": "fa-eject___-node_modules-font-awesome-css-font-awesome__16jGf",
		"fa-chevron-left": "fa-chevron-left___-node_modules-font-awesome-css-font-awesome__3Z8K0",
		"fa-chevron-right": "fa-chevron-right___-node_modules-font-awesome-css-font-awesome__1cVmN",
		"fa-plus-circle": "fa-plus-circle___-node_modules-font-awesome-css-font-awesome__2x-X6",
		"fa-minus-circle": "fa-minus-circle___-node_modules-font-awesome-css-font-awesome__1jOI2",
		"fa-times-circle": "fa-times-circle___-node_modules-font-awesome-css-font-awesome__3Zc31",
		"fa-check-circle": "fa-check-circle___-node_modules-font-awesome-css-font-awesome__v6klV",
		"fa-question-circle": "fa-question-circle___-node_modules-font-awesome-css-font-awesome__ZuTXl",
		"fa-info-circle": "fa-info-circle___-node_modules-font-awesome-css-font-awesome__HNCX9",
		"fa-crosshairs": "fa-crosshairs___-node_modules-font-awesome-css-font-awesome__3Beaf",
		"fa-times-circle-o": "fa-times-circle-o___-node_modules-font-awesome-css-font-awesome__3CZGp",
		"fa-check-circle-o": "fa-check-circle-o___-node_modules-font-awesome-css-font-awesome__2Ejw9",
		"fa-ban": "fa-ban___-node_modules-font-awesome-css-font-awesome__2lvUE",
		"fa-arrow-left": "fa-arrow-left___-node_modules-font-awesome-css-font-awesome__2z58d",
		"fa-arrow-right": "fa-arrow-right___-node_modules-font-awesome-css-font-awesome__2u7qy",
		"fa-arrow-up": "fa-arrow-up___-node_modules-font-awesome-css-font-awesome__JIESj",
		"fa-arrow-down": "fa-arrow-down___-node_modules-font-awesome-css-font-awesome__3drEG",
		"fa-mail-forward": "fa-mail-forward___-node_modules-font-awesome-css-font-awesome__3dDsK",
		"fa-share": "fa-share___-node_modules-font-awesome-css-font-awesome__3Gtfw",
		"fa-expand": "fa-expand___-node_modules-font-awesome-css-font-awesome__3Xdi3",
		"fa-compress": "fa-compress___-node_modules-font-awesome-css-font-awesome__1FK81",
		"fa-plus": "fa-plus___-node_modules-font-awesome-css-font-awesome__16mrx",
		"fa-minus": "fa-minus___-node_modules-font-awesome-css-font-awesome__32Q2d",
		"fa-asterisk": "fa-asterisk___-node_modules-font-awesome-css-font-awesome__1MWOU",
		"fa-exclamation-circle": "fa-exclamation-circle___-node_modules-font-awesome-css-font-awesome__1Nndf",
		"fa-gift": "fa-gift___-node_modules-font-awesome-css-font-awesome__3MOy7",
		"fa-leaf": "fa-leaf___-node_modules-font-awesome-css-font-awesome__1JIvZ",
		"fa-fire": "fa-fire___-node_modules-font-awesome-css-font-awesome__3YK_9",
		"fa-eye": "fa-eye___-node_modules-font-awesome-css-font-awesome__11mmK",
		"fa-eye-slash": "fa-eye-slash___-node_modules-font-awesome-css-font-awesome__2KqTT",
		"fa-warning": "fa-warning___-node_modules-font-awesome-css-font-awesome__20WQ-",
		"fa-exclamation-triangle": "fa-exclamation-triangle___-node_modules-font-awesome-css-font-awesome__1XmwE",
		"fa-plane": "fa-plane___-node_modules-font-awesome-css-font-awesome__264OL",
		"fa-calendar": "fa-calendar___-node_modules-font-awesome-css-font-awesome__1WkLJ",
		"fa-random": "fa-random___-node_modules-font-awesome-css-font-awesome__yvBJp",
		"fa-comment": "fa-comment___-node_modules-font-awesome-css-font-awesome__3KwzR",
		"fa-magnet": "fa-magnet___-node_modules-font-awesome-css-font-awesome__2c0dE",
		"fa-chevron-up": "fa-chevron-up___-node_modules-font-awesome-css-font-awesome__2I940",
		"fa-chevron-down": "fa-chevron-down___-node_modules-font-awesome-css-font-awesome__1yETd",
		"fa-retweet": "fa-retweet___-node_modules-font-awesome-css-font-awesome__6mbFt",
		"fa-shopping-cart": "fa-shopping-cart___-node_modules-font-awesome-css-font-awesome__SWhJu",
		"fa-folder": "fa-folder___-node_modules-font-awesome-css-font-awesome__3iVkK",
		"fa-folder-open": "fa-folder-open___-node_modules-font-awesome-css-font-awesome__3gZWA",
		"fa-arrows-v": "fa-arrows-v___-node_modules-font-awesome-css-font-awesome__3EVsA",
		"fa-arrows-h": "fa-arrows-h___-node_modules-font-awesome-css-font-awesome__2Xqih",
		"fa-bar-chart-o": "fa-bar-chart-o___-node_modules-font-awesome-css-font-awesome__1eTxl",
		"fa-bar-chart": "fa-bar-chart___-node_modules-font-awesome-css-font-awesome__E-l2R",
		"fa-twitter-square": "fa-twitter-square___-node_modules-font-awesome-css-font-awesome__rGxRJ",
		"fa-facebook-square": "fa-facebook-square___-node_modules-font-awesome-css-font-awesome__3ox-L",
		"fa-camera-retro": "fa-camera-retro___-node_modules-font-awesome-css-font-awesome__3zDCe",
		"fa-key": "fa-key___-node_modules-font-awesome-css-font-awesome__2HpwV",
		"fa-gears": "fa-gears___-node_modules-font-awesome-css-font-awesome__8pc44",
		"fa-cogs": "fa-cogs___-node_modules-font-awesome-css-font-awesome__C8Ndn",
		"fa-comments": "fa-comments___-node_modules-font-awesome-css-font-awesome__20zq3",
		"fa-thumbs-o-up": "fa-thumbs-o-up___-node_modules-font-awesome-css-font-awesome__3lYf6",
		"fa-thumbs-o-down": "fa-thumbs-o-down___-node_modules-font-awesome-css-font-awesome__33yk9",
		"fa-star-half": "fa-star-half___-node_modules-font-awesome-css-font-awesome__1kbbN",
		"fa-heart-o": "fa-heart-o___-node_modules-font-awesome-css-font-awesome__CPg-1",
		"fa-sign-out": "fa-sign-out___-node_modules-font-awesome-css-font-awesome__3JytW",
		"fa-linkedin-square": "fa-linkedin-square___-node_modules-font-awesome-css-font-awesome__1Ykeg",
		"fa-thumb-tack": "fa-thumb-tack___-node_modules-font-awesome-css-font-awesome__1pz3Z",
		"fa-external-link": "fa-external-link___-node_modules-font-awesome-css-font-awesome__LSdw8",
		"fa-sign-in": "fa-sign-in___-node_modules-font-awesome-css-font-awesome__35tjE",
		"fa-trophy": "fa-trophy___-node_modules-font-awesome-css-font-awesome__w0UIF",
		"fa-github-square": "fa-github-square___-node_modules-font-awesome-css-font-awesome__3NU_d",
		"fa-upload": "fa-upload___-node_modules-font-awesome-css-font-awesome__JXScT",
		"fa-lemon-o": "fa-lemon-o___-node_modules-font-awesome-css-font-awesome__3Lbz6",
		"fa-phone": "fa-phone___-node_modules-font-awesome-css-font-awesome__2rv2c",
		"fa-square-o": "fa-square-o___-node_modules-font-awesome-css-font-awesome__1d9ye",
		"fa-bookmark-o": "fa-bookmark-o___-node_modules-font-awesome-css-font-awesome__2FP55",
		"fa-phone-square": "fa-phone-square___-node_modules-font-awesome-css-font-awesome__5kBRC",
		"fa-twitter": "fa-twitter___-node_modules-font-awesome-css-font-awesome__38AzR",
		"fa-facebook-f": "fa-facebook-f___-node_modules-font-awesome-css-font-awesome___Q6qZ",
		"fa-facebook": "fa-facebook___-node_modules-font-awesome-css-font-awesome__2OvBg",
		"fa-github": "fa-github___-node_modules-font-awesome-css-font-awesome__2jO4n",
		"fa-unlock": "fa-unlock___-node_modules-font-awesome-css-font-awesome__xuzOd",
		"fa-credit-card": "fa-credit-card___-node_modules-font-awesome-css-font-awesome__14hZq",
		"fa-feed": "fa-feed___-node_modules-font-awesome-css-font-awesome__1PRZ3",
		"fa-rss": "fa-rss___-node_modules-font-awesome-css-font-awesome__3NFY9",
		"fa-hdd-o": "fa-hdd-o___-node_modules-font-awesome-css-font-awesome__1jWnq",
		"fa-bullhorn": "fa-bullhorn___-node_modules-font-awesome-css-font-awesome__1pJrH",
		"fa-bell": "fa-bell___-node_modules-font-awesome-css-font-awesome__34vFt",
		"fa-certificate": "fa-certificate___-node_modules-font-awesome-css-font-awesome__1cfCb",
		"fa-hand-o-right": "fa-hand-o-right___-node_modules-font-awesome-css-font-awesome__3GBtv",
		"fa-hand-o-left": "fa-hand-o-left___-node_modules-font-awesome-css-font-awesome__2lAoW",
		"fa-hand-o-up": "fa-hand-o-up___-node_modules-font-awesome-css-font-awesome__1PNRS",
		"fa-hand-o-down": "fa-hand-o-down___-node_modules-font-awesome-css-font-awesome__1bpFs",
		"fa-arrow-circle-left": "fa-arrow-circle-left___-node_modules-font-awesome-css-font-awesome__2VTuz",
		"fa-arrow-circle-right": "fa-arrow-circle-right___-node_modules-font-awesome-css-font-awesome__2iziH",
		"fa-arrow-circle-up": "fa-arrow-circle-up___-node_modules-font-awesome-css-font-awesome__2MjtI",
		"fa-arrow-circle-down": "fa-arrow-circle-down___-node_modules-font-awesome-css-font-awesome__1l3-M",
		"fa-globe": "fa-globe___-node_modules-font-awesome-css-font-awesome__1uWLG",
		"fa-wrench": "fa-wrench___-node_modules-font-awesome-css-font-awesome__Pg2lw",
		"fa-tasks": "fa-tasks___-node_modules-font-awesome-css-font-awesome__1iFuF",
		"fa-filter": "fa-filter___-node_modules-font-awesome-css-font-awesome__3mKU6",
		"fa-briefcase": "fa-briefcase___-node_modules-font-awesome-css-font-awesome__eic8M",
		"fa-arrows-alt": "fa-arrows-alt___-node_modules-font-awesome-css-font-awesome__1l0Fo",
		"fa-group": "fa-group___-node_modules-font-awesome-css-font-awesome__2Wggf",
		"fa-users": "fa-users___-node_modules-font-awesome-css-font-awesome__3qKuf",
		"fa-chain": "fa-chain___-node_modules-font-awesome-css-font-awesome__GhFLl",
		"fa-link": "fa-link___-node_modules-font-awesome-css-font-awesome__1KGTj",
		"fa-cloud": "fa-cloud___-node_modules-font-awesome-css-font-awesome__2qfAS",
		"fa-flask": "fa-flask___-node_modules-font-awesome-css-font-awesome__B2pW8",
		"fa-cut": "fa-cut___-node_modules-font-awesome-css-font-awesome__9pim7",
		"fa-scissors": "fa-scissors___-node_modules-font-awesome-css-font-awesome__3VSQp",
		"fa-copy": "fa-copy___-node_modules-font-awesome-css-font-awesome__lUboT",
		"fa-files-o": "fa-files-o___-node_modules-font-awesome-css-font-awesome__HZoUd",
		"fa-paperclip": "fa-paperclip___-node_modules-font-awesome-css-font-awesome__3evRa",
		"fa-save": "fa-save___-node_modules-font-awesome-css-font-awesome__3kIBF",
		"fa-floppy-o": "fa-floppy-o___-node_modules-font-awesome-css-font-awesome__UJKhF",
		"fa-square": "fa-square___-node_modules-font-awesome-css-font-awesome__2MoHW",
		"fa-navicon": "fa-navicon___-node_modules-font-awesome-css-font-awesome__1-Wbx",
		"fa-reorder": "fa-reorder___-node_modules-font-awesome-css-font-awesome__2gdhE",
		"fa-bars": "fa-bars___-node_modules-font-awesome-css-font-awesome__1TxYb",
		"fa-list-ul": "fa-list-ul___-node_modules-font-awesome-css-font-awesome__2v7W3",
		"fa-list-ol": "fa-list-ol___-node_modules-font-awesome-css-font-awesome__2u37F",
		"fa-strikethrough": "fa-strikethrough___-node_modules-font-awesome-css-font-awesome__2xHlZ",
		"fa-underline": "fa-underline___-node_modules-font-awesome-css-font-awesome__e2-Yh",
		"fa-table": "fa-table___-node_modules-font-awesome-css-font-awesome__37RYA",
		"fa-magic": "fa-magic___-node_modules-font-awesome-css-font-awesome__1f4cy",
		"fa-truck": "fa-truck___-node_modules-font-awesome-css-font-awesome__1UpV7",
		"fa-pinterest": "fa-pinterest___-node_modules-font-awesome-css-font-awesome__1dnkz",
		"fa-pinterest-square": "fa-pinterest-square___-node_modules-font-awesome-css-font-awesome__1G7wP",
		"fa-google-plus-square": "fa-google-plus-square___-node_modules-font-awesome-css-font-awesome__1sk1e",
		"fa-google-plus": "fa-google-plus___-node_modules-font-awesome-css-font-awesome__1fTmg",
		"fa-money": "fa-money___-node_modules-font-awesome-css-font-awesome__32D6s",
		"fa-caret-down": "fa-caret-down___-node_modules-font-awesome-css-font-awesome__1xFx3",
		"fa-caret-up": "fa-caret-up___-node_modules-font-awesome-css-font-awesome__1wHVX",
		"fa-caret-left": "fa-caret-left___-node_modules-font-awesome-css-font-awesome__3WTG1",
		"fa-caret-right": "fa-caret-right___-node_modules-font-awesome-css-font-awesome__9Obow",
		"fa-columns": "fa-columns___-node_modules-font-awesome-css-font-awesome__16Ubp",
		"fa-unsorted": "fa-unsorted___-node_modules-font-awesome-css-font-awesome__3la6L",
		"fa-sort": "fa-sort___-node_modules-font-awesome-css-font-awesome__36Bt4",
		"fa-sort-down": "fa-sort-down___-node_modules-font-awesome-css-font-awesome__sIQWu",
		"fa-sort-desc": "fa-sort-desc___-node_modules-font-awesome-css-font-awesome__3v0Cm",
		"fa-sort-up": "fa-sort-up___-node_modules-font-awesome-css-font-awesome__6Dt6R",
		"fa-sort-asc": "fa-sort-asc___-node_modules-font-awesome-css-font-awesome__1oBSn",
		"fa-envelope": "fa-envelope___-node_modules-font-awesome-css-font-awesome__6VFHt",
		"fa-linkedin": "fa-linkedin___-node_modules-font-awesome-css-font-awesome__3ybZr",
		"fa-rotate-left": "fa-rotate-left___-node_modules-font-awesome-css-font-awesome__37r-m",
		"fa-undo": "fa-undo___-node_modules-font-awesome-css-font-awesome__1dzfz",
		"fa-legal": "fa-legal___-node_modules-font-awesome-css-font-awesome__1wCJp",
		"fa-gavel": "fa-gavel___-node_modules-font-awesome-css-font-awesome__22SQa",
		"fa-dashboard": "fa-dashboard___-node_modules-font-awesome-css-font-awesome__3aV8M",
		"fa-tachometer": "fa-tachometer___-node_modules-font-awesome-css-font-awesome__1DZib",
		"fa-comment-o": "fa-comment-o___-node_modules-font-awesome-css-font-awesome__1sdPE",
		"fa-comments-o": "fa-comments-o___-node_modules-font-awesome-css-font-awesome__RTrMT",
		"fa-flash": "fa-flash___-node_modules-font-awesome-css-font-awesome__3T0YK",
		"fa-bolt": "fa-bolt___-node_modules-font-awesome-css-font-awesome__16Idg",
		"fa-sitemap": "fa-sitemap___-node_modules-font-awesome-css-font-awesome__2khgt",
		"fa-umbrella": "fa-umbrella___-node_modules-font-awesome-css-font-awesome__2cw7l",
		"fa-paste": "fa-paste___-node_modules-font-awesome-css-font-awesome__2VwNO",
		"fa-clipboard": "fa-clipboard___-node_modules-font-awesome-css-font-awesome__6sKNR",
		"fa-lightbulb-o": "fa-lightbulb-o___-node_modules-font-awesome-css-font-awesome__AO-xC",
		"fa-exchange": "fa-exchange___-node_modules-font-awesome-css-font-awesome__3EA03",
		"fa-cloud-download": "fa-cloud-download___-node_modules-font-awesome-css-font-awesome__2DcCA",
		"fa-cloud-upload": "fa-cloud-upload___-node_modules-font-awesome-css-font-awesome__DdlTU",
		"fa-user-md": "fa-user-md___-node_modules-font-awesome-css-font-awesome__3pnzT",
		"fa-stethoscope": "fa-stethoscope___-node_modules-font-awesome-css-font-awesome__30AWa",
		"fa-suitcase": "fa-suitcase___-node_modules-font-awesome-css-font-awesome__3tH0i",
		"fa-bell-o": "fa-bell-o___-node_modules-font-awesome-css-font-awesome__2I_Uo",
		"fa-coffee": "fa-coffee___-node_modules-font-awesome-css-font-awesome__Zxwks",
		"fa-cutlery": "fa-cutlery___-node_modules-font-awesome-css-font-awesome__DHaS4",
		"fa-file-text-o": "fa-file-text-o___-node_modules-font-awesome-css-font-awesome__2uxvu",
		"fa-building-o": "fa-building-o___-node_modules-font-awesome-css-font-awesome__2Eb-W",
		"fa-hospital-o": "fa-hospital-o___-node_modules-font-awesome-css-font-awesome__1nKEO",
		"fa-ambulance": "fa-ambulance___-node_modules-font-awesome-css-font-awesome__3TO8o",
		"fa-medkit": "fa-medkit___-node_modules-font-awesome-css-font-awesome__2CsMD",
		"fa-fighter-jet": "fa-fighter-jet___-node_modules-font-awesome-css-font-awesome__6VyXM",
		"fa-beer": "fa-beer___-node_modules-font-awesome-css-font-awesome__1SFzY",
		"fa-h-square": "fa-h-square___-node_modules-font-awesome-css-font-awesome__2qFtS",
		"fa-plus-square": "fa-plus-square___-node_modules-font-awesome-css-font-awesome__M4nU7",
		"fa-angle-double-left": "fa-angle-double-left___-node_modules-font-awesome-css-font-awesome__w_RC6",
		"fa-angle-double-right": "fa-angle-double-right___-node_modules-font-awesome-css-font-awesome__314eH",
		"fa-angle-double-up": "fa-angle-double-up___-node_modules-font-awesome-css-font-awesome__36lLF",
		"fa-angle-double-down": "fa-angle-double-down___-node_modules-font-awesome-css-font-awesome__2_CFg",
		"fa-angle-left": "fa-angle-left___-node_modules-font-awesome-css-font-awesome__1iqvB",
		"fa-angle-right": "fa-angle-right___-node_modules-font-awesome-css-font-awesome__1zMu4",
		"fa-angle-up": "fa-angle-up___-node_modules-font-awesome-css-font-awesome__2EUzr",
		"fa-angle-down": "fa-angle-down___-node_modules-font-awesome-css-font-awesome__2wvs5",
		"fa-desktop": "fa-desktop___-node_modules-font-awesome-css-font-awesome__2rAlY",
		"fa-laptop": "fa-laptop___-node_modules-font-awesome-css-font-awesome__2c6_7",
		"fa-tablet": "fa-tablet___-node_modules-font-awesome-css-font-awesome__18V4R",
		"fa-mobile-phone": "fa-mobile-phone___-node_modules-font-awesome-css-font-awesome__PXofs",
		"fa-mobile": "fa-mobile___-node_modules-font-awesome-css-font-awesome__2jvE_",
		"fa-circle-o": "fa-circle-o___-node_modules-font-awesome-css-font-awesome__2rqIm",
		"fa-quote-left": "fa-quote-left___-node_modules-font-awesome-css-font-awesome__21m0M",
		"fa-quote-right": "fa-quote-right___-node_modules-font-awesome-css-font-awesome__2BfO8",
		"fa-spinner": "fa-spinner___-node_modules-font-awesome-css-font-awesome__PAbeZ",
		"fa-circle": "fa-circle___-node_modules-font-awesome-css-font-awesome__3-Suz",
		"fa-mail-reply": "fa-mail-reply___-node_modules-font-awesome-css-font-awesome__2uETc",
		"fa-reply": "fa-reply___-node_modules-font-awesome-css-font-awesome__pDNgt",
		"fa-github-alt": "fa-github-alt___-node_modules-font-awesome-css-font-awesome__DvP0H",
		"fa-folder-o": "fa-folder-o___-node_modules-font-awesome-css-font-awesome__x6i42",
		"fa-folder-open-o": "fa-folder-open-o___-node_modules-font-awesome-css-font-awesome__3lsvI",
		"fa-smile-o": "fa-smile-o___-node_modules-font-awesome-css-font-awesome__2vunv",
		"fa-frown-o": "fa-frown-o___-node_modules-font-awesome-css-font-awesome__2Kqzm",
		"fa-meh-o": "fa-meh-o___-node_modules-font-awesome-css-font-awesome__pMeL6",
		"fa-gamepad": "fa-gamepad___-node_modules-font-awesome-css-font-awesome__1h1u3",
		"fa-keyboard-o": "fa-keyboard-o___-node_modules-font-awesome-css-font-awesome__1NXjB",
		"fa-flag-o": "fa-flag-o___-node_modules-font-awesome-css-font-awesome__3uej_",
		"fa-flag-checkered": "fa-flag-checkered___-node_modules-font-awesome-css-font-awesome__2qcdW",
		"fa-terminal": "fa-terminal___-node_modules-font-awesome-css-font-awesome__1j8m2",
		"fa-code": "fa-code___-node_modules-font-awesome-css-font-awesome__2B1Qp",
		"fa-mail-reply-all": "fa-mail-reply-all___-node_modules-font-awesome-css-font-awesome__3s06O",
		"fa-reply-all": "fa-reply-all___-node_modules-font-awesome-css-font-awesome__43Rl6",
		"fa-star-half-empty": "fa-star-half-empty___-node_modules-font-awesome-css-font-awesome__uGXvV",
		"fa-star-half-full": "fa-star-half-full___-node_modules-font-awesome-css-font-awesome__t0tCJ",
		"fa-star-half-o": "fa-star-half-o___-node_modules-font-awesome-css-font-awesome__2L2BC",
		"fa-location-arrow": "fa-location-arrow___-node_modules-font-awesome-css-font-awesome__110u1",
		"fa-crop": "fa-crop___-node_modules-font-awesome-css-font-awesome__2jRia",
		"fa-code-fork": "fa-code-fork___-node_modules-font-awesome-css-font-awesome__1FoUh",
		"fa-unlink": "fa-unlink___-node_modules-font-awesome-css-font-awesome__30d3K",
		"fa-chain-broken": "fa-chain-broken___-node_modules-font-awesome-css-font-awesome__1F3P8",
		"fa-question": "fa-question___-node_modules-font-awesome-css-font-awesome__10j91",
		"fa-info": "fa-info___-node_modules-font-awesome-css-font-awesome__2nZV5",
		"fa-exclamation": "fa-exclamation___-node_modules-font-awesome-css-font-awesome__iWEVL",
		"fa-superscript": "fa-superscript___-node_modules-font-awesome-css-font-awesome__1hNZp",
		"fa-subscript": "fa-subscript___-node_modules-font-awesome-css-font-awesome__3Q_xk",
		"fa-eraser": "fa-eraser___-node_modules-font-awesome-css-font-awesome__2nrUM",
		"fa-puzzle-piece": "fa-puzzle-piece___-node_modules-font-awesome-css-font-awesome__1bQFF",
		"fa-microphone": "fa-microphone___-node_modules-font-awesome-css-font-awesome__2rX5o",
		"fa-microphone-slash": "fa-microphone-slash___-node_modules-font-awesome-css-font-awesome__2TZw5",
		"fa-shield": "fa-shield___-node_modules-font-awesome-css-font-awesome__2WyME",
		"fa-calendar-o": "fa-calendar-o___-node_modules-font-awesome-css-font-awesome__qx1k1",
		"fa-fire-extinguisher": "fa-fire-extinguisher___-node_modules-font-awesome-css-font-awesome__g0m1S",
		"fa-rocket": "fa-rocket___-node_modules-font-awesome-css-font-awesome__1gyAd",
		"fa-maxcdn": "fa-maxcdn___-node_modules-font-awesome-css-font-awesome__2mr1O",
		"fa-chevron-circle-left": "fa-chevron-circle-left___-node_modules-font-awesome-css-font-awesome__32cwX",
		"fa-chevron-circle-right": "fa-chevron-circle-right___-node_modules-font-awesome-css-font-awesome__3Q6Z0",
		"fa-chevron-circle-up": "fa-chevron-circle-up___-node_modules-font-awesome-css-font-awesome__bPO91",
		"fa-chevron-circle-down": "fa-chevron-circle-down___-node_modules-font-awesome-css-font-awesome__3oILa",
		"fa-html5": "fa-html5___-node_modules-font-awesome-css-font-awesome__2Xmit",
		"fa-css3": "fa-css3___-node_modules-font-awesome-css-font-awesome__1M0FD",
		"fa-anchor": "fa-anchor___-node_modules-font-awesome-css-font-awesome__2HcK1",
		"fa-unlock-alt": "fa-unlock-alt___-node_modules-font-awesome-css-font-awesome__6llv-",
		"fa-bullseye": "fa-bullseye___-node_modules-font-awesome-css-font-awesome__1A8pA",
		"fa-ellipsis-h": "fa-ellipsis-h___-node_modules-font-awesome-css-font-awesome__PZSjG",
		"fa-ellipsis-v": "fa-ellipsis-v___-node_modules-font-awesome-css-font-awesome__xcbDW",
		"fa-rss-square": "fa-rss-square___-node_modules-font-awesome-css-font-awesome__VkAtR",
		"fa-play-circle": "fa-play-circle___-node_modules-font-awesome-css-font-awesome__3wYnh",
		"fa-ticket": "fa-ticket___-node_modules-font-awesome-css-font-awesome__3bjjH",
		"fa-minus-square": "fa-minus-square___-node_modules-font-awesome-css-font-awesome__2G74N",
		"fa-minus-square-o": "fa-minus-square-o___-node_modules-font-awesome-css-font-awesome__3P3yn",
		"fa-level-up": "fa-level-up___-node_modules-font-awesome-css-font-awesome__1ATlV",
		"fa-level-down": "fa-level-down___-node_modules-font-awesome-css-font-awesome__2dvB7",
		"fa-check-square": "fa-check-square___-node_modules-font-awesome-css-font-awesome__1a-ld",
		"fa-pencil-square": "fa-pencil-square___-node_modules-font-awesome-css-font-awesome__3jJAF",
		"fa-external-link-square": "fa-external-link-square___-node_modules-font-awesome-css-font-awesome__LP_C8",
		"fa-share-square": "fa-share-square___-node_modules-font-awesome-css-font-awesome__1MSH3",
		"fa-compass": "fa-compass___-node_modules-font-awesome-css-font-awesome__36CGx",
		"fa-toggle-down": "fa-toggle-down___-node_modules-font-awesome-css-font-awesome__3p-SH",
		"fa-caret-square-o-down": "fa-caret-square-o-down___-node_modules-font-awesome-css-font-awesome__2Ay4t",
		"fa-toggle-up": "fa-toggle-up___-node_modules-font-awesome-css-font-awesome__2PJKt",
		"fa-caret-square-o-up": "fa-caret-square-o-up___-node_modules-font-awesome-css-font-awesome__1TeLa",
		"fa-toggle-right": "fa-toggle-right___-node_modules-font-awesome-css-font-awesome__1_GJo",
		"fa-caret-square-o-right": "fa-caret-square-o-right___-node_modules-font-awesome-css-font-awesome__1kbGB",
		"fa-euro": "fa-euro___-node_modules-font-awesome-css-font-awesome__3aFgn",
		"fa-eur": "fa-eur___-node_modules-font-awesome-css-font-awesome__2TrmX",
		"fa-gbp": "fa-gbp___-node_modules-font-awesome-css-font-awesome__2xTh9",
		"fa-dollar": "fa-dollar___-node_modules-font-awesome-css-font-awesome__IjxzU",
		"fa-usd": "fa-usd___-node_modules-font-awesome-css-font-awesome__a7kp9",
		"fa-rupee": "fa-rupee___-node_modules-font-awesome-css-font-awesome__cvtaI",
		"fa-inr": "fa-inr___-node_modules-font-awesome-css-font-awesome__3x3Bh",
		"fa-cny": "fa-cny___-node_modules-font-awesome-css-font-awesome__1VtCW",
		"fa-rmb": "fa-rmb___-node_modules-font-awesome-css-font-awesome__2IyFU",
		"fa-yen": "fa-yen___-node_modules-font-awesome-css-font-awesome__3EYZF",
		"fa-jpy": "fa-jpy___-node_modules-font-awesome-css-font-awesome__3RfMC",
		"fa-ruble": "fa-ruble___-node_modules-font-awesome-css-font-awesome__3okEL",
		"fa-rouble": "fa-rouble___-node_modules-font-awesome-css-font-awesome__QzDU0",
		"fa-rub": "fa-rub___-node_modules-font-awesome-css-font-awesome__2O-gS",
		"fa-won": "fa-won___-node_modules-font-awesome-css-font-awesome__tjD4q",
		"fa-krw": "fa-krw___-node_modules-font-awesome-css-font-awesome__1-ZTG",
		"fa-bitcoin": "fa-bitcoin___-node_modules-font-awesome-css-font-awesome__2a-SV",
		"fa-btc": "fa-btc___-node_modules-font-awesome-css-font-awesome__3CCjZ",
		"fa-file": "fa-file___-node_modules-font-awesome-css-font-awesome__3futs",
		"fa-file-text": "fa-file-text___-node_modules-font-awesome-css-font-awesome__3fvF0",
		"fa-sort-alpha-asc": "fa-sort-alpha-asc___-node_modules-font-awesome-css-font-awesome__3QPlF",
		"fa-sort-alpha-desc": "fa-sort-alpha-desc___-node_modules-font-awesome-css-font-awesome__2mOuY",
		"fa-sort-amount-asc": "fa-sort-amount-asc___-node_modules-font-awesome-css-font-awesome__1Osrd",
		"fa-sort-amount-desc": "fa-sort-amount-desc___-node_modules-font-awesome-css-font-awesome__M-Iut",
		"fa-sort-numeric-asc": "fa-sort-numeric-asc___-node_modules-font-awesome-css-font-awesome__3k6ET",
		"fa-sort-numeric-desc": "fa-sort-numeric-desc___-node_modules-font-awesome-css-font-awesome__1Sq_s",
		"fa-thumbs-up": "fa-thumbs-up___-node_modules-font-awesome-css-font-awesome__1_1e0",
		"fa-thumbs-down": "fa-thumbs-down___-node_modules-font-awesome-css-font-awesome__2P7BY",
		"fa-youtube-square": "fa-youtube-square___-node_modules-font-awesome-css-font-awesome__1Dv21",
		"fa-youtube": "fa-youtube___-node_modules-font-awesome-css-font-awesome__5HPTf",
		"fa-xing": "fa-xing___-node_modules-font-awesome-css-font-awesome__3XURP",
		"fa-xing-square": "fa-xing-square___-node_modules-font-awesome-css-font-awesome__2TYXO",
		"fa-youtube-play": "fa-youtube-play___-node_modules-font-awesome-css-font-awesome__3Udmk",
		"fa-dropbox": "fa-dropbox___-node_modules-font-awesome-css-font-awesome__3bXeC",
		"fa-stack-overflow": "fa-stack-overflow___-node_modules-font-awesome-css-font-awesome__3go0V",
		"fa-instagram": "fa-instagram___-node_modules-font-awesome-css-font-awesome__Cioe_",
		"fa-flickr": "fa-flickr___-node_modules-font-awesome-css-font-awesome__1fv4h",
		"fa-adn": "fa-adn___-node_modules-font-awesome-css-font-awesome__t2Mzz",
		"fa-bitbucket": "fa-bitbucket___-node_modules-font-awesome-css-font-awesome__PaSGz",
		"fa-bitbucket-square": "fa-bitbucket-square___-node_modules-font-awesome-css-font-awesome__1hz1v",
		"fa-tumblr": "fa-tumblr___-node_modules-font-awesome-css-font-awesome__1pYEZ",
		"fa-tumblr-square": "fa-tumblr-square___-node_modules-font-awesome-css-font-awesome__1dAe4",
		"fa-long-arrow-down": "fa-long-arrow-down___-node_modules-font-awesome-css-font-awesome__1aeop",
		"fa-long-arrow-up": "fa-long-arrow-up___-node_modules-font-awesome-css-font-awesome__2o6oy",
		"fa-long-arrow-left": "fa-long-arrow-left___-node_modules-font-awesome-css-font-awesome__AR1re",
		"fa-long-arrow-right": "fa-long-arrow-right___-node_modules-font-awesome-css-font-awesome__24c4V",
		"fa-apple": "fa-apple___-node_modules-font-awesome-css-font-awesome__3cYNE",
		"fa-windows": "fa-windows___-node_modules-font-awesome-css-font-awesome__3JNDc",
		"fa-android": "fa-android___-node_modules-font-awesome-css-font-awesome__1IPbQ",
		"fa-linux": "fa-linux___-node_modules-font-awesome-css-font-awesome__2eml2",
		"fa-dribbble": "fa-dribbble___-node_modules-font-awesome-css-font-awesome__2ir5K",
		"fa-skype": "fa-skype___-node_modules-font-awesome-css-font-awesome__2tim9",
		"fa-foursquare": "fa-foursquare___-node_modules-font-awesome-css-font-awesome__17wq0",
		"fa-trello": "fa-trello___-node_modules-font-awesome-css-font-awesome__2ZDt7",
		"fa-female": "fa-female___-node_modules-font-awesome-css-font-awesome__2RrS4",
		"fa-male": "fa-male___-node_modules-font-awesome-css-font-awesome__3Nfmf",
		"fa-gittip": "fa-gittip___-node_modules-font-awesome-css-font-awesome__26vDr",
		"fa-gratipay": "fa-gratipay___-node_modules-font-awesome-css-font-awesome__3apRM",
		"fa-sun-o": "fa-sun-o___-node_modules-font-awesome-css-font-awesome___M0By",
		"fa-moon-o": "fa-moon-o___-node_modules-font-awesome-css-font-awesome__2cQKr",
		"fa-archive": "fa-archive___-node_modules-font-awesome-css-font-awesome__3o9qD",
		"fa-bug": "fa-bug___-node_modules-font-awesome-css-font-awesome__35InZ",
		"fa-vk": "fa-vk___-node_modules-font-awesome-css-font-awesome__1h-M1",
		"fa-weibo": "fa-weibo___-node_modules-font-awesome-css-font-awesome__glxy9",
		"fa-renren": "fa-renren___-node_modules-font-awesome-css-font-awesome__32LKB",
		"fa-pagelines": "fa-pagelines___-node_modules-font-awesome-css-font-awesome__1rLY9",
		"fa-stack-exchange": "fa-stack-exchange___-node_modules-font-awesome-css-font-awesome__3xeZF",
		"fa-arrow-circle-o-right": "fa-arrow-circle-o-right___-node_modules-font-awesome-css-font-awesome__1d6xb",
		"fa-arrow-circle-o-left": "fa-arrow-circle-o-left___-node_modules-font-awesome-css-font-awesome__2AQAT",
		"fa-toggle-left": "fa-toggle-left___-node_modules-font-awesome-css-font-awesome__2kqXp",
		"fa-caret-square-o-left": "fa-caret-square-o-left___-node_modules-font-awesome-css-font-awesome__1O1hR",
		"fa-dot-circle-o": "fa-dot-circle-o___-node_modules-font-awesome-css-font-awesome__3pD_N",
		"fa-wheelchair": "fa-wheelchair___-node_modules-font-awesome-css-font-awesome__29hMe",
		"fa-vimeo-square": "fa-vimeo-square___-node_modules-font-awesome-css-font-awesome__1EDdL",
		"fa-turkish-lira": "fa-turkish-lira___-node_modules-font-awesome-css-font-awesome__6vBlx",
		"fa-try": "fa-try___-node_modules-font-awesome-css-font-awesome__o-hk9",
		"fa-plus-square-o": "fa-plus-square-o___-node_modules-font-awesome-css-font-awesome__2kbev",
		"fa-space-shuttle": "fa-space-shuttle___-node_modules-font-awesome-css-font-awesome__W-mVD",
		"fa-slack": "fa-slack___-node_modules-font-awesome-css-font-awesome__3W8S5",
		"fa-envelope-square": "fa-envelope-square___-node_modules-font-awesome-css-font-awesome__3s5hq",
		"fa-wordpress": "fa-wordpress___-node_modules-font-awesome-css-font-awesome__2fl3A",
		"fa-openid": "fa-openid___-node_modules-font-awesome-css-font-awesome__3KixY",
		"fa-institution": "fa-institution___-node_modules-font-awesome-css-font-awesome__1nzYs",
		"fa-bank": "fa-bank___-node_modules-font-awesome-css-font-awesome__nioHN",
		"fa-university": "fa-university___-node_modules-font-awesome-css-font-awesome__1HMzw",
		"fa-mortar-board": "fa-mortar-board___-node_modules-font-awesome-css-font-awesome__G0F5u",
		"fa-graduation-cap": "fa-graduation-cap___-node_modules-font-awesome-css-font-awesome__IsxXB",
		"fa-yahoo": "fa-yahoo___-node_modules-font-awesome-css-font-awesome__2zRkQ",
		"fa-google": "fa-google___-node_modules-font-awesome-css-font-awesome__2gDvp",
		"fa-reddit": "fa-reddit___-node_modules-font-awesome-css-font-awesome__3HLpq",
		"fa-reddit-square": "fa-reddit-square___-node_modules-font-awesome-css-font-awesome__2miLp",
		"fa-stumbleupon-circle": "fa-stumbleupon-circle___-node_modules-font-awesome-css-font-awesome__3M4is",
		"fa-stumbleupon": "fa-stumbleupon___-node_modules-font-awesome-css-font-awesome__1pDVw",
		"fa-delicious": "fa-delicious___-node_modules-font-awesome-css-font-awesome__2Te_Z",
		"fa-digg": "fa-digg___-node_modules-font-awesome-css-font-awesome__1xCvr",
		"fa-pied-piper-pp": "fa-pied-piper-pp___-node_modules-font-awesome-css-font-awesome__2zkQu",
		"fa-pied-piper-alt": "fa-pied-piper-alt___-node_modules-font-awesome-css-font-awesome__1dw4L",
		"fa-drupal": "fa-drupal___-node_modules-font-awesome-css-font-awesome__PYiSj",
		"fa-joomla": "fa-joomla___-node_modules-font-awesome-css-font-awesome__2JfJt",
		"fa-language": "fa-language___-node_modules-font-awesome-css-font-awesome__1hHFK",
		"fa-fax": "fa-fax___-node_modules-font-awesome-css-font-awesome__2kUQY",
		"fa-building": "fa-building___-node_modules-font-awesome-css-font-awesome__3_tHo",
		"fa-child": "fa-child___-node_modules-font-awesome-css-font-awesome__1v2td",
		"fa-paw": "fa-paw___-node_modules-font-awesome-css-font-awesome__1gUsP",
		"fa-spoon": "fa-spoon___-node_modules-font-awesome-css-font-awesome__3oEK3",
		"fa-cube": "fa-cube___-node_modules-font-awesome-css-font-awesome__32Xd3",
		"fa-cubes": "fa-cubes___-node_modules-font-awesome-css-font-awesome__2eShW",
		"fa-behance": "fa-behance___-node_modules-font-awesome-css-font-awesome__1KaV3",
		"fa-behance-square": "fa-behance-square___-node_modules-font-awesome-css-font-awesome__2yc0_",
		"fa-steam": "fa-steam___-node_modules-font-awesome-css-font-awesome__n2y4r",
		"fa-steam-square": "fa-steam-square___-node_modules-font-awesome-css-font-awesome__3aOjv",
		"fa-recycle": "fa-recycle___-node_modules-font-awesome-css-font-awesome__3Uqpd",
		"fa-automobile": "fa-automobile___-node_modules-font-awesome-css-font-awesome__1vlyj",
		"fa-car": "fa-car___-node_modules-font-awesome-css-font-awesome__Il1XY",
		"fa-cab": "fa-cab___-node_modules-font-awesome-css-font-awesome__29bvG",
		"fa-taxi": "fa-taxi___-node_modules-font-awesome-css-font-awesome__3f3BZ",
		"fa-tree": "fa-tree___-node_modules-font-awesome-css-font-awesome__3vjk1",
		"fa-spotify": "fa-spotify___-node_modules-font-awesome-css-font-awesome__1Rnfi",
		"fa-deviantart": "fa-deviantart___-node_modules-font-awesome-css-font-awesome__6k4Ae",
		"fa-soundcloud": "fa-soundcloud___-node_modules-font-awesome-css-font-awesome__3IbcT",
		"fa-database": "fa-database___-node_modules-font-awesome-css-font-awesome__2Z4hP",
		"fa-file-pdf-o": "fa-file-pdf-o___-node_modules-font-awesome-css-font-awesome__MZMgW",
		"fa-file-word-o": "fa-file-word-o___-node_modules-font-awesome-css-font-awesome__24bqs",
		"fa-file-excel-o": "fa-file-excel-o___-node_modules-font-awesome-css-font-awesome__jGTSI",
		"fa-file-powerpoint-o": "fa-file-powerpoint-o___-node_modules-font-awesome-css-font-awesome__2l8Yb",
		"fa-file-photo-o": "fa-file-photo-o___-node_modules-font-awesome-css-font-awesome__1I2pu",
		"fa-file-picture-o": "fa-file-picture-o___-node_modules-font-awesome-css-font-awesome__AF8Nc",
		"fa-file-image-o": "fa-file-image-o___-node_modules-font-awesome-css-font-awesome__29ExI",
		"fa-file-zip-o": "fa-file-zip-o___-node_modules-font-awesome-css-font-awesome__aKpCY",
		"fa-file-archive-o": "fa-file-archive-o___-node_modules-font-awesome-css-font-awesome__2JtR6",
		"fa-file-sound-o": "fa-file-sound-o___-node_modules-font-awesome-css-font-awesome__1sPJ5",
		"fa-file-audio-o": "fa-file-audio-o___-node_modules-font-awesome-css-font-awesome__2LwZ-",
		"fa-file-movie-o": "fa-file-movie-o___-node_modules-font-awesome-css-font-awesome__15-Tf",
		"fa-file-video-o": "fa-file-video-o___-node_modules-font-awesome-css-font-awesome__2qXxF",
		"fa-file-code-o": "fa-file-code-o___-node_modules-font-awesome-css-font-awesome__2Dvtw",
		"fa-vine": "fa-vine___-node_modules-font-awesome-css-font-awesome__2s6nX",
		"fa-codepen": "fa-codepen___-node_modules-font-awesome-css-font-awesome__12ema",
		"fa-jsfiddle": "fa-jsfiddle___-node_modules-font-awesome-css-font-awesome__L8yD3",
		"fa-life-bouy": "fa-life-bouy___-node_modules-font-awesome-css-font-awesome__2rvQP",
		"fa-life-buoy": "fa-life-buoy___-node_modules-font-awesome-css-font-awesome__3zwXq",
		"fa-life-saver": "fa-life-saver___-node_modules-font-awesome-css-font-awesome__2BLo-",
		"fa-support": "fa-support___-node_modules-font-awesome-css-font-awesome__LJPeW",
		"fa-life-ring": "fa-life-ring___-node_modules-font-awesome-css-font-awesome__1McS6",
		"fa-circle-o-notch": "fa-circle-o-notch___-node_modules-font-awesome-css-font-awesome__1X_p6",
		"fa-ra": "fa-ra___-node_modules-font-awesome-css-font-awesome__2qWx0",
		"fa-resistance": "fa-resistance___-node_modules-font-awesome-css-font-awesome__8IiPf",
		"fa-rebel": "fa-rebel___-node_modules-font-awesome-css-font-awesome__2BeAH",
		"fa-ge": "fa-ge___-node_modules-font-awesome-css-font-awesome__125oQ",
		"fa-empire": "fa-empire___-node_modules-font-awesome-css-font-awesome__3aWdY",
		"fa-git-square": "fa-git-square___-node_modules-font-awesome-css-font-awesome__LxFgr",
		"fa-git": "fa-git___-node_modules-font-awesome-css-font-awesome__3dcrw",
		"fa-y-combinator-square": "fa-y-combinator-square___-node_modules-font-awesome-css-font-awesome__UBOzw",
		"fa-yc-square": "fa-yc-square___-node_modules-font-awesome-css-font-awesome__2dzYe",
		"fa-hacker-news": "fa-hacker-news___-node_modules-font-awesome-css-font-awesome__2NgMk",
		"fa-tencent-weibo": "fa-tencent-weibo___-node_modules-font-awesome-css-font-awesome__1n6io",
		"fa-qq": "fa-qq___-node_modules-font-awesome-css-font-awesome__3nU72",
		"fa-wechat": "fa-wechat___-node_modules-font-awesome-css-font-awesome__3eB73",
		"fa-weixin": "fa-weixin___-node_modules-font-awesome-css-font-awesome__2CCYy",
		"fa-send": "fa-send___-node_modules-font-awesome-css-font-awesome__1PdKc",
		"fa-paper-plane": "fa-paper-plane___-node_modules-font-awesome-css-font-awesome__2__IE",
		"fa-send-o": "fa-send-o___-node_modules-font-awesome-css-font-awesome__YLC2Y",
		"fa-paper-plane-o": "fa-paper-plane-o___-node_modules-font-awesome-css-font-awesome__3kMXj",
		"fa-history": "fa-history___-node_modules-font-awesome-css-font-awesome__2GsY6",
		"fa-circle-thin": "fa-circle-thin___-node_modules-font-awesome-css-font-awesome__1qmHm",
		"fa-header": "fa-header___-node_modules-font-awesome-css-font-awesome__1utko",
		"fa-paragraph": "fa-paragraph___-node_modules-font-awesome-css-font-awesome__17RrN",
		"fa-sliders": "fa-sliders___-node_modules-font-awesome-css-font-awesome__3-FXz",
		"fa-share-alt": "fa-share-alt___-node_modules-font-awesome-css-font-awesome__1wOIn",
		"fa-share-alt-square": "fa-share-alt-square___-node_modules-font-awesome-css-font-awesome__3g2tI",
		"fa-bomb": "fa-bomb___-node_modules-font-awesome-css-font-awesome__26Lk9",
		"fa-soccer-ball-o": "fa-soccer-ball-o___-node_modules-font-awesome-css-font-awesome__UnqXg",
		"fa-futbol-o": "fa-futbol-o___-node_modules-font-awesome-css-font-awesome__1tIMP",
		"fa-tty": "fa-tty___-node_modules-font-awesome-css-font-awesome__2moeD",
		"fa-binoculars": "fa-binoculars___-node_modules-font-awesome-css-font-awesome__EUCJo",
		"fa-plug": "fa-plug___-node_modules-font-awesome-css-font-awesome__33NjH",
		"fa-slideshare": "fa-slideshare___-node_modules-font-awesome-css-font-awesome__sazIo",
		"fa-twitch": "fa-twitch___-node_modules-font-awesome-css-font-awesome__28svQ",
		"fa-yelp": "fa-yelp___-node_modules-font-awesome-css-font-awesome__35jF9",
		"fa-newspaper-o": "fa-newspaper-o___-node_modules-font-awesome-css-font-awesome__jFTgr",
		"fa-wifi": "fa-wifi___-node_modules-font-awesome-css-font-awesome__2I3Hr",
		"fa-calculator": "fa-calculator___-node_modules-font-awesome-css-font-awesome__VAj6b",
		"fa-paypal": "fa-paypal___-node_modules-font-awesome-css-font-awesome__3Yh6o",
		"fa-google-wallet": "fa-google-wallet___-node_modules-font-awesome-css-font-awesome__1XMo3",
		"fa-cc-visa": "fa-cc-visa___-node_modules-font-awesome-css-font-awesome__1ImhH",
		"fa-cc-mastercard": "fa-cc-mastercard___-node_modules-font-awesome-css-font-awesome__3f5EZ",
		"fa-cc-discover": "fa-cc-discover___-node_modules-font-awesome-css-font-awesome__31Que",
		"fa-cc-amex": "fa-cc-amex___-node_modules-font-awesome-css-font-awesome__f7DOI",
		"fa-cc-paypal": "fa-cc-paypal___-node_modules-font-awesome-css-font-awesome__2Zrxy",
		"fa-cc-stripe": "fa-cc-stripe___-node_modules-font-awesome-css-font-awesome__jFflQ",
		"fa-bell-slash": "fa-bell-slash___-node_modules-font-awesome-css-font-awesome__2RgMw",
		"fa-bell-slash-o": "fa-bell-slash-o___-node_modules-font-awesome-css-font-awesome__2cXjG",
		"fa-trash": "fa-trash___-node_modules-font-awesome-css-font-awesome__2toiW",
		"fa-copyright": "fa-copyright___-node_modules-font-awesome-css-font-awesome__2YIDa",
		"fa-at": "fa-at___-node_modules-font-awesome-css-font-awesome__3BdKC",
		"fa-eyedropper": "fa-eyedropper___-node_modules-font-awesome-css-font-awesome__1Qbaj",
		"fa-paint-brush": "fa-paint-brush___-node_modules-font-awesome-css-font-awesome__1iSoz",
		"fa-birthday-cake": "fa-birthday-cake___-node_modules-font-awesome-css-font-awesome__mxVhF",
		"fa-area-chart": "fa-area-chart___-node_modules-font-awesome-css-font-awesome__1iaTO",
		"fa-pie-chart": "fa-pie-chart___-node_modules-font-awesome-css-font-awesome__2_Yg9",
		"fa-line-chart": "fa-line-chart___-node_modules-font-awesome-css-font-awesome__2Y1Fa",
		"fa-lastfm": "fa-lastfm___-node_modules-font-awesome-css-font-awesome__pk3zp",
		"fa-lastfm-square": "fa-lastfm-square___-node_modules-font-awesome-css-font-awesome__2c0x-",
		"fa-toggle-off": "fa-toggle-off___-node_modules-font-awesome-css-font-awesome__3lBqq",
		"fa-toggle-on": "fa-toggle-on___-node_modules-font-awesome-css-font-awesome__3xkWg",
		"fa-bicycle": "fa-bicycle___-node_modules-font-awesome-css-font-awesome__Cjd3i",
		"fa-bus": "fa-bus___-node_modules-font-awesome-css-font-awesome__1e1M4",
		"fa-ioxhost": "fa-ioxhost___-node_modules-font-awesome-css-font-awesome__2NKau",
		"fa-angellist": "fa-angellist___-node_modules-font-awesome-css-font-awesome__2-VDb",
		"fa-cc": "fa-cc___-node_modules-font-awesome-css-font-awesome__1eE9l",
		"fa-shekel": "fa-shekel___-node_modules-font-awesome-css-font-awesome__3Hb3E",
		"fa-sheqel": "fa-sheqel___-node_modules-font-awesome-css-font-awesome__386d2",
		"fa-ils": "fa-ils___-node_modules-font-awesome-css-font-awesome__1Xkeh",
		"fa-meanpath": "fa-meanpath___-node_modules-font-awesome-css-font-awesome__BdPkN",
		"fa-buysellads": "fa-buysellads___-node_modules-font-awesome-css-font-awesome__Rp_Dl",
		"fa-connectdevelop": "fa-connectdevelop___-node_modules-font-awesome-css-font-awesome__JoONS",
		"fa-dashcube": "fa-dashcube___-node_modules-font-awesome-css-font-awesome__2PLNs",
		"fa-forumbee": "fa-forumbee___-node_modules-font-awesome-css-font-awesome__1h8nG",
		"fa-leanpub": "fa-leanpub___-node_modules-font-awesome-css-font-awesome__d_Qcs",
		"fa-sellsy": "fa-sellsy___-node_modules-font-awesome-css-font-awesome__2PL5F",
		"fa-shirtsinbulk": "fa-shirtsinbulk___-node_modules-font-awesome-css-font-awesome__1cYu7",
		"fa-simplybuilt": "fa-simplybuilt___-node_modules-font-awesome-css-font-awesome__2R1Yg",
		"fa-skyatlas": "fa-skyatlas___-node_modules-font-awesome-css-font-awesome__1PDCj",
		"fa-cart-plus": "fa-cart-plus___-node_modules-font-awesome-css-font-awesome__3tq1k",
		"fa-cart-arrow-down": "fa-cart-arrow-down___-node_modules-font-awesome-css-font-awesome__1Wm_Y",
		"fa-diamond": "fa-diamond___-node_modules-font-awesome-css-font-awesome__1lad0",
		"fa-ship": "fa-ship___-node_modules-font-awesome-css-font-awesome__Q0cci",
		"fa-user-secret": "fa-user-secret___-node_modules-font-awesome-css-font-awesome__3Pxnj",
		"fa-motorcycle": "fa-motorcycle___-node_modules-font-awesome-css-font-awesome__3UM3j",
		"fa-street-view": "fa-street-view___-node_modules-font-awesome-css-font-awesome__1a4IT",
		"fa-heartbeat": "fa-heartbeat___-node_modules-font-awesome-css-font-awesome__34tXU",
		"fa-venus": "fa-venus___-node_modules-font-awesome-css-font-awesome__xPD8e",
		"fa-mars": "fa-mars___-node_modules-font-awesome-css-font-awesome__1qc3t",
		"fa-mercury": "fa-mercury___-node_modules-font-awesome-css-font-awesome__2i4u6",
		"fa-intersex": "fa-intersex___-node_modules-font-awesome-css-font-awesome__2lQVE",
		"fa-transgender": "fa-transgender___-node_modules-font-awesome-css-font-awesome__3mfDl",
		"fa-transgender-alt": "fa-transgender-alt___-node_modules-font-awesome-css-font-awesome__16s-X",
		"fa-venus-double": "fa-venus-double___-node_modules-font-awesome-css-font-awesome__3nRuF",
		"fa-mars-double": "fa-mars-double___-node_modules-font-awesome-css-font-awesome__2UaIs",
		"fa-venus-mars": "fa-venus-mars___-node_modules-font-awesome-css-font-awesome__2Hxhm",
		"fa-mars-stroke": "fa-mars-stroke___-node_modules-font-awesome-css-font-awesome__1NeCe",
		"fa-mars-stroke-v": "fa-mars-stroke-v___-node_modules-font-awesome-css-font-awesome__35Z3s",
		"fa-mars-stroke-h": "fa-mars-stroke-h___-node_modules-font-awesome-css-font-awesome__cGn59",
		"fa-neuter": "fa-neuter___-node_modules-font-awesome-css-font-awesome__roY7_",
		"fa-genderless": "fa-genderless___-node_modules-font-awesome-css-font-awesome__2b-ti",
		"fa-facebook-official": "fa-facebook-official___-node_modules-font-awesome-css-font-awesome__1GR4w",
		"fa-pinterest-p": "fa-pinterest-p___-node_modules-font-awesome-css-font-awesome__cLZ0j",
		"fa-whatsapp": "fa-whatsapp___-node_modules-font-awesome-css-font-awesome__1hJa0",
		"fa-server": "fa-server___-node_modules-font-awesome-css-font-awesome__3erh3",
		"fa-user-plus": "fa-user-plus___-node_modules-font-awesome-css-font-awesome__O0KWP",
		"fa-user-times": "fa-user-times___-node_modules-font-awesome-css-font-awesome__19nAC",
		"fa-hotel": "fa-hotel___-node_modules-font-awesome-css-font-awesome__1YpRt",
		"fa-bed": "fa-bed___-node_modules-font-awesome-css-font-awesome__3f5XT",
		"fa-viacoin": "fa-viacoin___-node_modules-font-awesome-css-font-awesome__2dIwL",
		"fa-train": "fa-train___-node_modules-font-awesome-css-font-awesome__1R8UV",
		"fa-subway": "fa-subway___-node_modules-font-awesome-css-font-awesome__1KUzf",
		"fa-medium": "fa-medium___-node_modules-font-awesome-css-font-awesome__2-v_Y",
		"fa-yc": "fa-yc___-node_modules-font-awesome-css-font-awesome__1YHoN",
		"fa-y-combinator": "fa-y-combinator___-node_modules-font-awesome-css-font-awesome__3oanU",
		"fa-optin-monster": "fa-optin-monster___-node_modules-font-awesome-css-font-awesome__2Jys3",
		"fa-opencart": "fa-opencart___-node_modules-font-awesome-css-font-awesome__15P7m",
		"fa-expeditedssl": "fa-expeditedssl___-node_modules-font-awesome-css-font-awesome__1evys",
		"fa-battery-4": "fa-battery-4___-node_modules-font-awesome-css-font-awesome__3z9oN",
		"fa-battery-full": "fa-battery-full___-node_modules-font-awesome-css-font-awesome__3a47c",
		"fa-battery-3": "fa-battery-3___-node_modules-font-awesome-css-font-awesome__15v1s",
		"fa-battery-three-quarters": "fa-battery-three-quarters___-node_modules-font-awesome-css-font-awesome__2MqQW",
		"fa-battery-2": "fa-battery-2___-node_modules-font-awesome-css-font-awesome__1xukC",
		"fa-battery-half": "fa-battery-half___-node_modules-font-awesome-css-font-awesome__2-NP9",
		"fa-battery-1": "fa-battery-1___-node_modules-font-awesome-css-font-awesome__2V2eh",
		"fa-battery-quarter": "fa-battery-quarter___-node_modules-font-awesome-css-font-awesome__27GbZ",
		"fa-battery-0": "fa-battery-0___-node_modules-font-awesome-css-font-awesome__213yF",
		"fa-battery-empty": "fa-battery-empty___-node_modules-font-awesome-css-font-awesome__1akwP",
		"fa-mouse-pointer": "fa-mouse-pointer___-node_modules-font-awesome-css-font-awesome__1Ieqi",
		"fa-i-cursor": "fa-i-cursor___-node_modules-font-awesome-css-font-awesome__2SLsi",
		"fa-object-group": "fa-object-group___-node_modules-font-awesome-css-font-awesome__1n3vN",
		"fa-object-ungroup": "fa-object-ungroup___-node_modules-font-awesome-css-font-awesome__WB2zq",
		"fa-sticky-note": "fa-sticky-note___-node_modules-font-awesome-css-font-awesome__3EEF4",
		"fa-sticky-note-o": "fa-sticky-note-o___-node_modules-font-awesome-css-font-awesome__1ucKD",
		"fa-cc-jcb": "fa-cc-jcb___-node_modules-font-awesome-css-font-awesome__zuWzt",
		"fa-cc-diners-club": "fa-cc-diners-club___-node_modules-font-awesome-css-font-awesome__1Kg4f",
		"fa-clone": "fa-clone___-node_modules-font-awesome-css-font-awesome__1pfmu",
		"fa-balance-scale": "fa-balance-scale___-node_modules-font-awesome-css-font-awesome__2BSSz",
		"fa-hourglass-o": "fa-hourglass-o___-node_modules-font-awesome-css-font-awesome__3ltOE",
		"fa-hourglass-1": "fa-hourglass-1___-node_modules-font-awesome-css-font-awesome__3bsUH",
		"fa-hourglass-start": "fa-hourglass-start___-node_modules-font-awesome-css-font-awesome__2JrWp",
		"fa-hourglass-2": "fa-hourglass-2___-node_modules-font-awesome-css-font-awesome__242Ey",
		"fa-hourglass-half": "fa-hourglass-half___-node_modules-font-awesome-css-font-awesome__158gQ",
		"fa-hourglass-3": "fa-hourglass-3___-node_modules-font-awesome-css-font-awesome__1R-J6",
		"fa-hourglass-end": "fa-hourglass-end___-node_modules-font-awesome-css-font-awesome__2PQ7m",
		"fa-hourglass": "fa-hourglass___-node_modules-font-awesome-css-font-awesome__NvxY6",
		"fa-hand-grab-o": "fa-hand-grab-o___-node_modules-font-awesome-css-font-awesome__3WvO1",
		"fa-hand-rock-o": "fa-hand-rock-o___-node_modules-font-awesome-css-font-awesome__cz-93",
		"fa-hand-stop-o": "fa-hand-stop-o___-node_modules-font-awesome-css-font-awesome__1XeKZ",
		"fa-hand-paper-o": "fa-hand-paper-o___-node_modules-font-awesome-css-font-awesome__3IQOX",
		"fa-hand-scissors-o": "fa-hand-scissors-o___-node_modules-font-awesome-css-font-awesome__Q7ybq",
		"fa-hand-lizard-o": "fa-hand-lizard-o___-node_modules-font-awesome-css-font-awesome__2HgCh",
		"fa-hand-spock-o": "fa-hand-spock-o___-node_modules-font-awesome-css-font-awesome__c1Dyl",
		"fa-hand-pointer-o": "fa-hand-pointer-o___-node_modules-font-awesome-css-font-awesome__eYo5N",
		"fa-hand-peace-o": "fa-hand-peace-o___-node_modules-font-awesome-css-font-awesome__1fcVC",
		"fa-trademark": "fa-trademark___-node_modules-font-awesome-css-font-awesome__18jCV",
		"fa-registered": "fa-registered___-node_modules-font-awesome-css-font-awesome__1Pzq_",
		"fa-creative-commons": "fa-creative-commons___-node_modules-font-awesome-css-font-awesome__aIL7V",
		"fa-gg": "fa-gg___-node_modules-font-awesome-css-font-awesome__2QSMK",
		"fa-gg-circle": "fa-gg-circle___-node_modules-font-awesome-css-font-awesome__19csF",
		"fa-tripadvisor": "fa-tripadvisor___-node_modules-font-awesome-css-font-awesome__1if_T",
		"fa-odnoklassniki": "fa-odnoklassniki___-node_modules-font-awesome-css-font-awesome__9Kh0w",
		"fa-odnoklassniki-square": "fa-odnoklassniki-square___-node_modules-font-awesome-css-font-awesome__3vr8s",
		"fa-get-pocket": "fa-get-pocket___-node_modules-font-awesome-css-font-awesome__21O9m",
		"fa-wikipedia-w": "fa-wikipedia-w___-node_modules-font-awesome-css-font-awesome__vr1_A",
		"fa-safari": "fa-safari___-node_modules-font-awesome-css-font-awesome__3IuZA",
		"fa-chrome": "fa-chrome___-node_modules-font-awesome-css-font-awesome__11ltu",
		"fa-firefox": "fa-firefox___-node_modules-font-awesome-css-font-awesome__I7Tjr",
		"fa-opera": "fa-opera___-node_modules-font-awesome-css-font-awesome__1F8rr",
		"fa-internet-explorer": "fa-internet-explorer___-node_modules-font-awesome-css-font-awesome__2mlE0",
		"fa-tv": "fa-tv___-node_modules-font-awesome-css-font-awesome__2n_rQ",
		"fa-television": "fa-television___-node_modules-font-awesome-css-font-awesome__23usS",
		"fa-contao": "fa-contao___-node_modules-font-awesome-css-font-awesome__2iqBs",
		"fa-500px": "fa-500px___-node_modules-font-awesome-css-font-awesome__1tTnQ",
		"fa-amazon": "fa-amazon___-node_modules-font-awesome-css-font-awesome__3q99L",
		"fa-calendar-plus-o": "fa-calendar-plus-o___-node_modules-font-awesome-css-font-awesome__1tPhl",
		"fa-calendar-minus-o": "fa-calendar-minus-o___-node_modules-font-awesome-css-font-awesome__1xNeq",
		"fa-calendar-times-o": "fa-calendar-times-o___-node_modules-font-awesome-css-font-awesome__3FaIK",
		"fa-calendar-check-o": "fa-calendar-check-o___-node_modules-font-awesome-css-font-awesome__1cA-9",
		"fa-industry": "fa-industry___-node_modules-font-awesome-css-font-awesome__3jHV-",
		"fa-map-pin": "fa-map-pin___-node_modules-font-awesome-css-font-awesome__yb50i",
		"fa-map-signs": "fa-map-signs___-node_modules-font-awesome-css-font-awesome__3AEKb",
		"fa-map-o": "fa-map-o___-node_modules-font-awesome-css-font-awesome__CiZyM",
		"fa-map": "fa-map___-node_modules-font-awesome-css-font-awesome__1If_y",
		"fa-commenting": "fa-commenting___-node_modules-font-awesome-css-font-awesome__1z4Gp",
		"fa-commenting-o": "fa-commenting-o___-node_modules-font-awesome-css-font-awesome__3Weu-",
		"fa-houzz": "fa-houzz___-node_modules-font-awesome-css-font-awesome__Lbnf-",
		"fa-vimeo": "fa-vimeo___-node_modules-font-awesome-css-font-awesome__2zN39",
		"fa-black-tie": "fa-black-tie___-node_modules-font-awesome-css-font-awesome__17fH-",
		"fa-fonticons": "fa-fonticons___-node_modules-font-awesome-css-font-awesome__3vqoR",
		"fa-reddit-alien": "fa-reddit-alien___-node_modules-font-awesome-css-font-awesome__S4UyZ",
		"fa-edge": "fa-edge___-node_modules-font-awesome-css-font-awesome__GIdjQ",
		"fa-credit-card-alt": "fa-credit-card-alt___-node_modules-font-awesome-css-font-awesome__19lTT",
		"fa-codiepie": "fa-codiepie___-node_modules-font-awesome-css-font-awesome__10IUW",
		"fa-modx": "fa-modx___-node_modules-font-awesome-css-font-awesome__1iogA",
		"fa-fort-awesome": "fa-fort-awesome___-node_modules-font-awesome-css-font-awesome__p-FEc",
		"fa-usb": "fa-usb___-node_modules-font-awesome-css-font-awesome__2UQMd",
		"fa-product-hunt": "fa-product-hunt___-node_modules-font-awesome-css-font-awesome__1E0fE",
		"fa-mixcloud": "fa-mixcloud___-node_modules-font-awesome-css-font-awesome__1eWwn",
		"fa-scribd": "fa-scribd___-node_modules-font-awesome-css-font-awesome___KdP5",
		"fa-pause-circle": "fa-pause-circle___-node_modules-font-awesome-css-font-awesome__1BmN-",
		"fa-pause-circle-o": "fa-pause-circle-o___-node_modules-font-awesome-css-font-awesome__CzXwx",
		"fa-stop-circle": "fa-stop-circle___-node_modules-font-awesome-css-font-awesome__3xSXU",
		"fa-stop-circle-o": "fa-stop-circle-o___-node_modules-font-awesome-css-font-awesome__y6CsB",
		"fa-shopping-bag": "fa-shopping-bag___-node_modules-font-awesome-css-font-awesome__1rLRk",
		"fa-shopping-basket": "fa-shopping-basket___-node_modules-font-awesome-css-font-awesome__2H4sn",
		"fa-hashtag": "fa-hashtag___-node_modules-font-awesome-css-font-awesome__3Jfkg",
		"fa-bluetooth": "fa-bluetooth___-node_modules-font-awesome-css-font-awesome__ugSoi",
		"fa-bluetooth-b": "fa-bluetooth-b___-node_modules-font-awesome-css-font-awesome__2XFEA",
		"fa-percent": "fa-percent___-node_modules-font-awesome-css-font-awesome__3Q9bo",
		"fa-gitlab": "fa-gitlab___-node_modules-font-awesome-css-font-awesome__3_bCy",
		"fa-wpbeginner": "fa-wpbeginner___-node_modules-font-awesome-css-font-awesome__FTnvj",
		"fa-wpforms": "fa-wpforms___-node_modules-font-awesome-css-font-awesome__3uHke",
		"fa-envira": "fa-envira___-node_modules-font-awesome-css-font-awesome__34QIp",
		"fa-universal-access": "fa-universal-access___-node_modules-font-awesome-css-font-awesome__MI2sC",
		"fa-wheelchair-alt": "fa-wheelchair-alt___-node_modules-font-awesome-css-font-awesome__O6lS5",
		"fa-question-circle-o": "fa-question-circle-o___-node_modules-font-awesome-css-font-awesome__mHtBv",
		"fa-blind": "fa-blind___-node_modules-font-awesome-css-font-awesome__1Ff35",
		"fa-audio-description": "fa-audio-description___-node_modules-font-awesome-css-font-awesome__7ufQ0",
		"fa-volume-control-phone": "fa-volume-control-phone___-node_modules-font-awesome-css-font-awesome__ojvEK",
		"fa-braille": "fa-braille___-node_modules-font-awesome-css-font-awesome__31as8",
		"fa-assistive-listening-systems": "fa-assistive-listening-systems___-node_modules-font-awesome-css-font-awesome__3e9lJ",
		"fa-asl-interpreting": "fa-asl-interpreting___-node_modules-font-awesome-css-font-awesome__10s8s",
		"fa-american-sign-language-interpreting": "fa-american-sign-language-interpreting___-node_modules-font-awesome-css-font-awesome__iJBKA",
		"fa-deafness": "fa-deafness___-node_modules-font-awesome-css-font-awesome__1gz6V",
		"fa-hard-of-hearing": "fa-hard-of-hearing___-node_modules-font-awesome-css-font-awesome__3tl6c",
		"fa-deaf": "fa-deaf___-node_modules-font-awesome-css-font-awesome__T1jno",
		"fa-glide": "fa-glide___-node_modules-font-awesome-css-font-awesome__FOg6l",
		"fa-glide-g": "fa-glide-g___-node_modules-font-awesome-css-font-awesome__3NP_O",
		"fa-signing": "fa-signing___-node_modules-font-awesome-css-font-awesome__1dNqK",
		"fa-sign-language": "fa-sign-language___-node_modules-font-awesome-css-font-awesome__196FK",
		"fa-low-vision": "fa-low-vision___-node_modules-font-awesome-css-font-awesome__1EYST",
		"fa-viadeo": "fa-viadeo___-node_modules-font-awesome-css-font-awesome__3r1NW",
		"fa-viadeo-square": "fa-viadeo-square___-node_modules-font-awesome-css-font-awesome__wG1GT",
		"fa-snapchat": "fa-snapchat___-node_modules-font-awesome-css-font-awesome__3rUOM",
		"fa-snapchat-ghost": "fa-snapchat-ghost___-node_modules-font-awesome-css-font-awesome__1H5pY",
		"fa-snapchat-square": "fa-snapchat-square___-node_modules-font-awesome-css-font-awesome__nsCRj",
		"fa-pied-piper": "fa-pied-piper___-node_modules-font-awesome-css-font-awesome__2-v0o",
		"fa-first-order": "fa-first-order___-node_modules-font-awesome-css-font-awesome__3GUUW",
		"fa-yoast": "fa-yoast___-node_modules-font-awesome-css-font-awesome__1EoEX",
		"fa-themeisle": "fa-themeisle___-node_modules-font-awesome-css-font-awesome__5bh2V",
		"fa-google-plus-circle": "fa-google-plus-circle___-node_modules-font-awesome-css-font-awesome__3q80t",
		"fa-google-plus-official": "fa-google-plus-official___-node_modules-font-awesome-css-font-awesome__1XL2d",
		"fa-fa": "fa-fa___-node_modules-font-awesome-css-font-awesome__1bw7W",
		"fa-font-awesome": "fa-font-awesome___-node_modules-font-awesome-css-font-awesome__1A60b",
		"sr-only": "sr-only___-node_modules-font-awesome-css-font-awesome__9uHFW",
		"sr-only-focusable": "sr-only-focusable___-node_modules-font-awesome-css-font-awesome__2F-Hl"
	};

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/node_modules/font-awesome/fonts/fontawesome-webfont.eot";

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/node_modules/font-awesome/fonts/fontawesome-webfont.eot";

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/node_modules/font-awesome/fonts/fontawesome-webfont.woff2";

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/node_modules/font-awesome/fonts/fontawesome-webfont.woff";

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/node_modules/font-awesome/fonts/fontawesome-webfont.ttf";

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/node_modules/font-awesome/fonts/fontawesome-webfont.svg";

/***/ }

});