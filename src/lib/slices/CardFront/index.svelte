<script>
	/** @type {import("@prismicio/client").Content.CardFrontSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
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
        /* border-radius: var(--card-border-radius);
        border: 3px solid transparent;
        border-image-slice: 1;
        border-image-source: var(--card-bg);
        background: linear-gradient(var(--main-bg), var(--main-bg)) padding-box,
        linear-gradient(135deg, #D6863C 0%, #141765 100%) border-box; */
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
</style>
