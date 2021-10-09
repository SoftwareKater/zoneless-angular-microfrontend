import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'counter';

  public readonly state$ = new BehaviorSubject<{ counter: number }>({ counter: 0 });

  public onClick(): void {
    const counter = this.state$.value.counter + 1;
    this.state$.next({ counter });
    console.log('New counter value: ', counter);
  }
}
