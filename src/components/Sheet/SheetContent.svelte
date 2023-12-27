<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { clickOutSide } from '@components';

	export let side: sheetSide = 'right';
	export let clickBackdrop: boolean = true;

	const { sheet }: { sheet: any } = getContext('sheetToggler');
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
