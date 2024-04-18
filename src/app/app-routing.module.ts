import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
// import { SingleviewComponent } from './pages/singleview/singleview.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', title: 'Home page', component: HomeComponent },
  { path: 'about', title: 'About page', component: AboutComponent },
  // { path: 'singleview/:id', title: 'single stdent', component: SingleviewComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
