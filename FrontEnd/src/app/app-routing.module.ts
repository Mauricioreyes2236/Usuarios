import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  { path:'', redirectTo: '/bienvenido', pathMatch:'full'},
  { path: 'bienvenido', component: BienvenidaComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo: '/bienvenido', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }