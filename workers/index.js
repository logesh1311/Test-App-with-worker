addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event).catch(
      (err) => {console.log(err);
        return new Response(err.stack, { status: 500 })}
    )
  );
});


async function handleRequest(event) {
  const userCon = event.request.headers.get('cf-ipcountry')
  const userIp = event.request.headers.get('CF-Connecting-IP')
  const data = {
    ip: event.request.headers.get('CF-Connecting-IP'),
    realip: event.request.headers.get('x-real-ip'),
    host: event.request.headers.get('host'),
    country: event.request.headers.get('cf-ipcountry'),

  }
  console.log(JSON.stringify(event))
  console.log(JSON.stringify(data))
  return new Response('Your ip is ' + userIp + ' region '+ userCon, {status:200});
}