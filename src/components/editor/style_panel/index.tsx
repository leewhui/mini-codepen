import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash";
import { CodeEditor } from "..";
import { getStyle, setStyleConfig } from "../../../store/project";

export const StylePanel = () => {
  const styleConfig = useSelector(getStyle);
  const dispatch = useDispatch();

  const onChangeCode = (code: string) => {
    const styleConfigClone = cloneDeep(styleConfig);
    styleConfigClone.code = code;
    dispatch(setStyleConfig(styleConfigClone));
  };

  return (
    <CodeEditor
      language={styleConfig.type}
      value={styleConfig.code}
      onChange={onChangeCode}
    ></CodeEditor>
  );
};
