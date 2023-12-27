<script lang="ts">
	import './table.scss';

	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { invalidateAll } from '$app/navigation';

	import { ArrowUp, ArrowDown } from 'lucide-svelte';
	// import { modal$ } from '$lib/utils/Stores';
	import { writable } from 'svelte/store';
	import { Render, Subscribe, createRender } from 'svelte-headless-table';
	import { Field, Button, DropdownMenu } from '@components';
	import { SuperTable } from './Table';

	export let columnConfig: any = [];

	const Up = createRender(ArrowUp, {
		size: 13
		// class: 'absolute -right-5'
	});
	const Down = createRender(ArrowDown, {
		size: 13
		// class: 'absolute -right-5'
	});

	const dispatch = createEventDispatcher();
	const data = writable([
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'lana', description: 'desc 1 sdf sd fs df sdf sdf s dd f', logo: '', icao: 'ss', iata: 'ss' },
		{ name: 'tantri', description: 'desc 2', logo: '', icao: 'ss', iata: 'ss' }
	]);
	const table = new SuperTable(data, columnConfig, { rowSelector: true });

	let { headerRows: Hr, rows: Br, tableAttrs: T, tableBodyAttrs: B, pluginStates: Ps } = table.init;
	// let { select, hidden, report, filter } = table.state;
	// $: console.log(select, hidden, report, filter);

	let { selectedDataIds, allRowsSelected, someRowsSelected } = Ps.select;
	let { hiddenColumnIds } = Ps.hidden;
	let { exportedData } = Ps.report;
	let { filterValue } = Ps.filter;

	$: console.log('selectedDataIds', $selectedDataIds);
	$: console.log('exportedData', $exportedData);
	$: console.log('allRowsSelected', $allRowsSelected);
	$: console.log('someRowsSelected', $someRowsSelected);
	$: console.log('hiddenColumnIds', $hiddenColumnIds);
	$: console.log('filterValue', $filterValue);

	function rowClickEvent(e: any, rowData: any) {
		if (e.target.getAttribute('data-row')) {
			dispatch('rowClick', {
				rowData
			});
		}
	}
</script>

<!-- 
   T -- Table
   B -- Table Body
   Hr -- Header Rows
   Br -- Body Rows
   Ra -- Row Attributes
   Cp -- Col Props
   Ca -- Col Attributes
 -->
<div class="relative w-full overflow-y-auto">
	<table {...$T}>
		<thead>
			{#each $Hr as row (row.id)}
				<Subscribe Ra={row.attrs()} let:Ra>
					<tr {...Ra}>
						{#each row.cells as col (col.id)}
							<Subscribe Ca={col.attrs()} Cp={col.props()} let:Ca let:Cp>
								<th
									{...Ca}
									on:click={Cp?.sort?.toggle}
									class="col-{col.id}"
									class:col-sort={col.id !== 'selected'}
									class:col-checkbox={col.id === 'selected'}
									class:sort-active={Cp?.sort?.order !== undefined}>
									{#if col.id === 'selected'}
										<Render of={col.render()} />
									{:else}
										<div class="arrow-wrapper">
											<Render of={col.render()} />
											{#if Cp?.sort?.order === 'asc'}
												<ArrowUp size="12" class="arrow-icon" />
											{:else if Cp?.sort?.order === 'desc'}
												<ArrowDown size="12" class="arrow-icon" />
											{/if}
										</div>
									{/if}
								</th>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</thead>
		<tbody {...$B}>
			<!-- {#if !isRefresh} -->
			{#each $Br as row (row.id)}
				<Subscribe Ra={row.attrs()} Rp={row.props()} let:Ra let:Rp>
					<tr {...Ra} on:click={(e) => rowClickEvent(e, row)} class:selected={Rp.select.selected}>
						{#each row.cells as col (col.id)}
							<Subscribe Ca={col.attrs()} let:Ca>
								<td {...Ca} data-row={true} class="col-checkbox">
									<Render of={col.render()} />
								</td>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
			<!-- {/if} -->
		</tbody>
	</table>

	{#if $Br.length === 0}
		<div class="flex w-full flex-col items-center justify-center gap-3 py-6">
			<span class="text-center font-bold tracking-wide"> No Data Found </span>
			<button class="bg-slate-200 px-3 py-2 text-center tracking-wide shadow hover:bg-slate-300"> Create a new one </button>
		</div>
	{/if}
</div>
