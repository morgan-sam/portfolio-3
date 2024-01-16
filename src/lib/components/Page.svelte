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
		width: 85%;
		height: 85%;
	}
</style>
