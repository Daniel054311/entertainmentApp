import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'continue-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './continue-page.component.html',
  styleUrl: './continue-page.component.css'
})
export class ContinuePageComponent {

  constructor(private router: Router) { }
  ngOnInit(): void { }
  onButtonClick() {
  this.router.navigate(['/app-dashboard'])
}
}
