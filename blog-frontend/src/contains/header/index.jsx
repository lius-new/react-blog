import { useState, useContext } from 'react';
import { routes } from '@/routes';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import {
	MenuIcon,
	Drawer,
	themes,
	ThemeContext,
	nextThemeId,
} from '@/components';
import { RiTShirt2Fill, RiTShirt2Line } from 'react-icons/ri';

export default () => {
	const [showDrawer, setShowDrawer] = useState(false);
	const theme = useContext(ThemeContext);

	const nextThemeClickHandle = () => {
		theme.setThemeId(nextThemeId(theme.themeId));
	};

	return (
		<>
			<header className={style['header-wrapper']}>
				<nav className={style['menu-wrapper']}>
					<div className={style['logo-wrapper']}>
						<Link to={'/'}>Lius</Link>
					</div>
					<ul className={style['menu-list']}>
						{routes.map((route) => (
							<li key={route.id}>
								<Link to={route.path}>{route.id}</Link>
							</li>
						))}
					</ul>
					<div className={style['icons-wrapper']}>
						<div
							className={style['light-switch']}
							onClick={nextThemeClickHandle}
						>
							{themes
								.find((t) => t.id === theme.themeId)
								.value.includes('light') ? (
								<RiTShirt2Line/>
							) : (
								<RiTShirt2Fill />
							)}
						</div>
						<MenuIcon
							clickHandle={() => {
								setShowDrawer(!showDrawer);
							}}
							className={style['menu-icon-style-media']}
						/>
					</div>
				</nav>
			</header>
			<Drawer show={showDrawer} setShow={setShowDrawer}>
				<ul className={style['menu-list-notpc']}>
					{routes.map((route) => (
						<li
							key={route.id}
							onClick={() => {
								setShowDrawer(false);
							}}
						>
							<Link to={route.path}>{route.id}</Link>
						</li>
					))}
				</ul>
			</Drawer>
		</>
	);
};
