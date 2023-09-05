import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const page = await client.getByUID('page', 'home');

    console.log('INFO',page);

	return page.data;
    // console.log(page.data.slices);
}