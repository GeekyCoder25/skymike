'use client';
import {useEffect, useRef, useState} from 'react';
import Choose from './components/Choose';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	const [showTradeModal, setShowTradeModal] = useState(false);
	useEffect(() => {
		AOS.init({});
	}, []);

	const sectionRefs = {
		home: useRef(null),
		about: useRef(null),
		how: useRef(null),
		services: useRef(null),
		faqs: useRef(null),
		choose: useRef(null),
	};

	return (
		<main className="max-w-[2400px] mx-auto overflow-x-hidden">
			<Hero
				refs={sectionRefs}
				showTradeModal={showTradeModal}
				setShowTradeModal={setShowTradeModal}
			/>
			<Services ref={sectionRefs.services} />
			<FAQs ref={sectionRefs.faqs} />
			<Choose ref={sectionRefs.choose} />
			<Testimonials />
			<Footer />
		</main>
	);
}
