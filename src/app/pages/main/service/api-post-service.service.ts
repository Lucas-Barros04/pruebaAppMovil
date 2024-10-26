import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface posts {
  userId: number
  id: number
  title: string
  body: string
}


@Injectable({
  providedIn: 'root'
})
export class ApiPostServiceService {

  urlBase : string = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private http: HttpClient) { }

  getPosts():Observable<posts[]>{
    return this.http.get<posts[]>(this.urlBase)
  }
}
