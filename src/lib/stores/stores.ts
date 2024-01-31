import { writable } from 'svelte/store';

export const lightsOnStore = writable<boolean>(false); // Initialize with `false`
