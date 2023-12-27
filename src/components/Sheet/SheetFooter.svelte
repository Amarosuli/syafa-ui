<script lang="ts">
	import { getContext } from 'svelte';
	const { sheet }: { sheet: any } = getContext('sheetToggler');
</script>

<div class="space-y-2">
	<slot {sheet} />
</div>
