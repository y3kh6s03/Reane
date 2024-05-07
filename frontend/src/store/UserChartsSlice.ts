import { createSlice } from "@reduxjs/toolkit";

// 状態管理の値の型定義を行う
export interface UserChartState {
  userChartData: {
    id: number,
    userImage: string,
    userName: string,
    days: number,
    reachName: string,
    skills: string[],
    actionCount: number,
    executedActionCount: number,
    createdAt: string,
  }
}
// 値の初期化
const initialState: UserChartState = {
  userChartData: {
    id: 123,
    userImage: '/defaultIcon.png',
    userName: 'rei',
    days: 254,
    reachName: 'ベンチプレス888kg',
    skills:  ['100kg', '食事制限', '生活習慣', 'デッドリフト300kg', 'スクワット100', '体幹', '腕立て', 'メンタル', 'コネクション', 'メンテナンス', 'リフレッシュ'],
    actionCount: 999,
    executedActionCount: 444,
    createdAt: '2024-02-30',
  }
}
// sliceを定義する
const userChartsSlice = createSlice({
  name: "userChart",
  initialState,
  reducers: {},
})
// sliceで定義したreducersのプロパティ名がそのままactionのタイプとして指定することができる
// export const { increment, amoutAdd } = counterSlice.actions;
// storeで登録するためにここで作成したsliceを送信する
export default userChartsSlice.reducer;