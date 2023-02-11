import React, { useEffect, useState } from 'react';
import { getBlogs } from '@/mock';
import style from './tags.module.scss';

export default () => {
	const [tagCount, setTagCount] = useState(null);

	useEffect(() => {
		const blogCounter = {};
		const blogs_ = getBlogs(50);

		for (let index = 0; index < blogs_.length; index++) {
			const current = blogs_[index];
			const tags = current.tag.split('/').slice(1);

			for (let j = 0; j < tags.length; j++) {
				const currentTag = tags[j];
				if (blogCounter.hasOwnProperty(currentTag)) {
					blogCounter[currentTag]++;
				} else {
					blogCounter[currentTag] = 1;
				}
			}
		}
		setTagCount(blogCounter);
	}, []);

	return (
		<div className={style['main-wrapper']}>
			<div className={style['page-title']}>
				<h2>-Tags-</h2>
			</div>
			<div className={style['tags-wrapper']}>
				<ul className={style['tags-list']}>
					{tagCount &&
						Object.keys(tagCount).map((tag) => (
							<li className={style['tags-item']} key={tag}>
								<span className={style['tag-name']}>{tag}</span>
								<span className={style['tag-number']}>{tagCount[tag]}</span>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
