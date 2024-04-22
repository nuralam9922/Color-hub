import React from 'react';
import { useParams } from 'react-router-dom';
import useGenerateShades from '../hooks/useGenerateShades';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsCopy } from 'react-icons/bs';
import useCopy from '../hooks/useCopy';

function ColorDetails() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [number, setNumber] = useState(10);
	const [backgroundColor, setBackgroundColor] = useState('');
	const { color } = useParams();
	const shades = useGenerateShades(color, number);
	const [isCopied, copyToClipboard] = useCopy();

	useEffect(() => {
		setBackgroundColor(shades?.[4]);
	}, [shades]);

	const handleCopy = () => {
		copyToClipboard(backgroundColor);
	};

	return (
		<div className="py-10 select-none poppins-regular">
			<label className="block mb-2 text-sm font-medium">
				<h1 className="text-2xl mt-20">Shades</h1>
			</label>
			<div className="w-full flex items-center justify-between">
				<input
					id="default-range"
					type="range"
					min={10}
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					max={30}
					className=" w-1/2 lg:w-1/3 my-4     h-2 cursor-pointer bg-gray-200 rounded-lg duration-300 appearance-none cursor-pointe"
				/>
				<h1 className="poppins-bold text-xl  transition-all duration-500">{number}</h1>
			</div>

			<div className="flex items-center justify-between gap-1 duration-300">
				{shades.map((shade, index) => (
					<div
						onClick={() => setBackgroundColor(shade)}
						key={index}
						style={{
							width: '132px',
							height: '132px',
							backgroundColor: shade,
							border: '2px solid transparent',
							transition: 'transform 0.3s ease',
						}}
						className="box w-32 h-32 cursor-pointer hover:scale-105 duration-300 shadow-sm"
					></div>
				))}
			</div>

			<div style={{ backgroundColor: backgroundColor }} className="w-full h-[30rem] mt-10 border rounded-md shadow-lg">
				<div
					className={`w-full h-full  items-center justify-center poppins-semibold ${
						isCopied ? 'flex copyText' : 'invisible'
					} text-xl md:text-3xl`}
				>
					<p className="">Coped </p>
				</div>
			</div>
			<button
				onClick={handleCopy}
				type="button"
				className="flex items-center poppins-regular justify-between gap-5 mt-5 border-2 border-zinc-900 px-5 py-2 rounded-lg active:scale-95 duration-300"
			>
				{isCopied ? 'Copied!' : 'Copy Color'} <BsCopy />
			</button>

			<div
				style={{ color: backgroundColor }}
				className="text-center h-screen w-full flex-col flex items-center justify-center text-5xl poppins-bold"
			>
				<h1 className="flex items-center gap-5">
					<p className="stroke-current">Welcome to our website</p>{' '}
					<div className="w-7 grid grid-cols-8 gap-1">
						<div style={{ backgroundColor: backgroundColor }} className="box w-full h-5 col-span-8"></div>
						<div style={{ backgroundColor: backgroundColor }} className="box w-full h-5 col-span-4"></div>
						<div style={{ backgroundColor: backgroundColor }} className="box w-full h-5 col-span-4"></div>
					</div>
				</h1>
				<p style={{ WebkitTextStroke: `0.8px black`,  color:'transparent' }} className="bg-transparent tracking-widest mt-3">
					Thank You
				</p>{' '}
				<button
					type="button"
					style={{ boxShadow: backgroundColor }}
					className={`text-xl mt-10 shadow-md px-20 py-2 rounded-full shadow-[${backgroundColor}]`}
				>
					Explore
				</button>
			</div>
		</div>
	);
}

export default ColorDetails;
