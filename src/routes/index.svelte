<script context="module">
	export const prerender = true;
</script>

<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { navbarStyling } from '$lib/store.js';

	let element;
	let intersecting;

	if (intersecting) {
		navbarStyling.change;
	}
</script>

<svelte:head>
	<title>Fundament All Media - Maak de content</title>
</svelte:head>

<section>
	<div class="overlay">
		<div class="content verbinding">
			<h1>
				<span>Maak de</span>
				<span>verbinding</span>
			</h1>
			<p>Kijk hoe wij jullie wereld kunnen veranderen met onze online of offline mogelijkheden</p>
			<a class="button" href="/portfolio">Bekijk ons Portfolio</a>
		</div>
	</div>
</section>

<section>
	<div class="content">
		<h2>
			<span>Leveren in</span>
			<span>Style</span>
		</h2>
		<div class="flex">
			<img src="/bakfiets.png" alt="Klanten" />
		</div>
		<a class="button" href="/service" on:click={navbarStyling.reset}>Kijk voor wie we werken</a>
	</div>
</section>

<IntersectionObserver once {element} bind:intersecting threshold={0}>
	<section bind:this={element}>
		<div class="intersection">
			{#if intersecting}
				{navbarStyling.change()}
			{/if}
		</div>
		<div class="content">
			<h2>
				<span>Een goed</span>
				<span>Concept</span>
			</h2>
			<div class="flex">
				<img src="/light.png" alt="Concept" />
			</div>
			<a class="button" href="/service" on:click={navbarStyling.reset}>Meer over concepting</a>
		</div>
	</section>
</IntersectionObserver>

<section>
	<div class="content">
		<h2>
			<span>Maak een mooi</span>
			<span>Design</span>
		</h2>
		<div class="flex">
			<img src="/veer.png" alt="Design" />
		</div>
		<a class="button" href="/service" on:click={navbarStyling.reset}>Meer over Design</a>
	</div>
</section>

<section>
	<div class="content">
		<h2>
			<span>Verbind de juiste</span>
			<span>Techniek</span>
		</h2>
		<div class="flex">
			<img src="/propellor.png" alt="Techniek" />
		</div>
		<a class="button" href="/service" on:click={navbarStyling.reset}>Meer over techniek</a>
	</div>
</section>

<section>
	<div class="content">
		<h2>
			<span>Maak het</span>
			<span>Persoonlijk</span>
		</h2>
		<div class="flex">
			<img src="/koffie.png" alt="Contact" />
		</div>
		<a class="button" href="/contact" on:click={navbarStyling.reset}>Neem contact met ons op</a>
	</div>
</section>

<style>
	section {
		height: 100vh;
	}

	section:nth-of-type(1) {
		background-image: url('/home-2.jpg');
		background-size: cover;
		background-position: 50%;
	}

	section:nth-of-type(2) {
		background-color: rgb(198, 82, 82);
	}

	section:nth-of-type(3) {
		background-color: rgb(82, 194, 189);
	}

	section:nth-of-type(4) {
		background-color: rgb(98, 63, 117);
	}

	section:nth-of-type(5) {
		background-color: rgb(87, 188, 144);
	}

	section:nth-of-type(6) {
		background-color: rgb(69, 148, 225);
	}

	.overlay {
		height: 100%;
		background-color: rgba(0, 0, 0, 0.35);
		display: flex;
		justify-content: center;
	}

	.content {
		position: relative;
		top: 22%;
	}

	.content > h1 > span,
	.content > h2 > span {
		display: flex;
		justify-content: center;
		color: white;
	}

	.content.verbinding > h1 > span {
		font-family: 'Pacifico';
		font-size: 88px;
		line-height: 100px;
		font-weight: 400;
	}

	.content > h2 > span:nth-child(2) {
		font-family: 'Pacifico';
		font-size: 88px;
		font-weight: 400;
		color: black;
	}

	.content p {
		margin-top: 30px;
		color: white;
		font-size: 24px;
		font-weight: 300;
		max-width: 500px;
		text-align: center;
	}

	.content a {
		text-transform: uppercase;
		text-decoration: none;
		background-color: rgb(255, 255, 255);
		border-radius: 50px;
		padding: 8px 16px;
		border: 1px solid black;
		color: black;
		position: absolute;
		margin-top: 50px;
		left: 50%;
		transform: translate(-50%);
	}

	.intersection {
		display: none;
	}

	.flex {
		display: flex;
		justify-content: center;
	}
</style>
