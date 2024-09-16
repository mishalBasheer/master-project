import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth-interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserHomeComponent } from './components/top-nav/user-home/user-home.component';
import { ServicesComponent } from './components/top-nav/services/services.component';
import { ContactComponent } from './components/top-nav/contact/contact.component';
import { TeamComponent } from './components/top-nav/team/team.component';
import { ReferencesComponent } from './components/bottom-nav/references/references.component';
import { CommunitiesComponent } from './components/bottom-nav/communities/communities.component';
import { EventsComponent } from './components/bottom-nav/events/events.component';
import { RoadmapComponent } from './components/bottom-nav/roadmap/roadmap.component';
import { RankListComponent } from './components/bottom-nav/rank-list/rank-list.component';
import { QuizComponent } from './components/bottom-nav/quiz/quiz.component';
import { FreelancersComponent } from './components/bottom-nav/freelancers/freelancers.component';
import { ImageCardComponent } from './components/reusable/image-card/image-card.component';
import { SignupComponent } from './components/top-nav/signup/signup.component';
import { LoginComponent } from './components/top-nav/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserHomeComponent,
    ServicesComponent,
    ContactComponent,
    TeamComponent,
    ReferencesComponent,
    CommunitiesComponent,
    EventsComponent,
    RoadmapComponent,
    RankListComponent,
    QuizComponent,
    FreelancersComponent,
    ImageCardComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
