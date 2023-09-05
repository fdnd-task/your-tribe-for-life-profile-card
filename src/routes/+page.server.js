import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const page = await client.getByUID('index', 'homepage', {'fetchLinks': 'TextMain.title'});
    
    console.log('pipo',page);

	return page.data;
    // console.log(page.data.slices);
}