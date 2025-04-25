addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => {
        console.log(err);
        return new Response(err.stack, { status: 500 })
      }
    )
  );
});


async function handleRequest(request) {
  const email = req.query.email;
  const emailList = ["testaccess021@yopmail.com"];
  if (
    email.match(/scuser.*@mheqa\.com$/) ||
    email.match(/.*@mailinator\.com$/) ||
    emailList.includes(email)
  ) {
    count++;
    const data = {
      UserId: `100054726${count}`,
      UserProfileData: {
        Username: "test_access",
        FirstName: "Test",
        LastName: `Access ${count}`,
        Email: email,
        Address1: "1325 6th Avenue",
        Address2: null,
        City: "New York",
        State: "New York",
        StateCode: "NY",
        PostalCode: "10019",
        Country: "United States",
        CreationDate: "2024-05-10T18:06:59.23",
        UpdateDate: "2024-05-10T18:06:59.23",
      },
    };
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }
  return new Response(JSON.stringify({ message: "User not Found" }), {
    status: 404,
  });
}
