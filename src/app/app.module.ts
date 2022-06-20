import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ThemeComponent } from './components/theme/theme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';


const appRoutes:Routes = [
  {path: '', component: MainComponent},
  {path: 'skills', component: SkillsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SobreMiComponent,
    ThemeComponent,
    SkillsComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
