import {
  Button,
  Center,
  createStyles,
  Group,
  Popover,
  Tabs,
} from "@mantine/core";
import { Modal } from "@mantine/core";
import styles from "./header.module.less";
import { AiOutlineLayout, AiOutlineSetting } from "react-icons/ai";
import { RiLayoutTopLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeLayoutType } from "../../store/edit";
import { PanelNameSpace } from "../../type";
import { useState } from "react";
import { StyledTabs } from "./StyledTabs";

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
  const [settingOpen, setSettingOpen] = useState<boolean>(false);

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
        </Popover.Dropdown>
      </Popover>

      <Button size="xs" variant="subtle" onClick={() => setSettingOpen(true)}>
        <AiOutlineSetting size="20"></AiOutlineSetting>
      </Button>

      <Modal
        title={
          <Group spacing="xs">
            <AiOutlineSetting size="20" />
            设置
          </Group>
        }
        centered
        opened={settingOpen}
        onClose={() => setSettingOpen(false)}
      >
        <StyledTabs defaultValue="Markup">
          <Center>
            <Tabs.List>
              <Tabs.Tab value="Markup">Markup</Tabs.Tab>
              <Tabs.Tab value="Style">Style</Tabs.Tab>
              <Tabs.Tab value="Script">Script</Tabs.Tab>
            </Tabs.List>
          </Center>

          <Tabs.Panel value="Markup">markup panel</Tabs.Panel>
          <Tabs.Panel value="Style">style panel</Tabs.Panel>
          <Tabs.Panel value="Script">script panel</Tabs.Panel>
        </StyledTabs>
      </Modal>
    </div>
  );
};
