<script lang="ts">
	import { Link } from '@components';
	import { fade } from 'svelte/transition';

	interface LinkExample {
		label: string;
		href: string;
		underline?: boolean;
		active?: boolean;
		description: string;
	}

	const linkExamples : LinkExample[] = [
		{
			label: 'Link',
			href: '/link',
			description: 'Basic'
		},
		{
			label: 'About',
			href: '/link',
			underline: true,
			description: 'With underline'
		},
		{
			label: 'Link',
			href: '/link',
			underline: true,
			active: true,
			description: 'With underline'
		},
	]
</script>

<div in:fade={{ delay: 100, duration: 150 }} class="flex border p-4 w-full flex-col items-start justify-center gap-4 xl:flex-row">
	{#each linkExamples as { label, href, underline, active, description }}
	<div class="">
		<p class="text-xs border-b border italic text-foreground/60">{description}</p>
		<Link {href} underline={underline} active={active} >{label}</Link>
	</div>
	{/each}
</div>
