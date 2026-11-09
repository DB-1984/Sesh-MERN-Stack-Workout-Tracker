import { apiSlice } from "./apiSlice";
import { SESH_URL } from "../constants"; // "/api/seshes"

export const seshApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // seshApiSlice.js
    getSeshes: builder.query({
      query: ({ userId, date } = {}) => {
        let url = `${SESH_URL}?user=${userId}`;
        if (date) url += `&date=${date}`;
        return url;
      },
      // Add this to sort by date (Latest first)
      transformResponse: (response) => {
        return [...response].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      },
      providesTags: ["Sesh"],
    }),
    // Provides 'live' feedback to the UI as data is saved, using a blur() event as a trigger
renameSesh: builder.mutation({
  query: ({ id, title }) => ({
    url: `${SESH_URL}/${id}`,
    method: "PATCH",
    body: { title },
  }),

  async onQueryStarted(
    { id, title },
    { dispatch, queryFulfilled, getState }
  ) {
    const userId = getState().user.userInfo?._id;

    // Update the cached session list.
    const listPatch = dispatch(
      apiSlice.util.updateQueryData(
        "getSeshes",
        { userId },
        (draft) => {
          const sesh = draft.find((s) => s._id === id);
          if (sesh) sesh.title = title;
        }
      )
    );

    // Update the individual session used by ViewSesh.
    const detailPatch = dispatch(
      apiSlice.util.updateQueryData(
        "getSeshById",
        id,
        (draft) => {
          draft.title = title;
        }
      )
    );

    try {
      await queryFulfilled;
    } catch {
      listPatch.undo();
      detailPatch.undo();
    }
  },
}),
    addSesh: builder.mutation({
      query: (newSesh) => ({
        url: SESH_URL,
        method: "POST",
        body: newSesh,
      }),
      invalidatesTags: ["Sesh"],
    }),
    deleteSesh: builder.mutation({
      query: (id) => ({
        url: `${SESH_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Sesh"],
    }),
    addExercise: builder.mutation({
      query: ({ seshId, exercise }) => ({
        url: `${SESH_URL}/${seshId}/exercises`, // updated path
        method: "POST",
        body: exercise,
      }),
      invalidatesTags: ["Sesh"],
    }),
    deleteExercise: builder.mutation({
      query: ({ seshId, exerciseId }) => ({
        url: `${SESH_URL}/${seshId}/exercises/${exerciseId}`,
      method: "DELETE",
      }),
      invalidatesTags: ["Sesh"],
    }),

    getSeshById: builder.query({
      query: (id) => `${SESH_URL}/${id}`,
      providesTags: (result, error, id) => [{ type: "Sesh", id }],
    }),
    editExercise: builder.mutation({
      query: ({ seshId, exerciseId, updatedExercise }) => ({
        url: `${SESH_URL}/${seshId}/exercises/${exerciseId}`, // updated path
        method: "PUT",
        body: updatedExercise,
      }),
      invalidatesTags: ["Sesh"],
    }),
  }),
});

export const {
  useGetSeshesQuery,
  useAddSeshMutation,
  useGetSeshByIdQuery,
  useDeleteSeshMutation,
  useAddExerciseMutation,
  useDeleteExerciseMutation,
  useEditExerciseMutation,
  useRenameSeshMutation,
} = seshApiSlice;
