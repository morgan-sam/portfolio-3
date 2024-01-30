export interface BallStyle {
	groundShadow: {
		background: string;
		transform: string;
		filter: string;
	};
	ballShadow: {
		background: string;
		transform: string;
		filter: string;
	};
	ballColor: {
		background: string;
		transform: string;
	};
}

export interface BallStyles {
	[key: string]: BallStyle;
}
