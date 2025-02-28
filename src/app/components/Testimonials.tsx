import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
	const testimonies = [
		'Quality service',
		'Highly rated',
		'Friendly response',
		'Reliable',
		'Best rates',
		'Fast and always active',
	];

	return (
		<section className="bg-[#162456] py-10 lg:py-20">
			<div className="max-w-[1300px] mx-auto px-5 relative flex items-center overflow-hidden">
				<h2 className="text-5xl lg:text-8xl absolute bg-clip-text text-transparent bg-gradient-to-b from-[#26356A] to-[#111C42] text-nowrap">
					Testimonials
				</h2>
				<h2 className="text-white text-3xl lg:text-6xl sticky z-10">
					Testimonials
				</h2>
			</div>

			<div className="mt-20 overflow-x-hidden gap-y-10 whitespace-nowrap">
				<div className="animate-left-scroll-mobile lg:animate-left-scroll flex gap-x-5">
					{testimonies.map(testimony => (
						<span
							key={testimony}
							className="bg-[#DBEAFE] px-5 py-2 rounded-full inline-block"
						>
							{testimony}
						</span>
					))}
					{testimonies.map(testimony => (
						<span
							key={testimony}
							className="bg-[#DBEAFE] px-5 py-2 rounded-full inline-block"
						>
							{testimony}
						</span>
					))}
					{testimonies.map(testimony => (
						<span
							key={testimony}
							className="bg-[#DBEAFE] px-5 py-2 rounded-full inline-block"
						>
							{testimony}
						</span>
					))}
					{testimonies.map(testimony => (
						<span
							key={testimony}
							className="bg-[#DBEAFE] px-5 py-2 rounded-full inline-block"
						>
							{testimony}
						</span>
					))}
				</div>
				<div className="animate-right-scroll-mobile lg:animate-right-scroll flex gap-x-10 lg:gap-x-10 mt-20">
					{[1, 2, 3, 4, 5, 6].map(index => (
						<div
							key={index}
							className={`${
								index % 2 ? 'mt-10' : 'mb-10'
							} bg-[url('/screenshot-bg.svg')] bg-cover min-w-[300px] flex justify-center items-center`}
						>
							<Image
								src={`/screenshot${index}.png`}
								width={500}
								height={500}
								alt=""
								className="h-[600px]"
							/>
						</div>
					))}
					{[1, 2, 3, 4, 5, 6].map(index => (
						<div
							key={index}
							className={`${
								index % 2 ? 'mt-10' : 'mb-10'
							} bg-[url('/screenshot-bg.svg')] bg-cover min-w-[300px] flex justify-center items-center`}
						>
							<Image
								src={`/screenshot${index}.png`}
								width={500}
								height={500}
								alt=""
								className="h-[600px]"
							/>
						</div>
					))}
					{[1, 2, 3, 4, 5, 6].map(index => (
						<div
							key={index}
							className={`${
								index % 2 ? 'mt-10' : 'mb-10'
							} bg-[url('/screenshot-bg.svg')] bg-cover min-w-[300px] flex justify-center items-center`}
						>
							<Image
								src={`/screenshot${index}.png`}
								width={500}
								height={500}
								alt=""
								className="h-[600px]"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
