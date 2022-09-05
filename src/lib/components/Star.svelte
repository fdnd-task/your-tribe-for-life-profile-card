<script lang="ts">
	export let cx: number;
	export let cy: number;
	export let radius: string;

	const maxSpeed = 1.5;
	const minSpeed = 0.9;
	const pulseSpeed = Math.round((Math.random() * (maxSpeed - minSpeed + 1) + minSpeed) * 100) / 100;

	const minPulse = 1.8;
	const pulseDistance = 0.6;
	const maxPulse = minPulse + pulseDistance;
</script>

<circle {cx} {cy} r={radius} fill="var(--star)" class="star" />
<circle
	{cx}
	{cy}
	r={radius}
	fill="var(--star)"
	class="star pulsing light"
	style={`--speed: ${pulseSpeed}s; --mxPulse: ${minPulse}; transform-origin: ${cx}px ${cy}px`}
/>
<circle
	{cx}
	{cy}
	r={radius}
	fill="var(--star)"
	class="star pulsing lighter"
	style={`--speed: ${pulseSpeed}s; --mxPulse: ${maxPulse}; transform-origin: ${cx}px ${cy}px`}
/>

<style>
	@keyframes pulse {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(var(--mxPulse));
		}
	}

	.star {
		position: relative;
		opacity: 1;
	}

	.pulsing {
		animation: pulse var(--speed) ease-out infinite forwards alternate;
	}

	.light {
		opacity: 0.4;
	}

	.lighter {
		opacity: 0.2;
	}
</style>
