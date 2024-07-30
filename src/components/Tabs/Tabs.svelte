<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { tabStore } from '@components';

	let { children }: { children: Snippet } = $props();
	setContext('tabs', { tabs: tabStore() });
</script>

<div class="tabs">
	{@render children()}
</div>
