import style from './footer.module.scss';

export default () => {
	return (
		<footer className={style['footer-content-wrappre']}>
			<p className={style['create-time']}>© 2022 - 2023 LiusNew</p>
		</footer>
	);
};
