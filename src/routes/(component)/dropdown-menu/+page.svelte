<script>
	import { DropdownMenu, List, Button } from '@components';
</script>

<div class="container mx-auto flex justify-center">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger let:dropdownmenu>
			<Button collor="ghost" variant={['ghost', 'outline', 'rounded']} on:click={dropdownmenu.toggle}>Open</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content size="w-56">
			<List.Root>
				<Button collor="ghost">Hha</Button>
				<List.Item>Satuuuu</List.Item>
				<List.Item>Duaaaa</List.Item>
				<List.Item>Tigaaaa</List.Item>
			</List.Root>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
