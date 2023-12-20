import { writable } from 'svelte/store';
import { browser } from '$app/env';

const STORE_PREFIX = 'theme';

const themeLocal = (browser ? localStorage.getItem(`${STORE_PREFIX}`) : null) || '';

const systemTheme = () => {
	if (browser) {
		const checkDark = window && window.matchMedia('(prefers-color-scheme: dark)').matches;
		return checkDark ? 'dark' : '';
	} else {
		return '';
	}
};

const theme = writable(themeLocal || systemTheme());

theme.subscribe((value) => {
	if (!browser) {
		return;
	}
	value === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
});

theme.subscribe((value) => {
	if (!browser) {
		return;
	}
	if (themeLocal !== value) {
		localStorage.setItem(`${STORE_PREFIX}`, value);
	}
});

export { theme };
