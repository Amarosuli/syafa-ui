<script lang="ts">
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';

	const { tabs }: any = getContext('tabs');

	let initialSelected: string | boolean | null;
	let defaultSelected: boolean;
	let childElement: NodeListOf<HTMLElement>;
	let listElement: HTMLElement;

	onMount(() => {
		childElement = listElement.querySelectorAll('button');

		childElement.forEach((child: any) => {
			if (child.getAttribute('default')) {
				defaultSelected = child.getAttribute('triggerId');
			}
		});

		initialSelected = defaultSelected || childElement[0].getAttribute('triggerId');

		tabs.select(initialSelected);
	});
</script>

<div class="tab-list" bind:this={listElement}>
	<slot />
</div>
