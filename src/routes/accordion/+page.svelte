<script>
	import { Accordion } from '@components';
	const items = [
		{
			id: 'item-1',
			title: 'What is it?',
			description: 'A collection of accessible & unstyled component builders for Svelte applications.'
		},
		{
			id: 'item-2',
			title: 'Can I customize it?',
			description: 'Totally, it is 100% stylable and overridable.'
		},
		{
			id: 'item-3',
			title: 'Svelte is awesome, huh?',
			description: 'Yes, and so are you!'
		}
	];
</script>

<Accordion.Root>
	{#each items as { id, title, description }, i}
		<Accordion.Item props={id}>
			<Accordion.Header props={id}>
				{title}
			</Accordion.Header>
			<Accordion.Content props={id}>
				<div class="bg-background px-4 py-3 dark:bg-slate-700">
					{description}
				</div>
			</Accordion.Content>
		</Accordion.Item>{/each}
</Accordion.Root>
