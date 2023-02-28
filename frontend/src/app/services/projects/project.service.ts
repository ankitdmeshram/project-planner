import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  url:string = "https://project-planner-backend.ankitmeshram.in/api"

  createProject = (data:any) => {
    console.log(data)

    return this.http.post(`${this.url}/project/create_project`, data)
  }

  Project = (data:any) => {
    data = {
      email: data.email
    }
    return this.http.post(`${this.url}/projects`, data)
  }

  updateProject = (data:any) => {
    return this.http.post(`${this.url}/project/update_project`, data)
  }

  deleteProject = (data:any) => {
    data = {
      id: data.id
    }
    return this.http.post(`${this.url}/project/delete_project`, data)
  }

  createTask = (data:any) => {
    return this.http.post(`${this.url}/projects_details/create_task`, data)
  }

  projectTask = (data:any) => {
    return this.http.post(`${this.url}/projects_details`, data)
  }

  updateTask = (data: any)  => {
    return this.http.post(`${this.url}/projects_details/update_task`, data)
  }
  
  deleteTask = (data: any) => {
    return this.http.post(`${this.url}/projects_details/delete_task`, data)
  }

}
