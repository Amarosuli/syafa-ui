<script lang="ts">
	import { clickOutSide, modal } from '@components';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let contentElement: HTMLElement;
	let modalName: string | undefined;

	onMount(() => {
		modalName = contentElement?.parentElement?.id;
	});
</script>

<div transition:scale={{ duration: 200 }} bind:this={contentElement} use:clickOutSide on:clickOutSide={() => modal.hide(modalName)} class="content default">
	<slot />
</div>
