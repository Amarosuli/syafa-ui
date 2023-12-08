<script lang="ts">
	import { Sheet, Button } from '@components';
	import { PanelTopOpen, PanelBottomOpen, PanelLeftOpen, PanelRightOpen } from 'lucide-svelte';

	let sides: sheetSide[] = ['left', 'right', 'top', 'bottom'];
</script>

<div class="grid grid-cols-2 grid-rows-2 gap-4">
	{#each sides as side}
		<Sheet.Root>
			<Sheet.Trigger let:sheet>
				<Button on:click={sheet.toggle} collor="ghost" variant="outline"
					>{side}
					{#if side === 'top'}
						<PanelTopOpen size="15" class="text-main" />
					{:else if side === 'bottom'}
						<PanelBottomOpen size="15" class="text-main" />
					{:else if side === 'left'}
						<PanelLeftOpen size="15" class="text-main" />
					{:else if side === 'right'}
						<PanelRightOpen size="15" class="text-main" />
					{/if}
				</Button>
			</Sheet.Trigger>
			<Sheet.Content {side}>
				<Sheet.Close />
				<Sheet.Header>
					<Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
					<Sheet.Description>This action cannot be undone. This will permanently delete your future and remove you existance from this world.</Sheet.Description>
				</Sheet.Header>
				<div>content goes here ...</div>
				<Sheet.Footer let:sheet>
					<Sheet.Description>Footer here</Sheet.Description>
					<Button on:click={sheet.toggle} collor="ghost" variant="outline">Close</Button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	{/each}
</div>
