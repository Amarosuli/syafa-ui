<script>
	import { getContext } from 'svelte';

	const { dropdownmenu } = getContext('toggler');
</script>

<slot {dropdownmenu} />
