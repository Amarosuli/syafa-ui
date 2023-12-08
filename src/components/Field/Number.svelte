<!-- 
   @component
   Input Number

   placeholder, required
 -->
<script>
	/** @type {*} value */ export let value;
</script>

<input class="field number" type="number" {...$$restProps} bind:value />
