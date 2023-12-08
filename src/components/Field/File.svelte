<!-- 
   @component
   Input File
   --
   props -> value, label, description, error, & commons attributes for file input.
 -->
<script lang="ts">
	import { scale, fly, slide } from 'svelte/transition';
	import { clickOutSide } from '@components';
	import { BookPlus, Clapperboard, FilePlus, ImagePlus, Music4, Pause, Play, Volume2, X } from 'lucide-svelte';

	export let value: any = '';
	export let label: string = '';
	export let description: string = '';
	export let error: string = '';
	export let type: inputFileType = 'file';

	let imagePreview: HTMLElement;
	let audioPreview: HTMLElement;
	let videoPreview: HTMLElement;

	let showImagePreview: boolean = false;
	let showAudioPreview: boolean = false;
	let showVideoPreview: boolean = false;

	let placeholder: HTMLElement;
	let showReset: boolean = false;
	let fileName: String = type;
	let isHover: boolean = true;
	let input: HTMLElement;

	function handleInput(e: any) {
		const file = e.target.files[0];

		if (file) {
			switch (type) {
				case 'image':
					handleImage(file);
					break;
				case 'video':
					handleVideo(file);
					break;
				case 'audio':
					handleAudio(file);
					break;
				case 'document':
					handleDocument(file);
					break;
				default:
					handleFile(file);
					break;
			}
		}
	}

	function handleFile(file: File) {
		showReset = true;
		fileName = file.name;
		isHover = false;
	}

	function handleImage(file: File) {
		handleFile(file);
		showImagePreview = true;

		const reader: any = new FileReader();

		reader.addEventListener('load', function () {
			imagePreview.setAttribute('src', reader.result);
		});
		reader.readAsDataURL(file);
	}

	function handleAudio(file: File) {
		handleFile(file);
		showAudioPreview = true;

		const reader: any = new FileReader();

		reader.addEventListener('load', function () {
			audioPreview.setAttribute('src', reader.result);
		});
		reader.readAsDataURL(file);
	}

	function handleVideo(file: File) {
		handleFile(file);
		showVideoPreview = true;

		const reader: any = new FileReader();

		reader.addEventListener('load', function () {
			videoPreview.setAttribute('src', reader.result);
		});
		reader.readAsDataURL(file);
	}

	function handleDocument(file: File) {
		handleFile(file);
		// showDocumentPreview = true;
	}

	function handleReset(e: any) {
		if (e.target.id !== 'close-btn' && e.target.nodeName !== 'path') return;

		fileName = type;
		isHover = true;
		showReset = false;
		showImagePreview = false;
		showVideoPreview = false;
		showAudioPreview = false;
		// showDocumentPreview = false;
	}

	function handleClick() {
		if (showReset) input.click;
	}

	let playButton = false;
	let volumeValue = 100;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label class="label file">
	<span class="top" class:text-error={error}>{label}</span>
	<div class="field file overflow-hidden" class:cursor-pointer={isHover} class:hover={isHover}>
		<div class="relative flex w-full items-center gap-2">
			{#if type === 'image'}
				<ImagePlus size="15" />
			{:else if type === 'document'}
				<BookPlus size="15" />
			{:else if type === 'audio'}
				<Music4 size="15" />
			{:else if type === 'video'}
				<Clapperboard size="15" />
			{:else}
				<FilePlus size="15" />
			{/if}
			<p class="w-full truncate pr-7">{fileName}</p>
			{#if showReset}
				<div class="absolute right-0 h-full items-center place-self-end self-end hover:text-red-400">
					<button on:click|capture|stopPropagation={handleReset}>
						<X size="15" id="close-btn" />
					</button>
				</div>
			{/if}
		</div>
		<input bind:this={input} on:input={handleInput} class="hidden" type="file" alt={type} {...$$restProps} bind:value />

		{#if showImagePreview}
			<img transition:fly={{ y: '-10' }} bind:this={imagePreview} src="" alt="..." class="mb-2 rounded" />
		{/if}

		{#if showAudioPreview}
			<div transition:fly={{ y: '-10' }} class="flex w-full items-center justify-center gap-2">
				<div class="flex w-full items-center justify-start gap-2 rounded bg-foreground/10 p-2">
					<button on:click={() => (playButton = !playButton)}>
						{#if playButton}
							<Pause size="15" />
						{:else}
							<Play size="15" />
						{/if}
					</button>
					<input type="range" id="seek-slider" max="100" value="0" />
				</div>
				<div class="flex items-center justify-start gap-2 rounded bg-foreground/10 p-2">
					<Volume2 size="15" />
					<!-- <input type="range" id="volume-slider" max="100" bind:value={volumeValue} /> -->
				</div>
				<output id="volume-output" class="hidden">{volumeValue}</output>
			</div>
			<audio controls bind:this={audioPreview} src="" class="m-2 hidden"></audio>
		{/if}

		{#if showVideoPreview}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls transition:scale bind:this={videoPreview} src=""> </video>
		{/if}
	</div>
	<span class="bottom">{description}</span>
	<span class="error">{error}</span>
</label>

<style lang="scss">
	.hover {
		@apply hover:bg-ghost-foreground/10;
	}

	input[type='range'] {
		@apply appearance-none bg-transparent outline-none;
	}

	input[type='range']::-webkit-slider-thumb,
	input[type='range']::-ms-thumb,
	input[type='range']::-moz-range-thumb {
		@apply appearance-none bg-secondary;
	}
	input[type='range']:active::-webkit-slider-thumb,
	input[type='range']:active::-ms-thumb,
	input[type='range']:active::-moz-range-thumb {
		@apply h-1 w-1 bg-background/50;
	}

	input[type='range']::-webkit-slider-runnable-track,
	input[type='range']::-moz-range-track {
		@apply h-1 w-full cursor-pointer bg-black;
	}
	input[type='range']::-moz-range-progress {
		@apply bg-foreground;
	}
	input[type='range']::-moz-focus-outer {
		@apply border-none;
	}

	// input[type='range']::-ms-track {
	// 	width: 100%;
	// 	height: 3px;
	// 	cursor: pointer;
	// 	background: transparent;
	// 	border: solid transparent;
	// 	color: transparent;
	// }
	// input[type='range']::-ms-fill-lower {
	// 	background-color: #007db5;
	// }
	// input[type='range']::-ms-fill-upper {
	// 	background: linear-gradient(to right, rgba(0, 125, 181, 0.6) var(--buffered-width), rgba(0, 125, 181, 0.2) var(--buffered-width));
	// }
</style>
