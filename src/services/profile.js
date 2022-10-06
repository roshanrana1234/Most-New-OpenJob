import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    // prepareHeaders(headers) {
    //   return headers;
    // },
    // credentials: "include"

  }),

  tagTypes: ['Employer', 'User', 'Postjob', 'Category'],


  //post request
  endpoints: (builder) => ({





    register: builder.mutation({

      query: (actualData) => {
        return {
          url: 'register',
          method: 'POST',
          body: actualData
        }
      },
      invalidatesTags: ['Employer'],
    }),


    userregister: builder.mutation({

      query: (actualData) => {
        return {
          url: '/user/register',
          method: 'POST',
          body: actualData
        }
      },
      invalidatesTags: ['User'],
    }),



    ApllyJob: builder.mutation({
      query: ({ actualData, token }) => {
        return {
          url: 'user/ApllyJob',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${token}`,
          },
        }
      },
      invalidatesTags: ['User'],
    }),



    loginProfile: builder.mutation({
      query: (actualData) => {
        return {
          url: 'login',
          method: 'POST',
          body: actualData,
        }
      },
      invalidatesTags: ['Employer'],
    }),


    userlogin: builder.mutation({
      query: (actualData) => {
        return {
          url: 'user/login',
          method: 'POST',
          body: actualData,
        }
      },
      invalidatesTags: ['User'],
    }),

    adminlogin: builder.mutation({
      query: (actualData) => {
        return {
          url: 'admin/login',
          method: 'POST',
          body: actualData,
        }
      },
      invalidatesTags: ['User'],
    }),

    addFirstDetails: builder.mutation({
      query: ({ actualData, token }) => {
        return {
          url: 'addFirstDetails',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${token}`,
          },
        }
      },
      invalidatesTags: ['User'],
    }),


    Postjob: builder.mutation({
      query: ({ data, token }) => ({

        url: `Postjob`,
        method: 'POST',
        body: data,
        headers: {
          'authorization': `Bearer ${token}`,
        },

      }), invalidatesTags: ['Postjob'],
    }),

    Activatejob: builder.mutation({
      query: ({ _id, token }) => ({

        url: `/admin/Activatejob/${_id}`,

        method: 'PATCH',

        headers: {
          'authorization': `Bearer ${token}`,
        },

      }), invalidatesTags: ['Postjob'],
    }),



    // verifyOTP: builder.mutation({
    //   query: (actualData) => {
    //     return {
    //       url: 'verify',
    //       method: 'POST',
    //       body: actualData,
    //       headers: {
    //         'Content-type': 'application/json',
    //       }
    //     }
    //   }
    // }),




    getjobsbyId: builder.query({
      query: (detailId) => ({

        url: `getjobsbyId/${detailId}`,
        method: 'GET',
      }),
      // providesTags: ['Postjob']
      providesTags: (result, error, arg) => [{ type: 'Postjob', _id: arg._id }]
    }),


    // about: builder.query({
    //   query: (token) => ({

    //     url: 'about',
    //     method: 'GET',
    //     headers: {
    //       'authorization': `Bearer ${token}`,
    //     },
    //   }),
    //   providesTags: ['Star']
    // }),




    getDetails: builder.query({
      query: (token) => ({

        url: `about`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },
        providesTags: ['User'],
      })

    }),



    getpostjobs: builder.query({
      query: (token) => ({

        url: `getpostjobs`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },


      }),
      providesTags: ['Postjob'],
    }),




    usergetActivejobs: builder.query({
      query: () => ({

        url: `/user/getActivejobs`,
        method: 'GET',


      }),
      providesTags: ['Postjob'],
    }),

    getjobs: builder.query({
      query: () => ({

        url: `getjobs`,
        method: 'GET',


      }),
      providesTags: ['Postjob'],
    }),


    admingetjobs: builder.query({
      query: (token) => ({

        url: `admin/getjobs`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },

      }),
      providesTags: ['Postjob'],
    }),




    getActivejobs: builder.query({
      query: (token) => ({

        url: `getActivejobs`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },


      }),
      providesTags: ['Postjob'],
    }),


    getUnderReviewjobs: builder.query({
      query: (token) => ({

        url: `getUnderReviewjobs`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },

      }),
      providesTags: ['Postjob'],
    }),




    getcitylist: builder.query({
      query: () => ({

        url: `citylist`,
        method: 'GET',


      }),
      providesTags: ['Postjob'],
    }),



    getstatelist: builder.query({
      query: () => ({

        url: `statelist`,
        method: 'GET',


      }),
      providesTags: ['Postjob'],
    }),




    userabout: builder.query({
      query: (token) => ({

        url: `/user/about`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },


      }),
      providesTags: ['Postjob'],
    }),





    // delete request

    deletejobbyid: builder.mutation({
      query: ({ token, _id }) => ({


        url: `deletejobbyid/${_id}`,
        method: 'DELETE',
        headers: {
          'authorization': `Bearer ${token}`,
        },


      }), invalidatesTags: (result, error, arg) => [{ type: 'Postjob', _id: arg._id }]
    }),




    GetAdressbyId: builder.query({
      query: ({ _id, token }) => ({

        url: `GetAdressbyId/${_id}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
        },

      }
      ), providesTags: (result, error, _id) => [{ type: 'Postjob', _id }],
      // providesTags: (result, error, arg) =>
      // result
      //   ? [...result.map(({ _id }) => ({ type: 'Adress', _id })), 'Adress']
      //   : ['Adress']

    }),
    //     LogoutProfile: builder.query({
    //       query: () => {
    //  return{
    //     url:'logout',
    //     method:'GET',

    // getProductbyCateryId
    // }
    //       }
    //     }),



  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUsergetActivejobsQuery,
  useGetActivejobsQuery,
  useGetUnderReviewjobsQuery,
  useActivatejobMutation,
  useUseraboutQuery,
  useRegisterMutation,
  useApllyJobMutation,
  useGetDetailsQuery,
  useGetpostjobsQuery,
  useEditAdressbyIdMutation,
  useAddFirstDetailsMutation,
  usePostjobMutation,
  useGetAdressbyIdQuery,
  useVerifyOTPMutation,
  useLoginProfileMutation,
  useGetjobsQuery,
  useUserloginMutation,
  useUserregisterMutation,
  useGetjobsbyIdQuery,
  useDeletejobbyidMutation,
  useGetcitylistQuery,
  useGetstatelistQuery,
  useAdminloginMutation,
  useDeleteStarbyIdMutation,
  useAdmingetjobsQuery,

} = profileApi;