import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadPhotoPageComponent } from './upload-photo-page/upload-photo-page.component';
import { ContinuePageComponent } from './continue-page/continue-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-upload', component: UploadPhotoPageComponent },
  { path: 'continue-page', component: ContinuePageComponent },
  {path: 'app-dashboard', component: DashboardComponent}

];
