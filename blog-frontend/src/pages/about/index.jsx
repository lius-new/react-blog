import React from 'react';
import style from './about.module.scss';

export default () => {
	return (
		<div className={style['main-wrapper']}>
			<h2 className={style['page-title']}>About me & blog</h2>
			<div className={style['about-me']}>
				<h3 className={style['about-title']}>Me</h3>
				<div className={style['about-content']}>
					<p>一位就读不知名二本的大三学生</p>
				</div>
			</div>
			<div className={style['about-blog']}>
				<h3 className={style['about-title']}>Blog</h3>
				<div className={style['about-content']}>
					<p>一位不知名学生闲暇之余写着玩</p>
					<ul>
						<li>主要通过react写的</li>
					</ul>
				</div>
			</div>
			<div className={style['about-you']}>
				<h3 className={style['about-title']}>看者</h3>
				<div className={style['about-content']}>
					<p>望各位给点建议-&gt;liushui_new@126.com</p>
				</div>
			</div>
		</div>
	);
};
