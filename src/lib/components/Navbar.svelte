<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function handleMouseover(event: MouseEvent | FocusEvent) {
		const target = event.target as HTMLAnchorElement;
		// Ensure the target is an anchor element and has a href attribute
		if (target.tagName === 'A' && target.href) {
			// Prevent the default navigation
			event.preventDefault();
			// Use SvelteKit's goto function to navigate
			goto(target.pathname, { replaceState: true });
		}
	}
</script>

<!-- Navbar.svelte -->
<nav class="navbar">
	<ul class="flex items-center justify-center uppercase text-4xl">
		<li class="absolute top-0 left-0">
			<a
				href="/"
				class="navlink"
				class:active={$page.url.pathname === '/'}
				on:mouseover={handleMouseover}
				on:focus={handleMouseover}>Home</a
			>
		</li>
		<li class="absolute top-0 right-0">
			<a
				href="/resume"
				class="navlink"
				class:active={$page.url.pathname === '/resume'}
				on:mouseover={handleMouseover}
				on:focus={handleMouseover}>Resume</a
			>
		</li>
		<li class="absolute bottom-0 left-0">
			<a
				href="/projects"
				class="navlink"
				class:active={$page.url.pathname === '/projects'}
				on:mouseover={handleMouseover}
				on:focus={handleMouseover}>Projects</a
			>
		</li>
		<li class="absolute bottom-0 right-0">
			<a
				href="/contact"
				class="navlink"
				class:active={$page.url.pathname === '/contact'}
				on:mouseover={handleMouseover}
				on:focus={handleMouseover}>Contact</a
			>
		</li>
	</ul>
	<div class="grid-border" />
</nav>
<nav class="mobile-nav">
	<a href="/" class="navlink" class:active={$page.url.pathname === '/'}>Home</a>
	<a href="/resume" class="navlink" class:active={$page.url.pathname === '/resume'}>Resume</a>
	<a href="/projects" class="navlink" class:active={$page.url.pathname === '/projects'}>Projects</a>
	<a href="/contact" class="navlink" class:active={$page.url.pathname === '/contact'}>Contact</a>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000');

	.navbar {
		position: fixed;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
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
		z-index: 1000;
	}

	.navlink.active {
		text-decoration: line-through;
	}

	.grid-border {
		--border-width: 3%;
		position: absolute;
		top: var(--border-width);
		left: var(--border-width);
		width: calc(100% - var(--border-width) * 2);
		height: calc(100% - var(--border-width) * 2);
		border: 2px solid #555;
		z-index: -200;
	}

	a {
		cursor: crosshair;
	}
	.mobile-nav {
		display: none;
	}

	@media (max-width: 1400px) {
		.navbar {
			display: none;
		}
		.mobile-nav {
			position: fixed;
			display: flex;
			width: 100%;
			justify-content: space-between;
			text-align: center;
			padding: 20px;
			font-family: 'Calistoga', cursive;
			background: white;
			z-index: 1000;
		}
	}
</style>
