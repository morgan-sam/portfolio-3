<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="h-screen font-calistoga flex flex-col items-center justify-center">
	<slot />
</div>
