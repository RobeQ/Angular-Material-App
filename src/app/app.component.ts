import { Component } from '@angular/core';
import { DoneChangedEventArgs } from './done/done.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-demo';
  isChecked = true;

  onDoneChanged(eventArgs: DoneChangedEventArgs) {
    console.log("Done changed: ", eventArgs.newValue);
  }
}
