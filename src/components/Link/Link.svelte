<!-- 
   @component

   ### Link - Link is the component for handling navigation.
   Usage
      ```
      <Link href="/"> Home </Link>
      ```
 -->
<script lang="ts">
	import type { Snippet, } from 'svelte';

   interface Props {
      children: Snippet<[]>;
      href?: string;
      underline?: boolean;
      classes?: string;
      isDisabled?: boolean;
      active?: boolean;
   }

	let {
      children,
		href = '/',
		underline = false,
		classes,
		isDisabled = false,
		active = false
   }: Props = $props();
</script>

<a {href} class="link {isDisabled ? 'pointer-events-none disabled' : ''} {classes}" class:underline_hover={underline} class:underline_active={active}>
	{@render children()}
</a>
