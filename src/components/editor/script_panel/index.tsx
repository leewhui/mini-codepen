import { useDispatch, useSelector } from "react-redux";
import styles from "../index.module.less";
import { cloneDeep } from "lodash";
import { CodeEditor } from "..";
import { getScript, setScriptConfig } from "../../../store/project";
import { EditorHeader } from "../editor_header";
import { BiCodeCurly } from "react-icons/bi";
import { ScriptNameSpace } from "../../../type";

export const ScriptPanel = () => {
  const scriptConfig = useSelector(getScript);
  const dispatch = useDispatch();

  const onChangeCode = (code: string) => {
    const scriptConfigClone = cloneDeep(scriptConfig);
    scriptConfigClone.code = code;
    dispatch(setScriptConfig(scriptConfigClone));
  };

  const ScriptType = ScriptNameSpace.ScriptType;

  return (
    <div className={styles["editor-container"]}>
      <EditorHeader
        defaultValue={scriptConfig.type}
        options={[
          ScriptType.JAVSCRIPT,
          ScriptType.REACT,
          ScriptType.REACT_TS,
          ScriptType.TYPESCRIPT,
        ]}
        title="Script"
        icon={<BiCodeCurly size={"20"} color="#f8d244" />}
      ></EditorHeader>
      <CodeEditor
        language={scriptConfig.type.toLowerCase()}
        value={scriptConfig.code}
        onChange={onChangeCode}
      ></CodeEditor>
    </div>
  );
};
