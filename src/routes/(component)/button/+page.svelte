<script lang="ts">
	import { Button, Spacer, Loader } from '@components';
	import { ShieldQuestion, Check, AlertCircle } from 'lucide-svelte';
</script>

<div class="flex flex-col items-start justify-center gap-4">
	<div class="group">
		<p class="title">Button Varian</p>
		<Spacer />
		<div class="item">
			<Button collor="main">Button Main</Button>
			<Button collor="success">Button Success</Button>
			<Button collor="primary">Button Primary</Button>
		</div>
	</div>
	<div class="group">
		<p class="title">Button Size</p>
		<Spacer />
		<div class="item">
			<Button collor="main" size="smaller">Small</Button>
			<Button collor="success" size="default">Default</Button>
			<Button collor="primary" size="bigger">Bigger</Button>
		</div>
	</div>

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
</div>

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
