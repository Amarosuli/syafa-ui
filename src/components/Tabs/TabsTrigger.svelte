<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
		children: Snippet;
		value: string;
	}

	let { children, value, ...restProps }: TabsTriggerProps = $props();

	let triggerElement: HTMLElement;

	const { tabs }: any = getContext('tabs');

	onMount(() => {
		triggerElement.setAttribute('triggerId', value);
	});
</script>

<button bind:this={triggerElement} onclick={() => tabs.select(value)} class:select={$tabs === value} class="trigger" {...restProps}>
	{@render children()}
</button>
