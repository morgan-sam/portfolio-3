<div class="w-72 h-72 relative isolate rounded-full overflow-hidden">
	<div class="noise w-full h-full" />
	<div class="overlay absolute top-0 w-full h-full" />
</div>

<style>
	.noise {
		background: linear-gradient(20deg, rgb(61, 11, 11), transparent),
			url(https://grainy-gradients.vercel.app/noise.svg);
		filter: contrast(170%) brightness(1000%);
	}

	/* Chrome-specific */
	@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		.noise {
			filter: contrast(290%) brightness(1000%);
		}
	}

	.overlay {
		background: rgb(255, 229, 185);
		mix-blend-mode: multiply;
	}
</style>
