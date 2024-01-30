import { writable } from 'svelte/store';
import type { BallStyles } from '$lib/types';

export const ballStyles = writable<BallStyles>({
	topLeft: {
		groundShadow: {
			background:
				"radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)), url('/images/noise.svg')",
			transform: 'translate(calc(-50% - 200px), calc(-50% + 30px)) rotate(20deg)',
			filter: 'contrast(150%) brightness(700%)'
		},
		ballShadow: {
			background:
				"radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)), url('/images/noise.svg')",
			transform: 'rotate(170deg)',
			filter: 'contrast(150%) brightness(400%)'
		},
		ballColor: {
			background: 'radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8))',
			transform: 'rotate(50deg)'
		}
	},
	topRight: {
		groundShadow: {
			background:
				"radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)), url('/images/noise.svg')",
			transform: 'translate(calc(-50% + 180px), calc(-50% + 20px)) rotate(-203deg)',
			filter: 'contrast(150%) brightness(700%)'
		},
		ballShadow: {
			background:
				"radial-gradient(ellipse at 40%, rgba(255, 255, 255, 0), rgb(43, 43, 82)), url('/images/noise.svg')",
			transform: 'rotate(40deg)',
			filter: 'contrast(150%) brightness(400%)'
		},
		ballColor: {
			background: 'radial-gradient(circle at 67% 30%, rgb(255, 229, 185), rgb(24, 5, 8))',
			transform: 'rotate(250deg)'
		}
	},
	bottomLeft: {
		groundShadow: {
			background:
				"radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)), url('/images/noise.svg')",
			transform: 'translate(calc(-50% - 124px), calc(-50% + 158px)) rotate(-30deg)',
			filter: 'contrast(200%) brightness(700%)'
		},
		ballShadow: {
			background:
				"radial-gradient(ellipse at -5%, rgba(255, 255, 255, 0), rgb(43, 43, 82)), url('/images/noise.svg')",
			transform: 'rotate(130deg)',
			filter: 'contrast(150%) brightness(200%)'
		},
		ballColor: {
			background: 'radial-gradient(circle at 67% 2%, rgb(255, 229, 185), rgb(24, 5, 8))',
			transform: 'rotate(30deg)'
		}
	},
	bottomRight: {
		groundShadow: {
			background:
				"radial-gradient(ellipse at 70%, rgb(31, 30, 30), rgba(75, 75, 75, 0)), url('/images/noise.svg')",
			transform: 'translate(calc(-50% + 140px), calc(-50% + 170px)) rotate(-150deg)',
			filter: 'contrast(200%) brightness(700%)'
		},
		ballShadow: {
			background:
				"radial-gradient(ellipse at 27%, rgba(255, 255, 255, 0), rgb(43, 43, 82)), url('/images/noise.svg')",
			transform: 'rotate(50deg)',
			filter: 'contrast(150%) brightness(200%)'
		},
		ballColor: {
			background: 'radial-gradient(circle at 5% 39%, rgb(255, 229, 185), rgb(24, 5, 8))',
			transform: 'rotate(30deg)'
		}
	}
});
