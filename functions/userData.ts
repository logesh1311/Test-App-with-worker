export async function onRequestGet(request: any) {
  const data = {
    ip: request.headers.get('CF-Connecting-IP'),
    realip: request.headers.get('x-real-ip'),
    host: request.headers.get('host'),
    country: request.headers.get('cf-ipcountry'),
  }
  console.log(JSON.stringify(request))
  console.log(JSON.stringify(data))
  console.log(request.url)
  if(request.url.includes('getUserdata')){
    return new Response(JSON.stringify(data), {
      status: 200, headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200, headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}