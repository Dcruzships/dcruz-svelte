<script lang="ts">
	import Carousel from "@beyonk/svelte-carousel";
	import { Project } from "./project";
	import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
	import { onMount } from "svelte";

	const projects: Project[] = [
		new Project(
			0,
			"am_radio",
			"amradio.webm",
			"A Spotify player that allows for live music listening and discovery through 24/7 user created radio stations. Features a rich customizable visualizer, websocket chatrooms, and more.",
			"Angular 12, Spring Boot, Spotify Web API/Playback SDK, Sock.js, Stomp.js, Java 11 Threads, d3 Data, Docker, AWS EC2",
			"https://amradio.app"
		),
		new Project(
			1,
			"Day Six Farm",
			"goats.webm",
			"A website for Day Six Farm in Prosper, TX.",
			"React.js, MongoDB, Grommet, GitHub Pages",
			"https://dcruzships.github.io/goats"
		),
		new Project(
			2,
			"Link Social Network",
			"link.webm",
			"Social media website with chatrooms, custom JWT authorization, and notifications along with all 40forty features. Built with a microservice architecture and test driven development. Created as part of a Revature training boot camp with a team of 20 in April 2021.",
			"Angular 8, JSON Web Token, Spring Boot Data / Web / WebSocket / Gateway / Eureka, JDBC, Lombok, PostgreSQL, AWS RDS & S3, Docker, JUnit 5, Bootstrap 5, Log4J",
			"https://github.com/LinkSocialNetwork/GlobalReadMe"
		),
		new Project(
			3,
			"40forty",
			"forty.webm",
			"Social media website where all user data is deleted every 40 days. Features post feeds, media sharing, and user profiles. Created with test driven development as part of a Revature training boot camp with a team of 4 in March 2021.",
			"Angular 8, Spring MVC / AOP, Hibernate, H2 DB, PostgreSQL, AWS RDS & S3 & Lambda, JUnit 5, HTML/CSS/JS, Log4J",
			"https://github.com/cptnbrando/40forty"
		),
	];

	let currentVid = 0;

	function change(current) {
		const old: HTMLVideoElement = document.querySelector(`#vid${currentVid}`);
		old.pause();
		currentVid = current.detail.currentSlide;
		const vid: HTMLVideoElement = document.querySelector(`#vid${currentVid}`);
		vid.play();
	}

	onMount(async () => {
		const vid: HTMLVideoElement = document.querySelector(`#vid0`);
		vid.play();
	});

	export let scrollEvent: any;
	
</script>

<Carousel perPage="1" on:change={change}>
	<span class="control" slot="left-control">
		<ChevronLeftIcon />
	</span>
	{#each projects as project}
		<div class="slide-content">
			<video autoplay={false} muted={true} loop class="vid" id={project.id}>
				<source src={project.media} type="video/webm" />
				<source src={project.mediaAlt} type="video/mp4" />
				Sorry, your browser doesn't support embedded videos.
			</video>
			<!-- <video [autoplay]="false" [muted]="true" [loop]="true" class="vid" [id]="project.id">
                <source [src]="project.media" type="video/webm">
                <source [src]="project.mediaAlt" type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
            <div class="info">
                <h3 class="proj" *ngIf="showInfo" @OutIn><a [href]="project.link"
                    target="_blank">{project.name}</a></h3>
                <p class="desc" *ngIf="showInfo" @InOut>{project.description}</p>
            </div> -->
		</div>
	{/each}
	<span class="control" slot="right-control">
		<ChevronRightIcon />
	</span>
</Carousel>

<style>
	:global(.carousel),
	:global(.slides) {
		height: 100%;
	}

	.slide-content {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.vid {
		height: 92vh;
	}
</style>
