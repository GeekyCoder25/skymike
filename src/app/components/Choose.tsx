'use client';
import React, {RefObject, useEffect, useRef} from 'react';
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

const Choose = ({ref}: {ref: RefObject<null>}) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!carouselRef.current) return;

			const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
			if (scrollLeft + clientWidth >= scrollWidth || scrollLeft === 0) {
				document.body.style.overflow = 'auto';
			} else {
			}
		};

		const carouselElement = carouselRef.current;
		if (carouselElement) {
			carouselElement.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (carouselElement) {
				carouselElement.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	const handleWheel = (e: React.WheelEvent) => {
		if (carouselRef.current) {
			// document.body.style.overflow = 'hidden'; // Disable page scrolling

			// if (isScrolling) {
			// } else {
			// 	document.body.style.overflow = 'auto';
			// }
			carouselRef.current.scrollBy({left: e.deltaY, behavior: 'smooth'});
		}
	};
	let startY: number;
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		startY = e.touches[0].clientY; // Store initial touch Y position
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (carouselRef.current) {
			const deltaY = startY - e.touches[0].clientY; // Check movement difference

			carouselRef.current.scrollBy({
				left: deltaY, // Move horizontally based on vertical movement
				behavior: 'smooth',
			});

			startY = e.touches[0].clientY; // Update start position
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						document.body.style.overflow = 'hidden'; // Disable page scrolling
					} else {
						document.body.style.overflow = 'auto'; // Disable page scrolling
					}
				});
			},
			{root: null, threshold: 1}
		);
		if (carouselRef.current) observer.observe(carouselRef.current);

		return () => observer.disconnect();
	}, [ref]);

	return (
		<div
			ref={container}
			onWheel={handleWheel}
			onTouchMove={handleTouchMove}
			onTouchStart={handleTouchStart}
		>
			<section
				id="why"
				className="bg-[#f0f9ff] px-5 pt-10 pb-0 lg:py-20"
				ref={ref}
			>
				<div className="max-w-[1300px] mx-auto">
					<HeaderGradient title="Why choose us?" />
					<div className="mt-20 flex flex-col lg:flex-row items-center gap-x-10 max-w-full overflow-hidden">
						<div className="flex-shrink-0 w-[500px] lg:w-[500px]">
							<Image src={'/globe.svg'} width={500} height={500} alt="" />
						</div>
						<div className="relative w-full h-[250px] lg:h-[500px] overflow-hidden">
							<div
								ref={carouselRef}
								className="flex flex-row gap-x-20 h-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
							>
								{carousels.map(carousel => (
									<div
										className="flex flex-row items-center gap-x-5 min-w-[90vw] lg:min-w-[600px] snap-start"
										key={carousel.icon}
									>
										<Image
											src={carousel.icon}
											width={100}
											height={100}
											alt=""
										/>
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
			</section>
			<div className="bg-[url('/map.svg')] bg-cover bg-center h-[500px] lg:h-[300px] -mt-10"></div>
		</div>
	);
};

export default Choose;
