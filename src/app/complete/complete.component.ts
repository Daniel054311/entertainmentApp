import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-complete',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.css'
})
export class CompleteComponent {

  constructor(public router: Router) { }
  onInit(): void { }

  onButtonClick() {
    this.router.navigate(['']);
  }

}
