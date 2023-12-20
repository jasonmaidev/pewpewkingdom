<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import ColorSchemeSwitcher from '$lib/header/ColorSchemeSwitcher.svelte';
	import debouncer from '$lib/utils/debouncer';
	import logoBgImg from '$lib/assets/logos/logo-bg-static.png?w=400;800&webp&srcset';
	import logoBgActiveImg from '$lib/assets/logos/logo-bg-hover.png?w=400;800&webp&srcset';
	import logoImg from '$lib/assets/logos/logo-pewpew-pop.png?w=300;600&webp&srcset';
	import { WhitepaperUrl, FaqsUrl } from '$lib/constants';
	import CommunityModal from '$lib/common/CommunityModal.svelte';
	import BackgroundMusicControl from '$lib/header/BackgroundMusicControl.svelte';

	let is_home = $page.url.pathname === '/';
	let menu_open = false;
	let header_top = is_home;
	let community_modal_store = writable(false);

	if (browser) {
		const scrollHandler = debouncer((_) => {
			header_top = document.scrollingElement.scrollTop === 0;
		});
		page.subscribe((cur_page) => {
			is_home = $page.url.pathname === '/';
			if (is_home) {
				window.addEventListener('scroll', scrollHandler, { passive: true });
				window.dispatchEvent(new CustomEvent('scroll'));
			} else {
				window.removeEventListener('scroll', scrollHandler);
			}
		});
	}
</script>

<header class:header_top class:dark={header_top} class="fixed">
	<nav>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between">
				<div class="flex justify-between items-center">
					<div class="h-14 lg:h-24 relative">
						<a
							sveltekit:prefetch
							href="/#welcome"
							aria-current={$page.url.pathname === '/' ? 'page' : false}
							class="block group"
						>
							<img
								class="logo-bg"
								height="348"
								width="700"
								srcset={logoBgImg}
								alt="PPK logo background"
							/>
							<img
								class="logo-bg logo-bg-active opacity-0 group-hover:opacity-100"
								height="348"
								width="700"
								srcset={logoBgActiveImg}
								alt="PPK logo background"
							/>
							<img class="logo" height="297" width="700" srcset={logoImg} alt="PPK logo" />
							<h1 class="sr-only">PewPew Kingdom</h1>
						</a>
					</div>
					<div class="hidden pl-8 pt-8 pb-8 lg:block">
						<div class="flex items-baseline space-x-4">
							<a
								href={"#"}		
								class="inactive nav-link"
								aria-current={false}
							>
								<span class=""> WhitePaper </span>
							</a>

							<a href={"#"}  class="inactive nav-link">
								<span class=""> FAQ </span>
							</a>

							<a
								href="#_"
								on:click={(e) => {
									e.preventDefault();
									community_modal_store.update((val) => !val);
								}}
								class="inactive nav-link"
							>
								<span class=""> Community </span>
							</a>
						</div>
					</div>
				</div>
				<!-- Day/Night Icon -->
				<div class="hidden lg:block">
					<div class="ml-4 flex items-center lg:ml-6">
						<div class="">
							<BackgroundMusicControl />
						</div>

						<div class="">
							<ColorSchemeSwitcher />
						</div>

						<!-- TODO wallet connection -->
					</div>
				</div>
				<!-- Day/Night Icon -->
				<div class="flex lg:hidden">
					<div class="mr-2 pt-1 flex items-center justify-center">
						<div class="">
							<BackgroundMusicControl />
						</div>
						<div class="">
							<ColorSchemeSwitcher />
						</div>
					</div>

					<!-- Mobile menu button -->
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 mr-2 rounded-md
							hover:text-white hover:bg-gray-300 focus:outline-none"
						aria-controls="mobile-menu"
						aria-expanded={menu_open}
						on:click={() => (menu_open = !menu_open)}
					>
						<span class="sr-only">Open main menu</span>
						<!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden={!menu_open}
							class:block={!menu_open}
							class:hidden={menu_open}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden={menu_open}
							class:block={menu_open}
							class:hidden={!menu_open}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		{#if menu_open}
			<div class="lg:hidden dark:bg-purple -z-10" id="mobile-menu" transition:fade>
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<a
						href={WhitepaperUrl}
						class="inactive mobile-nav-link"
						
						aria-current={false}
					>
						<span class=""> WhitePaper </span>
					</a>

					<a href={FaqsUrl}  class="inactive mobile-nav-link">
						<span class=""> FAQ </span>
					</a>

					<a
						href="#_"
						on:click={(e) => {
							e.preventDefault();
							community_modal_store.update((val) => !val);
						}}
						class="inactive mobile-nav-link"
					>
						<span class=""> Community </span>
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>

<div class:hidden={is_home} class="mb-20 lg:mb-64"><!-- intentionally blank --></div>

<CommunityModal modalShowStore={community_modal_store} />

<style>
	header {
		top: 0;
		width: 100%;
		@apply transition-all duration-500 bg-white text-purple dark:text-white shadow-2xl z-20;
	}

	header.header_top {
		@apply bg-opacity-0 text-purple dark:text-white shadow-none;
	}

	:global(.dark) header {
		@apply bg-purple;
	}

	:global(.dark) header.header_top {
		@apply bg-opacity-0;
	}

	.inactive {
		@apply hover:bg-cyan-400 hover:text-white dark:text-gray-300;
	}

	.active {
		@apply bg-purple-900;
		@apply text-white;
	}

	.nav-link {
		@apply px-5 py-2 rounded-full text-base font-semibold;
	}

	.mobile-nav-link {
		@apply block px-3 py-4 first-of-type:mt-8 rounded-md text-sm font-medium;
	}

	.logo {
		@apply mx-auto absolute top-4 right-1 left-0 md:ml-8 lg:ml-[5.5rem] lg:top-6;
		max-width: 5rem;
		margin-top: -0.5rem;
	}

	@screen lg {
		.logo {
			max-width: 15rem;
			margin-top: -0.5rem;
		}
	}

	.logo-bg {
		z-index: -1;
		max-width: 10rem;
		@apply -mt-2 transition-opacity;
		transition-duration: 1.2s;
	}

	.logo-bg-active {
		z-index: 0;
		@apply absolute top-0 left-0 right-0 w-full;
	}

	@screen lg {
		.logo-bg {
			max-width: 26rem;
		}
	}
</style>
