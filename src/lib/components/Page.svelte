<script>
	export let columns = 3; // Default number of columns
</script>

<div class="page" style="grid-template-columns: repeat({columns}, minmax(0, 1fr))">
	<slot />
</div>

<style>
	.page {
		display: grid;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
