import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet ,Router, RouterLinkActive} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  private _emoji: string = '../../assets/insert_emoji.png';
  public get emoji(): string {
    return this._emoji;
  }
  public set emoji(value: string) {
    this._emoji = value;
  }

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onButtonClick() {
    this.router.navigate(["/app-upload"]);
}

}
