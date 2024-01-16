<script>
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
	import Container from '$lib/components/Container.svelte';
	import Page from '$lib/components/Page.svelte';
	import ScrollingContainer from '$lib/components/ScrollingContainer.svelte';
</script>

<Page>
	<div class="w-full h-full flex items-center justify-center">
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
	</div>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Projects</Title>
		<Ball />
	</div>
	<div class="w-full h-full flex items-center justify-center">HELLO</div>
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
