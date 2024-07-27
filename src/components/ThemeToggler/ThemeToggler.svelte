<!-- 
   @component

   ### ThemeToggler
   This handling switch for dark and light theme.  
 -->
<script lang="ts">
	import { Sun, MoonStar } from 'lucide-svelte';
	import Switch from '../Field/Switch.svelte';

	let currentTheme: string = '';
	let checked: boolean = $state(false);

	function onchange(): void {
		currentTheme = document.documentElement.classList.value;
		if (currentTheme === 'dark') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}
	}

</script>

<div class="w-32">
	<Switch {onchange} bind:checked>
		{#if !checked}
			<Sun size="15" />
		{:else}
			<MoonStar size="15" />
		{/if}
	</Switch>
</div>
