import React, { useEffect, useRef } from 'react';
import style from './drawer.module.scss';
import { VscChromeClose } from 'react-icons/vsc';

export default ({ show, setShow, children }) => {
	const drawer = useRef(null);

	useEffect(() => {
		if (!show) return;

		const rootElement = document.getElementById('root');
		rootElement.style.position = 'relative';
		rootElement.appendChild(drawer.current);

		return () => {
			rootElement.style.position = 'static';
		};
	}, [show]);

	return (
		<div
			ref={drawer}
			className={`${style['drawer-wrapper']}`}
			style={{ transform: show ? 'translateX(0%)' : 'translateX(100%)' }}
		>
			<div className={style['drawer-content']}>{children}</div>
			<div className={style['drawer-close']}>
				<button
					onClick={() => setShow(false)}
					className={style['drawer-close-btn']}
				>
					<VscChromeClose />
					{/*<CloseIcon />*/}
				</button>
			</div>
		</div>
	);
};
