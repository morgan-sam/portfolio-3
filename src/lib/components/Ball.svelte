<div class="ball w-72 h-72 relative isolate rounded-full overflow-hidden">
	<div class="ball-shadow w-full h-full" />
	<div class="ball-color absolute top-0 w-full h-full" />
</div>

<style>
	.ball {
		transform: rotate(200deg);
	}
	.ball-shadow {
		background: radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
			url('$lib/images/noise.svg');
		filter: contrast(170%) brightness(1000%);
		transform: rotate(-150deg);
	}

	/* Chrome-specific */
	@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		.ball-shadow {
			filter: contrast(150%) brightness(400%);
		}
	}
	.ball-color {
		background: radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8));
		mix-blend-mode: multiply;
	}
</style>
