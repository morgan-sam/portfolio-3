<script lang="ts">
	import { ballStyles } from '$lib/stores/ballStyles'; // Import the store holding style configurations
	import type { BallStyle } from '$lib/types'; // Import the type definition for BallStyles
	import { page } from '$app/stores';

	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	const lightsOn: Writable<boolean> = getContext('lightsOnContext');

	$: route = ($page.url.pathname === '/' ? 'home' : $page.url.pathname.replace('/', '')) || '';
	// init currentStyles var and set typescript definition;
	let currentStyles = {} as BallStyle;

	// This reactive statement updates currentStyles based on the current page path
	$: $page.url.pathname, setCurrentStyles();

	// Updates the currentStyles based on the current route
	function setCurrentStyles() {
		ballStyles.subscribe((styles) => {
			// Assuming the path is like '/home', '/resume', etc.
			const path = $page.url.pathname.split('/')[1] || 'home'; // Default to 'home' if path is not found
			let shadowPosition: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
			switch (path) {
				case 'home':
					shadowPosition = 'bottomRight';
					break;
				case 'resume':
					shadowPosition = 'bottomLeft';
					break;
				case 'projects':
					shadowPosition = 'topRight';
					break;
				case 'contact':
					shadowPosition = 'topLeft';
					break;
				default:
					shadowPosition = 'topRight';
			}

			currentStyles = styles[shadowPosition]; // Update currentStyles based on the current route
		})();
	}
</script>

<div class="ball-parent {route}">
	<div
		class="ground-shadow"
		style={`background: ${currentStyles.groundShadow.background}; transform: ${
			currentStyles.groundShadow.transform
		}; filter: ${currentStyles.groundShadow.filter};
		opacity: ${$lightsOn ? 0 : 1};`}
	/>

	<div class="ball w-72 h-72 relative isolate rounded-full overflow-hidden">
		<div
			class="ball-shadow"
			style={`background: ${currentStyles.ballShadow.background}; transform: ${
				currentStyles.ballShadow.transform
			}; filter: ${currentStyles.ballShadow.filter};
			opacity: ${$lightsOn ? 0.25 : 1};`}
		/>
		<div
			class="ball-color"
			style={`background: ${currentStyles.ballColor.background}; transform: ${
				currentStyles.ballColor.transform
			};
			filter: contrast(${$lightsOn ? 0.8 : 1});`}
		/>
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
		border-radius: 100%;
	}

	.ball-shadow {
		width: 100%;
		height: 100%;
	}

	.ball-color {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: multiply;
	}

	.ground-shadow,
	.ball-shadow,
	.ball-color {
		transition: all 0.5s ease-in-out;
	}

	/* Chrome-specific */
	/* @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		.ball-shadow {
			filter: contrast(150%) brightness(400%);
		}
	} */

	@media (max-width: 1400px) {
		.ground-shadow {
			background: radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)),
				url('/images/noise.svg') !important;
			transform: translate(calc(-50% + 180px), calc(-50% + 20px)) rotate(-203deg) !important;
			filter: contrast(150%) brightness(700%) !important;
		}

		.ball-shadow {
			background: radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
				url('/images/noise.svg') !important;
			transform: rotate(40deg) !important;
			filter: contrast(150%) brightness(400%) !important;
		}

		.ball-color {
			background: radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8)) !important;
			transform: rotate(250deg) !important;
		}
	}
</style>
