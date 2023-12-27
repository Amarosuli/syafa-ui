<script>
	import { Field, Button } from '@components';

	let options = [
		{ label: 'German', value: 'German' },
		{ label: 'Indonesia', value: 'Indonesia' },
		{ label: 'Vietnam', value: 'Vietnam' }
	];

	let showPlaceholder = false;
	let showLabel = true;
	let showDescription = false;
	let showError = false;
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<div class="mb-4 flex h-max w-full flex-col justify-center divide-y divide-background/30 self-start overflow-hidden rounded-[var(--radius)] sm:w-max sm:flex-row sm:divide-x">
		<Button size="smaller" on:click={() => (showPlaceholder = !showPlaceholder)}>{showPlaceholder ? 'Hide' : 'Show'} Placeholder</Button>
		<Button size="smaller" on:click={() => (showLabel = !showLabel)}>{showLabel ? 'Hide' : 'Show'} Label</Button>
		<Button size="smaller" on:click={() => (showDescription = !showDescription)}>{showDescription ? 'Hide' : 'Show'} Description</Button>
		<Button size="smaller" on:click={() => (showError = !showError)}>{showError ? 'Hide' : 'Show'} Error</Button>
	</div>

	<div class="flex w-full flex-col space-y-2 self-start">
		<Field.Select label={`${showLabel ? 'select input' : ''}`} description={`${showDescription ? 'this is your select description.' : ''}`} error={`${showError ? 'Required' : ''}`}>
			{#each options as opt}
				<Field.Option {opt}>{opt?.label}</Field.Option>
			{/each}
		</Field.Select>
		<Field.Date label={`${showLabel ? 'date input' : ''}`} description={`${showDescription ? 'this is your date description.' : ''}`} error={`${showError ? 'Required' : ''}`} />
		<Field.Text
			placeholder={`${showPlaceholder ? 'Type something..' : ''}`}
			label={`${showLabel ? 'text input' : ''}`}
			description={`${showDescription ? 'this is your text description.' : ''}`}
			error={`${showError ? 'Minimal 5 characters' : ''}`} />

		<Field.TextArea
			placeholder={`${showPlaceholder ? 'Type something..' : ''}`}
			label={`${showLabel ? 'textarea input' : ''}`}
			description={`${showDescription ? 'this is your textarea description.' : ''}`}
			error={`${showError ? 'Minimal 5 characters' : ''}`} />

		<Field.Search
			placeholder={`${showPlaceholder ? 'Search something..' : ''}`}
			label={`${showLabel ? 'search input' : ''}`}
			description={`${showDescription ? 'this is your search description.' : ''}`}
			error={`${showError ? 'Minimal 5 characters' : ''}`}
			on:search={(e) => console.log(e)} />

		<Field.Email
			placeholder={`${showPlaceholder ? 'Type your email..' : ''}`}
			label={`${showLabel ? 'email input' : ''}`}
			description={`${showDescription ? 'this is your email description.' : ''}`}
			error={`${showError ? 'Wrong format' : ''}`} />

		<Field.Password
			placeholder={`${showPlaceholder ? 'Type your password..' : ''}`}
			label={`${showLabel ? 'password input' : ''}`}
			description={`${showDescription ? 'this is your password description.' : ''}`}
			error={`${showError ? 'Minimal 1000 characters' : ''}`} />

		<Field.File label={`${showLabel ? 'file input' : ''}`} description={`${showDescription ? 'this is your file description.' : ''}`} error={`${showError ? 'Maximal 2MB' : ''}`} />

		<Field.File type="image" label={`${showLabel ? 'image input' : ''}`} description={`${showDescription ? 'this is your image description.' : ''}`} error={`${showError ? 'Maximal 2MB' : ''}`} />

		<Field.File
			type="document"
			label={`${showLabel ? 'document input' : ''}`}
			description={`${showDescription ? 'this is your document description.' : ''}`}
			error={`${showError ? 'Maximal 2MB' : ''}`} />

		<Field.File type="audio" label={`${showLabel ? 'audio input' : ''}`} description={`${showDescription ? 'this is your audio description.' : ''}`} error={`${showError ? 'Maximal 2MB' : ''}`} />

		<Field.File type="video" label={`${showLabel ? 'video input' : ''}`} description={`${showDescription ? 'this is your video description.' : ''}`} error={`${showError ? 'Maximal 2MB' : ''}`} />

		<Field.Switch label={`${showLabel ? 'switch input' : ''}`} description={`${showDescription ? 'this is your switch description.' : ''}`} error={`${showError ? 'Should be true' : ''}`} />

		<Field.Number value="" />
		<Field.Slider value="" />
	</div>
</div>
