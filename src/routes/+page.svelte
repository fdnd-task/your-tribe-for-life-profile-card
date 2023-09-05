<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'

	export let data;
</script>

<SliceZone slices={data.slices} {components}/>

<!-- <pre>
    {JSON.stringify(data.slices, null, 2)}
</pre> -->