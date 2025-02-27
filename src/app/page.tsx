import Choose from './components/Choose';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Home() {
	return (
		<main className="max-w-[2400px] mx-auto">
			<Hero />
			<Services />
			<FAQs />
			<Choose />
			<Testimonials />
			<Footer />
		</main>
	);
}
