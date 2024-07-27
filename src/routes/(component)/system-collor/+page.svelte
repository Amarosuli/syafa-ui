<script lang="ts">
	import { fade } from 'svelte/transition';

	const collors: Record<string, { name: string; value: string; cn: string }[]> = {
		base: [
			{ name: 'background', value: 'bg-background', cn: 'bg-background text-foreground' },
			{ name: 'foreground', value: 'bg-foreground', cn: 'bg-foreground text-background' }
		],
		system: [
			{ name: 'main', value: 'bg-main', cn: 'bg-main' },
			{ name: 'primary', value: 'bg-primary', cn: 'bg-primary' },
			{ name: 'secondary', value: 'bg-secondary', cn: 'bg-secondary' },
			{ name: 'muted', value: 'bg-muted', cn: 'bg-muted' },
			{ name: 'info', value: 'bg-info', cn: 'bg-info' },
			{ name: 'success', value: 'bg-success', cn: 'bg-success' },
			{ name: 'warning', value: 'bg-warning', cn: 'bg-warning' },
			{ name: 'error', value: 'bg-error', cn: 'bg-error' },
			{ name: 'ghost', value: 'bg-ghost', cn: 'bg-ghost' }
		],
		additional: [
			{ name: 'blue', value: 'bg-blue', cn: 'bg-blue text-blue-foreground' },
			{ name: 'green', value: 'bg-green', cn: 'bg-green text-green-foreground' },
			{ name: 'orange', value: 'bg-orange', cn: 'bg-orange text-orange-foreground' },
			{ name: 'red', value: 'bg-red', cn: 'bg-red text-red-foreground' },
			{ name: 'purple', value: 'bg-purple', cn: 'bg-purple text-purple-foreground' },
			{ name: 'pink', value: 'bg-pink', cn: 'bg-pink text-pink-foreground' }
		]
	};

	const copyOnClick = (node: HTMLSpanElement) => {
		let copy = node.textContent || '';

		node.addEventListener('click', () => navigator.clipboard.writeText(copy));
		return {
			destroy: () => {
				node.removeEventListener('click', () => navigator.clipboard.writeText(copy));
			}
		};
	};
</script>

<div in:fade={{ delay: 100, duration: 150 }}  class="flex w-full flex-col items-start justify-center gap-4 xl:flex-row">
	{#each Object.keys(collors) as key}
		<div class="flex w-full flex-col items-center justify-center border">
			<a href="#{key}" class="w-full py-2 pl-3 text-lg font-extrabold capitalize text-foreground/80">{key}</a>
			<div class="w-full space-y-1 border-t p-3">
				{#each collors[key] as { name, value, cn }}
					<div class="flex gap-3">
						<span class="{cn} cursor-pointer rounded-full border px-3 py-2" use:copyOnClick></span>
						<p class="text-xs font-semibold">{name}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.title {
		@apply text-xl font-bold underline underline-offset-2;
	}
	.item {
		@apply flex w-full flex-col justify-between gap-1 rounded px-6 py-4 text-xs font-bold xl:flex-row xl:gap-2 xl:text-base;
	}
	.item-sub {
		@apply font-normal italic;
	}
</style>
