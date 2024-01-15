<script>
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="grid grid-cols-3 items-center justify-center w-full h-full">
	<div class="w-full h-3/4 flex items-center justify-center overflow-hidden">
		<div class="container slide-up">
			<ul>
				<h2>Experience</h2>
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
				<div class="job-title">
					<h3>BlockFi - Frontend Developer</h3>
					<h3>2021-2022</h3>
				</div>
				<p>
					Developed and maintained the BlockFi website, including the application process, blog, and
					landing pages. Worked with the marketing team to create new pages and features to increase
					conversion rates.
				</p>
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
			</ul>
		</div>
	</div>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Resume</Title>
		<Ball />
	</div>
	<div class="w-full h-full flex items-center justify-center">HELLO</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		margin-left: 20%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		z-index: 100;
		background-color: white;
		/* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
		/* Add the animation */
	}

	.slide-up {
		animation: slideUp 1s cubic-bezier(0, 0.99, 0.42, 0.99) forwards;
	}

	/* Keyframes for the slide-up animation */
	@keyframes slideUp {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0%);
		}
	}

	.container ul {
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
