import Cart from "../screens/Cart/Cart";
import FilterArea from "../screens/FilterArea/FilterArea";
import Home from "../screens/Home/Home";
import Meals from "../screens/Meals/Meals";
import MealsAbout from "../screens/MealsAbout/MealsAbout";
import NotFound from "../screens/NotFound/NotFound";

export const RoutesData = [

    {path: '/', element: Home},
    {path: '/category/:categoryName', element: Meals},
    {path: '/meal/:mealsId', element: MealsAbout},
    {path: "/filterArea/:area", element: FilterArea},

    {path: '/cart', element: Cart},
    {path: '*', element: NotFound},



]