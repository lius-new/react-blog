import { useState, useEffect } from 'react';
import { getBlogs } from '@/mock';
import style from './archives.module.scss';

export default () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		const tempBlogs = {};
		const blogs_ = getBlogs(40);
		for (let index = 0; index < blogs_.length; index++) {
			const year = blogs_[index].date.split('-')[0];
			if (tempBlogs.hasOwnProperty(year)) {
				tempBlogs[year].push(blogs_[index]);
			} else {
				tempBlogs[year] = [blogs_[index]];
			}
		}

		setBlogs(tempBlogs);
	}, [null]);

	return (
		<div className={style['main-wrapper']}>
			<div className={style['archives-wrapper']}>
				<div className={style['archives-list']}>
					{blogs &&
						Object.keys(blogs).map((year) => {
							return (
								<div key={year} className={style['archives-item']}>
									<h3 className={style['archive-item-title']}>{year}</h3>
									<ul className={style['archive-list']}>
										{blogs[year]
											.sort((d1, d2) => new Date(d1) > new Date(d2))
											.map((blog) => (
												<li className={style['archive-item']} key={blog.id}>
													<span className={style['blog-title']}>
														{blog.title}
													</span>
													<span className={style['blog-date']}>
														{blog.date}
													</span>
												</li>
											))}
									</ul>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
