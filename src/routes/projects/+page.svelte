<script>
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
	import Container from '$lib/components/Container.svelte';
	import Page from '$lib/components/Page.svelte';
	import ScrollingContainer from '$lib/components/ScrollingContainer.svelte';
</script>

<Page>
	<Container>
		<ScrollingContainer>
			<li class="project-card">
				<h2>Palace Guard</h2>
				<img src="/projects/palace-guard.png" alt="Project Management Platform" />
			</li>
			<li class="project-card">
				<h2>Train Tracks</h2>
				<img src="/projects/train-tracks.png" alt="Project Management Platform" />
			</li>
			<li class="project-card">
				<h2>Project Managment Platform</h2>
				<img src="/projects/project-management.png" alt="Project Management Platform" />
			</li>
			<li class="project-card">
				<h2>Palace Guard</h2>
				<img src="/projects/palace-guard.png" alt="Project Management Platform" />
			</li>
			<li class="project-card">
				<h2>Train Tracks</h2>
				<img src="/projects/train-tracks.png" alt="Project Management Platform" />
			</li>
			<li class="project-card">
				<h2>Project Managment Platform</h2>
				<img src="/projects/project-management.png" alt="Project Management Platform" />
			</li>
		</ScrollingContainer>
	</Container>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Projects</Title>
		<Ball />
	</div>
	<Container delay={250} style="overflow: visible;">
		{#each { length: 30 } as _, i}
			<h3
				style="
					opacity: {Math.max(0, 1 - Math.log(i + 1) / Math.log(30))};
					letter-spacing: {Math.max(0, 1 - Math.log(i + 1) / Math.log(30)) / 1.75}em;
					white-space: nowrap;
				"
			>
				Hover over a project to see more details
			</h3>
		{/each}
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
</style>
