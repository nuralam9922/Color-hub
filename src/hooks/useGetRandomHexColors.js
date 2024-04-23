import { useEffect } from 'react';
import { useState } from 'react';

export const useGetRandomHexColors = () => {
	const generateRandomHexColor = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + n.slice(0, 6);
	};

	const [colors, setColors] = useState();

	const generateRandomHexColorArray = (count = 10) => {
		const initialColors = [];

		for (let index = 0; index < count; index++) {
			initialColors.push(generateRandomHexColor());
		}

		setColors(initialColors);
	};

	// useEffect(() => {
	// 	generateRandomHexColorArray();
	// }, []);

	return [colors, generateRandomHexColorArray];
};
