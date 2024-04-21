export async function GET() {
	return new Response(null, {
		status: 301,
		headers: {
			Location: '/Samuel%20Morgan%20Resume%202024.pdf'
		}
	});
}
