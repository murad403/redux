import baseApi from "../../api/api";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getProducts: builder.query({
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
            providesTags: ["User"],
            transformResponse: (response) =>{
                return {
                    data: response.data,
                    message: response.message
                }
            }
        })
    })
})

export const { useGetProductsQuery} = productApi;