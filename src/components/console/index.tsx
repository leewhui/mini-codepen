import { useSelector } from "react-redux";
import { getConsoleMessage } from "../../store/edit";
import { ConsoleNameSpace } from "../../type";

export const ConsolePanel = () => {
  const consoleMessage = useSelector(getConsoleMessage);
  return (
    <div
      style={{
        overflow: "auto",
      }}
    >
      {consoleMessage.map(
        (message: ConsoleNameSpace.ConsoleMessageInterface) => (
          <p>{message.message}</p>
        )
      )}
    </div>
  );
};
