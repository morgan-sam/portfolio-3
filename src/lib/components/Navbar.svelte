<!-- Navbar.svelte -->
<nav class="navbar">
	<ul class="flex items-center justify-center uppercase text-4xl">
		<li class="absolute top-0 left-0"><a href="/">Home</a></li>
		<li class="absolute top-0 right-0"><a href="/resume">Resume</a></li>
		<li class="absolute bottom-0 left-0"><a href="/projects">Projects</a></li>
		<li class="absolute bottom-0 right-0"><a href="/contact">Contact</a></li>
	</ul>
	<div class="grid-border" />
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000');

	.navbar {
		position: fixed;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		z-index: 100;
		font-family: 'DM Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: 300;
		font-style: normal;
		letter-spacing: 10px;
		color: #555;
	}
	.navbar ul li {
		background: white;
		padding: 15px;
		margin: 10px;
	}
	.grid-border {
		--border-width: 3%;
		position: absolute;
		top: var(--border-width);
		left: var(--border-width);
		width: calc(100% - var(--border-width) * 2);
		height: calc(100% - var(--border-width) * 2);
		border: 2px solid #555;
		z-index: -1;
	}
</style>
