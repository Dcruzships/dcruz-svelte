<script lang="ts">
	import { emojis } from "./emojis";

	let emoji = shuffle(emojis);

	function shuffle(array: any[]) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}
</script>

<div id="emoji" class="hide">
	{#each emoji as emo}
		<h3 class="emo">{emo}</h3>
	{/each}
</div>
<div id="front" class="flexin">
	<div id="bio" class="flexin">
		<p>
			Hi! I'm a full-stack web developer, audio engineer, and published author
			based in Frisco, Texas 🌆
		</p>
	</div>
</div>

<style>
	.hide {
		display: none;
	}

	#emoji {
		filter: opacity(20%);
		display: inline-flex;
		position: absolute;
		right: 1000px;
		bottom: 1000px;
        padding-top: 10px;
	}

	.emo {
		font-size: 50px;
	}

	p {
		font-family: "Montserrat", sans-serif;
		width: 80%;
		font-size: 4rem;
		padding-bottom: 7vh;
		text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
	}

	.flexin {
		display: flex;
		justify-content: center;
		align-items: center;
        height: 100%;
	}

	@supports ((background-image: -moz-element(#emoji))) {
		#front {
			background-image: -moz-element(#emoji);
			background-attachment: fixed;
		}
	}

	@supports (not (background-image: -moz-element(#emoji))) {
		#front {
			background-image: url(https://i.imgur.com/M8lX7cB.png);
			background-attachment: fixed;
		}

        #emoji {
            padding-top: 0px;
        }
	}
</style>
