import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CasesComponent } from './cases/cases.component';
import { SkillsComponent } from './home/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Cases', component: CasesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
