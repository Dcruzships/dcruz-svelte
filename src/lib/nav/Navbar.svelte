<script lang="ts">
	import Typed from './Typed.svelte';
	import { HomeIcon, PackageIcon, MusicIcon, EditIcon, MailIcon } from 'svelte-feather-icons';
</script>

<nav class="sticky">
	<span>
		<Typed />
	</span>
	<span>
		<ul>
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
			<li>
				<EditIcon size="2x" />
				<a href="/blog">Blog</a>
			</li>
			<li>
				<MailIcon size="2x" />
				<a href="#contact">Contact</a>
			</li>
		</ul>
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

        &:hover {
            ul {
                padding-left: 0;
            }
		}
	}

	span {
		flex: 1;
	}

	ul {
		display: flex;
        justify-content: flex-end;
        padding-left: 200%;
        overflow: hidden;
        transition: 500ms ease;
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
