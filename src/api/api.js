export const getRandomColor = async () => {
	const response = await fetch('https://www.csscolorsapi.com/api/colors');
	const data = await response.json();
	return data;
};

