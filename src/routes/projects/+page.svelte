<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Page from '$lib/components/Page.svelte';
	import ScrollingContainer from '$lib/components/ScrollingContainer.svelte';
	import { projectInfo } from '$lib/data/projects';
	import DecorativePanel from '$lib/components/DecorativePanel.svelte';

	let activeProjectId = null as string | null;

	function projectMouseOver(event: any) {
		const target = event.currentTarget; // Using currentTarget
		if (target.tagName === 'LI' && target.id) {
			activeProjectId = target.id;
			console.log('Active Project ID:', activeProjectId); // Debugging line
		}
	}

	const projects = Object.keys(projectInfo);
</script>

<Page>
	<Container delay={0} style="overflow: visible;">
		<div class={activeProjectId ? 'hover-instructions hidden' : 'hover-instructions'}>
			{#each { length: 31 } as _, i}
				<h3
					style="
				font-size: {i === 15 ? 1.5 : 1}rem;
				opacity: {i === 15 ? 1 : 1 - Math.abs(Math.sin((Math.PI * i) / (31 - 1)))};
				letter-spacing: {(1 - Math.abs(Math.sin((Math.PI * i) / (31 - 1)))) / 1.75}em;
				white-space: nowrap;
			"
				>
					Hover over a project to see more details
				</h3>
			{/each}
		</div>
		{#each projects as projectId}
			<div
				id={`${projectId}-details`}
				class="project-details"
				class:active={activeProjectId === projectId}
			>
				<img
					class="main-image"
					src={`/projects/${projectId}.png`}
					alt={projectId}
					width={projectInfo[projectId]['image']?.width}
				/>
				<div class="details-text">
					<h2 class="project-title">{projectId}</h2>
					<ul class="tags-container">
						{#each projectInfo[projectId]['tags'] as tag}
							<li class="tag">{tag}</li>
						{/each}
					</ul>
					{#each projectInfo[projectId]['paragraphs'] || [] as paragraph}
						<p>{paragraph}</p>
					{/each}
					<div class="link-container">
						{#each projectInfo[projectId]['links'] || [] as link}
							<button
								class={link.name === 'GitHub Repo' ? 'secondary' : ''}
								on:click={() => window.open(link.url)}
							>
								{link.name}
							</button>
						{/each}
					</div>
				</div>
				<img
					class="details-image"
					src={`/details/${projectId}.png`}
					alt={projectId}
					on:error={(e) => {
						if (e.target instanceof HTMLImageElement) e.target.style.display = 'none';
					}}
				/>
			</div>
			{#if projectId !== projects[projects.length - 1]}
				<span class="projects-list-break">↡</span>
			{/if}
		{/each}
	</Container>
	<DecorativePanel title="Projects" />
	<Container class="project-selection" delay={250}>
		<ScrollingContainer>
			{#each projects as projectId}
				<li
					id={projectId}
					class="project-card"
					on:mouseover={projectMouseOver}
					on:focus={projectMouseOver}
				>
					<h2>{projectId}</h2>
					<img
						src={`/projects/${projectId}.png`}
						alt={projectId}
						width={projectInfo[projectId]['image']?.width}
					/>
				</li>
			{/each}
		</ScrollingContainer>
	</Container>
</Page>

<style>
	.project-card {
		background: white;
		padding: 15px;
		margin: 10px;
		z-index: 1000;
		display: flex;
		flex-direction: column;
	}
	img {
		margin-top: 10px;
	}
	h2 {
		font-size: 1.5rem;
	}
	li {
		cursor: crosshair;
	}
	.project-details {
		display: none;
	}
	.project-details.active {
		display: block;
	}
	.project-details .main-image {
		display: none;
	}
	.hover-instructions.hidden {
		display: none;
	}

	.project-title {
		font-size: 2.5rem;
		line-height: 2.5rem;
		margin: 0.7rem 0;
	}
	.tags-container {
		display: flex;
		flex-wrap: wrap;
	}
	.tag {
		background: #555;
		color: white;
		padding: 5px 10px;
		margin: 5px;
		border-radius: 5px;
		height: min-content;
		width: min-content;
		white-space: nowrap;
	}
	p {
		margin: 20px 0;
		font-family: 'DM Sans', sans-serif;
	}
	.link-container {
		display: flex;
		gap: 10px;
		margin: 20px 0;
	}

	.link-container button {
		padding: 0.5rem 1.5rem;
		border-radius: 0.375rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		color: #ffffff;
		background-color: #1e3a8a;
		cursor: pointer;
	}
	.link-container button:hover {
		background-color: #2563eb;
	}

	.link-container button.secondary {
		background-color: transparent;
		border: 2px solid #1e3a8a;
		color: #1e3a8a;
	}
	.link-container button.secondary:hover {
		background-color: #2563eb;
		border: 2px solid #2563eb;
		color: #ffffff;
	}

	.projects-list-break {
		display: none;
	}

	/* max width 1400 */
	@media (max-width: 1400px) {
		.hover-instructions {
			display: none;
		}
		.project-details {
			display: flex;
			flex-direction: column-reverse;
			max-width: 500px;
		}
		.project-details .main-image {
			display: block;
			grid-area: 1 / 2 / 3 / 3;
		}
		.project-details .details-image {
			max-width: 400px;
			width: 100%;
		}
	}
	@media (max-width: 1000px) {
		.project-details {
			display: flex;
			flex-direction: column-reverse;
		}
		.projects-list-break {
			display: block;
			font-size: 1.5rem;
			font-family: 'Calistoga', sans-serif;
			margin: 5rem 0;
		}
	}
</style>
