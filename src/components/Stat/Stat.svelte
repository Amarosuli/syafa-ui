<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="relative flex w-full flex-col items-start justify-start border border-foreground p-4">
	<span class="font-bold">Total</span>
	<span class="text-3xl font-extrabold">15.8K</span>
	<span class="text-sm">Total is summary of your income in dollar.</span>
	<div class="absolute right-0 p-4">
		{@render children()}
	</div>
</div>
