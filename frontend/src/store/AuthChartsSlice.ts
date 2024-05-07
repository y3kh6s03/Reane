import { createSlice } from "@reduxjs/toolkit";

// 状態管理の値の型定義を行う
export interface AuthChartState {
  authChartData: {
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
const initialState: AuthChartState = {
  authChartData: {
    id: 123,
    userImage: '/google.svg',
    userName: 'yosuke',
    days: 254,
    reachName: 'ウェブ開発スキルの向上',
    skills:  ['プログラミング言語', 'フロントエンド開発', 'バックエンド開発', 'データベース', 'バージョン管理', 'テストとデバッグ', 'セキュリティ', 'メンタル', 'クラウドサービス'],
    actionCount: 323,
    executedActionCount: 200,
    createdAt: '2024-02-30',
  }
}
// sliceを定義する
const authChartsSlice = createSlice({
  name: "authorChart",
  initialState,
  reducers: {},
})
// sliceで定義したreducersのプロパティ名がそのままactionのタイプとして指定することができる
// export const { increment, amoutAdd } = counterSlice.actions;
// storeで登録するためにここで作成したsliceを送信する
export default authChartsSlice.reducer;