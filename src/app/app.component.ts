import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet ,Router, RouterLinkActive} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from "./home/home.component";
import { UploadPhotoPageComponent } from './upload-photo-page/upload-photo-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink, RouterLinkActive,UploadPhotoPageComponent, HomeComponent]
})
export class AppComponent {
  title = 'entertainmentApp';


}
