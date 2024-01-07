<script>
	import { Form, Field } from '@components';

	let options = [
		{ label: 'German', value: 'German' },
		{ label: 'Indonesia', value: 'Indonesia' },
		{ label: 'Vietnam', value: 'Vietnam' }
	];
</script>

<div class="flex flex-col items-start justify-start gap-4 xl:flex-row">
	<Form.Root id="example" action="/example" method="POST" enctype="multipart/form-data">
		<Form.Title>Example Form</Form.Title>
		<Form.Item>
			<Field.Select let:Option>
				{#each options as opt}
					<!-- <Option {opt} /> -->
					<Field.Option {opt}>{opt?.label}</Field.Option>
				{/each}
			</Field.Select>

			<Field.Text id="textInput" value="" placeholder="Text Input" />
			<Field.TextArea id="textInput" value="" placeholder="Text Area" />
			<Field.Email id="emailInput" value="" placeholder="Email Input" />
			<Field.Password id="passwordInput" value="" placeholder="Password Input" />
		</Form.Item>
		<Form.Error>Error</Form.Error>
	</Form.Root>
</div>
