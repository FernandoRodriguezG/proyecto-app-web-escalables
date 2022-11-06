import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { CreateVideogameComponent } from './create-videogame/create-videogame.component';
import { DetailReviewComponent } from './detail-review/detail-review.component';
import { DetailVideogameComponent } from './detail-videogame/detail-videogame.component';
import { IndexReviewsComponent } from './index-reviews/index-reviews.component';
import { IndexVideojuegosComponent } from './index-videojuegos/index-videojuegos.component';

const routes: Routes = [
  { 
    path: 'videojuegos', 
    component: IndexVideojuegosComponent 
  },
  { 
    path: 'reseñas', 
    component: IndexReviewsComponent
  },
  {
    path:'videojuegos/nuevo',
    component: CreateVideogameComponent
  },
  {
    path:'reseñas/nueva',
    component: CreateReviewComponent
  },
  {
    path:'videojuegos/nuevo/:id',
    component: CreateVideogameComponent
  },
  {
    path:'reseñas/nueva/:id',
    component: CreateReviewComponent
  },
  {
    path:'videojuegos/:id',
    component: DetailVideogameComponent
  },
  {
    path:'reseñas/:id',
    component: DetailReviewComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
