module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withMediaProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contextTypes = __webpack_require__(5);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withMediaProps(MediaComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(MediaComponent, _extends({}, this.props, { media: this.context.media }));
      }
    }]);

    return _class;
  }(_react.Component), _class.displayName = 'withMediaProps', _class.contextTypes = _contextTypes2.default, _temp;
}
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  media: _propTypes2.default.object,
  _mediaSetters: _propTypes2.default.object,
  _mediaGetters: _propTypes2.default.object
};
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  src: _propTypes2.default.string,
  onPlaying: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onDuration: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func
};
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatTime;
function formatTime(current) {
  var h = Math.floor(current / 3600);
  var m = Math.floor((current - h * 3600) / 60);
  var s = Math.floor(current % 60);

  if (s < 10) {
    s = '0' + s;
  }

  if (h > 0) {
    return h + ':' + m + ':' + s;
  } else {
    return m + ':' + s;
  }
}
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateData = exports.getDataset = undefined;

var _axios = __webpack_require__(24);

var getDataset = exports.getDataset = function getDataset(props, self, key) {
  return self.context && self.context.datasets && self.context.datasets[props.resource.data[key]];
};

var updateData = exports.updateData = function updateData(props, self) {
  var dataset = getDataset(props, self, 'presentationDataset');
  var thumbnail = getDataset(props, self, 'thumbnailDataset');
  if (thumbnail && thumbnail.uri) {
    self.setState({
      thumbnailUri: thumbnail.uri
    });
  }
  if (dataset === undefined) {
    return;
  }
  if (dataset.rawData) {
    self.setState({
      loading: false,
      data: dataset.rawData,
      error: undefined
    });
  } else if (dataset.uri) {
    self.setState({
      loading: true,
      error: undefined
    });
    (0, _axios.get)(dataset.uri).then(function (response) {
      self.setState({
        data: response.data,
        loading: false
      });
    }).catch(function (error) {
      self.setState({
        error: error
      });
    });
  } else {
    self.setState({
      error: 'no-dataset'
    });
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(18);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(3);



function verifyPlainObject(value, displayName, methodName) {
  if (!__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject___default()(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("dom-css");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metadata = __webpack_require__(22);

var _metadata2 = _interopRequireDefault(_metadata);

var _BlockDynamic = __webpack_require__(23);

var _BlockDynamic2 = _interopRequireDefault(_BlockDynamic);

var _BlockStatic = __webpack_require__(86);

var _BlockStatic2 = _interopRequireDefault(_BlockStatic);

var _main = __webpack_require__(88);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  metadata: _metadata2.default,
  BlockDynamic: _BlockDynamic2.default,
  BlockStatic: _BlockStatic2.default,
  defaultCss: _main2.default
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  type: 'peritext-contextualizer',
  id: 'dicto',
  name: 'dicto',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true
  },
  model: {
    acceptedResourceTypes: [{ type: 'dicto' }],
    block: {
      expandable: true,
      options: [{
        id: 'displayCommentsInCodex',
        title: {
          fr: 'Afficher les commentaires en mode codex',
          en: 'Display comments in codex mode'
        },
        type: 'boolean'
      }, {
        id: 'displayMode',
        title: {
          fr: 'Mode d\'affichage',
          en: 'Display mode'
        },
        type: 'select',
        values: [{
          id: 'columns',
          labels: {
            fr: 'Colonnes',
            en: 'Columns'
          }
        }, {
          id: 'fullscreen',
          labels: {
            fr: 'Plein écran',
            en: 'Full screen'
          }
        }, {
          id: 'pecking',
          labels: {
            fr: 'Picorage',
            en: 'Pecking'
          }
        }]
      }]
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();

var DictoPlayer = inBrowser ? __webpack_require__(25) : null;

var BlockDynamic = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(BlockDynamic, _Component);

  function BlockDynamic(props) {
    (0, _classCallCheck3.default)(this, BlockDynamic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BlockDynamic.__proto__ || (0, _getPrototypeOf2.default)(BlockDynamic)).call(this, props));

    _this.state = {
      loading: true,
      data: undefined
    };
    (0, _utils.updateData)(props, _this);
    return _this;
  }

  (0, _createClass3.default)(BlockDynamic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _utils.updateData)(this.props, this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data || (0, _utils.getDataset)(this.props, this) !== (0, _utils.getDataset)(nextProps, this)) {
        (0, _utils.updateData)(nextProps, this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var contextualizer = this.props.contextualizer,
          _state = this.state,
          _state$data = _state.data,
          data = _state$data === undefined ? {} : _state$data,
          error = _state.error,
          _state$loading = _state.loading,
          loading = _state$loading === undefined ? false : _state$loading;


      if (inBrowser && !loading) {
        return _react2.default.createElement(
          'figure',
          {
            className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-dicto'
          },
          _react2.default.createElement(DictoPlayer, {
            composition: data,
            settings: {
              displayMode: contextualizer && contextualizer.displayMode || 'columns',
              allowEmbed: false
            }
          })
        );
      }
      return null;
    }
  }]);
  return BlockDynamic;
}(_react.Component), _class.contextTypes = {
  datasets: _propTypes2.default.object
}, _temp);
exports.default = BlockDynamic;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(0);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(14);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(26);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selector = exports.setPlayerVolume = exports.toggleIsPlaying = exports.toggleAutoScroll = exports.setChunksPositions = exports.scrollUpdate = exports.setInformationModalVisibility = exports.setCurrentMediaTime = exports.setCurrentMediaDuration = exports.setActiveChunk = exports.setSearchQuery = exports.setSettings = exports.setComposition = exports.resetApp = exports.SET_PLAYER_VOLUME = exports.TOGGLE_ISPLAYING = exports.TOGGLE_AUTOSCROLL = exports.SET_CHUNKS_POSITIONS = exports.SCROLL_UPDATE = exports.SET_INFORMATION_MODAL_VISIBILITY = exports.SET_CURRENT_MEDIA_TIME = exports.SET_CURRENT_MEDIA_DURATION = exports.SET_ACTIVE_CHUNK = exports.SET_SEARCH_QUERY = exports.SET_SETTINGS = exports.SET_COMPOSITION = exports.RESET_APP = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * This module exports logic-related elements for the dicto-player application
                                                                                                                                                                                                                                                                   * This module follows the ducks convention for putting in the same place actions, action types,
                                                                                                                                                                                                                                                                   * state selectors and reducers about a given feature (see https://github.com/erikras/ducks-modular-redux)
                                                                                                                                                                                                                                                                   * @module dicto-player/redux
                                                                                                                                                                                                                                                                   */

var _redux = __webpack_require__(1);

var _reselect = __webpack_require__(13);

var _chunkMatchesSearchQuery = __webpack_require__(14);

var _chunkMatchesSearchQuery2 = _interopRequireDefault(_chunkMatchesSearchQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 * Action names
 */
var RESET_APP = exports.RESET_APP = '§dicto-player/RESET_APP';
var SET_COMPOSITION = exports.SET_COMPOSITION = '§dicto-player/SET_COMPOSITION';
var SET_SETTINGS = exports.SET_SETTINGS = '§dicto-player/SET_SETTINGS';

var SET_SEARCH_QUERY = exports.SET_SEARCH_QUERY = '§dicto-player/SET_SEARCH_QUERY';
var SET_ACTIVE_CHUNK = exports.SET_ACTIVE_CHUNK = '§dicto-player/SET_ACTIVE_CHUNK';
var SET_CURRENT_MEDIA_DURATION = exports.SET_CURRENT_MEDIA_DURATION = '§dicto-player/SET_CURRENT_MEDIA_DURATION';
var SET_CURRENT_MEDIA_TIME = exports.SET_CURRENT_MEDIA_TIME = '§dicto-player/SET_CURRENT_MEDIA_TIME';
var SET_INFORMATION_MODAL_VISIBILITY = exports.SET_INFORMATION_MODAL_VISIBILITY = '§dicto-player/SET_INFORMATION_MODAL_VISIBILITY';
var SCROLL_UPDATE = exports.SCROLL_UPDATE = '§dicto-player/SCROLL_UPDATE';
var SET_CHUNKS_POSITIONS = exports.SET_CHUNKS_POSITIONS = '§dicto-player/SET_CHUNKS_POSITIONS';
var TOGGLE_AUTOSCROLL = exports.TOGGLE_AUTOSCROLL = '§dicto-player/TOGGLE_AUTOSCROLL';
var TOGGLE_ISPLAYING = exports.TOGGLE_ISPLAYING = '§dicto-player/TOGGLE_ISPLAYING';
var SET_PLAYER_VOLUME = exports.SET_PLAYER_VOLUME = '§dicto-player/SET_PLAYER_VOLUME';
/*
 * Action creators
 */
var resetApp = exports.resetApp = function resetApp() {
  return {
    type: RESET_APP
  };
};

var setComposition = exports.setComposition = function setComposition(composition) {
  return {
    type: SET_COMPOSITION,
    composition: composition
  };
};
var setSettings = exports.setSettings = function setSettings(settings) {
  return {
    type: SET_SETTINGS,
    settings: settings
  };
};
var setSearchQuery = exports.setSearchQuery = function setSearchQuery(searchQuery) {
  return {
    type: SET_SEARCH_QUERY,
    searchQuery: searchQuery
  };
};
var setActiveChunk = exports.setActiveChunk = function setActiveChunk(chunk) {
  return {
    type: SET_ACTIVE_CHUNK,
    chunk: chunk
  };
};
var setCurrentMediaDuration = exports.setCurrentMediaDuration = function setCurrentMediaDuration(duration) {
  return {
    type: SET_CURRENT_MEDIA_DURATION,
    duration: duration
  };
};
var setCurrentMediaTime = exports.setCurrentMediaTime = function setCurrentMediaTime(playerState, generatedByUser) {
  return {
    type: SET_CURRENT_MEDIA_TIME,
    playerState: playerState,
    generatedByUser: generatedByUser
  };
};
var setInformationModalVisibility = exports.setInformationModalVisibility = function setInformationModalVisibility(state) {
  return {
    type: SET_INFORMATION_MODAL_VISIBILITY,
    state: state
  };
};
var scrollUpdate = exports.scrollUpdate = function scrollUpdate(values) {
  return {
    type: SCROLL_UPDATE,
    values: values
  };
};
var setChunksPositions = exports.setChunksPositions = function setChunksPositions(positions) {
  return {
    type: SET_CHUNKS_POSITIONS,
    positions: positions
  };
};
var toggleAutoScroll = exports.toggleAutoScroll = function toggleAutoScroll() {
  return {
    type: TOGGLE_AUTOSCROLL
  };
};
var toggleIsPlaying = exports.toggleIsPlaying = function toggleIsPlaying() {
  return {
    type: TOGGLE_ISPLAYING
  };
};
var setPlayerVolume = exports.setPlayerVolume = function setPlayerVolume(volume) {
  return {
    type: SET_PLAYER_VOLUME,
    volume: volume
  };
};
/*
 * Reducers
 */
var COMPOSITION_DEFAULT_STATE = {};
function compositionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : COMPOSITION_DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case RESET_APP:
      return COMPOSITION_DEFAULT_STATE;
    case SET_COMPOSITION:
      return action.composition;
    default:
      return state;
  }
}

var SETTINGS_DEFAULT_STATE = {
  displayMode: 'columns'
};
function settingsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SETTINGS_DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case RESET_APP:
      return SETTINGS_DEFAULT_STATE;
    case SET_SETTINGS:
      return action.settings;
    default:
      return state;
  }
}

