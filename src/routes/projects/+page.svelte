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
				<h2>Nxcro Store</h2>
				<img src="/projects/nxcro-store.png" alt="Nxcro Store" />
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
</style>
