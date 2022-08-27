import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { EditInterface, PanelNameSpace } from "../../type";
import { changeLayoutTypeAction } from "./reducer/change_layout";
import {
  addConsoleMessageAction,
  clearConsoleMessageAction,
} from "./reducer/add_consoleMessage";

const initialState: EditInterface = {
  panel: {
    layout: PanelNameSpace.LayoutType.TOP,
  },
  console: [],
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    changeLayoutType: changeLayoutTypeAction,
    addConsoleMessage: addConsoleMessageAction,
    clearConsoleMessage: clearConsoleMessageAction,
  },
});

export const { changeLayoutType, addConsoleMessage, clearConsoleMessage } =
  editSlice.actions;

export const getLayout = (state: RootState) => state.edit.panel.layout;
export const getConsoleMessage = (state: RootState) => state.edit.console;
