import { useSelector } from "react-redux";
import { useRequest } from "ahooks";
import { getMarkup, getScript, getStyle } from "../../store/project";
import { FC, useEffect, useRef, useState } from "react";
import { composeTogether } from "./util";
import { PanelNameSpace } from "../../type";

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

  useEffect(() => {
    if (!ref.current) return;
    window.addEventListener("message", receiveMessage);
    return () => window.removeEventListener("message", receiveMessage);
  }, [ref]);

  const receiveMessage = (e: MessageEvent) => {
    if (!ref.current || !ref.current.contentWindow) return;
    if (e.source === ref.current.contentWindow) {
    }
  };

  const { data, run } = useRequest(composeTogether, {
    debounceWait: 500,
    manual: true,
  });

  return (
    <iframe
      allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"
      srcDoc={data}
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: disable ? "none" : "auto",
      }}
    ></iframe>
  );
};
