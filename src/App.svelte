<script>
	import Router, {link} from 'svelte-spa-router';
	import Headline from './Headline.svelte';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Poll from './Poll.svelte';

	const routes = {
		'/': Home,
		'/about': About,
		'/poll/:id': Poll
	};

</script>

<nav>
	<a href="/" use:link>home</a>
	<a href="/about" use:link>about</a>
	<a href="/poll/12" use:link>poll</a>
</nav>

<main>
	<Headline name="World" />

	<Router {routes} />

</main>

<style>
	main {
		padding: 1em;
	}
</style>
