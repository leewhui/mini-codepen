import { useSelector } from "react-redux";
import { useRequest } from "ahooks";
import { getMarkup, getScript, getStyle } from "../../store/project";
import { FC, useEffect, useRef, useState } from "react";
import { composeTogether } from "./util";

interface PreviewInterface {
  disable: boolean;
}

export const Preview: FC<PreviewInterface> = (props) => {
  const { disable } = props;
  const markup = useSelector(getMarkup);
  const style = useSelector(getStyle);
  const script = useSelector(getScript);
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    run(markup, style, script);
  }, [markup, style, script]);

  const { data, run } = useRequest(composeTogether, {
    debounceWait: 500,
    manual: true,
  });

  return (
    <iframe
      ref={ref}
      srcDoc={data}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: disable ? "none" : "auto",
        display: "block",
      }}
    ></iframe>
  );
};
