import { FC, useEffect, useState } from "react";
import { PanelNameSpace } from "../../type";

interface ConsoleInterface {
  messages: PanelNameSpace.ConsoleMessageInterface[];
}

export const ConsolePanel: FC<ConsoleInterface> = (props) => {
  return (
    <div>
      {props.messages.map((message: PanelNameSpace.ConsoleMessageInterface) => (
        <p>{message.message}</p>
      ))}
    </div>
  );
};
