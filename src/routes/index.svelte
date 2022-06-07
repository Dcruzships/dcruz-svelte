<script lang="ts">
    import Contact from "$lib/panels/contact/Contact.svelte";
	import { onMount } from "svelte";
	import Navbar from "../lib/nav/Navbar.svelte";
	import Banner from "../lib/panels/banner/Banner.svelte";
	import Music from "../lib/panels/music/Music.svelte";
	import Projects from "../lib/panels/projects/Projects.svelte";

	let scrollEvent: any = null;
	let isMobile: boolean = false;

	function onScroll(event) {
		scrollEvent = event;
	}

	function onResize() {
		isMobile = (window.innerWidth < 800);
	}

	onMount(async () => {
		onResize();
	});
</script>

<svelte:window on:resize={onResize} />
<main on:scroll={onScroll} on:resize={onResize}>
	<article id="banner">
		<Banner />
	</article>

	<Navbar {isMobile} />

	<article id="projects">
		<Projects />
	</article>
	<article id="music">
		<Music {scrollEvent} {isMobile} />
	</article>
	<article id="contact">
		<Contact {isMobile} />
	</article>
</main>

<style lang="scss">
	:root {
		font-family: "Open Sans", sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		min-height: -webkit-fill-available;
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
		scroll-behavior: smooth;
		max-height: 100vh;
		scroll-padding-top: 7vh;
		overflow-x: hidden;
		min-height: -webkit-fill-available;
	}

	#music {
		position: relative;
	}

	#projects {
		overflow: hidden;
	}

	// Chrome + IE + Opera
	@supports (overflow-y: overlay) {
		main {
			overflow-y: overlay;
		}

		main::-webkit-scrollbar {
			width: 15px;
			height: 10px;
		}

		main::-webkit-scrollbar-thumb {
			background-image: linear-gradient(180deg, #d03643 0%, rgb(35, 41, 59) 99%);
			border-radius: 100px;
			border: 2px solid transparent;
			background-clip: content-box;
		}

		main::-webkit-scrollbar-track {
			border-radius: 100px;
		}
	}

	// Firefox
	@supports not (overflow-y: overlay) {
		main {
			overflow-y: scroll;
			scrollbar-color: black rgba(255, 255, 255, 0);
			scrollbar-gutter: stable;
			scrollbar-width: thin;
		}
	}

	#banner {
		display: flex;
		flex-direction: column;
		padding-top: 0;
	}
</style>