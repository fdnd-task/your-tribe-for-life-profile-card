<script>
	/** @type {import("@prismicio/client").Content.TestSliceSlice} */
	import { PrismicImage } from "@prismicio/svelte";

	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<PrismicImage field={item.imagefield} width=200 height=300 />
	{/each}

</section>
