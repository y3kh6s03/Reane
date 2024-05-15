/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChartData } from "./AuthChartsSlice";

export type CreateChartProps = Omit<ChartData, 'id' | 'createdAt'>
export interface AddAction {
  id: number,
  name: string,
}
interface AddChartPayload {
  skillName: string;
  actionDatas?: AddAction[];
}

const initialState: CreateChartProps = {
  userName: '',
  userImage: '',
  days: 0,
  reachName: '',
  // skills: [
  //   { '': [] }
  // ],
  skills: [],
  actionCount: 0,
  executedActionCount: 0,
}

const createChartSlice = createSlice({
  name: "createChart",
  initialState,
  reducers: {
    addSkill(state, action: PayloadAction<AddChartPayload>) {
      const { skillName } = action.payload;
      state.skills.push({ [skillName]: [] })
    },
    addActions(state, action: PayloadAction<AddChartPayload>) {
      const { skillName, actionDatas } = action.payload;
      const actions = actionDatas?.map(actionData => actionData.name);
      const insertActions = actions?.map((actionName) => ({ [actionName]: 0 }))
      const skillIndex = state.skills.findIndex(skill => skillName in skill)
      const currentActions = [...state.skills[skillIndex][skillName]]
      if (skillIndex !== -1 && insertActions) {
        state.skills[skillIndex][skillName] = [...currentActions, ...insertActions]
      }
    }
  },
})

export const { addSkill, addActions } = createChartSlice.actions;
export default createChartSlice.reducer;