<script>
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
	import LeftContainer from '$lib/components/LeftContainer.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page>
	<div class="w-full h-full flex items-center justify-center">
		<LeftContainer>
			<div class="project-container">
				<div class="project-card">
					<h2>Palace Guard</h2>
					<img src="/projects/palace-guard.png" alt="Project Management Platform" />
				</div>
				<div class="project-card">
					<h2>Train Tracks</h2>
					<img src="/projects/train-tracks.png" alt="Project Management Platform" />
				</div>
				<div class="project-card">
					<h2>Project Managment Platform</h2>
					<img src="/projects/project-management.png" alt="Project Management Platform" />
				</div>
				<div class="project-card">
					<h2>Palace Guard</h2>
					<img src="/projects/palace-guard.png" alt="Project Management Platform" />
				</div>
				<div class="project-card">
					<h2>Train Tracks</h2>
					<img src="/projects/train-tracks.png" alt="Project Management Platform" />
				</div>
				<div class="project-card">
					<h2>Project Managment Platform</h2>
					<img src="/projects/project-management.png" alt="Project Management Platform" />
				</div>
			</div>
		</LeftContainer>
	</div>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Projects</Title>
		<Ball />
	</div>
	<div class="w-full h-full flex items-center justify-center">HELLO</div>
</Page>

<style>
	.project-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-height: 100%;
		overflow-y: scroll;
		z-index: 2000;
	}
	.project-card {
		background: white;
		padding: 15px;
		margin: 10px;
		z-index: 1000;
		display: flex;
		flex-direction: column;
	}

	.project-container::-webkit-scrollbar-track {
		/* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
		background-color: #f5f5f5;
	}

	.project-container::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	.project-container::-webkit-scrollbar-thumb {
		background-color: #f5f5f5;
		border: 2px solid #555555;
	}
</style>
