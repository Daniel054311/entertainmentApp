import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet ,Router, RouterLinkActive} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // applyForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  emoji: string = '../../assets/insert_emoji.png'





  constructor(private router: Router) { }

  ngOnInit(): void { }

  onButtonClick() {
    this.router.navigate(["/app-upload"]);
}

}
