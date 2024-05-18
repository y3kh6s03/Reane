/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// このスライスのデータは基本的にDBから取得したユーザー本人のチャートのデータを保持している
// バックエンドとの接続することでマジック定数を変更していrく

export interface ActionData {
  [action: string]: number
}

export interface SkillData {
  [skill: string]: ActionData[]
}

export type ChartData = {
  id: number;
  userName: string;
  userImage: string;
  userEmail: string;
  reachName: string;
  skills: SkillData[],
  actionCount?: number;
  executedActionCount?: number;
  days: number;
  createdAt: string;
};

interface AuthChartState {
  authChartDatas: ChartData[] | null,
  loading: boolean,
  error: string | null,
}

const initialState: AuthChartState = {
  authChartDatas: null,
  loading: false,
  error: null
}

export const fetchAuthChartData = createAsyncThunk<ChartData[], { authEmail: string }>(
  'authChart/fetchAuthChartData',
  async ({ authEmail }) => {
    const res = await axios.post('http://localhost:3000/api/myChart', { authEmail });
    const data = await res.data
    return data;
  }
)

const authChartsSlice = createSlice({
  name: 'authChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthChartData.fulfilled, (state, action: PayloadAction<ChartData[]>) => {
        state.authChartDatas = action.payload;
        state.loading = false;
      })
      .addCase(fetchAuthChartData.rejected, (state,) => {
        state.loading = false;
        state.error = "Failed to fetch data"
      })

  },
})

export default authChartsSlice.reducer

// const initialState: AuthChartState = {
//   authChartData: {
//     id: 123,
//     userImage: '/google.svg',
//     userName: 'yosuke',
//     userEmail: 'y3kh6s03@gmail.com',
//     days: 254,
//     reachName: 'ウェブ開発スキルの向上',
//     skills: {
//       "プログラミング言語": [
//         { "HTMLとCSSを学ぶ": 1 },
//         { "JavaScriptの基本を理解ïする": 0 },
//         { "プログラミングの基礎を学ぶ": 1 },
//         { "データ構造とアルゴリズムを学ぶ": 1 },
//         { "APIの基本を理解する": 0 }
//       ],
//       "フロントエンド開発": [
//         { "Reactを使ったWebアプリケーションを作成する": 1 },
//         { "Vue.jsの基本を理解する": 0 },
//         { "Angularを使ったSPAを構築する": 1 },
//         { "UI/UXデザインを学ぶ": 0 },
//         { "Webアクセシビリティを理解する": 1 }
//       ],
//       "バックエンド開発": [
//         { "Node.jsを使ったサーバーサイド開発を学ぶ": 1 },
//         { "Pythonを使ったデータ処理を行う": 0 },
//         { "JavaでWebアプリケーションを開発する": 1 },
//         { "APIのセキュリティを学ぶ": 1 },
//         { "RESTful APIを設計する": 0 }
//       ],
//       "データベース": [
//         { "SQLの基本を理解する": 1 },
//         { "NoSQLデータベースを使ってみる": 0 },
//         { "データベースの設計を学ぶ": 1 },
//         { "データのクエリと更新を実行する": 0 },
//         { "データベースのパフォーマンスチューニングを行う": 1 }
//       ],
//       "バージョン管理": [
//         { "Gitを使ったソースコード管理を学ぶ": 1 },
//         { "SVNを使ったバージョン管理を理解する": 0 },
//         { "GitHubやGitLabを活用する": 1 },
//         { "ブランチとマージの基本を理解する": 0 },
//         { "コードレビューを行う": 1 }
//       ],
//       "テストとデバッグ": [
//         { "ユニットテストを書いてみる": 1 },
//         { "結合テストを実行する": 0 },
//         { "デバッグの基本を学ぶ": 1 },
//         { "エラーハンドリングを行う": 1 },
//         { "パフォーマンステストを実施する": 0 }
//       ],
//       "セキュリティ": [
//         { "セキュリティの基礎を学ぶ": 1 },
//         { "脆弱性スキャンを実施する": 0 },
//         { "XSSやCSRFなどの脅威を理解する": 1 },
//         { "SSL/TLSを設定する": 1 },
//         { "セキュリティポリシーを策定する": 0 }
//       ]
//     },
//     actionCount: 323,
//     executedActionCount: 200,
//     createdAt: '2024-02-30',
//   }
// }

// const authChartsSlice = createSlice({
//   name: "authorChart",
//   initialState,
//   reducers: {
//     currentChartDatas(state, action) {
//       state.authChartData = action.payload;
//     }
//   },
// })
// export const { currentChartDatas } = authChartsSlice.actions;

// export const getAuthCurrentChartData = (payload) => async(dispatch, getState) => {
//   const res = await axios.post('http://localhost:3000/api/myChart',payload)
//   const data = await res.data;
//   console.log(data);
//   // dispatch(currentChartDatas(data));
// }
// export default authChartsSlice.reducer;