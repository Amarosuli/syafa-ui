// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes {
			clickOutSide?: (e: CustomEvent) => void;
		}
	}

	type collorType = 'main' | 'primary' | 'secondary' | 'muted' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'none';

	type buttonVariant = 'rounded' | 'outline' | 'ghost';
	type buttonSize = 'default' | 'smaller' | 'bigger' | 'icon';
	type sheetSide = 'right' | 'left' | 'top' | 'bottom';
	type selectOption = { value: string | number; label: string } | {};
	type inputFileType = 'image' | 'document' | 'video' | 'audio' | 'file';
}
// declare namespace svelte.JSX {
// 	interface HTMLProps<T> {
// 		clickOutSide?: (e: CustomEvent) => void;
// 	}
// }

export {};
