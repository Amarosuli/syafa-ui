<!-- 
   @component
   Input Text Area  
   --
   props -> value, label, description, error, & commons attributes for text area input.
 -->
<script lang="ts">
	export let value: string = '';
	export let label: string = '';
	export let description: string = '';
	export let error: string = '';
</script>

<label class="label textarea">
	<span class="top" class:text-error={error}>{label}</span>
	<textarea class="field textarea" {...$$restProps} bind:value />
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>
