<!-- 
   @component
   Input Text
   --
   props -> value, label, description, error, & commons attributes for text input.
 -->
<script lang="ts">
	export let value: any = '';
	export let label: string = '';
	export let description: string = '';
	export let error: string = '';
</script>

<label class="label text">
	<span class="top" class:text-error={error}>{label}</span>
	<input class="field text" type="text" {...$$restProps} bind:value />
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>
