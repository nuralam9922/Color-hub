import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="">
			<div className="  flex flex-wrap items-center justify-between mx-auto pt-4">
				<Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-[#33383e] poppins-semibold">Color Hub</span>
					<div className=" grid w-6 grid-cols-2 gap-1">
						<div className="box w-full h-3 col-span-2 bg-primaryText"></div>
						<div className="box w-full h-3 col-span-1 bg-primaryText"></div>
						<div className="box w-full h-3 col-span-1 bg-primaryText"></div>
					</div>
				</Link>

				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="flex items-center justify-center gap-5 p-4 text-base">
						<Link to={'/'}>
							<li className="cursor-pointer poppins-regular">Random</li>
						</Link>
						<Link to={'/color'}>
							<li className="cursor-pointer poppins-regular">Colors</li>
						</Link>
						<Link to={'/color-visualize'}>
							<li className="cursor-pointer poppins-regular">Color Visualizer</li>
						</Link>
						<Link to={'/leaner'}>
							<li className="cursor-pointer poppins-regular">Leaner</li>
						</Link>
						<li className="cursor-pointer poppins-regular">Radial</li>
						<li className="cursor-pointer poppins-regular">Gradient</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
