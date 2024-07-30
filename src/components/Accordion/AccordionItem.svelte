<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';

	interface AccordionItemProps {
		children: Snippet;
		props: { value: any; disabled?: boolean } | string;
	}
	let { children, props }: AccordionItemProps = $props();

	const { accordion }: any = getContext('accordion');

	const {
		elements: { item }
	} = accordion;
</script>

<div use:melt={$item(props)} class="w-full divide-y divide-white bg-slate-200 dark:bg-slate-500">
	{@render children()}
</div>
