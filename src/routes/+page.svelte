<script>
	import Ball from '$lib/components/Ball.svelte';
</script>

<!-- 3x1 grid -->
<div class="grid grid-cols-1 items-center justify-center w-full h-full">
	<div class="w-full h-full relative">
		<h1 class="text-8xl z-10 leading-[56px] text-[#333333] {$$restProps.class || ''} ">
			<slot />
		</h1>
		<div class="title">
			<h1>Sam Morgan</h1>
			<h2 class="text-6xl">Fullstack Developer</h2>
		</div>
		<Ball />
	</div>
</div>

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
