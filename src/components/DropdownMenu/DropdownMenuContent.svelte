<script lang="ts">
	import ContentWrapper from './ContentWrapper.svelte';
	import { getContext } from 'svelte';

	const { dropdownmenu }: any = getContext('toggler');

	export let size: string = 'w-max';
</script>

{#if $dropdownmenu}
	<ContentWrapper {size}>
		<slot />
	</ContentWrapper>
	<!-- <div transition:fly={{ y: -5, duration: 200 }} class="content {size}" style="left: {xPos}%; top: {yPos}%" bind:this={contentElement} bind:clientWidth={w} on:blur={handlePosition}>
		<slot />
	</div> -->
{/if}
