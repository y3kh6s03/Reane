import { createSlice } from "@reduxjs/toolkit";

// 状態管理の値の型定義を行う
export interface ChartState {
  chart: {
    id: number,
    authImage: string,
    authName: string,
    days: number,
    reachName: string,
    skills: string[],
    actionCount: number,
    executedActionCount: number,
    createdAt: string,
  }
}
// 値の初期化
const initialState: ChartState = {
  chart: {
    id: 123,
    authImage: '/defaultIcon.png',
    authName: 'yosuke',
    days: 254,
    reachName: 'ベンチプレス888kg',
    skills:  ['100kg', '食事制限', '生活習慣', 'デッドリフト300kg', 'スクワット100', '体幹', '腕立て', 'メンタル', 'コネクション', 'メンテナンス', 'リフレッシュ'],
    actionCount: 999,
    executedActionCount: 444,
    createdAt: '2024-02-30',
  }
}
// sliceを定義する
const chartsSlice = createSlice({
  name: "authorChart",
  initialState,
  reducers: {},
})
// sliceで定義したreducersのプロパティ名がそのままactionのタイプとして指定することができる
// export const { increment, amoutAdd } = counterSlice.actions;
// storeで登録するためにここで作成したsliceを送信する
export default chartsSlice.reducer;