import { createClient } from '$lib/prismicio.js';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const page = await client.getByUID('page', 'home');

	return page.data;
}
