'use client';
import React, {useState} from 'react';
import HeaderGradient from './HeaderGradient';

const faqs = [
	{
		question: 'What is CrossGate?',
		answer:
			'CrossGate is a secure cross-chain asset transfer platform that enables users to move their digital assets seamlessly between different blockchain networks.',
	},
	{
		question: 'How Do I Start Trading?',
		answer: '',
	},
	{
		question: 'How Long Before I Get Paid?',
		answer: '',
	},
	{
		question: 'What Gift Cards Do You Buy?',
		answer: '',
	},
	{
		question: 'What Cryptocurrencies Do You Buy?',
		answer: '',
	},
	{
		question: 'What Is The Limit of Coin/Giftcard You Buy?',
		answer: '',
	},
];

const FAQs = () => {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<section id="faqs" className="bg-[#f0f9ff] lg:px-5">
			<div className="max-w-[1300px] mx-auto">
				<div className="px-5 lg:px-0">
					<HeaderGradient title="Frequently asked questions" />
				</div>
				<div className="bg-[#EAF3FF] mt-10 py-10 lg:py-20 px-5 lg:px-20 rounded-xl flex flex-col gap-y-5">
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
