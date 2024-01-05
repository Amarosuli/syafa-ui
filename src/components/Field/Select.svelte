<!-- 
   @component
   ## Input Select
   Props -> value, label, description, error & commons attributes for text input.  

   ---
   #### Example 1 - Directive
   ---
   The Option component coming from let:Option property declared in Field.Select
   ```svelte
   <Field.Select let:Option>
      <Option {opt} >{opt?.label}</Option>
      <Option opt={{value: '', label: ''}} />
   <Field.Select/>
   ```
   ---
   #### Example 2 - Manual
   ---
   The Option component coming from manual import, Field.Option
   ```svelte
   <Field.Select>
      <Field.Option {opt}>{opt?.label}</Field.Option>
      <Field.Option opt={{value: '', label: ''}} />
   <Field.Select/>
   ```
 -->

<script lang="ts">
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import { setContext, getContext } from 'svelte';
	import { clickOutSide } from '@components';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	import Option from './Option.svelte';

	export let value: any = '';
	export let error: string = '';
	export let label: string = '';
	export let description: string = '';

	let isOpen = false;
	let defaultOption = { label: 'Select' };

	function spin(node: Node, { duration, rotate }: any) {
		return {
			duration,
			css: (t: any, u: any) => {
				return `
					transform: rotate(${u * rotate}deg);
					opacity: ${t * 1};
               `;
			}
		};
	}

	function selector() {
		const store = writable(defaultOption.label);
		const { set, subscribe, update } = store;

		return {
			subscribe,
			set,
			// @ts-ignore
			select: (newValue) => {
				set(''); // this is need to trigger reactivity while there's click event where the user select the same option value
				update((v) => (v = newValue));
			}
		};
	}

	function setIsOpenFalse() {
		isOpen = false;
	}

	setContext('selector', { selected: selector() });
	const { selected }: any = getContext('selector');

	$: $selected, (isOpen = false);
	$: console.log($selected);
	$: console.log(value);
</script>

<label class="label text">
	<span class="top" class:text-error={error}>{label}</span>
	<div use:clickOutSide on:clickOutSide={setIsOpenFalse} class="field select">
		<button on:click|preventDefault|nonpassive={() => (isOpen = !isOpen)} class="trigger">
			<div class="label">
				<span>{$selected}</span>
				{#if isOpen}
					<span class="icon" in:spin={{ duration: 200, rotate: 70 }}>
						<ChevronUp size="15" />
					</span>
				{:else}
					<span class="icon" in:spin={{ duration: 200, rotate: 70 }}>
						<ChevronDown size="15" />
					</span>
				{/if}
			</div>
		</button>
		{#if isOpen}
			<div transition:fly={{ y: -10 }} class="option">
				<Option disabled={true} opt={defaultOption} />
				<slot {Option} />
			</div>
		{/if}
	</div>
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>
