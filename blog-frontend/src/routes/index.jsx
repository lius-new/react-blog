import { Home, Archives, Tags, Categories, About, ErrorPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import Root from './root';

export const routes = [
	{
		id: 'home',
		path: '/',
		element: <Home />,
	},
	{
		id: 'archives',
		path: '/archives',
		element: <Archives />,
	},
	{
		id: 'tags',
		path: '/tags',
		element: <Tags />,
	},
	{
		id: 'categories',
		path: '/categories',
		element: <Categories />,
	},
	{
		id: 'about',
		path: '/about',
		element: <About />,
	},
];

const router = createBrowserRouter([
	{
		id: '#',
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [...routes],
	},
]);

export default router;
