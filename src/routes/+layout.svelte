<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';

	import { setContext } from 'svelte';
	$: route = ($page.url.pathname === '/' ? 'home' : $page.url.pathname.replace('/', '')) || '';
	let lightsOn: Writable<boolean> = writable(false);
	setContext('lightsOnContext', lightsOn);
</script>

<!-- if route begins with ecom -->
{#if route.startsWith('ecom')}
	<slot />
{:else}
	<div class="page-shadow {route}" style="opacity: {$lightsOn ? 0 : 0.35}; transition: 0.5s;" />
	<Navbar />
	<div class="layout">
		<slot />
	</div>
	<div class="light-switch-container">
		<input
			type="checkbox"
			class="light-switch-checkbox"
			on:change={() => lightsOn.set(!$lightsOn)}
			checked={$lightsOn}
		/>
		<div class="light-switch-button" />
		<div class="light-switch-background" />
	</div>
{/if}

<style>
	.light-switch-container {
		position: absolute;
		bottom: 5rem;
		left: 50%;
		margin: 1rem;
		padding: 0.5rem;
		border-radius: 20px;
		background: none;
		border: 1px solid #333333;
		z-index: 100001;
		transform: translateX(-50%);
		width: 5rem;
		height: 2.5rem;
	}
	.light-switch-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		background: #333333;
		opacity: 0.5;
		z-index: 0;
		box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.95), inset 0 6px 20px 0 rgba(0, 0, 0, 0.9);
	}
	.light-switch-checkbox {
		-webkit-appearance: none;
		appearance: none;
		position: absolute;
		z-index: 1;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
		z-index: 2;
	}
	.light-switch-button {
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		border-radius: 20px;
		background: white;
		transition: 0.2s;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}
	.light-switch-checkbox:checked + .light-switch-button {
		left: 50%;
		background: #141313;
	}

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
		.page-shadow,
		.light-switch-container {
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
