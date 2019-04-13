import axios from "axios";
import router from "./router";

axios.interceptors.request.use((config) => {
    const headers = {
        'rad_access_token': localStorage.getItem("rad_access_token")
    };
    config.headers = headers;
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        router.push({path:"/", query:{reason: "登陆超时!"}});
        localStorage.removeItem("rad_access_token");
    }
    if (error.response.status === 403) {
        alert("权限不足不允许操作!");
    }
    return Promise.reject(error);
});

export default axios;
