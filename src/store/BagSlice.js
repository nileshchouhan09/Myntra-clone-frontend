// start at 19.19
import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter(itemId => itemId!==action.payload);
    }
  }
});
export const bagActions = BagSlice.actions;

export default BagSlice;
