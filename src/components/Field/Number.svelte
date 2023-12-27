<!-- 
   @component
   Input Number

   placeholder, required
 -->
<script lang="ts">
	export let value: number;
</script>

<input class="field number" type="number" {...$$restProps} bind:value />
