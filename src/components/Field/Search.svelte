<!-- 
   @component
   Input Search
   --
   Event -> on.search  
   Props -> value, label, description, error, & all common text input attributes
 -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Search } from 'lucide-svelte';

	export let value: string | number = '';
	export let label: string = '';
	export let description: string = '';
	export let error: string = '';

	let input: HTMLInputElement;
	const dispatch = createEventDispatcher();

	function handleClick(e: { key: string }) {
		if (e.key !== 'Enter') return;

		dispatch('search', {
			status: 'searching',
			value: value
		});
	}

	$: console.log(value);
</script>

<label class="label search">
	<span class="top" class:text-error={error}>{label}</span>
	<div class="relative flex items-center">
		<input class="field search" type="text" {...$$restProps} bind:this={input} on:keypress={handleClick} bind:value />
		<button
			class="absolute right-0 z-20 flex h-full flex-1 select-none items-center rounded-r-[var(--radius)] bg-foreground/10 px-4 transition-colors ease-out hover:bg-foreground/30"
			on:click|stopPropagation={() => handleClick({ key: 'Enter' })}>
			<Search size="15" />
		</button>
	</div>
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>
