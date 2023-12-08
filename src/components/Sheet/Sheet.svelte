<script>
	// @ts-nocheck

	import { setContext, getContext } from 'svelte';
	import { toggler } from '@components';
	import { beforeNavigate } from '$app/navigation';

	setContext('sheetToggler', { sheet: toggler() });

	const { sheet } = getContext('sheetToggler');

	/** @param {'import("svelte/elements").KeyboardEventHandler'} event */
	function handleKeyDown(event) {
		// @ts-ignore
		if (event.keyCode === 27 || event.key === 'Escape' || event.code === 'Escape') {
			sheet.setFalse();
		}
	}

	beforeNavigate(() => sheet.setFalse());
</script>

<svelte:document on:keydown={handleKeyDown} />
<slot />
