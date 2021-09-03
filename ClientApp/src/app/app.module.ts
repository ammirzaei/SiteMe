import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { AboutComponent } from './Components/Home/about/about.component';
import { ProfileComponent } from './Components/Home/profile/profile.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { SkillsComponent } from './Components/Home/skills/skills.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './Components/Home/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SamplesComponent } from './Components/Home/samples/samples.component';
import { AuthComponent } from './Components/Admin/auth/auth.component';
import { AuthService } from './Shared/Auth/auth.service';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { ContactService } from './Shared/Contact/contact.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    LoadingComponent,
    SkillsComponent,
    ContactComponent,
    SamplesComponent,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
