import {ApiGet, ApiPost} from "@/services/api.js";

const register = ({username, password}) => {
    return ApiPost('register', {username, password})
}

const self = () => {
    return ApiGet('self')
}

export {
    register,
    self
}
