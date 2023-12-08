<script>
	import { Link } from '@components';
	import { Home } from 'lucide-svelte';
</script>

<Link href="/menu" underline={false}>
	<div class="flex h-24 w-24 flex-col items-center justify-between overflow-hidden rounded-lg border border-foreground/10 bg-foreground transition-all ease-out hover:bg-green">
		<div class="flex flex-1 items-center justify-center text-background">
			<Home size="25" />
		</div>
		<span class="flex h-10 w-full items-center justify-center whitespace-normal bg-background px-1 text-center text-xs leading-4">Go Home Again</span>
	</div>
</Link>
