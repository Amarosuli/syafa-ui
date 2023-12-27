<script lang="ts">
	import { getContext } from 'svelte';
	const { sheet }: { sheet: any } = getContext('sheetToggler');
</script>

<slot {sheet} />
