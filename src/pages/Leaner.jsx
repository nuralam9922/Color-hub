import React from 'react';
import useRandomLinearGradient from '../hooks/useRandomLinearGradient';
import { useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useCopy from '../hooks/useCopy';
import Cart from '../components/cart/Cart';
import GenerateBtn from '../components/GenerateBtn';
import { useState } from 'react';
function Leaner() {
	const { linearGradients, generateRandomLinearGradients } = useRandomLinearGradient();
	const [isCopied, copyToClipboard] = useCopy();

	const [toggle, setToggle] = useState(true);

	const generateNewColors = () => {
		setToggle((prev) => !prev);
	};

	useEffect(() => {
		generateRandomLinearGradients(100);
	}, [toggle]);

	const handleCopy = (e) => {
		copyToClipboard(e.target.value);
	};

	return (
		<div>
			<div className='w-full py-10 flex items-center justify-center'>
				<GenerateBtn callback={generateNewColors} />
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-5  ">
				{linearGradients?.length > 0 &&
					linearGradients?.map((color, index) => (
						<>
							<Cart key={index} id={index} colorName={'none'} background={color} color={'none'} />
						</>
					))}
			</div>
		</div>
	);
}

export default Leaner;
