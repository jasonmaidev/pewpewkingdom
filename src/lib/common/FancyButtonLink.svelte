<script lang="ts">
	export let onClick: (...args: any[]) => any = () => {
		return true;
	};
	export let href = '#_';
	export let className = '';
</script>

<a
	{href}
	on:click={onClick}
	class="relative inline-flex items-center justify-center px-12 py-8 overflow-hidden font-extrabold bg-violet-700 rounded-full group"
>
	<span
		class="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-400 rounded-full group-hover:w-56 group-hover:h-56"
	/>
	<span
		class="absolute inset-0 w-full h-full -mt-2 rounded-full opacity-5 bg-gradient-to-b from-transparent via-transparent "
	/>
	<span class="relative">
		<slot />
	</span>
</a>

<style>
	/** Fix safari transforms not ordering layers correctly*/
	a {
		transform-style: flat;
		perspective: 1000px;
	}
	.border-6 {
		border-width: 6px;
	}
</style>
