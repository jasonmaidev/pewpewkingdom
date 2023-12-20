import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			plugins: [imagetools({ defaultDirectives: new URLSearchParams('quality=100') })]
		}
	}
};

export default config;
