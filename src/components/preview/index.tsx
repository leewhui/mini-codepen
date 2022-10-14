import { useDispatch } from 'react-redux';
import { FC, useEffect, useRef } from 'react';
import { addConsoleMessage } from '../../store/edit';

interface PreviewInterface {
	disable: boolean;
	code: string;
}

export const Preview: FC<PreviewInterface> = (props) => {
	const { disable, code } = props;
	const ref = useRef<HTMLIFrameElement>(null);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (!ref.current) return;
			window.addEventListener('message', receiveMessage);
			return () => window.removeEventListener('message', receiveMessage);
		},
		[ ref ]
	);

	const receiveMessage = (e: MessageEvent) => {
		if (!ref.current || !ref.current.contentWindow) return;
		if (e.source === ref.current.contentWindow) {
			const data = e.data;
			const message = { type: data.consoleType, message: data.message };
			dispatch(addConsoleMessage(message));
		}
	};

	return (
		<iframe
			ref={ref}
			srcDoc={code}
			style={{
				border: 'none',
				width: '100%',
				height: '100%',
				pointerEvents: disable ? 'none' : 'auto'
			}}
		/>
	);
};
