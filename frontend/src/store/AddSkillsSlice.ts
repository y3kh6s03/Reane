import { createSlice } from "@reduxjs/toolkit";

export interface AddSkillsState {
  addSkills: string[]
}

const initialState: AddSkillsState = {
  addSkills: []
}

const addSkillsSlice = createSlice({
  name: "addSkills",
  initialState,
  reducers: {
    addSkill(state,{payload}){
      const newState = {...state};
      newState.addSkills = [...newState.addSkills,payload]
      return newState;
    }
  },
})

export const { addSkill } = addSkillsSlice.actions;
export default addSkillsSlice.reducer;