import { emptySplitApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    listAllSearches: build.query<ListAllSearchesApiResponse, ListAllSearchesApiArg>({
      query: () => ({ url: `/searches/` }),
    }),
    createSearch: build.mutation<CreateSearchApiResponse, CreateSearchApiArg>({
      query: (queryArg) => ({ url: `/searches/`, method: 'POST', body: queryArg.search }),
    }),
    getSearchById: build.query<GetSearchByIdApiResponse, GetSearchByIdApiArg>({
      query: (queryArg) => ({ url: `/searches/${queryArg.searchId}/` }),
    }),
    updateSearch: build.mutation<UpdateSearchApiResponse, UpdateSearchApiArg>({
      query: (queryArg) => ({ url: `/searches/${queryArg.searchId}/`, method: 'PUT', body: queryArg.search }),
    }),
    deleteSearch: build.mutation<DeleteSearchApiResponse, DeleteSearchApiArg>({
      query: (queryArg) => ({ url: `/searches/${queryArg.searchId}/`, method: 'DELETE' }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type ListAllSearchesApiResponse = /** status 200 A list of searches */ Search[];
export type ListAllSearchesApiArg = void;
export type CreateSearchApiResponse = /** status 201 The created search */ Search;
export type CreateSearchApiArg = {
  search: Search;
};
export type GetSearchByIdApiResponse = /** status 200 The requested search */ Search;
export type GetSearchByIdApiArg = {
  searchId: number;
};
export type UpdateSearchApiResponse = /** status 200 The updated search */ Search;
export type UpdateSearchApiArg = {
  searchId: number;
  search: Search;
};
export type DeleteSearchApiResponse = unknown;
export type DeleteSearchApiArg = {
  searchId: number;
};
export type Place = {
  city_name?: string;
  country_name?: string;
  id?: number;
  description?: string;
};
export type Search = {
  id?: number;
  sustainability_score?: number;
  destination?: Place;
  flight_duration?: string;
  origin?: Place;
};
export const {
  useListAllSearchesQuery,
  useCreateSearchMutation,
  useGetSearchByIdQuery,
  useUpdateSearchMutation,
  useDeleteSearchMutation,
} = injectedRtkApi;
