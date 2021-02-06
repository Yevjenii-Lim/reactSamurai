import * as axios from "axios"


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "10c45fba-46b9-4d86-90c8-a324c2f4152b"
    }
})


export const getUsersApi = (currentPage = 1, pageSize = 5) => {
  return instance.get(`users?page=${currentPage}count=${2}`).then(response => response.data)
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


export const profileAPI = {
    getProfileApi: (id) => {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus: (userId) => {
        // console.log(userId)
        return instance.get('/profile/status/' + userId)
    },
    updateStatus: (text) => {
        return instance.put('/profile/status', {status: text})
    }
}

export const getProfileApi = (id) => {
    console.log('wrong method')
    // console.log(id)
    return profileAPI.getProfileApi(id)
}

// export const get