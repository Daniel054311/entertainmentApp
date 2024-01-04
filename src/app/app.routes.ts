import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadPhotoPageComponent } from './upload-photo-page/upload-photo-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-upload', component: UploadPhotoPageComponent}

];
