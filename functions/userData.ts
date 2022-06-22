let count = 0

export async function onRequestGet(event: any) {
  const data = {
    ip: event.request.headers.get('CF-Connecting-IP'),
    realip: event.request.headers.get('x-real-ip'),
    host: event.request.headers.get('host'),
    country: event.request.headers.get('cf-ipcountry'),
    requestCount: ++count,
  }
  console.log(JSON.stringify(event.request))
  console.log(JSON.stringify(data))
  return new Response(JSON.stringify(data), {
    status: 200, headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}