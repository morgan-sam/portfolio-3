<script lang="ts">
	type SlidersArrayObj = {
		key: string;
		value: number;
		min: number;
		max: number;
	};

	let slidersArray: SlidersArrayObj[] = [
		{
			key: 'ball-shadow-z-rotation',
			value: 100,
			min: 0,
			max: 360
		},
		{
			key: 'ground-shadow-z-rotation',
			value: 10,
			min: 0,
			max: 360
		},
		{
			key: 'ball-hue-rotate',
			value: 0,
			min: 0,
			max: 360
		}
	];
</script>

<!-- Your HTML code with correct binding syntax -->
<div class="relative">
	<div class="ground absolute w-full h-full mix-blend-multiply">
		<div
			class="ground-shadow rounded-full"
			style="transform: rotateZ({slidersArray.find((s) => s.key === 'ground-shadow-z-rotation')
				?.value}deg);"
		/>
	</div>
	<div class="ball w-72 h-72 relative isolate rounded-full overflow-hidden">
		<div
			class="ball-shadow w-full h-full"
			style="transform: rotateZ({slidersArray.find((s) => s.key === 'ball-shadow-z-rotation')
				?.value}deg);"
		/>
		<div
			class="ball-color mix-blend-multiply absolute top-0 w-full h-full"
			style="filter: hue-rotate({slidersArray.find((s) => s.key === 'ball-hue-rotate')?.value}deg);"
		/>
	</div>
</div>

<div class="fixed bottom-0 right-0">
	<table>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
		</tr>
		{#each slidersArray as slider (slider.key)}
			<tr>
				<td>
					<label for="{slider.key.toLowerCase()}Slider">
						{slider.key
							.split('-')
							.map((word) => word[0].toUpperCase() + word.slice(1))
							.join(' ')}:
					</label></td
				>
				<td
					><input
						type="range"
						id="{slider.key.toLowerCase()}Slider"
						bind:value={slider.value}
						min={slider.min}
						max={slider.max}
					/></td
				>
			</tr>
		{/each}
	</table>
</div>

<style>
	.ground {
		bottom: -1%;
		left: 55%;
		transform: rotateZ(157deg);
	}

	.ground-shadow {
		width: 100%;
		height: 50%;
		background: radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)),
			url('$lib/images/noise.svg');
		filter: contrast(150%) brightness(700%);
	}
	.ball {
		transform: rotate(200deg);
	}
	.ball-shadow {
		background: radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)),
			url('$lib/images/noise.svg');
		filter: contrast(170%) brightness(1000%);
		transform: rotate(-150deg);
	}

	/* Chrome-specific */
	@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		.ball-shadow {
			filter: contrast(150%) brightness(400%);
		}
	}
	.ball-color {
		background: radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8));
	}
</style>
