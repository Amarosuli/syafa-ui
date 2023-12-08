<script>
	import { Button, DataTable, Field } from '@components';

	const columnConfig = [
		{
			header: 'Name',
			accessor: 'name'
		},
		{
			header: 'Description',
			accessor: 'description'
		},
		{
			header: 'Logo',
			accessor: 'logo',
			isImage: true
		},
		{
			header: 'IATA',
			accessor: 'code_IATA'
		},
		{
			header: 'ICAO',
			accessor: 'code_ICAO'
		}
	];

	let toggleValue = false;
	let costumHeight = '';

	$: toggleValue ? (costumHeight = 'h-[70vh]') : (costumHeight = '');
</script>

<div class="flex items-center justify-start gap-2 text-sm italic text-foreground">
	To make it sticky, set height of div that wrapped the DataTable component. For example <strong>h-[70vh]</strong>.
	<Field.Switch on:change={() => (toggleValue = !toggleValue)} value={{ onFalse: 'common', onTrue: 'sticky' }} />
</div>
<div class="mt-4 flex w-full overflow-hidden rounded-lg border {costumHeight}">
	<DataTable {columnConfig} />
</div>
