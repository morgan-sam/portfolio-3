<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div
	class="h-screen max-h-[85%] font-calistoga flex flex-col items-center justify-center overflow-hidden"
>
	<slot />
</div>
