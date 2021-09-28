import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuothComponent} from "./login/auoth/auoth.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";

const routes: Routes = [   { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path:'twofator', component:AuothComponent},
  {path:'accueil',component:AcceuilComponent}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
