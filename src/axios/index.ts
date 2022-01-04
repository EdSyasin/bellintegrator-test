import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import MockAdapter from "axios-mock-adapter";
import getResultItems from "../services/mocking";

if (process.env.NODE_ENV === "development"){
    const mock = new MockAdapter(axios);

    mock.onGet("/items").reply(200, {
        items: getResultItems(),
    });
}


const config: AxiosRequestConfig = {
    baseURL: "http://localhost:3001"
}

const instance: AxiosInstance = axios.create(config);

export default instance;

