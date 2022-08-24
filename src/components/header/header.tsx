import { Button, createStyles, Popover } from "@mantine/core";
import styles from "./header.module.less";
import { AiOutlineLayout } from "react-icons/ai";
import {
  RiLayoutRightLine,
  RiLayoutLeftLine,
  RiLayoutTopLine,
} from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeLayoutType } from "../../store/edit";
import { PanelNameSpace } from "../../type";

const useStyles = createStyles((theme) => ({
  dropdown: {
    backgroundColor: "#3a414b",
    border: "none",
    display: "flex",
    justifyContent: "center",
  },
  arrow: {
    borderColor: "#3a414b",
  },
}));

export const Header = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={styles["header-container"]}>
      <Popover
        position="bottom"
        withArrow
        shadow="md"
        classNames={{ dropdown: classes.dropdown, arrow: classes.arrow }}
      >
        <Popover.Target>
          <Button size="xs" variant="subtle">
            <AiOutlineLayout size="20"></AiOutlineLayout>
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Button
            size="xs"
            variant="subtle"
            onClick={() =>
              dispatch(changeLayoutType(PanelNameSpace.LayoutType.TOP))
            }
          >
            <RiLayoutTopLine size="20"></RiLayoutTopLine>
          </Button>
          <Button
            size="xs"
            variant="subtle"
            onClick={() =>
              dispatch(changeLayoutType(PanelNameSpace.LayoutType.RIGHT))
            }
          >
            <RiLayoutLeftLine size="20"></RiLayoutLeftLine>
          </Button>
          {/* <Button
            size="xs"
            variant="subtle"
            onClick={() =>
              dispatch(changeLayoutType(PanelNameSpace.LayoutType.LEFT))
            }
          >
            <RiLayoutRightLine size="20"></RiLayoutRightLine>
          </Button> */}
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};
