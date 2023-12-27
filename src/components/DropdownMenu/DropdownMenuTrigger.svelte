<script lang="ts">
	import { getContext } from 'svelte';

	const { dropdownmenu }: any = getContext('toggler');
</script>

<slot {dropdownmenu} />
