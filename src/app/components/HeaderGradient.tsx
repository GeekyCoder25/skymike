import React from 'react';

const HeaderGradient = ({title}: {title: string}) => {
	return (
		<div className="relative flex items-center overflow-hidden">
			<h2 className="text-5xl lg:text-8xl absolute bg-clip-text text-transparent bg-gradient-to-b from-[#E7E7E7] to-[#F0F9FF] text-nowrap">
				{title}
			</h2>
			<h2 className="text-[#020618] text-3xl lg:text-6xl sticky z-10">
				{title}
			</h2>
		</div>
	);
};

export default HeaderGradient;
