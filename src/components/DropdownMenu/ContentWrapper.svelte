<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let size: string = 'w-max';

	let contentElement: HTMLElement;
	let w: any;
	let xPos: any;
	let yPos: any;

	onMount(() => {
		xPos = -w / 2;
	});
</script>

<div transition:fly={{ y: -5, duration: 200 }} class="content {size}" style="left: {xPos}%; top: {yPos}%" bind:this={contentElement} bind:clientWidth={w}>
	<slot />
</div>
