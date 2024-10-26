import { Component, OnInit } from '@angular/core';
import { ApiPostServiceService } from '../../service/api-post-service.service';

@Component({
  selector: 'app-mostrar-posts',
  templateUrl: './mostrar-posts.component.html',
  styleUrls: ['./mostrar-posts.component.scss'],
})
export class MostrarPostsComponent  implements OnInit {
  posts: any = []
  constructor(private apiPostService: ApiPostServiceService) { }

  ngOnInit() {
    const _posts = localStorage.getItem('post')
    if(_posts){
      const valorLocalPosts = JSON.parse(_posts)
      this.posts = valorLocalPosts
      console.log('usando valores locales') 
    }else{
      this.apiPostService.getPosts().subscribe({      //para poder obtener los valores de la api necesitamos subscribirnos al resultado que trae la api para poder visualizarlo,
        next: (response: any)=>{                      // Luego usamos la palabra reservada "next" que esta permite resivir los datos y guardarlo en Una variable que le puse "response",
          console.log(response)                       // es necesario usar any ya que typeScript no sabe que es lo que va a llegar, esto lo hace por seguridad, le pasamos el valor a la variable  
          this.posts = response                       // posts para que esto sea mostrado en pantalla, 
          localStorage.setItem('post', JSON.stringify(this.posts))    //usamos localStorage para guardar en local, este resive 2 string por eso utilizamos Json.stringifi, para que el array de datos se convierta en string, la llave que guardo los datos en local se la pasamos a una variable para que lo resiva
          console.log('usando la api')                      //luego esa variable le hacemos el Json.parse para que el valor que traiga está se transforme a Json y este valor se lo pasamos a la variable Posts
        },error:(err)=>{                                //ahora si el usuario recarga la página estará usando los valores locales.
          console.log(err)
        }
      })
    }
    
  }

}
