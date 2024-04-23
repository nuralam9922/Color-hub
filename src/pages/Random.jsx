import React from 'react';
import Cart from '../components/cart/Cart';

import { BiLoader } from 'react-icons/bi';
import { useGetRandomHexColors } from '../hooks/useGetRandomHexColors';

import randomColor from 'randomcolor';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import GenerateBtn from '../components/GenerateBtn';

function Radome() {
	const [number, setNumber] = useState(100);
	const [toggle, setToggle] = useState(true);

	const generateNewColors = () => {
		setToggle((prev) => !prev);
	};

	const [colors, generateRandomHexColorArray] = useGetRandomHexColors();

	const randomHexColors = colors;

	useEffect(() => {
		generateRandomHexColorArray(number);
	}, [toggle]);

	return (
		<div>
			{/* //todo:searching */}
			<div className="w-full flex items-center justify-center py-10 relative">
				<GenerateBtn callback={generateNewColors} />
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-5  ">
				<>
					{randomHexColors &&
						randomHexColors.length > 0 &&
						randomHexColors?.map((color, index) => {
							return (
								<>
									<Cart
										key={index + Math.random() + color}
										path={`/color-det/${encodeURIComponent(color)}`}
										id={index + Math.random()}
										hexCodeBackgroundColor="#dadada"
										color={color}
										background={'none'}
									/>
								</>
							);
						})}
				</>
			</div>
		</div>
	);
}

export default Radome;
