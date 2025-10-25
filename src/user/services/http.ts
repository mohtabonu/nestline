import axios from "axios";


export const http = axios.create({ baseURL: "http://45.138.159.183:5080/api" });