var PLAYER_DEFAULT_STATE = {
  chunks: [],
  searchQuery: '',
  activeChunk: undefined,
  activeChunkIndex: undefined,
  activeChunkCompletion: undefined,
  currentMediaTime: 0,
  currentDocumentTime: 0,
  // currentMediaType: undefined,
  // currentMediaUrl: undefined,
  // currentMediaPosition : undefined,
  // currentMediaIsPlaying: false,
  currentMediaDuration: 0,
  informationModalVisible: false,
  scrollPosition: undefined,
  autoScrollMode: false,
  isPlaying: false,
  playerVolume: 1
};
function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PLAYER_DEFAULT_STATE;
  var action = arguments[1];

  var searchQuery = void 0;
  var activeChunkIndex = void 0;
  var chunks = void 0;
  var activeChunk = void 0;
  var activeChunkCompletion = void 0;
  var finalTime = void 0;
  var currentDocumentTime = void 0;

  switch (action.type) {
    case RESET_APP:
      return PLAYER_DEFAULT_STATE;
    case SET_COMPOSITION:
      if (action.composition.data && action.composition.data.length) {
        searchQuery = state.searchQuery;
        activeChunkIndex = state.activeChunkIndex;
        var relPosSum = 0;
        return _extends({}, state, {
          chunks: action.composition.data.reduce(function (finalChunks, chunk, id) {
            var duration = chunk.end - chunk.begin;
            relPosSum += duration;
            return [].concat(_toConsumableArray(finalChunks), [_extends({}, chunk, {
              id: id,
              duration: duration,
              relativeBegin: relPosSum - duration,
              active: activeChunkIndex && activeChunkIndex === id ? true : false,
              matched: (0, _chunkMatchesSearchQuery2.default)(chunk, searchQuery)
            })]);
          }, [])
        });
      }
      return state;
    case SET_SEARCH_QUERY:
      searchQuery = action.searchQuery;
      return _extends({}, state, {
        searchQuery: searchQuery,
        chunks: state.chunks.map(function (chunk) {
          return _extends({}, chunk, {
            matched: (0, _chunkMatchesSearchQuery2.default)(chunk, searchQuery)
          });
        })
      });
    case SET_ACTIVE_CHUNK:
      chunks = state.chunks.map(function (chunk, index) {
        if (chunk.id === action.chunk.id && chunk.matched) {
          activeChunk = chunk;
          activeChunkIndex = index;
          return _extends({}, chunk, {
            active: true
          });
        }
        return _extends({}, chunk, {
          active: false
        });
      });
      // case : the user try to select a non-matched chunk = search the next one
      if (activeChunk === undefined) {
        activeChunk = chunks.some(function (chunk, index) {
          if (chunk.matched && chunk.begin >= action.chunk.begin) {
            finalTime = chunk.begin;
            activeChunkIndex = index;
            activeChunkCompletion = 0;
            chunk.active = true;
            return chunk;
          }
        });
      }
      if (activeChunk) {
        currentDocumentTime = activeChunk.relativeBegin;
      }
      return _extends({}, state, {
        activeChunk: activeChunk,
        activeChunkIndex: activeChunkIndex,
        activeChunkCompletion: 0,
        currentMediaTime: action.chunk.begin,
        currentDocumentTime: currentDocumentTime,

        autoScrollMode: true,

        chunks: chunks
      });
    case SET_CURRENT_MEDIA_DURATION:
      return _extends({}, state, {
        currentMediaDuration: action.duration.duration
      });
    case SET_CURRENT_MEDIA_TIME:
      var currentTime = action.playerState.currentTime;

      finalTime = currentTime;
      var _autoScrollMode = action.generatedByUser === true;
      // finding the active chunk
      chunks = state.chunks.map(function (chunk, index) {
        // if there is a search query use it
        if (chunk.begin <= currentTime && chunk.end >= currentTime && chunk.matched) {
          activeChunkIndex = index;
          activeChunk = _extends({}, chunk);
          activeChunkCompletion = (currentTime - activeChunk.begin) / activeChunk.duration;
          return _extends({}, chunk, {
            active: true
          });
        }
        return _extends({}, chunk, {
          active: false
        });
      });
      // case between chunks = search the next one
      if (activeChunk === undefined) {
        activeChunk = chunks.some(function (chunk, index) {
          if (chunk.matched && chunk.begin >= currentTime) {
            finalTime = chunk.begin;
            activeChunkIndex = index;
            activeChunkCompletion = 0;
            chunk.active = true;
            return chunk;
          }
        });
      }
      if (activeChunk) {
        currentDocumentTime = activeChunk.relativeBegin + (finalTime - activeChunk.begin);
      }
      return _extends({}, state, {
        currentMediaTime: finalTime,
        currentDocumentTime: currentDocumentTime,
        activeChunkIndex: activeChunkIndex,
        activeChunkCompletion: activeChunkCompletion,
        activeChunk: activeChunk,
        autoScrollMode: _autoScrollMode,
        chunks: chunks
      });
    case TOGGLE_AUTOSCROLL:
      return _extends({}, state, {
        autoScrollMode: !state.autoScrollMode
      });
    case TOGGLE_ISPLAYING:
      return _extends({}, state, {
        isPlaying: !state.isPlaying
      });
    case SET_INFORMATION_MODAL_VISIBILITY:
      return _extends({}, state, {
        informationModalVisible: action.state !== undefined ? action.state : !state.informationModalVisible
      });
    case SET_PLAYER_VOLUME:
      return _extends({}, state, {
        playerVolume: action.volume
      });
    case SCROLL_UPDATE:
      var _action$values = action.values,
          top = _action$values.top,
          scrollHeight = _action$values.scrollHeight,
          clientHeight = _action$values.clientHeight,
          scrollTop = _action$values.scrollTop;

      var topBorder = scrollTop;
      var bottomBorder = scrollTop + clientHeight;
      var topChunk = void 0;
      var topPortion = void 0;
      var bottomChunk = void 0;
      var bottomPortion = void 0;
      // translate to box position
      state.chunks.some(function (chunk) {
        if (topBorder >= chunk.top && topBorder <= chunk.top + chunk.height) {
          topChunk = chunk;
          topPortion = (topBorder - chunk.top) / chunk.height;
        }
        if (bottomBorder >= chunk.top && bottomBorder <= chunk.top + chunk.height) {
          bottomChunk = chunk;
          bottomPortion = (bottomBorder - chunk.top) / chunk.height;
          return true;
        }
      });
      var chunksTotalDuration = state.chunks.reduce(function (totalDuration, chunk) {
        var chunkDuration = chunk.end - chunk.begin;
        return totalDuration + chunkDuration;
      }, 0);
      var scaledTopPrct = void 0;
      var scaledHeightPrct = void 0;
      // this is the visual scroll translated to a time-relative scale
      if (topChunk) {
        var translatedTopTime = topChunk.relativeBegin + topChunk.duration * topPortion;
        var translatedBottomTime = void 0;
        translatedBottomTime = translatedTopTime + 30;
        if (bottomChunk) {
          translatedBottomTime = bottomChunk.relativeBegin + bottomChunk.duration * bottomPortion;
        } else {
          translatedBottomTime = topChunk.end;
        }
        scaledTopPrct = translatedTopTime / chunksTotalDuration * 100;
        scaledHeightPrct = (translatedBottomTime - translatedTopTime) / chunksTotalDuration * 100;
      }
      var visualTopPrct = top * 100;
      var visualHeightPrct = clientHeight / (scrollHeight - clientHeight) * 100;
      var _scrollPosition = {
        visualTopPrct: visualTopPrct,
        visualHeightPrct: visualHeightPrct,
        scaledTopPrct: scaledTopPrct,
        scaledHeightPrct: scaledHeightPrct
      };
      if (!state.scrollPosition || JSON.stringify(_scrollPosition) !== JSON.stringify(state.scrollPosition)) {
        return _extends({}, state, {
          scrollPosition: _scrollPosition
        });
      }
      return state;
    case SET_CHUNKS_POSITIONS:
      chunks = state.chunks.map(function (chunk, index) {
        return _extends({}, chunk, action.positions[index]);
      });
      if (JSON.stringify(chunks) !== JSON.stringify(state.chunks)) {
        return _extends({}, state, {
          chunks: chunks
        });
      }
      return state;
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  player: player,
  compositionReducer: compositionReducer,
  settingsReducer: settingsReducer
});
/*
 * Selectors
 */

var compositionTitle = function compositionTitle(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.title;
};
var compositionDescription = function compositionDescription(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.description;
};
var compositionAuthors = function compositionAuthors(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.authors;
};
var compositionTags = function compositionTags(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.tags;
};

var mediaUrl = function mediaUrl(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.mediaUrl;
};
var displayMode = function displayMode(state) {
  return state.settingsReducer.displayMode;
};

var currentMediaDuration = function currentMediaDuration(state) {
  return state.player.currentMediaDuration;
};
var chunks = function chunks(state) {
  return state.player.chunks;
};
var activeChunk = function activeChunk(state) {
  return state.player.activeChunk;
};
var activeChunkIndex = function activeChunkIndex(state) {
  return state.player.activeChunkIndex;
};
var activeChunkCompletion = function activeChunkCompletion(state) {
  return state.player.activeChunkCompletion;
};
var autoScrollMode = function autoScrollMode(state) {
  return state.player.autoScrollMode;
};
var playerVolume = function playerVolume(state) {
  return state.player.playerVolume;
};

var currentMediaTime = function currentMediaTime(state) {
  return state.player.currentMediaTime;
};

var searchQuery = function searchQuery(state) {
  return state.player.searchQuery;
};
var informationModalVisible = function informationModalVisible(state) {
  return state.player.informationModalVisible;
};
var scrollPosition = function scrollPosition(state) {
  return state.player.scrollPosition;
};
var isPlaying = function isPlaying(state) {
  return state.player.isPlaying;
};

var selector = exports.selector = (0, _reselect.createStructuredSelector)({
  compositionTitle: compositionTitle,
  compositionDescription: compositionDescription,
  compositionAuthors: compositionAuthors,
  compositionTags: compositionTags,

  mediaUrl: mediaUrl,
  displayMode: displayMode,
  activeChunk: activeChunk,
  activeChunkIndex: activeChunkIndex,
  activeChunkCompletion: activeChunkCompletion,
  currentMediaDuration: currentMediaDuration,
  autoScrollMode: autoScrollMode,
  playerVolume: playerVolume,

  currentMediaTime: currentMediaTime,
  searchQuery: searchQuery,
  informationModalVisible: informationModalVisible,
  scrollPosition: scrollPosition,
  isPlaying: isPlaying,

  chunks: chunks
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(39);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class; /* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _lodash = __webpack_require__(17);

var _reactRedux = __webpack_require__(2);

var _reactCustomScrollbars = __webpack_require__(18);

var _rebound = __webpack_require__(19);

var _duck = __webpack_require__(3);

var duck = _interopRequireWildcard(_duck);

var _Chunk = __webpack_require__(20);

var _Chunk2 = _interopRequireDefault(_Chunk);

__webpack_require__(24);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Redux-decorated component class rendering the chunks container to the app
 */
var ChunksContainer = (_dec = (0, _reactRedux.connect)(function (state) {
  return _extends({}, duck.selector(state));
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_extends({}, duck), dispatch)
  };
}), _dec(_class = function (_Component) {
  _inherits(ChunksContainer, _Component);

  function ChunksContainer(props) {
    _classCallCheck(this, ChunksContainer);

    var _this = _possibleConstructorReturn(this, (ChunksContainer.__proto__ || Object.getPrototypeOf(ChunksContainer)).call(this, props));

    _this.chunks = [];
    _this.handleSpringUpdate = _this.handleSpringUpdate.bind(_this);
    _this.scrollTop = _this.scrollTop.bind(_this);
    _this.onScrollUpdate = (0, _lodash.debounce)(_this.onScrollUpdate.bind(_this), 200, { leading: true }); //.bind(this);
    return _this;
  }

  _createClass(ChunksContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.springSystem = new _rebound.SpringSystem();
      this.spring = this.springSystem.createSpring();
      this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.autoScrollMode) {
        var activeChunkIndex = nextProps.activeChunkIndex,
            activeChunkCompletion = nextProps.activeChunkCompletion,
            toggleAutoScroll = nextProps.actions.toggleAutoScroll;

        var chunk = this.chunks[activeChunkIndex];
        if (chunk) {
          var scrollTop = chunk.element.offsetTop;
          var height = chunk.element.offsetHeight;
          var target = scrollTop + height * activeChunkCompletion;
          var centered = target - this.container.offsetHeight / 2;
          this.scrollTop(centered);
        }
        toggleAutoScroll();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.chunks !== nextProps.chunks;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      setTimeout(function () {
        var positions = _this2.chunks.map(function (chunk) {
          return chunk && chunk.getPosition();
        }).filter(function (chunk) {
          return chunk !== undefined;
        });
        _this2.props.actions.setChunksPositions(positions);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.springSystem.deregisterSpring(this.spring);
      this.springSystem.removeAllListeners();
      this.springSystem = undefined;
      this.spring.destroy();
      this.spring = undefined;
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop(top) {
      var scrollbars = this.scrollbars;
      // scrollbars.scrollTop(top);

      var scrollTop = scrollbars.getScrollTop();
      var scrollHeight = scrollbars.getScrollHeight();
      // const val = MathUtil.mapValueInRange(top, 0, scrollHeight, scrollHeight * 0.2, scrollHeight * 0.8);
      var val = _rebound.MathUtil.mapValueInRange(top, 0, scrollHeight, 0, scrollHeight);
      this.spring.setCurrentValue(scrollTop).setAtRest();
      this.spring.setEndValue(val);
    }
  }, {
    key: 'handleSpringUpdate',
    value: function handleSpringUpdate(spring) {
      var val = spring.getCurrentValue();
      if (!Number.isNaN(val)) {
        this.scrollbars.scrollTop(val);
      }
    }
  }, {
    key: 'onScrollUpdate',
    value: function onScrollUpdate(values) {
      if (this.props === undefined) {
        return;
      }
      this.props.actions.scrollUpdate(values);

      var onExit = this.props.onExit;
      var scrollTop = values.scrollTop,
          scrollHeight = values.scrollHeight,
          clientHeight = values.clientHeight;

      if (scrollTop === 0 && typeof onExit === 'function') {
        onExit('top', values);
      } else if (scrollTop >= scrollHeight - clientHeight && typeof onExit === 'function') {
        onExit('bottom', values);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _props$actions = _props.actions,
          setActiveChunk = _props$actions.setActiveChunk,
          toggleIsPlaying = _props$actions.toggleIsPlaying,
          setSearchQuery = _props$actions.setSearchQuery,
          chunks = _props.chunks,
          isPlaying = _props.isPlaying;


      var bindScrollbarRef = function bindScrollbarRef(scrollbar) {
        _this3.scrollbars = scrollbar;
      };
      var bindContainerRef = function bindContainerRef(container) {
        _this3.container = container;
      };

      var onChunkClick = function onChunkClick(chunk) {
        setActiveChunk(chunk);
        if (!isPlaying) {
          toggleIsPlaying();
        }
      };

      return _react2.default.createElement(
        'div',
        {
          className: 'dicto-player-ChunksContainer',
          ref: bindContainerRef },
        _react2.default.createElement(
          _reactCustomScrollbars.Scrollbars,
          {
            ref: bindScrollbarRef,
            style: { width: '100%', height: '100%' },
            onUpdate: this.onScrollUpdate },
          chunks.map(function (thatChunk, index) {
            var bindChunkRef = function bindChunkRef(chunk) {
              _this3.chunks[index] = chunk;
            };
            return _react2.default.createElement(_Chunk2.default, {
              chunk: thatChunk,
              id: 'chunk-' + index,
              onTagQuery: setSearchQuery,
              key: index,
              onClick: onChunkClick,
              ref: bindChunkRef });
          })
        )
      );
    }
  }]);

  return ChunksContainer;
}(_react.Component)) || _class);
exports.default = ChunksContainer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMediaPlayer = __webpack_require__(10);

__webpack_require__(25);

var _MediaTimeHandler = __webpack_require__(26);

var _MediaTimeHandler2 = _interopRequireDefault(_MediaTimeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* esling react/prefer-stateless-function: 0 */


var MediaPlayer = function (_Component) {
  _inherits(MediaPlayer, _Component);

  function MediaPlayer(props) {
    _classCallCheck(this, MediaPlayer);

    return _possibleConstructorReturn(this, (MediaPlayer.__proto__ || Object.getPrototypeOf(MediaPlayer)).call(this, props));
  }

  _createClass(MediaPlayer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          mediaUrl = _props.mediaUrl,
          onDuration = _props.onDuration,
          onTimeUpdate = _props.onTimeUpdate,
          currentMediaTime = _props.currentMediaTime,
          isPlaying = _props.isPlaying,
          playerVolume = _props.playerVolume,
          onClick = _props.onClick;

      var handleClick = function handleClick() {
        return onClick();
      };
      return mediaUrl ? _react2.default.createElement(
        _reactMediaPlayer.Media,
        null,
        _react2.default.createElement(
          'div',
          { onClick: handleClick, className: 'dicto-player-MediaPlayer' },
          _react2.default.createElement(
            'div',
            { className: 'media-player' },
            _react2.default.createElement(_reactMediaPlayer.Player, {
              src: mediaUrl,
              onDuration: onDuration,
              onTimeUpdate: onTimeUpdate })
          ),
          _react2.default.createElement(
            'div',
            { className: 'media-controls' },
            _react2.default.createElement(_MediaTimeHandler2.default, {
              isPlaying: isPlaying,
              currentMediaTime: currentMediaTime,
              playerVolume: playerVolume })
          )
        )
      ) : null;
    }
  }]);

  return MediaPlayer;
}(_react.Component);

exports.default = (0, _reactMediaPlayer.withMediaProps)(MediaPlayer);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchComposition = function SearchComposition(_ref) {
  var searchQuery = _ref.searchQuery,
      onSearchQueryChange = _ref.onSearchQueryChange;

  var onSearchTermChange = function onSearchTermChange(e) {
    return onSearchQueryChange(e.target.value);
  };
  return _react2.default.createElement(
    'div',
    { className: 'dicto-player-SearchComposition' },
    _react2.default.createElement('input', {
      type: 'text',
      value: searchQuery,
      onChange: onSearchTermChange,
      placeholder: 'Chercher un terme' })
  );
};

exports.default = SearchComposition;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoTip = function InfoTip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement(
    'span',
    {
      className: 'dicto-player-InfoTip',
      onClick: onClick },
    'i'
  );
};

