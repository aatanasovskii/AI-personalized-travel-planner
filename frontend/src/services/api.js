import axios from "axios";
import Store from "../store";
import router from "../router";

let URL = 'http://localhost:3000/';

if (import.meta.env.VITE_APP_API_URL) {
    URL = import.meta.env.VITE_APP_API_URL;
}

const client = axios.create();

client.interceptors.response.use(undefined, (err) => {
    const error = err.response;

    if (error.status === 401) {
        Store.dispatch('auth/signOut')
            .then(() => {
                router.push({name: 'SignInPage'})
            })
    }
    return Promise.reject(error?.data?.result?.errors || error.message || error.msg);
})

const handleResponse = (data) => {
    if (data.code === 0) {
        return data.data ? data.data : {};
    }

    if (data.code === 501) {
        return Store.dispatch('auth/signOut')
            .then(() => {
                Store.commit('showSignInDialog', true);
                router.push('/').catch(() => {
                })
            })
    }

    return Promise.reject({message: data?.msg})
}

const ApiGet = (url, data) => {
    return client.get(`${URL}${url}`, {
        params: data,
        headers: {
            Authorization: Store.state.auth.accessToken
        }
    })
        .then(({data}) => data.data);
}

const OPTIONS = (url, data) => {
    return client.options(`${URL}${url}`, {
        params: data,
        headers: {
            Authorization: Store.state.auth.accessToken
        }
    })
        .then(({data}) => data.data);
}


const ApiPost = (url, data, headers = {}, params) => {
    return client.post(`${URL}${url}`,
        data,
        {
            params: params,
            headers: {
                ...headers,
                Authorization: Store.state.auth.accessToken

            }
        }
    )
        .then(({data}) => data.data)
        .catch(error => {
            console.log("error: ", error);
            return Promise.reject(error);
        });
}

const ApiPut = (url, data, headers = {}) => {
    return client.put(`${URL}${url}`,
        data,
        {
            headers: {
                ...headers,
                Authorization: Store.state.auth.accessToken
            }
        }
    )
        .then(({data}) => data.data);
}


const DELETE = (url, id) => {
    return client.delete(`${URL}${url}/${id}`,
        {
            headers: {
                Authorization: Store.state.auth.accessToken
            }
        }
    )
        .then(result => handleResponse(result.data))
}


export {
    ApiPost,
    ApiGet,
    DELETE,
    ApiPut,
    OPTIONS
}
