<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />
<div class="font-calistoga flex flex-col items-center justify-center">
	<slot />
</div>
