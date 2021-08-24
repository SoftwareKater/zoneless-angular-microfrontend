import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  public ngDoBootstrap(): void {
    if (!customElements.get('counter-app')) {
      const counterDisplay = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('counter-app', counterDisplay);
    }
  }
}
