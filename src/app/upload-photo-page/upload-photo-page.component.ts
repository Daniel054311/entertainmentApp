import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './upload-photo-page.component.html',
  styleUrl: './upload-photo-page.component.css'
})
export class UploadPhotoPageComponent {
  profileUrl = "../../assets/user1.png";

  onselectFile(e: any): void {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.profileUrl = event.target.result;
      }
    }
  }

}
