<script lang="ts">
    import Navbar from "../lib/nav/Navbar.svelte";
	import Banner from "../lib/panels/banner/Banner.svelte";
	import Music from "../lib/panels/music/Music.svelte";
	import Projects from "../lib/panels/projects/Projects.svelte";

	let scrollEvent: any = null;

	function onScroll(event) {
		scrollEvent = event;
	}
</script>

<main on:scroll={onScroll}>
	<article id="banner">
		<Banner />
	</article>

	<Navbar />

	<article id="projects">
		<Projects {scrollEvent} />
	</article>
	<article id="music">
		<Music {scrollEvent} />
	</article>
	<article id="contact">
		<p class="lorem">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam culpa
			aliquid quis aut, laboriosam labore quas molestias consectetur sequi
			debitis, delectus suscipit iusto veniam adipisci similique quae laborum
			omnis quibusdam.
		</p>
	</article>
</main>

<style>
	:root {
		font-family: "Open Sans", sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	article {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		height: 92vh;
		padding-top: 10px;
	}

	main {
		padding: 0;
		margin: 0;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		scroll-behavior: smooth;
		max-height: 100vh;
		scroll-padding-top: 7vh;
	}

	#banner {
		display: flex;
		flex-direction: column;
		padding-top: 0;
	}

	.lorem {
		font-size: xx-large;
	}
</style>