<script>
	import { onMount } from 'svelte';
	onMount(() => {
		const scrollingContainer = document.querySelector('.scrolling-container');
		scrollingContainer.scrollTop = 0;
	});
</script>

<div class="scrolling-container">
	<slot />
</div>

<style>
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
</style>
