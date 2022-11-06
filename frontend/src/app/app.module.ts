import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexVideojuegosComponent } from './index-videojuegos/index-videojuegos.component';
import { IndexReviewsComponent } from './index-reviews/index-reviews.component';
import { CreateVideogameComponent } from './create-videogame/create-videogame.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { DetailVideogameComponent } from './detail-videogame/detail-videogame.component';
import { DetailReviewComponent } from './detail-review/detail-review.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    IndexVideojuegosComponent,
    IndexReviewsComponent,
    CreateVideogameComponent,
    CreateReviewComponent,
    DetailVideogameComponent,
    DetailReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
