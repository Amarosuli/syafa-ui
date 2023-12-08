<div class="container mx-auto flex flex-col items-start justify-center gap-4 xl:flex-row">
	<div class="flex w-full flex-col items-start justify-center gap-4">
		<p class="title">Base Collors</p>
		<span class="item bg-background text-foreground">Background <span class="item-sub">bg-background text-foreground</span></span>
		<span class="item bg-foreground text-background">Foreground <span class="item-sub">bg-foreground text-background</span></span>
	</div>
	<div class="flex w-full flex-col items-start justify-center gap-4">
		<p class="title">System Collors</p>
		<span class="item bg-main text-main-foreground">Main <span class="item-sub">bg-main text-main-foreground</span></span>
		<span class="item bg-primary text-primary-foreground">Primary <span class="item-sub">bg-primary text-primary-foreground</span></span>
		<span class="item bg-secondary text-secondary-foreground">Secondary <span class="item-sub">bg-secondary text-secondary-foreground</span></span>
		<span class="item bg-muted text-muted-foreground">Muted <span class="item-sub">bg-muted text-muted-foreground</span></span>
		<span class="item bg-info text-info-foreground">Info <span class="item-sub">bg-info text-info-foreground</span></span>
		<span class="item bg-success text-success-foreground">Success <span class="item-sub">bg-success text-success-foreground</span></span>
		<span class="item bg-warning text-warning-foreground">Warning <span class="item-sub">bg-warning text-warning-foreground</span></span>
		<span class="item bg-error text-error-foreground">Error <span class="item-sub">bg-error text-error-foreground</span></span>
		<span class="item bg-ghost text-ghost-foreground">Ghost <span class="item-sub">bg-ghost text-ghost-foreground</span></span>
	</div>
	<div class="flex w-full flex-col items-start justify-center gap-4">
		<p class="title">Additional Collors</p>
		<span class="item bg-blue text-blue-foreground">Blue <span class="item-sub">bg-blue text-blue-foreground</span></span>
		<span class="item bg-green text-green-foreground">Green <span class="item-sub">bg-green text-green-foreground</span></span>
		<span class="item bg-orange text-orange-foreground">Orange <span class="item-sub">bg-orange text-orange-foreground</span></span>
		<span class="item bg-red text-red-foreground">Red <span class="item-sub">bg-red text-red-foreground</span></span>
		<span class="item bg-purple text-purple-foreground">Purple <span class="item-sub">bg-purple text-purple-foreground</span></span>
		<span class="item bg-pink text-pink-foreground">Pink <span class="item-sub">bg-pink text-pink-foreground</span></span>
	</div>
</div>

<style lang="postcss">
	.title {
		@apply text-xl font-semibold;
	}
	.item {
		@apply flex w-full flex-col justify-between gap-1 rounded px-6 py-4 text-xs font-bold xl:flex-row xl:gap-2 xl:text-base;
	}
	.item-sub {
		@apply font-normal italic;
	}
</style>
