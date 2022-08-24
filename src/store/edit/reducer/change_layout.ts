import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { EditInterface, PanelNameSpace } from "../../../type";

export const changeLayoutTypeAction = (
  state: WritableDraft<EditInterface>,
  action: PayloadAction<PanelNameSpace.LayoutType>
) => {
  state.panel.layout = action.payload;
  return state;
};
