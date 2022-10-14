import { Center, Group, Modal, Tabs } from '@mantine/core';
import { FC } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { StyledTabs } from './StyledTabs';

interface ConfigModalInterface {
	opened: boolean;
	onClose: () => void;
}

export const ConfigModal: FC<ConfigModalInterface> = (props) => {
	const { opened, onClose } = props;
	return (
		<Modal
			title={
				<Group spacing="xs">
					<AiOutlineSetting size="20" />
					设置
				</Group>
			}
			centered
			opened={opened}
			onClose={onClose}
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
	);
};
