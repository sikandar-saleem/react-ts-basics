import apiClient from './api-user'

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string

  constructor(endpoint: string){
    this.endpoint = endpoint
  }
  
  getAll<T>(){
    const controller = new AbortController();

    // This return a promise and I store in request
    const request = apiClient.get<T[]>(`${this.endpoint}`, { signal: controller.signal })

    // Here I return multiple values, here use callback otherwise this method invoked immediately
    // but we want to call this method in other component on when we need call this method
    return { request, cancel: () => controller.abort() }
  }
  create<T>(entity: T){
    // This return a promise
    return apiClient.post(`${this.endpoint}`, entity)
  }

  update<T extends Entity>(id: number, updatedEntity: T){
    // If we want to use updatedEntity.id then we need to extend from Entitiy to tell it have id attribute
    return apiClient.patch(`${this.endpoint}/${id}`, updatedEntity)
  }

  delete(id: number){
    return apiClient.delete(`${this.endpoint}/${id}`)
  }
}

export default (endpoint: string) => new HttpService(endpoint)
