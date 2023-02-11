import { useEffect, useState } from 'react';
import { randomNum } from '@/utils/util.js';

function randomSize() {
	const sizes = [8, 16, 24, 32, 40, 48];
	return sizes[randomNum(0, sizes.length - 1)];
}
function randomColor() {
	const colors = [
		'#FF0000',
		'#FF7D00',
		'#FFFF00',
		'#00FF00',
		'#00FFFF',
		'#0000FF',
		'#FF00FF',
	];
	return colors[randomNum(0, colors.length - 1)];
}

export default () => {
	const [sizeAndColor, setSizeAndColor] = useState({
		size: randomSize(),
		color: randomColor(),
	});
	useEffect(() => {
		const timer = setInterval(() => {
			setSizeAndColor({
				size: randomSize(),
				color: randomColor(),
			});
		}, 3000);
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<svg
			viewBox="0 0 450 450"
			stroke={sizeAndColor.color}
			fill="none"
			strokeWidth={sizeAndColor.size}
		>
			<polygon points="421.59461993678036,261.7499035633141 395.0434271459228,330.28643257547117 345.52692727585134,384.6034454560479 279.7325980144165,417.3651286345638 206.54632810733963,424.14683525900693 135.85232884469244,404.0326582710125 77.19821655586813,359.73912872931146 38.505554119128874,297.24833323743064 25,225.0000000000001 38.505554119128874,152.75166676256939 77.19821655586804,90.26087127068868 135.8523288446924,45.96734172898752 206.5463281073398,25.853164740993094 279.73259801441674,32.634871365436226 345.5269272758512,65.39655454395205 395.0434271459229,119.71356742452892 421.5946199367803,188.25009643668582"></polygon>
		</svg>
	);
};

// https://codepen.io/winkerVSbecks/pen/wrZQQm