exports.default = InfoTip;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Railway = function Railway(_ref) {
  var _ref$chunks = _ref.chunks,
      chunks = _ref$chunks === undefined ? [] : _ref$chunks,
      scrollPosition = _ref.scrollPosition,
      currentMediaDuration = _ref.currentMediaDuration,
      currentMediaTime = _ref.currentMediaTime,
      _ref$relativePosition = _ref.relativePositions,
      relativePositions = _ref$relativePosition === undefined ? true : _ref$relativePosition,
      seekToSec = _ref.seekToSec,
      isPlaying = _ref.isPlaying,
      toggleIsPlaying = _ref.toggleIsPlaying,
      playerVolume = _ref.playerVolume,
      setPlayerVolume = _ref.setPlayerVolume;

  var chunksTotalDuration = chunks.reduce(function (totalDuration, chunk) {
    return totalDuration + chunk.duration;
  }, 0);
  var positionnedChunks = [];
  // chunks are positionned relatively to the sum of all chunks durations
  if (relativePositions) {
    positionnedChunks = chunks.map(function (chunk) {
      var relativeDuration = chunk.duration / chunksTotalDuration;
      var relativePosition = chunk.relativeBegin / chunksTotalDuration;
      return _extends({}, chunk, {
        relativeDuration: relativeDuration,
        relativePosition: relativePosition
      });
    });
    // chunks are positionned relatively to their actual begining timecode
  } else {
    positionnedChunks = chunks.map(function (chunk) {
      var relativeDuration = chunk.duration / currentMediaDuration;
      var relativePosition = chunk.begin / currentMediaDuration;
      return _extends({}, chunk, {
        relativeDuration: relativeDuration,
        relativePosition: relativePosition
      });
    });
  }

  // determining playing head position
  var playingHeadPosition = void 0;
  var playingHeadRelativePosition = void 0;
  if (currentMediaTime) {
    if (relativePositions) {
      var activeChunk = chunks.find(function (chunk) {
        return currentMediaTime >= chunk.begin && currentMediaTime <= chunk.end;
      });
      if (activeChunk) {
        playingHeadPosition = activeChunk.relativeBegin + (currentMediaTime - activeChunk.begin);
        playingHeadRelativePosition = playingHeadPosition / chunksTotalDuration;
      }
    } else {
      playingHeadPosition = currentMediaTime;
      playingHeadRelativePosition = playingHeadPosition / currentMediaDuration;
    }
  }

  var toggleVolume = function toggleVolume() {
    // todo : set progressive volume setter
    if (playerVolume === 0) {
      setPlayerVolume(1);
    } else {
      setPlayerVolume(0);
    }
  };
  return _react2.default.createElement(
    'aside',
    { className: 'dicto-player-Railway' },
    _react2.default.createElement(
      'div',
      { className: 'player-ui' },
      _react2.default.createElement(
        'button',
        { onClick: toggleIsPlaying },
        isPlaying ? '❙❙' : '▶'
      ),
      _react2.default.createElement(
        'button',
        {
          id: 'volume-symbol',
          className: playerVolume === 0 ? 'inactive' : 'active',
          onClick: toggleVolume },
        _react2.default.createElement(
          'span',
          null,
          '\u2759'
        ),
        _react2.default.createElement(
          'span',
          null,
          '\u2759'
        ),
        _react2.default.createElement(
          'span',
          null,
          '\u2759'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'chunks-container' },
      positionnedChunks.map(function (chunk) {
        var onClick = function onClick(e) {
          var y = e.nativeEvent.offsetY;
          var h = e.target.offsetHeight;
          var seekTo = chunk.begin + chunk.duration * (y / h);
          // second argument declares that seek event is user-generated
          seekToSec({ currentTime: seekTo }, true);
        };
        return _react2.default.createElement(
          'div',
          {
            key: chunk.id,
            className: 'chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' '),
            onClick: onClick,
            style: {
              top: chunk.relativePosition * 100 + '%',
              height: chunk.relativeDuration * 100 + '%'
            } },
          chunk.tags && chunk.tags.map(function (tag, tagIndex) {
            return _react2.default.createElement('span', {
              className: 'tag',
              key: tagIndex,
              style: {
                background: tag.color
              } });
          })
        );
      }),
      currentMediaTime ? _react2.default.createElement('div', {
        className: 'playing-head',
        style: {
          top: playingHeadRelativePosition * 100 + '%'
        } }) : null,
      scrollPosition ? _react2.default.createElement('div', {
        className: 'scrollbar',
        style: {
          top: scrollPosition.scaledTopPrct + '%',
          height: scrollPosition.scaledHeightPrct + '%'
        } }) : null
    )
  );
};

exports.default = Railway;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(40);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _PlayerContainer = __webpack_require__(12);

var _PlayerContainer2 = _interopRequireDefault(_PlayerContainer);

var _configureStore = __webpack_require__(35);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * dicto-player Application Endpoint
 * ======================================
 *
 * Rendering the application.
 * @module dicto-player
 */
var store = (0, _configureStore2.default)({});

var Player = function Player(_ref) {
  var _ref$composition = _ref.composition,
      composition = _ref$composition === undefined ? {} : _ref$composition,
      _ref$settings = _ref.settings,
      settings = _ref$settings === undefined ? {} : _ref$settings,
      onExit = _ref.onExit;

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_PlayerContainer2.default, {
      composition: composition,
      settings: settings,
      onExit: onExit })
  );
};

exports.default = Player;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class; /* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _duck = __webpack_require__(3);

var duck = _interopRequireWildcard(_duck);

var _ColumnsLayout = __webpack_require__(15);

var _ColumnsLayout2 = _interopRequireDefault(_ColumnsLayout);

var _FullscreenLayout = __webpack_require__(30);

var _FullscreenLayout2 = _interopRequireDefault(_FullscreenLayout);

var _PeckingLayout = __webpack_require__(32);

var _PeckingLayout2 = _interopRequireDefault(_PeckingLayout);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Redux-decorated component class rendering the player feature to the app
 */
var PlayerContainer = (_dec = (0, _reactRedux.connect)(function (state) {
  return _extends({}, duck.selector(state));
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_extends({}, duck), dispatch)
  };
}), _dec(_class = function (_Component) {
  _inherits(PlayerContainer, _Component);

  function PlayerContainer(props) {
    _classCallCheck(this, PlayerContainer);

    var _this = _possibleConstructorReturn(this, (PlayerContainer.__proto__ || Object.getPrototypeOf(PlayerContainer)).call(this, props));

    _this.renderAppropriatePlayer = function (displayMode, theseProps) {
      switch (displayMode) {
        case 'pecking':
          return _react2.default.createElement(_PeckingLayout2.default, theseProps);

        case 'fullscreen':
          return _react2.default.createElement(_FullscreenLayout2.default, theseProps);

        case 'columns':
        default:
          return _react2.default.createElement(_ColumnsLayout2.default, theseProps);
      }
    };
    return _this;
  }

  _createClass(PlayerContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actions.setComposition(this.props.composition);
      this.props.actions.setSettings(this.props.settings);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.composition !== nextProps.composition) {
        this.props.actions.setComposition(nextProps.composition);
      }

      if (this.props.settings !== nextProps.settings) {
        this.props.actions.setSettings(nextProps.settings);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var displayMode = this.props.displayMode;

      return displayMode ? this.renderAppropriatePlayer(displayMode, this.props) : null;
    }
  }]);

  return PlayerContainer;
}(_react.Component)) || _class);
exports.default = PlayerContainer;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(65);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chunkMatchesSearchQuery;
function chunkMatchesSearchQuery() {
  var chunk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var searchQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (searchQuery && searchQuery.length) {
    if (chunk.content.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
      return true;
    } else if (chunk.tags) {
      var match = chunk.tags.find(function (tag) {
        return tag.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
      });
      return match !== undefined;
    }
    return false;
  } else return true;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(16);

var _reactModal = __webpack_require__(4);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _ChunksContainer = __webpack_require__(5);

var _ChunksContainer2 = _interopRequireDefault(_ChunksContainer);

var _MediaPlayer = __webpack_require__(6);

var _MediaPlayer2 = _interopRequireDefault(_MediaPlayer);

var _SearchComposition = __webpack_require__(7);

var _SearchComposition2 = _interopRequireDefault(_SearchComposition);

var _InfoTip = __webpack_require__(8);

var _InfoTip2 = _interopRequireDefault(_InfoTip);

var _Railway = __webpack_require__(9);

var _Railway2 = _interopRequireDefault(_Railway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnsLayout = function ColumnsLayout(_ref) {
  var _ref$chunks = _ref.chunks,
      chunks = _ref$chunks === undefined ? [] : _ref$chunks,
      compositionTitle = _ref.compositionTitle,
      compositionDescription = _ref.compositionDescription,
      compositionAuthors = _ref.compositionAuthors,
      _ref$settings$allowEm = _ref.settings.allowEmbed,
      allowEmbed = _ref$settings$allowEm === undefined ? true : _ref$settings$allowEm,
      mediaUrl = _ref.mediaUrl,
      currentMediaTime = _ref.currentMediaTime,
      currentMediaDuration = _ref.currentMediaDuration,
      searchQuery = _ref.searchQuery,
      informationModalVisible = _ref.informationModalVisible,
      scrollPosition = _ref.scrollPosition,
      isPlaying = _ref.isPlaying,
      playerVolume = _ref.playerVolume,
      _ref$actions = _ref.actions,
      setCurrentMediaDuration = _ref$actions.setCurrentMediaDuration,
      setCurrentMediaTime = _ref$actions.setCurrentMediaTime,
      setSearchQuery = _ref$actions.setSearchQuery,
      setInformationModalVisibility = _ref$actions.setInformationModalVisibility,
      toggleIsPlaying = _ref$actions.toggleIsPlaying,
      setPlayerVolume = _ref$actions.setPlayerVolume,
      onExit = _ref.onExit;

  var closeModal = function closeModal() {
    return setInformationModalVisibility(false);
  };
  return _react2.default.createElement(
    'section',
    { className: 'dicto-player-ColumnsLayout' },
    _react2.default.createElement(
      'aside',
      { className: 'aside-column' },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'h1',
          null,
          compositionTitle || 'Dicto',
          ' ',
          allowEmbed && _react2.default.createElement(_InfoTip2.default, { onClick: setInformationModalVisibility }),
          ' '
        ),
        _react2.default.createElement(_SearchComposition2.default, {
          searchQuery: searchQuery,
          onSearchQueryChange: setSearchQuery })
      ),
      _react2.default.createElement(_ChunksContainer2.default, { onExit: onExit })
    ),
    _react2.default.createElement(_Railway2.default, {
      chunks: chunks,
      scrollPosition: scrollPosition,
      currentMediaDuration: currentMediaDuration,
      currentMediaTime: currentMediaTime,
      seekToSec: setCurrentMediaTime,
      isPlaying: isPlaying,
      toggleIsPlaying: toggleIsPlaying,
      playerVolume: playerVolume,
      setPlayerVolume: setPlayerVolume }),
    _react2.default.createElement(
      'section',
      { className: 'media-column' },
      _react2.default.createElement(_MediaPlayer2.default, {
        mediaUrl: mediaUrl,
        onDuration: setCurrentMediaDuration,
        o: true, gnTimeUpdate: setCurrentMediaTime,
        currentMediaTime: currentMediaTime,
        isPlaying: isPlaying,
        onClick: toggleIsPlaying,
        playerVolume: playerVolume })
    ),
    informationModalVisible ? _react2.default.createElement(
      _reactModal2.default,
      {
        isOpen: informationModalVisible,
        onRequestClose: closeModal,
        shouldCloseOnOverlayClick: true,
        className: 'dicto-player-modal',
        contentLabel: 'Information' },
      _react2.default.createElement(
        'h2',
        null,
        compositionTitle || 'Dicto'
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-content-wrapper' },
        compositionDescription || compositionAuthors ? _react2.default.createElement(
          'div',
          { className: 'modal-column info' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'i',
              null,
              compositionDescription
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'i',
              null,
              compositionAuthors.map(function (author) {
                return author;
              }).join(', '),
              '.'
            )
          )
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'modal-column addresses' },
          _react2.default.createElement(
            'h3',
            null,
            'Partager'
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-section' },
            _react2.default.createElement(
              'p',
              null,
              'Url de cette composition : '
            ),
            _react2.default.createElement(
              'div',
              { className: 'to-copy' },
              window.location.href
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-section' },
            _react2.default.createElement(
              'p',
              null,
              'Embarquer : '
            ),
            _react2.default.createElement(
              'div',
              { className: 'to-copy' },
              '<iframe src="' + window.location.href + '" frameborder=0 allowfullscreen width=800 height=600 />'
            )
          )
        )
      )
    ) : null
  );
};

exports.default = ColumnsLayout;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(66);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(67);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(77);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(21);

var _reactMarkdown = __webpack_require__(22);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _getContrastYIQ = __webpack_require__(23);

var _getContrastYIQ2 = _interopRequireDefault(_getContrastYIQ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LinkRenderer(props) {
  return _react2.default.createElement(
    'a',
    { href: props.href, target: '_blank' },
    props.children
  );
}

var Chunk = function (_Component) {
  _inherits(Chunk, _Component);

  function Chunk(props) {
    _classCallCheck(this, Chunk);

    var _this = _possibleConstructorReturn(this, (Chunk.__proto__ || Object.getPrototypeOf(Chunk)).call(this, props));

    _this.getPosition = function () {
      var height = _this.element.offsetHeight;
      var top = _this.element.offsetTop;
      return {
        height: height,
        top: top
      };
    };
    return _this;
  }

  _createClass(Chunk, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$chunk = _props.chunk,
          chunk = _props$chunk === undefined ? {} : _props$chunk,
          onClick = _props.onClick,
          onTagQuery = _props.onTagQuery,
          id = _props.id;

      var onChunkClick = function onChunkClick() {
        return onClick(chunk);
      };
      var bindRef = function bindRef(section) {
        _this2.element = section;
      };
      return _react2.default.createElement(
        'section',
        {
          className: 'dicto-player-Chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' '),
          onClick: onChunkClick,
          id: id,
          ref: bindRef },
        _react2.default.createElement(
          'div',
          { className: 'contents-container' },
          _react2.default.createElement(_reactMarkdown2.default, {
            source: chunk.content,
            renderers: { Link: LinkRenderer } })
        ),
        chunk.tags ? _react2.default.createElement(
          'div',
          { className: 'tags-container' },
          chunk.tags.map(function (tag, index) {
            var onTagClick = function onTagClick() {
              return onTagQuery('' + tag.name);
            };
            return _react2.default.createElement(
              'span',
              {
                className: 'tag',
                key: index,
                onClick: onTagClick,
                style: {
                  background: tag.color,
                  color: (0, _getContrastYIQ2.default)(tag.color)
                } },
              tag.name,
              ' (',
              tag.category,
              ')'
            );
          })
        ) : null
      );
    }
  }]);

  return Chunk;
}(_react.Component);

