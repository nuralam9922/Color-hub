import React from 'react';
import { BiLoader } from 'react-icons/bi';

function GenerateBtn({ callback }) {
	return (
		<button
			onClick={callback}
			type="button"
			className="bg-[#33383e] h-12 px-5 text-xs md:text-base md:px-10 text-white rounded-md flex items-center justify-between gap-3"
		>
			<BiLoader />
			<p>Generate</p>
		</button>
	);
}

export default GenerateBtn;
