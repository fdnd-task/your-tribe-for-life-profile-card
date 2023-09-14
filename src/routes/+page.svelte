<script>
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data
</script>
<body>
<div class="profile card">
    <h1>{data.name}</h1>
    <section>
        <SliceZone slices={data.slices} {components} />
    </section>
</div>
</body>