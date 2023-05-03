const ws = new WebSocket("ws://localhost:3000");

        ws.addEventListener("message", function(event) {
            const data = JSON.parse(event.data);

            if (data.type === "message") {
                addMessage(data.data);
            }
        });

        
        function sendMessage() {
            const message = document.getElementById("message").value;

            if (!message) return false;

            ws.send(JSON.stringify({ type: "message", data: message }));

            addMessage(message);
            document.getElementById("message").value = "";
        }
        function addMessage(message) {
            const node = document.createElement("P");
            const text = document.createTextNode(message);

            node.appendChild(text);
            node.classList.add("text-gray-700", "py-1");

            document.getElementById("chat").appendChild(node);
        }