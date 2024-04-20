import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';  

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home page', component: HomeComponent },
  { path: 'about', title: 'About page', component: AboutComponent },
  { path: 'edit-page/:id', component: EditPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
