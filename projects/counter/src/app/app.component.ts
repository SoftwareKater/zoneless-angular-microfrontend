import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';

  public state = { counter: 0 };

  constructor(private readonly cdr: ChangeDetectorRef) { }

  public onClick(): void {
    this.state.counter += 1;
    console.log('New counter value: ', this.state.counter);
    this.cdr.detectChanges();
  }
}
