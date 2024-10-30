<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { setContext } from 'svelte';

	export let multiple: boolean = false;

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
	<slot />
</div>