exports.default = Chunk;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(20);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContrastYIQ;
function getContrastYIQ(hexcolor) {
  if (!hexcolor) {
    return;
  }
  if (hexcolor.length > 6) {
    hexcolor = hexcolor.substring(1);
  }
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMediaPlayer = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-set-state : 0 */


var CustomPlayPause = function (_Component) {
  _inherits(CustomPlayPause, _Component);

  function CustomPlayPause(props) {
    _classCallCheck(this, CustomPlayPause);

    var _this = _possibleConstructorReturn(this, (CustomPlayPause.__proto__ || Object.getPrototypeOf(CustomPlayPause)).call(this, props));

    _this.seekToCurrentMediaTime = _this.seekToCurrentMediaTime.bind(_this);

    _this.state = {
      seeking: false
    };
    return _this;
  }

  _createClass(CustomPlayPause, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (Math.abs(this.props.currentMediaTime - nextProps.currentMediaTime) > 1 && !this.props.isLoading) {

        if (this.state.seeking === false) {
          this.setState({ seeking: true });
          setTimeout(function () {
            _this2.seekToCurrentMediaTime(nextProps.currentMediaTime);
          });
          setTimeout(function () {
            return _this2.setState({ seeking: false });
          }, 200);
        }
      }

      if (this.props.isPlaying !== nextProps.isPlaying) {
        if (nextProps.isPlaying) {
          setTimeout(this.props.media.play);
        } else {
          setTimeout(this.props.media.pause);
        }
      }
      if (this.props.playerVolume !== nextProps.playerVolume) {
        setTimeout(function () {
          _this2.props.media.setVolume(nextProps.playerVolume);
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'seekToCurrentMediaTime',
    value: function seekToCurrentMediaTime(nextTime) {
      this.props.media.seekTo(nextTime);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'span',
        {
          className: className,
          style: style },
        this.props.currentMediaTime
      );
    }
  }]);

  return CustomPlayPause;
}(_react.Component);

exports.default = (0, _reactMediaPlayer.withMediaProps)(CustomPlayPause);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

var _reactModal = __webpack_require__(4);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _ChunksContainer = __webpack_require__(5);

var _ChunksContainer2 = _interopRequireDefault(_ChunksContainer);

var _MediaPlayer = __webpack_require__(6);

var _MediaPlayer2 = _interopRequireDefault(_MediaPlayer);

var _SearchComposition = __webpack_require__(7);

var _SearchComposition2 = _interopRequireDefault(_SearchComposition);

var _InfoTip = __webpack_require__(8);

var _InfoTip2 = _interopRequireDefault(_InfoTip);

var _Railway = __webpack_require__(9);

var _Railway2 = _interopRequireDefault(_Railway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullscreenLayout = function FullscreenLayout(_ref) {
  var _ref$chunks = _ref.chunks,
      chunks = _ref$chunks === undefined ? [] : _ref$chunks,
      compositionTitle = _ref.compositionTitle,
      compositionDescription = _ref.compositionDescription,
      compositionAuthors = _ref.compositionAuthors,
      _ref$settings$allowEm = _ref.settings.allowEmbed,
      allowEmbed = _ref$settings$allowEm === undefined ? true : _ref$settings$allowEm,
      mediaUrl = _ref.mediaUrl,
      currentMediaTime = _ref.currentMediaTime,
      currentMediaDuration = _ref.currentMediaDuration,
      searchQuery = _ref.searchQuery,
      informationModalVisible = _ref.informationModalVisible,
      scrollPosition = _ref.scrollPosition,
      isPlaying = _ref.isPlaying,
      playerVolume = _ref.playerVolume,
      _ref$actions = _ref.actions,
      setCurrentMediaDuration = _ref$actions.setCurrentMediaDuration,
      setCurrentMediaTime = _ref$actions.setCurrentMediaTime,
      setSearchQuery = _ref$actions.setSearchQuery,
      setInformationModalVisibility = _ref$actions.setInformationModalVisibility,
      toggleIsPlaying = _ref$actions.toggleIsPlaying,
      setPlayerVolume = _ref$actions.setPlayerVolume,
      onExit = _ref.onExit;

  var closeModal = function closeModal() {
    return setInformationModalVisibility(false);
  };
  return _react2.default.createElement(
    'section',
    { className: 'dicto-player-FullscreenLayout' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'h1',
        null,
        compositionTitle || 'Dicto',
        ' ',
        allowEmbed && _react2.default.createElement(_InfoTip2.default, { onClick: setInformationModalVisibility }),
        ' '
      ),
      _react2.default.createElement(_SearchComposition2.default, {
        searchQuery: searchQuery,
        onSearchQueryChange: setSearchQuery })
    ),
    _react2.default.createElement(
      'section',
      { className: 'main-row' },
      _react2.default.createElement(
        'section',
        { className: 'media-container' },
        _react2.default.createElement(_MediaPlayer2.default, {
          mediaUrl: mediaUrl,
          onDuration: setCurrentMediaDuration,
          o: true, gnTimeUpdate: setCurrentMediaTime,
          currentMediaTime: currentMediaTime,
          isPlaying: isPlaying,
          onClick: toggleIsPlaying,
          playerVolume: playerVolume })
      ),
      _react2.default.createElement(
        'section',
        { className: 'contents-wrapper' },
        _react2.default.createElement(_Railway2.default, {
          chunks: chunks,
          scrollPosition: scrollPosition,
          currentMediaDuration: currentMediaDuration,
          currentMediaTime: currentMediaTime,
          seekToSec: setCurrentMediaTime,
          isPlaying: isPlaying,
          toggleIsPlaying: toggleIsPlaying,
          playerVolume: playerVolume,
          setPlayerVolume: setPlayerVolume }),
        _react2.default.createElement(_ChunksContainer2.default, { onExit: onExit })
      )
    ),
    informationModalVisible ? _react2.default.createElement(
      _reactModal2.default,
      {
        isOpen: informationModalVisible,
        onRequestClose: closeModal,
        shouldCloseOnOverlayClick: true,
        className: 'dicto-player-modal',
        contentLabel: 'Information' },
      _react2.default.createElement(
        'h2',
        null,
        compositionTitle || 'Dicto'
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-content-wrapper' },
        compositionDescription || compositionAuthors ? _react2.default.createElement(
          'div',
          { className: 'modal-column info' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'i',
              null,
              compositionDescription
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'i',
              null,
              compositionAuthors.map(function (author) {
                return author;
              }).join(', '),
              '.'
            )
          )
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'modal-column addresses' },
          _react2.default.createElement(
            'h3',
            null,
            'Partager'
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-section' },
            _react2.default.createElement(
              'p',
              null,
              'Url de cette composition : '
            ),
            _react2.default.createElement(
              'div',
              { className: 'to-copy' },
              window.location.href
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-section' },
            _react2.default.createElement(
              'p',
              null,
              'Embarquer : '
            ),
            _react2.default.createElement(
              'div',
              { className: 'to-copy' },
              '<iframe src="' + window.location.href + '" frameborder=0 allowfullscreen width=800 height=600 />'
            )
          )
        )
      )
    ) : null
  );
};

exports.default = FullscreenLayout;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTagcloud = __webpack_require__(33);

__webpack_require__(34);

var _reactModal = __webpack_require__(4);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _ChunksContainer = __webpack_require__(5);

var _ChunksContainer2 = _interopRequireDefault(_ChunksContainer);

var _MediaPlayer = __webpack_require__(6);

var _MediaPlayer2 = _interopRequireDefault(_MediaPlayer);

var _SearchComposition = __webpack_require__(7);

var _SearchComposition2 = _interopRequireDefault(_SearchComposition);

var _InfoTip = __webpack_require__(8);

var _InfoTip2 = _interopRequireDefault(_InfoTip);

var _Railway = __webpack_require__(9);

var _Railway2 = _interopRequireDefault(_Railway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeckingLayout = function (_Component) {
  _inherits(PeckingLayout, _Component);

  function PeckingLayout(props) {
    _classCallCheck(this, PeckingLayout);

    var _this = _possibleConstructorReturn(this, (PeckingLayout.__proto__ || Object.getPrototypeOf(PeckingLayout)).call(this, props));

    _this.updateVisData = _this.updateVisData.bind(_this);
    _this.state = {
      network: {
        nodes: [],
        edges: []
      }
    };
    return _this;
  }

  _createClass(PeckingLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateVisData(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.chunks !== nextProps.chunks) {
        this.updateVisData(nextProps);
      }
    }
  }, {
    key: 'updateVisData',
    value: function updateVisData(props) {
      var chunks = props.chunks;


      var nodeIndex = 0;
      var network = chunks.reduce(function (result, chunk) {
        var tags = chunk.tags || [];
        return tags.reduce(function (res, tag) {
          nodeIndex++;
          var n = res.nodes.find(function (node) {
            return node.name === tag.name && node.category === tag.category;
          });
          if (n) {
            n.count = n.count + 1;
          } else {
            res.nodes.push(_extends({}, tag, {
              value: tag.name, // + ' (' + tag.category + ')',
              id: nodeIndex,
              count: 1
            }));
          }
          return res;
        }, result);
      }, {
        nodes: [],
        edges: []
      });
      network.nodes = network.nodes.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else return -1;
      });
      this.setState({ network: network }); /* eslint react/no-set-state: 0 */
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$chunks = _props.chunks,
          chunks = _props$chunks === undefined ? [] : _props$chunks,
          compositionTitle = _props.compositionTitle,
          compositionDescription = _props.compositionDescription,
          compositionAuthors = _props.compositionAuthors,
          _props$settings$allow = _props.settings.allowEmbed,
          allowEmbed = _props$settings$allow === undefined ? true : _props$settings$allow,
          mediaUrl = _props.mediaUrl,
          currentMediaTime = _props.currentMediaTime,
          currentMediaDuration = _props.currentMediaDuration,
          searchQuery = _props.searchQuery,
          informationModalVisible = _props.informationModalVisible,
          scrollPosition = _props.scrollPosition,
          isPlaying = _props.isPlaying,
          playerVolume = _props.playerVolume,
          _props$actions = _props.actions,
          setCurrentMediaDuration = _props$actions.setCurrentMediaDuration,
          setCurrentMediaTime = _props$actions.setCurrentMediaTime,
          setSearchQuery = _props$actions.setSearchQuery,
          setInformationModalVisibility = _props$actions.setInformationModalVisibility,
          toggleIsPlaying = _props$actions.toggleIsPlaying,
          setPlayerVolume = _props$actions.setPlayerVolume,
          onExit = _props.onExit;
      var nodes = this.state.network.nodes;

      var onTagClick = function onTagClick(tag) {
        return setSearchQuery(tag.value);
      };
      var closeModal = function closeModal() {
        return setInformationModalVisibility(false);
      };
      return _react2.default.createElement(
        'section',
        { className: 'dicto-player-PeckingLayout' },
        _react2.default.createElement(
          'aside',
          { className: 'aside-column' },
          _react2.default.createElement(
            'div',
            { className: 'header' },
            _react2.default.createElement(
              'h1',
              null,
              compositionTitle || 'Dicto',
              ' ',
              allowEmbed && _react2.default.createElement(_InfoTip2.default, { onClick: setInformationModalVisibility }),
              ' '
            ),
            _react2.default.createElement(_SearchComposition2.default, {
              searchQuery: searchQuery,
              onSearchQueryChange: setSearchQuery })
          ),
          _react2.default.createElement(_ChunksContainer2.default, { onExit: onExit })
        ),
        _react2.default.createElement(_Railway2.default, {
          chunks: chunks,
          scrollPosition: scrollPosition,
          currentMediaDuration: currentMediaDuration,
          currentMediaTime: currentMediaTime,
          seekToSec: setCurrentMediaTime,
          isPlaying: isPlaying,
          toggleIsPlaying: toggleIsPlaying,
          playerVolume: playerVolume,
          setPlayerVolume: setPlayerVolume }),
        _react2.default.createElement(
          'section',
          { className: 'media-column' },
          _react2.default.createElement(
            'div',
            { className: 'media-container' },
            _react2.default.createElement(_MediaPlayer2.default, {
              mediaUrl: mediaUrl,
              onDuration: setCurrentMediaDuration,
              o: true, gnTimeUpdate: setCurrentMediaTime,
              currentMediaTime: currentMediaTime,
              isPlaying: isPlaying,
              onClick: toggleIsPlaying,
              playerVolume: playerVolume })
          ),
          _react2.default.createElement(
            'div',
            { className: 'visualization-container' },

            // visMode === 'tagcloud' &&
            _react2.default.createElement(_reactTagcloud.TagCloud, {
              minSize: 12,
              maxSize: 35,
              tags: nodes,
              className: 'tagcloud',
              onClick: onTagClick })
          )
        ),
        informationModalVisible ? _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: informationModalVisible,
            onRequestClose: closeModal,
            shouldCloseOnOverlayClick: true,
            className: 'dicto-player-modal',
            contentLabel: 'Information' },
          _react2.default.createElement(
            'h2',
            null,
            compositionTitle || 'Dicto'
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-content-wrapper' },
            compositionDescription || compositionAuthors ? _react2.default.createElement(
              'div',
              { className: 'modal-column info' },
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  compositionDescription
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'i',
                  null,
                  compositionAuthors.map(function (author) {
                    return author;
                  }).join(', '),
                  '.'
                )
              )
            ) : null,
            _react2.default.createElement(
              'div',
              { className: 'modal-column addresses' },
              _react2.default.createElement(
                'h3',
                null,
                'Partager'
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-section' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Url de cette composition : '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'to-copy' },
                  window.location.href
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-section' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Embarquer : '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'to-copy' },
                  '<iframe src="' + window.location.href + '" frameborder=0 allowfullscreen width=800 height=600 />'
                )
              )
            )
          )
        ) : null
      );
    }
  }]);

  return PeckingLayout;
}(_react.Component);

exports.default = PeckingLayout;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(78);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(1);

var _reduxThunk = __webpack_require__(36);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _duck = __webpack_require__(3);

var _duck2 = _interopRequireDefault(_duck);

var _promiseMiddleware = __webpack_require__(37);

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configures store with a possible inherited state and appropriate reducers
 * @param initialState - the state to use to bootstrap the reducer
 * @return {object} store - the configured store
 */
/**
 * Dicto-player store configuration
 * ===================================
 * Configuring store with appropriate middlewares
 */
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Compose final middleware with thunk and promises handling
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _promiseMiddleware2.default)());

  // Create final store and subscribe router in debug env ie. for devtools
  var createStoreWithMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ ? (0, _redux.compose)(
  // related middlewares
  middleware,
  // connection to redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__())(_redux.createStore) : (0, _redux.compose)(middleware)(_redux.createStore);

  var store = createStoreWithMiddleware(_duck2.default,
  // rootReducer,
  initialState);
  // live-reloading handling
  if (false) {
    module.hot.accept('./duck', function () {
      var nextRootReducer = require('./duck').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(85);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Promise middleware
 * ===================================
 * If a promise is passed in an action,
 * this middleware will resolve it and dispatch related actions names
 * (ACTION_NAME when started, then ACTION_NAME_SUCCESS or ACTION_NAME_FAIL depending on promise outcome)
 */

exports.default = function () {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // If the action is a function, execute it
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        var promise = action.promise,
            type = action.type,
            rest = _objectWithoutProperties(action, ['promise', 'type']);

        // If there is no promise in the action, ignore it


        if (!promise) {
          return next(action);
        }
        var REQUEST = type;
        var SUCCESS = REQUEST + '_SUCCESS';
        var FAILURE = REQUEST + '_FAIL';

        // Trigger the action (for loading indication for instance)
        next(_extends({}, rest, { type: REQUEST }));
        return promise(dispatch, getState).then(function (result) {
          next(_extends({}, rest, { result: result, type: SUCCESS }));
          return true;
        }).catch(function (error) {
          return next(_extends({}, rest, error, { errorMessage: error, type: FAILURE }));
        });
      };
    };
  };
};

/***/ })
/******/ ])["default"];

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(17);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("lodash-es/isPlainObject");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(17);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(38);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(3);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.controls = exports.withMediaProps = exports.Player = exports.Media = undefined;

var _Media2 = __webpack_require__(41);

var _Media3 = _interopRequireDefault(_Media2);

var _Player2 = __webpack_require__(45);

var _Player3 = _interopRequireDefault(_Player2);

var _withMediaProps2 = __webpack_require__(2);

var _withMediaProps3 = _interopRequireDefault(_withMediaProps2);

var _controls2 = __webpack_require__(54);

var _controls = _interopRequireWildcard(_controls2);

var _utils2 = __webpack_require__(63);

