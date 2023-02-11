import { Theme } from '@/components';
import { Layout } from '@/contains';
import { Outlet, useNavigation } from 'react-router-dom';
import style from './root.module.scss';

export default () => {
	const navigation = useNavigation();

	return (
		<>
			<Theme>
				<Layout />
				<div
					className={`${navigation.state === 'loading' ? 'loading' : ''} ${
						style['content-wrapper']
					}`}
				>
					<Outlet />
				</div>
			</Theme>
		</>
	);
};
