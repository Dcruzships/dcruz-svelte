<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import {
		PauseCircleIcon,
		PlayCircleIcon,
		RepeatIcon,
		ShuffleIcon,
		SkipBackIcon,
		SkipForwardIcon
	} from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import type { Track } from './tracks';
	import RangeSlider from 'svelte-range-slider-pips';

	export let track: Track;
	export let isPlaying: boolean;
	export let showControls: boolean;

	export let shuffle: boolean;
	export let loop: boolean;

	let isSeeking: boolean = false;

	// Event dispatcher + command function to relay actions back to Music.svelte
	const dispatch = createEventDispatcher();

	function command(cmd: string) {
		dispatch('message', {
			cmd: cmd
		});
	}

	// Duration updates
	export let duration;
	let _duration: string;
	$: duration, onDuration();

	function onDuration() {
		_duration = formatTime(duration * 1000);
	}

	// Current time updates
	export let time;
	let extraTime = 0;
	let _time: string = '0:00';
	$: time, onTime();

	function onTime() {
		if (!isSeeking) extraTime = time;
		_time = formatTime(time * 1000);
	}

	/**
	 * Format a given milisecond value into a string with leading 0s
	 * @param miliseconds given time in ms
	 */
	function formatTime(miliseconds: number): string {
		if (!miliseconds || miliseconds < 1000) {
			return `0:00`;
		}

		let seconds: number | string = Math.floor((miliseconds / 1000) % 60);
		let minutes: number | string = Math.floor((miliseconds / (1000 * 60)) % 60);

		// Format each section with a leading 0 if needed
		// minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		// If it's more than an hour, return the hour too. Otherwise, just the min:sec
		return `${minutes}:${seconds}`;
	}

	function slide(e) {
		command(e.detail.value);
		isSeeking = false;
	}
</script>

<div ref="box" id="controlsBox">
	<div>
		{#if showControls}
			<div id="icons" transition:fade>
				<span on:click={() => command('shuffle')} class={shuffle ? 'active' : ''}>
					<ShuffleIcon size="100" />
				</span>
				<span on:click={() => command('prev')}>
					<SkipBackIcon size="100" />
				</span>
				<span on:click={() => command('playPause')}>
					{#if isPlaying}
						<PauseCircleIcon size="100" />
					{:else}
						<PlayCircleIcon size="100" />
					{/if}
				</span>
				<span on:click={() => command('next')}>
					<SkipForwardIcon size="100" />
				</span>
				<span on:click={() => command('loop')} class={loop ? 'active' : ''}>
					<RepeatIcon size="100" />
				</span>
			</div>
		{/if}
	</div>
	<div id="seeker">
		<div id="img">
			<img src={track.img} alt="" />
		</div>
		<div>
			<div>
				{track.artist} - {track.name}
			</div>
			<div id="seek">
				<span>{_time}</span>
				<span
					><RangeSlider
						values={[extraTime]}
						min={0}
						max={duration}
						on:start={() => {
							isSeeking = true;
						}}
						on:stop={(e) => {
							command(e.detail.value);
							isSeeking = false;
						}}
					/></span
				>
				<span>{_duration}</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#controlsBox {
		position: absolute;
		top: 0;
		z-index: 10;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		div:first-child {
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}

	#icons {
		width: 70%;

		span {
			transition: 0.3s;
			&:hover {
				color: gray;
				transform: scale(1.3);
			}

			&:active {
				color: red;
			}
		}

		.active {
			color: red;

			&:hover {
				color: red;
				transform: scale(1.3);
			}
		}
	}

	#seeker {
		display: flex;
		align-items: flex-end;
		margin-bottom: 12px;
		justify-content: flex-start;

		div:last-child {
			display: flex;
			flex-direction: column;
			width: 100%;
			align-items: center;

			div {
				flex-direction: row;
			}
		}
	}

	img {
		width: 100px;
		height: 100px;
		border: solid;
	}

	#seek {
		margin-bottom: 10px;

		span {
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			height: 40%;
			width: 100%;

			&:nth-child(2) {
				flex: 10;
				display: block;
			}
		}
	}
</style>
