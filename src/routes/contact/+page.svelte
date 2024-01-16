<script>
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
	import Page from '$lib/components/Page.svelte';
	import Container from '$lib/components/Container.svelte';
	import { dev } from '$app/environment';
	import ThankYou from '$lib/components/ThankYou.svelte';
</script>

<Page>
	<Container delay={0}>
		<h3 class="mx-auto">
			<ThankYou />
		</h3>
	</Container>
	<div class="w-full h-full relative">
		<Title class="top-[27%]">Contact</Title>
		<Ball />
	</div>
	<Container delay={250}>
		<div class="mx-auto mb-8 text-center">
			<h2>Email me at:</h2>
			<h2 class="email">hello@smorgan.dev</h2>
			<div class="flex mx-auto gap-2 items-center justify-center">
				<button
					class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold mt-2 py-2 px-4 rounded flex items-center"
					on:click={() => {
						if (dev) {
							window.location.href = 'mailto:hello@smorgan.dev?subject=Website Inquiry';
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3,5 L21,5 L21,19 L3,19 L3,5 Z M3,5 L12,12 L21,5"
						/>
					</svg>
					Email
				</button>
				<button
					class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold mt-2 py-2 px-4 rounded flex items-center"
					on:click={() => {
						if (dev) {
							navigator.clipboard.writeText('hello@smorgan.dev');
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
					Copy
				</button>
			</div>
		</div>
		<div class="mx-auto">
			<h2>My Socials:</h2>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/morgan-sam/"><i class="ci ci-linkedin ci-2x" /></a>
				</li>
				<li>
					<a href="https://www.github.com/morgan-sam"><i class="ci ci-github ci-2x" /></a>
				</li>
			</ul>
		</div>
	</Container>
</Page>

<style>
	i {
		width: 5rem;
		height: 5rem;
	}
	h2 {
		font-size: 2rem;
		margin: 0 auto;
	}
	button,
	.email {
		font-family: 'DM Sans', sans-serif;
	}
	ul {
		display: flex;
		margin: 0 auto;
		justify-content: center;
	}
</style>
