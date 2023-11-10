(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('cross-fetch/polyfill')) :
    typeof define === 'function' && define.amd ? define(['exports', 'cross-fetch/polyfill'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var meilisearch_umd = createCommonjsModule(function (module, exports) {
      (function (global, factory) {
        factory(exports) ;
      })(commonjsGlobal, function (exports) {

        // Type definitions for meilisearch
        // Project: https://github.com/meilisearch/meilisearch-js
        // Definitions by: qdequele <quentin@meilisearch.com> <https://github.com/meilisearch>
        // Definitions: https://github.com/meilisearch/meilisearch-js
        // TypeScript Version: ^3.8.3

        /*
         * SEARCH PARAMETERS
         */
        var MatchingStrategies = {
          ALL: 'all',
          LAST: 'last'
        };
        var ContentTypeEnum = {
          JSON: 'application/json',
          CSV: 'text/csv',
          NDJSON: 'application/x-ndjson'
        };
        function _regeneratorRuntime() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

          _regeneratorRuntime = function () {
            return exports;
          };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function (obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return generator._invoke = function (innerFn, self, context) {
              var state = "suspendedStart";
              return function (method, arg) {
                if ("executing" === state) throw new Error("Generator is already running");
                if ("completed" === state) {
                  if ("throw" === method) throw arg;
                  return doneResult();
                }
                for (context.method = method, context.arg = arg;;) {
                  var delegate = context.delegate;
                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel) continue;
                      return delegateResult;
                    }
                  }
                  if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                  } else "return" === context.method && context.abrupt("return", context.arg);
                  state = "executing";
                  var record = tryCatch(innerFn, self, context);
                  if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                      value: record.arg,
                      done: context.done
                    };
                  }
                  "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                }
              };
            }(innerFn, self, context), generator;
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped, resolve(result);
                }, function (error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
              reject(record.arg);
            }
            var previousPromise;
            this._invoke = function (method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (undefined === method) {
              if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                  };
                return next.next = next;
              }
            }
            return {
              next: doneResult
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0
            };
          }
          return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
          }, exports.mark = function (genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
          }, exports.awrap = function (arg) {
            return {
              __await: arg
            };
          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
            return this;
          }), define(Gp, "toString", function () {
            return "[object Generator]";
          }), exports.keys = function (object) {
            var keys = [];
            for (var key in object) keys.push(key);
            return keys.reverse(), function next() {
              for (; keys.length;) {
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
              }
              return next.done = !0, next;
            };
          }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function (skipTempReset) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
            },
            stop: function () {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function (exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function (record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
            },
            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (iterable, resultName, nextLoc) {
              return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
            }
          }, exports;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(subClass, "prototype", {
            writable: false
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
          return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct.bind();
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : undefined;
          _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class)) return _cache.get(Class);
              _cache.set(Class, Wrapper);
            }
            function Wrapper() {
              return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            return _setPrototypeOf(Wrapper, Class);
          };
          return _wrapNativeSuper(Class);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return _assertThisInitialized(self);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
          if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;
              var F = function () {};
              return {
                s: F,
                n: function () {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function (e) {
                  throw e;
                },
                f: F
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function () {
              it = it.call(o);
            },
            n: function () {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function (e) {
              didErr = true;
              err = e;
            },
            f: function () {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }

        /******************************************************************************
        Copyright (c) Microsoft Corporation.
          Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        var MeiliSearchCommunicationError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchCommunicationError, _Error);
          var _super = _createSuper(MeiliSearchCommunicationError);
          function MeiliSearchCommunicationError(message, body, url, stack) {
            var _this;
            _classCallCheck(this, MeiliSearchCommunicationError);
            var _a, _b, _c;
            _this = _super.call(this, message); // Make errors comparison possible. ex: error instanceof MeiliSearchCommunicationError.

            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchCommunicationError.prototype);
            _this.name = 'MeiliSearchCommunicationError';
            if (body instanceof Response) {
              _this.message = body.statusText;
              _this.statusCode = body.status;
            }
            if (body instanceof Error) {
              _this.errno = body.errno;
              _this.code = body.code;
            }
            if (stack) {
              _this.stack = stack;
              _this.stack = (_a = _this.stack) === null || _a === void 0 ? void 0 : _a.replace(/(TypeError|FetchError)/, _this.name);
              _this.stack = (_b = _this.stack) === null || _b === void 0 ? void 0 : _b.replace('Failed to fetch', "request to ".concat(url, " failed, reason: connect ECONNREFUSED"));
              _this.stack = (_c = _this.stack) === null || _c === void 0 ? void 0 : _c.replace('Not Found', "Not Found: ".concat(url));
            } else {
              if (Error.captureStackTrace) {
                Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchCommunicationError);
              }
            }
            return _this;
          }
          return _createClass(MeiliSearchCommunicationError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        var MeiliSearchApiError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchApiError, _Error);
          var _super = _createSuper(MeiliSearchApiError);
          function MeiliSearchApiError(error, status) {
            var _this;
            _classCallCheck(this, MeiliSearchApiError);
            _this = _super.call(this, error.message); // Make errors comparison possible. ex: error instanceof MeiliSearchApiError.

            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchApiError.prototype);
            _this.name = 'MeiliSearchApiError';
            _this.code = error.code;
            _this.type = error.type;
            _this.link = error.link;
            _this.message = error.message;
            _this.httpStatus = status;
            if (Error.captureStackTrace) {
              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchApiError);
            }
            return _this;
          }
          return _createClass(MeiliSearchApiError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        function httpResponseErrorHandler(response) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var responseBody;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (response.ok) {
                    _context.next = 11;
                    break;
                  }
                  _context.prev = 1;
                  _context.next = 4;
                  return response.json();
                case 4:
                  responseBody = _context.sent;
                  _context.next = 10;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](1);
                  throw new MeiliSearchCommunicationError(response.statusText, response, response.url);
                case 10:
                  throw new MeiliSearchApiError(responseBody, response.status);
                case 11:
                  return _context.abrupt("return", response);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[1, 7]]);
          }));
        }
        function httpErrorHandler(response, stack, url) {
          if (response.name !== 'MeiliSearchApiError') {
            throw new MeiliSearchCommunicationError(response.message, response, url, stack);
          }
          throw response;
        }
        var MeiliSearchError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchError, _Error);
          var _super = _createSuper(MeiliSearchError);
          function MeiliSearchError(message) {
            var _this;
            _classCallCheck(this, MeiliSearchError);
            _this = _super.call(this, message); // Make errors comparison possible. ex: error instanceof MeiliSearchError.

            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchError.prototype);
            _this.name = 'MeiliSearchError';
            if (Error.captureStackTrace) {
              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchError);
            }
            return _this;
          }
          return _createClass(MeiliSearchError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        var MeiliSearchTimeOutError = /*#__PURE__*/function (_Error) {
          _inherits(MeiliSearchTimeOutError, _Error);
          var _super = _createSuper(MeiliSearchTimeOutError);
          function MeiliSearchTimeOutError(message) {
            var _this;
            _classCallCheck(this, MeiliSearchTimeOutError);
            _this = _super.call(this, message); // Make errors comparison possible. ex: error instanceof MeiliSearchTimeOutError.

            Object.setPrototypeOf(_assertThisInitialized(_this), MeiliSearchTimeOutError.prototype);
            _this.name = 'MeiliSearchTimeOutError';
            if (Error.captureStackTrace) {
              Error.captureStackTrace(_assertThisInitialized(_this), MeiliSearchTimeOutError);
            }
            return _this;
          }
          return _createClass(MeiliSearchTimeOutError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        function versionErrorHintMessage(message, method) {
          return "".concat(message, "\nHint: It might not be working because maybe you're not up to date with the Meilisearch version that ").concat(method, " call requires.");
        }

        /** Removes undefined entries from object */

        function removeUndefinedFromObject(obj) {
          return Object.entries(obj).reduce(function (acc, curEntry) {
            var _curEntry = _slicedToArray(curEntry, 2),
              key = _curEntry[0],
              val = _curEntry[1];
            if (val !== undefined) acc[key] = val;
            return acc;
          }, {});
        }
        function sleep(ms) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, ms);
                  });
                case 2:
                  return _context.abrupt("return", _context.sent);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        }
        function addProtocolIfNotPresent(host) {
          if (!(host.startsWith('https://') || host.startsWith('http://'))) {
            return "http://".concat(host);
          }
          return host;
        }
        function addTrailingSlash(url) {
          if (!url.endsWith('/')) {
            url += '/';
          }
          return url;
        }
        var PACKAGE_VERSION = '0.35.0';
        function toQueryParams(parameters) {
          var params = Object.keys(parameters);
          var queryParams = params.reduce(function (acc, key) {
            var value = parameters[key];
            if (value === undefined) {
              return acc;
            } else if (Array.isArray(value)) {
              return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value.join(',')));
            } else if (value instanceof Date) {
              return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value.toISOString()));
            }
            return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value));
          }, {});
          return queryParams;
        }
        function constructHostURL(host) {
          try {
            host = addProtocolIfNotPresent(host);
            host = addTrailingSlash(host);
            return host;
          } catch (e) {
            throw new MeiliSearchError('The provided host is not valid.');
          }
        }
        function cloneAndParseHeaders(headers) {
          if (Array.isArray(headers)) {
            return headers.reduce(function (acc, headerPair) {
              acc[headerPair[0]] = headerPair[1];
              return acc;
            }, {});
          } else if ('has' in headers) {
            var clonedHeaders = {};
            headers.forEach(function (value, key) {
              return clonedHeaders[key] = value;
            });
            return clonedHeaders;
          } else {
            return Object.assign({}, headers);
          }
        }
        function createHeaders(config) {
          var _a, _b;
          var agentHeader = 'X-Meilisearch-Client';
          var packageAgent = "Meilisearch JavaScript (v".concat(PACKAGE_VERSION, ")");
          var contentType = 'Content-Type';
          var authorization = 'Authorization';
          var headers = cloneAndParseHeaders((_b = (_a = config.requestConfig) === null || _a === void 0 ? void 0 : _a.headers) !== null && _b !== void 0 ? _b : {}); // do not override if user provided the header

          if (config.apiKey && !headers[authorization]) {
            headers[authorization] = "Bearer ".concat(config.apiKey);
          }
          if (!headers[contentType]) {
            headers['Content-Type'] = 'application/json';
          } // Creates the custom user agent with information on the package used.

          if (config.clientAgents && Array.isArray(config.clientAgents)) {
            var clients = config.clientAgents.concat(packageAgent);
            headers[agentHeader] = clients.join(' ; ');
          } else if (config.clientAgents && !Array.isArray(config.clientAgents)) {
            // If the header is defined but not an array
            throw new MeiliSearchError("Meilisearch: The header \"".concat(agentHeader, "\" should be an array of string(s).\n"));
          } else {
            headers[agentHeader] = packageAgent;
          }
          return headers;
        }
        var HttpRequests = /*#__PURE__*/function () {
          function HttpRequests(config) {
            _classCallCheck(this, HttpRequests);
            this.headers = createHeaders(config);
            this.requestConfig = config.requestConfig;
            this.httpClient = config.httpClient;
            try {
              var host = constructHostURL(config.host);
              this.url = new URL(host);
            } catch (e) {
              throw new MeiliSearchError('The provided host is not valid.');
            }
          }
          _createClass(HttpRequests, [{
            key: "request",
            value: function request(_ref) {
              var method = _ref.method,
                url = _ref.url,
                params = _ref.params,
                body = _ref.body,
                _ref$config = _ref.config,
                config = _ref$config === void 0 ? {} : _ref$config;
              var _a;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var constructURL, queryParams, headers, fetchFn, result, response, parsedBody, stack;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      constructURL = new URL(url, this.url);
                      if (params) {
                        queryParams = new URLSearchParams();
                        Object.keys(params).filter(function (x) {
                          return params[x] !== null;
                        }).map(function (x) {
                          return queryParams.set(x, params[x]);
                        });
                        constructURL.search = queryParams.toString();
                      } // in case a custom content-type is provided
                      // do not stringify body

                      if (!((_a = config.headers) === null || _a === void 0 ? void 0 : _a['Content-Type'])) {
                        body = JSON.stringify(body);
                      }
                      headers = Object.assign(Object.assign({}, this.headers), config.headers);
                      _context.prev = 5;
                      fetchFn = this.httpClient ? this.httpClient : fetch;
                      result = fetchFn(constructURL.toString(), Object.assign(Object.assign(Object.assign({}, config), this.requestConfig), {
                        method: method,
                        body: body,
                        headers: headers
                      })); // When using a custom HTTP client, the response is returned to allow the user to parse/handle it as they see fit

                      if (!this.httpClient) {
                        _context.next = 12;
                        break;
                      }
                      _context.next = 11;
                      return result;
                    case 11:
                      return _context.abrupt("return", _context.sent);
                    case 12:
                      _context.next = 14;
                      return result.then(function (res) {
                        return httpResponseErrorHandler(res);
                      });
                    case 14:
                      response = _context.sent;
                      _context.next = 17;
                      return response.json().catch(function () {
                        return undefined;
                      });
                    case 17:
                      parsedBody = _context.sent;
                      return _context.abrupt("return", parsedBody);
                    case 21:
                      _context.prev = 21;
                      _context.t0 = _context["catch"](5);
                      stack = _context.t0.stack;
                      httpErrorHandler(_context.t0, stack, constructURL.toString());
                    case 25:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this, [[5, 21]]);
              }));
            }
          }, {
            key: "get",
            value: function get(url, params, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.request({
                        method: 'GET',
                        url: url,
                        params: params,
                        config: config
                      });
                    case 2:
                      return _context2.abrupt("return", _context2.sent);
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "post",
            value: function post(url, data, params, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.request({
                        method: 'POST',
                        url: url,
                        body: data,
                        params: params,
                        config: config
                      });
                    case 2:
                      return _context3.abrupt("return", _context3.sent);
                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "put",
            value: function put(url, data, params, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.request({
                        method: 'PUT',
                        url: url,
                        body: data,
                        params: params,
                        config: config
                      });
                    case 2:
                      return _context4.abrupt("return", _context4.sent);
                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, this);
              }));
            }
          }, {
            key: "patch",
            value: function patch(url, data, params, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.request({
                        method: 'PATCH',
                        url: url,
                        body: data,
                        params: params,
                        config: config
                      });
                    case 2:
                      return _context5.abrupt("return", _context5.sent);
                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, this);
              }));
            }
          }, {
            key: "delete",
            value: function _delete(url, data, params, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.request({
                        method: 'DELETE',
                        url: url,
                        body: data,
                        params: params,
                        config: config
                      });
                    case 2:
                      return _context6.abrupt("return", _context6.sent);
                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
            }
          }]);
          return HttpRequests;
        }();
        var EnqueuedTask = /*#__PURE__*/_createClass(function EnqueuedTask(task) {
          _classCallCheck(this, EnqueuedTask);
          this.taskUid = task.taskUid;
          this.indexUid = task.indexUid;
          this.status = task.status;
          this.type = task.type;
          this.enqueuedAt = new Date(task.enqueuedAt);
        });
        var Task = /*#__PURE__*/_createClass(function Task(task) {
          _classCallCheck(this, Task);
          this.indexUid = task.indexUid;
          this.status = task.status;
          this.type = task.type;
          this.uid = task.uid;
          this.details = task.details;
          this.canceledBy = task.canceledBy;
          this.error = task.error;
          this.duration = task.duration;
          this.startedAt = new Date(task.startedAt);
          this.enqueuedAt = new Date(task.enqueuedAt);
          this.finishedAt = new Date(task.finishedAt);
        });
        var TaskClient = /*#__PURE__*/function () {
          function TaskClient(config) {
            _classCallCheck(this, TaskClient);
            this.httpRequest = new HttpRequests(config);
          }
          /**
           * Get one task
           *
           * @param uid - Unique identifier of the task
           * @returns
           */

          _createClass(TaskClient, [{
            key: "getTask",
            value: function getTask(uid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var url, taskItem;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      url = "tasks/".concat(uid);
                      _context.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      taskItem = _context.sent;
                      return _context.abrupt("return", new Task(taskItem));
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            }
            /**
             * Get tasks
             *
             * @param parameters - Parameters to browse the tasks
             * @returns Promise containing all tasks
             */
          }, {
            key: "getTasks",
            value: function getTasks() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var url, tasks;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      url = "tasks";
                      _context2.next = 3;
                      return this.httpRequest.get(url, toQueryParams(parameters));
                    case 3:
                      tasks = _context2.sent;
                      return _context2.abrupt("return", Object.assign(Object.assign({}, tasks), {
                        results: tasks.results.map(function (task) {
                          return new Task(task);
                        })
                      }));
                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            }
            /**
             * Wait for a task to be processed.
             *
             * @param taskUid - Task identifier
             * @param options - Additional configuration options
             * @returns Promise returning a task after it has been processed
             */
          }, {
            key: "waitForTask",
            value: function waitForTask(taskUid) {
              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref$timeOutMs = _ref.timeOutMs,
                timeOutMs = _ref$timeOutMs === void 0 ? 5000 : _ref$timeOutMs,
                _ref$intervalMs = _ref.intervalMs,
                intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var startingTime, response;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      startingTime = Date.now();
                    case 1:
                      if (!(Date.now() - startingTime < timeOutMs)) {
                        _context3.next = 11;
                        break;
                      }
                      _context3.next = 4;
                      return this.getTask(taskUid);
                    case 4:
                      response = _context3.sent;
                      if (["enqueued"
                      /* TaskStatus.TASK_ENQUEUED */, "processing"
                      /* TaskStatus.TASK_PROCESSING */].includes(response.status)) {
                        _context3.next = 7;
                        break;
                      }
                      return _context3.abrupt("return", response);
                    case 7:
                      _context3.next = 9;
                      return sleep(intervalMs);
                    case 9:
                      _context3.next = 1;
                      break;
                    case 11:
                      throw new MeiliSearchTimeOutError("timeout of ".concat(timeOutMs, "ms has exceeded on process ").concat(taskUid, " when waiting a task to be resolved."));
                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
            }
            /**
             * Waits for multiple tasks to be processed
             *
             * @param taskUids - Tasks identifier list
             * @param options - Wait options
             * @returns Promise returning a list of tasks after they have been processed
             */
          }, {
            key: "waitForTasks",
            value: function waitForTasks(taskUids) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$timeOutMs = _ref2.timeOutMs,
                timeOutMs = _ref2$timeOutMs === void 0 ? 5000 : _ref2$timeOutMs,
                _ref2$intervalMs = _ref2.intervalMs,
                intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var tasks, _iterator, _step, taskUid, task;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      tasks = [];
                      _iterator = _createForOfIteratorHelper(taskUids);
                      _context4.prev = 2;
                      _iterator.s();
                    case 4:
                      if ((_step = _iterator.n()).done) {
                        _context4.next = 12;
                        break;
                      }
                      taskUid = _step.value;
                      _context4.next = 8;
                      return this.waitForTask(taskUid, {
                        timeOutMs: timeOutMs,
                        intervalMs: intervalMs
                      });
                    case 8:
                      task = _context4.sent;
                      tasks.push(task);
                    case 10:
                      _context4.next = 4;
                      break;
                    case 12:
                      _context4.next = 17;
                      break;
                    case 14:
                      _context4.prev = 14;
                      _context4.t0 = _context4["catch"](2);
                      _iterator.e(_context4.t0);
                    case 17:
                      _context4.prev = 17;
                      _iterator.f();
                      return _context4.finish(17);
                    case 20:
                      return _context4.abrupt("return", tasks);
                    case 21:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, this, [[2, 14, 17, 20]]);
              }));
            }
            /**
             * Cancel a list of enqueued or processing tasks.
             *
             * @param parameters - Parameters to filter the tasks.
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "cancelTasks",
            value: function cancelTasks() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      url = "tasks/cancel";
                      _context5.next = 3;
                      return this.httpRequest.post(url, {}, toQueryParams(parameters));
                    case 3:
                      task = _context5.sent;
                      return _context5.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, this);
              }));
            }
            /**
             * Delete a list tasks.
             *
             * @param parameters - Parameters to filter the tasks.
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "deleteTasks",
            value: function deleteTasks() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      url = "tasks";
                      _context6.next = 3;
                      return this.httpRequest.delete(url, {}, toQueryParams(parameters));
                    case 3:
                      task = _context6.sent;
                      return _context6.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
            }
          }]);
          return TaskClient;
        }();

        /*
         * Bundle: MeiliSearch / Indexes
         * Project: MeiliSearch - Javascript API
         * Author: Quentin de Quelen <quentin@meilisearch.com>
         * Copyright: 2019, MeiliSearch
         */

        var Index = /*#__PURE__*/function () {
          /**
           * @param config - Request configuration options
           * @param uid - UID of the index
           * @param primaryKey - Primary Key of the index
           */
          function Index(config, uid, primaryKey) {
            _classCallCheck(this, Index);
            this.uid = uid;
            this.primaryKey = primaryKey;
            this.httpRequest = new HttpRequests(config);
            this.tasks = new TaskClient(config);
          } ///
          /// SEARCH
          ///

          /**
           * Search for documents into an index
           *
           * @param query - Query string
           * @param options - Search options
           * @param config - Additional request configuration options
           * @returns Promise containing the search response
           */

          _createClass(Index, [{
            key: "search",
            value: function search(query, options, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var url;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/search");
                      _context.next = 3;
                      return this.httpRequest.post(url, removeUndefinedFromObject(Object.assign({
                        q: query
                      }, options)), undefined, config);
                    case 3:
                      return _context.abrupt("return", _context.sent);
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            }
            /**
             * Search for documents into an index using the GET method
             *
             * @param query - Query string
             * @param options - Search options
             * @param config - Additional request configuration options
             * @returns Promise containing the search response
             */
          }, {
            key: "searchGet",
            value: function searchGet(query, options, config) {
              var _a, _b, _c, _d, _e, _f, _g;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var url, parseFilter, getParams;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/search");
                      parseFilter = function parseFilter(filter) {
                        if (typeof filter === 'string') return filter;else if (Array.isArray(filter)) throw new MeiliSearchError('The filter query parameter should be in string format when using searchGet');else return undefined;
                      };
                      getParams = Object.assign(Object.assign({
                        q: query
                      }, options), {
                        filter: parseFilter(options === null || options === void 0 ? void 0 : options.filter),
                        sort: (_a = options === null || options === void 0 ? void 0 : options.sort) === null || _a === void 0 ? void 0 : _a.join(','),
                        facets: (_b = options === null || options === void 0 ? void 0 : options.facets) === null || _b === void 0 ? void 0 : _b.join(','),
                        attributesToRetrieve: (_c = options === null || options === void 0 ? void 0 : options.attributesToRetrieve) === null || _c === void 0 ? void 0 : _c.join(','),
                        attributesToCrop: (_d = options === null || options === void 0 ? void 0 : options.attributesToCrop) === null || _d === void 0 ? void 0 : _d.join(','),
                        attributesToHighlight: (_e = options === null || options === void 0 ? void 0 : options.attributesToHighlight) === null || _e === void 0 ? void 0 : _e.join(','),
                        vector: (_f = options === null || options === void 0 ? void 0 : options.vector) === null || _f === void 0 ? void 0 : _f.join(','),
                        attributesToSearchOn: (_g = options === null || options === void 0 ? void 0 : options.attributesToSearchOn) === null || _g === void 0 ? void 0 : _g.join(',')
                      });
                      _context2.next = 5;
                      return this.httpRequest.get(url, removeUndefinedFromObject(getParams), config);
                    case 5:
                      return _context2.abrupt("return", _context2.sent);
                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            }
            /**
             * Search for facet values
             *
             * @param params - Parameters used to search on the facets
             * @param config - Additional request configuration options
             * @returns Promise containing the search response
             */
          }, {
            key: "searchForFacetValues",
            value: function searchForFacetValues(params, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var url;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/facet-search");
                      _context3.next = 3;
                      return this.httpRequest.post(url, removeUndefinedFromObject(params), undefined, config);
                    case 3:
                      return _context3.abrupt("return", _context3.sent);
                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
            } ///
            /// INDEX
            ///

            /**
             * Get index information.
             *
             * @returns Promise containing index information
             */
          }, {
            key: "getRawInfo",
            value: function getRawInfo() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var url, res;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      url = "indexes/".concat(this.uid);
                      _context4.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      res = _context4.sent;
                      this.primaryKey = res.primaryKey;
                      this.updatedAt = new Date(res.updatedAt);
                      this.createdAt = new Date(res.createdAt);
                      return _context4.abrupt("return", res);
                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, this);
              }));
            }
            /**
             * Fetch and update Index information.
             *
             * @returns Promise to the current Index object with updated information
             */
          }, {
            key: "fetchInfo",
            value: function fetchInfo() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.getRawInfo();
                    case 2:
                      return _context5.abrupt("return", this);
                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, this);
              }));
            }
            /**
             * Get Primary Key.
             *
             * @returns Promise containing the Primary Key of the index
             */
          }, {
            key: "fetchPrimaryKey",
            value: function fetchPrimaryKey() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.getRawInfo();
                    case 2:
                      this.primaryKey = _context6.sent.primaryKey;
                      return _context6.abrupt("return", this.primaryKey);
                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
            }
            /**
             * Create an index.
             *
             * @param uid - Unique identifier of the Index
             * @param options - Index options
             * @param config - Request configuration options
             * @returns Newly created Index object
             */
          }, {
            key: "update",
            value:
            /**
             * Update an index.
             *
             * @param data - Data to update
             * @returns Promise to the current Index object with updated information
             */
            function update(data) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      url = "indexes/".concat(this.uid);
                      _context7.next = 3;
                      return this.httpRequest.patch(url, data);
                    case 3:
                      task = _context7.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context7.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, this);
              }));
            }
            /**
             * Delete an index.
             *
             * @returns Promise which resolves when index is deleted successfully
             */
          }, {
            key: "delete",
            value: function _delete() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      url = "indexes/".concat(this.uid);
                      _context8.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context8.sent;
                      return _context8.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8, this);
              }));
            } ///
            /// TASKS
            ///

            /**
             * Get the list of all the tasks of the index.
             *
             * @param parameters - Parameters to browse the tasks
             * @returns Promise containing all tasks
             */
          }, {
            key: "getTasks",
            value: function getTasks() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.tasks.getTasks(Object.assign(Object.assign({}, parameters), {
                        indexUids: [this.uid]
                      }));
                    case 2:
                      return _context9.abrupt("return", _context9.sent);
                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, this);
              }));
            }
            /**
             * Get one task of the index.
             *
             * @param taskUid - Task identifier
             * @returns Promise containing a task
             */
          }, {
            key: "getTask",
            value: function getTask(taskUid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.tasks.getTask(taskUid);
                    case 2:
                      return _context10.abrupt("return", _context10.sent);
                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, this);
              }));
            }
            /**
             * Wait for multiple tasks to be processed.
             *
             * @param taskUids - Tasks identifier
             * @param waitOptions - Options on timeout and interval
             * @returns Promise containing an array of tasks
             */
          }, {
            key: "waitForTasks",
            value: function waitForTasks(taskUids) {
              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref$timeOutMs = _ref.timeOutMs,
                timeOutMs = _ref$timeOutMs === void 0 ? 5000 : _ref$timeOutMs,
                _ref$intervalMs = _ref.intervalMs,
                intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.tasks.waitForTasks(taskUids, {
                        timeOutMs: timeOutMs,
                        intervalMs: intervalMs
                      });
                    case 2:
                      return _context11.abrupt("return", _context11.sent);
                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11, this);
              }));
            }
            /**
             * Wait for a task to be processed.
             *
             * @param taskUid - Task identifier
             * @param waitOptions - Options on timeout and interval
             * @returns Promise containing an array of tasks
             */
          }, {
            key: "waitForTask",
            value: function waitForTask(taskUid) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$timeOutMs = _ref2.timeOutMs,
                timeOutMs = _ref2$timeOutMs === void 0 ? 5000 : _ref2$timeOutMs,
                _ref2$intervalMs = _ref2.intervalMs,
                intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.tasks.waitForTask(taskUid, {
                        timeOutMs: timeOutMs,
                        intervalMs: intervalMs
                      });
                    case 2:
                      return _context12.abrupt("return", _context12.sent);
                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12, this);
              }));
            } ///
            /// STATS
            ///

            /**
             * Get stats of an index
             *
             * @returns Promise containing object with stats of the index
             */
          }, {
            key: "getStats",
            value: function getStats() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                var url;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/stats");
                      _context13.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context13.abrupt("return", _context13.sent);
                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13, this);
              }));
            } ///
            /// DOCUMENTS
            ///

            /**
             * Get documents of an index.
             *
             * @param parameters - Parameters to browse the documents. Parameters can
             *   contain the `filter` field only available in Meilisearch v1.2 and newer
             * @returns Promise containing the returned documents
             */
          }, {
            key: "getDocuments",
            value: function getDocuments() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var _a;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                var url, _url, fields;
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      parameters = removeUndefinedFromObject(parameters); // In case `filter` is provided, use `POST /documents/fetch`

                      if (!(parameters.filter !== undefined)) {
                        _context14.next = 15;
                        break;
                      }
                      _context14.prev = 2;
                      url = "indexes/".concat(this.uid, "/documents/fetch");
                      _context14.next = 6;
                      return this.httpRequest.post(url, parameters);
                    case 6:
                      return _context14.abrupt("return", _context14.sent);
                    case 9:
                      _context14.prev = 9;
                      _context14.t0 = _context14["catch"](2);
                      if (_context14.t0 instanceof MeiliSearchCommunicationError) {
                        _context14.t0.message = versionErrorHintMessage(_context14.t0.message, 'getDocuments');
                      } else if (_context14.t0 instanceof MeiliSearchApiError) {
                        _context14.t0.message = versionErrorHintMessage(_context14.t0.message, 'getDocuments');
                      }
                      throw _context14.t0;
                    case 13:
                      _context14.next = 20;
                      break;
                    case 15:
                      _url = "indexes/".concat(this.uid, "/documents"); // Transform fields to query parameter string format

                      fields = Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields) ? {
                        fields: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a === void 0 ? void 0 : _a.join(',')
                      } : {};
                      _context14.next = 19;
                      return this.httpRequest.get(_url, Object.assign(Object.assign({}, parameters), fields));
                    case 19:
                      return _context14.abrupt("return", _context14.sent);
                    case 20:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14, this, [[2, 9]]);
              }));
            }
            /**
             * Get one document
             *
             * @param documentId - Document ID
             * @param parameters - Parameters applied on a document
             * @returns Promise containing Document response
             */
          }, {
            key: "getDocument",
            value: function getDocument(documentId, parameters) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                var url, fields;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
                      fields = function () {
                        var _a;
                        if (Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields)) {
                          return (_a = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a === void 0 ? void 0 : _a.join(',');
                        }
                        return undefined;
                      }();
                      _context15.next = 4;
                      return this.httpRequest.get(url, removeUndefinedFromObject(Object.assign(Object.assign({}, parameters), {
                        fields: fields
                      })));
                    case 4:
                      return _context15.abrupt("return", _context15.sent);
                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this);
              }));
            }
            /**
             * Add or replace multiples documents to an index
             *
             * @param documents - Array of Document objects to add/replace
             * @param options - Options on document addition
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "addDocuments",
            value: function addDocuments(documents, options) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents");
                      _context16.next = 3;
                      return this.httpRequest.post(url, documents, options);
                    case 3:
                      task = _context16.sent;
                      return _context16.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16, this);
              }));
            }
            /**
             * Add or replace multiples documents in a string format to an index. It only
             * supports csv, ndjson and json formats.
             *
             * @param documents - Documents provided in a string to add/replace
             * @param contentType - Content type of your document:
             *   'text/csv'|'application/x-ndjson'|'application/json'
             * @param options - Options on document addition
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "addDocumentsFromString",
            value: function addDocumentsFromString(documents, contentType, queryParams) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents");
                      _context17.next = 3;
                      return this.httpRequest.post(url, documents, queryParams, {
                        headers: {
                          'Content-Type': contentType
                        }
                      });
                    case 3:
                      task = _context17.sent;
                      return _context17.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee17, this);
              }));
            }
            /**
             * Add or replace multiples documents to an index in batches
             *
             * @param documents - Array of Document objects to add/replace
             * @param batchSize - Size of the batch
             * @param options - Options on document addition
             * @returns Promise containing array of enqueued task objects for each batch
             */
          }, {
            key: "addDocumentsInBatches",
            value: function addDocumentsInBatches(documents) {
              var batchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
              var options = arguments.length > 2 ? arguments[2] : undefined;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                var updates, i;
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      updates = [];
                      i = 0;
                    case 2:
                      if (!(i < documents.length)) {
                        _context18.next = 11;
                        break;
                      }
                      _context18.t0 = updates;
                      _context18.next = 6;
                      return this.addDocuments(documents.slice(i, i + batchSize), options);
                    case 6:
                      _context18.t1 = _context18.sent;
                      _context18.t0.push.call(_context18.t0, _context18.t1);
                    case 8:
                      i += batchSize;
                      _context18.next = 2;
                      break;
                    case 11:
                      return _context18.abrupt("return", updates);
                    case 12:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18, this);
              }));
            }
            /**
             * Add or update multiples documents to an index
             *
             * @param documents - Array of Document objects to add/update
             * @param options - Options on document update
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateDocuments",
            value: function updateDocuments(documents, options) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents");
                      _context19.next = 3;
                      return this.httpRequest.put(url, documents, options);
                    case 3:
                      task = _context19.sent;
                      return _context19.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee19, this);
              }));
            }
            /**
             * Add or update multiples documents to an index in batches
             *
             * @param documents - Array of Document objects to add/update
             * @param batchSize - Size of the batch
             * @param options - Options on document update
             * @returns Promise containing array of enqueued task objects for each batch
             */
          }, {
            key: "updateDocumentsInBatches",
            value: function updateDocumentsInBatches(documents) {
              var batchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
              var options = arguments.length > 2 ? arguments[2] : undefined;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                var updates, i;
                return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                  while (1) switch (_context20.prev = _context20.next) {
                    case 0:
                      updates = [];
                      i = 0;
                    case 2:
                      if (!(i < documents.length)) {
                        _context20.next = 11;
                        break;
                      }
                      _context20.t0 = updates;
                      _context20.next = 6;
                      return this.updateDocuments(documents.slice(i, i + batchSize), options);
                    case 6:
                      _context20.t1 = _context20.sent;
                      _context20.t0.push.call(_context20.t0, _context20.t1);
                    case 8:
                      i += batchSize;
                      _context20.next = 2;
                      break;
                    case 11:
                      return _context20.abrupt("return", updates);
                    case 12:
                    case "end":
                      return _context20.stop();
                  }
                }, _callee20, this);
              }));
            }
            /**
             * Add or update multiples documents in a string format to an index. It only
             * supports csv, ndjson and json formats.
             *
             * @param documents - Documents provided in a string to add/update
             * @param contentType - Content type of your document:
             *   'text/csv'|'application/x-ndjson'|'application/json'
             * @param queryParams - Options on raw document addition
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateDocumentsFromString",
            value: function updateDocumentsFromString(documents, contentType, queryParams) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents");
                      _context21.next = 3;
                      return this.httpRequest.put(url, documents, queryParams, {
                        headers: {
                          'Content-Type': contentType
                        }
                      });
                    case 3:
                      task = _context21.sent;
                      return _context21.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee21, this);
              }));
            }
            /**
             * Delete one document
             *
             * @param documentId - Id of Document to delete
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "deleteDocument",
            value: function deleteDocument(documentId) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                  while (1) switch (_context22.prev = _context22.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
                      _context22.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context22.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context22.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context22.stop();
                  }
                }, _callee22, this);
              }));
            }
            /**
             * Delete multiples documents of an index.
             *
             * @param params - Params value can be:
             *
             *   - DocumentsDeletionQuery: An object containing the parameters to customize
             *       your document deletion. Only available in Meilisearch v1.2 and newer
             *   - DocumentsIds: An array of document ids to delete
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "deleteDocuments",
            value: function deleteDocuments(params) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
                var isDocumentsDeletionQuery, endpoint, url, task;
                return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                  while (1) switch (_context23.prev = _context23.next) {
                    case 0:
                      // If params is of type DocumentsDeletionQuery
                      isDocumentsDeletionQuery = !Array.isArray(params) && _typeof(params) === 'object';
                      endpoint = isDocumentsDeletionQuery ? 'documents/delete' : 'documents/delete-batch';
                      url = "indexes/".concat(this.uid, "/").concat(endpoint);
                      _context23.prev = 3;
                      _context23.next = 6;
                      return this.httpRequest.post(url, params);
                    case 6:
                      task = _context23.sent;
                      return _context23.abrupt("return", new EnqueuedTask(task));
                    case 10:
                      _context23.prev = 10;
                      _context23.t0 = _context23["catch"](3);
                      if (_context23.t0 instanceof MeiliSearchCommunicationError && isDocumentsDeletionQuery) {
                        _context23.t0.message = versionErrorHintMessage(_context23.t0.message, 'deleteDocuments');
                      } else if (_context23.t0 instanceof MeiliSearchApiError) {
                        _context23.t0.message = versionErrorHintMessage(_context23.t0.message, 'deleteDocuments');
                      }
                      throw _context23.t0;
                    case 14:
                    case "end":
                      return _context23.stop();
                  }
                }, _callee23, this, [[3, 10]]);
              }));
            }
            /**
             * Delete all documents of an index
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "deleteAllDocuments",
            value: function deleteAllDocuments() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                  while (1) switch (_context24.prev = _context24.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/documents");
                      _context24.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context24.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context24.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context24.stop();
                  }
                }, _callee24, this);
              }));
            } ///
            /// SETTINGS
            ///

            /**
             * Retrieve all settings
             *
             * @returns Promise containing Settings object
             */
          }, {
            key: "getSettings",
            value: function getSettings() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
                var url;
                return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                  while (1) switch (_context25.prev = _context25.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings");
                      _context25.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context25.abrupt("return", _context25.sent);
                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }, _callee25, this);
              }));
            }
            /**
             * Update all settings Any parameters not provided will be left unchanged.
             *
             * @param settings - Object containing parameters with their updated values
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateSettings",
            value: function updateSettings(settings) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                  while (1) switch (_context26.prev = _context26.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings");
                      _context26.next = 3;
                      return this.httpRequest.patch(url, settings);
                    case 3:
                      task = _context26.sent;
                      task.enqueued = new Date(task.enqueuedAt);
                      return _context26.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context26.stop();
                  }
                }, _callee26, this);
              }));
            }
            /**
             * Reset settings.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetSettings",
            value: function resetSettings() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                  while (1) switch (_context27.prev = _context27.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings");
                      _context27.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context27.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context27.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context27.stop();
                  }
                }, _callee27, this);
              }));
            } ///
            /// PAGINATION SETTINGS
            ///

            /**
             * Get the pagination settings.
             *
             * @returns Promise containing object of pagination settings
             */
          }, {
            key: "getPagination",
            value: function getPagination() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
                var url;
                return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                  while (1) switch (_context28.prev = _context28.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/pagination");
                      _context28.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context28.abrupt("return", _context28.sent);
                    case 4:
                    case "end":
                      return _context28.stop();
                  }
                }, _callee28, this);
              }));
            }
            /**
             * Update the pagination settings.
             *
             * @param pagination - Pagination object
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updatePagination",
            value: function updatePagination(pagination) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                  while (1) switch (_context29.prev = _context29.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/pagination");
                      _context29.next = 3;
                      return this.httpRequest.patch(url, pagination);
                    case 3:
                      task = _context29.sent;
                      return _context29.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context29.stop();
                  }
                }, _callee29, this);
              }));
            }
            /**
             * Reset the pagination settings.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetPagination",
            value: function resetPagination() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                  while (1) switch (_context30.prev = _context30.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/pagination");
                      _context30.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context30.sent;
                      return _context30.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }, _callee30, this);
              }));
            } ///
            /// SYNONYMS
            ///

            /**
             * Get the list of all synonyms
             *
             * @returns Promise containing object of synonym mappings
             */
          }, {
            key: "getSynonyms",
            value: function getSynonyms() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
                var url;
                return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                  while (1) switch (_context31.prev = _context31.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/synonyms");
                      _context31.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context31.abrupt("return", _context31.sent);
                    case 4:
                    case "end":
                      return _context31.stop();
                  }
                }, _callee31, this);
              }));
            }
            /**
             * Update the list of synonyms. Overwrite the old list.
             *
             * @param synonyms - Mapping of synonyms with their associated words
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateSynonyms",
            value: function updateSynonyms(synonyms) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                  while (1) switch (_context32.prev = _context32.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/synonyms");
                      _context32.next = 3;
                      return this.httpRequest.put(url, synonyms);
                    case 3:
                      task = _context32.sent;
                      return _context32.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context32.stop();
                  }
                }, _callee32, this);
              }));
            }
            /**
             * Reset the synonym list to be empty again
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetSynonyms",
            value: function resetSynonyms() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                  while (1) switch (_context33.prev = _context33.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/synonyms");
                      _context33.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context33.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context33.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context33.stop();
                  }
                }, _callee33, this);
              }));
            } ///
            /// STOP WORDS
            ///

            /**
             * Get the list of all stop-words
             *
             * @returns Promise containing array of stop-words
             */
          }, {
            key: "getStopWords",
            value: function getStopWords() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
                var url;
                return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                  while (1) switch (_context34.prev = _context34.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/stop-words");
                      _context34.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context34.abrupt("return", _context34.sent);
                    case 4:
                    case "end":
                      return _context34.stop();
                  }
                }, _callee34, this);
              }));
            }
            /**
             * Update the list of stop-words. Overwrite the old list.
             *
             * @param stopWords - Array of strings that contains the stop-words.
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateStopWords",
            value: function updateStopWords(stopWords) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                  while (1) switch (_context35.prev = _context35.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/stop-words");
                      _context35.next = 3;
                      return this.httpRequest.put(url, stopWords);
                    case 3:
                      task = _context35.sent;
                      return _context35.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context35.stop();
                  }
                }, _callee35, this);
              }));
            }
            /**
             * Reset the stop-words list to be empty again
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetStopWords",
            value: function resetStopWords() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                  while (1) switch (_context36.prev = _context36.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/stop-words");
                      _context36.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context36.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context36.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context36.stop();
                  }
                }, _callee36, this);
              }));
            } ///
            /// RANKING RULES
            ///

            /**
             * Get the list of all ranking-rules
             *
             * @returns Promise containing array of ranking-rules
             */
          }, {
            key: "getRankingRules",
            value: function getRankingRules() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
                var url;
                return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                  while (1) switch (_context37.prev = _context37.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                      _context37.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context37.abrupt("return", _context37.sent);
                    case 4:
                    case "end":
                      return _context37.stop();
                  }
                }, _callee37, this);
              }));
            }
            /**
             * Update the list of ranking-rules. Overwrite the old list.
             *
             * @param rankingRules - Array that contain ranking rules sorted by order of
             *   importance.
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateRankingRules",
            value: function updateRankingRules(rankingRules) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                  while (1) switch (_context38.prev = _context38.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                      _context38.next = 3;
                      return this.httpRequest.put(url, rankingRules);
                    case 3:
                      task = _context38.sent;
                      return _context38.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context38.stop();
                  }
                }, _callee38, this);
              }));
            }
            /**
             * Reset the ranking rules list to its default value
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetRankingRules",
            value: function resetRankingRules() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                  while (1) switch (_context39.prev = _context39.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                      _context39.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context39.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context39.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context39.stop();
                  }
                }, _callee39, this);
              }));
            } ///
            /// DISTINCT ATTRIBUTE
            ///

            /**
             * Get the distinct-attribute
             *
             * @returns Promise containing the distinct-attribute of the index
             */
          }, {
            key: "getDistinctAttribute",
            value: function getDistinctAttribute() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
                var url;
                return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                  while (1) switch (_context40.prev = _context40.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                      _context40.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context40.abrupt("return", _context40.sent);
                    case 4:
                    case "end":
                      return _context40.stop();
                  }
                }, _callee40, this);
              }));
            }
            /**
             * Update the distinct-attribute.
             *
             * @param distinctAttribute - Field name of the distinct-attribute
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateDistinctAttribute",
            value: function updateDistinctAttribute(distinctAttribute) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                  while (1) switch (_context41.prev = _context41.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                      _context41.next = 3;
                      return this.httpRequest.put(url, distinctAttribute);
                    case 3:
                      task = _context41.sent;
                      return _context41.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }, _callee41, this);
              }));
            }
            /**
             * Reset the distinct-attribute.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetDistinctAttribute",
            value: function resetDistinctAttribute() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                  while (1) switch (_context42.prev = _context42.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                      _context42.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context42.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context42.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context42.stop();
                  }
                }, _callee42, this);
              }));
            } ///
            /// FILTERABLE ATTRIBUTES
            ///

            /**
             * Get the filterable-attributes
             *
             * @returns Promise containing an array of filterable-attributes
             */
          }, {
            key: "getFilterableAttributes",
            value: function getFilterableAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
                var url;
                return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                  while (1) switch (_context43.prev = _context43.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                      _context43.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context43.abrupt("return", _context43.sent);
                    case 4:
                    case "end":
                      return _context43.stop();
                  }
                }, _callee43, this);
              }));
            }
            /**
             * Update the filterable-attributes.
             *
             * @param filterableAttributes - Array of strings containing the attributes
             *   that can be used as filters at query time
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateFilterableAttributes",
            value: function updateFilterableAttributes(filterableAttributes) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                  while (1) switch (_context44.prev = _context44.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                      _context44.next = 3;
                      return this.httpRequest.put(url, filterableAttributes);
                    case 3:
                      task = _context44.sent;
                      return _context44.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context44.stop();
                  }
                }, _callee44, this);
              }));
            }
            /**
             * Reset the filterable-attributes.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetFilterableAttributes",
            value: function resetFilterableAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                  while (1) switch (_context45.prev = _context45.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                      _context45.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context45.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context45.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context45.stop();
                  }
                }, _callee45, this);
              }));
            } ///
            /// SORTABLE ATTRIBUTES
            ///

            /**
             * Get the sortable-attributes
             *
             * @returns Promise containing array of sortable-attributes
             */
          }, {
            key: "getSortableAttributes",
            value: function getSortableAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
                var url;
                return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                  while (1) switch (_context46.prev = _context46.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                      _context46.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context46.abrupt("return", _context46.sent);
                    case 4:
                    case "end":
                      return _context46.stop();
                  }
                }, _callee46, this);
              }));
            }
            /**
             * Update the sortable-attributes.
             *
             * @param sortableAttributes - Array of strings containing the attributes that
             *   can be used to sort search results at query time
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateSortableAttributes",
            value: function updateSortableAttributes(sortableAttributes) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                  while (1) switch (_context47.prev = _context47.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                      _context47.next = 3;
                      return this.httpRequest.put(url, sortableAttributes);
                    case 3:
                      task = _context47.sent;
                      return _context47.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context47.stop();
                  }
                }, _callee47, this);
              }));
            }
            /**
             * Reset the sortable-attributes.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetSortableAttributes",
            value: function resetSortableAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                  while (1) switch (_context48.prev = _context48.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                      _context48.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context48.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context48.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context48.stop();
                  }
                }, _callee48, this);
              }));
            } ///
            /// SEARCHABLE ATTRIBUTE
            ///

            /**
             * Get the searchable-attributes
             *
             * @returns Promise containing array of searchable-attributes
             */
          }, {
            key: "getSearchableAttributes",
            value: function getSearchableAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
                var url;
                return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                  while (1) switch (_context49.prev = _context49.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                      _context49.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context49.abrupt("return", _context49.sent);
                    case 4:
                    case "end":
                      return _context49.stop();
                  }
                }, _callee49, this);
              }));
            }
            /**
             * Update the searchable-attributes.
             *
             * @param searchableAttributes - Array of strings that contains searchable
             *   attributes sorted by order of importance(most to least important)
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateSearchableAttributes",
            value: function updateSearchableAttributes(searchableAttributes) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                  while (1) switch (_context50.prev = _context50.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                      _context50.next = 3;
                      return this.httpRequest.put(url, searchableAttributes);
                    case 3:
                      task = _context50.sent;
                      return _context50.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context50.stop();
                  }
                }, _callee50, this);
              }));
            }
            /**
             * Reset the searchable-attributes.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetSearchableAttributes",
            value: function resetSearchableAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                  while (1) switch (_context51.prev = _context51.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                      _context51.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context51.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context51.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context51.stop();
                  }
                }, _callee51, this);
              }));
            } ///
            /// DISPLAYED ATTRIBUTE
            ///

            /**
             * Get the displayed-attributes
             *
             * @returns Promise containing array of displayed-attributes
             */
          }, {
            key: "getDisplayedAttributes",
            value: function getDisplayedAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
                var url;
                return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                  while (1) switch (_context52.prev = _context52.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                      _context52.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context52.abrupt("return", _context52.sent);
                    case 4:
                    case "end":
                      return _context52.stop();
                  }
                }, _callee52, this);
              }));
            }
            /**
             * Update the displayed-attributes.
             *
             * @param displayedAttributes - Array of strings that contains attributes of
             *   an index to display
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateDisplayedAttributes",
            value: function updateDisplayedAttributes(displayedAttributes) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                  while (1) switch (_context53.prev = _context53.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                      _context53.next = 3;
                      return this.httpRequest.put(url, displayedAttributes);
                    case 3:
                      task = _context53.sent;
                      return _context53.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context53.stop();
                  }
                }, _callee53, this);
              }));
            }
            /**
             * Reset the displayed-attributes.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetDisplayedAttributes",
            value: function resetDisplayedAttributes() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                  while (1) switch (_context54.prev = _context54.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                      _context54.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context54.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context54.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context54.stop();
                  }
                }, _callee54, this);
              }));
            } ///
            /// TYPO TOLERANCE
            ///

            /**
             * Get the typo tolerance settings.
             *
             * @returns Promise containing the typo tolerance settings.
             */
          }, {
            key: "getTypoTolerance",
            value: function getTypoTolerance() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
                var url;
                return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                  while (1) switch (_context55.prev = _context55.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                      _context55.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context55.abrupt("return", _context55.sent);
                    case 4:
                    case "end":
                      return _context55.stop();
                  }
                }, _callee55, this);
              }));
            }
            /**
             * Update the typo tolerance settings.
             *
             * @param typoTolerance - Object containing the custom typo tolerance
             *   settings.
             * @returns Promise containing object of the enqueued update
             */
          }, {
            key: "updateTypoTolerance",
            value: function updateTypoTolerance(typoTolerance) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                  while (1) switch (_context56.prev = _context56.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                      _context56.next = 3;
                      return this.httpRequest.patch(url, typoTolerance);
                    case 3:
                      task = _context56.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context56.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context56.stop();
                  }
                }, _callee56, this);
              }));
            }
            /**
             * Reset the typo tolerance settings.
             *
             * @returns Promise containing object of the enqueued update
             */
          }, {
            key: "resetTypoTolerance",
            value: function resetTypoTolerance() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                  while (1) switch (_context57.prev = _context57.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                      _context57.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context57.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context57.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context57.stop();
                  }
                }, _callee57, this);
              }));
            } ///
            /// FACETING
            ///

            /**
             * Get the faceting settings.
             *
             * @returns Promise containing object of faceting index settings
             */
          }, {
            key: "getFaceting",
            value: function getFaceting() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
                var url;
                return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                  while (1) switch (_context58.prev = _context58.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/faceting");
                      _context58.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context58.abrupt("return", _context58.sent);
                    case 4:
                    case "end":
                      return _context58.stop();
                  }
                }, _callee58, this);
              }));
            }
            /**
             * Update the faceting settings.
             *
             * @param faceting - Faceting index settings object
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "updateFaceting",
            value: function updateFaceting(faceting) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                  while (1) switch (_context59.prev = _context59.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/faceting");
                      _context59.next = 3;
                      return this.httpRequest.patch(url, faceting);
                    case 3:
                      task = _context59.sent;
                      return _context59.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context59.stop();
                  }
                }, _callee59, this);
              }));
            }
            /**
             * Reset the faceting settings.
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetFaceting",
            value: function resetFaceting() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                  while (1) switch (_context60.prev = _context60.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/faceting");
                      _context60.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context60.sent;
                      return _context60.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context60.stop();
                  }
                }, _callee60, this);
              }));
            } ///
            /// SEPARATOR TOKENS
            ///

            /**
             * Get the list of all separator tokens.
             *
             * @returns Promise containing array of separator tokens
             */
          }, {
            key: "getSeparatorTokens",
            value: function getSeparatorTokens() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
                var url;
                return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                  while (1) switch (_context61.prev = _context61.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/separator-tokens");
                      _context61.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context61.abrupt("return", _context61.sent);
                    case 4:
                    case "end":
                      return _context61.stop();
                  }
                }, _callee61, this);
              }));
            }
            /**
             * Update the list of separator tokens. Overwrite the old list.
             *
             * @param separatorTokens - Array that contains separator tokens.
             * @returns Promise containing an EnqueuedTask or null
             */
          }, {
            key: "updateSeparatorTokens",
            value: function updateSeparatorTokens(separatorTokens) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                  while (1) switch (_context62.prev = _context62.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/separator-tokens");
                      _context62.next = 3;
                      return this.httpRequest.put(url, separatorTokens);
                    case 3:
                      task = _context62.sent;
                      return _context62.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context62.stop();
                  }
                }, _callee62, this);
              }));
            }
            /**
             * Reset the separator tokens list to its default value
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetSeparatorTokens",
            value: function resetSeparatorTokens() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                  while (1) switch (_context63.prev = _context63.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/separator-tokens");
                      _context63.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context63.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context63.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context63.stop();
                  }
                }, _callee63, this);
              }));
            } ///
            /// NON-SEPARATOR TOKENS
            ///

            /**
             * Get the list of all non-separator tokens.
             *
             * @returns Promise containing array of non-separator tokens
             */
          }, {
            key: "getNonSeparatorTokens",
            value: function getNonSeparatorTokens() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
                var url;
                return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                  while (1) switch (_context64.prev = _context64.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
                      _context64.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context64.abrupt("return", _context64.sent);
                    case 4:
                    case "end":
                      return _context64.stop();
                  }
                }, _callee64, this);
              }));
            }
            /**
             * Update the list of non-separator tokens. Overwrite the old list.
             *
             * @param nonSeparatorTokens - Array that contains non-separator tokens.
             * @returns Promise containing an EnqueuedTask or null
             */
          }, {
            key: "updateNonSeparatorTokens",
            value: function updateNonSeparatorTokens(nonSeparatorTokens) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                  while (1) switch (_context65.prev = _context65.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
                      _context65.next = 3;
                      return this.httpRequest.put(url, nonSeparatorTokens);
                    case 3:
                      task = _context65.sent;
                      return _context65.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context65.stop();
                  }
                }, _callee65, this);
              }));
            }
            /**
             * Reset the non-separator tokens list to its default value
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetNonSeparatorTokens",
            value: function resetNonSeparatorTokens() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                  while (1) switch (_context66.prev = _context66.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
                      _context66.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context66.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context66.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context66.stop();
                  }
                }, _callee66, this);
              }));
            } ///
            /// DICTIONARY
            ///

            /**
             * Get the dictionary settings of a Meilisearch index.
             *
             * @returns Promise containing the dictionary settings
             */
          }, {
            key: "getDictionary",
            value: function getDictionary() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
                var url;
                return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                  while (1) switch (_context67.prev = _context67.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/dictionary");
                      _context67.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context67.abrupt("return", _context67.sent);
                    case 4:
                    case "end":
                      return _context67.stop();
                  }
                }, _callee67, this);
              }));
            }
            /**
             * Update the the dictionary settings. Overwrite the old settings.
             *
             * @param dictionary - Array that contains the new dictionary settings.
             * @returns Promise containing an EnqueuedTask or null
             */
          }, {
            key: "updateDictionary",
            value: function updateDictionary(dictionary) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                  while (1) switch (_context68.prev = _context68.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/dictionary");
                      _context68.next = 3;
                      return this.httpRequest.put(url, dictionary);
                    case 3:
                      task = _context68.sent;
                      return _context68.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context68.stop();
                  }
                }, _callee68, this);
              }));
            }
            /**
             * Reset the dictionary settings to its default value
             *
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "resetDictionary",
            value: function resetDictionary() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                  while (1) switch (_context69.prev = _context69.next) {
                    case 0:
                      url = "indexes/".concat(this.uid, "/settings/dictionary");
                      _context69.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      task = _context69.sent;
                      task.enqueuedAt = new Date(task.enqueuedAt);
                      return _context69.abrupt("return", task);
                    case 6:
                    case "end":
                      return _context69.stop();
                  }
                }, _callee69, this);
              }));
            }
          }], [{
            key: "create",
            value: function create(uid) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var config = arguments.length > 2 ? arguments[2] : undefined;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
                var url, req, task;
                return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                  while (1) switch (_context70.prev = _context70.next) {
                    case 0:
                      url = "indexes";
                      req = new HttpRequests(config);
                      _context70.next = 4;
                      return req.post(url, Object.assign(Object.assign({}, options), {
                        uid: uid
                      }));
                    case 4:
                      task = _context70.sent;
                      return _context70.abrupt("return", new EnqueuedTask(task));
                    case 6:
                    case "end":
                      return _context70.stop();
                  }
                }, _callee70);
              }));
            }
          }]);
          return Index;
        }();

        /*
         * Bundle: MeiliSearch
         * Project: MeiliSearch - Javascript API
         * Author: Quentin de Quelen <quentin@meilisearch.com>
         * Copyright: 2019, MeiliSearch
         */

        var Client = /*#__PURE__*/function () {
          /**
           * Creates new MeiliSearch instance
           *
           * @param config - Configuration object
           */
          function Client(config) {
            _classCallCheck(this, Client);
            this.config = config;
            this.httpRequest = new HttpRequests(config);
            this.tasks = new TaskClient(config);
          }
          /**
           * Return an Index instance
           *
           * @param indexUid - The index UID
           * @returns Instance of Index
           */

          _createClass(Client, [{
            key: "index",
            value: function index(indexUid) {
              return new Index(this.config, indexUid);
            }
            /**
             * Gather information about an index by calling MeiliSearch and return an
             * Index instance with the gathered information
             *
             * @param indexUid - The index UID
             * @returns Promise returning Index instance
             */
          }, {
            key: "getIndex",
            value: function getIndex(indexUid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", new Index(this.config, indexUid).fetchInfo());
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            }
            /**
             * Gather information about an index by calling MeiliSearch and return the raw
             * JSON response
             *
             * @param indexUid - The index UID
             * @returns Promise returning index information
             */
          }, {
            key: "getRawIndex",
            value: function getRawIndex(indexUid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Index(this.config, indexUid).getRawInfo());
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            }
            /**
             * Get all the indexes as Index instances.
             *
             * @param parameters - Parameters to browse the indexes
             * @returns Promise returning array of raw index information
             */
          }, {
            key: "getIndexes",
            value: function getIndexes() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var _this = this;
                var rawIndexes, indexes;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.getRawIndexes(parameters);
                    case 2:
                      rawIndexes = _context3.sent;
                      indexes = rawIndexes.results.map(function (index) {
                        return new Index(_this.config, index.uid, index.primaryKey);
                      });
                      return _context3.abrupt("return", Object.assign(Object.assign({}, rawIndexes), {
                        results: indexes
                      }));
                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
            }
            /**
             * Get all the indexes in their raw value (no Index instances).
             *
             * @param parameters - Parameters to browse the indexes
             * @returns Promise returning array of raw index information
             */
          }, {
            key: "getRawIndexes",
            value: function getRawIndexes() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var url;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      url = "indexes";
                      _context4.next = 3;
                      return this.httpRequest.get(url, parameters);
                    case 3:
                      return _context4.abrupt("return", _context4.sent);
                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, this);
              }));
            }
            /**
             * Create a new index
             *
             * @param uid - The index UID
             * @param options - Index options
             * @returns Promise returning Index instance
             */
          }, {
            key: "createIndex",
            value: function createIndex(uid) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return Index.create(uid, options, this.config);
                    case 2:
                      return _context5.abrupt("return", _context5.sent);
                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, this);
              }));
            }
            /**
             * Update an index
             *
             * @param uid - The index UID
             * @param options - Index options to update
             * @returns Promise returning Index instance after updating
             */
          }, {
            key: "updateIndex",
            value: function updateIndex(uid) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return new Index(this.config, uid).update(options);
                    case 2:
                      return _context6.abrupt("return", _context6.sent);
                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));
            }
            /**
             * Delete an index
             *
             * @param uid - The index UID
             * @returns Promise which resolves when index is deleted successfully
             */
          }, {
            key: "deleteIndex",
            value: function deleteIndex(uid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return new Index(this.config, uid).delete();
                    case 2:
                      return _context7.abrupt("return", _context7.sent);
                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, this);
              }));
            }
            /**
             * Deletes an index if it already exists.
             *
             * @param uid - The index UID
             * @returns Promise which resolves to true when index exists and is deleted
             *   successfully, otherwise false if it does not exist
             */
          }, {
            key: "deleteIndexIfExists",
            value: function deleteIndexIfExists(uid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return this.deleteIndex(uid);
                    case 3:
                      return _context8.abrupt("return", true);
                    case 6:
                      _context8.prev = 6;
                      _context8.t0 = _context8["catch"](0);
                      if (!(_context8.t0.code === "index_not_found"
                      /* ErrorStatusCode.INDEX_NOT_FOUND */)) {
                        _context8.next = 10;
                        break;
                      }
                      return _context8.abrupt("return", false);
                    case 10:
                      throw _context8.t0;
                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8, this, [[0, 6]]);
              }));
            }
            /**
             * Swaps a list of index tuples.
             *
             * @param params - List of indexes tuples to swap.
             * @returns Promise returning object of the enqueued task
             */
          }, {
            key: "swapIndexes",
            value: function swapIndexes(params) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                var url;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      url = '/swap-indexes';
                      _context9.next = 3;
                      return this.httpRequest.post(url, params);
                    case 3:
                      return _context9.abrupt("return", _context9.sent);
                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, this);
              }));
            } ///
            /// Multi Search
            ///

            /**
             * Perform multiple search queries.
             *
             * It is possible to make multiple search queries on the same index or on
             * different ones
             *
             * @example
             *
             * ```ts
             * client.multiSearch({
             *   queries: [
             *     { indexUid: 'movies', q: 'wonder' },
             *     { indexUid: 'books', q: 'flower' },
             *   ],
             * })
             * ```
             *
             * @param queries - Search queries
             * @param config - Additional request configuration options
             * @returns Promise containing the search responses
             */
          }, {
            key: "multiSearch",
            value: function multiSearch(queries, config) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                var url;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      url = "multi-search";
                      _context10.next = 3;
                      return this.httpRequest.post(url, queries, undefined, config);
                    case 3:
                      return _context10.abrupt("return", _context10.sent);
                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, this);
              }));
            } ///
            /// TASKS
            ///

            /**
             * Get the list of all client tasks
             *
             * @param parameters - Parameters to browse the tasks
             * @returns Promise returning all tasks
             */
          }, {
            key: "getTasks",
            value: function getTasks() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.tasks.getTasks(parameters);
                    case 2:
                      return _context11.abrupt("return", _context11.sent);
                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11, this);
              }));
            }
            /**
             * Get one task on the client scope
             *
             * @param taskUid - Task identifier
             * @returns Promise returning a task
             */
          }, {
            key: "getTask",
            value: function getTask(taskUid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.tasks.getTask(taskUid);
                    case 2:
                      return _context12.abrupt("return", _context12.sent);
                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12, this);
              }));
            }
            /**
             * Wait for multiple tasks to be finished.
             *
             * @param taskUids - Tasks identifier
             * @param waitOptions - Options on timeout and interval
             * @returns Promise returning an array of tasks
             */
          }, {
            key: "waitForTasks",
            value: function waitForTasks(taskUids) {
              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref$timeOutMs = _ref.timeOutMs,
                timeOutMs = _ref$timeOutMs === void 0 ? 5000 : _ref$timeOutMs,
                _ref$intervalMs = _ref.intervalMs,
                intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.tasks.waitForTasks(taskUids, {
                        timeOutMs: timeOutMs,
                        intervalMs: intervalMs
                      });
                    case 2:
                      return _context13.abrupt("return", _context13.sent);
                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13, this);
              }));
            }
            /**
             * Wait for a task to be finished.
             *
             * @param taskUid - Task identifier
             * @param waitOptions - Options on timeout and interval
             * @returns Promise returning an array of tasks
             */
          }, {
            key: "waitForTask",
            value: function waitForTask(taskUid) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$timeOutMs = _ref2.timeOutMs,
                timeOutMs = _ref2$timeOutMs === void 0 ? 5000 : _ref2$timeOutMs,
                _ref2$intervalMs = _ref2.intervalMs,
                intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.tasks.waitForTask(taskUid, {
                        timeOutMs: timeOutMs,
                        intervalMs: intervalMs
                      });
                    case 2:
                      return _context14.abrupt("return", _context14.sent);
                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14, this);
              }));
            }
            /**
             * Cancel a list of enqueued or processing tasks.
             *
             * @param parameters - Parameters to filter the tasks.
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "cancelTasks",
            value: function cancelTasks(parameters) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.tasks.cancelTasks(parameters);
                    case 2:
                      return _context15.abrupt("return", _context15.sent);
                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this);
              }));
            }
            /**
             * Delete a list of tasks.
             *
             * @param parameters - Parameters to filter the tasks.
             * @returns Promise containing an EnqueuedTask
             */
          }, {
            key: "deleteTasks",
            value: function deleteTasks() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.tasks.deleteTasks(parameters);
                    case 2:
                      return _context16.abrupt("return", _context16.sent);
                    case 3:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16, this);
              }));
            } ///
            /// KEYS
            ///

            /**
             * Get all API keys
             *
             * @param parameters - Parameters to browse the indexes
             * @returns Promise returning an object with keys
             */
          }, {
            key: "getKeys",
            value: function getKeys() {
              var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
                var url, keys;
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      url = "keys";
                      _context17.next = 3;
                      return this.httpRequest.get(url, parameters);
                    case 3:
                      keys = _context17.sent;
                      keys.results = keys.results.map(function (key) {
                        return Object.assign(Object.assign({}, key), {
                          createdAt: new Date(key.createdAt),
                          updatedAt: new Date(key.updatedAt)
                        });
                      });
                      return _context17.abrupt("return", keys);
                    case 6:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee17, this);
              }));
            }
            /**
             * Get one API key
             *
             * @param keyOrUid - Key or uid of the API key
             * @returns Promise returning a key
             */
          }, {
            key: "getKey",
            value: function getKey(keyOrUid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                var url;
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      url = "keys/".concat(keyOrUid);
                      _context18.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context18.abrupt("return", _context18.sent);
                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18, this);
              }));
            }
            /**
             * Create one API key
             *
             * @param options - Key options
             * @returns Promise returning a key
             */
          }, {
            key: "createKey",
            value: function createKey(options) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                var url;
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      url = "keys";
                      _context19.next = 3;
                      return this.httpRequest.post(url, options);
                    case 3:
                      return _context19.abrupt("return", _context19.sent);
                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee19, this);
              }));
            }
            /**
             * Update one API key
             *
             * @param keyOrUid - Key
             * @param options - Key options
             * @returns Promise returning a key
             */
          }, {
            key: "updateKey",
            value: function updateKey(keyOrUid, options) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                var url;
                return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                  while (1) switch (_context20.prev = _context20.next) {
                    case 0:
                      url = "keys/".concat(keyOrUid);
                      _context20.next = 3;
                      return this.httpRequest.patch(url, options);
                    case 3:
                      return _context20.abrupt("return", _context20.sent);
                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }, _callee20, this);
              }));
            }
            /**
             * Delete one API key
             *
             * @param keyOrUid - Key
             * @returns
             */
          }, {
            key: "deleteKey",
            value: function deleteKey(keyOrUid) {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                var url;
                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      url = "keys/".concat(keyOrUid);
                      _context21.next = 3;
                      return this.httpRequest.delete(url);
                    case 3:
                      return _context21.abrupt("return", _context21.sent);
                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee21, this);
              }));
            } ///
            /// HEALTH
            ///

            /**
             * Checks if the server is healthy, otherwise an error will be thrown.
             *
             * @returns Promise returning an object with health details
             */
          }, {
            key: "health",
            value: function health() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                var url;
                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                  while (1) switch (_context22.prev = _context22.next) {
                    case 0:
                      url = "health";
                      _context22.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context22.abrupt("return", _context22.sent);
                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }, _callee22, this);
              }));
            }
            /**
             * Checks if the server is healthy, return true or false.
             *
             * @returns Promise returning a boolean
             */
          }, {
            key: "isHealthy",
            value: function isHealthy() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
                var url;
                return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                  while (1) switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.prev = 0;
                      url = "health";
                      _context23.next = 4;
                      return this.httpRequest.get(url);
                    case 4:
                      return _context23.abrupt("return", true);
                    case 7:
                      _context23.prev = 7;
                      _context23.t0 = _context23["catch"](0);
                      return _context23.abrupt("return", false);
                    case 10:
                    case "end":
                      return _context23.stop();
                  }
                }, _callee23, this, [[0, 7]]);
              }));
            } ///
            /// STATS
            ///

            /**
             * Get the stats of all the database
             *
             * @returns Promise returning object of all the stats
             */
          }, {
            key: "getStats",
            value: function getStats() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
                var url;
                return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                  while (1) switch (_context24.prev = _context24.next) {
                    case 0:
                      url = "stats";
                      _context24.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context24.abrupt("return", _context24.sent);
                    case 4:
                    case "end":
                      return _context24.stop();
                  }
                }, _callee24, this);
              }));
            } ///
            /// VERSION
            ///

            /**
             * Get the version of MeiliSearch
             *
             * @returns Promise returning object with version details
             */
          }, {
            key: "getVersion",
            value: function getVersion() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
                var url;
                return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                  while (1) switch (_context25.prev = _context25.next) {
                    case 0:
                      url = "version";
                      _context25.next = 3;
                      return this.httpRequest.get(url);
                    case 3:
                      return _context25.abrupt("return", _context25.sent);
                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }, _callee25, this);
              }));
            } ///
            /// DUMPS
            ///

            /**
             * Creates a dump
             *
             * @returns Promise returning object of the enqueued task
             */
          }, {
            key: "createDump",
            value: function createDump() {
              return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                var url, task;
                return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                  while (1) switch (_context26.prev = _context26.next) {
                    case 0:
                      url = "dumps";
                      _context26.next = 3;
                      return this.httpRequest.post(url);
                    case 3:
                      task = _context26.sent;
                      return _context26.abrupt("return", new EnqueuedTask(task));
                    case 5:
                    case "end":
                      return _context26.stop();
                  }
                }, _callee26, this);
              }));
            } ///
            /// TOKENS
            ///

            /**
             * Generate a tenant token
             *
             * @param apiKeyUid - The uid of the api key used as issuer of the token.
             * @param searchRules - Search rules that are applied to every search.
             * @param options - Token options to customize some aspect of the token.
             * @returns The token in JWT format.
             */
          }, {
            key: "generateTenantToken",
            value: function generateTenantToken(_apiKeyUid, _searchRules, _options) {
              var error = new Error();
              throw new Error("Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment \n ".concat(error.stack, "."));
            }
          }]);
          return Client;
        }();
        var MeiliSearch = /*#__PURE__*/function (_Client) {
          _inherits(MeiliSearch, _Client);
          var _super = _createSuper(MeiliSearch);
          function MeiliSearch(config) {
            _classCallCheck(this, MeiliSearch);
            return _super.call(this, config);
          }
          return _createClass(MeiliSearch);
        }(Client);
        exports.ContentTypeEnum = ContentTypeEnum;
        exports.Index = Index;
        exports.MatchingStrategies = MatchingStrategies;
        exports.MeiliSearch = MeiliSearch;
        exports.MeiliSearchApiError = MeiliSearchApiError;
        exports.MeiliSearchCommunicationError = MeiliSearchCommunicationError;
        exports.MeiliSearchError = MeiliSearchError;
        exports.MeiliSearchTimeOutError = MeiliSearchTimeOutError;
        exports["default"] = MeiliSearch;
        exports.httpErrorHandler = httpErrorHandler;
        exports.httpResponseErrorHandler = httpResponseErrorHandler;
        exports.versionErrorHintMessage = versionErrorHintMessage;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
    });

    function isPureObject(data) {
        return typeof data === 'object' && !Array.isArray(data) && data !== null;
    }

    /**
     * Get the configuration of instant meilisearch
     *
     * @param {InstantMeiliSearchOptions} option
     * @returns {InstantMeiliSearchConfig}
     */
    function getInstantMeilisearchConfig(options) {
        var defaultOptions = {
            placeholderSearch: true,
            keepZeroFacets: false,
            clientAgents: [],
            finitePagination: false
        };
        return __assign(__assign({}, defaultOptions), options);
    }
    /**
     * Resolves apiKey if it is a function
     * @param  {string | ApiKeyCallback} apiKey
     * @returns {string} api key value
     */
    function getApiKey(apiKey) {
        // If apiKey is function, call it to get the apiKey
        if (typeof apiKey === 'function') {
            var apiKeyFnValue = apiKey();
            if (typeof apiKeyFnValue !== 'string') {
                throw new TypeError('Provided apiKey function (2nd parameter) did not return a string, expected string');
            }
            return apiKeyFnValue;
        }
        return apiKey;
    }
    /**
     * Validates host and apiKey parameters, throws if invalid
     * @param hostUrl
     * @param apiKey
     */
    function validateInstantMeiliSearchParams(hostUrl, apiKey, instantMeiliSearchOptions) {
        var requestConfig = instantMeiliSearchOptions.requestConfig, httpClient = instantMeiliSearchOptions.httpClient;
        // Validate host url
        if (typeof hostUrl !== 'string') {
            throw new TypeError('Provided hostUrl value (1st parameter) is not a string, expected string');
        }
        // Validate api key
        if (typeof apiKey !== 'string' && typeof apiKey !== 'function') {
            throw new TypeError('Provided apiKey value (2nd parameter) is not a string or a function, expected string or function');
        }
        // Validate requestConfig
        if (requestConfig !== undefined && !isPureObject(requestConfig)) {
            throw new TypeError('Provided requestConfig should be an object');
        }
        // Validate custom HTTP client
        if (httpClient && typeof httpClient !== 'function') {
            throw new TypeError('Provided custom httpClient should be a function');
        }
    }

    /**
     * @param  {ResponseCacher} cache
     */
    function SearchResolver(client, cache) {
        return {
            multiSearch: function (searchQueries, instantSearchPagination) {
                return __awaiter(this, void 0, void 0, function () {
                    var key, cachedResponse, searchResponses, responseWithPagination;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                key = cache.formatKey([searchQueries]);
                                cachedResponse = cache.getEntry(key);
                                // Check if specific request is already cached with its associated search response.
                                if (cachedResponse)
                                    return [2 /*return*/, cachedResponse];
                                return [4 /*yield*/, client.multiSearch({
                                        queries: searchQueries
                                    })];
                            case 1:
                                searchResponses = _a.sent();
                                responseWithPagination = searchResponses.results.map(function (response, index) { return (__assign(__assign({}, response), { 
                                    // TODO: should be removed at one point
                                    pagination: instantSearchPagination[index] || {} })); });
                                // Cache response
                                cache.setEntry(key, responseWithPagination);
                                return [2 /*return*/, responseWithPagination];
                        }
                    });
                });
            }
        };
    }

    function adaptGeoSearch(_a) {
        var insideBoundingBox = _a.insideBoundingBox, aroundLatLng = _a.aroundLatLng, aroundRadius = _a.aroundRadius, minimumAroundRadius = _a.minimumAroundRadius;
        var middlePoint;
        var radius;
        var filter;
        if (aroundLatLng) {
            var _b = aroundLatLng
                .split(',')
                .map(function (pt) { return Number.parseFloat(pt).toFixed(5); }), lat = _b[0], lng = _b[1];
            middlePoint = [lat, lng];
        }
        if (aroundRadius != null || minimumAroundRadius != null) {
            if (aroundRadius === 'all') {
                console.warn('instant-meilisearch is not compatible with the `all` value on the aroundRadius parameter');
            }
            else if (aroundRadius != null) {
                radius = aroundRadius;
            }
            else {
                radius = minimumAroundRadius;
            }
        }
        if (insideBoundingBox && typeof insideBoundingBox === 'string') {
            var _c = insideBoundingBox
                .split(',')
                .map(function (pt) { return parseFloat(pt); }), lat1 = _c[0], lng1 = _c[1], lat2 = _c[2], lng2 = _c[3];
            filter = "_geoBoundingBox([".concat(lat1, ", ").concat(lng1, "], [").concat(lat2, ", ").concat(lng2, "])");
        }
        else if (middlePoint != null && radius != null) {
            var lat = middlePoint[0], lng = middlePoint[1];
            filter = "_geoRadius(".concat(lat, ", ").concat(lng, ", ").concat(radius, ")");
        }
        return filter;
    }

    var filterEscapeRegExp = /([\\"])/g;
    function getValueWithEscapedBackslashesAndQuotes(value) {
        return value.replaceAll(filterEscapeRegExp, '\\$1');
    }
    /**
     * Transform InstantSearch [facet filter](https://www.algolia.com/doc/api-reference/api-parameters/facetFilters/)
     * to Meilisearch compatible filter format.
     * Change sign from `:` to `=`
     * "facet:facetValue" becomes "facet=facetValue"
     *
     * Wrap both the facet and its facet value between quotes.
     * This avoids formatting issues on facets containing multiple words.
     * Escape backslash \\ and quote " characters.
     *
     * 'My facet:My facet value' becomes '"My facet":"My facet value"'
     *
     * @param {string} filter
     * @returns {string}
     */
    function transformFacetFilter(filter) {
        var escapedFilter = getValueWithEscapedBackslashesAndQuotes(filter);
        var colonIndex = escapedFilter.indexOf(':');
        var attribute = escapedFilter.slice(0, colonIndex);
        var value = escapedFilter.slice(colonIndex + 1);
        return "\"".concat(attribute, "\"=\"").concat(value, "\"");
    }
    // Matches first occurrence of an operator
    var numericSplitRegExp = /(?<!(?:[<!>]?=|<|>|:).*)([<!>]?=|<|>|:)/;
    /**
     * Transform InstantSearch [numeric filter](https://www.algolia.com/doc/api-reference/api-parameters/numericFilters/)
     * to Meilisearch compatible filter format.
     *
     * 'price:5.99 TO 100' becomes '"price" 5.99 TO 100'
     *
     * 'price = 5.99' becomes '"price"=5.99'
     *
     * Wrap the attribute between quotes.
     * Escape backslash (\\) and quote (") characters.
     *
     * @param {string} filter
     * @returns {string}
     */
    function transformNumericFilter(filter) {
        // TODO: What if escape facet values is enabled?
        //       https://github.com/algolia/instantsearch/blob/da701529ed325bb7a1d782e80cb994711e20d94a/packages/instantsearch.js/src/lib/utils/escapeFacetValue.ts#L13-L21
        var _a = filter.split(numericSplitRegExp), attribute = _a[0], operator = _a[1], value = _a[2];
        var escapedAttribute = getValueWithEscapedBackslashesAndQuotes(attribute);
        return "\"".concat(escapedAttribute.trim(), "\"").concat(operator === ':' ? ' ' : operator).concat(value.trim());
    }
    /**
     * Iterate over all filters.
     * Return the filters in a Meilisearch compatible format.
     * Can return empty string or empty array, but not an array of empty strings
     * or empty arrays.
     *
     * @param  {(filter: string) => string} transformCallback
     * @param  {SearchContext['facetFilters']} filters
     * @returns {Filter}
     */
    function transformFilters(transformCallback, filters) {
        // Note on `Array.isArray`:
        // https://github.com/microsoft/TypeScript/issues/17002
        // Typescript has problems with readonly, which makes it undesirable in
        // most situations, the crux of the issue being that `Array.isArray`
        // will return true for mutable arrays as well as immutable ones. Since Instantsearch.js
        // decided to use readonly, we have to type cast, while keeping as much of the type
        // safety as possible.
        return typeof filters === 'string'
            ? transformCallback(filters)
            : filters
                .map(function (filter) {
                return (Array.isArray)(filter)
                    ? filter
                        .map(function (nestedFilter) { return transformCallback(nestedFilter); })
                        // TODO: Do these filters have any purpose? Can we actually get empty strings? Should we handle empty strings?
                        //       Maybe handling these should be the responsibility of instantsearch.js and/or the user and their input.
                        //       Instead of these empty filters quietly being swallowed, they might even get us an error message, and
                        //       we might know something is wrong?
                        .filter(function (elem) { return elem !== ''; })
                    : transformCallback(filter);
            })
                // works on strings too, as they're somewhat of an array
                .filter(function (elem) { return elem.length !== 0; });
    }
    /**
     * Return the filter in an array if it is a string
     * If filter is array, return without change.
     *
     * @param  {Filter} [filter]
     * @returns {Array|undefined}
     */
    function nonEmptyFilterToArray(filter) {
        return filter !== undefined && filter.length !== 0
            ? // Filter is a string
                typeof filter === 'string'
                    ? [filter]
                    : // Filter is either a one- or two-dimensional array of strings
                        filter
            : undefined;
    }
    /**
     * Merge filters, transformedNumericFilters and transformedFacetFilters
     * together.
     *
     * @param  {string} filters
     * @param  {Filter} transformedNumericFilters
     * @param  {Filter} transformedFacetFilters
     * @returns {Filter}
     */
    function mergeFilters(filters, transformedNumericFilters, transformedFacetFilters) {
        // TODO: If we are trimming this, shouldn't we trim the other ones too?
        var adaptedFilters = filters === null || filters === void 0 ? void 0 : filters.trim();
        var adaptedNumericFilters = nonEmptyFilterToArray(transformedNumericFilters);
        var adaptedFacetFilters = nonEmptyFilterToArray(transformedFacetFilters);
        var adaptedFilter = [];
        if (adaptedFilters !== undefined && adaptedFilters !== '') {
            adaptedFilter.push(adaptedFilters);
        }
        if (adaptedNumericFilters !== undefined) {
            adaptedFilter.push.apply(adaptedFilter, adaptedNumericFilters);
        }
        if (adaptedFacetFilters !== undefined) {
            adaptedFilter.push.apply(adaptedFilter, adaptedFacetFilters);
        }
        return adaptedFilter;
    }
    /**
     * Adapt instantsearch.js filters to Meilisearch filters by
     * combining and transforming all provided filters.
     *
     * @param  {string|undefined} filters
     * @param  {SearchContext['numericFilters']} numericFilters
     * @param  {SearchContext['facetFilters']} facetFilters
     * @returns {Filter}
     */
    function adaptFilters(filters, numericFilters, facetFilters) {
        var transformedNumericFilters = numericFilters !== undefined
            ? transformFilters(transformNumericFilter, numericFilters)
            : numericFilters;
        var transformedFacetFilters = facetFilters !== undefined
            ? transformFilters(transformFacetFilter, facetFilters)
            : facetFilters;
        return mergeFilters(filters, transformedNumericFilters, transformedFacetFilters);
    }

    function isPaginationRequired(filter, query, placeholderSearch) {
        // To disable pagination:
        // placeholderSearch must be disabled
        // The search query must be empty
        // There must be no filters
        return !(!placeholderSearch && !query && (!filter || filter.length === 0));
    }
    function setScrollPagination(pagination, paginationRequired) {
        var page = pagination.page, hitsPerPage = pagination.hitsPerPage;
        if (!paginationRequired) {
            return {
                limit: 0,
                offset: 0
            };
        }
        return {
            limit: hitsPerPage + 1,
            offset: page * hitsPerPage
        };
    }
    function setFinitePagination(pagination, paginationRequired) {
        var page = pagination.page, hitsPerPage = pagination.hitsPerPage;
        if (!paginationRequired) {
            return {
                hitsPerPage: 0,
                page: page + 1
            };
        }
        else {
            return {
                hitsPerPage: hitsPerPage,
                page: page + 1
            };
        }
    }
    /**
     * Adapts instantsearch.js and instant-meilisearch options
     * to meilisearch search query parameters.
     *
     * @param  {SearchContext} searchContext
     */
    function MeiliParamsCreator(searchContext) {
        var query = searchContext.query, indexUid = searchContext.indexUid, facets = searchContext.facets, attributesToSnippet = searchContext.attributesToSnippet, snippetEllipsisText = searchContext.snippetEllipsisText, filters = searchContext.filters, numericFilters = searchContext.numericFilters, facetFilters = searchContext.facetFilters, attributesToRetrieve = searchContext.attributesToRetrieve, attributesToHighlight = searchContext.attributesToHighlight, highlightPreTag = searchContext.highlightPreTag, highlightPostTag = searchContext.highlightPostTag, placeholderSearch = searchContext.placeholderSearch, pagination = searchContext.pagination, sort = searchContext.sort, restrictSearchableAttributes = searchContext.restrictSearchableAttributes, overrideParams = searchContext.meiliSearchParams;
        var meiliSearchParams = { indexUid: indexUid };
        var meilisearchFilters = adaptFilters(filters, numericFilters, facetFilters);
        return {
            getParams: function () {
                return meiliSearchParams;
            },
            addQuery: function () {
                meiliSearchParams.q = query;
            },
            addFacets: function () {
                var value = facets;
                if (value !== undefined) {
                    // despite Instantsearch.js typing it as `string[]`,
                    // it still can send `string`
                    meiliSearchParams.facets = typeof value === 'string' ? [value] : value;
                }
            },
            addAttributesToCrop: function () {
                var _a;
                var value = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToCrop) !== null && _a !== void 0 ? _a : attributesToSnippet;
                if (value !== undefined) {
                    meiliSearchParams.attributesToCrop = value;
                }
            },
            addCropLength: function () {
                var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.cropLength;
                if (value !== undefined) {
                    meiliSearchParams.cropLength = value;
                }
            },
            addCropMarker: function () {
                var _a;
                var value = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.cropMarker) !== null && _a !== void 0 ? _a : snippetEllipsisText;
                if (value !== undefined) {
                    meiliSearchParams.cropMarker = value;
                }
            },
            addFilters: function () {
                if (meilisearchFilters.length) {
                    meiliSearchParams.filter = meilisearchFilters;
                }
            },
            addAttributesToRetrieve: function () {
                var _a;
                var value = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToRetrieve) !== null && _a !== void 0 ? _a : attributesToRetrieve;
                if (value !== undefined) {
                    meiliSearchParams.attributesToRetrieve = value;
                }
            },
            addAttributesToHighlight: function () {
                var _a, _b;
                meiliSearchParams.attributesToHighlight =
                    (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToHighlight) !== null && _a !== void 0 ? _a : attributesToHighlight) !== null && _b !== void 0 ? _b : ['*'];
            },
            addPreTag: function () {
                var _a, _b;
                meiliSearchParams.highlightPreTag =
                    (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.highlightPreTag) !== null && _a !== void 0 ? _a : highlightPreTag) !== null && _b !== void 0 ? _b : '__ais-highlight__';
            },
            addPostTag: function () {
                var _a, _b;
                meiliSearchParams.highlightPostTag =
                    (_b = (_a = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.highlightPostTag) !== null && _a !== void 0 ? _a : highlightPostTag) !== null && _b !== void 0 ? _b : '__/ais-highlight__';
            },
            addPagination: function () {
                var paginationRequired = isPaginationRequired(meilisearchFilters, query, placeholderSearch);
                if (pagination.finite) {
                    var _a = setFinitePagination(pagination, paginationRequired), hitsPerPage = _a.hitsPerPage, page = _a.page;
                    meiliSearchParams.hitsPerPage = hitsPerPage;
                    meiliSearchParams.page = page;
                }
                else {
                    var _b = setScrollPagination(pagination, paginationRequired), limit = _b.limit, offset = _b.offset;
                    meiliSearchParams.limit = limit;
                    meiliSearchParams.offset = offset;
                }
            },
            addSort: function () {
                if (sort === null || sort === void 0 ? void 0 : sort.length) {
                    meiliSearchParams.sort = Array.isArray(sort) ? sort : [sort];
                }
            },
            addGeoSearchFilter: function () {
                var insideBoundingBox = searchContext.insideBoundingBox, aroundLatLng = searchContext.aroundLatLng, aroundRadius = searchContext.aroundRadius, minimumAroundRadius = searchContext.minimumAroundRadius;
                var filter = adaptGeoSearch({
                    insideBoundingBox: insideBoundingBox,
                    aroundLatLng: aroundLatLng,
                    aroundRadius: aroundRadius,
                    minimumAroundRadius: minimumAroundRadius
                });
                if (filter !== undefined) {
                    if (Array.isArray(meiliSearchParams.filter)) {
                        meiliSearchParams.filter.unshift(filter);
                    }
                    else {
                        meiliSearchParams.filter = [filter];
                    }
                }
            },
            addShowMatchesPosition: function () {
                var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.showMatchesPosition;
                if (value !== undefined) {
                    meiliSearchParams.showMatchesPosition = value;
                }
            },
            addMatchingStrategy: function () {
                var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.matchingStrategy;
                if (value !== undefined) {
                    meiliSearchParams.matchingStrategy = value;
                }
            },
            addShowRankingScore: function () {
                var value = overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.showRankingScore;
                if (value !== undefined) {
                    meiliSearchParams.showRankingScore = value;
                }
            },
            addAttributesToSearchOn: function () {
                var value = (overrideParams === null || overrideParams === void 0 ? void 0 : overrideParams.attributesToSearchOn) !== undefined
                    ? overrideParams.attributesToSearchOn
                    : (restrictSearchableAttributes);
                if (value !== undefined) {
                    meiliSearchParams.attributesToSearchOn = value;
                }
            }
        };
    }
    /**
     * Adapt search request from instantsearch.js
     * to search request compliant with Meilisearch
     *
     * @param  {SearchContext} searchContext
     * @returns {MeiliSearchMultiSearchParams}
     */
    function adaptSearchParams(searchContext) {
        var meilisearchParams = MeiliParamsCreator(searchContext);
        meilisearchParams.addQuery();
        meilisearchParams.addFacets();
        meilisearchParams.addAttributesToCrop();
        meilisearchParams.addCropLength();
        meilisearchParams.addCropMarker();
        meilisearchParams.addFilters();
        meilisearchParams.addAttributesToRetrieve();
        meilisearchParams.addAttributesToHighlight();
        meilisearchParams.addPreTag();
        meilisearchParams.addPostTag();
        meilisearchParams.addPagination();
        meilisearchParams.addSort();
        meilisearchParams.addGeoSearchFilter();
        meilisearchParams.addShowMatchesPosition();
        meilisearchParams.addMatchingStrategy();
        meilisearchParams.addShowRankingScore();
        meilisearchParams.addAttributesToSearchOn();
        return meilisearchParams.getParams();
    }

    function removeDuplicate(key) {
        var indexes = [];
        return function (object) {
            if (indexes.includes(object[key])) {
                return false;
            }
            indexes.push(object[key]);
            return true;
        };
    }

    /**
     * @param  {any} str
     * @returns {boolean}
     */
    /**
     * @param  {any[]} arr
     * @returns {string}
     */
    function stringifyArray(arr) {
        return arr.reduce(function (acc, curr) {
            return (acc += JSON.stringify(curr));
        }, '');
    }

    /**
     * Stringify values following instantsearch practices.
     *
     * @param  {any} value - value that needs to be stringified
     */
    function stringifyValue(value) {
        if (typeof value === 'string') {
            // String
            return value;
        }
        else if (value === undefined) {
            // undefined
            return JSON.stringify(null);
        }
        else {
            return JSON.stringify(value);
        }
    }
    /**
     * Recursif function wrap the deepest possible value
     * the following way: { value: "xx" }.
     *
     * For example:
     *
     * {
     * "rootField": { "value": "x" }
     * "nestedField": { child: { value: "y" } }
     * }
     *
     * recursivity continues until the value is not an array or an object.
     *
     * @param  {any} value - value of a field
     *
     * @returns Record<string, any>
     */
    function wrapValue(value) {
        if (Array.isArray(value)) {
            // Array
            return value.map(function (elem) { return wrapValue(elem); });
        }
        else if (isPureObject(value)) {
            // Object
            return Object.keys(value).reduce(function (nested, key) {
                nested[key] = wrapValue(value[key]);
                return nested;
            }, {});
        }
        else {
            return { value: stringifyValue(value) };
        }
    }
    /**
     * Adapt Meilisearch formatted fields to a format compliant to instantsearch.js.
     *
     * @param  {Record<string} formattedHit
     * @param  {SearchContext} searchContext
     * @returns {Record}
     */
    function adaptFormattedFields(hit) {
        if (!hit)
            return {};
        var _formattedResult = wrapValue(hit);
        var highlightedHit = {
            // We could not determine what the differences are between those two fields.
            _highlightResult: _formattedResult,
            _snippetResult: _formattedResult
        };
        return highlightedHit;
    }

    /**
     * @param  {any[]} hits
     * @returns {Array<Record<string, any>>}
     */
    function adaptGeoResponse(hits) {
        var _a;
        for (var i = 0; i < hits.length; i++) {
            var objectID = "".concat(i + Math.random() * 1000000);
            if (hits[i]._geo) {
                hits[i]._geoloc = hits[i]._geo;
                hits[i].objectID = objectID;
            }
            if ((_a = hits[i]._formatted) === null || _a === void 0 ? void 0 : _a._geo) {
                hits[i]._formatted._geoloc = hits[i]._formatted._geo;
                hits[i]._formatted.objectID = objectID;
            }
        }
        return hits;
    }

    /**
     * @param  {MeilisearchMultiSearchResult} searchResult
     * @param  {SearchContext} searchContext
     * @returns {Array<Record<string, any>>}
     */
    function adaptHits(searchResponse, config) {
        var hits = searchResponse.hits;
        var hitsPerPage = searchResponse.pagination.hitsPerPage;
        var finitePagination = config.finitePagination, primaryKey = config.primaryKey; // Needs: finite, hitsPerPage
        // if the length of the hits is bigger than the hitsPerPage
        // It means that there is still pages to come as we append limit by hitsPerPage + 1
        // In which case we still need to remove the additional hit returned by Meilisearch
        if (!finitePagination && hits.length > hitsPerPage) {
            hits.splice(hits.length - 1, 1);
        }
        var adaptedHits = hits.map(function (hit) {
            // Creates Hit object compliant with InstantSearch
            if (Object.keys(hit).length > 0) {
                var formattedHit = hit._formatted; hit._matchesPosition; var documentFields = __rest(hit, ["_formatted", "_matchesPosition"]);
                var adaptedHit = Object.assign(documentFields, adaptFormattedFields(formattedHit));
                if (primaryKey) {
                    adaptedHit.objectID = hit[primaryKey];
                }
                return adaptedHit;
            }
            return hit;
        });
        adaptedHits = adaptGeoResponse(adaptedHits);
        return adaptedHits;
    }

    function adaptTotalHits(searchResponse) {
        var _a = searchResponse.hitsPerPage, hitsPerPage = _a === void 0 ? 0 : _a, _b = searchResponse.totalPages, totalPages = _b === void 0 ? 0 : _b, estimatedTotalHits = searchResponse.estimatedTotalHits, totalHits = searchResponse.totalHits;
        if (estimatedTotalHits != null) {
            return estimatedTotalHits;
        }
        else if (totalHits != null) {
            return totalHits;
        }
        // Should not happen but safeguarding just in case
        return hitsPerPage * totalPages;
    }

    function adaptNbPages(searchResponse, hitsPerPage) {
        if (searchResponse.totalPages != null) {
            return searchResponse.totalPages;
        }
        // Avoid dividing by 0
        if (hitsPerPage === 0) {
            return 0;
        }
        var _a = searchResponse.limit, limit = _a === void 0 ? 20 : _a, _b = searchResponse.offset, offset = _b === void 0 ? 0 : _b, hits = searchResponse.hits;
        var additionalPage = hits.length >= limit ? 1 : 0;
        return offset / hitsPerPage + 1 + additionalPage;
    }
    function adaptPaginationParameters(searchResponse, paginationState) {
        var hitsPerPage = paginationState.hitsPerPage, page = paginationState.page;
        var nbPages = adaptNbPages(searchResponse, hitsPerPage);
        return {
            page: page,
            nbPages: nbPages,
            hitsPerPage: hitsPerPage
        };
    }

    function getFacetNames(facets) {
        if (!facets)
            return [];
        else if (typeof facets === 'string')
            return [facets];
        return facets;
    }
    // Fills the missing facetValue in the current facet distribution if `keepZeroFacet` is true
    // using the initial facet distribution. Ex:
    //
    // Initial distribution: { genres: { horror: 10, comedy: 4 } }
    // Current distribution: { genres: { horror: 3 }}
    // Returned distribution: { genres: { horror: 3, comedy: 0 }}
    function fillMissingFacetValues(facets, initialFacetDistribution, facetDistribution) {
        var facetNames = getFacetNames(facets);
        var filledDistribution = {};
        for (var _i = 0, facetNames_1 = facetNames; _i < facetNames_1.length; _i++) {
            var facet = facetNames_1[_i];
            for (var facetValue in initialFacetDistribution[facet]) {
                if (!filledDistribution[facet]) {
                    // initialize sub object
                    filledDistribution[facet] = facetDistribution[facet] || {};
                }
                if (!filledDistribution[facet][facetValue]) {
                    filledDistribution[facet][facetValue] = 0;
                }
                else {
                    filledDistribution[facet][facetValue] =
                        facetDistribution[facet][facetValue];
                }
            }
        }
        return filledDistribution;
    }
    function adaptFacetDistribution(keepZeroFacets, facets, initialFacetDistribution, facetDistribution) {
        if (keepZeroFacets) {
            facetDistribution = facetDistribution || {};
            return fillMissingFacetValues(facets, initialFacetDistribution, facetDistribution);
        }
        return facetDistribution;
    }

    function adaptFacetStats(meiliFacetStats) {
        var facetStats = Object.keys(meiliFacetStats).reduce(function (stats, facet) {
            stats[facet] = __assign(__assign({}, meiliFacetStats[facet]), { avg: 0, sum: 0 }); // Set at 0 as these numbers are not provided by Meilisearch
            return stats;
        }, {});
        return facetStats;
    }

    /**
     * Adapt multiple search results from Meilisearch
     * to search results compliant with instantsearch.js
     *
     * @param  {Array<MeilisearchMultiSearchResult<T>>} searchResponse
     * @param  {Record<string, FacetDistribution>} initialFacetDistribution
     * @param  {InstantMeiliSearchConfig} config
     * @returns {{ results: Array<AlgoliaSearchResponse<T>> }}
     */
    function adaptSearchResults(meilisearchResults, initialFacetDistribution, config) {
        var instantSearchResult = meilisearchResults.map(function (meilisearchResult) {
            return adaptSearchResult(meilisearchResult, initialFacetDistribution[meilisearchResult.indexUid], config);
        });
        return { results: instantSearchResult };
    }
    /**
     * Adapt search result from Meilisearch
     * to search result compliant with instantsearch.js
     *
     * @param  {MeilisearchMultiSearchResult<Record<string>>} searchResponse
     * @param  {Record<string, FacetDistribution>} initialFacetDistribution
     * @param  {InstantMeiliSearchConfig} config
     * @returns {AlgoliaSearchResponse<T>}
     */
    function adaptSearchResult(meiliSearchResult, initialFacetDistribution, config) {
        var processingTimeMs = meiliSearchResult.processingTimeMs, query = meiliSearchResult.query, indexUid = meiliSearchResult.indexUid, _a = meiliSearchResult.facetDistribution, responseFacetDistribution = _a === void 0 ? {} : _a, _b = meiliSearchResult.facetStats, facetStats = _b === void 0 ? {} : _b;
        var facets = Object.keys(responseFacetDistribution);
        var _c = adaptPaginationParameters(meiliSearchResult, meiliSearchResult.pagination), hitsPerPage = _c.hitsPerPage, page = _c.page, nbPages = _c.nbPages;
        var hits = adaptHits(meiliSearchResult, config);
        var nbHits = adaptTotalHits(meiliSearchResult);
        var facetDistribution = adaptFacetDistribution(config.keepZeroFacets, facets, initialFacetDistribution, responseFacetDistribution);
        // Create result object compliant with InstantSearch
        var adaptedSearchResult = {
            index: indexUid,
            hitsPerPage: hitsPerPage,
            page: page,
            facets: facetDistribution,
            nbPages: nbPages,
            nbHits: nbHits,
            processingTimeMS: processingTimeMs,
            query: query,
            hits: hits,
            params: '',
            exhaustiveNbHits: false,
            facets_stats: adaptFacetStats(facetStats)
        };
        return adaptedSearchResult;
    }

    /**
     * Split sort string into an array.
     *
     * Example:
     * '_geoPoint(37.8153, -122.4784):asc,title:asc,description:desc'
     *
     * becomes:
     * [
     * '_geoPoint(37.8153, -122.4784):asc',
     * 'title:asc',
     * 'description:desc',
     * ]
     *
     * @param {string} sortStr
     * @returns {string[]}
     */
    function splitSortString(sortStr) {
        if (!sortStr)
            return [];
        var sortRules = sortStr.split(/,(?=\w+:(?:asc|desc))/);
        return sortRules;
    }

    /**
     * Create the current state of the pagination
     *
     * @param  {boolean} [finite]
     * @param  {number} [hitsPerPage]
     * @param  {number} [page]
     * @returns {SearchContext}
     */
    function createPaginationState(finite, hitsPerPage, page) {
        return {
            hitsPerPage: hitsPerPage === undefined ? 20 : hitsPerPage,
            page: page || 0,
            finite: !!finite
        };
    }

    function separateIndexFromSortRules(indexName) {
        var colonIndex = indexName.indexOf(':');
        if (colonIndex === -1) {
            return {
                indexUid: indexName,
                sortBy: ''
            };
        }
        return {
            indexUid: indexName.substring(0, colonIndex),
            sortBy: indexName.substring(colonIndex + 1)
        };
    }
    /**
     * @param  {AlgoliaMultipleQueriesQuery} searchRequest
     * @param  {Context} options
     * @returns {SearchContext}
     */
    function createSearchContext(searchRequest, options) {
        var query = searchRequest.query, indexName = searchRequest.indexName, instantSearchParams = searchRequest.params;
        // Split index name and possible sorting rules
        var _a = separateIndexFromSortRules(indexName), indexUid = _a.indexUid, sortBy = _a.sortBy;
        var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
        var searchContext = __assign(__assign(__assign(__assign({}, options), { query: query }), instantSearchParams), { sort: splitSortString(sortBy), indexUid: indexUid, pagination: paginationState, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets });
        return searchContext;
    }
    /**
     * @param  {AlgoliaMultipleQueriesQuery} searchRequest
     * @param  {Context} options
     * @returns {SearchContext}
     */
    function createFacetSearchContext(searchRequest, options) {
        // Split index name and possible sorting rules
        var _a = separateIndexFromSortRules(searchRequest.indexName), indexUid = _a.indexUid, sortBy = _a.sortBy;
        var instantSearchParams = searchRequest.params;
        var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
        var searchContext = __assign(__assign(__assign({}, options), instantSearchParams), { sort: splitSortString(sortBy), indexUid: indexUid, pagination: paginationState, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets });
        return searchContext;
    }

    /**
     * @param  {Record<string} cache
     * @returns {SearchCache}
     */
    function SearchCache(cache) {
        if (cache === void 0) { cache = {}; }
        var searchCache = cache;
        return {
            getEntry: function (key) {
                if (searchCache[key]) {
                    try {
                        return JSON.parse(searchCache[key]);
                    }
                    catch (_) {
                        return undefined;
                    }
                }
                return undefined;
            },
            formatKey: function (components) {
                return stringifyArray(components);
            },
            setEntry: function (key, searchResponse) {
                searchCache[key] = JSON.stringify(searchResponse);
            },
            clearCache: function () {
                searchCache = {};
            }
        };
    }

    function getParametersWithoutFilters(searchContext) {
        var defaultSearchContext = __assign(__assign({}, searchContext), { 
            // placeholdersearch true to ensure a request is made
            placeholderSearch: true, 
            // query set to empty to ensure retrieving the default facetdistribution
            query: '' });
        var meilisearchParams = MeiliParamsCreator(defaultSearchContext);
        meilisearchParams.addFacets();
        meilisearchParams.addPagination();
        return meilisearchParams.getParams();
    }
    // Fetch the initial facets distribution of an Index
    // Used to show the facets when `placeholderSearch` is set to true
    // Used to fill the missing facet values when `keepZeroFacets` is set to true
    function initFacetDistribution(searchResolver, queries, initialFacetDistribution) {
        return __awaiter(this, void 0, void 0, function () {
            var removeIndexUidDuplicates, searchQueries, results, _i, results_1, searchResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeIndexUidDuplicates = removeDuplicate('indexUid');
                        searchQueries = queries
                            .filter(removeIndexUidDuplicates) // only make one request per indexUid
                            .filter(function (_a) {
                            var indexUid = _a.indexUid;
                            // avoid requesting on indexes that already have an initial facetDistribution
                            return !Object.keys(initialFacetDistribution).includes(indexUid);
                        });
                        if (searchQueries.length === 0)
                            return [2 /*return*/, initialFacetDistribution];
                        return [4 /*yield*/, searchResolver.multiSearch(searchQueries, [])];
                    case 1:
                        results = _a.sent();
                        for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                            searchResult = results_1[_i];
                            initialFacetDistribution[searchResult.indexUid] =
                                searchResult.facetDistribution || {};
                        }
                        return [2 /*return*/, initialFacetDistribution];
                }
            });
        });
    }
    function fillMissingFacets(initialFacetDistribution, meilisearchResults) {
        for (var _i = 0, meilisearchResults_1 = meilisearchResults; _i < meilisearchResults_1.length; _i++) {
            var searchResult = meilisearchResults_1[_i];
            initialFacetDistribution[searchResult.indexUid] = __assign(__assign({}, (searchResult.facetDistribution || {})), (initialFacetDistribution[searchResult.indexUid] || {}));
        }
        return initialFacetDistribution;
    }

    var PACKAGE_VERSION = '0.13.6';

    var constructClientAgents = function (clientAgents) {
        if (clientAgents === void 0) { clientAgents = []; }
        var instantMeilisearchAgent = "Meilisearch instant-meilisearch (v".concat(PACKAGE_VERSION, ")");
        return clientAgents.concat(instantMeilisearchAgent);
    };

    /**
     * Instantiate SearchClient required by instantsearch.js.
     *
     * @param  {string} hostUrl
     * @param  {string | ApiKeyCallback} [apiKey='']
     * @param  {InstantMeiliSearchOptions} [instantMeiliSearchOptions={}]
     * @returns {InstantMeiliSearchObject}
     */
    function instantMeiliSearch(hostUrl, apiKey, instantMeiliSearchOptions) {
        if (apiKey === void 0) { apiKey = ''; }
        if (instantMeiliSearchOptions === void 0) { instantMeiliSearchOptions = {}; }
        // Validate parameters
        validateInstantMeiliSearchParams(hostUrl, apiKey, instantMeiliSearchOptions);
        // Resolve possible function to get apiKey
        apiKey = getApiKey(apiKey);
        var clientAgents = constructClientAgents(instantMeiliSearchOptions.clientAgents);
        var meilisearchConfig = {
            host: hostUrl,
            apiKey: apiKey,
            clientAgents: clientAgents
        };
        if (instantMeiliSearchOptions.httpClient !== undefined) {
            meilisearchConfig.httpClient = instantMeiliSearchOptions.httpClient;
        }
        if (instantMeiliSearchOptions.requestConfig !== undefined) {
            meilisearchConfig.requestConfig = instantMeiliSearchOptions.requestConfig;
        }
        var meilisearchClient = new meilisearch_umd.MeiliSearch(meilisearchConfig);
        var searchCache = SearchCache();
        // create search resolver with included cache
        var searchResolver = SearchResolver(meilisearchClient, searchCache);
        var initialFacetDistribution = {};
        var instantMeilisearchConfig = getInstantMeilisearchConfig(instantMeiliSearchOptions);
        return {
            setMeiliSearchParams: function (params) {
                var meiliSearchParams = instantMeiliSearchOptions.meiliSearchParams;
                instantMeiliSearchOptions.meiliSearchParams =
                    meiliSearchParams === undefined
                        ? params
                        : __assign(__assign({}, meiliSearchParams), params);
            },
            searchClient: {
                clearCache: function () { return searchCache.clearCache(); },
                /**
                 * @param  {readonlyAlgoliaMultipleQueriesQuery[]} instantSearchRequests
                 * @returns {Array}
                 */
                search: function (instantSearchRequests) {
                    return __awaiter(this, void 0, void 0, function () {
                        var meilisearchRequests, instantSearchPagination, initialFacetDistributionsRequests, _i, instantSearchRequests_1, searchRequest, searchContext, meilisearchSearchQuery, defaultSearchQuery, meilisearchResults, instantSearchResponse, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    meilisearchRequests = [];
                                    instantSearchPagination = [];
                                    initialFacetDistributionsRequests = [];
                                    for (_i = 0, instantSearchRequests_1 = instantSearchRequests; _i < instantSearchRequests_1.length; _i++) {
                                        searchRequest = instantSearchRequests_1[_i];
                                        searchContext = createSearchContext(searchRequest, instantMeiliSearchOptions);
                                        meilisearchSearchQuery = adaptSearchParams(searchContext);
                                        meilisearchRequests.push(meilisearchSearchQuery);
                                        defaultSearchQuery = getParametersWithoutFilters(searchContext);
                                        initialFacetDistributionsRequests.push(defaultSearchQuery);
                                        // Keep information about the pagination parameters of instantsearch as
                                        // they are needed to adapt the search response of Meilisearch
                                        instantSearchPagination.push(searchContext.pagination);
                                    }
                                    return [4 /*yield*/, initFacetDistribution(searchResolver, initialFacetDistributionsRequests, initialFacetDistribution)
                                        // Search request to Meilisearch happens here
                                    ];
                                case 1:
                                    initialFacetDistribution = _a.sent();
                                    return [4 /*yield*/, searchResolver.multiSearch(meilisearchRequests, instantSearchPagination // Create issue on pagination
                                        )
                                        // Fill the missing facet values if keepZeroFacets is true
                                    ];
                                case 2:
                                    meilisearchResults = _a.sent();
                                    // Fill the missing facet values if keepZeroFacets is true
                                    initialFacetDistribution = fillMissingFacets(initialFacetDistribution, meilisearchResults);
                                    instantSearchResponse = adaptSearchResults(meilisearchResults, initialFacetDistribution, instantMeilisearchConfig);
                                    return [2 /*return*/, instantSearchResponse];
                                case 3:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    throw new Error(e_1);
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                },
                searchForFacetValues: function (requests) {
                    return __awaiter(this, void 0, void 0, function () {
                        var results, _i, requests_1, request, searchContext, meilisearchSearchQuery, meilisearchRequest, meilisearchResponse, facetHits, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    results = [];
                                    _i = 0, requests_1 = requests;
                                    _a.label = 1;
                                case 1:
                                    if (!(_i < requests_1.length)) return [3 /*break*/, 4];
                                    request = requests_1[_i];
                                    searchContext = createFacetSearchContext(request, instantMeiliSearchOptions);
                                    meilisearchSearchQuery = adaptSearchParams(searchContext);
                                    meilisearchRequest = __assign(__assign({}, meilisearchSearchQuery), { facetQuery: request.params.facetQuery, facetName: request.params.facetName });
                                    delete meilisearchRequest.indexUid;
                                    return [4 /*yield*/, meilisearchClient
                                            .index(searchContext.indexUid)
                                            .searchForFacetValues(meilisearchRequest)];
                                case 2:
                                    meilisearchResponse = _a.sent();
                                    facetHits = meilisearchResponse.facetHits.map(function (facetHit) { return (__assign(__assign({}, facetHit), { 
                                        // not currently supported
                                        highlighted: facetHit.value })); });
                                    result = {
                                        facetHits: facetHits,
                                        exhaustiveFacetsCount: false,
                                        processingTimeMS: meilisearchResponse.processingTimeMs
                                    };
                                    results.push(result);
                                    _a.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/, results];
                            }
                        });
                    });
                }
            }
        };
    }

    exports.instantMeiliSearch = instantMeiliSearch;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
