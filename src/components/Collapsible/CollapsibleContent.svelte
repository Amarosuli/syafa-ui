<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { getContext, type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const { collapsible }: any = getContext('collapsible');
	const {
		elements: { content },
		states: { open }
	} = collapsible;
</script>

<div>
	{#if $open}
		<div class="content" use:melt={$content} transition:slide>
			{@render children()}
		</div>
	{/if}
</div>
