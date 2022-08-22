import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  MarkupNameSpace,
  ProjectInterface,
  ScriptNameSpace,
  StyleNameSpace,
} from "../../type";
import {
  setMarkupConfigAction,
  setScriptConfigAction,
  setStyleConfigAction,
} from "./reducer/setConfig";

const initialState: ProjectInterface = {
  markup: {
    type: MarkupNameSpace.MarkupType.HTML,
    code: "",
  },
  style: {
    type: StyleNameSpace.StyleType.CSS,
    code: "",
  },
  script: {
    type: ScriptNameSpace.ScriptType.JAVSCRIPT,
    code: "",
  },
  depend: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setMarkupConfig: setMarkupConfigAction,
    setStyleConfig: setStyleConfigAction,
    setScriptConfig: setScriptConfigAction,
  },
});

export const { setMarkupConfig, setScriptConfig, setStyleConfig } =
  projectSlice.actions;

export const getProject = (state: RootState) => state.project;
export const getMarkup = (state: RootState) => getProject(state).markup;
export const getStyle = (state: RootState) => getProject(state).style;
export const getScript = (state: RootState) => getProject(state).script;
