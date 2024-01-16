<script>
	import Ball from '$lib/components/Ball.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page columns={1}>
	<div class="relative">
		<div class="title">
			<h1>Sam Morgan</h1>
			<h2 class="text-6xl">Fullstack Developer</h2>
		</div>
		<Ball />
	</div>
</Page>

<style>
	.title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -225%);
		z-index: 10;
		font-size: 6rem;
		line-height: 56px;
		color: #333333;
	}
</style>
