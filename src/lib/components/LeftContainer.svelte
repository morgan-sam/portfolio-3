<div class="container slide-up">
	<slot />
</div>

<style>
	.container {
		width: 100%;
		height: 80%;
		margin-left: 20%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		z-index: 100;
		background-color: white;
		box-sizing: border-box;
		max-height: 100vh;
		overflow: hidden;
		/* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
	}

	.slide-up {
		animation: slideUp 0.5s cubic-bezier(0, 0.99, 0.42, 0.99) forwards;
	}

	/* Keyframes for the slide-up animation */
	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}
</style>
