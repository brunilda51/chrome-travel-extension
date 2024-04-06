import { emptySplitApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    listAllPlaces: build.query<ListAllPlacesApiResponse, ListAllPlacesApiArg>({
      query: () => ({ url: `/places/` }),
    }),
    createPlace: build.mutation<CreatePlaceApiResponse, CreatePlaceApiArg>({
      query: (queryArg) => ({ url: `/places/`, method: 'POST', body: queryArg.place }),
    }),
    getPlaceById: build.query<GetPlaceByIdApiResponse, GetPlaceByIdApiArg>({
      query: (queryArg) => ({ url: `/places/${queryArg.placeId}/` }),
    }),
    updatePlace: build.mutation<UpdatePlaceApiResponse, UpdatePlaceApiArg>({
      query: (queryArg) => ({ url: `/places/${queryArg.placeId}/`, method: 'PUT', body: queryArg.place }),
    }),
    deletePlace: build.mutation<DeletePlaceApiResponse, DeletePlaceApiArg>({
      query: (queryArg) => ({ url: `/places/${queryArg.placeId}/`, method: 'DELETE' }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type ListAllPlacesApiResponse = /** status 200 A list of places */ Place[];
export type ListAllPlacesApiArg = void;
export type CreatePlaceApiResponse = /** status 201 The created place */ Place;
export type CreatePlaceApiArg = {
  place: Place;
};
export type GetPlaceByIdApiResponse = /** status 200 The requested place */ Place;
export type GetPlaceByIdApiArg = {
  placeId: number;
};
export type UpdatePlaceApiResponse = /** status 200 The updated place */ Place;
export type UpdatePlaceApiArg = {
  placeId: number;
  place: Place;
};
export type DeletePlaceApiResponse = unknown;
export type DeletePlaceApiArg = {
  placeId: number;
};
export type Place = {
  city_name?: string;
  country_name?: string;
  id?: number;
  description?: string;
};
export const {
  useListAllPlacesQuery,
  useCreatePlaceMutation,
  useGetPlaceByIdQuery,
  useUpdatePlaceMutation,
  useDeletePlaceMutation,
} = injectedRtkApi;
