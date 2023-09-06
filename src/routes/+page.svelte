<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'

	export let data;

    let isFlipped = false

    function flipCard() {
        isFlipped = !isFlipped
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="card" class:is-flipped={isFlipped} on:click={flipCard}>
    <SliceZone slices={data.slices} {components}/>
</section>


<!-- <pre>
    {JSON.stringify(data.slices, null, 2)}
</pre> -->

<style>
    .card{
        width: 85%;
        height: 100%;
        max-width: 20rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transition: transform 0.8s ease-in-out;
        transform-origin: center right;
        position: relative;
    }

    .is-flipped{
        transform: translateX(-100%) rotateY(-180deg);
    }
</style>