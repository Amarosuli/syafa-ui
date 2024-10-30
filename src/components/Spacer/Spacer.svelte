<script lang="ts">
	export let style: 'dash' = 'dash';

	const spacerStyle: Record<string, string> = {
		dash: 'border-dashed'
	};
</script>

<div class="my-2 w-full {spacerStyle[style]}" />
