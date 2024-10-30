<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';

	export let props: { value: any; disabled: boolean | undefined } | string;

	const { accordion }: any = getContext('accordion');

	const {
		elements: { trigger }
	} = accordion;
</script>

<h2 class="flex">
	<button class="w-full px-4 py-3 text-left" use:melt={$trigger(props)}>
		<slot />
	</button>
</h2>
