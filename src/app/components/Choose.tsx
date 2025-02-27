'use client';
import React, {useEffect, useRef, useState} from 'react';
import HeaderGradient from './HeaderGradient';
import Image from 'next/image';

interface Carousel {
	icon: string;
	title: string;
	message: string;
}

const carousels: Carousel[] = [
	{
		icon: '/ethereum.svg',
		title: 'Fast transactions',
		message: 'Get your money in minutes with our swift processing.',
	},
	{
		icon: '/solana.svg',
		title: 'Easy to Use',
		message: 'A simple and seamless trading experience from start to finish.',
	},
	{
		icon: '/bitcoin.svg',
		title: 'Best Market Rate',
		message: 'Get your money in minutes with our swift processing.',
	},
	{
		icon: '/shiba.svg',
		title: 'Always Online',
		message: 'Trade anytime, anywhere—our service is available 24/7.',
	},
	{
		icon: '/polygon.svg',
		title: 'Unlimited Naira',
		message:
			'No limits on how much you can cash out. We can take any quantity you bring.',
	},
];

const Choose = () => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!carouselRef.current) return;

			const {scrollTop, scrollHeight, clientHeight} = carouselRef.current;
			if (scrollTop + clientHeight >= scrollHeight - 250 || scrollTop === 0) {
				setIsScrolling(false);
			} else {
				setIsScrolling(true);
			}
		};

		const sectionObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsScrolling(true);
				} else {
					setIsScrolling(false);
				}
			},
			{threshold: 0.5}
		);

		const carouselElement = carouselRef.current;
		if (carouselElement) {
			carouselElement.addEventListener('scroll', handleScroll);
			sectionObserver.observe(carouselElement);
		}

		return () => {
			if (carouselElement) {
				carouselElement.removeEventListener('scroll', handleScroll);
			}
			sectionObserver.disconnect();
		};
	}, []);

	const handleWheel = (e: React.WheelEvent) => {
		if (carouselRef.current) {
			if (isScrolling) {
				e.preventDefault();
			}
			carouselRef.current.scrollBy({top: e.deltaY, behavior: 'auto'});
		}
	};

	useEffect(() => {
		// document.body.style.overflow = isScrolling ? 'hidden' : 'auto';
	}, [isScrolling]);

	return (
		<section id="why" className="bg-[#f0f9ff] px-5 pt-10 pb-0 lg:py-20">
			<div className="max-w-[1300px] mx-auto">
				<HeaderGradient title="Why choose us?" />
				<div
					className="mt-20 flex flex-col lg:flex-row items-center gap-10 max-h-[250px] lg:max-h-[500px]"
					onWheel={handleWheel}
				>
					<div className="flex-1">
						<Image src={'/globe.svg'} width={500} height={500} alt="" />
					</div>
					<div className="flex-1 relative w-full h-[250px] lg:h-[500px] ">
						<div
							ref={carouselRef}
							className="h-full max-h-[250px] lg:max-h-[500px] overflow-y-auto scrollbar-hide"
						>
							{carousels.map(carousel => (
								<div
									className={`flex-1 flex items-center gap-x-5 h-[250px] lg:h-[500px]`}
									key={carousel.icon}
								>
									<Image src={carousel.icon} width={100} height={100} alt="" />
									<div>
										<h3 className="text-2xl lg:text-5xl font-semibold">
											{carousel.title}
										</h3>
										<p className="text-lg lg:text-2xl mt-3">
											{carousel.message}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[url('/map.svg')] bg-cover bg-center h-[500px] lg:h-[300px] -mt-20"></div>
		</section>
	);
};

export default Choose;
