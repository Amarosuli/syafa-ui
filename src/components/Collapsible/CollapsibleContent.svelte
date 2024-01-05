<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	import { getContext } from 'svelte';

	const { collapsible }: any = getContext('collapsible');
	const {
		elements: { content },
		states: { open }
	} = collapsible;
</script>

<div>
	{#if $open}
		<div class="content" use:melt={$content} transition:slide>
			<slot />
		</div>
	{/if}
</div>
