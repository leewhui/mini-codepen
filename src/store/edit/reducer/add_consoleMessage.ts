import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { ConsoleNameSpace, EditInterface, PanelNameSpace } from "../../../type";

export const addConsoleMessageAction = (
  state: WritableDraft<EditInterface>,
  action: PayloadAction<ConsoleNameSpace.ConsoleMessageInterface>
) => {
  state.console.push(action.payload);
  return state;
};

export const clearConsoleMessageAction = (
  state: WritableDraft<EditInterface>
) => {
  state.console = [];
  return state;
};
