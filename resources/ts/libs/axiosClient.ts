import axios, { AxiosInstance } from "axios";
// let token = document.head.querySelector('meta[name="csrf-token"]')!;
export const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.MIX_API_ENDPOINT,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        // "X-CSRF-TOKEN": token.content,
    },
});
