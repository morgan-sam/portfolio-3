<h1 class="title {$$restProps.class || ''} ">
	<slot />
</h1>

<style>
	.title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -400%);
		z-index: 10;
		font-size: 6rem;
		line-height: 56px;
		color: #333333;
	}
</style>
