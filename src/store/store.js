import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './reducer/categotySlice'
import categoryMeals from './reducer/mealSlice'
import mealsAboutReducer from './reducer/mealsAboutSlice'
import areaReducer from './reducer/areaSlice'
import cartReducer from './reducer/cartSlice'




export const store = configureStore({
    reducer: {
      category: categoryReducer,
      meals: categoryMeals,
      mealsAbout: mealsAboutReducer,
      area: areaReducer,
      cart: cartReducer
    },
})