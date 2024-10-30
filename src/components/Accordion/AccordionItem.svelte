<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';

	export let props: { value: any; disabled: boolean | undefined } | string;

	const { accordion }: any = getContext('accordion');

	const {
		elements: { item }
	} = accordion;
</script>

<div use:melt={$item(props)} class="w-full divide-y divide-white bg-slate-200 dark:bg-slate-500">
	<slot />
</div>
