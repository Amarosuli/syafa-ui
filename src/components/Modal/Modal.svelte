<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { modal } from '@components';
	import { fade } from 'svelte/transition';

	export let name: string = 'modal';
	export let overlay: boolean = true;

	modal.register(name);
	const listen = modal.listen(name);

	/** @param {'import("svelte/elements").KeyboardEventHandler'} event */
	function handleKeyDown(event: any) {
		if (event.keyCode === 27 || event.key === 'Escape' || event.code === 'Escape') {
			modal.hide(name);
		}
	}

	beforeNavigate(() => {
		modal.hide(name);
		modal.deregister(name);
	});
</script>

<svelte:document on:keydown={handleKeyDown} />

{#if $listen}
	<div id={name} transition:fade={{ duration: 200 }} class="modal {`${overlay ? 'overlay' : ''}`}">
		<slot />
	</div>
{/if}
