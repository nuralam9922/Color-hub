import React from 'react';
import Cart from '../components/cart/Cart';

import { BiLoader } from 'react-icons/bi';
import { useGetRandomHexColors } from '../hooks/useGetRandomHexColors';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Radome() {
	const generateNewColors = () => {
		window.location.reload();
	};
	return (
		<div>
			{/* //todo:searching */}
			<div className="w-full flex items-center justify-center py-24 relative">
				<button
					onClick={generateNewColors}
					type="button"
					className="bg-[#33383e] h-12 px-5 text-xs md:text-base md:px-10 text-white rounded-md flex items-center justify-between gap-3"
				>
					<BiLoader />
					<p>Generate</p>
				</button>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-5  ">
				<>
					{useGetRandomHexColors(100).map((color, index) => {
						return (
							<>
								<Cart
									key={index}
									path={`/color-det/${encodeURIComponent(color)}`}
									id={index}
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
