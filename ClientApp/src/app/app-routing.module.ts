import { ContactComponent } from './Components/contact/contact.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SamplesComponent } from './Components/samples/samples.component';
import { AuthGuard } from './Shared/Auth/auth.guard';

import { NgModule } from '@angular/core';
import { AuthComponent } from './Components/auth/auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: ProfileComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Skills', component: SkillsComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'Samples', component: SamplesComponent }
    ]
  },
  { path: 'Admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'Auth', component: AuthComponent },
  { path: 'Home', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
