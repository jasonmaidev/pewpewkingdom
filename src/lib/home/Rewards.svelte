<script lang="ts">
	import logo from '$lib/assets/logos/prism.png?w=215;430&webp&srcset';
	import chest from '$lib/assets/home/rewards-chest.png?w=300;600&webp&srcset';
</script>

<section id="rewards" class="mx-auto bg-purple-dark">
	<div class="text-center container mx-auto flex justify-center relative h-32">
		<h3 class="text-4xl font-extrabold mb-4 shrink">PewPew Prism</h3>
		<img
			srcset={chest}
			alt="Chest"
			width="300"
			height="226"
			loading="lazy"
			decoding="async"
			class="hidden sm:block right-[0] md:right-[10%] lg:right-[16%] xl:right-[24%] 2xl:right-[28%] absolute h-40 w-auto -top-14"
		/>
	</div>

	<div class="mb-8 md:mb-20 max-w-lg mx-auto">
		<h6>
			The medium which powers the play-to-own ecosystem must be well-distributed and carefully
			designed. A decentralized gaming ecosystem should have the majority supply of its token sealed
			and attainable only via active engagement, skin-in-the-game staking, and genuine
			participation.
		</h6>
	</div>
	<div class="max-w-4xl mx-auto">
		<div class="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-20">
			<img
				height="339"
				width="430"
				loading="lazy"
				decoding="async"
				srcset={logo}
				alt="PPK Logo Icon"
				class="pb-8 md:pb-0 w-56 md:w-1/3"
			/>
			<div class="">
				<p class="rewards-textbox">
					The majority of <b>$PPP</b> supply is attainable only through playing (35%) and staking (20%)
					in order to ensure the steady development and proliferation of the MegaVerse.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	@screen md {
		p {
			@apply border-8 border-purple-dark rounded-full py-3 px-6;
			box-shadow: 5px 8px 20px 5px rgb(74, 0, 158);
			padding: 2rem 3rem;
		}
	}
</style>
