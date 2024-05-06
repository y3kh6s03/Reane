
// store作成するための関数をインポート
import { configureStore } from "@reduxjs/toolkit";
// store管理するsliceを読み込み
import chartReducer from "./chartSlice";

export const store = configureStore({
  reducer:{
    chart: chartReducer,
  }
})

// sliceとstoreで定義したことによって型推論してくれたものを型定義として利用できるようにtype定義する
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>