<script>
	/** @type {import("@prismicio/client").Content.TextMainSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item}
		<p>{item.title}</p>
		{slice.primary.testtext[0].text}
	{/each}
</section>

<pre>
	<!-- {JSON.stringify(slice, null, 2)} -->
</pre>
