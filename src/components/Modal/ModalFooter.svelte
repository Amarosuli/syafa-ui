<script lang="ts">
	export let align: 'start' | 'center' | 'end' = 'end';
</script>

<div class="footer {align}">
	<slot />
</div>
