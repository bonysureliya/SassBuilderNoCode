import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'learn';
  sigtest = signal(0)

  clik() {
    console.log("clikkkk")
    this.sigtest.update((val) => val+1)
  }
}
