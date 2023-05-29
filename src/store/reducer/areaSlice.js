import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loadingArea: false,
    area: [],
}

export const categorySlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        fetchingArea: state => {
            state.loadingArea =true
        },
        fetchedArea: (state, action) => {
            state.area = action.payload
            state.loadingArea = false
        },
        fetchErrorArea: state => {
            state.loadingArea = false
        },
    },

})


export const {fetchingArea, fetchedArea, fetchErrorArea } = categorySlice.actions

export default categorySlice.reducer