// @ts-nocheck
import { useSelector } from "react-redux";
import SplitPane, { Pane } from "react-split-pane";
import { getLayout } from "../../store/edit";
import { PanelNameSpace } from "../../type";
import { Preview } from "../preview";
import { Markup } from "../editor/markup";
import { StylePanel } from "../editor/style_panel";
import { ScriptPanel } from "../editor/script_panel";
import { FC, useRef, useState } from "react";

const EditorSplit: FC<{ isTop: boolean }> = (props) => {
  const { isTop } = props;
  return (
    <SplitPane
      key={"splitpane"}
      split={isTop ? "vertical" : "horizontal"}
      size="33%"
      minSize={24}
    >
      <Markup></Markup>
      <SplitPane
        split={isTop ? "vertical" : "horizontal"}
        size="50%"
        minSize={24}
      >
        <StylePanel></StylePanel>
        <SplitPane
          split={isTop ? "vertical" : "horizontal"}
          size="100%"
          minSize={24}
        >
          <ScriptPanel></ScriptPanel>
        </SplitPane>
      </SplitPane>
    </SplitPane>
  );
};

export const Layout = () => {
  const layout = useSelector(getLayout);
  const [disablePreview, setDisablePreview] = useState<boolean>(false);
  const ref = useRef<SplitPane>(null);
  const isTop = layout === PanelNameSpace.LayoutType.TOP;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <SplitPane
        ref={ref}
        split={isTop ? "horizontal" : "vertical"}
        size="50%"
        onDragStarted={() => setDisablePreview(true)}
        onDragFinished={() => setDisablePreview(false)}
      >
        <EditorSplit isTop={isTop}></EditorSplit>
        <Preview disable={disablePreview}></Preview>
      </SplitPane>
    </div>
  );
};
