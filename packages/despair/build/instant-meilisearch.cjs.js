'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var meilisearch = require('meilisearch');

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
    var meilisearchClient = new meilisearch.MeiliSearch(meilisearchConfig);
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
