import { Layout } from './components/layout';
import styles from './app.module.less';
import { Header } from './components/header/header';
import { Footer } from './components/footer';
import { useState } from 'react';

export const App = () => {
	const [ code, setCode ] = useState<string>('');

	return (
		<div className={styles['app-container']}>
			<Header onUpdateCode={setCode} />
			<Layout code={code}/>
			<Footer />
		</div>
	);
};
