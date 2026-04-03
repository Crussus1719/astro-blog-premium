/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-primary': '#6366f1',
				'brand-secondary': '#ec4899',
				'surface': '#0f172a',
				'surface-soft': '#1e293b',
				'surface-glass': 'rgba(15, 23, 42, 0.7)',
			},
			fontFamily: {
				primary: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
