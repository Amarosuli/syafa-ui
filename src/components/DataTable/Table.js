// @ts-nocheck
import { addSortBy, addTableFilter, addSelectedRows, addHiddenColumns, addDataExport } from 'svelte-headless-table/plugins';
import { createTable, createRender } from 'svelte-headless-table';

import EditableCell from './EditableCell.svelte';
import SelectorCell from './CheckCell.svelte';
import ImageCell from './ImageCell.svelte';

export class SuperTable {
	column = [];
	rowNumber = 0;
	constructor(data, columnConfig, option) {
		this.filterOption(this.defaultOption, this.defaultPlugin, option);
		this.table = createTable(data, this.defaultPlugin);
		this.init = this.generateTable(this.table, columnConfig, this.plugin);
		this.state = this.init.pluginStates;
	}
	defaultPlugin = {
		sort: addSortBy({ disableMultiSort: false }),
		filter: addTableFilter(),
		select: addSelectedRows(),
		hidden: addHiddenColumns(),
		report: addDataExport()
	};
	defaultOption = {
		order: true,
		sort: true,
		filter: true,
		select: true,
		hidden: true,
		report: true,
		rowSelector: false
	};
	plugin = {
		sort: { invert: true },
		filter: { exclude: false }
		// select: { report: { exclude: true } },
		// order: { sort: { invert: true } }
	};

	// Only include plugin which set true in option
	filterOption = (defaultOption, defaultPlugin, option) => {
		Object.keys(option).forEach((key) => {
			if (option[key] === false) {
				delete defaultOption[key];
				delete defaultPlugin[key];
			}
		});
	};

	createColumn(columnConfig, plugin) {
		const selectColumn = {
			id: 'selected',
			header: ({ row }, { pluginStates }) => {
				const { allRowsSelected } = pluginStates.select;
				return createRender(SelectorCell, { isSelected: allRowsSelected });
			},
			cell: ({ row }, { pluginStates }) => {
				const { isSelected } = pluginStates.select.getRowState(row);
				return createRender(SelectorCell, { isSelected });
			},
			plugins: {
				report: { exclude: true }
			}
		};

		const orderColumn = {
			id: 'order',
			header: 'No',
			// @ts-ignore
			cell: ({ row }) => {
				return parseInt(row.id) + 1;
			},
			accessor: () => {
				return (this.rowNumber += 1);
			},
			plugins: {
				sort: { invert: true }
				// sort: Object.keys(this.defaultOption).includes('sort') ? { invert: true } : undefined
			}
		};

		columnConfig = columnConfig.map((v, index) => {
			if (v.isImage === true) {
				v.cell = ({ row }) => {
					let column = v.accessor;
					return createRender(ImageCell, { row, column });
				};
				return v;
			}
			return v;
		});

		columnConfig.forEach((v, index) => {
			v = { ...v, plugins: plugin };
			this.column[index] = this.table.column(v);
		});

		if (Object.keys(this.defaultOption).includes('order')) {
			this.column.unshift(this.table.column(orderColumn));
		}
		if (Object.keys(this.defaultOption).includes('rowSelector')) {
			// if (this?.options?.rowSelector === true) {

			this.column.unshift(this.table.display(selectColumn));
		}
		this.rowNumber = 0;
	}

	generateTable(table, columnConfig, plugin) {
		this.createColumn(columnConfig, plugin);
		return table.createViewModel(table.createColumns(this.column));
	}
}
