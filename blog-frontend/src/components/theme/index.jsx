import { useState, createContext, useEffect } from 'react';

export const themes = [
	{
		id: 1,
		value: 'light-1',
	},
	{
		id: 2,
		value: 'light-2',
	},
	{
		id: 3,
		value: 'dark-1',
	},
	{
		id: 4,
		value: 'dark-2',
	},
];
export const nextThemeId = (id) => {
	if (!id) return;
	const theme = themes.find((theme) => theme.id === id);
	const lastTheme = themes[themes.length - 1];
	if (theme.id === lastTheme.id) {
		return 1;
	} else {
		return id+1;
	}
};

export const ThemeContext = createContext(themes);

export default ({ children }) => {
	const [themeId, setThemeId] = useState(1);

	useEffect(() => {
		if (themeId === null)
			return () => document.documentElement.removeAttribute('theme');
		const theme = themes.find((theme) => theme.id === themeId);
		document.documentElement.setAttribute('theme', theme.value);
	}, [themeId]);

	return (
		<ThemeContext.Provider value={{ themeId, setThemeId }}>
			{children}
		</ThemeContext.Provider>
	);
};
