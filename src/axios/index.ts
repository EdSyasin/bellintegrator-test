import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import MockAdapter from "axios-mock-adapter";
import getResultItems from "../services/mocking";

const apiUrl = process.env.API_URL;

if (!apiUrl){
    const mock = new MockAdapter(axios);

    mock.onGet("/items").reply(200, {
        items: getResultItems(),
    });
}

const config: AxiosRequestConfig = {
    baseURL: apiUrl || "http://localhost"
}

const instance: AxiosInstance = axios.create(config);

export default instance;

