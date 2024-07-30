<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';

	interface AccordionHeaderProps {
		children: Snippet;
		props: { value: any; disabled?: boolean } | string;
	}
	let { children, props }: AccordionHeaderProps = $props();

	const { accordion }: any = getContext('accordion');

	const {
		elements: { trigger }
	} = accordion;
</script>

<h2 class="flex">
	<button class="w-full px-4 py-3 text-left" use:melt={$trigger(props)}>
		{@render children()}
	</button>
</h2>
