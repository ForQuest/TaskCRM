require("source-map-support").install();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(10);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var DOMProperty = __webpack_require__(32);
var ReactDOMComponentFlags = __webpack_require__(91);

var invariant = __webpack_require__(0);

var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
var Flags = ReactDOMComponentFlags;

var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

/**
 * Check if a given node should be cached.
 */
function shouldPrecacheNode(node, nodeID) {
  return node.nodeType === 1 && node.getAttribute(ATTR_NAME) === String(nodeID) || node.nodeType === 8 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === 8 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
}

/**
 * Drill down (through composites and empty components) until we get a host or
 * host text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */
function getRenderedHostOrTextFromComponent(component) {
  var rendered;
  while (rendered = component._renderedComponent) {
    component = rendered;
  }
  return component;
}

/**
 * Populate `_hostNode` on the rendered host/text component with the given
 * DOM node. The passed `inst` can be a composite.
 */
function precacheNode(inst, node) {
  var hostInst = getRenderedHostOrTextFromComponent(inst);
  hostInst._hostNode = node;
  node[internalInstanceKey] = hostInst;
}

function uncacheNode(inst) {
  var node = inst._hostNode;
  if (node) {
    delete node[internalInstanceKey];
    inst._hostNode = null;
  }
}

/**
 * Populate `_hostNode` on each child of `inst`, assuming that the children
 * match up with the DOM (element) children of `node`.
 *
 * We cache entire levels at once to avoid an n^2 problem where we access the
 * children of a node sequentially and have to walk from the start to our target
 * node every time.
 *
 * Since we update `_renderedChildren` and the actual DOM at (slightly)
 * different times, we could race here and see a newer `_renderedChildren` than
 * the DOM nodes we see. To avoid this, ReactMultiChild calls
 * `prepareToManageChildren` before we change `_renderedChildren`, at which
 * time the container's child nodes are always cached (until it unmounts).
 */
function precacheChildNodes(inst, node) {
  if (inst._flags & Flags.hasCachedChildNodes) {
    return;
  }
  var children = inst._renderedChildren;
  var childNode = node.firstChild;
  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;
    }
    var childInst = children[name];
    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
    if (childID === 0) {
      // We're currently unmounting this child in ReactMultiChild; skip it.
      continue;
    }
    // We assume the child nodes are in the same order as the child instances.
    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (shouldPrecacheNode(childNode, childID)) {
        precacheNode(childInst, childNode);
        continue outer;
      }
    }
    // We reached the end of the DOM children without finding an ID match.
     true ?  true ? invariant(false, 'Unable to find element with ID %s.', childID) : _prodInvariant('32', childID) : void 0;
  }
  inst._flags |= Flags.hasCachedChildNodes;
}

/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function getClosestInstanceFromNode(node) {
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];
  }

  // Walk up the tree until we find an ancestor whose instance we have cached.
  var parents = [];
  while (!node[internalInstanceKey]) {
    parents.push(node);
    if (node.parentNode) {
      node = node.parentNode;
    } else {
      // Top of the tree. This node must not be part of a React tree (or is
      // unmounted, potentially).
      return null;
    }
  }

  var closest;
  var inst;
  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
    closest = inst;
    if (parents.length) {
      precacheChildNodes(inst, node);
    }
  }

  return closest;
}

/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode(node) {
  var inst = getClosestInstanceFromNode(node);
  if (inst != null && inst._hostNode === node) {
    return inst;
  } else {
    return null;
  }
}

/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance(inst) {
  // Without this first invariant, passing a non-DOM-component triggers the next
  // invariant for a missing parent, which is super confusing.
  !(inst._hostNode !== undefined) ?  true ? invariant(false, 'getNodeFromInstance: Invalid argument.') : _prodInvariant('33') : void 0;

  if (inst._hostNode) {
    return inst._hostNode;
  }

  // Walk up the tree until we find an ancestor whose DOM node we have cached.
  var parents = [];
  while (!inst._hostNode) {
    parents.push(inst);
    !inst._hostParent ?  true ? invariant(false, 'React DOM tree root should always have a node reference.') : _prodInvariant('34') : void 0;
    inst = inst._hostParent;
  }

  // Now parents contains each ancestor that does *not* have a cached native
  // node, and `inst` is the deepest ancestor that does.
  for (; parents.length; inst = parents.pop()) {
    precacheChildNodes(inst, inst._hostNode);
  }

  return inst._hostNode;
}

var ReactDOMComponentTree = {
  getClosestInstanceFromNode: getClosestInstanceFromNode,
  getInstanceFromNode: getInstanceFromNode,
  getNodeFromInstance: getNodeFromInstance,
  precacheChildNodes: precacheChildNodes,
  precacheNode: precacheNode,
  uncacheNode: uncacheNode
};

module.exports = ReactDOMComponentTree;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TICK_STOP = exports.TICK_START = exports.TICK_EVENT = exports.TYPING = exports.STOP_TOPIC = exports.START_TOPIC = exports.DESTROY_TOPIC = exports.DECREMENT_COUNT = exports.INCREMENT_COUNT = exports.REQUEST_FAILURE = exports.REQUEST_SUCCESS = exports.CREATE_REQUEST = exports.DISMISS_MESSAGE = exports.UPDATE_TOPIC_FAILURE = exports.UPDATE_TOPIC_SUCCESS = exports.UPDATE_TOPIC_REQUEST = exports.UPDATE_TOPIC = exports.CREATE_TOPIC_FAILURE = exports.CREATE_TOPIC_SUCCESS = exports.CREATE_TOPIC_REQUEST = exports.CREATE_TOPIC = exports.GET_TOPICS_FAILURE = exports.GET_TOPICS_SUCCESS = exports.GET_TOPICS_REQUEST = exports.GET_TOPICS = exports.SIGNUP_ERROR_USER = exports.SIGNUP_SUCCESS_USER = exports.SIGNUP_USER = exports.USER_LOGOUT_FAILURE = exports.USER_LOGOUT_SUCCESS = exports.USER_LOGOUT_REQUEST = exports.USER_LOGOUT = exports.REFRESH_LOGIN_FAILURE = exports.REFRESH_LOGIN_SUCCESS = exports.REFRESH_LOGIN_REQUEST = exports.ACCESS_TOKEN_INVALID = exports.REFRESH_LOGIN = exports.PASSWORD_LOGIN_FAILURE = exports.PASSWORD_LOGIN_SUCCESS = exports.PASSWORD_LOGIN_REQUEST = exports.PASSWORD_LOGIN = undefined;

var _modules = __webpack_require__(77);

// ========= USERS ACTIONS BEGIN =========
var PASSWORD_LOGIN = exports.PASSWORD_LOGIN = 'PASSWORD_LOGIN';
var PASSWORD_LOGIN_REQUEST = exports.PASSWORD_LOGIN_REQUEST = 'PASSWORD_LOGIN_REQUEST';
var PASSWORD_LOGIN_SUCCESS = exports.PASSWORD_LOGIN_SUCCESS = 'PASSWORD_LOGIN_SUCCESS';
var PASSWORD_LOGIN_FAILURE = exports.PASSWORD_LOGIN_FAILURE = 'PASSWORD_LOGIN_FAILURE';

var REFRESH_LOGIN = exports.REFRESH_LOGIN = 'REFRESH_LOGIN';
var ACCESS_TOKEN_INVALID = exports.ACCESS_TOKEN_INVALID = 'ACCESS_TOKEN_INVALID';
var REFRESH_LOGIN_REQUEST = exports.REFRESH_LOGIN_REQUEST = 'REFRESH_LOGIN_REQUEST';
var REFRESH_LOGIN_SUCCESS = exports.REFRESH_LOGIN_SUCCESS = 'REFRESH_LOGIN_SUCCESS';
var REFRESH_LOGIN_FAILURE = exports.REFRESH_LOGIN_FAILURE = 'REFRESH_LOGIN_FAILURE';

var USER_LOGOUT = exports.USER_LOGOUT = 'USER_LOGOUT';
var USER_LOGOUT_REQUEST = exports.USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
var USER_LOGOUT_SUCCESS = exports.USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
var USER_LOGOUT_FAILURE = exports.USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

var SIGNUP_USER = exports.SIGNUP_USER = 'SIGNUP_USER';
var SIGNUP_SUCCESS_USER = exports.SIGNUP_SUCCESS_USER = 'SIGNUP_SUCCESS_USER';
var SIGNUP_ERROR_USER = exports.SIGNUP_ERROR_USER = 'SIGNUP_ERROR_USER';
// ========= USERS ACTIONS END =========

// ========= TOPICS ACTIONS BEGIN =========
var GET_TOPICS = exports.GET_TOPICS = 'GET_TOPICS';
var GET_TOPICS_REQUEST = exports.GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
var GET_TOPICS_SUCCESS = exports.GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
var GET_TOPICS_FAILURE = exports.GET_TOPICS_FAILURE = 'GET_TOPICS_FAILURE';

var CREATE_TOPIC = exports.CREATE_TOPIC = 'CREATE_TOPIC';
var CREATE_TOPIC_REQUEST = exports.CREATE_TOPIC_REQUEST = 'CREATE_TOPIC_REQUEST';
var CREATE_TOPIC_SUCCESS = exports.CREATE_TOPIC_SUCCESS = 'CREATE_TOPIC_SUCCESS';
var CREATE_TOPIC_FAILURE = exports.CREATE_TOPIC_FAILURE = 'CREATE_TOPIC_FAILURE';

var UPDATE_TOPIC = exports.UPDATE_TOPIC = 'UPDATE_TOPIC';
var UPDATE_TOPIC_REQUEST = exports.UPDATE_TOPIC_REQUEST = 'UPDATE_TOPIC_REQUEST';
var UPDATE_TOPIC_SUCCESS = exports.UPDATE_TOPIC_SUCCESS = 'UPDATE_TOPIC_SUCCESS';
var UPDATE_TOPIC_FAILURE = exports.UPDATE_TOPIC_FAILURE = 'UPDATE_TOPIC_FAILURE';

var DISMISS_MESSAGE = exports.DISMISS_MESSAGE = 'DISMISS_MESSAGE';

var CREATE_REQUEST = exports.CREATE_REQUEST = 'CREATE_REQUEST';
var REQUEST_SUCCESS = exports.REQUEST_SUCCESS = 'REQUEST_SUCCESS';
var REQUEST_FAILURE = exports.REQUEST_FAILURE = 'REQUEST_FAILURE';

var INCREMENT_COUNT = exports.INCREMENT_COUNT = 'INCREMENT_COUNT';
var DECREMENT_COUNT = exports.DECREMENT_COUNT = 'DECREMENT_COUNT';
var DESTROY_TOPIC = exports.DESTROY_TOPIC = 'DESTROY_TOPIC';
var START_TOPIC = exports.START_TOPIC = 'START_TOPIC';
var STOP_TOPIC = exports.STOP_TOPIC = 'STOP_TOPIC';
var TYPING = exports.TYPING = 'TYPING';
// ========= TOPICS ACTIONS END =========

// ========= TICK ACTIONS BEGIN =========
var TICK_EVENT = exports.TICK_EVENT = 'TICK_EVENT';
var TICK_START = exports.TICK_START = 'TICK_START';
var TICK_STOP = exports.TICK_STOP = 'TICK_STOP';
// ========= TICK ACTIONS END =========

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// Trust the developer to only use ReactInstrumentation with a __DEV__ check

var debugTool = null;

if (true) {
  var ReactDebugTool = __webpack_require__(249);
  debugTool = ReactDebugTool;
}

module.exports = { debugTool: debugTool };

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"navbar": "_3uiZc_9srLgtR18FeVfTax",
	"btn": "DDGID1jH8QFdNRLOW7oXU",
	"caret": "_2c3FMsvUbTba-mcVDjzdmN",
	"dropup": "_2LqQOtrINq8w71LnII6c7V",
	"label": "_2fs-zhIC3oKEMHQyFtjQJ2",
	"table": "uux-O5YHHznRx9JHDNSsh",
	"table-bordered": "DIAsBxdam6rgoB1F9HgYx",
	"img-responsive": "_1gbmIGB5obpcgUWS3pti1E",
	"img-rounded": "_1LEinNlcsTj-rfNtcaYvRt",
	"img-thumbnail": "_1woC4uFrsE8C7fJFDze1Dr",
	"img-circle": "_2WZIqfIPgss-KCz7dVr_ru",
	"sr-only": "IJgGlQlO_Woko9Dnrq_BM",
	"sr-only-focusable": "_19QbHJrJsBdMdVc8tVn_EQ",
	"h1": "_3B4Vt2-uRnPa5il49ushNN",
	"h2": "_2uErvUH53Sa6zHUDZYt1KT",
	"h3": "_1JbhxJVR33j7xi7fG1wBhM",
	"h4": "_1c0jVch44R7cE2hg1SPn-",
	"h5": "_1xw_LVrN5lMQXqg5Aej2a8",
	"h6": "_11FfF1_CiIneBYTf0ewy1S",
	"small": "_29KM9cZ0UiWvYg0DbaV0k_",
	"lead": "_2gAp3iz4oVib2KDPOc-DsG",
	"mark": "_2C2UCvpXXTgmN_QzUE9N5h",
	"text-left": "_2oW5TtdSp-Uq5gUccOomfY",
	"text-right": "_1MZnmJjyJ3Hw3P68_r5gDw",
	"text-center": "chFa_J3bVIvvbxzNjG3YB",
	"text-justify": "_2OdwoYXTRVMWGMiLeregPI",
	"text-nowrap": "_165Y5N-dBOhSiZmUnwMogE",
	"text-lowercase": "_2J5ZOIiYd43mpWIfHL9DSr",
	"text-uppercase": "_3RlY-PbYUdXtHv6JOJ-_ON",
	"text-capitalize": "_1ERnuDZzm1opDqlh9WEmIv",
	"text-muted": "_3VMYBzDdI4bxBr2Frv_V92",
	"text-primary": "_3OoIE3sBhLcz7pnvKykpq3",
	"text-success": "B1PY5B3AVLk4TituteIYo",
	"text-info": "_1FpJMFindnbruojtcC30bQ",
	"text-warning": "_3NaMEC_OKl_aBUhgiqCusF",
	"text-danger": "_2WLAKTcR1aNwbWorKbJRvc",
	"bg-primary": "wdLwzGTtEDlfy2o6C2JeN",
	"bg-success": "_13QamfhS2RqoDOZb830kw",
	"bg-info": "_2ucuxDqJ_398GYlBxfd5C_",
	"bg-warning": "_2oph110_6L4oFMR81W00Sy",
	"bg-danger": "_3EKjbmZ_tGIN4TGwbAfw0I",
	"page-header": "_3B7eC8PbXAL6hcQdTfzzn0",
	"list-unstyled": "_39X7VB7CMmSJ2hj4oAgjXd",
	"list-inline": "tbBgUgMcKGfGpfzCG4WcD",
	"dl-horizontal": "_1a1XgkPjQwCjC4uOs1bAec",
	"initialism": "pEwyNvCGSPDywLuhmGbrr",
	"blockquote-reverse": "oKretSbgXcLPRhbMeh-du",
	"pull-right": "q1RwQc64DcTWo9Jpw3aRc",
	"pre-scrollable": "_27-nK7iEkQZcZYs9QWcjnL",
	"container": "_3G0Inh0IqWrtzg9ZpfLy1V",
	"container-fluid": "_2YfUStlHPOeTsdDor68WnT",
	"row": "_1YYAd4Ivfx2mrHSzkJXqZe",
	"col-xs-1": "_3ARtF6xS6lNfCElAYXDrVO",
	"col-sm-1": "PHX2y_UFFTKc23TrA43m1",
	"col-md-1": "_1OpL9iVU3FMvYBcce4TqIt",
	"col-lg-1": "_3STLG9FJkmhLkyDcqp9rw1",
	"col-xs-2": "_2yCecNua27vCxopQRqSzYh",
	"col-sm-2": "_2XfyJJu8IDrG13wi2RnpeY",
	"col-md-2": "kkSrbvwm_X1YrF7Rqlb0w",
	"col-lg-2": "_16Ut_zm4g2oocLROlHC4wJ",
	"col-xs-3": "_1jHdcVzRZUJtMn3knefS7m",
	"col-sm-3": "_1VXFXV-wqwq4qmo-CJGjhp",
	"col-md-3": "_3uM1GJG0ovLN9i3-UdIPFv",
	"col-lg-3": "_1I3dwlbGQqXw2Gh-POr1yK",
	"col-xs-4": "RcUK3Ns3dJQ1nKRgk75aI",
	"col-sm-4": "_29ZtKfGRB6fqtSXjkKpObU",
	"col-md-4": "_3Xma-M-k78eLzN9OOZa-PV",
	"col-lg-4": "_19bh47v_wYI8ogNt7xvfym",
	"col-xs-5": "_17zVs9UUrC9Btu34QH6LRs",
	"col-sm-5": "_17R5X-lxF-KHk1lG2Ql2B",
	"col-md-5": "_39eKdhNwDEfEIg5iU05Cyj",
	"col-lg-5": "_27vPuphmWZFwGIECVM-as",
	"col-xs-6": "_3zgi34c3FMhdi7VLUuGsbD",
	"col-sm-6": "TxpkgDhPXd5Ux97Acg0Zk",
	"col-md-6": "_2HudeVpoXGzODQPhlGGvBQ",
	"col-lg-6": "jztTb1NoIgqHahYGK83er",
	"col-xs-7": "_2vlrtJR0r9WBNVq7Yo8OHr",
	"col-sm-7": "_1hGfpAZ4ZEpjS9kI7JwcdV",
	"col-md-7": "_19jCttCKsnwK7fPrd2G8m_",
	"col-lg-7": "w3irFPKgOLgTICWlWZS9k",
	"col-xs-8": "_1WXk-xDR30LgYA_p4Znc9t",
	"col-sm-8": "_2WxRew213sIfWOoQa_ealm",
	"col-md-8": "m1Y2yMXbD2w7RLLJQWbq",
	"col-lg-8": "_3PVmSxgWI0bVcPSbg3uxBp",
	"col-xs-9": "_2GrmtwZp_FAnbksrS2quY8",
	"col-sm-9": "_2W3MoVFfGvBwX4ue8bt0Q-",
	"col-md-9": "_1wyzDTF7UTI1zJkdMcoM6S",
	"col-lg-9": "cUsasedMI1y70a5kNKvOV",
	"col-xs-10": "gaFeOjZU8dRlJZ7o8fY7t",
	"col-sm-10": "zvWJdwbC1j_GomviWtdOF",
	"col-md-10": "_1IW6JG21A75gEW_vzSIvcj",
	"col-lg-10": "_1eDM7Grs986cwBceJKS8x_",
	"col-xs-11": "_3iUA7WG5l43WumM9x5dS5g",
	"col-sm-11": "_3wJAcyGv6vR2Q2u3eL9Qob",
	"col-md-11": "Gb6aHA6h6ErLrZBvjWL6h",
	"col-lg-11": "_1NbJBmoLXSAL3KFgxVyAxb",
	"col-xs-12": "_1d9ZKUSYjNPlUJeOtykPi5",
	"col-sm-12": "_17UP-PsOCx_OEgoQymDKgt",
	"col-md-12": "cHAzfh45oM10_e89_RDlC",
	"col-lg-12": "_35pPiLYmnpMedZiQQTWTKi",
	"col-xs-pull-0": "nIaHS69AWbzT3PTAFMO_d",
	"col-xs-pull-1": "_2VA9ZX0OGGoLLb0Wja6_aH",
	"col-xs-pull-2": "y-9FkFBptXC7xxjskfcw5",
	"col-xs-pull-3": "_1Oi_LR8CdWImffBydfcbiG",
	"col-xs-pull-4": "_1IgCLZS2UqGCFaLtG-gpr5",
	"col-xs-pull-5": "EcF8S-C0YUf8GqUMupvm3",
	"col-xs-pull-6": "_1RjKI7DMJtxb0My1GWQmYm",
	"col-xs-pull-7": "_6AC2BbJxXiyRoCkQbMmMs",
	"col-xs-pull-8": "_3zdsLdf-ExSCbM_nwd3b20",
	"col-xs-pull-9": "_3edLhmsSMJZsoMk3Df9nFM",
	"col-xs-pull-10": "_9FomXr34mOB65C7_nrBmQ",
	"col-xs-pull-11": "kQTkrOJ6GHC8lP_CXx0Eh",
	"col-xs-pull-12": "_1ucdIwe3JMKHIpSU-OMTfv",
	"col-xs-push-0": "_2x_zTBnQHuRwl-KmJqeRg7",
	"col-xs-push-1": "_2MIXSeI7Iloz9ye_3JZ-Gu",
	"col-xs-push-2": "_3ztozNE7mtXKJQJrY14WJq",
	"col-xs-push-3": "_3LQKo3Udke1y9-AWPnxxHs",
	"col-xs-push-4": "_3x_8Fbr07hpsb3-5TguBeX",
	"col-xs-push-5": "_1aCK2swgECnAHhvolObPQg",
	"col-xs-push-6": "m53hoOF1hTEDDINKgsvLA",
	"col-xs-push-7": "_398BSua28LSaPsyAFRKsao",
	"col-xs-push-8": "_6fXhUUxxwmw_0TS23oNXS",
	"col-xs-push-9": "_2D75dmH-cLCBTcMD3vSmx_",
	"col-xs-push-10": "PQ_g9RwGtKhdrSGZdvny",
	"col-xs-push-11": "_1NUJs1qEsHeACDDTP0GHYs",
	"col-xs-push-12": "_2Gq-iUbsn7-gTzCK59QuTE",
	"col-xs-offset-0": "_25zdoXknoqQyVa4WW3mDMB",
	"col-xs-offset-1": "_2kuHCPsK1_1bUMaWcusxP4",
	"col-xs-offset-2": "_2nDzaO8QkU_HWi9FA8zsxz",
	"col-xs-offset-3": "_9ChnUsB00wD64Y0ZDbHh",
	"col-xs-offset-4": "_1JHUnZ6qHoTl7tTR3ogONF",
	"col-xs-offset-5": "_3O6Kb_r2IPAn20Zur8DH7H",
	"col-xs-offset-6": "_242vAH88kOesgdpaIXmSwQ",
	"col-xs-offset-7": "_1KjScoZ3UpGc9WJ7bVnQEp",
	"col-xs-offset-8": "_1wp9lyItbCmfc427tEjigv",
	"col-xs-offset-9": "_2l3ESG_Zt4ET6xoo6UMVyS",
	"col-xs-offset-10": "nOeWpMTGRdoCqhKz3tzrB",
	"col-xs-offset-11": "_14UzejkaqPmTmsFIo9on61",
	"col-xs-offset-12": "_17gKZD1gaXZbItvqtqb1hw",
	"col-sm-pull-0": "_3HsjCVQtiX5P3YbRwV4DLu",
	"col-sm-pull-1": "_3-sS_9O4mZ9AptWqfOoHTW",
	"col-sm-pull-2": "_3i_IaT58RsCBTQ0KA6yeHF",
	"col-sm-pull-3": "_30kDfv7wDoLP3IqHRD3PSW",
	"col-sm-pull-4": "_2nwOZvQHtcRYL87WaIV7qr",
	"col-sm-pull-5": "_1RqTqMlBTsiGdUT9ZScWjK",
	"col-sm-pull-6": "_3j1k2LL842cDjydQmel_KA",
	"col-sm-pull-7": "S14ILSO6Dcbb-ZNEwsEdh",
	"col-sm-pull-8": "_26ax99XBsTJ5vljFiH9Png",
	"col-sm-pull-9": "o_k9Q4zWpReurtukEJRSw",
	"col-sm-pull-10": "_1EH_RypVfbNipHhIutNUGO",
	"col-sm-pull-11": "_2AD32qX9TShy25w6PSWATJ",
	"col-sm-pull-12": "_1tMG0yaEKf3uDZBRWyD26n",
	"col-sm-push-0": "_2Cx3AP90GszmeZwlethTYI",
	"col-sm-push-1": "_3Pr-vQPNt4eWps8KkX2PzD",
	"col-sm-push-2": "_3UaGE-zk2NNz9tpyIxBxmn",
	"col-sm-push-3": "_3mNp9X11zlMYUZM2T2Eb0X",
	"col-sm-push-4": "_3yiy3MfbDu5GdSXw56GU1l",
	"col-sm-push-5": "jLxoCL6rTfa2qOyzNFaug",
	"col-sm-push-6": "_1-RUtdW8RUnf_I6kx_5VsN",
	"col-sm-push-7": "_3BZlSBaRXCHQ53wzHeCA0Y",
	"col-sm-push-8": "_3bLKZdABVmzJlfTOTPjsYV",
	"col-sm-push-9": "_1PgvtCz-hXhNTYIBEENKB",
	"col-sm-push-10": "_2as-CEJQrnIxF47rjJkvxx",
	"col-sm-push-11": "_18Yhp7p7VW5swzhZU68SAd",
	"col-sm-push-12": "_3zmBbwrz4eFQGJTi-rc77N",
	"col-sm-offset-0": "VFBEwBLPkwxFv_unjx3HE",
	"col-sm-offset-1": "dTciHQuHXWdUOgtqBsKmH",
	"col-sm-offset-2": "_2ad1Vtb2pCM8QVWoBwCUxA",
	"col-sm-offset-3": "OvjEckJlkUdQ9qAGXwx8M",
	"col-sm-offset-4": "_2RJjW5DQXUM_IbDAdT6jfy",
	"col-sm-offset-5": "_1T8ZUcAvPIeTbEpcIRelPS",
	"col-sm-offset-6": "_39XknlxoxIqZhgB9rs0sJi",
	"col-sm-offset-7": "_16puP9FQ35aBAI5l2yh18u",
	"col-sm-offset-8": "_1sDOKmEk4bajA2FOdiSfxP",
	"col-sm-offset-9": "_4QmlSVTGpN583DEtfePvH",
	"col-sm-offset-10": "_1Zjlqprunz_sspg43BAKKE",
	"col-sm-offset-11": "_3kQugr9e7fSYJw9gVbAlco",
	"col-sm-offset-12": "_3jX4YUnfMFjmwLidUFarqf",
	"col-md-pull-0": "WdsdNdJg6QbN4T7aWIPZ3",
	"col-md-pull-1": "_21Y-Dyz9QLe55vAE7VREwB",
	"col-md-pull-2": "_3fmPZhWSSB0Lv4JKG9jNpw",
	"col-md-pull-3": "_3dM4WSEk3dQtYYTOOc2pr2",
	"col-md-pull-4": "_37o4gEjHeynv_eeLi03Zy3",
	"col-md-pull-5": "rDt58gSEX9wLh44dTWhpI",
	"col-md-pull-6": "_2zZS-EPH_MaQNb9HEMDan-",
	"col-md-pull-7": "_1Z-TUWJx9G27r61SgyHf9-",
	"col-md-pull-8": "pehxTQXVk4pALhP5Pieos",
	"col-md-pull-9": "_3LaTipbGWXuvkzQxNcJLTy",
	"col-md-pull-10": "_3hrHZf_bJZVW4qfyu9bjfP",
	"col-md-pull-11": "_3pF_U13zgkTtuGMNxG6VL_",
	"col-md-pull-12": "_3DpktQUUkpX7WVia5hOret",
	"col-md-push-0": "kMXan8Bz7rZb7xyVc38ZA",
	"col-md-push-1": "_3luQgEEOv7Lf49dtdSr4QU",
	"col-md-push-2": "FtR7rpoK4V6Q67ZtVHKtk",
	"col-md-push-3": "BAuanGcWnjgEk0jC7ZO6T",
	"col-md-push-4": "lGSgZrnTLegWy50sSVcw6",
	"col-md-push-5": "_1dy0nxvJC4sBIA_po43Bvr",
	"col-md-push-6": "_9rbDSzhhPf1vQdOqbDSJH",
	"col-md-push-7": "S00NKmLm7sZOCtYM0RZ13",
	"col-md-push-8": "_1XxL5NBjDLU4DsyWuaZLqH",
	"col-md-push-9": "_360gNSP5tQBxs3uwoI55S2",
	"col-md-push-10": "_1n9xNL_3QG-xWjuRcMMDoM",
	"col-md-push-11": "_38CYYQugBx_ojIF3L-VaDu",
	"col-md-push-12": "_3fBYh0lHIq447RiH43E-4X",
	"col-md-offset-0": "_1Df-1ImdWzTO1OpTR6bC46",
	"col-md-offset-1": "xT28IWoO3pJ_s6FSfqsZT",
	"col-md-offset-2": "_4xsHyGZDudKxbIA5sk3CJ",
	"col-md-offset-3": "_17yFnEXivEyvtn3VpBV6DY",
	"col-md-offset-4": "_2WSWIKTjrFHMQRD-B--3Lx",
	"col-md-offset-5": "_3mPMkkErV8jhr03U3b7awk",
	"col-md-offset-6": "_24BcaO1M4zspFtI5LIqhKs",
	"col-md-offset-7": "_161Tx2h6-Y9jNGxGaRoBxh",
	"col-md-offset-8": "_2bjK97hP05_Q0nb1_bmAm_",
	"col-md-offset-9": "pIDnQXaSOHy4SQg_RK4rC",
	"col-md-offset-10": "_1fHzOV1i7GGivFoDtFRTuE",
	"col-md-offset-11": "_1hfDAKZCkRRFMbCiYInegw",
	"col-md-offset-12": "_3rT5ZF_KV-eehRO6-Y6Zhd",
	"col-lg-pull-0": "_2j8prh-ybfSoH9-dI8C4t8",
	"col-lg-pull-1": "_5cqOxV2Xu1oFaxQVdJVfA",
	"col-lg-pull-2": "_2M5RxR1hnq7MR9nrLOieBa",
	"col-lg-pull-3": "_2TS2NDwg8TueFkbfHMfdMh",
	"col-lg-pull-4": "m6Lw4VV7QSYPXIUx4UoSJ",
	"col-lg-pull-5": "_1HvPYLOURqWIbFs1jTftq9",
	"col-lg-pull-6": "_3zFmS-4hjPa-vs0nuYPXkm",
	"col-lg-pull-7": "_2MQ65t4fAn-jxA2W0rymQP",
	"col-lg-pull-8": "iEMI3cL-pzHKi8d31lFl-",
	"col-lg-pull-9": "VSoq3vjswBm7IyJ5G_DQs",
	"col-lg-pull-10": "hPQHRgcCdorWEBXgzxR-R",
	"col-lg-pull-11": "_2jdv8oPF-9It6_M-bheUvP",
	"col-lg-pull-12": "_1r7YCcwYaemYe_VCw06NHB",
	"col-lg-push-0": "_1fzPk90LtUBvnuwCx_PYxU",
	"col-lg-push-1": "_2keGJ45KRd6TPOsKkNk10k",
	"col-lg-push-2": "_3Lmj3Vcu-jJBLEqgMN4t9t",
	"col-lg-push-3": "TZbsczJts62hHUBm7TuV7",
	"col-lg-push-4": "_1tc5C72Pm2y1riOa20JqNK",
	"col-lg-push-5": "_2_9vCPUfcLVtnzT01oLVlM",
	"col-lg-push-6": "_3mdWwt9WRiMDwCOXJU6zQB",
	"col-lg-push-7": "_1WPP_zTzfI1_afBwHc4g34",
	"col-lg-push-8": "rfWQ8BDTZmLxxa-TPtT55",
	"col-lg-push-9": "_4b7ttrKlf1psDpjukrkNl",
	"col-lg-push-10": "_1_2v36jZcNmg-hMZNGd4Rc",
	"col-lg-push-11": "v8ek2dUi7kh5HvqIMgIoN",
	"col-lg-push-12": "_1ryUpLJp16NgDmHn2uOD1_",
	"col-lg-offset-0": "_1xqPv4coRAtrCOw-sCJ4xW",
	"col-lg-offset-1": "_28rvXGijpz5GPiJGlW9QxI",
	"col-lg-offset-2": "_3o5ZalqysWTR1so7tZxEBO",
	"col-lg-offset-3": "_1sI8ECvchb_OCWKrKXWhM2",
	"col-lg-offset-4": "_3MbGHKseHiFP-Sr3kdD5B8",
	"col-lg-offset-5": "_28fgb3ug7iALmTxHk6I02N",
	"col-lg-offset-6": "jnN4ZTiYvkNUjsJcU8Sli",
	"col-lg-offset-7": "_2AmmBk65nevwOPWUX5jS1z",
	"col-lg-offset-8": "_3T9syxHa4BScwIQ8uv4F0g",
	"col-lg-offset-9": "_3281LIajqzS7jyh_6oT4DS",
	"col-lg-offset-10": "_1tMNVVQ04k_IsqrTXwbi5i",
	"col-lg-offset-11": "_1uLHqV-A-yxQtI3ONf13ff",
	"col-lg-offset-12": "_3P3kFEbRFeN4vOU3a8yVAN",
	"table-condensed": "_30BP2JYKUwFK-H_gP2qjvd",
	"table-striped": "_2vZc6fSQfWOqyOe3LM3xvZ",
	"table-hover": "GsQFM-ityX4YjIJdjHR2Q",
	"active": "_3TJZ0VejhL-vec-IwSDp32",
	"success": "_3AwCbXUaXSqiqW7ERPfI_C",
	"info": "_3VE31gKuKNn7DWSCvYktyO",
	"warning": "_2Xe6F-jCSFfuX-3ViRHO_8",
	"danger": "_3_38TAk5nDdwYlWNlg_eJE",
	"table-responsive": "_2zw_0z2XsLF2cxXu5OLq80",
	"form-control": "_39IzVx8H1IzixjJza5OfQU",
	"input-sm": "_1c2LedlekKXojs4UYJ_Ww2",
	"input-group-sm": "_2QdrMYhMfKgrOcjriq_77S",
	"input-lg": "zbd71oJGw-1MTZlrSx1ix",
	"input-group-lg": "PUZ0D0PbEaIhdpAjbajbN",
	"form-group": "_1sF5xkCbXCUaDDntDJaBla",
	"radio": "_3WkaHztTmNecDWzVoaDkJM",
	"checkbox": "_3sz3liIU07sHPrUjGS9Fn2",
	"radio-inline": "_3Cxts43k0e9GIR1EZ03plf",
	"checkbox-inline": "_2oy-ZoWXJajpyt6vjrGerA",
	"disabled": "_1sM8xP0P26X4ZVVMYQ1Csr",
	"form-control-static": "_3sjIupjUEa5MXVIfxMiB1B",
	"form-group-sm": "_3lm4FIUIU1B4lng5X-efZA",
	"form-group-lg": "b-PjJGZI1J1JsqOFJt9Z_",
	"has-feedback": "_1iuPz7ey4jh0dEXHpO9VNX",
	"form-control-feedback": "_3NKoCVZVDiTRW0_aVc-FMv",
	"has-success": "_131brULEOaoTQ892_GifjF",
	"help-block": "EiGUAcJFAhgmrgUyhAAR5",
	"control-label": "_Q0eYIi05UOeLWtsWScoq",
	"input-group-addon": "_3G_zOu91_lfbeYLcXkRoRm",
	"has-warning": "_2ixpjkis-bmOFicY3Tj20S",
	"has-error": "_1DQ0FzWd3K8LO-yl05Nq2A",
	"form-inline": "_35GvGXhJDmYEtchskR1r_D",
	"input-group": "_2i06FZRzFEGMdH20M_2J7p",
	"input-group-btn": "_1j0YkbGVNC8DJrqu2fAstD",
	"form-horizontal": "iri_msrRwXKBxmxZ3S3lk",
	"focus": "_2cFDzDwMM0uMiqSDLVEzo3",
	"btn-default": "_19WmypY9mq4Z978dAZ0nAd",
	"open": "_2QVhzQhpLQ67hWdK00e6vN",
	"dropdown-toggle": "_32XaXq3QJgorHD7kjW6LPs",
	"badge": "_1mWnBo1-0qhTKDQRL8M4ei",
	"btn-primary": "xTQdsxreQsuhFN07FvftH",
	"btn-success": "_3KKOkIKQr4gvGG8dknAy6_",
	"btn-info": "_15Rjx9kPMBzw18zRalc6F7",
	"btn-warning": "UnRnRNJvj2kSg0RSRxnPr",
	"btn-danger": "nBq_B2z7YVU7pWa9tiFSI",
	"btn-link": "WHp89Vg55X_02FLmttQrG",
	"btn-lg": "_3YhRG7hv2m3rgC0IpP2fxJ",
	"btn-sm": "_1-iYRaj4RLYUShNfY7rEhA",
	"btn-xs": "shWT8zfqhLI4yZ5zIa0Xo",
	"btn-block": "_251OZ671ITSQRXkAR-duJb",
	"fade": "mARx1kM_DdYNelE0ORSFX",
	"in": "_2-ZCW6aYDsLU4hxKDitZs_",
	"collapse": "_2DGOdadPju_LqfCwPJrKeK",
	"collapsing": "_2wT2NGf52JRLZsfkldv2RC",
	"dropdown": "_2yZR2imkTYWJmZACaxF2B9",
	"dropdown-menu": "_2OdEdIniuwMbXS_g-N8wHE",
	"divider": "_2F1jJMEjmN4Mp0gC2PWSLG",
	"dropdown-menu-right": "_2v0_B16FBltwMYtuw3bNmn",
	"dropdown-menu-left": "_1VbYwmJmkaS7a1f5ajMyuq",
	"dropdown-header": "_1V8ddPGBcqnnVRj7aEMtby",
	"dropdown-backdrop": "_1bZoxuEWQ5IyN53fjNC3Er",
	"navbar-fixed-bottom": "_3OYy97V1X1XSNqcGHV2UY4",
	"navbar-right": "OFM41JPfml8cY9b9xzMyd",
	"btn-group": "_1rkRGm6i_iNP3FrHvzIMek",
	"btn-group-vertical": "_3erOFU_rxFSnmEIHpCMS2c",
	"btn-toolbar": "_2Jyev13_p1TbHJYF2LiEVV",
	"btn-group-justified": "_2nsBnNNwcWIHRirA8sQgUp",
	"nav": "_2r0eZn7Ab6s0riNVtXen81",
	"nav-divider": "yiZEhYgOe9niHWM1D2xHB",
	"nav-tabs": "_23Ypn1zbU1IvpZxRgwYGkE",
	"nav-justified": "_325qwp3QlukadlTp5zgD5B",
	"nav-pills": "_1s-bcqlsKXMr18s3291blK",
	"nav-stacked": "_1cN06l_TdDrsi6Kjg4Ht3a",
	"nav-tabs-justified": "_2ukp6Wutt45wb-g4qEOoNo",
	"tab-content": "_1LmQTKVDOXP1KtC0M3uO_b",
	"tab-pane": "_2wXz_JNC97tw4sOtr8Wva9",
	"navbar-header": "Mndo4K1tYLvssNyu69YdZ",
	"navbar-collapse": "_1xJwaDRqeXwmEJlAKcMYE7",
	"navbar-fixed-top": "_3651OK4YkLzLV3qZbZR0SM",
	"navbar-static-top": "VXWtb4T7rbYTTd0Fl-Hdh",
	"navbar-brand": "_2Yp4DGYlDIQk7a-9ES_rIM",
	"navbar-toggle": "_2SqG5wL08HnMcU_tEVWuB",
	"icon-bar": "_3rv6MAjfX3MnGIoWICOo5f",
	"navbar-nav": "_23ggby4UY4LfQkQcjatle9",
	"navbar-form": "Zr46IqBSkHmBTkKVpa5Lp",
	"navbar-btn": "_3swBgeZiKWcRZG9LAh3blA",
	"navbar-text": "_1r-WSP2vQ_4xGFHXP-6Lk9",
	"navbar-left": "-udg549ExOXCIu8qT8va6",
	"navbar-default": "QxRmiiAfhVwHS-6gkvis6",
	"navbar-link": "_9CnT5HgAEu2reT-LtwCof",
	"navbar-inverse": "_66LocTUCLGvfOrNuVhmx5",
	"breadcrumb": "_1VRumQGXhN6s9ant-1TJ8o",
	"pagination": "yhG96Rx8G2UpGcQvphahM",
	"pagination-lg": "_2PiP23GnyvfTyh_Tz1QQmQ",
	"pagination-sm": "vojMqwAckADiSADPDIvlD",
	"pager": "A-VdBZ758ZPVd7gjRJ0nk",
	"next": "WpujWp_VaCjDV84ZX8vvQ",
	"previous": "_8bD4rD_T9ZeIxfqUjfnUm",
	"label-default": "Kjd3N9V6TcxLp44b-BjWq",
	"label-primary": "_1VWd195WA-vcHS03AicFCB",
	"label-success": "_33ifX9Il_pKBIaRaN6tNfu",
	"label-info": "_1b6YqrkHHh_R7ugbNwRvas",
	"label-warning": "_29p_MhyJjZTEI9MALGjHMP",
	"label-danger": "_5g6gFALwo1WbDxRP9ebQm",
	"btn-group-xs": "_2_9pL0CpanlqeKOwwMwZUS",
	"list-group-item": "_2zV72tB4nnkwT2GdT4E58w",
	"jumbotron": "_3mP_3fxrbS9jMa6Trp4EPk",
	"thumbnail": "_20-eMe2PuT1aLyNKYAI3qY",
	"caption": "_21ye7so3X4rqZxYPdzkOI7",
	"alert": "_5BPSNj_6ZrUWbU1cqvOP-",
	"alert-link": "_2c7uw8vwfiLHKA4hezFi-h",
	"alert-dismissable": "_1TIqraePBdB9pI4kojc4mC",
	"alert-dismissible": "_1yY0JuIemmu7D-YAXrb8bQ",
	"close": "_1DFMXgtnk0exlClrEqd59p",
	"alert-success": "_1OxCjLX6xYdWElg38tSC3P",
	"alert-info": "_38LKSQMLJNTTws_6eZkryE",
	"alert-warning": "_1a2OECzH8uyyo-46vFqHAV",
	"alert-danger": "_24xQm7DVOOjO4Eg0WPT7fk",
	"progress": "oUIvESquKS7vJ1gIbsWyq",
	"progress-bar": "_3YJ0YgiNKCg231b4GqGI_t",
	"progress-striped": "pZBgvRj-wqi3Ok_pdBIcs",
	"progress-bar-striped": "_7PJo0IOyAviuY-tBvhq1d",
	"progress-bar-stripes": "Zz3kmWIowGk5YZX9O5EKk",
	"progress-bar-success": "_1IKRdyEOq0LgB_GqiOyRyE",
	"progress-bar-info": "Q297gWhB2-oczo5Sd4vPS",
	"progress-bar-warning": "_2z4FvbYXnSKVrfYaSdYt0N",
	"progress-bar-danger": "_32Iupg_exo_lxyQgrQ-czN",
	"media": "u9JZIilDrv6iIJIF2HZoZ",
	"media-body": "_2SQU0-d60DTymBVNjySRPU",
	"media-object": "_3nQ5m-tsw4Pr7O4XVig04p",
	"media-right": "ewLUMZ_BuBsY1b2sntGnF",
	"media-left": "_3Mcv87isFEaV8czhl06z1X",
	"pull-left": "kSvmjbPuAK5t-8Su3fUdT",
	"media-middle": "jYVqYFmKLerRVGWDWfKcP",
	"media-bottom": "_1svaIqxJBdrHqvPL5POgKi",
	"media-heading": "_3bppR86nvSgTteen6vK136",
	"media-list": "vg7yCfHqGov37WnNnh37W",
	"list-group": "E60Eyd_D-T6Wb0QMemBaB",
	"list-group-item-heading": "_1saBbGMRSdvUHY5oO1YmP0",
	"list-group-item-text": "_3cqGW3fi6E1BsuuQKOub9e",
	"list-group-item-success": "_1FVgvF6110stkOcmvgBej-",
	"list-group-item-info": "AaFunlldtudcJGQmUvbIb",
	"list-group-item-warning": "_1oRg5pKOfMRKFWlwS3LF0c",
	"list-group-item-danger": "_1K6FxQjdlW0zBUlqO_LcKG",
	"panel": "_1Rf-fOu0iX1Mz0nBJt3VWr",
	"panel-body": "gDq21X7iOJaelZq3VyNQF",
	"panel-heading": "_2CcRqKYRb34wrClDrjkV3t",
	"panel-title": "_1o_QlywWLpWGtNlWS25YoI",
	"panel-footer": "_2cfdbSPm0OqGOWT0avOKkO",
	"panel-collapse": "_3RYmkmDsx2nkhABZf19p1d",
	"panel-group": "QWhQDYf34bpiV_E8UP-61",
	"panel-default": "_3EUFCBjs18fc6c2EoohKlp",
	"panel-primary": "_1ZL91OZfF5hSsgXRZntWzX",
	"panel-success": "_2mD1b7Kn4NaCg8Ptk12QAq",
	"panel-info": "CdhfPxqkayOhXDsvWTA8x",
	"panel-warning": "QarkFcUKqv0CVCquCg2kS",
	"panel-danger": "_1IGa70dfc8RW8PAdZzcbzt",
	"embed-responsive": "_1bL8K7sFEi-nJMDA60j41W",
	"embed-responsive-item": "_3a-XNvFAo_5oNgJtevjc0K",
	"embed-responsive-16by9": "_2GJ6OrunzVCrLcF2C53Duc",
	"embed-responsive-4by3": "_2YOq5w3ly4iHXc9fLGuma6",
	"well": "_1nCI84RThK3RJSFJ0V_S6j",
	"well-lg": "_25yoxG07nO-zAQbs2HPcuq",
	"well-sm": "_3PWKrWwiiyLRCpSaW18gNj",
	"modal-open": "kJ4GXQD7NE7fFES6CFTzI",
	"modal": "_1-JWvVwBPKQNQ-S5dw7Fnj",
	"modal-dialog": "_1QwdlKFCksaf-wbqFFhZ8V",
	"modal-content": "_3Jotiu4Fx_I6mp4Y9YPk6L",
	"modal-backdrop": "_2BDxnLyZFNUlCO6Bd-8a5V",
	"modal-header": "_2xmtI4VruCsMy4RhR0bj-r",
	"modal-title": "_22OSI-tZ4n2PKpE4wPpo57",
	"modal-body": "_2EmGBBLlDUFznvhd7uNwdi",
	"modal-footer": "_2iqBPb-w9aP0TgN7YVNAnm",
	"modal-scrollbar-measure": "_3tOVHWjur5nfW0keVqoZft",
	"modal-sm": "_3EdZcjNje-egonoPanc16z",
	"modal-lg": "_2CBhANSMVq3qAm7TB6zsU0",
	"tooltip": "_2iPDJ93_B2ddUK8urT4Pn9",
	"top": "_1vxvx97nn53HLsHYPeIspa",
	"right": "_1mdeit1aPvvxPwdihk5T6n",
	"bottom": "_3MBKdsnluUmBtpYqcoa17V",
	"left": "ozETFNLiBOqr2CvO-QJJD",
	"tooltip-inner": "_1qYs0Ntzi7dft5Qs3VCiLn",
	"tooltip-arrow": "VSA4DoKqqQ73I-YiEYdFW",
	"top-left": "_23SVRmzsjH2GNgymcxH0RD",
	"top-right": "_23_mKvp0JdWKYZhx4ZMOul",
	"bottom-left": "_3K_4fMIiZYlREgXdKGw0yf",
	"bottom-right": "_1QUrx49WtS4FKHlzmeLqGn",
	"popover": "_11A1MNDPTG73XG-BEf6R_K",
	"popover-title": "_3O3m-NK4T3Pdv932HqcqNF",
	"popover-content": "wkwSMnMUyOBHcvYst60pl",
	"arrow": "_350diHTeES0GVXoXkZvJBE",
	"carousel": "_3Wn1wZZLQhWaWWwkJgMYVY",
	"carousel-inner": "_1lg9pkKcqcnOhrKWGZ-l5r",
	"item": "_1kENuHl8Zms87IoqS8rZ6r",
	"prev": "FZO65OnrQ8IfBnucpHalm",
	"carousel-control": "_2gFTEdlNJQ7-49mFh4f34h",
	"icon-prev": "_34ureUtBpHf4MXQI1NPfeh",
	"icon-next": "WWh7Oyxa7gRiPmpY6K334",
	"glyphicon-chevron-left": "_39IA6fDUZ0npsbyL4RCrux",
	"glyphicon-chevron-right": "_3XlI--V-y54JTcUhC1m05n",
	"carousel-indicators": "_1UXeY0zAjPZGa_UBSrTs-k",
	"carousel-caption": "_1xH34Ee5mZVPICCzeJv_Lz",
	"clearfix": "_58nL_8OUKJd_r3vu68xT1",
	"center-block": "_3MGPorpeAQAzg-RmHGg3f2",
	"hide": "N1VWiCuWHvySP7OZWFF3X",
	"show": "_3YenLFRlluT6sEkINIukB1",
	"invisible": "n2h4RFgABZ0lHLJL8WEQz",
	"text-hide": "_3MF34ZJGMO6K4h7yQ85b_c",
	"hidden": "_19jSNfMUP7hUjnKXknFQzn",
	"affix": "zbYwwLTMSRajOwrrM_TDB",
	"visible-xs": "_3EAi_ITMS2757sq0oikoiF",
	"visible-sm": "Z9fxoj-uoSBKVOAC8t6om",
	"visible-md": "lOMjmn7EeND895kOtLRWx",
	"visible-lg": "_2Ftur9V6TEujJuElmZdNca",
	"visible-xs-block": "_2UMMnKFcfOb3I6AN5zinK-",
	"visible-xs-inline": "_2c4hS9BisMeq4Fa5mYr79R",
	"visible-xs-inline-block": "_1GQa2EpVj1FiUp0zaLm0np",
	"visible-sm-block": "_1AViQd4a5rZQIwm-ZE_zGG",
	"visible-sm-inline": "_26RNRra9Ar3XNQRgAaOWCt",
	"visible-sm-inline-block": "_3T_v2s9kDH5PJzvm0fSDz7",
	"visible-md-block": "_1G4JBuaOg4YkA1zEl2cLZ-",
	"visible-md-inline": "_1zROOe98LgZ2ZSUu37z350",
	"visible-md-inline-block": "lamRikgHvXdfhNEqCo3kv",
	"visible-lg-block": "_2jSHW4nDuNBgefqyEaz12q",
	"visible-lg-inline": "_1UD1WSyw3GDWfKsqIFAmXR",
	"visible-lg-inline-block": "_2UDFp7nHDPUcyH-aU6AacQ",
	"hidden-xs": "RV985TxqrqqeUU4VJhMYb",
	"hidden-sm": "_2i6mozEDaRNC_fG94tz356",
	"hidden-md": "_1kgEXVtj7oLJKmVcFdVz_7",
	"hidden-lg": "_3nBJBiWjLGwPCDzreyzf3I",
	"visible-print": "_2jxdq6bEyHRikUIt_ud8t8",
	"visible-print-block": "sJUO-tReeYCzmwK-x2Ko5",
	"visible-print-inline": "AHHZpfhp2hpUzIV3_wwRL",
	"visible-print-inline-block": "DOjEn0ZfEVVk7GNMuGrMu",
	"hidden-print": "_3TaWjgbf6Ub0cC_qwI7RSM",
	"skin-blue": "I1q6BrjxZp45VaovgWbPk",
	"main-header": "owr-PGQ7EPZxdyRoEr8Ns",
	"sidebar-toggle": "_2Qmfd6zjA4smxUKSY1x1m_",
	"logo": "_2CbdaBsQBTKW_eYqBlJ7yL",
	"user-header": "_27yVqZbgkJd0a60bsjSQfB",
	"content-header": "jPYlp6p1BTa_LB_wuELbv",
	"wrapper": "_2QPz67o8_ycryU5XZlH8cj",
	"main-sidebar": "_2B6iS9a5vfra8D2xEeHbxu",
	"left-side": "_3filLik9WvthxaxzNcKLf4",
	"user-panel": "t5I2zDwiefX_IviMHcLXE",
	"sidebar-menu": "oUmfQBOTfKYEReqwGC5Lq",
	"header": "cYYI1DgoiFf5pXy_VI7Y",
	"treeview-menu": "IfKsWeq8D-Co3tZSrOFv1",
	"sidebar": "_3BBkp0EpBa-rB-mCpyZugp",
	"sidebar-form": "pMgTv8W9oA47c53x3Y1eS",
	"layout-top-nav": "sApRkol57lg08DblP1Iad",
	"skin-blue-light": "wrOZUQXkUicTwx2kDlxcS",
	"content-wrapper": "ydyBtyGqF-AK2hLI9qflV",
	"main-footer": "bwwW5aAL7a1eQf9OWCYEs",
	"sidebar-mini": "_2GgtJnSIGc4BB8yiPddARN",
	"sidebar-collapse": "_3lOQdYofjIohzaXyebuYo6",
	"skin-black": "_1o8mE595CpiGT-Lw13lk5s",
	"navbar-custom-menu": "HB0t33cdCONbE2YTqSByq",
	"pace": "_3RF25XIyiJdPHEF3lRUu8z",
	"pace-progress": "a91OHRmgKKDJRZOPbDxga",
	"pace-activity": "_20-GUaS42UHBOgWexAofF-",
	"skin-black-light": "_2re4ttTqJ6DZGMi0nOaOUw",
	"skin-green": "_3_vrRpdFtbn4-JCOyfVQxa",
	"skin-green-light": "aZOG-JWebxGe0mZxJ2BIU",
	"skin-red": "_1Eebh4OBn5w1Y02XVhSocj",
	"skin-red-light": "XQxgQZv7JZxASVZUozu6M",
	"skin-yellow": "_2dhL8qy_6Gex6dKwXpLkbL",
	"skin-yellow-light": "_2nlkV6cblQucgMKVfzQIhj",
	"skin-purple": "n1mfBE6M8DxQpQEx7Gkmn",
	"skin-purple-light": "_1Qxi9YiCWzMvy9llO553t2",
	"layout-boxed": "J94UM_VSGczmZynrJbO5W",
	"right-side": "_3_IoqqQGx7wFM76eaKHHhi",
	"sidebar-open": "_1PI1JFOE3bUMNBLTLrE2EG",
	"fixed": "_2km2vBgDIUIDr3_0N14d32",
	"hold-transition": "EpUC4JI4wTiEm2GjNWUoz",
	"content": "_3ohXj_ZtC6TN0gulctPaAt",
	"navbar-search-input": "HKBC_nyxoDQGmM9L1QVLX",
	"user": "_2uzIMJdPtrP0tFB7miZxRz",
	"fa": "_3KWY2hPsA1XD9KyJo7VlWH",
	"glyphicon": "lwYVIs34bIyK3uIhHp2V2",
	"ion": "_2hgzVujZavpdNBOjzXHj2m",
	"logo-lg": "o7J9F2ZfX5kYvTvcAVRlJ",
	"logo-mini": "_1SA7r0XXvn93UaxdR5U00L",
	"image": "excKjhklK1otTFhnVoyme",
	"fa-angle-left": "_11kijACFjFgFB4_7AsJuiu",
	"pull-right-container": "_1or6ARxFbDyHkw9SbN1wFg",
	"fa-angle-down": "_29c6UX-vvJjoW_sUt7SghO",
	"treeview": "_3UGM2jquRVqDwGiiNtvjr3",
	"control-sidebar-bg": "_1blkH9WBsFbXJkJvrzvqSY",
	"control-sidebar": "_3Nmr8fqKdPMNumJRjr18Sp",
	"control-sidebar-open": "-N09nhJPuuXMqNUiyCRc4",
	"control-sidebar-tabs": "_3hHYS-L1BXvAyWTA7QZwAc",
	"icon": "_1s0iRZ310F_N3Bj8u3jxC",
	"control-sidebar-heading": "_1Hm9PWDT88J2mEmoCohv3a",
	"control-sidebar-subheading": "_2jesOrSVtoTIShPPySPB2V",
	"control-sidebar-menu": "_3ik0M8xVb4ZSHh8R5Rux2H",
	"menu-icon": "_3PDsCTvaew116pQYzk_tYX",
	"menu-info": "_1WMIzvohx9gl1dOPHePvkK",
	"control-sidebar-dark": "_3iTIkhZU6tFQKbJikq4qby",
	"control-sidebar-light": "_3YNgt3PwZwTQrPGQ6XcjZA",
	"notifications-menu": "_2hlun1GrnCmHCY9vyZg0ze",
	"messages-menu": "aWLiWNLLdHo_FHmak7zeT",
	"tasks-menu": "_2vwEvXTBysdCy0hQZ-MEZ5",
	"footer": "_1ipHICS_vHyCXPuE8U0Rk8",
	"menu": "_2HjnQ9A9VLhkM0N40rm_sJ",
	"user-menu": "_1HuH_hrGFvI011xbe8YAvr",
	"user-body": "_3-7gHAmsl-I6EMuqbySFug",
	"user-footer": "_3ldbmNFhotN4QAGbPl7zOo",
	"user-image": "_2rvgeDMZly-WxtezZYA6fw",
	"animated-dropdown-menu": "_1zp8M5yJKo24D_6GBgT-XR",
	"flipInX": "_1lHRgUP1Qc7rZRZOWC2TVm",
	"btn-flat": "HEQhC3eB1VTdvIB-gxSwh",
	"icheck": "HBFGZlgFgKb1Rh2-su11a",
	"sm": "_13_SfC4zBEeM9olE0UMSsW",
	"progress-sm": "_2VSHiDWTK4x15VhRBwkd2Y",
	"xs": "_1L0iweuaRbYCimGbMhvjyW",
	"progress-xs": "_2VWgxGTP3mNoc1QyJoiE8X",
	"xxs": "_3dRrASD8x3M8tQ6LxmCe5b",
	"progress-xxs": "_2PeeZkqWpalVbCVQVpeap-",
	"vertical": "FTHE6uN9JVyN5vvGGy9Nx",
	"progress-group": "_2MhTFGOT0jJxuRSA30Z310",
	"progress-text": "_2DdxxISxVcT8eIAqszkqUS",
	"progress-number": "b-dxmNvklZ_B9rcr4TyTn",
	"progress-bar-light-blue": "_1OyoHgN2qBoy6ZuDiZSneE",
	"progress-bar-primary": "_2S9TjcxhIR8_Od8bJjzaVA",
	"progress-bar-green": "_6ldtsMI7fb20fHgfuL5Xl",
	"progress-bar-aqua": "_2XOQmEDMKKavHqBcoKWn75",
	"progress-bar-yellow": "_3IYzUppkKJwRK7XsUIr41W",
	"progress-bar-red": "_1-qbBjEg91nL0kOyOmQtIk",
	"small-box": "_8WKfYlgHDuoaf3vDnYMqH",
	"inner": "_9mQq3tz0EOlxynV1b7C3d",
	"small-box-footer": "_1NjrYVeb84PCymGpxBzms5",
	"box": "_3IRdJo3-rXKHHiYFel_23v",
	"box-primary": "_2wvP7uP3NFSy4v_Lixzjsn",
	"box-info": "_3cqPUoGUAPxJ9qYMq5lgOr",
	"box-danger": "_2YUvJKTGE2oc5OZh05YYaJ",
	"box-warning": "_3O_vp3AEI21jSeQdZ7T0l9",
	"box-success": "_3sFa_Hys2bwOg5enZjVbnu",
	"box-default": "_2VyCaDkzxSq9cvkGgiWRGW",
	"collapsed-box": "_28py5wgJV7M2Xd8qWftGUS",
	"box-body": "_3a97wRMjAX_KnhU37gYRqN",
	"box-footer": "_19dVvguOHn2s3z4bGLRQzn",
	"height-control": "_3k9GYvn8GFnhN16MiSnpjB",
	"border-right": "_1FwH0dnc-QK2jZ4se1EG01",
	"border-left": "_1Vq5v6Pq_z95-7SUI74pmy",
	"box-solid": "_1oLPS2KNEDizxfthrXrE5q",
	"box-header": "_2OJUoYCGfZE8JhI2jcTyuy",
	"box-tools": "_3qpfqQHD5M7-1FK9AAelVv",
	"box-group": "aZs_-YsBqmPygKc3ZaSzX",
	"knob-label": "_32pVk1OBhrSpSLKPy_MYV4",
	"overlay": "_2FVfD2s7poRLNl3o2sov2H",
	"overlay-wrapper": "_108ZkJPeBxNtUCjISCUxHi",
	"loading-img": "_1qwXI5LAQXliFDw36uuD6g",
	"dark": "_2Y_CwwQC9RxxHXzwoP00n_",
	"with-border": "_3YTB-i7YWhneuwwGrOgqa8",
	"box-title": "_3mL1XS56_vqyi__cNapc15",
	"btn-box-tool": "_1u4JW82UdzfSoYuBrsSLXC",
	"no-header": "ghJMFQI-YTO-QlwpVVuvy",
	"fc": "_38L3lshdI49lUL-gVKyGvS",
	"full-width-chart": "_1xfs9JcXLKr-96uRXg06d_",
	"no-padding": "_2JvL8Y7rROgRMUjQpov_z8",
	"box-pane": "_26DZpJ96lwR9myumiaQiBN",
	"box-pane-right": "_3JktDN4cYPb02Sa24BxiPP",
	"chart-legend": "_1wPOBLrgw1HNfiZzMhiwiH",
	"box-comments": "_3ibIYrAOLtiKKdaHKRAKC-",
	"box-comment": "tUUO58iC8L4OuOqKzrbqO",
	"comment-text": "_1BxkMQjcJ0bD3QpahXEHRN",
	"username": "_2ZCU4-agvm8OsP9XOQdSxI",
	"todo-list": "_1KIJsstszUo_f_GEea-Qb0",
	"text": "_3Y4bEz4r9oHs_MMXX8rES7",
	"tools": "FkKIn91fqYrHz1LM_J-rz",
	"done": "_3zehdEQ5ofnIQlBsaPQyXn",
	"primary": "_11Sv4VV_Z-PGj0gpa3S4Re",
	"handle": "_3OL_4fi0SHJbkwnJSv0Arz",
	"chat": "_3rVTFTzn4sr943YZnzA6g7",
	"online": "_2cgcYCfAIW9zHrnFqLt3w",
	"offline": "_2hLAus7koGuQXJf_xqGGdy",
	"message": "_3ECLCJEC2E4lD4GwX0w3LV",
	"name": "U4AjcmhCPCr74eh06xXE9",
	"attachment": "_1sdL8zBJi1J0UYRl8KjSrv",
	"filename": "_2EcBybAVzKC0sSrAb3IV4U",
	"box-input": "_2EvLULwcbFyQvLrSx37Zcz",
	"info-box": "_3k9nA-zn8TihMq6UydhtNX",
	"info-box-icon": "_1poQOZLhWjkhJrpnKkS-Z4",
	"info-box-content": "_2YPE781yjbhJYagYCrCU5i",
	"info-box-number": "LctAUIJtcHgMUhkqJYtS9",
	"progress-description": "_1TrjIz93mnOMpDWQNPFRb3",
	"info-box-text": "_23yEvW6u7VyU_6ZDKpyRoU",
	"info-box-more": "_2TVUrJXTYTkdDWmvAZA36k",
	"timeline": "_3zPxWQhjaxxPakxgL75GCc",
	"timeline-item": "_1EmSNSlRmAi9EhQ2Rlm0kX",
	"time": "FcHD_125mWvqNBvRl4ugz",
	"timeline-header": "_2va2fHlZa5TGXACQ7w2u-6",
	"timeline-body": "_3jt5ehRdxjVVXbejH1_626",
	"timeline-footer": "_1ZlBZ1o9hIv1ufwdavD26b",
	"time-label": "_3YjXkMoTIplL-qgJPhA_FR",
	"timeline-inverse": "_35ZvRkb55187TSemnjGTU9",
	"uppercase": "_1PjZz5Ux8-YmGveP3P_2JS",
	"btn-file": "_3yHTN5dAgJFXbLv5Y_xzv5",
	"hover": "_303jaSVznvYZDD8KR2RNrJ",
	"btn-outline": "_1sjh43FRu0w0CiU06XtM4Z",
	"btn-app": "_3VZMuw4gY-ZTpa810uAEfI",
	"callout": "_26akuIipp4UcRSX12zg7Km",
	"highlight": "_2eq5cL6Frpgfskfjg3D8LB",
	"callout-danger": "_15u4i9KGjluajjqQADiuJC",
	"callout-warning": "_1QADhvfH8ANDoMScSHcxj6",
	"callout-info": "Guv09PVzMPqamDvdBL_y8",
	"callout-success": "_1c89ShU-LPJC1vWcsDgeyi",
	"alert-error": "_9IqG5DYJIaZufEW2nZuEZ",
	"nav-tabs-custom": "dbmJG1o8SHnB1DgFzt0Sn",
	"tab-primary": "SKvW_SpCGPsbw1wFj3pYC",
	"tab-info": "_1TZYmngErmmt--Fzgyz2Iv",
	"tab-danger": "_JSik81pUlB7zp52Ft4yH",
	"tab-warning": "_1EH3iSffTunHqFXVd-_w4S",
	"tab-success": "ZF-0aSpD_WSFQOVkyO_R-",
	"tab-default": "_1Psw_kJv8uTN2z3C8-X09r",
	"pagination-flat": "_3RnzFdFPwuGINSpeph0D4B",
	"products-list": "_2rElq5vqBKIw2vqibEyjbT",
	"product-img": "_3orj29XpAF8PdYR4pgZsm3",
	"product-info": "_2oIP9CeMr3H5aZqETXMxWo",
	"product-title": "_2Itdbd4frTdZTi4f6_4i5j",
	"product-description": "_1XD-uOhRSab-62kmexN7RT",
	"product-list-in-box": "_3qzA1Lw2w6ylC8iqb0sNWJ",
	"no-border": "_3vSglkwj5gETp0XYBBdlDX",
	"align": "vfAsxJP9EFO-swp9RYL2x",
	"direct-chat": "_3OZwCX5Ol33sRTqAltxRln",
	"chat-pane-open": "_1iQ0heQGXKPJnsobtP7GLE",
	"direct-chat-contacts": "_3nbI8UIQuMbzWLoi_jwpHH",
	"direct-chat-messages": "_3dL8tKoSXOFg8afDaBLe9q",
	"direct-chat-msg": "_3s-WBKxZJPRnVDu-3VXbYP",
	"direct-chat-text": "_36SDHlaFzR4SoIYyhtLntw",
	"direct-chat-img": "_3dmnaFCEZypltuoiqo3StO",
	"direct-chat-info": "_2haRaO9ZwKaMbRI0S7Ojrg",
	"direct-chat-name": "wrOWq0cPcWszutPaSGolA",
	"direct-chat-timestamp": "_1gxDNfZVg2UJ3_1gpl0PZZ",
	"direct-chat-contacts-open": "_1cg7Jb5o7XzVpirs0e0_Hx",
	"contacts-list": "aaYv4pdTBFFJj4Qp1DVb7",
	"contacts-list-img": "_3XttNpSW2-Ql3zQbrsOmpZ",
	"contacts-list-info": "_1rSP26zW-rQ207xv5Ur_Dm",
	"contacts-list-name": "_9B1nFuJHlvU6K0UfLm1tz",
	"contacts-list-status": "_1TWX12OPk788wruBxHCYZD",
	"contacts-list-date": "_39IpHSntL5q3LSw8lOTsDC",
	"contacts-list-msg": "_13g7j_4Bj0IoSB5SYflYCR",
	"direct-chat-danger": "_2FNAh1ALXLUwHgHyK5kupG",
	"direct-chat-primary": "_2_dmI5NOGio3EO4wMATZAb",
	"direct-chat-warning": "WkrqHaHV4E4MT7_yjpXA0",
	"direct-chat-success": "_3NE7VzPubiUHTvT2BS6O0e",
	"users-list": "_2F_cQhf1W20VsZyLOlYHL5",
	"users-list-name": "ad8M9d83Cb7OwXog4ee7g",
	"users-list-date": "_3NysvDxrP3kgYrO04VSHhh",
	"modal-primary": "_1pGECMMHTJNnfPnbHx7Zp-",
	"modal-warning": "_2lTDb14P_FGIHlHWd3MZKO",
	"modal-info": "_3awLV6cyrXE9q8rwiOZfbb",
	"modal-success": "TPncMJFK48QOSx4wQLoN8",
	"modal-danger": "_23NX3CLuKidUj_vz0Ewb6j",
	"box-widget": "_3uAw9GUAu-PhMKMUaZrS8r",
	"widget-user": "_1DpHbMy4sxlPV-2TNMhKe2",
	"widget-user-header": "_3C1oaYfhG-RWdQCTpI9Cy_",
	"widget-user-username": "_3Orba7yTVOtVW7UgtZRL_y",
	"widget-user-desc": "_3OWw9_G-d1LRzPwTpJp_ON",
	"widget-user-image": "_3U_7zUz5rbQsfQgTbCcP1T",
	"widget-user-2": "_2tU4P8nrVWz1rAiGwyOKJw",
	"mailbox-messages": "_14dmabaTx-MWDsHZd7oIlt",
	"mailbox-controls": "_2bxFA_bBok9DYNAveDekSH",
	"mailbox-read-info": "_2r6KnULMGij7ORUWiqt9pS",
	"mailbox-read-time": "_3b6I2fkjwuwDmB2zgEx3kz",
	"mailbox-read-message": "iX59PU33C2S1lskg9tMwZ",
	"mailbox-attachments": "_37488t9csu8qlbsqzTLWtt",
	"mailbox-attachment-name": "_1jwT6hEkYCDAqD8xnWywYM",
	"mailbox-attachment-icon": "WONIQzIavPY7c_WhN38iv",
	"mailbox-attachment-info": "_246sAjpdm0iiEC9IRu9CPD",
	"mailbox-attachment-size": "_2cykTOyJetsvZ8g0O_Cugv",
	"has-img": "_1DHLEdyzgD7jv0gvtDS0iz",
	"lockscreen": "_28XfdT6PwWp_t8nN_IG41F",
	"lockscreen-logo": "_6Swdi1Uh9rUPQyXORPMso",
	"lockscreen-wrapper": "_3YvfXsoUFyvgA0HCcLHzMV",
	"lockscreen-name": "_1gLkqh0mMCOxkScl7psiqG",
	"lockscreen-item": "_3mSk1i_0Xu3jt8BNEH9PUN",
	"lockscreen-image": "_2aS0EYvhO_9MdbCl7l2Xlz",
	"lockscreen-credentials": "Q5HKnvRAwPsWE2MXmht8w",
	"lockscreen-footer": "_37vqxpekNmiwETUwc-WRGf",
	"login-logo": "_3nm05WpsehMiEzQKy_JiuM",
	"register-logo": "_2JtB6mJ4sF3EKqv9x0f5X8",
	"login-page": "_1d_DNuGF0d6oQ6chEFN7tM",
	"register-page": "_1X-8qVXC9GQuNyqeb37gl5",
	"login-box": "_1hD-sUvZkLAfV9_28sfdu8",
	"register-box": "KhzUyYKTVcGk0YOLP1FS-",
	"login-box-body": "_1tp6VVsXk3y0MPwyT-slez",
	"register-box-body": "_3bc5A6meN5O_9UC39QLt9l",
	"login-box-msg": "yRZLAb6ZJi8r_zV7-khF5",
	"register-box-msg": "_1rcHfVnzvX-p0omVfCVYgy",
	"social-auth-links": "_2tKcyxEt_FnJZSXsZV1398",
	"error-page": "_3mP7x__1X9qOJeVb01io8X",
	"headline": "L1MRtt0x2Z7WVV3vqY8vj",
	"error-content": "_39YHJuf_2-aMtH9HsJeH46",
	"invoice": "_2gq-h__9NTPBte2qFFm6o4",
	"invoice-title": "_3OjyEgzGJa0-G8uixNFGve",
	"profile-user-img": "_1vYN48sJZSNAdsBKsuMlXD",
	"profile-username": "_3bL9bwjj3MUHm8BuhKCjHk",
	"post": "JxCqEyjIsziogxpP_Nl4R",
	"user-block": "_1DvHsGLTKzFzMVw1d-ksQY",
	"btn-social": "_1L6orIA-khSXPb0LtDIEGl",
	"btn-social-icon": "u7P36_1R1Gz-BoImCdnRI",
	"btn-adn": "_2gqj7Ug2YXW-eolFoelBVB",
	"btn-bitbucket": "iNXTOe5ZnhqeoaXJRd2HR",
	"btn-dropbox": "_3AgH24nysCfbzJkOmmLfCw",
	"btn-facebook": "qD6wSt6PXgamd08TgOaHf",
	"btn-flickr": "MKlNi3AGPQ50NSg9gu1Uh",
	"btn-foursquare": "_1r4DVB4IRDn8F-R6law0H6",
	"btn-github": "_2q8SDSD4ZfeS1zUB3SkOZn",
	"btn-google": "_1sdYVywj3wUqucec8U6vCJ",
	"btn-instagram": "_3l-dKAmNE90ukCN9Be-sDs",
	"btn-linkedin": "_6XMqZS9tPNlann6QNTCH",
	"btn-microsoft": "_3hRx18ZY2SqOeIEkuvr6qW",
	"btn-openid": "_17MfKpMOWXzDUSaeEuCkfG",
	"btn-pinterest": "_24-IFRP69oq0rgQIP6R0GL",
	"btn-reddit": "TqeuVSM-Tu3eEFNekYzie",
	"btn-soundcloud": "_20JjkzSqSNXPWTPl3VP27z",
	"btn-tumblr": "_3D_TePIdd1DBRGcPGdueIe",
	"btn-twitter": "_1ehcbnxqj30pH9ZFhN3Mx1",
	"btn-vimeo": "_5gGNyEazrL6lGpKcVtjRW",
	"btn-vk": "U-osOUOB06M40vkOj-q3u",
	"btn-yahoo": "_2xAds6HcO20xAuuJ9uSePp",
	"fc-button": "_2WlplXdNGqk78wgQZPL3ad",
	"fc-header-title": "_2dWzmGuqXqME-s5OkU8m99",
	"fc-header-right": "_18JLYPN6RzJ6AuVpx8zkEK",
	"fc-header-left": "_2iylP-1C5MH86DXiROY4y9",
	"fc-widget-header": "_3mmywhbynpTcbsaCZn4l5D",
	"fc-grid": "_3jrd1zaQto7MRu4ET8Lb_X",
	"fc-widget-content": "_1l84cVNJRw-Bwegha3XecI",
	"fc-toolbar": "_1Wc2W8f9CCkKST6pd0z4eU",
	"fc-day-number": "_2MoPwFA7ZpCpykGfUYpSDp",
	"fc-color-picker": "IMDYIUa8MjxTvL6ulCDRH",
	"add-new-event": "_2ifVaXD66MjUPXyb3-xlNP",
	"external-event": "mPiNILXKdE9MnHd8PrES3",
	"select2-container--default": "_1LuEZh-F3aAHeeQ2AcRgNH",
	"select2-container--focus": "_3-FPJ6CmJwEofV5DMPwqUx",
	"select2-selection": "_2giP7igjMPgmX08WgRmjgk",
	"select2-selection--single": "_1YwJ9ccF0-JipQHmy9FtMd",
	"select2-container--open": "_3M0uELOgIiXX3kyrc4T7k3",
	"select2-dropdown": "_2PgYHjTAT4Dr6Lx9u986QT",
	"select2-results__option--highlighted": "_10_pzjCRW5dDjo7ZFStBY4",
	"select2-results__option": "_11vDVctPdNbvso1SJIhiVB",
	"select2-container": "_20j831VyoADTl_1el5zQnV",
	"select2-selection__rendered": "AcXxtxluNWhu2PYu8TiMv",
	"select2-selection__arrow": "_3HNV8CGx3OdOkY7rAUbKKC",
	"select2-search__field": "_2XroCGLIoSdNlGYEP7vLVI",
	"select2-search--inline": "_3yqbup0fjUYDWs9chMxvy3",
	"select2-selection--multiple": "NulrV5dzdCaaQ07jDSM0W",
	"select2-selection__choice": "_2ZqY7izAFnsmm8i1jzmf7Q",
	"select2-selection__choice__remove": "_3mLTFrSAmLA4rrMQod6DX6",
	"pad": "X7pvqdteFohnU-yOj0kr",
	"margin": "_2C9RtFSAiqEYAo43wpr9xE",
	"margin-bottom": "_4T4nPbLLSpVZiiTqGChoY",
	"margin-bottom-none": "De49md4bbTG1Bech1RN15",
	"margin-r-5": "_2c6YX_3VCLKTSR24DLipvD",
	"inline": "_2uowe2Ihp8jxc7Y_Qsu2ac",
	"description-block": "_1ewWpIOvDAuJ3s56NCwwIS",
	"description-header": "_1EuadU6Z-Vn1ay99nY6wTR",
	"description-text": "_2FyZeKMh7v5V7eC7NDdaZA",
	"bg-red": "_30anxYmYMGq6ceGhqEvr1q",
	"bg-yellow": "_16AkZSZrLWc0_6BcZh3agV",
	"bg-aqua": "_2S_TTXqNhf5TSUINasVZRg",
	"bg-blue": "EuedcC0vu8l_2uYKXL20b",
	"bg-light-blue": "_1Z1fuZkIOJ7YEybFPoaktT",
	"bg-green": "_3nTAhWupOcmSgnW-A78Ec1",
	"bg-navy": "_2AwByMnCYDW_ZS4dasffod",
	"bg-teal": "Iot_Rm8O-gzAtSDtzZzme",
	"bg-olive": "_3269i92uej1gEc8CEyvhku",
	"bg-lime": "_24__eS219ACPtIGjPzqDBR",
	"bg-orange": "gmpyXcXBLUELiTWxBQ075",
	"bg-fuchsia": "_1l5DK07ajqfaab2ZVFZklN",
	"bg-purple": "_3K0jppGZpCf4J-tdguzQsV",
	"bg-maroon": "_3zTu_zHh-TifKFsn8phKWU",
	"bg-black": "_2y3gSQe4GCtbx5nvb-T9RH",
	"bg-red-active": "_3ugrx6A21OiTiFzyYhvq4g",
	"bg-yellow-active": "_2NCrtujgO8fnyzWqriX-fW",
	"bg-aqua-active": "_2DB2n55RYRjO0wV6FZ0aKI",
	"bg-blue-active": "_2CmnoYImMZL6-v1bdHtSDd",
	"bg-light-blue-active": "p8AfLA66zCNagCNg1MRta",
	"bg-green-active": "TX9Zf4o8IHe_CsoFDGpLZ",
	"bg-navy-active": "_1QAT4cNwyIholBQ8g0tQCd",
	"bg-teal-active": "_1RzBA9IHvgogrxqJBXYY63",
	"bg-olive-active": "_2pgkviXP8oGmMc_lVL8ZzS",
	"bg-lime-active": "_1mB4aSDsmKVoyxA9r9SfqC",
	"bg-orange-active": "LDZnUsj4-CN9qCYqBTFqh",
	"bg-fuchsia-active": "_27fNdklVb1MMfqNCJDh5bw",
	"bg-purple-active": "Z5jL_wHl7SRsDlKmenaFp",
	"bg-maroon-active": "_3tJ-rYGqvQo-g_YEgklHBW",
	"bg-black-active": "_1Jr5rFqgN-iNaDcSUy_Cuw",
	"bg-gray": "_1T8K8RBmrYuV1ygJbZsG5j",
	"bg-gray-light": "_3h2qLWfyQ8KM7wSWruAa4a",
	"bg-gray-active": "_3C6i2rSF_WDalyY9h8208-",
	"text-red": "_3HpXKEJkpCv9vjD0_OM18C",
	"text-yellow": "_3bzOiR4JvGdazLkaUFRRs7",
	"text-aqua": "_3EcT50-t2Az2DZiOp6QhYq",
	"text-blue": "_10N4DFGsUR3jvrz39mKjNj",
	"text-black": "_3RIPoSWDPDsTzLRziLT7vl",
	"text-light-blue": "B-Oll6ivBUbzBUV0I_Urx",
	"text-green": "_13p_LVHlNmf_7psSbxpTwi",
	"text-gray": "_3pUagB0oYSTkQPADWbRma3",
	"text-navy": "_12FFomF8aL3ZMQ7mQqPxK-",
	"text-teal": "_2jrHsz_k3LQNAszgLwugox",
	"text-olive": "_6l8g5s0eInuthgvvzGBGX",
	"text-lime": "R-OBXHdrn1JF27LrRYzMK",
	"text-orange": "_258qCXB7F8zUqxvAwpHGNq",
	"text-fuchsia": "mztqsb3KBv74h-EOOcefP",
	"text-purple": "_3G3cwHKEW3r-WLMtYxbXKI",
	"text-maroon": "_2p5UPQnTwErsqKSW3IAS77",
	"link-muted": "_3C0oGTJmQWBpVuP8ZbRDR_",
	"link-black": "_1TknQOl69clL_ODX_OPR_g",
	"no-margin": "flPgpittbN6bcXF1IvwBi",
	"no-shadow": "_1peko5VelLMmgC4z1pb-0y",
	"list-group-unbordered": "_2XidmqHSR-Sl-bGhuhXLOy",
	"flat": "_2JKL7NHynAD0VSByj5Vtah",
	"text-bold": "_3T8XvKyi5QkvZ6W1Qqzp-T",
	"text-sm": "_2Y-xDqHum73H_PVSZU5baC",
	"jqstooltip": "_4MZn9NGdA2bm3wbZ_A1Cf",
	"bg-teal-gradient": "_2WrYpY8uPu_5Orz6rLfgFM",
	"bg-light-blue-gradient": "_2Q5EG3lm94Jy5xAwCnQ01r",
	"bg-blue-gradient": "_329mRj8QIPFuq9M3dcwgsw",
	"bg-aqua-gradient": "_1hz_q3_XNrR_Tba4MyZA8M",
	"bg-yellow-gradient": "_39QhmffgQ52Tf2quwyJ-SZ",
	"bg-purple-gradient": "_2j-wWL2X2nX79RV3Xus1n1",
	"bg-green-gradient": "_2d4OszHaoyJy8UL_RsqFuV",
	"bg-red-gradient": "_56_xlGMoQr8bBZltiix8b",
	"bg-black-gradient": "_2n4iyMy5AwOPEeqewYhdTE",
	"bg-maroon-gradient": "_2S4RipP6cviM7-7zX-RQU6",
	"description-icon": "_27Bibi21GbGU8C2jfd6Cb9",
	"no-pad-top": "MaH94CfzaNfUTABydPz0p",
	"position-static": "tIiqVkhc5my64VHczR6qc",
	"list-header": "_1P17x9pu6bUvlNY7eW5Q_7",
	"list-seperator": "_1VrnSn4Z8Zggv6-wwnRDu_",
	"list-link": "XZeoxBZhNMsGp9l0l-Ig6",
	"font-light": "_3H6fEFhhzYO4UX5DSLFT0X",
	"description": "_3UZytHolx5r7ocfXrcfGLL",
	"comment": "_9xBHX-dYZswVYvgFNFkuw",
	"user-block-sm": "pnheIUosEV-xJ_ht38w9w",
	"img-sm": "_26fx4jpKzC5ixe7yiO6J0Y",
	"img-md": "wzeW02sRNMg5FeEnlBsox",
	"img-lg": "_2NiQqGLFJikb1gJaaQSn1X",
	"img-push": "_5tdx56M573JkIA2wgXpar",
	"img-bordered": "_3Qi0nk4QPK2E07c6zSvdAL",
	"img-bordered-sm": "_5ebZplzJGMmcXB0ACHKsA",
	"attachment-block": "_1zJPe7M6ztNm2Bz1XT9YX3",
	"attachment-img": "AjF8VYPmiw7coYkUyG1xf",
	"attachment-pushed": "_3NC21Ru6FYxJjCckSuRJgF",
	"attachment-heading": "zzFTwreX-p09g8Jx-X9r9",
	"attachment-text": "_2c-fixKhotkxJIOQO42suV",
	"connectedSortable": "_3PsR4xZSUmbB9uK4B_67a",
	"ui-helper-hidden-accessible": "kNTaXOqaaSvqwXmA2tDmJ",
	"sort-highlight": "_3PRhl-UVAJFvMOLg-WOOKL",
	"full-opacity-hover": "_2crO1Q2meNsFSnCZGtbPC0",
	"chart": "_1Nyl5NhXALkFNrV2QzGYLl",
	"no-print": "_1FLoIyp79WPzR7Un1dsGlf",
	"invoice-col": "_2hSxLFnuOJNKlf7-oNm7jF"
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(25);

var ReactCurrentOwner = __webpack_require__(18);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
   true ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ?  true ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ?  true ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ?  true ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ?  true ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,

  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

module.exports = ReactComponentTreeHook;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.session = exports.passport = exports.controllers = exports.connect = undefined;

var _appConfig = __webpack_require__(29);

var _constants = __webpack_require__(50);

var dbConfig = null;

/* use inline requires for conditional loading */
switch (_appConfig.DB_TYPE) {
  case _constants.DB_TYPES.MONGO:
    dbConfig = __webpack_require__(170);
    break;
  case _constants.DB_TYPES.POSTGRES:
    dbConfig = __webpack_require__(179);
    break;
  case _constants.DB_TYPES.NONE:
    dbConfig = __webpack_require__(178);
    break;
  default:
    throw new Error('No database type \'' + _appConfig.DB_TYPE + '\' found');
}

var connect = exports.connect = dbConfig.connect;
var controllers = exports.controllers = dbConfig.controllers;
var passport = exports.passport = dbConfig.passport;
var session = exports.session = dbConfig.session;

exports.default = dbConfig.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var CallbackQueue = __webpack_require__(89);
var PooledClass = __webpack_require__(20);
var ReactFeatureFlags = __webpack_require__(254);
var ReactReconciler = __webpack_require__(35);
var Transaction = __webpack_require__(43);

var invariant = __webpack_require__(0);

var dirtyComponents = [];
var updateBatchNumber = 0;
var asapCallbackQueue = CallbackQueue.getPooled();
var asapEnqueued = false;

var batchingStrategy = null;

function ensureInjected() {
  !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ?  true ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching strategy') : _prodInvariant('123') : void 0;
}

var NESTED_UPDATES = {
  initialize: function () {
    this.dirtyComponentsLength = dirtyComponents.length;
  },
  close: function () {
    if (this.dirtyComponentsLength !== dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      dirtyComponents.splice(0, this.dirtyComponentsLength);
      flushBatchedUpdates();
    } else {
      dirtyComponents.length = 0;
    }
  }
};

var UPDATE_QUEUEING = {
  initialize: function () {
    this.callbackQueue.reset();
  },
  close: function () {
    this.callbackQueue.notifyAll();
  }
};

var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

function ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue.getPooled();
  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */true);
}

_assign(ReactUpdatesFlushTransaction.prototype, Transaction, {
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  destructor: function () {
    this.dirtyComponentsLength = null;
    CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function (method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return Transaction.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
  }
});

PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

function batchedUpdates(callback, a, b, c, d, e) {
  ensureInjected();
  return batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
}

/**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function mountOrderComparator(c1, c2) {
  return c1._mountOrder - c2._mountOrder;
}

function runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  !(len === dirtyComponents.length) ?  true ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).', len, dirtyComponents.length) : _prodInvariant('124', len, dirtyComponents.length) : void 0;

  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  dirtyComponents.sort(mountOrderComparator);

  // Any updates enqueued while reconciling must be performed after this entire
  // batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
  // C, B could update twice in a single batch if C's render enqueues an update
  // to B (since B would have already updated, we should skip it, and the only
  // way we can know to do so is by checking the batch counter).
  updateBatchNumber++;

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, it will still
    // be here, but we assume that it has cleared its _pendingCallbacks and
    // that performUpdateIfNecessary is a noop.
    var component = dirtyComponents[i];

    // If performUpdateIfNecessary happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = component._pendingCallbacks;
    component._pendingCallbacks = null;

    var markerName;
    if (ReactFeatureFlags.logTopLevelRenders) {
      var namedComponent = component;
      // Duck type TopLevelWrapper. This is probably always true.
      if (component._currentElement.type.isReactTopLevelWrapper) {
        namedComponent = component._renderedComponent;
      }
      markerName = 'React update: ' + namedComponent.getName();
      console.time(markerName);
    }

    ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, updateBatchNumber);

    if (markerName) {
      console.timeEnd(markerName);
    }

    if (callbacks) {
      for (var j = 0; j < callbacks.length; j++) {
        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
      }
    }
  }
}

var flushBatchedUpdates = function () {
  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
  // array and perform any updates enqueued by mount-ready handlers (i.e.,
  // componentDidUpdate) but we need to check here too in order to catch
  // updates enqueued by setState callbacks and asap calls.
  while (dirtyComponents.length || asapEnqueued) {
    if (dirtyComponents.length) {
      var transaction = ReactUpdatesFlushTransaction.getPooled();
      transaction.perform(runBatchedUpdates, null, transaction);
      ReactUpdatesFlushTransaction.release(transaction);
    }

    if (asapEnqueued) {
      asapEnqueued = false;
      var queue = asapCallbackQueue;
      asapCallbackQueue = CallbackQueue.getPooled();
      queue.notifyAll();
      CallbackQueue.release(queue);
    }
  }
};

/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function enqueueUpdate(component) {
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)

  if (!batchingStrategy.isBatchingUpdates) {
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }

  dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1;
  }
}

/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function asap(callback, context) {
  !batchingStrategy.isBatchingUpdates ?  true ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context whereupdates are not being batched.') : _prodInvariant('125') : void 0;
  asapCallbackQueue.enqueue(callback, context);
  asapEnqueued = true;
}

var ReactUpdatesInjection = {
  injectReconcileTransaction: function (ReconcileTransaction) {
    !ReconcileTransaction ?  true ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : _prodInvariant('126') : void 0;
    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function (_batchingStrategy) {
    !_batchingStrategy ?  true ? invariant(false, 'ReactUpdates: must provide a batching strategy') : _prodInvariant('127') : void 0;
    !(typeof _batchingStrategy.batchedUpdates === 'function') ?  true ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : _prodInvariant('128') : void 0;
    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ?  true ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : _prodInvariant('129') : void 0;
    batchingStrategy = _batchingStrategy;
  }
};

var ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: batchedUpdates,
  enqueueUpdate: enqueueUpdate,
  flushBatchedUpdates: flushBatchedUpdates,
  injection: ReactUpdatesInjection,
  asap: asap
};

module.exports = ReactUpdates;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var PooledClass = __webpack_require__(20);

var emptyFunction = __webpack_require__(10);
var warning = __webpack_require__(1);

var didWarnForAddedNewProperty = false;
var isProxySupported = typeof Proxy === 'function';

var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  target: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  if (true) {
    // these have a getter/setter for warnings
    delete this.nativeEvent;
    delete this.preventDefault;
    delete this.stopPropagation;
  }

  this.dispatchConfig = dispatchConfig;
  this._targetInst = targetInst;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    if (true) {
      delete this[propName]; // this has a getter/setter for warnings
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      if (propName === 'target') {
        this.target = nativeEventTarget;
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  return this;
}

_assign(SyntheticEvent.prototype, {
  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
      // eslint-disable-next-line valid-typeof
    } else if (typeof event.returnValue !== 'unknown') {
      event.returnValue = false;
    }
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
      // eslint-disable-next-line valid-typeof
    } else if (typeof event.cancelBubble !== 'unknown') {
      // The ChangeEventPlugin registers a "propertychange" event for
      // IE. This event does not support bubbling or cancelling, and
      // any references to cancelBubble throw "Member not found".  A
      // typeof check of "unknown" circumvents this issue (and is also
      // IE specific).
      event.cancelBubble = true;
    }

    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (true) {
        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
      } else {
        this[propName] = null;
      }
    }
    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
      this[shouldBeReleasedProperties[i]] = null;
    }
    if (true) {
      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
    }
  }
});

SyntheticEvent.Interface = EventInterface;

if (true) {
  if (isProxySupported) {
    /*eslint-disable no-func-assign */
    SyntheticEvent = new Proxy(SyntheticEvent, {
      construct: function (target, args) {
        return this.apply(target, Object.create(target.prototype), args);
      },
      apply: function (constructor, that, args) {
        return new Proxy(constructor.apply(that, args), {
          set: function (target, prop, value) {
            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
               true ? warning(didWarnForAddedNewProperty || target.isPersistent(), "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
              didWarnForAddedNewProperty = true;
            }
            target[prop] = value;
            return true;
          }
        });
      }
    });
    /*eslint-enable no-func-assign */
  }
}
/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var E = function () {};
  E.prototype = Super.prototype;
  var prototype = new E();

  _assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = _assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
};

PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

module.exports = SyntheticEvent;

/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */
function getPooledWarningPropertyDefinition(propName, getVal) {
  var isFunction = typeof getVal === 'function';
  return {
    configurable: true,
    set: set,
    get: get
  };

  function set(val) {
    var action = isFunction ? 'setting the method' : 'setting the property';
    warn(action, 'This is effectively a no-op');
    return val;
  }

  function get() {
    var action = isFunction ? 'accessing the method' : 'accessing the property';
    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
    warn(action, result);
    return getVal;
  }

  function warn(action, result) {
    var warningCondition = false;
     true ? warning(warningCondition, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appConfig = __webpack_require__(29);

exports.default = function (featureName) {
  return 'Attempted to use \'' + featureName + '\' but DB type \'' + _appConfig.DB_TYPE + '\' doesn\'t support it';
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ?  true ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var ReactCurrentOwner = __webpack_require__(18);

var warning = __webpack_require__(1);
var canDefineProperty = __webpack_require__(45);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(111);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
       true ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
       true ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (true) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (true) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (true) {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptNodejs = __webpack_require__(313);

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _mongoose = __webpack_require__(47);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Other oauthtypes to be added

/*
 User Schema
 */

/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

var UserSchema = new _mongoose2.default.Schema({
  username: { type: String, unique: true, lowercase: true },
  password: String,
  group: { type: Number, required: true }
});

function encryptPassword(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  return _bcryptNodejs2.default.genSalt(5, function (saltErr, salt) {
    if (saltErr) return next(saltErr);
    return _bcryptNodejs2.default.hash(user.password, salt, null, function (hashErr, hash) {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

UserSchema.virtual('userId').get(function () {
  return this.id;
});

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword: function comparePassword(candidatePassword, cb) {
    _bcryptNodejs2.default.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

exports.default = _mongoose2.default.model('User', UserSchema);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, __dirname) {

var _fs = __webpack_require__(72);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(38);

var _path2 = _interopRequireDefault(_path);

var _sequelize = __webpack_require__(346);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize_config = __webpack_require__(82);

var _sequelize_config2 = _interopRequireDefault(_sequelize_config);

var _appConfig = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _sequelize_config2.default[_appConfig.ENV];
var basename = _path2.default.basename(module.filename);
var db = {};
var sequelize = void 0;

var dbUrl = process.env[config.use_env_variable];
if (dbUrl) {
  sequelize = new _sequelize2.default(dbUrl);
} else {
  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);
}

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize.import(_path2.default.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

module.exports = db;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(311)(module), "../server/db/sequelize/models"))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(38);

/*
 * __dirname is changed after webpack-ed to another directory
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */
var CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'app'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
  compiled: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
  public: '/assets/', // use absolute path for css-loader?
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(118);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var title = _ref.title,
      link = _ref.link,
      meta = _ref.meta,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: title, link: link, meta: meta }),
    children
  );
};

Page.propTypes = {
  title: _propTypes2.default.string,
  link: _propTypes2.default.array,
  meta: _propTypes2.default.array
};

exports.default = Page;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Use this old export style until sequelize cli supports es6 syntax */
var DB_TYPES = __webpack_require__(50).DB_TYPES;

/*
 * Set DB_TYPE to a database of your choice:
 * - MONGO: MongoDB
 * - POSTGRES: Postgresql
 * - NONE: There is no DB connection
 */

function defaultExport() {}

defaultExport.DB_TYPE = process.env.DB_TYPE || DB_TYPES.MONGO;
defaultExport.ENV = "development" || 'development';

module.exports = defaultExport;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RefreshTokenModel = exports.AccessTokenModel = exports.ClientModel = undefined;

var _mongoose = __webpack_require__(47);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Client

var ClientModel = exports.ClientModel = _mongoose2.default.model('Client', new _mongoose2.default.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    clientId: {
        type: String,
        unique: true,
        required: true
    },
    clientSecret: {
        type: String,
        required: true
    }
}));

// AccessToken

var AccessTokenModel = exports.AccessTokenModel = _mongoose2.default.model('AccessToken', new _mongoose2.default.Schema({
    userId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        unique: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
}));

// RefreshToken

var RefreshTokenModel = exports.RefreshTokenModel = _mongoose2.default.model('RefreshToken', new _mongoose2.default.Schema({
    userId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        unique: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
}));

exports.default = {
    ClientModel: ClientModel,
    AccessTokenModel: AccessTokenModel,
    RefreshTokenModel: RefreshTokenModel
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMNamespaces = __webpack_require__(54);
var setInnerHTML = __webpack_require__(68);

var createMicrosoftUnsafeLocalFunction = __webpack_require__(63);
var setTextContent = __webpack_require__(107);

var ELEMENT_NODE_TYPE = 1;
var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

/**
 * In IE (8-11) and Edge, appending nodes with no children is dramatically
 * faster than appending a full subtree, so we essentially queue up the
 * .appendChild calls here and apply them so each node is added to its parent
 * before any children are added.
 *
 * In other browsers, doing so is slower or neutral compared to the other order
 * (in Firefox, twice as slow) so we only do this inversion in IE.
 *
 * See https://github.com/spicyj/innerhtml-vs-createelement-vs-clonenode.
 */
var enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);

function insertTreeChildren(tree) {
  if (!enableLazy) {
    return;
  }
  var node = tree.node;
  var children = tree.children;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      insertTreeBefore(node, children[i], null);
    }
  } else if (tree.html != null) {
    setInnerHTML(node, tree.html);
  } else if (tree.text != null) {
    setTextContent(node, tree.text);
  }
}

var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) {
  // DocumentFragments aren't actually part of the DOM after insertion so
  // appending children won't update the DOM. We need to ensure the fragment
  // is properly populated first, breaking out of our lazy approach for just
  // this level. Also, some <object> plugins (like Flash Player) will read
  // <param> nodes immediately upon insertion into the DOM, so <object>
  // must also be populated prior to insertion into the DOM.
  if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object' && (tree.node.namespaceURI == null || tree.node.namespaceURI === DOMNamespaces.html)) {
    insertTreeChildren(tree);
    parentNode.insertBefore(tree.node, referenceNode);
  } else {
    parentNode.insertBefore(tree.node, referenceNode);
    insertTreeChildren(tree);
  }
});

function replaceChildWithTree(oldNode, newTree) {
  oldNode.parentNode.replaceChild(newTree.node, oldNode);
  insertTreeChildren(newTree);
}

function queueChild(parentTree, childTree) {
  if (enableLazy) {
    parentTree.children.push(childTree);
  } else {
    parentTree.node.appendChild(childTree.node);
  }
}

function queueHTML(tree, html) {
  if (enableLazy) {
    tree.html = html;
  } else {
    setInnerHTML(tree.node, html);
  }
}

function queueText(tree, text) {
  if (enableLazy) {
    tree.text = text;
  } else {
    setTextContent(tree.node, text);
  }
}

function toString() {
  return this.node.nodeName;
}

function DOMLazyTree(node) {
  return {
    node: node,
    children: [],
    html: null,
    text: null,
    toString: toString
  };
}

DOMLazyTree.insertTreeBefore = insertTreeBefore;
DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
DOMLazyTree.queueChild = queueChild;
DOMLazyTree.queueHTML = queueHTML;
DOMLazyTree.queueText = queueText;

module.exports = DOMLazyTree;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }

    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ?  true ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : _prodInvariant('48', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ?  true ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : _prodInvariant('50', propName) : void 0;

      if (true) {
        DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if (true) {
          DOMProperty.getPossibleStandardName[attributeName] = propName;
        }
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   *
   * autofocus is predefined, because adding it to the property whitelist
   * causes unintended side effects.
   *
   * @type {Object}
   */
  getPossibleStandardName:  true ? { autofocus: 'autoFocus' } : null,

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  injection: DOMPropertyInjection
};

module.exports = DOMProperty;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var EventPluginRegistry = __webpack_require__(55);
var EventPluginUtils = __webpack_require__(56);
var ReactErrorUtils = __webpack_require__(61);

var accumulateInto = __webpack_require__(101);
var forEachAccumulated = __webpack_require__(102);
var invariant = __webpack_require__(0);

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var executeDispatchesAndReleaseSimulated = function (e) {
  return executeDispatchesAndRelease(e, true);
};
var executeDispatchesAndReleaseTopLevel = function (e) {
  return executeDispatchesAndRelease(e, false);
};

var getDictionaryKey = function (inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
};

function isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

function shouldPreventMouseEvent(name, type, props) {
  switch (name) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
      return !!(props.disabled && isInteractive(type));
    default:
      return false;
  }
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = {
  /**
   * Methods for injecting dependencies.
   */
  injection: {
    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
  },

  /**
   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */
  putListener: function (inst, registrationName, listener) {
    !(typeof listener === 'function') ?  true ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : _prodInvariant('94', registrationName, typeof listener) : void 0;

    var key = getDictionaryKey(inst);
    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[key] = listener;

    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(inst, registrationName, listener);
    }
  },

  /**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function (inst, registrationName) {
    // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
    // live here; needs to be moved to a better place soon
    var bankForRegistrationName = listenerBank[registrationName];
    if (shouldPreventMouseEvent(registrationName, inst._currentElement.type, inst._currentElement.props)) {
      return null;
    }
    var key = getDictionaryKey(inst);
    return bankForRegistrationName && bankForRegistrationName[key];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (inst, registrationName) {
    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(inst, registrationName);
    }

    var bankForRegistrationName = listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      var key = getDictionaryKey(inst);
      delete bankForRegistrationName[key];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */
  deleteAllListeners: function (inst) {
    var key = getDictionaryKey(inst);
    for (var registrationName in listenerBank) {
      if (!listenerBank.hasOwnProperty(registrationName)) {
        continue;
      }

      if (!listenerBank[registrationName][key]) {
        continue;
      }

      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);
      }

      delete listenerBank[registrationName][key];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function (events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function (simulated) {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    if (simulated) {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
    } else {
      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
    }
    !!eventQueue ?  true ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : _prodInvariant('95') : void 0;
    // This would be a good time to rethrow if any of the event handlers threw.
    ReactErrorUtils.rethrowCaughtError();
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    listenerBank = {};
  },

  __getListenerBank: function () {
    return listenerBank;
  }
};

module.exports = EventPluginHub;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPluginHub = __webpack_require__(33);
var EventPluginUtils = __webpack_require__(56);

var accumulateInto = __webpack_require__(101);
var forEachAccumulated = __webpack_require__(102);
var warning = __webpack_require__(1);

var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(inst, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(inst, phase, event) {
  if (true) {
     true ? warning(inst, 'Dispatching inst must not be null') : void 0;
  }
  var listener = listenerAtPhase(inst, event, phase);
  if (listener) {
    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
    EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(inst, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event._targetInst, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function accumulateEnterLeaveDispatches(leave, enter, from, to) {
  EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
}

function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}

/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = {
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
  accumulateDirectDispatches: accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
};

module.exports = EventPropagators;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactRef = __webpack_require__(264);
var ReactInstrumentation = __webpack_require__(11);

var warning = __webpack_require__(1);

/**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */
function attachRefs() {
  ReactRef.attachRefs(this, this._currentElement);
}

var ReactReconciler = {
  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} the containing host component instance
   * @param {?object} info about the host container
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID) // 0 in production and for roots
  {
    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID, internalInstance._currentElement, parentDebugID);
      }
    }
    var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
    }
    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
      }
    }
    return markup;
  },

  /**
   * Returns a value that can be passed to
   * ReactComponentEnvironment.replaceNodeWithMarkup.
   */
  getHostNode: function (internalInstance) {
    return internalInstance.getHostNode();
  },

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (internalInstance, safely) {
    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
      }
    }
    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
    internalInstance.unmountComponent(safely);
    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
      }
    }
  },

  /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */
  receiveComponent: function (internalInstance, nextElement, transaction, context) {
    var prevElement = internalInstance._currentElement;

    if (nextElement === prevElement && context === internalInstance._context) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for an element created outside a composite to be
      // deeply mutated and reused.

      // TODO: Bailing out early is just a perf optimization right?
      // TODO: Removing the return statement should affect correctness?
      return;
    }

    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, nextElement);
      }
    }

    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

    if (refsChanged) {
      ReactRef.detachRefs(internalInstance, prevElement);
    }

    internalInstance.receiveComponent(nextElement, transaction, context);

    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
    }

    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
      }
    }
  },

  /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (internalInstance, transaction, updateBatchNumber) {
    if (internalInstance._updateBatchNumber !== updateBatchNumber) {
      // The component's enqueued batch number should always be the current
      // batch or the following one.
       true ? warning(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1, 'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 'pending %s)', updateBatchNumber, internalInstance._updateBatchNumber) : void 0;
      return;
    }
    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, internalInstance._currentElement);
      }
    }
    internalInstance.performUpdateIfNecessary(transaction);
    if (true) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
      }
    }
  }
};

module.exports = ReactReconciler;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(16);

var getEventTarget = __webpack_require__(66);

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = {
  view: function (event) {
    if (event.view) {
      return event.view;
    }

    var target = getEventTarget(event);
    if (target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function (event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var ReactBaseClasses = __webpack_require__(110);
var ReactChildren = __webpack_require__(294);
var ReactDOMFactories = __webpack_require__(295);
var ReactElement = __webpack_require__(21);
var ReactPropTypes = __webpack_require__(297);
var ReactVersion = __webpack_require__(299);

var createReactClass = __webpack_require__(301);
var onlyChild = __webpack_require__(303);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (true) {
  var lowPriorityWarning = __webpack_require__(70);
  var canDefineProperty = __webpack_require__(45);
  var ReactElementValidator = __webpack_require__(112);
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (true) {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (true) {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackingID = exports.apiEndpoint = exports.isClient = exports.isDebug = exports.isProduction = undefined;

var _env = __webpack_require__(79);

var isProduction = exports.isProduction = _env.ENV === 'production';
var isDebug = exports.isDebug = _env.ENV === 'development';
var isClient = exports.isClient = typeof window !== 'undefined';

var apiEndpoint = exports.apiEndpoint = isDebug ? 'http://localhost' : 'https://demo-reactgo.herokuapp.com';
// Replace with 'UA-########-#' or similar to enable tracking
var trackingID = exports.trackingID = null;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.passwordLogin = passwordLogin;
exports.refreshLogin = refreshLogin;
exports.logOut = logOut;

var _es6Promise = __webpack_require__(71);

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterRedux = __webpack_require__(49);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _es6Promise.polyfill)();

function passwordLogin(data) {
  return {
    type: types.PASSWORD_LOGIN,
    request: {
      method: 'post',
      url: '/login',
      data: _extends({
        grant_type: 'password'
      }, data)
    }
  };
}

function refreshLogin(refresh_token, lastAction) {
  return {
    type: types.REFRESH_LOGIN,
    request: {
      method: 'post',
      url: '/login',
      data: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }
    },
    lastAction: lastAction
  };
}

function logOut() {
  return {
    type: types.USER_LOGOUT,
    request: {
      method: 'post',
      url: '/logout'
    }
  };
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticUIEvent = __webpack_require__(36);
var ViewportMetrics = __webpack_require__(100);

var getEventModifierState = __webpack_require__(65);

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var MouseEventInterface = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: getEventModifierState,
  button: function (event) {
    // Webkit, Firefox, IE9+
    // which:  1 2 3
    // button: 0 1 2 (standard)
    var button = event.button;
    if ('which' in event) {
      return button;
    }
    // IE<9
    // which:  undefined
    // button: 0 0 0
    // button: 1 4 2 (onmouseup)
    return button === 2 ? 2 : button === 4 ? 1 : 0;
  },
  buttons: null,
  relatedTarget: function (event) {
    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
  },
  // "Proprietary" Interface.
  pageX: function (event) {
    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
  },
  pageY: function (event) {
    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

module.exports = SyntheticMouseEvent;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

var OBSERVED_ERROR = {};

/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */
var TransactionImpl = {
  /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
  reinitializeTransaction: function () {
    this.transactionWrappers = this.getTransactionWrappers();
    if (this.wrapperInitData) {
      this.wrapperInitData.length = 0;
    } else {
      this.wrapperInitData = [];
    }
    this._isInTransaction = false;
  },

  _isInTransaction: false,

  /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
  getTransactionWrappers: null,

  isInTransaction: function () {
    return !!this._isInTransaction;
  },

  /* eslint-disable space-before-function-paren */

  /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */
  perform: function (method, scope, a, b, c, d, e, f) {
    /* eslint-enable space-before-function-paren */
    !!this.isInTransaction() ?  true ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.') : _prodInvariant('27') : void 0;
    var errorThrown;
    var ret;
    try {
      this._isInTransaction = true;
      // Catching errors makes debugging more difficult, so we start with
      // errorThrown set to true before setting it to false after calling
      // close -- if it's still set to true in the finally block, it means
      // one of these calls threw.
      errorThrown = true;
      this.initializeAll(0);
      ret = method.call(scope, a, b, c, d, e, f);
      errorThrown = false;
    } finally {
      try {
        if (errorThrown) {
          // If `method` throws, prefer to show that stack trace over any thrown
          // by invoking `closeAll`.
          try {
            this.closeAll(0);
          } catch (err) {}
        } else {
          // Since `method` didn't throw, we don't want to silence the exception
          // here.
          this.closeAll(0);
        }
      } finally {
        this._isInTransaction = false;
      }
    }
    return ret;
  },

  initializeAll: function (startIndex) {
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      try {
        // Catching errors makes debugging more difficult, so we start with the
        // OBSERVED_ERROR state before overwriting it with the real return value
        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
        // block, it means wrapper.initialize threw.
        this.wrapperInitData[i] = OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
      } finally {
        if (this.wrapperInitData[i] === OBSERVED_ERROR) {
          // The initializer for wrapper i threw an error; initialize the
          // remaining wrappers but silence any exceptions from them to ensure
          // that the first error is the one to bubble up.
          try {
            this.initializeAll(i + 1);
          } catch (err) {}
        }
      }
    }
  },

  /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
  closeAll: function (startIndex) {
    !this.isInTransaction() ?  true ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : _prodInvariant('28') : void 0;
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      var initData = this.wrapperInitData[i];
      var errorThrown;
      try {
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // wrapper.close threw.
        errorThrown = true;
        if (initData !== OBSERVED_ERROR && wrapper.close) {
          wrapper.close.call(this, initData);
        }
        errorThrown = false;
      } finally {
        if (errorThrown) {
          // The closer for wrapper i threw an error; close the remaining
          // wrappers but silence any exceptions from them to ensure that the
          // first error is the one to bubble up.
          try {
            this.closeAll(i + 1);
          } catch (e) {}
        }
      }
    }
    this.wrapperInitData.length = 0;
  }
};

module.exports = TransactionImpl;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */



// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

module.exports = escapeTextContentForBrowser;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var canDefineProperty = false;
if (true) {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Use this old export style until sequelize cli supports es6 syntax */
function defaultExport() {}

defaultExport.DB_TYPES = {
  MONGO: 'MONGO',
  POSTGRES: 'POSTGRES',
  NONE: 'NONE'
};

module.exports = defaultExport;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var db = exports.db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackNode';
var expires_in = exports.expires_in = 3600;

exports.default = {
  db: db
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMLazyTree = __webpack_require__(31);
var Danger = __webpack_require__(230);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactInstrumentation = __webpack_require__(11);

var createMicrosoftUnsafeLocalFunction = __webpack_require__(63);
var setInnerHTML = __webpack_require__(68);
var setTextContent = __webpack_require__(107);

function getNodeAfter(parentNode, node) {
  // Special case for text components, which return [open, close] comments
  // from getHostNode.
  if (Array.isArray(node)) {
    node = node[1];
  }
  return node ? node.nextSibling : parentNode.firstChild;
}

/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
var insertChildAt = createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
  // We rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
  // we are careful to use `null`.)
  parentNode.insertBefore(childNode, referenceNode);
});

function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
  DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
}

function moveChild(parentNode, childNode, referenceNode) {
  if (Array.isArray(childNode)) {
    moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
  } else {
    insertChildAt(parentNode, childNode, referenceNode);
  }
}

function removeChild(parentNode, childNode) {
  if (Array.isArray(childNode)) {
    var closingComment = childNode[1];
    childNode = childNode[0];
    removeDelimitedText(parentNode, childNode, closingComment);
    parentNode.removeChild(closingComment);
  }
  parentNode.removeChild(childNode);
}

function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
  var node = openingComment;
  while (true) {
    var nextNode = node.nextSibling;
    insertChildAt(parentNode, node, referenceNode);
    if (node === closingComment) {
      break;
    }
    node = nextNode;
  }
}

function removeDelimitedText(parentNode, startNode, closingComment) {
  while (true) {
    var node = startNode.nextSibling;
    if (node === closingComment) {
      // The closing comment is removed by ReactMultiChild.
      break;
    } else {
      parentNode.removeChild(node);
    }
  }
}

function replaceDelimitedText(openingComment, closingComment, stringText) {
  var parentNode = openingComment.parentNode;
  var nodeAfterComment = openingComment.nextSibling;
  if (nodeAfterComment === closingComment) {
    // There are no text nodes between the opening and closing comments; insert
    // a new one if stringText isn't empty.
    if (stringText) {
      insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
    }
  } else {
    if (stringText) {
      // Set the text content of the first node after the opening comment, and
      // remove all following nodes up until the closing comment.
      setTextContent(nodeAfterComment, stringText);
      removeDelimitedText(parentNode, nodeAfterComment, closingComment);
    } else {
      removeDelimitedText(parentNode, openingComment, closingComment);
    }
  }

  if (true) {
    ReactInstrumentation.debugTool.onHostOperation({
      instanceID: ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID,
      type: 'replace text',
      payload: stringText
    });
  }
}

var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
if (true) {
  dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
    Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
    if (prevInstance._debugID !== 0) {
      ReactInstrumentation.debugTool.onHostOperation({
        instanceID: prevInstance._debugID,
        type: 'replace with',
        payload: markup.toString()
      });
    } else {
      var nextInstance = ReactDOMComponentTree.getInstanceFromNode(markup.node);
      if (nextInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onHostOperation({
          instanceID: nextInstance._debugID,
          type: 'mount',
          payload: markup.toString()
        });
      }
    }
  };
}

/**
 * Operations for updating with DOM children.
 */
var DOMChildrenOperations = {
  dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup,

  replaceDelimitedText: replaceDelimitedText,

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  processUpdates: function (parentNode, updates) {
    if (true) {
      var parentNodeDebugID = ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
    }

    for (var k = 0; k < updates.length; k++) {
      var update = updates[k];
      switch (update.type) {
        case 'INSERT_MARKUP':
          insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
          if (true) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'insert child',
              payload: {
                toIndex: update.toIndex,
                content: update.content.toString()
              }
            });
          }
          break;
        case 'MOVE_EXISTING':
          moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
          if (true) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'move child',
              payload: { fromIndex: update.fromIndex, toIndex: update.toIndex }
            });
          }
          break;
        case 'SET_MARKUP':
          setInnerHTML(parentNode, update.content);
          if (true) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'replace children',
              payload: update.content.toString()
            });
          }
          break;
        case 'TEXT_CONTENT':
          setTextContent(parentNode, update.content);
          if (true) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'replace text',
              payload: update.content.toString()
            });
          }
          break;
        case 'REMOVE_NODE':
          removeChild(parentNode, update.fromNode);
          if (true) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'remove child',
              payload: { fromIndex: update.fromIndex }
            });
          }
          break;
      }
    }
  }
};

module.exports = DOMChildrenOperations;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMNamespaces = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg'
};

module.exports = DOMNamespaces;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

/**
 * Injectable ordering of event plugins.
 */
var eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var pluginModule = namesToPlugins[pluginName];
    var pluginIndex = eventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ?  true ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : _prodInvariant('96', pluginName) : void 0;
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !pluginModule.extractEvents ?  true ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : _prodInvariant('97', pluginName) : void 0;
    EventPluginRegistry.plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ?  true ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : _prodInvariant('98', eventName, pluginName) : void 0;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ?  true ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : _prodInvariant('99', eventName) : void 0;
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, pluginModule, eventName) {
  !!EventPluginRegistry.registrationNameModules[registrationName] ?  true ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : _prodInvariant('100', registrationName) : void 0;
  EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  if (true) {
    var lowerCasedName = registrationName.toLowerCase();
    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {
  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in __DEV__.
   * @type {Object}
   */
  possibleRegistrationNames:  true ? {} : null,
  // Trust the developer to only use possibleRegistrationNames in __DEV__

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (injectedEventPluginOrder) {
    !!eventPluginOrder ?  true ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : _prodInvariant('101') : void 0;
    // Clone the ordering so it cannot be dynamically mutated.
    eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var pluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
        !!namesToPlugins[pluginName] ?  true ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : _prodInvariant('102', pluginName) : void 0;
        namesToPlugins[pluginName] = pluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function (event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
    }
    if (dispatchConfig.phasedRegistrationNames !== undefined) {
      // pulling phasedRegistrationNames out of dispatchConfig helps Flow see
      // that it is not undefined.
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;

      for (var phase in phasedRegistrationNames) {
        if (!phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var pluginModule = EventPluginRegistry.registrationNameModules[phasedRegistrationNames[phase]];
        if (pluginModule) {
          return pluginModule;
        }
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    eventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];
      }
    }
    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }

    if (true) {
      var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
      for (var lowerCasedName in possibleRegistrationNames) {
        if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
          delete possibleRegistrationNames[lowerCasedName];
        }
      }
    }
  }
};

module.exports = EventPluginRegistry;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var ReactErrorUtils = __webpack_require__(61);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

/**
 * Injected dependencies:
 */

/**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */
var ComponentTree;
var TreeTraversal;
var injection = {
  injectComponentTree: function (Injected) {
    ComponentTree = Injected;
    if (true) {
       true ? warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
    }
  },
  injectTreeTraversal: function (Injected) {
    TreeTraversal = Injected;
    if (true) {
       true ? warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
    }
  }
};

function isEndish(topLevelType) {
  return topLevelType === 'topMouseUp' || topLevelType === 'topTouchEnd' || topLevelType === 'topTouchCancel';
}

function isMoveish(topLevelType) {
  return topLevelType === 'topMouseMove' || topLevelType === 'topTouchMove';
}
function isStartish(topLevelType) {
  return topLevelType === 'topMouseDown' || topLevelType === 'topTouchStart';
}

var validateEventDispatches;
if (true) {
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

     true ? warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function executeDispatch(event, simulated, listener, inst) {
  var type = event.type || 'unknown-event';
  event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
  if (simulated) {
    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
  } else {
    ReactErrorUtils.invokeGuardedCallback(type, listener, event);
  }
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (true) {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
    }
  } else if (dispatchListeners) {
    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
  }
  event._dispatchListeners = null;
  event._dispatchInstances = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (true) {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchInstances[i])) {
        return dispatchInstances[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchInstances)) {
      return dispatchInstances;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchInstances = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if (true) {
    validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchInstance = event._dispatchInstances;
  !!Array.isArray(dispatchListener) ?  true ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : _prodInvariant('103') : void 0;
  event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
  var res = dispatchListener ? dispatchListener(event) : null;
  event.currentTarget = null;
  event._dispatchListeners = null;
  event._dispatchInstances = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = {
  isEndish: isEndish,
  isMoveish: isMoveish,
  isStartish: isStartish,

  executeDirectDispatch: executeDirectDispatch,
  executeDispatchesInOrder: executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
  hasDispatches: hasDispatches,

  getInstanceFromNode: function (node) {
    return ComponentTree.getInstanceFromNode(node);
  },
  getNodeFromInstance: function (node) {
    return ComponentTree.getNodeFromInstance(node);
  },
  isAncestor: function (a, b) {
    return TreeTraversal.isAncestor(a, b);
  },
  getLowestCommonAncestor: function (a, b) {
    return TreeTraversal.getLowestCommonAncestor(a, b);
  },
  getParentInstance: function (inst) {
    return TreeTraversal.getParentInstance(inst);
  },
  traverseTwoPhase: function (target, fn, arg) {
    return TreeTraversal.traverseTwoPhase(target, fn, arg);
  },
  traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
    return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
  },

  injection: injection
};

module.exports = EventPluginUtils;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var ReactPropTypesSecret = __webpack_require__(97);
var propTypesFactory = __webpack_require__(86);

var React = __webpack_require__(37);
var PropTypes = propTypesFactory(React.isValidElement);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};

function _assertSingleLink(inputProps) {
  !(inputProps.checkedLink == null || inputProps.valueLink == null) ?  true ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.') : _prodInvariant('87') : void 0;
}
function _assertValueLink(inputProps) {
  _assertSingleLink(inputProps);
  !(inputProps.value == null && inputProps.onChange == null) ?  true ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.') : _prodInvariant('88') : void 0;
}

function _assertCheckedLink(inputProps) {
  _assertSingleLink(inputProps);
  !(inputProps.checked == null && inputProps.onChange == null) ?  true ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink') : _prodInvariant('89') : void 0;
}

var propTypes = {
  value: function (props, propName, componentName) {
    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
      return null;
    }
    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
  },
  checked: function (props, propName, componentName) {
    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
      return null;
    }
    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
  },
  onChange: PropTypes.func
};

var loggedTypeFailures = {};
function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
var LinkedValueUtils = {
  checkPropTypes: function (tagName, props, owner) {
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error = propTypes[propName](props, propName, tagName, 'prop', null, ReactPropTypesSecret);
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var addendum = getDeclarationErrorAddendum(owner);
         true ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
      }
    }
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function (inputProps) {
    if (inputProps.valueLink) {
      _assertValueLink(inputProps);
      return inputProps.valueLink.value;
    }
    return inputProps.value;
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
  getChecked: function (inputProps) {
    if (inputProps.checkedLink) {
      _assertCheckedLink(inputProps);
      return inputProps.checkedLink.value;
    }
    return inputProps.checked;
  },

  /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */
  executeOnChange: function (inputProps, event) {
    if (inputProps.valueLink) {
      _assertValueLink(inputProps);
      return inputProps.valueLink.requestChange(event.target.value);
    } else if (inputProps.checkedLink) {
      _assertCheckedLink(inputProps);
      return inputProps.checkedLink.requestChange(event.target.checked);
    } else if (inputProps.onChange) {
      return inputProps.onChange.call(undefined, event);
    }
  }
};

module.exports = LinkedValueUtils;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var EventPluginRegistry = __webpack_require__(55);
var ReactEventEmitterMixin = __webpack_require__(252);
var ViewportMetrics = __webpack_require__(100);

var getVendorPrefixedEventName = __webpack_require__(289);
var isEventSupported = __webpack_require__(67);

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var hasEventPageXY;
var alreadyListeningTo = {};
var isMonitoringScrollValue = false;
var reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping = {
  topAbort: 'abort',
  topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend',
  topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration',
  topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart',
  topBlur: 'blur',
  topCanPlay: 'canplay',
  topCanPlayThrough: 'canplaythrough',
  topChange: 'change',
  topClick: 'click',
  topCompositionEnd: 'compositionend',
  topCompositionStart: 'compositionstart',
  topCompositionUpdate: 'compositionupdate',
  topContextMenu: 'contextmenu',
  topCopy: 'copy',
  topCut: 'cut',
  topDoubleClick: 'dblclick',
  topDrag: 'drag',
  topDragEnd: 'dragend',
  topDragEnter: 'dragenter',
  topDragExit: 'dragexit',
  topDragLeave: 'dragleave',
  topDragOver: 'dragover',
  topDragStart: 'dragstart',
  topDrop: 'drop',
  topDurationChange: 'durationchange',
  topEmptied: 'emptied',
  topEncrypted: 'encrypted',
  topEnded: 'ended',
  topError: 'error',
  topFocus: 'focus',
  topInput: 'input',
  topKeyDown: 'keydown',
  topKeyPress: 'keypress',
  topKeyUp: 'keyup',
  topLoadedData: 'loadeddata',
  topLoadedMetadata: 'loadedmetadata',
  topLoadStart: 'loadstart',
  topMouseDown: 'mousedown',
  topMouseMove: 'mousemove',
  topMouseOut: 'mouseout',
  topMouseOver: 'mouseover',
  topMouseUp: 'mouseup',
  topPaste: 'paste',
  topPause: 'pause',
  topPlay: 'play',
  topPlaying: 'playing',
  topProgress: 'progress',
  topRateChange: 'ratechange',
  topScroll: 'scroll',
  topSeeked: 'seeked',
  topSeeking: 'seeking',
  topSelectionChange: 'selectionchange',
  topStalled: 'stalled',
  topSuspend: 'suspend',
  topTextInput: 'textInput',
  topTimeUpdate: 'timeupdate',
  topTouchCancel: 'touchcancel',
  topTouchEnd: 'touchend',
  topTouchMove: 'touchmove',
  topTouchStart: 'touchstart',
  topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting',
  topWheel: 'wheel'
};

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

function getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
    mountAt[topListenersIDKey] = reactTopListenersCounter++;
    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
  }
  return alreadyListeningTo[mountAt[topListenersIDKey]];
}

/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   EventPluginHub.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */
var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, {
  /**
   * Injectable event backend
   */
  ReactEventListener: null,

  injection: {
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function (ReactEventListener) {
      ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
    }
  },

  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function (enabled) {
    if (ReactBrowserEventEmitter.ReactEventListener) {
      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
    }
  },

  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function () {
    return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
  },

  /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
  listenTo: function (registrationName, contentDocumentHandle) {
    var mountAt = contentDocumentHandle;
    var isListening = getListeningForDocument(mountAt);
    var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

    for (var i = 0; i < dependencies.length; i++) {
      var dependency = dependencies[i];
      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
        if (dependency === 'topWheel') {
          if (isEventSupported('wheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'wheel', mountAt);
          } else if (isEventSupported('mousewheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'mousewheel', mountAt);
          } else {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'DOMMouseScroll', mountAt);
          }
        } else if (dependency === 'topScroll') {
          if (isEventSupported('scroll', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topScroll', 'scroll', mountAt);
          } else {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topScroll', 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
          }
        } else if (dependency === 'topFocus' || dependency === 'topBlur') {
          if (isEventSupported('focus', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topFocus', 'focus', mountAt);
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topBlur', 'blur', mountAt);
          } else if (isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topFocus', 'focusin', mountAt);
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topBlur', 'focusout', mountAt);
          }

          // to make sure blur and focus event listeners are only attached once
          isListening.topBlur = true;
          isListening.topFocus = true;
        } else if (topEventMapping.hasOwnProperty(dependency)) {
          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
        }

        isListening[dependency] = true;
      }
    }
  },

  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
  },

  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
  },

  /**
   * Protect against document.createEvent() returning null
   * Some popup blocker extensions appear to do this:
   * https://github.com/facebook/react/issues/6887
   */
  supportsEventPageXY: function () {
    if (!document.createEvent) {
      return false;
    }
    var ev = document.createEvent('MouseEvent');
    return ev != null && 'pageX' in ev;
  },

  /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
   * pageX/pageY isn't supported (legacy browsers).
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
  ensureScrollValueMonitoring: function () {
    if (hasEventPageXY === undefined) {
      hasEventPageXY = ReactBrowserEventEmitter.supportsEventPageXY();
    }
    if (!hasEventPageXY && !isMonitoringScrollValue) {
      var refresh = ViewportMetrics.refreshScrollValues;
      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      isMonitoringScrollValue = true;
    }
  }
});

module.exports = ReactBrowserEventEmitter;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

var injected = false;

var ReactComponentEnvironment = {
  /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */
  replaceNodeWithMarkup: null,

  /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */
  processChildrenUpdates: null,

  injection: {
    injectEnvironment: function (environment) {
      !!injected ?  true ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : _prodInvariant('104') : void 0;
      ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
      injected = true;
    }
  }
};

module.exports = ReactComponentEnvironment;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function invokeGuardedCallback(name, func, a) {
  try {
    func(a);
  } catch (x) {
    if (caughtError === null) {
      caughtError = x;
    }
  }
}

var ReactErrorUtils = {
  invokeGuardedCallback: invokeGuardedCallback,

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (caughtError) {
      var error = caughtError;
      caughtError = null;
      throw error;
    }
  }
};

if (true) {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');
    ReactErrorUtils.invokeGuardedCallback = function (name, func, a) {
      var boundFunc = func.bind(null, a);
      var evtType = 'react-' + name;
      fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);
      fakeNode.removeEventListener(evtType, boundFunc, false);
    };
  }
}

module.exports = ReactErrorUtils;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */

// TODO: Replace this with ES6: var ReactInstanceMap = new Map();

var ReactInstanceMap = {
  /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */
  remove: function (key) {
    key._reactInternalInstance = undefined;
  },

  get: function (key) {
    return key._reactInternalInstance;
  },

  has: function (key) {
    return key._reactInternalInstance !== undefined;
  },

  set: function (key, value) {
    key._reactInternalInstance = value;
  }
};

module.exports = ReactInstanceMap;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* globals MSApp */



/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */

var createMicrosoftUnsafeLocalFunction = function (func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);
      });
    };
  } else {
    return func;
  }
};

module.exports = createMicrosoftUnsafeLocalFunction;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */

function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  }

  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

module.exports = getEventCharCode;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var modifierKeyToProp = {
  Alt: 'altKey',
  Control: 'ctrlKey',
  Meta: 'metaKey',
  Shift: 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function getEventModifierState(nativeEvent) {
  return modifierStateGetter;
}

module.exports = getEventModifierState;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */

function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;

  // Normalize SVG <use> element events #4963
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  }

  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

module.exports = getEventTarget;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(6);

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature &&
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(6);
var DOMNamespaces = __webpack_require__(54);

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

var createMicrosoftUnsafeLocalFunction = __webpack_require__(63);

// SVG temp container for IE lacking innerHTML
var reusableSVGContainer;

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
  // IE does not have innerHTML for SVG nodes, so instead we inject the
  // new markup in a temp node and then move the child nodes across into
  // the target node
  if (node.namespaceURI === DOMNamespaces.svg && !('innerHTML' in node)) {
    reusableSVGContainer = reusableSVGContainer || document.createElement('div');
    reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
    var svgNode = reusableSVGContainer.firstChild;
    while (svgNode.firstChild) {
      node.appendChild(svgNode.firstChild);
    }
  } else {
    node.innerHTML = html;
  }
});

if (ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var testElement = document.createElement('div');
  testElement.innerHTML = ' ';
  if (testElement.innerHTML === '') {
    setInnerHTML = function (node, html) {
      // Magic theory: IE8 supposedly differentiates between added and updated
      // nodes when processing innerHTML, innerHTML on updated nodes suffers
      // from worse whitespace behavior. Re-adding a node like this triggers
      // the initial and more favorable whitespace behavior.
      // TODO: What to do on a detached node?
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
      }

      // We also implement a workaround for non-visible tags disappearing into
      // thin air on IE8, this only happens if there is no visible text
      // in-front of the non-visible tags. Piggyback on the whitespace fix
      // and simply check if any non-visible tags appear in the source.
      if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
        // in hopes that this is preserved even if "\uFEFF" is transformed to
        // the actual Unicode character (by Babel, for example).
        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
        node.innerHTML = String.fromCharCode(0xfeff) + html;

        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);
        } else {
          textNode.deleteData(0, 1);
        }
      } else {
        node.innerHTML = html;
      }
    };
  }
  testElement = null;
}

module.exports = setInnerHTML;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var emptyFunction = __webpack_require__(10);
var warning = __webpack_require__(1);

var validateDOMNesting = emptyFunction;

if (true) {
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.

  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var buttonScopeTags = inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var emptyAncestorInfo = {
    current: null,

    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,

    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  var updatedAncestorInfo = function (oldInfo, tag, instance) {
    var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
    var info = { tag: tag, instance: instance };

    if (inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }
    if (buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    }

    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;
    }

    ancestorInfo.current = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;
    }
    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;
    }
    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;
    }
    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;
    }
    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;
    }
    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;
    }
    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;
    }

    return ancestorInfo;
  };

  /**
   * Returns whether
   */
  var isTagValidWithParent = function (tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';
      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but
      case 'option':
        return tag === '#text';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
      case 'tr':
        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
      case 'colgroup':
        return tag === 'col' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
      case 'table':
        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
      case 'head':
        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
      case 'html':
        return tag === 'head' || tag === 'body';
      case '#document':
        return tag === 'html';
    }

    // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

      case 'rp':
      case 'rt':
        return impliedEndTags.indexOf(parentTag) === -1;

      case 'body':
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frame':
      case 'head':
      case 'html':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;
    }

    return true;
  };

  /**
   * Returns whether
   */
  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':
      case 'pre':
      case 'listing':
      case 'table':
      case 'hr':
      case 'xmp':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;
    }

    return null;
  };

  /**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */
  var findOwnerStack = function (instance) {
    if (!instance) {
      return [];
    }

    var stack = [];
    do {
      stack.push(instance);
    } while (instance = instance._currentElement._owner);
    stack.reverse();
    return stack;
  };

  var didWarn = {};

  validateDOMNesting = function (childTag, childText, childInstance, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
       true ? warning(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null') : void 0;
      childTag = '#text';
    }

    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var problematic = invalidParent || invalidAncestor;

    if (problematic) {
      var ancestorTag = problematic.tag;
      var ancestorInstance = problematic.instance;

      var childOwner = childInstance && childInstance._currentElement._owner;
      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

      var childOwners = findOwnerStack(childOwner);
      var ancestorOwners = findOwnerStack(ancestorOwner);

      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
      var i;

      var deepestCommon = -1;
      for (i = 0; i < minStackLen; i++) {
        if (childOwners[i] === ancestorOwners[i]) {
          deepestCommon = i;
        } else {
          break;
        }
      }

      var UNKNOWN = '(unknown)';
      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
        return inst.getName() || UNKNOWN;
      });
      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
        return inst.getName() || UNKNOWN;
      });
      var ownerInfo = [].concat(
      // If the parent and child instances have a common owner ancestor, start
      // with that -- otherwise we just start with the parent's owners.
      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
      // If we're warning about an invalid (non-parent) ancestry, add '...'
      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
      if (didWarn[warnKey]) {
        return;
      }
      didWarn[warnKey] = true;

      var tagDisplayName = childTag;
      var whitespaceInfo = '';
      if (childTag === '#text') {
        if (/\S/.test(childText)) {
          tagDisplayName = 'Text nodes';
        } else {
          tagDisplayName = 'Whitespace text nodes';
          whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
        }
      } else {
        tagDisplayName = '<' + childTag + '>';
      }

      if (invalidParent) {
        var info = '';
        if (ancestorTag === 'table' && childTag === 'tr') {
          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
        }
         true ? warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s ' + 'See %s.%s', tagDisplayName, ancestorTag, whitespaceInfo, ownerInfo, info) : void 0;
      } else {
         true ? warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>. See %s.', tagDisplayName, ancestorTag, ownerInfo) : void 0;
      }
    }
  };

  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

  // For testing
  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;
    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
  };
}

module.exports = validateDOMNesting;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (true) {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(342);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _reactRedux = __webpack_require__(19);

var _users = __webpack_require__(40);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _hourglass = __webpack_require__(308);

var _hourglass2 = _interopRequireDefault(_hourglass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_bootstrap2.default);

var LoginOrRegister = function (_Component) {
  _inherits(LoginOrRegister, _Component);

  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  function LoginOrRegister(props) {
    _classCallCheck(this, LoginOrRegister);

    var _this = _possibleConstructorReturn(this, (LoginOrRegister.__proto__ || Object.getPrototypeOf(LoginOrRegister)).call(this, props));

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginOrRegister, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(event) {
      event.preventDefault();

      var passwordLogin = this.props.passwordLogin;

      var username = _reactDom2.default.findDOMNode(this.refs.email).value;
      var password = _reactDom2.default.findDOMNode(this.refs.password).value;

      passwordLogin({ username: username, password: password });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$user = this.props.user,
          isWaiting = _props$user.isWaiting,
          message = _props$user.message;


      return _react2.default.createElement(
        'div',
        { className: cx('login', {
            waiting: isWaiting
          }) },
        _react2.default.createElement(
          'div',
          { className: cx('container') },
          _react2.default.createElement(
            'div',
            { className: cx('header') },
            _react2.default.createElement(
              'h1',
              { className: cx('heading') },
              'TaskCRM preAlpha'
            )
          ),
          _react2.default.createElement('img', { className: cx('loading'), src: _hourglass2.default }),
          _react2.default.createElement(
            'div',
            { className: cx('email-container') },
            _react2.default.createElement(
              'form',
              { onSubmit: this.handleOnSubmit },
              _react2.default.createElement('input', { className: cx('input'),
                type: 'email',
                ref: 'email',
                placeholder: 'Email' }),
              _react2.default.createElement('input', { className: cx('input'),
                type: 'password',
                ref: 'password',
                placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C' }),
              _react2.default.createElement(
                'div',
                { className: cx('hint') },
                _react2.default.createElement(
                  'div',
                  null,
                  '\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'email: a@a password: asd'
                )
              ),
              _react2.default.createElement(
                'p',
                { className: cx('message', {
                    'message-show': message && message.length > 0
                  }) },
                message
              ),
              _react2.default.createElement('input', { className: cx('button'),
                type: 'submit',
                value: '\u0412\u043E\u0439\u0442\u0438' })
            )
          )
        )
      );
    }
  }]);

  return LoginOrRegister;
}(_react.Component);

LoginOrRegister.propTypes = {
  user: _propTypes2.default.object,
  passwordLogin: _propTypes2.default.func.isRequired
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(_ref) {
  var user = _ref.user;

  return {
    user: user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
exports.default = (0, _reactRedux.connect)(mapStateToProps, { passwordLogin: _users.passwordLogin })(LoginOrRegister);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Date.prototype.toFormatString = function () {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '%y-%m-%dT%H:%M:%S.%MsZ';

  var f = { y: this.getUTCFullYear(),
    m: this.getUTCMonth() + 1,
    d: this.getUTCDate(),
    H: this.getUTCHours(),
    M: this.getUTCMinutes(),
    S: this.getUTCSeconds(),
    Ms: this.getUTCMilliseconds()
  };
  for (var k in f) {
    format = format.replace('%' + k, f[k] < 10 ? "0" + f[k] : f[k]);
  }return format;
};

Date.prototype.toFormatLocale = function (type) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'RU-ru';

  var textDay = Array();
  var textMonth = Array();
  var textYear = Array();
  switch (locale) {
    case 'EN-en':
    case 'RU-ru':
    default:
      textDay = ['день', 'дня', 'дней'];
      textMonth = ['месяц', 'месяца', 'месяцев'];
      textYear = ['год', 'года', 'лет'];
      break;
  }
  var date = 0;
  switch (type) {
    case 'day':
      date = this.getUTCDate() - 1;
      switch (date) {
        case 1:
          return date + ' ' + textDay[0];
          break;
        case 2:
        case 3:
        case 4:
          return date + ' ' + textDay[1];
          break;
        case 5:
          return date + ' ' + textDay[2];
          break;
        default:
          return '';
      }
      break;
    case 'month':
      date = this.getUTCMonth();
      switch (date) {
        case 1:
          return date + ' ' + textMonth[0];
          break;
        case 2:
        case 3:
        case 4:
          return date + ' ' + textMonth[1];
          break;
        case 5:
          return date + ' ' + textMonth[2];
          break;
        default:
          return '';
      }
      break;
    case 'year':
      date = this.getUTCFullYear() - 1970;
      switch (date) {
        case 1:
          return date + ' ' + textYear[0];
          break;
        case 2:
        case 3:
        case 4:
          return date + ' ' + textYear[1];
          break;
        case 5:
          return date + ' ' + textYear[2];
          break;
        default:
          return '';
      }
      break;
    default:
      return '';
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModulesTypes = exports.Tasks = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tasks = __webpack_require__(149);

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModulesTypes = _extends({}, _tasks2.default.Types);
exports.Tasks = _tasks2.default;
exports.ModulesTypes = ModulesTypes;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(48);

var _pages = __webpack_require__(157);

var _AuthenticatedComponent = __webpack_require__(130);

var _AuthenticatedComponent2 = _interopRequireDefault(_AuthenticatedComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _pages.App },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: (0, _AuthenticatedComponent2.default)(_pages.Vote) }),
  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _pages.LoginOrRegister }),
  _react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: (0, _AuthenticatedComponent2.default)(_pages.Dashboard) }),
  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: (0, _AuthenticatedComponent2.default)(_pages.About) })
);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GOOGLE_ANALYTICS_ID = exports.DB_TYPE = exports.ENV = undefined;

var _dbTypes = __webpack_require__(164);

var ENV = exports.ENV = "development" || 'development';

var DB_TYPE = exports.DB_TYPE = process.env.DB_TYPE || _dbTypes.DB_TYPES.MONGO;

var GOOGLE_ANALYTICS_ID = exports.GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
var sessionSecret = exports.sessionSecret = process.env.SESSION_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU';
var google = exports.google = {
  clientID: process.env.GOOGLE_CLIENTID || '62351010161-eqcnoa340ki5ekb9gvids4ksgqt9hf48.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(47);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicSchema = new _mongoose2.default.Schema({
  id: String,
  text: String,
  count: { type: Number, min: 0 },
  startDate: { type: Date, default: Date.now() },
  stopDate: { type: Date }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
/**
 * Schema Definitions
 *
 */
exports.default = _mongoose2.default.model('Topic', TopicSchema);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DB_TYPE = __webpack_require__(29).DB_TYPE;
var DB_TYPES = __webpack_require__(50).DB_TYPES;

switch (DB_TYPE) {
  case DB_TYPES.POSTGRES:
    module.exports = __webpack_require__(180);
    break;
  default:
    throw new Error('No sequelize config found for db type \'' + DB_TYPE + '\'');
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 */

var emptyFunction = __webpack_require__(10);

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (true) {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

module.exports = EventListener;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * @param {DOMElement} node input/textarea to focus
 */

function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var factory = __webpack_require__(224);
module.exports = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

module.exports = CSSProperty;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PooledClass = __webpack_require__(20);

var invariant = __webpack_require__(0);

/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */

var CallbackQueue = function () {
  function CallbackQueue(arg) {
    _classCallCheck(this, CallbackQueue);

    this._callbacks = null;
    this._contexts = null;
    this._arg = arg;
  }

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */


  CallbackQueue.prototype.enqueue = function enqueue(callback, context) {
    this._callbacks = this._callbacks || [];
    this._callbacks.push(callback);
    this._contexts = this._contexts || [];
    this._contexts.push(context);
  };

  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */


  CallbackQueue.prototype.notifyAll = function notifyAll() {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    var arg = this._arg;
    if (callbacks && contexts) {
      !(callbacks.length === contexts.length) ?  true ? invariant(false, 'Mismatched list of contexts in callback queue') : _prodInvariant('24') : void 0;
      this._callbacks = null;
      this._contexts = null;
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(contexts[i], arg);
      }
      callbacks.length = 0;
      contexts.length = 0;
    }
  };

  CallbackQueue.prototype.checkpoint = function checkpoint() {
    return this._callbacks ? this._callbacks.length : 0;
  };

  CallbackQueue.prototype.rollback = function rollback(len) {
    if (this._callbacks && this._contexts) {
      this._callbacks.length = len;
      this._contexts.length = len;
    }
  };

  /**
   * Resets the internal queue.
   *
   * @internal
   */


  CallbackQueue.prototype.reset = function reset() {
    this._callbacks = null;
    this._contexts = null;
  };

  /**
   * `PooledClass` looks for this.
   */


  CallbackQueue.prototype.destructor = function destructor() {
    this.reset();
  };

  return CallbackQueue;
}();

module.exports = PooledClass.addPoolingTo(CallbackQueue);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMProperty = __webpack_require__(32);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactInstrumentation = __webpack_require__(11);

var quoteAttributeValueForBrowser = __webpack_require__(290);
var warning = __webpack_require__(1);

var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
   true ? warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
  return false;
}

function shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

/**
 * Operations for dealing with DOM properties.
 */
var DOMPropertyOperations = {
  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
  },

  setAttributeForID: function (node, id) {
    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
  },

  createMarkupForRoot: function () {
    return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
  },

  setAttributeForRoot: function (node) {
    node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
    if (propertyInfo) {
      if (shouldIgnoreValue(propertyInfo, value)) {
        return '';
      }
      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';
      }
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    } else if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    }
    return null;
  },

  /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */
  createMarkupForCustomAttribute: function (name, value) {
    if (!isAttributeNameSafe(name) || value == null) {
      return '';
    }
    return name + '=' + quoteAttributeValueForBrowser(value);
  },

  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function (node, name, value) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, value);
      } else if (shouldIgnoreValue(propertyInfo, value)) {
        this.deleteValueForProperty(node, name);
        return;
      } else if (propertyInfo.mustUseProperty) {
        // Contrary to `setAttribute`, object properties are properly
        // `toString`ed by IE8/9.
        node[propertyInfo.propertyName] = value;
      } else {
        var attributeName = propertyInfo.attributeName;
        var namespace = propertyInfo.attributeNamespace;
        // `setAttribute` with objects becomes only `[object]` in IE8/9,
        // ('' + value) makes it output the correct toString()-value.
        if (namespace) {
          node.setAttributeNS(namespace, attributeName, '' + value);
        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
          node.setAttribute(attributeName, '');
        } else {
          node.setAttribute(attributeName, '' + value);
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      DOMPropertyOperations.setValueForAttribute(node, name, value);
      return;
    }

    if (true) {
      var payload = {};
      payload[name] = value;
      ReactInstrumentation.debugTool.onHostOperation({
        instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'update attribute',
        payload: payload
      });
    }
  },

  setValueForAttribute: function (node, name, value) {
    if (!isAttributeNameSafe(name)) {
      return;
    }
    if (value == null) {
      node.removeAttribute(name);
    } else {
      node.setAttribute(name, '' + value);
    }

    if (true) {
      var payload = {};
      payload[name] = value;
      ReactInstrumentation.debugTool.onHostOperation({
        instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'update attribute',
        payload: payload
      });
    }
  },

  /**
   * Deletes an attributes from a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForAttribute: function (node, name) {
    node.removeAttribute(name);
    if (true) {
      ReactInstrumentation.debugTool.onHostOperation({
        instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'remove attribute',
        payload: name
      });
    }
  },

  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function (node, name) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, undefined);
      } else if (propertyInfo.mustUseProperty) {
        var propName = propertyInfo.propertyName;
        if (propertyInfo.hasBooleanValue) {
          node[propName] = false;
        } else {
          node[propName] = '';
        }
      } else {
        node.removeAttribute(propertyInfo.attributeName);
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);
    }

    if (true) {
      ReactInstrumentation.debugTool.onHostOperation({
        instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'remove attribute',
        payload: name
      });
    }
  }
};

module.exports = DOMPropertyOperations;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDOMComponentFlags = {
  hasCachedChildNodes: 1 << 0
};

module.exports = ReactDOMComponentFlags;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var LinkedValueUtils = __webpack_require__(58);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactUpdates = __webpack_require__(15);

var warning = __webpack_require__(1);

var didWarnValueLink = false;
var didWarnValueDefaultValue = false;

function updateOptionsIfPendingUpdateAndMounted() {
  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
    this._wrapperState.pendingUpdate = false;

    var props = this._currentElement.props;
    var value = LinkedValueUtils.getValue(props);

    if (value != null) {
      updateOptions(this, Boolean(props.multiple), value);
    }
  }
}

function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

var valuePropNames = ['value', 'defaultValue'];

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function checkSelectPropTypes(inst, props) {
  var owner = inst._currentElement._owner;
  LinkedValueUtils.checkPropTypes('select', props, owner);

  if (props.valueLink !== undefined && !didWarnValueLink) {
     true ? warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
    didWarnValueLink = true;
  }

  for (var i = 0; i < valuePropNames.length; i++) {
    var propName = valuePropNames[i];
    if (props[propName] == null) {
      continue;
    }
    var isArray = Array.isArray(props[propName]);
    if (props.multiple && !isArray) {
       true ? warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
    } else if (!props.multiple && isArray) {
       true ? warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
    }
  }
}

/**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */
function updateOptions(inst, multiple, propValue) {
  var selectedValue, i;
  var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;

  if (multiple) {
    selectedValue = {};
    for (i = 0; i < propValue.length; i++) {
      selectedValue['' + propValue[i]] = true;
    }
    for (i = 0; i < options.length; i++) {
      var selected = selectedValue.hasOwnProperty(options[i].value);
      if (options[i].selected !== selected) {
        options[i].selected = selected;
      }
    }
  } else {
    // Do not set `select.value` as exact behavior isn't consistent across all
    // browsers for all cases.
    selectedValue = '' + propValue;
    for (i = 0; i < options.length; i++) {
      if (options[i].value === selectedValue) {
        options[i].selected = true;
        return;
      }
    }
    if (options.length) {
      options[0].selected = true;
    }
  }
}

/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
var ReactDOMSelect = {
  getHostProps: function (inst, props) {
    return _assign({}, props, {
      onChange: inst._wrapperState.onChange,
      value: undefined
    });
  },

  mountWrapper: function (inst, props) {
    if (true) {
      checkSelectPropTypes(inst, props);
    }

    var value = LinkedValueUtils.getValue(props);
    inst._wrapperState = {
      pendingUpdate: false,
      initialValue: value != null ? value : props.defaultValue,
      listeners: null,
      onChange: _handleChange.bind(inst),
      wasMultiple: Boolean(props.multiple)
    };

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
       true ? warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
      didWarnValueDefaultValue = true;
    }
  },

  getSelectValueContext: function (inst) {
    // ReactDOMOption looks at this initial value so the initial generated
    // markup has correct `selected` attributes
    return inst._wrapperState.initialValue;
  },

  postUpdateWrapper: function (inst) {
    var props = inst._currentElement.props;

    // After the initial mount, we control selected-ness manually so don't pass
    // this value down
    inst._wrapperState.initialValue = undefined;

    var wasMultiple = inst._wrapperState.wasMultiple;
    inst._wrapperState.wasMultiple = Boolean(props.multiple);

    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      inst._wrapperState.pendingUpdate = false;
      updateOptions(inst, Boolean(props.multiple), value);
    } else if (wasMultiple !== Boolean(props.multiple)) {
      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
      if (props.defaultValue != null) {
        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
      } else {
        // Revert the select back to its default unselected state.
        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
      }
    }
  }
};

function _handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = LinkedValueUtils.executeOnChange(props, event);

  if (this._rootNodeID) {
    this._wrapperState.pendingUpdate = true;
  }
  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
  return returnValue;
}

module.exports = ReactDOMSelect;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var ReactUpdates = __webpack_require__(15);
var Transaction = __webpack_require__(43);

var emptyFunction = __webpack_require__(10);

var RESET_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: function () {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};

var FLUSH_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
};

var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

function ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();
}

_assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction, {
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  }
});

var transaction = new ReactDefaultBatchingStrategyTransaction();

var ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      return callback(a, b, c, d, e);
    } else {
      return transaction.perform(callback, null, a, b, c, d, e);
    }
  }
};

module.exports = ReactDefaultBatchingStrategy;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyComponentFactory;

var ReactEmptyComponentInjection = {
  injectEmptyComponentFactory: function (factory) {
    emptyComponentFactory = factory;
  }
};

var ReactEmptyComponent = {
  create: function (instantiate) {
    return emptyComponentFactory(instantiate);
  }
};

ReactEmptyComponent.injection = ReactEmptyComponentInjection;

module.exports = ReactEmptyComponent;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

var genericComponentClass = null;
var textComponentClass = null;

var ReactHostComponentInjection = {
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function (componentClass) {
    genericComponentClass = componentClass;
  },
  // This accepts a text component class that takes the text string to be
  // rendered as props.
  injectTextComponentClass: function (componentClass) {
    textComponentClass = componentClass;
  }
};

/**
 * Get a host internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */
function createInternalComponent(element) {
  !genericComponentClass ?  true ? invariant(false, 'There is no registered component for the tag %s', element.type) : _prodInvariant('111', element.type) : void 0;
  return new genericComponentClass(element);
}

/**
 * @param {ReactText} text
 * @return {ReactComponent}
 */
function createInstanceForText(text) {
  return new textComponentClass(text);
}

/**
 * @param {ReactComponent} component
 * @return {boolean}
 */
function isTextComponent(component) {
  return component instanceof textComponentClass;
}

var ReactHostComponent = {
  createInternalComponent: createInternalComponent,
  createInstanceForText: createInstanceForText,
  isTextComponent: isTextComponent,
  injection: ReactHostComponentInjection
};

module.exports = ReactHostComponent;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDOMSelection = __webpack_require__(244);

var containsNode = __webpack_require__(211);
var focusNode = __webpack_require__(84);
var getActiveElement = __webpack_require__(85);

function isInDocument(node) {
  return containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var ReactInputSelection = {
  hasSelectionCapabilities: function (elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
  },

  getSelectionInformation: function () {
    var focusedElem = getActiveElement();
    return {
      focusedElem: focusedElem,
      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
    };
  },

  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function (priorSelectionInformation) {
    var curFocusedElem = getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
      }
      focusNode(priorFocusedElem);
    }
  },

  /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
  getSelection: function (input) {
    var selection;

    if ('selectionStart' in input) {
      // Modern browser with input or textarea.
      selection = {
        start: input.selectionStart,
        end: input.selectionEnd
      };
    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
      // IE8 input.
      var range = document.selection.createRange();
      // There can only be one selection per document in IE, so it must
      // be in our element.
      if (range.parentElement() === input) {
        selection = {
          start: -range.moveStart('character', -input.value.length),
          end: -range.moveEnd('character', -input.value.length)
        };
      }
    } else {
      // Content editable or old IE textarea.
      selection = ReactDOMSelection.getOffsets(input);
    }

    return selection || { start: 0, end: 0 };
  },

  /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
  setSelection: function (input, offsets) {
    var start = offsets.start;
    var end = offsets.end;
    if (end === undefined) {
      end = start;
    }

    if ('selectionStart' in input) {
      input.selectionStart = start;
      input.selectionEnd = Math.min(end, input.value.length);
    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    } else {
      ReactDOMSelection.setOffsets(input, offsets);
    }
  }
};

module.exports = ReactInputSelection;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var PooledClass = __webpack_require__(20);
var Transaction = __webpack_require__(43);
var ReactInstrumentation = __webpack_require__(11);
var ReactServerUpdateQueue = __webpack_require__(267);

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [];

if (true) {
  TRANSACTION_WRAPPERS.push({
    initialize: ReactInstrumentation.debugTool.onBeginFlush,
    close: ReactInstrumentation.debugTool.onEndFlush
  });
}

var noopCallbackQueue = {
  enqueue: function () {}
};

/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.useCreateElement = false;
  this.updateQueue = new ReactServerUpdateQueue(this);
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return noopCallbackQueue;
  },

  /**
   * @return {object} The queue to collect React async events.
   */
  getUpdateQueue: function () {
    return this.updateQueue;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {},

  checkpoint: function () {},

  rollback: function () {}
};

_assign(ReactServerRenderingTransaction.prototype, Transaction, Mixin);

PooledClass.addPoolingTo(ReactServerRenderingTransaction);

module.exports = ReactServerRenderingTransaction;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var ReactCurrentOwner = __webpack_require__(18);
var ReactInstanceMap = __webpack_require__(62);
var ReactInstrumentation = __webpack_require__(11);
var ReactUpdates = __webpack_require__(15);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

function enqueueUpdate(internalInstance) {
  ReactUpdates.enqueueUpdate(internalInstance);
}

function formatUnexpectedArgument(arg) {
  var type = typeof arg;
  if (type !== 'object') {
    return type;
  }
  var displayName = arg.constructor && arg.constructor.name || type;
  var keys = Object.keys(arg);
  if (keys.length > 0 && keys.length < 20) {
    return displayName + ' (keys: ' + keys.join(', ') + ')';
  }
  return displayName;
}

function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
  var internalInstance = ReactInstanceMap.get(publicInstance);
  if (!internalInstance) {
    if (true) {
      var ctor = publicInstance.constructor;
      // Only warn when we have a callerName. Otherwise we should be silent.
      // We're probably calling from enqueueCallback. We don't want to warn
      // there because we already warned for the corresponding lifecycle method.
       true ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, ctor && (ctor.displayName || ctor.name) || 'ReactClass') : void 0;
    }
    return null;
  }

  if (true) {
     true ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition (such as ' + "within `render` or another component's constructor). Render methods " + 'should be a pure function of props and state; constructor ' + 'side-effects are an anti-pattern, but can be moved to ' + '`componentWillMount`.', callerName) : void 0;
  }

  return internalInstance;
}

/**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */
var ReactUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    if (true) {
      var owner = ReactCurrentOwner.current;
      if (owner !== null) {
         true ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
        owner._warnedAboutRefsInRender = true;
      }
    }
    var internalInstance = ReactInstanceMap.get(publicInstance);
    if (internalInstance) {
      // During componentWillMount and render this will still be null but after
      // that will always render to something. At least for now. So we can use
      // this hack.
      return !!internalInstance._renderedComponent;
    } else {
      return false;
    }
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @param {string} callerName Name of the calling function in the public API.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback, callerName) {
    ReactUpdateQueue.validateCallback(callback, callerName);
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

    // Previously we would throw an error if we didn't have an internal
    // instance. Since we want to make it a no-op instead, we mirror the same
    // behavior we have in other enqueue* methods.
    // We also need to ignore callbacks in componentWillMount. See
    // enqueueUpdates.
    if (!internalInstance) {
      return null;
    }

    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    // TODO: The callback here is ignored when setState is called from
    // componentWillMount. Either fix it or disallow doing so completely in
    // favor of getInitialState. Alternatively, we can disallow
    // componentWillMount during server-side rendering.
    enqueueUpdate(internalInstance);
  },

  enqueueCallbackInternal: function (internalInstance, callback) {
    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    enqueueUpdate(internalInstance);
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingForceUpdate = true;

    enqueueUpdate(internalInstance);
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback) {
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingStateQueue = [completeState];
    internalInstance._pendingReplaceState = true;

    // Future-proof 15.5
    if (callback !== undefined && callback !== null) {
      ReactUpdateQueue.validateCallback(callback, 'replaceState');
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
    }

    enqueueUpdate(internalInstance);
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    if (true) {
      ReactInstrumentation.debugTool.onSetState();
       true ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
    }

    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

    if (!internalInstance) {
      return;
    }

    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
    queue.push(partialState);

    enqueueUpdate(internalInstance);
  },

  enqueueElementInternal: function (internalInstance, nextElement, nextContext) {
    internalInstance._pendingElement = nextElement;
    // TODO: introduce _pendingContext instead of setting it directly.
    internalInstance._context = nextContext;
    enqueueUpdate(internalInstance);
  },

  validateCallback: function (callback, callerName) {
    !(!callback || typeof callback === 'function') ?  true ? invariant(false, '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.', callerName, formatUnexpectedArgument(callback)) : _prodInvariant('122', callerName, formatUnexpectedArgument(callback)) : void 0;
  }
};

module.exports = ReactUpdateQueue;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ViewportMetrics = {
  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function (scrollPosition) {
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;
  }
};

module.exports = ViewportMetrics;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  !(next != null) ?  true ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : _prodInvariant('30') : void 0;

  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push.apply(current, next);
      return current;
    }
    current.push(next);
    return current;
  }

  if (Array.isArray(next)) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

module.exports = accumulateInto;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */

function forEachAccumulated(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
}

module.exports = forEachAccumulated;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(6);

var contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function getTextContentAccessor() {
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
  }
  return contentKey;
}

module.exports = getTextContentAccessor;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDOMComponentTree = __webpack_require__(5);

function isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
}

function getTracker(inst) {
  return inst._wrapperState.valueTracker;
}

function attachTracker(inst, tracker) {
  inst._wrapperState.valueTracker = tracker;
}

function detachTracker(inst) {
  delete inst._wrapperState.valueTracker;
}

function getValueFromNode(node) {
  var value;
  if (node) {
    value = isCheckable(node) ? '' + node.checked : node.value;
  }
  return value;
}

var inputValueTracking = {
  // exposed for testing
  _getTrackerFromNode: function (node) {
    return getTracker(ReactDOMComponentTree.getInstanceFromNode(node));
  },


  track: function (inst) {
    if (getTracker(inst)) {
      return;
    }

    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var valueField = isCheckable(node) ? 'checked' : 'value';
    var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);

    var currentValue = '' + node[valueField];

    // if someone has already defined a value or Safari, then bail
    // and don't track value will cause over reporting of changes,
    // but it's better then a hard failure
    // (needed for certain tests that spyOn input values and Safari)
    if (node.hasOwnProperty(valueField) || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
      return;
    }

    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable,
      configurable: true,
      get: function () {
        return descriptor.get.call(this);
      },
      set: function (value) {
        currentValue = '' + value;
        descriptor.set.call(this, value);
      }
    });

    attachTracker(inst, {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = '' + value;
      },
      stopTracking: function () {
        detachTracker(inst);
        delete node[valueField];
      }
    });
  },

  updateValueIfChanged: function (inst) {
    if (!inst) {
      return false;
    }
    var tracker = getTracker(inst);

    if (!tracker) {
      inputValueTracking.track(inst);
      return true;
    }

    var lastValue = tracker.getValue();
    var nextValue = getValueFromNode(ReactDOMComponentTree.getNodeFromInstance(inst));

    if (nextValue !== lastValue) {
      tracker.setValue(nextValue);
      return true;
    }

    return false;
  },
  stopTracking: function (inst) {
    var tracker = getTracker(inst);
    if (tracker) {
      tracker.stopTracking();
    }
  }
};

module.exports = inputValueTracking;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var ReactCompositeComponent = __webpack_require__(237);
var ReactEmptyComponent = __webpack_require__(94);
var ReactHostComponent = __webpack_require__(95);

var getNextDebugID = __webpack_require__(302);
var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

// To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper = function (element) {
  this.construct(element);
};

function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */
function isInternalComponentType(type) {
  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
}

/**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @param {boolean} shouldHaveDebugID
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function instantiateReactComponent(node, shouldHaveDebugID) {
  var instance;

  if (node === null || node === false) {
    instance = ReactEmptyComponent.create(instantiateReactComponent);
  } else if (typeof node === 'object') {
    var element = node;
    var type = element.type;
    if (typeof type !== 'function' && typeof type !== 'string') {
      var info = '';
      if (true) {
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }
      }
      info += getDeclarationErrorAddendum(element._owner);
       true ?  true ? invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info) : _prodInvariant('130', type == null ? type : typeof type, info) : void 0;
    }

    // Special case string values
    if (typeof element.type === 'string') {
      instance = ReactHostComponent.createInternalComponent(element);
    } else if (isInternalComponentType(element.type)) {
      // This is temporarily available for custom components that are not string
      // representations. I.e. ART. Once those are updated to use the string
      // representation, we can drop this code path.
      instance = new element.type(element);

      // We renamed this. Allow the old name for compat. :(
      if (!instance.getHostNode) {
        instance.getHostNode = instance.getNativeNode;
      }
    } else {
      instance = new ReactCompositeComponentWrapper(element);
    }
  } else if (typeof node === 'string' || typeof node === 'number') {
    instance = ReactHostComponent.createInstanceForText(node);
  } else {
     true ?  true ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : _prodInvariant('131', typeof node) : void 0;
  }

  if (true) {
     true ? warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getHostNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
  }

  // These two fields are used by the DOM and ART diffing algorithms
  // respectively. Instead of using expandos on components, we should be
  // storing the state needed by the diffing algorithms elsewhere.
  instance._mountIndex = 0;
  instance._mountImage = null;

  if (true) {
    instance._debugID = shouldHaveDebugID ? getNextDebugID() : 0;
  }

  // Internal instances should fully constructed at this point, so they should
  // not get any new fields added to them at this point.
  if (true) {
    if (Object.preventExtensions) {
      Object.preventExtensions(instance);
    }
  }

  return instance;
}

_assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent, {
  _instantiateReactComponent: instantiateReactComponent
});

module.exports = instantiateReactComponent;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */

var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};

function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

  if (nodeName === 'input') {
    return !!supportedInputTypes[elem.type];
  }

  if (nodeName === 'textarea') {
    return true;
  }

  return false;
}

module.exports = isTextInputElement;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(6);
var escapeTextContentForBrowser = __webpack_require__(44);
var setInnerHTML = __webpack_require__(68);

/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */
var setTextContent = function (node, text) {
  if (text) {
    var firstChild = node.firstChild;

    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === 3) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
};

if (ExecutionEnvironment.canUseDOM) {
  if (!('textContent' in document.documentElement)) {
    setTextContent = function (node, text) {
      if (node.nodeType === 3) {
        node.nodeValue = text;
        return;
      }
      setInnerHTML(node, escapeTextContentForBrowser(text));
    };
  }
}

module.exports = setTextContent;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */

function shouldUpdateReactComponent(prevElement, nextElement) {
  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;
  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  var prevType = typeof prevElement;
  var nextType = typeof nextElement;
  if (prevType === 'string' || prevType === 'number') {
    return nextType === 'string' || nextType === 'number';
  } else {
    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
}

module.exports = shouldUpdateReactComponent;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var ReactCurrentOwner = __webpack_require__(18);
var REACT_ELEMENT_TYPE = __webpack_require__(251);

var getIteratorFn = __webpack_require__(287);
var invariant = __webpack_require__(0);
var KeyEscapeUtils = __webpack_require__(57);
var warning = __webpack_require__(1);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (true) {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
           true ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ?  true ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(25),
    _assign = __webpack_require__(3);

var ReactNoopUpdateQueue = __webpack_require__(113);

var canDefineProperty = __webpack_require__(45);
var emptyObject = __webpack_require__(41);
var invariant = __webpack_require__(0);
var lowPriorityWarning = __webpack_require__(70);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  true ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (true) {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__(18);
var ReactComponentTreeHook = __webpack_require__(13);
var ReactElement = __webpack_require__(21);

var checkReactTypeSpec = __webpack_require__(300);

var canDefineProperty = __webpack_require__(45);
var getIteratorFn = __webpack_require__(114);
var warning = __webpack_require__(1);
var lowPriorityWarning = __webpack_require__(70);

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

   true ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
     true ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
         true ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (true) {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

module.exports = ReactElementValidator;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var warning = __webpack_require__(1);

function warnNoop(publicInstance, callerName) {
  if (true) {
    var constructor = publicInstance.constructor;
     true ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("spark-md5");

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(73);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = __webpack_require__(115);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = __webpack_require__(314);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(38);

var _path2 = _interopRequireDefault(_path);

var _expressFlash = __webpack_require__(318);

var _expressFlash2 = _interopRequireDefault(_expressFlash);

var _methodOverride = __webpack_require__(322);

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _compression = __webpack_require__(315);

var _compression2 = _interopRequireDefault(_compression);

var _helmet = __webpack_require__(320);

var _helmet2 = _interopRequireDefault(_helmet);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

var _secrets = __webpack_require__(80);

var _env = __webpack_require__(79);

var _db = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.set('port', process.env.PORT || 80);
  app.set('sslport', 443);

  if (_env.ENV === 'production') {
    app.use((0, _compression2.default)());
    // Secure your Express apps by setting various HTTP headers. Documentation: https://github.com/helmetjs/helmet
    app.use((0, _helmet2.default)());
  }

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use((0, _methodOverride2.default)());

  app.use(_express2.default.static(_path2.default.join(process.cwd(), 'public')));

  // I am adding this here so that the Heroku deploy will work
  // Indicates the app is behind a front-facing proxy,
  // and to use the X-Forwarded-* headers to determine the connection and the IP address of the client.
  // NOTE: X-Forwarded-* headers are easily spoofed and the detected IP addresses are unreliable.
  // trust proxy is disabled by default.
  // When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies.
  // The req.ips property, then, contains an array of IP addresses the client is connected through.
  // To enable it, use the values described in the trust proxy options table.
  // The trust proxy setting is implemented using the proxy-addr package. For more information, see its documentation.
  // loopback - 127.0.0.1/8, ::1/128
  app.set('trust proxy', 'loopback');
  // Create a session middleware with the given options
  // Note session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
  // Options: resave: forces the session to be saved back to the session store, even if the session was never
  //                  modified during the request. Depending on your store this may be necessary, but it can also
  //                  create race conditions where a client has two parallel requests to your server and changes made
  //                  to the session in one request may get overwritten when the other request ends, even if it made no
  //                  changes(this behavior also depends on what store you're using).
  //          saveUnitialized: Forces a session that is uninitialized to be saved to the store. A session is uninitialized when
  //                  it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage
  //                  usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with
  //                  race conditions where a client makes multiple parallel requests without a session
  //          secret: This is the secret used to sign the session ID cookie.
  //          name: The name of the session ID cookie to set in the response (and read from in the request).
  //          cookie: Please note that secure: true is a recommended option.
  //                  However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies.
  //                  If secure is set, and you access your site over HTTP, the cookie will not be set.
  var sessionStore = null;
  if (!_db.session) {
    console.warn((0, _unsupportedMessage2.default)('session'));
  } else {
    sessionStore = (0, _db.session)();
  }

  var sess = {
    resave: false,
    saveUninitialized: false,
    secret: _secrets.sessionSecret,
    proxy: true, // The "X-Forwarded-Proto" header will be used.
    name: 'sessionId',
    // Add HTTPOnly, Secure attributes on Session Cookie
    // If secure is set, and you access your site over HTTP, the cookie will not be set
    cookie: {
      httpOnly: true,
      secure: false
    },
    store: sessionStore
  };

  console.log('--------------------------');
  console.log('===> 😊  Starting Server . . .');
  console.log('===>  Environment: ' + _env.ENV);
  console.log('===>  Listening on port: ' + app.get('port'));
  console.log('===>  Using DB TYPE: ' + _env.DB_TYPE);
  if (_env.ENV === 'production') {
    console.log('===> 🚦  Note: In order for authentication to work in production');
    console.log('===>           you will need a secure HTTPS connection');
    sess.cookie.secure = true; // Serve secure cookies
  }
  console.log('--------------------------');

  //app.use(session(sess));

  app.use(_passport2.default.initialize());
  //app.use(passport.session());

  //app.use(flash());
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

var _local = __webpack_require__(197);

var _local2 = _interopRequireDefault(_local);

var _google = __webpack_require__(196);

var _google2 = _interopRequireDefault(_google);

var _bearer = __webpack_require__(194);

var _bearer2 = _interopRequireDefault(_bearer);

var _basic_http = __webpack_require__(193);

var _basic_http2 = _interopRequireDefault(_basic_http);

var _client_password = __webpack_require__(195);

var _client_password2 = _interopRequireDefault(_client_password);

var _db = __webpack_require__(14);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Initializing passport.js */
exports.default = function () {
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.

  if (_db.passport && _db.passport.deserializeUser) {
    _passport2.default.serializeUser(function (user, done) {
      done(null, user.id);
    });

    _passport2.default.deserializeUser(_db.passport.deserializeUser);
  } else {
    console.warn((0, _unsupportedMessage2.default)('(de)serialize User'));
  }

  // use the following strategies
  (0, _local2.default)(_passport2.default);
  //google(passport);
  (0, _bearer2.default)(_passport2.default);
  (0, _basic_http2.default)(_passport2.default);
  (0, _client_password2.default)(_passport2.default);
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

var _db = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersController = _db.controllers && _db.controllers.users; /**
                                                                 * Routes for express app
                                                                 */

var topicsController = _db.controllers && _db.controllers.topics;

exports.default = function (app) {
  // user routes
  if (usersController) {
    app.post('/login', _db.controllers.oauth);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
  } else {
    console.warn((0, _unsupportedMessage2.default)('users routes'));
  }

  // if (passportConfig && passportConfig.google) {
  //   // google auth
  //   // Redirect the user to Google for authentication. When complete, Google
  //   // will redirect the user back to the application at
  //   // /auth/google/return
  //   // Authentication with google requires an additional scope param, for more info go
  //   // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
  //   app.get('/auth/google', passport.authenticate('google', {
  //     scope: [
  //       'https://www.googleapis.com/auth/userinfo.profile',
  //       'https://www.googleapis.com/auth/userinfo.email'
  //     ]
  //   }));

  //   // Google will redirect the user to this URL after authentication. Finish the
  //   // process by verifying the assertion. If valid, the user will be logged in.
  //   // Otherwise, the authentication has failed.
  //   app.get('/auth/google/callback',
  //     passport.authenticate('google', {
  //       successRedirect: '/',
  //       failureRedirect: '/login'
  //     })
  //   );
  // }

  // topic routes
  if (topicsController) {
    app.all('/api/*', _passport2.default.authenticate('bearer', { session: false }));

    app.get('/api/topic', topicsController.all);
    app.post('/api/topic/:id', topicsController.add);
    app.put('/api/topic/:id', topicsController.update);
    app.delete('/api/topic/:id', topicsController.remove);
  } else {
    console.warn((0, _unsupportedMessage2.default)('topics routes'));
  }
};

/**
 * Routes for express app

import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const topicsController = controllers && controllers.topics;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }

  // topic routes
  if (topicsController) {
    app.get('/topic', topicsController.all);
    app.post('/topic/:id', topicsController.add);
    app.put('/topic/:id', topicsController.update);
    app.delete('/topic/:id', topicsController.remove);
  } else {
    console.warn(unsupportedMessage('topics routes'));
  }
};*/

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressForceSsl = __webpack_require__(319);

var _expressForceSsl2 = _interopRequireDefault(_expressForceSsl);

var _https = __webpack_require__(321);

var _https2 = _interopRequireDefault(_https);

var _fs = __webpack_require__(72);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  var privateKey = _fs2.default.readFileSync((0, _path.join)(__dirname, './ssl/localhost.key'), 'utf8');
  var certificate = _fs2.default.readFileSync((0, _path.join)(__dirname, './ssl/localhost.crt'), 'utf8');
  var credentials = { key: privateKey, cert: certificate };
  app.use(_expressForceSsl2.default);

  return _https2.default.createServer(credentials, app);
};
/* WEBPACK VAR INJECTION */}.call(exports, "../server/init"))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _reactRouter = __webpack_require__(48);

var _routes = __webpack_require__(78);

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = __webpack_require__(163);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

var _pageRenderer = __webpack_require__(198);

var _pageRenderer2 = _interopRequireDefault(_pageRenderer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
function render(req, res) {
  var authenticated = req.isAuthenticated();
  var history = (0, _reactRouter.createMemoryHistory)();
  var store = (0, _configureStore2.default)({
    user: {
      authenticated: authenticated,
      isWaiting: false,
      message: ''
    }
  }, history);

  /*
   * From the react-router docs:
   *
   * This function is to be used for server-side rendering. It matches a set of routes to
   * a location, without rendering, and calls a callback(err, redirect, props)
   * when it's done.
   *
   * The function will create a `history` for you, passing additional `options` to create it.
   * These options can include `basename` to control the base name for URLs, as well as the pair
   * of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing.
   * You can also pass in an already instantiated `history` object, which can be constructed
   * however you like.
   *
   * The three arguments to the callback function you pass to `match` are:
   * - err:       A javascript Error object if an error occurred, `undefined` otherwise.
   * - redirect:  A `Location` object if the route is a redirect, `undefined` otherwise
   * - props:     The props you should pass to the routing context if the route matched,
   *              `undefined` otherwise.
   * If all three parameters are `undefined`, this means that there was no route found matching the
   * given location.
   */
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    if (err) {
      res.status(500).json(err);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      // This method waits for all render component
      // promises to resolve before returning to browser
      var html = (0, _pageRenderer2.default)();
      res.status(200).send(html);
    } else {
      res.sendStatus(404);
    }
  });
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * process.env.NODE_ENV - used to determine whether we generate a production or development bundle
 *
 * webpack --env.browser - used to determine whether to generate a browser or server bundle
 *
 * NOTE: browser/server is client/server-side rendering respectively in universal/isomorphic javascript
 *
 */
var PATHS = __webpack_require__(24);
var rules = __webpack_require__(205);
var plugins = __webpack_require__(200);
var externals = __webpack_require__(199);
var resolve = __webpack_require__(201);

module.exports = function () {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isProduction = "development" === 'production';
  var isBrowser = env.browser;
  console.log('Running webpack in ' + "development" + ' mode on ' + (isBrowser ? 'browser' : 'server'));

  var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  var node = { __dirname: true, __filename: true };

  var prodServerRender = {
    devtool: 'source-map',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: { rules: rules({ production: true, browser: false }) },
    resolve: resolve,
    plugins: plugins({ production: true, browser: false })
  };

  var prodBrowserRender = {
    devtool: 'cheap-module-source-map',
    context: PATHS.app,
    entry: { app: ['./client'] },
    node: node,
    output: {
      path: PATHS.assets,
      filename: '[chunkhash].js',
      chunkFilename: '[name].[chunkhash:6].js', // for code splitting. will work without but useful to set
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: true, browser: true }) },
    resolve: resolve,
    plugins: plugins({ production: true, browser: true })
  };

  var devBrowserRender = {
    devtool: 'eval',
    context: PATHS.app,
    entry: { app: ['./client', hotMiddlewareScript] },
    node: node,
    output: {
      path: PATHS.assets,
      filename: '[name].js',
      publicPath: PATHS.public
    },
    module: { rules: rules({ production: false, browser: true }) },
    resolve: resolve,
    plugins: plugins({ production: false, browser: true })
  };

  var devServerRender = {
    devtool: 'sourcemap',
    context: PATHS.app,
    entry: { server: '../server/index' },
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.compiled,
      filename: '[name].dev.js',
      publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: { rules: rules({ production: false, browser: false }) },
    resolve: resolve,
    plugins: plugins({ production: false, browser: false })
  };

  var prodConfig = isBrowser ? prodBrowserRender : prodServerRender;
  var devConfig = isBrowser ? devBrowserRender : devServerRender;
  var configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissMessage = dismissMessage;

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function dismissMessage() {
  return { type: types.DISMISS_MESSAGE };
} /* eslint consistent-return: 0, no-else-return: 0*/

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tickStop = exports.tickStart = undefined;

var _es6Promise = __webpack_require__(71);

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _sparkMd = __webpack_require__(119);

var _sparkMd2 = _interopRequireDefault(_sparkMd);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint consistent-return: 0, no-else-return: 0*/
(0, _es6Promise.polyfill)();

var tickStart = exports.tickStart = function tickStart() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (dispatch) {
    return dispatch({ type: types.TICK_START, delay: delay });
  };
};
var tickStop = exports.tickStop = function tickStop() {
  return function (dispatch) {
    return dispatch({ type: types.TICK_STOP });
  };
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = requireAuthentication;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _reactRouterRedux = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function requireAuthentication(Component) {
  var AuthenticatedComponent = function (_React$Component) {
    _inherits(AuthenticatedComponent, _React$Component);

    function AuthenticatedComponent() {
      _classCallCheck(this, AuthenticatedComponent);

      return _possibleConstructorReturn(this, (AuthenticatedComponent.__proto__ || Object.getPrototypeOf(AuthenticatedComponent)).apply(this, arguments));
    }

    _createClass(AuthenticatedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.checkAuth(this.props.isAuthenticated);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.checkAuth(nextProps.isAuthenticated);
      }
    }, {
      key: 'checkAuth',
      value: function checkAuth(isAuthenticated) {
        if (!isAuthenticated) {
          var redirectAfterLogin = this.props.location.pathname;
          this.props.dispatch((0, _reactRouterRedux.push)('/login'));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.isAuthenticated === true) return _react2.default.createElement(Component, this.props);
      }
    }]);

    return AuthenticatedComponent;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      isAuthenticated: state.user.authenticated
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent);
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackingID = exports.baseURL = exports.basicauth = exports.port = exports.host = undefined;

var _app = __webpack_require__(39);

var host = exports.host = process.env.HOSTNAME || 'localhost';
var port = exports.port = process.env.PORT || '80';
var basicauth = exports.basicauth = new Buffer('web:websecret').toString('base64');
var baseURL = exports.baseURL = _app.isDebug ? 'http://' + host + ':' + port : 'https://' + host;

var trackingID = exports.trackingID = null;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = exports.meta = exports.title = undefined;

var _chromeNinja192Precomposed = __webpack_require__(306);

var _chromeNinja192Precomposed2 = _interopRequireDefault(_chromeNinja192Precomposed);

var _appleNinja152Precomposed = __webpack_require__(305);

var _appleNinja152Precomposed2 = _interopRequireDefault(_appleNinja152Precomposed);

var _msNinja144Precomposed = __webpack_require__(309);

var _msNinja144Precomposed2 = _interopRequireDefault(_msNinja144Precomposed);

var _favicon = __webpack_require__(307);

var _favicon2 = _interopRequireDefault(_favicon);

var _app = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metaAssets = function metaAssets() {
  return [{ "charset": "utf-8" },
  // Meta descriptions are commonly used on search engine result pages to
  // display preview snippets for a given page.
  { "name": "description", "content": "Simple control system for development team" },
  // Setting IE=edge tells Internet Explorer to use the latest engine to
  //  render the page and execute Javascript
  { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
  // Using the viewport tag allows you to control the width and scaling of
  // the browser's viewport:
  // - include width=device-width to match the screen's width in
  // device-independent pixels
  // - include initial-scale=1 to establish 1:1 relationship between css pixels
  // and device-independent pixels
  // - ensure your page is accessible by not disabling user scaling.
  { "name": "viewport", "content": "width=device-width, initial-scale=1" },
  // Disable tap highlight on IE
  { "name": "msapplication-tap-highlight", "content": "no" },
  // Add to homescreen for Chrome on Android
  { "name": "mobile-web-app-capable", "content": "yes" },
  // Add to homescreen for Safari on IOS
  { "name": "apple-mobile-web-app-capable", "content": 'yes' }, { "name": "apple-mobile-web-app-status-bar-style", "content": "black" }, { "name": "apple-mobile-web-app-title", "content": "reactGo" },
  // Tile icon for Win8 (144x144 + tile color)
  { "name": "msapplication-TileImage", "content": _msNinja144Precomposed2.default }, { "name": "msapplication-TileColor", "content": '#3372DF' }];
}; /* Based on the template in Web Starter Kit :
   https://github.com/google/web-starter-kit/blob/master/app/index.html
   */


var linkAssets = function linkAssets() {
  var links = [
  // Add to homescreen for Chrome on Android
  { "rel": "icon", "href": _favicon2.default }, { "rel": "icon", "sizes": "192x192", "href": _chromeNinja192Precomposed2.default },
  // Add to homescreen for Safari on IOS
  { "rel": "apple-touch-icon", "sizes": "152x152", "href": _appleNinja152Precomposed2.default }, { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Roboto+Condensed", "type": "text/css" }, { "rel": "stylesheet", "href": "/assets/styles/main.css"
    // SEO: If your mobile URL is different from the desktop URL,
    // add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones
    // { 'rel': 'canonical', 'href': 'http://www.example.com/' }
  }];
  return _app.isDebug ? links.filter(function (l) {
    return l.rel !== "stylesheet";
  }) : links;
};

var title = exports.title = "TaskCRM pre-alpha";
var meta = exports.meta = metaAssets();
var link = exports.link = linkAssets();

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_bootstrap2.default);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
var About = function About() {
  return _react2.default.createElement(
    'div',
    { className: cx('about') },
    _react2.default.createElement(
      'h1',
      { className: cx('header') },
      'About Ninja Ocean'
    ),
    _react2.default.createElement(
      'div',
      { className: cx('container') },
      _react2.default.createElement(
        'div',
        { className: cx('row') },
        _react2.default.createElement(
          'div',
          { className: cx('col-md-4') },
          'col'
        ),
        _react2.default.createElement(
          'div',
          { className: cx('col-md-4') },
          'col'
        ),
        _react2.default.createElement(
          'div',
          { className: cx('col-md-4') },
          'col'
        )
      )
    ),
    _react2.default.createElement(
      'button',
      { className: cx(['btn', 'btn-primary']) },
      'Test'
    ),
    _react2.default.createElement(
      'div',
      { className: cx('description') },
      _react2.default.createElement(
        'p',
        null,
        'Imagine an ocean of ninjas. Now think of it as a metaphor.',
        _react2.default.createElement('br', null),
        'Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: cx('contribute') },
      _react2.default.createElement(
        'p',
        null,
        'Want to contribute? Help us out! If you think the code on \xA0',
        _react2.default.createElement(
          'a',
          { target: '_blank', href: 'https://github.com/choonkending/react-webpack-node' },
          'this repo'
        ),
        '\xA0could be improved, please create an issue\xA0',
        _react2.default.createElement(
          'a',
          { target: '_blank', href: 'https://github.com/choonkending/react-webpack-node/issues' },
          'here'
        ),
        '!'
      )
    )
  );
};

exports.default = About;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(19);

var _Navigation = __webpack_require__(137);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Message = __webpack_require__(136);

var _Message2 = _interopRequireDefault(_Message);

var _LoginOrRegister = __webpack_require__(75);

var _LoginOrRegister2 = _interopRequireDefault(_LoginOrRegister);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_bootstrap2.default);

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.body.classList.toggle(cx('skin-blue'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.classList.toggle(cx('skin-blue'));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          auth = _props.auth,
          children = _props.children;

      if (auth) {
        return _react2.default.createElement(
          'div',
          { className: cx('wrapper') },
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(_Message2.default, null),
          _react2.default.createElement(
            'div',
            { className: cx('container') },
            children
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: cx('container') },
          _react2.default.createElement(_LoginOrRegister2.default, null)
        );
      }
    }
  }]);

  return App;
}(_react.Component);

;

App.propTypes = {
  auth: _propTypes2.default.bool,
  children: _propTypes2.default.object
};

function mapStateToProps(state) {
  return {
    auth: state.user.authenticated
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
var Dashboard = function Dashboard() {
  return _react2.default.createElement(
    'div',
    null,
    'Welcome to the Dasboard. Stay tuned...'
  );
};

exports.default = Dashboard;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(19);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _messages = __webpack_require__(128);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_bootstrap2.default);

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.message ? setTimeout(function () {
        return _this2.props.dismissMessage();
      }.bind(this), 5000) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          type = _props.type,
          dismissMessage = _props.dismissMessage;


      return _react2.default.createElement(
        'div',
        { className: cx('message', {
            show: message && message.length > 0,
            success: type === 'SUCCESS',
            error: type === 'ERROR'
          }), onClick: dismissMessage },
        message
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  message: _propTypes2.default.string,
  type: _propTypes2.default.string,
  dismissMessage: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.message);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { dismissMessage: _messages.dismissMessage })(Message);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(48);

var _reactRedux = __webpack_require__(19);

var _users = __webpack_require__(40);

var _user2160x = __webpack_require__(310);

var _user2160x2 = _interopRequireDefault(_user2160x);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _reactstrap = __webpack_require__(343);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_bootstrap2.default);

var Navigation = function Navigation(_ref) {
  var user = _ref.user,
      logOut = _ref.logOut;

  return _react2.default.createElement(
    'header',
    { className: cx('main-header') },
    _react2.default.createElement(
      'a',
      { href: 'index2.html', className: cx('logo') },
      _react2.default.createElement(
        'span',
        { className: cx('logo-mini') },
        _react2.default.createElement(
          'b',
          null,
          'A'
        ),
        'LT'
      ),
      _react2.default.createElement(
        'span',
        { className: cx('logo-lg') },
        _react2.default.createElement(
          'b',
          null,
          'Admin'
        ),
        'LTE'
      )
    ),
    _react2.default.createElement(
      'nav',
      { className: cx('navbar', 'navbar-static-top'), role: 'navigation' },
      _react2.default.createElement(
        'a',
        { href: '#', className: cx('sidebar-toggle'), 'data-toggle': 'offcanvas', role: 'button' },
        _react2.default.createElement(
          'span',
          { className: cx('sr-only') },
          'Toggle navigation'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: cx('navbar-custom-menu') },
        _react2.default.createElement(
          'ul',
          { className: cx('nav', 'navbar-nav') },
          _react2.default.createElement(
            'li',
            { className: cx('dropdown', 'messages-menu') },
            _react2.default.createElement(
              'a',
              { href: '#', className: cx('dropdown-toggle'), 'data-toggle': 'dropdown' },
              _react2.default.createElement('i', { className: cx('fa', 'fa-envelope-o') }),
              _react2.default.createElement(
                'span',
                { className: cx('label', 'label-success') },
                '4'
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: cx('dropdown-menu') },
              _react2.default.createElement(
                'li',
                { className: cx('header') },
                'You have 4 messages'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'ul',
                  { className: cx('menu') },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement(
                        'div',
                        { className: cx('pull-left') },
                        _react2.default.createElement('img', { src: _user2160x2.default, className: cx('img-circle'), alt: 'User Image' })
                      ),
                      _react2.default.createElement(
                        'h4',
                        null,
                        'Support Team',
                        _react2.default.createElement(
                          'small',
                          null,
                          _react2.default.createElement('i', { className: cx('fa', 'fa-clock-o') }),
                          ' 5 mins'
                        )
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        'Why not buy a new awesome theme?'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: cx('footer') },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'See All Messages'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: cx('dropdown', 'notifications-menu') },
            _react2.default.createElement(
              'a',
              { href: '#', className: cx('dropdown-toggle'), 'data-toggle': 'dropdown' },
              _react2.default.createElement('i', { className: cx('fa', 'fa-bell-o') }),
              _react2.default.createElement(
                'span',
                { className: cx('label', 'label-warning') },
                '10'
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: cx('dropdown-menu') },
              _react2.default.createElement(
                'li',
                { className: cx('header') },
                'You have 10 notifications'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'ul',
                  { className: cx('menu') },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement('i', { className: cx('fa', 'fa-users', 'text-aqua') }),
                      ' 5 new members joined today'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: cx('footer') },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'View all'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: cx('dropdown', 'tasks-menu') },
            _react2.default.createElement(
              'a',
              { href: '#', className: cx('dropdown-toggle'), 'data-toggle': 'dropdown' },
              _react2.default.createElement('i', { className: cx('fa', 'fa-flag-o') }),
              _react2.default.createElement(
                'span',
                { className: cx('label', 'label-danger') },
                '9'
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: cx('dropdown-menu') },
              _react2.default.createElement(
                'li',
                { className: cx('header') },
                'You have 9 tasks'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'ul',
                  { className: cx('menu') },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement(
                        'h3',
                        null,
                        'Design some buttons',
                        _react2.default.createElement(
                          'small',
                          { className: cx('pull-right') },
                          '20%'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: cx('progress', 'xs') },
                        _react2.default.createElement(
                          'div',
                          { className: cx('progress-bar', 'progress-bar-aqua'), style: { width: "20%" }, role: 'progressbar', 'aria-valuenow': '20', 'aria-valuemin': '0', 'aria-valuemax': '100' },
                          _react2.default.createElement(
                            'span',
                            { className: cx('sr-only') },
                            '20% Complete'
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: cx('footer') },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'View all tasks'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            { className: cx('dropdown', 'user', 'user-menu') },
            _react2.default.createElement(
              'a',
              { href: '#', className: cx('dropdown-toggle'), 'data-toggle': 'dropdown' },
              _react2.default.createElement('img', { src: _user2160x2.default, className: cx('user-image'), alt: 'User Image' }),
              _react2.default.createElement(
                'span',
                { className: cx('hidden-xs') },
                'Alexander Pierce'
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: cx('dropdown-menu') },
              _react2.default.createElement(
                'li',
                { className: cx('user-header') },
                _react2.default.createElement('img', { src: _user2160x2.default, className: cx('img-circle'), alt: 'User Image' }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Alexander Pierce - Web Developer',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Member since Nov. 2012'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: cx('user-body') },
                _react2.default.createElement(
                  'div',
                  { className: cx('row') },
                  _react2.default.createElement(
                    'div',
                    { className: cx('col-xs-4', 'text-center') },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Followers'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: cx('col-xs-4', 'text-center') },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Sales'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: cx('col-xs-4', 'text-center') },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      'Friends'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: cx('user-footer') },
                _react2.default.createElement(
                  'div',
                  { className: cx('pull-left') },
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: cx('btn', 'btn-default', 'btn-flat') },
                    'Profile'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: cx('pull-right') },
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: cx('btn', 'btn-default', 'btn-flat') },
                    'Sign out'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#', 'data-toggle': 'control-sidebar' },
              _react2.default.createElement('i', { className: cx('fa', 'fa-gears') })
            )
          )
        )
      )
    )
  );
};

Navigation.propTypes = {
  user: _propTypes2.default.object,
  logOut: _propTypes2.default.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logOut: _users.logOut }, null, { pure: false })(Navigation);

/*

      <nav className={cx('navbar','navbar-toggleable-md','navbar-inverse','bg-inverse')} role="navigation">
        <button className={cx('navbar-toggler','navbar-toggler-right')} type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className={cx('navbar-toggler-icon')}></span>
        </button>
        <span className={cx('navbar-brand')} >TaskCRM</span>
        <ul className={cx('navbar-nav','mr-auto')}>
          <li className={cx('nav-item')}>
            <IndexLink className={cx('nav-link')} activeClassName={cx('active')} to="/" >Главная</IndexLink>
          </li>
          <li className={cx('nav-item')}>
            <Link className={cx('nav-link')} activeClassName={cx('active')} to="/about" >Тест</Link>
          </li>
          <li className={cx('nav-item')}>
            { user.authenticated ? (
              <Link className={cx('nav-link')} activeClassName={cx('active')} onClick={logOut} >Выйти</Link>
            ) : (
              <Link className={cx('nav-link')} activeClassName={cx('active')} to="/login">Войти</Link>
            )}
          </li>
        </ul>
      </nav>

 */

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(19);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _modules = __webpack_require__(77);

var _time = __webpack_require__(129);

var tickEvents = _interopRequireWildcard(_time);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_bootstrap2.default);

var Vote = function (_Component) {
  _inherits(Vote, _Component);

  function Vote() {
    _classCallCheck(this, Vote);

    return _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).apply(this, arguments));
  }

  _createClass(Vote, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchTopics();
      this.props.tickStart();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.tickStop();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          newTopic = _props.newTopic,
          topics = _props.topics,
          isAuth = _props.isAuth,
          typing = _props.typing,
          createTopic = _props.createTopic,
          destroyTopic = _props.destroyTopic,
          incrementCount = _props.incrementCount,
          decrementCount = _props.decrementCount,
          pauseTopic = _props.pauseTopic;


      return _react2.default.createElement(
        'div',
        { className: cx('container') },
        _react2.default.createElement(
          'div',
          { className: cx('row') },
          _react2.default.createElement(
            'div',
            { className: cx('col-md-12') },
            _react2.default.createElement(_modules.Tasks.Components.EntryBox, { topic: newTopic,
              onEntryChange: typing,
              onEntrySave: createTopic })
          ),
          _react2.default.createElement(
            'div',
            { className: cx('col-md-6') },
            _react2.default.createElement(_modules.Tasks.Components.MainSection, { topics: topics,
              onIncrement: incrementCount,
              onDecrement: decrementCount,
              onDestroy: destroyTopic,
              onPauseTopic: pauseTopic })
          ),
          _react2.default.createElement(
            'div',
            { className: cx('col-md-6') },
            _react2.default.createElement(_modules.Tasks.Components.Scoreboard, { topics: topics })
          )
        )
      );
    }
  }]);

  return Vote;
}(_react.Component);

Vote.propTypes = {
  fetchTopics: _propTypes2.default.func.isRequired,
  topics: _propTypes2.default.array.isRequired,
  typing: _propTypes2.default.func.isRequired,
  createTopic: _propTypes2.default.func.isRequired,
  destroyTopic: _propTypes2.default.func.isRequired,
  pauseTopic: _propTypes2.default.func.isRequired,
  incrementCount: _propTypes2.default.func.isRequired,
  decrementCount: _propTypes2.default.func.isRequired,
  newTopic: _propTypes2.default.string
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    newTopic: state.topic.newTopic,
    isAuth: state.user.authenticated
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
exports.default = (0, _reactRedux.connect)(mapStateToProps, _extends({}, _modules.Tasks.Actions, tickEvents))(Vote);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = promiseMiddleware;

var _users = __webpack_require__(40);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
* Redux middleware to handle promises
* As seen in: https://github.com/caljrimmer/isomorphic-redux-app
*/

function promiseMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      var promise = action.promise,
          type = action.type,
          success = action.success,
          failure = action.failure,
          rest = _objectWithoutProperties(action, ['promise', 'type', 'success', 'failure']);

      if (!promise) return next(action);

      console.log(action);
      var SUCCESS = success || type + '_SUCCESS';
      var REQUEST = type + '_REQUEST';
      var FAILURE = failure || type + '_FAILURE';
      next(_extends({}, rest, { type: REQUEST }));

      return promise.then(function (res) {
        var data = res.data;

        switch (typeof data === 'undefined' ? 'undefined' : _typeof(data)) {
          case 'string':
            next(_extends({}, rest, { type: SUCCESS }));
            break;
          default:
            if (Array.prototype === data.__proto__) {
              // Temporary solution
              next(_extends({}, rest, { data: data, type: SUCCESS }));
            } else {
              next(_extends({}, rest, data, { type: SUCCESS }));
            }
            break;
        }
        if (type == types.REFRESH_LOGIN) {
          var lastEvent = action.lastEvent;

          console.log(lastEvent);
          promise.bind();
        }
        return true;
      }).catch(function (_ref2) {
        var data = _ref2.data,
            response = _ref2.response;

        var _getState = getState(),
            refresh_token = _getState.user.refresh_token;

        if (response.status === 401) {
          var statusText = response.statusText;

          !refresh_token ? next(_extends({}, rest, { statusText: statusText, type: FAILURE })) : null;
          dispatch({ type: types.ACCESS_TOKEN_INVALID });
          dispatch((0, _users.refreshLogin)(refresh_token));
        } else {
          var _statusText = response.statusText;

          next(_extends({}, rest, { statusText: _statusText, type: FAILURE }));
        }
        return false;
      });
    };
  };
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = requestMiddleware;

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _users = __webpack_require__(40);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toType = function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

function requestMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      var request = action.request,
          type = action.type,
          success = action.success,
          failure = action.failure,
          rest = _objectWithoutProperties(action, ['request', 'type', 'success', 'failure']);

      var _getState = getState(),
          access_token = _getState.user.access_token;

      if (!request) return next(action);

      var SUCCESS = success || type + '_SUCCESS';
      var REQUEST = type + '_REQUEST';
      var FAILURE = failure || type + '_FAILURE';
      next(_extends({}, rest, { type: REQUEST }));

      var auth = !access_token ? { auth: { username: 'web', password: 'websecret' } } : { headers: { 'Authorization': 'Bearer ' + access_token } };

      _axios2.default.request(_extends({}, request, auth)).then(function (res) {
        var data = res.data;


        switch (toType(data)) {
          case 'string':
            next(_extends({}, rest, { type: SUCCESS }));
            break;
          case 'array':
            next(_extends({}, rest, { data: data, type: SUCCESS }));
            break;
          default:
            next(_extends({}, rest, data, { type: SUCCESS }));
            break;
        }

        if (type === types.REFRESH_LOGIN) dispatch(action.lastAction);
        return true;
      }).catch(function (_ref2) {
        var data = _ref2.data,
            response = _ref2.response;

        var _getState2 = getState(),
            refresh_token = _getState2.user.refresh_token;

        var statusText = response.statusText;

        console.log(response);
        dispatch(_extends({}, rest, { message: statusText, type: FAILURE }));

        switch (response.status) {
          case 401:
            dispatch({ type: types.ACCESS_TOKEN_INVALID });
            dispatch((0, _users.refreshLogin)(refresh_token, action));
            break;
        }

        return false;
      });
    };
  };
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tickMiddleware;

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function tickMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      if (action.type === types.TICK_START) {
        action.interval = setInterval(function () {
          return dispatch({ type: types.TICK_EVENT });
        }, action.delay || 100);
      } else if (action.type === types.TICK_STOP) {
        clearInterval(getState().timer.interval);
      }
      next(action);
    };
  };
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pauseTopic = exports.destroyTopic = exports.decrementCount = exports.incrementCount = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint consistent-return: 0, no-else-return: 0*/


exports.fetchTopics = fetchTopics;
exports.createTopic = createTopic;
exports.updateTopic = updateTopic;
exports.typing = typing;

var _es6Promise = __webpack_require__(71);

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _sparkMd = __webpack_require__(119);

var _sparkMd2 = _interopRequireDefault(_sparkMd);

var _lib = __webpack_require__(76);

var lib = _interopRequireWildcard(_lib);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(types);

(0, _es6Promise.polyfill)();

function fetchTopics() {
  return {
    type: types.GET_TOPICS,
    request: {
      method: 'get',
      url: '/api/topic/'
    }
  };
}

function createTopic(text) {
  var data = {
    count: 1,
    id: _sparkMd2.default.hash(text),
    text: text,
    startDate: new Date().toFormatString()
  };
  return {
    data: data,
    type: types.CREATE_TOPIC,
    request: {
      method: 'post',
      url: '/api/topic/' + _sparkMd2.default.hash(text),
      data: data
    }
  };
}

function updateTopic(method) {
  var dispatch_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var success_type = arguments[2];
  var request_data = arguments[3];

  return _extends({
    type: types.UPDATE_TOPIC,
    request: {
      method: method,
      url: '/api/topic/' + dispatch_data.id,
      data: request_data
    },
    success: success_type
  }, dispatch_data);
}

var incrementCount = exports.incrementCount = function incrementCount(id) {
  return updateTopic('put', { id: id }, types.INCREMENT_COUNT, { type: 'INCREMENT', isIncrement: true });
};
var decrementCount = exports.decrementCount = function decrementCount(id) {
  return updateTopic('put', { id: id }, types.DECREMENT_COUNT, { type: 'INCREMENT', isIncrement: false });
};
var destroyTopic = exports.destroyTopic = function destroyTopic(id) {
  return updateTopic('delete', { id: id }, types.DESTROY_TOPIC);
};
var pauseTopic = exports.pauseTopic = function pauseTopic(id) {
  return function (dispatch, getState) {
    var _getState = getState(),
        topic = _getState.topic;

    if (topic.topics.filter(function (topicItem) {
      return topicItem.id == id && (topicItem.stopDate === undefined || topicItem.stopDate == null);
    }).length > 0) {
      var date = new Date().toFormatString();
      dispatch(updateTopic('put', { id: id, stopDate: date }, types.STOP_TOPIC, { type: 'STOP_DATE', stopDate: date }));
    } else {
      var t = topic.topics.filter(function (topicItem) {
        return topicItem.id == id;
      })[0];
      var _date = new Date(Date.now() - (Date.parse(t.stopDate) - Date.parse(t.startDate))).toFormatString();
      dispatch(updateTopic('put', { id: id, startDate: _date }, types.START_TOPIC, { type: 'START_DATE', startDate: _date }));
    }
  };
};

function typing(text) {
  return {
    type: types.TYPING,
    newTopic: text
  };
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TopicTextInput = __webpack_require__(147);

var _TopicTextInput2 = _interopRequireDefault(_TopicTextInput);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_bootstrap2.default);

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
var EntryBox = function EntryBox(_ref) {
  var onEntryChange = _ref.onEntryChange,
      onEntrySave = _ref.onEntrySave,
      topic = _ref.topic;

  return _react2.default.createElement(
    'div',
    { className: cx('entrybox') },
    _react2.default.createElement(
      'h1',
      { className: cx('header') },
      'Vote for your top hack idea'
    ),
    _react2.default.createElement(_TopicTextInput2.default, {
      className: cx('input'),
      value: topic,
      placeholder: 'Suggest a hackday idea . . .',
      onEntryChange: onEntryChange,
      onEntrySave: onEntrySave })
  );
};

EntryBox.propTypes = {
  topic: _propTypes2.default.string,
  onEntryChange: _propTypes2.default.func.isRequired,
  onEntrySave: _propTypes2.default.func.isRequired
};

exports.default = EntryBox;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TopicItem = __webpack_require__(146);

var _TopicItem2 = _interopRequireDefault(_TopicItem);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_bootstrap2.default);

var MainSection = function MainSection(_ref) {
  var topics = _ref.topics,
      onIncrement = _ref.onIncrement,
      onDecrement = _ref.onDecrement,
      onDestroy = _ref.onDestroy,
      onPauseTopic = _ref.onPauseTopic;

  var topicItems = topics.map(function (topic, key) {
    return _react2.default.createElement(_TopicItem2.default, {
      index: key,
      id: topic.id,
      key: key,
      text: topic.text,
      incrementCount: onIncrement,
      decrementCount: onDecrement,
      destroyTopic: onDestroy,
      pauseTopic: onPauseTopic,
      pauseToggle: topic.stopDate ? true : false });
  });

  return _react2.default.createElement(
    'div',
    { className: cx('main-section') },
    _react2.default.createElement(
      'h3',
      { className: cx('header') },
      'Vote for your favorite hack day idea'
    ),
    _react2.default.createElement(
      'ul',
      { className: cx('list') },
      topicItems
    )
  );
};

MainSection.propTypes = {
  topics: _propTypes2.default.array.isRequired,
  onIncrement: _propTypes2.default.func.isRequired,
  onDecrement: _propTypes2.default.func.isRequired,
  onDestroy: _propTypes2.default.func.isRequired,
  onPauseTopic: _propTypes2.default.func.isRequired
};

exports.default = MainSection;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(19);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _lib = __webpack_require__(76);

var lib = _interopRequireWildcard(_lib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_bootstrap2.default);

var Scoreboard = function (_Component) {
  _inherits(Scoreboard, _Component);

  function Scoreboard(props) {
    _classCallCheck(this, Scoreboard);

    return _possibleConstructorReturn(this, (Scoreboard.__proto__ || Object.getPrototypeOf(Scoreboard)).call(this, props));
  }

  _createClass(Scoreboard, [{
    key: 'renderTopicList',
    value: function renderTopicList() {
      var topics = this.props.topics;

      return topics.map(function (topic, key) {
        var date = new Date((topic.stopDate ? Date.parse(topic.stopDate) : Date.now()) - Date.parse(topic.startDate));
        var days = date.toFormatLocale('year') + ' ';
        days += date.toFormatLocale('month') + ' ';
        days += date.toFormatLocale('day') + ' ';
        date = date.toFormatString('%H:%M:%S');

        return _react2.default.createElement(
          'li',
          { className: cx('item'), key: key },
          _react2.default.createElement(
            'span',
            { className: cx('topic') },
            topic.text
          ),
          _react2.default.createElement(
            'span',
            { className: cx('count') },
            days + date
          ),
          _react2.default.createElement(
            'span',
            { className: cx('count') },
            topic.count
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: cx('scoreboard') },
        _react2.default.createElement(
          'h3',
          { className: cx('header') },
          'Vote count'
        ),
        _react2.default.createElement(
          'ul',
          { className: cx('list') },
          this.renderTopicList()
        )
      );
    }
  }]);

  return Scoreboard;
}(_react.Component);

;

Scoreboard.propTypes = {
  topics: _propTypes2.default.array.isRequired
};

function mapStateToProps(state) {
  return {
    tick: state.timer.tick
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Scoreboard);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _bootstrap = __webpack_require__(12);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_bootstrap2.default);

var TopicItem = function TopicItem(_ref) {
  var text = _ref.text,
      id = _ref.id,
      incrementCount = _ref.incrementCount,
      decrementCount = _ref.decrementCount,
      destroyTopic = _ref.destroyTopic,
      pauseTopic = _ref.pauseTopic,
      pauseToggle = _ref.pauseToggle;

  var onIncrement = function onIncrement() {
    incrementCount(id);
  };
  var onDecrement = function onDecrement() {
    decrementCount(id);
  };
  var onDestroy = function onDestroy() {
    destroyTopic(id);
  };
  var onStop = function onStop() {
    pauseTopic(id);
  };

  return _react2.default.createElement(
    'li',
    { className: cx('topic-item'), key: id },
    _react2.default.createElement(
      'span',
      { className: cx('topic') },
      text
    ),
    _react2.default.createElement(
      'button',
      {
        className: cx('button', 'increment'),
        onClick: onIncrement },
      '+'
    ),
    _react2.default.createElement(
      'button',
      {
        className: cx('button', 'decrement'),
        onClick: onDecrement },
      '-'
    ),
    _react2.default.createElement(
      'button',
      {
        className: cx('button', 'destroy'),
        onClick: onDestroy },
      String.fromCharCode(215)
    ),
    _react2.default.createElement(
      'button',
      {
        className: cx('button', 'decrement'),
        onClick: onStop },
      String.fromCharCode(pauseToggle ? 9654 : 9632)
    )
  );
};

TopicItem.propTypes = {
  text: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  incrementCount: _propTypes2.default.func.isRequired,
  decrementCount: _propTypes2.default.func.isRequired,
  destroyTopic: _propTypes2.default.func.isRequired,
  pauseTopic: _propTypes2.default.func.isRequired
};

exports.default = TopicItem;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER_KEY_CODE = 13;

var TopicTextInput = function (_Component) {
  _inherits(TopicTextInput, _Component);

  function TopicTextInput(props) {
    _classCallCheck(this, TopicTextInput);

    var _this = _possibleConstructorReturn(this, (TopicTextInput.__proto__ || Object.getPrototypeOf(TopicTextInput)).call(this, props));

    _this.onSave = _this.onSave.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }
  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */


  _createClass(TopicTextInput, [{
    key: 'onSave',
    value: function onSave() {
      var _props = this.props,
          onEntrySave = _props.onEntrySave,
          value = _props.value;

      onEntrySave(value);
    }

    /*
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways. I personally think this makes it more reusable.
     */

  }, {
    key: 'onChange',
    value: function onChange(event) {
      var onEntryChange = this.props.onEntryChange;

      onEntryChange(event.target.value);
    }

    /*
     * @param  {object} event
     */

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        this.onSave();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          placeholder = _props2.placeholder,
          value = _props2.value;

      return _react2.default.createElement('input', { className: className,
        placeholder: placeholder,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        value: value,
        autoFocus: true });
    }
  }]);

  return TopicTextInput;
}(_react.Component);

exports.default = TopicTextInput;


TopicTextInput.propTypes = {
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onEntrySave: _propTypes2.default.func,
  onEntryChange: _propTypes2.default.func
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EntryBox = __webpack_require__(143);

Object.defineProperty(exports, 'EntryBox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EntryBox).default;
  }
});

var _Scoreboard = __webpack_require__(145);

Object.defineProperty(exports, 'Scoreboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Scoreboard).default;
  }
});

var _MainSection = __webpack_require__(144);

Object.defineProperty(exports, 'MainSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MainSection).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(142);

var Actions = _interopRequireWildcard(_actions);

var _components = __webpack_require__(148);

var Components = _interopRequireWildcard(_components);

var _reducers = __webpack_require__(150);

var Reducers = _interopRequireWildcard(_reducers);

var _types = __webpack_require__(151);

var Types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Tasks = { Actions: Actions, Components: Components, Reducers: Reducers, Types: Types };

exports.default = Tasks;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(27);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var topic = function topic() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case types.CREATE_TOPIC_SUCCESS:
      return {
        id: action.data.id,
        count: action.data.count,
        text: action.data.text,
        startDate: action.data.startDate
      };
    case types.INCREMENT_COUNT:
      if (state.id === action.id) {
        return _extends({}, state, { count: state.count + 1 });
      }
      return state;
    case types.DECREMENT_COUNT:
      if (state.id === action.id) {
        return _extends({}, state, { count: state.count - 1 });
      }
    case types.START_TOPIC:
      if (state.id === action.id) {
        return _extends({}, state, { startDate: action.startDate, stopDate: null });
      }
      return state;
    case types.STOP_TOPIC:
      if (state.id === action.id) {
        return _extends({}, state, { stopDate: action.stopDate });
      }
      return state;
    default:
      return state;
  }
};

var topics = function topics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case types.GET_TOPICS_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_TOPIC_SUCCESS:
      if (state.filter(function (topicItem) {
        return topicItem.id === action.data.id;
      }).length == 0) {
        return [].concat(_toConsumableArray(state), [topic(undefined, action)]);
      } else return state;
    case types.CREATE_TOPIC_FAILURE:
      return [];
    case types.DESTROY_TOPIC:
      return state.filter(function (t) {
        return t.id !== action.id;
      });
    case types.INCREMENT_COUNT:
    case types.DECREMENT_COUNT:
    case types.START_TOPIC:
    case types.STOP_TOPIC:
      return state.map(function (t) {
        return topic(t, action);
      });
    case types.PASSWORD_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
    case types.GET_TOPICS_FAILURE:
      return [];
    default:
      return state;
  }
};

var newTopic = function newTopic() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case types.TYPING:
      return action.newTopic;
    case types.CREATE_TOPIC_SUCCESS:
      return '';
    default:
      return state;
  }
};

var topicReducer = (0, _redux.combineReducers)({
  topics: topics,
  newTopic: newTopic
});

exports.default = topicReducer;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_TOPICS = exports.GET_TOPICS = 'GET_TOPICS';
var GET_TOPICS_REQUEST = exports.GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';
var GET_TOPICS_SUCCESS = exports.GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
var GET_TOPICS_FAILURE = exports.GET_TOPICS_FAILURE = 'GET_TOPICS_FAILURE';

var CREATE_TOPIC = exports.CREATE_TOPIC = 'CREATE_TOPIC';
var CREATE_TOPIC_REQUEST = exports.CREATE_TOPIC_REQUEST = 'CREATE_TOPIC_REQUEST';
var CREATE_TOPIC_SUCCESS = exports.CREATE_TOPIC_SUCCESS = 'CREATE_TOPIC_SUCCESS';
var CREATE_TOPIC_FAILURE = exports.CREATE_TOPIC_FAILURE = 'CREATE_TOPIC_FAILURE';

var UPDATE_TOPIC = exports.UPDATE_TOPIC = 'UPDATE_TOPIC';
var UPDATE_TOPIC_REQUEST = exports.UPDATE_TOPIC_REQUEST = 'UPDATE_TOPIC_REQUEST';
var UPDATE_TOPIC_SUCCESS = exports.UPDATE_TOPIC_SUCCESS = 'UPDATE_TOPIC_SUCCESS';
var UPDATE_TOPIC_FAILURE = exports.UPDATE_TOPIC_FAILURE = 'UPDATE_TOPIC_FAILURE';

var DISMISS_MESSAGE = exports.DISMISS_MESSAGE = 'DISMISS_MESSAGE';

var CREATE_REQUEST = exports.CREATE_REQUEST = 'CREATE_REQUEST';
var REQUEST_SUCCESS = exports.REQUEST_SUCCESS = 'REQUEST_SUCCESS';
var REQUEST_FAILURE = exports.REQUEST_FAILURE = 'REQUEST_FAILURE';

var INCREMENT_COUNT = exports.INCREMENT_COUNT = 'INCREMENT_COUNT';
var DECREMENT_COUNT = exports.DECREMENT_COUNT = 'DECREMENT_COUNT';
var DESTROY_TOPIC = exports.DESTROY_TOPIC = 'DESTROY_TOPIC';
var START_TOPIC = exports.START_TOPIC = 'START_TOPIC';
var STOP_TOPIC = exports.STOP_TOPIC = 'STOP_TOPIC';
var TYPING = exports.TYPING = 'TYPING';

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(28);

var _Page2 = _interopRequireDefault(_Page);

var _About = __webpack_require__(133);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Page2.default,
        this.getMetaData(),
        _react2.default.createElement(_About2.default, this.props)
      );
    }
  }, {
    key: 'getMetaData',
    value: function getMetaData() {
      return {
        title: this.pageTitle(),
        meta: this.pageMeta(),
        link: this.pageLink()
      };
    }
  }, {
    key: 'pageTitle',
    value: function pageTitle() {
      return 'About | reactGo';
    }
  }, {
    key: 'pageMeta',
    value: function pageMeta() {
      return [{ name: "description", content: "A reactGo example of life" }];
    }
  }, {
    key: 'pageLink',
    value: function pageLink() {
      return [];
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(28);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(134);

var _App2 = _interopRequireDefault(_App);

var _headAssets = __webpack_require__(132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    _Page2.default,
    { title: _headAssets.title, meta: _headAssets.meta, link: _headAssets.link },
    _react2.default.createElement(_App2.default, props)
  );
};

exports.default = App;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(28);

var _Page2 = _interopRequireDefault(_Page);

var _Dashboard = __webpack_require__(135);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Page2.default,
        this.getMetaData(),
        _react2.default.createElement(_Dashboard2.default, this.props)
      );
    }
  }, {
    key: 'getMetaData',
    value: function getMetaData() {
      return {
        title: this.pageTitle(),
        meta: this.pageMeta(),
        link: this.pageLink()
      };
    }
  }, {
    key: 'pageTitle',
    value: function pageTitle() {
      return 'Dashboard | reactGo';
    }
  }, {
    key: 'pageMeta',
    value: function pageMeta() {
      return [{ name: "description", content: "A reactGo example of a dashboard page" }];
    }
  }, {
    key: 'pageLink',
    value: function pageLink() {
      return [];
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(28);

var _Page2 = _interopRequireDefault(_Page);

var _LoginOrRegister = __webpack_require__(75);

var _LoginOrRegister2 = _interopRequireDefault(_LoginOrRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginOrRegister = function (_Component) {
  _inherits(LoginOrRegister, _Component);

  function LoginOrRegister() {
    _classCallCheck(this, LoginOrRegister);

    return _possibleConstructorReturn(this, (LoginOrRegister.__proto__ || Object.getPrototypeOf(LoginOrRegister)).apply(this, arguments));
  }

  _createClass(LoginOrRegister, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Page2.default,
        this.getMetaData(),
        _react2.default.createElement(_LoginOrRegister2.default, this.props)
      );
    }
  }, {
    key: 'getMetaData',
    value: function getMetaData() {
      return {
        title: this.pageTitle(),
        meta: this.pageMeta(),
        link: this.pageLink()
      };
    }
  }, {
    key: 'pageTitle',
    value: function pageTitle() {
      return 'LoginOrRegister | reactGo';
    }
  }, {
    key: 'pageMeta',
    value: function pageMeta() {
      return [{ name: "description", content: "A reactGo example of a login or register page" }];
    }
  }, {
    key: 'pageLink',
    value: function pageLink() {
      return [];
    }
  }]);

  return LoginOrRegister;
}(_react.Component);

exports.default = LoginOrRegister;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Page = __webpack_require__(28);

var _Page2 = _interopRequireDefault(_Page);

var _Vote = __webpack_require__(138);

var _Vote2 = _interopRequireDefault(_Vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vote = function (_Component) {
  _inherits(Vote, _Component);

  function Vote() {
    _classCallCheck(this, Vote);

    return _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).apply(this, arguments));
  }

  _createClass(Vote, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Page2.default,
        this.getMetaData(),
        _react2.default.createElement(_Vote2.default, this.props)
      );
    }
  }, {
    key: 'getMetaData',
    value: function getMetaData() {
      return {
        title: this.pageTitle(),
        meta: this.pageMeta(),
        link: this.pageLink()
      };
    }
  }, {
    key: 'pageTitle',
    value: function pageTitle() {
      return 'Vote | reactGo';
    }
  }, {
    key: 'pageMeta',
    value: function pageMeta() {
      return [{ name: "description", content: "A reactGo example of a voting page" }];
    }
  }, {
    key: 'pageLink',
    value: function pageLink() {
      return [];
    }
  }]);

  return Vote;
}(_react.Component);

exports.default = Vote;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(153);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _Vote = __webpack_require__(156);

Object.defineProperty(exports, 'Vote', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vote).default;
  }
});

var _Dashboard = __webpack_require__(154);

Object.defineProperty(exports, 'Dashboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dashboard).default;
  }
});

var _LoginOrRegister = __webpack_require__(155);

Object.defineProperty(exports, 'LoginOrRegister', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LoginOrRegister).default;
  }
});

var _About = __webpack_require__(152);

Object.defineProperty(exports, 'About', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_About).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(27);

var _reactRouterRedux = __webpack_require__(49);

var _user = __webpack_require__(162);

var _user2 = _interopRequireDefault(_user);

var _topic = __webpack_require__(161);

var _topic2 = _interopRequireDefault(_topic);

var _message = __webpack_require__(159);

var _message2 = _interopRequireDefault(_message);

var _timer = __webpack_require__(160);

var _timer2 = _interopRequireDefault(_timer);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  topic: _topic2.default,
  user: _user2.default,
  message: _message2.default,
  routing: _reactRouterRedux.routerReducer,
  timer: _timer2.default
});

exports.default = rootReducer;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = message;

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
function message() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { message: '', type: 'SUCCESS' };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS_USER:
      return _extends({}, state, { message: action.message, type: 'SUCCESS' });
    case types.DISMISS_MESSAGE:
      return _extends({}, state, { message: '', type: 'SUCCESS' });
    case types.CREATE_TOPIC_ERROR:
      return _extends({}, state, { message: action.message, type: 'ERROR' });
    default:
      return state;
  }
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(27);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tick = function tick() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case types.TICK_EVENT:
      return !state;
    default:
      return state;
  }
};

var interval = function interval() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case types.TICK_START:
      return action.interval;
    case types.TICK_STOP:
      return null;
    default:
      return state;
  }
};

var timerReducer = (0, _redux.combineReducers)({
  tick: tick,
  interval: interval
});

exports.default = timerReducer;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(27);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var topic = function topic() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case types.CREATE_TOPIC_SUCCESS:
      return {
        id: action.data.id,
        count: action.data.count,
        text: action.data.text,
        startDate: action.data.startDate
      };
    case types.INCREMENT_COUNT:
      if (state.id === action.id) {
        return _extends({}, state, { count: state.count + 1 });
      }
      return state;
    case types.DECREMENT_COUNT:
      if (state.id === action.id) {
        return _extends({}, state, { count: state.count - 1 });
      }
    case types.START_TOPIC:
      if (state.id === action.id) {
        return _extends({}, state, { startDate: action.startDate, stopDate: null });
      }
      return state;
    case types.STOP_TOPIC:
      if (state.id === action.id) {
        return _extends({}, state, { stopDate: action.stopDate });
      }
      return state;
    default:
      return state;
  }
};

var topics = function topics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case types.GET_TOPICS_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_TOPIC_SUCCESS:
      if (state.filter(function (topicItem) {
        return topicItem.id === action.data.id;
      }).length == 0) {
        return [].concat(_toConsumableArray(state), [topic(undefined, action)]);
      } else return state;
    case types.CREATE_TOPIC_FAILURE:
      return [];
    case types.DESTROY_TOPIC:
      return state.filter(function (t) {
        return t.id !== action.id;
      });
    case types.INCREMENT_COUNT:
    case types.DECREMENT_COUNT:
    case types.START_TOPIC:
    case types.STOP_TOPIC:
      return state.map(function (t) {
        return topic(t, action);
      });
    case types.PASSWORD_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
    case types.GET_TOPICS_FAILURE:
      return [];
    default:
      return state;
  }
};

var newTopic = function newTopic() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case types.TYPING:
      return action.newTopic;
    case types.CREATE_TOPIC_SUCCESS:
      return '';
    default:
      return state;
  }
};

var topicReducer = (0, _redux.combineReducers)({
  topics: topics,
  newTopic: newTopic
});

exports.default = topicReducer;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

var _redux = __webpack_require__(27);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var message = function message() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case types.PASSWORD_LOGIN_REQUEST:
    case types.REFRESH_LOGIN_REQUEST:
    case types.USER_LOGOUT_REQUEST:
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_USER:
    case types.SIGNUP_SUCCESS_USER:
      return '';
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
      return action.message ? action.message : '';
    default:
      return state;
  }
};

var isWaiting = function isWaiting() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case types.PASSWORD_LOGIN_REQUEST:
    case types.REFRESH_LOGIN_REQUEST:
    case types.USER_LOGOUT_REQUEST:
    case types.SIGNUP_USER:
      return true;
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.PASSWORD_LOGIN_FAILURE:
    case types.USER_LOGOUT_SUCCESS:
    case types.USER_LOGOUT_FAILURE:
    case types.REFRESH_LOGIN_SUCCESS:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_SUCCESS_USER:
    case types.SIGNUP_ERROR_USER:
      return false;
    default:
      return state;
  }
};

var authenticated = function authenticated() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS_USER:
    case types.USER_LOGOUT_FAILURE:
    case types.REFRESH_LOGIN_SUCCESS:
      return true;
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

var access_token = function access_token() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS_USER:
    case types.REFRESH_LOGIN_SUCCESS:
      return action.access_token;
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
    case types.ACCESS_TOKEN_INVALID:
      return '';
    default:
      return state;
  }
};

var refresh_token = function refresh_token() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case types.SIGNUP_SUCCESS_USER:
      return action.refresh;
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.REFRESH_LOGIN_SUCCESS:
      return action.refresh_token;
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.USER_LOGOUT_SUCCESS:
    case types.SIGNUP_ERROR_USER:
      return '';
    default:
      return state;
  }
};

var userReducer = (0, _redux.combineReducers)({
  isWaiting: isWaiting,
  authenticated: authenticated,
  message: message,
  access_token: access_token,
  refresh_token: refresh_token
});

exports.default = userReducer;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configureStore;

var _redux = __webpack_require__(27);

var _reactRouterRedux = __webpack_require__(49);

var _reduxThunk = __webpack_require__(345);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(344);

var _routes = __webpack_require__(78);

var _routes2 = _interopRequireDefault(_routes);

var _reducers = __webpack_require__(158);

var _reducers2 = _interopRequireDefault(_reducers);

var _promiseMiddleware = __webpack_require__(139);

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

var _requestMiddleware = __webpack_require__(140);

var _requestMiddleware2 = _interopRequireDefault(_requestMiddleware);

var _tickMiddleware = __webpack_require__(141);

var _tickMiddleware2 = _interopRequireDefault(_tickMiddleware);

var _app = __webpack_require__(39);

var _types = __webpack_require__(8);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
function configureStore(initialState, history) {
  // Installs hooks that always keep react-router and redux store in sync
  var middleware = [_reduxThunk2.default, _tickMiddleware2.default, _requestMiddleware2.default, _promiseMiddleware2.default];
  var store = void 0;

  if (_app.isClient && _app.isDebug) {
    middleware.push((0, _reduxLogger.createLogger)({
      predicate: function predicate(getState, action) {
        return action.type !== types.TICK_EVENT && action.type !== types.TICK_START && action.type !== types.TICK_STOP;
      }
      // collapsed: (getState, action) => action.type === 'TICK_EVENT'
    }));
    store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
      return f;
    }));
  } else {
    store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), function (f) {
      return f;
    }));
  }

  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', function () {
      var nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DB_TYPES = exports.DB_TYPES = {
  MONGO: 'MONGO',
  POSTGRES: 'POSTGRES',
  NONE: 'NONE'
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(47);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(51);

var _models = __webpack_require__(171);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // Find the appropriate database to connect to, default to localhost if not found.
  var connect = function connect() {
    _mongoose2.default.connect(_constants.db, function (err) {
      if (err) {
        console.log('===>  Error connecting to ' + _constants.db);
        console.log('Reason: ' + err);
      } else {
        console.log('===>  Succeeded in connecting to ' + _constants.db);
      }
    });
  };
  connect();

  _mongoose2.default.connection.on('error', console.log);
  _mongoose2.default.connection.on('disconnected', connect);

  (0, _models2.default)();
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oauth = exports.users = exports.topics = undefined;

var _topics = __webpack_require__(168);

var _topics2 = _interopRequireDefault(_topics);

var _users = __webpack_require__(169);

var _users2 = _interopRequireDefault(_users);

var _oauth = __webpack_require__(167);

var _oauth2 = _interopRequireDefault(_oauth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.topics = _topics2.default;
exports.users = _users2.default;
exports.oauth = _oauth2.default;
exports.default = {
  topics: _topics2.default,
  users: _users2.default,
  oauth: _oauth2.default
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oauth2orize = __webpack_require__(323);

var _oauth2orize2 = _interopRequireDefault(_oauth2orize);

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

var _crypto = __webpack_require__(317);

var _crypto2 = _interopRequireDefault(_crypto);

var _oauth = __webpack_require__(30);

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

var _constants = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _oauth2orize2.default.createServer();

server.exchange(_oauth2orize2.default.exchange.password(function (client, username, password, scope, done) {
    return _user2.default.findOne({ username: username }, function (err, user) {
        console.log('test!');
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Your email is not correct.' });
        user.comparePassword(password, function (passErr, isMatch) {
            if (!isMatch) return done(null, false, { message: 'Your email or password combination is not correct.' });
        });

        _oauth.RefreshTokenModel.remove({ userId: user.userId, clientId: client.clientId }, function (err) {
            if (err) return done(err);
        });
        _oauth.AccessTokenModel.remove({ userId: user.userId, clientId: client.clientId }, function (err) {
            if (err) return done(err);
        });

        var tokenValue = _crypto2.default.randomBytes(32).toString('base64');
        var refreshTokenValue = _crypto2.default.randomBytes(32).toString('base64');
        var token = new _oauth.AccessTokenModel({ token: tokenValue, clientId: client.clientId, userId: user.userId });
        var refreshToken = new _oauth.RefreshTokenModel({ token: refreshTokenValue, clientId: client.clientId, userId: user.userId });
        refreshToken.save(function (err) {
            if (err) return done(err);
        });

        var info = { scope: '*' };
        token.save(function (err, token) {
            if (err) return done(err);
            done(null, tokenValue, refreshTokenValue, { 'expires_in': _constants.expires_in, 'message': 'SUCCESS!' });
        });
    });
}));

server.exchange(_oauth2orize2.default.exchange.refreshToken(function (client, refreshToken, scope, done) {
    return _oauth.RefreshTokenModel.findOne({ token: refreshToken }, function (err, token) {
        if (err) return done(err);
        if (!token) return done(null, false);

        _user2.default.findById(token.userId, function (err, user) {
            if (err) return done(err);
            if (!user) return done(null, false);

            _oauth.RefreshTokenModel.remove({ userId: user.userId, clientId: client.clientId }, function (err) {
                if (err) return done(err);
            });
            _oauth.AccessTokenModel.remove({ userId: user.userId, clientId: client.clientId }, function (err) {
                if (err) return done(err);
            });

            var tokenValue = _crypto2.default.randomBytes(32).toString('base64');
            var refreshTokenValue = _crypto2.default.randomBytes(32).toString('base64');
            var token = new _oauth.AccessTokenModel({ token: tokenValue, clientId: client.clientId, userId: user.userId });
            var refreshToken = new _oauth.RefreshTokenModel({ token: refreshTokenValue, clientId: client.clientId, userId: user.userId });
            refreshToken.save(function (err) {
                if (err) return done(err);
            });

            var info = { scope: '*' };
            token.save(function (err, token) {
                if (err) return done(err);
                done(null, tokenValue, refreshTokenValue, { 'expires_in': _constants.expires_in });
            });
        });
    });
}));

exports.default = [_passport2.default.authenticate(['basic', 'oauth2-client-password'], { session: false }), server.token(), server.errorHandler()];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.add = add;
exports.update = update;
exports.remove = remove;

var _lodash = __webpack_require__(117);

var _lodash2 = _interopRequireDefault(_lodash);

var _topics = __webpack_require__(81);

var _topics2 = _interopRequireDefault(_topics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List
 */
function all(req, res) {
  _topics2.default.find({}).exec(function (err, topics) {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(topics);
  });
}

/**
 * Add a Topic
 */
function add(req, res) {
  _topics2.default.create(req.body, function (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

/**
 * Update a topic
 */
function update(req, res) {
  var query = { id: req.params.id };
  var type = req.body.type;
  var isIncrement = req.body.isIncrement;
  var startDate = req.body.startDate;
  var stopDate = req.body.stopDate;
  var omitKeys = ['id', '_id', '_v', 'isIncrement'];
  var data = _lodash2.default.omit(req.body, omitKeys);

  switch (type) {
    case 'FULL':
      _topics2.default.findOneAndUpdate(query, data, function (err) {
        if (err) {
          console.log('Error on save topic ID:' + req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }

        return res.status(200).send('Updated successfully');
      });
      break;
    case 'INCREMENT':
      _topics2.default.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, function (err) {
        if (err) {
          console.log('Error on save topic ID:' + req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }

        return res.status(200).send('Updated successfully');
      });
      break;
    case 'START_DATE':
      _topics2.default.findOneAndUpdate(query, { stopDate: undefined, startDate: startDate }, function (err) {
        if (err) {
          console.log('Error on save topic ID:' + req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }

        return res.status(200).send('Updated successfully');
      });
      break;
    case 'STOP_DATE':
      _topics2.default.findOneAndUpdate(query, { stopDate: stopDate }, function (err) {
        if (err) {
          console.log('Error on save topic ID:' + req.params.id);
          return res.status(500).send('We failed to save for some reason');
        }

        return res.status(200).send('Updated successfully');
      });
      break;
    default:
      return res.status(404);
      break;
  }
}

/**
 * Remove a topic
 */
function remove(req, res) {
  var query = { id: req.params.id };
  _topics2.default.findOneAndRemove(query, function (err) {
    if (err) {
      console.log('Error on delete topic ID:' + req.params.id);
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

exports.default = {
  all: all,
  add: add,
  update: update,
  remove: remove
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.signUp = signUp;

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * POST /login
 */
function login(req, res, next) {
  // Do email and password validation for the server
  _passport2.default.authenticate('local', function (authErr, user, info) {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, function (loginErr) {
      if (loginErr) return res.status(401).json({ message: loginErr });
      return res.status(200).json({
        message: 'You have been successfully logged in.'
      });
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
function logout(req, res) {
  // Do email and password validation for the server
  req.logout();
  res.redirect('/');
}

/**
 * POST /signup
 * Create a new local account
 */
function signUp(req, res, next) {
  var user = new _user2.default({
    email: req.body.email,
    password: req.body.password
  });

  _user2.default.findOne({ email: req.body.email }, function (findErr, existingUser) {
    if (existingUser) {
      return res.status(409).json({ message: 'Account with this email address already exists!' });
    }

    return user.save(function (saveErr) {
      if (saveErr) return next(saveErr);
      return req.logIn(user, function (loginErr) {
        if (loginErr) return res.status(401).json({ message: loginErr });
        return res.status(200).json({
          message: 'You have been successfully logged in.'
        });
      });
    });
  });
}

exports.default = {
  login: login,
  logout: logout,
  signUp: signUp
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passport = exports.controllers = exports.connect = undefined;

var _connect = __webpack_require__(165);

var _connect2 = _interopRequireDefault(_connect);

var _controllers = __webpack_require__(166);

var _controllers2 = _interopRequireDefault(_controllers);

var _passport = __webpack_require__(176);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.controllers = _controllers2.default;
exports.passport = _passport2.default;
exports.default = {
  connect: _connect2.default,
  controllers: _controllers2.default,
  passport: _passport2.default
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModels;
function loadModels() {
  __webpack_require__(81);
  __webpack_require__(22);
  __webpack_require__(30);
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oauth = __webpack_require__(30);

exports.default = function (username, password, done) {
    _oauth.ClientModel.findOne({ clientId: username }, function (err, client) {
        if (err) {
            return done(err);
        }
        if (!client) {
            return done(null, false);
        }
        if (client.clientSecret != password) {
            return done(null, false);
        }

        return done(null, client);
    });
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oauth = __webpack_require__(30);

var _constants = __webpack_require__(51);

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (accessToken, done) {
    _oauth.AccessTokenModel.findOne({ token: accessToken }, function (err, token) {
        if (err) return done(err);
        if (!token) return done(null, false);

        if (Math.round((Date.now() - token.created) / 1000) > _constants.expires_in) {
            _oauth.AccessTokenModel.remove({ token: accessToken }, function (err) {
                if (err) return done(err);
            });
            return done(null, false, { message: 'Token expired' });
        }

        _user2.default.findById(token.userId, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Unknown user' });
            }

            var info = { scope: '*' };
            done(null, user, info);
        });
    });
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oauth = __webpack_require__(30);

exports.default = function (clientId, clientSecret, done) {
    _oauth.ClientModel.findOne({ clientId: clientId }, function (err, client) {
        if (err) {
            return done(err);
        }
        if (!client) {
            return done(null, false);
        }
        if (client.clientSecret != clientSecret) {
            return done(null, false);
        }

        return done(null, client);
    });
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (id, done) {
  _user2.default.findById(id, function (err, user) {
    done(err, user);
  });
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bearer = exports.local = undefined;

var _deserializeUser = __webpack_require__(175);

var _deserializeUser2 = _interopRequireDefault(_deserializeUser);

var _local = __webpack_require__(177);

var _local2 = _interopRequireDefault(_local);

var _bearer = __webpack_require__(173);

var _bearer2 = _interopRequireDefault(_bearer);

var _client_password = __webpack_require__(174);

var _client_password2 = _interopRequireDefault(_client_password);

var _basic_http = __webpack_require__(172);

var _basic_http2 = _interopRequireDefault(_basic_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import google from './google';
exports.local = _local2.default;
exports.bearer = _bearer2.default;
exports.default = {
  local: _local2.default,
  bearer: _bearer2.default,
  client_password: _client_password2.default,
  basic_http: _basic_http2.default
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (email, password, done) {
  _user2.default.findOne({ email: email }, function (findErr, user) {
    if (!user) return done(null, false, { message: 'There is no record of the email ' + email + '.' });
    return user.comparePassword(password, function (passErr, isMatch) {
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { message: 'Your email or password combination is not correct.' });
    });
  });
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;
function connect() {}

exports.default = { connect: connect };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.session = exports.passport = exports.controllers = exports.connect = undefined;

var _sequelize = __webpack_require__(187);

var _session = __webpack_require__(181);

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _sequelize.connect;
exports.controllers = _sequelize.controllers;
exports.passport = _sequelize.passport;
exports.session = _session2.default;
exports.default = {
  connect: _sequelize.connect,
  controllers: _sequelize.controllers,
  passport: _sequelize.passport,
  session: _session2.default
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  development: {
    username: process.env.PGUSER || 'root',
    password: null,
    database: 'react_webpack_node_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: process.env.PGUSER || 'root',
    password: null,
    database: 'react_webpack_node_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.PGUSER || 'root',
    password: null,
    database: 'react_webpack_node_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressSession = __webpack_require__(115);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _pg = __webpack_require__(329);

var _pg2 = _interopRequireDefault(_pg);

var _connectPgSimple = __webpack_require__(316);

var _connectPgSimple2 = _interopRequireDefault(_connectPgSimple);

var _constants = __webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PGStore = (0, _connectPgSimple2.default)(_expressSession2.default);

exports.default = function () {
  return new PGStore({
    pg: _pg2.default,
    conString: _constants.db
  });
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(23);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = _models2.default.sequelize;

exports.default = function () {
  sequelize.authenticate().then(function () {
    console.log('Successfully connected to sequelize database');
  }, function (err) {
    console.log('Unable to connect to the sequelize database: ', err);
  });
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _appConfig = __webpack_require__(29);

var _sequelize_config = __webpack_require__(82);

var _sequelize_config2 = _interopRequireDefault(_sequelize_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _sequelize_config2.default[_appConfig.ENV];

var db = exports.db = process.env[config.use_env_variable] || config.dialect + '://' + config.username + ':' + config.password + '@' + config.host + '/' + config.database;

exports.default = {
  db: db
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.topics = undefined;

var _topics = __webpack_require__(185);

var _topics2 = _interopRequireDefault(_topics);

var _users = __webpack_require__(186);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.topics = _topics2.default;
exports.users = _users2.default;
exports.default = {
  topics: _topics2.default,
  users: _users2.default
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.add = add;
exports.update = update;
exports.remove = remove;

var _lodash = __webpack_require__(117);

var _lodash2 = _interopRequireDefault(_lodash);

var _models = __webpack_require__(23);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topic = _models2.default.Topic;
var sequelize = _models2.default.sequelize;

/**
 * List
 */
function all(req, res) {
  Topic.findAll().then(function (topics) {
    res.json(topics);
  }).catch(function (err) {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

/**
 * Add a Topic
 */
function add(req, res) {
  Topic.create(req.body).then(function () {
    res.status(200).send('OK');
  }).catch(function (err) {
    console.log(err);
    res.status(400).send(err);
  });
}

/**
 * Update a topic
 */
function update(req, res) {
  var query = { id: req.params.id };
  var isIncrement = req.body.isIncrement;
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _lodash2.default.omit(req.body, omitKeys);

  if (isFull) {
    Topic.update(data, { where: query }).then(function () {
      res.status(200).send('Updated successfully');
    }).catch(function (err) {
      console.log(err);
      res.status(500).send('We failed to save for some reason');
    });
  } else {
    var sign = isIncrement ? '+' : '-';
    Topic.update({
      count: sequelize.literal('count' + sign + '1')
    }, { where: query }).then(function () {
      res.status(200).send('Updated successfully');
    }).catch(function (err) {
      console.log(err);
      // Not sure if server status is the correct status to return
      res.status(500).send('We failed to save for some reason');
    });
  }
}

/**
 * Remove a topic
 */
function remove(req, res) {
  Topic.destroy({ where: { id: req.params.id } }).then(function () {
    res.status(200).send('Removed Successfully');
  }).catch(function (err) {
    console.log(err);
    res.status(500).send('We failed to delete for some reason');
  });
}

exports.default = {
  all: all,
  add: add,
  update: update,
  remove: remove
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.signUp = signUp;

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

var _models = __webpack_require__(23);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

/**
 * POST /login
 */
function login(req, res, next) {
  // Do email and password validation for the server
  _passport2.default.authenticate('local', function (authErr, user, info) {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, function (loginErr) {
      if (loginErr) return res.status(401).json({ message: loginErr });
      return res.status(200).json({
        message: 'You have been successfully logged in.'
      });
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
function logout(req, res) {
  // Do email and password validation for the server
  req.logout();
  res.redirect('/');
}

/**
 * POST /signup
 * Create a new local account
 */
function signUp(req, res, next) {
  User.findOne({ where: { email: req.body.email } }).then(function (existingUser) {
    if (existingUser) {
      return res.status(409).json({ message: 'Account with this email address already exists!' });
    }

    var user = User.build({
      email: req.body.email,
      password: req.body.password
    });

    return user.save().then(function () {
      req.logIn(user, function (err) {
        if (err) return res.status(401).json({ message: err });
        return res.status(200).json({
          message: 'You have been successfully logged in.'
        });
      });
    });
  }).catch(function (err) {
    return next(err);
  });
}

exports.default = {
  login: login,
  logout: logout,
  signUp: signUp
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passport = exports.controllers = exports.connect = undefined;

var _connect = __webpack_require__(182);

var _connect2 = _interopRequireDefault(_connect);

var _controllers = __webpack_require__(184);

var _controllers2 = _interopRequireDefault(_controllers);

var _passport = __webpack_require__(190);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.controllers = _controllers2.default;
exports.passport = _passport2.default;
exports.default = {
  connect: _connect2.default,
  controllers: _controllers2.default,
  passport: _passport2.default
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(23);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

exports.default = function (id, done) {
  User.findById(id).then(function (user) {
    done(null, user);
  }).catch(done);
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(23);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = _models2.default.sequelize;
var User = _models2.default.User;

/* eslint-disable no-param-reassign */
function attachGoogleAccount(user, profile, accessToken, done) {
  user.google = profile.id;
  user.name = user.name || profile.displayName;
  user.gender = user.gender || profile._json.gender;
  user.picture = user.picture || profile._json.picture;

  return sequelize.transaction(function (transaction) {
    return user.save({ transaction: transaction }).then(function () {
      return user.createToken({
        kind: 'google',
        accessToken: accessToken
      }, { transaction: transaction });
    });
  }).then(function () {
    return done(null, user, { message: 'Google account has been linked.' });
  });
}
/* eslint-enable no-param-reassign */

function createUserWithToken(profile, accessToken, done) {
  return sequelize.transaction(function (transaction) {
    return User.create({
      email: profile._json.emails[0].value,
      google: profile.id,
      name: profile.displayName,
      gender: profile._json.gender,
      picture: profile._json.picture
    }, { transaction: transaction }).then(function (user) {
      return user.createToken({
        kind: 'google',
        accessToken: accessToken
      }, { transaction: transaction }).then(function () {
        return done(null, user);
      });
    });
  });
}

var existingGoogleAccountMessage = ['There is already a Google account that belongs to you.', 'Sign in with that account or delete it, then link it with your current account.'].join(' ');

var existingEmailUserMessage = ['There is already an account using this email address.', 'Sign in to that account and link it with Google manually from Account Settings.'].join(' ');

exports.default = function (req, accessToken, refreshToken, profile, done) {
  return User.findOne({
    where: { google: profile.id }
  }).then(function (existingUser) {
    if (req.user) {
      if (existingUser) {
        return done(null, false, { message: existingGoogleAccountMessage });
      }
      return User.findById(req.user.id).then(function (user) {
        return attachGoogleAccount(user, profile, accessToken, done);
      });
    }

    if (existingUser) return done(null, existingUser);

    return User.findOne({
      where: { email: profile._json.emails[0].value }
    }).then(function (existingEmailUser) {
      if (existingEmailUser) {
        return done(null, false, { message: existingEmailUserMessage });
      }
      return createUserWithToken(profile, accessToken, done);
    });
  }).catch(function (err) {
    console.log(err);
    return done(null, false, { message: 'Something went wrong trying to authenticate' });
  });
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.local = exports.google = exports.deserializeUser = undefined;

var _deserializeUser = __webpack_require__(188);

var _deserializeUser2 = _interopRequireDefault(_deserializeUser);

var _google = __webpack_require__(189);

var _google2 = _interopRequireDefault(_google);

var _local = __webpack_require__(191);

var _local2 = _interopRequireDefault(_local);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.deserializeUser = _deserializeUser2.default;
exports.google = _google2.default;
exports.local = _local2.default;
exports.default = {
  deserializeUser: _deserializeUser2.default,
  google: _google2.default,
  local: _local2.default
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(23);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

exports.default = function (email, password, done) {
  return User.findOne({ where: { email: email } }).then(function (user) {
    if (!user) return done(null, false, { message: 'There is no record of the email ' + email + '.' });
    return user.comparePassword(password).then(function () {
      return done(null, user);
    }, function () {
      return done(null, false, { message: 'Your email/password combination is incorrect.' });
    });
  }).catch(function (err) {
    console.log(err);
    done(null, false, { message: 'Something went wrong trying to authenticate' });
  });
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(73);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(74);

var _webpack2 = _interopRequireDefault(_webpack);

var _app = __webpack_require__(39);

var _db = __webpack_require__(14);

var _passport = __webpack_require__(121);

var _passport2 = _interopRequireDefault(_passport);

var _express3 = __webpack_require__(120);

var _express4 = _interopRequireDefault(_express3);

var _routes = __webpack_require__(122);

var _routes2 = _interopRequireDefault(_routes);

var _secure = __webpack_require__(123);

var _secure2 = _interopRequireDefault(_secure);

var _middleware = __webpack_require__(124);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/*
 * Database-specific setup
 * - connect to MongoDB using mongoose
 * - register mongoose Schema
 */
(0, _db.connect)();
/*
 * REMOVE if you do not need passport configuration
 */
(0, _passport2.default)();

if (_app.isDebug) {
  // enable webpack hot module replacement
  var webpackDevMiddleware = __webpack_require__(126);
  var webpackHotMiddleware = __webpack_require__(127);
  var webpackConfig = __webpack_require__(125);
  var devBrowserConfig = webpackConfig({ browser: true });
  var compiler = (0, _webpack2.default)(devBrowserConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devBrowserConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

/*
 * Bootstrap application settings
 */
(0, _express4.default)(app);
app.disable('x-powered-by');

/*
 * REMOVE if you do not need any routes
 *
 * Note: Some of these routes have passport and database model dependencies
 */
(0, _routes2.default)(app);

/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
app.get('*', _middleware2.default);

if (_app.isDebug) app.listen(app.get('port'));else {
  var httpsServer = (0, _secure2.default)(app);
  app.use(forceSSL);
  httpsServer.listen(app.get('sslport'));
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                                Configuring Basic HTTP strategy to authenticate strategies
                                                                                                                                                                                                                                                                              */

var _passportHttp = __webpack_require__(325);

var _db = __webpack_require__(14);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (passport) {
  if (!_db.passport || !_db.passport.basic_http || !_typeof(_db.passport.basic_http) === 'function') {
    console.warn((0, _unsupportedMessage2.default)('passport-http'));
    return;
  }

  passport.use(new _passportHttp.BasicStrategy(_db.passport.basic_http));
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                                Configuring Bearer strategy to authenticate strategies
                                                                                                                                                                                                                                                                              */

var _passportHttpBearer = __webpack_require__(326);

var _db = __webpack_require__(14);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (passport) {
  if (!_db.passport || !_db.passport.bearer || !_typeof(_db.passport.bearer) === 'function') {
    console.warn((0, _unsupportedMessage2.default)('passport-http-bearer'));
    return;
  }

  passport.use(new _passportHttpBearer.Strategy(_db.passport.bearer));
};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                                Configuring OAuth Client Password strategy to authenticate strategies
                                                                                                                                                                                                                                                                              */

var _passportOauth2ClientPassword = __webpack_require__(328);

var _db = __webpack_require__(14);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (passport) {
  if (!_db.passport || !_db.passport.client_password || !_typeof(_db.passport.client_password) === 'function') {
    console.warn((0, _unsupportedMessage2.default)('passport-oauth2-client-password'));
    return;
  }

  passport.use(new _passportOauth2ClientPassword.Strategy(_db.passport.client_password));
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _passportGoogleOauth = __webpack_require__(324);

var _secrets = __webpack_require__(80);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

var _db = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (passport) {
  if (!_db.passport || !_db.passport.google || !_typeof(_db.passport.google) === 'function') {
    console.warn((0, _unsupportedMessage2.default)('passport-google-oauth'));
    return;
  }

  /*
  * OAuth Strategy taken modified from https://github.com/sahat/hackathon-starter/blob/master/config/passport.js
  *
  * - User is already logged in.
  *   - Check if there is an existing account with a provider id.
  *     - If there is, return an error message. (Account merging not supported)
  *     - Else link new OAuth account with currently logged-in user.
  * - User is not logged in.
  *   - Check if it's a returning user.
  *     - If returning user, sign in and we are done.
  *     - Else check if there is an existing account with user's email.
  *       - If there is, return an error message.
  *       - Else create a new account.
  *
  * The Google OAuth 2.0 authentication strategy authenticates
  * users using a Google account and OAuth 2.0 tokens.
  * The strategy requires a verify callback, which accepts these
  * credentials and calls done providing a user, as well
  * as options specifying a client ID, client secret, and callback URL.
  */
  passport.use(new _passportGoogleOauth.OAuth2Strategy({
    clientID: _secrets.google.clientID,
    clientSecret: _secrets.google.clientSecret,
    callbackURL: _secrets.google.callbackURL,
    passReqToCallback: true
  }, _db.passport.google));
};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                               Configuring local strategy to authenticate strategies
                                                                                                                                                                                                                                                                               Code modified from : https://github.com/madhums/node-express-mongoose-demo/blob/master/config/passport/local.js
                                                                                                                                                                                                                                                                               */

var _passportLocal = __webpack_require__(327);

var _db = __webpack_require__(14);

var _unsupportedMessage = __webpack_require__(17);

var _unsupportedMessage2 = _interopRequireDefault(_unsupportedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (passport) {
  if (!_db.passport || !_db.passport.local || !_typeof(_db.passport.local) === 'function') {
    console.warn((0, _unsupportedMessage2.default)('passport-local'));
    return;
  }

  /*
  By default, LocalStrategy expects to find credentials in parameters named username and password.
  If your site prefers to name these fields differently,
  options are available to change the defaults.
  */
  passport.use(new _passportLocal.Strategy({
    usernameField: 'email'
  }, _db.passport.local));
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(291);

var _reactRedux = __webpack_require__(19);

var _reactRouter = __webpack_require__(48);

var _app = __webpack_require__(131);

var _reactHelmet = __webpack_require__(118);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _bind = __webpack_require__(9);

var _bind2 = _interopRequireDefault(_bind);

var _AdminLTE = __webpack_require__(208);

var _AdminLTE2 = _interopRequireDefault(_AdminLTE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_AdminLTE2.default);

var createTrackingScript = function createTrackingScript(trackingID) {
  return '<script>\n(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n  ga(\'create\', ' + trackingID + ', \'auto\');\n  ga(\'send\', \'pageview\');\n  </script>';
};

var buildPage = function buildPage(headAssets) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + headAssets.title.toString() + '\n        ' + headAssets.meta.toString() + '\n        ' + headAssets.link.toString() + '\n      </head>\n      <body class="' + cx('skin-blue') + '">\n        <div id="app"></div>\n        ' + createTrackingScript(_app.trackingID) + '\n        <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>\n      </body>\n    </html>';
};

exports.default = function () {
  var headAssets = _reactHelmet2.default.rewind();
  return buildPage(headAssets);
};

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { RouterContext } from 'react-router';
// import Helmet from 'react-helmet';
// import staticAssets from './static-assets';

// const createApp = (store, props) => renderToString(
//   <Provider store={store}>
//     <RouterContext {...props} />
//   </Provider>
// );

// const buildPage = ({ componentHTML, initialState, headAssets }) => {
//   return `
// <!doctype html>
// <html>
//   <head>
//     ${headAssets.title.toString()}
//     ${headAssets.meta.toString()}
//     ${headAssets.link.toString()}
//     ${staticAssets.createStylesheets()}
//     ${staticAssets.createTrackingScript()}
//   </head>
//   <body>
//     <div id="app">${componentHTML}</div>
//     <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
//     ${staticAssets.createAppScript()}
//   </body>
// </html>`;
// };

// export default (store, props) => {
//   const initialState = store.getState();
//   const componentHTML = createApp(store, props);
//   const headAssets = Helmet.renderStatic();
//   return buildPage({ componentHTML, initialState, headAssets });
// };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = __webpack_require__(72);

var externalModules = fs.readdirSync('node_modules').filter(function (x) {
  return ['.bin'].indexOf(x) === -1;
}).reduce(function (acc, cur) {
  return Object.assign(acc, _defineProperty({}, cur, 'commonjs ' + cur));
}, {});

module.exports = externalModules;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(74);
var ExtractTextPlugin = __webpack_require__(116);
var ManifestPlugin = __webpack_require__(347);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var bannerOptions = { raw: true, banner: 'require("source-map-support").install();' };
  var compress = { warnings: false };
  var compileTimeConstantForMinification = { __PRODUCTION__: JSON.stringify(production) };

  if (!production && !browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.BannerPlugin(bannerOptions)];
  }
  if (!production && browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()];
  }
  if (production && !browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new webpack.BannerPlugin(bannerOptions), new webpack.optimize.UglifyJsPlugin({ compress: compress })];
  }
  if (production && browser) {
    return [new webpack.EnvironmentPlugin(['NODE_ENV']), new webpack.DefinePlugin(compileTimeConstantForMinification), new ExtractTextPlugin({
      filename: '[contenthash].css',
      allChunks: true
    }), new webpack.optimize.UglifyJsPlugin({ compress: compress }), new ManifestPlugin({
      fileName: 'manifest.json'
    })];
  }
  return [];
};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(24);

module.exports = {
  modules: [PATHS.app, PATHS.modules],
  extensions: ['.js', '.jsx', '.css']
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var path = __webpack_require__(38);
var ExtractTextPlugin = __webpack_require__(116);
var postcssImport = __webpack_require__(335);

var postcssSimpleVars = __webpack_require__(341);
var postcssMixins = __webpack_require__(337);
var postcssCalc = __webpack_require__(330);
var postcssFor = __webpack_require__(334);
var postcssColor = __webpack_require__(331);
var postcssConditionals = __webpack_require__(332);
var postcssNested = __webpack_require__(338);
var postcssMath = __webpack_require__(336);
var postcssPercentage = __webpack_require__(339);

var autoprefixer = __webpack_require__(312);

var postcssCssnext = __webpack_require__(333);
var postcssReporter = __webpack_require__(340);
var PATHS = __webpack_require__(24);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  /*
   * modules: boolean - Enable/Disable CSS Modules
   * importLoaders: number - Number of loaders applied before CSS loader
   *
   * Read more about css-loader options
   * https://webpack.js.org/loaders/css-loader/#options
   *
   * For server-side rendering we use css-loader/locals as we do not want to
   * embed CSS. However, we still require the mappings to insert as className in
   * our views.
   *
   * Referenced from: https://github.com/webpack-contrib/css-loader#css-scope
   *
   * For prerendering with extract-text-webpack-plugin you should use
   * css-loader/locals instead of style-loader!css-loader in the prerendering bundle.
   * It doesn't embed CSS but only exports the identifier mappings.
   */
  var localIndentName = 'localIdentName=[name]__[local]___[hash:base64:5]';

  var createCssLoaders = function createCssLoaders(embedCssInBundle) {
    return [{
      loader: embedCssInBundle ? 'css-loader' : 'css-loader/locals',
      options: {
        localIndentName: localIndentName,
        sourceMap: true,
        modules: true,
        importLoaders: 1
      }
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: [postcssImport({ path: path.resolve(PATHS.app, './css') }), postcssMixins(), postcssNested(), postcssFor(), postcssSimpleVars(), postcssCalc(), postcssMath(), postcssPercentage(), postcssColor(), postcssConditionals(), autoprefixer(), postcssReporter({ clearMessages: true })]
      }
    }];
  };

  var createBrowserLoaders = function createBrowserLoaders(extractCssToFile) {
    return function (loaders) {
      if (extractCssToFile) {
        return ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: loaders
        });
      }
      return [{ loader: 'style-loader' }].concat(_toConsumableArray(loaders));
    };
  };

  var serverLoaders = createCssLoaders(false);
  var browserLoaders = createBrowserLoaders(production)(createCssLoaders(true));

  return {
    test: /\.css$/,
    use: browser ? browserLoaders : serverLoaders,
    include: PATHS.app
  };
};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(24);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 100000 : _ref$limit;

  return [{
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader',
    options: { mimetype: 'application/font-woff', limit: limit },
    include: PATHS.app
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
    options: { limit: limit },
    include: PATHS.app
  }];
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(24);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 10000 : _ref$limit;

  return {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    loader: 'url-loader',
    options: { name: '[hash].[ext]', limit: limit },
    include: PATHS.app
  };
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = __webpack_require__(204);
var javascript = __webpack_require__(206);
var css = __webpack_require__(202);
var fonts = __webpack_require__(203);
var fonts_out = fonts();

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  return [javascript({ production: production, browser: browser }), css({ production: production, browser: browser }), image()];
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(24);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var enableHotModuleReplacement = !production && browser;
  var createPresets = function createPresets(enableHotModuleReplacement) {
    var presets = ['es2015', 'react', 'stage-0'];
    return enableHotModuleReplacement ? ['react-hmre'].concat(presets) : presets;
  };
  var presets = createPresets(enableHotModuleReplacement);

  var plugins = production ? ['transform-react-remove-prop-types', 'transform-react-constant-elements', 'transform-react-inline-elements'] : [];

  return {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    options: {
      presets: presets,
      plugins: plugins
    },
    exclude: PATHS.modules
  };
};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var emptyObject = __webpack_require__(41);
var _invariant = __webpack_require__(0);

if (true) {
  var warning = __webpack_require__(1);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (true) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (true) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (true) {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (true) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (true) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (true) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = {
	"skin-blue": "_205_5KquVCBLCiLvsQ7LFk",
	"main-header": "_2Jw40p_JrcM5vxPD9j6HEI",
	"navbar": "_1R4hWsXQe3gL83U3gJMel",
	"nav": "_3ELlNw5eokIla7v7_2UjiU",
	"open": "_2vt2jtswreBWl79aQcioy-",
	"active": "_25b_rzBdvlm4alGKsC3_FB",
	"sidebar-toggle": "_3qdDq2a1ob8WOUxBo3v_3g",
	"dropdown-menu": "_3p09c3tekekW5-KbEKS7NS",
	"divider": "_3ZV288Dk5OjJt8Xb1QKsrU",
	"logo": "_2pfRMmRNRLvRya9cB71QYw",
	"user-header": "_34VjbbNJ6QAzVhnxXm7nTE",
	"content-header": "_3vnbGyU0pF0pvWH4tt0Eef",
	"wrapper": "R7wttWBuHeHvK3OVa-ZKv",
	"main-sidebar": "kE0tBRxLrC_QTmX_2rNNd",
	"left-side": "_3fFQBqxrQBoWFrYvCvxYRe",
	"user-panel": "_159XYwz2j5cXmiD8yCeUI5",
	"info": "_1i-QlJ-Tmgr8wvQSKuxm2T",
	"sidebar-menu": "_3LlZWGM8PBc9kucjMDSWFH",
	"header": "_1kIwMnNMRUsVyNKHuU6mWY",
	"treeview-menu": "_3nQyK5iv1iHm6tSIxauKH9",
	"sidebar": "_2_Sh-Oqah9zIeO1n3rV9so",
	"sidebar-form": "_2mdN5s_gW5mU8ZQPPobvJI",
	"btn": "_2REXywgZYPQ5AZQKh36hOs",
	"input-group-btn": "_2aYhVotT9elsSuo-6jSIyU",
	"layout-top-nav": "_29g47zZXjjanT5bftmGXEf",
	"skin-blue-light": "_3VYZYq9cMYUoc21VwfEuX3",
	"content-wrapper": "bIdr3hFrXVK4ampchPx6q",
	"main-footer": "_2I0WG5dX0-kPD0tZ2idBUs",
	"sidebar-mini": "XUpHrWWKCr7FIgB6-PC3M",
	"sidebar-collapse": "_3WDoXKBW37XiA4Fjy_aLof",
	"skin-black": "lgQt0COnZWhyZ-_ryk2ZI",
	"navbar-toggle": "_1WZh9v9-2T3KPdFWb_PlA2",
	"navbar-brand": "_2ysn_dajlQZiY0tASS3RUm",
	"navbar-nav": "_16HFruoXaibeTacSmrDLFY",
	"navbar-custom-menu": "_1bIhuH7qdrqLO8beyq259q",
	"navbar-right": "_3KtSvFym6j3U1YAadlwbwS",
	"pace": "_28bAtb5V4jUeDpDeyMQ-H1",
	"pace-progress": "_2Ty2fyu_EN_DLX6YzdSbGY",
	"pace-activity": "_1Itl0cKdHBp1ZfXu9D_N59",
	"skin-black-light": "_3YMbz8652O0CA2UUC7-rol",
	"skin-green": "_1ZU0CXy2KsqY8HvHxyBwLl",
	"skin-green-light": "_2GtXFFZ8V9gh3gg9hZssFm",
	"skin-red": "_2jE2ioxasOn25i_65OTjMB",
	"skin-red-light": "_2lxnj2vttj9iPE1iAYEEVO",
	"skin-yellow": "_34IYqlI0JJCG8xebwSHuNh",
	"skin-yellow-light": "_EeODbuqmfQqhAMZxfs0U",
	"skin-purple": "UPwSNI1zphxJ3FpT97YvP",
	"skin-purple-light": "_3OOf6Z1zBQvxqfyK5zxyIy",
	"layout-boxed": "b5KdZlWtQK3YqfYe6m77H",
	"right-side": "_2T-0qc57xqHyDn3BxQkUPz",
	"sidebar-open": "_1jYf7tveorD7lDYa31x2cj",
	"fixed": "_3b82i6G2N26vssxhkWOKiG",
	"hold-transition": "_3J29XkRE2T8KAZHznFX69m",
	"content": "FANNqeeURpKgsagORVimn",
	"h1": "_2VMq2J6T4S8WUOWUs9e3Jj",
	"h2": "gGXWKQOufioOKHaAC50aY",
	"h3": "_2FxOpvz34AD1MYDpdqi9Wn",
	"h4": "_1IHyUfPB5PXU7ry4nXby1m",
	"h5": "_2rvRxtLkX_GRpgo8Xv27UR",
	"h6": "_3kibJJB44dSTThMvEhg40K",
	"page-header": "_1jqTY8d_eLvVy59ckyJe0v",
	"navbar-search-input": "_1iNGkcc7PgSWru4ZsvTVHZ",
	"form-control": "CidfEtc4SvriJ1eOs8h1K",
	"navbar-collapse": "_4wTco5j4yYZ4uEP1oXciz",
	"icon-bar": "_3QGHOM8m8IfW3HJgQZg4M6",
	"user": "_1PTb5pIvMKD-iPgoEIRuCg",
	"fa": "_2GG5yaNydhnQPMaKZTLyK-",
	"glyphicon": "_3crGM8F8KOzBaTeJUDqyas",
	"ion": "_1xFv4P2VBilYtjnCb_3eq",
	"label": "_2-gWOcaj8UufPuvPW25ZLg",
	"logo-lg": "_3JHcfLtiYbbR_hGdrVXh5S",
	"logo-mini": "_1EoZXTiNeHHcdCMrKCS-Gw",
	"breadcrumb": "_2GAtHyNTKo-AwS4jT7AFCb",
	"pull-left": "_3o-EuDfDDe_UVUnbPFijtD",
	"image": "_2kf7Y-Njx3p54WxaTnGHtO",
	"badge": "_1Sc0RU5m1LyBDpy1gvjOvj",
	"fa-angle-left": "_34oVGPBLXO8CGOtO9m5seV",
	"pull-right-container": "C2eovpwts_x8NSPZH4ySC",
	"fa-angle-down": "_2gcF5KpdLrTNzN6bkBPKm6",
	"treeview": "_1lmlax37gScfMdtAi4F4Pg",
	"pull-right": "_1btJIWSQ_Arv_bvhxSsoQZ",
	"control-sidebar-bg": "_3A2bc2Oz1tXVNXtkDUqtz3",
	"control-sidebar": "_1MvKfUOFr2NH5NviyIRKqL",
	"tab-content": "VPLgr2gfZAtarUw_wrZ70",
	"control-sidebar-open": "_3U1mmC4-j1uCeYMSJ_gtP1",
	"nav-tabs": "_3FRD7cZLSfN401jj2DS2lT",
	"control-sidebar-tabs": "_3PkFzVzA0ONNWdjlr4-OcQ",
	"icon": "_2w9LYTWXOaMK0sjaeA3q_a",
	"control-sidebar-heading": "_2gbT_w5lNRCFK4wTuKkV_H",
	"control-sidebar-subheading": "_1k034IQ6PuKKdLii03TsAJ",
	"control-sidebar-menu": "_1zxpnn3Iwf09YKZ-ebf9N7",
	"menu-icon": "_3O1CAlWSlqjkxREwONYdB1",
	"menu-info": "_3_ljxmgsRdc1wcDUDJaLKS",
	"progress": "zLi85yfrgHcnHWf4ISWEb",
	"control-sidebar-dark": "_3IWvdEySkU0qmRO9rJIu61",
	"control-sidebar-light": "_1tRXFPZfuM0j3ygohJm7lB",
	"notifications-menu": "_3UVyjkA9oDgGEyOoB_ocPK",
	"messages-menu": "_1Bn42PUcmdhS_4QxzuSU0-",
	"tasks-menu": "tOrkNU07zPsB-teW2R13g",
	"footer": "_1pcstpxOcngMb-0AnnUAF_",
	"menu": "_3ltGBAHTKNV9L5aRPndIrl",
	"user-menu": "_7h9kdNzUtmC956YlwpDWj",
	"user-body": "_2hiOpWGYqsfPPN3AqgXWSP",
	"user-footer": "rtpPYBir7Qce0_rAOKtZh",
	"btn-default": "_168Hed_xQw4HSvaY_BwS3z",
	"user-image": "_3diigy9UDJOlkw0YA0ZhhH",
	"dropup": "_2uAEdI1ej8py8hD93_WEsf",
	"animated-dropdown-menu": "_2G7-ZHFcKl5hr-1Q2Ubpsm",
	"flipInX": "_3KFpM9TqU5Wl2DBzY03mel",
	"form-group": "_3uqYxPHTwH4JwSILPxtuT_",
	"has-success": "_1RqcdPdV6gSikVza9Y-qlA",
	"input-group-addon": "_1RllhJj1xy5rqov6L8xAC1",
	"help-block": "_32W2Tx2ayhqVXcyX5T1-ol",
	"has-warning": "_3REqZ7HVjXKDsiMw0e9GOt",
	"has-error": "_1QWauv7ELdNMvr8OyOXeU1",
	"input-group": "_3ituJfMokOK52N55I0Sgko",
	"btn-group-vertical": "_2U-IOjB2ffW5sB8S7kmrRF",
	"btn-flat": "_3OyTT7x0lR0TeNS8_LuTrW",
	"icheck": "_1AcKpbh-1pOrsBPiENYVOv",
	"form-control-feedback": "_2ooLZQWcPKFVrEf6MjxF81",
	"input-lg": "_1CFo1eJL_pqKh4bTSQOoZK",
	"input-group-lg": "_2rcAzpu0YB6wpQ2cSmwqwf",
	"form-group-lg": "_17OZStX3cAu0p-d4jqO6Dr",
	"input-sm": "_3woXAInRuP7La6_KdxLaEI",
	"input-group-sm": "bAUcHNl-kM1GhIv_UV9lh",
	"form-group-sm": "_39obSBfi-y6xiyIxNyVEDP",
	"progress-bar": "_3RgngEU_hB3OcNZRKlXm6k",
	"sm": "_1Rc--jHk6Vfsclc8DtxVcj",
	"progress-sm": "_2SXzn8v5ThBgK9yXi5CJIi",
	"xs": "Qh9973fcAOuXSq9ZGk_pr",
	"progress-xs": "lOQc-QcNd4oakpTE9zHRi",
	"xxs": "_27odjl3N8YIKNjPRmaty9B",
	"progress-xxs": "OTh4_O-yXbYNx9t70VOMs",
	"vertical": "_18yhzQIt7AqeWrDGlmt-rx",
	"progress-group": "UvAYkMOjt-GgBiff6m2bb",
	"progress-text": "_3w-zrRVrNCl-VSx_I7a2y1",
	"progress-number": "_3OB9c4ZZnA_s2ZAtSuFBPf",
	"table": "_1cvu-S67BnCRsfXoHSWWxO",
	"progress-bar-light-blue": "_2b0fj7ILkFS6_jCB2E5lBp",
	"progress-bar-primary": "_3uCrTAGk3lziwcsRAYwlnH",
	"progress-striped": "_28xG4GzlNF01crPE5RpnZ0",
	"progress-bar-green": "_1TarEA_C3vlHpG0UmEzHwv",
	"progress-bar-success": "_2Cxv10uriZJxdl6d918xBT",
	"progress-bar-aqua": "_1syAZ-j05eistxpdu7VKO0",
	"progress-bar-info": "Osdy4O9knt491ZDC_66Eb",
	"progress-bar-yellow": "_1VN44DkiyVpfHtsCmbEbxs",
	"progress-bar-warning": "_11jOc3jfMkLQVb_ZqThec",
	"progress-bar-red": "_5d3ayA8us1OaTSx3u5pw5",
	"progress-bar-danger": "_3zewxlgDqdS7gORv9wL5_A",
	"small-box": "_1L32wNpBIIIXwygAf_b-DZ",
	"inner": "_1Te4s4-cm9N9ycqNjxH1PU",
	"small-box-footer": "_2lXevgfgMcj6gdYa4yXlMF",
	"box": "_3zjJvOpOcXUIduK7OLtRBc",
	"box-primary": "_1CHElDJQ1-lcFsPeEwmivg",
	"box-info": "_3-epo9XHbFlR3bBHZepber",
	"box-danger": "_3H9imrdlKQd36E7w_HtA0p",
	"box-warning": "_24_jKGrgAd3iuvO09WMYF6",
	"box-success": "_3ADcH_9olWKI17YYAbSCOG",
	"box-default": "_2n1rjbsvOjsImzxSU9psuO",
	"collapsed-box": "_1S7EdKUAOOo2HnPCTk6gH-",
	"box-body": "sNbqTLWTaPS5CYXmGX8ac",
	"box-footer": "Qi6kFz-ZQj9Lh1kExjrQT",
	"nav-stacked": "_2NvTY1Qt7dGKZTNJIHBIos",
	"height-control": "OFANZk9tjjqU-rGhI8Lab",
	"border-right": "_99AeJTsGWKz3Co7-bC_3H",
	"border-left": "CxsIZoPRNiDUTL6zQYZFr",
	"box-solid": "vdDkD2lpfKZ105hoSPRtb",
	"box-header": "_2bSbapRrpMYsNaX6y9CUHM",
	"box-tools": "_1xSgHz9wQNokrkgWQbLrOz",
	"box-group": "zYIaZc7fVMfiLxr9kLbgn",
	"knob-label": "_33ygOBIKwfrkpE9L3uKkW0",
	"overlay": "_3cRVaU22I3v4kWO3LJNOM8",
	"overlay-wrapper": "eRI5BXEUn4arMzT6URQ7V",
	"loading-img": "flbDcctjFTcBTzwCtyipC",
	"dark": "_2xZcffJaIuEYvQ9tY8Sp8o",
	"with-border": "jMuqOCHWfVvFGUHvnD47O",
	"box-title": "CnBCgfKysLpv4QoUNYavS",
	"btn-box-tool": "YWgnZ25wDhs-Vd_SJcFG0",
	"no-header": "Clrn8S8MgCrGRyZUOcqcu",
	"fc": "TEfdKukquB36gwYX6dYxa",
	"full-width-chart": "_1zxX33iuWivAZBQIxjvjXX",
	"no-padding": "EvRgKRoH9_8WMHYSgyrwr",
	"box-pane": "_3YoK1fIx81hPhSpaomWNQN",
	"box-pane-right": "RRRhQ7WBdyy5j3PYm9LRh",
	"chart-legend": "_1FRpSjGo_X7ghX0K2ugSSB",
	"box-comments": "_3LSNwsZ5AZxnUzPC3Dn60Z",
	"box-comment": "_1Ny6WrYJhyCgHTNrS6QJF1",
	"comment-text": "_14I14jPWJVp8T1PJiBUSvu",
	"username": "_3B2DLIae7wHyeyZEpRH4e8",
	"text-muted": "_2fZECjJdkk7VRzp0PEXt5t",
	"todo-list": "_3SulPiPKy77JA3P06kxJaI",
	"text": "yIV_Q1hRQls1oSQADOj7V",
	"tools": "_UeOO9d8lW7g7b33Qjfp5",
	"done": "_3xBnbl99ZjXL2h9b7ykJXZ",
	"danger": "NrsnmgvF-o33dv2Rn8stL",
	"warning": "_3p9nY24Grq_9aLH59-Nbll",
	"success": "pq3ZMcBk59oMDcvmHEt05",
	"primary": "Gs1Noc07iQ-h4EvAHi1xc",
	"handle": "_1Fmy84CV7KuBYe4qm455xe",
	"chat": "_18DlobIZwbmh2DIAqlU5hL",
	"item": "_2M1FeK8GX640oiI14lIp51",
	"online": "_1lzpXg1xLmqTBhWOFo571Y",
	"offline": "_2Sg0eBM9C-YIOKS9sX78Ka",
	"message": "_13_4PeUrhkYuthHRKsGK75",
	"name": "_858tzyCKm-PoG7jtrPne",
	"attachment": "_3RWmJC2MyJXf63po4cvr_M",
	"filename": "_1axa6D4Q-8atYGarJvSvqY",
	"box-input": "_32EHltpqdqAC45XQMX57Yq",
	"modal": "_2gkK617fo4M9-MQgnGZAeQ",
	"panel-body": "_1nQYKjVvmxMsK0eHh5yNDs",
	"info-box": "_2Fq4SypAiH--INW5lbpVBH",
	"info-box-icon": "_2KIPqzH1fXjcfgGPysoUsf",
	"info-box-content": "_319_9LH2RSzznrCwAq57d_",
	"info-box-number": "_3Uk-hYRPhB0yQEGnUxALTt",
	"progress-description": "_2qd2CK4DJW8Kdee8GLizyh",
	"info-box-text": "_36BwGF8_0ZST-D5ZV2nCfj",
	"info-box-more": "_2aNVpDuZDuhsNnL7q0WjrV",
	"timeline": "_2inJ8OSJsJfbKU89CZL_QO",
	"timeline-item": "_11zOJIajoJ149SDurHpiTX",
	"time": "_2Ow01UXUGm6v5o4EGp2Rcd",
	"timeline-header": "XBP1t_hrQY0ZBo3fVrfb9",
	"timeline-body": "_3HxcF_g-gPbYLvKbHNIvM5",
	"timeline-footer": "_3ibMGs1xKHvwA0RO4En-rZ",
	"time-label": "jjLCUJAL2mqaRoyud3Tff",
	"timeline-inverse": "LVbsn28jKiFKf-ZTF_euy",
	"uppercase": "_1Kl7oTJuLFvh92wKFkkeJf",
	"btn-file": "_2sz-BShYDJtrtEniRCzwSn",
	"hover": "JITDzWu3VwvezQZX3jugZ",
	"btn-primary": "_1x_tuXObHhoEg2xifR-wIN",
	"btn-success": "LjjDbVGE6qOtuJSGyX8q7",
	"btn-info": "_3IM9t95fgw_ADiEqTlvQBw",
	"btn-danger": "_39Qoj_3bfRTC1jJ3KDiUEY",
	"btn-warning": "_2Gmo1rQVlS9-Jk9WixSE-D",
	"btn-outline": "qDtzzzqX5_oynNaQFENWw",
	"btn-link": "_3RmBx-_Yi4_KHhWhYKAajC",
	"btn-app": "_1sUPvklhu4hZBaWrL-o31q",
	"callout": "_1_k4ElbeNzvpze1AU_qf-i",
	"highlight": "_2-QF3WhB_XDaudJ739ktBa",
	"callout-danger": "_2rFDN7-HltAC9JNoY1gZvl",
	"callout-warning": "_1PszV6vLSVQcyrG01VS5x0",
	"callout-info": "_1hE-fONGUE_QAVDstGID8u",
	"callout-success": "_9UZgBCyRyPyybXmcbPxAg",
	"alert": "RdK5cqvOpTkbtkpbMQav-",
	"close": "q9RRmuItmWwp8dypnPFXs",
	"alert-success": "_11fjra_-eP8C6xGwVsGyOB",
	"alert-danger": "_1jkFmQF-_LzVA8avwhzNc-",
	"alert-error": "_25IeFFoYfDt-7ory_8p55R",
	"alert-warning": "_2FCYWpEYUm99u7th8vXyOA",
	"alert-info": "_1ECnWzAx0-p4wo0PJ-jlwu",
	"nav-pills": "_2J6duORdb_vnzEgdHEGIr8",
	"nav-tabs-custom": "_2mZ69LQDqbyrpVAWm_uEiX",
	"dropdown": "_25E_5PokjCKYUqZYeI8zMK",
	"tab-primary": "_3TrVYNOwc8QvaOzpd-mNbg",
	"tab-info": "_3lQASRzbInEUjXtVhQILYl",
	"tab-danger": "_1JZ0mfh72KbkOdNx08Ow5F",
	"tab-warning": "_1jRy9iHRkpctF7UusIMgU_",
	"tab-success": "_1XQQaDFkS5vmIw13RfK01Y",
	"tab-default": "_2oWBcoXOJOzpcvbpgejQHb",
	"pagination": "_2sRWIwnHEtDgqMBZ34Q4eh",
	"pagination-flat": "_18W9e5dmqdXt41LyxVs6SM",
	"products-list": "_2pasQ4hHAVO0XEJZabc-Cj",
	"product-img": "_3aqq0IC0KkrwdOP2oMzGED",
	"product-info": "_3KqShI031ZB5fmqfh5q9ZD",
	"product-title": "TilXPZSg5sikb0KRvUf06",
	"product-description": "_3VrlvQc55XY3-mrfm35AE6",
	"product-list-in-box": "_10xDp2h1f7I8o1-pP5r3Fz",
	"table-bordered": "QYsVzlHYltYZTxaqfXrCG",
	"no-border": "_2BRAjfHLIUlBGHmAd1BMMt",
	"text-center": "FS8vKW0mC_EtEsb3lLfY1",
	"align": "_3XOtpJe1b5TZ2jZpOyg2nC",
	"label-default": "_3LzqD5fGmtChHVp1GHrKG",
	"direct-chat": "_3-LrEBAtnhDkx9ZWSWjxe8",
	"chat-pane-open": "_3YCdH0iSCYx57nkIuylxcB",
	"direct-chat-contacts": "_2kUjkGxm8USLjcbEZIBILl",
	"direct-chat-messages": "Z4E_En8HVr5EUngtPlxm3",
	"direct-chat-msg": "_3-sevGYtB2ykTm1xjj31nz",
	"direct-chat-text": "q3wEOjxD5lJtoxUQsWIp_",
	"right": "_25fW5Tz1LaUFH838v92-iy",
	"direct-chat-img": "D9qDVHxy-6UMl4sAW9VfK",
	"direct-chat-info": "d5Z689APLijr05k3Ie0Pd",
	"direct-chat-name": "_2TTueJIpStaTBvefLOcIAT",
	"direct-chat-timestamp": "_2fsbsntLj9c2PlI-FPvJdC",
	"direct-chat-contacts-open": "_19_ImzYymuRadAeJdHl5VW",
	"contacts-list": "_12HyPS9jhoYTlO9vta1IRB",
	"contacts-list-img": "_2cZoD0Nzvha_KU79zQMvx0",
	"contacts-list-info": "pGaX-odDmZjYIHdjGPuxO",
	"contacts-list-name": "_1Ekota2o1rGzM26sdmkgca",
	"contacts-list-status": "wUZ43h3UcGCgWr9SfIHUa",
	"contacts-list-date": "_23UJ8IlLBkXxq8Qrq_bgyV",
	"contacts-list-msg": "_1-o1k3URMVSogRerC5R3bM",
	"direct-chat-danger": "yhY8ZwtgFiZilJiautpiE",
	"direct-chat-primary": "_21N2c_CTqPOjND_GMdmgQI",
	"direct-chat-warning": "_1bxpeifDzt8saGEBLmFuDb",
	"direct-chat-success": "_1mztHVHT25KtXXw1Qt6_SH",
	"users-list": "_2aQSndCKLXic6aP4tm3tvJ",
	"users-list-name": "_2CTG1I362zNTSgOxQLNhZu",
	"users-list-date": "_147FhVLRqj3j8jyX09kelr",
	"carousel-control": "_3wpxNVcBFV2NHfn0tlAbpj",
	"left": "_3WJ-lKIzkE2JWbX54hBUba",
	"modal-content": "_25q4r3Fd8gOB3O4rVq3ve9",
	"modal-header": "_3n45T6hI27tJfLQGuKL70b",
	"modal-footer": "HGPkdLv3TXS7tyx2zY4jk",
	"modal-primary": "_38EfqI5sZ3vAIH76hPg3VO",
	"modal-warning": "_1roG1EUFfY6Vknl0r1Lu7K",
	"modal-info": "_3u_p7RwYME2jTVTFvF8Qow",
	"modal-success": "_2ij1GWNi0rnV3i6rXYztjZ",
	"modal-danger": "NltI39ArlKesSWmleAz_Y",
	"box-widget": "YRkEVU77RSh2ob0UYb2Df",
	"widget-user": "_17HCmXv0u_BQ3Bf-8dzYSb",
	"widget-user-header": "_3InmdGfLpmomMupUD1H46d",
	"widget-user-username": "_1jRGK5f1GdgR2MI8kEReJg",
	"widget-user-desc": "_1aa70NQ0VfCdtYdQlFXlfe",
	"widget-user-image": "_2Z-WlzloLBk_RlVRAR-g-A",
	"widget-user-2": "_3fBQNGFM4Uvr2tuz1U67Rm",
	"mailbox-messages": "_27zyiQ5rHs0nxnmYRY_3rO",
	"mailbox-controls": "yHgYz-L4pPXxHjyjktvA_",
	"mailbox-read-info": "_1KpFmo2dZsyWobqz_mbrwh",
	"mailbox-read-time": "_2mO_Vr6Nfw5iiLFe-vfzQD",
	"mailbox-read-message": "_56yOSWdf_CSagjMqacDur",
	"mailbox-attachments": "_3UR_8VMKD32a5HIaZDBGSI",
	"mailbox-attachment-name": "_2KSu4X0TOIXkosgs7sJlB7",
	"mailbox-attachment-icon": "_2DHf4X-4XyD2E5zOZKFBAI",
	"mailbox-attachment-info": "_2_7We9IijmDVl3XH_dj4ol",
	"mailbox-attachment-size": "Gu5emGC1aQc-tkEDxA3jt",
	"has-img": "_27nB0vtoXchs-nOwaQvOem",
	"lockscreen": "_2-G2snm4M_rTrvlAfvNEWX",
	"lockscreen-logo": "_3c0FsrHezz6TnHNgAmr_SJ",
	"lockscreen-wrapper": "_14h6jFZgCGdExkr_soEfP6",
	"lockscreen-name": "_1bxHy1KAI86R5bY4l7vuiQ",
	"lockscreen-item": "_1UPG12Xze7iUj8TG1OZfRA",
	"lockscreen-image": "tgKyqhbnTw2QcnDetKRCj",
	"lockscreen-credentials": "_3YQ-iH14d9ibGzvOKbGTyx",
	"lockscreen-footer": "_3CU9dYzu9Tt9Xphw3DwlXY",
	"login-logo": "_13wUCU3w-4XwljLA26Tf3i",
	"register-logo": "_3j3cqajTtDpXUIFhlZ02Ht",
	"login-page": "_27OJCTDiC7aL-7EzHPMY51",
	"register-page": "_2ckf4Ocbe4Gd_IyMk4UBLU",
	"login-box": "_2Z3EyzmH109OJiJPykaYCy",
	"register-box": "_3Vh8iMrrw64Gh2P3n93COD",
	"login-box-body": "_2xRt_kK_U-LRdbE_dva_6y",
	"register-box-body": "OfrW4rc3t_7eP2X4OLrut",
	"login-box-msg": "_1bgpRTy3k1QmAYX9sEaH_0",
	"register-box-msg": "_317JeEGOjLvVgA124vHhsW",
	"social-auth-links": "_1t1mDQo7vCcN-P-vl-F8it",
	"error-page": "_1XM6pe4qtGmhvu0ivkfStv",
	"headline": "_3h3FzkI5hogvT6TC4k9rlP",
	"error-content": "_1D32xRY95VffPYDPCocDGn",
	"invoice": "_1-Uipfa4WuPgz5V9htVtXN",
	"invoice-title": "_2G8oHh1bPA8sg1o_7BVEsk",
	"profile-user-img": "_3pf7v45vElxkM-GJu0d5W-",
	"profile-username": "ofKdvTPRYCgNYAQaILdeZ",
	"post": "x8bY3YjnNi75vxh6GnHGA",
	"user-block": "m277dQ41oIrT4BGFq-0od",
	"btn-social": "_23QKAUyaGwpNv1XexdPNgo",
	"btn-lg": "kHe572lWqp0fxj9c3_fiO",
	"btn-sm": "_1dZvMOZ0Rvwsz07GpB5eCr",
	"btn-xs": "_3Nq9x8l396nESDCehvWnCq",
	"btn-social-icon": "_3LHqY-eAdYU1X09HJJMkyn",
	"btn-adn": "_23fWP5RP22hFYCK3cgyItp",
	"focus": "_15j8rP8Ii1xZV0MuThE2Tk",
	"dropdown-toggle": "_3v9-X2xtebJFXbaHWiPE48",
	"btn-bitbucket": "d81fvfuZAIrbLz5ceaRIz",
	"btn-dropbox": "_1eEhm3ekjA6wz9y4x5JtqS",
	"btn-facebook": "_146yfBlGjIX6ebTqqGMNYz",
	"btn-flickr": "_3SSguNJhRGtvtuSRainIZI",
	"btn-foursquare": "pbAvo8r84h7Vdskp6nstd",
	"btn-github": "_3d55SWH-NEgnNxuDQVaFBy",
	"btn-google": "b1G-rtp4YH_KB5ryrwLIj",
	"btn-instagram": "_3lvTrwbOk4UJuPHnx5bRmn",
	"btn-linkedin": "_2YeNIQAoKoP3FHCPZJisq_",
	"btn-microsoft": "_3puRPN9L2QRe2nD2ip7spB",
	"btn-openid": "_3Ac45IEYyXN_g73QnqG09-",
	"btn-pinterest": "_2L2hfYJBlRZHJQjLfcg4eu",
	"btn-reddit": "WNm5DIdI4EldUlWAuxSKb",
	"btn-soundcloud": "_3XVIxPrM3ukudiAXlzTcu1",
	"btn-tumblr": "_2ELSP1Sas1Y5yDgGtZQtKU",
	"btn-twitter": "_2oXcJ-ML4x5pkO7EtzHe5I",
	"btn-vimeo": "u6gBQ1L4bbxcVaqqv_XD6",
	"btn-vk": "_3FDcFm-pccbJcqzfPRHkr0",
	"btn-yahoo": "m7WV25JiwNYQ-xvCI6g7a",
	"fc-button": "_2SNxOuYteGxRqp0TAchpZI",
	"fc-header-title": "_1vxSumuRxfTWjZM_qOMRKw",
	"fc-header-right": "_2U1maVL5PukNzj_4LVWpLu",
	"fc-header-left": "_2yxWIe7T0HHXgJJE8SmZE",
	"fc-widget-header": "_1WGfn2eklRa5OMV9ioA_xA",
	"fc-grid": "ApNogOBJIALkrJE09H2Uy",
	"fc-widget-content": "_28vp-xAEMr2peH0uEwkd3K",
	"fc-toolbar": "_1EDnpMuLaEZVhVTi3G9NEN",
	"fc-day-number": "_1ApO-XoAl3kgzceojdojUs",
	"fc-color-picker": "_2MI_HJfy7ub1hDxOt5mPfq",
	"add-new-event": "zOgPX-aENCTI_pWnG1wQo",
	"external-event": "_2Fa-QEJDWu278sNljiDPxb",
	"select2-container--default": "_2BUQ2l2CVpQx9Fto5lDFLV",
	"select2-container--focus": "_12C80_A98i2rVsgspYBCUB",
	"select2-selection": "_23zezR5pSRvpqQ5MBbwvMb",
	"select2-selection--single": "_3A7F5QIvfXATC3_5j0mOH5",
	"select2-container--open": "TZE7Dp-4bXfqaaqALQbNE",
	"select2-dropdown": "_1Jkh1dz3sXXOjVt-KrzDmL",
	"select2-results__option--highlighted": "_387M1P3tCLpGLRR05bYB0N",
	"select2-results__option": "_3F1FbCzRQF4PV8wi-RBPHt",
	"select2-container": "_1I7fVxbbHUX8Q_nFgt9tcs",
	"select2-selection__rendered": "_1uhsL9i_PMtVnpGFJ74H7a",
	"select2-selection__arrow": "_1JgH6eFQSszzrBY8vCr8Cc",
	"select2-search__field": "_2qFeLO0e7NWsAYtwwnn5t-",
	"select2-search--inline": "KbeMhTLRhGP3k5xqiC2wv",
	"select2-selection--multiple": "_3Ps4jO4zDuD20UbiuHh-hN",
	"select2-selection__choice": "_3rBY_dpi7Ibqc3Kbjt_iuW",
	"select2-selection__choice__remove": "hDKqQEjqnQknFx9o6JiuL",
	"pad": "_3KS0VWAPrnm89QxRHKAXc0",
	"margin": "_3d3NeEZQpv9N9rbI4hGl74",
	"margin-bottom": "_2UbgEBhe5Bujae2dNetobG",
	"margin-bottom-none": "_2eICKp1oL6aSSIVQGZCO_A",
	"margin-r-5": "_2xCA3flu-C19okioMWOwoQ",
	"inline": "_3nbvsmoYNn3qwGtQdZTKQB",
	"description-block": "_2IGQolMCEmzbEzYYvlXwB2",
	"description-header": "jkBXICx4EU7ftk7qLXDg3",
	"description-text": "_1FjGnrlRbftVvgTAr-NK1D",
	"bg-red": "_2W1nj6b7NA8GzYHBcsVKKU",
	"bg-yellow": "_3eWZLx59RqPVWqj-JgSWsT",
	"bg-aqua": "_265cespG9WTd9yk3F6tswM",
	"bg-blue": "kRGbqkqUolIum-Yy7khXv",
	"bg-light-blue": "_2ASQEwBj0SnxpGEd0p1ZgP",
	"bg-green": "_3L4yGu6evU31Om-D3S2yKr",
	"bg-navy": "gBRjLSh2zwSN3q8LdbeNO",
	"bg-teal": "_3G0_Vz-4pVlzlxu7iAMq7j",
	"bg-olive": "_3cXR9zAVRzYOYXY31tsfTx",
	"bg-lime": "_2Sdk7pEi3GeWUBsKnkaAK1",
	"bg-orange": "_1IVhfceJwLXuaM_cJeRB7J",
	"bg-fuchsia": "_2lye90YzEz6qU0SAWg9jv4",
	"bg-purple": "_1NFIwDiJLSq0rTPLvxaUG1",
	"bg-maroon": "_2JSDPA0nSYtAuMN12fNlR9",
	"bg-black": "qGSQOzoTDtAK2FzbPUUC4",
	"bg-red-active": "_2ztpTHdvnobT759kz4QdAM",
	"bg-yellow-active": "_38RJ3N1A08ec_6LtyymqQz",
	"bg-aqua-active": "_3ydUjAV03LpzJR8GmDk09b",
	"bg-blue-active": "D1T_OgfVtTloFkg-1otrS",
	"bg-light-blue-active": "_2IaXaVnLo8_GQ63oO78syn",
	"bg-green-active": "_1cGKCsSbgINL4Dw_iwOQ0l",
	"bg-navy-active": "_3qHF2ePwb-_EH8iiCSiWxJ",
	"bg-teal-active": "_21gj2pntXKqPiS50KFEjeK",
	"bg-olive-active": "_2jVZ5UBKnEcHvDNxRm0SQA",
	"bg-lime-active": "EJrC_y-JBv4UMwf-c5ta-",
	"bg-orange-active": "_1Tz8okpq5RR6Wq33gBqiJI",
	"bg-fuchsia-active": "_1k5vwjTcWH-J6fK_JPXqWC",
	"bg-purple-active": "_18A6jr0e5Ao7w8qKDb8adL",
	"bg-maroon-active": "_22sDKkDShZzQwyzDRT9Gl4",
	"bg-black-active": "_2H1YnlUcbip7yvEo1hBZ2-",
	"label-danger": "_1gheRM0ewiFhSl6tjQF0z1",
	"label-info": "_2CWQ9twlHtYQc8foIyAqp1",
	"label-warning": "_21xIRmqiCgnhlF6Xp0o6Nz",
	"label-primary": "n3uoDfOAC6sznSqSBsxUR",
	"label-success": "_2626m-hdq6q3vUVqKpxndp",
	"modal-body": "_3YivW0ORkybMSyv9om1RjD",
	"bg-gray": "_36UXxU37oZk4bf1BrOXtfc",
	"bg-gray-light": "_1iE0dk3AaTF0Onobh0FpAK",
	"bg-gray-active": "_114oj6F1FMVfzzAz-u0owk",
	"disabled": "fPit81cKZtLrSpHpiEPaf",
	"text-red": "_3ITYEUR3h0otNtT0NwDJau",
	"text-yellow": "_3_YbGIkmtdM-6FAh5CnQF_",
	"text-aqua": "_62h8fXIxSAp2mLzRTItcX",
	"text-blue": "_19kw-IPwjxJ4adzw02NNgL",
	"text-black": "_2W2O1SjSVFpIFBA5xfybdG",
	"text-light-blue": "bsNSohrl2nIsAEtiitfzK",
	"text-green": "H8DxxHpqt_F9SCitEpUPe",
	"text-gray": "_riRJnp574wk62Xxzl5nW",
	"text-navy": "_2JmFf1EfWlfVpAQi46G77o",
	"text-teal": "_1guCUgX00SfchJDOxnXL6h",
	"text-olive": "_2HAkBFvgt9i_sqSC4f_X3K",
	"text-lime": "EJLeTEg66JAhN43HixpYp",
	"text-orange": "_3TSvzpDaFKtpytKmdPDltf",
	"text-fuchsia": "_1rqhoWmFsOyP0E0BP7wXiz",
	"text-purple": "_3yvfmo9V-dT9W5ZXqsPwTc",
	"text-maroon": "_3rmQKo5aC3kth99UVosMoO",
	"link-muted": "_3tmC9MD5p1NeHHeplXtwEa",
	"link-black": "cd-1IigPMimD_x91K07Pn",
	"hide": "SOMUx0lOElAv26cFmeF4G",
	"no-margin": "_1uMRfCSfl7d8QL3f1VSONe",
	"no-shadow": "QngagieZclaS1Zo9XEBJk",
	"list-unstyled": "_3M3jtBzbf8TeawZ3bb_8q9",
	"list-group-unbordered": "TgcQhpVRnwGPcM_D3wzc3",
	"list-group-item": "KuogYoAM90P35BtRU1HDt",
	"flat": "_1A9EgoFimjext0uZ-ahdeQ",
	"text-bold": "_3ryFqgxuoA7lBDyj1pvIa1",
	"text-sm": "_3Fg_2g-s8mA5xW5DKWKxui",
	"jqstooltip": "y0H3nx8AewzRlIxuYvMRy",
	"bg-teal-gradient": "_2beyhoPG_FdXeEtAT7Yy9h",
	"bg-light-blue-gradient": "_2MXxVg5iCWLF-CNsp8fqRe",
	"bg-blue-gradient": "_1cmjsB6ClFt34NFnwzz2Lo",
	"bg-aqua-gradient": "_3BBKllRBChu3c_YsBXafQI",
	"bg-yellow-gradient": "G6tE4La2fjI_496_RqGTu",
	"bg-purple-gradient": "_2_S2JXRMQHiuEozIvJrvyw",
	"bg-green-gradient": "_2c-x2oFOKZyNvy98uMjlRp",
	"bg-red-gradient": "-UbFGFE1SFgB9J-hgOKTK",
	"bg-black-gradient": "_23OgEYgUu19syaTtQVSJeo",
	"bg-maroon-gradient": "_1gUH8FHWVYgzImRUAovh8N",
	"description-icon": "_2Rf6EA4lFGmrxwrDv_uPiT",
	"no-pad-top": "_36K7ACYUMOP_MB0mq49Va-",
	"position-static": "_2HAUrII1-60h-scrmHwD-s",
	"list-header": "_3nhRW2w_ojCBQUdVOyNe9x",
	"list-seperator": "_2Oo2TrAw7YfXhGATKTU-qt",
	"list-link": "_1OllxU--dIYpvtVzGk6zTB",
	"font-light": "_2yP1YT2jsAfc-uQMsttp0e",
	"description": "qDRaBJ1rMZIgL2ntrWoP4",
	"comment": "I5IifqwsNeMzc6bO7Pc9Z",
	"user-block-sm": "_1jYuvCq7IrFQNy16HCVacu",
	"img-sm": "_1-WMH9lGjW9ePJNsHXhW4u",
	"img-md": "qrJfYKnUStNZtezb8ruv8",
	"img-lg": "_1DCe0ocBDEyKeSeqQFg97n",
	"img-push": "_37NVLYjkds2UHUapmRs5aH",
	"img-bordered": "_2wDqG1mMEx2dSXxvhiL4l2",
	"img-bordered-sm": "e_ewzpRONJf3xV2VoKwtK",
	"attachment-block": "_2Y-_vT_TMGbyDsd_u4jK-R",
	"attachment-img": "_1weuWKbbHdqzKDY6_i-Z2P",
	"attachment-pushed": "_2IPfgjbVUIswJbjmE4903L",
	"attachment-heading": "_1Ab0LZ_aXXGbNr6YL6pFg1",
	"attachment-text": "_1zLN3JtIp6nodJ5b8cA2zD",
	"connectedSortable": "cNHv9oJDzx9qxX8R4j9v",
	"ui-helper-hidden-accessible": "_2NPafdIq5ElN2ErDEu8YBP",
	"sort-highlight": "wWIroLYuJcxdvnFY6uPdy",
	"full-opacity-hover": "_3H7hAFRHYOUoEgNuP9TUgU",
	"chart": "_3M8DOrDw0Q3rqb7tEuy1mi",
	"no-print": "_21txuAMFe3hnt48p5zrXkV",
	"invoice-col": "_1hsQzfj6OaZJO6EQKBp8AM",
	"table-responsive": "_3KyvbC58vot0X9v-y5Z5MK"
};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var camelize = __webpack_require__(209);

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var isTextNode = __webpack_require__(219);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var invariant = __webpack_require__(0);

/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */
function toArray(obj) {
  var length = obj.length;

  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
  // in old versions of Safari).
  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ?  true ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;

  !(typeof length === 'number') ?  true ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;

  !(length === 0 || length - 1 in obj) ?  true ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;

  !(typeof obj.callee !== 'function') ?  true ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;

  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
      // IE < 9 does not support Array#slice on collections objects
    }
  }

  // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.
  var ret = Array(length);
  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}

/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */
function hasArrayNature(obj) {
  return (
    // not null/false
    !!obj && (
    // arrays are objects, NodeLists are functions in Safari
    typeof obj == 'object' || typeof obj == 'function') &&
    // quacks like an array
    'length' in obj &&
    // not window
    !('setInterval' in obj) &&
    // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    typeof obj.nodeType != 'number' && (
    // a real array
    Array.isArray(obj) ||
    // arguments
    'callee' in obj ||
    // HTMLCollection/NodeList
    'item' in obj)
  );
}

/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */
function createArrayFromMixed(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}

module.exports = createArrayFromMixed;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/*eslint-disable fb-www/unsafe-html*/

var ExecutionEnvironment = __webpack_require__(6);

var createArrayFromMixed = __webpack_require__(212);
var getMarkupWrap = __webpack_require__(214);
var invariant = __webpack_require__(0);

/**
 * Dummy container used to render all markup.
 */
var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Pattern used by `getNodeName`.
 */
var nodeNamePattern = /^\s*<(\w+)/;

/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
function getNodeName(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}

/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
function createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode;
  !!!dummyNode ?  true ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
  var nodeName = getNodeName(markup);

  var wrap = nodeName && getMarkupWrap(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];

    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }

  var scripts = node.getElementsByTagName('script');
  if (scripts.length) {
    !handleScript ?  true ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
    createArrayFromMixed(scripts).forEach(handleScript);
  }

  var nodes = Array.from(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}

module.exports = createNodesFromMarkup;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/*eslint-disable fb-www/unsafe-html */

var ExecutionEnvironment = __webpack_require__(6);

var invariant = __webpack_require__(0);

/**
 * Dummy container used to detect which wraps are necessary.
 */
var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */

var shouldWrap = {};

var selectWrap = [1, '<select multiple="true">', '</select>'];
var tableWrap = [1, '<table>', '</table>'];
var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

var markupWrap = {
  '*': [1, '?<div>', '</div>'],

  'area': [1, '<map>', '</map>'],
  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  'legend': [1, '<fieldset>', '</fieldset>'],
  'param': [1, '<object>', '</object>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],

  'optgroup': selectWrap,
  'option': selectWrap,

  'caption': tableWrap,
  'colgroup': tableWrap,
  'tbody': tableWrap,
  'tfoot': tableWrap,
  'thead': tableWrap,

  'td': trWrap,
  'th': trWrap
};

// Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
svgElements.forEach(function (nodeName) {
  markupWrap[nodeName] = svgWrap;
  shouldWrap[nodeName] = true;
});

/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
function getMarkupWrap(nodeName) {
  !!!dummyNode ?  true ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
  if (!markupWrap.hasOwnProperty(nodeName)) {
    nodeName = '*';
  }
  if (!shouldWrap.hasOwnProperty(nodeName)) {
    if (nodeName === '*') {
      dummyNode.innerHTML = '<link />';
    } else {
      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
    }
    shouldWrap[nodeName] = !dummyNode.firstChild;
  }
  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
}

module.exports = getMarkupWrap;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */

function getUnboundedScrollPosition(scrollable) {
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    return {
      x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
      y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

module.exports = getUnboundedScrollPosition;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(216);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var isNode = __webpack_require__(218);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var ExecutionEnvironment = __webpack_require__(6);

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var performance = __webpack_require__(221);

var performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (performance.now) {
  performanceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(0);
  var warning = __webpack_require__(1);
  var ReactPropTypesSecret = __webpack_require__(87);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

var ReactPropTypesSecret = __webpack_require__(87);
var checkPropTypes = __webpack_require__(223);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ARIADOMPropertyConfig = {
  Properties: {
    // Global States and Properties
    'aria-current': 0, // state
    'aria-details': 0,
    'aria-disabled': 0, // state
    'aria-hidden': 0, // state
    'aria-invalid': 0, // state
    'aria-keyshortcuts': 0,
    'aria-label': 0,
    'aria-roledescription': 0,
    // Widget Attributes
    'aria-autocomplete': 0,
    'aria-checked': 0,
    'aria-expanded': 0,
    'aria-haspopup': 0,
    'aria-level': 0,
    'aria-modal': 0,
    'aria-multiline': 0,
    'aria-multiselectable': 0,
    'aria-orientation': 0,
    'aria-placeholder': 0,
    'aria-pressed': 0,
    'aria-readonly': 0,
    'aria-required': 0,
    'aria-selected': 0,
    'aria-sort': 0,
    'aria-valuemax': 0,
    'aria-valuemin': 0,
    'aria-valuenow': 0,
    'aria-valuetext': 0,
    // Live Region Attributes
    'aria-atomic': 0,
    'aria-busy': 0,
    'aria-live': 0,
    'aria-relevant': 0,
    // Drag-and-Drop Attributes
    'aria-dropeffect': 0,
    'aria-grabbed': 0,
    // Relationship Attributes
    'aria-activedescendant': 0,
    'aria-colcount': 0,
    'aria-colindex': 0,
    'aria-colspan': 0,
    'aria-controls': 0,
    'aria-describedby': 0,
    'aria-errormessage': 0,
    'aria-flowto': 0,
    'aria-labelledby': 0,
    'aria-owns': 0,
    'aria-posinset': 0,
    'aria-rowcount': 0,
    'aria-rowindex': 0,
    'aria-rowspan': 0,
    'aria-setsize': 0
  },
  DOMAttributeNames: {},
  DOMPropertyNames: {}
};

module.exports = ARIADOMPropertyConfig;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDOMComponentTree = __webpack_require__(5);

var focusNode = __webpack_require__(84);

var AutoFocusUtils = {
  focusDOMComponent: function () {
    focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
  }
};

module.exports = AutoFocusUtils;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPropagators = __webpack_require__(34);
var ExecutionEnvironment = __webpack_require__(6);
var FallbackCompositionState = __webpack_require__(233);
var SyntheticCompositionEvent = __webpack_require__(274);
var SyntheticInputEvent = __webpack_require__(277);

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var START_KEYCODE = 229;

var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

var documentMode = null;
if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
  documentMode = document.documentMode;
}

// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function isPresto() {
  var opera = window.opera;
  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
}

var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

// Events and their corresponding property names.
var eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: 'onBeforeInput',
      captured: 'onBeforeInputCapture'
    },
    dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste']
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionEnd',
      captured: 'onCompositionEndCapture'
    },
    dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionStart',
      captured: 'onCompositionStartCapture'
    },
    dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionUpdate',
      captured: 'onCompositionUpdateCapture'
    },
    dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
  }
};

// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
  !(nativeEvent.ctrlKey && nativeEvent.altKey);
}

/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case 'topCompositionStart':
      return eventTypes.compositionStart;
    case 'topCompositionEnd':
      return eventTypes.compositionEnd;
    case 'topCompositionUpdate':
      return eventTypes.compositionUpdate;
  }
}

/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionStart(topLevelType, nativeEvent) {
  return topLevelType === 'topKeyDown' && nativeEvent.keyCode === START_KEYCODE;
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case 'topKeyUp':
      // Command keys insert or clear IME input.
      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
    case 'topKeyDown':
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== START_KEYCODE;
    case 'topKeyPress':
    case 'topMouseDown':
    case 'topBlur':
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;
  }
}

/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;
  }
  return null;
}

// Track the current IME composition fallback object, if any.
var currentComposition = null;

/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var eventType;
  var fallbackData;

  if (canUseCompositionEvent) {
    eventType = getCompositionEventType(topLevelType);
  } else if (!currentComposition) {
    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionStart;
    }
  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
    eventType = eventTypes.compositionEnd;
  }

  if (!eventType) {
    return null;
  }

  if (useFallbackCompositionData) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!currentComposition && eventType === eventTypes.compositionStart) {
      currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
    } else if (eventType === eventTypes.compositionEnd) {
      if (currentComposition) {
        fallbackData = currentComposition.getData();
      }
    }
  }

  var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

  if (fallbackData) {
    // Inject data generated from fallback path into the synthetic event.
    // This matches the property of native CompositionEventInterface.
    event.data = fallbackData;
  } else {
    var customData = getDataFromCustomEvent(nativeEvent);
    if (customData !== null) {
      event.data = customData;
    }
  }

  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function getNativeBeforeInputChars(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case 'topCompositionEnd':
      return getDataFromCustomEvent(nativeEvent);
    case 'topKeyPress':
      /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
      var which = nativeEvent.which;
      if (which !== SPACEBAR_CODE) {
        return null;
      }

      hasSpaceKeypress = true;
      return SPACEBAR_CHAR;

    case 'topTextInput':
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data;

      // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to blacklist it.
      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
        return null;
      }

      return chars;

    default:
      // For other native event types, do nothing.
      return null;
  }
}

/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  // If composition event is available, we extract a string only at
  // compositionevent, otherwise extract it at fallback events.
  if (currentComposition) {
    if (topLevelType === 'topCompositionEnd' || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      var chars = currentComposition.getData();
      FallbackCompositionState.release(currentComposition);
      currentComposition = null;
      return chars;
    }
    return null;
  }

  switch (topLevelType) {
    case 'topPaste':
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;
    case 'topKeyPress':
      /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
        return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case 'topCompositionEnd':
      return useFallbackCompositionData ? null : nativeEvent.data;
    default:
      return null;
  }
}

/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */
function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var chars;

  if (canUseTextInputEvent) {
    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
  } else {
    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
  }

  // If no characters are being inserted, no BeforeInput event should
  // be fired.
  if (!chars) {
    return null;
  }

  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

  event.data = chars;
  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */
var BeforeInputEventPlugin = {
  eventTypes: eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
  }
};

module.exports = BeforeInputEventPlugin;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var CSSProperty = __webpack_require__(88);
var ExecutionEnvironment = __webpack_require__(6);
var ReactInstrumentation = __webpack_require__(11);

var camelizeStyleName = __webpack_require__(210);
var dangerousStyleValue = __webpack_require__(284);
var hyphenateStyleName = __webpack_require__(217);
var memoizeStringOnly = __webpack_require__(220);
var warning = __webpack_require__(1);

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);
});

var hasShorthandPropertyBug = false;
var styleFloatAccessor = 'cssFloat';
if (ExecutionEnvironment.canUseDOM) {
  var tempStyle = document.createElement('div').style;
  try {
    // IE8 throws "Invalid argument." if resetting shorthand style properties.
    tempStyle.font = '';
  } catch (e) {
    hasShorthandPropertyBug = true;
  }
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor = 'styleFloat';
  }
}

if (true) {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
  };

  var warnBadVendoredStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
     true ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
  };

  var warnStyleValueWithSemicolon = function (name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
     true ? warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var warnStyleValueIsNaN = function (name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
     true ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
  };

  var checkRenderMessage = function (owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function (name, value, component) {
    var owner;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var CSSPropertyOperations = {
  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */
  createMarkupForStyles: function (styles, component) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = styles[styleName];
      if (true) {
        if (!isCustomProperty) {
          warnValidStyle(styleName, styleValue, component);
        }
      }
      if (styleValue != null) {
        serialized += processStyleName(styleName) + ':';
        serialized += dangerousStyleValue(styleName, styleValue, component, isCustomProperty) + ';';
      }
    }
    return serialized || null;
  },

  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */
  setValueForStyles: function (node, styles, component) {
    if (true) {
      ReactInstrumentation.debugTool.onHostOperation({
        instanceID: component._debugID,
        type: 'update styles',
        payload: styles
      });
    }

    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var isCustomProperty = styleName.indexOf('--') === 0;
      if (true) {
        if (!isCustomProperty) {
          warnValidStyle(styleName, styles[styleName], component);
        }
      }
      var styleValue = dangerousStyleValue(styleName, styles[styleName], component, isCustomProperty);
      if (styleName === 'float' || styleName === 'cssFloat') {
        styleName = styleFloatAccessor;
      }
      if (isCustomProperty) {
        style.setProperty(styleName, styleValue);
      } else if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';
          }
        } else {
          style[styleName] = '';
        }
      }
    }
  }
};

module.exports = CSSPropertyOperations;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPluginHub = __webpack_require__(33);
var EventPropagators = __webpack_require__(34);
var ExecutionEnvironment = __webpack_require__(6);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactUpdates = __webpack_require__(15);
var SyntheticEvent = __webpack_require__(16);

var inputValueTracking = __webpack_require__(104);
var getEventTarget = __webpack_require__(66);
var isEventSupported = __webpack_require__(67);
var isTextInputElement = __webpack_require__(106);

var eventTypes = {
  change: {
    phasedRegistrationNames: {
      bubbled: 'onChange',
      captured: 'onChangeCapture'
    },
    dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange']
  }
};

function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
  var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, target);
  event.type = 'change';
  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}
/**
 * For IE shims
 */
var activeElement = null;
var activeElementInst = null;

/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
}

var doesChangeEventBubble = false;
if (ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  doesChangeEventBubble = isEventSupported('change') && (!document.documentMode || document.documentMode > 8);
}

function manualDispatchChangeEvent(nativeEvent) {
  var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));

  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  ReactUpdates.batchedUpdates(runEventInBatch, event);
}

function runEventInBatch(event) {
  EventPluginHub.enqueueEvents(event);
  EventPluginHub.processEventQueue(false);
}

function startWatchingForChangeEventIE8(target, targetInst) {
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
}

function stopWatchingForChangeEventIE8() {
  if (!activeElement) {
    return;
  }
  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
  activeElement = null;
  activeElementInst = null;
}

function getInstIfValueChanged(targetInst, nativeEvent) {
  var updated = inputValueTracking.updateValueIfChanged(targetInst);
  var simulated = nativeEvent.simulated === true && ChangeEventPlugin._allowSimulatedPassThrough;

  if (updated || simulated) {
    return targetInst;
  }
}

function getTargetInstForChangeEvent(topLevelType, targetInst) {
  if (topLevelType === 'topChange') {
    return targetInst;
  }
}

function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
  if (topLevelType === 'topFocus') {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForChangeEventIE8();
    startWatchingForChangeEventIE8(target, targetInst);
  } else if (topLevelType === 'topBlur') {
    stopWatchingForChangeEventIE8();
  }
}

/**
 * SECTION: handle `input` event
 */
var isInputEventSupported = false;
if (ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.

  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
}

/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(target, targetInst) {
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent('onpropertychange', handlePropertyChange);
}

/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange() {
  if (!activeElement) {
    return;
  }
  activeElement.detachEvent('onpropertychange', handlePropertyChange);

  activeElement = null;
  activeElementInst = null;
}

/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  if (getInstIfValueChanged(activeElementInst, nativeEvent)) {
    manualDispatchChangeEvent(nativeEvent);
  }
}

function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
  if (topLevelType === 'topFocus') {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(target, targetInst);
  } else if (topLevelType === 'topBlur') {
    stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(topLevelType, targetInst, nativeEvent) {
  if (topLevelType === 'topSelectionChange' || topLevelType === 'topKeyUp' || topLevelType === 'topKeyDown') {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    return getInstIfValueChanged(activeElementInst, nativeEvent);
  }
}

/**
 * SECTION: handle `click` event
 */
function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
}

function getTargetInstForClickEvent(topLevelType, targetInst, nativeEvent) {
  if (topLevelType === 'topClick') {
    return getInstIfValueChanged(targetInst, nativeEvent);
  }
}

function getTargetInstForInputOrChangeEvent(topLevelType, targetInst, nativeEvent) {
  if (topLevelType === 'topInput' || topLevelType === 'topChange') {
    return getInstIfValueChanged(targetInst, nativeEvent);
  }
}

function handleControlledInputBlur(inst, node) {
  // TODO: In IE, inst is occasionally null. Why?
  if (inst == null) {
    return;
  }

  // Fiber and ReactDOM keep wrapper state in separate places
  var state = inst._wrapperState || node._wrapperState;

  if (!state || !state.controlled || node.type !== 'number') {
    return;
  }

  // If controlled, assign the value attribute to the current value on blur
  var value = '' + node.value;
  if (node.getAttribute('value') !== value) {
    node.setAttribute('value', value);
  }
}

/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ChangeEventPlugin = {
  eventTypes: eventTypes,

  _allowSimulatedPassThrough: true,
  _isInputEventSupported: isInputEventSupported,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    var getTargetInstFunc, handleEventFunc;
    if (shouldUseChangeEvent(targetNode)) {
      if (doesChangeEventBubble) {
        getTargetInstFunc = getTargetInstForChangeEvent;
      } else {
        handleEventFunc = handleEventsForChangeEventIE8;
      }
    } else if (isTextInputElement(targetNode)) {
      if (isInputEventSupported) {
        getTargetInstFunc = getTargetInstForInputOrChangeEvent;
      } else {
        getTargetInstFunc = getTargetInstForInputEventPolyfill;
        handleEventFunc = handleEventsForInputEventPolyfill;
      }
    } else if (shouldUseClickEvent(targetNode)) {
      getTargetInstFunc = getTargetInstForClickEvent;
    }

    if (getTargetInstFunc) {
      var inst = getTargetInstFunc(topLevelType, targetInst, nativeEvent);
      if (inst) {
        var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(topLevelType, targetNode, targetInst);
    }

    // When blurring, set the value attribute for number inputs
    if (topLevelType === 'topBlur') {
      handleControlledInputBlur(targetInst, targetNode);
    }
  }
};

module.exports = ChangeEventPlugin;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var DOMLazyTree = __webpack_require__(31);
var ExecutionEnvironment = __webpack_require__(6);

var createNodesFromMarkup = __webpack_require__(213);
var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(0);

var Danger = {
  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
    !ExecutionEnvironment.canUseDOM ?  true ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.') : _prodInvariant('56') : void 0;
    !markup ?  true ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : _prodInvariant('57') : void 0;
    !(oldChild.nodeName !== 'HTML') ?  true ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().') : _prodInvariant('58') : void 0;

    if (typeof markup === 'string') {
      var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
      oldChild.parentNode.replaceChild(newChild, oldChild);
    } else {
      DOMLazyTree.replaceChildWithTree(oldChild, markup);
    }
  }
};

module.exports = Danger;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */

var DefaultEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

module.exports = DefaultEventPluginOrder;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPropagators = __webpack_require__(34);
var ReactDOMComponentTree = __webpack_require__(5);
var SyntheticMouseEvent = __webpack_require__(42);

var eventTypes = {
  mouseEnter: {
    registrationName: 'onMouseEnter',
    dependencies: ['topMouseOut', 'topMouseOver']
  },
  mouseLeave: {
    registrationName: 'onMouseLeave',
    dependencies: ['topMouseOut', 'topMouseOver']
  }
};

var EnterLeaveEventPlugin = {
  eventTypes: eventTypes,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    if (topLevelType === 'topMouseOver' && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }
    if (topLevelType !== 'topMouseOut' && topLevelType !== 'topMouseOver') {
      // Must not be a mouse in or mouse out - ignoring.
      return null;
    }

    var win;
    if (nativeEventTarget.window === nativeEventTarget) {
      // `nativeEventTarget` is probably a window object.
      win = nativeEventTarget;
    } else {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = nativeEventTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;
      } else {
        win = window;
      }
    }

    var from;
    var to;
    if (topLevelType === 'topMouseOut') {
      from = targetInst;
      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
      to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
    } else {
      // Moving to a node from outside the window.
      from = null;
      to = targetInst;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
    var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);

    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
    leave.type = 'mouseleave';
    leave.target = fromNode;
    leave.relatedTarget = toNode;

    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
    enter.type = 'mouseenter';
    enter.target = toNode;
    enter.relatedTarget = fromNode;

    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);

    return [leave, enter];
  }
};

module.exports = EnterLeaveEventPlugin;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var PooledClass = __webpack_require__(20);

var getTextContentAccessor = __webpack_require__(103);

/**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */
function FallbackCompositionState(root) {
  this._root = root;
  this._startText = this.getText();
  this._fallbackText = null;
}

_assign(FallbackCompositionState.prototype, {
  destructor: function () {
    this._root = null;
    this._startText = null;
    this._fallbackText = null;
  },

  /**
   * Get current text of input.
   *
   * @return {string}
   */
  getText: function () {
    if ('value' in this._root) {
      return this._root.value;
    }
    return this._root[getTextContentAccessor()];
  },

  /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */
  getData: function () {
    if (this._fallbackText) {
      return this._fallbackText;
    }

    var start;
    var startValue = this._startText;
    var startLength = startValue.length;
    var end;
    var endValue = this.getText();
    var endLength = endValue.length;

    for (start = 0; start < startLength; start++) {
      if (startValue[start] !== endValue[start]) {
        break;
      }
    }

    var minEnd = startLength - start;
    for (end = 1; end <= minEnd; end++) {
      if (startValue[startLength - end] !== endValue[endLength - end]) {
        break;
      }
    }

    var sliceTail = end > 1 ? 1 - end : undefined;
    this._fallbackText = endValue.slice(start, sliceTail);
    return this._fallbackText;
  }
});

PooledClass.addPoolingTo(FallbackCompositionState);

module.exports = FallbackCompositionState;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMProperty = __webpack_require__(32);

var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
  Properties: {
    /**
     * Standard Properties
     */
    accept: 0,
    acceptCharset: 0,
    accessKey: 0,
    action: 0,
    allowFullScreen: HAS_BOOLEAN_VALUE,
    allowTransparency: 0,
    alt: 0,
    // specifies target context for links with `preload` type
    as: 0,
    async: HAS_BOOLEAN_VALUE,
    autoComplete: 0,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    capture: HAS_BOOLEAN_VALUE,
    cellPadding: 0,
    cellSpacing: 0,
    charSet: 0,
    challenge: 0,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    cite: 0,
    classID: 0,
    className: 0,
    cols: HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: 0,
    content: 0,
    contentEditable: 0,
    contextMenu: 0,
    controls: HAS_BOOLEAN_VALUE,
    coords: 0,
    crossOrigin: 0,
    data: 0, // For `<object />` acts as `src`.
    dateTime: 0,
    'default': HAS_BOOLEAN_VALUE,
    defer: HAS_BOOLEAN_VALUE,
    dir: 0,
    disabled: HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: 0,
    encType: 0,
    form: 0,
    formAction: 0,
    formEncType: 0,
    formMethod: 0,
    formNoValidate: HAS_BOOLEAN_VALUE,
    formTarget: 0,
    frameBorder: 0,
    headers: 0,
    height: 0,
    hidden: HAS_BOOLEAN_VALUE,
    high: 0,
    href: 0,
    hrefLang: 0,
    htmlFor: 0,
    httpEquiv: 0,
    icon: 0,
    id: 0,
    inputMode: 0,
    integrity: 0,
    is: 0,
    keyParams: 0,
    keyType: 0,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: HAS_BOOLEAN_VALUE,
    low: 0,
    manifest: 0,
    marginHeight: 0,
    marginWidth: 0,
    max: 0,
    maxLength: 0,
    media: 0,
    mediaGroup: 0,
    method: 0,
    min: 0,
    minLength: 0,
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    name: 0,
    nonce: 0,
    noValidate: HAS_BOOLEAN_VALUE,
    open: HAS_BOOLEAN_VALUE,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: HAS_BOOLEAN_VALUE,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 0,
    readOnly: HAS_BOOLEAN_VALUE,
    referrerPolicy: 0,
    rel: 0,
    required: HAS_BOOLEAN_VALUE,
    reversed: HAS_BOOLEAN_VALUE,
    role: 0,
    rows: HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: HAS_NUMERIC_VALUE,
    sandbox: 0,
    scope: 0,
    scoped: HAS_BOOLEAN_VALUE,
    scrolling: 0,
    seamless: HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    shape: 0,
    size: HAS_POSITIVE_NUMERIC_VALUE,
    sizes: 0,
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: 0,
    src: 0,
    srcDoc: 0,
    srcLang: 0,
    srcSet: 0,
    start: HAS_NUMERIC_VALUE,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 0,
    target: 0,
    title: 0,
    // Setting .type throws on non-<input> tags
    type: 0,
    useMap: 0,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,

    /**
     * RDFa Properties
     */
    about: 0,
    datatype: 0,
    inlist: 0,
    prefix: 0,
    // property is also supported for OpenGraph in meta tags.
    property: 0,
    resource: 0,
    'typeof': 0,
    vocab: 0,

    /**
     * Non-standard Properties
     */
    // autoCapitalize and autoCorrect are supported in Mobile Safari for
    // keyboard hints.
    autoCapitalize: 0,
    autoCorrect: 0,
    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
    autoSave: 0,
    // color is for Safari mask-icon link
    color: 0,
    // itemProp, itemScope, itemType are for
    // Microdata support. See http://schema.org/docs/gs.html
    itemProp: 0,
    itemScope: HAS_BOOLEAN_VALUE,
    itemType: 0,
    // itemID and itemRef are for Microdata support as well but
    // only specified in the WHATWG spec document. See
    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
    itemID: 0,
    itemRef: 0,
    // results show looking glass icon and recent searches on input
    // search fields in WebKit/Blink
    results: 0,
    // IE-only attribute that specifies security restrictions on an iframe
    // as an alternative to the sandbox attribute on IE<10
    security: 0,
    // IE-only attribute that controls focus behavior
    unselectable: 0
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMPropertyNames: {},
  DOMMutationMethods: {
    value: function (node, value) {
      if (value == null) {
        return node.removeAttribute('value');
      }

      // Number inputs get special treatment due to some edge cases in
      // Chrome. Let everything else assign the value attribute as normal.
      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
      if (node.type !== 'number' || node.hasAttribute('value') === false) {
        node.setAttribute('value', '' + value);
      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
        // Don't assign an attribute if validation reports bad
        // input. Chrome will clear the value. Additionally, don't
        // operate on inputs that have focus, otherwise Chrome might
        // strip off trailing decimal places and cause the user's
        // cursor position to jump to the beginning of the input.
        //
        // In ReactDOMInput, we have an onBlur event that will trigger
        // this function again when focus is lost.
        node.setAttribute('value', '' + value);
      }
    }
  }
};

module.exports = HTMLDOMPropertyConfig;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactReconciler = __webpack_require__(35);

var instantiateReactComponent = __webpack_require__(105);
var KeyEscapeUtils = __webpack_require__(57);
var shouldUpdateReactComponent = __webpack_require__(108);
var traverseAllChildren = __webpack_require__(109);
var warning = __webpack_require__(1);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(13);
}

function instantiateChild(childInstances, child, name, selfDebugID) {
  // We found a component instance.
  var keyUnique = childInstances[name] === undefined;
  if (true) {
    if (!ReactComponentTreeHook) {
      ReactComponentTreeHook = __webpack_require__(13);
    }
    if (!keyUnique) {
       true ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
    }
  }
  if (child != null && keyUnique) {
    childInstances[name] = instantiateReactComponent(child, true);
  }
}

/**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */
var ReactChildReconciler = {
  /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */
  instantiateChildren: function (nestedChildNodes, transaction, context, selfDebugID) // 0 in production and for roots
  {
    if (nestedChildNodes == null) {
      return null;
    }
    var childInstances = {};

    if (true) {
      traverseAllChildren(nestedChildNodes, function (childInsts, child, name) {
        return instantiateChild(childInsts, child, name, selfDebugID);
      }, childInstances);
    } else {
      traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
    }
    return childInstances;
  },

  /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */
  updateChildren: function (prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID) // 0 in production and for roots
  {
    // We currently don't have a way to track moves here but if we use iterators
    // instead of for..in we can zip the iterators and check if an item has
    // moved.
    // TODO: If nothing has changed, return the prevChildren object so that we
    // can quickly bailout if nothing has changed.
    if (!nextChildren && !prevChildren) {
      return;
    }
    var name;
    var prevChild;
    for (name in nextChildren) {
      if (!nextChildren.hasOwnProperty(name)) {
        continue;
      }
      prevChild = prevChildren && prevChildren[name];
      var prevElement = prevChild && prevChild._currentElement;
      var nextElement = nextChildren[name];
      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
        nextChildren[name] = prevChild;
      } else {
        if (prevChild) {
          removedNodes[name] = ReactReconciler.getHostNode(prevChild);
          ReactReconciler.unmountComponent(prevChild, false);
        }
        // The child must be instantiated before it's mounted.
        var nextChildInstance = instantiateReactComponent(nextElement, true);
        nextChildren[name] = nextChildInstance;
        // Creating mount image now ensures refs are resolved in right order
        // (see https://github.com/facebook/react/pull/7101 for explanation).
        var nextChildMountImage = ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
        mountImages.push(nextChildMountImage);
      }
    }
    // Unmount children that are no longer present.
    for (name in prevChildren) {
      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
        prevChild = prevChildren[name];
        removedNodes[name] = ReactReconciler.getHostNode(prevChild);
        ReactReconciler.unmountComponent(prevChild, false);
      }
    }
  },

  /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */
  unmountChildren: function (renderedChildren, safely) {
    for (var name in renderedChildren) {
      if (renderedChildren.hasOwnProperty(name)) {
        var renderedChild = renderedChildren[name];
        ReactReconciler.unmountComponent(renderedChild, safely);
      }
    }
  }
};

module.exports = ReactChildReconciler;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMChildrenOperations = __webpack_require__(53);
var ReactDOMIDOperations = __webpack_require__(241);

/**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */
var ReactComponentBrowserEnvironment = {
  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

  replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup
};

module.exports = ReactComponentBrowserEnvironment;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var React = __webpack_require__(37);
var ReactComponentEnvironment = __webpack_require__(60);
var ReactCurrentOwner = __webpack_require__(18);
var ReactErrorUtils = __webpack_require__(61);
var ReactInstanceMap = __webpack_require__(62);
var ReactInstrumentation = __webpack_require__(11);
var ReactNodeTypes = __webpack_require__(260);
var ReactReconciler = __webpack_require__(35);

if (true) {
  var checkReactTypeSpec = __webpack_require__(283);
}

var emptyObject = __webpack_require__(41);
var invariant = __webpack_require__(0);
var shallowEqual = __webpack_require__(52);
var shouldUpdateReactComponent = __webpack_require__(108);
var warning = __webpack_require__(1);

var CompositeTypes = {
  ImpureClass: 0,
  PureClass: 1,
  StatelessFunctional: 2
};

function StatelessComponent(Component) {}
StatelessComponent.prototype.render = function () {
  var Component = ReactInstanceMap.get(this)._currentElement.type;
  var element = Component(this.props, this.context, this.updater);
  warnIfInvalidElement(Component, element);
  return element;
};

function warnIfInvalidElement(Component, element) {
  if (true) {
     true ? warning(element === null || element === false || React.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
     true ? warning(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component') : void 0;
  }
}

function shouldConstruct(Component) {
  return !!(Component.prototype && Component.prototype.isReactComponent);
}

function isPureComponent(Component) {
  return !!(Component.prototype && Component.prototype.isPureReactComponent);
}

// Separated into a function to contain deoptimizations caused by try/finally.
function measureLifeCyclePerf(fn, debugID, timerType) {
  if (debugID === 0) {
    // Top-level wrappers (see ReactMount) and empty components (see
    // ReactDOMEmptyComponent) are invisible to hooks and devtools.
    // Both are implementation details that should go away in the future.
    return fn();
  }

  ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID, timerType);
  try {
    return fn();
  } finally {
    ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID, timerType);
  }
}

/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */

/**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */
var nextMountID = 1;

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var ReactCompositeComponent = {
  /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */
  construct: function (element) {
    this._currentElement = element;
    this._rootNodeID = 0;
    this._compositeType = null;
    this._instance = null;
    this._hostParent = null;
    this._hostContainerInfo = null;

    // See ReactUpdateQueue
    this._updateBatchNumber = null;
    this._pendingElement = null;
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    this._renderedNodeType = null;
    this._renderedComponent = null;
    this._context = null;
    this._mountOrder = 0;
    this._topLevelWrapper = null;

    // See ReactUpdates and ReactUpdateQueue.
    this._pendingCallbacks = null;

    // ComponentWillUnmount shall only be called once
    this._calledComponentWillUnmount = false;

    if (true) {
      this._warnedAboutRefsInRender = false;
    }
  },

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} hostParent
   * @param {?object} hostContainerInfo
   * @param {?object} context
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    var _this = this;

    this._context = context;
    this._mountOrder = nextMountID++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var publicProps = this._currentElement.props;
    var publicContext = this._processContext(context);

    var Component = this._currentElement.type;

    var updateQueue = transaction.getUpdateQueue();

    // Initialize the public class
    var doConstruct = shouldConstruct(Component);
    var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
    var renderedElement;

    // Support functional components
    if (!doConstruct && (inst == null || inst.render == null)) {
      renderedElement = inst;
      warnIfInvalidElement(Component, renderedElement);
      !(inst === null || inst === false || React.isValidElement(inst)) ?  true ? invariant(false, '%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : _prodInvariant('105', Component.displayName || Component.name || 'Component') : void 0;
      inst = new StatelessComponent(Component);
      this._compositeType = CompositeTypes.StatelessFunctional;
    } else {
      if (isPureComponent(Component)) {
        this._compositeType = CompositeTypes.PureClass;
      } else {
        this._compositeType = CompositeTypes.ImpureClass;
      }
    }

    if (true) {
      // This will throw later in _renderValidatedComponent, but add an early
      // warning now to help debugging
      if (inst.render == null) {
         true ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component') : void 0;
      }

      var propsMutated = inst.props !== publicProps;
      var componentName = Component.displayName || Component.name || 'Component';

       true ? warning(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", componentName, componentName) : void 0;
    }

    // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.
    inst.props = publicProps;
    inst.context = publicContext;
    inst.refs = emptyObject;
    inst.updater = updateQueue;

    this._instance = inst;

    // Store a reference from the instance back to the internal representation
    ReactInstanceMap.set(inst, this);

    if (true) {
      // Since plain JS classes are defined without any special initialization
      // logic, we can not catch common errors early. Therefore, we have to
      // catch them here, at initialization time, instead.
       true ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved || inst.state, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : void 0;
       true ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : void 0;
       true ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : void 0;
       true ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : void 0;
       true ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : void 0;
       true ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : void 0;
       true ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : void 0;
    }

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    !(typeof initialState === 'object' && !Array.isArray(initialState)) ?  true ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : _prodInvariant('106', this.getName() || 'ReactCompositeComponent') : void 0;

    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    var markup;
    if (inst.unstable_handleError) {
      markup = this.performInitialMountWithErrorHandling(renderedElement, hostParent, hostContainerInfo, transaction, context);
    } else {
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
    }

    if (inst.componentDidMount) {
      if (true) {
        transaction.getReactMountReady().enqueue(function () {
          measureLifeCyclePerf(function () {
            return inst.componentDidMount();
          }, _this._debugID, 'componentDidMount');
        });
      } else {
        transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
      }
    }

    return markup;
  },

  _constructComponent: function (doConstruct, publicProps, publicContext, updateQueue) {
    if (true) {
      ReactCurrentOwner.current = this;
      try {
        return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
      } finally {
        ReactCurrentOwner.current = null;
      }
    } else {
      return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
    }
  },

  _constructComponentWithoutOwner: function (doConstruct, publicProps, publicContext, updateQueue) {
    var Component = this._currentElement.type;

    if (doConstruct) {
      if (true) {
        return measureLifeCyclePerf(function () {
          return new Component(publicProps, publicContext, updateQueue);
        }, this._debugID, 'ctor');
      } else {
        return new Component(publicProps, publicContext, updateQueue);
      }
    }

    // This can still be an instance in case of factory components
    // but we'll count this as time spent rendering as the more common case.
    if (true) {
      return measureLifeCyclePerf(function () {
        return Component(publicProps, publicContext, updateQueue);
      }, this._debugID, 'render');
    } else {
      return Component(publicProps, publicContext, updateQueue);
    }
  },

  performInitialMountWithErrorHandling: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
    var markup;
    var checkpoint = transaction.checkpoint();
    try {
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
    } catch (e) {
      // Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
      transaction.rollback(checkpoint);
      this._instance.unstable_handleError(e);
      if (this._pendingStateQueue) {
        this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
      }
      checkpoint = transaction.checkpoint();

      this._renderedComponent.unmountComponent(true);
      transaction.rollback(checkpoint);

      // Try again - we've informed the component about the error, so they can render an error message this time.
      // If this throws again, the error will bubble up (and can be caught by a higher error boundary).
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
    }
    return markup;
  },

  performInitialMount: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
    var inst = this._instance;

    var debugID = 0;
    if (true) {
      debugID = this._debugID;
    }

    if (inst.componentWillMount) {
      if (true) {
        measureLifeCyclePerf(function () {
          return inst.componentWillMount();
        }, debugID, 'componentWillMount');
      } else {
        inst.componentWillMount();
      }
      // When mounting, calls to `setState` by `componentWillMount` will set
      // `this._pendingStateQueue` without triggering a re-render.
      if (this._pendingStateQueue) {
        inst.state = this._processPendingState(inst.props, inst.context);
      }
    }

    // If not a stateless component, we now render
    if (renderedElement === undefined) {
      renderedElement = this._renderValidatedComponent();
    }

    var nodeType = ReactNodeTypes.getType(renderedElement);
    this._renderedNodeType = nodeType;
    var child = this._instantiateReactComponent(renderedElement, nodeType !== ReactNodeTypes.EMPTY /* shouldHaveDebugID */
    );
    this._renderedComponent = child;

    var markup = ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);

    if (true) {
      if (debugID !== 0) {
        var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
        ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
      }
    }

    return markup;
  },

  getHostNode: function () {
    return ReactReconciler.getHostNode(this._renderedComponent);
  },

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (safely) {
    if (!this._renderedComponent) {
      return;
    }

    var inst = this._instance;

    if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
      inst._calledComponentWillUnmount = true;

      if (safely) {
        var name = this.getName() + '.componentWillUnmount()';
        ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
      } else {
        if (true) {
          measureLifeCyclePerf(function () {
            return inst.componentWillUnmount();
          }, this._debugID, 'componentWillUnmount');
        } else {
          inst.componentWillUnmount();
        }
      }
    }

    if (this._renderedComponent) {
      ReactReconciler.unmountComponent(this._renderedComponent, safely);
      this._renderedNodeType = null;
      this._renderedComponent = null;
      this._instance = null;
    }

    // Reset pending fields
    // Even if this component is scheduled for another update in ReactUpdates,
    // it would still be ignored because these fields are reset.
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;
    this._pendingCallbacks = null;
    this._pendingElement = null;

    // These fields do not really need to be reset since this object is no
    // longer accessible.
    this._context = null;
    this._rootNodeID = 0;
    this._topLevelWrapper = null;

    // Delete the reference from the instance to this internal representation
    // which allow the internals to be properly cleaned up even if the user
    // leaks a reference to the public instance.
    ReactInstanceMap.remove(inst);

    // Some existing components rely on inst.props even after they've been
    // destroyed (in event handlers).
    // TODO: inst.props = null;
    // TODO: inst.state = null;
    // TODO: inst.context = null;
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _maskContext: function (context) {
    var Component = this._currentElement.type;
    var contextTypes = Component.contextTypes;
    if (!contextTypes) {
      return emptyObject;
    }
    var maskedContext = {};
    for (var contextName in contextTypes) {
      maskedContext[contextName] = context[contextName];
    }
    return maskedContext;
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _processContext: function (context) {
    var maskedContext = this._maskContext(context);
    if (true) {
      var Component = this._currentElement.type;
      if (Component.contextTypes) {
        this._checkContextTypes(Component.contextTypes, maskedContext, 'context');
      }
    }
    return maskedContext;
  },

  /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */
  _processChildContext: function (currentContext) {
    var Component = this._currentElement.type;
    var inst = this._instance;
    var childContext;

    if (inst.getChildContext) {
      if (true) {
        ReactInstrumentation.debugTool.onBeginProcessingChildContext();
        try {
          childContext = inst.getChildContext();
        } finally {
          ReactInstrumentation.debugTool.onEndProcessingChildContext();
        }
      } else {
        childContext = inst.getChildContext();
      }
    }

    if (childContext) {
      !(typeof Component.childContextTypes === 'object') ?  true ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', this.getName() || 'ReactCompositeComponent') : _prodInvariant('107', this.getName() || 'ReactCompositeComponent') : void 0;
      if (true) {
        this._checkContextTypes(Component.childContextTypes, childContext, 'child context');
      }
      for (var name in childContext) {
        !(name in Component.childContextTypes) ?  true ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : _prodInvariant('108', this.getName() || 'ReactCompositeComponent', name) : void 0;
      }
      return _assign({}, currentContext, childContext);
    }
    return currentContext;
  },

  /**
   * Assert that the context types are valid
   *
   * @param {object} typeSpecs Map of context field to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
  _checkContextTypes: function (typeSpecs, values, location) {
    if (true) {
      checkReactTypeSpec(typeSpecs, values, location, this.getName(), null, this._debugID);
    }
  },

  receiveComponent: function (nextElement, transaction, nextContext) {
    var prevElement = this._currentElement;
    var prevContext = this._context;

    this._pendingElement = null;

    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
  },

  /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (transaction) {
    if (this._pendingElement != null) {
      ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
    } else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
    } else {
      this._updateBatchNumber = null;
    }
  },

  /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
    var inst = this._instance;
    !(inst != null) ?  true ? invariant(false, 'Attempted to update component `%s` that has already been unmounted (or failed to mount).', this.getName() || 'ReactCompositeComponent') : _prodInvariant('136', this.getName() || 'ReactCompositeComponent') : void 0;

    var willReceive = false;
    var nextContext;

    // Determine if the context has changed or not
    if (this._context === nextUnmaskedContext) {
      nextContext = inst.context;
    } else {
      nextContext = this._processContext(nextUnmaskedContext);
      willReceive = true;
    }

    var prevProps = prevParentElement.props;
    var nextProps = nextParentElement.props;

    // Not a simple state update but a props update
    if (prevParentElement !== nextParentElement) {
      willReceive = true;
    }

    // An update here will schedule an update but immediately set
    // _pendingStateQueue which will ensure that any state updates gets
    // immediately reconciled instead of waiting for the next batch.
    if (willReceive && inst.componentWillReceiveProps) {
      if (true) {
        measureLifeCyclePerf(function () {
          return inst.componentWillReceiveProps(nextProps, nextContext);
        }, this._debugID, 'componentWillReceiveProps');
      } else {
        inst.componentWillReceiveProps(nextProps, nextContext);
      }
    }

    var nextState = this._processPendingState(nextProps, nextContext);
    var shouldUpdate = true;

    if (!this._pendingForceUpdate) {
      if (inst.shouldComponentUpdate) {
        if (true) {
          shouldUpdate = measureLifeCyclePerf(function () {
            return inst.shouldComponentUpdate(nextProps, nextState, nextContext);
          }, this._debugID, 'shouldComponentUpdate');
        } else {
          shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
        }
      } else {
        if (this._compositeType === CompositeTypes.PureClass) {
          shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(inst.state, nextState);
        }
      }
    }

    if (true) {
       true ? warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
    }

    this._updateBatchNumber = null;
    if (shouldUpdate) {
      this._pendingForceUpdate = false;
      // Will set `this.props`, `this.state` and `this.context`.
      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
    } else {
      // If it's determined that a component should not update, we still want
      // to set props and state but we shortcut the rest of the update.
      this._currentElement = nextParentElement;
      this._context = nextUnmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;
    }
  },

  _processPendingState: function (props, context) {
    var inst = this._instance;
    var queue = this._pendingStateQueue;
    var replace = this._pendingReplaceState;
    this._pendingReplaceState = false;
    this._pendingStateQueue = null;

    if (!queue) {
      return inst.state;
    }

    if (replace && queue.length === 1) {
      return queue[0];
    }

    var nextState = _assign({}, replace ? queue[0] : inst.state);
    for (var i = replace ? 1 : 0; i < queue.length; i++) {
      var partial = queue[i];
      _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
    }

    return nextState;
  },

  /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */
  _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
    var _this2 = this;

    var inst = this._instance;

    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
    var prevProps;
    var prevState;
    var prevContext;
    if (hasComponentDidUpdate) {
      prevProps = inst.props;
      prevState = inst.state;
      prevContext = inst.context;
    }

    if (inst.componentWillUpdate) {
      if (true) {
        measureLifeCyclePerf(function () {
          return inst.componentWillUpdate(nextProps, nextState, nextContext);
        }, this._debugID, 'componentWillUpdate');
      } else {
        inst.componentWillUpdate(nextProps, nextState, nextContext);
      }
    }

    this._currentElement = nextElement;
    this._context = unmaskedContext;
    inst.props = nextProps;
    inst.state = nextState;
    inst.context = nextContext;

    this._updateRenderedComponent(transaction, unmaskedContext);

    if (hasComponentDidUpdate) {
      if (true) {
        transaction.getReactMountReady().enqueue(function () {
          measureLifeCyclePerf(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), _this2._debugID, 'componentDidUpdate');
        });
      } else {
        transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
      }
    }
  },

  /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  _updateRenderedComponent: function (transaction, context) {
    var prevComponentInstance = this._renderedComponent;
    var prevRenderedElement = prevComponentInstance._currentElement;
    var nextRenderedElement = this._renderValidatedComponent();

    var debugID = 0;
    if (true) {
      debugID = this._debugID;
    }

    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
      ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
    } else {
      var oldHostNode = ReactReconciler.getHostNode(prevComponentInstance);
      ReactReconciler.unmountComponent(prevComponentInstance, false);

      var nodeType = ReactNodeTypes.getType(nextRenderedElement);
      this._renderedNodeType = nodeType;
      var child = this._instantiateReactComponent(nextRenderedElement, nodeType !== ReactNodeTypes.EMPTY /* shouldHaveDebugID */
      );
      this._renderedComponent = child;

      var nextMarkup = ReactReconciler.mountComponent(child, transaction, this._hostParent, this._hostContainerInfo, this._processChildContext(context), debugID);

      if (true) {
        if (debugID !== 0) {
          var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
          ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
        }
      }

      this._replaceNodeWithMarkup(oldHostNode, nextMarkup, prevComponentInstance);
    }
  },

  /**
   * Overridden in shallow rendering.
   *
   * @protected
   */
  _replaceNodeWithMarkup: function (oldHostNode, nextMarkup, prevInstance) {
    ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance);
  },

  /**
   * @protected
   */
  _renderValidatedComponentWithoutOwnerOrContext: function () {
    var inst = this._instance;
    var renderedElement;

    if (true) {
      renderedElement = measureLifeCyclePerf(function () {
        return inst.render();
      }, this._debugID, 'render');
    } else {
      renderedElement = inst.render();
    }

    if (true) {
      // We allow auto-mocks to proceed as if they're returning null.
      if (renderedElement === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        renderedElement = null;
      }
    }

    return renderedElement;
  },

  /**
   * @private
   */
  _renderValidatedComponent: function () {
    var renderedElement;
    if (true) {
      ReactCurrentOwner.current = this;
      try {
        renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
      } finally {
        ReactCurrentOwner.current = null;
      }
    } else {
      renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
    }
    !(
    // TODO: An `isValidNode` function would probably be more appropriate
    renderedElement === null || renderedElement === false || React.isValidElement(renderedElement)) ?  true ? invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : _prodInvariant('109', this.getName() || 'ReactCompositeComponent') : void 0;

    return renderedElement;
  },

  /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */
  attachRef: function (ref, component) {
    var inst = this.getPublicInstance();
    !(inst != null) ?  true ? invariant(false, 'Stateless function components cannot have refs.') : _prodInvariant('110') : void 0;
    var publicComponentInstance = component.getPublicInstance();
    if (true) {
      var componentName = component && component.getName ? component.getName() : 'a component';
       true ? warning(publicComponentInstance != null || component._compositeType !== CompositeTypes.StatelessFunctional, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
    }
    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
    refs[ref] = publicComponentInstance;
  },

  /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */
  detachRef: function (ref) {
    var refs = this.getPublicInstance().refs;
    delete refs[ref];
  },

  /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */
  getName: function () {
    var type = this._currentElement.type;
    var constructor = this._instance && this._instance.constructor;
    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
  },

  /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */
  getPublicInstance: function () {
    var inst = this._instance;
    if (this._compositeType === CompositeTypes.StatelessFunctional) {
      return null;
    }
    return inst;
  },

  // Stub
  _instantiateReactComponent: null
};

module.exports = ReactCompositeComponent;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* global hasOwnProperty:true */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var AutoFocusUtils = __webpack_require__(226);
var CSSPropertyOperations = __webpack_require__(228);
var DOMLazyTree = __webpack_require__(31);
var DOMNamespaces = __webpack_require__(54);
var DOMProperty = __webpack_require__(32);
var DOMPropertyOperations = __webpack_require__(90);
var EventPluginHub = __webpack_require__(33);
var EventPluginRegistry = __webpack_require__(55);
var ReactBrowserEventEmitter = __webpack_require__(59);
var ReactDOMComponentFlags = __webpack_require__(91);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactDOMInput = __webpack_require__(242);
var ReactDOMOption = __webpack_require__(243);
var ReactDOMSelect = __webpack_require__(92);
var ReactDOMTextarea = __webpack_require__(247);
var ReactInstrumentation = __webpack_require__(11);
var ReactMultiChild = __webpack_require__(259);
var ReactServerRenderingTransaction = __webpack_require__(98);

var emptyFunction = __webpack_require__(10);
var escapeTextContentForBrowser = __webpack_require__(44);
var invariant = __webpack_require__(0);
var isEventSupported = __webpack_require__(67);
var shallowEqual = __webpack_require__(52);
var inputValueTracking = __webpack_require__(104);
var validateDOMNesting = __webpack_require__(69);
var warning = __webpack_require__(1);

var Flags = ReactDOMComponentFlags;
var deleteListener = EventPluginHub.deleteListener;
var getNode = ReactDOMComponentTree.getNodeFromInstance;
var listenTo = ReactBrowserEventEmitter.listenTo;
var registrationNameModules = EventPluginRegistry.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES = { string: true, number: true };

var STYLE = 'style';
var HTML = '__html';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null
};

// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
var DOC_FRAGMENT_TYPE = 11;

function getDeclarationErrorAddendum(internalInstance) {
  if (internalInstance) {
    var owner = internalInstance._currentElement._owner || null;
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' This DOM node was rendered by `' + name + '`.';
      }
    }
  }
  return '';
}

function friendlyStringify(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return '[' + obj.map(friendlyStringify).join(', ') + ']';
    } else {
      var pairs = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
        }
      }
      return '{' + pairs.join(', ') + '}';
    }
  } else if (typeof obj === 'string') {
    return JSON.stringify(obj);
  } else if (typeof obj === 'function') {
    return '[function object]';
  }
  // Differs from JSON.stringify in that undefined because undefined and that
  // inf and nan don't become null
  return String(obj);
}

var styleMutationWarning = {};

function checkAndWarnForMutatedStyle(style1, style2, component) {
  if (style1 == null || style2 == null) {
    return;
  }
  if (shallowEqual(style1, style2)) {
    return;
  }

  var componentName = component._tag;
  var owner = component._currentElement._owner;
  var ownerName;
  if (owner) {
    ownerName = owner.getName();
  }

  var hash = ownerName + '|' + componentName;

  if (styleMutationWarning.hasOwnProperty(hash)) {
    return;
  }

  styleMutationWarning[hash] = true;

   true ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : void 0;
}

/**
 * @param {object} component
 * @param {?object} props
 */
function assertValidProps(component, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[component._tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ?  true ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : _prodInvariant('137', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ?  true ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : _prodInvariant('60') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ?  true ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : _prodInvariant('61') : void 0;
  }
  if (true) {
     true ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
     true ? warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
     true ? warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ?  true ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getDeclarationErrorAddendum(component)) : _prodInvariant('62', getDeclarationErrorAddendum(component)) : void 0;
}

function enqueuePutListener(inst, registrationName, listener, transaction) {
  if (transaction instanceof ReactServerRenderingTransaction) {
    return;
  }
  if (true) {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
     true ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), "This browser doesn't support the `onScroll` event") : void 0;
  }
  var containerInfo = inst._hostContainerInfo;
  var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
  var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
  listenTo(registrationName, doc);
  transaction.getReactMountReady().enqueue(putListener, {
    inst: inst,
    registrationName: registrationName,
    listener: listener
  });
}

function putListener() {
  var listenerToPut = this;
  EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
}

function inputPostMount() {
  var inst = this;
  ReactDOMInput.postMountWrapper(inst);
}

function textareaPostMount() {
  var inst = this;
  ReactDOMTextarea.postMountWrapper(inst);
}

function optionPostMount() {
  var inst = this;
  ReactDOMOption.postMountWrapper(inst);
}

var setAndValidateContentChildDev = emptyFunction;
if (true) {
  setAndValidateContentChildDev = function (content) {
    var hasExistingContent = this._contentDebugID != null;
    var debugID = this._debugID;
    // This ID represents the inlined child that has no backing instance:
    var contentDebugID = -debugID;

    if (content == null) {
      if (hasExistingContent) {
        ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
      }
      this._contentDebugID = null;
      return;
    }

    validateDOMNesting(null, String(content), this, this._ancestorInfo);
    this._contentDebugID = contentDebugID;
    if (hasExistingContent) {
      ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID, content);
      ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);
    } else {
      ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID, content, debugID);
      ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
      ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
    }
  };
}

// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents = {
  topAbort: 'abort',
  topCanPlay: 'canplay',
  topCanPlayThrough: 'canplaythrough',
  topDurationChange: 'durationchange',
  topEmptied: 'emptied',
  topEncrypted: 'encrypted',
  topEnded: 'ended',
  topError: 'error',
  topLoadedData: 'loadeddata',
  topLoadedMetadata: 'loadedmetadata',
  topLoadStart: 'loadstart',
  topPause: 'pause',
  topPlay: 'play',
  topPlaying: 'playing',
  topProgress: 'progress',
  topRateChange: 'ratechange',
  topSeeked: 'seeked',
  topSeeking: 'seeking',
  topStalled: 'stalled',
  topSuspend: 'suspend',
  topTimeUpdate: 'timeupdate',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting'
};

function trackInputValue() {
  inputValueTracking.track(this);
}

function trapBubbledEventsLocal() {
  var inst = this;
  // If a component renders to null or if another component fatals and causes
  // the state of the tree to be corrupted, `node` here can be null.
  !inst._rootNodeID ?  true ? invariant(false, 'Must be mounted to trap events') : _prodInvariant('63') : void 0;
  var node = getNode(inst);
  !node ?  true ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : _prodInvariant('64') : void 0;

  switch (inst._tag) {
    case 'iframe':
    case 'object':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topLoad', 'load', node)];
      break;
    case 'video':
    case 'audio':
      inst._wrapperState.listeners = [];
      // Create listener for each media event
      for (var event in mediaEvents) {
        if (mediaEvents.hasOwnProperty(event)) {
          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(event, mediaEvents[event], node));
        }
      }
      break;
    case 'source':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topError', 'error', node)];
      break;
    case 'img':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topError', 'error', node), ReactBrowserEventEmitter.trapBubbledEvent('topLoad', 'load', node)];
      break;
    case 'form':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topReset', 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent('topSubmit', 'submit', node)];
      break;
    case 'input':
    case 'select':
    case 'textarea':
      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topInvalid', 'invalid', node)];
      break;
  }
}

function postUpdateSelectWrapper() {
  ReactDOMSelect.postUpdateWrapper(this);
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
var hasOwnProperty = {}.hasOwnProperty;

function validateDangerousTag(tag) {
  if (!hasOwnProperty.call(validatedTagCache, tag)) {
    !VALID_TAG_REGEX.test(tag) ?  true ? invariant(false, 'Invalid tag: %s', tag) : _prodInvariant('65', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

function isCustomComponent(tagName, props) {
  return tagName.indexOf('-') >= 0 || props.is != null;
}

var globalIdCounter = 1;

/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */
function ReactDOMComponent(element) {
  var tag = element.type;
  validateDangerousTag(tag);
  this._currentElement = element;
  this._tag = tag.toLowerCase();
  this._namespaceURI = null;
  this._renderedChildren = null;
  this._previousStyle = null;
  this._previousStyleCopy = null;
  this._hostNode = null;
  this._hostParent = null;
  this._rootNodeID = 0;
  this._domID = 0;
  this._hostContainerInfo = null;
  this._wrapperState = null;
  this._topLevelWrapper = null;
  this._flags = 0;
  if (true) {
    this._ancestorInfo = null;
    setAndValidateContentChildDev.call(this, null);
  }
}

ReactDOMComponent.displayName = 'ReactDOMComponent';

ReactDOMComponent.Mixin = {
  /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?ReactDOMComponent} the parent component instance
   * @param {?object} info about the host container
   * @param {object} context
   * @return {string} The computed markup.
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    this._rootNodeID = globalIdCounter++;
    this._domID = hostContainerInfo._idCounter++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var props = this._currentElement.props;

    switch (this._tag) {
      case 'audio':
      case 'form':
      case 'iframe':
      case 'img':
      case 'link':
      case 'object':
      case 'source':
      case 'video':
        this._wrapperState = {
          listeners: null
        };
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'input':
        ReactDOMInput.mountWrapper(this, props, hostParent);
        props = ReactDOMInput.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(trackInputValue, this);
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'option':
        ReactDOMOption.mountWrapper(this, props, hostParent);
        props = ReactDOMOption.getHostProps(this, props);
        break;
      case 'select':
        ReactDOMSelect.mountWrapper(this, props, hostParent);
        props = ReactDOMSelect.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'textarea':
        ReactDOMTextarea.mountWrapper(this, props, hostParent);
        props = ReactDOMTextarea.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(trackInputValue, this);
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
    }

    assertValidProps(this, props);

    // We create tags in the namespace of their parent container, except HTML
    // tags get no namespace.
    var namespaceURI;
    var parentTag;
    if (hostParent != null) {
      namespaceURI = hostParent._namespaceURI;
      parentTag = hostParent._tag;
    } else if (hostContainerInfo._tag) {
      namespaceURI = hostContainerInfo._namespaceURI;
      parentTag = hostContainerInfo._tag;
    }
    if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
      namespaceURI = DOMNamespaces.html;
    }
    if (namespaceURI === DOMNamespaces.html) {
      if (this._tag === 'svg') {
        namespaceURI = DOMNamespaces.svg;
      } else if (this._tag === 'math') {
        namespaceURI = DOMNamespaces.mathml;
      }
    }
    this._namespaceURI = namespaceURI;

    if (true) {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;
      } else if (hostContainerInfo._tag) {
        parentInfo = hostContainerInfo._ancestorInfo;
      }
      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        validateDOMNesting(this._tag, null, this, parentInfo);
      }
      this._ancestorInfo = validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
    }

    var mountImage;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var el;
      if (namespaceURI === DOMNamespaces.html) {
        if (this._tag === 'script') {
          // Create the script via .innerHTML so its "parser-inserted" flag is
          // set to true and it does not execute
          var div = ownerDocument.createElement('div');
          var type = this._currentElement.type;
          div.innerHTML = '<' + type + '></' + type + '>';
          el = div.removeChild(div.firstChild);
        } else if (props.is) {
          el = ownerDocument.createElement(this._currentElement.type, props.is);
        } else {
          // Separate else branch instead of using `props.is || undefined` above becuase of a Firefox bug.
          // See discussion in https://github.com/facebook/react/pull/6896
          // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
          el = ownerDocument.createElement(this._currentElement.type);
        }
      } else {
        el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
      }
      ReactDOMComponentTree.precacheNode(this, el);
      this._flags |= Flags.hasCachedChildNodes;
      if (!this._hostParent) {
        DOMPropertyOperations.setAttributeForRoot(el);
      }
      this._updateDOMProperties(null, props, transaction);
      var lazyTree = DOMLazyTree(el);
      this._createInitialChildren(transaction, props, context, lazyTree);
      mountImage = lazyTree;
    } else {
      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
      var tagContent = this._createContentMarkup(transaction, props, context);
      if (!tagContent && omittedCloseTags[this._tag]) {
        mountImage = tagOpen + '/>';
      } else {
        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
      }
    }

    switch (this._tag) {
      case 'input':
        transaction.getReactMountReady().enqueue(inputPostMount, this);
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'textarea':
        transaction.getReactMountReady().enqueue(textareaPostMount, this);
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'select':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'button':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'option':
        transaction.getReactMountReady().enqueue(optionPostMount, this);
        break;
    }

    return mountImage;
  },

  /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */
  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
    var ret = '<' + this._currentElement.type;

    for (var propKey in props) {
      if (!props.hasOwnProperty(propKey)) {
        continue;
      }
      var propValue = props[propKey];
      if (propValue == null) {
        continue;
      }
      if (registrationNameModules.hasOwnProperty(propKey)) {
        if (propValue) {
          enqueuePutListener(this, propKey, propValue, transaction);
        }
      } else {
        if (propKey === STYLE) {
          if (propValue) {
            if (true) {
              // See `_updateDOMProperties`. style block
              this._previousStyle = propValue;
            }
            propValue = this._previousStyleCopy = _assign({}, props.style);
          }
          propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
        }
        var markup = null;
        if (this._tag != null && isCustomComponent(this._tag, props)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
        }
        if (markup) {
          ret += ' ' + markup;
        }
      }
    }

    // For static pages, no need to put React ID and checksum. Saves lots of
    // bytes.
    if (transaction.renderToStaticMarkup) {
      return ret;
    }

    if (!this._hostParent) {
      ret += ' ' + DOMPropertyOperations.createMarkupForRoot();
    }
    ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
    return ret;
  },

  /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */
  _createContentMarkup: function (transaction, props, context) {
    var ret = '';

    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        ret = innerHTML.__html;
      }
    } else {
      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        ret = escapeTextContentForBrowser(contentToUse);
        if (true) {
          setAndValidateContentChildDev.call(this, contentToUse);
        }
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        ret = mountImages.join('');
      }
    }
    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
      // text/html ignores the first character in these tags if it's a newline
      // Prefer to break application/xml over text/html (for now) by adding
      // a newline specifically to get eaten by the parser. (Alternately for
      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
      // \r is normalized out by HTMLTextAreaElement#value.)
      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
      // See: Parsing of "textarea" "listing" and "pre" elements
      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
      return '\n' + ret;
    } else {
      return ret;
    }
  },

  _createInitialChildren: function (transaction, props, context, lazyTree) {
    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
      }
    } else {
      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      // TODO: Validate that text is allowed as a child of this node
      if (contentToUse != null) {
        // Avoid setting textContent when the text is empty. In IE11 setting
        // textContent on a text area will cause the placeholder to not
        // show within the textarea until it has been focused and blurred again.
        // https://github.com/facebook/react/issues/6731#issuecomment-254874553
        if (contentToUse !== '') {
          if (true) {
            setAndValidateContentChildDev.call(this, contentToUse);
          }
          DOMLazyTree.queueText(lazyTree, contentToUse);
        }
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        for (var i = 0; i < mountImages.length; i++) {
          DOMLazyTree.queueChild(lazyTree, mountImages[i]);
        }
      }
    }
  },

  /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */
  receiveComponent: function (nextElement, transaction, context) {
    var prevElement = this._currentElement;
    this._currentElement = nextElement;
    this.updateComponent(transaction, prevElement, nextElement, context);
  },

  /**
   * Updates a DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevElement, nextElement, context) {
    var lastProps = prevElement.props;
    var nextProps = this._currentElement.props;

    switch (this._tag) {
      case 'input':
        lastProps = ReactDOMInput.getHostProps(this, lastProps);
        nextProps = ReactDOMInput.getHostProps(this, nextProps);
        break;
      case 'option':
        lastProps = ReactDOMOption.getHostProps(this, lastProps);
        nextProps = ReactDOMOption.getHostProps(this, nextProps);
        break;
      case 'select':
        lastProps = ReactDOMSelect.getHostProps(this, lastProps);
        nextProps = ReactDOMSelect.getHostProps(this, nextProps);
        break;
      case 'textarea':
        lastProps = ReactDOMTextarea.getHostProps(this, lastProps);
        nextProps = ReactDOMTextarea.getHostProps(this, nextProps);
        break;
    }

    assertValidProps(this, nextProps);
    this._updateDOMProperties(lastProps, nextProps, transaction);
    this._updateDOMChildren(lastProps, nextProps, transaction, context);

    switch (this._tag) {
      case 'input':
        // Update the wrapper around inputs *after* updating props. This has to
        // happen after `_updateDOMProperties`. Otherwise HTML5 input validations
        // raise warnings and prevent the new value from being assigned.
        ReactDOMInput.updateWrapper(this);
        break;
      case 'textarea':
        ReactDOMTextarea.updateWrapper(this);
        break;
      case 'select':
        // <select> value update needs to occur after <option> children
        // reconciliation
        transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
        break;
    }
  },

  /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {?DOMElement} node
   */
  _updateDOMProperties: function (lastProps, nextProps, transaction) {
    var propKey;
    var styleName;
    var styleUpdates;
    for (propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
        continue;
      }
      if (propKey === STYLE) {
        var lastStyle = this._previousStyleCopy;
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';
          }
        }
        this._previousStyleCopy = null;
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        if (lastProps[propKey]) {
          // Only call deleteListener if there was a listener previously or
          // else willDeleteListener gets called when there wasn't actually a
          // listener (e.g., onClick={null})
          deleteListener(this, propKey);
        }
      } else if (isCustomComponent(this._tag, lastProps)) {
        if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
          DOMPropertyOperations.deleteValueForAttribute(getNode(this), propKey);
        }
      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
        DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
      }
    }
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
        continue;
      }
      if (propKey === STYLE) {
        if (nextProp) {
          if (true) {
            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
            this._previousStyle = nextProp;
          }
          nextProp = this._previousStyleCopy = _assign({}, nextProp);
        } else {
          this._previousStyleCopy = null;
        }
        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          styleUpdates = nextProp;
        }
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        if (nextProp) {
          enqueuePutListener(this, propKey, nextProp, transaction);
        } else if (lastProp) {
          deleteListener(this, propKey);
        }
      } else if (isCustomComponent(this._tag, nextProps)) {
        if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
          DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
        }
      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
        var node = getNode(this);
        // If we're updating to null or undefined, we should remove the property
        // from the DOM node instead of inadvertently setting to a string. This
        // brings us in line with the same behavior we have on initial render.
        if (nextProp != null) {
          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
        } else {
          DOMPropertyOperations.deleteValueForProperty(node, propKey);
        }
      }
    }
    if (styleUpdates) {
      CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
    }
  },

  /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */
  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
    var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

    // Note the use of `!=` which checks for null or undefined.
    var lastChildren = lastContent != null ? null : lastProps.children;
    var nextChildren = nextContent != null ? null : nextProps.children;

    // If we're switching from children to content/html or vice versa, remove
    // the old content
    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
    if (lastChildren != null && nextChildren == null) {
      this.updateChildren(null, transaction, context);
    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent('');
      if (true) {
        ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
      }
    }

    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
        if (true) {
          setAndValidateContentChildDev.call(this, nextContent);
        }
      }
    } else if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        this.updateMarkup('' + nextHtml);
      }
      if (true) {
        ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
      }
    } else if (nextChildren != null) {
      if (true) {
        setAndValidateContentChildDev.call(this, null);
      }

      this.updateChildren(nextChildren, transaction, context);
    }
  },

  getHostNode: function () {
    return getNode(this);
  },

  /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */
  unmountComponent: function (safely) {
    switch (this._tag) {
      case 'audio':
      case 'form':
      case 'iframe':
      case 'img':
      case 'link':
      case 'object':
      case 'source':
      case 'video':
        var listeners = this._wrapperState.listeners;
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].remove();
          }
        }
        break;
      case 'input':
      case 'textarea':
        inputValueTracking.stopTracking(this);
        break;
      case 'html':
      case 'head':
      case 'body':
        /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */
         true ?  true ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.', this._tag) : _prodInvariant('66', this._tag) : void 0;
        break;
    }

    this.unmountChildren(safely);
    ReactDOMComponentTree.uncacheNode(this);
    EventPluginHub.deleteAllListeners(this);
    this._rootNodeID = 0;
    this._domID = 0;
    this._wrapperState = null;

    if (true) {
      setAndValidateContentChildDev.call(this, null);
    }
  },

  getPublicInstance: function () {
    return getNode(this);
  }
};

_assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);

module.exports = ReactDOMComponent;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var validateDOMNesting = __webpack_require__(69);

var DOC_NODE_TYPE = 9;

function ReactDOMContainerInfo(topLevelWrapper, node) {
  var info = {
    _topLevelWrapper: topLevelWrapper,
    _idCounter: 1,
    _ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
    _node: node,
    _tag: node ? node.nodeName.toLowerCase() : null,
    _namespaceURI: node ? node.namespaceURI : null
  };
  if (true) {
    info._ancestorInfo = node ? validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
  }
  return info;
}

module.exports = ReactDOMContainerInfo;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var DOMLazyTree = __webpack_require__(31);
var ReactDOMComponentTree = __webpack_require__(5);

var ReactDOMEmptyComponent = function (instantiate) {
  // ReactCompositeComponent uses this:
  this._currentElement = null;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;
  this._hostContainerInfo = null;
  this._domID = 0;
};
_assign(ReactDOMEmptyComponent.prototype, {
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    var domID = hostContainerInfo._idCounter++;
    this._domID = domID;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var nodeValue = ' react-empty: ' + this._domID + ' ';
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var node = ownerDocument.createComment(nodeValue);
      ReactDOMComponentTree.precacheNode(this, node);
      return DOMLazyTree(node);
    } else {
      if (transaction.renderToStaticMarkup) {
        // Normally we'd insert a comment node, but since this is a situation
        // where React won't take over (static pages), we can simply return
        // nothing.
        return '';
      }
      return '<!--' + nodeValue + '-->';
    }
  },
  receiveComponent: function () {},
  getHostNode: function () {
    return ReactDOMComponentTree.getNodeFromInstance(this);
  },
  unmountComponent: function () {
    ReactDOMComponentTree.uncacheNode(this);
  }
});

module.exports = ReactDOMEmptyComponent;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMChildrenOperations = __webpack_require__(53);
var ReactDOMComponentTree = __webpack_require__(5);

/**
 * Operations used to process updates to DOM nodes.
 */
var ReactDOMIDOperations = {
  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
    var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
    DOMChildrenOperations.processUpdates(node, updates);
  }
};

module.exports = ReactDOMIDOperations;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var DOMPropertyOperations = __webpack_require__(90);
var LinkedValueUtils = __webpack_require__(58);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactUpdates = __webpack_require__(15);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

var didWarnValueLink = false;
var didWarnCheckedLink = false;
var didWarnValueDefaultValue = false;
var didWarnCheckedDefaultChecked = false;
var didWarnControlledToUncontrolled = false;
var didWarnUncontrolledToControlled = false;

function forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    ReactDOMInput.updateWrapper(this);
  }
}

function isControlled(props) {
  var usesChecked = props.type === 'checkbox' || props.type === 'radio';
  return usesChecked ? props.checked != null : props.value != null;
}

/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
var ReactDOMInput = {
  getHostProps: function (inst, props) {
    var value = LinkedValueUtils.getValue(props);
    var checked = LinkedValueUtils.getChecked(props);

    var hostProps = _assign({
      // Make sure we set .type before any other properties (setting .value
      // before .type means .value is lost in IE11 and below)
      type: undefined,
      // Make sure we set .step before .value (setting .value before .step
      // means .value is rounded on mount, based upon step precision)
      step: undefined,
      // Make sure we set .min & .max before .value (to ensure proper order
      // in corner cases such as min or max deriving from value, e.g. Issue #7170)
      min: undefined,
      max: undefined
    }, props, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: value != null ? value : inst._wrapperState.initialValue,
      checked: checked != null ? checked : inst._wrapperState.initialChecked,
      onChange: inst._wrapperState.onChange
    });

    return hostProps;
  },

  mountWrapper: function (inst, props) {
    if (true) {
      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);

      var owner = inst._currentElement._owner;

      if (props.valueLink !== undefined && !didWarnValueLink) {
         true ? warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
        didWarnValueLink = true;
      }
      if (props.checkedLink !== undefined && !didWarnCheckedLink) {
         true ? warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
        didWarnCheckedLink = true;
      }
      if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
         true ? warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        didWarnCheckedDefaultChecked = true;
      }
      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
         true ? warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        didWarnValueDefaultValue = true;
      }
    }

    var defaultValue = props.defaultValue;
    inst._wrapperState = {
      initialChecked: props.checked != null ? props.checked : props.defaultChecked,
      initialValue: props.value != null ? props.value : defaultValue,
      listeners: null,
      onChange: _handleChange.bind(inst),
      controlled: isControlled(props)
    };
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    if (true) {
      var controlled = isControlled(props);
      var owner = inst._currentElement._owner;

      if (!inst._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
         true ? warning(false, '%s is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        didWarnUncontrolledToControlled = true;
      }
      if (inst._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
         true ? warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        didWarnControlledToUncontrolled = true;
      }
    }

    // TODO: Shouldn't this be getChecked(props)?
    var checked = props.checked;
    if (checked != null) {
      DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
    }

    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      if (value === 0 && node.value === '') {
        node.value = '0';
        // Note: IE9 reports a number inputs as 'text', so check props instead.
      } else if (props.type === 'number') {
        // Simulate `input.valueAsNumber`. IE9 does not support it
        var valueAsNumber = parseFloat(node.value, 10) || 0;

        if (
        // eslint-disable-next-line
        value != valueAsNumber ||
        // eslint-disable-next-line
        value == valueAsNumber && node.value != value) {
          // Cast `value` to a string to ensure the value is set correctly. While
          // browsers typically do this as necessary, jsdom doesn't.
          node.value = '' + value;
        }
      } else if (node.value !== '' + value) {
        // Cast `value` to a string to ensure the value is set correctly. While
        // browsers typically do this as necessary, jsdom doesn't.
        node.value = '' + value;
      }
    } else {
      if (props.value == null && props.defaultValue != null) {
        // In Chrome, assigning defaultValue to certain input types triggers input validation.
        // For number inputs, the display value loses trailing decimal points. For email inputs,
        // Chrome raises "The specified value <x> is not a valid email address".
        //
        // Here we check to see if the defaultValue has actually changed, avoiding these problems
        // when the user is inputting text
        //
        // https://github.com/facebook/react/issues/7253
        if (node.defaultValue !== '' + props.defaultValue) {
          node.defaultValue = '' + props.defaultValue;
        }
      }
      if (props.checked == null && props.defaultChecked != null) {
        node.defaultChecked = !!props.defaultChecked;
      }
    }
  },

  postMountWrapper: function (inst) {
    var props = inst._currentElement.props;

    // This is in postMount because we need access to the DOM node, which is not
    // available until after the component has mounted.
    var node = ReactDOMComponentTree.getNodeFromInstance(inst);

    // Detach value from defaultValue. We won't do anything if we're working on
    // submit or reset inputs as those values & defaultValues are linked. They
    // are not resetable nodes so this operation doesn't matter and actually
    // removes browser-default values (eg "Submit Query") when no value is
    // provided.

    switch (props.type) {
      case 'submit':
      case 'reset':
        break;
      case 'color':
      case 'date':
      case 'datetime':
      case 'datetime-local':
      case 'month':
      case 'time':
      case 'week':
        // This fixes the no-show issue on iOS Safari and Android Chrome:
        // https://github.com/facebook/react/issues/7233
        node.value = '';
        node.value = node.defaultValue;
        break;
      default:
        node.value = node.value;
        break;
    }

    // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
    // this is needed to work around a chrome bug where setting defaultChecked
    // will sometimes influence the value of checked (even after detachment).
    // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
    // We need to temporarily unset name to avoid disrupting radio button groups.
    var name = node.name;
    if (name !== '') {
      node.name = '';
    }
    node.defaultChecked = !node.defaultChecked;
    node.defaultChecked = !node.defaultChecked;
    if (name !== '') {
      node.name = name;
    }
  }
};

function _handleChange(event) {
  var props = this._currentElement.props;

  var returnValue = LinkedValueUtils.executeOnChange(props, event);

  // Here we use asap to wait until all updates have propagated, which
  // is important when using controlled components within layers:
  // https://github.com/facebook/react/issues/1698
  ReactUpdates.asap(forceUpdateIfMounted, this);

  var name = props.name;
  if (props.type === 'radio' && name != null) {
    var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
    var queryRoot = rootNode;

    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;
    }

    // If `rootNode.form` was non-null, then we could try `form.elements`,
    // but that sometimes behaves strangely in IE8. We could also try using
    // `form.getElementsByName`, but that will only return direct children
    // and won't include inputs that use the HTML5 `form=` attribute. Since
    // the input might not even be in a form, let's just use the global
    // `querySelectorAll` to ensure we don't miss anything.
    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

    for (var i = 0; i < group.length; i++) {
      var otherNode = group[i];
      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
        continue;
      }
      // This will throw if radio buttons rendered by different copies of React
      // and the same name are rendered into the same form (same as #1939).
      // That's probably okay; we don't support it just as we don't support
      // mixing React radio buttons with non-React ones.
      var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
      !otherInstance ?  true ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : _prodInvariant('90') : void 0;
      // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.
      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
    }
  }

  return returnValue;
}

module.exports = ReactDOMInput;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var React = __webpack_require__(37);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactDOMSelect = __webpack_require__(92);

var warning = __webpack_require__(1);
var didWarnInvalidOptionChildren = false;

function flattenChildren(children) {
  var content = '';

  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else if (!didWarnInvalidOptionChildren) {
      didWarnInvalidOptionChildren = true;
       true ? warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
    }
  });

  return content;
}

/**
 * Implements an <option> host component that warns when `selected` is set.
 */
var ReactDOMOption = {
  mountWrapper: function (inst, props, hostParent) {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if (true) {
       true ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
    }

    // Look up whether this option is 'selected'
    var selectValue = null;
    if (hostParent != null) {
      var selectParent = hostParent;

      if (selectParent._tag === 'optgroup') {
        selectParent = selectParent._hostParent;
      }

      if (selectParent != null && selectParent._tag === 'select') {
        selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
      }
    }

    // If the value is null (e.g., no specified value or after initial mount)
    // or missing (e.g., for <datalist>), we don't change props.selected
    var selected = null;
    if (selectValue != null) {
      var value;
      if (props.value != null) {
        value = props.value + '';
      } else {
        value = flattenChildren(props.children);
      }
      selected = false;
      if (Array.isArray(selectValue)) {
        // multiple
        for (var i = 0; i < selectValue.length; i++) {
          if ('' + selectValue[i] === value) {
            selected = true;
            break;
          }
        }
      } else {
        selected = '' + selectValue === value;
      }
    }

    inst._wrapperState = { selected: selected };
  },

  postMountWrapper: function (inst) {
    // value="" should make a value attribute (#6219)
    var props = inst._currentElement.props;
    if (props.value != null) {
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      node.setAttribute('value', props.value);
    }
  },

  getHostProps: function (inst, props) {
    var hostProps = _assign({ selected: undefined, children: undefined }, props);

    // Read state only from initial mount because <select> updates value
    // manually; we need the initial state only for server rendering
    if (inst._wrapperState.selected != null) {
      hostProps.selected = inst._wrapperState.selected;
    }

    var content = flattenChildren(props.children);

    if (content) {
      hostProps.children = content;
    }

    return hostProps;
  }
};

module.exports = ReactDOMOption;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(6);

var getNodeForCharacterOffset = __webpack_require__(288);
var getTextContentAccessor = __webpack_require__(103);

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
  return anchorNode === focusNode && anchorOffset === focusOffset;
}

/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getIEOffsets(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;

  // Duplicate selection so we can move range without breaking user selection.
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint('EndToStart', selectedRange);

  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;

  return {
    start: startOffset,
    end: endOffset
  };
}

/**
 * @param {DOMElement} node
 * @return {?object}
 */
function getModernOffsets(node) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;

  var currentRange = selection.getRangeAt(0);

  // In Firefox, range.startContainer and range.endContainer can be "anonymous
  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
  // divs do not seem to expose properties, triggering a "Permission denied
  // error" if any of its properties are accessed. The only seemingly possible
  // way to avoid erroring is to access a property that typically works for
  // non-anonymous divs and catch any error that may otherwise arise. See
  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
  try {
    /* eslint-disable no-unused-expressions */
    currentRange.startContainer.nodeType;
    currentRange.endContainer.nodeType;
    /* eslint-enable no-unused-expressions */
  } catch (e) {
    return null;
  }

  // If the node and offset values are the same, the selection is collapsed.
  // `Selection.isCollapsed` is available natively, but IE sometimes gets
  // this value wrong.
  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;

  // Detect whether the selection is backward.
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;

  return {
    start: isBackward ? end : start,
    end: isBackward ? start : end
  };
}

/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setIEOffsets(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;

  if (offsets.end === undefined) {
    start = offsets.start;
    end = start;
  } else if (offsets.start > offsets.end) {
    start = offsets.end;
    end = offsets.start;
  } else {
    start = offsets.start;
    end = offsets.end;
  }

  range.moveToElementText(node);
  range.moveStart('character', start);
  range.setEndPoint('EndToStart', range);
  range.moveEnd('character', end - start);
  range.select();
}

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

var ReactDOMSelection = {
  /**
   * @param {DOMElement} node
   */
  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
};

module.exports = ReactDOMSelection;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDefaultInjection = __webpack_require__(250);
var ReactServerRendering = __webpack_require__(266);
var ReactVersion = __webpack_require__(268);

ReactDefaultInjection.inject();

var ReactDOMServer = {
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  version: ReactVersion
};

module.exports = ReactDOMServer;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var DOMChildrenOperations = __webpack_require__(53);
var DOMLazyTree = __webpack_require__(31);
var ReactDOMComponentTree = __webpack_require__(5);

var escapeTextContentForBrowser = __webpack_require__(44);
var invariant = __webpack_require__(0);
var validateDOMNesting = __webpack_require__(69);

/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings between comment nodes so that they
 * can undergo the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */
var ReactDOMTextComponent = function (text) {
  // TODO: This is really a ReactText (ReactNode), not a ReactElement
  this._currentElement = text;
  this._stringText = '' + text;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;

  // Properties
  this._domID = 0;
  this._mountIndex = 0;
  this._closingComment = null;
  this._commentNodes = null;
};

_assign(ReactDOMTextComponent.prototype, {
  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    if (true) {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;
      } else if (hostContainerInfo != null) {
        parentInfo = hostContainerInfo._ancestorInfo;
      }
      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        validateDOMNesting(null, this._stringText, this, parentInfo);
      }
    }

    var domID = hostContainerInfo._idCounter++;
    var openingValue = ' react-text: ' + domID + ' ';
    var closingValue = ' /react-text ';
    this._domID = domID;
    this._hostParent = hostParent;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var openingComment = ownerDocument.createComment(openingValue);
      var closingComment = ownerDocument.createComment(closingValue);
      var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
      DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
      if (this._stringText) {
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
      }
      DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
      ReactDOMComponentTree.precacheNode(this, openingComment);
      this._closingComment = closingComment;
      return lazyTree;
    } else {
      var escapedText = escapeTextContentForBrowser(this._stringText);

      if (transaction.renderToStaticMarkup) {
        // Normally we'd wrap this between comment nodes for the reasons stated
        // above, but since this is a situation where React won't take over
        // (static pages), we can simply return the text as it is.
        return escapedText;
      }

      return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
    }
  },

  /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  receiveComponent: function (nextText, transaction) {
    if (nextText !== this._currentElement) {
      this._currentElement = nextText;
      var nextStringText = '' + nextText;
      if (nextStringText !== this._stringText) {
        // TODO: Save this as pending props and use performUpdateIfNecessary
        // and/or updateComponent to do the actual update for consistency with
        // other component types?
        this._stringText = nextStringText;
        var commentNodes = this.getHostNode();
        DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
      }
    }
  },

  getHostNode: function () {
    var hostNode = this._commentNodes;
    if (hostNode) {
      return hostNode;
    }
    if (!this._closingComment) {
      var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
      var node = openingComment.nextSibling;
      while (true) {
        !(node != null) ?  true ? invariant(false, 'Missing closing comment for text component %s', this._domID) : _prodInvariant('67', this._domID) : void 0;
        if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
          this._closingComment = node;
          break;
        }
        node = node.nextSibling;
      }
    }
    hostNode = [this._hostNode, this._closingComment];
    this._commentNodes = hostNode;
    return hostNode;
  },

  unmountComponent: function () {
    this._closingComment = null;
    this._commentNodes = null;
    ReactDOMComponentTree.uncacheNode(this);
  }
});

module.exports = ReactDOMTextComponent;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2),
    _assign = __webpack_require__(3);

var LinkedValueUtils = __webpack_require__(58);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactUpdates = __webpack_require__(15);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

var didWarnValueLink = false;
var didWarnValDefaultVal = false;

function forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    ReactDOMTextarea.updateWrapper(this);
  }
}

/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
var ReactDOMTextarea = {
  getHostProps: function (inst, props) {
    !(props.dangerouslySetInnerHTML == null) ?  true ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : _prodInvariant('91') : void 0;

    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.  We could add a check in setTextContent
    // to only set the value if/when the value differs from the node value (which would
    // completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
    // The value can be a boolean or object so that's why it's forced to be a string.
    var hostProps = _assign({}, props, {
      value: undefined,
      defaultValue: undefined,
      children: '' + inst._wrapperState.initialValue,
      onChange: inst._wrapperState.onChange
    });

    return hostProps;
  },

  mountWrapper: function (inst, props) {
    if (true) {
      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
      if (props.valueLink !== undefined && !didWarnValueLink) {
         true ? warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
        didWarnValueLink = true;
      }
      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
         true ? warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
        didWarnValDefaultVal = true;
      }
    }

    var value = LinkedValueUtils.getValue(props);
    var initialValue = value;

    // Only bother fetching default value if we're going to use it
    if (value == null) {
      var defaultValue = props.defaultValue;
      // TODO (yungsters): Remove support for children content in <textarea>.
      var children = props.children;
      if (children != null) {
        if (true) {
           true ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
        }
        !(defaultValue == null) ?  true ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : _prodInvariant('92') : void 0;
        if (Array.isArray(children)) {
          !(children.length <= 1) ?  true ? invariant(false, '<textarea> can only have at most one child.') : _prodInvariant('93') : void 0;
          children = children[0];
        }

        defaultValue = '' + children;
      }
      if (defaultValue == null) {
        defaultValue = '';
      }
      initialValue = defaultValue;
    }

    inst._wrapperState = {
      initialValue: '' + initialValue,
      listeners: null,
      onChange: _handleChange.bind(inst)
    };
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      var newValue = '' + value;

      // To avoid side effects (such as losing text selection), only set value if changed
      if (newValue !== node.value) {
        node.value = newValue;
      }
      if (props.defaultValue == null) {
        node.defaultValue = newValue;
      }
    }
    if (props.defaultValue != null) {
      node.defaultValue = props.defaultValue;
    }
  },

  postMountWrapper: function (inst) {
    // This is in postMount because we need access to the DOM node, which is not
    // available until after the component has mounted.
    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var textContent = node.textContent;

    // Only set node.value if textContent is equal to the expected
    // initial value. In IE10/IE11 there is a bug where the placeholder attribute
    // will populate textContent as well.
    // https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
    if (textContent === inst._wrapperState.initialValue) {
      node.value = textContent;
    }
  }
};

function _handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = LinkedValueUtils.executeOnChange(props, event);
  ReactUpdates.asap(forceUpdateIfMounted, this);
  return returnValue;
}

module.exports = ReactDOMTextarea;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function getLowestCommonAncestor(instA, instB) {
  !('_hostNode' in instA) ?  true ? invariant(false, 'getNodeFromInstance: Invalid argument.') : _prodInvariant('33') : void 0;
  !('_hostNode' in instB) ?  true ? invariant(false, 'getNodeFromInstance: Invalid argument.') : _prodInvariant('33') : void 0;

  var depthA = 0;
  for (var tempA = instA; tempA; tempA = tempA._hostParent) {
    depthA++;
  }
  var depthB = 0;
  for (var tempB = instB; tempB; tempB = tempB._hostParent) {
    depthB++;
  }

  // If A is deeper, crawl up.
  while (depthA - depthB > 0) {
    instA = instA._hostParent;
    depthA--;
  }

  // If B is deeper, crawl up.
  while (depthB - depthA > 0) {
    instB = instB._hostParent;
    depthB--;
  }

  // Walk in lockstep until we find a match.
  var depth = depthA;
  while (depth--) {
    if (instA === instB) {
      return instA;
    }
    instA = instA._hostParent;
    instB = instB._hostParent;
  }
  return null;
}

/**
 * Return if A is an ancestor of B.
 */
function isAncestor(instA, instB) {
  !('_hostNode' in instA) ?  true ? invariant(false, 'isAncestor: Invalid argument.') : _prodInvariant('35') : void 0;
  !('_hostNode' in instB) ?  true ? invariant(false, 'isAncestor: Invalid argument.') : _prodInvariant('35') : void 0;

  while (instB) {
    if (instB === instA) {
      return true;
    }
    instB = instB._hostParent;
  }
  return false;
}

/**
 * Return the parent instance of the passed-in instance.
 */
function getParentInstance(inst) {
  !('_hostNode' in inst) ?  true ? invariant(false, 'getParentInstance: Invalid argument.') : _prodInvariant('36') : void 0;

  return inst._hostParent;
}

/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function traverseTwoPhase(inst, fn, arg) {
  var path = [];
  while (inst) {
    path.push(inst);
    inst = inst._hostParent;
  }
  var i;
  for (i = path.length; i-- > 0;) {
    fn(path[i], 'captured', arg);
  }
  for (i = 0; i < path.length; i++) {
    fn(path[i], 'bubbled', arg);
  }
}

/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function traverseEnterLeave(from, to, fn, argFrom, argTo) {
  var common = from && to ? getLowestCommonAncestor(from, to) : null;
  var pathFrom = [];
  while (from && from !== common) {
    pathFrom.push(from);
    from = from._hostParent;
  }
  var pathTo = [];
  while (to && to !== common) {
    pathTo.push(to);
    to = to._hostParent;
  }
  var i;
  for (i = 0; i < pathFrom.length; i++) {
    fn(pathFrom[i], 'bubbled', argFrom);
  }
  for (i = pathTo.length; i-- > 0;) {
    fn(pathTo[i], 'captured', argTo);
  }
}

module.exports = {
  isAncestor: isAncestor,
  getLowestCommonAncestor: getLowestCommonAncestor,
  getParentInstance: getParentInstance,
  traverseTwoPhase: traverseTwoPhase,
  traverseEnterLeave: traverseEnterLeave
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactInvalidSetStateWarningHook = __webpack_require__(257);
var ReactHostOperationHistoryHook = __webpack_require__(255);
var ReactComponentTreeHook = __webpack_require__(13);
var ExecutionEnvironment = __webpack_require__(6);

var performanceNow = __webpack_require__(222);
var warning = __webpack_require__(1);

var hooks = [];
var didHookThrowForEvent = {};

function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
  try {
    fn.call(context, arg1, arg2, arg3, arg4, arg5);
  } catch (e) {
     true ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
    didHookThrowForEvent[event] = true;
  }
}

function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    var fn = hook[event];
    if (fn) {
      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
    }
  }
}

var isProfiling = false;
var flushHistory = [];
var lifeCycleTimerStack = [];
var currentFlushNesting = 0;
var currentFlushMeasurements = [];
var currentFlushStartTime = 0;
var currentTimerDebugID = null;
var currentTimerStartTime = 0;
var currentTimerNestedFlushDuration = 0;
var currentTimerType = null;

var lifeCycleTimerHasWarned = false;

function clearHistory() {
  ReactComponentTreeHook.purgeUnmountedComponents();
  ReactHostOperationHistoryHook.clearHistory();
}

function getTreeSnapshot(registeredIDs) {
  return registeredIDs.reduce(function (tree, id) {
    var ownerID = ReactComponentTreeHook.getOwnerID(id);
    var parentID = ReactComponentTreeHook.getParentID(id);
    tree[id] = {
      displayName: ReactComponentTreeHook.getDisplayName(id),
      text: ReactComponentTreeHook.getText(id),
      updateCount: ReactComponentTreeHook.getUpdateCount(id),
      childIDs: ReactComponentTreeHook.getChildIDs(id),
      // Text nodes don't have owners but this is close enough.
      ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
      parentID: parentID
    };
    return tree;
  }, {});
}

function resetMeasurements() {
  var previousStartTime = currentFlushStartTime;
  var previousMeasurements = currentFlushMeasurements;
  var previousOperations = ReactHostOperationHistoryHook.getHistory();

  if (currentFlushNesting === 0) {
    currentFlushStartTime = 0;
    currentFlushMeasurements = [];
    clearHistory();
    return;
  }

  if (previousMeasurements.length || previousOperations.length) {
    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
    flushHistory.push({
      duration: performanceNow() - previousStartTime,
      measurements: previousMeasurements || [],
      operations: previousOperations || [],
      treeSnapshot: getTreeSnapshot(registeredIDs)
    });
  }

  clearHistory();
  currentFlushStartTime = performanceNow();
  currentFlushMeasurements = [];
}

function checkDebugID(debugID) {
  var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (allowRoot && debugID === 0) {
    return;
  }
  if (!debugID) {
     true ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
  }
}

function beginLifeCycleTimer(debugID, timerType) {
  if (currentFlushNesting === 0) {
    return;
  }
  if (currentTimerType && !lifeCycleTimerHasWarned) {
     true ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
    lifeCycleTimerHasWarned = true;
  }
  currentTimerStartTime = performanceNow();
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = debugID;
  currentTimerType = timerType;
}

function endLifeCycleTimer(debugID, timerType) {
  if (currentFlushNesting === 0) {
    return;
  }
  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
     true ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
    lifeCycleTimerHasWarned = true;
  }
  if (isProfiling) {
    currentFlushMeasurements.push({
      timerType: timerType,
      instanceID: debugID,
      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
    });
  }
  currentTimerStartTime = 0;
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = null;
  currentTimerType = null;
}

function pauseCurrentLifeCycleTimer() {
  var currentTimer = {
    startTime: currentTimerStartTime,
    nestedFlushStartTime: performanceNow(),
    debugID: currentTimerDebugID,
    timerType: currentTimerType
  };
  lifeCycleTimerStack.push(currentTimer);
  currentTimerStartTime = 0;
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = null;
  currentTimerType = null;
}

function resumeCurrentLifeCycleTimer() {
  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
      startTime = _lifeCycleTimerStack$.startTime,
      nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
      debugID = _lifeCycleTimerStack$.debugID,
      timerType = _lifeCycleTimerStack$.timerType;

  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
  currentTimerStartTime = startTime;
  currentTimerNestedFlushDuration += nestedFlushDuration;
  currentTimerDebugID = debugID;
  currentTimerType = timerType;
}

var lastMarkTimeStamp = 0;
var canUsePerformanceMeasure = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

function shouldMark(debugID) {
  if (!isProfiling || !canUsePerformanceMeasure) {
    return false;
  }
  var element = ReactComponentTreeHook.getElement(debugID);
  if (element == null || typeof element !== 'object') {
    return false;
  }
  var isHostElement = typeof element.type === 'string';
  if (isHostElement) {
    return false;
  }
  return true;
}

function markBegin(debugID, markType) {
  if (!shouldMark(debugID)) {
    return;
  }

  var markName = debugID + '::' + markType;
  lastMarkTimeStamp = performanceNow();
  performance.mark(markName);
}

function markEnd(debugID, markType) {
  if (!shouldMark(debugID)) {
    return;
  }

  var markName = debugID + '::' + markType;
  var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

  // Chrome has an issue of dropping markers recorded too fast:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
  // To work around this, we will not report very small measurements.
  // I determined the magic number by tweaking it back and forth.
  // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
  // When the bug is fixed, we can `measure()` unconditionally if we want to.
  var timeStamp = performanceNow();
  if (timeStamp - lastMarkTimeStamp > 0.1) {
    var measurementName = displayName + ' [' + markType + ']';
    performance.measure(measurementName, markName);
  }

  performance.clearMarks(markName);
  if (measurementName) {
    performance.clearMeasures(measurementName);
  }
}

var ReactDebugTool = {
  addHook: function (hook) {
    hooks.push(hook);
  },
  removeHook: function (hook) {
    for (var i = 0; i < hooks.length; i++) {
      if (hooks[i] === hook) {
        hooks.splice(i, 1);
        i--;
      }
    }
  },
  isProfiling: function () {
    return isProfiling;
  },
  beginProfiling: function () {
    if (isProfiling) {
      return;
    }

    isProfiling = true;
    flushHistory.length = 0;
    resetMeasurements();
    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
  },
  endProfiling: function () {
    if (!isProfiling) {
      return;
    }

    isProfiling = false;
    resetMeasurements();
    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
  },
  getFlushHistory: function () {
    return flushHistory;
  },
  onBeginFlush: function () {
    currentFlushNesting++;
    resetMeasurements();
    pauseCurrentLifeCycleTimer();
    emitEvent('onBeginFlush');
  },
  onEndFlush: function () {
    resetMeasurements();
    currentFlushNesting--;
    resumeCurrentLifeCycleTimer();
    emitEvent('onEndFlush');
  },
  onBeginLifeCycleTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
    markBegin(debugID, timerType);
    beginLifeCycleTimer(debugID, timerType);
  },
  onEndLifeCycleTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    endLifeCycleTimer(debugID, timerType);
    markEnd(debugID, timerType);
    emitEvent('onEndLifeCycleTimer', debugID, timerType);
  },
  onBeginProcessingChildContext: function () {
    emitEvent('onBeginProcessingChildContext');
  },
  onEndProcessingChildContext: function () {
    emitEvent('onEndProcessingChildContext');
  },
  onHostOperation: function (operation) {
    checkDebugID(operation.instanceID);
    emitEvent('onHostOperation', operation);
  },
  onSetState: function () {
    emitEvent('onSetState');
  },
  onSetChildren: function (debugID, childDebugIDs) {
    checkDebugID(debugID);
    childDebugIDs.forEach(checkDebugID);
    emitEvent('onSetChildren', debugID, childDebugIDs);
  },
  onBeforeMountComponent: function (debugID, element, parentDebugID) {
    checkDebugID(debugID);
    checkDebugID(parentDebugID, true);
    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
    markBegin(debugID, 'mount');
  },
  onMountComponent: function (debugID) {
    checkDebugID(debugID);
    markEnd(debugID, 'mount');
    emitEvent('onMountComponent', debugID);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    checkDebugID(debugID);
    emitEvent('onBeforeUpdateComponent', debugID, element);
    markBegin(debugID, 'update');
  },
  onUpdateComponent: function (debugID) {
    checkDebugID(debugID);
    markEnd(debugID, 'update');
    emitEvent('onUpdateComponent', debugID);
  },
  onBeforeUnmountComponent: function (debugID) {
    checkDebugID(debugID);
    emitEvent('onBeforeUnmountComponent', debugID);
    markBegin(debugID, 'unmount');
  },
  onUnmountComponent: function (debugID) {
    checkDebugID(debugID);
    markEnd(debugID, 'unmount');
    emitEvent('onUnmountComponent', debugID);
  },
  onTestEvent: function () {
    emitEvent('onTestEvent');
  }
};

// TODO remove these when RN/www gets updated
ReactDebugTool.addDevtool = ReactDebugTool.addHook;
ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
ReactDebugTool.addHook(ReactComponentTreeHook);
var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
if (/[?&]react_perf\b/.test(url)) {
  ReactDebugTool.beginProfiling();
}

module.exports = ReactDebugTool;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ARIADOMPropertyConfig = __webpack_require__(225);
var BeforeInputEventPlugin = __webpack_require__(227);
var ChangeEventPlugin = __webpack_require__(229);
var DefaultEventPluginOrder = __webpack_require__(231);
var EnterLeaveEventPlugin = __webpack_require__(232);
var HTMLDOMPropertyConfig = __webpack_require__(234);
var ReactComponentBrowserEnvironment = __webpack_require__(236);
var ReactDOMComponent = __webpack_require__(238);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactDOMEmptyComponent = __webpack_require__(240);
var ReactDOMTreeTraversal = __webpack_require__(248);
var ReactDOMTextComponent = __webpack_require__(246);
var ReactDefaultBatchingStrategy = __webpack_require__(93);
var ReactEventListener = __webpack_require__(253);
var ReactInjection = __webpack_require__(256);
var ReactReconcileTransaction = __webpack_require__(263);
var SVGDOMPropertyConfig = __webpack_require__(269);
var SelectEventPlugin = __webpack_require__(270);
var SimpleEventPlugin = __webpack_require__(271);

var alreadyInjected = false;

function inject() {
  if (alreadyInjected) {
    // TODO: This is currently true because these injections are shared between
    // the client and the server package. They should be built independently
    // and not share any injection state. Then this problem will be solved.
    return;
  }
  alreadyInjected = true;

  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
  ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
  ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  ReactInjection.EventPluginHub.injectEventPluginsByName({
    SimpleEventPlugin: SimpleEventPlugin,
    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
    ChangeEventPlugin: ChangeEventPlugin,
    SelectEventPlugin: SelectEventPlugin,
    BeforeInputEventPlugin: BeforeInputEventPlugin
  });

  ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);

  ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);

  ReactInjection.DOMProperty.injectDOMPropertyConfig(ARIADOMPropertyConfig);
  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

  ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
    return new ReactDOMEmptyComponent(instantiate);
  });

  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
}

module.exports = {
  inject: inject
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPluginHub = __webpack_require__(33);

function runEventQueueInBatch(events) {
  EventPluginHub.enqueueEvents(events);
  EventPluginHub.processEventQueue(false);
}

var ReactEventEmitterMixin = {
  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */
  handleTopLevel: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
    runEventQueueInBatch(events);
  }
};

module.exports = ReactEventEmitterMixin;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var EventListener = __webpack_require__(83);
var ExecutionEnvironment = __webpack_require__(6);
var PooledClass = __webpack_require__(20);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactUpdates = __webpack_require__(15);

var getEventTarget = __webpack_require__(66);
var getUnboundedScrollPosition = __webpack_require__(215);

/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function findParent(inst) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  while (inst._hostParent) {
    inst = inst._hostParent;
  }
  var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
  var container = rootNode.parentNode;
  return ReactDOMComponentTree.getClosestInstanceFromNode(container);
}

// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
_assign(TopLevelCallbackBookKeeping.prototype, {
  destructor: function () {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);

function handleTopLevelImpl(bookKeeping) {
  var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
  var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = targetInst;
  do {
    bookKeeping.ancestors.push(ancestor);
    ancestor = ancestor && findParent(ancestor);
  } while (ancestor);

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    targetInst = bookKeeping.ancestors[i];
    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
  }
}

function scrollValueMonitor(cb) {
  var scrollPosition = getUnboundedScrollPosition(window);
  cb(scrollPosition);
}

var ReactEventListener = {
  _enabled: true,
  _handleTopLevel: null,

  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

  setHandleTopLevel: function (handleTopLevel) {
    ReactEventListener._handleTopLevel = handleTopLevel;
  },

  setEnabled: function (enabled) {
    ReactEventListener._enabled = !!enabled;
  },

  isEnabled: function () {
    return ReactEventListener._enabled;
  },

  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} element Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function (topLevelType, handlerBaseName, element) {
    if (!element) {
      return null;
    }
    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} element Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function (topLevelType, handlerBaseName, element) {
    if (!element) {
      return null;
    }
    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  monitorScrollValue: function (refresh) {
    var callback = scrollValueMonitor.bind(null, refresh);
    EventListener.listen(window, 'scroll', callback);
  },

  dispatchEvent: function (topLevelType, nativeEvent) {
    if (!ReactEventListener._enabled) {
      return;
    }

    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
    } finally {
      TopLevelCallbackBookKeeping.release(bookKeeping);
    }
  }
};

module.exports = ReactEventListener;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactFeatureFlags = {
  // When true, call console.time() before and .timeEnd() after each top-level
  // render (both initial renders and updates). Useful when looking at prod-mode
  // timeline profiles in Chrome, for example.
  logTopLevelRenders: false
};

module.exports = ReactFeatureFlags;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var history = [];

var ReactHostOperationHistoryHook = {
  onHostOperation: function (operation) {
    history.push(operation);
  },
  clearHistory: function () {
    if (ReactHostOperationHistoryHook._preventClearing) {
      // Should only be used for tests.
      return;
    }

    history = [];
  },
  getHistory: function () {
    return history;
  }
};

module.exports = ReactHostOperationHistoryHook;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var DOMProperty = __webpack_require__(32);
var EventPluginHub = __webpack_require__(33);
var EventPluginUtils = __webpack_require__(56);
var ReactComponentEnvironment = __webpack_require__(60);
var ReactEmptyComponent = __webpack_require__(94);
var ReactBrowserEventEmitter = __webpack_require__(59);
var ReactHostComponent = __webpack_require__(95);
var ReactUpdates = __webpack_require__(15);

var ReactInjection = {
  Component: ReactComponentEnvironment.injection,
  DOMProperty: DOMProperty.injection,
  EmptyComponent: ReactEmptyComponent.injection,
  EventPluginHub: EventPluginHub.injection,
  EventPluginUtils: EventPluginUtils.injection,
  EventEmitter: ReactBrowserEventEmitter.injection,
  HostComponent: ReactHostComponent.injection,
  Updates: ReactUpdates.injection
};

module.exports = ReactInjection;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var warning = __webpack_require__(1);

if (true) {
  var processingChildContext = false;

  var warnInvalidSetState = function () {
     true ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
  };
}

var ReactInvalidSetStateWarningHook = {
  onBeginProcessingChildContext: function () {
    processingChildContext = true;
  },
  onEndProcessingChildContext: function () {
    processingChildContext = false;
  },
  onSetState: function () {
    warnInvalidSetState();
  }
};

module.exports = ReactInvalidSetStateWarningHook;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var adler32 = __webpack_require__(282);

var TAG_END = /\/?>/;
var COMMENT_START = /^<\!\-\-/;

var ReactMarkupChecksum = {
  CHECKSUM_ATTR_NAME: 'data-react-checksum',

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function (markup) {
    var checksum = adler32(markup);

    // Add checksum (handle both parent tags, comments and self-closing tags)
    if (COMMENT_START.test(markup)) {
      return markup;
    } else {
      return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
    }
  },

  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function (markup, element) {
    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = adler32(markup);
    return markupChecksum === existingChecksum;
  }
};

module.exports = ReactMarkupChecksum;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var ReactComponentEnvironment = __webpack_require__(60);
var ReactInstanceMap = __webpack_require__(62);
var ReactInstrumentation = __webpack_require__(11);

var ReactCurrentOwner = __webpack_require__(18);
var ReactReconciler = __webpack_require__(35);
var ReactChildReconciler = __webpack_require__(235);

var emptyFunction = __webpack_require__(10);
var flattenChildren = __webpack_require__(285);
var invariant = __webpack_require__(0);

/**
 * Make an update for markup to be rendered and inserted at a supplied index.
 *
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function makeInsertMarkup(markup, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'INSERT_MARKUP',
    content: markup,
    fromIndex: null,
    fromNode: null,
    toIndex: toIndex,
    afterNode: afterNode
  };
}

/**
 * Make an update for moving an existing element to another index.
 *
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
function makeMove(child, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'MOVE_EXISTING',
    content: null,
    fromIndex: child._mountIndex,
    fromNode: ReactReconciler.getHostNode(child),
    toIndex: toIndex,
    afterNode: afterNode
  };
}

/**
 * Make an update for removing an element at an index.
 *
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
function makeRemove(child, node) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'REMOVE_NODE',
    content: null,
    fromIndex: child._mountIndex,
    fromNode: node,
    toIndex: null,
    afterNode: null
  };
}

/**
 * Make an update for setting the markup of a node.
 *
 * @param {string} markup Markup that renders into an element.
 * @private
 */
function makeSetMarkup(markup) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'SET_MARKUP',
    content: markup,
    fromIndex: null,
    fromNode: null,
    toIndex: null,
    afterNode: null
  };
}

/**
 * Make an update for setting the text content.
 *
 * @param {string} textContent Text content to set.
 * @private
 */
function makeTextContent(textContent) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'TEXT_CONTENT',
    content: textContent,
    fromIndex: null,
    fromNode: null,
    toIndex: null,
    afterNode: null
  };
}

/**
 * Push an update, if any, onto the queue. Creates a new queue if none is
 * passed and always returns the queue. Mutative.
 */
function enqueue(queue, update) {
  if (update) {
    queue = queue || [];
    queue.push(update);
  }
  return queue;
}

/**
 * Processes any enqueued updates.
 *
 * @private
 */
function processQueue(inst, updateQueue) {
  ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
}

var setChildrenForInstrumentation = emptyFunction;
if (true) {
  var getDebugID = function (inst) {
    if (!inst._debugID) {
      // Check for ART-like instances. TODO: This is silly/gross.
      var internal;
      if (internal = ReactInstanceMap.get(inst)) {
        inst = internal;
      }
    }
    return inst._debugID;
  };
  setChildrenForInstrumentation = function (children) {
    var debugID = getDebugID(this);
    // TODO: React Native empty components are also multichild.
    // This means they still get into this method but don't have _debugID.
    if (debugID !== 0) {
      ReactInstrumentation.debugTool.onSetChildren(debugID, children ? Object.keys(children).map(function (key) {
        return children[key]._debugID;
      }) : []);
    }
  };
}

/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */
var ReactMultiChild = {
  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: {
    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
      if (true) {
        var selfDebugID = getDebugID(this);
        if (this._currentElement) {
          try {
            ReactCurrentOwner.current = this._currentElement._owner;
            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
          } finally {
            ReactCurrentOwner.current = null;
          }
        }
      }
      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
    },

    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
      var nextChildren;
      var selfDebugID = 0;
      if (true) {
        selfDebugID = getDebugID(this);
        if (this._currentElement) {
          try {
            ReactCurrentOwner.current = this._currentElement._owner;
            nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
          } finally {
            ReactCurrentOwner.current = null;
          }
          ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
          return nextChildren;
        }
      }
      nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
      ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
      return nextChildren;
    },

    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
    mountChildren: function (nestedChildren, transaction, context) {
      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
      this._renderedChildren = children;

      var mountImages = [];
      var index = 0;
      for (var name in children) {
        if (children.hasOwnProperty(name)) {
          var child = children[name];
          var selfDebugID = 0;
          if (true) {
            selfDebugID = getDebugID(this);
          }
          var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
          child._mountIndex = index++;
          mountImages.push(mountImage);
        }
      }

      if (true) {
        setChildrenForInstrumentation.call(this, children);
      }

      return mountImages;
    },

    /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */
    updateTextContent: function (nextContent) {
      var prevChildren = this._renderedChildren;
      // Remove any rendered children.
      ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
           true ?  true ? invariant(false, 'updateTextContent called on non-empty component.') : _prodInvariant('118') : void 0;
        }
      }
      // Set new text content.
      var updates = [makeTextContent(nextContent)];
      processQueue(this, updates);
    },

    /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */
    updateMarkup: function (nextMarkup) {
      var prevChildren = this._renderedChildren;
      // Remove any rendered children.
      ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
           true ?  true ? invariant(false, 'updateTextContent called on non-empty component.') : _prodInvariant('118') : void 0;
        }
      }
      var updates = [makeSetMarkup(nextMarkup)];
      processQueue(this, updates);
    },

    /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    updateChildren: function (nextNestedChildrenElements, transaction, context) {
      // Hook used by React ART
      this._updateChildren(nextNestedChildrenElements, transaction, context);
    },

    /**
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
      var prevChildren = this._renderedChildren;
      var removedNodes = {};
      var mountImages = [];
      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context);
      if (!nextChildren && !prevChildren) {
        return;
      }
      var updates = null;
      var name;
      // `nextIndex` will increment for each child in `nextChildren`, but
      // `lastIndex` will be the last index visited in `prevChildren`.
      var nextIndex = 0;
      var lastIndex = 0;
      // `nextMountIndex` will increment for each newly mounted child.
      var nextMountIndex = 0;
      var lastPlacedNode = null;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var nextChild = nextChildren[name];
        if (prevChild === nextChild) {
          updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild._mountIndex = nextIndex;
        } else {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            // The `removedNodes` loop below will actually remove the child.
          }
          // The child must be instantiated before it's mounted.
          updates = enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
          nextMountIndex++;
        }
        nextIndex++;
        lastPlacedNode = ReactReconciler.getHostNode(nextChild);
      }
      // Remove children that are no longer present.
      for (name in removedNodes) {
        if (removedNodes.hasOwnProperty(name)) {
          updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
        }
      }
      if (updates) {
        processQueue(this, updates);
      }
      this._renderedChildren = nextChildren;

      if (true) {
        setChildrenForInstrumentation.call(this, nextChildren);
      }
    },

    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted. It does not actually perform any
     * backend operations.
     *
     * @internal
     */
    unmountChildren: function (safely) {
      var renderedChildren = this._renderedChildren;
      ReactChildReconciler.unmountChildren(renderedChildren, safely);
      this._renderedChildren = null;
    },

    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild: function (child, afterNode, toIndex, lastIndex) {
      // If the index of `child` is less than `lastIndex`, then it needs to
      // be moved. Otherwise, we do not need to move it because a child will be
      // inserted or moved before `child`.
      if (child._mountIndex < lastIndex) {
        return makeMove(child, afterNode, toIndex);
      }
    },

    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
    createChild: function (child, afterNode, mountImage) {
      return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function (child, node) {
      return makeRemove(child, node);
    },

    /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
    _mountChildAtIndex: function (child, mountImage, afterNode, index, transaction, context) {
      child._mountIndex = index;
      return this.createChild(child, afterNode, mountImage);
    },

    /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */
    _unmountChild: function (child, node) {
      var update = this.removeChild(child, node);
      child._mountIndex = null;
      return update;
    }
  }
};

module.exports = ReactMultiChild;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var React = __webpack_require__(37);

var invariant = __webpack_require__(0);

var ReactNodeTypes = {
  HOST: 0,
  COMPOSITE: 1,
  EMPTY: 2,

  getType: function (node) {
    if (node === null || node === false) {
      return ReactNodeTypes.EMPTY;
    } else if (React.isValidElement(node)) {
      if (typeof node.type === 'function') {
        return ReactNodeTypes.COMPOSITE;
      } else {
        return ReactNodeTypes.HOST;
      }
    }
     true ?  true ? invariant(false, 'Unexpected node: %s', node) : _prodInvariant('26', node) : void 0;
  }
};

module.exports = ReactNodeTypes;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var invariant = __webpack_require__(0);

/**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid owner.
 * @final
 */
function isValidOwner(object) {
  return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
}

/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */
var ReactOwner = {
  /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
  addComponentAsRefTo: function (component, ref, owner) {
    !isValidOwner(owner) ?  true ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('119') : void 0;
    owner.attachRef(ref, component);
  },

  /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
  removeComponentAsRefFrom: function (component, ref, owner) {
    !isValidOwner(owner) ?  true ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('120') : void 0;
    var ownerPublicInstance = owner.getPublicInstance();
    // Check that `component`'s owner is still alive and that `component` is still the current ref
    // because we do not want to detach the ref if another component stole it.
    if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
      owner.detachRef(ref);
    }
  }
};

module.exports = ReactOwner;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(3);

var CallbackQueue = __webpack_require__(89);
var PooledClass = __webpack_require__(20);
var ReactBrowserEventEmitter = __webpack_require__(59);
var ReactInputSelection = __webpack_require__(96);
var ReactInstrumentation = __webpack_require__(11);
var Transaction = __webpack_require__(43);
var ReactUpdateQueue = __webpack_require__(99);

/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var SELECTION_RESTORATION = {
  /**
   * @return {Selection} Selection information.
   */
  initialize: ReactInputSelection.getSelectionInformation,
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: ReactInputSelection.restoreSelection
};

/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var EVENT_SUPPRESSION = {
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function () {
    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
    ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;
  },

  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */
  close: function (previouslyEnabled) {
    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
  }
};

/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function () {
    this.reactMountReady.reset();
  },

  /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
  close: function () {
    this.reactMountReady.notifyAll();
  }
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];

if (true) {
  TRANSACTION_WRAPPERS.push({
    initialize: ReactInstrumentation.debugTool.onBeginFlush,
    close: ReactInstrumentation.debugTool.onEndFlush
  });
}

/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */
function ReactReconcileTransaction(useCreateElement) {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactDOMTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.useCreateElement = useCreateElement;
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return this.reactMountReady;
  },

  /**
   * @return {object} The queue to collect React async events.
   */
  getUpdateQueue: function () {
    return ReactUpdateQueue;
  },

  /**
   * Save current transaction state -- if the return value from this method is
   * passed to `rollback`, the transaction will be reset to that state.
   */
  checkpoint: function () {
    // reactMountReady is the our only stateful wrapper
    return this.reactMountReady.checkpoint();
  },

  rollback: function (checkpoint) {
    this.reactMountReady.rollback(checkpoint);
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

_assign(ReactReconcileTransaction.prototype, Transaction, Mixin);

PooledClass.addPoolingTo(ReactReconcileTransaction);

module.exports = ReactReconcileTransaction;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactOwner = __webpack_require__(261);

var ReactRef = {};

function attachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(component.getPublicInstance());
  } else {
    // Legacy ref
    ReactOwner.addComponentAsRefTo(component, ref, owner);
  }
}

function detachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(null);
  } else {
    // Legacy ref
    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
  }
}

ReactRef.attachRefs = function (instance, element) {
  if (element === null || typeof element !== 'object') {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    attachRef(ref, instance, element._owner);
  }
};

ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
  // If either the owner or a `ref` has changed, make sure the newest owner
  // has stored a reference to `this`, and the previous owner (if different)
  // has forgotten the reference to `this`. We use the element instead
  // of the public this.props because the post processing cannot determine
  // a ref. The ref conceptually lives on the element.

  // TODO: Should this even be possible? The owner cannot change because
  // it's forbidden by shouldUpdateReactComponent. The ref can change
  // if you swap the keys of but not the refs. Reconsider where this check
  // is made. It probably belongs where the key checking and
  // instantiateReactComponent is done.

  var prevRef = null;
  var prevOwner = null;
  if (prevElement !== null && typeof prevElement === 'object') {
    prevRef = prevElement.ref;
    prevOwner = prevElement._owner;
  }

  var nextRef = null;
  var nextOwner = null;
  if (nextElement !== null && typeof nextElement === 'object') {
    nextRef = nextElement.ref;
    nextOwner = nextElement._owner;
  }

  return prevRef !== nextRef ||
  // If owner changes but we have an unchanged function ref, don't update refs
  typeof nextRef === 'string' && nextOwner !== prevOwner;
};

ReactRef.detachRefs = function (instance, element) {
  if (element === null || typeof element !== 'object') {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    detachRef(ref, instance, element._owner);
  }
};

module.exports = ReactRef;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactServerBatchingStrategy = {
  isBatchingUpdates: false,
  batchedUpdates: function (callback) {
    // Don't do anything here. During the server rendering we don't want to
    // schedule any updates. We will simply ignore them.
  }
};

module.exports = ReactServerBatchingStrategy;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(2);

var React = __webpack_require__(37);
var ReactDOMContainerInfo = __webpack_require__(239);
var ReactDefaultBatchingStrategy = __webpack_require__(93);
var ReactInstrumentation = __webpack_require__(11);
var ReactMarkupChecksum = __webpack_require__(258);
var ReactReconciler = __webpack_require__(35);
var ReactServerBatchingStrategy = __webpack_require__(265);
var ReactServerRenderingTransaction = __webpack_require__(98);
var ReactUpdates = __webpack_require__(15);

var emptyObject = __webpack_require__(41);
var instantiateReactComponent = __webpack_require__(105);
var invariant = __webpack_require__(0);

var pendingTransactions = 0;

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToStringImpl(element, makeStaticMarkup) {
  var transaction;
  try {
    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);

    pendingTransactions++;

    return transaction.perform(function () {
      var componentInstance = instantiateReactComponent(element, true);
      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
      );
      if (true) {
        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
      }
      if (!makeStaticMarkup) {
        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
      }
      return markup;
    }, null);
  } finally {
    pendingTransactions--;
    ReactServerRenderingTransaction.release(transaction);
    // Revert to the DOM batching strategy since these two renderers
    // currently share these stateful modules.
    if (!pendingTransactions) {
      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    }
  }
}

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
 */
function renderToString(element) {
  !React.isValidElement(element) ?  true ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
  return renderToStringImpl(element, false);
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  !React.isValidElement(element) ?  true ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
  return renderToStringImpl(element, true);
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactUpdateQueue = __webpack_require__(99);

var warning = __webpack_require__(1);

function warnNoop(publicInstance, callerName) {
  if (true) {
    var constructor = publicInstance.constructor;
     true ? warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the update queue used for server rendering.
 * It delegates to ReactUpdateQueue while server rendering is in progress and
 * switches to ReactNoopUpdateQueue after the transaction has completed.
 * @class ReactServerUpdateQueue
 * @param {Transaction} transaction
 */

var ReactServerUpdateQueue = function () {
  function ReactServerUpdateQueue(transaction) {
    _classCallCheck(this, ReactServerUpdateQueue);

    this.transaction = transaction;
  }

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */


  ReactServerUpdateQueue.prototype.isMounted = function isMounted(publicInstance) {
    return false;
  };

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */


  ReactServerUpdateQueue.prototype.enqueueCallback = function enqueueCallback(publicInstance, callback, callerName) {
    if (this.transaction.isInTransaction()) {
      ReactUpdateQueue.enqueueCallback(publicInstance, callback, callerName);
    }
  };

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */


  ReactServerUpdateQueue.prototype.enqueueForceUpdate = function enqueueForceUpdate(publicInstance) {
    if (this.transaction.isInTransaction()) {
      ReactUpdateQueue.enqueueForceUpdate(publicInstance);
    } else {
      warnNoop(publicInstance, 'forceUpdate');
    }
  };

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object|function} completeState Next state.
   * @internal
   */


  ReactServerUpdateQueue.prototype.enqueueReplaceState = function enqueueReplaceState(publicInstance, completeState) {
    if (this.transaction.isInTransaction()) {
      ReactUpdateQueue.enqueueReplaceState(publicInstance, completeState);
    } else {
      warnNoop(publicInstance, 'replaceState');
    }
  };

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object|function} partialState Next partial state to be merged with state.
   * @internal
   */


  ReactServerUpdateQueue.prototype.enqueueSetState = function enqueueSetState(publicInstance, partialState) {
    if (this.transaction.isInTransaction()) {
      ReactUpdateQueue.enqueueSetState(publicInstance, partialState);
    } else {
      warnNoop(publicInstance, 'setState');
    }
  };

  return ReactServerUpdateQueue;
}();

module.exports = ReactServerUpdateQueue;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.6.1';

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

// We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};

var SVGDOMPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    xlinkActuate: NS.xlink,
    xlinkArcrole: NS.xlink,
    xlinkHref: NS.xlink,
    xlinkRole: NS.xlink,
    xlinkShow: NS.xlink,
    xlinkTitle: NS.xlink,
    xlinkType: NS.xlink,
    xmlBase: NS.xml,
    xmlLang: NS.xml,
    xmlSpace: NS.xml
  },
  DOMAttributeNames: {}
};

Object.keys(ATTRS).forEach(function (key) {
  SVGDOMPropertyConfig.Properties[key] = 0;
  if (ATTRS[key]) {
    SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
  }
});

module.exports = SVGDOMPropertyConfig;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var EventPropagators = __webpack_require__(34);
var ExecutionEnvironment = __webpack_require__(6);
var ReactDOMComponentTree = __webpack_require__(5);
var ReactInputSelection = __webpack_require__(96);
var SyntheticEvent = __webpack_require__(16);

var getActiveElement = __webpack_require__(85);
var isTextInputElement = __webpack_require__(106);
var shallowEqual = __webpack_require__(52);

var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

var eventTypes = {
  select: {
    phasedRegistrationNames: {
      bubbled: 'onSelect',
      captured: 'onSelectCapture'
    },
    dependencies: ['topBlur', 'topContextMenu', 'topFocus', 'topKeyDown', 'topKeyUp', 'topMouseDown', 'topMouseUp', 'topSelectionChange']
  }
};

var activeElement = null;
var activeElementInst = null;
var lastSelection = null;
var mouseDown = false;

// Track whether a listener exists for this plugin. If none exist, we do
// not extract events. See #3639.
var hasListener = false;

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getSelection(node) {
  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else if (window.getSelection) {
    var selection = window.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  } else if (document.selection) {
    var range = document.selection.createRange();
    return {
      parentElement: range.parentElement(),
      text: range.text,
      top: range.boundingTop,
      left: range.boundingLeft
    };
  }
}

/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function constructSelectEvent(nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
    return null;
  }

  // Only fire when selection has actually changed.
  var currentSelection = getSelection(activeElement);
  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;

    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);

    syntheticEvent.type = 'select';
    syntheticEvent.target = activeElement;

    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;
  }

  return null;
}

/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var SelectEventPlugin = {
  eventTypes: eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    if (!hasListener) {
      return null;
    }

    var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    switch (topLevelType) {
      // Track the input node that has focus.
      case 'topFocus':
        if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
          activeElement = targetNode;
          activeElementInst = targetInst;
          lastSelection = null;
        }
        break;
      case 'topBlur':
        activeElement = null;
        activeElementInst = null;
        lastSelection = null;
        break;
      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case 'topMouseDown':
        mouseDown = true;
        break;
      case 'topContextMenu':
      case 'topMouseUp':
        mouseDown = false;
        return constructSelectEvent(nativeEvent, nativeEventTarget);
      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't). IE's event fires out of order with respect
      // to key and input events on deletion, so we discard it.
      //
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      // This is also our approach for IE handling, for the reason above.
      case 'topSelectionChange':
        if (skipSelectionChangeEvent) {
          break;
        }
      // falls through
      case 'topKeyDown':
      case 'topKeyUp':
        return constructSelectEvent(nativeEvent, nativeEventTarget);
    }

    return null;
  },

  didPutListener: function (inst, registrationName, listener) {
    if (registrationName === 'onSelect') {
      hasListener = true;
    }
  }
};

module.exports = SelectEventPlugin;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(2);

var EventListener = __webpack_require__(83);
var EventPropagators = __webpack_require__(34);
var ReactDOMComponentTree = __webpack_require__(5);
var SyntheticAnimationEvent = __webpack_require__(272);
var SyntheticClipboardEvent = __webpack_require__(273);
var SyntheticEvent = __webpack_require__(16);
var SyntheticFocusEvent = __webpack_require__(276);
var SyntheticKeyboardEvent = __webpack_require__(278);
var SyntheticMouseEvent = __webpack_require__(42);
var SyntheticDragEvent = __webpack_require__(275);
var SyntheticTouchEvent = __webpack_require__(279);
var SyntheticTransitionEvent = __webpack_require__(280);
var SyntheticUIEvent = __webpack_require__(36);
var SyntheticWheelEvent = __webpack_require__(281);

var emptyFunction = __webpack_require__(10);
var getEventCharCode = __webpack_require__(64);
var invariant = __webpack_require__(0);

/**
 * Turns
 * ['abort', ...]
 * into
 * eventTypes = {
 *   'abort': {
 *     phasedRegistrationNames: {
 *       bubbled: 'onAbort',
 *       captured: 'onAbortCapture',
 *     },
 *     dependencies: ['topAbort'],
 *   },
 *   ...
 * };
 * topLevelEventsToDispatchConfig = {
 *   'topAbort': { sameConfig }
 * };
 */
var eventTypes = {};
var topLevelEventsToDispatchConfig = {};
['abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'canPlay', 'canPlayThrough', 'click', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel'].forEach(function (event) {
  var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
  var onEvent = 'on' + capitalizedEvent;
  var topEvent = 'top' + capitalizedEvent;

  var type = {
    phasedRegistrationNames: {
      bubbled: onEvent,
      captured: onEvent + 'Capture'
    },
    dependencies: [topEvent]
  };
  eventTypes[event] = type;
  topLevelEventsToDispatchConfig[topEvent] = type;
});

var onClickListeners = {};

function getDictionaryKey(inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
}

function isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

var SimpleEventPlugin = {
  eventTypes: eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case 'topAbort':
      case 'topCanPlay':
      case 'topCanPlayThrough':
      case 'topDurationChange':
      case 'topEmptied':
      case 'topEncrypted':
      case 'topEnded':
      case 'topError':
      case 'topInput':
      case 'topInvalid':
      case 'topLoad':
      case 'topLoadedData':
      case 'topLoadedMetadata':
      case 'topLoadStart':
      case 'topPause':
      case 'topPlay':
      case 'topPlaying':
      case 'topProgress':
      case 'topRateChange':
      case 'topReset':
      case 'topSeeked':
      case 'topSeeking':
      case 'topStalled':
      case 'topSubmit':
      case 'topSuspend':
      case 'topTimeUpdate':
      case 'topVolumeChange':
      case 'topWaiting':
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent;
        break;
      case 'topKeyPress':
        // Firefox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;
        }
      /* falls through */
      case 'topKeyDown':
      case 'topKeyUp':
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case 'topBlur':
      case 'topFocus':
        EventConstructor = SyntheticFocusEvent;
        break;
      case 'topClick':
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
      /* falls through */
      case 'topDoubleClick':
      case 'topMouseDown':
      case 'topMouseMove':
      case 'topMouseUp':
      // TODO: Disabled elements should not respond to mouse events
      /* falls through */
      case 'topMouseOut':
      case 'topMouseOver':
      case 'topContextMenu':
        EventConstructor = SyntheticMouseEvent;
        break;
      case 'topDrag':
      case 'topDragEnd':
      case 'topDragEnter':
      case 'topDragExit':
      case 'topDragLeave':
      case 'topDragOver':
      case 'topDragStart':
      case 'topDrop':
        EventConstructor = SyntheticDragEvent;
        break;
      case 'topTouchCancel':
      case 'topTouchEnd':
      case 'topTouchMove':
      case 'topTouchStart':
        EventConstructor = SyntheticTouchEvent;
        break;
      case 'topAnimationEnd':
      case 'topAnimationIteration':
      case 'topAnimationStart':
        EventConstructor = SyntheticAnimationEvent;
        break;
      case 'topTransitionEnd':
        EventConstructor = SyntheticTransitionEvent;
        break;
      case 'topScroll':
        EventConstructor = SyntheticUIEvent;
        break;
      case 'topWheel':
        EventConstructor = SyntheticWheelEvent;
        break;
      case 'topCopy':
      case 'topCut':
      case 'topPaste':
        EventConstructor = SyntheticClipboardEvent;
        break;
    }
    !EventConstructor ?  true ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : _prodInvariant('86', topLevelType) : void 0;
    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  },

  didPutListener: function (inst, registrationName, listener) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    if (registrationName === 'onClick' && !isInteractive(inst._tag)) {
      var key = getDictionaryKey(inst);
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      if (!onClickListeners[key]) {
        onClickListeners[key] = EventListener.listen(node, 'click', emptyFunction);
      }
    }
  },

  willDeleteListener: function (inst, registrationName) {
    if (registrationName === 'onClick' && !isInteractive(inst._tag)) {
      var key = getDictionaryKey(inst);
      onClickListeners[key].remove();
      delete onClickListeners[key];
    }
  }
};

module.exports = SimpleEventPlugin;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(16);

/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */
var AnimationEventInterface = {
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);

module.exports = SyntheticAnimationEvent;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(16);

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var ClipboardEventInterface = {
  clipboardData: function (event) {
    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

module.exports = SyntheticClipboardEvent;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(16);

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var CompositionEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

module.exports = SyntheticCompositionEvent;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticMouseEvent = __webpack_require__(42);

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var DragEventInterface = {
  dataTransfer: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

module.exports = SyntheticDragEvent;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticUIEvent = __webpack_require__(36);

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var FocusEventInterface = {
  relatedTarget: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

module.exports = SyntheticFocusEvent;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(16);

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var InputEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

module.exports = SyntheticInputEvent;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticUIEvent = __webpack_require__(36);

var getEventCharCode = __webpack_require__(64);
var getEventKey = __webpack_require__(286);
var getEventModifierState = __webpack_require__(65);

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var KeyboardEventInterface = {
  key: getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: getEventModifierState,
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    return 0;
  },
  keyCode: function (event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  },
  which: function (event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

module.exports = SyntheticKeyboardEvent;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticUIEvent = __webpack_require__(36);

var getEventModifierState = __webpack_require__(65);

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var TouchEventInterface = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: getEventModifierState
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

module.exports = SyntheticTouchEvent;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticEvent = __webpack_require__(16);

/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */
var TransitionEventInterface = {
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);

module.exports = SyntheticTransitionEvent;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var SyntheticMouseEvent = __webpack_require__(42);

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var WheelEventInterface = {
  deltaX: function (event) {
    return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function (event) {
    return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
    'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
    'wheelDelta' in event ? -event.wheelDelta : 0;
  },
  deltaZ: null,

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

module.exports = SyntheticWheelEvent;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var MOD = 65521;

// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function adler32(data) {
  var a = 1;
  var b = 0;
  var i = 0;
  var l = data.length;
  var m = l & ~0x3;
  while (i < m) {
    var n = Math.min(i + 4096, m);
    for (; i < n; i += 4) {
      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
    }
    a %= MOD;
    b %= MOD;
  }
  for (; i < l; i++) {
    b += a += data.charCodeAt(i);
  }
  a %= MOD;
  b %= MOD;
  return a | b << 16;
}

module.exports = adler32;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(2);

var ReactPropTypeLocationNames = __webpack_require__(262);
var ReactPropTypesSecret = __webpack_require__(97);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(13);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ?  true ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
       true ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (true) {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(13);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

         true ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var CSSProperty = __webpack_require__(88);
var warning = __webpack_require__(1);

var isUnitlessNumber = CSSProperty.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isCustomProperty || isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (true) {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
           true ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

module.exports = dangerousStyleValue;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var KeyEscapeUtils = __webpack_require__(57);
var traverseAllChildren = __webpack_require__(109);
var warning = __webpack_require__(1);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(13);
}

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  if (traverseContext && typeof traverseContext === 'object') {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if (true) {
      if (!ReactComponentTreeHook) {
        ReactComponentTreeHook = __webpack_require__(13);
      }
      if (!keyUnique) {
         true ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
      }
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;
  }
  var result = {};

  if (true) {
    traverseAllChildren(children, function (traverseContext, child, name) {
      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
    }, result);
  } else {
    traverseAllChildren(children, flattenSingleChildIntoContext, result);
  }
  return result;
}

module.exports = flattenChildren;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var getEventCharCode = __webpack_require__(64);

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var normalizeKey = {
  Esc: 'Escape',
  Spacebar: ' ',
  Left: 'ArrowLeft',
  Up: 'ArrowUp',
  Right: 'ArrowRight',
  Down: 'ArrowDown',
  Del: 'Delete',
  Win: 'OS',
  Menu: 'ContextMenu',
  Apps: 'ContextMenu',
  Scroll: 'ScrollLock',
  MozPrintableKey: 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = {
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Insert',
  46: 'Delete',
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  224: 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

module.exports = getEventKey;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */

function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}

/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType === 3) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = getLeafNode(getSiblingNode(node));
  }
}

module.exports = getNodeForCharacterOffset;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(6);

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;
}

/**
 * A list of event names to a configurable list of vendor prefixes.
 */
var vendorPrefixes = {
  animationend: makePrefixMap('Animation', 'AnimationEnd'),
  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
  animationstart: makePrefixMap('Animation', 'AnimationStart'),
  transitionend: makePrefixMap('Transition', 'TransitionEnd')
};

/**
 * Event names that have already been detected and prefixed (if applicable).
 */
var prefixedEventNames = {};

/**
 * Element to check for prefixes on.
 */
var style = {};

/**
 * Bootstrap if a DOM exists.
 */
if (ExecutionEnvironment.canUseDOM) {
  style = document.createElement('div').style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.
  if (!('AnimationEvent' in window)) {
    delete vendorPrefixes.animationend.animation;
    delete vendorPrefixes.animationiteration.animation;
    delete vendorPrefixes.animationstart.animation;
  }

  // Same as above
  if (!('TransitionEvent' in window)) {
    delete vendorPrefixes.transitionend.transition;
  }
}

/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  } else if (!vendorPrefixes[eventName]) {
    return eventName;
  }

  var prefixMap = vendorPrefixes[eventName];

  for (var styleProp in prefixMap) {
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
      return prefixedEventNames[eventName] = prefixMap[styleProp];
    }
  }

  return '';
}

module.exports = getVendorPrefixedEventName;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var escapeTextContentForBrowser = __webpack_require__(44);

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser(value) + '"';
}

module.exports = quoteAttributeValueForBrowser;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(245);


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(25);

var invariant = __webpack_require__(0);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ?  true ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var PooledClass = __webpack_require__(293);
var ReactElement = __webpack_require__(21);

var emptyFunction = __webpack_require__(10);
var traverseAllChildren = __webpack_require__(304);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(21);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (true) {
  var ReactElementValidator = __webpack_require__(112);
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(21),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(86);

module.exports = factory(isValidElement);

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.6.1';

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(25);

var ReactPropTypeLocationNames = __webpack_require__(296);
var ReactPropTypesSecret = __webpack_require__(298);

var invariant = __webpack_require__(0);
var warning = __webpack_require__(1);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(13);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ?  true ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
       true ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (true) {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(13);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

         true ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(110),
    Component = _require.Component;

var _require2 = __webpack_require__(21),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(113);
var factory = __webpack_require__(207);

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var nextDebugID = 1;

function getNextDebugID() {
  return nextDebugID++;
}

module.exports = getNextDebugID;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(25);

var ReactElement = __webpack_require__(21);

var invariant = __webpack_require__(0);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ?  true ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(25);

var ReactCurrentOwner = __webpack_require__(18);
var REACT_ELEMENT_TYPE = __webpack_require__(111);

var getIteratorFn = __webpack_require__(114);
var invariant = __webpack_require__(0);
var KeyEscapeUtils = __webpack_require__(292);
var warning = __webpack_require__(1);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (true) {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
           true ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ?  true ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAMAAAAvHNATAAACx1BMVEUAAAAdEhEjGBYiFxUjGBYjGBYjGBYjGBYjGBYjGBYjGBYjGBYjGBYjGBYjGBYjGBYZDg0jGBb/78rThTfoysVIVlQWDAtaTkONiY6ZlZrb29zw8fHFtpqXk5ju7++ysLOppqo/R0WgnaDi4uOPi5ClaC2joKTLxsXDwsS0srWqqazLysy7ubvFwMBPMx7e3uCEf4To6erT09Sjn6Py8/Otq66al5uRjZKRhHC7u72sp6qKhors7e3V1dbTzszx4r+9vL60sLHY2NnBwMLm5ufFxMYsKCbk5OXg4OG5uLu8uLm3tbiwrrGmo6bQz9EvIiAxJSHr6+y/vsCem59DOzrOzs+4t7murLCSjpP////o6OnKyMqloqWhnqJANzfX1tjRzMqsqa2mpaiVkZbWjEA2NzXS0dPV0M62tLd2aVrHxsjBvLzIuZ3/mIo/My3d3d7NyMe0tLKopqmUkJWtnofNzc7My8386MHAv8HDv7/Wx6hSXl3eoFw9NTTp6urIx8ncv7qxr7KDdmVGPz7IxMPk1LScmZ6bmJyGjIxURUFKQkE6MTLX0tCfkXtMRURNQDfPysn3267IfjU0LS0uHxjHwsKaoKDvx5N/hYZ0e3vkrW6GcW5ha2q9dzORXCrPtK+Gg4eeh4N6f4BOW1kpIB45JhrV1NXZ1NLUz83KxcTBxMTpuoFscnNmcG9pW008Lix7TyfGysrxzpyUmpp/fIBtW1haOiAlHBr64riwtLW3npm7rZKKj5Bvd3d5dHZbZmXbmVOycTEyKCeal5yOlJTswYp1b3DIeG3hpmVZUVBBS0lIOTeGVSlwSCSpra6gpaXDqaSTlZhqY2NgUU7ZkkkzMzEwJiVlQSJDKx3agnZ5ZmNiW1w5PTtPMi301aXxkIPms3dvaWxGUlCcYy0eExK6t7eqko6RjIu0bGJSSkp9TEUvKymRWFAJsNAEAAAAEXRSTlMAQBCA779gn98wz49QIK9wUFAEJFwAAA1ZSURBVHja7NQxDoMwEETRAWwnhgT0739ZhIQENQ1TzDvBL3ZHERERERERrxkHeWquYatrWDEN6zRZ2lhk6cMsS1/4yxEwydAAlFF+foDl+U8cDKds4VC63FRMyyqmZWeY32hcYcxWL1C5qU1P9J058+dNG4gCeLGNAYNBNzwJWvVP2ohCaJWEKonSiKpRpKpp06VDp3ZBygfIkC7+At4jIVvygHCWIntAREJIIBYmBiIGNqas+RK1A8EB4uPumqG/kcH8uPfevfdMIBCI8TwvBhweVMxDCEVojGJ8PIjmkYKO4oOJeYRFjqhl8EGEQ4rGuIcR8xD4JY+UE3FEgsSz17rPN0T91biEhMgJR2XWlnQ/Au/TW+OIFklkiano/1sXE5gTw4gFgZcZRn5/onNavICYCVGrYYPA+Wk1hit4huf/qhbHpu60qmaDeHYFSznGFDtzknlm3Djgs7fKCEDd2n//LrWzmkpvfT3IFdY3nzzbfPU4n8u8ef7i5dPkhW3CaPFpMQoxDmEJ3kQRzXANyv7bL1ixjb1kB4b3PE6m2d+wiI8i86XYg6PXS8W2t+GqgRYQEsRiMsIS5tEc52B9mIjtXZRbg9Jlv7lbrdWqH380+8Wp2JoOZ+ge4hz7keE5hstbMQsW8MRKcIypKAI4gVbsZO7EWmBPTuyuWBZWfNODjBiz2M7qqptjLahPcuyu2K6vGAqRrkrsYrZpdw8NaNKJoSBHmGbMYnoHXE4pxZBEaMaziqXSv1QAUNSaK1ZVFIwYk1lAYBXbUk1F7QBojlgTbIwYmxkXZRRTFcgW1g9bNUesDjpGDGOGRY4KDFXZNs3S7c1/ZECdXAyFQ8S9MxYKU4mVbQWMtYNcdXfzO7gYGQIxtolDjgnEYhpAR3PusTcdpZDX9Xa7niEQY5w4IhLFiVnlVHqgFXM66OPrIpslFfMIER2aKFDl2EYqXQE191uBvivWVwx6MSRFGHoAXixpmjdihSbUXbGcAhqNGPGrphBlVVbAGIutnzqh7A7yRTC/kYt5iNReeDEDKq7Y5LqwIZ+zoc0ihkS8F6WYE0k3x7Sx2GfFESsCpKfz2AgxmLF38mtQJ2IGWKm0BorWrZcuSzY4YpnuNJQqDBEFAcy6REbjSvkzFisbyVS62IFbSndn/p8KnCNSMP82yDRd3JpZRtYmM//sMmLBCFERxLyPIqPRA+NkyZa0YUCvgehIsAbSM1sB6OgVvW1Zbb2iqa2bHCvVB92Wqmnu5wpAzwskdTDZF5KzHuDpDRE9IfYJ1qPxCQcmilSVKaP/g7/Mmj1rIlEUhlmWZN11N3DOLSwsF1vrYRv/gq39NIJMNSAMVoLFLogogjCgnWmERSxESKOFYCDbhWSrEAjL/o1NzAznznXOuTNb5SmDhId733vmnY+z0xH2RnhnJAzeChdmwt4MX4z34hz1Ul6+VwUG0Y+ApZjxEUEX8xIqAXeIRzx+lmWMfgvz4qoMZk1g+Zwt+piXlWFSqVRGCbMNPuPL8bdfjUqo00I7i4TVGl6YLzW3bRsRe5BlLz9ki1jNg7pTQwsHUhhVIWZcoT+HFDLLXgqXySskWgBgV+uomOkcNGZktpJDVszybkS3CABIzS42+g0xP64BYEcxa4sh+0SfQ7EMUOfKIzW72BIi7i4bjfI1zGnJHsWQQVx+LrJPsVaJ1CxiozFEfGs8U77TN3OTKWQFMWK8mhz+J4gpN164hrWWfyFk9DmDPMVYNWj2pHGxhJivkdhc6Snzrd3nnTjFRLWuMGDXEPP3xesSABQxkUJWsI7XPqKsFuAJbfVKFcis3PhzlxQ7IA6AxVp5AmTwPf4HW9rKJGOl0cYusHy0zH3PolV3MIW9OjIDk7XSeMDAVmPP8lWemiNNM9rLEZjMlMZCGhjnFrEgTatOWnIhuzd3MlEyQhT28r0s5vFano88G5qwOk9Kp4MY5BCTz2QXSEviUR3ZJcx+KVMMB/8pZu5VPxpuPlpou5GZVi9u1KmYL2esCOn83GAS56jVytFiR8tI7X6qUsRqde5UiuViqtzDfohEz0vXChwiMG9IdrPlDXVroy06XL2Q6ti9OuKGK5Tpg47zuplbZWGB/JIVpAI7psV3wyEKOGmX142rZB6Qvycp8pXfDOt2giyt1KM8lM1cfKXE9DH2dreqDG55ta5+YhAzmS3i3Nal26QCAD+lSY0NG3W+JqJsRn0swk/bSbb0j3cqjc5GNiMv2wnYa41AeqxSEL0Idy+a9bk2axJyp5oWLK3EVqeKpdNmc0b5IoadDP/kqs6+j9Zb7HxmeSjCz4wenjK5VSaPaFBrMp/XUI0dr0mLI+14+nQkT1gdksv1kFby+gNaL1PsplLh91A268v3CO1JuI2sFvysDlppD4fPaaTmNav5HnXef6yaP2vCQBjGaTu1S7l64Cdw7eyWj5B8DaFxEgrSQQIOGSS0dBMJzgWRglJ0aacUrCAoVAvBrYj0QzSXeHkk3IW7tM+e5Mf7/72LcVVcDAwH/Qj/YakIWXNAjmU5HeMvYGeCc/5xSZ8Mbdgkez5GFiWrCi8t0YWUdJ9plOGOBJt10dNRFMMT0d2bBhd6SpJN+21AAntrYofREhr6qeh2t6dDdse78MCK2Gx7E4HZIamVy9OrgsIkdqxLrDFqejp+4zYis23bRI3VVxMHw/K07M3jeMktt6hIHtnZTAGxlDFuanWWxDUEZAdJKY3+IRpUJceZeKUZRFwbk1QVsQwUmTI38gCxL4v+z8xiL68ZyIDwJyTEMxS5PAJZh2RhhUfyL+DBOnPCNHPdJMmkNlvdph9yknFMhQup7LpuQhY/1pTd1p/zZbkSY01opL7JvKkS/+1GdaqChVFk6VNKW910vnQEl/V8WVqnJ25ui8ZamHCmsJhpCt3iiybq83nJ4+diskrGDGZGXHjuOmdC1hNmJJdyjRKTtQVVDMvSx8FgXZqKmUwKttJEQuv5plx+YjIHQ7XIlzAYF4vPBynZsx4SWk+LZkxWhyfFvhyn/sdjb1Kw96JgNBZM1oAnxXnZI5F8Cs3gSpFetJBQSRcUWuIHGokuyCOrrSMK+agX/xb+1YxTJtgn8//T8jOenOeAvf62XnavScVxGDf6BzoQ4bF8wcx8i2xLxXRhTSmbLqb5wqbbVNhkXTSUDXfhNlk4shHB6CqIAuntxptdFeyiYBDdhEEX7WpQQf9F3+85v3O+Z4fTatFzsxv388PzPOf5Hf/ltqYaU4/Vb9VHlDr2jdMwjHty5gC9PXV49ejBV1h2VImiO7FfWoZ9O/HfpWGZ6mt0a7ckTYK6WoZtirovqonCz95CrQnqgB4o1BG0Jko6HtVEwSHvtCz7simeL5ytm708PT1/9uzdR+eWbt++gmv65jgJb7KmXm8L1I38erpoT9ZcvoTZORIPpoYdsRX3wujA0FXDnfOnr0WXw6aTFy+ePGkKjy2PR6+dvn7+jsFwdWhgZjSzOLEScwynIp74iNOcyJUsZS9ZRs/+rj89WHblzCPBxusV3ezL6emH8wxsW7grSKsIuiOAVfj3aau9ULb4ci1nNR6MNESwmaGpq4bz169FL4yFGVh4DMCQDMCmniOYG8EaIlgrV3LVkmjZs+OkZ+gY3y4mXT5zNZ5yzAHYZQR7dRfBOlqG2fR6fSBfMb5vW4sAVsolnNWsJ9IYjs1NLGZGBwSw09HxsbDpIpCZwLILzDIAGxoYzSy4J+ZijkYqEs9Wna2c71ItuQMn944rhM9DqG0tWHwtZzYyHNPNzjIwtOwmGKw2bDsAZDYA49uYpYVlGYEs5ybcGTHL65Qlgi0TGGa5sIhgmGUWs/SVLMmC2rKv+FXrVnvZlXBmg42YbgOznGdZykmSYZN1ANMumZylgWWpKhnLUqtktYLasscIBiVLYsk8KQeAsSwZWE9tWD1vU5YMs2yJWTogy4XMzHM5SyrZhWiUlYxluYJZRoLxkSormZ0sIzAsmQVLFhHAqGQdtmJUyHfGSl7K0i+XzFzNYpZYMspy/IAs3VKWWLIElowso8dyywhZ1koJLBmAYcnYYPTxjXefYXsymJSlRZkllOzwg4ElKxcGu6JlNGTdvNGflkqm29hQDMYljj68+hEN8xsrLEsEwyxrBwyGSXMwZLAGlQyy3MUt+6R4g/8QqPBpHAwsme7Fviw/c+gZfvpHjwPt+HkjgKkGg0qGWc4cYjCC4mCULgEYjy3jHq/iLxLk6nptdZ4NRjwCYDQYS0tXJjnUzXucoJ/pdV7MkgYDwHxSyRx/XbJFKhlm6YLBGNziBPV64t9+yJaXSxYEsA0AkweDkTEua7qNYH8aDLFklCWB/XYwsGTFvS5H2vWG9IGKNBgAJmfJrstdjqnbHyym234eS3bQraQ9GOPCYBAYDgaULEi3kr2Y9so2bO5teZ/qA3V5MBgY3Uo3bhT6aze55oMdK/yrVciSSqYcDA8NxhTLkkqmypJuJY90K+Hpbf/2B2BrdvpPvQAWstUhy0INbyUEo5IJZN+rzisJ7CfUAMG0B4NuJfVgqMHYYKhvJTrdpg+FRDA9DcYvzTYiqATMgesAAAAASUVORK5CYII="

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAC31BMVEUAAAAjGBYjGBYjGBYjGBYjGBYjGBYWDAsjGBYiFxUjGBYjGBYjGBYjGBYjGBYjGBYjGBYZDg0jGBb/78rThTfoysVIVlQWDAvU1NWloqaNiY7x8fKsqq6fnKDz9PTf3+BQRTunpamzsbQ/R0Xr6+yYlJnl5ubOzc+6uLuPi5DMyMfb29zMy83Szsyxr7Kal5vu7+/Ew8aXk5fHwsHBvLypp6rBv8K8u764t7mVkZe2tbjp6ern5+jCwcSIg4gwJSLd3d6em57i4+OcmZ3S0dPV0M6urK+rqayDfoPs7O3Qz9HX0tCvrbChnqKRjZKUkJXa2tu6trb///+7urzk5OW0r7G/vsDx4r+npKeOipBFKhbIxsitqavY19nW1te+vL+zs7a0srWdmp+tnoeRhHCmoqWkoaX/mIqSjpPPysnJxMOioKN2aVq1s7ZudnXt7e7JyMrGxcdEOjnZ2drLysyCiorh4eLk1LQ2NzXRzMqZlppBODjWx6jIuZ0tIyHFwcDCvr6LiIxFPj0+NTU/My3JysuQjJJMRERaTkPIfjVlb27WjEA5MTGnai/Ix8r86MFxenreoFxJQUFMQDczLCzLxsXEv7/vx5MnHhy3npmTlZeGcW57TyfZ1NJtW1jPtK/3267qvISeh4N6foBpcnJRXVxoW05lQSI5JhrExcfcv7r64riMkZKEg4dgamk8LixZOiBPMx6/wsL01aWboqGfkXtbZWXZkkkuHxeWm5u6rJJ9g4OBfYDms3fkrW5URUK5urumqarxzpy9dzOcYy1wSCR2e31sc3SDdmVSSUpDKx3l5eWHjo2SfHh5dHZxaWlcVVbbmVO7vb7xkIPhpmVWYmBhUE1MMCyGVSmPlpaQi4rIeG1pYmJNWlhZUVFGUlA5PTtaODORXCvDqaSWkZR5ZmNDTkwhFhRybG1iW1yfYFd6SkRoQDozMzGqko7kiHx2b220bGI8Q0GycTGRWFAAg1ygAAAAEnRSTlMAEEC/nyDvv9/PYK+AcDCPUO9T7xPJAAAQw0lEQVR42uzXYQrCMBBE4emmKdUaK+/+h5WCUPS3UAbmu8GDZJdVREREREREREREXKfL3C5v/SFvwz1gcw+gyVq5BwyQtQ2ecraC9SKYgFXGCqDkawDWc2jncJetxmGZ5OoG3o+Ij1mmMC/omBcUp+b4kwtOy0t2ii/N7sAvfsyl/6g3debv2lQUxXFe8/LI75Q7fIlaFY1af1QkKv5CrKKIYv0FKooOKjgJAYdAJqVDHd4gbygSsua9QUjeEEIgxEGXZMkUyJChtFO3Lv4Fpq9Jb5tfvTn3OfhZC333c+8599xz0oOwJxQBji8q8UllKhwKenysD48nGpoW3Bq6AMcToFxo0yGPxsbiD4am/qkAR5vsGLwB1ccE8UTdlFDYSFTRRi0S9bMJCQZcy4yxezUlsnofI+EPuFN2xket6h1/fmEfkyA47cpzejwhZXT+qEwWH//3VNQ9vzEijgJ+5gqqV7al3JOoMmT5ErHjbu2MiOSbd6/lZ5bX4gL8SX92/xQ0AQMtsiv2B5a/BmHi824rBNlkBt6BtP+8CkCv5mpGsm4mjVqummrk29lKqUOl0m7nG6nU1l/LKwA2hn+BPCMPMCGD7g4pITZs/Y2nT5+/+XDw+KNXV9/vm3l3OTEXO/Ps/qEDx04cfhKbfX3p5NGZfbfOn7pxL2kB6ZG3BQlFE6s7PHp2k1mH9fzCRUGB/VfLwPyouqAQL1IhQh3XKBskDSycFhc497CFddaHXEflZUJoSmTo1bmO6tlJBI5U+BEMoir/7giG1+zPwEkuUCiXy7at66ZZTxoOyWS9buo7Bd62sDambkYIR6AxOhuwHnCBKoazS6CKOBtDeHKDEKOTRnKHwP5cYTGfvf3xdw649mNp6UexeeVttU8gxQXcCiMeHXICPAdSwHYO5EUFeOWnX6XyAnbhSEfAhk4W4HVTnAg3kBSoATCzC0BeQoBpAaKBvMANfQUOv7YFUrBEBTgTG/BLXjoH8oaFDqlmV6AOXVyAbqDwTJZOYgMOdokuwA3ECfMwkhPIA8ZcSQdMRwCoEgQoBorKOHSBHGAnOk+J2ca3TYEZIEsS4AbieEMakxR4bAP2Zf4WKpaBozQB5okSHhbTqiYhcE8HYFxLOAJLhmHoAMxLJAEHX4DSJ4dVD0kgZwFoZTuFLNEu37m/BAfzBVWA3ugoUZoAUC44T4mmBf3+oc2WstScfU0U4I0OrSgQQihZ6CTxbV1fmKsA7W4duGb8khNg2hStTSbeQlng91ysBiw5AgkgSRTghOUaHHEB3VzsCsQsmFsnYAAVWQGmShUD8X4AyHUFzsyUrh84drP5JPbJgjUjK8D8iuD6/WwAcYEa8NgR6NWBIhCbbQBVugA3IK9fXKCF1vtBgdctWC/pAtzAzfVzgTIXKAC53QJXHIEKkCMIEAyCbFLmgS/bAmWsbN1CjYQjcOKH7ghcsmsPuYA+aiohbxBlE5MB8j2BryswN+sAdmL1z4WOAMtMAMJdNM0IrMG62DuBxzXnOV0FRy/2C5hYzTAqYfdb+8wq7O/9U4nLd9/+KnbGKrODkzkTSDMymtetBOAsA/ZL0dHiDRuIMwk8bgYQN4DeOJd9tFj42RtsOSfQHWwt/N5XqmTzi4Wc8wNBXCCAKEGk+BiV+XWIk2ZyaIp780XO8p9ViBDfyDBZ1FFD9v+GyIgn6H/DX2rOXjWRKIrjJGaXzRcJ555iIQ8zsPsEsZkH0HJ6m7ETMiKDiIVNCqeJARuDiBJWi6ggdkIKSZEiT7CwL7Am63Lm486cc2Plrw2O5597/uecOzPX3J4vAMDhfi8AwKmmBMFe8UVTgvaKI80xjr2CeoG4CQ/UTrRQQEttKQDHifEU5O4mYIUmCmzgODa1sKV2oo1opKBpaOMT4LjbTUCASaq+X8U4T+qDBXCcm2TQ7hZoYIy33gg2jDo+Rqi11TuPZjl0AMYWWFS8gpJTwwize7ryMiphVScTiHPo0tgCA9hQkUvACB2IsMYwz2QCcQ4dGVvAATCR0NXFT8yTNnCMxolvcgvQCphI6GOIOSSYRWxQF3WCr8wgynSBBZAEMwE+ENZ1Pn/1AjCKlKPx5hMlk13ByWe6QGlhkQSTFHoA4nv+nY2CWwzT3XykYmCCi891AbsYkmBLTTwF4nf+HxaMMMzE0AQ5iQUYCVbRlpXRNRAvWwGvMRdgV9IJ6Aiu2AK8BL6R9TQCbuI5FIg6gdzDFbWFk6DSGGstcJP/4AcAdDDMUNQJDukMB4OjlEzCgpumSQCZ4OoGAB4SI9FCPFKfAcejysb+7zhPpVDXC4DXn9e/PuT3MG7jMnCciQUwJabk8DPrigRoucVEDlnSMpTbbZQuO+QVl5+nb0HLDKN0BYU0JxVQyArfE7VkyqE/oKWa3Bc8SuvoMZtBkvCbTDue4JZ70NDBGIEkh5g2wGZQgdq9VxZPEzPQMEWCacbmAgpG4fO9rJduYaJB27JdBVg2E75TNtsTVJdZCUQC+IGOdgPGXaxIfy4pIWNSkBk/CShCNrIqpA3Qo/DF1Guoq6WjGaYJsPl9PT9N91ptleSOxjc5T6Gher4tRst1FVMEsDbOiQ6S+e9XC/oqimtlhe8OimHccBKRBn9DMnralbH7sjPBQTIasp5bXRUmI3cGqTZaoZRA8UtwKTlINkWi0aorCR7EcckGQrZLXrIgnQPBfbl5vL/0Fc9dei9vCxXUqNylcizY1N8nc3TVYgW4QNCULVNAjZi9zXsueEXCRw1DVkIBIjRtZaqgHy4X/L3FI2CGdFMJBW38cgWNyLX0nPIHWjsZ39AWK/Ds+EzB16LI1R3Bo9acNH5iXJcpcDQtecLXUFZBjn3K3cFshn2JAke/x68xDuYVHHJPWdfIEvAKKmmj6XNGetaT10o4+YJ5UP8wRcLkq4gyjYI6+g3+/0+U7tgXVi6A6PkoY5juZbtJ2zkDCcOn9HsHxFnGT5QsO29VFFPrp8XvCe4pdcfDWPhBxpraBcejRwNaAT6ao28JbhO2WK7Koh1MtgtRawRtxZP5us0t7qiA7nQR1l/Wzd+1bSCK45QupZDlyP09+jP0B1igpZMXLT5PHuSpg6eiYkOGNKiDG0ppMJRAaZZAh6JgBTI5IYsdGkLyB0TyHf7Klzte5LvPHyD09N733ftxgg88kMAAHRjgZkHyQy9f0lnozQCBFKTzDgPKlvy2ZTwQdDwZ0IGGdd6ie2kBltOSEO9fluyh1FoCZyJ0MqY8ur+jBR8NpXRZLNhVsWKKyI8Bqf3S3x76r9b8e9mO3RVxZUAcLzEe88EA4xQPeRT8goblNGoVx9KAK8YGWH24EspWzMgbpCEnIYezaFY5oDLg6a5YGyASkfhKQlonQKchzD5oGYCUlbFiubN+EyFEz6ThPfvPV0f6nRhVXnymbbjQ6t/7WLJgwU5v/0GGYrA9eT1EJU2oWLsTc0IH1/dtT5dFXLMytwT00g2kDTcEZg2jsfxjvZNxTDnhp/alzpf3xcMC0+0W9AaWU7BnKSQw4Dqz34k5H7bob0J7MUfTC2wrish8DmPABRFcM8k8y8ZT1SW00nEUYHzdjlB9/+5tlp1uf4URJGDiPUQwPGE1Wc5rDvrYJFKHARBRJNqGD27ydD/xmslcjmZwCkACxor6simAA66YdBmDe6x89VYws3nOFWMEUcd6CmBf+a3hgL98ww0GdYQLXMBse5rzDfONCw5xwcCeSIebDcqUN7jFqJdQgQOI8/8cTFiNkBGEmbQthq6VAxBAeMoxPWhxh1X0uQJBlCKC6BiCA0AfIiDOgp2BBE45gAtGKoKoGIIDmqwT2itqOgdQrmXc4IKEiiBVkV7CAU1kGqK48O4BuCAlfgbFWXaEFIQ0JDVA4i5jaACMG3sx+nfWL+tH5IZHnL1mROHKyBC/N7igYgdre0MU5n1W8bjvP4bM50D3uXfz+0kyCuM4d63L2Jq8JBJOCJIwqFdAfqRggCagIxmmRrbFKMZEbW3RZqKTbpoXRk3Wqq27LlpbV12w1S1zKlddNOdNNu2mv6HnPefAeTm9r7NsPtfqOR+/P3iOm6clEsg8BWRjLCXASxKBY/AQzmq5+fyy3L9RnmDnZMuerACfbhxinp096szTGDMS7J1ir6to+XNkBdhrOaaRl6CFHcUizCyaR3iW5AUokXlanyU8+BtnYRbxrOJ5wsxqYxbr03QyHvi5V2QlWCs1TsZnKq5evfDw7t3zz+/du/T4xcLly7FdRPpGQoArarXaFIk69Xn/bU04xen4YGDI0p7tccTs8W6PdTx333xusF91c66zV/vAZ3C7OqYvnmlraztz5uL0QIfL5Tas+3xabW/n8NzkTVV//+A58/3c+IzV0x1P2o2Onmy7ZSjQGuQTu1IS/EIApq7b4ZQuGLDccsTinnc5BPDw7nkgIABVJcxrhh69aH6qC2pTMe206bv8mnCGS/DB1oClfUoASALAzAoBmBwGAt91g7tjoA5wcbqjw+V2G677Hmh7ezsFABUCWF4RAUxhAB2HLvFV6hK1vADAA0BPLPnRuiIAEAkuXXq8sHB5VEqAtwjeO6ZWjxXTUScGSCV0ADBkAQCjPRkXAJYJwBwCIBIQgAExwDABOGdezo1bPZ7upD0GBFMggQCQKMje4mner8kk+Nah9p4v9o/WGQJAPfRNVoBacUyQIC3hIWMsKfbQ5CE9NCj2UKzhIZ5PcLOy1zB19YU5XXDIkkUeAgAcgvMEYIt+DDICFCImJgSCh5pCsFIPwbAAsA4A1EMDgocMWIJOkYdyKxIh4EJUAmYZ2AQAUQgU12gIKEBZSoB0xEQ8ZCMeoiEwkhAsMyFwEQDWQxTAjEMgeMjhgBBYcAhSUhK8RADgoRR4CKz7JdltBYBmD1EARgB1NF0UhaBPI4SApyEACd6BhxBAs4cogAsDaIUQAAEAUA81QhAQQsBVqAQMgB5CwKEQGO1xjwBwlQFgF9FZJIATAEzqgnSRGv93kXIZCQm+IgAbCgHxEAAwHtolmxT7EegFgEgdwJbvun2oInVJFql8CGiRpjbJQsB+mkZtjSJ1QJFigAt1AChS9FVlVoCq3uZMR4psCHSiEMTlQvBPRZrKlJQwP1gHLaWd4iLtBgAmBDVE/p15ShTyNicJgUyR0hAMqlQHhGAdACSLFAFkGyHI7NO/TNEoKrcjUT0p0vaswx5XvGJDMIG36TKRDd+/6s/rqYeaAFqlt4lhDCD2EAYw+KiH+g8o0lS4pBTncUOJ15li1CYuUgBgi3Rbiebz2/Kb8o95jLMLAOAhAGjyEPcfixQAYgBAizRTwRf5sAEX2figxAIUTGkbLdJYEgEw28SSkp1Kn79Ljz3EbhN88zYxnjOLivS6hIdoCCZpCICgHgLqofBPJTtPvADgREVKQqB4BR5itolRlmBfAwDgIVKkciE4WpGy2wQAaKrMRRZD3oI6Ah6i2wQGIB5qrNRN6KVCRqPx4xAw20SGbhNMkUIIOrXgIfffFykNgaZva15JZ22nEnrvRSEgK/UUAmCLFACM6QZ7aQsaLSxIcIQibTuoSM20SNE2QYqUE471R2tr9euvboYAAHlItE1QAPGrxjgyMuHd3lnc3oqAG+8QADYEIAEOAVukAKA69DYhX6To2Lx+s1Zdqu7se72hUKUCHhqLRHEIghACBwAwRYo8NDIykh0dHQ1MTPA8AqAeOrZnGVf/veH69nrfAwEJAX2W/Qb3Qc+4WuhYIQAAAABJRU5ErkJggg=="

/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,AAABAAEAIx8AAAEACAB8CQAAFgAAACgAAAAjAAAAPgAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCQkIAYxbLAFIW2wBVFuIAVx3PAEtLSwBDGfkATU1NAEkm7wBqK9gAWFhYAFlZWQBcXFwAYmJiAGZbegBkZGQAZWVlAG5ubgBvb28AcXFxAHFxcgBycnIAc3NzAHR0dAB0fF0AdXV1AHh3eAB4eHgAnl3JAHl5eQB6enoAe3t7AHx8fAB9fX0Afn5+AH9/fwCAgIAAg4ODAISEhAC0jFsAh4eHAImJiQCKiooAi4uLADB0+ACMjIwAjY2NAI6OjgCRkZEAwq8cAJ2fXwCTk5MAlJSUAJWVlQCWlpYAsK4/ADmF9gDQuxIAmpqaAJubmwCcnJwA1MESAJ6engC7jNQAn5+fALWK4QCgoKAA2MQYAKGhoQCioaEA2sQZANPGHAC3kNwAo6OjAKSkpAClpaUAz8odAKampgB4sJgAqKeoAKmpqQCrq6sAO6PtAJfDaACtra0Arq6uAK+vrwCwsLAAsbGxALKysgC0tLQAtrS3AKXRXgC2trYAt7e3AMTfMAC4uLgAregfALPnIgCv6R4AtOkiAM6v4AC8vLwArOkrAOfVXQC+vr0ArekzAL6+vgCs6TQAr+kzALLpNACm6T0AwMDAALDpPQC+6ToAwcHBAMHCwADCwsIAtOpDAJnqUwB7154AxcXFAMbGxgB+2p8Al776AMjIyABs2LQAwO1gAMzMzADNzc0Azs7OAMLuaABv37kAz8/PANPT0wDU1NQA0fF0AFne4ABX5NIA1tbWAGHlzgBX5doA2dnZANnxiwDa2toA29vbAMLW+ADe2uIAY+3NAOTW7wDb85EA3t7eAN3zmADs58AASOnyAEfq8QDg4OAA8Oq5AOHh4QDi4uIA6d3yAOPj4wDe9asAR+z9AOPk4wDm5eMA4/eoAFDt/ADl5eUATO3/AE3u/ABV7vsAS+7/AObm5gBU7v8AZvD7AOnp6QDq6uoA6fbCAL/01wDn98EAePH8AOvr6wDs7OwAffT4AOr4yADt7ukA7/fLAO7u7gDv7+8A8PDwAPj13gDx8fEA9O/5APLy8gCr9v4A8vneALz4/ADz++AA9fX1APb29gD39vYAxfn9APf29wDX+foA9/f3APj76wD4+PgA1fr+AN76+wD6++8A+fn5AOH7/gD6+voA7Pz9AP399QD7/fYA/P32AOz9/QD8/PwA/fz9APz9+gD9/P4A//36APn9/QD//fsA//38APP+/QD9/f0A/f79AP/+/QD+/v4A/P7/AP7+/wD//v8A+//+AP///QD///4A/f//AP7//wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvfDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IAAvvDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDwvbCwtvDw8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8M1XGR0bF0nA8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDwzSUiIyIuRDtA8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDwiz42LyomISs7kPDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDwXSMlJSQjISEeZvDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDwcx8jJjU+SU9L3PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDwdRogHyAgIiMhafDw8PDw8PDw8PDw8IEAvqHb27fwh63w8NuRtrq3qL1ZTaSTW1jC8PCAWXrw8Le88IEAwlSHSg/wEDbw8CR9QvDwgbET5McUy9MLyElKzVpX8F1r8IEAwJc0QHVVOpwFKB+9El3HgbEV8J558PDPUAfw8E0P8FZe8IEAvvAAhc0KhvARKdOfPNUNjrEV8J9w8PC8WAXw8OTk8Awd8IEAvvAW8PAz8PDJGLKlGVEvjrYg8NU2REUOknQtSjCRYJd5hoIAvvDn8PDn5/DhmKbw8PDw8PDn8PDw5aBBfODn5+fw5PDn8IEAvvDw8PDw8PDfZI/w8PDw8PDw8PDw8GUBLNHw8PDw8PDw8IEAvvDw8PDw8PDOY5bw8PDw8PDw8PDw8D8DOMzw8PDw8PDw8IEAvvDw8PDw8PDXYYjw8PDw8PDw8PDw3hwGUtrw8PDw8PDw8IEAvvDw8PDw8PDibnLw8PDw8PDw8PDtwQkIiejw8PDw8PDw8IEAvvDw8PDw8PDmg2K78PDw8PDw8PDwSAJOuO3w8PDw8PDw8IEAvvDw8PDw8PDwom1fv+Xw8PDw8PCVBDKaxenw8PDw8PDw8IEAvvDw8PDw8PDw2XZnTGid2PDw3ZknN4qv6/Dw8PDw8PDw8IEAvvDw8PDw8PDw6sZqb1xHPUNGOTFTm6fW8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PC5bHeMhHt4fo2jq9Dw7/Dw8PDw8PDw8IEAvvDw8PDw8PDw8PDw0n9xlKqsqa614+3w8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDEtLPDytTw8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDw7O/s7+7w8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IEAvvDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMjBweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtaG91cmdsYXNzIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PGc+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3MjgyIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTU4LjQsNTEuN2MtMC45LTAuOS0xLjQtMi0xLjQtMi4zczAuNS0wLjQsMS40LTEuNCBDNzAuOCw0My44LDc5LjgsMzAuNSw4MCwxNS41SDcwSDMwSDIwYzAuMiwxNSw5LjIsMjguMSwyMS42LDMyLjNjMC45LDAuOSwxLjQsMS4yLDEuNCwxLjVzLTAuNSwxLjYtMS40LDIuNSBDMjkuMiw1Ni4xLDIwLjIsNjkuNSwyMCw4NS41aDEwaDQwaDEwQzc5LjgsNjkuNSw3MC44LDU1LjksNTguNCw1MS43eiIgY2xhc3M9ImdsYXNzIj48L3BhdGg+PGNsaXBQYXRoIGlkPSJ1aWwtaG91cmdsYXNzLWNsaXAxIj48cmVjdCB4PSIxNSIgeT0iMjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyNSIgY2xhc3M9ImNsaXAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIgZnJvbT0iMjUiIHRvPSIwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmxhdWVzPSIyNTswOzAiIGtleVRpbWVzPSIwOzAuNTsxIj48L2FuaW1hdGU+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieSIgZnJvbT0iMjAiIHRvPSI0NSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZsYXVlcz0iMjA7NDU7NDUiIGtleVRpbWVzPSIwOzAuNTsxIj48L2FuaW1hdGU+PC9yZWN0PjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJ1aWwtaG91cmdsYXNzLWNsaXAyIj48cmVjdCB4PSIxNSIgeT0iNTUiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyNSIgY2xhc3M9ImNsaXAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIgZnJvbT0iMCIgdG89IjI1IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmxhdWVzPSIwOzI1OzI1IiBrZXlUaW1lcz0iMDswLjU7MSI+PC9hbmltYXRlPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIGZyb209IjgwIiB0bz0iNTUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2bGF1ZXM9IjgwOzU1OzU1IiBrZXlUaW1lcz0iMDswLjU7MSI+PC9hbmltYXRlPjwvcmVjdD48L2NsaXBQYXRoPjxwYXRoIGQ9Ik0yOSwyM2MzLjEsMTEuNCwxMS4zLDE5LjUsMjEsMTkuNVM2Ny45LDM0LjQsNzEsMjNIMjl6IiBjbGlwLXBhdGg9InVybCgjdWlsLWhvdXJnbGFzcy1jbGlwMSkiIGZpbGw9IiNmZmFiMDAiIGNsYXNzPSJzYW5kIj48L3BhdGg+PHBhdGggZD0iTTcxLjYsNzhjLTMtMTEuNi0xMS41LTIwLTIxLjUtMjBzLTE4LjUsOC40LTIxLjUsMjBINzEuNnoiIGNsaXAtcGF0aD0idXJsKCN1aWwtaG91cmdsYXNzLWNsaXAyKSIgZmlsbD0iI2ZmYWIwMCIgY2xhc3M9InNhbmQiPjwvcGF0aD48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjE4MCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMCA1MCA1MDswIDUwIDUwOzE4MCA1MCA1MCIga2V5VGltZXM9IjA7MC43OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+"

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAC01BMVEUAAAAjGBYjGBYjGBYjGBYjGBYjGBYWDAsjGBYiFxUjGBYjGBYjGBYjGBYjGBYjGBYjGBYjGBb/78rThTfoysVIVlQWDAuRhHAsKCaopqqGgYauq66LfmualpuloqXIx8nEv7/x8vO2tbe6ubvo6emRjZLZ2dqhnKCem59aTkN7Tyfh4eLUz82qpqm/vsCrqay7t7jc3N2XlJiXk5iMiI7q6+vMx8bBwMK9vL/n5+jT09TEw8WbmJyOipB2aVqnpKfl5ebj4+SzrrCTkJV1SSHv7/DGxcff3+DMy83Ozc/KycsxJSHR0dK3trmVkpa1s7axsLOvrbCzsLSQjJGtnof////w8fG8ur25uLqjoaXIuZ3V1NawrrGSjpQ/My0uHxjY19jW1tfQz9Gin6P/mIo2NzXu7u/b29zW0c/JxcTBwsShnqLs7e3x4r+zsrWYlZk/R0UvIiDe3t/NyMf86MHcv7rk1LRxamrIfjXt7u7Z1NHSzczRzMq1tLJ8goOnai/T0tPIw8LBvLzPtK/Wx6iZoaDvx5O6rJKCfX1zeXqGcW5kbW1URULWjEDPysmws7T3266SmJiJj5BiXF1tW1gyKSjz9PTKxsXGwcF4fn6fkXt0bW1uaGhoW07Zkkm9dzOfpKSGiouBh4d2cHFrZWZlX2BSXl1OW1pHOThlQSIlHBrGysqXnJy3npmOk5TswYqCfYJ9eHh5dHRuc3ThpmWDdmVpYmNfWFpMQ0M6Li0qISCpq6z01aXpuoHkrW5UTE5MQDhbOiJPMx764riGhIiBgYXdoF3bmVNDTkw/NjWycTGcYy2RXCuGVSk7Jh1ELBzDqaTxzpyMh4rms3dpcXFaVFVZUFG7vr+3srKqko6eh4NweHhdZ2Z5ZmNZZGM6Pz0xMC5MMCxwSCQdExF8foHghXnxkIPIeG20bGKRWFB/XDtoQDqOkJKSfHifYFeDYkJ2SEJFJwvLAAAAEXRSTlMAEO+An2BAgCDfv8+vUDCPcE86Ir8AAAxtSURBVHja7NQxDoAwDENR00IFFQL+/S/LgECsiMWD3wkix4kiIiIiIuK/SWZWmSny0pCXyiYrHbNWF0Y5maEMMtKAKiMVs4h2AKff2AGcDq1jNtHC5ZAJbqtJs3kUj7XxshzfU5rbSYz5u6YRhnGc+yXx/JV3eCAmpDYxbQNNQ5JCSYQuLdlMKO0USKeSJV1K997mcNxweFCKmzrcgREXt7hGyB8gZFCMg2P/iN7ZMxfv9PHe10I/i4MgH9/7Ps/7PBeJSIIgSPZn8p8JecQT4U0EUeaJDzkuJJYWE/ITFbj5MsvxKJkNH19mP6wYCSKi/zGR8mQQKTHBsfYhGqWk6HtKuBODkEimM+3BcVKM0BEVqAMlzPytiD84Ak8YECmVImQmqQmdiaNcwagtpMSRIMHmzQnEo3YBOPfXiyjJiFHMNZJ44nF9C5aqlNRmp6mWlKrRKBbKhUK92DAqVaXUbWoWwACNJI6EBmBUWRPOtVso7e29e/Xi9dv32+mPh5nc/tHG8dbL5/nM7ubak/Vnq6sqwAoWSRwOjWoiEPt7UN48xYUOqnCLBGAeIlq3SV+l18D85Qq125VGvdzSs5dXV5d3J3rrbCyU1uAnCcCHPKQl9Ij8X65AZccV6oOfB6EiXExtbkytCGcA9Z3JEwJwT+iRUAu+kWnIHMN9hnMBP3YeMnRqZ6gFXTdDj4SynpA/AhS5pha6gX7lvAHGWEjDhFz4UPdbkmcT6oCD/lcoO1eIYp9YijE9su0vRg8AKleOkI4I0RtxKSah9FcLFNupYwuVQQ0I4UY4EZlB6MCCam7/0rizhRQwECEKI08pTin0SQVQnE59ZJd9EaAVVohExXBNkpPEaGihimaBWTzM6MZRDhyquz4hFNlTwkmEFdLAVM7su0wz0xvObf8hExDCEblwb0PCCn1u26EGyGTB/D6qMrWMCDF2SU6myNDNcN0RyhVBdYTq0D8PCuFIlO0IF9KgPRLaVzaPt/STfAdKtEIkRdewcSETTm0hdx7qQj4LVp1WiIgL+pABlF2hIfS2PSET8pkSNJHbHjViv2K9eci0ho5QeTSgFcAW0pu/kXmI2gjNT3BiPOj17SrTYEzVHmGRiRFBoq13bKZeM9ytQ8dmahw+iSyMCFRbxzWhIIa8a8Rh38twlhnmasrNlQ6eY6kwxt2erdJE8p/5Q7z5+6YNBXFcpGmUpOmPuxv8NxipUv8CS509lnRgCDMDG0JsLAgmJM9UkKkDEwuROoQoAQmkJARFkfoHMHbpv9AajI+H37tnT/msSNbH7753Zyw43lsZ8Noc7ifo1TneS9Cr8zHVCxDfycafvJG/zhrP2GiplkYPMzElgRsMqUkLxB7pLmZiSBItDLkAA2cs9AlMNDETM9rhPj+YDBaX+0YemMjZK+YjU3GcGlogpjGBDRNW6gSIWLDXLAfWCEV35tXSCj1CTOmRtsyrUogOucfSRKgHIW5R8AkUH+aBtow5REKfHaaKUPMCbErXFHEZ1/xzufwTSnXaMpVC9MEeIYWCTalKEQOIKJ//5zfkacssTYisEWKlW1mJNtQh4td5yBd4opjAHqKjLFOo6EpK/ajD9oWAO+1GCNFpiikkKGk+HdGaBWz5Ggr9AGhQTFUIkWXTXyCjUXKNkzoP8RGVz79/A0WohW3Lxj8FA142Id5lD6CgCo2wAiaOZKE26ii40fnpCjrnrlcgpoPYk9vsQG56Q+u3pe26BJU72qHKja9/0S9WLOsk6vCgVivGXGNFFkpbsYrjR+NJWB9jWnMHu6xIFcKeXcjeY4VQhxesfET1JTADUhgitkWhE9DioIrLOhLPtDFawZY8qTybF+wboctKs2GAqG57/8qmw8ORLldPALBc8ZDmkmFXaPvEYOT76oyG050IdSuYwHEZZ1O0PskE4cV84ZnxPSThJ4Y5O2lQF2UBQ4IOiSCajuhE2PYLYkbPaMTX9GWLJEa45lb4anYGCSak0G+hgS4wt4gpjKJLNfUR4prpC2ZX8tingimM+nwr2oppG790T0nmgWzkso+UIy6/Z35r9VbyYV6qgpG3NyBnwtdXvdFJzvBriyf2SXdIV9pnkaHukGbqzNj7yQKTe8fHk6+TkY42SUUA8CvJLfKSPGNUabqmd8M52LBcqDrWS8ZD7gqTTMd9Jc/Xmpvx/NhH4QCWjUaD7NwkLunzVEwSjGedTblfWEelVvTiIc2c8ujJZNT2lG2cFc5S4r8d8I9181dNGIrCOBQKhU6XXMgz6EP4Aq6ZHOJyV4eAEbcOQgWx0MGpQ7vq4AMUOujaWGuXgoJDBv8hLX2EJjcxH1evN7nB3y6cfPeenO+cY6qGfkShQwJ26SlfQIUgxSRjakMzImSJT/YOIbhJuoySlgxcw2emcy++SPw12a18wskVEMqYsOmYGJl5jLOWn9gfY2THWH6FKtLdApxdBp7rcUSmaZMNY/4mDKhiItN0sAjqKrgV0+zuozh5V3kIGMlfFrJC25RGo22a7YZYQmT/+0KaNQfVqIicF+0Njzdds4C9vNHNMq6wsZ8Sb/VBEa9KDny+pLmImk2m29V2nG1AioqKC9eQ76ZvEpfoqZ0RhnO42QFlSy8eOATrqLDCFI2j8wr1cX5mdLiEdzzloQ73PyKF9H4Erqw7d915N/G8KBwnK9dkHNd3acjMQRsskUgL1OEF5XQOzWj5+ArByHrx5MJxacQQgwKFRHoJvqQx31FFbp/9hOOK97xFPENAKKxxCYkwWnZpTCuSqITVlCTx+Q1yaAB0VSRaZlBFuzShF0pUw4lJqofHBergN3OiqHFf+QOCRBZOTJZnXCBXVKipeF3rB9SnoCdbJooWZMAFAq9E5ZM0rjXagZYokbiXkmyCBYEWmO7IbYgePKP+Wy2bnzSiKIqza7pk0wQoUBBlEhVEoCCMAaWK2jqCJHwESAQSbcFI1Bhi60JZmS66GdEmsBtMmiZNkAWgG9vEjbuGRGO7dde/ovfNJzOOjSa9O8Kb+37cc85cDlBjITPSxfqkt57eogFJHvjx6t768/yxpRSP6Bv6fNuLoHgmKiWKpfj87bP/WbcyIxIdUFSr1VKpVKvV6vVW64vM8c451PX11dVVu90myePj41arXq/VSqVqlaKazebJycm+UCeomlAURdG9oTNqDc+RJNluV+6O6Cs0h9bQuF4rKYaGdj5tvny39/lFuTwic/rS4RjvD9i1OFZI+FTWcGjNGI9ZXN5p/czsG09mYGVjcMJvci5HDw2GqeVVp2nMPzEY3LANLGU8u9nZGf20N+9yx+LzC4spjVXlo9C7WvKbG7hZp9KEjH2WvF7xdujDzubLIwB6UcZkBkSN00BFFkiTWlyY73O78tP6udmsJ7O0YgsioO2owWCILm87nSb/BBDZVgYySQQ0B0QuS6wPgEJhzbBPV4HYSFxxrsUSKmtqIe7OTyMgGNHRuz0AKsGXPyUD6h93OCJpoqjFzDkdAIVpIBiRfm4mu5tcGrAFB/1jztUpw6EhOrXNjQiAlpKeNxyQuy9uXAMgq0pH3n2xXGqxnM8aXpt3uzggpBkDJHltNVkg0MyMRqQJhxZYzeYYzWyg2ZhpdRkBiTUDoCwLBJoZac2GffgZGpH4liJeYDXzAhAQSYCEt9ZpIB2RmCiFTORmTJSlTRTkTRQVAXGaeRnNWCDpiNCfLjtuTrAmUrzlNAMTIaAtEXqdSEfARJEAQZtIx5vIkqc18zCaiU0ERFITgWbzjGY+nWREkOxTgtYstRZ3uxTve0zUZdiFAVWKRJrVbJQ3UQiAOM12kxkENPFgE8GIEqT0mk6giBVoE8UQkGCim3VgZ129BeTKWtFOaxZ5SPAN8sGngVy8iVQ+nfZMek1glDcRAhKCjzRb/02Do4MVXGsnAEgcfDARCr6XD/6GOPgmEw0kH3xkohyJrvnFX3Pq6LfjXPABqEezm0slOnDwkVl6+7h2lEiLgy+YSBL87QcHP1E8Za8BHCjK0U9wwQegXs3KQCRU1Yxri0SANxFuziV8wzLBD8oGf+Vu8EMp2kQFdUUpVFvdjQSY4C8aYwCENOO3x+Q5d67SzZkxnDaR3PZwP2R7sJqh7WHhtgfSzEx0+GtKDXV3PD3KbQ8A6g1+OTaCk9/hWIdCz2FgovuDz5goKbc9/P/cHqhx4xzEeN1pqRsN9QWnGZgIgHqDDwt2xHgzOQk/hAWSBF+6PWYfvz2GdYkCBu5EceleAFDjwhEJcCb6C2MCX3eytvTEAAAAAElFTkSuQmCC"

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCACgAKADAREAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAAUGBwgBAwQCCf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAb/AAAAAB5AyYMmQAAAAAAAAGKQQRaRQOkseWNO06AAAAAAAKelIRFOI8nkcZORdcl4yAAAAADNPkcNI5xyk/iEQqN0sSX6JaAAAAACoRQ8jw3llSxZ0EflXhsF+y5wAAAAAfPMqiMk7i0BO5sEIYJGZ9CyYwAAAAAo4JxT4fBNw1BTHMaSRS4QAAAAABUQ5yv5Lw0SHRVEIaJcYugKoAAAB5PRXQY5X4sYd5Doki0IRO5IBNoAAABEwsm4q6exwiqcQ1TQLBZEfAAAAAEeDLJ2KyjUNh7GgYGuXBJWAAAAACPSNCcSsAhm05TiG4JJ9DBWAAAAACPCGzlEcRCPB7GBqk3FrgAAAAA5iHiPThOY6iFBpDnFgv0LAAAAAGoiwYQhiYN0WxLK5EUF5i7oAAABX4i0i4lAXSLCQBGOcXyOiuhIRbItIbAAAPlYaTUWhHaVcJfI9IQJ0GUNo7jnHkWAJ1H8AHyoOU1loR8iCM8hYbpIRDAC8KJxG83kkF3h5nyoOckkng8CeQ2RsbTeYNBkyaTnMm0kc+iR8qDBc08DaIuIbOw6yTiOzAGoDlOcybS+R/8QALBAAAQQCAAUEAgEFAQAAAAAABAECAwUABgcREhMwEBQgMRUhIyIlMjZAQf/aAAgBAQABBQLwqvLEVFTOf/BabJTU6H8Ta6RhHE61WU3bLUqYHc7UNNW3YCeKE0SfGyMf5Nw3h8ZJBRBEsksjUWTraPDNIizPjcKZC1azeiw49VQjs+K+toqWsuDnqS2V2d5edcBKdOPrjViMpP47CkICVncjbrezGCs1WyLOD8PE8rk42JY288i/z1zkmQMajXQsXDwYnONrZQ5myy93hNK5fFxBY8vZTyHS+g7HPko68uJI+bUc5UwlepTIGTK2jmW907XH6+L4dvC91u9jRoULID7MmtaKOv5G1GAbu8MjotvrJ8YWOY2drOuo111kd4rr/cHCivdtLGPuA68ZBLTX3dIlDOgjqlCp0Ij1o0g8g92i7JX64AGcHYQfNVRPTdxXCLAUOaMUiT20MfTGq/qRhVXGw5ytlqWD1Gua8MZa7Nw+12MHQdbm1mi+e1O6ItdOeWJsoBFnRx1DQqn8UHzjdn3kqouFzwjZ3YSB9Toy/fRVZjyvBs0KTVutu7Fjl1IkhEM3cGbj5VY38lykeXDPkfNCdQg7dX4dmlSKtrlfDb2JKCiEv7kn6hXupk6JM32Ab0KBlZkPfZOCMgYfh2dvVUyST+1ks7iYX7Wxa90IthIj2TNcj+a5OkzHajUOsCvDLKyCOztHGxrIxioncdD20kK6HpaBf0w2MkKpZJMlYIZeFgBRV4nge9kbbOyFNR8LH5IBExZ51SKYhI7AV/U0+Frozx3xuOJXODPKIX5l7+CxhXEC4kwm6sDlou6oNq+aKCn2ZxdhbN/hhnryAwbAWeJIu/l8OxsUdZzmiKLr5dZ4g+5Vrmvb8XKvU52c81tP7XYQNmHt6j25SJOS7ZJq+jahZpDhdo9vCRcpbPc5znI1Eb08srLu1rVruJMmV2zUtmvq77d6VHVBW9XXHKIydtcJJXpckIeWxOl1/cNu8LrmzLEYWMkRcRSZ9Zz54kmVu23lXlHcwXYOL6UOuSW2TMa1UkyQhGpb3CvXETnnTnTiszpRETHN+GuXUtKfHIyaPnkcck0okbAA1TqR8cuXh/smNXExn3Ua9Ncj+nLP/cVOXo76Yv70Sy95Uf/EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQMBAT8BSH//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/AUh//8QAQhAAAgEDAgEHCAcGBQUAAAAAAQIDAAQREiExBRMiMkFRYRAUMFJxgZHBI0JicqGx0SAkQ4KS4QYzNEBEVKKy0vD/2gAIAQEABj8C9Dk7AcTWRuDwP+yPnt6iOP4K9J/gKkjtLKWSPteQhM8OypebCCE7Iunh761z3rSY4RDq/AV1ugftt+TZrza+uzHKGbRlcDBOwz4UOZuY5cjUNLA7V0WB/wDsekl5K5Mfm+ZyLi44b/pTkyDXneQ7sa0F9I7RmmGcvnYCi4znvrTcIWUdWsr0T7aMKCOWSVl1XL7uQOAJ40GuJNcjx85J96Rs+juL2TrDoQJ60jcBTyM+p5CW1bitanrVxB9tBQOiOu2PwrOqjDJEMdktMydNB8QKDofaKW3HKbcmp6+XYfDeib2dbo68QTrjJXGeljb0XJ1qX0hVMqqeBZjpFNLJuzdFE7M9/kFcONADhXAGm1LkMNqlRRmPVlfCsRuy9hSuVIXy5TQdZ7Nz+fopYpmLxQqmmM9i6Qdq5vm+aiTqLjHkVUGWPAClZ0IHjQr20u/DjWSMHOc4qK1tgGkvkBhjPbzn96ufONPnV64eXTvgDgM+i6QzBDZpPJH2Ow6IDUIr3mpTcK3NDSE5p8ZXTini5QgcqvUEfzoXNnGVkHY6/I1BynccmB7Cc6IrpWxvvsRk44VIIuT53EezMBqH4ViaXzRx64NB4LhZOO44YpsMPo8Z3/WrXluLZLFIEiIPWdZdT/Aej5Q1f9LCY/cd/lVnPI2uZ33J4g77ew0kMC76F5w91RRGMNheNM9qcA9ZKt5UuZIonyzxr2jV+eKcQjVF2JNg1cQSwmZTEGXR0uaJ7D4GmMStCvXZixzv2nAqW15XuWzcTazMkiTpHtjpIh5xf6aW5sbqK8t36s0LB1+I9BuceSH/ABBDDznm+mK8x2xE4P50sscqtGelDL3Y7vZRznXI4z44paKEZ2owRWzXNmCSkZ2dM74VuDDuzijHybyVdPevtrlQBU8dWcVexS4muLpGa9n9ZiPyHZVtA6aY5CvP6Prgb71e8pWq3FlcwKZLeOJ9StL9RQr6us2BtQtbvR59dTNc3YTcKXwAmfAD0Fk2eMpT4inimOqa0bQSe1T1a5RsbUgXE0f0ergSpDY9+K5Ns5860jZ5fvOxY1a3gjxNoBY95G3yrHk0DjTNcTrbQwrqlkbhXOQ3CXELrlWXcGjLZXptFtQcK8YmQdgGCQR8aiueU+UvPlt+lbWiQiGJX9c7uWI7N/Q5PGKVGB/D51NCT/qYc796H+/kyO750qfWhLIR78j8/Lsc+NZkRW+8M0y24WKJ21sR3+yuePWuHJJ9nosHhLKifP5VydMT9FLqj/qGBU0vbjCe0130T2Md62oK/VoaFWEnu6INYR9vH9ajg5r6SbGl856223jVvar/AAUCn29vopPsyIfxqB7YfvUB1Qj7Q3H41AvLMkTT5JxCMKPCt6PN/GjBN0XXqN31ufdWnNdCbNRcpXA/drDaL7cg/T0TyyHSiDLGjAI9EJIO/WOK0g9I9lSRP2/5VESHJT6lHm1Hc1a12I+NYc7jtoEfnXMWMRcAgTTfUQH1jUFnD1IVxnvPaff6Eu7BEXdnbYCo4rW4EsY3Z0O2eGKKc7WpXfUN85zSPjDxt0qQscc6pGPyqXV63Gm4b0TjauaQnfjiuV4HP0s7xzIp46VGkn8R6A+Y2stxJ9vCr+BJo8ykFqO5RqPxaiZ7ua4J/hu+E/pqJmzISzaj76aQQHKDUHjIPD24qO2uEEQkVhHv1mH9qJgGWIPRqKUSAzkaj35A4U8atomQn6JvrD1hW/Cjgb088n8i1HNYXL20lumI5I9vbSWnLuiKQ7R367Kfvjs9tBkYOrbqw3B/aPtreuNWp+s2r/yrmzuD1/ZUF3AuE1l8Dsxg1byQsujAJPga55Yzzt4xRI4+PiaV4Y1s0G6SSZLfhikFxYtLKEGqRTp1/aCkdtMRIoA4242Ye0HegF2Re2j4isjsrPJ99JBjdrfrRt/IdqVOU7AOe2a2OP8Asf8A9qCW96qTH/jTfRv8G4+79jPlsFYYJjzj7xJrFBW4NkCpOcbKjqDuotjMcPQiP5mkbAOluB4Va/uxiFvrOpn1HL46K7DCjGwoSoxinXqyitF5amcD/kQ/MV9CGGOvrGMeHlzWluHZQjhu+fgHCCfpj3dopLqLoyDo3MHqP5D7T5DczPzFihxqHWcjiF/Wl0jCp0VHgKNbNv8AVFNa27bDaST5D0eainUkwv0bqL1kpJY21RyKGRu8Gm8DUcMQ1SzMERfE1DZR9W3TTnvPafeaasK/RNczG+biX63qjtP7F3NFdJCbdtCIVLamKlukR1Rtx9APGs91ebO2ZbBtH8jbrX//xAAnEAEAAgIBBAIDAAMBAQAAAAABABEhMUFRYXGRMIGhscEQ0fAg4f/aAAgBAQABPyH4QCgC00QElCw5P8Uq7x1giCZHT8+m8183Ti+5owI4F8F4q+YEXRQFWuEFghmU77mZUCoUCFXtEOfXaCVeI9sB/wAPE27+zabaHvH0dLsHo29J8jj1sCTYg4adt+IeDlzxzQ6hC3qpk/uZvbE31vrDI21y9w1vwv8A3Cho5tTVfqdachBiWi99sRFnkOljVKVj3fxvmI/SH9nsMbdUgszmyGEdcf3Gx5u5+J0OfUK6IVbydLIt8tohKikb1GxqHQ/L58xz4S7g8WUdjEeLGcDaO7n7z8VcL8Kye40NeZaITiBXa+o7AtXN/vuCqwOzNDT+5hLYOl2QcH6AZ/3OM6jq6doAVlwtZrCEIqAF3ATPh6+LDXYJV+TWFljmyxNEr7ipG8qKcVdPohoN4s4qXGbNEIDDIbFPqYYhBKnGpUcMurKwuMCLaZQ6FrQvK/FQIJA1kmOHHpIiYQDzyAtMUy6B6ycjnjZ4llYBWnp/TGpK4y3BZU22ETuOHFYu9IIORVC8YZj0zEyD219TJULA7bzyj/b6Sse3xnSDec7D4YuNaNyig/YQQmDxXgC4Lpy95YC/Jk8xE0qGl2ETRzNQ0z3phqNW2XlUoUMHOSDU7blMM1iDuAwYOU2VatdZm7cMjtY57fBSUWaLaz/hzaPJoWetPaXatUYSzZ0ophVRdN5ivqiHRtQJtxbVXqKIASm1VW64XGrYuWLG7l2qpZUqC1ig/wCW9szwjKGHTsa4jdCjttAFdAM3BaCu0rQLrDWLusfAxaBo42j+IgXas5CX2fUNlKvIJ9EUJF4pf7cl+LcFoFVIfXw9IfQJUp4TKAw0FtcRduC6id4HKAqLB8DFTiXMDwKIdVcqm6vPw56Ua4tv+IZRTFXbfhRxmE8Bdx3TKixyCrL9Qk9xG3T+KiWzxqmZcPzDSK8MVE5Z43w4I9HnLtMP3fxUltZ7ZCGtw9yy+6ROO8uuA/3FHNqpi65nII13XECptPROjFziZ4zWsTGdbrl9P9TM+jEDKhTq6zXo860y+34u/A/x/sIabhpKbU6ULllR6m2gXVg5Fl/6o8LNU/zOsQjQ6eZvz1Xebil8RMIL0zRBLTqj6vfmvjq7Az6xvYsvgma3aGKvdmzquIOaxXPdir9WIKHEC2W2dDO/U8WuspAwZsU+oXoyB6poCuNvELmjdbcvdZ+ED+2ADqrEak35jk7RAlYWg015lMDQ8WczEkwuw/6hILb37X7hpvp7GpU1kbjPW7c14dqrHSOme4Ij6T7PgrgLuu9p6joqtCPPov6mbFgsHuGvRHcpeqrdUHBASVj4RyW+cRcwAWKDk42jZ46nNCyt9JsSQsbJfos7rNvJ+pfL3vRBXQoxKdYuv6QRRmrYpDwjyMHGnBv9P12OoQ9hWYDqJ/62vIqZa83rN8Rl+Fd9rER5CU620y2JO+Hg7TKUAZ61fUCVpAKxZClV/Ys+rIdchQRHprJVdkeUYR+79G/hAZsW9UAUuw9y/EYtSVYfKy+lSpgcXPzZUHgLk8JR7H/w7XUt+ZlK02TOoHjE/DC49V0qUTXdvYlwhW5c4F8ReAmBfNh5ZgAg1Wq4TpM6onS1uh3XOZlJ61u+/M4cZpVO7UOIzuy0ayiWRt3qmdRnmMhkGVyPaEp0KGM4T+BlX+8LQ2eHY9P8ORq4BZq/wYAOVCQjgeCo9EcKWjjPE4gcdxxcTC3m/KQmJ2T9zTMRLONwYxV7nRMVwxF0kGtsGYtdi5hnP2bIQ4p9DsfUbuWVuUP4Ll6Ie9kp8v3izNGiMumnJ/ZTUqh9H+B/8nd8sS8xV+E5gjDiYMdL4ufuY54jhKCKreo/ccM7RUHVFPQnfoTf8jJ9T//aAAwDAQACAAMAAAAQAAAAEkgAAAAAAAkkAEAAAAAEgEEEgAAAAkAkgggAAAAkkEEkAAAAAgkEgAgAAAAkkEEkAAAAAAkgAEgAAAAEggAkgAAAAkkkEEAAAAEgkgEAAAAAkgkgAAAAAAggggAAAAAEkEgEAAAAAggAgEAAAAkkkEkkkAAAkAEkkgEgAAkggEAEkAgggkAAgAAkkkEEkgkgAggg/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPxBIf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8QSH//xAAlEAEBAAICAgICAgMBAAAAAAABEQAhMUFRYXGBMLGRoRDB0SD/2gAIAQEAAT8Q/Cn8CEAKqugDAHgIUQoj4TFAVYG1cRoCLtqecdMAINEexPzWYkPEB7Sit9jGGcLA47XaHCuR1YwjRdyiIXp+8poNDisl2d1HNdDnCtIV7GumLaIhrtSAeE0aPbB7sI0cFUgI5MOIyCUvweQPh/IdbTUGAEfaFbei6sJPcSqFdJwZBCODVoapL5MFSD1VTa5feGFpVEIcgk283N/kBRA1RrnvvIZ1KdxEqMTA66Ss1OriHbydYsRwAB9yAgHOx4oCOz8QFyv5tMdg3KR6tuU4Je1d6wHAlULNTg0jgbPdAr+E23izgjTCGcMO3t7yly6QW2WcvGbo0ACJu+zrLjJIvcHyJ2OXyKjaTot/kxkXE76VpAOCAe83WG6b1YkNG6AH8Rx+GDFLyBU9vOBJv5FkQpUDtyXJqdF74xb7IJUT94U9hgAnuOGWALVNXU+3JBo2xCeMGsUE6AH9sHxpQ3rduVCHrHzlCA86LUeZgXFVC0KaECYb5WH4nd9iMVdona2q+cuIs1GFDiQK/wDcVraObOfjCsLAK2wofrvArslsx6iYgtQDToPfNzZ2IgN3Dl/Wa0oLNt5ioPYYQYSgE02N7MnL3IBHiNm9T6wISTXkIBCNE/EqAzjWEFtuBs7GLzwmKERoga947j9s0YvDWWOM9EI97NJnf2YaqiKNKMSLAvGMnEPqKp0Zqm80IRbupRUj8+5j1Ha8A8wrb9sNBIpOKKlJwJgeD+Io48X2+WHb+NxSM8Lxn8zgeC971XH2OysfkBdMx69UZBWB5hV4/WACvY1CvltySjmiiSLqll5MFO9AxokEQbMbRPQNXQ+Sc7xiPagqAQAlUNU4HPe/MkFHTQzAhRV12AfUHScB/Q6WB0QF2tnZ+CmPJSpcBe/8G5CSczHV2JwkXZkTyWqYgC6DkaOHmvnsEAj5B8lwbQ8Bwak30e8WSVD0KxP3ihKzzspSsDdMIfUaArNXR0Wfplmf6jg7BgNfYzUA4AWLIyOsKYCKgowbzECsGRWSGNKRdA7Bhf8A3PVI15knCMnzlbd8RV5tZtxBDD11vE4s75cgRH8eGbhAD0YsQ/O9Ib0OMU2NbHS8097wDjoCtvBxMqOvh8a94yUQuSBdl2AAbXNmMHlSUO/IxOMlvTrHodBZoGgYQfSeJStBN7Uax+ABBKzZbXquVz9WQmmu24gKYG1fGbktRwAIPpzWZcjZv+gfWUI7ZZ4nP1iRM2VgHC3jOWcQg54teOeMXIhZmktoafOFRBLiCgZUgz/WIlc1GmK91fiV1RgKBQr1qcYYJA2OuF3wHDJCT6RsPgv0xxEpoW6zWA1fUZq/zgNyXYraaSc47pYlTtMJpw+hDuwRMlTybzo0NwY3tUTE9YAETWUVHcEE5yOkK8HX3q/iuwWKcmmv1if5cgau1rq1vFQWUopQ1g1k3Dytyrp8YiAI5M1T5ecRlqKItV6HHkwDOXUgo6dt+DAsM19FLp18Ycy0+IFfJwushNjoSesVq+jz+IwLDRYHABtV0HbiB/iufAQ6Cm8bR0EJTQS61h/QkM9jbzTZgnNhH0A3P3kGnQCAMh4vWTOTo0REb3OnBEHLMCok4bzOcucegDuVTWTnWI0i0IjK0QOQemMiPtSr5/CoookvKwAeVy2zOB0dDzaU3gsBaUTNV1gePCkPRQ61s7zVN0avIfl3Anxk2jmT0Mv53HTki8yGJAUImc8ae82A0A65xhS4oKOknLjv7noyF5BPwDuctIDtT4NHzjUg9znho8JOPWaAhxsgdA5WUMqxygRHQXXnNzarohSFDTROS7xoDRkBjBToK7x3mJ0dIHeBM4VHBTq2J7uOXlUOA7UShvsSOaIRpqTxltdtA64+sMAWE74dv29ZO4wMZDFUQCJyYW53hea0T5fU7wA90YdiSI+R/wDR4o3BvS4gK9Xl9qc4DfdeDnOONBvZfwZpSYToNm8Jyd5qYJiWYeiGYAQF6FZM5S5hchkRGAAsLeRnBa2sqUx6v851jMXAoAQoEeHH7idMXgip5YyFAlG11MmFWHkYB/lxlVVSMk8TDEg2G7hB8hXY5GcbFzhTK70PRgrrMK3WmfW+8v8AlEP+gR/WSiVTxhbAnO8aYnAaIe/IOQK3W/g7wCx5QhBx2Yz8i82BlYC+McxlgoHUv/MMV5C5mF8pIU8YaFWwRI6oGouxxnTisi4q0feEAtDFu+c9k+MRtSqxEOS2sZxhXN+Z5yKatDxxi3Cvp574xabD6SV1iGd0gS2wk0g5rAkks7YvUt+whhUdavtv+8tFuPoDxYcTyAdjQLZwkVzCM+AMNoLbh7cYUZ3M+el8VcVmGh1s7Tbt+jI48anWKolYHOgXX3iNlv8ArHF8+cPkJ2f3kgtsjv5wRa55pjqBTv1jTJXqYl4XnKep299f3glyz6C8b6+ScLi2NBoA/pQ4Qmgx8xxEwNKglrqu/WUTFpzVXv7RjMu7V6+8Cs5TwdoT9YEPe4dB53v5LhUtV2jVXfbnGUf1iAk6rrk/3ho3CsFjL8LwzIssTyHxxcRLw8MKAjVGZxG67fnGycvRjbAbfgHOVjq6yW3Tv0F/5m8EF/LOjmxVUXzEfGM//9k="

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = require("connect-pg-simple");

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = require("express-flash");

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = require("express-force-ssl");

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = require("oauth2orize");

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = require("passport-http");

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = require("passport-http-bearer");

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = require("passport-oauth2-client-password");

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = require("postcss-calc");

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = require("postcss-color-function");

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = require("postcss-conditionals");

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = require("postcss-for");

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = require("postcss-import");

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = require("postcss-math");

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = require("postcss-mixins");

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = require("postcss-nested");

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = require("postcss-percentage");

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = require("postcss-simple-vars");

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = require("webpack-manifest-plugin");

/***/ })
/******/ ]);
//# sourceMappingURL=server.dev.js.map