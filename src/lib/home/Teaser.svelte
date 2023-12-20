<script lang="ts">
	import { fade } from 'svelte/transition';

	import teaserImgLight1 from '$lib/assets/home/teasers/mechi-zaki-day.png?w=300;600&webp&srcset';
	import teaserImgLight2 from '$lib/assets/home/teasers/mechi-zeon-day.png?w=300;600&webp&srcset';
	import teaserImgLight3 from '$lib/assets/home/teasers/mechi-mystery-day.png?w=300;600&webp&srcset';
	import teaserImgDark1 from '$lib/assets/home/teasers/mechi-zaki-night.png?w=300;600&webp&srcset';
	import teaserImgDark2 from '$lib/assets/home/teasers/mechi-zeon-night.png?w=300;600&webp&srcset';
	import teaserImgDark3 from '$lib/assets/home/teasers/mechi-mystery-night.png?w=300;600&webp&srcset';
	import mechiCollage from '$lib/assets/home/teasers/nft-collage.png?w=800;1600&webp&srcset';

	import { theme } from '$lib/stores/ColorScheme';
	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';
	import ScrollToSectionLink from './ScrollToSectionLink.svelte';

	let teasers = {
		light: {
			'1': teaserImgLight1,
			'2': teaserImgLight2,
			'3': teaserImgLight3
		},
		dark: {
			'1': teaserImgDark1,
			'2': teaserImgDark2,
			'3': teaserImgDark3
		}
	};
	let selected_theme = 'light';
	let selected_teaser = '1';

	theme.subscribe((new_theme) => {
		if (new_theme === 'dark') {
			selected_theme = 'dark';
		} else {
			selected_theme = 'light';
		}
	});

	let auto_play_timer: number;
	let auto_play_interval = 3000;
	let mounted = false;

	function clearAutoPlayTimer() {
		window.clearInterval(auto_play_timer);
	}
	function resetAutoPlayTimer() {
		clearAutoPlayTimer();
		auto_play_timer = window.setInterval(() => {
			let new_selected_teaser = (parseInt(selected_teaser) + 1).toString();
			if (!teasers[selected_theme].hasOwnProperty(new_selected_teaser)) {
				selected_teaser = '1';
			} else {
				selected_teaser = new_selected_teaser;
			}
		}, auto_play_interval);
	}

	if (browser) {
		onMount(() => {
			resetAutoPlayTimer();
			mounted = true;
		});

		onDestroy(() => {
			clearAutoPlayTimer();
		});
	}
</script>

<section
	id="teaser"
	class="py-20 md:py-8 lg:py-0 container items-center h-auto min-h-screen flex flex-col justify-center "
>
	<div>
		<h2 class="mt-0 md:mt-0 text-center text-4xl font-extrabold">Mechi</h2>
	</div>

	<div class="mx-auto py-8 grid md:grid-cols-2 justify-center gap-y-8 gap-x-8 sm:py-12 ">
		<div class="teaser-container max-w-full ">
			{#each Object.entries(teasers[selected_theme]) as [teaser, srcset]}
				<img
					transition:fade
					{srcset}
					class:absolute={selected_teaser !== teaser}
					class:opacity-0={selected_teaser !== teaser}
					class:opacity-1={selected_teaser === teaser}
					alt="PPK NFT"
					width="512"
					height="400"
					loading="lazy"
					async
					class="absolute transition-opacity duration-500 bottom-0 top-0 left-0 right-0 max-h-full w-auto mx-auto"
				/>
			{/each}
		</div>
		<div class="max-w-lg">
			<h3 class="mt-0 md:mt-0 text-3xl font-extrabold">
				Collectible & Competitive Play
			</h3>
			<p class="mt-4">
				Mechis are cute little mechanical, biological, and mystical steeds / vehicles of war within
				PewPew Kingdom and the surrounding MegaVerse. Every different Mechi comes with its iconic
				set of ammos and special shots that make for a whole lot of fireworks! They are piloted by
				awesome looking avatars that grant each Mechi with various stats and abilities.
				<br />
				<br />
				<b class="text-pink-400">
					There will be no onchain NFTs for Mechis. The NFTs will be crafted around the companion
					Avatars that operate them. Rest assured, they shall be nothing short of spectacular.👌
				</b>
			</p>
		</div>
	</div>
	<br />
	<br />
	<div class="hidden md:flex container justify-center items-center h-30">
		<ScrollToSectionLink href="#season1" scrollTo={{ element: '#story', offset: -100 }} />
	</div>
	<br />
	<br />
	<div id="season1" class="container mb-12">
		<h3 class="mt-0 md:mt-0 pb-8 text-center text-3xl font-extrabold">
			Season 1 : 20 Unique Mechis in The Making
		</h3>
		<img
			srcset={mechiCollage}
			alt="20 Mechis"
			width="900"
			height="675"
			loading="lazy"
			decoding="async"
			class="mx-auto hidden dark:block"
		/>
		<img
			srcset={mechiCollage}
			alt="20 Mechis"
			width="900"
			height="675"
			loading="lazy"
			decoding="async"
			class="mx-auto dark:hidden"
		/>
	</div>

	<div class="hidden md:flex container justify-center items-center h-30">
		<ScrollToSectionLink href="#story" scrollTo={{ element: '#story', offset: -100 }} />
	</div>
</section>

<style>
	.teaser-container {
		@apply h-72 max-h-72 sm:h-80 sm:max-h-80 relative;
	}

	@screen md {
		.teaser-container {
			height: 500px;
			max-height: 100%;
		}
	}

	@screen lg {
		.teaser-container {
			height: 600px;
		}
	}

	@screen xl {
		.teaser-container {
			height: 400px;
		}
	}

	@screen md {
		.nft-textbox {
			@apply rounded-full py-3 px-6;
			box-shadow: 5px 8px 20px 5px rgba(54, 55, 104, 0.21);
			padding: 2rem 3rem;
		}
	}
</style>
