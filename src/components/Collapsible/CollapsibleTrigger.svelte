<script lang="ts">
	import { ChevronsUpDown, X } from 'lucide-svelte';
	import { getContext, type Snippet } from 'svelte';
	import { Button } from '@components';

	let { children }: { children: Snippet } = $props();

	const { collapsible }: any = getContext('collapsible');
	const {
		elements: { trigger },
		states: { open }
	} = collapsible;
</script>

<div class="trigger">
	<span class="title">
		{@render children()}
	</span>

	<Button {...$trigger} onclick={() => ($open = !$open)} collor="ghost">
		{#if $open}
			<X size="15" />
		{:else}
			<ChevronsUpDown size="15" />
		{/if}
	</Button>
</div>
