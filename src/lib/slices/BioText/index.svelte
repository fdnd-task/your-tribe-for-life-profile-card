<script>
	/** @type {import("@prismicio/client").Content.BioTextSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
        <p>{item.bioline}</p>
    {/each}
</section>
