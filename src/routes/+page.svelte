<script>
	import Ball from '$lib/components/Ball.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page columns={1}>
	<div class="home-title-container">
		<div class="home-title">
			<h1>Sam Morgan</h1>
			<h2 class="text-6xl">Fullstack Developer</h2>
		</div>
		<Ball />
	</div>
</Page>

<style>
	.home-title-container {
		position: relative;
	}
	.home-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -225%);
		z-index: 10;
		font-size: 6rem;
		line-height: 56px;
		color: #333333;
	}
	@media (max-width: 1400px) {
		.home-title {
			position: relative;
			transform: translate(0, 0);
			top: 30px;
			left: 30px;
			line-height: 70px;
		}
		h1 {
			margin-bottom: 22rem;
		}
		h2 {
			margin-bottom: 3rem;
		}
	}
</style>
