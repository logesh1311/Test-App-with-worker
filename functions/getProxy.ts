
export async function onRequestGet(event: any) {
  const proxyJson = require('../src/proxy.json')
  console.log(JSON.stringify(event))
  return new Response(JSON.stringify(proxyJson),
  {
     headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  );
}