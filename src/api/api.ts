import axios from "axios";


 const instance = axios.create({
     withCredentials: true,
     baseURL : 'https://social-network.samuraijs.com/api/1.0/',
     headers : {
         "API-KEY" : "073b7768-1047-4300-9261-15aa59d3ed4d"
     }
 })

export const userAPI = {
    getUsers(currentPage : number,pageSize : number)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
},
    unFollow(id : number) {
        return instance.delete(`follow/${id}`)

    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId : number) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
     me(){
         return instance.get(`auth/me`)
     }
}
