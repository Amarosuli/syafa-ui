<script lang="ts">
	import { createCombobox, melt, type ComboboxOptionProps } from '@melt-ui/svelte';

	import { Check, ChevronDown, ChevronUp } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	type Manga = {
		author: string;
		title: string;
		disabled: boolean;
	};

	export let value: any = '';
	export let error: string = '';
	export let label: string = '';
	export let description: string = '';

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

	let mangas: Manga[] = [
		{
			author: 'Kentaro Miura',
			title: 'Berserk',
			disabled: false
		},
		{
			author: 'ONE',
			title: 'Mob Psycho 100',
			disabled: false
		},
		{
			author: 'Hajime Isayama',
			title: 'Attack on Titan',
			disabled: false
		},
		{
			author: 'Junji Ito',
			title: 'Uzumaki',
			disabled: false
		},
		{
			author: 'Yomi Sarachi',
			title: 'Steins Gate',
			disabled: false
		},
		{
			author: 'Tite Kubo',
			title: 'Bleach',
			disabled: false
		},
		{
			author: 'Masashi Kishimoto',
			title: 'Naruto',
			disabled: true
		},
		{
			author: 'Katsura Hoshino',
			title: 'D.Gray Man',
			disabled: false
		},
		{
			author: 'Tsugumi Ohba',
			title: 'Death Note',
			disabled: false
		},
		{
			author: 'Hiromu Arakawa',
			title: 'Fullmetal Alchemist',
			disabled: false
		}
	];

	const toOption = (manga: Manga): ComboboxOptionProps<Manga> => ({
		value: manga,
		label: manga.title,
		disabled: manga.disabled
	});

	const {
		elements: { menu, input, option, label: _label },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<Manga>({
		forceVisible: true
	});

	$: if (!$open) {
		$inputValue = $selected?.label ?? '';
	}

	$: filteredMangas = $touchedInput
		? mangas.filter(({ title, author }) => {
				const normalizedInput = $inputValue.toLowerCase();
				return title.toLowerCase().includes(normalizedInput) || author.toLowerCase().includes(normalizedInput);
		  })
		: mangas;
</script>

<label class="label combobox" use:melt={$_label}>
	<span class="top" class:text-error={error}>{label}</span>
	<div class="field combobox relative overflow-hidden">
		<input use:melt={$input} class="w-full bg-background px-4 py-3 text-foreground outline-none disabled:bg-muted disabled:text-muted-foreground" placeholder="Best book ever" />
		<div class="absolute right-0 top-0 flex h-full items-center justify-between">
			{#if $open}
				<span class="absolute right-4" in:spin={{ duration: 200, rotate: 70 }}>
					<ChevronUp size="15" />
				</span>
			{:else}
				<span class="absolute right-4" in:spin={{ duration: 200, rotate: 70 }}>
					<ChevronDown size="15" />
				</span>
			{/if}
		</div>
	</div>
	{#if $open}
		<div
			class="absolute top-full z-20 mt-1 flex max-h-[300px] w-full flex-col overflow-hidden rounded-[var(--radius)] border bg-background text-xs text-foreground shadow xl:text-sm"
			use:melt={$menu}
			transition:fly={{ duration: 150, y: -10 }}>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="flex max-h-full flex-col gap-0 overflow-y-auto p-2" tabindex="0">
				{#each filteredMangas as manga, index (index)}
					<button use:melt={$option(toOption(manga))} class="w-full rounded px-4 py-3 text-left hover:bg-secondary disabled:hover:bg-background">
						<div class="relative pl-4">
							{#if $isSelected(manga)}
								<div class="absolute -left-2 flex h-full items-center justify-center">
									<Check size="15" />
								</div>
							{/if}
							<span>{manga.title}</span>
							<span class="block">{manga.author}</span>
						</div>
					</button>
				{:else}
					<button class="relative cursor-pointer rounded-md py-1 pl-8 pr-4 text-warning">No results found</button>
				{/each}
			</div>
		</div>
	{/if}
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>
