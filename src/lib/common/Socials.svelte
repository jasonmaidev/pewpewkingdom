<script lang="ts">
	import logoDiscord from '$lib/assets/logos/partners/discord.png?w=60&webp&srcset';
	import logoTwitter from '$lib/assets/logos/partners/twitter.png?w=60&webp&srcset';
	import { DiscordUrl, TwitterUrl } from '$lib/constants';
</script>

<div
	class="socials max-w-xs mx-auto gap-x-8 grid grid-cols-2 grid-rows-1 text-center justify-center items-center"
>
	<a href={DiscordUrl}>
		<img srcset={logoDiscord} height="63" width="63" loading="lazy" alt="Discord Logo" />
		<span class="sr-only">PewPew Kingdom Discord</span>
	</a>
	<a href={TwitterUrl}>
		<img srcset={logoTwitter} height="63" width="63" loading="lazy" alt="Twitter Logo" />
		<span class="sr-only">PewPew Kingdom Twitter</span>
	</a>
</div>

<style>
	.socials img {
		@apply h-10 mx-auto my-4 w-auto;
	}
</style>
