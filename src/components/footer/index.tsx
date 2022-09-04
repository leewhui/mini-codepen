import { Button, Text } from "@mantine/core";
import { useState } from "react";
import { ConsolePanel } from "../console";
import styles from "./footer.module.less";

export const Footer = () => {
  const [consoleDisplay, setConsoleDisplay] = useState<boolean>(false);
  return (
    <div style={{ position: "relative" }}>
      <ConsolePanel display={consoleDisplay}></ConsolePanel>
      <div className={styles["footer-container"]}>
        <Button
          size="xs"
          variant="subtle"
          onClick={() => setConsoleDisplay(!consoleDisplay)}
        >
          Console
        </Button>
        <Text color="#eee">
          This app is designed and created by Wenhui Li. The purpose of this app
          is for his beloved girlfriend, Jiawei Ye to learn coding
        </Text>
      </div>
    </div>
  );
};
