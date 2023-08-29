import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const myRoutes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponentComponent},
  {path:'service',component:ServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
