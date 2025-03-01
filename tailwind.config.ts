import type {Config} from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'spin-slow-reverse': 'reverse-spin 20s linear infinite',
				'left-scroll': 'left-scroll 20s linear infinite',
				'left-scroll-mobile': 'left-scroll 5s linear infinite',
				'right-scroll': 'right-scroll 20s linear infinite',
				'right-scroll-mobile': 'right-scroll 5s linear infinite',
			},
			colors: {primary: '#AD46FF'},
		},
	},
	plugins: [],
} satisfies Config;
