// useChatSocket.js (custom hook)
import { useEffect, useRef, useState } from "react";

export default function useChatSocket(url) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    return () => socketRef.current.close();
  }, [url]);

  const sendMessage = (msg) => {
    socketRef.current.send(JSON.stringify(msg));
  };

  return { messages, sendMessage };
}
