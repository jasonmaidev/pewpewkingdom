<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollToTop } from 'svelte-scrollto';

	import Hero from '$lib/home/Hero.svelte';
	import Teaser from '$lib/home/Teaser.svelte';
	import Game from '$lib/home/Game.svelte';
	import Story from '$lib/home/Story.svelte';
	import Rewards from '$lib/home/Rewards.svelte';
	import FusionGate from '$lib/home/FusionGate.svelte';
	import Team from '$lib/home/Team.svelte';

	onMount(scrollToTop);
</script>

<svelte:head>
	<title>PewPew Kingdom</title>
</svelte:head>

<div class="home">
	<Hero />

	<Teaser />

	<Story />

	<Game />

	<div class="bg-purple-dark text-white">
		<Rewards />

		<FusionGate />

		<Team />
	</div>
</div>
