import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogService } from './services/blog.service';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { MarkdownModule } from 'ngx-markdown'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    BlogpageComponent,
    ProjectspageComponent,
    BlogpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MarkdownModule.forRoot()
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
