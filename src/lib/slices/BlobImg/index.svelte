<script>
	/** @type {import("@prismicio/client").Content.BlobImgSlice} */
    import { PrismicImage } from "@prismicio/svelte";
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <PrismicImage field={slice.primary.image} width=200 height=300 />
</section>
