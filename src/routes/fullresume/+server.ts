export async function GET() {
	return new Response(null, {
		status: 301,
		headers: {
			Location: 'https://docs.google.com/document/d/1pmVzgXfb-7HI-v5jELQV7r0TQPTy2AloCxadlO4fHKk'
		}
	});
}
