import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { EditInterface, PanelNameSpace } from "../../type";
import { changeLayoutTypeAction } from "./reducer/change_layout";

const initialState: EditInterface = {
  panel: {
    layout: PanelNameSpace.LayoutType.TOP,
    consoleMessages: [],
  },
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    changeLayoutType: changeLayoutTypeAction,
  },
});

export const { changeLayoutType } = editSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLayout = (state: RootState) => state.edit.panel.layout;
