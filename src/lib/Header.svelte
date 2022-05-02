<script>
	import { page } from '$app/stores';
	import { navbarStyling } from '$lib/store.js';
</script>

<header class:headerChange={$navbarStyling}>
	<div>
		<a href="/" class:active={$page.url.pathname === '/'} on:click={navbarStyling.reset}>
			<img
				width="208.659"
				height="15.297"
				src="logo-fundament-all-media-wit.png"
				alt="Fundament All Media"
				class:imgChange={$navbarStyling}
			/>
		</a>
	</div>

	<nav>
		<ul>
			<li>
				<a
					href="/service"
					class:active={$page.url.pathname === '/service'}
					class:textChange={$navbarStyling}
					on:click={navbarStyling.reset}>Onze Service</a
				>
			</li>
			<li>
				<a
					href="/portfolio"
					class:active={$page.url.pathname === '/portfolio'}
					class:textChange={$navbarStyling}
					on:click={navbarStyling.reset}>Portfolio</a
				>
			</li>
			<li>
				<a
					href="/team"
					class:active={$page.url.pathname === '/team'}
					class:textChange={$navbarStyling}
					on:click={navbarStyling.reset}>Ons Team</a
				>
			</li>
			<li>
				<a
					href="/blog"
					class:active={$page.url.pathname === '/blog'}
					class:textChange={$navbarStyling}
					on:click={navbarStyling.reset}>Blog</a
				>
			</li>
			<li>
				<a
					href="/vacatures"
					class:active={$page.url.pathname === '/vacatures'}
					class:textChange={$navbarStyling}
					on:click={navbarStyling.reset}>Vacatures</a
				>
			</li>
			<li>
				<a
					href="/contact"
					class:active={$page.url.pathname === '/contact'}
					class:textChange={$navbarStyling}
					on:click={navbarStyling.reset}>Contact</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		height: 84px;
		vertical-align: center;
		position: fixed;
		width: 100vw;
		z-index: 2;
		transition: 0.4s all;
	}

	nav {
		margin-left: auto;
		margin-right: 25px;
	}

	li {
		display: inline-block;
	}

	a {
		text-decoration: none;
		color: white;
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 300;
		margin-right: 15px;
	}

	img {
		height: 15.3px;
		margin-left: 25px;
		color: black;
	}

	.headerChange {
		background-color: white;
	}

	.textChange {
		color: black;
	}

	.imgChange {
		content: url('/logo-fundament-all-media.png');
	}

	.active {
		font-weight: 700;
	}

	nav a {
		display: block;
		position: relative;
		padding: 8px 0;
	}

	nav a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: white;
		opacity: 0;
		transition: opacity 300ms, transform 300ms;
	}

	nav a:hover::after,
	nav a:focus::after {
		opacity: 1;
		transform: translate3d(0, 2px, 0);
	}

	nav li a::after {
		opacity: 1;
		transform: scale(0);
		transform-origin: center;
	}

	nav li a:hover::after,
	nav li a:focus::after {
		transform: scale(1);
	}
</style>
