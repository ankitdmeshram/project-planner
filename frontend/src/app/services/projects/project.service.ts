import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  url:string = ""

  createProject = () => {
    return this.http.post(this.url, '').subscribe(( ) => {

    })
  }

  Project = () => {
    return this.http.post(this.url, '')
    .subscribe((res) => {

    })
  }

  updateProject = () => {
    return this.http.post(this.url, '')
    .subscribe((res) => {

    })
  }

  deleteProject = () => {
    return this.http.post(this.url, '')
    .subscribe((res) => {

    })
  }


  createTask = () => {
    return this.http.post(this.url, '')
    .subscribe((res) => {

    })
  }

  projectTask = () => {
    return this.http.post(this.url, '')
    .subscribe((res) => {

    })
  }

  updateTask = ()  => {
    return this.http.post(this.url, '')
    .subscribe((res) => {
      
    })
  }
  deleteTask = () => {
    return this.http.post(this.url, '')
    .subscribe((res) => {

    })
  }

}
