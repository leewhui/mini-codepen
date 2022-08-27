import { useDispatch, useSelector } from "react-redux";
import styles from "../index.module.less";
import { cloneDeep } from "lodash";
import { CodeEditor } from "..";
import { getMarkup, setMarkupConfig } from "../../../store/project";
import { EditorHeader } from "../editor_header";
import { AiFillHtml5 } from "react-icons/ai";
import { CodeType, MarkupNameSpace } from "../../../type";

export const Markup = () => {
  const markup = useSelector(getMarkup);
  const dispatch = useDispatch();

  const onChangeMarkupCode = (code: string) => {
    const markupClone = cloneDeep(markup);
    markupClone.code = code;
    dispatch(setMarkupConfig(markupClone));
  };

  const onChangeType = (codeType: CodeType) => {
    const markupClone = cloneDeep(markup);
    markupClone.type = codeType as MarkupNameSpace.MarkupType;
    dispatch(setMarkupConfig(markupClone));
  };

  return (
    <div className={styles["editor-container"]}>
      <EditorHeader
        onChangeType={onChangeType}
        defaultValue={markup.type}
        options={[MarkupNameSpace.MarkupType.HTML]}
        title="Markup"
        icon={<AiFillHtml5 size={"20"} color="#e86336" />}
      ></EditorHeader>
      <CodeEditor
        language={markup.type.toLowerCase()}
        value={markup.code}
        onChange={onChangeMarkupCode}
      ></CodeEditor>
    </div>
  );
};
