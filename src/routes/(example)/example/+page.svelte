<script lang="ts">
	import { goto } from '$app/navigation';

	const examples: any[] = [
		{
			title: 'Authentication',
			description: 'User Interface for login process',
			link: '/authentication-page',
			content: {
				image: '',
				text: 'This page using Syafa UI version 1.0.3'
			},
			footer: {
				text: 'Opensource code available in github pages.'
			}
		},
		{
			title: 'Data Management (Table)',
			description: 'User Interface for crud system base on table',
			link: '/data-management-page',
			content: {
				image: '',
				text: 'This page using Syafa UI version 1.0.3'
			},
			footer: {
				text: 'Opensource code available in github pages.'
			}
		}
	];
</script>

<div class="container mx-auto">
	<section class="flex w-full gap-3 p-3">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		{#each examples as example, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="card w-1/4 max-w-md cursor-pointer select-none bg-slate-300 transition-all hover:bg-slate-200 hover:shadow" on:click={() => goto('/example' + example.link)}>
				<div class="header flex flex-col items-center justify-center p-2">
					<h1 class="w-full text-left font-semibold">{example.title}</h1>
					<p class="w-full text-left text-xs">{example.description}</p>
				</div>
				<div class="content p-2">Card Content</div>
				<div class="footer p-2 text-xs">{example.footer.text}</div>
			</div>
		{/each}
	</section>
</div>
