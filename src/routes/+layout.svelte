<script>
	import '../app.postcss';
	import '@components/component.style.scss';
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
</script>

<div class="fixed z-50 flex w-full flex-col items-center justify-center bg-green pb-2 pt-4 text-center text-green-foreground">
	<a href="/" class="text-3xl font-bold">Syafa UI</a>
	<p class="text-xs">
		Visit to the <a href="https://github.com/Amarosuli" class="underline">Github</a> to give a star.
	</p>

	<ThemeToggler>Toggle Theme</ThemeToggler>
</div>

<div class="relative flex w-full flex-col items-center justify-center bg-background pb-6 pt-40 transition-colors duration-500 ease-in">
	<Sheet.Root>
		<Sheet.Trigger let:sheet>
			<div class="fixed bottom-10 right-0 z-50 xl:hidden">
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
						class="flex w-full items-center justify-start border-b p-2 text-2xs text-secondary-foreground first:border-t hover:bg-secondary {`${$page.route.id === href && 'bg-secondary'}`}"
						>{title}</Button>
				{/each}
			</div>
			<ThemeToggler>Toggle Theme</ThemeToggler>
			<Sheet.Footer>
				<Sheet.Close>close button</Sheet.Close>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>

	<div class="left-0 top-0 hidden h-full w-max flex-col items-start gap-2 overflow-auto p-4 pt-36 xl:fixed xl:flex">
		{#each navbarLink as { href, title }}
			<Link {href} active={$page.route.id === href}>{title}</Link>
		{/each}
	</div>

	<div class="container mx-auto">
		<slot />
	</div>
</div>

<style lang="postcss">
	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
