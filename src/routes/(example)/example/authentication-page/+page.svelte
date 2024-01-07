<script lang="ts">
	import { Field, Button } from '@components';
</script>

<div class="flex h-full w-full items-center justify-center bg-background text-foreground">
	<div class="flex h-screen w-1/2 items-center justify-center bg-foreground text-background">
		<h1 class="text-3xl font-bold">Authentication Page</h1>
	</div>
	<div class="flex h-screen w-1/2 items-center justify-center">
		<div class="flex w-[300px] flex-col items-center justify-center">
			<Field.Text label="Username" />
			<Field.Password label="Password" />
			<Button variant={['rounded', 'outline']}>Login</Button>
		</div>
	</div>
</div>
