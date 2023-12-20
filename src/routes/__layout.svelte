<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/env';
	import * as animateScroll from 'svelte-scrollto';
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import JoinDiscord from '$lib/common/JoinDiscord.svelte';
	import BackgroundMusicPlayer from '$lib/common/BackgroundMusicPlayer.svelte';

	// update window.location.hash
	animateScroll.setGlobalOptions({
		onDone: (element, _) => {
			if (element && element.id) {
				history.replaceState({}, '', `#${element.id}`);
			}
		}
	});

	if (browser) {
		const scrollToHandler = (e) => {
			let anchorNode: HTMLAnchorElement = e.target;
			while (anchorNode !== null && anchorNode.tagName !== 'A') {
				anchorNode = anchorNode.parentNode as HTMLAnchorElement;
			}
			if (
				anchorNode === null ||
				anchorNode.hash === '' ||
				document.querySelector(anchorNode.hash) === null
			) {
				return;
			}
			animateScroll.scrollTo({ element: anchorNode.hash, offset: -150 });
		};
		onMount(() => {
			document.addEventListener('click', scrollToHandler);
		});
		onDestroy(() => {
			document.removeEventListener('click', scrollToHandler);
		});
	}
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="any" /><!-- 32×32 -->
	<!-- <link rel="icon" href="/icon.svg" type="image/svg+xml">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	<link rel="manifest" href="/manifest.webmanifest"> -->
</svelte:head>

<Header />

<BackgroundMusicPlayer />
<JoinDiscord />

<main>
	<slot />
</main>

<Footer />
