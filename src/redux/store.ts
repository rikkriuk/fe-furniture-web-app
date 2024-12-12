import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./slice/HeroSlice";
import dataReducer from "./slice/DataSlice";
import categoryReducer from "./slice/CategorySlice";
import productReducer from "./slice/ProductSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
   reducer: {
      hero: heroReducer,
      data: dataReducer,
      category: categoryReducer,
      product: productReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;