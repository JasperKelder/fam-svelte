<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Blog - Fundament All Media</title>
</svelte:head>

<section>
	<div class="hero">
		<h1>Fam thoughts</h1>
		<h2>Onze schrijfsels</h2>
	</div>
</section>

<style>
	section {
		height: 440px;
		background-color: rgb(127, 140, 141);
	}

	@media only screen and (max-width: 1025px) {
		section {
			height: 275px;
		}
	}
</style>
