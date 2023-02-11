import style from './blog.module.scss';

export default ({ blog }) => {
	return (
		<>
			<div className={style["blog-container"]}>
				<h3 className={style['blog-title']}>{blog.title}</h3>
				<div className={style['blog-msg-opt']}>
					<p className={style['blog-author']}>{blog.author}</p>
					<p className={style['blog-date']}>{blog.date}</p>
				</div>
				<div className={style['blog-content']}>{blog.desciption}</div>
			</div>
		</>
	);
};
