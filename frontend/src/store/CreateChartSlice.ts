/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CreateChartState {
  createChartStates: {
    [key: string]: string[];
  }
}

export interface AddAction {
  id: number,
  name: string,
}
interface AddChartPayload {
  skillName: string;
  actions?: AddAction[];
}

const initialState: CreateChartState = {
  createChartStates: {
    test: ['Redux'],
    test2: ['useMemo']
  }
}

const createChartSlice = createSlice({
  name: "createChart",
  initialState,
  reducers: {
    addSkill(state: CreateChartState, action: PayloadAction<AddChartPayload>) {
      const { skillName } = action.payload;
      state.createChartStates[skillName] = [''];
    },
    addActions(state: CreateChartState, action: PayloadAction<AddChartPayload>) {
      const { skillName, actions } = action.payload;
      const actionNames = actions?.map((actionData)=>actionData.name)
      const currentActions = [...state.createChartStates[skillName]] || [''];
      state.createChartStates[skillName] = [...currentActions, ...(actionNames || [''])]
    }
  },
})

export const { addSkill, addActions } = createChartSlice.actions;
export default createChartSlice.reducer;