<script>
	import { Tabs, Button } from '@components';
</script>

<div class="flex w-full">
	<Tabs.Root>
		<Tabs.List>
			<Tabs.Trigger value="ui">User Interface</Tabs.Trigger>
			<Tabs.Trigger value="ux" default>User Experience</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="ui">
			<p>The user interface (UI) is the point of human-computer interaction and communication in a device.</p>
		</Tabs.Content>
		<Tabs.Content value="ux">
			<p>The user experience is how a user feels while interacting with a product, system or service.</p>
		</Tabs.Content>
	</Tabs.Root>
</div>
