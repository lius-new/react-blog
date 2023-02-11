import Mock, { Random } from 'mockjs';

const tagCategorie = [
	'生活',
	'学习',
	'爱情',
	'技术',
	'编程',
	'前端',
	'后端',
	'大叔据',
];
const tags = [
	'javascript',
	'css',
	'html',
	'javascript',
	'typescript',
	'vue2',
	'vue3',
	'vue-router',
	'vuex',
	'java',
	'java lambda',
	'java stream',
	'java 数据结构',
	'java 多线程',
	'java Io',
	'java Web',
	'java jsp',
	'java servlet',
	'java spring',
	'mybatis',
	'mybatis-plus',
	'mybatis-generator',
	'spring mvc',
	'springboot',
	'微服务',
	'python',
	'python数据结构',
	'matplotlib',
	'numpy',
	'pandas',
	'pyecharts',
	'flask',
	'django',
	'request',
	'scrapy',
	'tensorflow',
	'sklearn',
	'mapreduce',
];

export function getBlogs(length) {
	const blogs = [];
	for (let index = 0; index < length; index++) {
		blogs.push(
			Mock.mock({
				id: Random.id(),
				author: '@cname()',
				title: '@title(4,8)',
				tag: `${
					tagCategorie[parseInt(Math.random() * tagCategorie.length)]
				}/${tags[parseInt(Math.random() * tags.length)]}`,
				date: '@date(yyyy-MM-dd)',
				desciption: `@csentence(${parseInt(Math.random() * 100) * 4})`,
			})
		);
	}
	return blogs;
}
