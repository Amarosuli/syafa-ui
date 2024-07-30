<!-- 
   @component
   ### Button
   Button with dedicated use for event handler, commonly like a click event.

   ### Props
   collor, variant, disabled, size  
   modalName - to interact with Modal Component
 -->

<script lang="ts">
	import { modal, buttonCollor, buttonVariant } from '@components';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
		children: Snippet;
		collor: collorType;
		variant?: buttonVariant | buttonVariant[];
		disabled?: boolean;
		size?: buttonSize;
		modalName?: string;
		outline?: boolean;
		rounded?: boolean;
		form?: boolean;
		onclick?: (event: Event) => void;
	}

	let { children, onclick, collor = 'primary', variant = 'ghost', disabled = false, size = 'default', modalName, outline = false, rounded = false, form = false, ...restProps }: ButtonProps = $props();

	function getVariant(variant: buttonVariant | buttonVariant[]): string | undefined {
		if (outline) {
		}
		if (rounded) {
		}
		if (typeof variant !== 'undefined' && typeof variant === 'string') {
			return buttonVariant[variant];
		}
		if (typeof variant !== 'undefined' && Array.isArray(variant)) {
			let list = '';
			variant.forEach((e: buttonVariant) => {
				list = list + ' ' + buttonVariant[e];
			});
			return list;
		}
	}

	function getSize(size: buttonSize): buttonSize {
		return size;
	}

	function getButtonType(): 'submit' | 'button' {
		if (form) return 'submit';
		return 'button';
	}

	let type = $derived(getButtonType());
	let classes = $derived(`btn ${getVariant(variant)} ${getSize(size)} ${disabled ? buttonCollor['muted'] : buttonCollor[collor]}`);

	function handleModal(node: Node): void {
		if (!modalName) return;

		node.addEventListener('click', () => modal.show(modalName));
	}
</script>

<button {type} {onclick} {disabled} use:handleModal class={classes} {...restProps}>
	{@render children()}
</button>
