import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import { CodeEditor } from "..";
import { getMarkup, setMarkupConfig } from "../../../store/project";

export const Markup = () => {
  const markup = useSelector(getMarkup);
  const dispatch = useDispatch();

  const onChangeMarkupCode = (code: string) => {
    const markupClone = cloneDeep(markup);
    markupClone.code = code;
    dispatch(setMarkupConfig(markupClone));
  };

  return (
    <CodeEditor
      language={markup.type}
      value={markup.code}
      onChange={onChangeMarkupCode}
    ></CodeEditor>
  );
};
