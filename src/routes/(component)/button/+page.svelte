<script lang="ts">
	import { Button, Spacer, Loader } from '@components';
	import { ShieldQuestion, Check, AlertCircle } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	const buttons: Record<
		string,
		{
			name: string;
			collor?: collorType;
			variant?: string[];
			size?: string;
			icon?: any;
		}[]
	> = {
		varian: [
			{ name: 'main', collor: 'main' },
			{ name: 'success', collor: 'success' },
			{ name: 'primary', collor: 'primary' }
		],
		size: [
			{ name: 'smaller', collor: 'main', size: 'sm' },
			{ name: 'default', collor: 'success', size: 'md' },
			{ name: 'bigger', collor: 'primary', size: 'lg' }
		],
		icon: [],
		style: []
	};
</script>

<div in:fade={{ delay: 100, duration: 150 }} class="flex w-full flex-col items-start justify-center gap-4 xl:flex-row">
	{#each Object.keys(buttons) as key}
		<div class="flex w-full flex-col items-center justify-center border">
			<a href="#{key}" class="w-full py-2 pl-3 text-lg font-extrabold capitalize text-foreground/80">{key}</a>
			<div class="w-full space-y-2 border-t p-3">
				{#each buttons[key] as { name, collor, size }}
					<div class="flex gap-3">
						<Button {collor}>Button</Button>
						<p class="text-xs font-semibold">{name}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<!-- <div class="hidden flex flex-col items-start justify-center gap-4">


	<div class="group">
		<p class="title">Button Icon</p>
		<Spacer />
		<div class="item">
			<Button collor="info">Info<ShieldQuestion size="15" /></Button>
			<Button collor="success"><Check size="15" />Success</Button>
			<Button collor="error">Error <AlertCircle size="15" /></Button>
			<Button size="icon" variant={['rounded']}><AlertCircle size="15" /></Button>
		</div>
	</div>

	<div class="group">
		<p class="title">Button Style</p>
		<Spacer />
		<div class="item">
			<Button collor="ghost">Ghost</Button>
			<Button collor="ghost" variant={['ghost', 'outline', 'rounded']}>Ghost Outline</Button>
			<Button collor="main" variant="rounded">Rounded</Button>
			<Button collor="muted">Muted</Button>
			<Button collor="warning" form="formSubmit">Submit</Button>
			<Button collor="info" disabled variant="outline">Disabled</Button>
			<Button collor="main"><Loader text="Fetching" /></Button>
		</div>
	</div>
</div> -->

<style lang="postcss">
	.title {
		@apply text-xl font-semibold;
	}
	.group {
		@apply flex w-full flex-col;
	}

	.item {
		@apply flex flex-col items-start gap-2 xl:flex-row;
	}
</style>
