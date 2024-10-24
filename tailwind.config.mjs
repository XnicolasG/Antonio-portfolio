/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'coverPhoto' : "url('/img/cover_photo.jpg')"
			},
			fontFamily:{
				Belgiano : ['Belgiano', 'sans-serif']
			},
			textGradient: {
				'deg-45': '45deg',
			  },
		},
	},
	plugins: [],
}
