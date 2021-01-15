import * as axios from "axios"


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "10c45fba-46b9-4d86-90c8-a324c2f4152b"
    }
})


export const getUsersApi = (currentPage = 1, pageSize = 5) => {
  return instance.get(`users?page=${currentPage}count=${pageSize}`).then(response => response.data)
}


export const getUnfollowApi = (id) => {
    return instance.delete(`follow/${id}`).then(response => response.data)
}

export const getFollowApi = (id) => {
    return instance.post(`follow/${id}`).then(response => response.data)
}

export const getAuthApi = () => {
    return instance.get('auth/me').then(response => response.data)
}

export const getProfileApi = (id) => {
    return instance.get(`profile/${id}`).then(response => response.data)
}
