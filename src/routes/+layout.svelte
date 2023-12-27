<script>
	import '../app.postcss';
	// import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import { navbarLink } from '$lib';
	import { ThemeToggler, themeInit, Spacer, Sheet, Link, Button } from '@components';
	import { goto } from '$app/navigation';

	// import { onNavigate } from '$app/navigation';

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });

	// onMount(() => {
	// themeInit();
	// console.log($page.route.id);
	// });

	$: console.log($page.url.pathname);
</script>

<div class="fixed z-50 flex w-full flex-col items-center justify-center bg-green pb-2 pt-4 text-center text-green-foreground">
	<a href="/" class="text-4xl font-extrabold italic">Syafa UI</a>
	<p class="pt-1 text-xs">
		Visit to the <a href="https://github.com/Amarosuli/syafa-ui" class="font-bold underline">Github</a> to give a star.
	</p>

	<ThemeToggler>Toggle Theme</ThemeToggler>
</div>

<div class="relative flex w-full flex-col items-center justify-center pb-6 pt-36 font-sans transition-colors duration-500 ease-in">
	<Sheet.Root>
		<Sheet.Trigger let:sheet>
			<div class="fixed bottom-10 right-0 z-50 sm:hidden">
				<Button on:click={sheet.toggle} variant="ghost">Menu</Button>
			</div>
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<Sheet.Header>
				<Sheet.Title>Shafa UI</Sheet.Title>
				<Sheet.Description>Simple User Interface for your projects.</Sheet.Description>
			</Sheet.Header>
			<div class="flex h-full w-full flex-col items-start overflow-auto">
				{#each navbarLink as { href, title }}
					<Button
						on:click={() => goto(href)}
						class="flex w-full items-center justify-start border-b p-2 text-2xs text-secondary-foreground first:border-t hover:bg-secondary {`${$page.url.pathname === href && 'bg-secondary'}`}"
						>{title}</Button>
				{/each}
			</div>
			<ThemeToggler>Toggle Theme</ThemeToggler>
			<Sheet.Footer>
				<Sheet.Close>close button</Sheet.Close>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>

	<div class="relative flex w-full justify-start">
		<section class="fixed hidden h-full w-48 max-w-lg flex-col flex-nowrap items-start overflow-auto border-r border-slate-300/70 p-4 sm:flex">
			{#each navbarLink as { href, title }}
				<Link {href} active={$page.route.id === href} classes="!text-slate-700">{title}</Link>
			{/each}
		</section>
		<!-- blank area as background list menu -->
		<section class="flex w-max sm:w-48 sm:flex-shrink-0"></section>
		<!-- main wrapper for content -->
		<section class="dark:dark container mx-5 mt-5 max-w-5xl flex-grow rounded-lg bg-background p-6 text-foreground shadow sm:mx-12 sm:mt-12 lg:flex-shrink-0">
			<slot />
		</section>
		<section class="dark:dark mx-5 mt-5 hidden h-fit w-full flex-shrink rounded-lg bg-background p-6 text-foreground shadow sm:-ml-4 sm:mr-8 sm:mt-12 xl:flex">
			<div class="flex flex-col">
				<h1 class="font-bold">Docs</h1>
				<p># Development #</p>
			</div>
		</section>
	</div>
</div>
