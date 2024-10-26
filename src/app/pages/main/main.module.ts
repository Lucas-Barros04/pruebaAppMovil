import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { MostrarPostsComponent } from './component/mostrar-posts/mostrar-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiPostServiceService } from './service/api-post-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MainPage, MostrarPostsComponent],
  providers: [ApiPostServiceService]
})
export class MainPageModule {}
