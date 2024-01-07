<div class="flex flex-col items-start justify-center gap-4">
	<h1 class="text-2xl font-bold text-foreground/80">Typography</h1>
	<p class="text-sm text-foreground/80">
		Typography is an important part of the Design System that brings consistency across experiences and platforms. Good typography rules help present content clearly and efficiently.
	</p>
	<h1 class="text-2xl font-bold text-foreground/80">Typeface</h1>
	<p class="text-sm text-foreground/80">
		Strapi Design System uses system fonts to provide the best experience on every Operating System (OS). Due to that change, a performance issue is also reduced.
	</p>
	<div class="flex w-full flex-col gap-2">
		<div class="flex w-full gap-12 bg-secondary p-4 align-top">
			<div>
				<p class="font-semibold text-foreground/80">Header 1</p>
				<p class="text-sm text-foreground/70">h1 ~ .header-1</p>
			</div>
			<div class="flex flex-col">
				<span class="text-sm italic text-foreground/60">font-bold</span>
				<span class="text-sm italic text-foreground/60">text-3xl </span>
				<span class="text-sm italic text-foreground/60">text-foreground</span>
			</div>
			<h1>Typography</h1>
		</div>
		<div class="flex w-full gap-12 bg-secondary p-4 align-top">
			<div>
				<p class="font-semibold text-foreground/80">Header 2</p>
				<p class="text-sm text-foreground/70">h2 ~ .header-2</p>
			</div>
			<div class="flex flex-col">
				<span class="text-sm italic text-foreground/60">font-bold</span>
				<span class="text-sm italic text-foreground/60">text-lg </span>
				<span class="text-sm italic text-foreground/60">text-foreground</span>
			</div>
			<h2>Typography</h2>
		</div>
		<div class="flex w-full gap-12 bg-secondary p-4 align-top">
			<div>
				<p class="font-semibold text-foreground/80">Header 3</p>
				<p class="text-sm text-foreground/70">h3 ~ .header-3</p>
			</div>
			<div class="flex flex-col">
				<span class="text-sm italic text-foreground/60">font-semibold</span>
				<span class="text-sm italic text-foreground/60">text-base </span>
				<span class="text-sm italic text-foreground/60">text-foreground</span>
			</div>
			<h3>Typography</h3>
		</div>
		<div class="flex w-full gap-12 bg-secondary p-4 align-top">
			<h4>H4 Header</h4>
			<h4>H4 This is typography text</h4>
			<h4>Typography</h4>
		</div>
	</div>
</div>

<style lang="postcss">
	h1,
	.header-1 {
		@apply text-3xl font-bold;
	}

	h2,
	.header-2 {
		@apply text-lg font-bold;
	}

	h3,
	.header-3 {
		@apply text-base font-semibold;
	}
</style>
