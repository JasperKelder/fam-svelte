<script>
	import { slide } from 'svelte/transition';

	export let path = '';
</script>

{#key path}
	<div transition:slide>
		<slot />
	</div>
{/key}
