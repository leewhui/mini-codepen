import { FC } from "react";
import {
  MarkupNameSpace,
  ScriptNameSpace,
  StyleNameSpace,
} from "../../../type";
import styles from "./editor_header.module.less";
import { Select, createStyles } from "@mantine/core";

interface EditorHeaderInterface {
  icon: React.ReactElement;
  title: string;
  options:
    | MarkupNameSpace.MarkupType[]
    | StyleNameSpace.StyleType[]
    | ScriptNameSpace.ScriptType[];

  defaultValue:
    | MarkupNameSpace.MarkupType
    | StyleNameSpace.StyleType
    | ScriptNameSpace.ScriptType;
}

const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: "#3a414b",
    color: "hsla(0, 0%, 100%, .9)",
    border: "none",
  },
  dropdown: {
    backgroundColor: "#3a414b",
    border: "none",
  },
  item: {
    color: "hsla(0, 0%, 100%, .9)",
    "&[data-hovered]": {
      backgroundColor: theme.fn.darken("#00acee", 0.05),
    },
    "&[data-selected]": {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.teal[9]
            : theme.colors.teal[1],
        color:
          theme.colorScheme === "dark" ? theme.white : theme.colors.teal[9],
      },
    },
  },
}));

export const EditorHeader: FC<EditorHeaderInterface> = (props) => {
  const { icon, title, options, defaultValue } = props;
  const { classes } = useStyles();
  return (
    <div className={styles["editor-header"]}>
      {icon} &nbsp; {title} &nbsp;
      <Select
        classNames={{
          input: classes.input,
          dropdown: classes.dropdown,
          item: classes.item,
        }}
        size="xs"
        placeholder="Pick one"
        value={defaultValue}
        data={options.map((option) => ({ value: option, label: option }))}
      />
    </div>
  );
};
