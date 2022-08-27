import { useSelector } from "react-redux";
import { getLayout } from "../../store/edit";
import { PanelNameSpace } from "../../type";
import { Preview } from "../preview";
import { Markup } from "../editor/markup";
import { StylePanel } from "../editor/style_panel";
import { ScriptPanel } from "../editor/script_panel";
import { FC, useState } from "react";
import { ConsolePanel } from "../console";
import "./splitter.css";
import SplitterLayout from "react-splitter-layout";

const EditorSplit: FC<{ isTop: boolean }> = (props) => {
  const contentWidth = document.body.clientWidth;

  return (
    <SplitterLayout primaryIndex={1} secondaryInitialSize={contentWidth / 3}>
      <Markup></Markup>
      <SplitterLayout secondaryInitialSize={contentWidth / 3}>
        <StylePanel></StylePanel>
        <ScriptPanel></ScriptPanel>
      </SplitterLayout>
    </SplitterLayout>
  );
};

export const Layout = () => {
  const layout = useSelector(getLayout);
  const [disablePreview, setDisablePreview] = useState<boolean>(false);
  const isTop = layout === PanelNameSpace.LayoutType.TOP;

  const disable = () => {
    setDisablePreview(true);
  };

  const enable = () => {
    setDisablePreview(false);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <SplitterLayout
        primaryIndex={0}
        vertical={true}
        secondaryInitialSize={100}
        onDragStart={disable}
        onDragEnd={enable}
      >
        <SplitterLayout
          primaryIndex={0}
          vertical={true}
          onDragStart={disable}
          onDragEnd={enable}
        >
          <EditorSplit isTop={isTop}></EditorSplit>
          <Preview disable={disablePreview}></Preview>
        </SplitterLayout>
        <ConsolePanel></ConsolePanel>
      </SplitterLayout>
    </div>
  );
};
