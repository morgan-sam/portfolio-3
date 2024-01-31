<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	$: route = ($page.url.pathname === '/' ? 'home' : $page.url.pathname.replace('/', '')) || '';
</script>

<div class="page-shadow {route}" />
<Navbar />
<div class="layout">
	<slot />
</div>

<style>
	.page-shadow {
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		z-index: 100000;
		width: 100vw;
		height: 100vh;
		background: none;
		pointer-events: none;
		filter: contrast(1.5) brightness(1);
		opacity: 0.35;
	}
	/* max width 1400px */
	@media (max-width: 1400px) {
		.page-shadow {
			display: none;
		}
	}

	:root {
		--shadow-size-horizontal: 100%; /* Adjust for oval width */
		--shadow-size-vertical: 140%; /* Adjust for oval height */
		--light-color: rgba(218, 214, 168, 0);
		--intermediate-color1: rgba(218, 214, 168, 0.4);
		--intermediate-color2: rgba(218, 214, 168, 0.6);
		--intermediate-color3: rgba(172, 169, 139, 0.8);
		--intermediate-color4: rgba(0, 0, 0, 0.9);
		--shadow-color: rgba(0, 0, 0, 1);
		--color-stop-1: 20%;
		--color-stop-2: 30%;
		--color-stop-3: 60%;
		--color-stop-4: 80%;
	}

	.page-shadow.home {
		background-image: radial-gradient(
			ellipse var(--shadow-size-horizontal) var(--shadow-size-vertical) at top left,
			var(--light-color),
			var(--intermediate-color1) var(--color-stop-1),
			var(--intermediate-color2) var(--color-stop-2),
			var(--intermediate-color3) var(--color-stop-3),
			var(--intermediate-color4) var(--color-stop-4),
			var(--shadow-color)
		);
	}
	.page-shadow.resume {
		background-image: radial-gradient(
			ellipse var(--shadow-size-horizontal) var(--shadow-size-vertical) at top right,
			var(--light-color),
			var(--intermediate-color1) var(--color-stop-1),
			var(--intermediate-color2) var(--color-stop-2),
			var(--intermediate-color3) var(--color-stop-3),
			var(--intermediate-color4) var(--color-stop-4),
			var(--shadow-color)
		);
	}
	.page-shadow.projects {
		background-image: radial-gradient(
			ellipse var(--shadow-size-horizontal) var(--shadow-size-vertical) at bottom left,
			var(--light-color),
			var(--intermediate-color1) var(--color-stop-1),
			var(--intermediate-color2) var(--color-stop-2),
			var(--intermediate-color3) var(--color-stop-3),
			var(--intermediate-color4) var(--color-stop-4),
			var(--shadow-color)
		);
	}
	.page-shadow.contact {
		background-image: radial-gradient(
			ellipse var(--shadow-size-horizontal) var(--shadow-size-vertical) at bottom right,
			var(--light-color),
			var(--intermediate-color1) var(--color-stop-1),
			var(--intermediate-color2) var(--color-stop-2),
			var(--intermediate-color3) var(--color-stop-3),
			var(--intermediate-color4) var(--color-stop-4),
			var(--shadow-color)
		);
	}

	.layout {
		display: flex;
		overflow: hidden;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		max-height: 85%;
		font-family: 'Calistoga', sans-serif;
	}

	/* max width 1400 */
	@media (max-width: 1400px) {
		.layout {
			height: auto;
			max-height: max-content;
		}
	}
</style>
