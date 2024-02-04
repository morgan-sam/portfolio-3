<script>
	import Container from '$lib/components/Container.svelte';
	import Page from '$lib/components/Page.svelte';
	import DecorativePanel from '$lib/components/DecorativePanel.svelte';
</script>

<Page>
	<Container delay={0} gap={'30px'}>
		<li class="flex !flex-row justify-between w-full">
			<h2>Experience</h2>
			<!-- <a class="resume-link" href="/fullresume" target="_blank">
				<h4>Full Resume</h4>
			</a> -->
		</li>
		<li>
			<div class="job-title">
				<h3>Lumber - Fullstack Engineer</h3>
				<h3>Aug 2023 - Jan 2024</h3>
			</div>
			<p>
				Developed Lumber's Shopify app <i>Atelier</i>, an app for creating sample sale stores for
				fashion brands.
			</p>
		</li>
		<li>
			<div class="job-title">
				<h3>Trena Digital - Shopify Developer</h3>
				<h3>Jun 2022 - Aug 2023</h3>
			</div>
			<p>
				Developed numerous Shopify stores for clients, including custom themes, apps, and
				integrations.
			</p>
		</li>
		<li>
			<div class="job-title">
				<h3>BlockFi - Frontend Developer</h3>
				<h3>Jan 2021 - Jun 2022</h3>
			</div>
			<p>
				Developed and maintained the frontend of BlockFi's credit card app, which had 60,000+ active
				users.
			</p>
		</li>
		<li>
			<div class="job-title">
				<h3>Open Source Contributer</h3>
				<h3>Jan 2020 - Jan 2021</h3>
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
		<!-- link to full resume -->
	</Container>
	<DecorativePanel title={'Resume'} />
	<Container delay={250} gap={'30px'}>
		<li><h2>Client Testimonials</h2></li>
		<li class="testimonial">
			<p>
				"Overall this is literally one of the best results I've seen from a developer - super
				frictionless experience and you understood the task perfectly. I really appreciate you, keep
				up the great work! Happy to send you multiple projects moving forward 🙂"
			</p>
			<h3>- Nico Aguirre, Trena Digital</h3>
		</li>
		<li class="testimonial">
			<p>"Speedy, reliable and great work. Will be working with Sam in the future again soon!"</p>
			<h3>- Luke Rourke, LPC IT Design</h3>
		</li>
		<li class="testimonial">
			<p>
				"As always an amazing job, have worked with him many times. Always get the job done and on
				time."
			</p>
			<h3>- Sam Golshan, Popsi Lingerie</h3>
		</li>
	</Container>
</Page>

<style>
	li {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
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
		font-size: 1.2rem;
		font-weight: 400;
	}
	h4 {
		font-size: 1.25rem;
		font-weight: 200;
	}
	p {
		font-size: 1.25rem;
		font-weight: 400;
		font-family: 'DM Sans', sans-serif;
	}
	.contribution-link,
	.resume-link {
		color: rgb(104, 104, 192);
		text-decoration: underline;
	}
	.resume-link {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.resume-link h4 {
		font-size: 1.5rem;
	}
	/* max width 1400 */
	@media (max-width: 1400px) {
		.job-title {
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}
	}
	@media (max-width: 1000px) {
		.testimonial h3 {
			text-align: right;
		}
	}
</style>
