<script>
	import { getContext } from 'svelte';
	const { sheet } = getContext('sheetToggler');
</script>

<slot {sheet} />
