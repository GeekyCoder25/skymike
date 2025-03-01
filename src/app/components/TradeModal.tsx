import Image from 'next/image';
import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';

const TradeModal: FC<{
	setShowTradeModal: Dispatch<SetStateAction<boolean>>;
}> = ({setShowTradeModal}) => {
	const [activeTab, setActiveTab] = useState<'crypto' | 'giftcard'>('crypto');

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const selectedValue = (
			form.elements.namedItem('cryptoType') as HTMLSelectElement
		).value;
		const amount = (form.elements.namedItem('amount') as HTMLSelectElement)
			.value;
		const currency = (form.elements.namedItem('currency') as HTMLSelectElement)
			.value;
		const link = `https://wa.me/2349073002599?text=Hello Skymike, I want to trade ${
			currency || '$'
		}${amount} worth of ${selectedValue} `;

		const width = 600;
		const height = 500;
		const left = (window.innerWidth - width) / 2;
		const top = (window.innerHeight - height) / 2;
		window.open(
			link,
			'_blank',
			`width=${width},height=${height},left=${left},top=${top}`
		);
	};

	return (
		<div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-40">
			<div
				className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30"
				onClick={() => setShowTradeModal(false)}
			></div>

			<form
				className="bg-white w-[90%] max-w-[1000px] px-5 lg:px-36 py-20 z-10 rounded-xl"
				onSubmit={handleContinue}
			>
				<div className="flex flex-col lg:flex-row gap-10">
					<div
						className={`${
							activeTab === 'crypto' ? 'bg-primary text-white' : ''
						} flex-1 border-[1px] flex flex-col items-center px-20 py-5 rounded-xl cursor-pointer hover:border-primary`}
						onClick={() => setActiveTab('crypto')}
					>
						<Image src={'/bitcoin.svg'} width={100} height={100} alt="" />

						<p className="font-semibold">Exchange Crypto</p>
					</div>
					<div
						className={`${
							activeTab === 'giftcard' ? 'bg-primary text-white' : ''
						} flex-1 border-[1px] flex flex-col items-center px-20 py-5 rounded-xl cursor-pointer hover:border-primary`}
						onClick={() => setActiveTab('giftcard')}
					>
						<span className="w-[100px] h-[100px] flex justify-center items-center">
							<i className="fas fa-gift text-6xl text-[#b87f3e]"></i>
						</span>

						<p className="font-semibold">Exchange Giftcards</p>
					</div>
				</div>
				{activeTab === 'crypto' && (
					<div className="my-10 flex flex-col lg:flex-row gap-y-5">
						<input
							name="amount"
							type="number"
							className="border-[1px] lg:border-r-0 flex-1 min-h-14 outline-none pl-10 rounded-full lg:rounded-tr-none lg:rounded-br-none"
							required
						/>
						<select
							name="cryptoType"
							id="cryptoType"
							className="bg-primary border-[1px] border-primary outline-primary px-5 rounded-full text-white h-14 font-semibold"
						>
							<option value="Bitcoin" className="bg-primary">
								$ Worth of BTC
							</option>
							<option value="USDT" className="bg-primary">
								$ Worth of USDT
							</option>
							<option value="Ethereum" className="bg-primary">
								$ Worth of ETH
							</option>
							<option value="LTC" className="bg-primary">
								$ Worth of LTC
							</option>
							<option value="Eipple" className="bg-primary">
								$ Worth of Ripple
							</option>
							<option value="Doge" className="bg-primary">
								$ Worth of Doge
							</option>
						</select>
					</div>
				)}
				{activeTab === 'giftcard' && (
					<div className="my-10 flex flex-col lg:flex-row gap-y-5">
						<select
							name="currency"
							id="currency"
							className="bg-primary border-[1px] border-primary outline-primary px-5 rounded-full text-white h-14 font-semibold lg:mr-5"
						>
							<option value="$">USD $</option>
							<option value="€">EURO €</option>
							<option value="£">POUNDS £</option>
							<option value="A$">AUD A$</option>
							<option value="CA$">CAD CA$</option>
						</select>
						<input
							name="amount"
							type="number"
							className="border-[1px] lg:border-r-0 flex-1 min-h-14 outline-none pl-10 rounded-full lg:rounded-tr-none lg:rounded-br-none"
							required
						/>
						<select
							name="cryptoType"
							id="cryptoType"
							className="bg-primary border-[1px] border-primary outline-primary px-5 rounded-full text-white h-14 font-semibold"
						>
							<option value="itunes" className="bg-primary">
								Itunes Giftcards
							</option>
							<option value="steam-wallet" className="bg-primary">
								Steam Wallet Giftcards
							</option>
							<option value="amazon" className="bg-primary">
								Amazon Giftcards
							</option>
							<option value="google-play" className="bg-primary">
								Google Play Giftcards
							</option>
							<option value="ebay" className="bg-primary">
								Ebay Giftcards
							</option>
							<option value="american-express-gold" className="bg-primary">
								America Express Gold Giftcards
							</option>
							<option value="apple-store" className="bg-primary">
								Apple Store Giftcards
							</option>
							<option value="sephora" className="bg-primary">
								Sephora Giftcards
							</option>
							<option value="vanilla" className="bg-primary">
								Vanilla Giftcards
							</option>
							<option value="visa" className="bg-primary">
								Visa Giftcards
							</option>
							<option value="nordstrom" className="bg-primary">
								Nordstrom Giftcards
							</option>
							<option value="razer-gold" className="bg-primary">
								Razer Gold Giftcards
							</option>
							<option value="nike" className="bg-primary">
								Nike Giftcards
							</option>
						</select>
					</div>
				)}
				<button className="bg-primary px-5 py-4 rounded-full text-white font-semibold hover:scale-105 transition">
					Complete trade
				</button>
			</form>
		</div>
	);
};

export default TradeModal;
