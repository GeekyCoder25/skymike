'use client';
import React, {RefObject, useState} from 'react';
import HeaderGradient from './HeaderGradient';

const faqs = [
	{
		question: 'Why Should I Trust SkyMikeServices?',
		answer:
			'We are Reliable\n' +
			'* Sell your cards quickly and get your money instantly.\n' +
			'* We accept crypto anywhere & anywhere.',
	},
	{
		question: 'How Do I Start Trading?',
		answer:
			'To Start Trading with us, click on the "TRADE NOW" button, select what you want to buy or sell, input your details, proceed, and click the "TRADE" button.',
	},
	{
		question: 'How Long Before I Get Paid?',
		answer:
			'Both naira and crypto withdrawals on SkyMikeServices are instant. We believe getting your payment as soon as you want is important to you, and important to us as well.',
	},
	{
		question: 'What Gift Cards Do You Buy?',
		answer:
			'We buy almost all gift cards ranging from Itunes, Steam, Amazon, Google Play, Ebay, America Express Gold, Apple Store, Sephora, Vanilla, Visa, Nordstrom, etc.',
	},
	{
		question: 'What Cryptocurrencies Do You Buy?',
		answer:
			'We buy almost all cryptocurrencies, ranging from Bitcoin, USDT, Ethereum, Binance Coin, Dogecoin, Litecoin, Ripple, etc.',
	},
	{
		question: 'What Is The Limit of Coin/Giftcard You Buy?',
		answer:
			'We accept any quantity of coin or gift cards. No minimum or maximum.',
	},
];

const FAQs = ({ref}: {ref: RefObject<null>}) => {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<section id="faqs" className="bg-[#f0f9ff] lg:px-5" ref={ref}>
			<div className="max-w-[1300px] mx-auto">
				<div className="px-5 lg:px-0">
					<HeaderGradient title="Frequently asked questions" />
				</div>
				<div
					className="bg-[#EAF3FF] mt-10 py-10 lg:py-20 px-5 lg:px-20 rounded-xl flex flex-col gap-y-5"
					data-aos="fade-up"
				>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className={`${
								selected === index
									? 'bg-[#162456] text-white'
									: 'bg-[#DBEAFE] text-[#201E1D] '
							} p-5 rounded-xl`}
						>
							<div className="flex justify-between items-center transition-all">
								<h4 className="font-semibold">{faq.question}</h4>
								<button
									onClick={() =>
										setSelected(prev => (prev === index ? null : index))
									}
								>
									{selected === index ? (
										<i className="fas fa-minus"></i>
									) : (
										<i className="fas fa-plus"></i>
									)}
								</button>
							</div>
							<p
								className={`${
									selected === index ? '' : 'h-0 overflow-hidden'
								} mt-1`}
							>
								{faq.answer}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQs;
