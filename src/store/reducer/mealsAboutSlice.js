import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    mealsAbout: [],
    loadingMealsAbout: false,
}

export const mealAboutSlice = createSlice({
    name: 'mealsAbout',
    initialState,
    reducers: {
        fetchingMealsAbout: state => {
            state.loadingMealsAbout = true
        },
        fetchedMealsAbout: (state, action) => {
            state.mealsAbout = action.payload
            state.loadingMealsAbout = false
        },
        fetchingErrorMealsAbout: (state) => {
            state.loadingMealsAbout = false
        }
    }
})


export const {fetchingMealsAbout, fetchedMealsAbout, fetchingErrorMealsAbout} = mealAboutSlice.actions

export default mealAboutSlice.reducer