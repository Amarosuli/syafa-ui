<script lang="ts">
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	const { dropdownmenu }: any = getContext('toggler');

	export let size = 'w-max';

	let contentElement: HTMLElement;

	function handlePosition(element) {
		let rect = element?.getBoundingClientRect();
		console.log(rect);
	}

	$: if ($dropdownmenu) handlePosition(contentElement);
</script>

{#if $dropdownmenu}
	<div transition:fly={{ y: -5, duration: 200 }} class="content {size}" bind:this={contentElement}>
		<slot />
	</div>
{/if}
