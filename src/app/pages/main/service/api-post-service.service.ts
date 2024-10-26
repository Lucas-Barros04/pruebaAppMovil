import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface posts {
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

  getPosts():Observable<posts[]>{   //Utilizamos "observable<posts[]>" para hacer un tipado mas fuerte, estos van embace a su contrato "posts" que contiene todo lo que podra mostrar.
    return this.http.get<posts[]>(this.urlBase)  //utilizamos httpCliente para poder utilizar metodos como get, post, delete, etc. 
  }
}
