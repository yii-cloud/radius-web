import axios from "axios";
import router from "./router";
const axiosHttp = axios.create({});

axiosHttp.interceptors.request.use((config) => {
    const headers = {
        'rad_access_token': localStorage.getItem("rad_access_token")
    };
    config.headers = headers;
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
axiosHttp.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response;
}, (error) => {
    // 对响应错误做点什么
    if (error.response.status === 401) {
        alert("登陆超时，请重新登陆!");
        router.push("/");
        localStorage.removeItem("rad_access_token");
    }
    if (error.response.status === 403) {
        alert("权限不足不允许操作!");
    }
    axios.CancelToken.source().cancel();
    return new Promise(() => {});
});

export default axiosHttp;
