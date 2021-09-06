import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../../../Shared/Admin/admin.service';
import { GetInfo } from './../../../Shared/Admin/Admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _router: Router, private _AdminService: AdminService) { }

  ngOnInit(): void {
    this._AdminService.GetAdminPanelInfo().subscribe((success: any) => {
      this.PanelInfo = success;
    });
    this._AdminService.ShareShowMessage.subscribe(res => {
      this.PanelInfo.countMessage -= 1;
    });
  }
  PanelInfo: GetInfo = new GetInfo();
  Logout() {
    localStorage.removeItem('token');
    this._router.navigate(["/"]);
  }
}
