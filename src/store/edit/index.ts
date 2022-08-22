import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { EditInterface, PanelNameSpace } from "../../type";

const initialState: EditInterface = {
  panel: {
    layout: PanelNameSpace.LayoutType.TOP,
  },
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLayout = (state: RootState) => state.edit.panel.layout;
