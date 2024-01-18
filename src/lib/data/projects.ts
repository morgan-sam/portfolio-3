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
			'Palace Guard is a chatbot that uses the ChatGPT API to generate responses to user messages. It is built with React and Firebase Functions.',
			'Palace Guard is a chatbot that uses the ChatGPT API to generate responses to user messages. It is built with React and Firebase Functions.',
			'Palace Guard is a chatbot that uses the ChatGPT API to generate responses to user messages. It is built with React and Firebase Functions.'
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
	'train-tracks': {
		image: { width: 280 },
		tags: ['React', 'Algorithms', 'BFS'],
		paragraphs: [
			'Train Tracks is a puzzle game where the player must connect train tracks to get the train to the station. It is built with React and uses a BFS algorithm to find the shortest path.',
			'Train Tracks is a puzzle game where the player must connect train tracks to get the train to the station. It is built with React and uses a BFS algorithm to find the shortest path.',
			'Train Tracks is a puzzle game where the player must connect train tracks to get the train to the station. It is built with React and uses a BFS algorithm to find the shortest path.'
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
	'nxcro-hydrogen-store': {
		image: { width: 460 },
		tags: ['React', 'Hydrogen', 'Shopify', 'Design'],
		paragraphs: [
			'Nxcro is a Shopify store that sells Hydrogen products. It is built with React and uses the Hydrogen API to fetch products.',
			'Nxcro is a Shopify store that sells Hydrogen products. It is built with React and uses the Hydrogen API to fetch products.',
			'Nxcro is a Shopify store that sells Hydrogen products. It is built with React and uses the Hydrogen API to fetch products.'
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
			'Project Management Platform is a project management tool that allows users to create projects, add tasks, and assign tasks to users. It is built with React, Node.js, Express, and PostgreSQL.',
			'Project Management Platform is a project management tool that allows users to create projects, add tasks, and assign tasks to users. It is built with React, Node.js, Express, and PostgreSQL.'
		],
		links: [
			{
				name: 'GitHub Repo',
				url: 'https://github.com/morgan-sam/project-management-platform'
			}
		]
	}
} as projectInfoType;
