<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import { calculateAngle } from '$lib/card.js'
    import { onMount } from 'svelte'

	export let data;

    let mainCard

    let isFlipped = false

    function flipCard() {
        isFlipped = !isFlipped
    }

    onMount(() => {
        let cardFront = mainCard.querySelector('.cardFront')
        let cardBack = mainCard.querySelector('.cardBack')
        let glare = mainCard.querySelector('.glare')

        // let windowInfo = {
        //     innerWidth: window.innerWidth,
        //     innerHeight: window.innerHeight
        // }
        // console.log(window.innerWidth)

        cardFront.addEventListener('mouseenter', (e) => {
            calculateAngle(e, mainCard, cardFront, cardBack, glare)
        })

        cardFront.addEventListener('mousemove', (e) => {
            calculateAngle(e, mainCard, cardFront, cardBack, glare)
        })

        cardFront.addEventListener('mouseleave', (e) => {
            let shadow = `rgba(0, 0, 0, 0.3)`
            cardFront.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`
            // cardBack.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`
            cardFront.style.filter = `drop-shadow(0px 10px 15px ${shadow})`
        })

    })

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="card" class:is-flipped={isFlipped} on:click={flipCard} bind:this={mainCard}>
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
        transition: all 0.5s ease-out;
        /* transform-origin: center right; */
        position: relative;
    }

    .is-flipped{
        transform: rotateY(180deg);
    }
</style>