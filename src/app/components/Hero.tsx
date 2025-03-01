'use client';
import Image from 'next/image';
import React, {
	Dispatch,
	FC,
	RefObject,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import ClipPathIcon from '../assets/clip-path';
import RocketIcon from '../assets/rocket';
import TradeModal from './TradeModal';

const Hero: FC<{
	refs: {
		home: RefObject<null>;
		about: RefObject<null>;
		how: RefObject<null>;
		services: RefObject<null>;
		faqs: RefObject<null>;
		choose: RefObject<null>;
	};
	showTradeModal: boolean;
	setShowTradeModal: Dispatch<SetStateAction<boolean>>;
}> = props => {
	const {refs, showTradeModal, setShowTradeModal} = props;
	const [scrolled, setScrolled] = useState(false);
	const [hash, setHash] = useState('');
	const [showQrCode, setShowQrCode] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{label: 'Home', route: ''},
		{label: 'About us', route: '#about'},
		{label: 'How we work', route: '#how'},
		{label: 'Our services', route: '#services'},
		{label: 'FAQs', route: '#faqs'},
		{label: 'Why Choose us', route: '#why'},
	];

	useEffect(() => {
		const handleHashChange = () => {
			const newHash = window.location.hash || '';
			setHash(newHash);
			if (newHash) {
				const targetElement = document.querySelector(newHash);
				if (targetElement && !hash) {
					targetElement.scrollIntoView({behavior: 'smooth'});
				}
			}
		};

		if (hash) {
			handleHashChange();
		}
		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, [hash]);

	const handleSmoothScroll = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		route: string
	) => {
		event.preventDefault();
		setHash(route);

		if (route) {
			const targetElement = document.querySelector(route);
			if (targetElement) {
				targetElement.scrollIntoView({behavior: 'smooth'});
				window.history.pushState(null, '', route);
			}
		} else {
			const targetElement = document.querySelector('#home');
			targetElement?.scrollIntoView({behavior: 'smooth'});
			window.history.pushState(null, '', '/');
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						if (entry.target.id === 'home') {
							window.history.replaceState(null, '', '#');
							setHash('');
						} else {
							window.history.replaceState(null, '', `#${entry.target.id}`);
							setHash(`#${entry.target.id}`);
						}
					}
				});
			},
			{root: null, threshold: 0.6}
		);

		Object.values(refs).forEach(section => {
			if (section.current) observer.observe(section.current);
		});

		return () => observer.disconnect();
	}, [refs]);

	return (
		<>
			<div className="bg-[url('/ellipse.svg')] animate-spin-medium fixed top-0 right-0 bottom-0 left-0 z-0 pointer-events-none"></div>
			{showTradeModal && <TradeModal setShowTradeModal={setShowTradeModal} />}
			<div
				ref={refs.home}
				id="home"
				className="bg-[url('/Bg.svg')] bg-[#f0f9ff] bg-repeat bg-center h-[900px] lg:h-[1200px] overflow-hidden flex flex-col"
			>
				<nav
					className={`flex justify-center lg:justify-between items-center px-5 lg:px-10 transition-all duration-300 z-30 ${
						scrolled
							? 'bg-[#f0f9ff] shadow-md py-3 lg:fixed top-0 left-0 right-0'
							: 'bg-transparent py-10'
					}`}
				>
					<Image
						src={'/logo.svg'}
						alt=""
						width={180}
						height={60}
						className="cursor-pointer object-cover"
					/>
					<ul className="hidden lg:flex">
						{navLinks.map(link => (
							<a
								href={link.route}
								key={link.route}
								className={`py-3 px-4 font-medium hover:scale-100 ${
									hash === link.route
										? 'text-[#0F172B] border-b-[1px] border-[#0F172B]'
										: 'text-[#62748E]'
								}`}
								onClick={e => handleSmoothScroll(e, link.route)}
							>
								{link.label}
							</a>
						))}
					</ul>
					<div className="lg:flex items-center gap-x-5">
						<div className="hidden lg:block cursor-pointer relative">
							<span
								onClick={() => setShowQrCode(true)}
								onMouseOver={() => setIsHovered(true)}
							>
								<ClipPathIcon />
							</span>
							{(showQrCode || isHovered) && (
								<div>
									<div className="absolute z-30 top-20 right-0 bg-[#22ba60] rounded-xl shadow-lg overflow-hidden">
										<div className="mt-10 bg-white py-5 px-20 flex flex-col items-center gap-y-2 rounded-xl">
											<Image
												src={'/icon.svg'}
												width={50}
												height={50}
												alt=""
												className="-mt-10 bg-white p-3 rounded-full"
											/>
											<h1 className="font-semibold text-xl">
												SkymikeServices.com
											</h1>
											<span className="text-lg">Whatsapp Contact</span>
											<Image
												src={'/qr.png'}
												width={300}
												height={300}
												alt=""
												className="mt-5 min-w-[300px]"
											/>
										</div>
									</div>
									<div
										className="fixed top-0 right-0 left-0 bottom-0"
										onClick={() => {
											setShowQrCode(false);
											setIsHovered(false);
										}}
									></div>
								</div>
							)}
						</div>
						<button
							onClick={() => setShowTradeModal(true)}
							className={`bg-[#AD46FF] py-2 px-4 rounded-md text-white flex items-center gap-x-2 fixed lg:static bottom-2 right-5 z-30 ${
								hash ? 'visible' : 'invisible lg:visible'
							}`}
						>
							<RocketIcon />
							Trade now
						</button>
					</div>
				</nav>
				<div className="w-full flex-1 flex flex-col gap-y-10 justify-center items-center max-w-[800px] mx-auto mt-10 mb-0 lg:my-20 px-5 lg:px-10 text-center relative">
					<div className="absolute z-20 top-0 left-0 w-full h-full animate-spin-slow lg:hidden">
						<Image
							width={100}
							height={100}
							src={'/usdt.svg'}
							alt=""
							className="absolute -top-10 left-5"
						/>
					</div>
					<div className="absolute z-20 bottom-0 right-0 w-full h-full animate-spin-slow-reverse lg:hidden">
						<Image
							width={100}
							height={100}
							src={'/btc.svg'}
							alt=""
							className="absolute -bottom-5 right-5"
						/>
					</div>
					<div className="bg-[#DBEAFE] px-3 py-4 rounded-full text-[#162456] text-sm lg:text-lg">
						Skymike service is No 1 trading vendor in Nigeria
					</div>
					<h2 className="text-3xl lg:text-6xl" data-aos="fade-up">
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '0s'}}
						>
							Trade
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '1s'}}
						>
							Crypto
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '2s'}}
						>
							&amp;
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '3s'}}
						>
							Gift
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '4s'}}
						>
							Cards
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '5s'}}
						>
							at
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '6s'}}
						>
							the
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '7s'}}
						>
							Best
						</span>{' '}
						<span
							className="mobile-wave inline-block"
							style={{animationDelay: '8s'}}
						>
							Rates.
						</span>
						<br />
						<span
							className="text-[#1C398E] mobile-wave inline-block"
							data-aos="fade-up"
							style={{animationDelay: '10s'}}
						>
							Fast &amp; Secure
						</span>
					</h2>
					<p className="text-lg lg:max-w-[500px]" data-aos="fade-up">
						Convert Your Crypto & Gift Cards to Naira in Just 5 Minutes—Fast,
						Secure, and Hassle-Free!
					</p>{' '}
					<div data-aos="fade-up">
						<button
							onClick={() => setShowTradeModal(true)}
							className="bg-[#AD46FF] py-2 px-4 rounded-md text-white flex items-center gap-x-2 hover:scale-105 transition duration-300"
						>
							<RocketIcon />
							Trade now
						</button>
					</div>
				</div>
				<div
					className="w-full h-full bg-[url('/hero-bg.svg')] bg-cover"
					style={{backgroundPosition: '80% 0%'}}
				></div>
			</div>
			<div className="px-5 lg:px-10 bg-[#f0f9ff]">
				<div
					className="bg-[url('/section2-bg.svg')] bg-cover bg-center max-w-[1300px] mx-auto p-10 lg:px-20 lg:py-10 pb-5 lg:pb-3 text-white rounded-xl -mt-28 z-10 sticky text-xl lg:text-5xl"
					data-aos="fade-up"
				>
					<p className="max-w-[600px]" data-aos="fade-right">
						We thrive in delivering on our word to provide seamless services to
						you!
					</p>
					<div className="my-5 flex flex-col lg:flex-row lg:items-center gap-x-20">
						<Image
							width={500}
							height={500}
							src={'/Illustrations.svg'}
							alt=""
							className="flex-1"
							data-aos="fade-up"
						/>
						<div className="flex-1 flex flex-col gap-y-10">
							<div className="h-5 lg:h-56 lg:border-l-2 mx-20"></div>
							<p data-aos="fade-left">
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
			<section className="pt-44 pb-20 px-5 flex flex-col items-center bg-[#020618] -mt-24 overflow-hidden min-h-[500px]">
				<div
					className="max-w-[1300px] flex flex-col gap-y-10"
					id="about"
					ref={refs.about}
				>
					<div className="bg-[#DBEAFE] px-3 py-4 rounded-full text-[rgb(22,36,86)] text-sm lg:text-lg  max-w-[800px] mx-auto">
						Registered in Nigeria under CAC: BN3200476
					</div>
					<div
						className="text-white text-lg lg:text-5xl lg:text-center"
						data-aos="fade-right"
					>
						Sky Mike Services is the surest plug to trade bitcoin, gift cards
						and other cryptocurrencies
					</div>
					<div className="flex items-center flex-col-reverse lg:flex-row gap-x-10 gap-y-16">
						<h4
							className="flex-1 text-white text-lg lg:text-2xl"
							data-aos="fade-right"
						>
							We are the most trusted platform in Nigeria for trading your
							Bitcoins/other cryptocurrencies and gift cards to naira. We buy at
							the best rate in the market and reply as quickly as possible when
							your contact us via our WhatsApp number.
						</h4>
						<div
							className="flex-1 flex justify-center items-center relative"
							data-aos="fade-left"
						>
							<div className="max-w-[400px] min-h-[200px] overflow-x-hidden">
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
				</div>
				<div className="max-w-[1300px] flex flex-col gap-y-10">
					<div
						id="how"
						className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:bg-[#0B0E20] lg:px-20 lg:py-32 rounded-2xl mt-10 lg:-mt-20 sticky z-10"
						ref={refs.how}
						data-aos="fade-up"
					>
						<div
							className="flex-1 text-white flex flex-col gap-y-10"
							data-aos="fade-right"
						>
							<h4 className="text-3xl lg:text-5xl">
								We buy and sell Gift cards
							</h4>
							<p className="text-lg lg:text-2xl">
								Convert all different kinds of gift cards with us at best rate
								to cash. We also buys Physical Cards, Ecodes, big Denomination
								Cards, cards with receipts, cards without receipts,
							</p>
						</div>
						<div
							className="flex-1 flex justify-center items-center relative"
							data-aos="fade-left"
						>
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
					<div
						className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:bg-[#0B0E20] lg:px-20 lg:py-32 rounded-2xl mt-10"
						data-aos="fade-up"
					>
						<div
							className="flex-1 text-white flex flex-col gap-y-10"
							data-aos="fade-right"
						>
							<h4 className="text-3xl lg:text-5xl">
								We buy and sell cryptocurrency
							</h4>
							<p className="text-lg lg:text-2xl">
								Convert all different kinds of gift cards with us at best rate
								to cash.
							</p>
						</div>
						<div
							className="flex-1 flex justify-center items-center relative"
							data-aos="fade-left"
						>
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
			</section>
		</>
	);
};

export default Hero;
