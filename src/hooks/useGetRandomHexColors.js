import { useState } from 'react';

export const useGetRandomHexColors = (count) => {
	const generateRandomHexColor = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + n.slice(0, 6);
	};

	const [colors, setColors] = useState(() => {
		const initialColors = [];
		for (let index = 0; index < count; index++) {
			initialColors.push(generateRandomHexColor());
		}
		return initialColors;
	});

	return colors;
};
