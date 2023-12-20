<script lang="ts">
	import { browser } from '$app/env';

	import FancyButtonLink from '$lib/common/FancyButtonLink.svelte';
	import debouncer from '$lib/utils/debouncer';
	import { hasFinePointer } from '$lib/utils/device';
	import feature1 from '$lib/assets/home/hero/pewpew-hero-crew2.png?w=400;800;1600&webp&srcset';
	import feature2 from '$lib/assets/home/hero/pewpew-hero-crew2.png?w=400;800;1600&webp&srcset';
	import bgPosterDark from '$lib/assets/home/hero/pew-pew-hero-bg-night-boom.jpg?w=1920&webp';
	import mountainLight from '$lib/assets/home/hero/hero-cloud-mountain-foreground-day.png?w=640;1280;1920&webp&srcset';
	import mountainDark from '$lib/assets/home/hero/hero-cloud-mountain-foreground-night.png?w=640;1280;1920&webp&srcset';

	/**
	 * PPK feature FX on mouse move
	 */
	const dampening_effect = 100; // higher value lessens the tilt effect
	let ax = 0;
	let ay = 0;

	function executeIfFinePointerDevice(fn: (...args: any[]) => any): void {
		if (hasFinePointer()) {
			fn();
		}
	}

	function layer_tilt_style(x: number, y: number) {
		return `transform: translateX(${x}px) translateY(${y}px);
		-webkit-transform: translateX(${x}px) translateY(${y}px);
		-moz-transform: translateX(${x}px) translateY(${y}px)`;
	}

	function onMouseMove(e: MouseEvent) {
		ax = (window.innerWidth / 2 - e.pageX) / dampening_effect;
		ay = (window.innerHeight / 2 - e.pageY) / dampening_effect;
		return true;
	}

	let cta_hovered = false;

	function onMouseEnter() {
		cta_hovered = true;
	}

	function onMouseLeave() {
		cta_hovered = false;
	}

	/**
	 * Bashi feature carousel
	 */
	let features = [1, 2];
	let feature_selected = 1;
	let feature_imgs = {
		1: feature1,
		2: feature2
	};
</script>

<div class="hero-bg-container">
	<div class="hero-bg relative">
		<div class="absolute left-0 top-0 bottom-0 right-0 overflow-hidden">
			<img class="object-cover h-full w-full" src={bgPosterDark} width="1920" height="1080" />
			<div class=" bg-opacity-100 absolute left-0 top-0 bottom-0 right-0 " />
		</div>
		<img
			class="bg-mountain dark:hidden"
			srcset={mountainLight}
			width="3800"
			height="1422"
			alt="PewPew Kingdom game hero background"
		/>
		<img
			class="bg-mountain hidden dark:block"
			srcset={mountainDark}
			width="3800"
			height="1422"
			alt="PewPew Kingdom game hero background"
		/>
	</div>
	<section
		id="welcome"
		on:mousemove={debouncer(function (e) {
			executeIfFinePointerDevice(onMouseMove.bind(this, e));
		})}
	>
		<div class="dark hero container grid md:grid-cols-2 justify-center items-center md:h-full z-10">
			<div
				class="order-2 sm:mb-16 md:order-none flex flex-col flex-1 justify-center items-center mx-auto"
			>
				<h1>
					<span
						class="hero-text mt-4 sm:mt-0 pb-0 md:pb-2 block text-xl md:text-3xl lg:text-5xl font-standout font-extrabold md:text-left text-center"
					>
						Legendary Artillery<br />
						Open Economy<br />
						Play-to-Play
					</span>
				</h1>

				<div>
					<div class="block pt-5 text-center md:text-left">
						<div
							class="inline-block "
							on:mouseenter={debouncer(function (e) {
								executeIfFinePointerDevice(onMouseEnter.bind(this, e));
							})}
							on:mouseleave={debouncer(function (e) {
								executeIfFinePointerDevice(onMouseLeave.bind(this, e));
							})}
						>
							<FancyButtonLink href="#">
								<span class="relative">Coming Soon</span>
							</FancyButtonLink>
						</div>
					</div>
				</div>
			</div>

			<div class="lg:pb-20">
				<div
					on:mouseenter={debouncer(function (e) {
						executeIfFinePointerDevice(onMouseEnter.bind(this, e));
					})}
					on:mouseleave={debouncer(function (e) {
						executeIfFinePointerDevice(onMouseLeave.bind(this, e));
					})}
					class="tilt-container relative flex flex-col flex-1 justify-center mx-auto md:my-0"
				>
					{#each features as feature}
						<div
							class:opacity-1={feature === feature_selected}
							class:opacity-0={feature !== feature_selected}
							class="tilt transition-opacity duration-1000 ease-in-out h-auto m-auto absolute left-0 right-0"
							style={layer_tilt_style(ax, ay)}
						>
							<picture class="mx-auto block" class:animate-bounce={feature === feature_selected}>
								<img
									class:scale-110={cta_hovered}
									srcset={feature_imgs[feature]}
									width="810"
									height="810"
									alt="PewPew Kingdom NFT Mascot"
									class="duration-500"
								/>
							</picture>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.hero-bg-container {
		@apply flex items-center justify-center mx-auto mb-36 lg:mb-44 xl:mb-72;
	}
	.hero-bg-container,
	.hero-bg,
	video {
		@apply h-screen min-h-[700px] max-h-[1360px];
	}

	.hero-bg,
	video {
		@apply absolute left-0 top-0 bottom-0 right-0;
	}

	video {
		@apply w-full;
	}

	.bg-mountain {
		@apply absolute left-0 right-0  bottom-[-15vw];
		width: 100vw;
		max-width: 100%;
		overflow-x: hidden;
	}

	section {
		@apply py-32 sm:pt-16 md:pb-0 md:pt-16 grid w-full h-screen min-h-[700px] max-h-[1000px] md:max-h-[100%];
		perspective: 1000px;
		transform-style: preserve-3d;
		overflow-x: hidden;
	}

	.tilt-container {
		transform-style: flat;
		perspective: 1000px;
	}

	.tilt {
		pointer-events: none;
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}

	picture {
		display: block;
		transform-style: preserve-3d;
		max-width: 100%;
		height: auto;
		width: 90vmin;
	}

	.tilt-container {
		height: auto;
		min-height: 200px;
		width: 80vmin;
	}

	@screen sm {
		picture,
		.tilt-container {
			width: 65vmin;
		}
	}

	@screen md {
		picture,
		.tilt-container {
			width: 60vmin;
		}
	}

	@screen xl {
		picture,
		.tilt-container {
			width: 80vmin;
		}
	}

	@screen xl {
		.hero {
			width: 1200px;
		}
	}

	picture img {
		max-width: 100%;
		max-height: 100%;
		transform-style: preserve-3d;
	}

	.animate-bounce {
		animation: bounce 2s infinite;
		animation-delay: 0.8s;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0px);
			animation-timing-function: ease-in-out;
		}
		50% {
			transform: translateY(2px);
			animation-timing-function: ease-in-out;
		}
	}

	.hero-text {
		@apply text-2xl md:text-4xl xl:text-[3.25rem];
		line-height: 1.15;
		text-shadow: 2px 2px 4px rgb(74 57 216 / 50%);
	}
</style>
