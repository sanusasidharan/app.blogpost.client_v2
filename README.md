# app.blogpost.client_v2
Sample Node JS  + Socket.IO  based Real time system


The Sample Node JS has two programs.

1. DummyFeeder.js which will create JSON request via a REST API.  

2. App.js this is the entry point of this application. This is Socket.IO and express based framework.
Socket.io server side listen for any connection and then invokes a node rest client to fetch the  json object and push it back
front end.

3. Index.html is the front end gui, which renders the JSON  object. All the updated gets automatically refreshed from the server.
The server push the updates to the front end. 
