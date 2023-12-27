<!-- 
   @component
   Input Slider

   placeholder, required
 -->
<script lang="ts">
	export let value: any;
</script>

<input class="field slider" type="range" {...$$restProps} bind:value />
