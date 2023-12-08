<!-- 
   @component
   Form Control. Use as the input wrapper.  
   (Props) id, action, method, enctype, enhance
 -->
<script lang="ts">
   export let enhance : any = null;
</script>

<form action="/" {...$$restProps} class="space-y-2">
	<slot />
</form>
