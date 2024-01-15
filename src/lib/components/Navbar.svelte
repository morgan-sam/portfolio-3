<!-- Navbar.svelte -->
<nav class="navbar">
	<ul class="flex items-center justify-center uppercase text-4xl">
		<li class="m-4 absolute top-0 left-0"><a href="/">Home</a></li>
		<li class="m-4 absolute top-0 right-0"><a href="/resume">Resume</a></li>
		<li class="m-4 absolute bottom-0 left-0"><a href="/projects">Projects</a></li>
		<li class="m-4 absolute bottom-0 right-0"><a href="/contact">Contact</a></li>
	</ul>
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
</style>
