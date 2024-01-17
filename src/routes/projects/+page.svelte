<script lang="ts">
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
	import Container from '$lib/components/Container.svelte';
	import Page from '$lib/components/Page.svelte';
	import ScrollingContainer from '$lib/components/ScrollingContainer.svelte';

	let activeProjectId = null as string | null;

	function projectMouseOver(event: any) {
		const target = event.currentTarget; // Using currentTarget
		if (target.tagName === 'LI' && target.id) {
			activeProjectId = target.id;
			console.log('Active Project ID:', activeProjectId); // Debugging line
		}
	}
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
		{#each ['palace-guard', 'train-tracks', 'nxcro-store', 'project-management'] as projectId}
			<div
				id={`${projectId}-details`}
				class="project-details"
				class:active={activeProjectId === projectId}
			>
				>
				{projectId}
			</div>
		{/each}
	</Container>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Projects</Title>
		<Ball />
	</div>
	<Container delay={250}>
		<ScrollingContainer>
			{#each ['palace-guard', 'train-tracks', 'nxcro-store', 'project-management'] as projectId}
				<li
					id={projectId}
					class="project-card"
					on:mouseover={projectMouseOver}
					on:focus={projectMouseOver}
				>
					<h2>{projectId}</h2>
					<img src={`/projects/${projectId}.png`} alt={projectId} />
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
	.hover-instructions.hidden {
		display: none;
	}
</style>
