<!-- 
   @component
   This is an option component suppose to be child of the select component.  
   The props required is opt.
   ```js
   const opt = { value: any, label: string }
   ```

   #### How to use ?
   You can use from directive by add let:Option property to parent
   ```svelte
   <Field.Select let:Option>
   ``` 
   Then use like below
   ```svelte
   <Option {opt} >{opt?.label}</Option>
   <Option opt={{value: '', label: ''}} />
   ```
   Or manual import from field component
   ```svelte
   <Field.Option {opt}>{opt?.label}</Field.Option>
   <Field.Option opt={{value: '', label: ''}} />
   ```
 -->

<script>
	// @ts-nocheck

	import { getContext } from 'svelte';

	/** @type {selectOption} opt */ export let opt;
	/** @type {*} opt */ export let disabled = false;

	const { selected } = getContext('selector');
</script>

<button
	aria-selected={false}
	role="option"
	{disabled}
	class="item"
	on:click|preventDefault={() => {
		console.log('clicekd');
		selected.select(opt?.value);
	}}><slot>{opt?.label}</slot></button>
