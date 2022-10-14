import { Button, Text, Checkbox } from '@mantine/core';
import styles from './header.module.less';
import { AiOutlineSetting } from 'react-icons/ai';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMarkup, getScript, getStyle } from '../../store/project';
import { composeTogether } from '../preview/util';
import { useRequest } from 'ahooks';
import { ConfigModal } from './configModal';

interface HeaderInterface {
	onUpdateCode: (code: string) => void;
}

export const Header: FC<HeaderInterface> = (props) => {
	const [ settingOpen, setSettingOpen ] = useState<boolean>(false);
	const [ isAutoRun, setIsAutoRun ] = useState<boolean>(true);

	const markup = useSelector(getMarkup);
	const style = useSelector(getStyle);
	const script = useSelector(getScript);

	const handleUpdateCode = () => {
		composeTogether(markup, style, script).then((data) => props.onUpdateCode(data.code));
	};

	useEffect(
		() => {
			if (!isAutoRun) return;
			run(markup, style, script);
		},
		[ markup, style, script ]
	);

	const { data, run } = useRequest(composeTogether, {
		debounceWait: 200,
		manual: true
	});

	useEffect(
		() => {
			if (!data || !data.code) return;
			props.onUpdateCode(data.code);
		},
		[ data ]
	);

	return (
		<div className={styles['header-container']}>
			<Button size="xs" variant="subtle" onClick={() => setSettingOpen(true)}>
				<AiOutlineSetting size="20" />
			</Button>

			<Button size="xs" variant="subtle" onClick={handleUpdateCode}>
				运行
			</Button>

			<Checkbox
				size="xs"
				label={<Text color="white">自动运行</Text>}
				checked={isAutoRun}
				onChange={(e) => setIsAutoRun(e.currentTarget.checked)}
			/>
			<ConfigModal opened={settingOpen} onClose={() => setSettingOpen(false)} />
		</div>
	);
};
