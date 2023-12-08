<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- 
   @component
   Input Date
   --
   props -> value, label, description, error, & commons attributes for text input.
 -->
<script lang="ts">
	import { DateInput, DatePicker } from 'date-picker-svelte';
	import { clickOutSide } from '@components';
	import { fly } from 'svelte/transition';

	export let value: Date | null | undefined = null;
	export let label: string = '';
	export let description: string = '';
	export let error: string = '';

	let date: Date = new Date();
	let input: HTMLInputElement;

	function triggerClick() {
		showDatePicker = !showDatePicker;
	}

	function selectDate(e: any) {
		value = e.detail;
		hideDatePicker();
	}

	function hideDatePicker() {
		// if (e.type === 'select');

		showDatePicker = false;
		console.log(showDatePicker, 'harusnya keluar');
	}

	let store: any;
	const theme = {
		calendar: {
			width: '700px',
			maxWidth: '20rem',
			legend: {
				height: '45px'
			},
			shadow: '0px 10px 26px rgba(0, 0, 0, 0.25)',
			colors: {
				text: {
					primary: '#333',
					highlight: '#fff'
				},
				background: {
					primary: '#fff',
					highlight: '#eb7400',
					hover: '#eee'
				},
				border: '#eee'
			},
			font: {
				regular: '1rem',
				large: '17rem'
			},
			grid: {
				disabledOpacity: '.35',
				outsiderOpacity: '.3'
			}
		}
	};

	let showDatePicker: boolean = false;
	$: console.log(showDatePicker);
</script>

<div class="relative">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<label class="label date">
		<span class="top" class:text-error={error}>{label}</span>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="field date" on:click={triggerClick}>
			<button class="h-full w-full select-none"> {value ? value : 'Pick a Date'}</button>
		</div>
		<!-- <input type="date" class="field date" bind:this={input} on:focus={clickHandler} {...$$restProps} bind:value /> -->
		<span class="bottom">{description}</span>
		<span class="error">{error}</span>
	</label>
	{#if showDatePicker}
		<div class="absolute z-50 flex w-[18rem] items-center justify-center" transition:fly={{ y: -5, duration: 200 }} use:clickOutSide on:clickOutSide={hideDatePicker}>
			<DatePicker {value} on:select={selectDate} on:focusout={hideDatePicker} />
		</div>
	{/if}
</div>
