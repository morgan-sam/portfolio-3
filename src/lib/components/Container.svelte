<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	onMount(() => {
		const scrollingContainer = document.querySelector('.scrolling-container');
		if (scrollingContainer) scrollingContainer.scrollTop = 0;
	});

	export let delay = 0; // Default number of columns
	export let gap = '0px'; // Default number of columns
	export let style = '';
	export let scrolling = false;
	$: route = $page.url.pathname.replace('/', '') || '';
</script>

<div
	class="{$$restProps.class || ''} {route}  {scrolling
		? 'scrolling-container'
		: 'container'} slide-up"
	style="animation-delay: {delay}ms; gap: {gap}; {style}"
>
	<div class="container-inner">
		<slot />
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		z-index: 100;
		box-sizing: border-box;
		max-height: 100vh;
		overflow: hidden;
	}

	.container:last-child {
		text-align: right;
		align-items: end;
	}

	.container-inner {
		display: flex;
		flex-direction: column;
		align-items: start;
		width: 100%;
		height: fit-content;
		margin: auto;
		gap: 30px;
	}

	.container,
	.scrolling-container {
		transform: translateY(20px);
		opacity: 0;
	}

	.slide-up {
		animation: slideUp 0.5s cubic-bezier(0, 0.99, 0.42, 0.99) forwards;
	}

	.scrolling-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		max-height: 100%;
		overflow-y: scroll;
		z-index: 2000;
		gap: 10px;
	}

	.scrolling-container::-webkit-scrollbar-track {
		/* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
		background-color: #f5f5f5;
	}

	.scrolling-container::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	.scrolling-container::-webkit-scrollbar-thumb {
		background-color: #f5f5f5;
		border: 2px solid #555555;
	}

	/* Keyframes for the slide-up animation */
	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	/* max width 1400 */
	@media (max-width: 1400px) {
		.container,
		.container:last-child {
			text-align: left;
			align-items: start;
		}
		.container {
			height: fit-content;
			justify-content: flex-start;
			max-height: max-content;
			background-color: white;
		}
		.projects.container .container-inner {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 100px !important;
		}
		.projects.scrolling-container:last-child {
			display: none;
		}
		.contact.container:first-child {
			display: none;
		}
		.contact.container .container-inner {
			gap: 0;
		}
	}
	@media (max-width: 1000px) {
		.projects.container .container-inner {
			gap: 0px !important;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
