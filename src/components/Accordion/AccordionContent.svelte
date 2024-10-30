<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	export let props: { value: any; disabled: boolean | undefined } | string;

	const { accordion }: any = getContext('accordion');

	const {
		elements: { content },
		helpers: { isSelected }
	} = accordion;
</script>

{#if $isSelected(props)}
	<div {...$content(props)} use:content transition:slide>
		<slot />
	</div>
{/if}
