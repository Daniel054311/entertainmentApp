import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ContinuePageComponent } from "../continue-page/continue-page.component";

@Component({
    selector: 'app-upload',
    standalone: true,
    templateUrl: './upload-photo-page.component.html',
    styleUrl: './upload-photo-page.component.css',
    imports: [RouterLinkActive, RouterLink, ContinuePageComponent]
})
export class UploadPhotoPageComponent {
  profileUrl = "../../assets/user1.png";

  isFileSelected = false;
  isLabelVisible = true;
  // Initially visible
  constructor(private router: Router) { }

  ngOnInit(): void { }

  onButtonClick() {
    this.router.navigate(["/continue-page"]);
}

  onselectFile(e: any): void {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.profileUrl = event.target.result;
        this.isFileSelected = true;
        this.isLabelVisible = false;
      }
    }
  }



}
