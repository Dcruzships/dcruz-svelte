<script lang="ts">
	import { Track, tracks } from "./tracks";
	import Visualizer from "./Visualizer.svelte";

	const songs: Track[] = tracks;

	// let faLeft = faAngleLeft;
	// let faRight = faAngleRight;
	// let faPlay = faPlayCircle;
	// let faPause = faPauseCircle;
	// let faRandom = faRandom;
	// let faSync = faSync;
	// let faVolumeUp = faVolumeUp;
	// let faVolumeDown = faVolumeDown;
	// let faVolumeMute = faVolumeMute;

	let audioPlayer: HTMLAudioElement;

	let position: number = 0;
	// let positionObserver: Subscriber<string> | any;
	// let _position: Observable<string> = new Observable<string>((observer) => {
	// 	positionObserver = observer.next("0:00");
	// });
	let duration: number = 0;
	let _duration: string = "0:00";

	let track: Track = songs[0];
	let trackNum: number = 0;
	let time: number = 0;
	let isPlaying: boolean = false;
	let isSeeking: boolean = false;

	let seekValue: number = 0;
	let sliderPos: number = 0;
	let loop: boolean = false;
	let shuffle: boolean = true;
	let volume: number = 30;

	/**
	 * Seek to the time when the slider is changed
	 */
	function onSliderChange(): void {
		// Advanced algebra right here
		let newPos = (sliderPos / 100) * duration;
		newPos = Math.round(newPos);
		seekValue = newPos;
		isSeeking = false;
		audioPlayer.currentTime = newPos / 1000;
		updatePosition();
	}

	/**
	 * When the slider's moving, stop the timer updates and set isSeeking to true
	 */
	function onSliderMove(): void {
		resetPosition(false);
		isSeeking = true;
	}

	/**
	 * Used with mat-slider to print value above seeker
	 * @param value value of slider
	 * @returns format time for slider pos
	 */
	function formatLabel(value: number) {
		if (!duration) return "0:00";
		value = Math.round((value / 100) * duration);
		return formatTime(value);
	}

	function changeTrack(num: number) {
		if (isPlaying) playPause();
		if (shuffle) trackNum = Math.floor(Math.random() * (songs.length - 1));
		else trackNum += num;
		if (trackNum >= songs.length) trackNum = 0;
		if (trackNum < 0) trackNum = songs.length - 1;
		track = songs[trackNum];
		audioPlayer.load();
		if (!isPlaying) playPause();
	}

	function playPause(): void {
		// console.log("play/pause");
		isPlaying = !isPlaying;
		if (isPlaying) {
			audioPlayer.play();
			updatePosition();
		} else {
			audioPlayer.pause();
			resetPosition(false);
		}
	}

	/**
	 * Uses window player to get the current position every .5 seconds
	 * @param position the starting position
	 */
	function updatePosition(): void {
		// _position = new Observable<string>(observer => {
		//   positionObserver = timer(500, 500).subscribe(() => {
		//     if(!isSeeking) {
		//       position = audioPlayer.nativeElement.currentTime * 1000;
		//       duration = audioPlayer.nativeElement.duration * 1000;
		//     } else {
		//       position = seekValue;
		//     }
		//     observer.next(formatTime(position));
		//     _duration = formatTime(duration);
		//     sliderPos = (position / duration) * 100;
		//   });
		// });
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
		seconds = seconds < 10 ? "0" + seconds : seconds;

		// If it's more than an hour, return the hour too. Otherwise, just the min:sec
		return `${minutes}:${seconds}`;
	}

	/**
	 * Helper function to reset _position to 0:00
	 * @param reset whether to change the timer back to 0:00 or not
	 */
	function resetPosition(reset: boolean): void {
		// positionObserver?.unsubscribe();
		// if(reset) {
		//   _position = new Observable<string>(observer => {
		//     positionObserver = observer.next("0:00");
		//   });
		//   position = 0;
		// }
	}

	export let scrollEvent: any;
</script>

<div id="visualizer" class="musicItem" on:click={playPause}>
	<Visualizer {isPlaying} audioElement={audioPlayer} {scrollEvent} />
