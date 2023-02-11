import style from './menuIcon.module.scss';

export default ({ className, clickHandle }) => {
	return (
		<div
			onClick={clickHandle}
			className={`${style['menu-icon-wrapper']} ${className}`}
		>
			<span className={style['menu-icon-item-wrapper']}></span>
			<span className={style['menu-icon-item-wrapper']}></span>
			<span className={style['menu-icon-item-wrapper']}></span>
		</div>
	);
};
