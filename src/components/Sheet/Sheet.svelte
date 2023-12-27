<script lang="ts">
	import { setContext, getContext } from 'svelte';
	import { toggler } from '@components';
	import { beforeNavigate } from '$app/navigation';

	setContext('sheetToggler', { sheet: toggler() });

	const { sheet }: { sheet: any } = getContext('sheetToggler');

	function handleKeyDown(event: KeyboardEvent) {
		if (event.keyCode === 27 || event.key === 'Escape' || event.code === 'Escape') {
			sheet.setFalse();
		}
	}

	beforeNavigate(() => sheet.setFalse());
</script>

<svelte:document on:keydown={handleKeyDown} />
<slot />
