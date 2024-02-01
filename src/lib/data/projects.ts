type projectInfoType = {
	[projectId: string]: {
		image: {
			width: number | undefined;
		};
		tags: string[];
		paragraphs?: string[];
		links?: {
			name: string;
			url: string;
		}[];
	};
};

export const projectInfo = {
	'palace-guard': {
		image: { width: 460 },
		tags: ['React', 'ChatGPT', 'AI', 'Firebase Functions'],
		paragraphs: [
			'Palace Guard is a chatbot AI game where the player must convince a guard to let them into the palace to deliver a letter to the king.',
			'The ChatGPT API was used to generate responses to user messages. It is built with React and Firebase Functions.',
			'Images were primarily AI generated and dithered to give a 1bit aesthetic similar to old Macintosh games.'
		],
		links: [
			{
				name: 'Live Demo',
				url: 'https://palace-guard.web.app/'
			},
			{
				name: 'GitHub Repo',
				url: 'https://github.com/morgan-sam/palace-guard'
			}
		]
	},
	'nxcro-hydrogen-store': {
		image: { width: 460 },
		tags: ['React', 'Hydrogen', 'Shopify', 'Design'],
		paragraphs: [
			'Nxcro is a Shopify store for a gothic fashion brand designed and built by myself. It is built with React and uses the Hydrogen API to fetch products from Shopify.',
			'All sections of the site are fully responsive and the site is built with a mobile-first approach.'
		],
		links: [
			{
				name: 'GitHub Repo',
				url: 'https://github.com/morgan-sam/nxcro-hydrogen-store'
			}
		]
	},
	'project-management-platform': {
		image: { width: 460 },
		tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
		paragraphs: [
			'Project Management Platform is a project management tool that allows users to create projects, add tasks, and assign tasks to users. It is built with React, Node.js, Express, and PostgreSQL.',
			'It includes a string interpreter that allows users to batch create tasks by typing a template string similar to a regular expression. The full list of commands can be found in the GitHub repo.'
		],
		links: [
			{
				name: 'GitHub Repo',
				url: 'https://github.com/morgan-sam/project-management-platform'
			}
		]
	},
	'train-tracks': {
		image: { width: 280 },
		tags: ['React', 'Algorithms', 'BFS'],
		paragraphs: [
			'Train Tracks is a puzzle game where the player must connect train tracks to get the train from one side of the map to another. It is built with React and uses a BFS algorithm to find the shortest path.',
			'No libraries were used for the pathfinding algorithm or the game logic. Likewise all visual effects and custom elements (buttons, etc.) were created from scratch.'
		],
		links: [
			{
				name: 'Live Demo',
				url: 'https://morgan-sam.github.io/Train-Tracks-React/'
			},
			{
				name: 'GitHub Repo',
				url: 'https://github.com/morgan-sam/Train-Tracks-React'
			}
		]
	},
	'portfolio-site': {
		image: { width: 460 },
		tags: ['SvelteKit', 'Tailwind', 'TypeScript', 'Design'],
		paragraphs: [
			'This portfolio site was designed and developed by myself and was built with SvelteKit & Tailwind.',
			'Many thanks to CSSTricks for their tutorial on gradients & spheres: https://css-tricks.com/grainy-gradients'
		],
		links: [
			{
				name: 'GitHub Repo',
				url: 'https://github.com/morgan-sam/portfolio-3'
			}
		]
	}
} as projectInfoType;
