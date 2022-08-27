import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import styles from "../index.module.less";
import { CodeEditor } from "..";
import { getStyle, setStyleConfig } from "../../../store/project";
import { EditorHeader } from "../editor_header";
import { DiCssTricks } from "react-icons/di";
import { CodeType, StyleNameSpace } from "../../../type";

export const StylePanel = () => {
  const styleConfig = useSelector(getStyle);
  const dispatch = useDispatch();
  const styleType = StyleNameSpace.StyleType;

  const onChangeCode = (code: string) => {
    const styleConfigClone = cloneDeep(styleConfig);
    styleConfigClone.code = code;
    dispatch(setStyleConfig(styleConfigClone));
  };

  const onChangeType = (codeType: CodeType) => {
    const styleConfigClone = cloneDeep(styleConfig);
    styleConfigClone.type = codeType as StyleNameSpace.StyleType;
    dispatch(setStyleConfig(styleConfigClone));
  };

  return (
    <div className={styles["editor-container"]}>
      <EditorHeader
        onChangeType={onChangeType}
        defaultValue={styleConfig.type}
        options={[styleType.CSS, styleType.LESS]}
        title="Style"
        icon={<DiCssTricks size={"20"} color="#20a2d8" />}
      ></EditorHeader>
      <CodeEditor
        language={styleConfig.type}
        value={styleConfig.code}
        onChange={onChangeCode}
      ></CodeEditor>
    </div>
  );
};
