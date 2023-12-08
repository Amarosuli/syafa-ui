<script>
	import { getContext } from 'svelte';
	const { sheet } = getContext('sheetToggler');
</script>

<div class="space-y-2">
	<slot {sheet} />
</div>
