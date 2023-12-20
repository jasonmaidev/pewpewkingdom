<script lang="ts">
	import logoImg from '$lib/assets/logos/footer-logo.png?w=300;600&webp&srcset';
	import Socials from '$lib/common/Socials.svelte';
	import { WhitepaperUrl } from '$lib/constants';
</script>

<footer class="bg-purple-dark">
	<div
		class="grid grid-cols-1 md:grid-cols-3 justify-center items-center container px-4 py-8 md:px-0"
	>
		<div>
			<img
				srcset={logoImg}
				width="600"
				height="254"
				loading="lazy"
				alt="PPK Logo"
				class="w-full max-w-xs mx-auto p-4 footer-logo"
			/>
		</div>
		<Socials />
		<nav class="">
			<ul class="grid grid-cols-2 text-center font-normal text-m text-white">
				<li>
					<a href="/terms">Terms & Conditions</a>
				</li>

				<li>
					<a href="/privacy">Privacy Policy</a>
				</li>
				<li class="text-center">
					<a href="{WhitepaperUrl}/team/about-us" target="_blank">
						<span class="text-white">
							Outer Heaven Games
							<!-- It is not enough to just live, we strive to change the world. -->
						</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="h-[10vh]"><!-- intentionally blank --></div>
</footer>

<style>
	nav a {
		@apply my-2 block;
	}

	.footer-logo {
		max-width: 24rem;
		padding-bottom: 3rem;
	}
</style>
