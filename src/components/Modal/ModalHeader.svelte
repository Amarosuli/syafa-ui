<script lang="ts">
	import { onMount } from 'svelte';
	import { modal } from '@components';
	import { X } from 'lucide-svelte';

	let headerElement: HTMLElement;
	let modalName: string | undefined;

	onMount(() => {
		modalName = headerElement?.parentElement?.parentElement?.id;
	});
</script>

<div class="header" bind:this={headerElement}>
	<div class="text-wrapper">
		<slot />
	</div>
	<button class="close-button" on:click={() => modal.hide(modalName)}>
		<X size="15" />
	</button>
</div>
