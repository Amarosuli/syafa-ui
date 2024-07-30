<script lang="ts">
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { setContext, type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const collapsible = createCollapsible();
	setContext('collapsible', {
		collapsible
	});

	const {
		elements: { root }
	} = collapsible;
</script>

<div class="collapsible" use:melt={$root}>
	{@render children()}
</div>
