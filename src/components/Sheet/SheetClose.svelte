<!-- 
   @component 
   ### Sheet.Close
   #### @ Description  
   Close button appear at top right corner  
   Should be use as a child of Sheet.Content component
      
   #### @ Example
   ```svelte
   <Sheet.Content>
      <Sheet.Close />
   <Sheet.Content />
   ```
 -->
<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Button } from '@components';
	import { getContext } from 'svelte';

	const { sheet }: { sheet: any } = getContext('sheetToggler');
</script>

<button class="btn icon absolute right-0 top-0 m-2" on:click={sheet.setFalse}>
	<X size="15" class="text-foreground" />
</button>

<!-- below not work, icon not showing -->
<!-- <div class="absolute right-0 top-0 z-[1000]">
	<Button.Event collor="ghost" variant="ghost">
      <X size="15" class="text-foreground" />
   </Button.Event>
</div> -->
