<script lang="ts">
	import raiden from '$lib/assets/home/team/raiden-pfp.jpg?width=500;1000&webp&srcset';
	import bigboss from '$lib/assets/home/team/bigboss-pfp.jpg?width=500;1000&webp&srcset';
</script>

<section
	id="team"
	class="min-h-screen h-auto text-center flex flex-col justify-center items-center"
>
	<h3 class="text-4xl font-black mb-8">TEAM</h3>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div class="card relative">
			<div class="absolute left-4 top-4 text-purple-light">

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
			</div>

			<div class="px-8 py-8">
				<img srcset={raiden} alt="zeroXraiden PPK Founder" />
			</div>

			<h5 class="text-xl font-semibold py-4">zeroXraiden</h5>

			<p class="pb-4">
				Creative Director - Frontend / Game Design
				<br />
				(contributions: Alchemist, GenieXYZ, CaliDAO)
			</p>
		</div>

		<div class="card relative">
			<div class="absolute left-4 top-4 text-purple-light">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
			</div>

			<div class="px-8 py-8">
				<img srcset={bigboss} alt="zeroXBigBoss PPK Founder" />
			</div>

			<h5 class="text-xl font-semibold py-4">zeroXbigboss</h5>

			<p class="pb-4">
				CTO - Solidity / Full Stack / Unity / C#
				<br />
				(contributions: Porsche, CaliDAO)
			</p>
		</div>

	</div>
</section>

<style>
	.card {
		@apply max-w-sm;
	}

	.card img {
		@apply rounded-full;
	}
</style>
