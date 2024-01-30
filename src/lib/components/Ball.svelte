<script>
	import { page } from '$app/stores';
	$: route = ($page.url.pathname === '/' ? 'home' : $page.url.pathname.replace('/', '')) || '';
</script>

<div class="ball-parent {route}">
	<div class="ground-shadow rounded-full" />
	<div class="ball w-72 h-72 relative isolate rounded-full overflow-hidden">
		<div class="ball-shadow w-full h-full" />
		<div class="ball-color mix-blend-multiply absolute top-0 w-full h-full" />
	</div>
</div>

<style>
	.ball-parent {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.ground-shadow {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 150%;
		height: 75%;
		background: radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)),
			url('$lib/images/noise.svg');
		transform: translate(calc(-50% + 180px), calc(-50% + 20px)) rotate(-203deg);
		filter: contrast(150%) brightness(700%);
	}
	.ball {
		transform: rotate(200deg);
	}
	.ball-shadow {
		background: radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
			url('$lib/images/noise.svg');
		transform: rotate(-160deg);
		filter: contrast(150%) brightness(400%);
	}

	.ball-color {
		background: radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8));
		transform: rotate(50deg);
	}

	/* Chrome-specific */
	/* @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		.ball-shadow {
			filter: contrast(150%) brightness(400%);
		}
	} */

	@media (min-width: 1400px) {
		/* HOME PAGE */

		.ball-parent.home .ground-shadow {
			transform: translate(calc(-50% - 200px), calc(-50% + 30px)) rotate(20deg);
			filter: contrast(150%) brightness(700%);
		}
		.ball-parent.home .ball-shadow {
			background: radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
				url('$lib/images/noise.svg');
			transform: rotate(-30deg);
			filter: contrast(150%) brightness(400%);
		}
		.ball-parent.home .ball-color {
			background: radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8));
			transform: rotate(-150deg);
		}

		/* RESUME PAGE */

		.ball-parent.resume .ground-shadow {
			transform: translate(calc(-50% + 180px), calc(-50% + 20px)) rotate(-203deg);
			filter: contrast(150%) brightness(700%);
		}
		.ball-parent.resume .ball-shadow {
			background: radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
				url('$lib/images/noise.svg');
			transform: rotate(-160deg);
			filter: contrast(150%) brightness(400%);
		}
		.ball-parent.resume .ball-color {
			background: radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8));
			transform: rotate(50deg);
		}

		/* PROJECTS PAGE */

		.ball-parent.projects .ground-shadow {
			background: radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)),
				url(/src/lib/images/noise.svg);
			transform: translate(calc(-50% - 124px), calc(-50% + 158px)) rotate(-30deg);
			filter: contrast(200%) brightness(700%);
		}
		.ball-parent.projects .ball-shadow {
			background: radial-gradient(ellipse at -5%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
				url('/src/lib/images/noise.svg');
			transform: rotate(-73deg);
			filter: contrast(150%) brightness(200%);
		}
		.ball-parent.projects .ball-color {
			background: radial-gradient(circle at 67% 2%, rgb(255, 229, 185), rgb(24, 5, 8));
			transform: rotate(190deg);
		}

		/* CONTACT PAGE */

		.ball-parent.contact .ground-shadow {
			transform: translate(calc(-50% + 140px), calc(-50% + 170px)) rotate(-150deg);
			filter: contrast(200%) brightness(700%);
		}
		.ball-parent.contact .ball-shadow {
			background: radial-gradient(ellipse at 27%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
				url(/src/lib/images/noise.svg);
			transform: rotate(-150deg);
			filter: contrast(150%) brightness(200%);
		}
		.ball-parent.contact .ball-color {
			background: radial-gradient(circle at 5% 39%, rgb(255, 229, 185), rgb(24, 5, 8));
			transform: rotate(190deg);
		}
	}
</style>
