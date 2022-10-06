import { createSlice } from '@reduxjs/toolkit';


const initialState = {

    Candidate: "",
    assets: "",
    skills: ""
    // adress:[]


}

export const candidateSlice = createSlice({
    name: 'candidate_info',
    initialState,
    reducers: {

        setcandidateInfo: (state, action) => {
            state.Candidate = action.payload.Candidate
            state.skills = action.payload.skills
            state.assets = action.payload.assets

            //   state.Pimage = action.payload.pimage
            //   state.mobile = action.payload.mobile
            //   state.adress = action.payload.adress

        },
        unsetcandidateInfo: (state, action) => {
            state.Candidate = action.payload.Candidate
            state.value1 = action.payload.value1
            state.valueoption2 = action.payload.valueoption2
            //   state.pimage = action.payload.pimage
            //   state.mobile = action.payload.mobile

        },
    }
})

export const { setcandidateInfo, unsetcandidateInfo } = candidateSlice.actions;

export default candidateSlice.reducer;