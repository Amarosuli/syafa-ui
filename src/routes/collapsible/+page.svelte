<script lang="ts">
	import { Collapsible } from '@components';
</script>

<Collapsible.Root>
	<Collapsible.Trigger>My favorite fruits</Collapsible.Trigger>
	<div class="rounded-md border px-4 py-3 font-mono text-sm">Manggo</div>
	<Collapsible.Content>
		<div class="rounded-md border px-4 py-3 font-mono text-sm">
			<span>Banana</span>
		</div>
		<div class="rounded-md border px-4 py-3 font-mono text-sm">
			<span>Watermelon</span>
		</div>
	</Collapsible.Content>
</Collapsible.Root>

<Collapsible.Root>
	<Collapsible.Trigger>My favorite guitar</Collapsible.Trigger>
	<div class="rounded-md border px-4 py-3 font-mono text-sm">Martin</div>
	<Collapsible.Content>
		<div class="rounded-md border px-4 py-3 font-mono text-sm">
			<span>Taylor</span>
		</div>
		<div class="rounded-md border px-4 py-3 font-mono text-sm">
			<span>Cetta</span>
		</div>
	</Collapsible.Content>
</Collapsible.Root>
