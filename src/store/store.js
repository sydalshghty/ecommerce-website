import { configureStore } from "@reduxjs/toolkit";
import reducerHeart from "./reducer";
import WishListProducts from "./wishListReducer";
import  cartreducer  from "./cartReducer";
import flasSalesReducer from "./FlashSalesReducer";
import  bestProductsReducer  from "./BestProducts";
import  ProductsReducer  from "./ourProductsReducer";

export const store = configureStore({
    reducer: {
        heart: reducerHeart,
        items: WishListProducts.reducer,
        cart: cartreducer,
        flasSales: flasSalesReducer,
        bestProducts: bestProductsReducer,
        products: ProductsReducer,
    }
});