var _utils = _interopRequireWildcard(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Media = _Media3.default;
exports.Player = _Player3.default;
exports.withMediaProps = _withMediaProps3.default;
exports.controls = _controls;
exports.utils = _utils;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contextTypes = __webpack_require__(5);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _requestFullscreen = __webpack_require__(42);

var _requestFullscreen2 = _interopRequireDefault(_requestFullscreen);

var _exitFullscreen = __webpack_require__(43);

var _exitFullscreen2 = _interopRequireDefault(_exitFullscreen);

var _fullscreenChange = __webpack_require__(44);

var _fullscreenChange2 = _interopRequireDefault(_fullscreenChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MEDIA_EVENTS = {
  onPlay: 'isPlaying',
  onPause: 'isPlaying',
  onDuration: 'duration',
  onProgress: 'progress',
  onTimeUpdate: 'currentTime',
  onMute: 'isMuted',
  onVolumeChange: 'volume',
  onError: null
};
var MEDIA_EVENTS_KEYS = Object.keys(MEDIA_EVENTS);

var Media = function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTime: 0,
      progress: 0,
      duration: 0.1,
      volume: 1,
      isLoading: true,
      isPlaying: false,
      isMuted: false,
      isFullscreen: false
    }, _this._playerProps = {}, _this._lastVolume = 0, _this._setPlayer = function (component) {
      _this._player = component;
    }, _this._setPlayerProps = function (props) {
      _this._playerProps = props;
    }, _this._setPlayerState = function (state) {
      _this.setState(state);
    }, _this.play = function () {
      return _this._player.play();
    }, _this.pause = function () {
      _this._player.pause();
    }, _this.playPause = function () {
      if (!_this.state.isPlaying) {
        _this._player.play();
      } else {
        _this._player.pause();
      }
    }, _this.stop = function () {
      _this._player.stop();
    }, _this.seekTo = function (currentTime) {
      _this._player.seekTo(currentTime);
      _this.setState({ currentTime: currentTime });
    }, _this.skipTime = function (amount) {
      var _this$state = _this.state,
          currentTime = _this$state.currentTime,
          duration = _this$state.duration;

      var newTime = currentTime + amount;

      if (newTime < 0) {
        newTime = 0;
      } else if (newTime > duration) {
        newTime = duration;
      }

      _this.seekTo(newTime);
    }, _this.mute = function (isMuted) {
      if (isMuted) {
        _this._lastVolume = _this.state.volume;
        _this._player.setVolume(0);
      } else {
        var volume = _this._lastVolume > 0 ? _this._lastVolume : 0.1;
        _this._player.setVolume(volume);
      }
      _this._player.mute(isMuted);
    }, _this.muteUnmute = function () {
      _this.mute(!_this.state.isMuted);
    }, _this.setVolume = function (volume) {
      var isMuted = volume <= 0;

      if (isMuted !== _this.state.isMuted) {
        _this.mute(isMuted);
      } else {
        _this._lastVolume = volume;
      }

      _this._player.setVolume(volume);
    }, _this.addVolume = function (amount) {
      var newVolume = _this.state.volume + amount * 0.01;

      if (newVolume < 0) {
        newVolume = 0;
      } else if (newVolume > 1) {
        newVolume = 1;
      }

      _this.setVolume(newVolume);
    }, _this.fullscreen = function () {
      if (!_this.state.isFullscreen) {
        _this._player.node[_requestFullscreen2.default]();
      } else {
        document[_exitFullscreen2.default]();
      }
    }, _this._handleFullscreenChange = function (_ref2) {
      var target = _ref2.target;

      if (target === _this._player.node) {
        _this.setState({ isFullscreen: !_this.state.isFullscreen });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Media, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        media: this._getPublicMediaProps(),
        _mediaSetters: {
          setPlayer: this._setPlayer,
          setPlayerProps: this._setPlayerProps,
          setPlayerState: this._setPlayerState
        },
        _mediaGetters: {
          getPlayerEvents: this._getPlayerEvents()
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _fullscreenChange2.default)('add', this._handleFullscreenChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _fullscreenChange2.default)('remove', this._handleFullscreenChange);
    }
  }, {
    key: '_getPublicMediaProps',
    value: function _getPublicMediaProps() {
      return _extends({}, this.state, {
        play: this.play,
        pause: this.pause,
        playPause: this.playPause,
        stop: this.stop,
        seekTo: this.seekTo,
        skipTime: this.skipTime,
        mute: this.mute,
        muteUnmute: this.muteUnmute,
        setVolume: this.setVolume,
        addVolume: this.addVolume,
        fullscreen: this.fullscreen
      });
    }
  }, {
    key: '_getPlayerEvents',
    value: function _getPlayerEvents() {
      var _this2 = this;

      var events = {};

      MEDIA_EVENTS_KEYS.forEach(function (key) {
        var stateKey = MEDIA_EVENTS[key];
        var propCallback = _this2._playerProps[key];

        events[key] = function (val) {
          if (stateKey) {
            _this2.setState(_defineProperty({}, stateKey, val));
          }
          if (typeof propCallback === 'function') {
            propCallback(_this2.state);
          }
        };
      });
      return events;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      if (typeof children === 'function') {
        return children(this._getPublicMediaProps());
      }

      return _react.Children.only(children);
    }
  }]);

  return Media;
}(_react.Component);

Media.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]).isRequired
};
Media.childContextTypes = _contextTypes2.default;
exports.default = Media;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (typeof document === 'undefined') {
    return function () {};
  }

  var names = ['requestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'webkitRequestFullscreen'];
  return names.reduce(function (prev, curr) {
    return document.documentElement[curr] ? curr : prev;
  });
}();

module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (typeof document === 'undefined') {
    return function () {};
  }

  var names = ['exitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'webkitExitFullscreen'];
  return names.reduce(function (prev, curr) {
    return document[curr] ? curr : prev;
  });
}();

module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fullscreenChange;
function fullscreenChange(type, callback) {
  var vendors = ['fullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange', 'webkitfullscreenchange'];
  vendors.forEach(function (vendor) {
    return document[type + 'EventListener'](vendor, callback);
  });
}
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contextTypes = __webpack_require__(5);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _getVendor2 = __webpack_require__(46);

var _getVendor3 = _interopRequireDefault(_getVendor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this._defaultsSet = false, _this._setPlayer = function (component) {
      _this.context._mediaSetters.setPlayer(component);
      _this._component = component;
    }, _this._setLoading = function (isLoading) {
      _this.context._mediaSetters.setPlayerState({ isLoading: isLoading });
    }, _this._handleOnReady = function () {
      var _this$context = _this.context,
          media = _this$context.media,
          _mediaSetters = _this$context._mediaSetters;
      var _this$props = _this.props,
          autoPlay = _this$props.autoPlay,
          onReady = _this$props.onReady;


      media.setVolume(media.volume);
      media.mute(media.isMuted);

      if (!_this._defaultsSet) {
        _this._setDefaults();
      }

      if (autoPlay) {
        media.play();
      }

      _this._setLoading(false);

      if (typeof onReady === 'function') {
        onReady(media);
      }
    }, _this._handleOnEnded = function () {
      var _this$context2 = _this.context,
          media = _this$context2.media,
          _mediaSetters = _this$context2._mediaSetters;
      var _this$props2 = _this.props,
          loop = _this$props2.loop,
          onEnded = _this$props2.onEnded;


      if (loop) {
        media.seekTo(0);
        media.play();
      } else {
        _mediaSetters.setPlayerState({ isPlaying: false });
      }

      if (typeof onEnded === 'function') {
        onEnded(media);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Player, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._setPlayerProps(this.props);

      // we need to unset the loading state if no source was loaded
      if (!this.props.src) {
        this._setLoading(false);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      this._setPlayerProps(nextProps);

      // clean state if the media source has changed
      if (this.props.src !== nextProps.src) {
        this.context._mediaSetters.setPlayerState({
          currentTime: 0,
          progress: 0,
          duration: 0,
          isLoading: true,
          isPlaying: false
        });
      }
    }
  }, {
    key: '_setPlayerProps',
    value: function _setPlayerProps(props) {
      this.context._mediaSetters.setPlayerProps(props);
    }
  }, {
    key: '_setDefaults',
    value: function _setDefaults() {
      var media = this.context.media;
      var _props = this.props,
          defaultCurrentTime = _props.defaultCurrentTime,
          defaultVolume = _props.defaultVolume,
          defaultMuted = _props.defaultMuted;


      if (defaultCurrentTime > -1) {
        media.seekTo(defaultCurrentTime);
      }
      media.setVolume(defaultVolume);
      media.mute(defaultMuted);

      this._defaultsSet = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          src = _props2.src,
          _vendor = _props2.vendor,
          autoPlay = _props2.autoPlay,
          onReady = _props2.onReady,
          onEnded = _props2.onEnded,
          defaultCurrentTime = _props2.defaultCurrentTime,
          defaultVolume = _props2.defaultVolume,
          defaultMuted = _props2.defaultMuted,
          extraProps = _objectWithoutProperties(_props2, ['src', 'vendor', 'autoPlay', 'onReady', 'onEnded', 'defaultCurrentTime', 'defaultVolume', 'defaultMuted']);

      var _getVendor = (0, _getVendor3.default)(src, _vendor),
          vendor = _getVendor.vendor,
          component = _getVendor.component;

      return (0, _react.createElement)(component, _extends({
        ref: this._setPlayer,
        src: src,
        vendor: vendor,
        autoPlay: autoPlay,
        isLoading: this._setLoading,
        onReady: this._handleOnReady,
        onEnded: this._handleOnEnded,
        extraProps: extraProps
      }, this.context._mediaGetters.getPlayerEvents));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._component && this._component.instance;
    }
  }]);

  return Player;
}(_react.Component);

Player.propTypes = {
  vendor: _propTypes2.default.oneOf(['video', 'audio', 'youtube', 'vimeo']),
  defaultCurrentTime: _propTypes2.default.number,
  defaultVolume: _propTypes2.default.number,
  defaultMuted: _propTypes2.default.bool
};
Player.defaultProps = {
  defaultCurrentTime: -1,
  defaultVolume: 1,
  defaultMuted: false
};
Player.contextTypes = _contextTypes2.default;
exports.default = Player;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVendor;

var _HTML = __webpack_require__(47);

var _HTML2 = _interopRequireDefault(_HTML);

var _Vimeo = __webpack_require__(48);

var _Vimeo2 = _interopRequireDefault(_Vimeo);

var _Youtube = __webpack_require__(50);

var _Youtube2 = _interopRequireDefault(_Youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getVendor(src, vendor) {
  src = src || '';

  if (vendor === 'youtube' || /youtube.com|youtu.be/.test(src)) {
    return { vendor: 'youtube', component: _Youtube2.default };
  } else if (vendor === 'vimeo' || /vimeo.com/.test(src)) {
    return { vendor: 'vimeo', component: _Vimeo2.default };
  } else {
    var isAudio = vendor === 'audio' || /\.(mp3|wav|m4a)($|\?)/i.test(src);
    return { vendor: isAudio ? 'audio' : 'video', component: _HTML2.default };
  }
}
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(4);

var _vendorPropTypes = __webpack_require__(6);

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTML5 = function (_Component) {
  _inherits(HTML5, _Component);

  function HTML5() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HTML5);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTML5.__proto__ || Object.getPrototypeOf(HTML5)).call.apply(_ref, [this].concat(args))), _this), _this._isLoading = function () {
      _this.props.isLoading(true);
    }, _this._isNotLoading = function () {
      _this.props.isLoading(false);
    }, _this._handleCanPlay = function () {
      _this.props.onReady();
    }, _this._handlePlay = function () {
      _this.props.onPlay(true);
      _this._isNotLoading();
    }, _this._handlePause = function () {
      _this.props.onPause(false);
    }, _this._handleEnded = function () {
      _this.props.onEnded(false);
    }, _this._handleError = function (e) {
      _this.props.onError(e);
      _this._isNotLoading();
    }, _this._handleProgress = function (_ref2) {
      var _ref2$target = _ref2.target,
          buffered = _ref2$target.buffered,
          duration = _ref2$target.duration;

      var progress = 0;

      if (duration > 0) {
        progress = buffered.end(buffered.length - 1) / duration;
      }

      _this.props.onProgress(progress);
    }, _this._handleDuration = function (_ref3) {
      var duration = _ref3.target.duration;

      _this.props.onDuration(duration);
    }, _this._handleTimeUpdate = function (_ref4) {
      var currentTime = _ref4.target.currentTime;

      _this.props.onTimeUpdate(currentTime);
    }, _this._handleVolumeChange = function (_ref5) {
      var _ref5$target = _ref5.target,
          volume = _ref5$target.volume,
          muted = _ref5$target.muted;

      _this.props.onMute(muted);
      _this.props.onVolumeChange(volume);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTML5, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          src = _props.src,
          useAudioObject = _props.extraProps.useAudioObject;


      if (useAudioObject) {
        this._createAudioObject(src);
        this._bindAudioObjectEvents(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var src = nextProps.src,
          useAudioObject = nextProps.extraProps.useAudioObject;


      if (useAudioObject) {
        // destroy and recreate audio object to clean up any browser state
        if (this.props.src !== src) {
          this._destroyAudioObject();
          this._createAudioObject(src);
        }
        // bind any new props to current audio object
        this._bindAudioObjectEvents(nextProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.extraProps.useAudioObject) {
        this._destroyAudioObject();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      return this._player.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._player.pause();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._player.pause();
      this._player.currentTime = 0;
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      if (this._player.readyState > 0) {
        this._player.currentTime = currentTime;
      }
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      this._player.muted = muted;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this._player.volume = volume;
    }
  }, {
    key: '_createAudioObject',


    // Handle Audio Object
    value: function _createAudioObject(src) {
      this._player = new Audio(src);
    }
  }, {
    key: '_destroyAudioObject',
    value: function _destroyAudioObject() {
      this.stop();
      this._player = null;
    }
  }, {
    key: '_bindAudioObjectEvents',
    value: function _bindAudioObjectEvents(_ref6) {
      var _this2 = this;

      var extraProps = _ref6.extraProps;

      var playerEvents = this._playerEvents;

      Object.keys(extraProps).forEach(function (key) {
        _this2._player[key] = extraProps[key];
      });

      Object.keys(playerEvents).forEach(function (key) {
        _this2._player[key.toLowerCase()] = playerEvents[key];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          vendor = _props2.vendor,
          src = _props2.src;

      var _props$extraProps = this.props.extraProps,
          useAudioObject = _props$extraProps.useAudioObject,
          extraProps = _objectWithoutProperties(_props$extraProps, ['useAudioObject']);

      if (!useAudioObject) {
        return (0, _react.createElement)(vendor, _extends({
          ref: function ref(c) {
            return _this3._player = c;
          },
          src: src
        }, extraProps, this._playerEvents));
      } else {
        return null;
      }
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._player;
    }
  }, {
    key: 'node',
    get: function get() {
      return (0, _reactDom.findDOMNode)(this._player);
    }
  }, {
    key: '_playerEvents',
    get: function get() {
      return {
        onCanPlay: this._handleCanPlay,
        onPlay: this._handlePlay,
        onPlaying: this._isNotLoading,
        onPause: this._handlePause,
        onEnded: this._handleEnded,
        onWaiting: this._isLoading,
        onError: this._handleError,
        onProgress: this._handleProgress,
        onLoadedMetadata: this._handleDuration,
        onTimeUpdate: this._handleTimeUpdate,
        onVolumeChange: this._handleVolumeChange
      };
    }
  }]);

  return HTML5;
}(_react.Component);

HTML5.propTypes = _extends({}, _vendorPropTypes2.default, {
  useAudioObject: _propTypes2.default.bool
});
exports.default = HTML5;
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _getVimeoId = __webpack_require__(49);

var _getVimeoId2 = _interopRequireDefault(_getVimeoId);

var _vendorPropTypes = __webpack_require__(6);

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vimeo = function (_Component) {
  _inherits(Vimeo, _Component);

  function Vimeo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Vimeo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vimeo.__proto__ || Object.getPrototypeOf(Vimeo)).call.apply(_ref, [this].concat(args))), _this), _this._vimeoId = (0, _getVimeoId2.default)(_this.props.src), _this._origin = '*', _this._onMessage = function (e) {
      var data = void 0;

      // allow messages from the Vimeo player only
      if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) {
        return false;
      }

      if (_this._origin === '*') {
        _this._origin = e.origin;
      }

      try {
        data = JSON.parse(e.data);
      } catch (err) {
        _this.props.onError(err);
      }

      switch (data.event) {
        case 'ready':
          _this.props.onReady();
          _this._postMessages();
          break;
        case 'loadProgress':
          _this.props.onProgress(data.data.percent);
          break;
        case 'playProgress':
          _this.props.onTimeUpdate(data.data.seconds);
          break;
        case 'play':
          _this.props.onPlay(true);
          break;
        case 'pause':
          _this.props.onPause(false);
          break;
        case 'finish':
          _this.props.onEnded(false);
          break;
      }

      if (data.method === 'getDuration') {
        _this.props.onDuration(data.value);
      } else if (data.method === 'getVolume') {
        _this.setVolume(data.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Vimeo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('message', this._onMessage);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this._vimeoId = (0, _getVimeoId2.default)(nextProps.src);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('message', this._onMessage);
    }
  }, {
    key: '_postMessage',
    value: function _postMessage(method, value) {
      var data = { method: method };

      if (value) {
        data.value = value;
      }

      this._iframe.contentWindow.postMessage(JSON.stringify(data), this._origin);
    }
  }, {
    key: '_postMessages',
    value: function _postMessages() {
      var _this2 = this;

      ;['loadProgress', 'playProgress', 'play', 'pause', 'finish'].forEach(function (listener) {
        return _this2._postMessage('addEventListener', listener);
      });

      this._postMessage('getDuration');
      this._postMessage('getVolume');
    }
  }, {
    key: 'play',
    value: function play() {
      this._postMessage('play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._postMessage('pause');
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._postMessage('unload');
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      this._postMessage('seekTo', currentTime);
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      this._postMessage('setVolume', muted ? '0' : '1');
      this.props.onMute(muted);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this._postMessage('setVolume', volume);
      this.props.onVolumeChange(+volume);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('iframe', _extends({
        ref: function ref(c) {
          return _this3._iframe = c;
        },
        src: 'https://player.vimeo.com/video/' + this._vimeoId + '?api=1'
      }, this.props.extraProps));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._iframe;
    }
  }, {
    key: 'node',
    get: function get() {
      return (0, _reactDom.findDOMNode)(this._iframe);
    }
  }]);

  return Vimeo;
}(_react.Component);

