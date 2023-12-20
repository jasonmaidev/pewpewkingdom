<script lang="ts">
	import gateRing from '$lib/assets/home/discord-portal2.png?w=350&webp&srcset';
	import { DiscordUrl } from '$lib/constants';
</script>

<div class="fixed bottom-0 right-10 z-10">
	<div class="link-container sizing flex justify-center items-end">
		<a target="_blank" class="z-10 " href={DiscordUrl}>
			<img width="350" height="375" srcset={gateRing} alt="Join PewPew Kingdom Discord!" />
			<span class="sr-only">Join PewPew Kingdom Discord!</span>
		</a>
	</div>
</div>

<style>
	.sizing {
		@apply h-[15vh] w-[20vmin];
	}
	.link-container {
		@apply relative rounded-md text-center;
	}
</style>
