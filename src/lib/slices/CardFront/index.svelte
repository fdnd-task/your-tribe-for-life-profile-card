<script>
	/** @type {import("@prismicio/client").Content.CardFrontSlice} */

    let cardFront, glare

	export let slice;
</script>

<section class="cardFront" bind:this={cardFront} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <span class="glare" bind:this={glare}></span>
	<h1>{slice.primary.heading}</h1>
</section>


<style>
    /* Front of card */
    section{
        width: 100%;
        height: 34rem;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        position: absolute;
        background: radial-gradient(circle, rgba(4,5,25,0.3) 0%, rgba(255,255,255,0.1) 100%);
        border-radius: var(--card-border-radius);
        backdrop-filter: blur(10px);
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.25);
        transition: all 0.15s ease-out;
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

    h1{
        color: white;
        opacity: 1;
    }

    section span{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 0.1s ease-out;
        opacity: 0.05;
        pointer-events: none;
        height: 100%;
        border-radius: 14px;
        z-index: 9999;
        mix-blend-mode: hard-light;
        background: radial-gradient(circle at 50% 50%, rgb(199 198 243), transparent);
    }
</style>
