<!-- 
   @component

   ### ThemeToggler
   This is just a theme toggler component, and it basically just a button component

   ### Example
   ```svelte
   import {ThemeToggler} from '@components'
   ...
   <ThemeToggler> icon or title, whatever </ThemeToggler>
   ```
 -->
<script lang="ts">
	import { Button, Field } from '@components';
	import { Sun, MoonStar } from 'lucide-svelte';

	let currentTheme: string = '';
	let checked: boolean;
	function toggle(e: any) {
		currentTheme = document.documentElement.classList.value;
		if (currentTheme === 'dark') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}
	}
</script>

<div class="w-32">
	<!-- <Field.Switch on:change={toggle} bind:checked value={{ onTrue: Sun, onFalse: MoonStar }} /> -->
	<!-- <Field.Switch on:change={toggle} bind:checked value={{ onTrue: 'light', onFalse: 'dark' }} /> -->
	<Field.Switch on:change={toggle} bind:checked>
		{#if !checked}
			<Sun size="15" />
		{:else}
			<MoonStar size="15" />
		{/if}
	</Field.Switch>
</div>
