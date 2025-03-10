import type {Config} from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				slideRightToLeft: {
					'0%': {transform: 'translateX(-2%)'},
					'50%': {transform: 'translateX(100%)'},
					'100%': {transform: 'translateX(-2%)'},
				},
				slideTopToBottom: {
					'0%': {transform: 'translateY(0)'},
					'50%': {transform: 'translateY(-100%)'},
					'100%': {transform: 'translateY(0)'},
				},
			},
			animation: {
				slide: 'slideRightToLeft 10s linear infinite',
				'slide-y': 'slideTopToBottom 10s linear infinite',
				'spin-slow': 'spin 20s linear infinite',
				'spin-medium': 'spin 7s linear infinite',
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
