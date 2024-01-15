<script lang="ts">
	import '@simonwep/pickr/dist/themes/nano.min.css'; // 'nano' theme
	// import Pickr from '@simonwep/pickr';
	// const pickr = Pickr.create({
	// 	el: '.color-picker',
	// 	theme: 'classic', // or 'monolith', or 'nano'

	// 	swatches: [
	// 		'rgba(244, 67, 54, 1)',
	// 		'rgba(233, 30, 99, 0.95)',
	// 		'rgba(156, 39, 176, 0.9)',
	// 		'rgba(103, 58, 183, 0.85)',
	// 		'rgba(63, 81, 181, 0.8)',
	// 		'rgba(33, 150, 243, 0.75)',
	// 		'rgba(3, 169, 244, 0.7)',
	// 		'rgba(0, 188, 212, 0.7)',
	// 		'rgba(0, 150, 136, 0.75)',
	// 		'rgba(76, 175, 80, 0.8)',
	// 		'rgba(139, 195, 74, 0.85)',
	// 		'rgba(205, 220, 57, 0.9)',
	// 		'rgba(255, 235, 59, 0.95)',
	// 		'rgba(255, 193, 7, 1)'
	// 	],

	// 	components: {
	// 		// Main components
	// 		preview: true,
	// 		opacity: true,
	// 		hue: true,

	// 		// Input / output Options
	// 		interaction: {
	// 			hex: true,
	// 			rgba: true,
	// 			hsla: true,
	// 			hsva: true,
	// 			cmyk: true,
	// 			input: true,
	// 			clear: true,
	// 			save: true
	// 		}
	// 	}
	// });

	type SlidersArrayObj = {
		key: string;
		value: number;
		min: number;
		max: number;
	};

	let slidersArray: SlidersArrayObj[] = [
		{
			key: 'ball-shadow-z-rotation',
			value: 180,
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
<div class="ball-parent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

<div class="fixed bottom-0 right-0 hidden">
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
		<!-- <div class="color-picker"></div> -->
	</table>
</div>

<style>
	/* @keyframes scaleAnimation {
		0% {
			transform: scale(1) translate(-50%, -50%);
		}
		50% {
			transform: scale(2) translate(-25%, -25%);
		}
		100% {
			transform: scale(1) translate(-50%, -50%);
		}
	}
	.ball-parent {
		animation: scaleAnimation 60s ease-in-out infinite;
	} */
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
