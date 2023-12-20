<script lang="ts">
	import { browser } from '$app/env';
	import { onMount, onDestroy } from 'svelte';
	import debouncer from '$lib/utils/debouncer';
	import controller_url from '$lib/assets/home/controller.png?width=500;750;1000&webp&srcset';
	import screenshot from '$lib/assets/home/game/pewpew-teaser.png?width=500;750;1000&webp&srcset';
	import FancyButtonLink from '$lib/common/FancyButtonLink.svelte';
	import { backgroundMusicPaused } from '$lib/stores/BackgroundMusicPaused';
	import ScrollToSectionLink from './ScrollToSectionLink.svelte';

	/**
	 * Game scene intro animation trigger
	 */
	let container: HTMLDivElement;
	let observing = false;
	let interactable = false;
	let scroll_progress = 0;
	if (browser) {
		let observer = new IntersectionObserver(
			(entries) => {
				if (document.scrollingElement.scrollTop >= container.clientHeight + container.offsetTop) {
					scroll_progress = 1;
					requestAnimationFrame(enter_game_scene);
					return;
				}
				scroll_progress = entries[0].intersectionRatio >= 0.7 ? 1 : entries[0].intersectionRatio;
				if (entries[0].isIntersecting) {
					requestAnimationFrame(enter_game_scene);
				} else {
					observing = false;
					interactable = false;
				}
			},
			{
				threshold: Array.from({ length: 100 }, (_, i) => (i + 1) / 100.0)
			}
		);

		onMount(() => {
			observing = true;
			interactable = false;
			observer.observe(container);
		});

		onDestroy(() => {
			observing = false;
			interactable = false;
			if (observer) {
				observer.unobserve(container);
			}
		});
	}

	function enter_game_scene() {
		observing = true;
		setTimeout(() => {
			interactable = true;
		}, 2500);
	}

	if (browser) {
		/**
		 * Game scene needs to be a square, fix when resizing
		 */
		let game_scene_resizing = debouncer(function () {
			container.style.height = `${container.clientWidth}px`;
		});
		window.onresize = game_scene_resizing;
		game_scene_resizing();
	}

	/**
	 * Video snapshot
	 */
	const volume = 0.95;
	let snapshotVideo: HTMLVideoElement;
	let snapshot_vid_on_play = () => {
		backgroundMusicPaused.set(true);
	};
	if (browser) {
		onMount(() => {
			snapshotVideo.volume = volume; //default volume

			// pause background music when playing
			snapshotVideo.addEventListener('play', snapshot_vid_on_play);
		});
		const unsubscribe_bg_music = backgroundMusicPaused.subscribe((paused) => {
			if (!paused && snapshotVideo && !snapshotVideo.paused) {
				snapshotVideo.pause();
			}
		});
		onDestroy(() => {
			unsubscribe_bg_music();
			snapshotVideo.removeEventListener('play', snapshot_vid_on_play);
		});
	}
</script>

