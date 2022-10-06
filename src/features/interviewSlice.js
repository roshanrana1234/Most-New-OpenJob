import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    Interview: "",

    // Candidate: "",
    // valueoption2: "",
    // value1: ""
    // adress:[]


}

export const interSlice = createSlice({
    name: 'inter_info',
    initialState,
    reducers: {
        setinterSliceInfo: (state, action) => {
            state.Interview = action.payload.Interview

            // state.Candidate = action.payload.Candidate,
            // state.value1 = action.payload.value1,
            // state.valueoption2 = action.payload.valueoption2

            //   state.Pimage = action.payload.pimage
            //   state.mobile = action.payload.mobile
            //   state.adress = action.payload.adress

        },
        unsetinterSliceInfo: (state, action) => {
            state.basic = action.payload.basic

            // state.Candidate = action.payload.Candidate,
            //     state.value1 = action.payload.value1,
            //     state.valueoption2 = action.payload.valueoption2
            //   state.pimage = action.payload.pimage
            //   state.mobile = action.payload.mobile

        },
    }
})

export const { setinterSliceInfo, unsetinterSliceInfo } = interSlice.actions;

export default interSlice.reducer;