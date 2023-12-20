<script lang="ts">
	import track1 from '$lib/assets/sounds/tracks/ppkbgm3.mp3';
	import { onMount } from 'svelte';
	import { backgroundMusicPaused } from '$lib/stores/BackgroundMusicPaused';

	let audio_elem: HTMLAudioElement;
	let paused;

	backgroundMusicPaused.subscribe((p) => {
		paused = p;
		if (audio_elem) {
			if (paused) {
				audio_elem.pause();
			} else {
				audio_elem.play();
			}
		}
	});

	onMount(() => (audio_elem.volume = 0.85));
</script>

<div
	class:paused
	class="hidden audio-container bg-gray-100 dark:bg-gray-900 flex items-center max-w-[90vw]"
>
	<a>
		<svg
			class=" w-6 h-6 inline"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
	</a>

	<div class="">
		<audio
			class="inline dark:bg-gray-900"
			on:play={() => backgroundMusicPaused.set(false)}
			controls
			loop
			bind:this={audio_elem}
			preload="auto"
			src={track1}
		/>
	</div>
</div>

<style>
	.audio-container {
		@apply p-1  fixed bottom-4 left-[50%] transform -translate-x-1/2 mx-auto z-10 rounded-md transition-all;
	}
	.paused {
		@apply -bottom-16;
	}
</style>
