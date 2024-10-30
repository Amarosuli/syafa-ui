<script lang="ts">
	import { ChevronsUpDown, X } from 'lucide-svelte';
	import { getContext } from 'svelte';
	import { Button } from '@components';

	const { collapsible }: any = getContext('collapsible');
	const {
		elements: { trigger },
		states: { open }
	} = collapsible;
</script>

<div class="trigger">
	<span class="title">
		<slot />
	</span>

	<Button {...$trigger} on:click={() => ($open = !$open)} collor="ghost">
		{#if $open}
			<X size="15" />
		{:else}
			<ChevronsUpDown size="15" />
		{/if}
	</Button>
</div>
