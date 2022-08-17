import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'projectspage', component: ProjectspageComponent},
  {path: 'blogpage', component: BlogpageComponent},
  {path: 'blogpost/:id', component: BlogpostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
