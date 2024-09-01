const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let content = '';

wss.on('connection', (ws) => {
    // Send the current content to the new client
    ws.send(JSON.stringify({ type: 'init', content }));

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'update') {
            content = data.content;
            // Broadcast the update to all clients
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'update', content }));
                }
            });
        }
    });
});