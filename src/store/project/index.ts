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
    code: `<div id="app"></div>`,
  },
  style: {
    type: StyleNameSpace.StyleType.CSS,
    code: `#app {
      background-color: #bfa;
  }`,
  },
  script: {
    type: ScriptNameSpace.ScriptType.REACT,
    code: `
    import React, { useState, useCallback } from 'react';
    import ReactDom from 'react-dom';
    
    const Test = function () {
      const [count, setCount] = useState(0);
    
      const handleClick = useCallback(() => {
        setCount(count + 1);
      }, [count]);
    
      return <div onClick={handleClick}>click me {count}</div>;
    };
    
    ReactDom.render(<Test />, document.getElementById('app')); 
    `,
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
