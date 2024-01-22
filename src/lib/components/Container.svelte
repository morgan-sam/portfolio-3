<script>
	import { page } from '$app/stores';

	export let delay = 0; // Default number of columns
	export let gap = '0px'; // Default number of columns
	export let style = '';
	$: route = $page.url.pathname.replace('/', '') || '';
</script>

<div
	class="{$$restProps.class || ''} {route} container slide-up"
	style="animation-delay: {delay}ms; gap: {gap}; {style}"
>
	<slot />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		/* margin-left: 20%; */
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		z-index: 100;
		box-sizing: border-box;
		max-height: 100vh;
		overflow: hidden;
		transform: translateY(20px);
		opacity: 0;
		/* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
	}

	.container:last-child {
		text-align: right;
		align-items: end;
	}

	.slide-up {
		animation: slideUp 0.5s cubic-bezier(0, 0.99, 0.42, 0.99) forwards;
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
		.projects.container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 100px !important;
		}
		.projects.container:last-child {
			display: none;
		}
		.contact.container:first-child {
			display: none;
		}
	}
	@media (max-width: 1000px) {
		.projects.container {
			gap: 0px !important;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
