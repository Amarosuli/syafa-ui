<script lang="ts">
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { setContext } from 'svelte';

	const collapsible = createCollapsible();
	setContext('collapsible', {
		collapsible
	});

	const {
		elements: { root }
	} = collapsible;
</script>

<div class="collapsible" use:melt={$root}>
	<slot />
</div>
