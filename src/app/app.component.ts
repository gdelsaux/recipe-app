import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentState: string = 'recipes';

  switchState(state: string) {
    this.currentState = state;
  }
}