Vimeo.propTypes = _vendorPropTypes2.default;
exports.default = Vimeo;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVimeoId;
// Thanks to: http://stackoverflow.com/a/13286930/1461204
function getVimeoId(url) {
  var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
  var match = url.match(regExp);

  if (match) {
    return match[3];
  } else {
    throw 'Invalid Vimeo ID provided';
  }
}
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _youtubeApiLoader = __webpack_require__(51);

var _youtubeApiLoader2 = _interopRequireDefault(_youtubeApiLoader);

var _getYoutubeId = __webpack_require__(53);

var _getYoutubeId2 = _interopRequireDefault(_getYoutubeId);

var _vendorPropTypes = __webpack_require__(6);

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Youtube = function (_Component) {
  _inherits(Youtube, _Component);

  function Youtube() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Youtube);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call.apply(_ref, [this].concat(args))), _this), _this._videoId = (0, _getYoutubeId2.default)(_this.props.src), _this._lastVideoId = _this._videoId, _this._isReady = false, _this._isMounted = false, _this._progressId = null, _this._timeUpdateId = null, _this._handleProgress = function () {
      if (!_this._isMounted) return;

      var progress = _this._player.getVideoLoadedFraction() || 0;

      _this.props.onProgress(progress);

      if (_this._progressId && progress < 1) {
        _this._progressId = requestAnimationFrame(_this._handleProgress);
      }
    }, _this._handleTimeUpdate = function () {
      if (!_this._isMounted) return;

      _this.props.onTimeUpdate(_this._player.getCurrentTime() || 0);

      if (_this._timeUpdateId) {
        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Youtube, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      _youtubeApiLoader2.default.load(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this._lastVideoId = this._videoId;
        this._videoId = (0, _getYoutubeId2.default)(nextProps.src);

        if (this._isReady) {
          if (nextProps.autoPlay) {
            this._player.loadVideoById(this._videoId);
          } else {
            this._player.cueVideoById(this._videoId);
          }
          this.props.onReady();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;

      if (this._progressId) {
        cancelAnimationFrame(this._progressId);
      }

      if (this._timeUpdateId) {
        cancelAnimationFrame(this._timeUpdateId);
      }

      if (this._player) {
        this._player.destroy();
      }
    }
  }, {
    key: '_createPlayer',
    value: function _createPlayer() {
      this._player = new YT.Player(this._node, {
        videoId: this._videoId,
        events: this._events(),
        playerVars: {
          controls: 0,
          showinfo: 0,
          modestbranding: 1
        }
      });
    }
  }, {
    key: '_events',
    value: function _events() {
      var _this2 = this;

      return {
        onReady: function onReady() {
          // if id changed before the player was ready we need to load the new one
          if (_this2._videoId !== _this2._lastVideoId) {
            _this2._player.loadVideoById(_this2._videoId);
          }
          _this2._isReady = true;
          _this2.props.onDuration(_this2._player.getDuration());
          _this2.props.onReady();
        },
        onStateChange: function onStateChange(_ref2) {
          var data = _ref2.data;
          var _window$YT$PlayerStat = window.YT.PlayerState,
              PLAYING = _window$YT$PlayerStat.PLAYING,
              PAUSED = _window$YT$PlayerStat.PAUSED,
              ENDED = _window$YT$PlayerStat.ENDED,
              BUFFERING = _window$YT$PlayerStat.BUFFERING,
              CUED = _window$YT$PlayerStat.CUED;

          var isPlaying = data === PLAYING;

          if (isPlaying) {
            _this2.props.onPlay(true);
            _this2.props.onDuration(_this2._player.getDuration());
            _this2._timeUpdateId = requestAnimationFrame(_this2._handleTimeUpdate);
          } else {
            cancelAnimationFrame(_this2._timeUpdateId);
            _this2._timeUpdateId = null;

            cancelAnimationFrame(_this2._progressId);
            _this2._progressId = null;
          }

          if (data === PAUSED) {
            _this2.props.onPause(false);
          }

          if (data === ENDED) {
            _this2.props.onEnded(false);
          }

          // start fetching progress when playing or buffering
          if (isPlaying || data === BUFFERING) {
            _this2._progressId = requestAnimationFrame(_this2._handleProgress);
          }

          // reset duration if a new video was loaded
          if (data === CUED) {
            _this2.props.onDuration(0.1);
          }
        },
        onError: function onError(e) {
          _this2.props.onError(e.data);
        }
      };
    }
  }, {
    key: 'play',
    value: function play() {
      this._player.playVideo();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._player.pauseVideo();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._player.stopVideo();
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      this._player.seekTo(currentTime);
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      if (muted) {
        this._player.mute();
      } else {
        this._player.unMute();
      }
      this.props.onMute(muted);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this._player.setVolume(+volume * 100);
      this.props.onVolumeChange(+volume);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', _extends({ ref: function ref(c) {
          return _this3._node = c;
        } }, this.props.extraProps));
    }
  }, {
    key: 'instance',
    get: function get() {
      return this._player;
    }
  }, {
    key: 'node',
    get: function get() {
      return this._player.getIframe();
    }
  }]);

  return Youtube;
}(_react.Component);

Youtube.propTypes = _vendorPropTypes2.default;
exports.default = Youtube;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadApi = __webpack_require__(52);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  _queue: [],
  _isLoaded: false,

  load: function load(component) {
    // if the API is loaded just create the player
    if (this._isLoaded) {
      component._createPlayer();
    } else {
      this._queue.push(component);

      // load the Youtube API if this was the first component added
      if (this._queue.length === 1) {
        this._loadAPI();
      }
    }
  },

  _loadAPI: function _loadAPI() {
    var _this = this;

    (0, _loadApi2.default)('//youtube.com/player_api');

    window.onYouTubeIframeAPIReady = function () {
      _this._isLoaded = true;
      for (var i = _this._queue.length; i--;) {
        _this._queue[i]._createPlayer();
      }
      _this._queue = [];
    };
  }
};
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadAPI;
// load api asynchronously
function loadAPI(url, cb) {
  // create script to be injected
  var script = document.createElement('script');

  // load async
  script.async = true;

  // set source to vendors api
  script.src = url;

  // callback after load
  script.onload = function () {
    return typeof cb === 'function' && cb();
  };

  // append script to document head
  document.head.appendChild(script);
}
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getYoutubeId;
function getYoutubeId(url) {
  var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[1].length === 11) {
    return match[1];
  } else {
    throw 'Invalid Youtube ID provided';
  }
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fullscreen = exports.Volume = exports.MuteUnmute = exports.Duration = exports.SeekBar = exports.Progress = exports.CurrentTime = exports.PlayPause = undefined;

var _PlayPause2 = __webpack_require__(55);

var _PlayPause3 = _interopRequireDefault(_PlayPause2);

var _CurrentTime2 = __webpack_require__(56);

var _CurrentTime3 = _interopRequireDefault(_CurrentTime2);

var _Progress2 = __webpack_require__(57);

var _Progress3 = _interopRequireDefault(_Progress2);

var _SeekBar2 = __webpack_require__(58);

var _SeekBar3 = _interopRequireDefault(_SeekBar2);

var _Duration2 = __webpack_require__(59);

var _Duration3 = _interopRequireDefault(_Duration2);

var _MuteUnmute2 = __webpack_require__(60);

var _MuteUnmute3 = _interopRequireDefault(_MuteUnmute2);

var _Volume2 = __webpack_require__(61);

var _Volume3 = _interopRequireDefault(_Volume2);

var _Fullscreen2 = __webpack_require__(62);

var _Fullscreen3 = _interopRequireDefault(_Fullscreen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PlayPause = _PlayPause3.default;
exports.CurrentTime = _CurrentTime3.default;
exports.Progress = _Progress3.default;
exports.SeekBar = _SeekBar3.default;
exports.Duration = _Duration3.default;
exports.MuteUnmute = _MuteUnmute3.default;
exports.Volume = _Volume3.default;
exports.Fullscreen = _Fullscreen3.default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPause = function (_Component) {
  _inherits(PlayPause, _Component);

  function PlayPause() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlayPause);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayPause.__proto__ || Object.getPrototypeOf(PlayPause)).call.apply(_ref, [this].concat(args))), _this), _this._handlePlayPause = function () {
      _this.props.media.playPause();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlayPause, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref2) {
      var media = _ref2.media;

      return this.props.media.isPlaying !== media.isPlaying;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: className,
          style: style,
          onClick: this._handlePlayPause
        },
        media.isPlaying ? 'Pause' : 'Play'
      );
    }
  }]);

  return PlayPause;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(PlayPause);
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

var _formatTime = __webpack_require__(7);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentTime = function (_Component) {
  _inherits(CurrentTime, _Component);

  function CurrentTime() {
    _classCallCheck(this, CurrentTime);

    return _possibleConstructorReturn(this, (CurrentTime.__proto__ || Object.getPrototypeOf(CurrentTime)).apply(this, arguments));
  }

  _createClass(CurrentTime, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var media = _ref.media;

      return this.props.media.currentTime !== media.currentTime;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'time',
        { className: className, style: style },
        (0, _formatTime2.default)(media.currentTime)
      );
    }
  }]);

  return CurrentTime;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(CurrentTime);
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var media = _ref.media;

      return this.props.media.progress !== media.progress;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement('progress', {
        className: className,
        style: style,
        max: 100,
        value: media.progress * 100
      });
    }
  }]);

  return Progress;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(Progress);
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeekBar = function (_Component) {
  _inherits(SeekBar, _Component);

  function SeekBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SeekBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call.apply(_ref, [this].concat(args))), _this), _this._isPlayingOnMouseDown = false, _this._onChangeUsed = false, _this._handleMouseDown = function () {
      _this._isPlayingOnMouseDown = _this.props.media.isPlaying;
      _this.props.media.pause();
    }, _this._handleMouseUp = function (_ref2) {
      var value = _ref2.target.value;

      // seek on mouseUp as well because of this bug in <= IE11
      // https://github.com/facebook/react/issues/554
      if (!_this._onChangeUsed) {
        _this.props.media.seekTo(+value);
      }

      // only play if media was playing prior to mouseDown
      if (_this._isPlayingOnMouseDown) {
        _this.props.media.play();
      }
    }, _this._handleChange = function (_ref3) {
      var value = _ref3.target.value;

      _this.props.media.seekTo(+value);
      _this._onChangeUsed = true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SeekBar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref4) {
      var media = _ref4.media;

      return this.props.media.currentTime !== media.currentTime || this.props.media.duration !== media.duration;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;
      var duration = media.duration,
          currentTime = media.currentTime;

      return _react2.default.createElement('input', {
        type: 'range',
        step: 'any',
        max: duration.toFixed(4),
        value: currentTime,
        onMouseDown: this._handleMouseDown,
        onMouseUp: this._handleMouseUp,
        onChange: this._handleChange,
        className: className,
        style: _extends({
          backgroundSize: currentTime * 100 / duration + '% 100%'
        }, style)
      });
    }
  }]);

  return SeekBar;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(SeekBar);
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

var _formatTime = __webpack_require__(7);

var _formatTime2 = _interopRequireDefault(_formatTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Duration = function (_Component) {
  _inherits(Duration, _Component);

  function Duration() {
    _classCallCheck(this, Duration);

    return _possibleConstructorReturn(this, (Duration.__proto__ || Object.getPrototypeOf(Duration)).apply(this, arguments));
  }

  _createClass(Duration, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var media = _ref.media;

      return this.props.media.duration !== media.duration;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'time',
        { className: className, style: style },
        (0, _formatTime2.default)(media.duration)
      );
    }
  }]);

  return Duration;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(Duration);
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MuteUnmute = function (_Component) {
  _inherits(MuteUnmute, _Component);

  function MuteUnmute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MuteUnmute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MuteUnmute.__proto__ || Object.getPrototypeOf(MuteUnmute)).call.apply(_ref, [this].concat(args))), _this), _this._handleMuteUnmute = function () {
      _this.props.media.muteUnmute();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MuteUnmute, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref2) {
      var media = _ref2.media;

      return this.props.media.isMuted !== media.isMuted;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: className,
          style: style,
          onClick: this._handleMuteUnmute
        },
        media.isMuted ? 'Unmute' : 'Mute'
      );
    }
  }]);

  return MuteUnmute;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(MuteUnmute);
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Volume = function (_Component) {
  _inherits(Volume, _Component);

  function Volume() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Volume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Volume.__proto__ || Object.getPrototypeOf(Volume)).call.apply(_ref, [this].concat(args))), _this), _this._onChangeUsed = false, _this._handleMouseUp = function (_ref2) {
      var value = _ref2.target.value;

      // set volume on mouseUp as well because of this bug in <= IE11
      // https://github.com/facebook/react/issues/554
      if (!_this._onChangeUsed) {
        _this.props.media.setVolume((+value).toFixed(4));
      }
    }, _this._handleChange = function (_ref3) {
      var value = _ref3.target.value;

      _this.props.media.setVolume((+value).toFixed(4));
      _this._onChangeUsed = true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Volume, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref4) {
      var media = _ref4.media;

      return this.props.media.volume !== media.volume;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;
      var volume = media.volume;

      return _react2.default.createElement('input', {
        type: 'range',
        step: 'any',
        min: 0,
        max: 1,
        value: volume,
        onMouseUp: this._handleMouseUp,
        onChange: this._handleChange,
        className: className,
        style: _extends({
          backgroundSize: volume * 100 / 1 + '% 100%'
        }, style)
      });
    }
  }]);

  return Volume;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(Volume);
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withMediaProps = __webpack_require__(2);

