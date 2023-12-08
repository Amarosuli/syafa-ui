<script lang="ts">
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';

	export let value: string;

	let contentElement: HTMLElement;
	const { tabs }: any = getContext('tabs');

	onMount(() => {
		contentElement.setAttribute('contentId', value);
	});
</script>

<div bind:this={contentElement} class:hidden={$tabs !== value} class="content">
	<slot />
</div>
