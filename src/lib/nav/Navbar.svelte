<script lang="ts">
	import Typed from './Typed.svelte';
	import { HomeIcon, PackageIcon, MusicIcon, EditIcon, MailIcon, MenuIcon } from 'svelte-feather-icons';
	import { fly } from 'svelte/transition';

	let show: boolean = false;
</script>

<nav class="sticky" on:mouseenter={() => show = true} on:mouseleave={() => show = false}>
	<span id="typer">
		<Typed />
	</span>
	<span>
		{#if show}
		<ul in:fly="{{ x: 600, duration: 400 }}" out:fly="{{ x: 600, duration: 400 }}" class="buttons">
			<li>
				<HomeIcon size="2x" />
				<a href="#banner">Home</a>
			</li>
			<li>
				<PackageIcon size="2x" />
				<a href="#projects">Projects</a>
			</li>
			<li>
				<MusicIcon size="2x" />
				<a href="#music">Music</a>
			</li>
			<!-- <li>
				<EditIcon size="2x" />
				<a href="/blog">Blog</a>
			</li> -->
			<li>
				<MailIcon size="2x" />
				<a href="#contact">Contact</a>
			</li>
		</ul>
		{:else}
		<div class="buttons" in:fly="{{x: 400, delay: 200, duration: 300}}">
			<MenuIcon size="2x" />
		</div>
		{/if}
	</span>
</nav>

<style lang="scss">
	.sticky {
		background-color: #ffffff;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}

	nav {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0 10px 0 10px;
		border-top: solid;
		border-bottom: solid;
		height: 8vh;
		z-index: 100;
        overflow: hidden;
	}

	span {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		&:last-of-type {
			justify-content: flex-end;
		}
	}

	.buttons {
		display: flex;
        justify-content: flex-end;
        overflow: hidden;
	}

	li {
		padding: 0 1em 0 1em;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		transition-duration: 0.35s;

		&:hover {
			color: red;
			text-decoration: underline;
		}
	}

	a {
		text-decoration: none;
		color: black;
		padding: 0 0.5em 0 0.5em;
	}
</style>
