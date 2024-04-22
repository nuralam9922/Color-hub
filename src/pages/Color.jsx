import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getRandomColor } from '../api/api';
import Cart from '../components/cart/Cart';
import CartSkeleton from '../components/CartSkeleton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

function Color() {
	const [search, setSearch] = useState('');
	const [colors, setColors] = useState([]);
	const randomColor = useQuery({ queryKey: ['randomColor'], queryFn: getRandomColor });

	const handelSearch = (e) => {
		setSearch(e.target.value);
		const result = randomColor.data?.colors?.filter((color) => {
			return color.name.toLowerCase().startsWith(search.toLowerCase());
		});

		setColors(result);
	};
	useEffect(() => {
		if (search === '') {
			setColors([]);
		}
	}, [search]);

	// if error
	if (randomColor.isError)
		return (
			<div className="w-full flex items-center justify-center mt-40 lg:mt-20 poppins-extrabold text-xl lg:text-4xl capitalize ">
				something wants wrong 🤔
			</div>
		);

	return (
		<div>
			<div className="w-full flex items-center justify-center py-10">
				<input
					className="w-full md:w-1/2 h-10  rounded-l-md outline-none indent-3 border-none"
					onChange={handelSearch}
					value={search}
					type="search"
					name=""
					id=""
				/>
				<button
					type="button"
					className="flex items-center justify-between text-xs md:text-base px-4 h-10 text-white rounded-r-md gap-4 bg-primaryText "
				>
					Search <BsSearch />
				</button>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-5  ">
				{randomColor.isLoading ? (
					<>
						{Array(10)
							.fill()
							.map((_, index) => (
								<CartSkeleton key={index} />
							))}
					</>
				) : (
					<>
						{colors.length > 0 &&
							colors.map((color, index) => (
								<Cart
									key={index}
									path={`/color-det/${encodeURIComponent('#' + color.hex)}`}
									id={index}
									colorName={color.name}
									color={'#' + color.hex}
									background={'none'}
								/>
							))}
						{colors.length === 0 &&
							randomColor.data?.colors?.map((color, index) => (
								<Cart
									key={index}
									path={`/color-det/${encodeURIComponent('#' + color.hex)}`}
									id={index}
									colorName={color.name}
									color={'#' + color.hex}
									background={'none'}
								/>
							))}
					</>
				)}
			</div>
		</div>
	);
}

export default Color;
