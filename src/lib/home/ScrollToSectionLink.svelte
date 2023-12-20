<script lang="ts">
	import nextSectionSrcSet from '$lib/assets/home/game/unit-selected-indicator.png?width=50;100;150&webp&srcset';
	import { scrollto } from 'svelte-scrollto';

	export let href: string = '#_';
	export let scrollTo: any = { element: href };
	export let alt = 'Next section';

	if (!scrollTo.element) {
		scrollTo.element = href;
	}
</script>

<a use:scrollto={scrollTo} {href}>
	<img
		loading="lazy"
		decoding="async"
		width="150"
		height="114"
		srcset={nextSectionSrcSet}
		{alt}
		class="w-10 md:w-14 h-auto animate-bounce"
	/>
</a>
