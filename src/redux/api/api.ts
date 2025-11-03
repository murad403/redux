import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: "your base url"}),
    tagTypes: ["User"],
    endpoints: () =>({
        // getUser: builder.query({
        //     query: (query) =>{
        //         const params = new URLSearchParams();
        //         if(query){
        //             params.append("search", query);
        //         }
        //         return {
        //             url: "/user",
        //             method: "GET",
        //             params: params
        //         }
        //     },
        //     providesTags: ["User"]
        // }),
        // addUser: builder.mutation({
        //     query: (data) =>{
        //         return {
        //             url: "/user",
        //             method: "POST",
        //             body: data
        //         }
        //     },
        //     invalidatesTags: ["User"]
        // })
    })
})

// export const {useGetUserQuery, useAddUserMutation} = baseApi;

export default baseApi;