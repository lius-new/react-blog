import React, { useEffect, useState } from 'react';
import { PositiveSeventeen, BlogModal } from '@/components';
import { Footer, Blog } from '@/contains';
import { getBlogs } from '@/mock';
import style from './home.module.scss';

export default () => {
	const [currentBlog, setCurrentBlog] = useState(null);
	const [blogs, setBlogs] = useState(null);
	const [blogShow, setBlogShow] = useState(null);

	useEffect(() => setBlogs(getBlogs(10)), [null]);

	const openBlogClickHandle = (id) => {
		setBlogShow(true);
		setCurrentBlog(blogs.find((blog) => blog.id === id));
	};

	return (
		<>
			<div className={style['curtain-wrapper']}>
				<div className={style['curtain-title']}>
					<p>正十七/Positive Seventeen</p>
					<p>——LiusNew</p>
				</div>
				<div className={style['curtain-bg']}>
					<div className={style['curtain-bg-outer']}>
						<PositiveSeventeen />
					</div>
					<div className={style['curtain-bg-inner']}>
						<PositiveSeventeen />
					</div>
				</div>
			</div>
			<main className={style['main-content']}>
				<section className={style['blog-list-wrapper']}>
					<ul className={style['blog-list']}>
						{blogs &&
							blogs.map((blog) => (
								<li className={style['blog-item']} key={blog.id}>
									<h3 className={style['blog-item-title']}>{blog.title}</h3>
									<div className={style['blog-msg-opt']}>
										<p className={style['blog-item-author']}>{blog.author}</p>
										<p className={style['blog-item-date']}>{blog.date}</p>
									</div>
									<p className={style['blog-item-desciption']}>
										{blog.desciption}
									</p>
									<div className={style['blog-item-action']}>
										<button onClick={() => openBlogClickHandle(blog.id)}>
											阅读
										</button>
									</div>
								</li>
							))}
					</ul>
				</section>
				<BlogModal show={blogShow} setShow={setBlogShow}>
					<Blog blog={currentBlog && currentBlog}></Blog>
				</BlogModal>
			</main>
			<Footer />
		</>
	);
};
