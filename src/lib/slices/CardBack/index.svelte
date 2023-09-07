<script>
	/** @type {import("@prismicio/client").Content.CardBackSlice} */
    import { PrismicImage } from "@prismicio/svelte";
    let cardBack

	export let slice;
</script>

<section class="cardBack" bind:this={cardBack} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <div class="img-wrapper">
        <PrismicImage class="image" field={slice.primary.picture} width=200 height=300 />
    </div>

    <article>
        {#each slice.items as item}
            <p>{item.infoline}</p>
        {/each}
    </article>
</section>

<style>
    /* Back of card */
    section {
        width: 100%;
        height: 34rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        position: absolute;
        border-radius: var(--card-border-radius);
        background: radial-gradient(circle, rgba(4,5,25,0.3) 0%, rgba(255,255,255,0.1) 100%);
        backdrop-filter: blur(10px);
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.25);
    }

    section:before{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: var(--card-border-radius);
        padding: 3px;
        background: var(--card-bg);
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
    }
</style>
