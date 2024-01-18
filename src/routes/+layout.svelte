<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="layout">
	<slot />
</div>

<style>
	.layout {
		display: flex;
		overflow: hidden;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		max-height: 85%;
		font-family: 'Calistoga', cursive;
	}

	/* max width 1400 */
	@media (max-width: 1400px) {
		.layout {
			height: auto;
			max-height: max-content;
		}
	}
</style>
