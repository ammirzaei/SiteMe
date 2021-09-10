import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../../Shared/Auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'Message', component: MessageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AdminRoutingModule { }
