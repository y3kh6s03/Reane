import { createSlice } from "@reduxjs/toolkit";
import { ChartData } from "./AuthChartsSlice";

// 状態管理の値の型定義を行う
interface UserChartState {
  userChartData: ChartData
}
// 値の初期化
const initialState: UserChartState = {
  userChartData: {
    id: 123,
    userImage: '/defaultIcon.png',
    userName: 'rei',
    days: 254,
    reachName: 'ベンチプレス888kg',
    skills: [
      {
        "ダイエット": [
          { "カロリー摂取量を把握する": 1 },
          { "栄養バランスを考える": 1 },
          { "運動計画を立てる": 0 },
          { "食事プランを作成する": 0 },
          { "体重を記録してトラッキングする": 1 }
        ]
      },
      {
        "栄養学": [
          { "マクロ栄養素の理解": 1 },
          { "ミクロ栄養素の重要性を学ぶ": 0 },
          { "ビタミンとミネラルの摂取量を考える": 1 },
          { "食品ラベルの読み方をマスターする": 1 },
          { "栄養補助食品の効果を調べる": 1 }
        ]
      },
      {
        "運動": [
          { "有酸素運動のメリットを理解する": 1 },
          { "筋力トレーニングの効果を知る": 0 },
          { "ストレッチの重要性を学ぶ": 1 },
          { "トレーニングプログラムを作成する": 1 },
          { "運動後のリカバリー方法を確立する": 1 }
        ]
      },
      {
        "食品選択": [
          { "ヘルシーな食材の選び方を学ぶ": 1 },
          { "加工食品のリスクを理解する": 1 },
          { "糖質や脂質の摂取量を調整する": 1 },
          { "食事のタイミングを考慮する": 1 },
          { "水分摂取量をコントロールする": 0 }
        ]
      },
      {
        "心理的側面": [
          { "食事の感情的な摂取を管理する": 0 },
          { "ストレス管理と食事の関連性を知る": 1 },
          { "食欲コントロールのテクニックを磨く": 1 },
          { "長期的なモチベーションを維持する方法を学ぶ": 1 },
          { "成功と失敗を受け入れる心構えを持つ": 1 }
        ]
      },
      {
        "成果の評価": [
          { "体組成を測定して進捗を確認する": 0 },
          { "健康診断結果を分析して改善点を見つける": 1 },
          { "目標設定と達成度を評価する": 1 },
          { "専門家とのコンサルテーションを活用する": 1 },
          { "ダイエットの効果を定量的に評価する手法を使う": 1 }
        ]
      }
    ],
    actionCount: 999,
    executedActionCount: 444,
    createdAt: '2024-02-30',
  },
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