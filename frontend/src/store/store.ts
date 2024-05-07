
// store作成するための関数をインポート
import { configureStore } from "@reduxjs/toolkit";
// store管理するsliceを読み込み
import AuthChartsReducer from "./AuthChartsSlice";
import UserChartsReducer from "./UserChartsSlice";

export const store = configureStore({
  reducer: {
    authChart: AuthChartsReducer,
    usersChart: UserChartsReducer
  }
})

// sliceとstoreで定義したことによって型推論してくれたものを型定義として利用できるようにtype定義する
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>