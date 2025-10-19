import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectCardComponent } from './components/project/project-card/project-card.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { ExperianceCardComponent } from './components/experiance/experiance-card/experiance-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { MonsterComponent } from './components/monster/monster.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ProjectCardComponent,
    ExperianceComponent,
    ExperianceCardComponent,
    ContactComponent,
    FooterComponent,
    SocialComponent,
    MonsterComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MonsterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
