<script lang="ts">
	import { onDestroy, tick } from 'svelte';
	import { writable } from 'svelte/store';

	import Socials from './Socials.svelte';

	export let modalShowStore = writable(false);

	let show_modal = false;
	let show_backdrop = false;

	const unsubscribe = modalShowStore.subscribe(async (entering) => {
		// switch order depending on entering or exiting
		if (entering) {
			show_backdrop = entering;
			await tick();
			window.requestAnimationFrame(() => (show_modal = entering));
		} else {
			show_modal = entering;
			await tick();
			setTimeout(() => {
				show_backdrop = entering;
			}, 400);
		}
	});

	onDestroy(unsubscribe);
</script>

<!-- https://tailwindui.com/components/application-ui/overlays/modals -->
<div
	class:hidden={!show_backdrop}
	class="fixed z-10 inset-0 overflow-y-auto"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
	on:click={(e) => {
		e.preventDefault();
		modalShowStore.set(false);
	}}
>
	<div
		class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
	>

		<div class:show_modal class="modal-bg" aria-hidden="true" />

		<!-- This element is to trick the browser into centering the modal contents. -->
		<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
			>&#8203;</span
		>

		<div on:click={(e) => e.stopPropagation()} class:show_modal class="modal">
			<div class="bg-white dark:bg-purple px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
				<a
					href="#_"
					title="Close modal"
					on:click={(e) => {
						e.preventDefault();
						modalShowStore.set(false);
					}}
					class="dark:text-white font-mono font-extrabold float-right"
				>
					✖
				</a>
				<div class="clear-both" />
				<div class="sm:flex sm:items-start">
					<div class="mt-3 text-center sm:mt-0 w-full">
						<h3 class="text-lg leading-6 font-bold text-gray-900" id="modal-title">
							Join our commmunity!
						</h3>
						<div class="mt-2">
							<p class="text-gray-500">
								Come and join us, we're excited to show you what we've been working on. ❤️
							</p>
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-bg {
		@apply fixed inset-0 bg-indigo-800 bg-opacity-75 transition-opacity ease-out opacity-0 duration-500;
	}
	.modal-bg.show_modal {
		@apply opacity-100;
	}
	.modal {
		@apply ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full;
	}
	.modal.show_modal {
		@apply opacity-100 translate-y-0 sm:scale-100;
	}
</style>
