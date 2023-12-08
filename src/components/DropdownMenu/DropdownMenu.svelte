<script lang="ts">
	import { onMount } from 'svelte';
	import { setContext, getContext } from 'svelte';
	import { clickOutSide, toggler } from '@components';

	let exclude;

	let rootElement: HTMLElement;

	setContext('toggler', {
		dropdownmenu: toggler()
	});

	const { dropdownmenu }: any = getContext('toggler');

	onMount(() => {
		console.log(rootElement.getBoundingClientRect());
	});
</script>

<div use:clickOutSide on:clickOutSide={() => dropdownmenu.hide()} class="dropdown" bind:this={rootElement}>
	<slot />
</div>
