import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "ahooks";
import { getMarkup, getScript, getStyle } from "../../store/project";
import { FC, useEffect, useRef, useState } from "react";
import { composeTogether } from "./util";
import { addConsoleMessage, clearConsoleMessage } from "../../store/edit";

interface PreviewInterface {
  disable: boolean;
}

export const Preview: FC<PreviewInterface> = (props) => {
  const { disable } = props;
  const markup = useSelector(getMarkup);
  const style = useSelector(getStyle);
  const script = useSelector(getScript);
  const ref = useRef<HTMLIFrameElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    run(markup, style, script);
  }, [markup, style, script]);

  useEffect(() => {
    if (!ref.current) return;
    window.addEventListener("message", receiveMessage);
    return () => window.removeEventListener("message", receiveMessage);
  }, [ref]);

  const receiveMessage = (e: MessageEvent) => {
    if (!ref.current || !ref.current.contentWindow) return;
    if (e.source === ref.current.contentWindow) {
      const data = e.data;
      const message = { type: data.consoleType, message: data.message };
      dispatch(addConsoleMessage(message));
    }
  };

  const { data, run } = useRequest(composeTogether, {
    debounceWait: 500,
    manual: true,
  });

  useEffect(() => {
    if (!ref.current || !ref.current.srcdoc || !data) return;
    ref.current.srcdoc = data.code;
  }, [data]);

  return (
    <iframe
      ref={ref}
      srcDoc={data?.code}
      style={{
        border: "none",
        width: "100%",
        height: "100%",
        pointerEvents: disable ? "none" : "auto",
      }}
    ></iframe>
  );
};
