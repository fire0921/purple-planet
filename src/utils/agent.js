import axios from "axios";
import { config } from "../config/apiServer.js";

const API_ROOT = config.baseUrl;

const agent = axios.create({
	baseURL: API_ROOT,
	withCredentials: true
});

export default agent;

