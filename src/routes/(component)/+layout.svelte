<script lang="ts">
	import '../../app.postcss';

	import { page } from '$app/stores';
	import { navbarLink } from '$lib/sets';
	import { slide, fade, fly } from 'svelte/transition';
	import { ThemeToggler, Link } from '@components';

	let { children } = $props();
	let isAsideOpen: boolean = $state(false);
	let windowWidth = $state(0);
	let isScreenLarge = $derived(windowWidth > 768);
	let pathname = $derived($page.url.pathname)

	function toggleAside() {
		isAsideOpen = !isAsideOpen;
	};

	$effect(() => {
		isAsideOpen = isScreenLarge;
	});

	const backdropEventHandler = (node: HTMLDivElement) => {

		node.addEventListener('click', toggleAside);

		return {
			destroy: () => {
				node.removeEventListener('click', toggleAside);
			}
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
	<title>Syafa UI</title>
</svelte:head>

<div
	class="{isScreenLarge
		? 'items-center'
		: 'items-start pl-6'} fixed left-0 top-0 z-50 flex h-24 w-full flex-shrink-0 flex-grow flex-col justify-center bg-secondary pb-2 pt-4 text-center text-green-foreground">
	<div class="h-max">

		<a href="/" class="text-4xl font-extrabold italic text-foreground">Syafa UI</a>
		<p class="pt-1 text-xs text-foreground">
			Visit to the <Link active href="https://github.com/Amarosuli/syafa-ui">Github</Link> to give a star.
		</p>
	</div>
	<div class="fixed right-4 top-4 h-24 w-fit flex justify-center items-center">
		<ThemeToggler />
	</div>
</div>

<div class="relative mt-24 flex w-screen justify-start">
	<button class="fixed bottom-12 right-0 h-16 w-14 rounded-l-3xl bg-secondary text-foreground text-xs md:hidden" onclick={toggleAside}>Toggle</button>
	{#if isAsideOpen}
		<aside transition:slide={{ axis: 'x', duration: 150 }} class="fixed overflow-y-scroll left-0 top-0 z-30 mt-24 h-screen w-[300px] bg-secondary px-6 pt-5">
			{#each navbarLink as { href, title, isDisabled }, index}
				<div in:fly={{ x: -8, duration: 150, delay: 100 * index }} >
					<Link {href} underline={true} active={pathname === href} {isDisabled}>{title}</Link>
				</div>
			{/each}
			<div class="h-32"></div>
		</aside>
		<div use:backdropEventHandler transition:fade={{ duration: 100 }} class="{isScreenLarge ? 'hidden' : ''} fixed left-0 top-0 z-20 h-screen w-full bg-backdround/40 backdrop-blur-sm"></div>
	{/if}

	<main class="dark:dark container mx-4 mt-4 max-w-full rounded-lg bg-background p-6 text-foreground shadow md:ml-[316px]">
		{@render children()}
	</main>
</div>