</div>
<!-- <div id="controls" class="musicItem">
	<div id="seeker">
		<span class="seeker-time">{_position | async}</span>
		<mat-slider
			min="0"
			max="100"
			step="1"
			thumbLabel
			[displayWith]="formatLabel.bind(this)"
			(input)="onSliderMove()"
			(change)="onSliderChange()"
			[(ngModel)]="sliderPos"
		/>
		<span class="seeker-time" id="duration">{{ _duration }}</span>
	</div>
	<div id="player">
		<div id="volume" class="control">
			<div class="spacer" />
			<span
				id="volumeIcon"
				(click)="(volume === 0) ? volume = 30 : volume = 0"
			>
				<fa-icon
					class="clickable"
					[icon]="faVolumeUp"
					size="2x"
					*ngIf="volume >= 50"
				/>
				<fa-icon
					class="clickable"
					[icon]="faVolumeDown"
					size="2x"
					*ngIf="volume < 50 && volume > 1"
				/>
				<fa-icon
					class="clickable"
					[icon]="faVolumeMute"
					size="2x"
					*ngIf="volume === 0"
				/>
			</span>
			<mat-slider min="0" max="100" step="1" [(ngModel)]="volume" />
			<div class="spacer" />
		</div>
		<div id="icons" class="control">
			<fa-icon
				class="clickable"
				[icon]="faLeft"
				size="2x"
				(click)="changeTrack(-1)"
			/>
			<span (click)="shuffle = !shuffle;">
				<fa-icon
					class="clickable"
					[icon]="faRandom"
					size="2x"
					*ngIf="shuffle"
					style="color:red"
				/>
				<fa-icon
					class="clickable"
					[icon]="faRandom"
					size="2x"
					*ngIf="!shuffle"
				/>
			</span>
			<span (click)="playPause()">
				<fa-icon
					class="clickable"
					[icon]="faPlay"
					size="2x"
					*ngIf="!isPlaying"
				/>
				<fa-icon
					class="clickable"
					[icon]="faPause"
					size="2x"
					*ngIf="isPlaying"
				/>
			</span>
			<span (click)="loop = !loop;">
				<fa-icon
					class="clickable"
					[icon]="faSync"
					size="2x"
					*ngIf="loop"
					style="color: red"
				/>
				<fa-icon
					class="clickable"
					[icon]="faSync"
					size="2x"
					*ngIf="!loop"
				/>
			</span>
			<fa-icon
				class="clickable"
				[icon]="faRight"
				size="2x"
				(click)="changeTrack(1)"
			/>
		</div>
		<div id="link" class="control">
			<span>{track.artist}</span>
			<span>{track.name}</span>
		</div>
	</div>
</div> -->
<audio
	data-playing="no"
	crossOrigin="anonymous"
	{loop}
	volume={volume / 100}
	bind:this={audioPlayer}
>
	<source src={track.src} type="audio/mp3" />
</audio>

<!-- on:ended={changeTrack(1)} -->
<style>
	#music {
		height: calc(100vh - 7vh);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 10px;

	}

	.musicItem {
		width: 60%;
		flex: 0 0 15%;
	}

	#MusicLabel {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 5%;
	}

	#visualizer {
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}

	#controls {
		flex: 0 1 auto;
		width: 95%;
	}

	#seeker {
		width: auto;
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: solid;
	}

	#volume {
		display: flex;
		justify-content: flex-start;

		/* span {
			flex: 0.45;
		}

		mat-slider {
			flex: 1;
		}

		.spacer {
			flex: 1;
			&:first-of-type {
				display: none;
			}
		} */
	}

	#player {
		display: flex;
		flex-direction: row;
		border: solid;
		width: auto;
		justify-content: center;

		/* .control {
			display: flex;
			align-items: center;
			flex: 1;
		}

		#icons {
			justify-content: center;
		}

		#link {
			display: flex;
			flex-direction: column;
			margin-right: 15px;
			justify-content: center;
			align-items: flex-end;
		}

		fa-icon {
			margin: 20px;
		} */
	}

	@media only screen and (max-width: 800px) {
		#player {
			padding-top: 10px;
			display: flex;
			flex-direction: column-reverse;

			/* #icons,
			#link {
				justify-content: center;
				align-items: center;
			}

			#icons {
				padding-top: 5px;
				padding-bottom: 5px;

				span,
				fa-icon {
					margin: 0.6rem;
				}
			}

			#link {
				margin: 0;
			}

			fa-icon {
				margin: 0;
			} */
		}

		#volume {
			justify-content: center;
			align-items: center;
			padding-left: 10px;
			padding-right: 10px;

			/* mat-slider {
				margin: 0;
			}

			.spacer {
				flex: 1;

				&:first-of-type {
					display: block;
				}
			} */
		}
	}
</style>
