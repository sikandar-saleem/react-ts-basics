import create from './generic-http-service'

// With export default I can import it with any name
export default create('/users')

export interface User {
  id: number;
  name: string;
}

// class UserService{
//   getAllUsers(){
//     const controller = new AbortController();

//     // This return a promise and I store in request
//     const request = apiClient.get<User[]>("/users", { signal: controller.signal })

//     // Here I return multiple values, here use callback otherwise this method invoked immediately
//     // but we want to call this method in other component on when we need call this method
//     return { request, cancel: () => controller.abort() }
//   }
//   createUser(user: User){
//     // This return a promise
//     return apiClient.post("/users", user)
//   }

//   updateUser(id: number, updatedUser: User){
//     return apiClient.patch(`/users/${id}`, updatedUser)
//   }

//   deleteUser(id: number){
//     return apiClient.delete(`/users/${id}`)
//   }
// }
