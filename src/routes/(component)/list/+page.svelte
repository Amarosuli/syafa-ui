<script lang="ts">
	import { List } from '@components';
</script>

<div class="flex flex-col gap-2">
	<span class="text-lg font-bold">Vertical</span>
	<List.Root direction="vertical">
		<List.Item>User Interface</List.Item>
		<List.Item>User Experience</List.Item>
	</List.Root>

	<span class="text-lg font-bold">Horizontal</span>
	<List.Root direction="horizontal">
		<List.Item>User Interface</List.Item>
		<List.Item>User Experience</List.Item>
	</List.Root>
</div>
