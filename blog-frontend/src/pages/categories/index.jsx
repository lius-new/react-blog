import React, { useEffect, useState } from 'react';
import { getBlogs } from '@/mock';
import style from './categories.module.scss';
import { AiOutlineFolder } from 'react-icons/ai';

export default () => {
	const [tags, setTags] = useState(null);

	useEffect(() => {
		const tagsGroup = {};
		const blogs = getBlogs(50);
		for (let index = 0; index < blogs.length; index++) {
			const currentTag = blogs[index].tag.split('/');
			const currentTagCate = currentTag[0];
			const currentTags = currentTag.slice(1);
			if (tagsGroup.hasOwnProperty(currentTagCate)) {
				tagsGroup[currentTagCate] = [
					...tagsGroup[currentTagCate].filter((item) =>
						currentTags.find((i) => i !== item)
					),
					...currentTags,
				];
			} else {
				tagsGroup[currentTagCate] = [...currentTags];
			}
		}

		setTags(tagsGroup);
	}, [null]);

	return (
		<div className={style['main-wrapper']}>
			<div className={style['page-title']}>
				<h2>-Categories-</h2>
			</div>
			<div className={style['categories-wrapper']}>
				{tags &&
					Object.keys(tags).map((key) => (
						<div className={style['categories-list']} key={key}>
							<h3 className={style['categories-title']}>
								<span>
									<AiOutlineFolder />
								</span>
								{key}
							</h3>
							<ul className={style['categories-item']}>
								{tags[key].map((tag) => (
									<li className={style['categorie-item']} key={tag}>
										{tag}
									</li>
								))}
							</ul>
						</div>
					))}
			</div>
		</div>
	);
};
