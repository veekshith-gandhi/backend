<!-- @format -->

socket.io library : it is reliable as such ,even though client connection is lost it automaticaly reconnects and it has a fallback implementations

what is websocket ?
WebSocket is a technology that allows a client to establish two-way full-duplex communication with the server.

Short Polling or Ajax Polling is a technique when we have the client ping the server repeatedly, say, every 500ms (or over some fixed delay). That way, you get new data every 500ms:

Websockets connections can both send data to the browser and receive data from the browser. A good example of an application that could use websockets is a chat application.

SSE connections can only push data to the browser. Online stock quotes, or twitters updating timeline or feed are good examples of an application that could benefit from SSE.

AJAX - request → response. Creates a connection to the server, sends request headers with optional data, gets a response from the server, and closes the connection. Supported in all major browsers.

Long poll - request → wait → response. Creates a connection to the server but maitain keep-alive
connection open for some time during this period get the response from server,
and client has to reconnect periodically

WebSockets - client ↔ server. Create a TCP connection to the server, establish 2 way commnunication with server ex:CHAT APPLICATION

Server-Sent Events - client ← server. client establish long term connection to server , Only the server can send data to a client. EX TWITTER FEEDS
