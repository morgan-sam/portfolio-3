<script>
	export let columns = 3; // Default number of columns

	// Reactive declaration to set the CSS variable
	$: style = `--columns: ${columns};`;
</script>

<div class="page" {style}>
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
			height: 100%;
			grid-template-columns: unset;
			grid-template-rows: repeat(var(--columns), minmax(0, 1fr));
		}
		.page > slot::slotted(div:first-child + div) {
			border: 10px solid red;
		}
	}
</style>
