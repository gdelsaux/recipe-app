import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerState = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitHeaderState(state: string) {
    this.headerState.emit(state)
  }

}
