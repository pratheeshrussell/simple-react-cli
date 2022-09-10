import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const {{(name + ' ' + postfix) | PascalCase }} = createApi({
    reducerPath: '{{(name + ' ' + postfix) | PascalCase }}',
    tagTypes:['{{(name + ' ' + postfix) | PascalCase }}data'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        // Symbol type to pass skipToken
        getUserById: builder.query<any,(number|symbol)>({
            providesTags:['{{(name + ' ' + postfix) | PascalCase }}data'],
            query: (id) => ({
                url:`/users/${id.toString()}`,
                method:'GET',
            })
          }),
        updateUser:builder.mutation<any,({id:number,body:any}|symbol)>({
            invalidatesTags:['{{(name + ' ' + postfix) | PascalCase }}data'],
            transformResponse(baseQueryReturnValue:any, meta, arg) {
              return baseQueryReturnValue
            },
            query: (param:{id:number,body:any}) => ({
                url:`/users/${param.id}`,
                method:'POST',
                body:param.body
            }), 
          }),
        
    })
});

// To use Query and mutations use generated hooks
export const getUserByID = {{(name + ' ' + postfix) | PascalCase }}.useGetUserByIdQuery;
export const updateUser = {{(name + ' ' + postfix) | PascalCase }}.useUpdateUserMutation;


export default {{(name + ' ' + postfix) | PascalCase }};
// Register in store Reducers
// [{{(name + ' ' + postfix) | PascalCase }}.reducerPath]:{{(name + ' ' + postfix) | PascalCase }}.reducer,
// Also concat the middleware to list of middlewares
// {{(name + ' ' + postfix) | PascalCase }}.middleware