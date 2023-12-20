import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// do something cool with the event
	const response = await resolve(event);
	// do something cool with the response
	return response;
};
