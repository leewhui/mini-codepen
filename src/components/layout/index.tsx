import { useSelector } from "react-redux";
import SplitPane, { Pane } from "react-split-pane";
import { getLayout } from "../../store/edit";
import { PanelNameSpace } from "../../type";
import { Preview } from "../preview";
import { Markup } from "../editor/markup";
import { StylePanel } from "../editor/style_panel";
import { ScriptPanel } from "../editor/script_panel";
import { useState } from "react";

const LayoutTop = () => {
  const [disablePreview, setDisablePreview] = useState<boolean>(false);
  return (
    <SplitPane
      split="horizontal"
      defaultSize="50%"
      onDragStarted={() => setDisablePreview(true)}
      onDragFinished={() => setDisablePreview(false)}
    >
      <SplitPane split="vertical" size="33%">
        <Markup></Markup>
        <SplitPane split="vertical" size="50%">
          <StylePanel></StylePanel>
          <SplitPane split="vertical" size="100%">
            <ScriptPanel></ScriptPanel>
          </SplitPane>
        </SplitPane>
      </SplitPane>
      <Preview disable={disablePreview}></Preview>
    </SplitPane>
  );
};

export const Layout = () => {
  const layout = useSelector(getLayout);

  const layoutMap: Record<PanelNameSpace.LayoutType, React.ReactElement> = {
    [PanelNameSpace.LayoutType.TOP]: <LayoutTop></LayoutTop>,
    [PanelNameSpace.LayoutType.LEFT]: <LayoutTop></LayoutTop>,
    [PanelNameSpace.LayoutType.RIGHT]: <LayoutTop></LayoutTop>,
  };
  return layoutMap[layout];
};
