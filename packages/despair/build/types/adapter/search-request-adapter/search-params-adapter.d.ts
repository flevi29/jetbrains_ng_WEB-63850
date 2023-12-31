import type { SearchContext, MeiliSearchMultiSearchParams } from '../../types';
/**
 * Adapts instantsearch.js and instant-meilisearch options
 * to meilisearch search query parameters.
 *
 * @param  {SearchContext} searchContext
 */
export declare function MeiliParamsCreator(searchContext: SearchContext): {
    getParams(): MeiliSearchMultiSearchParams;
    addQuery(): void;
    addFacets(): void;
    addAttributesToCrop(): void;
    addCropLength(): void;
    addCropMarker(): void;
    addFilters(): void;
    addAttributesToRetrieve(): void;
    addAttributesToHighlight(): void;
    addPreTag(): void;
    addPostTag(): void;
    addPagination(): void;
    addSort(): void;
    addGeoSearchFilter(): void;
    addShowMatchesPosition(): void;
    addMatchingStrategy(): void;
    addShowRankingScore(): void;
    addAttributesToSearchOn(): void;
};
/**
 * Adapt search request from instantsearch.js
 * to search request compliant with Meilisearch
 *
 * @param  {SearchContext} searchContext
 * @returns {MeiliSearchMultiSearchParams}
 */
export declare function adaptSearchParams(searchContext: SearchContext): MeiliSearchMultiSearchParams;
//# sourceMappingURL=search-params-adapter.d.ts.map