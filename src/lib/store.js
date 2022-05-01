import { writable } from 'svelte/store';

function changeNavbarStyling() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,

		change: () => {
			update((value) => !value);
		},

		reset: () => {
			set(false);
		}
	};
}

export const navbarStyling = changeNavbarStyling();
