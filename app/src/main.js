import App from './mainpage.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;