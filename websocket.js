let clients = [];

Bun.serve({
  port: 8080,
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    message(ws, message) {
        clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(message);
            }
        });
    }, // a message is received
    open(ws) {
        clients.push(ws);
    }, // a socket is opened
    close(ws, code, message) {

    }, // a socket is closed
    drain(ws) {

    }, // the socket is ready to receive more data
  }, // handlers
});