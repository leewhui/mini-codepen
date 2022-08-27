import { useDispatch, useSelector } from "react-redux";
import styles from "../index.module.less";
import { cloneDeep } from "lodash";
import { CodeEditor } from "..";
import { getScript, setScriptConfig } from "../../../store/project";
import { EditorHeader } from "../editor_header";
import { BiCodeCurly } from "react-icons/bi";
import { CodeType, ScriptNameSpace } from "../../../type";

export const ScriptPanel = () => {
  const scriptConfig = useSelector(getScript);
  const dispatch = useDispatch();
  const ScriptType = ScriptNameSpace.ScriptType;

  const onChangeCode = (code: string) => {
    const scriptConfigClone = cloneDeep(scriptConfig);
    scriptConfigClone.code = code;
    dispatch(setScriptConfig(scriptConfigClone));
  };

  const onChangeType = (codeType: CodeType) => {
    const scriptConfigClone = cloneDeep(scriptConfig);
    scriptConfigClone.type = codeType as ScriptNameSpace.ScriptType;
    dispatch(setScriptConfig(scriptConfigClone));
  };

  return (
    <div className={styles["editor-container"]}>
      <EditorHeader
        onChangeType={onChangeType}
        defaultValue={scriptConfig.type}
        options={[ScriptType.JAVSCRIPT, ScriptType.REACT]}
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