var _withMediaProps2 = _interopRequireDefault(_withMediaProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fullscreen = function (_Component) {
  _inherits(Fullscreen, _Component);

  function Fullscreen() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fullscreen);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fullscreen.__proto__ || Object.getPrototypeOf(Fullscreen)).call.apply(_ref, [this].concat(args))), _this), _this._handleFullscreen = function () {
      _this.props.media.fullscreen();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fullscreen, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref2) {
      var media = _ref2.media;

      return this.props.media.isFullscreen !== media.isFullscreen;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          media = _props.media;

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: className,
          style: style,
          onClick: this._handleFullscreen
        },
        media.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
      );
    }
  }]);

  return Fullscreen;
}(_react.Component);

exports.default = (0, _withMediaProps2.default)(Fullscreen);
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.keyboardControls = undefined;

var _keyboardControls2 = __webpack_require__(64);

var _keyboardControls3 = _interopRequireDefault(_keyboardControls2);

var _formatTime2 = __webpack_require__(7);

var _formatTime3 = _interopRequireDefault(_formatTime2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.keyboardControls = _keyboardControls3.default;
exports.formatTime = _formatTime3.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyboardControls;
var MEDIA_KEYS = [0, 'f', 'j', 'k', 'l', ',', '.', ' ', 'Home', 'End', 'ArrowLeft', 'ArrowTop', 'ArrowRight', 'ArrowDown'];

function keyboardControls(mediaProps, e) {
  var duration = mediaProps.duration,
      playPause = mediaProps.playPause,
      seekTo = mediaProps.seekTo,
      skipTime = mediaProps.skipTime,
      addVolume = mediaProps.addVolume,
      fullscreen = mediaProps.fullscreen;
  var key = e.key,
      shiftKey = e.shiftKey;

  // prevent default on any media keys

  MEDIA_KEYS.some(function (_key) {
    return _key === key && e.preventDefault();
  });

  // handle respective key controls
  switch (key) {
    // Play/Pause
    case ' ':
    case 'k':
      playPause();
      break;

    // Seeking Backwards
    case 'ArrowLeft':
      skipTime(shiftKey ? -10 : -5);
      break;
    case 'j':
      skipTime(shiftKey ? -10 : -5);
      break;
    case ',':
      skipTime(-1);
      break;

    // Seeking Forwards
    case 'ArrowRight':
      skipTime(shiftKey ? 10 : 5);
      break;
    case 'l':
      skipTime(shiftKey ? 10 : 5);
      break;
    case '.':
      skipTime(1);
      break;
    case 0:
    case 'Home':
      seekTo(0);
      break;
    case 'End':
      seekTo(duration);
      break;

    // Volume
    case 'ArrowUp':
      addVolume(shiftKey ? 10 : 5);
      break;
    case 'ArrowDown':
      addVolume(shiftKey ? -10 : -5);
      break;

    // Fullscreen
    case 'f':
      fullscreen();
      break;
  }
}
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;

var _Scrollbars = __webpack_require__(68);

var _Scrollbars2 = _interopRequireDefault(_Scrollbars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf2 = __webpack_require__(69);

var _raf3 = _interopRequireDefault(_raf2);

var _domCss = __webpack_require__(19);

var _domCss2 = _interopRequireDefault(_domCss);

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isString = __webpack_require__(70);

var _isString2 = _interopRequireDefault(_isString);

var _getScrollbarWidth = __webpack_require__(71);

var _getScrollbarWidth2 = _interopRequireDefault(_getScrollbarWidth);

var _returnFalse = __webpack_require__(72);

var _returnFalse2 = _interopRequireDefault(_returnFalse);

var _getInnerWidth = __webpack_require__(73);

var _getInnerWidth2 = _interopRequireDefault(_getInnerWidth);

var _getInnerHeight = __webpack_require__(74);

var _getInnerHeight2 = _interopRequireDefault(_getInnerHeight);

var _styles = __webpack_require__(75);

var _defaultRenderElements = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbars = function (_Component) {
    _inherits(Scrollbars, _Component);

    function Scrollbars(props) {
        var _ref;

        _classCallCheck(this, Scrollbars);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

        _this.getScrollLeft = _this.getScrollLeft.bind(_this);
        _this.getScrollTop = _this.getScrollTop.bind(_this);
        _this.getScrollWidth = _this.getScrollWidth.bind(_this);
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        _this.getClientWidth = _this.getClientWidth.bind(_this);
        _this.getClientHeight = _this.getClientHeight.bind(_this);
        _this.getValues = _this.getValues.bind(_this);
        _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
        _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
        _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
        _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);

        _this.scrollLeft = _this.scrollLeft.bind(_this);
        _this.scrollTop = _this.scrollTop.bind(_this);
        _this.scrollToLeft = _this.scrollToLeft.bind(_this);
        _this.scrollToTop = _this.scrollToTop.bind(_this);
        _this.scrollToRight = _this.scrollToRight.bind(_this);
        _this.scrollToBottom = _this.scrollToBottom.bind(_this);

        _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
        _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
        _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
        _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
        _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
        _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);

        _this.state = {
            didMountUniversal: false
        };
        return _this;
    }

    _createClass(Scrollbars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addListeners();
            this.update();
            this.componentDidMountUniversal();
        }
    }, {
        key: 'componentDidMountUniversal',
        value: function componentDidMountUniversal() {
            // eslint-disable-line react/sort-comp
            var universal = this.props.universal;

            if (!universal) return;
            this.setState({ didMountUniversal: true });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeListeners();
            (0, _raf2.cancel)(this.requestFrame);
            clearTimeout(this.hideTracksTimeout);
            clearInterval(this.detectScrollingInterval);
        }
    }, {
        key: 'getScrollLeft',
        value: function getScrollLeft() {
            return this.view.scrollLeft;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            return this.view.scrollTop;
        }
    }, {
        key: 'getScrollWidth',
        value: function getScrollWidth() {
            return this.view.scrollWidth;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            return this.view.scrollHeight;
        }
    }, {
        key: 'getClientWidth',
        value: function getClientWidth() {
            return this.view.clientWidth;
        }
    }, {
        key: 'getClientHeight',
        value: function getClientHeight() {
            return this.view.clientHeight;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var _view = this.view,
                scrollLeft = _view.scrollLeft,
                scrollTop = _view.scrollTop,
                scrollWidth = _view.scrollWidth,
                scrollHeight = _view.scrollHeight,
                clientWidth = _view.clientWidth,
                clientHeight = _view.clientHeight;


            return {
                left: scrollLeft / (scrollWidth - clientWidth) || 0,
                top: scrollTop / (scrollHeight - clientHeight) || 0,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
        }
    }, {
        key: 'getThumbHorizontalWidth',
        value: function getThumbHorizontalWidth() {
            var _props = this.props,
                thumbSize = _props.thumbSize,
                thumbMinSize = _props.thumbMinSize;
            var _view2 = this.view,
                scrollWidth = _view2.scrollWidth,
                clientWidth = _view2.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
            if (trackWidth === width) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(width, thumbMinSize);
        }
    }, {
        key: 'getThumbVerticalHeight',
        value: function getThumbVerticalHeight() {
            var _props2 = this.props,
                thumbSize = _props2.thumbSize,
                thumbMinSize = _props2.thumbMinSize;
            var _view3 = this.view,
                scrollHeight = _view3.scrollHeight,
                clientHeight = _view3.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
            if (trackHeight === height) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(height, thumbMinSize);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _view4 = this.view,
                scrollWidth = _view4.scrollWidth,
                clientWidth = _view4.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var thumbWidth = this.getThumbHorizontalWidth();
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _view5 = this.view,
                scrollHeight = _view5.scrollHeight,
                clientHeight = _view5.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var thumbHeight = this.getThumbVerticalHeight();
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.view.scrollLeft = left;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.view.scrollTop = top;
        }
    }, {
        key: 'scrollToLeft',
        value: function scrollToLeft() {
            this.view.scrollLeft = 0;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            this.view.scrollTop = 0;
        }
    }, {
        key: 'scrollToRight',
        value: function scrollToRight() {
            this.view.scrollLeft = this.view.scrollWidth;
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            this.view.scrollTop = this.view.scrollHeight;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.addEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.addEventListener('resize', this.handleWindowResize);
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.removeEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.removeEventListener('resize', this.handleWindowResize);
            // Possibly setup by `handleDragStart`
            this.teardownDragging();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _this2 = this;

            var _props3 = this.props,
                onScroll = _props3.onScroll,
                onScrollFrame = _props3.onScrollFrame;

            if (onScroll) onScroll(event);
            this.update(function (values) {
                var scrollLeft = values.scrollLeft,
                    scrollTop = values.scrollTop;

                _this2.viewScrollLeft = scrollLeft;
                _this2.viewScrollTop = scrollTop;
                if (onScrollFrame) onScrollFrame(values);
            });
            this.detectScrolling();
        }
    }, {
        key: 'handleScrollStart',
        value: function handleScrollStart() {
            var onScrollStart = this.props.onScrollStart;

            if (onScrollStart) onScrollStart();
            this.handleScrollStartAutoHide();
        }
    }, {
        key: 'handleScrollStartAutoHide',
        value: function handleScrollStartAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleScrollStop',
        value: function handleScrollStop() {
            var onScrollStop = this.props.onScrollStop;

            if (onScrollStop) onScrollStop();
            this.handleScrollStopAutoHide();
        }
    }, {
        key: 'handleScrollStopAutoHide',
        value: function handleScrollStopAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleWindowResize',
        value: function handleWindowResize() {
            this.update();
        }
    }, {
        key: 'handleHorizontalTrackMouseDown',
        value: function handleHorizontalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                targetLeft = _target$getBoundingCl.left;

            var thumbWidth = this.getThumbHorizontalWidth();
            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
            this.view.scrollLeft = this.getScrollLeftForOffset(offset);
        }
    }, {
        key: 'handleVerticalTrackMouseDown',
        value: function handleVerticalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                targetTop = _target$getBoundingCl2.top;

            var thumbHeight = this.getThumbVerticalHeight();
            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
            this.view.scrollTop = this.getScrollTopForOffset(offset);
        }
    }, {
        key: 'handleHorizontalThumbMouseDown',
        value: function handleHorizontalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientX = event.clientX;
            var offsetWidth = target.offsetWidth;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            this.prevPageX = offsetWidth - (clientX - left);
        }
    }, {
        key: 'handleVerticalThumbMouseDown',
        value: function handleVerticalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientY = event.clientY;
            var offsetHeight = target.offsetHeight;

            var _target$getBoundingCl4 = target.getBoundingClientRect(),
                top = _target$getBoundingCl4.top;

            this.prevPageY = offsetHeight - (clientY - top);
        }
    }, {
        key: 'setupDragging',
        value: function setupDragging() {
            (0, _domCss2["default"])(document.body, _styles.disableSelectStyle);
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = _returnFalse2["default"];
        }
    }, {
        key: 'teardownDragging',
        value: function teardownDragging() {
            (0, _domCss2["default"])(document.body, _styles.disableSelectStyleReset);
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = undefined;
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(event) {
            this.dragging = true;
            event.stopImmediatePropagation();
            this.setupDragging();
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            if (this.prevPageX) {
                var clientX = event.clientX;

                var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
                    trackLeft = _trackHorizontal$getB.left;

                var thumbWidth = this.getThumbHorizontalWidth();
                var clickPosition = thumbWidth - this.prevPageX;
                var offset = -trackLeft + clientX - clickPosition;
                this.view.scrollLeft = this.getScrollLeftForOffset(offset);
            }
            if (this.prevPageY) {
                var clientY = event.clientY;

                var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
                    trackTop = _trackVertical$getBou.top;

                var thumbHeight = this.getThumbVerticalHeight();
                var _clickPosition = thumbHeight - this.prevPageY;
                var _offset = -trackTop + clientY - _clickPosition;
                this.view.scrollTop = this.getScrollTopForOffset(_offset);
            }
            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.dragging = false;
            this.prevPageX = this.prevPageY = 0;
            this.teardownDragging();
            this.handleDragEndAutoHide();
        }
    }, {
        key: 'handleDragEndAutoHide',
        value: function handleDragEndAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleTrackMouseEnter',
        value: function handleTrackMouseEnter() {
            this.trackMouseOver = true;
            this.handleTrackMouseEnterAutoHide();
        }
    }, {
        key: 'handleTrackMouseEnterAutoHide',
        value: function handleTrackMouseEnterAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleTrackMouseLeave',
        value: function handleTrackMouseLeave() {
            this.trackMouseOver = false;
            this.handleTrackMouseLeaveAutoHide();
        }
    }, {
        key: 'handleTrackMouseLeaveAutoHide',
        value: function handleTrackMouseLeaveAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'showTracks',
        value: function showTracks() {
            clearTimeout(this.hideTracksTimeout);
            (0, _domCss2["default"])(this.trackHorizontal, { opacity: 1 });
            (0, _domCss2["default"])(this.trackVertical, { opacity: 1 });
        }
    }, {
        key: 'hideTracks',
        value: function hideTracks() {
            var _this3 = this;

            if (this.dragging) return;
            if (this.scrolling) return;
            if (this.trackMouseOver) return;
            var autoHideTimeout = this.props.autoHideTimeout;

            clearTimeout(this.hideTracksTimeout);
            this.hideTracksTimeout = setTimeout(function () {
                (0, _domCss2["default"])(_this3.trackHorizontal, { opacity: 0 });
                (0, _domCss2["default"])(_this3.trackVertical, { opacity: 0 });
            }, autoHideTimeout);
        }
    }, {
        key: 'detectScrolling',
        value: function detectScrolling() {
            var _this4 = this;

            if (this.scrolling) return;
            this.scrolling = true;
            this.handleScrollStart();
            this.detectScrollingInterval = setInterval(function () {
                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
                    clearInterval(_this4.detectScrollingInterval);
                    _this4.scrolling = false;
                    _this4.handleScrollStop();
                }
                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
                _this4.lastViewScrollTop = _this4.viewScrollTop;
            }, 100);
        }
    }, {
        key: 'raf',
        value: function raf(callback) {
            var _this5 = this;

            if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
            this.requestFrame = (0, _raf3["default"])(function () {
                _this5.requestFrame = undefined;
                callback();
            });
        }
    }, {
        key: 'update',
        value: function update(callback) {
            var _this6 = this;

            this.raf(function () {
                return _this6._update(callback);
            });
        }
    }, {
        key: '_update',
        value: function _update(callback) {
            var _props4 = this.props,
                onUpdate = _props4.onUpdate,
                hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

            var values = this.getValues();
            if ((0, _getScrollbarWidth2["default"])()) {
                var scrollLeft = values.scrollLeft,
                    clientWidth = values.clientWidth,
                    scrollWidth = values.scrollWidth;

                var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
                var thumbHorizontalWidth = this.getThumbHorizontalWidth();
                var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
                var thumbHorizontalStyle = {
                    width: thumbHorizontalWidth,
                    transform: 'translateX(' + thumbHorizontalX + 'px)'
                };
                var scrollTop = values.scrollTop,
                    clientHeight = values.clientHeight,
                    scrollHeight = values.scrollHeight;

                var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
                var thumbVerticalHeight = this.getThumbVerticalHeight();
                var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
                var thumbVerticalStyle = {
                    height: thumbVerticalHeight,
                    transform: 'translateY(' + thumbVerticalY + 'px)'
                };
                if (hideTracksWhenNotNeeded) {
                    var trackHorizontalStyle = {
                        visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
                    };
                    var trackVerticalStyle = {
                        visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
                    };
                    (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
                    (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
                }
                (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
                (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
            }
            if (onUpdate) onUpdate(values);
            if (typeof callback !== 'function') return;
            callback(values);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
            /* eslint-disable no-unused-vars */

            var _props5 = this.props,
                onScroll = _props5.onScroll,
                onScrollFrame = _props5.onScrollFrame,
                onScrollStart = _props5.onScrollStart,
                onScrollStop = _props5.onScrollStop,
                onUpdate = _props5.onUpdate,
                renderView = _props5.renderView,
                renderTrackHorizontal = _props5.renderTrackHorizontal,
                renderTrackVertical = _props5.renderTrackVertical,
                renderThumbHorizontal = _props5.renderThumbHorizontal,
                renderThumbVertical = _props5.renderThumbVertical,
                tagName = _props5.tagName,
                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
                autoHide = _props5.autoHide,
                autoHideTimeout = _props5.autoHideTimeout,
                autoHideDuration = _props5.autoHideDuration,
                thumbSize = _props5.thumbSize,
                thumbMinSize = _props5.thumbMinSize,
                universal = _props5.universal,
                autoHeight = _props5.autoHeight,
                autoHeightMin = _props5.autoHeightMin,
                autoHeightMax = _props5.autoHeightMax,
                style = _props5.style,
                children = _props5.children,
                props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
            /* eslint-enable no-unused-vars */

            var didMountUniversal = this.state.didMountUniversal;


            var containerStyle = _extends({}, _styles.containerStyleDefault, autoHeight && _extends({}, _styles.containerStyleAutoHeight, {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }), style);

            var viewStyle = _extends({}, _styles.viewStyleDefault, {
                // Hide scrollbars by setting a negative margin
                marginRight: scrollbarWidth ? -scrollbarWidth : 0,
                marginBottom: scrollbarWidth ? -scrollbarWidth : 0
            }, autoHeight && _extends({}, _styles.viewStyleAutoHeight, {
                // Add scrollbarWidth to autoHeight in order to compensate negative margins
                minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
                maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
            }), autoHeight && universal && !didMountUniversal && {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }, universal && !didMountUniversal && _styles.viewStyleUniversalInitial);

            var trackAutoHeightStyle = {
                transition: 'opacity ' + autoHideDuration + 'ms',
                opacity: 0
            };

            var trackHorizontalStyle = _extends({}, _styles.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            var trackVerticalStyle = _extends({}, _styles.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            return (0, _react.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref2) {
                    _this7.container = _ref2;
                } }), [(0, _react.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: function ref(_ref3) {
                    _this7.view = _ref3;
                } }, children), (0, _react.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: function ref(_ref4) {
                    _this7.trackHorizontal = _ref4;
                } }, (0, _react.cloneElement)(renderThumbHorizontal({ style: _styles.thumbHorizontalStyleDefault }), { ref: function ref(_ref5) {
                    _this7.thumbHorizontal = _ref5;
                } })), (0, _react.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: function ref(_ref6) {
                    _this7.trackVertical = _ref6;
                } }, (0, _react.cloneElement)(renderThumbVertical({ style: _styles.thumbVerticalStyleDefault }), { ref: function ref(_ref7) {
                    _this7.thumbVertical = _ref7;
                } }))]);
        }
    }]);

    return Scrollbars;
}(_react.Component);

