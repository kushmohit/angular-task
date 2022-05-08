import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:''  ,redirectTo: '/about',pathMatch:'full'},
  {path:'home'  ,component:HomeComponent},
  { path: 'about', loadChildren: () => import('./about/about-module.module').then(m => m.AboutModuleModule) },
  { path: 'work', loadChildren: () => import('./work/work-module.module').then(m => m.WorkModuleModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
