<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { setContext, type Snippet } from 'svelte';

	interface AccordionProps {
		children: Snippet;
		multiple?: boolean;
	}

	let { children, multiple = false }: AccordionProps = $props();

	const accordion = createAccordion({
		multiple: multiple
	});

	setContext('accordion', {
		accordion
	});

	const {
		elements: { root }
	} = accordion;
</script>

<div class="accordion divide-y divide-white" use:melt={$root}>
	{@render children()}
</div>
