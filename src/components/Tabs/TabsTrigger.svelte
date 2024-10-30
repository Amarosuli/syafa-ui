<script lang="ts">
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';

	export let value: string;

	let triggerElement: HTMLElement;

	const { tabs }: any = getContext('tabs');

	onMount(() => {
		triggerElement.setAttribute('triggerId', value);
	});
</script>

<button bind:this={triggerElement} on:click={() => tabs.select(value)} class:select={$tabs === value} class="trigger" {...$$restProps}>
	<slot />
</button>
