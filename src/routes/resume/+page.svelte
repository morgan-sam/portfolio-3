<script>
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
	import LeftContainer from '$lib/components/LeftContainer.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page>
	<div class="w-full h-3/4 flex items-center justify-center overflow-hidden">
		<LeftContainer>
			<ul class="projects-container">
				<li><h2>Experience</h2></li>
				<li>
					<div class="job-title">
						<h3>Open Source Contributer</h3>
						<h3>2020-2021</h3>
					</div>
					<p>Contributed to:</p>
					<div class="w-full flex justify-between">
						<a class="contribution-link" href="https://github.com/gatsbyjs/gatsby/pull/25448"
							><h4>@gatsbyjs</h4></a
						>
						<a class="contribution-link" href="https://github.com/electron/electron/pull/25105"
							><h4>@electron</h4></a
						>
						<a class="contribution-link" href="https://github.com/serverless/serverless/pull/8160"
							><h4>@serverless</h4></a
						>
						<a class="contribution-link" href="https://github.com/mui/material-ui/pull/22146"
							><h4>@mui</h4></a
						>
					</div>
				</li>
				<li>
					<div class="job-title">
						<h3>BlockFi - Frontend Developer</h3>
						<h3>2021-2022</h3>
					</div>
					<p>
						Developed and maintained the BlockFi website, including the application process, blog,
						and landing pages. Worked with the marketing team to create new pages and features to
						increase conversion rates.
					</p>
				</li>
				<li>
					<div class="job-title">
						<h3>Freelance Fullstack Developer</h3>
						<h3>2022 - Present</h3>
					</div>
					<p>
						Worked with clients to create websites and applications to meet their needs. Developed
						websites and applications using React, Node, and MongoDB. Worked with clients to create
						websites and applications to meet their needs. Developed websites and applications using
						React, Node, and MongoDB.
					</p>
				</li>
			</ul>
		</LeftContainer>
	</div>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Resume</Title>
		<Ball />
	</div>
	<div class="w-full h-full flex items-center justify-center">HELLO</div>
</Page>

<style>
	.projects-container {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		gap: 20px;
	}
	.job-title {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}
	h2 {
		font-size: 2rem;
		font-weight: 400;
		text-decoration: underline;
	}
	h3 {
		font-size: 1.4rem;
		font-weight: 400;
	}
	h4 {
		font-size: 1.25rem;
		font-weight: 200;
	}
	p {
		font-size: 1.25rem;
		font-weight: 200;
	}
	.contribution-link {
		color: rgb(104, 104, 192);
		text-decoration: underline;
	}
</style>
