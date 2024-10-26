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
      this.apiPostService.getPosts().subscribe({
        next: (response: any)=>{
          console.log(response)
          this.posts = response
          localStorage.setItem('post', JSON.stringify(this.posts))
          console.log('usando la api')
        },error:(err)=>{
          console.log(err)
        }
      })
    }
    
  }

}
