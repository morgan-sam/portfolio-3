<svg viewBox="0 0 100 100" width="100" height="100">
	<defs>
		<path
			id="circle"
			d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0"
		/>
	</defs>
	<text font-size="18.6">
		<textPath xlink:href="#circle"> THANK YOU · THANK YOU · </textPath>
	</text>
</svg>

<style>
	svg {
		fill: currentColor;
		height: auto;
		transform-origin: center;
		width: 100%;
		transform: scale(1.5);
		animation: rotate 10s linear infinite;
	}

	@keyframes rotate {
		0% {
			transform: scale(1.5) rotate(0deg);
		}
		100% {
			transform: scale(1.5) rotate(360deg);
		}
	}
</style>
