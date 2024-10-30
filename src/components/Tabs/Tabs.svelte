<script lang="ts">
	import { setContext } from 'svelte';
	import { tabStore } from '@components';

	setContext('tabs', { tabs: tabStore() });
</script>

<div class="tabs">
	<slot />
</div>
