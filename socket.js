import { io } from "socket.io-client";
import config from "./config";

const socket = io(config.apiBaseUrl());

export default socket;