exports["default"] = Scrollbars;


Scrollbars.propTypes = {
    onScroll: _propTypes2["default"].func,
    onScrollFrame: _propTypes2["default"].func,
    onScrollStart: _propTypes2["default"].func,
    onScrollStop: _propTypes2["default"].func,
    onUpdate: _propTypes2["default"].func,
    renderView: _propTypes2["default"].func,
    renderTrackHorizontal: _propTypes2["default"].func,
    renderTrackVertical: _propTypes2["default"].func,
    renderThumbHorizontal: _propTypes2["default"].func,
    renderThumbVertical: _propTypes2["default"].func,
    tagName: _propTypes2["default"].string,
    thumbSize: _propTypes2["default"].number,
    thumbMinSize: _propTypes2["default"].number,
    hideTracksWhenNotNeeded: _propTypes2["default"].bool,
    autoHide: _propTypes2["default"].bool,
    autoHideTimeout: _propTypes2["default"].number,
    autoHideDuration: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    universal: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    children: _propTypes2["default"].node
};

Scrollbars.defaultProps = {
    renderView: _defaultRenderElements.renderViewDefault,
    renderTrackHorizontal: _defaultRenderElements.renderTrackHorizontalDefault,
    renderTrackVertical: _defaultRenderElements.renderTrackVerticalDefault,
    renderThumbHorizontal: _defaultRenderElements.renderThumbHorizontalDefault,
    renderThumbVertical: _defaultRenderElements.renderThumbVerticalDefault,
    tagName: 'div',
    thumbMinSize: 30,
    hideTracksWhenNotNeeded: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    universal: false
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;
function isString(maybe) {
    return typeof maybe === 'string';
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getScrollbarWidth;

var _domCss = __webpack_require__(19);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2["default"])(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = returnFalse;
function returnFalse() {
    return false;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerWidth;
function getInnerWidth(el) {
    var clientWidth = el.clientWidth;

    var _getComputedStyle = getComputedStyle(el),
        paddingLeft = _getComputedStyle.paddingLeft,
        paddingRight = _getComputedStyle.paddingRight;

    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerHeight;
function getInnerHeight(el) {
    var clientHeight = el.clientHeight;

    var _getComputedStyle = getComputedStyle(el),
        paddingTop = _getComputedStyle.paddingTop,
        paddingBottom = _getComputedStyle.paddingBottom;

    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var containerStyleDefault = exports.containerStyleDefault = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

// Overrides containerStyleDefault properties
var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
    height: 'auto'
};

var viewStyleDefault = exports.viewStyleDefault = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch'
};

// Overrides viewStyleDefault properties
var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined
};

var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
    overflow: 'hidden',
    marginRight: 0,
    marginBottom: 0
};

var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
    position: 'absolute',
    height: 6
};

var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
    position: 'absolute',
    width: 6
};

var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
    position: 'relative',
    display: 'block',
    height: '100%'
};

var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
    position: 'relative',
    display: 'block',
    width: '100%'
};

var disableSelectStyle = exports.disableSelectStyle = {
    userSelect: 'none'
};

var disableSelectStyleReset = exports.disableSelectStyleReset = {
    userSelect: ''
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
    var style = _ref.style,
        props = _objectWithoutProperties(_ref, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderTrackVerticalDefault(_ref2) {
    var style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbHorizontalDefault(_ref3) {
    var style = _ref3.style,
        props = _objectWithoutProperties(_ref3, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbVerticalDefault(_ref4) {
    var style = _ref4.style,
        props = _objectWithoutProperties(_ref4, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("rebound");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagCloud = __webpack_require__(79);

Object.defineProperty(exports, 'TagCloud', {
  enumerable: true,
  get: function get() {
    return _TagCloud.TagCloud;
  }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagCloud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultRenderer = __webpack_require__(80);

var _arrayShuffle = __webpack_require__(82);

var _arrayShuffle2 = _interopRequireDefault(_arrayShuffle);

var _randomcolor = __webpack_require__(83);

var _randomcolor2 = _interopRequireDefault(_randomcolor);

var _helpers = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var eventHandlers = ['onClick', 'onDoubleClick', 'onMouseMove'];
var cloudProps = ['tags', 'shuffle', 'renderer', 'maxSize', 'minSize', 'colorOptions', 'disableRandomColor'];

var generateColor = function generateColor(tag, _ref) {
  var disableRandomColor = _ref.disableRandomColor,
      colorOptions = _ref.colorOptions;

  if (tag.color) {
    return tag.color;
  }
  if (disableRandomColor) {
    return undefined;
  }
  return (0, _randomcolor2.default)(colorOptions);
};

var TagCloud = exports.TagCloud = function (_React$Component) {
  _inherits(TagCloud, _React$Component);

  function TagCloud() {
    _classCallCheck(this, TagCloud);

    return _possibleConstructorReturn(this, (TagCloud.__proto__ || Object.getPrototypeOf(TagCloud)).apply(this, arguments));
  }

  _createClass(TagCloud, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var propsEqual = (0, _helpers.propertiesEqual)(this.props, newProps, Object.keys(TagCloud.propTypes));
      var tagsEqual = (0, _helpers.arraysEqual)(newProps.tags, this.props.tags);
      if (!tagsEqual || !propsEqual) {
        this._populate(newProps);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._populate(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _helpers.omitProps)(this.props, [].concat(cloudProps, eventHandlers));
      var tagElements = this._attachEventHandlers();
      return _react2.default.createElement(
        'div',
        props,
        tagElements
      );
    }
  }, {
    key: '_attachEventHandlers',
    value: function _attachEventHandlers() {
      var _this2 = this;

      var cloudHandlers = (0, _helpers.includeProps)(this.props, eventHandlers);
      return this._data.map(function (_ref2) {
        var tag = _ref2.tag,
            fontSize = _ref2.fontSize,
            color = _ref2.color;

        var elem = _this2.props.renderer(tag, fontSize, color);
        var tagHandlers = (0, _helpers.includeProps)(elem.props, eventHandlers);
        var globalHandlers = Object.keys(cloudHandlers).reduce(function (r, k) {
          r[k] = function (e) {
            cloudHandlers[k](tag, e);
            tagHandlers[k] && tagHandlers(e);
          };
          return r;
        }, {});
        return _react2.default.cloneElement(elem, globalHandlers);
      });
    }
  }, {
    key: '_populate',
    value: function _populate(props) {
      var tags = props.tags,
          shuffle = props.shuffle,
          minSize = props.minSize,
          maxSize = props.maxSize;

      var counts = tags.map(function (tag) {
        return tag.count;
      }),
          min = Math.min.apply(Math, _toConsumableArray(counts)),
          max = Math.max.apply(Math, _toConsumableArray(counts));
      var data = tags.map(function (tag) {
        return {
          tag: tag,
          color: generateColor(tag, props),
          fontSize: (0, _helpers.fontSizeConverter)(tag.count, min, max, minSize, maxSize)
        };
      });
      this._data = shuffle ? (0, _arrayShuffle2.default)(data) : data;
    }
  }]);

  return TagCloud;
}(_react2.default.Component);

TagCloud.propTypes = {
  tags: _propTypes2.default.array.isRequired,
  maxSize: _propTypes2.default.number.isRequired,
  minSize: _propTypes2.default.number.isRequired,
  shuffle: _propTypes2.default.bool,
  colorOptions: _propTypes2.default.object,
  disableRandomColor: _propTypes2.default.bool,
  renderer: _propTypes2.default.func,
  className: _propTypes2.default.string
};

TagCloud.defaultProps = {
  renderer: _defaultRenderer.defaultRenderer,
  shuffle: true,
  className: 'tag-cloud',
  colorOptions: {}
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRenderer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(81);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRenderer = exports.defaultRenderer = function defaultRenderer(tag, size, color) {
  var fontSize = size + 'px';
  var key = tag.key || tag.value;
  var style = (0, _objectAssign2.default)({}, styles, { color: color, fontSize: fontSize });
  return _react2.default.createElement(
    'span',
    { className: 'tag-cloud-tag', style: style, key: key },
    tag.value
  );
};

var styles = {
  margin: '0px 3px',
  verticalAlign: 'middle',
  display: 'inline-block'
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("array-shuffle");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("randomcolor");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates new object from target excluding given properties.
 */
var omitProps = exports.omitProps = function omitProps(target, props) {
  return Object.keys(target).reduce(function (r, key) {
    if (!~props.indexOf(key)) {
      r[key] = target[key];
    }
    return r;
  }, {});
};

/**
 * Creates new object from target including all available properties.
 */
var includeProps = exports.includeProps = function includeProps(target, props) {
  return Object.keys(target).reduce(function (r, key) {
    if (~props.indexOf(key) && key in target) {
      r[key] = target[key];
    }
    return r;
  }, {});
};

/**
 * Computes appropriate font size of tag.
 */
var fontSizeConverter = exports.fontSizeConverter = function fontSizeConverter(count, min, max, minSize, maxSize) {
  return Math.round((count - min) * (maxSize - minSize) / (max - min) + minSize);
};

/**
 * Returns true if arrays contains the same elements.
 */
var arraysEqual = exports.arraysEqual = function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every(function (o, i) {
    return o === arr2[i];
  });
};

var propertiesEqual = exports.propertiesEqual = function propertiesEqual(o1, o2, properties) {
  return properties.every(function (prop) {
    return o1[prop] === o2[prop];
  });
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(87);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(12);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMarkdown = __webpack_require__(20);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();

function LinkRenderer(props) {
  return _react2.default.createElement(
    'a',
    { href: props.href, target: '_blank' },
    props.children
  );
}

var BlockStatic = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(BlockStatic, _Component);

  function BlockStatic(props) {
    (0, _classCallCheck3.default)(this, BlockStatic);
    return (0, _possibleConstructorReturn3.default)(this, (BlockStatic.__proto__ || (0, _getPrototypeOf2.default)(BlockStatic)).call(this, props));
  }

  (0, _createClass3.default)(BlockStatic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _utils.updateData)(this.props, this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data || (0, _utils.getDataset)(this.props, this) !== (0, _utils.getDataset)(nextProps, this)) {
        (0, _utils.updateData)(nextProps, this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var contextualizer = this.props.contextualizer,
          _state = this.state,
          data = _state.data,
          thumbnail = _state.thumbnail;

      return data ? _react2.default.createElement(
        'figure',
        { className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-dicto' },
        thumbnail ? _react2.default.createElement('img', { className: 'resource-thumbnail',
          src: thumbnail
        }) : _react2.default.createElement('div', { className: 'thumbnail-placeholder' }),
        contextualizer.displayCommentsInCodex && data.data.map(function (block, index) {
          var content = block.content;
          return _react2.default.createElement(
            'blockquote',
            (0, _defineProperty3.default)({ key: index }, 'key', index),
            _react2.default.createElement(_reactMarkdown2.default, {
              source: content,
              renderers: { Link: LinkRenderer }
            })
          );
        })
      ) : null;
    }
  }]);
  return BlockStatic;
}(_react.Component), _class.contextTypes = {
  datasets: _propTypes2.default.object
}, _temp);
exports.default = BlockStatic;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])["default"];