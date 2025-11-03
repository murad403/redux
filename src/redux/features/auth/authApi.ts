import baseApi from "../../api/api";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getUser: builder.query({
            query: (query) =>{
                const params = new URLSearchParams();
                if(query){
                    params.append("search", query);
                }
                return {
                    url: "/user",
                    method: "GET",
                    params: params
                }
            },
            providesTags: ["User"]
        }),
        addUser: builder.mutation({
            query: (data) =>{
                return {
                    url: "/user",
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: ["User"]
        })
    })
})

export const {useAddUserMutation, useGetUserQuery} = authApi;