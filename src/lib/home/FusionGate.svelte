<script>
	import FancyButtonLink from '$lib/common/FancyButtonLink.svelte';
	import gateRing from '$lib/assets/home/fusion-gate/fusion-gate-ring.png?w=350;700;1400&webp&srcset';
	import gateBase from '$lib/assets/home/fusion-gate/fusion-gate.png?w=350;700;1400&webp&srcset';
	import gateCore from '$lib/assets/home/fusion-gate/fusion-gate-portal.png?w=350;700;1400&webp&srcset';
	import ScrollToSectionLink from './ScrollToSectionLink.svelte';
</script>

<section id="minting" class="bg-purple-dark py-20 container">
	<div class="text-center max-w-lg mx-auto">
		<h3 class="text-4xl font-extrabold mb-8 md:mb-20">Arcana Shrine</h3>
	</div>
	<div class="flex flex-col lg:flex-row justify-center lg:space-x-8 mb-8 lg:mb-20">
		<div class="fusion-gate-container">
			<img
				loading="lazy"
				height="1400"
				width="1400"
				srcset={gateRing}
				alt="Arcana Shrine"
				class="absolute left-0 right-0 animate-spin-slow duration-1000"
			/>
			<img
				loading="lazy"
				height="1400"
				width="1400"
				srcset={gateBase}
				alt="Arcana Shrine"
				class="absolute left-0 right-0"
			/>
			<img
				loading="lazy"
				height="1400"
				width="1400"
				srcset={gateCore}
				alt="PewPew Kingdom Fusion Gate Core"
				class="absolute left-0 right-0 animate-pulse"
			/>
		</div>
		<div class="lg:max-w-sm xl:max-w-md">
			<p class="mb-8">
				The kingdom will have its own method(s) of generating new PewPew NFTs called “Arcane
				Minting” designed to assist players in the game’s progression using in-game crafting
				materials. Shrines are powered by Arcane Mystery Moon Orbs <b>AMMO</b> that is the soft currency
				for the ecosystem.
			</p>

			<p class="mb-8">
				Following the game’s beta version 0.1 release, there will be an initial airdrop allocation
				to <b>$PPP</b> PewPew Prism holders in X amounts of <b>AMMO</b> proportional to factors such
				as <b>$PPP</b> time held and ecosystem participation i.e. game alpha testing, and PewPew NFT
				interactions.
			</p>

			<p class="mb-8">
				Team treasury will bootstrap the initial liquidity pools for <b>AMMO</b> tokens and will not
				have any significant allocation aside from the minimal required amount for development
				testing and casual play.
				<b>AMMO</b> fair launch will be completely driven by PewPew ecosystem activities and transactions.
			</p>
			<div class="text-center">
				<div class="mx-auto dark">
					<!-- <FancyButtonLink
						onClick={() => {
							alert('no BFF contract yet');
							return false;
						}}
					>
						Play
					</FancyButtonLink> -->
				</div>
			</div>
		</div>
	</div>
	<div class="hidden md:flex container justify-center items-center h-30">
		<ScrollToSectionLink href="#team" scrollTo={{ element: '#team', offset: -100 }} />
	</div>
</section>

<style>
	.fusion-gate-container {
		@apply mb-8 md:mb-0 lg:pb-0 w-72 max-w-[90%] md:w-full sm:w-96 md:max-w-md xl:max-w-xl mx-auto lg:mx-0 relative h-72 max-h-72 sm:h-96 sm:max-h-96;
	}

	@screen md {
		.fusion-gate-container {
			height: 500px;
			max-height: 100%;
		}
	}

	@screen lg {
		.fusion-gate-container {
			height: 700px;
			max-height: 100%;
		}
	}
</style>
