import {ApiGet, ApiPost} from "@/services/api.js";

const signIn = ({username, password}) => {
    return ApiPost('sign-in', {username, password})
}

const self = () => {
    return ApiGet('self')
}

export {
    signIn,
    self
}
