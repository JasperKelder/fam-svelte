<script context="module">
	export const load = async ({ url }) => ({
		props: {
			currentPath: url.pathname
		}
	});
</script>

<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Transition from '$lib/Transition.svelte';

	export let currentPath;
</script>

<Header />
<Transition path={currentPath}>
	<main>
		<slot />
	</main>
</Transition>
