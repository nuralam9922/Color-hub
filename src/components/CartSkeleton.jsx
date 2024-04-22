import React from 'react';
import { FaRegCopy } from 'react-icons/fa6';

function CartSkeleton() {
	return (
		<div className="bg-white w-40 select-none lg:w-64 shadow-sm cursor-pointer rounded-lg text-wrap border-2 p-2">
			<div className={` inner w-full py-10 lg:py-28 animate-pulse bg-slate-400 rounded-lg`}>
				<div className={`w-full h-full   items-center justify-center poppins-semibold  text-2xl`}></div>
			</div>

			<div className="flex flex-col md:flex-row  py-3 md:justify-between px-2 ">
				<h2 className=" poppins-medium text-xs lg:text-base h-5 md:h-0 bg-slate-200 w-20 lg:h-2"></h2>
				<div className="flex active:scale-90 duration-300 items-center text-xs lg:text-base  gap-2 mt-2 md:mt-0 ">
					<p className={`poppins-regular rounded-full px-2 bg-slate-200 w-10 h-2`}></p>
					<FaRegCopy className="text-left text-zinc-300" />
				</div>
			</div>
		</div>
	);
}

export default CartSkeleton;
