export default {
  async fetch(request: Request): Promise<Response> {
    const { headers } = request
    const ip = headers.get('cf-connecting-ip')

    const checkIP = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/
    if (ip && checkIP.test(ip)) {
      return new Response('good 127.0.0.1', { status: 200 })
    }
    return new Response('good ::1', { status: 200 })
  },
}
