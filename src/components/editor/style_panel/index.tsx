import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import styles from "../index.module.less";
import { CodeEditor } from "..";
import { getStyle, setStyleConfig } from "../../../store/project";
import { EditorHeader } from "../editor_header";
import { DiCssTricks } from "react-icons/di";
import { StyleNameSpace } from "../../../type";

export const StylePanel = () => {
  const styleConfig = useSelector(getStyle);
  const dispatch = useDispatch();

  const onChangeCode = (code: string) => {
    const styleConfigClone = cloneDeep(styleConfig);
    styleConfigClone.code = code;
    dispatch(setStyleConfig(styleConfigClone));
  };

  const styleType = StyleNameSpace.StyleType;

  return (
    <div className={styles["editor-container"]}>
      <EditorHeader
        defaultValue={styleConfig.type}
        options={[styleType.CSS, styleType.LESS, styleType.SCSS]}
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
