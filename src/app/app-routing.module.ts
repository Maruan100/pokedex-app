import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {  path: '', component: LoginComponent },
  {  path: 'pokedex', component: PokedexComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
