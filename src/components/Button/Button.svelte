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

	export let collor: collorType = 'primary';
	export let variant: buttonVariant | buttonVariant[] = 'ghost';
	export let disabled: boolean = false;
	export let size: buttonSize = 'default';

	/**
	 * @description getVariant is a function to return the set variant classes
	 */
	function getVariant(variant: buttonVariant | buttonVariant[]): string | undefined {
		if ($$restProps?.outline) {
		}
		if ($$restProps?.rounded) {
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

	/**
	 * @description getSize is a function to return the class that handle size of the button
	 */
	function getSize(size: buttonSize): buttonSize {
		return size;
	}

	/**
	 * @return {string} getButtonType
	 */
	function getButtonType(): 'submit' | 'button' {
		if ($$restProps.form) return 'submit';
		return 'button';
	}

	$: type = getButtonType();
	$: classes = `btn ${getVariant(variant)} ${getSize(size)} ${disabled ? buttonCollor['muted'] : buttonCollor[collor]}`;

	/**
	 *
	 * @param {*} node
	 */
	function handleModal(node: Node): void {
		if (!$$restProps.modalName) return;

		node.addEventListener('click', () => modal.show($$restProps.modalName));
	}
</script>

<button {type} on:click {disabled} use:handleModal class={classes} {...$$restProps}>
	<slot />
</button>
