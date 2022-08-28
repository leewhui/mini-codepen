import { useSelector } from "react-redux";
import styles from "./console.module.less";
import { getConsoleMessage } from "../../store/edit";
import { ConsoleNameSpace } from "../../type";
import { FC, Fragment } from "react";
import { VscError } from "react-icons/vsc";

interface ConsolePanelInterface {
  display: boolean;
}

export const ConsolePanel: FC<ConsolePanelInterface> = (props) => {
  const { display } = props;
  const consoleMessage = useSelector(getConsoleMessage);
  return (
    <div
      className={styles["console-container"]}
      style={{ display: display ? "block" : "none" }}
    >
      <div className={styles["console-title"]}>Console</div>
      {consoleMessage.map(
        (message: ConsoleNameSpace.ConsoleMessageInterface, index: number) => {
          let color = "#f1fa8c";
          if (typeof message.message === "string") color = "#85cea8";
          if (typeof message.message === "boolean") color = "#ff79c6";

          let bgColor = "transparent";
          if (message.type === ConsoleNameSpace.MessageType.ERROR) {
            bgColor = "#fcf1f0";
            color = "black";
          }

          return (
            <div
              key={index}
              style={{
                color,
                backgroundColor: bgColor,
              }}
              className={styles["console-message-container"]}
            >
              {message.type === ConsoleNameSpace.MessageType.ERROR && (
                <Fragment>
                  <VscError color="red" />
                  &nbsp;
                </Fragment>
              )}
              <span>{String(message.message)}</span>
            </div>
          );
        }
      )}
    </div>
  );
};
