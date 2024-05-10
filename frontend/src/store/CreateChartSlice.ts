import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CreateChartState {
  createChartStates: {
    [key: string]: string[];
  }
}

interface AddChartPayload {
  skillName: string;
  actions: string[];
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
      const { skillName, actions } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.createChartStates[skillName] = actions;
    }
  },
})

export const { addSkill } = createChartSlice.actions;
export default createChartSlice.reducer;