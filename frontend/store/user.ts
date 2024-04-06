import { emptySplitApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    listAllUsers: build.query<ListAllUsersApiResponse, ListAllUsersApiArg>({
      query: () => ({ url: `/users/` }),
    }),
    createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
      query: (queryArg) => ({ url: `/users/`, method: 'POST', body: queryArg.user }),
    }),
    getUserById: build.query<GetUserByIdApiResponse, GetUserByIdApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}/` }),
    }),
    updateUser: build.mutation<UpdateUserApiResponse, UpdateUserApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}/`, method: 'PUT', body: queryArg.user }),
    }),
    deleteUser: build.mutation<DeleteUserApiResponse, DeleteUserApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}/`, method: 'DELETE' }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type ListAllUsersApiResponse = /** status 200 A list of users */ User[];
export type ListAllUsersApiArg = void;
export type CreateUserApiResponse = /** status 201 The created user */ User;
export type CreateUserApiArg = {
  user: User;
};
export type GetUserByIdApiResponse = /** status 200 The requested user */ User;
export type GetUserByIdApiArg = {
  userId: number;
};
export type UpdateUserApiResponse = /** status 200 The updated user */ User;
export type UpdateUserApiArg = {
  userId: number;
  user: User;
};
export type DeleteUserApiResponse = unknown;
export type DeleteUserApiArg = {
  userId: number;
};
export type User = {
  email?: string;
  googleid?: string;
  id?: number;
  last_name?: string;
  name?: string;
  password?: string;
  username?: string;
};
export const {
  useListAllUsersQuery,
  useCreateUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = injectedRtkApi;
