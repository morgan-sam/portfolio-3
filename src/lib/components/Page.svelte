<script>
	import { page } from '$app/stores';
	export let columns = 3; // Default number of columns
	$: style = `--columns: ${columns};`;
	$: route = ($page.url.pathname === '/' ? 'home' : $page.url.pathname.replace('/', '')) || '';
</script>

<div class="page {route}" {style}>
	<slot />
</div>

<style>
	.page {
		display: grid;
		grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
		justify-content: center;
		align-items: center;
		width: 85%;
		height: 85%;
	}

	@media (max-width: 1400px) {
		.page {
			width: 100%;
			height: fit-content;
			display: flex;
			flex-direction: column;
			gap: 50px;
			padding: 0 20px;
			margin-bottom: 30px;
		}
		.page > slot::slotted(div:first-child + div) {
			border: 10px solid red;
		}
		.page.home {
			height: 100vh;
			margin-bottom: 0;
		}
		.page.resume {
			gap: 100px;
		}
	}
</style>
