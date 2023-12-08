<script>
	// @ts-nocheck

	import CanvasDraw from './CanvasDraw.svelte';
	let brushColor = '#444';
	let brushRadius = 3;
	let imgBase64 = null;
	let SDraw = null;

	// function setUploadedImage(e) {
	// 	// console.log(fileUploader.files)
	// 	console.log(e.target.files[0]);

	// 	if (e.target.files[0]) {
	// 		let reader = new FileReader();
	// 		reader.readAsDataURL(e.target.files[0]);
	// 		console.log(reader.result);
	// 		reader.onload = (ev) => {
	// 			// console.log(ev.target.result)
	// 			// imgBase64 = reader.result;
	// 			imgBase64 = ev.target.result;
	// 			setBgImage();
	// 		};
	// 	}
	// }

	function downloadDrawingFile(contentBase64) {
		const downloadLink = document.createElement('a');
		document.body.appendChild(downloadLink);

		downloadLink.href = contentBase64;
		downloadLink.target = '_self';
		downloadLink.download = 'svelte-draw-export-' + +new Date();
		downloadLink.click();
	}

	// function setBgImage() {
	// 	bgImage = imgBase64;
	// }

	function clear() {
		SDraw.clearDrawings();
	}

	function undo() {
		SDraw.undoDrawings();
	}

	function get_image_data() {
		let preparedDS = SDraw.get_image_data();
		downloadDrawingFile(preparedDS);
	}
</script>

<div class="container p-6">
	<div class="flex items-center justify-center bg-slate-300 p-6 text-primary-foreground">
		<CanvasDraw bind:this={SDraw} {brushColor} {brushRadius} canvasWidth="640" hideInterface={true} />
	</div>
	<div class="flex justify-center gap-2">
		<div class="col-auto">
			<button class="btn btn-primary" on:click={clear}>Clear</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-primary" on:click={undo}>Undo</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-primary">Save</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-primary" on:click={get_image_data}>Download</button>
		</div>
	</div>
</div>
