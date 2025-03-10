import React, {Dispatch, FC, RefObject, SetStateAction} from 'react';
import HeaderGradient from './HeaderGradient';
import RocketIcon from '../assets/rocket';
import Image from 'next/image';

interface ServicesProps {
	ref: RefObject<null>;
	setShowTradeModal: Dispatch<SetStateAction<boolean>>;
}

const Services: FC<ServicesProps> = props => {
	const {ref, setShowTradeModal} = props;
	return (
		<section id="services" className="bg-[#f0f9ff] px-5" ref={ref}>
			<section className="py-10 lg:py-36 max-w-[1300px] mx-auto">
				<HeaderGradient title="Our Services" />

				<div className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-10 mt-10">
					{/* Cryptocurrency Trade Card */}
					<div
						className="group flex-1 flex flex-col gap-y-5 bg-[#DBEAFE] rounded-xl px-5 lg:px-10 pt-10 overflow-hidden transition-all duration-300"
						data-aos="fade-right"
					>
						<h4 className="text-3xl lg:text-5xl">
							Cryptocurrency trade to Naira
						</h4>
						<p className="text-lg lg:text-2xl">
							Sell your Bitcoin, USDT, and other cryptocurrencies instantly at
							the best rates. Secure and fast transactions guaranteed.
						</p>
						<div className="flex">
							<button
								className="bg-[#AD46FF] py-2 px-4 rounded-md text-white flex items-center gap-x-2"
								onClick={() => setShowTradeModal(true)}
							>
								<RocketIcon />
								Trade now
							</button>
						</div>
						<div className="flex-1 flex items-end">
							<Image
								src="/services-card-image-1.svg"
								alt=""
								width={500}
								height={300}
								className="max-h-[300px] transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>

					{/* Gift Card Trade Card */}
					<div
						className="group flex-1 flex flex-col gap-y-5 bg-[#F3E8FF] rounded-xl px-5 lg:px-10 pt-10 overflow-hidden transition-all duration-300"
						data-aos="fade-left"
					>
						<h4 className="text-3xl lg:text-5xl">Gift card trade to Naira</h4>
						<p className="text-lg lg:text-2xl">
							Exchange your unused gift cards for cash in minutes. Get the best
							value with a smooth and hassle-free process.
						</p>
						<div className="flex">
							<button
								className="bg-[#AD46FF] py-2 px-4 rounded-md text-white flex items-center gap-x-2"
								onClick={() => setShowTradeModal(true)}
							>
								<RocketIcon />
								Trade now
							</button>
						</div>
						<div className="flex-1 flex items-end">
							<Image
								src="/services-card-image-2.svg"
								alt=""
								width={500}
								height={300}
								className="max-h-[300px] transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Services;
