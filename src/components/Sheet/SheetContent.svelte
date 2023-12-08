<script>
	import { fly, fade } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { clickOutSide } from '@components';

	/** @type {sheetSide} side */ export let side = 'right';
	/** @type {boolean} clickBackdrop */ export let clickBackdrop = true;

	const { sheet } = getContext('sheetToggler');
	const transitionConfig = {
		right: { x: 500 },
		left: { x: -500 },
		top: { y: -500 },
		bottom: { y: 500 }
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#if $sheet}
	<dialog open={$sheet} transition:fade={{ duration: 200 }} class="sheet overlay">
		<div transition:fly={{ ...transitionConfig[side], duration: 400 }} use:clickOutSide on:clickOutSide={clickBackdrop ? sheet.toggle : ''} class="content {side}">
			<slot />
		</div>
	</dialog>
{/if}
