<script>
	import { page } from '$app/stores';
	import { ShieldAlert } from 'lucide-svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center pt-[20rem]">
	<ShieldAlert />
	<h1>{$page?.error?.message}</h1>
</div>
