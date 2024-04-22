import { useState } from 'react';

function useRandomLinearGradient() {
	const [linearGradients, setLinearGradients] = useState([]);

	const generateRandomColor = () => {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	};

	const generateRandomLinearGradients = (count = 20) => {
		const gradients = [];
		const positions = ['to bottom', 'to right', 'to top', 'to left', 'to bottom right', 'to top left'];

		for (let i = 0; i < count; i++) {
			const color1 = generateRandomColor();
			const color2 = generateRandomColor();
			const position = positions[Math.floor(Math.random() * positions.length)];
			const gradient = `linear-gradient(${position}, ${color1}, ${color2})`;
			gradients.push(gradient);
		}

		setLinearGradients(gradients);
	};

	return { linearGradients, generateRandomLinearGradients };
}

export default useRandomLinearGradient;
