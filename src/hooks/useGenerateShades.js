import { useState, useEffect } from 'react';

const useGenerateShades = (color, numShades) => {
	// Function to convert hex color to RGB
	const hexToRgb = (hex) => {
		// Remove '#' if present
		hex = hex.replace('#', '');
		// Parse hex into RGB values
		const bigint = parseInt(hex, 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;
		return `${r}, ${g}, ${b}`;
	};

	// Function to generate shades using linear gradient
	const generateShades = (color, numShades) => {
		const rgbColor = hexToRgb(color);
		const shades = [];
		for (let i = 0; i < numShades; i++) {
			const opacity = (i + 1) / numShades;
			shades.push(`rgba(${rgbColor}, ${opacity})`);
		}
		return shades;
	};

	// State to hold shades
	const [shades, setShades] = useState([]);

	useEffect(() => {
		const shades = generateShades(color, numShades);
		setShades(shades);
	}, [color, numShades]);

	return shades;
};

export default useGenerateShades;
