<script lang="ts">
	import {
		FacebookIcon,
		GithubIcon,
		InstagramIcon,
		LinkedinIcon,
		TwitchIcon,
		TwitterIcon,
		YoutubeIcon
	} from 'svelte-feather-icons';
	import ScrollText from './ScrollText.svelte';

	export let isMobile: boolean;

	let src: string = 'img/bio1.png';
	let numBio: number = 1;

	$: logoSize = (isMobile) ? "30" : "60";

	function randNum(): number {
		return Math.floor(Math.random() * 3);
	}

	function randBio() {
		let dif = randNum();
		while (dif === numBio) {
			dif = randNum();
		}

		numBio = dif;
		src = `img/bio${dif}.png`;
	}

    randBio();
</script>

<div id="contactPanel">
	<div id="contactBox" class="gradient">
		<div class="bars"><ScrollText /></div>
		<div class="pics">
			{#if !isMobile}
			<div id="bio">
				<img {src} alt="" on:click={randBio} />
                <ul>
                    <li>Brandon Dcruz aka Captain Brando!</li>
                    <li>Age: 23</li>
                    <li>Origin: Altona Meadows, Victoria, Australia </li>
                    <li>Occupation: Software Engineer at Revature</li>
                    <li>Education: B.A.S.c in Creative Digital Media from the Rochester Institute of Technology 2020</li>
                    <li>Relationship: Taken</li>
                    <li>Instruments: Drums, Guitar, Piano, Ableton 10</li>
                    <br />
                    <li>Software Fields
                        <ul>
                            <li>Spring Boot</li>
                            <li>PostgresQL</li>
                            <li>AWS Services - EC2, RDBMS</li>
                            <li>Docker</li>
                            <li>HTML 5 / CSS / JS</li>
                            <li>Angular 12</li>
                            <li>React JS / React Native</li>
                            <li>Svelte</li>
                            <li>Spotify API</li>
                            <li>Google Developer API</li>
                            <li>JWT</li>
                        </ul>
                    </li>
                </ul>
			</div>
			{/if}
			<div id="vid">
				<iframe
					_ngcontent-gfx-c87=""
					src="https://www.youtube.com/embed/XcForynThz0"
					title="Captain Brando! - Better Better Etc."
					allow="clipboard-write; encrypted-media;"
					allowfullscreen={true}
					width="100%"
					height="100%"
					frameborder="0"
				/>
			</div>
		</div>
		<div class="bars">
			<a href="https://www.facebook.com/cptnbrando" target="_blank">
				<FacebookIcon size={logoSize} />
			</a>
			<a href="https://www.instagram.com/captainbrandooo/" target="_blank">
				<InstagramIcon size={logoSize} />
			</a>
			<a href="https://twitter.com/captainbrandooo" target="_blank">
				<TwitterIcon size={logoSize} />
			</a>
			<a href="https://github.com/cptnbrando" target="_blank">
				<GithubIcon size={logoSize} />
			</a>
			<a href="https://www.linkedin.com/in/dcruzships/" target="_blank">
				<LinkedinIcon size={logoSize} />
			</a>
			<a href="https://www.youtube.com/c/captainbrando" target="_blank">
				<YoutubeIcon size={logoSize} />
			</a>
			<a href="https://www.twitch.tv/captainbrandooo" target="_blank">
				<TwitchIcon size={logoSize} />
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	#contactPanel {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#contactBox {
		border: solid;
		display: flex;
		flex-direction: column;
		width: 90%;
		height: 90%;

		div {
			padding: 5px;
		}
	}

	.pics {
		flex: 8;
		border-top: solid;
		border-bottom: solid;
        display: flex;
        overflow: hidden;

        div {
            flex: 1;
            transition: 0.8s;
            z-index: 1;
            overflow: hidden;
            

            &:hover {
                flex: 8;
			}

            ul {
                // overflow: hidden;
                white-space: nowrap;
            }
        }

		img {
			width: 10rem;
			height: 10rem;
            float: left;
            margin-right: 25px;
            // overflow: hidden;
            // white-space: nowrap;

            &:hover {
				cursor: pointer;
			}
		}
	}

    #bio {
        display: inline-block;
    }

	.bars {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		&:last-of-type {
			align-items: center;
			justify-content: space-around;

			a {
				transition: 0.5s;
				color: black;
				&:hover {
					color: red;
				}
			}
		}
	}

	// Gradient
	.gradient {
		background: linear-gradient(134deg, #18d9a7, #d96e18, #c549d4, #eae505, #1e55e4);
		background-size: 1000% 1000%;

		-webkit-animation: Gradient 25s ease infinite;
		-moz-animation: Gradient 25s ease infinite;
		animation: Gradient 25s ease infinite;
	}

	@-webkit-keyframes Gradient {
		0% {
			background-position: 0% 82%;
		}

		50% {
			background-position: 100% 19%;
		}

		100% {
			background-position: 0% 82%;
		}
	}

	@-moz-keyframes Gradient {
		0% {
			background-position: 0% 82%;
		}

		50% {
			background-position: 100% 19%;
		}

		100% {
			background-position: 0% 82%;
		}
	}

	@keyframes Gradient {
		0% {
			background-position: 0% 82%;
		}

		50% {
			background-position: 100% 19%;
		}

		100% {
			background-position: 0% 82%;
		}
	}
</style>
