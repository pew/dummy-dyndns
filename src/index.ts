export default {
  async fetch(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url)
    const v4 = searchParams.get('v4')
    const v6 = searchParams.get('v6')

    return new Response(`good${v4 ? ` ${v4}` : ''}${v6 ? ` ${v6}` : ''}`, { status: 200 })
  },
}
