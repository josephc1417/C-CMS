import { createClient } from "contentful";

const client = createClient({
      space: 'kxu62xdyg59p ',
      environment : 'master',
      accessToken: 'ZgPvqpleE7uEAe4Q0v6xGmDxB3mtp99znLuaY_itVyk',
});

client.getEntries({content_type: 'projects' })
      .then (response => console.log(response)) ; 