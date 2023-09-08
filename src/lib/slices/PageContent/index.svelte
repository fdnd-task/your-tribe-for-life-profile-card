<script>
	/** @type {import("@prismicio/client").Content.PageContentSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1>{slice.primary.textfield}</h1>
</section>
