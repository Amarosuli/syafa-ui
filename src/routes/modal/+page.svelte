<script lang="ts">
	import { Modal, Button } from '@components';
</script>

<Modal.Root name="modal_1">
	<Modal.Content>
		<Modal.Header>
			<Modal.Title>First Modal</Modal.Title>
			<Modal.Description>First Modal is just a first modal. Doesn't mean it was a secondary modal.</Modal.Description>
		</Modal.Header>

		Hallo Modal 1
	</Modal.Content>
</Modal.Root>

<Modal.Root name="modal_2" overlay={false}>
	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Second Modal</Modal.Title>
			<Modal.Description>Second Modal is just a secondary modal. Doesn't mean it was a primary modal.</Modal.Description>
		</Modal.Header>

		halllo

		<Modal.Footer>
			<Button variant="rounded">Save Changes</Button>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>

<div class="flex flex-col items-center justify-center gap-4">
	<Button variant={['ghost', 'outline', 'rounded']} collor="ghost" modalName="modal_1">Modal 1</Button>
	<Button variant={['ghost', 'outline', 'rounded']} collor="ghost" modalName="modal_2">Modal 2</Button>
</div>
