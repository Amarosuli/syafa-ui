<script lang="ts">
	export let direction: 'vertical' | 'horizontal' = 'vertical';

	function getClass(): string {
		if (direction === 'vertical') {
			return 'flex flex-col divide-y';
		} else {
			return 'flex flex-row divide-x ';
		}
	}

	function getSize(): string {
		if ($$restProps?.full) {
			return 'w-full';
		} else {
			return '';
		}
	}
</script>

<div class="divide-foreground/10 {getClass()}">
	<slot />
</div>
