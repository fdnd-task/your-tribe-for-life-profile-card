<script>
	/** @type {import('./$types').PageData} */
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'

	export let data;
</script>

<!-- <h1>{data.page.data.example_title}</h1> -->

<SliceZone slices={data.slices} {components}/>

<pre>
    <!-- {JSON.stringify(data, null, 2)} -->
    {JSON.stringify(data.slices, null, 2)}
</pre>