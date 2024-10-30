<!-- 
   @component

   ### Link
      Link is just like an anchor tag element
   ### Usage
      <Link href="/"> Home </Link>
 -->
<script lang="ts">
	export let href: string = '/';
	export let underline: boolean = true;
	export let classes: string = '';
	export let active: boolean = false;
</script>

<a {href} class="link {classes}" class:underline_hover={underline} class:underline_active={active} {...$$restProps}><slot /></a>
