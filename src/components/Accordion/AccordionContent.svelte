<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	interface AccordionContentProps {
		children: Snippet;
		props: { value: any; disabled?: boolean } | string;
	}

	let { children, props }: AccordionContentProps = $props();

	const { accordion }: any = getContext('accordion');

	const {
		elements: { content },
		helpers: { isSelected }
	} = accordion;
</script>

{#if $isSelected(props)}
	<div {...$content(props)} use:content transition:slide>
		{@render children()}
	</div>
{/if}
