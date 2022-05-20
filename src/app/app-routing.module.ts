import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { MembersComponent } from './components/members/members.component';
import { MitgliedantragComponent } from './components/mitgliedantrag/mitgliedantrag.component';
import { SpendenComponent } from './components/spenden/spenden.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'member', component: MembersComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'mitgliedantrag', component: MitgliedantragComponent },
  { path: 'donate', component: SpendenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
