import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (builder)=> ({
        getAllNews: builder.query({
            query: ()=> '/news'
        }), 
        getSingleNews: builder.query({
            query: (newsId)=> `/news/${newsId}`
        })
    })
})


export const {useGetAllNewsQuery, useGetSingleNewsQuery} = api;