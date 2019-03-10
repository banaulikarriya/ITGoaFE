import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './core/auth/auth.service';
import { PostsComponent } from './posts/posts.component';
import { ProfileDialogComponent } from './dialogs/profile-dialog/profile-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    PostsComponent,
    ProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    // RouterModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    ProfileDialogComponent
  ]
})
export class AppModule { }