<section class="px-0 -mb-1">
	<div class="relative">
		<div class="game-controller-bg -mb-1">
			<svg
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				class="h-full w-full text-purple-dark fill-current"
			>
				<path
					d="M-10.20,91.28 C240.52,180 300.85,-29.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
				/>
			</svg>
		</div>
		<div class="game-controller-container">
			<div class="grid md:grid-cols-2 grid-cols-1 px-8 ">
				<p class="pb-8 md:pb-16">
					There are plenty of clever and cheeky ways to destroy your opponents and discovering them
					as well as creating new ones will be all the rage when this game goes live!
				</p>
				<img
					loading="lazy"
					decoding="async"
					width="1000"
					height="729"
					srcset={controller_url}
					alt="Game Controller"
					class="game-controller"
				/>
			</div>
		</div>
		<div class="bg-purple-dark pb-20 md:pb-10 -mb-4" />
	</div>

	<div class="dark bg-purple-dark py-10 pb-60">
		<div class="container max-w-6xl">
			<div class="grid xl:grid-cols-2 items-center justify-center m-8 gap-4">
				<img
					width="800"
					height="428"
					srcset={screenshot}
					alt="PewPew Demo Screenshot"
					class="xl:max-w-full max-w-full max-h-[85vh] sm:max-w-xl mx-auto px-4 sm:px-0"
				/>

				<div id="ppkdemo" class="max-w-lg mb-8 xl:mb-0 xl:mx-auto text-center xl:text-left">
					<h3 class="font-extrabold text-3xl">Demo in Development!</h3>
					<div class="mt-4">
						<div class="flex items-center justify-center mt-8">
							<p>
								We set out to deliver far more than just an art collection. We are building a playable demo 
								to showcase our development fire power and creative capacity as an indie studio. 
								This is just a preview of what's possible as we are currently able
								to build on a part-time basis only when we are not at our day jobs.
							</p>
						</div>
						<br />
						<b class="text-pink-400">Help us bring PewPew Kingdom to life!</b>
					</div>
				</div>
			</div>
		</div>
		<div class="md:flex container justify-center items-center py-8 text-center">
			<FancyButtonLink href="#ppkdemo">
				<span class="relative">Coming Soon</span>
			</FancyButtonLink>
		</div>
		<br />
		<br />
		<div class="hidden md:flex container justify-center items-center h-30">
			<ScrollToSectionLink href="#rewards" scrollTo={{ element: '#rewards', offset: 100 }} />
		</div>
	</div>
</section>

<style>
	.game-scene-section {
		@apply w-full h-auto px-0 -mb-1 bg-purple-dark overflow-hidden mx-auto;
	}

	.game-scene {
		@apply flex justify-center mx-auto items-center text-center relative bg-clip-border max-w-[2400px];
		width: 100vmin;
		height: 100vmin;
		max-width: 100%;
	}

	.layer {
		max-width: 100%;
		position: absolute;
	}

	.layer img {
		margin: 0 auto;
	}

	.animate-bg {
		transition-timing-function: linear;
		transition-duration: 0.7s;
		transition-property: bottom, top, left, opacity, transform;
		opacity: 0;
	}

	.animate-bg.observing {
		opacity: 1;
	}

	.logo {
		opacity: 0;
		top: 15vmin;
		width: 90vmin;
		margin: 0 auto;
	}

	.observing.logo {
		opacity: 1;
	}

	.observing.animate-bg {
		opacity: 1;
	}

	.clouds {
		width: 100vw;
		top: 50%;
		transform: scale(var(--var-scroll-progress));
	}

	.clouds.observing {
		top: 0;
	}

	.clouds.observing img {
		animation: bounce-bottom 2s infinite;
		animation-delay: 0.25s;
	}
	.sun {
		width: 40vmin;
		height: 40vmin;
		bottom: 60%;
		opacity: 1;
	}

	.mountains {
		max-width: 99vw;
		width: 99vw;
		margin: 0 auto;
		bottom: 50%;
	}
	.bg-board {
		@apply bg-purple-dark w-full h-full;
		position: absolute;
		bottom: -50%;
	}

	.board {
		width: 100vmin;
		bottom: -50%;
	}

	.board.observing {
		bottom: 25%;
	}

	.grass {
		top: 57%;
	}

	.grass-left {
		width: 10vmin;
		left: 0;
	}

	.grass-right {
		right: 0;
		width: 20vmin;
	}

	.control-container {
		@apply flex justify-center items-center bottom-0 -mb-8 md:mb-0;
		position: absolute;
	}

	.game-controller-bg {
		@apply absolute bottom-20 md:bottom-5 w-full;
		z-index: -1;
	}
	@screen xl {
		.game-controller-bg svg {
			max-height: 400px;
		}
	}
	.game-controller {
		@apply w-1/2 md:w-7/12 ml-auto mr-8 mb-0 md:mb-20 lg:mb-8;
		width: 82%;
	}

	.game-controller-container {
		@apply max-w-4xl mx-auto;
	}

	video::-webkit-media-controls-panel {
		background-image: none !important;
		filter: brightness(0.8);
	}
</style>
