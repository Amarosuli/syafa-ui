<!-- 
   @component
   Input Slider

   placeholder, required
 -->
<script>
	/** @type {*} value */ export let value;
</script>

<input class="field slider" type="range" {...$$restProps} bind:value />
