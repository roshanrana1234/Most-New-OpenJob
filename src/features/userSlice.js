import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    basic: "",
    perks: ""
    // Candidate: "",
    // valueoption2: "",
    // value1: ""
    // adress:[]


}

export const userSlice = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.basic = action.payload.basic
            state.perks = action.payload.perks
            // state.Candidate = action.payload.Candidate,
            // state.value1 = action.payload.value1,
            // state.valueoption2 = action.payload.valueoption2

            //   state.Pimage = action.payload.pimage
            //   state.mobile = action.payload.mobile
            //   state.adress = action.payload.adress

        },
        unsetUserInfo: (state, action) => {
            state.basic = action.payload.basic
            state.valueoption = action.payload.valueoption
            // state.Candidate = action.payload.Candidate,
            //     state.value1 = action.payload.value1,
            //     state.valueoption2 = action.payload.valueoption2
            //   state.pimage = action.payload.pimage
            //   state.mobile = action.payload.mobile

        },
    }
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions;

export default userSlice.reducer;