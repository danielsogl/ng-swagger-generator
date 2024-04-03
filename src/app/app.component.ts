import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetService } from "api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-swagger-generator';

  private client = inject(PetService);

  constructor() {
    this.client.getPetById({ petId: 1 }).subscribe(pet => {
      console.log(pet);
    });
  }
}
