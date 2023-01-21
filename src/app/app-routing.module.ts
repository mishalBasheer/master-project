import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './components/bottom-nav/communities/communities.component';
import { EventsComponent } from './components/bottom-nav/events/events.component';
import { FreelancersComponent } from './components/bottom-nav/freelancers/freelancers.component';
import { QuizComponent } from './components/bottom-nav/quiz/quiz.component';
import { RankListComponent } from './components/bottom-nav/rank-list/rank-list.component';
import { ReferencesComponent } from './components/bottom-nav/references/references.component';
import { RoadmapComponent } from './components/bottom-nav/roadmap/roadmap.component';
import { ContactComponent } from './components/top-nav/contact/contact.component';
import { ServicesComponent } from './components/top-nav/services/services.component';
import { TeamComponent } from './components/top-nav/team/team.component';
import { UserHomeComponent } from './components/top-nav/user-home/user-home.component';
import { AuthGuard } from './route-guard/auth-guard';

const routes: Routes = [
  {path:'',component:UserHomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'team',component:TeamComponent},
  {path:'references',component:ReferencesComponent,canActivate:[AuthGuard]},
  {path:'communities',component:CommunitiesComponent,canActivate:[AuthGuard]},
  {path:'events',component:EventsComponent,canActivate:[AuthGuard]},
  {path:'roadmap',component:RoadmapComponent,canActivate:[AuthGuard]},
  {path:'ranklist',component:RankListComponent,canActivate:[AuthGuard]},
  {path:'quiz',component:QuizComponent,canActivate:[AuthGuard]},
  {path:'freelancers',component:FreelancersComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
