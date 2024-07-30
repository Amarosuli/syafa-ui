<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { getContext } from 'svelte';

	let { children, value }: { children: Snippet; value: string } = $props();

	let contentElement: HTMLElement;
	const { tabs }: any = getContext('tabs');

	onMount(() => {
		contentElement.setAttribute('contentId', value);
	});
</script>

<div bind:this={contentElement} class:hidden={$tabs !== value} class="content">
	{@render children()}
</div>
