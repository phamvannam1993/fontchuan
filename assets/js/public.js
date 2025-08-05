( () => {
    var t = {
        0: () => {
            window.addEventListener("elementor/popup/show", (function(t) {
                t.detail.id,
                t.detail.instance.$element.find("[jsf-filter]").removeAttr("jsf-filter")
            }
            ))
        }
        ,
        669: t => {
            "use strict";
            t.exports = jQuery
        }
    }
      , e = {};
    function r(i) {
        var n = e[i];
        if (void 0 !== n)
            return n.exports;
        var o = e[i] = {
            exports: {}
        };
        return t[i](o, o.exports, r),
        o.exports
    }
    ( () => {
        "use strict";
        function t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        const e = {
            channels: {},
            subscribe: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.channels[t] || (this.channels[t] = []),
                this.channels[t][r ? "push" : "unshift"](e)
            },
            publish: function(e) {
                var r = arguments
                  , i = this.channels[e];
                i && i.length && i.forEach((function(e) {
                    return e.apply(void 0, function(e) {
                        if (Array.isArray(e))
                            return t(e)
                    }(i = Array.from(r).splice(1)) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                            return Array.from(t)
                    }(i) || function(e, r) {
                        if (e) {
                            if ("string" == typeof e)
                                return t(e, r);
                            var i = {}.toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name),
                            "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, r) : void 0
                        }
                    }(i) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                    var i
                }
                ))
            }
        };
        function i(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var i, n, o, a, s = [], l = !0, u = !1;
                    try {
                        if (o = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            l = !1
                        } else
                            for (; !(l = (i = o.call(r)).done) && (s.push(i.value),
                            s.length !== e); l = !0)
                                ;
                    } catch (t) {
                        u = !0,
                        n = t
                    } finally {
                        try {
                            if (!l && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (u)
                                throw n
                        }
                    }
                    return s
                }
            }(t, e) || n(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return o(t, e);
                var r = {}.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, e) : void 0
            }
        }
        function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function a(t) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            a(t)
        }
        function s(t) {
            return "object" === a(t) && null !== t
        }
        function l() {
            var t = Array.prototype.slice.call(arguments);
            if (!t.length)
                return !1;
            if (1 === t.length)
                return t[0];
            var e, r = [];
            return t.forEach((function(t) {
                r = r.concat(t)
            }
            )),
            function(t) {
                if (Array.isArray(t))
                    return o(t)
            }(e = new Set(r)) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(e) || n(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function u(t) {
            switch (t.constructor) {
            case Object:
                return !!Object.entries(t).length;
            case Array:
                return !!t.length
            }
            return !!t
        }
        function c(t) {
            return !u(t)
        }
        function f(t) {
            try {
                new URL(t)
            } catch (t) {
                return !1
            }
            return !0
        }
        function d(t) {
            var e, r = !0, i = function(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = n(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0
                          , o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, s = !0, l = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return s = t.done,
                        t
                    },
                    e: function(t) {
                        l = !0,
                        a = t
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (l)
                                throw a
                        }
                    }
                }
            }(Array.from(arguments).splice(1));
            try {
                for (i.s(); !(e = i.n()).done; ) {
                    var o = e.value;
                    if (!t[o]) {
                        r = !1;
                        break
                    }
                    t = t[o]
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            return !!r && t
        }
        function p(t, e) {
            var r = Object.prototype.toString.call(t);
            if (r !== Object.prototype.toString.call(e))
                return !1;
            if (["[object Array]", "[object Object]"].indexOf(r) < 0)
                return !1;
            var i = "[object Array]" === r ? t.length : Object.keys(t).length;
            if (i !== ("[object Array]" === r ? e.length : Object.keys(e).length))
                return !1;
            var n = function(t, e) {
                var r = Object.prototype.toString.call(t);
                if (["[object Array]", "[object Object]"].indexOf(r) >= 0) {
                    if (!p(t, e))
                        return !1
                } else {
                    if (r !== Object.prototype.toString.call(e))
                        return !1;
                    if ("[object Function]" === r) {
                        if (t.toString() !== e.toString())
                            return !1
                    } else if (t !== e)
                        return !1
                }
            };
            if ("[object Array]" === r) {
                for (var o = 0; o < i; o++)
                    if (!1 === n(t[o], e[o]))
                        return !1
            } else
                for (var a in t)
                    if (t.hasOwnProperty(a) && !1 === n(t[a], e[a]))
                        return !1;
            return !0
        }
        function h(t) {
            return d(JetSmartFilters, "filterGroups", t + "/" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"))
        }
        function y() {
            var t = function(t) {
                return w(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !0)
            }(window.location.pathname + window.location.search)
              , e = t.indexOf("?");
            if (-1 === e)
                return {};
            var r = decodeURIComponent(t.slice(e));
            return (/^[?#]/.test(r) ? r.slice(1) : r).split("&").reduce((function(t, e) {
                var r = i(e.split("="), 2)
                  , n = r[0]
                  , o = r[1];
                return n && (t[n] = o ? o.replace(/\+/g, " ") : ""),
                t
            }
            ), {})
        }
        function v(t) {
            return !(!t || !t.getTime()) && t.getFullYear() + "." + (t.getMonth() + 1) + "." + t.getDate()
        }
        function m(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return t.setDate(t.getDate() + e),
            t
        }
        function b(t) {
            return !!t && !(!(e = t.includes("today") ? function(t) {
                var e = new Date
                  , r = t.match(/([-+]\s*\d+(\.\d+)?\s*\w+)(?=\s*[-+]|$)/g);
                return r && r.forEach((function(t) {
                    var r = "-" === t.substring(0, 1) ? -parseInt(t.substring(1)) : parseInt(t.substring(1));
                    t.includes("day") && m(e, r),
                    t.includes("week") && m(e, 7 * r),
                    t.includes("month") && function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                          , r = t.getDate();
                        t.setMonth(t.getMonth() + e),
                        t.getDate() != r && t.setDate(0)
                    }(e, r),
                    t.includes("year") && function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        t.setFullYear(t.getFullYear() + e)
                    }(e, r)
                }
                )),
                e
            }(t) : t.includes("current") ? function(t) {
                var e = new Date
                  , r = t.split("-", 3).map((function(t, r) {
                    if (t.includes("current"))
                        switch (r) {
                        case 0:
                            t = e.getFullYear();
                            break;
                        case 1:
                            t = e.getMonth() + 1;
                            break;
                        case 2:
                            t = e.getDate()
                        }
                    return t
                }
                ));
                return new Date(r.join("-"))
            }(t) : new Date(t)) || isNaN(e)) && (e.setHours(0, 0, 0, 0),
            e);
            var e
        }
        function g(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = null;
            return function() {
                var n = arguments
                  , o = this
                  , a = r && !i
                  , s = function() {
                    return t.apply(o, n)
                };
                clearTimeout(i),
                i = setTimeout(s, e),
                a && s()
            }
        }
        function w(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = !0;
            if (e || (i = function(t) {
                if ("boolean" == typeof t)
                    return t;
                switch (t.toLowerCase().trim()) {
                case "true":
                case "yes":
                case "1":
                    return !0;
                case "false":
                case "no":
                case "0":
                case null:
                    return !1;
                default:
                    return Boolean(t)
                }
            }(d(JetSmartFilterSettings, "plugin_settings", "use_url_aliases")),
            e = d(JetSmartFilterSettings, "plugin_settings", "url_aliases")),
            !i || !e)
                return t;
            var n = d(JetSmartFilterSettings, "sitepath")
              , o = !(!n || 0 !== t.indexOf(n));
            return o && (t = t.slice(n.length)),
            e.forEach((function(e) {
                e.needle && e.replacement && (t = r ? t.replace(e.replacement, e.needle) : t.replace(e.needle, e.replacement))
            }
            )),
            o && (t = n + t),
            t
        }
        function S(t) {
            return w(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1)
        }
        function j(t) {
            var e = "";
            try {
                for (; t.parentElement; ) {
                    var r = Array.from(t.parentElement.children).filter((function(e) {
                        return e.tagName === t.tagName
                    }
                    ));
                    e = (r.indexOf(t) ? "".concat(t.tagName, ":nth-of-type(").concat(r.indexOf(t) + 1, ")") : "".concat(t.tagName)) + "".concat(e ? ">" : "").concat(e),
                    t = t.parentElement
                }
                return "html > ".concat(e.toLowerCase())
            } catch (t) {
                return !1
            }
        }
        function k(t) {
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            k(t)
        }
        function P(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, O(i.key), i)
            }
        }
        function O(t) {
            var e = function(t) {
                if ("object" != k(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != k(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == k(e) ? e : e + ""
        }
        var _ = function() {
            return t = function t(r) {
                var i = this;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.filterGroup = r,
                e.subscribe("fiter/apply", (function(t) {
                    i.isCurrentAdditionalProvider(t) && !t.isReload && i.changeByParent(t)
                }
                ), !0),
                e.subscribe("fiters/apply", (function(t) {
                    i.isCurrentAdditionalProvider(t) && !t.isReload && i.applyFiltersByParent(t)
                }
                ), !0),
                e.subscribe("fiters/remove", (function(t) {
                    i.isCurrentAdditionalProvider(t) && !t.isReload && i.removeByParent(t)
                }
                ), !0),
                e.subscribe("ajaxFilters/updated", (function(t, e) {
                    i.filterGroup.isCurrentProvider({
                        provider: t,
                        queryId: e
                    }) && (i.filterGroup.additionalRequest = !1)
                }
                ), !0)
            }
            ,
            r = [{
                key: "changeByParent",
                value: function(t) {
                    this.updateAdditionalFilterByParent(t) && "reload" !== t.applyType && (this.filterGroup.additionalRequest = !0,
                    this.filterGroup.applyFilterHandler(t.applyType))
                }
            }, {
                key: "applyFiltersByParent",
                value: function(t) {
                    var e = this
                      , r = !1;
                    this.parentProviderCurrentFilters(t.provider, t.queryId).forEach((function(t) {
                        e.updateAdditionalFilterByParent(t) && "reload" !== t.applyType && (r = !0)
                    }
                    )),
                    r && (this.filterGroup.additionalRequest = !0,
                    this.filterGroup.applyFiltersHandler(t.applyType))
                }
            }, {
                key: "updateAdditionalFilterByParent",
                value: function(t) {
                    var e = this.findInCollection(t);
                    return !!e && (e.data = t.data,
                    this.filterGroup.updateSameFilters(e),
                    t.isHierarchy && this.updateHierarchyLevelsByParent(t),
                    !0)
                }
            }, {
                key: "removeByParent",
                value: function(t) {
                    this.resetFilters(),
                    this.filterGroup.additionalRequest = !0,
                    this.filterGroup.removeFiltersHandler(t.applyType)
                }
            }, {
                key: "updateProvider",
                value: function() {
                    this.filters.length && (this.filterGroup.currentQuery = {},
                    this.filterGroup.additionalRequest = !0,
                    this.filterGroup.doAjax())
                }
            }, {
                key: "parentProviderCurrentFilters",
                value: function(t, e) {
                    var r = this;
                    return function(t) {
                        var e = h(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default");
                        return e && e.uniqueFilters || []
                    }(t, e).filter((function(t) {
                        return r.isCurrentAdditionalProvider(t)
                    }
                    ))
                }
            }, {
                key: "resetFilters",
                value: function() {
                    this.filters.forEach((function(t) {
                        t.data = !1
                    }
                    ))
                }
            }, {
                key: "findInCollection",
                value: function(t) {
                    return this.filters.find((function(r) {
                        return e(t) === e(r)
                    }
                    ));
                    function e(t) {
                        return t.name + "|" + t.filterId + "|" + t.queryKey
                    }
                }
            }, {
                key: "isCurrentAdditionalProvider",
                value: function(t) {
                    return !(!t.additionalProviders || !Array.isArray(t.additionalProviders) || !t.additionalProviders.includes(this.filterGroup.providerKey))
                }
            }, {
                key: "updateHierarchyLevelsByParent",
                value: function(t) {
                    var e = this;
                    t.hierarchicalInstance.filters.forEach((function(t) {
                        e.filters.find((function(e) {
                            return e.filterId === t.filterId && e.depth === t.depth
                        }
                        )).data = t.data
                    }
                    ))
                }
            }, {
                key: "filters",
                get: function() {
                    return this.filterGroup.filters.filter((function(t) {
                        return t.isAdditional
                    }
                    ))
                }
            }],
            r && P(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }()
          , C = r(669);
        function x(t) {
            return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            x(t)
        }
        function $(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, F(i.key), i)
            }
        }
        function I(t, e, r) {
            return e && $(t.prototype, e),
            r && $(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function F(t) {
            var e = function(t) {
                if ("object" != x(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != x(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == x(e) ? e : e + ""
        }
        var E = I((function t(e) {
            var r = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.filterGroup = e,
            C(document).on("jet-engine-request-calendar", (function() {
                var t = d(JetEngine, "currentRequest");
                if (t && "jet-engine-calendar" === r.filterGroup.provider) {
                    if (t.settings && t.settings.hasOwnProperty("_element_id")) {
                        var e = t.settings._element_id ? t.settings._element_id : "default";
                        if (r.filterGroup.queryId !== e)
                            return
                    }
                    t.query = r.filterGroup.currentQuery,
                    t.provider = r.filterGroup.provider + "/" + r.filterGroup.queryId;
                    var i = t.month.split(" ");
                    2 === i.length && window.JetSmartFilterSettings.settings && window.JetSmartFilterSettings.settings[r.filterGroup.provider] && window.JetSmartFilterSettings.settings[r.filterGroup.provider][r.filterGroup.queryId] && (window.JetSmartFilterSettings.settings[r.filterGroup.provider][r.filterGroup.queryId].custom_start_from = !0,
                    window.JetSmartFilterSettings.settings[r.filterGroup.provider][r.filterGroup.queryId].start_from_month = i[0],
                    window.JetSmartFilterSettings.settings[r.filterGroup.provider][r.filterGroup.queryId].start_from_year = i[1])
                }
            }
            )),
            C(document).on("jet-woo-builder-content-rendered", (function() {
                "woocommerce-archive" === r.filterGroup.provider && r.filterGroup.getFiltersByName("pagination").forEach((function(t) {
                    t.resetMoreActive()
                }
                ))
            }
            ))
        }
        ));
        function D(t) {
            return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            D(t)
        }
        function T(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, A(i.key), i)
            }
        }
        function R(t, e, r) {
            return (e = A(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function A(t) {
            var e = function(t) {
                if ("object" != D(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != D(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == D(e) ? e : e + ""
        }
        var V = function() {
            return t = function t(r) {
                var i = this;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                R(this, "rowSelector", ".jet-filter-row"),
                R(this, "counterSelector", ".jet-filters-counter"),
                this.filter = r,
                this.currentIndexerData = this.indexerData,
                this.isCounter = "yes" === this.filter.$container.data("showCounter"),
                this.indexerRule = this.filter.$container.data("indexerRule"),
                this.changeCounte = this.filter.$container.data("changeCounter"),
                this.isCounter || "show" !== this.indexerRule) {
                    this.set();
                    var n = !0;
                    e.subscribe("fiter/apply", (function(t) {
                        t.filterId != i.filter.filterId && (n = !1)
                    }
                    )),
                    e.subscribe("ajaxFilters/updated", (function(t, e) {
                        i.filter.isCurrentProvider({
                            provider: t,
                            queryId: e
                        }) && ("never" === i.changeCounte || "other_changed" === i.changeCounte && n || (n = !0,
                        i.update()))
                    }
                    )),
                    e.subscribe("fiters/remove", (function(t) {
                        i.filter.isCurrentProvider(t) && (n = !1)
                    }
                    )),
                    e.subscribe("hierarchyFilters/levelsUpdated", (function(t) {
                        i.filter.filterId === t && i.set()
                    }
                    ))
                }
            }
            ,
            (r = [{
                key: "set",
                value: function() {
                    var t = this
                      , e = this.$items
                      , r = e.length
                      , i = 0;
                    e.each((function(r) {
                        var n = e.eq(r)
                          , o = t.currentIndexerData[n.val()] || 0;
                        if (n.val()) {
                            if (t.isCounter)
                                switch (n.prop("tagName")) {
                                case "INPUT":
                                    (n = n.closest(t.rowSelector)).find(t.counterSelector + " .value").text(o);
                                    break;
                                case "OPTION":
                                    "" !== n.attr("loading-item") && "" !== n.attr("value") && n.text(n.data("label") + " " + n.data("counter-prefix") + o + n.data("counter-suffix"))
                                }
                            else
                                "INPUT" === n.prop("tagName") && (n = n.closest(t.rowSelector));
                            ["hide", "disable"].includes(t.indexerRule) && (o || t.hasNonEmptyNestedItems(n) ? (n.removeClass("jet-filter-row-" + t.indexerRule),
                            "OPTION" === n.prop("tagName") && "hide" === t.indexerRule && n.parent("span.jet-filter-row-hide").length && n.unwrap(),
                            "OPTION" === n.prop("tagName") && "disable" === t.indexerRule && n.removeAttr("disabled")) : (n.addClass("jet-filter-row-" + t.indexerRule),
                            "OPTION" === n.prop("tagName") && "hide" === t.indexerRule && !n.parent("span.jet-filter-row-hide").length && n.val() && n.wrap('<span class="jet-filter-row-hide" />'),
                            "OPTION" === n.prop("tagName") && "disable" === t.indexerRule && n.attr("disabled", !0)),
                            "hide" === t.indexerRule && 0 === o && i++)
                        } else
                            i++
                    }
                    )),
                    "hide" === this.indexerRule && (!this.filter.isHierarchy || this.filter.isHierarchy && 0 === this.filter.depth ? i >= r ? (this.filter.$container.hide(),
                    this.filter.$applyButton.hide()) : (this.filter.$container.show(),
                    this.filter.$applyButton.show()) : i >= r ? this.filter.$filter.hide() : this.filter.$filter.show()),
                    this.updateFilter()
                }
            }, {
                key: "update",
                value: function() {
                    var t = this.indexerData;
                    p(t, this.currentIndexerData) || (this.currentIndexerData = t,
                    this.set())
                }
            }, {
                key: "updateFilter",
                value: function() {
                    this.filter.additionalFilterSettings && this.filter.additionalFilterSettings.toggleItemsVisibility()
                }
            }, {
                key: "$items",
                get: function() {
                    return this.filter.$filter.find("input, option")
                }
            }, {
                key: "indexerData",
                get: function() {
                    var t = d(JetSmartFilterSettings, "jetFiltersIndexedData")
                      , e = {};
                    for (var r in t)
                        if (r === this.filter.provider + "/" + this.filter.queryId)
                            for (var i in t[r])
                                if (i === this.filter.queryType)
                                    for (var n in t[r][i])
                                        if (n === this.filter.queryVar)
                                            for (var o in t[r][i][n])
                                                e[o] = t[r][i][n][o];
                    return e
                }
            }, {
                key: "hasNonEmptyNestedItems",
                value: function(t) {
                    var e = !1;
                    if (!t.hasClass("jet-list-tree__parent"))
                        return e;
                    var r = t.next(".jet-list-tree__children");
                    if (!r.length)
                        return e;
                    var i = this.currentIndexerData;
                    return r.find("input.jet-checkboxes-list__input").each((function(t, r) {
                        if (i[r.value])
                            return e = !0,
                            !1
                    }
                    )),
                    e
                }
            }]) && T(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }()
          , B = r(669);
        function q(t) {
            return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            q(t)
        }
        function N(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, L(i.key), i)
            }
        }
        function L(t) {
            var e = function(t) {
                if ("object" != q(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != q(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == q(e) ? e : e + ""
        }
        var M = function() {
            return t = function t(e) {
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                e.$filter) {
                    switch (this.filter = e,
                    this.filter.name) {
                    case "checkboxes":
                    case "radio":
                    case "check-range":
                    case "alphabet":
                    case "visual":
                        this.checkboxes(),
                        this.filter.additionalFilterSettings && this.filter.additionalFilterSettings.$dropdown.length && this.checkboxesDropdown();
                        break;
                    case "rating":
                        this.rating();
                        break;
                    case "range":
                        this.range();
                        break;
                    case "date-period":
                        this.datePeriod();
                        break;
                    case "pagination":
                        this.pagination();
                        break;
                    case "active-filters":
                    case "active-tags":
                        this.activeItems()
                    }
                    this.indexerAddition()
                }
            }
            ,
            r = [{
                key: "itemsTriggerClickOnEnterPress",
                value: function(t) {
                    t.keypress((function(t) {
                        t.preventDefault(),
                        13 === t.keyCode && B(t.target).trigger("click")
                    }
                    ))
                }
            }, {
                key: "checkboxes",
                value: function() {
                    var t = this;
                    this.filter.$filter.find("label[tabindex]").keypress((function(e) {
                        if (e.preventDefault(),
                        [13, 32].includes(e.keyCode)) {
                            var r = B(e.target).find("input");
                            r.prop("checked", !r.prop("checked")),
                            t.filter.processData(),
                            t.filter.emitFiterApply()
                        }
                    }
                    )),
                    this.filter.$filter.find(".jet-filter-items-moreless[tabindex]").keypress((function(e) {
                        e.preventDefault(),
                        [13, 32].includes(e.keyCode) && t.filter.additionalFilterSettings.moreLessToggle()
                    }
                    ))
                }
            }, {
                key: "checkboxesDropdown",
                value: function() {
                    var t = this;
                    this.filter.additionalFilterSettings.$dropdown.find(".jet-filter-items-dropdown__label").keypress((function(e) {
                        e.preventDefault(),
                        [13, 32].includes(e.keyCode) && t.filter.additionalFilterSettings.dropdownToggle()
                    }
                    )),
                    this.filter.$filter.find("[tabindex]").last().keydown((function(e) {
                        9 === e.keyCode && t.filter.additionalFilterSettings.dropdownClose()
                    }
                    ))
                }
            }, {
                key: "rating",
                value: function() {
                    this.filter.$filter.find("[tabindex]").keypress((function(t) {
                        t.preventDefault(),
                        B(t.target).prev("input").trigger("click")
                    }
                    ))
                }
            }, {
                key: "range",
                value: function() {
                    var t = this;
                    this.filter.$filter.find("[tabindex]").keydown((function(e) {
                        if ([13, 32, 37, 38, 39, 40].includes(e.keyCode)) {
                            e.preventDefault();
                            var r = B(e.target);
                            [37, 38, 39, 40].includes(e.keyCode) && ([37, 40].includes(e.keyCode) && r.val(parseFloat(r.val()) - parseFloat(r.attr("step"))),
                            [38, 39].includes(e.keyCode) && r.val(parseFloat(r.val()) + parseFloat(r.attr("step"))),
                            r.trigger("input"),
                            t.filter.processData()),
                            13 === e.keyCode && t.filter.emitFiterApply()
                        }
                    }
                    ))
                }
            }, {
                key: "datePeriod",
                value: function() {
                    var t = this;
                    this.filter.$datepickerBtn.is("[tabindex]") && (this.filter.$datepickerBtn.focus((function() {
                        t.filter.datepicker.show()
                    }
                    )),
                    this.filter.$datepickerBtn.blur((function() {
                        t.filter.datepicker.inFocus || t.filter.datepicker.hide()
                    }
                    )),
                    this.filter.$datepickerBtn.on("keydown.adp", this.filter.datepicker._onKeyDown.bind(this.filter.datepicker)),
                    this.filter.$datepickerBtn.on("keyup.adp", this.filter.datepicker._onKeyUp.bind(this.filter.datepicker)),
                    this.filter.$datepickerBtn.keypress((function(e) {
                        [32].includes(e.keyCode) && (t.filter.datepicker.visible ? t.filter.datepicker.hide() : t.filter.datepicker.show())
                    }
                    )),
                    this.filter.$prevPeriodBtn.keypress((function(e) {
                        [13, 32, 37, 39].includes(e.keyCode) && (e.preventDefault(),
                        13 === e.keyCode && t.filter.prevPeriod())
                    }
                    )),
                    this.filter.$nextPeriodBtn.keypress((function(e) {
                        [13, 32, 37, 39].includes(e.keyCode) && (e.preventDefault(),
                        13 === e.keyCode && t.filter.nextPeriod())
                    }
                    )))
                }
            }, {
                key: "pagination",
                value: function() {
                    var t = this;
                    this.itemsTriggerClickOnEnterPress(this.filter.$filter.find("[tabindex]")),
                    e.subscribe("pagination/itemsBuilt", (function(e) {
                        t.itemsTriggerClickOnEnterPress(e.$filter.find("[tabindex]"))
                    }
                    ))
                }
            }, {
                key: "activeItems",
                value: function() {
                    var t = this;
                    this.itemsTriggerClickOnEnterPress(this.filter.$activeItemsContainer.find("[tabindex]")),
                    e.subscribe("activeItems/itemsBuilt", (function(e) {
                        t.itemsTriggerClickOnEnterPress(e.$activeItemsContainer.find("[tabindex]"))
                    }
                    ))
                }
            }, {
                key: "indexerAddition",
                value: function() {
                    var t = this;
                    if (this.filter.indexer && "disable" === this.filter.indexer.indexerRule) {
                        var r = function() {
                            t.filter.$filter.find('.jet-filter-row [tabindex="-1"]').attr("tabindex", "0"),
                            t.filter.$filter.find('.jet-filter-row-disable [tabindex="0"]').attr("tabindex", "-1")
                        };
                        r(),
                        e.subscribe("ajaxFilters/updated", (function(e, i) {
                            t.filter.isCurrentProvider({
                                provider: e,
                                queryId: i
                            }) && r()
                        }
                        ))
                    }
                }
            }],
            r && N(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }();
        function G(t) {
            return G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            G(t)
        }
        function J(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, U(i.key), i)
            }
        }
        function U(t) {
            var e = function(t) {
                if ("object" != G(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != G(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == G(e) ? e : e + ""
        }
        var H = function() {
            return t = function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.filterGroup = e,
                this.containerLoadingClass = "jet-filters-loading",
                this.preloaderClass = "jsf_provider-preloader",
                this.preloaderTemplate = d(JetSmartFilterSettings, "plugin_settings", "provider_preloader", "template"),
                this.fixedPosition = d(JetSmartFilterSettings, "plugin_settings", "provider_preloader", "fixed_position"),
                this.fixedEdgeGap = parseInt(d(JetSmartFilterSettings, "plugin_settings", "provider_preloader", "fixed_edge_gap")) || 0,
                this.$container = null,
                this.$preloader = null
            }
            ,
            (e = [{
                key: "show",
                value: function() {
                    this.filterGroup.$provider.addClass(this.containerLoadingClass),
                    this.preloaderTemplate && ("bricks-query-loop" === this.filterGroup.provider ? (this.$container = this.filterGroup.$provider.first().append(this.preloaderTemplate),
                    this.$preloader = this.filterGroup.$provider.first().find(">.".concat(this.preloaderClass))) : (this.$container = this.filterGroup.$provider.append(this.preloaderTemplate),
                    this.$preloader = this.filterGroup.$provider.find(">.".concat(this.preloaderClass))),
                    this.fixedPosition && (this.handleEvent(),
                    window.addEventListener("scroll", this),
                    window.addEventListener("resize", this)))
                }
            }, {
                key: "hide",
                value: function() {
                    this.filterGroup.$provider.removeClass(this.containerLoadingClass),
                    this.$preloader && this.$preloader.remove && this.$preloader.remove(),
                    this.$preloader = null,
                    this.$container = null,
                    window.removeEventListener("scroll", this),
                    window.removeEventListener("resize", this)
                }
            }, {
                key: "handleEvent",
                value: function() {
                    var t = this.$container.get(0).getBoundingClientRect()
                      , e = t.top
                      , r = t.left
                      , i = t.height
                      , n = t.width
                      , o = this.$preloader.outerHeight()
                      , a = window.innerHeight / 2 - o / 2
                      , s = a - e - this.fixedEdgeGap
                      , l = i + e - o - a - this.fixedEdgeGap;
                    s > 0 && l > 0 ? this.$preloader.css({
                        position: "fixed",
                        top: "".concat(a, "px"),
                        left: "".concat(r + n / 2, "px")
                    }) : this.$preloader.css({
                        position: "absolute",
                        top: "".concat(e >= 0 ? this.fixedEdgeGap : i - o - this.fixedEdgeGap, "px"),
                        left: "50%"
                    })
                }
            }]) && J(t.prototype, e),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, e
        }();
        function K(t) {
            return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            K(t)
        }
        function W(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function z(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, Q(i.key), i)
            }
        }
        function Q(t) {
            var e = function(t) {
                if ("object" != K(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != K(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == K(e) ? e : e + ""
        }
        var Y = function() {
            return t = function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.filterGroup = e,
                this.setted = {}
            }
            ,
            e = [{
                key: "set",
                value: function() {
                    var t = this
                      , e = !1
                      , r = [];
                    this.filters.forEach((function(i) {
                        if (!t.setted[i.filterId]) {
                            var n = i.data
                              , o = i.$filter.attr("data-predefined-value");
                            if (t.setted[i.filterId] = o,
                            n != o) {
                                var a = o;
                                if (["checkboxes", "check-range", "alphabet", "visual"].includes(i.name) && a.indexOf(",") > -1 && (a = a.split(",").map((function(t) {
                                    return t.trim()
                                }
                                ))),
                                n) {
                                    if (!(["checkboxes", "check-range"].includes(i.name) || "alphabet" === i.name && "checkbox" === i.$checkboxes.first().attr("type") || "visual" === i.name && "checkbox" === i.$checkboxes.first().attr("type")))
                                        return;
                                    a = l(n, a)
                                }
                                "select" === i.name && i.isHierarchy ? i.hierarchicalInstance.setData(a.split("-").map((function(t) {
                                    return t.trim()
                                }
                                ))) : (i.setData(a),
                                i.wasChanged(!1)),
                                Array.isArray(i.additionalProviders) && r.push(i),
                                e = !0
                            }
                        }
                    }
                    )),
                    e && (this.filterGroup.apply(),
                    setTimeout((function() {
                        var t = [];
                        r.forEach((function(e) {
                            e.additionalProviders.forEach((function(r) {
                                var i = h.apply(void 0, function(t) {
                                    return function(t) {
                                        if (Array.isArray(t))
                                            return W(t)
                                    }(t) || function(t) {
                                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                            return Array.from(t)
                                    }(t) || function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t)
                                                return W(t, e);
                                            var r = {}.toString.call(t).slice(8, -1);
                                            return "Object" === r && t.constructor && (r = t.constructor.name),
                                            "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? W(t, e) : void 0
                                        }
                                    }(t) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }(r.split("/", 2)));
                                i && i.additionalFilters.updateAdditionalFilterByParent(e) && t.every((function(t) {
                                    return t.providerKey !== i.providerKey
                                }
                                )) && t.push(i)
                            }
                            ))
                        }
                        )),
                        t.forEach((function(t) {
                            t.apply()
                        }
                        ))
                    }
                    )))
                }
            }, {
                key: "filters",
                get: function() {
                    return this.filterGroup.filters.filter((function(t) {
                        return t.$filter && t.$filter.data("predefined-value")
                    }
                    ))
                }
            }],
            e && z(t.prototype, e),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, e
        }()
          , X = r(669);
        function Z(t) {
            return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Z(t)
        }
        const tt = {
            xhrs: {},
            ajax: function(t) {
                var e = this;
                return new Promise((function(r, i) {
                    var n = {}
                      , o = t.url || d(JetSmartFilterSettings, "ajaxurl")
                      , a = t.action || "jet_smart_filters"
                      , s = t.query || !1
                      , l = function(t, e) {
                        if (!t.hasOwnProperty(e))
                            return !1;
                        var r = t[e];
                        return delete t[e],
                        r
                    }(s, "jet_paged")
                      , u = t.provider || !1
                      , c = t.queryId || "default"
                      , f = t.props || d(JetSmartFilterSettings, "props", u, c) || {}
                      , p = t.extra_props || d(JetSmartFilterSettings, "extra_props") || {}
                      , h = t.defaults || d(JetSmartFilterSettings, "queries", u, c) || {}
                      , y = t.settings || d(JetSmartFilterSettings, "settings", u, c) || {}
                      , v = t.referrer_data || d(JetSmartFilterSettings, "referrer_data") || !1
                      , m = t.referrer_url || d(JetSmartFilterSettings, "referrer_url") || !1
                      , b = t.indexingFilters || !1;
                    if ([o, a, s, u, c].some((function(t) {
                        return !Boolean(t)
                    }
                    )))
                        i('Not enough parameters. Check if the "Provider" and "Query ID" are set correctly');
                    else {
                        e.xhrs[u + "/" + c] && e.xhrs[u + "/" + c].abort(),
                        n.action = a,
                        n.provider = u + "/" + c,
                        n.query = s,
                        n.defaults = h,
                        n.settings = y,
                        n.props = f,
                        l > 1 && (n.paged = l),
                        v && (n.referrer = v),
                        b && (n.indexing_filters = b);
                        var g = o;
                        m && (g = m),
                        p && Object.assign(n, p),
                        e.xhrs[u + "/" + c] = X.ajax({
                            url: g,
                            type: "POST",
                            dataType: "json",
                            data: n
                        }).done((function(t) {
                            r(t)
                        }
                        )).fail((function(t, e) {
                            "abort" === e && i(!1);
                            var r;
                            r = 0 === t.status ? "Not connect.\n Verify Network." : 404 == t.status ? "Requested page not found. [404]" : 500 == t.status ? "Internal Server Error [500]." : "parsererror" === e ? "Requested JSON parse failed." : "timeout" === e ? "Time out error." : "Uncaught Error.\n" + t.responseText,
                            i(r)
                        }
                        ))
                    }
                }
                ))
            },
            reload: function(t) {
                document.location = t || window.location.pathname
            },
            redirectWithGET: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e) {
                    var i = S((e = ("/" !== e.charAt(0) ? "/" : "") + e + ("/" !== e.charAt(e.length - 1) ? "/" : "")) + t);
                    f(i) || (i = d(JetSmartFilterSettings, "siteurl") + i),
                    window.open(i, r ? "_blank" : "_top")
                }
            },
            redirectWithPOST: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e) {
                    f(e) || (e = d(JetSmartFilterSettings, "siteurl") + "/" + e);
                    var i = X("<form></form>").attr("method", "post").attr("action", e);
                    r && i.attr("target", "_blank"),
                    t["jet-smart-filters-redirect"] = 1,
                    X.each(t, (function(t, e) {
                        Array.isArray(e) ? e.forEach((function(e) {
                            i.append(n(t + "[]", e))
                        }
                        )) : ("object" === Z(e) && null !== e && (e = JSON.stringify(e)),
                        i.append(n(t, e)))
                    }
                    )),
                    X(i).appendTo("body").submit()
                }
                function n(t, e) {
                    var r = X("<input></input>");
                    return r.attr("type", "hidden"),
                    r.attr("name", t),
                    r.attr("value", e),
                    r
                }
            }
        };
        var et = r(669)
          , rt = r(669);
        function it(t) {
            return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            it(t)
        }
        function nt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function ot(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, i)
            }
            return r
        }
        function at(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ot(Object(r), !0).forEach((function(e) {
                    lt(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ot(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function st(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, ut(i.key), i)
            }
        }
        function lt(t, e, r) {
            return (e = ut(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function ut(t) {
            var e = function(t) {
                if ("object" != it(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != it(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == it(e) ? e : e + ""
        }
        var ct = function() {
            return t = function t(r, i) {
                var n = this
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                lt(this, "urlPrefix", "jsf"),
                lt(this, "activeItemsExceptions", ["sorting", "pagination"]),
                this.provider = r,
                this.queryId = i,
                this.filters = [],
                this.providerSelector = this.getProviderSelector(),
                this.$provider = this.getProvider(),
                this.currentQuery = Object.assign({}, this.urlParams),
                this.isAjaxLoading = !1,
                this.urlType = d(JetSmartFilterSettings, "misc", "url_type") || "plain",
                this.baseUrl = d(JetSmartFilterSettings, "baseurl"),
                this.baseUrlParams = function() {
                    var t = y()
                      , e = d(JetSmartFilterSettings, "misc", "valid_url_params")
                      , r = "";
                    for (var i in t) {
                        var n = t[i];
                        e.includes(i) || (r += i + (n ? "=" + n : "") + "&")
                    }
                    return r && (r = "?" + r.replace(/&+$/, "")),
                    r
                }(),
                this.additionalFilters = new _(this),
                this.customProvider = new E(this),
                this.providerPreloader = new H(this),
                this.predefinedData = new Y(this),
                o.forEach((function(t) {
                    n.addFilter(t)
                }
                )),
                this.debounceProcessFilters = g(this.processFilters, 100),
                e.subscribe("fiter/change", (function(t) {
                    n.isCurrentProvider(t) && n.updateSameFilters(t)
                }
                ), !0),
                e.subscribe("fiter/syncSameFilters", (function(t) {
                    n.isCurrentProvider(t) && n.syncSameFilters(t)
                }
                ), !0),
                e.subscribe("fiter/apply", (function(t) {
                    n.isCurrentProvider(t) && n.applyFilterHandler(t.applyType)
                }
                ), !0),
                e.subscribe("fiters/apply", (function(t) {
                    n.isCurrentProvider(t) && n.applyFiltersHandler(t.applyType, !(!t.redirect || !t.redirectPath) && t.redirectPath, t.redirectInNewWindow)
                }
                ), !0),
                e.subscribe("fiters/remove", (function(t) {
                    n.isCurrentProvider(t) && n.removeFiltersHandler(t.applyType)
                }
                )),
                e.subscribe("pagination/change", (function(t) {
                    n.isCurrentProvider(t) && n.paginationСhangeHandler(t.applyType, t.topOffset)
                }
                ), !0),
                e.subscribe("pagination/load-more", (function(t) {
                    n.isCurrentProvider(t) && n.paginationLoadMoreHandler(t.topOffset)
                }
                ), !0)
            }
            ,
            r = [{
                key: "addFilter",
                value: function(t) {
                    this.filters = this.filters.filter((function(e) {
                        var r = t.path === e.path;
                        return r && t.setData && t.setData(e.data),
                        !r
                    }
                    )),
                    t.uniqueKey = this.getFilterUniqueKey(t);
                    var e = this.filters.find((function(e) {
                        return t.uniqueKey === e.uniqueKey
                    }
                    ));
                    e && (t.syncWithSameFilter ? t.syncWithSameFilter(e) : t.setData && e.data !== t.data && t.setData(e.data)),
                    this.filters.push(t),
                    this.initIndexer(t),
                    this.initTabIndex(t),
                    this.debounceProcessFilters()
                }
            }, {
                key: "processFilters",
                value: function() {
                    this.filters.length && (this.currentQuery = this.query,
                    this.setFiltersData(),
                    this.additionalFilters.updateProvider(),
                    this.predefinedData.set(),
                    this.emitFiltersProcessed())
                }
            }, {
                key: "reinitFilters",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    t && !Array.isArray(t) && (t = [t]),
                    this.filters.forEach((function(e) {
                        t && !t.includes(e.name) || e.reinit && e.reinit()
                    }
                    )),
                    this.processFilters()
                }
            }, {
                key: "applyFilterHandler",
                value: function(t) {
                    this.resetFiltersByName("pagination"),
                    this.apply(t)
                }
            }, {
                key: "applyFiltersHandler",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.resetFiltersByName("pagination"),
                    this.updateFiltersData(),
                    e ? this.doRedirect(t, e, r) : this.apply(t)
                }
            }, {
                key: "removeFiltersHandler",
                value: function(t) {
                    this.resetFiltersByName("pagination"),
                    this.resetFilters(),
                    this.apply(t)
                }
            }, {
                key: "paginationСhangeHandler",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.apply(t),
                    "reload" === t || !e && 0 !== e || et("html, body").stop().animate({
                        scrollTop: this.$provider.offset().top - e
                    }, 500)
                }
            }, {
                key: "paginationLoadMoreHandler",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.doAjax({
                        append: !0,
                        autoscroll: t
                    })
                }
            }, {
                key: "apply",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ajax";
                    this.emitActiveItems(),
                    "reload" === t ? this.doReload() : this.doAjax()
                }
            }, {
                key: "doRedirect",
                value: function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ("reload" === t)
                        tt.redirectWithGET(this.getUrl(!0), e, r);
                    else {
                        var i = at(lt({}, this.urlPrefix, this.providerKey), this.query);
                        tt.redirectWithPOST(i, e, r)
                    }
                }
            }, {
                key: "doReload",
                value: function() {
                    var t = this.getUrl(!0)
                      , e = this.baseUrl;
                    t && (e = S(this.baseUrl + t)),
                    document.location = e
                }
            }, {
                key: "doAjax",
                value: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = this.query;
                    this.$provider = this.getProvider(),
                    this.isProviderExist && !p(r, this.currentQuery) && (this.currentQuery = r,
                    this.additionalRequest || this.updateUrl(),
                    this.ajaxRequest((function(r) {
                        t.ajaxRequestCompleted(at({}, r), e)
                    }
                    )))
                }
            }, {
                key: "ajaxRequest",
                value: function(t) {
                    var e = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.query;
                    this.startAjaxLoading(),
                    tt.ajax({
                        query: r,
                        provider: this.provider,
                        queryId: this.queryId,
                        indexingFilters: this.indexingFilters
                    }).then((function(r) {
                        t(r),
                        e.endAjaxLoading()
                    }
                    )).catch((function(t) {
                        t && (console.error(t),
                        e.endAjaxLoading())
                    }
                    ))
                }
            }, {
                key: "startAjaxLoading",
                value: function() {
                    this.isAjaxLoading = !0,
                    this.providerPreloader.show(),
                    e.publish("ajaxFilters/start-loading", this.provider, this.queryId)
                }
            }, {
                key: "endAjaxLoading",
                value: function() {
                    this.isAjaxLoading = !1,
                    this.providerPreloader.hide(),
                    e.publish("ajaxFilters/end-loading", this.provider, this.queryId)
                }
            }, {
                key: "ajaxRequestCompleted",
                value: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t.pagination && d(JetSmartFilterSettings, "props", this.provider, this.queryId) && (window.JetSmartFilterSettings.props[this.provider][this.queryId] = at({}, t.pagination)),
                    t.jetFiltersIndexedData && d(JetSmartFilterSettings, "jetFiltersIndexedData", this.providerKey) && (window.JetSmartFilterSettings.jetFiltersIndexedData[this.providerKey] = t.jetFiltersIndexedData[this.providerKey]),
                    t.content && this.renderResult(t.content, r),
                    t.is_data && this.$provider.trigger("jet-filter-data-updated", [t, this]),
                    t.fragments)
                        for (var i in t.fragments) {
                            var n = rt(i);
                            n.length && n.html(t.fragments[i])
                        }
                    this.provider && this.$provider.closest(".elementor-widget-jet-engine-maps-listing, .jet-map-listing, .brxe-jet-engine-maps-listing").trigger("jet-filter-custom-content-render", t),
                    e.publish("ajaxFilters/updated", this.provider, this.queryId, t, r)
                }
            }, {
                key: "renderResult",
                value: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.$provider.length) {
                        if (et(document).find(this.$provider).length || (this.$provider = this.getProvider()),
                        r.append) {
                            var i = this.$provider
                              , n = !1;
                            if (this.providerSelectorData.list && (i = i.find(this.providerSelectorData.list).not(this.providerSelectorData.list + " " + this.providerSelectorData.list)),
                            this.providerSelectorData.item)
                                n = et(t).find(this.providerSelectorData.item).not(this.providerSelectorData.item + " " + this.providerSelectorData.item);
                            else {
                                var o = this.providerSelectorData.list || this.providerSelectorData.selector;
                                n = et('<div class="container">' + t + "</div>").find(o).not(o + " " + o).children()
                            }
                            if (r.autoscroll || 0 === r.autoscroll) {
                                var a = "number" == typeof r.autoscroll ? r.autoscroll : 0;
                                et("html, body").stop().animate({
                                    scrollTop: i.offset().top + i.outerHeight(!0) - a
                                }, 500)
                            }
                            i.append(n)
                        } else
                            "insert" === this.providerSelectorData.action ? ("epro-portfolio" === this.provider && (t = et(t).children().children()),
                            this.$provider.html(t)) : (this.$provider.replaceWith(t),
                            this.$provider = this.getProvider());
                        if (window.elementorFrontend) {
                            switch (this.provider) {
                            case "jet-engine":
                                this.$provider.closest(".elementor-widget-jet-listing-grid").length && window.elementorFrontend.hooks.doAction("frontend/element_ready/jet-listing-grid.default", this.$provider, et);
                                break;
                            case "epro-portfolio":
                                window.elementorFrontend.hooks.doAction("frontend/element_ready/portfolio.default", this.$provider.closest(".elementor-widget-portfolio"), et);
                                break;
                            case "epro-loop-builder":
                                var s = this.$provider.closest(".elementor-widget-loop-grid");
                                s.length && window.elementorFrontend.hooks.doAction("frontend/element_ready/" + s.data("widget_type"), s, et)
                            }
                            this.$provider.find("[data-element_type]").each((function(t, e) {
                                var r = et(e)
                                  , i = r.data("element_type");
                                "widget" === i && (i = r.data("widget_type"),
                                window.elementorFrontend.hooks.doAction("frontend/element_ready/widget", r, et)),
                                window.elementorFrontend.hooks.doAction("frontend/element_ready/global", r, et),
                                window.elementorFrontend.hooks.doAction("frontend/element_ready/" + i, r, et)
                            }
                            ));
                            var l = new Event("elementor/lazyload/observe");
                            document.dispatchEvent(l)
                        }
                        window.bricksIsFrontend && ["jet-engine", "jet-engine-calendar"].includes(this.provider) && document.dispatchEvent(new CustomEvent("bricks/ajax/query_result/displayed")),
                        window.JetPlugins && (window.JetPlugins.init(this.$provider),
                        this.$provider.closest('[data-is-block*="/"]').length && window.JetPlugins.initBlock(this.$provider.closest('[data-is-block*="/"]')[0], !0)),
                        e.publish("provider/content-rendered", this.provider, this.$provider),
                        et(document).trigger("jet-filter-content-rendered", [this.$provider, this, this.provider, this.queryId])
                    }
                }
            }, {
                key: "setFiltersData",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentQuery;
                    this.filters.forEach((function(e) {
                        if (!e.isHierarchy && !e.disabled) {
                            var r = e.queryKey
                              , i = t[r];
                            i && e.setData && e.setData(i)
                        }
                    }
                    )),
                    this.emitActiveItems()
                }
            }, {
                key: "updateFiltersData",
                value: function() {
                    this.filters.forEach((function(t) {
                        t.processData && t.processData()
                    }
                    ))
                }
            }, {
                key: "resetFilters",
                value: function() {
                    this.filters.forEach((function(t) {
                        t.reset && t.reset()
                    }
                    ))
                }
            }, {
                key: "updateSameFilters",
                value: function(t) {
                    this.getSameFilters(t).forEach((function(e) {
                        t.data !== e.data && (e.setData ? e.setData(t.data) : e.data = t.data)
                    }
                    ))
                }
            }, {
                key: "syncSameFilters",
                value: function(t) {
                    this.getSameFilters(t, !0).forEach((function(e) {
                        e.syncWithSameFilter && e.syncWithSameFilter(t)
                    }
                    ))
                }
            }, {
                key: "getFiltersByName",
                value: function(t) {
                    return this.filters.filter((function(e) {
                        return e.name === t
                    }
                    ))
                }
            }, {
                key: "resetFiltersByName",
                value: function(t) {
                    this.getFiltersByName(t).forEach((function(t) {
                        t.reset && t.reset()
                    }
                    ))
                }
            }, {
                key: "updateUrl",
                value: function() {
                    var t = this.filters.some((function(t) {
                        if (t.data)
                            return !0
                    }
                    ));
                    if (t) {
                        var e = this.getUrl();
                        e && history.replaceState(null, null, S(this.baseUrl + e))
                    } else
                        history.replaceState(null, null, this.baseUrl + this.baseUrlParams)
                }
            }, {
                key: "getUrl",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , e = {};
                    if (this.uniqueFilters.forEach((function(r) {
                        if (t || r.isMixed || r.isReload) {
                            var i = r.urlData;
                            if (i) {
                                var n = r.queryType
                                  , o = r.queryVar;
                                switch (n) {
                                case "tax_query":
                                    n = "tax";
                                    break;
                                case "meta_query":
                                    n = "meta";
                                    break;
                                case "date_query":
                                    n = "date",
                                    o = !1,
                                    i = i.replaceAll("/", "-");
                                    break;
                                case "sort":
                                    var a = JSON.parse(i);
                                    for (var s in o = !1,
                                    i = "",
                                    a)
                                        i += s + ":" + a[s] + ";";
                                    i = i.replace(/;\s*$/, "");
                                    break;
                                case "_s":
                                    o = !1
                                }
                                switch (r.name) {
                                case "range":
                                    o += "!range";
                                    break;
                                case "check-range":
                                    o += "!check-range";
                                    break;
                                case "date-range":
                                case "date-period":
                                    "meta" === n && (o += "!date");
                                    break;
                                case "pagination":
                                    n = "pagenum";
                                    break;
                                case "search":
                                    "meta_query" === r.queryType && (n = "_sm",
                                    o = !1,
                                    i = r.queryVar + "!" + i);
                                    break;
                                default:
                                    r.queryVarSuffix && (o += "!" + r.queryVarSuffix)
                                }
                                var u = [n];
                                o && u.push(o),
                                r.mergeSameQueryKeys && d.apply(void 0, [e].concat(u)) && (i = l(i, "operator_AND")),
                                function(t, e, r) {
                                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                    if (t)
                                        for (var n = e, o = 0; o < r.length; o++) {
                                            var a = r[o];
                                            o === r.length - 1 ? n[a] && i.merge ? n[a] = l(n[a], t) : n[a] = t : (n[a] || (n[a] = {}),
                                            n = n[a])
                                        }
                                }(i, e, u, {
                                    merge: r.mergeSameQueryKeys
                                })
                            }
                        }
                    }
                    )),
                    c(e))
                        return this.baseUrlParams || "";
                    var r = ""
                      , i = this.provider;
                    if (this.queryId && "default" !== this.queryId && (i += ":" + this.queryId),
                    "permalink" === this.urlType) {
                        for (var n in r = this.urlPrefix + "/" + i + "/",
                        "_s"in e && (e.search = e._s,
                        delete e._s),
                        "_sm"in e && (e["search-by-meta"] = e._sm,
                        delete e._sm),
                        e) {
                            var o = e[n];
                            if (r += n + "/",
                            s(o)) {
                                if (Array.isArray(o))
                                    r += encodeURIComponent(o.join()) + "/";
                                else
                                    for (var a in o)
                                        r += a + ":" + encodeURIComponent(o[a]) + ";";
                                r = r.replace(/;\s*$/, "/")
                            } else
                                r += encodeURIComponent(o) + "/"
                        }
                        this.baseUrlParams && (r += this.baseUrlParams)
                    } else
                        for (var u in r = this.baseUrlParams ? this.baseUrlParams + "&" + this.urlPrefix + "=" + i : "?" + this.urlPrefix + "=" + i,
                        e) {
                            var f = e[u];
                            if (r += "&" + u + "=",
                            s(f)) {
                                if (Array.isArray(f))
                                    r += encodeURIComponent(f.join());
                                else
                                    for (var p in f)
                                        r += p + ":" + encodeURIComponent(f[p]) + ";";
                                r = r.replace(/;\s*$/, "")
                            } else
                                r += encodeURIComponent(f)
                        }
                    return r
                }
            }, {
                key: "initIndexer",
                value: function(t) {
                    !t.indexer && t.$container && t.$container.hasClass("jet-filter-indexed") && (t.indexer = new V(t))
                }
            }, {
                key: "initTabIndex",
                value: function(t) {
                    var e = d(JetSmartFilterSettings, "plugin_settings", "use_tabindex");
                    t.tabindex || "true" !== e || (t.tabindex = new M(t))
                }
            }, {
                key: "emitFiltersProcessed",
                value: function() {
                    e.publish("filters/processed", this)
                }
            }, {
                key: "emitActiveItems",
                value: function() {
                    e.publish("activeItems/change", this.activeItems, this.provider, this.queryId)
                }
            }, {
                key: "emitHierarchyFiltersUpdate",
                value: function() {
                    e.publish("hierarchyFilters/update", this.hierarchyFilters)
                }
            }, {
                key: "isCurrentProvider",
                value: function(t) {
                    return t.provider === this.provider && t.queryId === this.queryId
                }
            }, {
                key: "getProviderSelector",
                value: function() {
                    var t = this.providerSelectorData.inDepth ? " " : "";
                    return "default" === this.queryId ? this.providerSelectorData.selector : this.providerSelectorData.idPrefix + this.queryId + t + this.providerSelectorData.selector
                }
            }, {
                key: "getProvider",
                value: function() {
                    var t = this;
                    return et(this.providerSelector).filter((function(e, r) {
                        return !et(r).parents(t.providerSelector).length
                    }
                    ))
                }
            }, {
                key: "query",
                get: function() {
                    var t = {};
                    return this.uniqueFilters.forEach((function(e) {
                        var r = e.data
                          , i = e.queryKey;
                        r && i && (t[i] && e.mergeSameQueryKeys ? t[i] = l(t[i], r, "operator_AND") : t[i] = r)
                    }
                    )),
                    t
                }
            }, {
                key: "providerKey",
                get: function() {
                    return this.provider + "/" + this.queryId
                }
            }, {
                key: "providerSelectorData",
                get: function() {
                    return d(JetSmartFilterSettings, "selectors", this.provider)
                }
            }, {
                key: "urlParams",
                get: function() {
                    var t = y();
                    return t[this.urlPrefix] === this.provider + ":" + this.queryId && (delete t[this.urlPrefix],
                    t)
                }
            }, {
                key: "activeItems",
                get: function() {
                    var t = this
                      , e = [];
                    return this.uniqueFilters.forEach((function(r) {
                        r.data && r.reset && !t.activeItemsExceptions.includes(r.name) && e.push(r)
                    }
                    )),
                    e
                }
            }, {
                key: "hierarchyFilters",
                get: function() {
                    var t = {};
                    return this.uniqueFilters.forEach((function(e) {
                        e.isHierarchy && !e.isAdditional && (t[e.filterId] || (t[e.filterId] = []),
                        t[e.filterId].push(e))
                    }
                    )),
                    !!u(t) && t
                }
            }, {
                key: "indexingFilters",
                get: function() {
                    var t = [];
                    return this.uniqueFilters.forEach((function(e) {
                        e.indexer && t.push(e.filterId)
                    }
                    )),
                    !!t.length && JSON.stringify(t)
                }
            }, {
                key: "isProviderExist",
                get: function() {
                    return !!this.$provider.length
                }
            }, {
                key: "getFilterUniqueKey",
                value: function(t) {
                    var e = t.name;
                    return t.filterId && (e += "-" + t.filterId),
                    t.isHierarchy && (e += "/hierarchical-depth-" + t.depth),
                    ["provider", "queryId", "queryKey"].forEach((function(r) {
                        t[r] && (e += "/" + t[r])
                    }
                    )),
                    e
                }
            }, {
                key: "uniqueFilters",
                get: function() {
                    return function(t) {
                        return function(t) {
                            if (Array.isArray(t))
                                return nt(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                return Array.from(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t)
                                    return nt(t, e);
                                var r = {}.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name),
                                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? nt(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(new Map(this.filters.map((function(t) {
                        return [t.uniqueKey, t]
                    }
                    ))).values())
                }
            }, {
                key: "getSameFilters",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.filters.filter((function(r) {
                        return t.uniqueKey === r.uniqueKey && (!e || t.path !== r.path)
                    }
                    ))
                }
            }],
            r && st(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }()
          , ft = r(669);
        function dt(t) {
            return dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            dt(t)
        }
        function pt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, yt(i.key), i)
            }
        }
        function ht(t, e, r) {
            return (e = yt(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function yt(t) {
            var e = function(t) {
                if ("object" != dt(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != dt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == dt(e) ? e : e + ""
        }
        var vt = function() {
            return t = function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                ht(this, "dataValue", !1),
                ht(this, "applySelector", ".apply-filters"),
                ht(this, "applyButtonSelector", ".apply-filters__button"),
                ht(this, "filtersGroupSelector", ".jet-filters-group"),
                this.$container = r,
                this.$filter = e,
                this.path = j(this.$filter.get(0)),
                this.provider = this.$filter.data("content-provider"),
                this.additionalProviders = this.$filter.data("additional-providers"),
                this.filterId = this.$filter.data("filterId"),
                this.queryId = this.$filter.data("queryId") || "default",
                this.queryType = this.$filter.data("queryType"),
                this.queryVar = this.$filter.data("queryVar"),
                this.queryVarSuffix = this.$filter.data("queryVarSuffix"),
                this.applyType = this.$filter.data("applyType") || "ajax",
                this.applyOnChanging = "submit" !== this.$filter.data("applyOn"),
                this.layoutOptions = this.$filter.data("layoutOptions"),
                this.redirect = this.$filter.data("redirect"),
                this.redirectPath = this.$filter.data("redirectPath"),
                this.redirectInNewWindow = this.$filter.data("redirectInNewWindow"),
                this.activeLabel = this.$filter.data("activeLabel"),
                this.isMixed = "mixed" === this.applyType,
                this.isReload = "reload" === this.applyType,
                this.$applyButton = ft(),
                this.isRTL = ft("body").hasClass("rtl"),
                this.$container && (this.$container.next(this.applySelector).length ? this.$applyButton = this.$container.next(this.applySelector).find(this.applyButtonSelector) : this.$container.closest(this.filtersGroupSelector).length && (this.$applyButton = this.$container.closest(this.filtersGroupSelector).next(this.applySelector).find(this.applyButtonSelector))),
                "string" != typeof this.queryId && (this.queryId = this.queryId.toString())
            }
            ,
            r = [{
                key: "initEvent",
                value: function() {
                    this.addFilterChangeEvent(),
                    this.applyOnChanging || this.addApplyEvent()
                }
            }, {
                key: "removeEvent",
                value: function() {
                    this.removeChangeEvent(),
                    this.$applyButton.off()
                }
            }, {
                key: "addApplyEvent",
                value: function() {
                    var t = this;
                    this.$applyButton.on("click", (function() {
                        t.processData(),
                        t.emitFiterApply()
                    }
                    ))
                }
            }, {
                key: "reset",
                value: function() {
                    this.dataValue = !1
                }
            }, {
                key: "show",
                value: function() {
                    this.$container.removeClass("hide")
                }
            }, {
                key: "hide",
                value: function() {
                    this.$container.addClass("hide")
                }
            }, {
                key: "showPreloader",
                value: function() {
                    this.$filter.addClass("jet-filters-loading")
                }
            }, {
                key: "hidePreloader",
                value: function() {
                    this.$filter.removeClass("jet-filters-loading")
                }
            }, {
                key: "isCurrentProvider",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        provider: !1,
                        queryId: !1
                    };
                    return t.provider === this.provider && t.queryId === this.queryId
                }
            }, {
                key: "isAdditionalProvider",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        provider: !1,
                        queryId: !1
                    }
                      , e = t.provider
                      , r = void 0 !== e && e
                      , i = t.queryId
                      , n = void 0 === i ? "default" : i;
                    return !!r && !!this.additionalProviders.includes(r + "/" + n)
                }
            }, {
                key: "wasChanged",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.applyOnChanging;
                    this.emitFiterChange(),
                    t && this.emitFiterApply()
                }
            }, {
                key: "emitFiterChange",
                value: function() {
                    e.publish("fiter/change", this)
                }
            }, {
                key: "emitFiterApply",
                value: function() {
                    e.publish("fiter/apply", this)
                }
            }, {
                key: "emitFitersApply",
                value: function() {
                    e.publish("fiters/apply", this)
                }
            }, {
                key: "emitFitersRemove",
                value: function() {
                    e.publish("fiters/remove", this)
                }
            }, {
                key: "data",
                get: function() {
                    return !(!this.dataValue || this.disabled) && this.dataValue
                }
            }, {
                key: "queryKey",
                get: function() {
                    var t, e = this.queryVarSuffix;
                    return t = "_" + this.queryType + "_" + this.queryVar,
                    e && (t += "|" + e),
                    t
                }
            }, {
                key: "copy",
                get: function() {
                    return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
                }
            }, {
                key: "containerElement",
                get: function() {
                    return !!this.$container && !!this.$container.length && this.$container.get(0)
                }
            }, {
                key: "filterGroup",
                get: function() {
                    return d(window.JetSmartFilters, "filterGroups", this.provider + "/" + this.queryId)
                }
            }, {
                key: "isAjaxLoading",
                get: function() {
                    return !!this.filterGroup && this.filterGroup.isAjaxLoading
                }
            }, {
                key: "addFilterChangeEvent",
                value: function() {
                    return !1
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    return !1
                }
            }, {
                key: "processData",
                value: function() {
                    return !1
                }
            }, {
                key: "setData",
                value: function() {
                    return !1
                }
            }, {
                key: "activeValue",
                get: function() {
                    return !1
                }
            }, {
                key: "urlData",
                get: function() {
                    return this.data
                }
            }],
            r && pt(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }()
          , mt = r(669)
          , bt = r(669);
        function gt(t) {
            return gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            gt(t)
        }
        function wt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, St(i.key), i)
            }
        }
        function St(t) {
            var e = function(t) {
                if ("object" != gt(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != gt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == gt(e) ? e : e + ""
        }
        function jt() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (jt = function() {
                return !!t
            }
            )()
        }
        function kt(t) {
            return kt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            kt(t)
        }
        function Pt(t, e) {
            return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Pt(t, e)
        }
        var Ot = function(t) {
            function e(t, r, i) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                (n = function(t, e, r) {
                    return e = kt(e),
                    function(t, e) {
                        if (e && ("object" == gt(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, jt() ? Reflect.construct(e, r || [], kt(t).constructor) : e.apply(t, r))
                }(this, e, [r, t])).$checkboxes = i || r.find(":checkbox"),
                n.$checkboxesList = t.find(".jet-checkboxes-list"),
                n.relationalOperator = n.$filter.data("relational-operator"),
                n.$allOption = n.getItemByValue("all"),
                n.canDeselect = n.$filter.data("can-deselect"),
                n.hasGroups = Boolean(n.$checkboxesList.find(".jet-list-tree").length),
                n.inputNotEmptyClass = "jet-input-not-empty",
                n.$allOption.length && n.$allOption.data("all-option", "1").val(""),
                n.processData(),
                n.initEvent(),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Pt(t, e)
            }(e, t),
            r = e,
            i = [{
                key: "addFilterChangeEvent",
                value: function() {
                    var t = this;
                    this.$checkboxes.on("change", (function(e) {
                        "AND" === t.relationalOperator && t.hasGroups && t.uncheckGroup(e.target),
                        t.processData(),
                        t.wasChanged()
                    }
                    )),
                    this.canDeselect && this.$checkboxes.on("click", (function(e) {
                        var r = mt(e.target);
                        r.val() === t.dataValue && r.prop("checked", !1).trigger("change")
                    }
                    ))
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$checkboxes.off(),
                    this.$dropdownLabel.off()
                }
            }, {
                key: "processData",
                value: function() {
                    var t = this.$checked
                      , e = !1;
                    1 === t.length ? e = t.val() : t.length > 1 && (e = [],
                    t.each((function(r) {
                        e.push(t.get(r).value)
                    }
                    )),
                    this.relationalOperator && e.push("operator_" + this.relationalOperator)),
                    this.dataValue = e,
                    this.dataValue || this.checkAllOption(),
                    this.additionalFilterSettings && this.additionalFilterSettings.dataUpdated()
                }
            }, {
                key: "setData",
                value: function(t) {
                    this.reset(),
                    t && (this.getItemsByValue(t).forEach((function(t) {
                        t.prop("checked", !0)
                    }
                    )),
                    this.processData())
                }
            }, {
                key: "reset",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    t ? (this.getItemByValue(t).prop("checked", !1),
                    this.processData()) : (this.getItemsByValue(this.dataValue).forEach((function(t) {
                        t.prop("checked", !1)
                    }
                    )),
                    this.processData())
                }
            }, {
                key: "activeValue",
                get: function() {
                    var t = this
                      , e = this.data
                      , r = ""
                      , i = "";
                    return Array.isArray(e) || (e = [e]),
                    e.forEach((function(e) {
                        var n = t.getValueLabel(e);
                        n && (r += i + n,
                        i = ", ")
                    }
                    )),
                    r || !1
                }
            }, {
                key: "isUrlValAvailable",
                get: function() {
                    return Boolean(this.$checkboxes.filter("[data-url-value]").length > 0)
                }
            }, {
                key: "urlData",
                get: function() {
                    var t = this
                      , e = this.data;
                    if (!e || !this.isUrlValAvailable)
                        return e;
                    var r = e;
                    return Array.isArray(e) ? (r = [],
                    e.forEach((function(e) {
                        r.push(t.getItemByValue(e).data("url-value") || e)
                    }
                    ))) : r = this.getItemByValue(e).data("url-value") || e,
                    r
                }
            }, {
                key: "$checked",
                get: function() {
                    return this.$checkboxes.filter(":checked")
                }
            }, {
                key: "getItemsByValue",
                value: function(t) {
                    var e = this
                      , r = [];
                    return Array.isArray(t) || (t = [t]),
                    t.forEach((function(t) {
                        r.push(e.getItemByValue(t))
                    }
                    )),
                    r
                }
            }, {
                key: "getItemByValue",
                value: function(t) {
                    return this.$checkboxes.filter('[value="' + t + '"]')
                }
            }, {
                key: "getValueLabel",
                value: function(t) {
                    return this.$checkboxes.filter('[value="' + t + '"]').data("label")
                }
            }, {
                key: "checkAllOption",
                value: function() {
                    this.$allOption && this.$allOption.prop("checked", !0)
                }
            }, {
                key: "uncheckGroup",
                value: function(t) {
                    var e = bt(t)
                      , r = Boolean(e.closest(".jet-list-tree__children").length)
                      , i = !r && Boolean(e.closest(".jet-list-tree__parent").length);
                    (i || r) && (r && (e.parents(".jet-list-tree__children").prev(".jet-list-tree__parent").find(".jet-checkboxes-list__input").prop("checked", !1),
                    e.parent().parent(".jet-list-tree__parent").next(".jet-list-tree__children").find(".jet-checkboxes-list__input").prop("checked", !1)),
                    i && e.closest(".jet-list-tree__parent").next(".jet-list-tree__children").find(".jet-checkboxes-list__input").prop("checked", !1))
                }
            }],
            i && wt(r.prototype, i),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, i
        }(vt)
          , _t = r(669);
        function Ct(t) {
            return Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ct(t)
        }
        function xt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, $t(i.key), i)
            }
        }
        function $t(t) {
            var e = function(t) {
                if ("object" != Ct(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Ct(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ct(e) ? e : e + ""
        }
        var It = function() {
            return t = function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.filter = e,
                this.$items = this.filter.$filter.find(".jet-filter-row"),
                this.inputNotEmptyClass = "jet-input-not-empty",
                this.searchClass = "jet-filter-items-search",
                this.$searchContainer = this.filter.$container.find(".".concat(this.searchClass)),
                this.$searchContainer.length && this.searchInit(),
                this.morelessClass = "jet-filter-items-moreless",
                this.$moreless = this.filter.$container.find(".".concat(this.morelessClass)),
                this.$moreless.length && this.morelessInit(),
                this.dropdownClass = "jet-filter-items-dropdown",
                this.$dropdown = this.filter.$container.find(".".concat(this.dropdownClass)),
                this.$dropdown.length && this.dropdownInit(),
                this.toggleItemsVisibility()
            }
            ,
            (e = [{
                key: "searchInit",
                value: function() {
                    var t = this;
                    this.searchValue = "",
                    this.$searchInput = this.$searchContainer.find(".".concat(this.searchClass, "__input")),
                    this.$searchClear = this.$searchContainer.find(".".concat(this.searchClass, "__clear")),
                    this.$searchInput.length && this.$searchInput.on("keyup", (function(e) {
                        t.searchApply(e.target.value)
                    }
                    )),
                    this.$searchClear.length && this.$searchClear.on("click", (function() {
                        t.searchClear()
                    }
                    ))
                }
            }, {
                key: "searchApply",
                value: function(t) {
                    this.searchValue = t.toLowerCase(),
                    this.searchValue ? this.$searchInput.addClass(this.inputNotEmptyClass) : this.$searchInput.removeClass(this.inputNotEmptyClass),
                    this.toggleItemsVisibility()
                }
            }, {
                key: "searchClear",
                value: function() {
                    this.$searchInput.val(""),
                    this.searchApply("")
                }
            }, {
                key: "morelessInit",
                value: function() {
                    var t = this;
                    this.$morelessToggle = this.$moreless.find(".".concat(this.morelessClass, "__toggle")),
                    this.numberOfDisplayed = this.$moreless.data("less-items-count"),
                    this.moreBtnText = this.$moreless.data("more-text"),
                    this.lessBtnText = this.$moreless.data("less-text"),
                    this.moreBtnClass = "jet-more-btn",
                    this.lessBtnClass = "jet-less-btn",
                    this.moreState = !1,
                    this.$morelessToggle.addClass(this.moreBtnClass),
                    this.$morelessToggle.on("click", (function() {
                        t.moreLessToggle()
                    }
                    ))
                }
            }, {
                key: "moreLessToggle",
                value: function() {
                    this.moreState ? this.switchToLess() : this.switchToMore()
                }
            }, {
                key: "switchToMore",
                value: function() {
                    this.moreState = !0,
                    this.$morelessToggle.removeClass(this.moreBtnClass).addClass(this.lessBtnClass).text(this.lessBtnText),
                    this.toggleItemsVisibility()
                }
            }, {
                key: "switchToLess",
                value: function() {
                    this.moreState = !1,
                    this.$morelessToggle.removeClass(this.lessBtnClass).addClass(this.moreBtnClass).text(this.moreBtnText),
                    this.toggleItemsVisibility()
                }
            }, {
                key: "dropdownInit",
                value: function() {
                    var t = this;
                    this.$dropdownLabel = this.$dropdown.find(".".concat(this.dropdownClass, "__label")),
                    this.$dropdownBody = this.$dropdown.find(".".concat(this.dropdownClass, "__body")),
                    this.$dropdownItems = this.$dropdownBody.find("input:checkbox, input:radio"),
                    this.dropdownOpenClass = "jet-dropdown-open",
                    this.dropdownBodyPositionTopClass = "jet-dropdown-position-top",
                    this.dropdownPlaceholderText = this.$dropdownLabel.html(),
                    this.dropdownApplyButton = this.$dropdown.find(".".concat(this.dropdownClass, "__apply-button")),
                    this.dropdownNselectedNumber = this.$dropdown.data("dropdown-n-selected"),
                    this.dropdownNselectedText = this.$dropdown.data("dropdown-n-selected-text") || "and {number} others",
                    this.dropdownNselectedEnabled = Boolean(this.dropdownNselectedNumber || 0 == this.dropdownNselectedNumber),
                    this.dropdownState = !1,
                    _t(document).on("click", (function(e) {
                        t.documentClick(e)
                    }
                    )),
                    this.$dropdownLabel.length && (this.$dropdownLabel.on("click", (function() {
                        t.dropdownToggle()
                    }
                    )),
                    this.$dropdownItems.on("click", (function() {
                        t.dropDownItemsUpdate()
                    }
                    ))),
                    this.dropdownApplyButton.length && this.dropdownApplyButton.on("click", (function() {
                        var e;
                        t.filter.processData(),
                        t.filter.emitFiterApply(),
                        null !== (e = JetSmartFilterSettings) && void 0 !== e && null !== (e = e.plugin_settings) && void 0 !== e && e.close_dropdown_on_click_apply_btn && t.dropdownToggle()
                    }
                    ))
                }
            }, {
                key: "dropdownToggle",
                value: function() {
                    this.dropdownState ? this.dropdownClose() : this.dropdownOpen()
                }
            }, {
                key: "dropdownClose",
                value: function() {
                    this.dropdownState = !1,
                    this.$dropdown.removeClass(this.dropdownOpenClass),
                    this.$dropdown.removeClass(this.dropdownBodyPositionTopClass)
                }
            }, {
                key: "dropdownOpen",
                value: function() {
                    var t = _t(document).height();
                    this.dropdownState = !0,
                    this.$dropdown.addClass(this.dropdownOpenClass),
                    this.$searchInput && this.$searchInput.focus();
                    var e = this.$dropdownLabel.outerHeight(!0) + this.$dropdownBody.outerHeight(!0)
                      , r = this.$dropdown.offset().top;
                    t > e && t < r + e && this.$dropdown.addClass(this.dropdownBodyPositionTopClass)
                }
            }, {
                key: "documentClick",
                value: function(t) {
                    _t.contains(this.$dropdown.get(0), t.target) || this.dropdownClose()
                }
            }, {
                key: "dropDownItemsUpdate",
                value: function() {
                    var t = this;
                    this.$dropdownLabel.find("*").off();
                    var e = this.filter.$checked
                      , r = this.filter.$selected;
                    if (e && e.length) {
                        this.$dropdownLabel.html("");
                        var i = _t('<div class="jet-filter-items-dropdown__active"></div>');
                        this.$dropdownLabel.append(i);
                        var n = this.dropdownNselectedEnabled ? this.filter.$checked.slice(0, this.dropdownNselectedNumber) : this.filter.$checked;
                        if (n.each((function(e) {
                            var r = n.eq(e);
                            i.append(_t('<div class="jet-filter-items-dropdown__active__item">'.concat(r.data("label"), '<span class="jet-filter-items-dropdown__active__item__remove">×</span></div>')).one("click", (function(e) {
                                e.stopPropagation(),
                                t.filter.reset(r.val()),
                                r.trigger("change")
                            }
                            )))
                        }
                        )),
                        this.dropdownNselectedEnabled && this.dropdownNselectedNumber < e.length) {
                            var o = this.dropdownNselectedText.replace("{number}", e.length - this.dropdownNselectedNumber);
                            i.append(_t('<div class="jet-filter-items-dropdown__n-selected">'.concat(o, "</div>")))
                        }
                    } else
                        r && r.val() ? this.$dropdownLabel.html(r.data("label")) : this.$dropdownLabel.html(this.dropdownPlaceholderText)
                }
            }, {
                key: "dataUpdated",
                value: function() {
                    this.$dropdown.length && this.$dropdownLabel.length && this.dropDownItemsUpdate()
                }
            }, {
                key: "toggleItemsVisibility",
                value: function() {
                    var t = this
                      , e = this.$items.filter((function(e) {
                        var r = t.$items.eq(e)
                          , i = r.find("input");
                        return !r.hasClass("jet-filter-row-hide") && (t.searchValue && -1 === i.data("label").toString().toLowerCase().indexOf(t.searchValue) ? (r.hide(),
                        !1) : (r.show(),
                        !0))
                    }
                    ));
                    if (this.numberOfDisplayed)
                        if (e.length > this.numberOfDisplayed) {
                            if (!this.moreState)
                                for (var r = this.numberOfDisplayed; r < e.length; r++)
                                    e.eq(r).hide();
                            this.$moreless.show()
                        } else
                            this.$moreless.hide()
                }
            }]) && xt(t.prototype, e),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, e
        }()
          , Ft = r(669);
        function Et(t) {
            return Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Et(t)
        }
        function Dt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, Rt(i.key), i)
            }
        }
        function Tt(t, e, r) {
            return e && Dt(t.prototype, e),
            r && Dt(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function Rt(t) {
            var e = function(t) {
                if ("object" != Et(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Et(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Et(e) ? e : e + ""
        }
        var At = Tt((function t(e) {
            var r = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.collapsibleLists = [],
            this.settings = Object.assign({
                collapsed: !0,
                collapseSpeed: 300,
                animate: !0,
                collapsibleElementClass: "jet-list-collapsible",
                toggleElementClass: "jet-list-tree__parent",
                contentElementClass: "jet-list-tree__children",
                toggleCollapsedClass: "jet-list-toggle-collapsed",
                contentCollapsedClass: "jet-list-content-collapsed",
                excludedClickelEmentsSelector: "label"
            }, i),
            e.$container.find("." + this.settings.collapsibleElementClass + " ." + this.settings.toggleElementClass).each((function(t, e) {
                var i = Ft(e)
                  , n = i.next();
                if (n.hasClass(r.settings.contentElementClass)) {
                    r.collapsibleLists.push({
                        $toggle: i,
                        $content: n
                    });
                    var o = !!n.find("input:checked").length;
                    r.settings.collapsed && !o ? (i.addClass(r.settings.toggleCollapsedClass),
                    n.addClass(r.settings.contentCollapsedClass).slideUp(0)) : (i.removeClass(r.settings.toggleCollapsedClass),
                    n.removeClass(r.settings.contentCollapsedClass).slideDown(0)),
                    i.click((function(t) {
                        i.toggleClass(r.settings.toggleCollapsedClass),
                        n.toggleClass(r.settings.contentCollapsedClass).slideToggle(r.settings.collapseSpeed)
                    }
                    )),
                    i.find(r.settings.excludedClickelEmentsSelector).click((function(t) {
                        t.stopPropagation()
                    }
                    ))
                }
            }
            ))
        }
        ));
        function Vt(t) {
            return Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Vt(t)
        }
        function Bt() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Bt = function() {
                return !!t
            }
            )()
        }
        function qt(t) {
            return qt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            qt(t)
        }
        function Nt(t, e) {
            return Nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Nt(t, e)
        }
        function Lt(t) {
            var e = function(t) {
                if ("object" != Vt(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Vt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Vt(e) ? e : e + ""
        }
        var Mt = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-checkboxes-list");
                return r = function(t, e, r) {
                    return e = qt(e),
                    function(t, e) {
                        if (e && ("object" == Vt(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Bt() ? Reflect.construct(e, r || [], qt(t).constructor) : e.apply(t, r))
                }(this, e, [t, a]),
                i = r,
                o = "checkboxes",
                (n = Lt(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r.mergeSameQueryKeys = !0,
                r.additionalFilterSettings = new It(r),
                r.collapsibleList = new At(r),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Nt(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(Ot);
        function Gt(t) {
            return Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Gt(t)
        }
        function Jt() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Jt = function() {
                return !!t
            }
            )()
        }
        function Ut(t) {
            return Ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Ut(t)
        }
        function Ht(t, e) {
            return Ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ht(t, e)
        }
        function Kt(t) {
            var e = function(t) {
                if ("object" != Gt(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Gt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Gt(e) ? e : e + ""
        }
        var Wt = function(t) {
            function e(t) {
                var r, i, n, o;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                r = function(t, e, r) {
                    return e = Ut(e),
                    function(t, e) {
                        if (e && ("object" == Gt(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Jt() ? Reflect.construct(e, r || [], Ut(t).constructor) : e.apply(t, r))
                }(this, e, [t]),
                i = r,
                o = "check-range",
                (n = Kt(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r.mergeSameQueryKeys = !1,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Ht(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(Mt)
          , zt = r(669)
          , Qt = r(669);
        function Yt(t) {
            return Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Yt(t)
        }
        function Xt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, Zt(i.key), i)
            }
        }
        function Zt(t) {
            var e = function(t) {
                if ("object" != Yt(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Yt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Yt(e) ? e : e + ""
        }
        function te() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (te = function() {
                return !!t
            }
            )()
        }
        function ee(t) {
            return ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            ee(t)
        }
        function re(t, e) {
            return re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            re(t, e)
        }
        var ie = function(t) {
            function e(t, r, i) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                (n = function(t, e, r) {
                    return e = ee(e),
                    function(t, e) {
                        if (e && ("object" == Yt(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, te() ? Reflect.construct(e, r || [], ee(t).constructor) : e.apply(t, r))
                }(this, e, [r, t])).$select = i || r.find("select"),
                n.$allOption = n.getItemByValue("all"),
                n.isSelect = "SELECT" === n.$select.prop("tagName"),
                n.canDeselect = n.$filter.data("can-deselect"),
                n.$allOption.length && n.$allOption.data("all-option", "1").val(""),
                n.processData(),
                n.initEvent(),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && re(t, e)
            }(e, t),
            r = e,
            (i = [{
                key: "addFilterChangeEvent",
                value: function() {
                    var t = this;
                    this.$select.on("change", (function() {
                        t.processData(),
                        t.wasChanged()
                    }
                    )),
                    !this.isSelect && this.canDeselect && this.$select.on("click", (function(e) {
                        var r = zt(e.target);
                        r.val() === t.dataValue && r.prop("checked", !1).trigger("change")
                    }
                    ))
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$select.off()
                }
            }, {
                key: "processData",
                value: function() {
                    this.dataValue = this.$selected.val(),
                    this.dataValue || this.checkAllOption(),
                    this.additionalFilterSettings && this.additionalFilterSettings.dataUpdated()
                }
            }, {
                key: "setData",
                value: function(t) {
                    if (this.reset(),
                    t) {
                        var e = this.getItemByValue(t);
                        e && e.prop(this.isSelect ? "selected" : "checked", !0),
                        this.processData()
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.$selected.prop(this.isSelect ? "selected" : "checked", !1),
                    this.processData()
                }
            }, {
                key: "activeValue",
                get: function() {
                    var t = this.getItemByValue(this.data);
                    if (t)
                        return t.data("label")
                }
            }, {
                key: "isUrlValAvailable",
                get: function() {
                    return Boolean((this.isSelect ? this.$select.find("[data-url-value]") : this.$select.filter("[data-url-value]")).length > 0)
                }
            }, {
                key: "urlData",
                get: function() {
                    var t = this.data;
                    return t && this.isUrlValAvailable && this.getItemByValue(t).data("url-value") || t
                }
            }, {
                key: "$selected",
                get: function() {
                    return this.isSelect ? this.$select.find(":checked") : this.$select.filter(":checked")
                }
            }, {
                key: "getItemByValue",
                value: function(t) {
                    var e = !1;
                    return this.isSelect ? this.$select.find("option").each((function(r, i) {
                        var n = Qt(i);
                        n.val() === t && (e = n)
                    }
                    )) : e = this.$select.filter('[value="' + t + '"]'),
                    e
                }
            }, {
                key: "checkAllOption",
                value: function() {
                    this.$allOption && this.$allOption.prop("checked", !0)
                }
            }]) && Xt(r.prototype, i),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, i
        }(vt);
        function ne(t) {
            return ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ne(t)
        }
        function oe() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (oe = function() {
                return !!t
            }
            )()
        }
        function ae(t) {
            return ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            ae(t)
        }
        function se(t, e) {
            return se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            se(t, e)
        }
        function le(t) {
            var e = function(t) {
                if ("object" != ne(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != ne(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ne(e) ? e : e + ""
        }
        var ue = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-select");
                return r = function(t, e, r) {
                    return e = ae(e),
                    function(t, e) {
                        if (e && ("object" == ne(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, oe() ? Reflect.construct(e, r || [], ae(t).constructor) : e.apply(t, r))
                }(this, e, [t, a]),
                i = r,
                o = "select",
                (n = le(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r.mergeSameQueryKeys = !0,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && se(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(ie)
          , ce = r(669);
        function fe(t) {
            return fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            fe(t)
        }
        function de(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function pe(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, ye(i.key), i)
            }
        }
        function he(t, e, r) {
            return (e = ye(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function ye(t) {
            var e = function(t) {
                if ("object" != fe(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != fe(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == fe(e) ? e : e + ""
        }
        var ve = function() {
            return t = function t(r) {
                var i = this;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                he(this, "name", "select-hierarchical"),
                he(this, "filters", []);
                var n = r.find(".jet-select");
                n.length && (n.each((function(t) {
                    var e = n.eq(t)
                      , o = new ie(r,e);
                    o.hierarchicalInstance = i,
                    o.name = "select",
                    o.$container = r,
                    o.isHierarchy = !0,
                    o.depth = t,
                    i.filters.push(o),
                    o.processData = function() {
                        i.hierarchicalFilterProcessData(o)
                    }
                }
                )),
                this.isHierarchy = !0,
                this.indexer = r.hasClass("jet-filter-indexed"),
                this.lastFilter = this.filters[this.filters.length - 1],
                this.filterId = this.lastFilter.filterId,
                e.subscribe("fiter/change", (function(t) {
                    t.filterId !== i.filterId || t.isReload && t.applyOnChanging || i.getNextHierarchyLevels(t)
                }
                )),
                e.subscribe("fiters/remove", (function(t) {
                    i.lastFilter.isCurrentProvider(t) && i.clearHierarchyLevels()
                }
                )),
                e.subscribe("hierarchyFilters/update", (function(t) {
                    t[i.filterId] && i.updateHierarchyLevels()
                }
                )),
                e.subscribe("hierarchyFilters/updateLevels", (function(t, e) {
                    if (i.filterId === t.filterId)
                        for (var r = 1; r < i.count; r++) {
                            var n = i.filters[r]
                              , o = ce(e["level_" + r]).find("select").html();
                            o && (n.$select.html(o),
                            i.updateFilterIndexer(n))
                        }
                }
                )),
                setTimeout((function() {
                    i.filters.forEach((function(t) {
                        t.dataValue || t.$select.val("")
                    }
                    ))
                }
                )))
            }
            ,
            r = [{
                key: "setData",
                value: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e]
                          , i = this.filters[e];
                        i && (i.dataValue = r)
                    }
                    this.updateHierarchyLevels()
                }
            }, {
                key: "hierarchicalFilterProcessData",
                value: function(t) {
                    t.dataValue = t.$selected.val(),
                    t.additionalFilterSettings && t.additionalFilterSettings.dataUpdated()
                }
            }, {
                key: "getNextHierarchyLevels",
                value: function(t) {
                    var e = t.depth + 1
                      , r = [];
                    if (e) {
                        for (var i = e; i < this.filters.length; i++)
                            this.filters[i].reset(),
                            this.filters[i].showPreloader();
                        for (var n = 0; n < e; n++) {
                            var o = this.filters[n];
                            r.push({
                                value: o.data,
                                tax: o.queryVar
                            })
                        }
                        this.ajaxRequest({
                            values: r,
                            depth: e,
                            args: t.layoutOptions || !1
                        })
                    }
                }
            }, {
                key: "updateHierarchyLevels",
                value: function() {
                    var t = this
                      , r = []
                      , i = null;
                    this.filters.forEach((function(t) {
                        t.dataValue && (null === i && (i = t.layoutOptions || !1),
                        r.push({
                            value: t.data,
                            tax: t.queryVar
                        }),
                        t.showPreloader())
                    }
                    )),
                    this.ajaxRequest({
                        values: r,
                        args: i
                    }, (function() {
                        t.filters.forEach((function(t) {
                            t.setData(t.data)
                        }
                        ));
                        var r = t.filters[0];
                        r && e.publish("activeItems/rebuild", r.provider, r.queryId)
                    }
                    ))
                }
            }, {
                key: "clearHierarchyLevels",
                value: function() {
                    (function(t) {
                        return function(t) {
                            if (Array.isArray(t))
                                return t
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                return Array.from(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t)
                                    return de(t, e);
                                var r = {}.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name),
                                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? de(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }
                    )(this.filters).slice(1).forEach((function(t) {
                        t.$select.find("option").each((function(t, e) {
                            0 !== t && ce(e).remove()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "ajaxRequest",
                value: function(t, r) {
                    var i = this
                      , n = t.values
                      , o = t.depth
                      , a = void 0 !== o && o
                      , s = t.indexer
                      , l = void 0 === s ? this.indexer : s
                      , u = t.args
                      , c = void 0 !== u && u
                      , f = {
                        action: "jet_smart_filters_get_hierarchy_level",
                        filter_id: this.filterId,
                        values: n
                    };
                    a && (f.depth = a),
                    l && (f.indexer = l),
                    c && (f.args = c),
                    ce.ajax({
                        url: JetSmartFilterSettings.ajaxurl,
                        type: "POST",
                        dataType: "json",
                        data: f
                    }).done((function(t) {
                        e.publish("hierarchyFilters/updateLevels", i, t.data),
                        "function" == typeof r && r(),
                        e.publish("hierarchyFilters/levelsUpdated", i.filterId)
                    }
                    )).always((function() {
                        i.filters.forEach((function(t) {
                            t.hidePreloader()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "updateFilterIndexer",
                value: function(t) {
                    if (t.indexer) {
                        var e = t.isReload
                          , r = "never" === t.indexer.changeCounte;
                        (e || r) && t.indexer.set()
                    }
                }
            }, {
                key: "count",
                get: function() {
                    return this.filters.length
                }
            }],
            r && pe(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }();
        function me(t) {
            return me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            me(t)
        }
        function be(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, ge(i.key), i)
            }
        }
        function ge(t) {
            var e = function(t) {
                if ("object" != me(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != me(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == me(e) ? e : e + ""
        }
        function we() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (we = function() {
                return !!t
            }
            )()
        }
        function Se(t) {
            return Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Se(t)
        }
        function je(t, e) {
            return je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            je(t, e)
        }
        function ke(t) {
            return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ke(t)
        }
        function Pe() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Pe = function() {
                return !!t
            }
            )()
        }
        function Oe(t) {
            return Oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Oe(t)
        }
        function _e(t, e) {
            return _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            _e(t, e)
        }
        function Ce(t) {
            var e = function(t) {
                if ("object" != ke(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != ke(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ke(e) ? e : e + ""
        }
        var xe = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-range");
                return r = function(t, e, r) {
                    return e = Oe(e),
                    function(t, e) {
                        if (e && ("object" == ke(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Pe() ? Reflect.construct(e, r || [], Oe(t).constructor) : e.apply(t, r))
                }(this, e, [t, a]),
                i = r,
                o = "range",
                (n = Ce(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && _e(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(function(t) {
            function e(t, r, i, n, o, a, s, l, u, c, f) {
                var d;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                (d = function(t, e, r) {
                    return e = Se(e),
                    function(t, e) {
                        if (e && ("object" == me(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, we() ? Reflect.construct(e, r || [], Se(t).constructor) : e.apply(t, r))
                }(this, e, [r, t])).$sliderInputMin = i || d.$filter.find(".jet-range__slider__input--min"),
                d.$sliderInputMax = n || d.$filter.find(".jet-range__slider__input--max"),
                d.$sliderValuesMin = o || d.$filter.find(".jet-range__values-min"),
                d.$sliderValuesMax = a || d.$filter.find(".jet-range__values-max"),
                d.$sliderTrackRange = s || d.$filter.find(".jet-range__slider__track__range"),
                d.$rangeInputMin = l || d.$filter.find(".jet-range__inputs__min"),
                d.$rangeInputMax = u || d.$filter.find(".jet-range__inputs__max"),
                d.$rangeInputs = d.$rangeInputMin.add(d.$rangeInputMax),
                d.$sliderInputs = d.$sliderInputMin.add(d.$sliderInputMax),
                d.$inputs = d.$sliderInputMin.add(d.$sliderInputMax).add(d.$rangeInputMin).add(d.$rangeInputMax),
                d.minConstraint = parseFloat(d.$sliderInputMin.attr("min")),
                d.maxConstraint = parseFloat(d.$sliderInputMax.attr("max")),
                d.step = parseFloat(d.$sliderInputMax.attr("step")),
                d.minVal = parseFloat(d.$sliderInputMin.val()),
                d.maxVal = parseFloat(d.$sliderInputMax.val()),
                d.prefix = c || d.$filter.find(".jet-range__values-prefix").first().text() || !1,
                d.suffix = f || d.$filter.find(".jet-range__values-suffix").first().text() || !1,
                d.format = d.$filter.data("format") || {
                    thousands_sep: "",
                    decimal_sep: "",
                    decimal_num: 0
                },
                d.format.thousands_sep = d.format.thousands_sep.replace(/&nbsp;/g, " "),
                d.rangeInputsSeparators = d.$filter.data("inputs-separators"),
                d.initSlider(),
                d.processData(),
                d.initEvent(),
                d.valuesUpdated(),
                d
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && je(t, e)
            }(e, t),
            r = e,
            i = [{
                key: "initSlider",
                value: function() {
                    var t = this;
                    this.$filter.on("mousemove touchstart", this.findClosestRange.bind(this)),
                    this.$sliderInputMin.on("input", (function(e) {
                        t.minVal = parseFloat(t.$sliderInputMin.val()),
                        t.valuesUpdated("min")
                    }
                    )),
                    this.$sliderInputMax.on("input", (function() {
                        t.maxVal = parseFloat(t.$sliderInputMax.val()),
                        t.valuesUpdated("max")
                    }
                    )),
                    this.$rangeInputs.length && this.$rangeInputs.on("input keydown blur", (function(e) {
                        var r = e.target
                          , i = r.value
                          , n = "";
                        if (r.hasAttribute("min-range") && (n = "min"),
                        r.hasAttribute("max-range") && (n = "max"),
                        n) {
                            if (t.rangeInputsSeparators) {
                                var o = r.oldValue || ""
                                  , a = r.selectionEnd;
                                if (i !== o) {
                                    t.rangeInputUpdateValue(n, i);
                                    var s = r.value
                                      , l = r.numericValue;
                                    switch (n) {
                                    case "min":
                                        t.minVal = t.inputNumberRangeValidation(l);
                                        break;
                                    case "max":
                                        t.maxVal = t.inputNumberRangeValidation(l)
                                    }
                                    if (s.length === r.selectionEnd) {
                                        var u = -1;
                                        s !== o && (u = s.slice(0, a).split(t.format.thousands_sep).length - 1 - (o.slice(0, a).split(t.format.thousands_sep).length - 1)),
                                        s === o && [t.format.thousands_sep, t.format.decimal_sep].includes(s.charAt(a)) && (u = 0),
                                        r.setSelectionRange(a + u, a + u)
                                    }
                                }
                            } else
                                switch (n) {
                                case "min":
                                    t.minVal = t.inputNumberRangeValidation(i || t.minConstraint);
                                    break;
                                case "max":
                                    t.maxVal = t.inputNumberRangeValidation(i || t.maxConstraint)
                                }
                            "blur" !== e.type && 13 !== e.keyCode || t.valuesUpdated(n)
                        }
                    }
                    ))
                }
            }, {
                key: "addFilterChangeEvent",
                value: function() {
                    var t = this;
                    this.$sliderInputs.on("mouseup touchend", (function() {
                        t.processData(),
                        t.wasChanged()
                    }
                    )),
                    this.$rangeInputs.on("change", (function() {
                        t.processData(),
                        t.wasChanged()
                    }
                    ))
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$filter.off(),
                    this.$inputs.off()
                }
            }, {
                key: "processData",
                value: function() {
                    this.$rangeInputMin.length && this.rangeInputUpdateValue("min", this.minVal),
                    this.$rangeInputMax.length && this.rangeInputUpdateValue("max", this.maxVal),
                    this.minVal != this.minConstraint || this.maxVal != this.maxConstraint ? this.dataValue = this.minVal + "_" + this.maxVal : this.dataValue = !1
                }
            }, {
                key: "setData",
                value: function(t) {
                    if (this.reset(),
                    t) {
                        var e = t.split("_");
                        e[0] && (this.minVal = parseFloat(e[0]),
                        this.$sliderInputMin.val(this.minVal)),
                        e[1] && (this.maxVal = parseFloat(e[1]),
                        this.$sliderInputMax.val(this.maxVal)),
                        this.valuesUpdated(),
                        this.processData()
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.dataValue = !1,
                    this.minVal = this.minConstraint,
                    this.maxVal = this.maxConstraint,
                    this.$sliderInputMin.val(this.minVal),
                    this.$sliderInputMax.val(this.maxVal),
                    this.valuesUpdated(),
                    this.processData()
                }
            }, {
                key: "findClosestRange",
                value: function(t) {
                    var e = !1;
                    if ("mousemove" === t.type && (e = t.clientX),
                    "touchstart" === t.type && t.touches[0] && (e = t.touches[0].clientX),
                    e) {
                        var r = e - t.target.getBoundingClientRect().left
                          , i = parseFloat(this.$sliderInputMax.width())
                          , n = parseFloat(this.$sliderInputMin.val())
                          , o = (parseFloat(this.$sliderInputMax.val()) + n) / 2;
                        (this.isRTL ? (this.minConstraint - this.maxConstraint) * (r / i) + this.maxConstraint : (this.maxConstraint - this.minConstraint) * (r / i) + this.minConstraint) > o ? this.swapInput("max") : this.swapInput("min")
                    }
                }
            }, {
                key: "swapInput",
                value: function(t) {
                    switch (t) {
                    case "min":
                        this.$sliderInputMin.css("z-index", 21),
                        this.$sliderInputMax.css("z-index", 20);
                        break;
                    case "max":
                        this.$sliderInputMin.css("z-index", 20),
                        this.$sliderInputMax.css("z-index", 21)
                    }
                }
            }, {
                key: "valuesUpdated",
                value: function() {
                    switch (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) {
                    case "min":
                        Number(this.minVal) > Number(this.maxVal) - this.step && (this.minVal = Number(this.maxVal) - this.step),
                        this.$sliderInputMin.val(this.minVal),
                        this.rangeInputUpdateValue("min", this.minVal);
                        break;
                    case "max":
                        Number(this.maxVal) < Number(this.minVal) + this.step && (this.maxVal = Number(this.minVal) + this.step),
                        this.$sliderInputMax.val(this.maxVal),
                        this.rangeInputUpdateValue("max", this.maxVal)
                    }
                    this.$sliderValuesMin.length && this.$sliderValuesMin.html(this.getFormattedData(this.minVal)),
                    this.$sliderValuesMax.length && this.$sliderValuesMax.html(this.getFormattedData(this.maxVal));
                    var t = (this.minVal - this.minConstraint) / (this.maxConstraint - this.minConstraint) * 100
                      , e = (this.maxVal - this.minConstraint) / (this.maxConstraint - this.minConstraint) * 100;
                    this.$sliderTrackRange.css({
                        "--low": t + "%",
                        "--high": e + "%"
                    })
                }
            }, {
                key: "inputNumberRangeValidation",
                value: function(t) {
                    return t < this.minConstraint ? this.minConstraint : t > this.maxConstraint ? this.maxConstraint : t
                }
            }, {
                key: "getFormattedData",
                value: function(t) {
                    var e = "\\d(?=(\\d{3})+" + (this.format.decimal_num > 0 ? "\\D" : "$") + ")"
                      , r = t.toFixed(Math.max(0, ~~this.format.decimal_num));
                    return (this.format.decimal_sep ? r.replace(".", this.format.decimal_sep) : r).replace(new RegExp(e,"g"), "$&" + (this.format.thousands_sep || ""))
                }
            }, {
                key: "restoreFormattedData",
                value: function(t) {
                    return "number" == typeof t ? t : (this.format.thousands_sep && (t = t.replace(new RegExp("\\" + this.format.thousands_sep,"g"), "")),
                    this.format.thousands_sep && (t = t.replace(this.format.decimal_sep, ".")),
                    parseFloat(this.removeNonNumeric(t)))
                }
            }, {
                key: "removeNonNumeric",
                value: function(t) {
                    return t.replace(/[^\d.-]/g, "")
                }
            }, {
                key: "rangeInputUpdateValue",
                value: function(t, e) {
                    if (this.$rangeInputs.length) {
                        var r;
                        switch (t) {
                        case "min":
                            r = this.$rangeInputMin[0];
                            break;
                        case "max":
                            r = this.$rangeInputMax[0];
                            break;
                        default:
                            return
                        }
                        if (this.rangeInputsSeparators) {
                            var i = this.restoreFormattedData(e)
                              , n = this.getFormattedData(i);
                            if (isNaN(i))
                                switch (r.value = "",
                                t) {
                                case "min":
                                    r.numericValue = this.minConstraint;
                                    break;
                                case "max":
                                    r.numericValue = this.maxConstraint
                                }
                            else
                                r.value = n,
                                r.numericValue = i;
                            r.oldValue = r.value
                        } else if ("" !== e)
                            r.value = e;
                        else
                            switch (t) {
                            case "min":
                                r.value = this.minConstraint;
                                break;
                            case "max":
                                r.value = this.maxConstraint
                            }
                    }
                }
            }, {
                key: "activeValue",
                get: function() {
                    if ("string" == typeof this.dataValue) {
                        var t = this.dataValue.split("_")
                          , e = "";
                        return t[0] && (this.prefix && (e += this.prefix),
                        e += this.getFormattedData(parseFloat(t[0])),
                        this.suffix && (e += this.suffix),
                        t[1] && (e += " — ")),
                        t[1] && (this.prefix && (e += this.prefix),
                        e += this.getFormattedData(parseFloat(t[1])),
                        this.suffix && (e += this.suffix)),
                        e
                    }
                    return this.dataValue
                }
            }],
            i && be(r.prototype, i),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, i
        }(vt))
          , $e = r(669);
        function Ie(t) {
            return Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ie(t)
        }
        function Fe(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, i)
            }
            return r
        }
        function Ee(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Fe(Object(r), !0).forEach((function(e) {
                    De(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function De(t, e, r) {
            return (e = function(t) {
                var e = function(t) {
                    if ("object" != Ie(t) || !t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var r = e.call(t, "string");
                        if ("object" != Ie(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == Ie(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        var Te = {
            datePicker: {
                init: function(t) {
                    var e = t.$input
                      , r = t.id
                      , i = void 0 !== r && r
                      , n = t.datepickerOptions
                      , o = void 0 !== n && n
                      , a = d(JetSmartFilterSettings, "misc", "week_start") || 1
                      , s = Ee(Ee({
                        dateFormat: "mm/dd/yy",
                        firstDay: parseInt(a, 10)
                    }, Te.datePicker.texts), {}, {
                        beforeShow: function(t, e) {
                            i && e.dpDiv.addClass("jet-smart-filters-datepicker-" + i)
                        }
                    });
                    return e.datepicker(o ? Object.assign(s, o) : s)
                },
                formatDate: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mm/dd/yy"
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , i = Te.datePicker.texts
                      , n = {
                        monthNames: i.monthNames,
                        monthNamesShort: i.monthNamesShort,
                        dayNames: i.dayNames,
                        dayNamesShort: i.dayNamesShort
                    };
                    return $e.datepicker.formatDate(e, t, Object.assign(n, r))
                },
                parseDate: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mm/dd/yy"
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , i = Te.datePicker.texts
                      , n = {
                        monthNames: i.monthNames,
                        monthNamesShort: i.monthNamesShort,
                        dayNames: i.dayNames,
                        dayNamesShort: i.dayNamesShort
                    }
                      , o = {
                        date: $e.datepicker.parseDate(e, t, Object.assign(n, r)),
                        value: ""
                    };
                    return o.value = v(o.date) || "",
                    o
                },
                get texts() {
                    var t = d(JetSmartFilterSettings, "datePickerData");
                    return {
                        closeText: t.closeText,
                        prevText: t.prevText,
                        nextText: t.nextText,
                        currentText: t.currentText,
                        monthNames: t.monthNames,
                        monthNamesShort: t.monthNamesShort,
                        dayNames: t.dayNames,
                        dayNamesShort: t.dayNamesShort,
                        dayNamesMin: t.dayNamesMin,
                        weekHeader: t.weekHeader
                    }
                }
            },
            dateRange: {
                inputSelector: ".jet-date-range__input",
                submitSelector: ".jet-date-range__submit",
                fromSelector: ".jet-date-range__from",
                toSelector: ".jet-date-range__to",
                init: function(t) {
                    var e = t.id
                      , r = void 0 !== e && e
                      , i = t.$container
                      , n = void 0 !== i && i
                      , o = t.$dateRangeInput
                      , a = void 0 === o ? a || n.find(Te.dateRange.inputSelector) : o
                      , s = t.$dateRangeFrom
                      , l = void 0 === s ? l || n.find(Te.dateRange.fromSelector) : s
                      , u = t.$dateRangeTo
                      , c = void 0 === u ? c || n.find(Te.dateRange.toSelector) : u
                      , f = t.onChange
                      , d = void 0 === f ? d || void 0 : f
                      , p = a.data("date-format") || "mm/dd/yy"
                      , h = b(a.data("mindate")) || null
                      , y = b(a.data("maxdate")) || null
                      , v = {
                        dateFormat: p,
                        minDate: h,
                        maxDate: y
                    }
                      , m = Te.datePicker.init({
                        $input: l,
                        id: r,
                        datepickerOptions: v
                    }).on("change", (function() {
                        var t = Te.datePicker.parseDate(l.val(), p)
                          , e = Te.datePicker.parseDate(c.val(), p);
                        t.value || e.value ? a.val(t.value + "-" + e.value) : a.val(""),
                        d && d("from", t.date),
                        g.datepicker("option", "minDate", t.date || h)
                    }
                    ))
                      , g = Te.datePicker.init({
                        $input: c,
                        id: r,
                        datepickerOptions: v
                    }).on("change", (function() {
                        var t = Te.datePicker.parseDate(l.val(), p)
                          , e = Te.datePicker.parseDate(c.val(), p);
                        t.value || e.value ? a.val(t.value + "-" + e.value) : a.val(""),
                        d && d("from", t.date),
                        m.datepicker("option", "maxDate", e.date || y)
                    }
                    ))
                }
            }
        };
        const Re = Te;
        function Ae(t) {
            return Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ae(t)
        }
        function Ve(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, Me(i.key), i)
            }
        }
        function Be() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Be = function() {
                return !!t
            }
            )()
        }
        function qe(t) {
            return qe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            qe(t)
        }
        function Ne(t, e) {
            return Ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ne(t, e)
        }
        function Le(t, e, r) {
            return (e = Me(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Me(t) {
            var e = function(t) {
                if ("object" != Ae(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Ae(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ae(e) ? e : e + ""
        }
        function Ge(t) {
            return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ge(t)
        }
        function Je() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Je = function() {
                return !!t
            }
            )()
        }
        function Ue(t) {
            return Ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Ue(t)
        }
        function He(t, e) {
            return He = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            He(t, e)
        }
        function Ke(t) {
            var e = function(t) {
                if ("object" != Ge(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Ge(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ge(e) ? e : e + ""
        }
        var We = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-date-range");
                return r = function(t, e, r) {
                    return e = Ue(e),
                    function(t, e) {
                        if (e && ("object" == Ge(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Je() ? Reflect.construct(e, r || [], Ue(t).constructor) : e.apply(t, r))
                }(this, e, [t, a]),
                i = r,
                o = "date-range",
                (n = Ke(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && He(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(function(t) {
            function e(t, r, i, n, o, a) {
                var s;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                Le(s = function(t, e, r) {
                    return e = qe(e),
                    function(t, e) {
                        if (e && ("object" == Ae(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Be() ? Reflect.construct(e, r || [], qe(t).constructor) : e.apply(t, r))
                }(this, e, [r, t]), "dateRangeInputSelector", Re.dateRange.inputSelector),
                Le(s, "dateRangeSubmitSelector", Re.dateRange.submitSelector),
                Le(s, "dateRangeFromSelector", Re.dateRange.fromSelector),
                Le(s, "dateRangeToSelector", Re.dateRange.toSelector),
                s.$dateRangeInput = i || r.find(s.dateRangeInputSelector),
                s.$dateRangeSubmit = n || r.find(s.dateRangeSubmitSelector),
                s.$dateRangeFrom = o || r.find(s.dateRangeFromSelector),
                s.$dateRangeTo = a || r.find(s.dateRangeToSelector),
                s.dateFormat = s.$dateRangeInput.data("date-format") || "mm/dd/yy",
                s.initDateRangeUI(),
                s.processData(),
                s.addFilterChangeEvent(),
                s
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Ne(t, e)
            }(e, t),
            r = e,
            (i = [{
                key: "initDateRangeUI",
                value: function() {
                    var t = this;
                    Re.dateRange.init({
                        id: this.$filter.closest(".elementor-widget-jet-smart-filters-date-range").data("id") || this.$filter.closest(".jet-sm-gb-wrapper").data("block-id") || this.$filter.closest(".brxe-jet-smart-filters-date-range").attr("id"),
                        $dateRangeInput: this.$dateRangeInput,
                        $dateRangeFrom: this.$dateRangeFrom,
                        $dateRangeTo: this.$dateRangeTo,
                        onChange: function() {
                            t.processData(),
                            t.emitFiterChange()
                        }
                    })
                }
            }, {
                key: "addFilterChangeEvent",
                value: function() {
                    var t = this;
                    this.$dateRangeSubmit.on("click", (function() {
                        t.emitFiterApply()
                    }
                    ))
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$dateRangeSubmit.off()
                }
            }, {
                key: "processData",
                value: function() {
                    this.dataValue = this.$dateRangeInput.val()
                }
            }, {
                key: "setData",
                value: function(t) {
                    if (this.reset(),
                    t) {
                        this.$dateRangeInput.val(t);
                        var e = t.split("-");
                        e[0] && this.$dateRangeFrom.val(Re.datePicker.formatDate(new Date(e[0].replaceAll(".", "/")), this.dateFormat)),
                        e[1] && this.$dateRangeTo.val(Re.datePicker.formatDate(new Date(e[1].replaceAll(".", "/")), this.dateFormat)),
                        this.processData()
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.dataValue = !1,
                    this.$dateRangeInput.val(""),
                    this.$dateRangeFrom.val(""),
                    this.$dateRangeFrom.datepicker("option", "maxDate", null),
                    this.$dateRangeTo.val(""),
                    this.$dateRangeTo.datepicker("option", "minDate", null)
                }
            }, {
                key: "activeValue",
                get: function() {
                    return (this.$dateRangeFrom.val() + "-" + this.$dateRangeTo.val()).replace(/^-/, "∞ — ").replace(/-$/, " — ∞").replace("-", " — ")
                }
            }]) && Ve(r.prototype, i),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, i
        }(vt))
          , ze = r(669);
        function Qe(t) {
            return Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Qe(t)
        }
        function Ye(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function Xe(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, ir(i.key), i)
            }
        }
        function Ze() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Ze = function() {
                return !!t
            }
            )()
        }
        function tr(t) {
            return tr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            tr(t)
        }
        function er(t, e) {
            return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            er(t, e)
        }
        function rr(t, e, r) {
            return (e = ir(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function ir(t) {
            var e = function(t) {
                if ("object" != Qe(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Qe(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Qe(e) ? e : e + ""
        }
        var nr = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = t.find(".jet-date-period");
                return rr(r = function(t, e, r) {
                    return e = tr(e),
                    function(t, e) {
                        if (e && ("object" == Qe(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Ze() ? Reflect.construct(e, r || [], tr(t).constructor) : e.apply(t, r))
                }(this, e, [i, t]), "name", "date-period"),
                rr(r, "datepickerButtonSelector", ".jet-date-period__datepicker-button"),
                rr(r, "datepickerInputSelector", ".jet-date-period__datepicker-input"),
                rr(r, "prevPeriodButtonSelector", ".jet-date-period__prev"),
                rr(r, "nextPeriodButtonSelector", ".jet-date-period__next"),
                rr(r, "datepickerOpenedClass", "jet-date-period-datepicker-opened"),
                rr(r, "periodIsSetClass", "jet-date-period-is-set"),
                rr(r, "periodStartClass", "jet-date-period-start"),
                rr(r, "periodSeparatorClass", "jet-date-period-separator"),
                rr(r, "periodEndClass", "jet-date-period-end"),
                r.datePeriod = [],
                r.id = r.$filter.closest(".elementor-widget-jet-smart-filters-date-period").data("id") || r.$filter.closest(".brxe-jet-smart-filters-date-period").attr("id"),
                r.$datepickerBtn = i.find(r.datepickerButtonSelector),
                r.$prevPeriodBtn = i.find(r.prevPeriodButtonSelector),
                r.$nextPeriodBtn = i.find(r.nextPeriodButtonSelector),
                r.$datepickerInput = i.find(r.datepickerInputSelector),
                r.dateFormat = r.$datepickerInput.data("format"),
                r.minDate = b(r.$datepickerInput.data("mindate")),
                r.maxDate = b(r.$datepickerInput.data("maxdate")),
                r.startEndDateEnabled = !!s(r.dateFormat),
                r.dateSeparator = r.startEndDateEnabled && r.dateFormat.separator ? " " + r.dateFormat.separator + " " : " - ",
                r.periodType = r.$filter.data("period-type") || "day",
                r.btnPlaceholder = r.$datepickerBtn.html(),
                r.$datepickerInput.prop("type", "text"),
                r.debounceInitDatepickerWeekHover = g(r.initDatepickerWeekHover, 100),
                r.initDatepicker(),
                r.initEvent(),
                r.processData(),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && er(t, e)
            }(e, t),
            r = e,
            i = [{
                key: "initDatepicker",
                value: function() {
                    var t = this
                      , e = {
                        language: "jsf",
                        dateFormat: "yy/m/d",
                        autoClose: !0,
                        position: "bottom left",
                        offset: 0,
                        view: "days",
                        minView: "days",
                        firstDay: Number(d(JetSmartFilterSettings, "misc", "week_start"))
                    };
                    if (this.minDate && (e.minDate = this.minDate),
                    this.maxDate && (e.maxDate = this.maxDate),
                    !ze.fn.airDatepicker.language.jsf) {
                        var r = d(JetSmartFilterSettings, "datePickerData");
                        ze.fn.airDatepicker.language.jsf = {
                            days: r.dayNames,
                            daysShort: r.dayNamesShort,
                            daysMin: r.dayNamesMin,
                            months: r.monthNames,
                            monthsShort: r.monthNamesShort,
                            today: r.currentText,
                            clear: r.closeText
                        }
                    }
                    e.onSelect = function(e, r, i) {
                        if (r) {
                            var n, o = r;
                            switch (t.periodType) {
                            case "week":
                                var a = i.opts.firstDay > r.getDay() ? i.opts.firstDay - 7 : i.opts.firstDay;
                                o = new Date(r.getFullYear(),r.getMonth(),r.getDate() - r.getDay() + a),
                                n = new Date(r.getFullYear(),r.getMonth(),r.getDate() - r.getDay() + 6 + a);
                                break;
                            case "month":
                                n = new Date(r.getFullYear(),r.getMonth() + 1,0);
                                break;
                            case "year":
                                n = new Date(r.getFullYear(),11,31);
                                break;
                            case "range":
                                if (!Array.isArray(r) || r.length < 2)
                                    return;
                                o = r[0],
                                n = r[1],
                                (!t.minDate || t.minDate < o) && (!t.maxDate || t.maxDate > n) && (t.periodCustomRange = Math.round(Math.abs((n - o) / 864e5)));
                                break;
                            default:
                                return void t.$datepickerInput.val(v(r)).trigger("change")
                            }
                            t.minDate && t.minDate > o && (o = t.minDate),
                            t.maxDate && t.maxDate < n && (n = t.maxDate),
                            t.$datepickerInput.val(v(o) + "-" + v(n)).trigger("change")
                        }
                    }
                    ,
                    e.onShow = function(e) {
                        t.id && e.$datepicker.addClass("jet-date-period-" + t.id),
                        t.$filter.addClass(t.datepickerOpenedClass),
                        e.$datepicker.addClass("jet-date-period-" + t.periodType)
                    }
                    ,
                    e.onHide = function(e) {
                        t.id && e.$datepicker.removeClass("jet-date-period-" + t.id),
                        t.$filter.removeClass(t.datepickerOpenedClass),
                        e.$datepicker.removeClass("jet-date-period-" + t.periodType)
                    }
                    ,
                    e.onRenderCell = function(e, r) {
                        if ("week" === t.periodType && "day" === r && (t.debounceInitDatepickerWeekHover(),
                        t.isDateInRange(e))) {
                            var i = "-week-selected-";
                            return t.isDateFirstInRange(e) && (i += " -week-start-selected-"),
                            t.isDateLastInRange(e) && (i += " -week-end-selected-"),
                            {
                                classes: i
                            }
                        }
                    }
                    ,
                    "month" === this.periodType && (e.view = "months",
                    e.minView = "months"),
                    "year" === this.periodType && (e.view = "years",
                    e.minView = "years"),
                    "range" === this.periodType && (e.range = !0),
                    this.$datepicker = this.$datepickerInput.airDatepicker(e),
                    this.datepicker = this.$datepicker.data("datepicker"),
                    this.$datepickerBtn.off("click"),
                    this.$prevPeriodBtn.off("click"),
                    this.$nextPeriodBtn.off("click"),
                    this.$nextPeriodBtn.off("click"),
                    this.$datepickerInput.off("change"),
                    this.$datepickerBtn.on("click", (function() {
                        t.datepicker.show()
                    }
                    )),
                    this.$prevPeriodBtn.on("click", (function() {
                        t.prevPeriod()
                    }
                    )),
                    this.$nextPeriodBtn.on("click", (function() {
                        t.nextPeriod()
                    }
                    )),
                    this.$datepickerInput.on("change", (function() {
                        t.processData()
                    }
                    ))
                }
            }, {
                key: "addFilterChangeEvent",
                value: function() {
                    var t = this;
                    this.$prevPeriodBtn.on("click", (function() {
                        t.wasChanged()
                    }
                    )),
                    this.$nextPeriodBtn.on("click", (function() {
                        t.wasChanged()
                    }
                    )),
                    this.$datepickerInput.on("change", (function() {
                        t.wasChanged()
                    }
                    ))
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$datepickerBtn.off(),
                    this.$prevPeriodBtn.off(),
                    this.$nextPeriodBtn.off(),
                    this.$datepickerInput.off()
                }
            }, {
                key: "processData",
                value: function() {
                    this.setPeriod(),
                    this.dataValue = this.$datepickerInput.val() || !1
                }
            }, {
                key: "setData",
                value: function(t) {
                    if (t) {
                        if (this.$datepickerInput.val(t),
                        this.processData(),
                        this.datePeriod.length) {
                            var e = "range" === this.periodType && 2 === this.datePeriod.length ? [this.datePeriod[0].date, this.datePeriod[1].date] : this.datePeriod[0].date;
                            this.datepicker.selectDate(e)
                        }
                    } else
                        this.reset()
                }
            }, {
                key: "reset",
                value: function() {
                    this.$datepickerInput.val(""),
                    this.processData(),
                    this.datepicker.clear(),
                    this.datepicker.date = new Date
                }
            }, {
                key: "activeValue",
                get: function() {
                    var t = d(this.datePeriod, "0", "date")
                      , e = !!t && this.getFormattedDate(t, "start")
                      , r = !!this.startEndDateEnabled && d(this.datePeriod, "1", "date")
                      , i = !!r && this.getFormattedDate(r, "end");
                    return e && i ? e + this.dateSeparator + i : e
                }
            }, {
                key: "setPeriod",
                value: function() {
                    var t = this
                      , e = this.$datepickerInput.val()
                      , r = [];
                    e && e.split("-", 2).forEach((function(t) {
                        r.push(t)
                    }
                    )),
                    this.datePeriod = [],
                    r.forEach((function(e) {
                        var r = new Date(e.replaceAll(".", "/"));
                        r instanceof Date && t.datePeriod.push({
                            date: r,
                            value: e
                        })
                    }
                    )),
                    this.renderPeriod()
                }
            }, {
                key: "prevPeriod",
                value: function() {
                    var t = this.datePeriod[0] || !1;
                    if (t && !(this.minDate && this.minDate >= t.date)) {
                        var e = m(t.date, -1)
                          , r = e;
                        "week" === this.periodType ? r = m(e, -6) : "month" === this.periodType ? r = new Date(e.getFullYear(),e.getMonth(),1) : "year" === this.periodType ? r = new Date(e.getFullYear(),0,1) : "range" === this.periodType && (r = m(new Date(e.getTime()), -this.periodCustomRange)),
                        this.minDate && r < this.minDate && (r = this.minDate),
                        this.datepicker.selectDate("range" === this.periodType ? [r, e] : r)
                    }
                }
            }, {
                key: "nextPeriod",
                value: function() {
                    var t = this.datePeriod[1] || this.datePeriod[0] || !1;
                    if (t && !(this.maxDate && this.maxDate <= t.date)) {
                        var e = m(t.date)
                          , r = e;
                        "week" === this.periodType ? r = m(new Date(e.getTime()), 6) : "month" === this.periodType ? r = new Date(e.getFullYear(),e.getMonth() + 1,0) : "year" === this.periodType ? r = new Date(e.getFullYear(),11,31) : "range" === this.periodType && (r = m(new Date(e.getTime()), this.periodCustomRange)),
                        this.maxDate && r > this.maxDate && (r = this.maxDate),
                        this.datepicker.selectDate("range" === this.periodType ? [e, r] : e)
                    }
                }
            }, {
                key: "renderPeriod",
                value: function() {
                    if (!this.datePeriod.length)
                        return this.$filter.removeClass(this.periodIsSetClass),
                        void this.$datepickerBtn.html(this.btnPlaceholder);
                    var t = d(this.datePeriod, "0", "date")
                      , e = t ? '<div class="'.concat(this.periodStartClass, '">').concat(this.getFormattedDate(t, "start"), "</div>") : ""
                      , r = !!this.startEndDateEnabled && d(this.datePeriod, "1", "date")
                      , i = r ? '<div class="'.concat(this.periodEndClass, '">').concat(this.getFormattedDate(r, "end"), "</div>") : ""
                      , n = t && r ? '<div class="'.concat(this.periodSeparatorClass, '">').concat(this.dateSeparator, "</div>") : "";
                    this.$filter.addClass(this.periodIsSetClass),
                    this.$datepickerBtn.html(e + n + i)
                }
            }, {
                key: "getFormattedDate",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = "mm/dd/yy";
                    return this.dateFormat && (this.startEndDateEnabled ? ("start" !== e && e || !this.dateFormat.start || (r = this.dateFormat.start),
                    "end" === e && this.dateFormat.end && (r = this.dateFormat.end)) : r = this.dateFormat),
                    this.datepicker.formatDate(r, t)
                }
            }, {
                key: "isDateInRange",
                value: function(t) {
                    if (!(t instanceof Date) || this.datePeriod.length < 2)
                        return !1;
                    var e = t.getTime()
                      , r = this.datePeriod[0].date.getTime()
                      , i = this.datePeriod[1].date.getTime();
                    return e >= r && e <= i
                }
            }, {
                key: "isDateFirstInRange",
                value: function(t) {
                    return !!(t instanceof Date && this.datePeriod[0]) && t.getTime() === this.datePeriod[0].date.getTime()
                }
            }, {
                key: "isDateLastInRange",
                value: function(t) {
                    return !!(t instanceof Date && this.datePeriod[1]) && t.getTime() === this.datePeriod[1].date.getTime()
                }
            }, {
                key: "initDatepickerWeekHover",
                value: function() {
                    var t = this.datepicker.$content.find(".datepicker--cells-days .datepicker--cell-day")
                      , e = [];
                    t.off().on({
                        mouseenter: function(r) {
                            var i = function(t) {
                                return function(t) {
                                    if (Array.isArray(t))
                                        return Ye(t)
                                }(t) || function(t) {
                                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                        return Array.from(t)
                                }(t) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t)
                                            return Ye(t, e);
                                        var r = {}.toString.call(t).slice(8, -1);
                                        return "Object" === r && t.constructor && (r = t.constructor.name),
                                        "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ye(t, e) : void 0
                                    }
                                }(t) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(r.target.parentNode.children).indexOf(r.target);
                            if (!(i < 0))
                                for (var n = 0; n < 7; n++) {
                                    var o = t.eq(n + 7 * Math.floor(i / 7));
                                    o.addClass("-week-hover-"),
                                    0 === n && o.addClass("-week-start-hover-"),
                                    6 === n && o.addClass("-week-end-hover-"),
                                    e.push(o)
                                }
                        },
                        mouseleave: function(t) {
                            e.forEach((function(t) {
                                t.removeClass("-week-hover- -week-start-hover- -week-end-hover-")
                            }
                            )),
                            e = []
                        }
                    })
                }
            }],
            i && Xe(r.prototype, i),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, i
        }(vt);
        function or(t) {
            return or = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            or(t)
        }
        function ar() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (ar = function() {
                return !!t
            }
            )()
        }
        function sr(t) {
            return sr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            sr(t)
        }
        function lr(t, e) {
            return lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            lr(t, e)
        }
        function ur(t) {
            var e = function(t) {
                if ("object" != or(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != or(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == or(e) ? e : e + ""
        }
        var cr = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-radio-list");
                return r = function(t, e, r) {
                    return e = sr(e),
                    function(t, e) {
                        if (e && ("object" == or(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, ar() ? Reflect.construct(e, r || [], sr(t).constructor) : e.apply(t, r))
                }(this, e, [t, a, a.find(":radio")]),
                i = r,
                o = "radio",
                (n = ur(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r.mergeSameQueryKeys = !0,
                r.additionalFilterSettings = new It(r),
                r.collapsibleList = new At(r),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && lr(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(ie)
          , fr = r(669);
        function dr(t) {
            return dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            dr(t)
        }
        function pr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, mr(i.key), i)
            }
        }
        function hr() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (hr = function() {
                return !!t
            }
            )()
        }
        function yr(t) {
            return yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            yr(t)
        }
        function vr(t, e) {
            return vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            vr(t, e)
        }
        function mr(t) {
            var e = function(t) {
                if ("object" != dr(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != dr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == dr(e) ? e : e + ""
        }
        function br(t) {
            return br = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            br(t)
        }
        function gr() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (gr = function() {
                return !!t
            }
            )()
        }
        function wr(t) {
            return wr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            wr(t)
        }
        function Sr(t, e) {
            return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Sr(t, e)
        }
        function jr(t) {
            var e = function(t) {
                if ("object" != br(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != br(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == br(e) ? e : e + ""
        }
        var kr = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-rating");
                return r = function(t, e, r) {
                    return e = wr(e),
                    function(t, e) {
                        if (e && ("object" == br(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, gr() ? Reflect.construct(e, r || [], wr(t).constructor) : e.apply(t, r))
                }(this, e, [t, a]),
                i = r,
                o = "rating",
                (n = jr(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Sr(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(function(t) {
            function e(t, r, i) {
                var n, o, a, s;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                n = function(t, e, r) {
                    return e = yr(e),
                    function(t, e) {
                        if (e && ("object" == dr(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, hr() ? Reflect.construct(e, r || [], yr(t).constructor) : e.apply(t, r))
                }(this, e, [r, t]),
                o = n,
                s = ".jet-rating-star__input",
                (a = mr(a = "starsRatingSelector"))in o ? Object.defineProperty(o, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = s,
                n.$starsRating = i || r.find(n.starsRatingSelector),
                n.processData(),
                n.initEvent(),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && vr(t, e)
            }(e, t),
            r = e,
            (i = [{
                key: "initEvent",
                value: function() {
                    var t = this;
                    this.$starsRating.off("click"),
                    this.$starsRating.on("click", (function(e) {
                        var r = fr(e.target);
                        r.hasClass("is-checked") ? t.$starsRating.prop("checked", !1).removeClass("is-checked") : (t.$starsRating.removeClass("is-checked"),
                        r.addClass("is-checked")),
                        t.processData(),
                        t.wasChanged()
                    }
                    )),
                    this.applyOnChanging || this.addApplyEvent()
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$starsRating.off()
                }
            }, {
                key: "processData",
                value: function() {
                    this.dataValue = this.$checked.val() || !1
                }
            }, {
                key: "setData",
                value: function(t) {
                    this.reset(),
                    t && (this.$checked.removeClass("is-checked"),
                    this.$starsRating.filter('[value="' + t + '"]').addClass("is-checked"),
                    this.processData())
                }
            }, {
                key: "reset",
                value: function() {
                    this.dataValue = !1,
                    this.$starsRating.prop("checked", !1).removeClass("is-checked")
                }
            }, {
                key: "activeValue",
                get: function() {
                    return (this.dataValue || "0") + "/" + this.$starsRating.length
                }
            }, {
                key: "$checked",
                get: function() {
                    return this.$starsRating.filter(".is-checked")
                }
            }]) && pr(r.prototype, i),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, i
        }(vt));
        function Pr(t) {
            return Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Pr(t)
        }
        function Or() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Or = function() {
                return !!t
            }
            )()
        }
        function _r(t) {
            return _r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            _r(t)
        }
        function Cr(t, e) {
            return Cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Cr(t, e)
        }
        function xr(t) {
            var e = function(t) {
                if ("object" != Pr(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Pr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Pr(e) ? e : e + ""
        }
        var $r = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-color-image-list");
                return r = function(t, e, r) {
                    return e = _r(e),
                    function(t, e) {
                        if (e && ("object" == Pr(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Or() ? Reflect.construct(e, r || [], _r(t).constructor) : e.apply(t, r))
                }(this, e, [t, a, a.find(".jet-color-image-list__input")]),
                i = r,
                o = "visual",
                (n = xr(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r.mergeSameQueryKeys = !0,
                r.additionalFilterSettings = new It(r),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Cr(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(Ot);
        function Ir(t) {
            return Ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ir(t)
        }
        function Fr() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Fr = function() {
                return !!t
            }
            )()
        }
        function Er(t) {
            return Er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Er(t)
        }
        function Dr(t, e) {
            return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Dr(t, e)
        }
        function Tr(t) {
            var e = function(t) {
                if ("object" != Ir(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Ir(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ir(e) ? e : e + ""
        }
        var Rr = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-alphabet-list");
                return r = function(t, e, r) {
                    return e = Er(e),
                    function(t, e) {
                        if (e && ("object" == Ir(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Fr() ? Reflect.construct(e, r || [], Er(t).constructor) : e.apply(t, r))
                }(this, e, [t, a, a.find(".jet-alphabet-list__input")]),
                i = r,
                o = "alphabet",
                (n = Tr(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Dr(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(Ot);
        function Ar(t) {
            return Ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ar(t)
        }
        function Vr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, Gr(i.key), i)
            }
        }
        function Br() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Br = function() {
                return !!t
            }
            )()
        }
        function qr() {
            return qr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                var i = function(t, e) {
                    for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Nr(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var n = Object.getOwnPropertyDescriptor(i, e);
                    return n.get ? n.get.call(arguments.length < 3 ? t : r) : n.value
                }
            }
            ,
            qr.apply(null, arguments)
        }
        function Nr(t) {
            return Nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Nr(t)
        }
        function Lr(t, e) {
            return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Lr(t, e)
        }
        function Mr(t, e, r) {
            return (e = Gr(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Gr(t) {
            var e = function(t) {
                if ("object" != Ar(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Ar(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ar(e) ? e : e + ""
        }
        function Jr(t) {
            return Jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Jr(t)
        }
        function Ur() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Ur = function() {
                return !!t
            }
            )()
        }
        function Hr(t) {
            return Hr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Hr(t)
        }
        function Kr(t, e) {
            return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Kr(t, e)
        }
        function Wr(t) {
            var e = function(t) {
                if ("object" != Jr(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Jr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Jr(e) ? e : e + ""
        }
        var zr = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-search-filter");
                return r = function(t, e, r) {
                    return e = Hr(e),
                    function(t, e) {
                        if (e && ("object" == Jr(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Ur() ? Reflect.construct(e, r || [], Hr(t).constructor) : e.apply(t, r))
                }(this, e, [t, a]),
                i = r,
                o = "search",
                (n = Wr(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Kr(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(function(t) {
            function r(t, i, n, o, a) {
                var s;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                Mr(s = function(t, e, r) {
                    return e = Nr(e),
                    function(t, e) {
                        if (e && ("object" == Ar(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Br() ? Reflect.construct(e, r || [], Nr(t).constructor) : e.apply(t, r))
                }(this, r, [i, t]), "searchInputSelector", ".jet-search-filter__input"),
                Mr(s, "searchSubmitSelector", ".jet-search-filter__submit"),
                Mr(s, "searchClearSelector", ".jet-search-filter__input-clear"),
                Mr(s, "searchLoadingClass", "jet-filters-single-loading"),
                Mr(s, "inputNotEmptyClass", "jet-input-not-empty"),
                Mr(s, "delayID", null),
                s.$searchInput = n || i.find(s.searchInputSelector),
                s.$searchSubmit = o || i.find(s.searchSubmitSelector),
                s.$searchClear = a || i.find(s.searchClearSelector),
                s.processData(),
                s.addFilterChangeEvent(),
                e.subscribe("ajaxFilters/end-loading", (function() {
                    s.$filter.removeClass(s.searchLoadingClass)
                }
                )),
                s
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Lr(t, e)
            }(r, t),
            i = r,
            n = [{
                key: "addFilterChangeEvent",
                value: function() {
                    var t = this;
                    this.$searchSubmit.on("click", (function() {
                        t.wasChanged()
                    }
                    )),
                    this.$searchClear.on("click", (function() {
                        t.$searchInput.val(""),
                        t.$searchInput.removeClass(t.inputNotEmptyClass),
                        t.wasChanged()
                    }
                    )),
                    this.$searchInput.on("keyup", (function(r) {
                        var i = r.target.value;
                        i !== t.dataValue && (e.publish("fiter/syncSameFilters", t),
                        "ajax-ontyping" === t.applyType ? t.minLettersCount <= i.length ? (t.emitFiterChangeWithDelay(),
                        t.$searchInput.addClass(t.inputNotEmptyClass)) : (t.$searchInput.hasClass(t.inputNotEmptyClass) && t.emitFiterChangeWithDelay(),
                        t.$searchInput.removeClass(t.inputNotEmptyClass)) : 13 === r.keyCode && t.wasChanged())
                    }
                    ))
                }
            }, {
                key: "removeChangeEvent",
                value: function() {
                    this.$searchSubmit.off(),
                    this.$searchClear.off(),
                    this.$searchInput.off()
                }
            }, {
                key: "processData",
                value: function() {
                    this.dataValue = this.$searchInput.val(),
                    this.minLettersCount && this.minLettersCount > this.dataValue.length && (this.dataValue = "")
                }
            }, {
                key: "setData",
                value: function(t) {
                    this.reset(),
                    t && (this.$searchInput.val(t),
                    "ajax-ontyping" === this.applyType && this.minLettersCount <= t.length && this.$searchInput.addClass(this.inputNotEmptyClass),
                    this.processData())
                }
            }, {
                key: "reset",
                value: function() {
                    this.dataValue = !1,
                    this.$searchInput.val(""),
                    this.$searchInput.removeClass(this.inputNotEmptyClass)
                }
            }, {
                key: "wasChanged",
                value: function() {
                    var t, e, i;
                    this.processData(),
                    (t = r,
                    e = this,
                    "function" == typeof (i = qr(Nr(1 & 3 ? t.prototype : t), "wasChanged", e)) ? function(t) {
                        return i.apply(e, t)
                    }
                    : i)([this.filterGroup.isProviderExist])
                }
            }, {
                key: "emitFiterChangeWithDelay",
                value: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 350;
                    clearTimeout(this.delayID),
                    this.delayID = setTimeout((function() {
                        t.$filter.addClass(t.searchLoadingClass),
                        t.processData(),
                        t.wasChanged()
                    }
                    ), e)
                }
            }, {
                key: "syncWithSameFilter",
                value: function(t) {
                    var e = t.$searchInput.val();
                    this.$searchInput.val() !== e && this.$searchInput.val(e)
                }
            }, {
                key: "minLettersCount",
                get: function() {
                    return this.$filter.data("min-letters-count")
                }
            }, {
                key: "activeValue",
                get: function() {
                    return this.dataValue
                }
            }],
            n && Vr(i.prototype, n),
            Object.defineProperty(i, "prototype", {
                writable: !1
            }),
            i;
            var i, n
        }(vt));
        function Qr(t) {
            return Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Qr(t)
        }
        function Yr() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Yr = function() {
                return !!t
            }
            )()
        }
        function Xr(t) {
            return Xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Xr(t)
        }
        function Zr(t, e) {
            return Zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Zr(t, e)
        }
        function ti(t) {
            var e = function(t) {
                if ("object" != Qr(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Qr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Qr(e) ? e : e + ""
        }
        var ei = function(t) {
            function e(t) {
                var r;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i, n, o, a = t.find(".jet-sorting");
                return r = function(t, e, r) {
                    return e = Xr(e),
                    function(t, e) {
                        if (e && ("object" == Qr(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, Yr() ? Reflect.construct(e, r || [], Xr(t).constructor) : e.apply(t, r))
                }(this, e, [t, a, a.find(".jet-sorting-select")]),
                i = r,
                o = "sorting",
                (n = ti(n = "name"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o,
                r.mergeSameQueryKeys = !0,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Zr(t, e)
            }(e, t),
            r = e,
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r
        }(ie);
        function ri(t) {
            return ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ri(t)
        }
        function ii(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, si(i.key), i)
            }
        }
        function ni() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (ni = function() {
                return !!t
            }
            )()
        }
        function oi(t) {
            return oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            oi(t)
        }
        function ai(t, e) {
            return ai = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            ai(t, e)
        }
        function si(t) {
            var e = function(t) {
                if ("object" != ri(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != ri(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ri(e) ? e : e + ""
        }
        var li = function(t) {
            function r(t) {
                var i;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r);
                var n, o, a, s = t.find(".apply-filters");
                return i = function(t, e, r) {
                    return e = oi(e),
                    function(t, e) {
                        if (e && ("object" == ri(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, ni() ? Reflect.construct(e, r || [], oi(t).constructor) : e.apply(t, r))
                }(this, r, [s, t]),
                n = i,
                a = "button-apply",
                (o = si(o = "name"))in n ? Object.defineProperty(n, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = a,
                i.$button = i.$filter.find(".apply-filters__button"),
                i.activeState = i.$button.data("active-state"),
                i.ifInactive = i.$button.data("if-inactive"),
                i.$button.on("click", (function() {
                    i.emitFitersApply()
                }
                )),
                e.subscribe("filters/processed", (function(t) {
                    i.filterGroup.isCurrentProvider(t) && i.updateState()
                }
                )),
                e.subscribe("fiter/change", (function(t) {
                    i.filterGroup.isCurrentProvider(t) && i.updateState()
                }
                )),
                e.subscribe("fiters/remove", (function(t) {
                    i.filterGroup.isCurrentProvider(t) && setTimeout((function() {
                        i.updateState()
                    }
                    ))
                }
                )),
                i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && ai(t, e)
            }(r, t),
            i = r,
            n = [{
                key: "updateState",
                value: function() {
                    this.activeState && "always" !== this.activeState && (this.isActive ? "hide" === this.ifInactive ? this.$button.removeClass("jsf_hidden") : (this.$button.removeClass("jsf_disabled"),
                    this.$button.prop("disabled", !1)) : "hide" === this.ifInactive ? this.$button.addClass("jsf_hidden") : (this.$button.addClass("jsf_disabled"),
                    this.$button.prop("disabled", !0)))
                }
            }, {
                key: "isActive",
                get: function() {
                    var t = this.filterGroup.filters.filter((function(t) {
                        return !["button-apply", "button-remove", "pagination"].includes(t.name) && void 0 !== t.dataValue
                    }
                    ))
                      , e = function(t) {
                        return t.dataValue
                    };
                    switch (this.activeState) {
                    case "any":
                        return t.some(e);
                    case "all":
                        return t.every(e);
                    default:
                        return !0
                    }
                }
            }],
            n && ii(i.prototype, n),
            Object.defineProperty(i, "prototype", {
                writable: !1
            }),
            i;
            var i, n
        }(vt);
        function ui(t) {
            return ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ui(t)
        }
        function ci() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (ci = function() {
                return !!t
            }
            )()
        }
        function fi(t) {
            return fi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            fi(t)
        }
        function di(t, e) {
            return di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            di(t, e)
        }
        function pi(t) {
            var e = function(t) {
                if ("object" != ui(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != ui(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ui(e) ? e : e + ""
        }
        var hi = function(t) {
            function r(t) {
                var i;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r);
                var n, o, a, s = t.find(".jet-remove-all-filters__button");
                return i = function(t, e, r) {
                    return e = fi(e),
                    function(t, e) {
                        if (e && ("object" == ui(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, ci() ? Reflect.construct(e, r || [], fi(t).constructor) : e.apply(t, r))
                }(this, r, [s, t.find(".jet-remove-all-filters")]),
                n = i,
                a = "button-remove",
                (o = pi(o = "name"))in n ? Object.defineProperty(n, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = a,
                i.$elementorWidget = i.$container.closest(".hide-widget"),
                i.$filter.on("click", (function() {
                    i.emitFitersRemove()
                }
                )),
                e.subscribe("activeItems/change", (function(t, e, r) {
                    (i.isCurrentProvider({
                        provider: e,
                        queryId: r
                    }) || i.isAdditionalProvider({
                        provider: e,
                        queryId: r
                    })) && (t.length ? (i.show(),
                    i.$elementorWidget.removeClass("hide-widget")) : (i.hide(),
                    i.$elementorWidget.addClass("hide-widget")))
                }
                )),
                i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && di(t, e)
            }(r, t),
            i = r,
            Object.defineProperty(i, "prototype", {
                writable: !1
            }),
            i;
            var i
        }(vt)
          , yi = r(669)
          , vi = r(669);
        const mi = {
            init: function() {
                var t = this;
                this.subscribers = [],
                this.preloaderTemplate = d("", "plugin_settings", "provider_preloader"),
                e.subscribe("ajaxFilters/start-loading", (function(e, r) {
                    t.action(t.currentElements(e, r), "show")
                }
                )),
                e.subscribe("ajaxFilters/end-loading", (function(e, r) {
                    t.action(t.currentElements(e, r), "hide")
                }
                ))
            },
            subscribe: function(t, e) {
                var r = e.provider
                  , i = void 0 !== r && r
                  , n = e.queryId
                  , o = void 0 === n ? "default" : n
                  , a = e.preloaderClass
                  , s = void 0 === a ? "jet-filters-loading" : a;
                i && this.subscribers.push({
                    target: t,
                    provider: i,
                    queryId: o,
                    preloaderClass: s
                })
            },
            action: function(t, e) {
                var r = this;
                t.forEach((function(t) {
                    var i = t.target
                      , n = t.preloaderClass
                      , o = i instanceof yi ? i : vi(i);
                    switch (e) {
                    case "show":
                        o.addClass(n),
                        t.$preloader = o.append(r.preloaderTemplate);
                        break;
                    case "hide":
                        o.removeClass(n)
                    }
                }
                ))
            },
            currentElements: function(t, e) {
                return this.subscribers.filter((function(r) {
                    return r.provider === t && r.queryId === e
                }
                ))
            }
        }
          , bi = function(t, e) {
            return t.replace(/\/%\s*\$value\s*%\//g, e)
        };
        var gi = r(669);
        function wi(t) {
            return wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            wi(t)
        }
        function Si(t) {
            return function(t) {
                if (Array.isArray(t))
                    return ji(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return ji(t, e);
                    var r = {}.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ji(t, e) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ji(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function ki(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, xi(i.key), i)
            }
        }
        function Pi() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Pi = function() {
                return !!t
            }
            )()
        }
        function Oi(t) {
            return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Oi(t)
        }
        function _i(t, e) {
            return _i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            _i(t, e)
        }
        function Ci(t, e, r) {
            return (e = xi(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function xi(t) {
            var e = function(t) {
                if ("object" != wi(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != wi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == wi(e) ? e : e + ""
        }
        var $i = function(t) {
            function r(t) {
                var i, n, o, a;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                Ci((n = this,
                a = [t],
                o = Oi(o = r),
                i = function(t, e) {
                    if (e && ("object" == wi(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(n, Pi() ? Reflect.construct(o, a || [], Oi(n).constructor) : o.apply(n, a))), "name", "pagination"),
                Ci(i, "paginationListClass", "jet-filters-pagination"),
                Ci(i, "paginationItemClass", "jet-filters-pagination__item"),
                Ci(i, "paginationLoadMoreClass", "jet-filters-pagination__load-more"),
                Ci(i, "paginationCurrentClass", "jet-filters-pagination__current"),
                Ci(i, "paginationDisabledClass", "jet-filters-pagination__disabled"),
                Ci(i, "navClass", "prev-next"),
                Ci(i, "prevClass", "prev"),
                Ci(i, "nextClass", "next"),
                i.pageIndex = i.pageProp,
                i.dataValue = i.pageIndex,
                i.pagesCount = i.maxNumPagesProp,
                i.controls = i.$filter.data("controls"),
                i.isItems = i.controls.items_enabled || !1,
                i.midSize = i.controls.pages_mid_size || 0,
                i.endSize = i.controls.pages_end_size || 0,
                i.isNav = i.controls.nav_enabled || !1,
                i.hideInactiveNav = i.controls.hide_inactive_nav || !1,
                i.prevText = i.controls.prev,
                i.nextText = i.controls.next,
                i.isLoadMore = i.controls.load_more_enabled || !1,
                i.loadMoreText = i.controls.load_more_text,
                i.moreActiveIndexes = [],
                i.templates = {},
                void 0 !== i.controls.provider_top_offset && (i.topOffset = i.controls.provider_top_offset || 0),
                i.buildPagination(),
                mi.subscribe(t, {
                    provider: i.provider,
                    queryId: i.queryId
                }),
                e.subscribe("ajaxFilters/end-loading", (function(t, e) {
                    i.isCurrentProvider({
                        provider: t,
                        queryId: e
                    }) && i.update()
                }
                )),
                e.subscribe("pagination/change", (function(t) {
                    i.isCurrentProvider(t) && t.data !== i.data && (i.dataValue = t.data)
                }
                )),
                i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && _i(t, e)
            }(r, t),
            i = r,
            (n = [{
                key: "reinit",
                value: function() {
                    this.update()
                }
            }, {
                key: "buildPagination",
                value: function() {
                    if (this.pagesCount < 2)
                        this.$filter.html("");
                    else {
                        this.$filter.find("*").off("click");
                        var t = document.createElement("div");
                        t.className = this.paginationListClass;
                        var r = !1;
                        if (this.isItems)
                            for (var i = 1; i <= this.pagesCount; i++)
                                0 !== this.midSize && (this.endSize < i && i < this.pageIndex - this.midSize || this.endSize <= this.pagesCount - i && i > this.pageIndex + this.midSize) ? r || (t.appendChild(this.buildDotsItem()),
                                r = !0) : (t.appendChild(this.buildPaginationItem("numeral", i, this.onPaginationItemClick.bind(this))),
                                r = !1);
                        if (this.isNav) {
                            var n = 1 === this.pageIndex || this.moreActiveIndexes.includes(1)
                              , o = this.pageIndex === this.pagesCount;
                            if (!this.hideInactiveNav || !n) {
                                var a = this.buildPaginationItem("prev", this.prevText, this.onPaginationItemClick.bind(this));
                                n && a.setAttribute("disabled", ""),
                                t.prepend(a)
                            }
                            if (!this.hideInactiveNav || !o) {
                                var s = this.buildPaginationItem("next", this.nextText, this.onPaginationItemClick.bind(this));
                                o && s.setAttribute("disabled", ""),
                                t.append(s)
                            }
                        }
                        this.isLoadMore && this.pageIndex < this.pagesCount && t.appendChild(this.buildLoadMore()),
                        this.$filter.html(t),
                        this.setCurrentItem(),
                        e.publish("pagination/itemsBuilt", this)
                    }
                }
            }, {
                key: "buildPaginationItem",
                value: function(t, e, r) {
                    var i;
                    i = this.templates.item ? bi(this.templates.item, e) : e;
                    var n = document.createElement("div");
                    return n.className = this.paginationItemClass,
                    n.innerHTML = i,
                    "true" === d(JetSmartFilterSettings, "plugin_settings", "use_tabindex") && (n.tabIndex = 0),
                    "prev" === t || "next" === t ? (n.dataset.value = t,
                    n.classList.add(this.navClass),
                    n.classList.add(this[t + "Class"])) : n.dataset.value = e,
                    gi(n).on("click", r),
                    n
                }
            }, {
                key: "buildDotsItem",
                value: function() {
                    var t, e = document.createElement("div");
                    return t = this.templates.dots ? this.templates.dots : "...",
                    e.className = this.paginationItemClass,
                    e.innerHTML = t,
                    e
                }
            }, {
                key: "buildLoadMore",
                value: function() {
                    var t, e = document.createElement("div");
                    return t = this.templates.load_more ? bi(this.templates.load_more, this.loadMoreText) : this.loadMoreText,
                    e.className = this.paginationLoadMoreClass,
                    e.innerHTML = t,
                    "true" === d(JetSmartFilterSettings, "plugin_settings", "use_tabindex") && (e.tabIndex = 0),
                    gi(e).on("click", this.onPaginationLoadMoreClick.bind(this)),
                    e
                }
            }, {
                key: "onPaginationItemClick",
                value: function(t) {
                    if (!this.isAjaxLoading) {
                        var r = gi(t.currentTarget).data("value");
                        switch (r) {
                        case "prev":
                            var i = this.moreActiveIndexes[0] || this.pageIndex;
                            r = i > 1 ? i - 1 : 1;
                            break;
                        case "next":
                            r = this.pageIndex < this.pagesCount ? this.pageIndex + 1 : this.pagesCount
                        }
                        this.pageIndex === r || this.moreActiveIndexes.includes(r) || (this.moreActiveIndexes = [],
                        this.dataValue = r,
                        this.updateActivePagesProviderProps(),
                        e.publish("pagination/change", this))
                    }
                }
            }, {
                key: "onPaginationLoadMoreClick",
                value: function(t) {
                    if (!this.isAjaxLoading) {
                        var r = this.dataValue;
                        ++r <= this.pagesCount && (this.moreActiveIndexes.push(this.dataValue),
                        this.dataValue = r,
                        this.updateActivePagesProviderProps(),
                        e.publish("pagination/load-more", this))
                    }
                }
            }, {
                key: "updateActivePagesProviderProps",
                value: function() {
                    if (d(JetSmartFilterSettings, "props", this.provider, this.queryId)) {
                        var t = window.JetSmartFilterSettings.props[this.provider][this.queryId];
                        this.moreActiveIndexes.length ? t.pages = [].concat(Si(this.moreActiveIndexes), [this.dataValue]) : delete t.pages
                    }
                }
            }, {
                key: "setCurrentItem",
                value: function() {
                    if (this.pageIndex) {
                        var t = this.$filter.find("." + this.paginationListClass)
                          , e = [this.pageIndex].concat(Si(this.moreActiveIndexes)).map((function(t) {
                            return "[data-value='" + t + "']"
                        }
                        )).join(", ");
                        t.children().removeClass(this.paginationCurrentClass),
                        t.find(e).addClass(this.paginationCurrentClass)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var t = this.maxNumPagesProp
                      , e = this.pageProp;
                    t === this.pagesCount && e === this.pageIndex || (this.pagesCount = t,
                    this.pageIndex = e,
                    this.dataValue = this.pageIndex,
                    this.buildPagination())
                }
            }, {
                key: "reset",
                value: function() {
                    this.moreActiveIndexes = [],
                    this.dataValue = 1,
                    this.updateActivePagesProviderProps()
                }
            }, {
                key: "resetMoreActive",
                value: function() {
                    this.moreActiveIndexes.length && (this.moreActiveIndexes = [],
                    this.updateActivePagesProviderProps(),
                    this.buildPagination())
                }
            }, {
                key: "data",
                get: function() {
                    return !!(this.dataValue && this.dataValue > 1) && this.dataValue
                }
            }, {
                key: "pageProp",
                get: function() {
                    return Number(d(JetSmartFilterSettings, "props", this.provider, this.queryId, "page")) || 1
                }
            }, {
                key: "maxNumPagesProp",
                get: function() {
                    return Number(d(JetSmartFilterSettings, "props", this.provider, this.queryId, "max_num_pages")) || 0
                }
            }, {
                key: "queryKey",
                get: function() {
                    return "jet_paged"
                }
            }]) && ki(i.prototype, n),
            Object.defineProperty(i, "prototype", {
                writable: !1
            }),
            i;
            var i, n
        }(vt)
          , Ii = r(669);
        function Fi(t) {
            return Fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Fi(t)
        }
        function Ei(t) {
            return function(t) {
                if (Array.isArray(t))
                    return Di(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return Di(t, e);
                    var r = {}.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Di(t, e) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Di(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = Array(e); r < e; r++)
                i[r] = t[r];
            return i
        }
        function Ti(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, Ri(i.key), i)
            }
        }
        function Ri(t) {
            var e = function(t) {
                if ("object" != Fi(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Fi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Fi(e) ? e : e + ""
        }
        var Ai = function() {
            return t = function t(r) {
                var i, n, o, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                i = this,
                o = {},
                (n = Ri(n = "activeItemsСollection"))in i ? Object.defineProperty(i, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[n] = o;
                var l = s.separateMultiple
                  , u = void 0 !== l && l
                  , c = s.templateName
                  , f = void 0 !== c && c
                  , p = s.listClass
                  , h = void 0 === p ? "active-list" : p
                  , y = s.labelClass
                  , v = void 0 === y ? "active-title" : y
                  , m = s.itemClass
                  , b = void 0 === m ? "active-item" : m
                  , g = s.clearClass
                  , w = void 0 === g ? "active-clear" : g;
                this.$activeItemsContainer = r,
                this.path = j(this.$activeItemsContainer.get(0)),
                this.$elementorWidget = this.$activeItemsContainer.closest(".hide-widget"),
                this.separateMultiple = u,
                this.listClass = h,
                this.labelClass = v,
                this.itemClass = b,
                this.clearClass = w,
                this.provider = this.$activeItemsContainer.data("contentProvider"),
                this.queryId = this.$activeItemsContainer.data("queryId").toString() || "default",
                this.providerKey = this.provider + "/" + this.queryId,
                this.additionalProviders = this.$activeItemsContainer.data("additional-providers"),
                this.allProviders = [this.providerKey],
                this.applyType = this.$activeItemsContainer.data("applyType") || "ajax",
                this.filtersLabel = this.$activeItemsContainer.data("label"),
                this.clearItemLabel = this.$activeItemsContainer.data("clearItemLabel"),
                this.templates = d(JetSmartFilterSettings, "templates", f),
                this.setAllProviders(),
                e.subscribe("activeItems/change", (function(t, e, r) {
                    a.isCurrentProvider({
                        provider: e,
                        queryId: r
                    }) && (a.addToCollection(t, e + "/" + r),
                    a.buildItems())
                }
                )),
                e.subscribe("activeItems/rebuild", (function(t, e) {
                    a.isCurrentProvider({
                        provider: t,
                        queryId: e
                    }) && a.buildItems()
                }
                ))
            }
            ,
            r = [{
                key: "addToCollection",
                value: function(t, e) {
                    var r = t.filter((function(t) {
                        return !t.isAdditional
                    }
                    ));
                    this.isThereHierarchicalFilters(r) && (r = this.groupHierarchicalFilters(r)),
                    this.activeItemsСollection[e] = r
                }
            }, {
                key: "buildItems",
                value: function() {
                    var t = this;
                    this.$elementorWidget.removeClass("hide-widget"),
                    this.$activeItemsContainer.find("*").off();
                    var r = this.activeItems;
                    if (c(r))
                        return this.$activeItemsContainer.html(""),
                        void this.$elementorWidget.addClass("hide-widget");
                    var i = document.createElement("div");
                    if (i.className = this.listClass,
                    this.filtersLabel) {
                        var n = document.createElement("div");
                        n.className = this.labelClass,
                        n.innerHTML = this.filtersLabel,
                        i.appendChild(n)
                    }
                    this.clearItemLabel && i.appendChild(this.buildItem({
                        value: this.clearItemLabel,
                        itemClass: this.clearClass,
                        callback: function() {
                            e.publish("fiters/remove", t)
                        }
                    })),
                    r.forEach((function(e) {
                        var r;
                        (r = Array.isArray(e) ? t.groupedItem(e) : t.isSeparate(e) ? t.separatedItems(e) : t.regularItem(e)) && i.appendChild(r)
                    }
                    )),
                    this.$activeItemsContainer.html(i),
                    e.publish("activeItems/itemsBuilt", this)
                }
            }, {
                key: "buildItem",
                value: function(t) {
                    var e = t.value
                      , r = t.label
                      , i = void 0 !== r && r
                      , n = t.itemClass
                      , o = void 0 === n ? this.itemClass : n
                      , a = t.templates
                      , s = void 0 === a ? this.templates : a
                      , l = t.callback
                      , u = void 0 === l ? function() {}
                    : l
                      , c = "";
                    s ? (i && s.label && (c += bi(s.label, i)),
                    e && s.value && (c += bi(s.value, e)),
                    s.remove && (c += s.remove)) : c = e;
                    var f = document.createElement("div");
                    return f.className = o,
                    f.innerHTML = c,
                    "true" === d(JetSmartFilterSettings, "plugin_settings", "use_tabindex") && (f.tabIndex = 0),
                    Ii(f).one("click", u),
                    f
                }
            }, {
                key: "regularItem",
                value: function(t) {
                    var e = this
                      , r = function(t) {
                        if ("string" != typeof t)
                            return t;
                        for (var e = 0, r = [["&", "&amp;"], ["$", "&#36;"], ["<", "&lt;"], [">", "&gt;"], ['"', "&quot;"], ["'", "&#39;"], ["/", "&#x2F;"], ["`", "&#x60;"], ["=", "&#x3D;"], [" ", "&#x20;"]]; e < r.length; e++) {
                            var n = i(r[e], 2)
                              , o = n[0]
                              , a = n[1]
                              , s = new RegExp("\\".concat(o),"g");
                            t = t.replace(s, a)
                        }
                        return t
                    }(t.activeValue)
                      , n = t.activeLabel;
                    return !!r && this.buildItem({
                        value: r,
                        label: n,
                        callback: function() {
                            e.removeFilter(t)
                        }
                    })
                }
            }, {
                key: "separatedItems",
                value: function(t) {
                    var e = this
                      , r = document.createDocumentFragment();
                    return t.data.forEach((function(i) {
                        var n = t.getValueLabel(i)
                          , o = t.activeLabel;
                        n && r.appendChild(e.buildItem({
                            value: n,
                            label: o,
                            callback: function() {
                                e.removeFilter(t, i)
                            }
                        }))
                    }
                    )),
                    r
                }
            }, {
                key: "groupedItem",
                value: function(t) {
                    var e, r = this, i = "";
                    return t.forEach((function(t) {
                        var r = t.activeValue
                          , n = t.activeLabel;
                        r && (i && (i += " > "),
                        i += r),
                        !e && n && (e = n)
                    }
                    )),
                    this.buildItem({
                        value: i,
                        label: e,
                        callback: function() {
                            r.removeFilter(t[0])
                        }
                    })
                }
            }, {
                key: "removeFilter",
                value: function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t.reset(r);
                    var i = t.copy;
                    i.applyType = this.applyType,
                    e.publish("fiter/change", i),
                    e.publish("fiter/apply", i)
                }
            }, {
                key: "setAllProviders",
                value: function() {
                    var t = this
                      , e = (this.additionalProviders && Array.isArray(this.additionalProviders) ? this.additionalProviders : []).map((function(e) {
                        var r = e.split("/", 2);
                        return r[0] + "/" + (r[1] || t.queryId)
                    }
                    ));
                    this.allProviders = Ei(new Set([this.providerKey].concat(Ei(e))))
                }
            }, {
                key: "isSeparate",
                value: function(t) {
                    return !(!this.separateMultiple || !Array.isArray(t.data))
                }
            }, {
                key: "isThereHierarchicalFilters",
                value: function(t) {
                    return t.some((function(t) {
                        return t.isHierarchy
                    }
                    ))
                }
            }, {
                key: "isCurrentProvider",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        provider: !1,
                        queryId: !1
                    }
                      , e = t.provider
                      , r = void 0 !== e && e
                      , i = t.queryId
                      , n = void 0 === i ? "default" : i;
                    return !!r && !!this.allProviders.includes(r + "/" + n)
                }
            }, {
                key: "activeItems",
                get: function() {
                    var t = [];
                    for (var e in this.activeItemsСollection)
                        t = [].concat(Ei(t), Ei(this.activeItemsСollection[e]));
                    return t
                }
            }, {
                key: "containerElement",
                get: function() {
                    return !!this.$activeItemsContainer && !!this.$activeItemsContainer.length && this.$activeItemsContainer.get(0)
                }
            }, {
                key: "groupHierarchicalFilters",
                value: function(t) {
                    for (var e = []; t.length; ) {
                        for (var r = void 0, i = t.shift(), n = i.filterId, o = 0; o < t.length; o++) {
                            var a;
                            t[o].filterId === n && (r || (r = [i]),
                            (a = r).push.apply(a, Ei(t.splice(o, 1))),
                            o--)
                        }
                        r ? e.push(r) : e.push(i)
                    }
                    return e
                }
            }],
            r && Ti(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t;
            var t, r
        }();
        function Vi(t) {
            return Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Vi(t)
        }
        function Bi() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Bi = function() {
                return !!t
            }
            )()
        }
        function qi(t) {
            return qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            qi(t)
        }
        function Ni(t, e) {
            return Ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ni(t, e)
        }
        function Li(t) {
            var e = function(t) {
                if ("object" != Vi(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Vi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Vi(e) ? e : e + ""
        }
        function Mi(t) {
            return Mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Mi(t)
        }
        function Gi() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Gi = function() {
                return !!t
            }
            )()
        }
        function Ji(t) {
            return Ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Ji(t)
        }
        function Ui(t, e) {
            return Ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ui(t, e)
        }
        function Hi(t) {
            var e = function(t) {
                if ("object" != Mi(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != Mi(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Mi(e) ? e : e + ""
        }
        const Ki = {
            BasicFilter: vt,
            CheckBoxes: Mt,
            CheckRange: Wt,
            Select: ue,
            SelectHierarchical: ve,
            Range: xe,
            DateRange: We,
            DatePeriod: nr,
            Radio: cr,
            Rating: kr,
            Visual: $r,
            Alphabet: Rr,
            Search: zr,
            Sorting: ei,
            ButtonApply: li,
            ButtonRemove: hi,
            Pagination: $i,
            ActiveFilters: function(t) {
                function e(t) {
                    var r, i, n, o;
                    return function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(t, e, r) {
                        (e = Li(e))in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    }((i = this,
                    o = [t, {
                        templateName: "active_filter",
                        listClass: "jet-active-filters__list",
                        labelClass: "jet-active-filters__title",
                        itemClass: "jet-active-filter"
                    }],
                    n = qi(n = e),
                    r = function(t, e) {
                        if (e && ("object" == Vi(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(i, Bi() ? Reflect.construct(n, o || [], qi(i).constructor) : n.apply(i, o))), "name", "active-filters"),
                    r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && Ni(t, e)
                }(e, t),
                r = e,
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
                var r
            }(Ai),
            ActiveTags: function(t) {
                function e(t) {
                    var r, i, n, o;
                    return function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(t, e, r) {
                        (e = Hi(e))in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    }((i = this,
                    o = [t, {
                        separateMultiple: !0,
                        templateName: "active_tag",
                        listClass: "jet-active-tags__list",
                        labelClass: "jet-active-tags__title",
                        itemClass: "jet-active-tag",
                        clearClass: "jet-active-tag jet-active-tag--clear"
                    }],
                    n = Ji(n = e),
                    r = function(t, e) {
                        if (e && ("object" == Mi(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(i, Gi() ? Reflect.construct(n, o || [], Ji(i).constructor) : n.apply(i, o))), "name", "active-tags"),
                    r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && Ui(t, e)
                }(e, t),
                r = e,
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
                var r
            }(Ai)
        };
        var Wi = r(669);
        const zi = {
            archivePostsClass: ".elementor-widget-archive-posts",
            defaultPostsClass: ".elementor-widget-posts",
            postsSettings: {},
            skin: "archive_classic",
            addSubscribers: function() {
                e.subscribe("provider/content-rendered", this.eproPostRendered.bind(this))
            },
            eproPostRendered: function(t, e) {
                if ("epro-archive" === t || "epro-posts" === t) {
                    var r = this.defaultPostsClass
                      , i = null
                      , n = "posts";
                    "epro-archive" === t && (r = this.archivePostsClass,
                    n = "archive-posts"),
                    i = e.parent(r),
                    this.fitImages(i),
                    this.postsSettings = i.data("settings"),
                    "widget" === i.data("element_type") ? this.skin = i.data("widget_type") : this.skin = i.data("element_type"),
                    this.skin = this.skin.split(n + "."),
                    this.skin = this.skin[1],
                    "yes" === this.postsSettings[this.skin + "_masonry"] && setTimeout(this.initMasonry(i), 0)
                }
            },
            initMasonry: function(t) {
                var e, r = t.find(".elementor-posts-container"), i = r.find(".elementor-post"), n = this.postsSettings, o = 1;
                switch (i.css({
                    marginTop: "",
                    transitionDuration: ""
                }),
                window.elementorFrontend.getCurrentDeviceMode()) {
                case "mobile":
                    o = n[this.skin + "_columns_mobile"];
                    break;
                case "tablet":
                    o = n[this.skin + "_columns_tablet"];
                    break;
                default:
                    o = n[this.skin + "_columns"]
                }
                if (e = o >= 2,
                r.toggleClass("elementor-posts-masonry", e),
                e) {
                    var a = n[this.skin + "_row_gap"].size;
                    a || (a = n[this.skin + "_item_gap"].size),
                    new elementorModules.utils.Masonry({
                        container: r,
                        items: i.filter(":visible"),
                        columnsCount: o,
                        verticalSpaceBetween: a
                    }).run()
                } else
                    r.height("")
            },
            fitImage: function(t) {
                var e = t.find(".elementor-post__thumbnail")
                  , r = e.find("img")[0];
                if (r) {
                    var i = e.outerHeight() / e.outerWidth()
                      , n = r.naturalHeight / r.naturalWidth;
                    e.toggleClass("elementor-fit-height", n < i)
                }
            },
            fitImages: function(t) {
                var e = this
                  , r = getComputedStyle(t[0], ":after").content;
                t.find(".elementor-posts-container").toggleClass("elementor-has-item-ratio", !!r.match(/\d/)),
                t.find(".elementor-post").each((function(t, r) {
                    var i = Wi(r)
                      , n = i.find(".elementor-post__thumbnail img");
                    e.fitImage(i),
                    n.on("load", (function() {
                        e.fitImage(i)
                    }
                    ))
                }
                ))
            }
        };
        var Qi = r(669)
          , Yi = {
            filtersList: {
                CheckBoxes: "jet-smart-filters-checkboxes",
                CheckRange: "jet-smart-filters-check-range",
                Select: "jet-smart-filters-select",
                SelectHierarchical: "jet-smart-filters-hierarchy",
                Range: "jet-smart-filters-range",
                DateRange: "jet-smart-filters-date-range",
                DatePeriod: "jet-smart-filters-date-period",
                Radio: "jet-smart-filters-radio",
                Rating: "jet-smart-filters-rating",
                Visual: "jet-smart-filters-color-image",
                Alphabet: "jet-smart-filters-alphabet",
                Search: "jet-smart-filters-search",
                Sorting: "jet-smart-filters-sorting",
                ButtonApply: "jet-smart-filters-apply-button",
                ButtonRemove: "jet-smart-filters-remove-filters",
                Pagination: "jet-smart-filters-pagination",
                ActiveFilters: "jet-smart-filters-active",
                ActiveTags: "jet-smart-filters-active-tags"
            },
            filterClass: function(t) {
                for (var e in Yi.filtersList)
                    if ("jet-smart-filters-" + t === Yi.filtersList[e])
                        return e
            },
            filters: Ki,
            filterNames: [],
            filterGroups: {},
            initFilter: function(t) {
                if (!t.is("[jsf-filter]")) {
                    t.attr("jsf-filter", "");
                    var e = null;
                    for (var r in Yi.filtersList)
                        t.hasClass(Yi.filtersList[r]) && (e = r);
                    if (e) {
                        var i = new Yi.filters[e](t);
                        i.isHierarchy ? i.filters.forEach((function(t) {
                            Zi(t)
                        }
                        )) : Zi(i);
                        var n = t.data("additional-providers") || t.find("[data-additional-providers]").data("additional-providers");
                        n && !Xi.includes(e) && n.forEach((function(t) {
                            var e = t.split("/", 2)
                              , r = e[0]
                              , n = e[1] || i.queryId;
                            i.isHierarchy ? i.filters.forEach((function(t) {
                                Zi(tn(r, n, t))
                            }
                            )) : Zi(tn(r, n, i))
                        }
                        ))
                    }
                }
            },
            reinitFilters: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                for (var e in t && !Array.isArray(t) && (t = [t]),
                Yi.filterGroups)
                    Yi.filterGroups[e].reinitFilters(t)
            },
            findFilters: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi("html");
                return Qi("." + Object.values(Yi.filtersList).join(", ."), t)
            },
            filtersUI: Re,
            setIndexedData: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (Yi.filterGroups[t] && Yi.filterGroups[t].indexingFilters) {
                    var r = d(JetSmartFilterSettings, "ajaxurl")
                      , i = {
                        action: "jet_smart_filters_get_indexed_data",
                        provider: t,
                        query_args: e,
                        indexing_filters: Yi.filterGroups[t].indexingFilters
                    };
                    Qi.ajax({
                        url: r,
                        type: "POST",
                        dataType: "json",
                        data: i
                    }).done((function(e) {
                        e.data && (window.JetSmartFilterSettings.jetFiltersIndexedData || (window.JetSmartFilterSettings.jetFiltersIndexedData = {}),
                        window.JetSmartFilterSettings.jetFiltersIndexedData[t] || (window.JetSmartFilterSettings.jetFiltersIndexedData[t] = {}),
                        window.JetSmartFilterSettings.jetFiltersIndexedData[t] = e.data,
                        Yi.filterGroups[t] && Yi.filterGroups[t].filters.forEach((function(t) {
                            t.indexer && t.indexer.update()
                        }
                        )))
                    }
                    ))
                }
            },
            events: e
        }
          , Xi = ["ActiveFilters", "ActiveTags", "ButtonRemove"];
        function Zi(t) {
            var e, r, i;
            t.provider && t.queryId && (e = t.provider,
            r = t.queryId,
            i = e + "/" + r,
            Yi.filterGroups[i] || (Yi.filterGroups[i] = new ct(e,r)),
            Yi.filterGroups[i]).addFilter(t)
        }
        function tn(t, e, r) {
            var i = {
                isAdditional: !0,
                name: r.name,
                path: r.path,
                provider: t,
                queryId: e,
                filterId: r.filterId,
                queryKey: r.queryKey,
                data: r.data,
                reset: function() {
                    this.data = !1
                }
            };
            return r.isHierarchy && (i.isHierarchy = !0,
            i.depth = r.depth),
            i
        }
        for (var en in window.JetSmartFilters = Yi,
        Qi(document).ready((function() {
            var t = new Event("jet-smart-filters/before-init");
            document.dispatchEvent(t),
            window.elementorFrontend && zi.addSubscribers(),
            mi.init();
            var e = Yi.findFilters();
            e.each((function(t) {
                var r = e.eq(t);
                Yi.initFilter(r)
            }
            ));
            var r = new Event("jet-smart-filters/inited");
            document.dispatchEvent(r)
        }
        )),
        Yi.filtersList) {
            var rn = Yi.filtersList[en];
            Yi.filterNames.push(rn.replace("jet-smart-filters-", ""))
        }
        const nn = Yi;
        var on = r(669);
        const an = {
            initFilter: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : on("body");
                switch (t) {
                case "checkboxes":
                    r("CheckBoxes");
                    break;
                case "check-range":
                    r("CheckRange");
                    break;
                case "radio":
                    r("Radio");
                    break;
                case "color-image":
                    r("Visual");
                    break;
                case "range":
                    r("Range");
                    break;
                case "date-range":
                    r("DateRange");
                    break;
                case "date-period":
                    r("DatePeriod")
                }
                function r(t) {
                    var r = e.find("." + window.JetSmartFilters.filtersList[t]);
                    r.length && r.each((function(e) {
                        new window.JetSmartFilters.filters[t](r.eq(e))
                    }
                    ))
                }
            },
            intiAllFilters: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : on("body");
                window.JetSmartFilters.filterNames.forEach((function(r) {
                    t.initFilter(r, e)
                }
                ))
            }
        };
        var sn = r(669)
          , ln = d("", "seo", "selectors", "title")
          , un = d("", "seo", "selectors", "description")
          , cn = sn(ln)
          , fn = sn(un)
          , dn = ln && cn.length
          , pn = un && fn.length;
        function hn(t, e) {
            e || (e = t.data("fallback") || ""),
            t.html(e)
        }
        (dn || pn) && (JetSmartFilterSettings.extra_props.seo = {
            current_page: d(JetSmartFilterSettings, "seo", "current_page")
        }),
        dn && (JetSmartFilterSettings.extra_props.seo.is_title_enabled = !0),
        pn && (JetSmartFilterSettings.extra_props.seo.is_description_enabled = !0),
        e.subscribe("ajaxFilters/updated", (function(t, e, r) {
            r.seo && (r.seo.hasOwnProperty("title") && dn && hn(cn, r.seo.title),
            r.seo.hasOwnProperty("description") && pn && hn(fn, r.seo.description))
        }
        )),
        r(0),
        r(669)(document).on("jet-engine/listing/ajax-get-listing/done", (function(t, e) {
            var r, i = e.find(".jet-listing-grid__items");
            if (i.length) {
                var n = "jet-engine"
                  , o = d(i.data("nav"), "widget_settings", "_element_id") || "default"
                  , a = d(JetSmartFilters, "filterGroups", n + "/" + o);
                if (a) {
                    var s = a.getFiltersByName("pagination");
                    if (s.length) {
                        var l = i.data("page")
                          , u = i.data("pages");
                        null !== (r = window.JetSmartFilterSettings.props) && void 0 !== r && null !== (r = r[n]) && void 0 !== r && r[o] && (window.JetSmartFilterSettings.props[n][o].page = l,
                        window.JetSmartFilterSettings.props[n][o].max_num_pages = u,
                        s.forEach((function(t) {
                            t.reinit()
                        }
                        )))
                    }
                }
            }
        }
        ));
        var yn = r(669);
        yn(document).ready((function() {
            window.JetPlugins.init(!1, nn.filterNames.map((function(t) {
                return {
                    block: "jet-smart-filters/" + t,
                    callback: function(t) {
                        nn.initFilter(t)
                    }
                }
            }
            )))
        }
        )),
        yn(window).on("elementor/frontend/init", (function() {
            nn.filterNames.forEach((function(t) {
                elementorFrontend.hooks.addAction("frontend/element_ready/jet-smart-filters-" + t + ".default", (function(e) {
                    if (elementorFrontend.isEditMode())
                        an.initFilter(t, e);
                    else {
                        var r = e.find(".jet-filter");
                        if (!r.length)
                            return;
                        r.each((function(t) {
                            nn.initFilter(r.eq(t))
                        }
                        ))
                    }
                }
                ))
            }
            ))
        }
        )),
        window.JetSmartFiltersBricksInit = function() {
            window.bricksIsFrontend || an.intiAllFilters()
        }
    }
    )()
}
)()
