<!-- 
   @component

   ### Link - Link is the component for handling navigation.
   Usage
      ```
      <Link href="/"> Home </Link>
      ```
 -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[]>;
		href?: string;
		underline?: boolean;
		classes?: string;
		isDisabled?: boolean;
		active?: boolean;
	}

	let { children, href = '/', underline = false, classes, isDisabled = false, active = false }: Props = $props();
</script>

<a
	{href}
	class="{classes}
      {isDisabled ? 'disabled pointer-events-none' : ''}
      {underline ? 'underline-offset-2 hover:underline' : ''}
      {active ? 'underline underline-offset-2' : ''}
      ">
	{@render children()}
</a>

<style lang="postcss">
	a {
		@apply w-fit select-none overflow-hidden whitespace-nowrap text-xs text-primary transition-all ease-out hover:text-primary/50 xl:text-sm;
	}
</style>
