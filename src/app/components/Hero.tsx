'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import ClipPathIcon from '../assets/clip-path';
import RocketIcon from '../assets/rocket';

const Hero = () => {
	const navLinks = [
		{label: 'Home', route: ''},
		{label: 'About us', route: '#about'},
		{label: 'Our services', route: '#services'},
		{label: 'How we work', route: '#how'},
		{label: 'Why Choose us', route: '#why'},
		{label: 'FAQs', route: '#faqs'},
	];
	const [hash, setHash] = useState('');

	useEffect(() => {
		const handleHashChange = () => {
			setHash(window.location.hash || '');
		};

		handleHashChange();
		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, []);

	return (
		<>
			<div className="bg-[url('/Bg.svg')] bg-repeat bg-center h-[900px] lg:h-[1200px] overflow-hidden py-10 flex flex-col">
				<nav className="flex justify-center lg:justify-between items-center px-5 lg:px-10">
					<Image
						src={'/logo.svg'}
						alt=""
						width={180}
						height={60}
						className="cursor-pointer object-cover"
					/>
					<ul className="hidden lg:flex">
						{navLinks.map(link => (
							<Link
								href={link.route}
								key={link.route}
								className={`py-3 px-4 font-medium ${
									hash === link.route
										? 'text-[#0F172B] border-b-[1px] border-[#0F172B]'
										: 'text-[#62748E]'
								}`}
								onClick={() => setHash(link.route)}
							>
								{link.label}
							</Link>
						))}
					</ul>
					<div className="hidden lg:flex items-center gap-x-5">
						<ClipPathIcon />
						<button className="bg-[#AD46FF] py-2 px-4 rounded-md text-white flex items-center gap-x-2">
							<RocketIcon />
							Trade now
						</button>
					</div>
				</nav>
				<div className="w-full flex-1 flex flex-col gap-y-10 justify-center items-center max-w-[800px] mx-auto mt-10 mb-0 lg:my-20 px-5 lg:px-10 text-center">
					<div className="bg-[#DBEAFE] px-3 py-4 rounded-full text-[#162456] text-sm lg:text-lg">
						Skymike service is No 1 trading vendor in Nigeria
					</div>
					<h2 className="text-3xl lg:text-6xl">
						Trade Crypto & Gift Cards at the Best Rates.
						<span className="text-[#1C398E]"> Fast & Secure</span>
					</h2>
					<p className="text-lg lg:max-w-[500px]">
						Convert Your Crypto & Gift Cards to Naira in Just 5 Minutes—Fast,
						Secure, and Hassle-Free!
					</p>
					<button className="bg-[#AD46FF] py-2 px-4 rounded-md text-white w-full lg:w-fit flex justify-center items-center gap-x-2">
						<RocketIcon />
						Trade now
					</button>
				</div>
				<div
					className="w-full h-full bg-[url('/hero-bg.svg')] bg-cover"
					style={{backgroundPosition: '80% 0%'}}
				></div>
			</div>
			<div className="px-5 lg:px-10 bg-[#f0f9ff]">
				<div className="bg-[url('/section2-bg.svg')] bg-cover bg-center max-w-[1300px] mx-auto p-10 lg:p-20 pb-5 lg:pb-3 text-white rounded-xl -mt-28 z-10 sticky text-xl lg:text-5xl">
					<p className="max-w-[600px]">
						We thrive in delivering on our word to provide seamless services to
						you!
					</p>
					<div className="my-10 flex flex-col lg:flex-row lg:items-center gap-x-20">
						<Image
							width={500}
							height={500}
							src={'/Illustrations.svg'}
							alt=""
							className="flex-1"
						/>
						<div className="flex-1 flex flex-col gap-y-10">
							<div className="h-5 lg:h-56 lg:border-l-2 mx-20"></div>
							<p>
								Our Love Language is
								<br />
								<span className="text-[#DAB2FF] text-3xl lg:text-5xl">
									{' '}
									Sent and received
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				id="about"
				className="pt-44 pb-20 px-5 flex justify-center bg-[#020618] -mt-24 overflow-hidden"
			>
				<div className="max-w-[1300px] flex flex-col gap-y-10">
					<div className="bg-[#DBEAFE] px-3 py-4 rounded-full text-[#162456] text-sm lg:text-lg  max-w-[800px] mx-auto">
						Registered in Nigeria under CAC: BN3200476
					</div>
					<div className="text-white text-lg lg:text-5xl lg:text-center">
						Sky Mike Services is the surest plug to trade bitcoin, gift cards
						and other cryptocurrencies
					</div>
					<div className="flex items-center flex-col-reverse lg:flex-row gap-x-10 gap-y-16">
						<h4 className="flex-1 text-white text-lg lg:text-2xl">
							We are the most trusted platform in Nigeria for trading your
							Bitcoins/other cryptocurrencies and gift cards to naira. We buy at
							the best rate in the market and reply as quickly as possible when
							your contact us via our WhatsApp number.
						</h4>
						<div className="flex-1 flex justify-center items-center relative">
							<div className="max-w-[400px] overflow-x-hidden">
								<Image
									width={300}
									height={300}
									src={'/mockup.svg'}
									alt=""
									className="w-full h-full"
								/>

								<div className="absolute z-20 top-0 left-0 w-full h-full animate-spin-slow">
									<Image
										width={300}
										height={300}
										src={'/usdt.svg'}
										alt=""
										className="absolute -top-10 -left-5"
									/>
								</div>
								<div className="absolute z-20 bottom-0 right-0 w-full h-full animate-spin-slow-reverse">
									<Image
										width={300}
										height={300}
										src={'/btc.svg'}
										alt=""
										className="absolute -bottom-5 -right-5"
									/>
								</div>
							</div>
						</div>
					</div>
					<div
						id="how"
						className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:bg-[#0B0E20] lg:px-20 lg:py-32 rounded-2xl mt-10 lg:-mt-20 sticky z-10"
					>
						<div className="flex-1 text-white flex flex-col gap-y-10">
							<h4 className="text-3xl lg:text-5xl">
								We buy and sell Gift cards
							</h4>
							<p className="text-lg lg:text-2xl">
								Convert all different kinds of gift cards with us at best rate
								to cash. We also buys Physical Cards, Ecodes, big Denomination
								Cards, cards with receipts, cards without receipts,
							</p>
						</div>
						<div className="flex-1 flex justify-center items-center relative">
							<div className="max-w-[400px]">
								<Image
									width={300}
									height={300}
									src={'/giftcard.svg'}
									alt=""
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:bg-[#0B0E20] lg:px-20 lg:py-32 rounded-2xl mt-10">
						<div className="flex-1 text-white flex flex-col gap-y-10">
							<h4 className="text-3xl lg:text-5xl">
								We buy and sell cryptocurrency
							</h4>
							<p className="text-lg lg:text-2xl">
								Convert all different kinds of gift cards with us at best rate
								to cash.
							</p>
						</div>
						<div className="flex-1 flex justify-center items-center relative">
							<div className="max-w-[400px]">
								<Image
									width={300}
									height={300}
									src={'/crypto.svg'}
									alt=""
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
