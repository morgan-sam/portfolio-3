<script lang="ts">
	export let title: string | undefined = undefined;
	$: title = title === undefined ? '' : title;
	import Ball from '$lib/components/Ball.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="decorative-panel">
	<Title class="top-[27%]">
		{title}
	</Title>
	<Ball />
</div>

<style>
	.decorative-panel {
		position: relative;
		width: 100%;
		height: 100%;
	}
	/* max width 1400 */
	@media (max-width: 1400px) {
		.decorative-panel {
			order: -1;
			height: 500px;
		}
	}
</style>
