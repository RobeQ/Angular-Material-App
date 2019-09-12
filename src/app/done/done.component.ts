import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  @Input('isDone') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("ON CLICK");
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface DoneChangedEventArgs {
  newValue: boolean
}
