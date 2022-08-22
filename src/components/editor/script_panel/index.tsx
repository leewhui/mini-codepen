import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import { CodeEditor } from "..";
import { getScript, setScriptConfig } from "../../../store/project";

export const ScriptPanel = () => {
  const scriptConfig = useSelector(getScript);
  const dispatch = useDispatch();

  const onChangeCode = (code: string) => {
    const scriptConfigClone = cloneDeep(scriptConfig);
    scriptConfigClone.code = code;
    dispatch(setScriptConfig(scriptConfigClone));
  };

  return (
    <CodeEditor
      language={scriptConfig.type}
      value={scriptConfig.code}
      onChange={onChangeCode}
    ></CodeEditor>
  );
};
