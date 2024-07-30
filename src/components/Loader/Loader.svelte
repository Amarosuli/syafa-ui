<!-- 
   @component
   Loader
   --
   props -> text
 -->
<script lang="ts">
	import { Loader2 } from 'lucide-svelte';

	let { text = '' }: { text: string } = $props();
</script>

<div class="flex items-center justify-center gap-2">
	<Loader2 size="15" class="animate-spin" />
	{text}
</div>
