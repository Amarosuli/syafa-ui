<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, direction = 'vertical', full = false }: { children: Snippet; direction: 'vertical' | 'horizontal'; full: boolean } = $props();

	function getClass(): string {
		if (direction === 'vertical') {
			return 'flex flex-col divide-y';
		} else {
			return 'flex flex-row divide-x ';
		}
	}

	function getSize(): string {
		if (full) {
			return 'w-full';
		} else {
			return '';
		}
	}
</script>

<div class="divide-foreground/10 {getClass()}">
	{@render children()}
</div>
