import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa6';

import './cart.css';
import { Link } from 'react-router-dom';
import useCopy from '../../hooks/useCopy';
import { useEffect } from 'react';

const backgroundColorForWhiteText = [
	'#DC143C',
	'#000000',
	'#0000FF',
	'#A52A2A',
	'#8A2BE2',
	'#00008B',
	'#556B2F',
	'#8B008B',
	'#2F4F4F',
	'#696969',
	'#191970',
	'#8b4513',
	'#8B0000',
];

console.log('calling');

function Cart({ id, colorName, hexCodeBackgroundColor, background, color, path }) {
	const [isCopied, copyToClipboard] = useCopy();

	const cartRef = useRef();
	const cartBackgroundRef = useRef();

useEffect(() => {
	if (cartBackgroundRef.current.style.background === '' && background !== 'none' && background) {
		cartRef.current.style.display = 'none';
	}
}, []);
	const handleCopy = () => {
		copyToClipboard(color == 'none' ? background : colorName);
	};

	return (
		<div
			ref={cartRef}
			key={id + colorName}
			className="bg-white w-full select-none lg:w-64 shadow-sm cursor-pointer rounded-lg text-wrap border-2 p-2"
		>
			<Link to={path}>
				<div
					ref={cartBackgroundRef}
					style={{ backgroundColor: `${color === 'none' ? '' : color}`, background: `${background !== 'none' && background}` }}
					className={` inner w-full py-10 lg:py-24 rounded-lg`}
				>
					<div
						className={`w-full h-full  items-center justify-center poppins-semibold ${isCopied ? 'flex copyText' : 'invisible'} ${
							backgroundColorForWhiteText.includes(color) ? 'text-white' : 'text-[#33383e]'
						} text-2xl`}
					>
						<p className="">Coped 🤗</p>
					</div>
				</div>
			</Link>

			<div className="flex flex-col lg:flex-row  py-3 lg:justify-between px-2 ">
				<h2 className=" poppins-medium text-xs lg:text-base h-5 lg:h-0">{colorName == 'none' ? '' : colorName}</h2>
				<div onClick={handleCopy} className="flex active:scale-90 duration-300 items-center text-xs lg:text-base  gap-2 ">
					<p
						style={{ backgroundColor: hexCodeBackgroundColor ? hexCodeBackgroundColor : color }}
						className={`poppins-regular rounded-full px-2 ${
							hexCodeBackgroundColor !== '' && backgroundColorForWhiteText.includes(color) ? 'text-white' : 'text-[#33383e]'
						}`}
					>
						{isCopied ? 'Copied!' : color}
					</p>
					<FaRegCopy className="text-left" />
				</div>
			</div>
		</div>
	);
}

export default Cart;
