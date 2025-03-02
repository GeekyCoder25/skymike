import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MailIcon from '../assets/mail';
import ChatIcon from '../assets/chat';
import CallIcon from '../assets/call';

const Footer = () => {
	return (
		<footer
			className="bg-[#020618] pt-10 lg:pt-20 mx-auto text-white bg-[url('/footer-bg.svg')] bg-cover overflow-hidden"
			style={{backgroundPosition: '100% 30%'}}
		>
			<div className="flex justify-end gap-x-5 max-w-[1300px] mx-auto px-5 pb-3">
				<Link
					href="https://wa.me/2349030444317"
					target="_blank"
					rel="noopener noreferrer"
				>
					WhatsApp
				</Link>
				<Link href="https://www.facebook.com/share/1YELmcB7BT/?mibextid=wwXIfr"
					target="_blank"
					rel="noopener noreferrer">Facebook</Link>
				<Link
					href={
						'https://www.instagram.com/skymike_services?igsh=ODdkM2Rsa3FrOXZ0'
					}
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram
				</Link>
				<Link
					href="https://t.me/+2349030444317"
					target="_blank"
					rel="noopener noreferrer"
				>
					Telegram
				</Link>
			</div>
			<div className="max-w-[1300px] mx-auto px-5 relative flex flex-col lg:flex-row lg:items-center gap-10 overflow-hidden border-y-[1px] border-y-[#A8A8A833] py-10 lg:py-20 ">
				<div className="flex-1 flex flex-col gap-y-10">
					<Image
						src={'/logo2.svg'}
						alt=""
						width={180}
						height={60}
						className="cursor-pointer object-cover"
					/>
					<p className="flex-1">
						SkyMikeServices is the surest plug to trade bitcoin, giftcards and
						other cryptocurrencies in Nigeria
					</p>
				</div>
				<div className="flex-1 lg:flex justify-center items-center">
					<div className=" flex flex-col justify-center gap-y-5">
						<h3>Contact us on</h3>
						<Link
							href={'mailto:support@skymikeservices.com'}
							className="flex items-center gap-x-2"
						>
							<MailIcon />
							support@skymikeservices.com
						</Link>
						<div className="flex flex-wrap gap-5">
							<Link
								href={'tel:+2349030444317'}
								className="flex items-center gap-x-2"
							>
								<CallIcon />
								+234 903 044 4317
							</Link>
							<Link
								href={'sms:+2349030444317'}
								className="flex items-center gap-x-2"
							>
								<ChatIcon />
								+234 0903 044 4317
							</Link>
						</div>
						<div className="flex">
							<div className="bg-[#00C16A1A] px-5 py-2 rounded-full text-[#00C16A]">
								Always Available
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2 className="bg-[#45556C]  bg-clip-text text-[300px] font-black text-transparent text-center h-64 bg-[url('/shade.svg')] ">
				Skymike
			</h2>
		</footer>
	);
};

export default Footer;
