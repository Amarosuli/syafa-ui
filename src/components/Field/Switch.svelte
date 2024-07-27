<!-- 
   @component
   
   ## Switch Input
   
   Props  
   - `checked`  
   - `value ={onFalse, onTrue}`  
   - `label`  
   - `description`  
   - `error`  
   - `commons attributes for text input.`

   Usage
   ```
   // belum ada
   ```
   
 -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SwitchProps {
		children: Snippet<[]>;
		onchange: () => void;
		checked?: any;
		value?: { onFalse: any; onTrue: any };
		label?: string;
		description?: string;
		error?: string;
	}

	let { children, onchange, value = { onFalse: '', onTrue: '' }, label = '', description = '', error = '', checked = $bindable<boolean>() }: SwitchProps = $props();
</script>

<label class="label switch">
	<span class="top" class:text-error={error}>{label}</span>
	<div class="field switch">
		<label class="relative flex items-center gap-2">
			<input type="checkbox" class="peer sr-only" {onchange} bind:checked />
			<div
				class="peer h-[20px] w-[36px] rounded-full
      bg-secondary-foreground/20
      transition-all
      after:absolute
      after:left-[3px]
      after:top-[2.6px]
      after:h-[15.5px]
      after:w-[15.5px]
      after:rounded-full
      after:bg-secondary
      after:transition-all
      after:content-['']
      peer-checked:bg-secondary-foreground
      peer-checked:after:translate-x-full peer-checked:after:bg-secondary">
			</div>
			{#if value}
				<span class="capitalize text-secondary-foreground">{checked ? value.onTrue : value.onFalse}</span>
			{/if}
			{@render children()}
		</label>
	</div>
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>
